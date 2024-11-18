#!/bin/bash

set -o errexit
set -o pipefail

source ../tools.sh

BUILD_ID=$((RANDOM % 7200 + 600))

finish() {
	kill_with_kids "$LT_TUNNEL_PID"
	kill_with_kids "$STREAM_PID"
}

curl -o ./LT.zip https://downloads.lambdatest.com/tunnel/v3/linux/64bit/LT_Linux.zip
unzip -o ./LT.zip
# Use BUILD_ID to set the tunnel name, instead of having to parse out a random uuid.
./LT --user "$LT_USER" --key "$LT_ACCESS_KEY" --tunnelName "$BUILD_ID" &
LT_TUNNEL_PID=$!

tap finish EXIT TERM INT

# Bundle the updated web code into the server codebase.
if [ -z "$SKIP_BUILD" ]; then
	echo "Bundling web code into server..."

	# Change to the root directory of the repository
	pushd "$(git rev-parse --show-toplevel)"

	./build/web/bundleWeb.sh >/dev/null

	popd
else
	echo "Skipping web build..."
fi

# Install the web test framework
if [ -z "$SKIP_BUILD" ]; then
	echo "Installing test dependencies..."
	npm install --quiet --no-progress

else
	echo "Skipping dependencies installation"
fi

set -o nounset

install_ffmpeg

start_owncast

npx lambdatest-cypress run --build-name "desktop-offline-" --tags "desktop,offline" --envs "tags=desktop" --build-identifier "$BUILD_ID" --specs "./cypress/e2e/offline/*.cy.js" --tname "$BUILD_ID" --autostart "false" --sync "true"
npx lambdatest-cypress run --build-name "mobile-offline-" --tags "mobile,offline" --envs "tags=mobile,CYPRESS_VIEWPORT_WIDTH=375,CYPRESS_VIEWPORT_HIEGHT=667" --build-identifier "$BUILD_ID" --specs "./cypress/e2e/offline/*.cy.js" --tname "$BUILD_ID" --autostart "false" --sync "true"

start_stream
sleep 20

npx lambdatest-cypress run --build-name "desktop-online-" --tags "desktop,online" --envs "tags=desktop" --build-identifier "$BUILD_ID" --specs "./cypress/e2e/online/*.cy.js" --tname "$BUILD_ID" --autostart "false" --sync "true"
npx lambdatest-cypress run --build-name "mobile-online-" --tags "mobile,online" --envs "tags=mobile,CYPRESS_VIEWPORT_WIDTH=375,CYPRESS_VIEWPORT_HIEGHT=667" --build-identifier "$BUILD_ID" --specs "./cypress/e2e/online/*.cy.js" --tname "$BUILD_ID" --autostart "false" --sync "true"

