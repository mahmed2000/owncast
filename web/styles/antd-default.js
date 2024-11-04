// TODO generate this file using style-definitions somehow

const { merge } = require('lodash');

const AntdStaticTokens = {
  fontFamily:
    "'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
};

const AntdDefaultCustomTokens = {
  colorLink: '#6544e9',
  colorLinkHover: '#7a5cf3',
  Modal: {
    headerBg: '#2d3748',
    contentBg: '#e2e8f0',
    colorIcon: '#e2e8f0',
  },
  Table: {
    rowSelectedBg: '#6544e9',
    rowSelectedHoverBg: '#7a5cf3',
  },
  Select: {
    optionSelectedBg: '#6544e9',
  },
  Menu: {
    itemActiveBg: '#6544e9',
  },
  Alert: {
    colorErrorBg: '#fff',
    colorErrorBorder: '#ff4b39',
  },
  colorBgElevated: '#e2e8f0',
  Tag: {
    defaultBg: '#6544e9',
  },
  Slider: {
    trackBg: '#7a5cf3',
    handleColor: '#7a5cf3',
    handleActiveColor: '#6544e9',
  },
  borderRadius: 5,
  colorPrimary: '#6544e9',
  colorPrimaryHover: '#6544e9',
  colorPrimaryActive: '#7a5cf3',
  colorBgBase: '#e2e8f0',
};

const AntdCustomTokens = (customTokens = AntdDefaultCustomTokens) => {
  return merge({}, AntdStaticTokens, customTokens);
};

export default AntdCustomTokens;
