(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2532],{18957:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/config-federation",function(){return t(96647)}])},36981:function(e,n,t){"use strict";t.d(n,{Q:function(){return u},Y:function(){return d}});var a=t(85893),l=t(67294),r=t(23657),s=t(91624),o=t(25510),i=t(17586);let{Title:c}=r.default,u="#5a67d8",d=e=>{let{title:n,description:t,placeholder:r,maxLength:d,values:h,handleDeleteIndex:f,handleCreateString:p,submitStatus:m,continuousStatusMessage:b}=e,[g,v]=(0,l.useState)("");return(0,a.jsxs)("div",{className:"edit-string-array-container",children:[(0,a.jsx)(c,{level:3,className:"section-title",children:n}),(0,a.jsx)("p",{className:"description",children:t}),(0,a.jsx)("div",{className:"edit-current-strings",children:null==h?void 0:h.map((e,n)=>(0,a.jsx)(s.Z,{closable:!0,onClose:()=>{f(n)},color:u,children:e},"tag-".concat(e,"-").concat(n)))}),b&&(0,a.jsx)("div",{className:"continuous-status-section",children:(0,a.jsx)(i.E,{status:b})}),(0,a.jsx)("div",{className:"add-new-string-section",children:(0,a.jsx)(o.nv,{fieldName:"string-input",value:g,onChange:e=>{let{value:n}=e;v(n)},onPressEnter:()=>{p(g.trim()),v("")},maxLength:d,placeholder:r,status:m})})]})};d.defaultProps={maxLength:50,description:null,submitStatus:null,continuousStatusMessage:null}},22067:function(e,n,t){"use strict";t.d(n,{Z:function(){return u}});var a=t(85893),l=t(67294),r=t(59633),s=t(28700),o=t(17586),i=t(70869),c=t(4481);let u=e=>{let{apiPath:n,checked:t,reversed:u=!1,configPath:d="",disabled:h=!1,fieldName:f,label:p,tip:m,useSubmit:b,onChange:g}=e,[v,x]=(0,l.useState)(null),y=null,{setFieldInConfigState:w}=(0,l.useContext)(c.a)||{},j=()=>{x(null),clearTimeout(y),y=null},k=async e=>{if(b){x((0,s.kg)(s.Jk));let t=u?!e:e;await (0,i.Si)({apiPath:n,data:{value:t},onSuccess:()=>{w({fieldName:f,value:t,path:d}),x((0,s.kg)(s.zv))},onError:e=>{x((0,s.kg)(s.Un,"There was an error: ".concat(e)))}}),y=setTimeout(j,i.sI)}g&&g(e)},C=null!==v&&v.type===s.Jk;return(0,a.jsxs)("div",{className:"formfield-container toggleswitch-container",children:[p&&(0,a.jsx)("div",{className:"label-side",children:(0,a.jsx)("span",{className:"formfield-label",children:p})}),(0,a.jsxs)("div",{className:"input-side",children:[(0,a.jsxs)("div",{className:"input-group",children:[(0,a.jsx)(r.Z,{className:"switch field-".concat(f),loading:C,onChange:k,defaultChecked:t,checked:t,checkedChildren:"ON",unCheckedChildren:"OFF",disabled:h}),(0,a.jsx)(o.E,{status:v})]}),(0,a.jsx)("p",{className:"field-tip",children:m})]})]})};u.defaultProps={apiPath:"",checked:!1,reversed:!1,configPath:"",disabled:!1,label:"",tip:"",useSubmit:!1,onChange:null}},78021:function(e,n,t){"use strict";var a=t(78235);n.Z=a.Z},65765:function(e,n,t){"use strict";var a=t(61185),l=t(59408),r=a.ZP;r.Header=a.h4,r.Footer=a.$_,r.Content=a.VY,r.Sider=l.Z,r._InternalSiderContext=l.D,n.default=r},10227:function(e,n,t){"use strict";var a=t(79338);n.Z=a.Z},59633:function(e,n,t){"use strict";t.d(n,{Z:function(){return y}});var a=t(87462),l=t(4942),r=t(72034),s=t(93967),o=t.n(s),i=t(97685),c=t(45987),u=t(67294),d=t(22720),h=t(77524),f=u.forwardRef(function(e,n){var t,a=e.prefixCls,r=void 0===a?"rc-switch":a,s=e.className,f=e.checked,p=e.defaultChecked,m=e.disabled,b=e.loadingIcon,g=e.checkedChildren,v=e.unCheckedChildren,x=e.onClick,y=e.onChange,w=e.onKeyDown,j=(0,c.Z)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),k=(0,d.Z)(!1,{value:f,defaultValue:p}),C=(0,i.Z)(k,2),N=C[0],Z=C[1];function E(e,n){var t=N;return m||(Z(t=e),null==y||y(t,n)),t}var O=o()(r,s,(t={},(0,l.Z)(t,"".concat(r,"-checked"),N),(0,l.Z)(t,"".concat(r,"-disabled"),m),t));return u.createElement("button",Object.assign({},j,{type:"button",role:"switch","aria-checked":N,disabled:m,className:O,ref:n,onKeyDown:function(e){e.which===h.Z.LEFT?E(!1,e):e.which===h.Z.RIGHT&&E(!0,e),null==w||w(e)},onClick:function(e){var n=E(!N,e);null==x||x(n,e)}}),b,u.createElement("span",{className:"".concat(r,"-inner")},N?g:v))});f.displayName="Switch";var p=t(17399),m=t(92933),b=t(23173),g=t(51964),v=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>n.indexOf(a)&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)0>n.indexOf(a[l])&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(t[a[l]]=e[a[l]]);return t},x=u.forwardRef(function(e,n){var t=e.prefixCls,s=e.size,i=e.disabled,c=e.loading,d=e.className,h=v(e,["prefixCls","size","disabled","loading","className"]),x=u.useContext(p.E_),y=x.getPrefixCls,w=x.direction,j=u.useContext(b.Z),k=u.useContext(m.Z),C=(null!=i?i:k)||c,N=y("switch",t),Z=u.createElement("div",{className:"".concat(N,"-handle")},c&&u.createElement(r.Z,{className:"".concat(N,"-loading-icon")})),E=o()((0,l.Z)((0,l.Z)((0,l.Z)({},"".concat(N,"-small"),"small"===(s||j)),"".concat(N,"-loading"),c),"".concat(N,"-rtl"),"rtl"===w),void 0===d?"":d);return u.createElement(g.Z,{insertExtraNode:!0},u.createElement(f,(0,a.Z)({},h,{prefixCls:N,className:E,disabled:C,ref:n,loadingIcon:Z})))});x.__ANT_SWITCH=!0;var y=x},91624:function(e,n,t){"use strict";t.d(n,{Z:function(){return x}});var a=t(4942),l=t(87462),r=t(97685),s=t(69156),o=t(93967),i=t.n(o),c=t(97485),u=t(67294),d=t(17399),h=t(22781),f=t(51964),p=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>n.indexOf(a)&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)0>n.indexOf(a[l])&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(t[a[l]]=e[a[l]]);return t},m=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&0>n.indexOf(a)&&(t[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)0>n.indexOf(a[l])&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(t[a[l]]=e[a[l]]);return t},b=new RegExp("^(".concat(h.Y.join("|"),")(-inverse)?$")),g=new RegExp("^(".concat(h.E.join("|"),")$")),v=u.forwardRef(function(e,n){var t=e.prefixCls,o=e.className,h=e.style,p=e.children,v=e.icon,x=e.color,y=e.onClose,w=e.closeIcon,j=e.closable,k=m(e,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),C=u.useContext(d.E_),N=C.getPrefixCls,Z=C.direction,E=u.useState(!0),O=(0,r.Z)(E,2),S=O[0],P=O[1];u.useEffect(function(){"visible"in k&&P(k.visible)},[k.visible]);var _=function(){return!!x&&(b.test(x)||g.test(x))},T=(0,l.Z)({backgroundColor:x&&!_()?x:void 0},h),I=_(),U=N("tag",t),F=i()(U,(0,a.Z)((0,a.Z)((0,a.Z)((0,a.Z)({},"".concat(U,"-").concat(x),I),"".concat(U,"-has-color"),x&&!I),"".concat(U,"-hidden"),!S),"".concat(U,"-rtl"),"rtl"===Z),o),R=function(e){e.stopPropagation(),null==y||y(e),!e.defaultPrevented&&("visible"in k||P(!1))},D="onClick"in k||p&&"a"===p.type,L=(0,c.Z)(k,["visible"]),Y=v||null,K=Y?u.createElement(u.Fragment,null,Y,u.createElement("span",null,p)):p,M=u.createElement("span",(0,l.Z)({},L,{ref:n,className:F,style:T}),K,void 0!==j&&j?w?u.createElement("span",{className:"".concat(U,"-close-icon"),onClick:R},w):u.createElement(s.Z,{className:"".concat(U,"-close-icon"),onClick:R}):null);return D?u.createElement(f.Z,null,M):M});v.CheckableTag=function(e){var n=e.prefixCls,t=e.className,r=e.checked,s=e.onChange,o=e.onClick,c=p(e,["prefixCls","className","checked","onChange","onClick"]),h=(0,u.useContext(d.E_).getPrefixCls)("tag",n),f=i()(h,(0,a.Z)((0,a.Z)({},"".concat(h,"-checkable"),!0),"".concat(h,"-checkable-checked"),r),t);return u.createElement("span",(0,l.Z)({},c,{className:f,onClick:function(e){null==s||s(!r),null==o||o(e)}}))};var x=v},96647:function(e,n,t){"use strict";t.r(n);var a=t(85893),l=t(77786),r=t(56469),s=t(23657),o=t(1461),i=t(10227),c=t(78021),u=t(67294),d=t(25510),h=t(18063),f=t(22067),p=t(36981),m=t(70869),b=t(4481),g=t(28700),v=t(25889);let x=e=>{let{cancelPressed:n,okPressed:t}=e;return(0,a.jsxs)(l.default,{width:"70%",title:"Enable Social Features",visible:!0,onCancel:n,footer:(0,a.jsxs)("div",{children:[(0,a.jsx)(r.Z,{onClick:n,children:"Do not enable"}),(0,a.jsx)(r.Z,{type:"primary",onClick:t,children:"Enable Social Features"})]}),children:[(0,a.jsx)(s.default.Title,{level:3,children:"How do Owncast's social features work?"}),(0,a.jsxs)(s.default.Paragraph,{children:["Owncast's social features are accomplished by having your server join The"," ",(0,a.jsx)("a",{href:"https://en.wikipedia.org/wiki/Fediverse",rel:"noopener noreferrer",target:"_blank",children:"Fediverse"}),", a decentralized, open, collection of independent servers, like yours."]}),"Please"," ",(0,a.jsx)("a",{href:"https://owncast.online/docs/social",rel:"noopener noreferrer",target:"_blank",children:"read more"})," ","about these features, the details behind them, and how they work.",(0,a.jsx)(s.default.Paragraph,{}),(0,a.jsx)(s.default.Title,{level:3,children:"What do you need to know?"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:"These features are brand new. Given the variability of interfacing with the rest of the world, bugs are possible. Please report anything that you think isn't working quite right."}),(0,a.jsx)("li",{children:"You must always host your Owncast server with SSL using a https url."}),(0,a.jsx)("li",{children:"You should not change your server name URL or social username once people begin following you, as your server will be seen as a completely different user on the Fediverse, and the old user will disappear."}),(0,a.jsxs)("li",{children:["Turning on ",(0,a.jsx)("i",{children:"Private mode"})," will allow you to manually approve each follower and limit the visibility of your posts to followers only."]})]}),(0,a.jsx)(s.default.Title,{level:3,children:"Learn more about The Fediverse"}),(0,a.jsxs)(s.default.Paragraph,{children:["If these concepts are new you should discover more about what this functionality has to offer. Visit"," ",(0,a.jsx)("a",{href:"https://owncast.online/docs/social",rel:"noopener noreferrer",target:"_blank",children:"our documentation"})," ","to be pointed at some resources that will help get you started on The Fediverse."]})]})},y=()=>{let{Title:e}=s.default,[n,t]=(0,u.useState)(null),[l,r]=(0,u.useState)(!1),{serverConfig:v,setFieldInConfigState:y}=(0,u.useContext)(b.a)||{},[w,j]=(0,u.useState)(null),{federation:k,yp:C,instanceDetails:N}=v,{enabled:Z,isPrivate:E,username:O,goLiveMessage:S,showEngagement:P,blockedDomains:_}=k,{instanceUrl:T}=C,{nsfw:I}=N,U=e=>{let{fieldName:a,value:l}=e;t({...n,[a]:l})};function F(){j(null)}function R(){try{(0,m.Si)({apiPath:m.pE,data:{value:n.blockedDomains},onSuccess:()=>{y({fieldName:"forbiddenUsernames",value:n.forbiddenUsernames}),j(g.zv),setTimeout(F,m.sI)},onError:e=>{j((0,g.kg)(g.Un,e)),setTimeout(F,m.sI)}})}catch(e){console.error(e),j(g.Un)}}if((0,u.useEffect)(()=>{t({enabled:Z,isPrivate:E,username:O,goLiveMessage:S,showEngagement:P,blockedDomains:_,nsfw:I,instanceUrl:C.instanceUrl})},[v,C]),!n)return null;let D=""!==T,L=T.startsWith("https://"),Y=!L&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o.Z,{message:"You must set your server URL before you can enable this feature.",type:"warning",showIcon:!0}),(0,a.jsx)("br",{}),(0,a.jsx)(h.$7,{fieldName:"instanceUrl",...m.yi,value:n.instanceUrl,initialValue:C.instanceUrl,type:d.xA,onChange:U,onSubmit:()=>{let e=""!==n.instanceUrl,a=n.instanceUrl.startsWith("https://");e&&a||((0,m.Si)({apiPath:m.Kl.apiPath,data:{value:!1}}),t({...n,enabled:!1}))},required:!0})]}),K=(0,a.jsx)(o.Z,{message:"Only Owncast instances available on the default SSL port 443 support this feature.",type:"warning",showIcon:!0}),M=T&&""!==new URL(T).port&&"443"!==new URL(T).port;return(0,a.jsxs)("div",{children:[(0,a.jsx)(e,{children:"Configure Social Features"}),(0,a.jsx)("p",{children:"Owncast provides the ability for people to follow and engage with your instance. It's a great way to promote alerting, sharing and engagement of your stream."}),(0,a.jsx)("p",{children:"Once enabled you'll alert your followers when you go live as well as gain the ability to compose custom posts to share any information you like."}),(0,a.jsx)("p",{children:(0,a.jsx)("a",{href:"https://owncast.online/docs/social",rel:"noopener noreferrer",target:"_blank",children:"Read more about the specifics of these social features."})}),(0,a.jsxs)(i.Z,{children:[(0,a.jsxs)(c.Z,{span:15,className:"form-module",style:{marginRight:"15px"},children:[Y,M&&K,(0,a.jsx)(f.Z,{fieldName:"enabled",onChange:e=>{e?r(!0):t({...n,enabled:!1})},...m.Kl,checked:n.enabled,disabled:M||!D||!L}),(0,a.jsx)(f.Z,{fieldName:"isPrivate",...m.LC,checked:n.isPrivate,disabled:!Z}),(0,a.jsx)(f.Z,{fieldName:"nsfw",useSubmit:!0,...m.B_,checked:n.nsfw,disabled:M||!D}),(0,a.jsx)(h.$7,{required:!0,fieldName:"username",type:d.Kx,...m.Xc,value:n.username,initialValue:O,onChange:e=>{let{fieldName:a,value:l}=e;U({fieldName:a,value:l}),t({...n,username:l.replace(/\W/g,"")})},disabled:!Z}),(0,a.jsx)(h.$7,{fieldName:"goLiveMessage",...m.BF,type:d.Sk,value:n.goLiveMessage,initialValue:S,onChange:U,disabled:!Z}),(0,a.jsx)(f.Z,{fieldName:"showEngagement",...m.FE,checked:n.showEngagement,disabled:!Z})]}),(0,a.jsx)(c.Z,{span:8,className:"form-module",children:(0,a.jsx)(p.Y,{title:m.dR.label,placeholder:m.dR.placeholder,description:m.dR.tip,values:n.blockedDomains,handleDeleteIndex:function(e){n.blockedDomains.splice(e,1),R()},handleCreateString:function(e){let t;try{t=new URL(e).host}catch(n){t=e}n.blockedDomains.push(t),U({fieldName:"blockedDomains",value:n.blockedDomains}),R()},submitStatus:(0,g.kg)(w)})})]}),l&&(0,a.jsx)(x,{cancelPressed:function(){r(!1),t({...n,enabled:!1})},okPressed:function(){r(!1),t({...n,enabled:!0})}})]})};y.getLayout=function(e){return(0,a.jsx)(v.l,{page:e})},n.default=y},11163:function(e,n,t){e.exports=t(43079)},1554:function(e,n,t){"use strict";function a(e){return n=>{let t=(e?Math[e]:Math.trunc)(n);return 0===t?0:t}}t.d(n,{u:function(){return a}})},58005:function(e,n,t){"use strict";t.d(n,{_:function(){return l}});var a=t(63923);function l(e,n){return+(0,a.Q)(e)-+(0,a.Q)(n)}},65476:function(e,n,t){"use strict";t.d(n,{c:function(){return r}});var a=t(1554),l=t(58005);function r(e,n,t){let r=(0,l._)(e,n)/1e3;return(0,a.u)(null==t?void 0:t.roundingMethod)(r)}},63923:function(e,n,t){"use strict";function a(e){let n=Object.prototype.toString.call(e);return e instanceof Date||"object"==typeof e&&"[object Date]"===n?new e.constructor(+e):new Date("number"==typeof e||"[object Number]"===n||"string"==typeof e||"[object String]"===n?e:NaN)}t.d(n,{Q:function(){return a}})}},function(e){e.O(0,[83,1287,9796,443,7786,9904,3657,6167,2502,5889,2888,9774,179],function(){return e(e.s=18957)}),_N_E=e.O()}]);