(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1774],{93645:function(e,n,t){"use strict";t.d(n,{u:function(){return c}});var r={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(e){return e<0?Math.ceil(e):Math.floor(e)}};function c(e){return e?r[e]:r.trunc}},59910:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(19013),c=t(13882);function o(e,n){return(0,c.Z)(2,arguments),(0,r.Z)(e).getTime()-(0,r.Z)(n).getTime()}},11699:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var r=t(59910),c=t(13882),o=t(93645);function l(e,n,t){(0,c.Z)(2,arguments);var l=(0,r.Z)(e,n)/1e3;return(0,o.u)(null==t?void 0:t.roundingMethod)(l)}},23426:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/logs",function(){return t(2963)}])},75494:function(e,n,t){"use strict";t.d(n,{o:function(){return v}});var r=t(85893),c=t(67294),o=t(47271),l=t(14845),i=t(43796),a=t(53731),u=t(58091);let{Title:s}=o.default;function f(e,n){let t="black";return"warning"===n.level?t="orange":"error"===n.level&&(t="red"),(0,r.jsx)(l.Z,{color:t,children:e})}function d(e){return(0,r.jsx)(a.Z,{children:e})}let v=e=>{let{logs:n,initialPageSize:t}=e;if(!(null==n?void 0:n.length))return null;let[o,l]=(0,c.useState)(t);return(0,r.jsxs)("div",{className:"logs-section",children:[(0,r.jsx)(s,{children:"Logs"}),(0,r.jsx)(i.Z,{size:"middle",dataSource:n,columns:[{title:"Level",dataIndex:"level",key:"level",filters:[{text:"Info",value:"info"},{text:"Warning",value:"warning"},{text:"Error",value:"Error"}],onFilter:(e,n)=>0===n.level.indexOf(e),render:f},{title:"Timestamp",dataIndex:"time",key:"time",render:e=>{let n=new Date(e);return(0,u.Z)(n,"pp P")},sorter:(e,n)=>new Date(e.time).getTime()-new Date(n.time).getTime(),sortDirections:["descend","ascend"],defaultSortOrder:"descend"},{title:"Message",dataIndex:"message",key:"message",render:d}],rowKey:e=>e.time,pagination:{pageSize:o},onChange:e=>{l(e.pageSize)}})]})}},41760:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(97685),c=t(67294);function o(){var e=c.useReducer(function(e){return e+1},0);return(0,r.Z)(e,2)[1]}},28609:function(e,n,t){"use strict";var r=t(67294),c=t(41760),o=t(95872);n.Z=function(){var e=!(arguments.length>0)||void 0===arguments[0]||arguments[0],n=(0,r.useRef)({}),t=(0,c.Z)();return(0,r.useEffect)(function(){var r=o.ZP.subscribe(function(r){n.current=r,e&&t()});return function(){return o.ZP.unsubscribe(r)}},[]),n.current}},14845:function(e,n,t){"use strict";t.d(n,{Z:function(){return Z}});var r=t(4942),c=t(87462),o=t(97685),l=t(96494),i=t(93967),a=t.n(i),u=t(55548),s=t(67294),f=t(71946),d=t(5505),v=t(40823),p=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>n.indexOf(r)&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var c=0,r=Object.getOwnPropertySymbols(e);c<r.length;c++)0>n.indexOf(r[c])&&Object.prototype.propertyIsEnumerable.call(e,r[c])&&(t[r[c]]=e[r[c]]);return t},g=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>n.indexOf(r)&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var c=0,r=Object.getOwnPropertySymbols(e);c<r.length;c++)0>n.indexOf(r[c])&&Object.prototype.propertyIsEnumerable.call(e,r[c])&&(t[r[c]]=e[r[c]]);return t},m=new RegExp("^(".concat(d.Y.join("|"),")(-inverse)?$")),h=new RegExp("^(".concat(d.E.join("|"),")$")),b=s.forwardRef(function(e,n){var t=e.prefixCls,i=e.className,d=e.style,p=e.children,b=e.icon,Z=e.color,x=e.onClose,y=e.closeIcon,E=e.closable,C=g(e,["prefixCls","className","style","children","icon","color","onClose","closeIcon","closable"]),w=s.useContext(f.E_),O=w.getPrefixCls,k=w.direction,j=s.useState(!0),P=(0,o.Z)(j,2),N=P[0],_=P[1];s.useEffect(function(){"visible"in C&&_(C.visible)},[C.visible]);var I=function(){return!!Z&&(m.test(Z)||h.test(Z))},S=(0,c.Z)({backgroundColor:Z&&!I()?Z:void 0},d),T=I(),M=O("tag",t),R=a()(M,(0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)({},"".concat(M,"-").concat(Z),T),"".concat(M,"-has-color"),Z&&!T),"".concat(M,"-hidden"),!N),"".concat(M,"-rtl"),"rtl"===k),i),D=function(e){e.stopPropagation(),null==x||x(e),!e.defaultPrevented&&("visible"in C||_(!1))},z="onClick"in C||p&&"a"===p.type,L=(0,u.Z)(C,["visible"]),F=b||null,X=F?s.createElement(s.Fragment,null,F,s.createElement("span",null,p)):p,$=s.createElement("span",(0,c.Z)({},L,{ref:n,className:R,style:S}),X,void 0!==E&&E?y?s.createElement("span",{className:"".concat(M,"-close-icon"),onClick:D},y):s.createElement(l.Z,{className:"".concat(M,"-close-icon"),onClick:D}):null);return z?s.createElement(v.Z,null,$):$});b.CheckableTag=function(e){var n=e.prefixCls,t=e.className,o=e.checked,l=e.onChange,i=e.onClick,u=p(e,["prefixCls","className","checked","onChange","onClick"]),d=(0,s.useContext(f.E_).getPrefixCls)("tag",n),v=a()(d,(0,r.Z)((0,r.Z)({},"".concat(d,"-checkable"),!0),"".concat(d,"-checkable-checked"),o),t);return s.createElement("span",(0,c.Z)({},u,{className:v,onClick:function(e){null==l||l(!o),null==i||i(e)}}))};var Z=b},2963:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return a}});var r=t(85893),c=t(67294),o=t(75494),l=t(6925),i=t(695);function a(){let[e,n]=(0,c.useState)([]),t=async()=>{try{let e=await (0,l.rQ)(l.sG);n(e)}catch(e){console.log("==== error",e)}};return(0,c.useEffect)(()=>{let e=null;return setInterval(t,5e3),t(),e=setInterval(t,5e3),()=>{clearInterval(e)}},[]),(0,r.jsx)(o.o,{logs:e,initialPageSize:20})}a.getLayout=function(e){return(0,r.jsx)(i.l,{page:e})}},11163:function(e,n,t){e.exports=t(73035)}},function(e){e.O(0,[6410,8768,947,7406,4716,2862,7271,9083,811,5386,9974,8625,3796,2864,8091,9404,695,2888,9774,179],function(){return e(e.s=23426)}),_N_E=e.O()}]);