(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5405],{48312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(63617)}])},63617:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return $e}});var r=n(85893),o=n(97183),i=n(4480),s=n(9008),a=n.n(s),l=n(67294),c=n(39370),u=n(94199),d=n(20550),p=n(80107),f=n(92910),m=n.n(f),h=o.Z.Header;function x(e){var t=e.name,n=void 0===t?"Your stream title":t,o=e.chatAvailable;return(0,r.jsxs)(h,{className:"".concat(m().header),children:[(0,r.jsxs)("div",{className:"".concat(m().logo),children:[(0,r.jsx)(p.C,{variant:"contrast"}),(0,r.jsx)("span",{children:n})]}),o&&(0,r.jsx)(p.w,{}),!o&&(0,r.jsx)(u.Z,{title:"Chat is available when the stream is live.",placement:"left",children:(0,r.jsx)(d.Z,{color:"processing",style:{cursor:"pointer"},children:"Chat offline"})})]})}var v=n(87412),g=n(52196),j=n(75347),_=n.n(j);function w(){var e=(0,i.sJ)(c.w4),t=(0,i.sJ)(c.uy),n=(0,i.sJ)(c.fE),o=(0,i.sJ)(c.pH);return(0,r.jsx)(v.ZP,{className:_().root,collapsedWidth:0,width:320,children:(0,r.jsx)(g.uU,{messages:o,usernameToHighlight:e,chatUserId:t,isModerator:n})})}var y=n(35603),b=n.n(y);function N(e){var t=e.version;return(0,r.jsxs)("div",{className:b().footer,children:[(0,r.jsxs)("div",{className:b().text,children:["Powered by ",(0,r.jsx)("a",{href:"https://owncast.online",children:t})]}),(0,r.jsxs)("div",{className:b().links,children:[(0,r.jsx)("div",{className:b().item,children:(0,r.jsx)("a",{href:"https://owncast.online/docs",target:"_blank",rel:"noreferrer",children:"Documentation"})}),(0,r.jsx)("div",{className:b().item,children:(0,r.jsx)("a",{href:"https://owncast.online/help",target:"_blank",rel:"noreferrer",children:"Contribute"})}),(0,r.jsx)("div",{className:b().item,children:(0,r.jsx)("a",{href:"https://github.com/owncast/owncast",target:"_blank",rel:"noreferrer",children:"Source"})})]})]})}var C=n(14924),k=n(828),S=n(87961),Z=n(11382),T=n(94184),F=n.n(T),M=n(73682),L=n(28105),P=n.n(L);function A(e){var t=e.content;return(0,r.jsx)("div",{className:P().pageContentContainer,children:(0,r.jsx)("div",{className:P().customPageContent,dangerouslySetInnerHTML:{__html:t}})})}var H=n(98881),E=n(47568),z=n(34051),J=n.n(z),R=n(25968),B=n(6226),U=n(3698),I=n(24093),O=n(40305),V=n.n(O);function D(e){var t=e.follower;return(0,r.jsx)("div",{className:V().follower,children:(0,r.jsx)("a",{href:t.link,target:"_blank",rel:"noreferrer",children:(0,r.jsxs)(R.Z,{wrap:!1,children:[(0,r.jsx)(B.Z,{span:6,children:(0,r.jsx)(I.C,{src:t.image,alt:"Avatar",className:V().avatar,children:(0,r.jsx)("img",{src:"/logo",alt:"Logo",className:V().placeholder})})}),(0,r.jsxs)(B.Z,{children:[(0,r.jsx)(R.Z,{children:t.name}),(0,r.jsx)(R.Z,{className:V().account,children:t.username})]})]})})})}function q(){var e=(0,l.useState)([]),t=e[0],n=e[1],o=(0,l.useState)(0),i=o[0],s=o[1],a=(0,l.useState)(1),c=a[0],u=a[1],d=Math.ceil(i/24),p=function(){var e=(0,E.Z)(J().mark((function e(){var t,r;return J().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat("/api/followers","?page=").concat(c));case 3:return t=e.sent,e.next=6,t.json();case 6:r=e.sent,n(r.response),s(r.total),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();(0,l.useEffect)((function(){p()}),[]),(0,l.useEffect)((function(){p()}),[c]);var f=(0,r.jsx)("div",{children:"A message explaining how to follow goes here since there are no followers."});return(null===t||void 0===t?void 0:t.length)?(0,r.jsxs)("div",{className:V().followers,children:[(0,r.jsx)(R.Z,{wrap:!0,gutter:[10,10],justify:"space-around",children:t.map((function(e){return(0,r.jsx)(B.Z,{children:(0,r.jsx)(D,{follower:e},e.link)})}))}),(0,r.jsx)(U.Z,{current:c,pageSize:24,total:d||1,onChange:function(e){u(e)},hideOnSinglePage:!0})]}):f}var K=n(63291),Y=n.n(K),W=n(69767),G=n.n(W);function Q(e){var t=e.children;return(0,r.jsx)("div",{className:"".concat(G().row),children:t})}var X=n(71577),$=n(32365),ee=n(36879),te=n.n(ee);function ne(e){var t=e.action,n=t.url,o=t.title,i=t.description,s=t.icon,a=t.color,c=t.openExternally,u=e.primary,d=void 0!==u&&u,p=(0,l.useState)(!1),f=p[0],m=p[1];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(X.Z,{type:d?"primary":"default",className:"".concat(te().button),onClick:function(){c?window.open(n,"_blank"):m(!0)},style:{backgroundColor:a},children:[(0,r.jsx)("img",{src:s,className:"".concat(te().icon),alt:i}),o]}),(0,r.jsx)($.Z,{title:i||o,url:n,visible:f,height:"80vh",handleCancel:function(){return m(!1)}})]})}ne.defaultProps={primary:!0};var re=n(55241),oe=n(97937),ie=n(18668),se=n.n(ie);function ae(e){var t=e.children,n=e.visible,o=e.notificationClicked,i=e.notificationClosed,s=(0,l.useState)(n),a=s[0],c=s[1],u=(0,l.useState)(!1),d=u[0],p=u[1];(0,l.useEffect)((function(){c(n)}),[n]),(0,l.useEffect)((function(){p(!0)}),[]);var f=(0,r.jsx)("div",{className:se().title,children:"Stay updated!"}),m=function(e){e.stopPropagation(),o()},h=(0,r.jsxs)("div",{onClick:m,onKeyDown:m,role:"menuitem",tabIndex:0,children:[(0,r.jsx)("button",{type:"button",className:se().closebutton,onClick:function(e){e.stopPropagation(),c(!1),i()},children:(0,r.jsx)(oe.Z,{})}),(0,r.jsxs)("div",{className:se().contentbutton,children:["Click and never miss",(0,r.jsx)("br",{}),"future streams!"]})]});return d&&(0,r.jsx)(re.Z,{placement:"topLeft",defaultVisible:a,visible:a,destroyTooltipOnHide:!0,title:f,content:h,overlayInnerStyle:{borderRadius:"5px",cursor:"pointer",paddingTop:"10px",paddingRight:"10px",fontSize:"16px"},children:t})}var le=n(1698),ce=n(26042),ue=n(69396),de=n(34447),pe=n(26713),fe=n(14670),me=n(69677),he=n(13840),xe=n.n(he);function ve(e){var t=e.handleClose,n=e.account,o=e.name,i=(0,l.useState)(null),s=i[0],a=i[1],c=(0,l.useState)(!1),u=c[0],d=c[1],p=(0,l.useState)(!1),f=p[0],m=p[1],h=(0,l.useState)(null),x=h[0],v=h[1],g=function(e){a(e),!function(e){var t=e.replace(/^@+/,"");return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(t).toLowerCase())}(e)?d(!1):d(!0)},j=function(){var e=(0,E.Z)(J().mark((function e(){var n,r,o,i;return J().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(u){e.next=2;break}return e.abrupt("return");case 2:return m(!0),e.prev=3,n=s.replace(/^@+/,""),r={account:n},e.next=8,fetch("/api/remotefollow",{method:"POST",body:JSON.stringify(r)});case 8:return o=e.sent,e.next=11,o.json();case 11:if((i=e.sent).redirectUrl&&(window.open(i.redirectUrl,"_blank"),t()),i.success){e.next=17;break}return v(i.message),m(!1),e.abrupt("return");case 17:if(i.redirectUrl){e.next=21;break}return v("Unable to follow."),m(!1),e.abrupt("return");case 21:e.next=26;break;case 23:e.prev=23,e.t0=e.catch(3),v(e.t0.message);case 26:m(!1);case 27:case"end":return e.stop()}}),e,null,[[3,23]])})));return function(){return e.apply(this,arguments)}}();return(0,r.jsxs)(pe.Z,{direction:"vertical",children:[(0,r.jsxs)("div",{className:xe().header,children:["By following this stream you'll get notified on the Fediverse when it goes live. Now is a great time to",(0,r.jsx)("a",{href:"https://owncast.online/join-fediverse",target:"_blank",rel:"noreferrer",children:"learn about the Fediverse"}),"if it's new to you."]}),(0,r.jsxs)(Z.Z,{spinning:f,children:[x&&(0,r.jsx)(fe.Z,{message:"Follow Error",description:x,type:"error",showIcon:!0}),(0,r.jsxs)("div",{className:xe().account,children:[(0,r.jsx)("img",{src:"/logo",alt:"logo",className:xe().logo}),(0,r.jsxs)("div",{className:xe().username,children:[(0,r.jsx)("div",{className:xe().name,children:o}),(0,r.jsx)("div",{children:n})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:xe().instructions,children:"Enter your username @server to follow"}),(0,r.jsx)(me.Z,{value:n,size:"large",onChange:function(e){return g(e.target.value)},placeholder:"Your fediverse account @account@server",defaultValue:n}),(0,r.jsx)("div",{className:xe().footer,children:"You'll be redirected to your Fediverse server and asked to confirm the action."})]}),(0,r.jsxs)(pe.Z,{className:xe().buttons,children:[(0,r.jsx)(X.Z,{disabled:!u,type:"primary",onClick:j,children:"Follow"}),(0,r.jsx)(X.Z,{onClick:function(){window.open("https://owncast.online/join-fediverse","_blank")},type:"primary",children:"Join the Fediverse"})]})]})]})}function ge(e){var t=(0,l.useState)(!1),n=t[0],o=t[1],s=(0,i.sJ)(c.g1),a=s.name,u=s.federation.account;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(X.Z,(0,ue.Z)((0,ce.Z)({},e),{type:"primary",className:te().button,icon:(0,r.jsx)(de.Z,{}),onClick:function(){o(!0)},children:"Follow"})),(0,r.jsx)($.Z,{title:"Follow ".concat(a),visible:n,handleCancel:function(){return o(!1)},width:"550px",height:"200px",children:(0,r.jsx)(ve,{account:u,name:a,handleClose:function(){return o(!1)}})})]})}var je=n(71578);function _e(e){var t=e.onClick;return(0,r.jsx)(X.Z,{type:"primary",className:"".concat(te().button),icon:(0,r.jsx)(je.Z,{}),onClick:t,children:"Notify"})}var we=n(84485);function ye(e,t,n){return be.apply(this,arguments)}function be(){return(be=(0,E.Z)(J().mark((function e(t,n,r){var o;return J().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"/api/notifications/register",o={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({channel:t,destination:n})},e.prev=2,e.next=5,fetch("".concat("/api/notifications/register","?accessToken=").concat(r),o);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[2,7]])})))).apply(this,arguments)}function Ne(e){for(var t=(e+"=".repeat((4-e.length%4)%4)).replace(/-/g,"+").replace(/_/g,"/"),n=window.atob(t),r=new Uint8Array(n.length),o=0;o<n.length;++o)r[o]=n.charCodeAt(o);return r}function Ce(e){return ke.apply(this,arguments)}function ke(){return(ke=(0,E.Z)(J().mark((function e(t){var n,r;return J().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.serviceWorker.ready;case 2:return n=e.sent,e.next=5,n.pushManager.getSubscription();case 5:if(r=e.sent){e.next=10;break}return e.next=9,n.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Ne(t)});case 9:r=e.sent;case 10:return e.abrupt("return",JSON.stringify(r));case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Se=n(5225),Ze=n.n(Se);function Te(){return"serviceWorker"in navigator&&"PushManager"in window}var Fe=we.Z.Title;function Me(){return(0,r.jsx)("div",{children:"Browser notifications are not supported in your browser."})}function Le(){return(0,r.jsx)("div",{children:"Notifications enabled"})}function Pe(e){var t=e.start;return(0,r.jsx)("div",{id:"browser-push-preview-box",className:Ze().pushPreview,children:(0,r.jsxs)("div",{className:Ze().inner,children:[(0,r.jsxs)("div",{className:Ze().title,children:[window.location.toString()," wants to"]}),(0,r.jsxs)("div",{className:Ze().permissionLine,children:[(0,r.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,r.jsx)("path",{d:"M14 12.3333V13H2V12.3333L3.33333 11V7C3.33333 4.93333 4.68667 3.11333 6.66667 2.52667C6.66667 2.46 6.66667 2.4 6.66667 2.33333C6.66667 1.97971 6.80714 1.64057 7.05719 1.39052C7.30724 1.14048 7.64638 1 8 1C8.35362 1 8.69276 1.14048 8.94281 1.39052C9.19286 1.64057 9.33333 1.97971 9.33333 2.33333C9.33333 2.4 9.33333 2.46 9.33333 2.52667C11.3133 3.11333 12.6667 4.93333 12.6667 7V11L14 12.3333ZM9.33333 13.6667C9.33333 14.0203 9.19286 14.3594 8.94281 14.6095C8.69276 14.8595 8.35362 15 8 15C7.64638 15 7.30724 14.8595 7.05719 14.6095C6.80714 14.3594 6.66667 14.0203 6.66667 13.6667",fill:"#676670"})}),"Show notifications"]}),(0,r.jsxs)("div",{className:Ze().buttonRow,children:[(0,r.jsx)(X.Z,{type:"primary",className:Ze().allow,onClick:function(){t()},children:"Allow"}),(0,r.jsx)("button",{type:"button",className:Ze().disabled,children:"Block"})]})]})})}function Ae(){var e=(0,l.useState)(null),t=e[0],n=e[1],o=(0,i.sJ)(c.FI),s=(0,i.sJ)(c.g1),a=(0,l.useState)(!1),u=a[0],d=a[1],p=Te()&&"default"!==Notification.permission,f=s.notifications.browser,m=f.publicKey,h=f.enabled&&Te();if(p)return(0,r.jsx)(Le,{});var x=function(){var e=(0,E.Z)(J().mark((function e(){return J().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!Te()||"default"===Notification.permission){e.next=2;break}return e.abrupt("return");case 2:return d(!0),e.prev=3,e.next=6,Ce(m);case 6:ye("BROWSER_PUSH_NOTIFICATION",e.sent,o),n(null),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),n("Error registering for live notifications: ".concat(e.t0.message,". Make sure you're not inside a private browser environment or have previously disabled notifications for this stream."));case 14:d(!1);case 15:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(){return e.apply(this,arguments)}}();return h?(0,r.jsxs)(Z.Z,{spinning:u,children:[(0,r.jsxs)(R.Z,{align:"top",children:[(0,r.jsx)(Fe,{children:"Browser Notifications"}),"Get notified right in the browser each time this stream goes live. Blah blah blah more description text goes here."]}),(0,r.jsx)(R.Z,{children:t}),(0,r.jsx)(R.Z,{align:"top",children:(0,r.jsx)(B.Z,{span:12,children:(0,r.jsx)(Pe,{start:function(){return x()}})})})]}):(0,r.jsx)(Me,{})}var He=n(52740),Ee=n.n(He);function ze(e){var t=e.links;return(0,r.jsx)("div",{className:Ee().links,children:t.map((function(e){return(0,r.jsx)("a",{href:e.url,className:Ee().link,target:"_blank",rel:"noreferrer",children:(0,r.jsx)("img",{src:e.icon,alt:e.platform,title:e.platform,className:Ee().link})},e.platform)}))})}var Je=n(74688),Re=n.n(Je);function Be(e){var t=e.name,n=e.title,o=e.summary,i=e.logo,s=e.tags,a=e.links;return(0,r.jsx)("div",{className:Re().root,children:(0,r.jsxs)("div",{className:Re().logoTitleSection,children:[(0,r.jsx)("div",{className:Re().logo,children:(0,r.jsx)(Ke,{src:i})}),(0,r.jsxs)("div",{className:Re().titleSection,children:[(0,r.jsx)("div",{className:F()(Re().title,Re().row),children:t}),(0,r.jsx)("div",{className:F()(Re().subtitle,Re().row),children:n||o}),(0,r.jsx)("div",{className:F()(Re().tagList,Re().row),children:s.length>0&&s.map((function(e){return(0,r.jsxs)("span",{children:["#",e,"\xa0"]},e)}))}),(0,r.jsx)("div",{className:F()(Re().socialLinks,Re().row),children:(0,r.jsx)(ze,{links:a})})]})]})})}var Ue=S.Z.TabPane,Ie=o.Z.Content;function Oe(){var e=(0,i.sJ)(c.Q),t=(0,i.sJ)(c.g1),n=(0,i.sJ)(c.pT),o=(0,k.Z)((0,i.FV)(c.hz),2),s=o[0],a=o[1],u=(0,i.sJ)(c.YW),d=(0,i.sJ)(c.RI),p=d.viewerCount,f=d.lastConnectTime,m=d.lastDisconnectTime,h=d.streamTitle,x=t.extraPageContent,v=t.version,g=t.name,j=t.summary,_=t.socialHandles,y=t.tags,b=t.externalActions,T=t.offlineMessage,L=(0,l.useState)(!1),P=L[0],E=L[1],z=(0,l.useState)(!1),J=z[0],R=z[1],B=b.map((function(e){return(0,r.jsx)(ne,{action:e},e.url)})),U=function(){R(!1),E(!1),(0,M.qQ)(M.dA.hasDisplayedNotificationModal,!0)},I=function(){var e=window.innerWidth;void 0===s&&a(e<=768),!s&&e<=768&&a(!0),s&&e>768&&a(!1)};(0,l.useEffect)((function(){!function(){var e=parseInt((0,M.$o)(M.dA.userVisitCount),10);Number.isNaN(e)&&(e=0),(0,M.qQ)(M.dA.userVisitCount,e+1),e>2&&!(0,M.$o)(M.dA.hasDisplayedNotificationModal)&&E(!0)}(),I(),window.addEventListener("resize",I)}),[]);var O=F()(Y().root,(0,C.Z)({},Y().mobile,s));return(0,r.jsxs)("div",{children:[(0,r.jsxs)(Ie,{className:O,children:[(0,r.jsxs)("div",{className:Y().leftContent,children:[(0,r.jsx)(Z.Z,{className:Y().loadingSpinner,size:"large",spinning:e.appLoading}),(0,r.jsxs)("div",{className:Y().topSection,children:[u&&(0,r.jsx)(H.Z,{source:"/hls/stream.m3u8",online:u}),!u&&(0,r.jsx)(le.Z,{name:g,text:T||"Please follow and ask to get notified when the stream is live."}),(0,r.jsx)(Ye.Z,{online:u,lastConnectTime:f,lastDisconnectTime:m,viewerCount:p})]}),(0,r.jsx)("div",{className:Y().midSection,children:(0,r.jsxs)("div",{className:Y().buttonsLogoTitleSection,children:[(0,r.jsxs)(Q,{children:[B,(0,r.jsx)(ge,{size:"small"}),(0,r.jsx)(ae,{visible:P,notificationClicked:function(){return R(!0)},notificationClosed:function(){return U()},children:(0,r.jsx)(_e,{onClick:function(){return R(!0)}})})]}),(0,r.jsx)($.Z,{title:"Notify",visible:J,afterClose:function(){return U()},handleCancel:function(){return U()},children:(0,r.jsx)(Ae,{})})]})}),(0,r.jsx)("div",{className:Y().lowerHalf,children:(0,r.jsx)(Be,{name:g,title:h,summary:j,tags:y,links:_,logo:"/logo"})}),(0,r.jsx)("div",{className:Y().lowerSection,children:(0,r.jsxs)(S.Z,{defaultActiveKey:"0",style:{height:"100%"},children:[n&&s&&(0,r.jsx)(Ue,{tab:"Chat",style:{height:"100%"}},"0"),(0,r.jsx)(Ue,{tab:"About",className:Y().pageContentSection,children:(0,r.jsx)(A,{content:x})},"2"),(0,r.jsx)(Ue,{tab:"Followers",className:Y().pageContentSection,children:(0,r.jsx)(q,{})},"3")]})})]}),n&&!s&&(0,r.jsx)(w,{})]}),!s&&(0,r.jsx)(N,{version:v})]})}var Ve=n(79216),De=n(7918),qe=n.n(De);function Ke(e){var t=e.src;return(0,r.jsx)("div",{className:qe().root,children:(0,r.jsx)("div",{className:qe().container,children:(0,r.jsx)(Ve.Z,{src:t,alt:"Logo",className:qe().image,rootClassName:qe().image})})})}var Ye=n(36887),We=n(85402);function Ge(e){var t=e.title,n=e.message;return(0,r.jsx)(We.Z,{title:t,visible:!0,footer:null,closable:!1,keyboard:!1,width:900,centered:!0,className:"modal",children:(0,r.jsx)("p",{style:{fontSize:"1.3rem"},children:n})})}var Qe=n(82670);var Xe=function(){var e=(0,i.sJ)(c.g1),t=e.name,n=e.title,s=e.customStyles,u=(0,i.sJ)(c.di),d=(0,i.sJ)(c.ap),p=(0,l.useRef)(null);return(0,l.useEffect)((function(){!function(e){var t=function(e){e.setAttribute("rel","noopener noreferrer ")};e.querySelectorAll("a").forEach((function(e){return t(e)})),new MutationObserver((function(e){var n=!0,r=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(n=(i=s.next()).done);n=!0){var a=i.value,l=!0,c=!1,u=void 0;try{for(var d,p=a.addedNodes[Symbol.iterator]();!(l=(d=p.next()).done);l=!0){var f=d.value;(0,Qe.Z)(f,HTMLElement)&&"a"===f.tagName.toLowerCase()&&t(f)}}catch(m){c=!0,u=m}finally{try{l||null==p.return||p.return()}finally{if(c)throw u}}}}catch(m){r=!0,o=m}finally{try{n||null==s.return||s.return()}finally{if(r)throw o}}})).observe(e,{attributes:!1,childList:!0,subtree:!0})}(p.current)}),[]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a(),{children:[(0,r.jsx)("meta",{name:"description",content:"{{.Summary}}"}),(0,r.jsx)("meta",{property:"og:title",content:"{{.Name}}"}),(0,r.jsx)("meta",{property:"og:site_name",content:"{{.Name}}"}),(0,r.jsx)("meta",{property:"og:url",content:"{{.RequestedURL}}"}),(0,r.jsx)("meta",{property:"og:description",content:"{{.Summary}}"}),(0,r.jsx)("meta",{property:"og:type",content:"video.other"}),(0,r.jsx)("meta",{property:"video:tag",content:"{{.TagsString}}"}),(0,r.jsx)("meta",{property:"og:image",content:"{{.Thumbnail}}"}),(0,r.jsx)("meta",{property:"og:image:url",content:"{{.Thumbnail}}"}),(0,r.jsx)("meta",{property:"og:image:alt",content:"{{.Image}}"}),(0,r.jsx)("meta",{property:"og:video",content:"{{.RequestedURL}}embed/video"}),(0,r.jsx)("meta",{property:"og:video:secure_url",content:"{{.RequestedURL}}embed/video"}),(0,r.jsx)("meta",{property:"og:video:height",content:"315"}),(0,r.jsx)("meta",{property:"og:video:width",content:"560"}),(0,r.jsx)("meta",{property:"og:video:type",content:"text/html"}),(0,r.jsx)("meta",{property:"og:video:actor",content:"{{.Name}}"}),(0,r.jsx)("meta",{property:"twitter:title",content:"{{.Name}}"}),(0,r.jsx)("meta",{property:"twitter:url",content:"{{.RequestedURL}}"}),(0,r.jsx)("meta",{property:"twitter:description",content:"{{.Summary}}"}),(0,r.jsx)("meta",{property:"twitter:image",content:"{{.Image}}"}),(0,r.jsx)("meta",{property:"twitter:card",content:"player"}),(0,r.jsx)("meta",{property:"twitter:player",content:"{{.RequestedURL}}embed/video"}),(0,r.jsx)("meta",{property:"twitter:player:width",content:"560"}),(0,r.jsx)("meta",{property:"twitter:player:height",content:"315"}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"57x57",href:"/img/favicon/apple-icon-57x57.png"}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"60x60",href:"/img/favicon/apple-icon-60x60.png"}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"72x72",href:"/img/favicon/apple-icon-72x72.png"}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"76x76",href:"/img/favicon/apple-icon-76x76.png"}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"114x114",href:"/img/favicon/apple-icon-114x114.png"}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"120x120",href:"/img/favicon/apple-icon-120x120.png"}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"144x144",href:"/img/favicon/apple-icon-144x144.png"}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"152x152",href:"/img/favicon/apple-icon-152x152.png"}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/img/favicon/apple-icon-180x180.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/img/favicon/android-icon-192x192.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/img/favicon/favicon-32x32.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"96x96",href:"/img/favicon/favicon-96x96.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/img/favicon/favicon-16x16.png"}),(0,r.jsx)("link",{rel:"manifest",href:"/manifest.json"}),(0,r.jsx)("link",{href:"/api/auth/provider/indieauth"}),(0,r.jsx)("meta",{name:"msapplication-TileColor",content:"#ffffff"}),(0,r.jsx)("meta",{name:"msapplication-TileImage",content:"/img/favicon/ms-icon-144x144.png"}),(0,r.jsx)("meta",{name:"theme-color",content:"#ffffff"}),(0,r.jsx)("style",{children:s})]}),(0,r.jsx)(c.me,{}),(0,r.jsxs)(o.Z,{ref:p,children:[(0,r.jsx)(x,{name:n||t,chatAvailable:u}),(0,r.jsx)(Oe,{}),d&&(0,r.jsx)(Ge,{title:d.title,message:d.message})]})]})};function $e(){return(0,r.jsx)(Xe,{})}},36879:function(e){e.exports={button:"ActionButton_button__z5Z2c",icon:"ActionButton_icon__EPp7Q"}},69767:function(e){e.exports={row:"ActionButtonRow_row__SiEGe"}},74688:function(e){e.exports={root:"ContentHeader_root__HaUG0",row:"ContentHeader_row__9Q8gH",logoTitleSection:"ContentHeader_logoTitleSection__Z8pUc",logo:"ContentHeader_logo__wo_HN",titleSection:"ContentHeader_titleSection___6Y15",title:"ContentHeader_title__E_DsI",subtitle:"ContentHeader_subtitle__n1Wew",tagList:"ContentHeader_tagList__rx3jY"}},5225:function(e){e.exports={pushPreview:"BrowserNotifyModal_pushPreview__4Og4q",inner:"BrowserNotifyModal_inner__uhFDw",title:"BrowserNotifyModal_title__dd_Lh",permissionLine:"BrowserNotifyModal_permissionLine__K8nyJ",buttonRow:"BrowserNotifyModal_buttonRow__oxJUg",disabled:"BrowserNotifyModal_disabled__v88lb",allow:"BrowserNotifyModal_allow__M9AWC"}},13840:function(e){e.exports={header:"FollowModal_header__la1ji",buttons:"FollowModal_buttons__tt4Mc",instructions:"FollowModal_instructions__HiKFF",footer:"FollowModal_footer__AjucH",account:"FollowModal_account__cmHkm",logo:"FollowModal_logo__Ew8xK",username:"FollowModal_username__A_OTw",name:"FollowModal_name__Sf_TP"}},63291:function(e){e.exports={root:"Content_root__h1mNK",topSection:"Content_topSection__JIZi0",lowerSection:"Content_lowerSection__BZHYI",leftCol:"Content_leftCol__U2TDq",loadingSpinner:"Content_loadingSpinner__mDlYC",mobile:"Content_mobile__Ep0QM",mobileChat:"Content_mobileChat__5V09A"}},28105:function(e){e.exports={pageContentContainer:"CustomPageContent_pageContentContainer__EG4tU",customPageContent:"CustomPageContent_customPageContent__Mr981",summary:"CustomPageContent_summary___Zgps"}},35603:function(e){e.exports={footer:"Footer_footer__mPuvf",links:"Footer_links__7bBxV",item:"Footer_item__rXxSr"}},92910:function(e){e.exports={header:"Header_header__U4Ro1",logo:"Header_logo__HLZ6Z"}},7918:function(e){e.exports={root:"Logo_root__jKiJC",container:"Logo_container__A4UYT",image:"Logo_image__Ahkom"}},18668:function(e){e.exports={contentbutton:"NotifyReminderPopup_contentbutton__a_tsp",closebutton:"NotifyReminderPopup_closebutton__GVcP3",title:"NotifyReminderPopup_title__Dm9Iy"}},75347:function(e){e.exports={root:"Sidebar_root__8HE0A"}},52740:function(e){e.exports={link:"SocialLinks_link___CcSm",links:"SocialLinks_links__gOAb7"}},40305:function(e){e.exports={follower:"SingleFollower_follower__EyBDI",avatar:"SingleFollower_avatar__V9jHG",account:"SingleFollower_account__Z66vo",placeholder:"SingleFollower_placeholder__CgsfJ"}}},function(e){e.O(0,[2544,1272,8700,384,5938,2001,117,1082,1700,885,5774,9774,2888,179],(function(){return t=48312,e(e.s=t);var t}));var t=e.O();_N_E=t}]);