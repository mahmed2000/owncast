(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8763],{28763:function(e,t,n){"use strict";n.r(t),n.d(t,{ChatContainer:function(){return ge}});var a=n(85893),s=n(9764),r=n(67294),o=n(36531),i=n(11622),c=n(13545),l=n.n(c),u=n(14924),d=n(86492),h=n.n(d),m=n(94184),g=n.n(m),p=n(94199),f=n(29158),x=n(4480),_=n(5152),C=n.n(_),v=n(78583),j=n.n(v);function y(e){var t=new Date(e);if(Number.isNaN(t))return"";if(function(e){var t="string"===typeof e?new Date(e):e;return(new Date-t)/864e5}(e)>=1){var n=t.toLocaleDateString("en-US",{dateStyle:"medium"});return"at ".concat(n," at ").concat(t.toLocaleTimeString())}return"".concat(t.toLocaleTimeString())}var N,M,b,w,S,E=n(79010),T=n.n(E),k=function(e){var t=e.badge,n=e.userColor,s="var(--theme-user-colors-".concat(n,")"),r={color:s,borderColor:s};return(0,a.jsx)("span",{style:r,className:T().badge,children:t})},B=n(1899),D=C()((function(){return Promise.all([n.e(8939),n.e(3903),n.e(3698),n.e(3626),n.e(8091),n.e(1300),n.e(7781)]).then(n.bind(n,87781)).then((function(e){return e.ChatModerationActionMenu}))}),{loadableGenerated:{webpack:function(){return[87781]}}}),O=C()((function(){return Promise.resolve().then(n.bind(n,47049)).then((function(e){return e.Highlight}))}),{loadableGenerated:{webpack:function(){return[47049]}}}),U=function(e){var t=e.message,n=e.highlightString,s=e.showModeratorMenu,o=e.sentBySelf,i=e.sameUserAsLast,c=e.isAuthorModerator,l=e.isAuthorAuthenticated,d=t.id,m=t.body,_=t.user,C=t.timestamp,v=_.id,N=_.displayName,M=_.displayColor,b=(0,x.sJ)(B.FI),w="var(--theme-color-users-".concat(M,")"),S="Sent ".concat(y(C)),E=(0,r.useState)(m),T=E[0],U=E[1],A=[];return c&&A.push((0,a.jsx)(k,{badge:"mod",userColor:M},"mod")),l&&A.push((0,a.jsx)(k,{badge:(0,a.jsx)(f.Z,{title:"authenticated"}),userColor:M},"auth")),(0,r.useEffect)((function(){U(h().decode(m))}),[t]),(0,a.jsx)("div",{className:g()(j().messagePadding,i&&j().messagePaddingCollapsed),children:(0,a.jsxs)("div",{className:g()(j().root,(0,u.Z)({},j().ownMessage,o)),style:{borderColor:w},children:[!i&&(0,a.jsx)(p.Z,{title:"user info goes here",placement:"topLeft",mouseEnterDelay:1,children:(0,a.jsxs)("div",{className:j().user,style:{color:w},children:[(0,a.jsx)("span",{className:j().userName,children:N}),(0,a.jsx)("span",{children:A})]})}),(0,a.jsx)(p.Z,{title:S,mouseEnterDelay:1,children:(0,a.jsx)(O,{search:n,children:(0,a.jsx)("div",{className:j().message,dangerouslySetInnerHTML:{__html:T}})})}),s&&(0,a.jsx)("div",{className:j().modMenuWrapper,children:(0,a.jsx)(D,{messageID:d,accessToken:b,userID:v,userDisplayName:N})}),(0,a.jsx)("div",{className:j().background,style:{color:w}})]})})},A=n(26042),F=n(69396),I=n(828),R=n(93045),Z=n(27496),L=n(55241),H=n(77493),P=n(96391),W=n(25882),G=n.n(W),V=C()((function(){return Promise.all([n.e(7741),n.e(786)]).then(n.bind(n,30786)).then((function(e){return e.EmojiPicker}))}),{loadableGenerated:{webpack:function(){return[30786]}}}),Y=function(e){var t=e.attributes,n=e.element,s=e.children,r=(0,P.vt)(),o=(0,P.UE)();return(0,a.jsxs)("span",(0,F.Z)((0,A.Z)({},t),{contentEditable:!1,children:[(0,a.jsx)("img",{alt:n.alt,src:n.src,title:n.name,style:{display:"inline",maxWidth:"50px",maxHeight:"20px",boxShadow:"".concat(r&&o?"0 0 0 3px #B4D5FF":"none")}}),s]}))},J=function(e){var t,n;if(H.xv.isText(e))return e.text;0===e.children.length?t=[{text:""}]:t=null===(n=e.children)||void 0===n?void 0:n.map((function(e){return J(e)})).join("");switch(e.type){case"paragraph":return"<p>".concat(t,"</p>");case"image":return'<img src="'.concat(e.src,'" alt="').concat(e.alt,'" title="').concat(e.name,'" class="emoji"/>');default:return t}},z=function(e){if(H.xv.isText(e))return e.text.length;if("image"===e.type)return 5;var t=0;return e.children.forEach((function(e){t+=z(e)})),t},X=function(e){var t=e.defaultText,n=(0,r.useState)(!1),s=n[0],o=n[1],c=(0,r.useState)(null===t||void 0===t?void 0:t.length),l=c[0],u=c[1],d=(0,x.sJ)(B.Gt),h=(0,r.useMemo)((function(){return(0,P.BU)(function(e){var t=e.isVoid;return e.isVoid=function(e){return"image"===e.type||t(e)},e.isInline=function(e){return"image"===e.type},e}((0,H.Jh)()))}),[]),m=[{type:"paragraph",children:[{text:t||""}]}],p=function(){if(d){var e=J(h);d.send({type:i.C.CHAT,body:e}),H.YR.delete(h,{at:{anchor:H.ML.start(h,[]),focus:H.ML.end(h,[])}}),u(0)}else console.log("websocketService is not defined")};return(0,a.jsx)("div",{className:G().root,children:(0,a.jsxs)("div",{className:g()(G().inputWrap,l>=300&&G().maxCharacters),children:[(0,a.jsxs)(P.mH,{editor:h,value:m,children:[(0,a.jsx)(P.CX,{onKeyDown:function(e){var t=z(h)+1;if("Enter"===e.key)return e.preventDefault(),void p();"Backspace"!==e.key?(t+1>300&&e.preventDefault(),u(t+1)):u(t-1)},onPaste:function(e){var t=e.clipboardData.getData("text/plain").length;l+t>300&&e.preventDefault()},renderElement:function(e){return"image"===e.element.type?(0,a.jsx)(Y,(0,A.Z)({},e)):(0,a.jsx)("p",(0,A.Z)({},e))},placeholder:"Chat message goes here...",style:{width:"100%"},autoFocus:!0}),(0,a.jsx)(L.Z,{content:(0,a.jsx)(V,{onEmojiSelect:function(e){P.F3.focus(h),H.YR.insertText(h,e)},onCustomEmojiSelect:function(e,t){P.F3.focus(h),function(e,t){if(e){var n=h.selection,a=function(e,t,n){return{type:"image",alt:e,src:t,name:n,children:[{text:""}]}}(t,e,t);if(H.YR.insertNodes(h,a,{select:!0}),n){var s,r=(0,I.Z)(H.ML.parent(h,null===(s=n.focus)||void 0===s?void 0:s.path),2),o=r[0],i=r[1];h.isVoid(o)||H.NB.string(o).length?H.YR.insertNodes(h,a,{at:H.y$.next(i),select:!0}):(H.YR.insertNodes(h,a,{at:i,select:!0}),H.ML.normalize(h,{force:!0}))}else H.YR.insertNodes(h,a,{select:!0})}}(t,e)}}),trigger:"click",onOpenChange:function(e){return o(e)},open:s})]}),(0,a.jsxs)("div",{style:{display:"flex",paddingLeft:"5px"},children:[(0,a.jsx)("button",{type:"button",className:G().emojiButton,title:"Emoji picker button",onClick:function(){return o(!s)},children:(0,a.jsx)(R.Z,{})}),(0,a.jsx)("button",{type:"button",className:G().sendButton,title:"Send message Button",onClick:p,children:(0,a.jsx)(Z.Z,{})})]})]})})},q=n(93174),K=n.n(q);function $(){return $=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},$.apply(this,arguments)}var Q=function(e){return r.createElement("svg",$({height:500,viewBox:"0 0 132.292 132.292",width:500,xmlns:"http://www.w3.org/2000/svg",role:"img"},e),N||(N=r.createElement("linearGradient",{id:"moderator_svg__a",gradientUnits:"userSpaceOnUse",x1:432.851,x2:464.644,y1:49.977,y2:49.977},r.createElement("stop",{offset:0,stopColor:"#2087e2"}),r.createElement("stop",{offset:1,stopColor:"#b63fff"}))),M||(M=r.createElement("path",{d:"M438.672 34.08h20.151a5.82 5.82 45 0 1 5.82 5.821v20.151a5.82 5.82 135 0 1-5.82 5.821h-20.15a5.82 5.82 45 0 1-5.822-5.82V39.9a5.82 5.82 135 0 1 5.821-5.82z",fill:"url(#moderator_svg__a)",transform:"matrix(4.16112 0 0 4.16112 -1801.146 -141.814)"})),b||(b=r.createElement("path",{d:"M121.11 29.551c-6.93 47.444-30.074 104.618-77.642 79.674l25.83 23.067h38.772c13.377 0 24.22-10.845 24.22-24.222V40.864z",fill:"#1d1535",fillOpacity:.335})),w||(w=r.createElement("path",{d:"M66.775 13.257s-7.129 57.999-.63 99.312c6.565 41.724-81.568-74.394-49.619-79.203 31.949-4.809 50.249-20.11 50.249-20.11z",fill:"#e2e8f0",fillOpacity:.306})),S||(S=r.createElement("path",{d:"M435.995 42.072c6.797.447 12.753-4.806 12.753-4.806s5.955 5.253 12.752 4.806c-.581 12.745-7.495 20.586-12.752 20.628-5.188.042-12.172-7.883-12.753-20.628z",fill:"none",stroke:"#fff",strokeLinejoin:"round",strokeWidth:2,transform:"matrix(4.16112 0 0 4.16112 -1801.146 -141.814)"})))},ee=function(){return(0,a.jsxs)("div",{className:K().chatModerationNotification,children:[(0,a.jsx)(Q,{className:K().icon}),"You are now a moderator."]})},te=n(47049),ne=n(31681),ae=n.n(ne),se=function(e){var t=e.message,n=t.body,s=t.user.displayName,r=e.highlightString;return(0,a.jsxs)("div",{className:ae().chatSystemMessage,children:[(0,a.jsx)("div",{className:ae().user,children:(0,a.jsx)("span",{className:ae().userName,children:s})}),(0,a.jsx)(te.Highlight,{search:r,children:(0,a.jsx)("div",{className:ae().message,dangerouslySetInnerHTML:{__html:n}})})]})},re=n(55355),oe=n(83066),ie=n.n(oe),ce=function(e){var t=e.isAuthorModerator,n=e.userColor,s=e.displayName,r="var(--theme-color-users-".concat(n,")");return(0,a.jsxs)("div",{className:ie().root,children:[(0,a.jsxs)("span",{style:{color:r},children:[(0,a.jsx)("span",{style:{padding:"0 10px"},children:(0,a.jsx)(re.Z,{})}),(0,a.jsx)("span",{style:{fontWeight:"bold"},children:s}),t&&(0,a.jsx)("span",{children:(0,a.jsx)(k,{badge:"mod",userColor:n})})]})," ","joined the chat."]})},le=n(66017),ue=n(71577),de=function(e){var t=e.chatContainerRef,n=e.messages;return(0,a.jsx)("div",{className:l().toBottomWrap,children:(0,a.jsx)(ue.Z,{type:"default",style:{color:"currentColor"},icon:(0,a.jsx)(le.Z,{}),onClick:function(){return t.current.scrollToIndex({index:n.length-1,behavior:"smooth"})},children:"Go to last message"})})};function he(e,t){if(e.length<2)return!1;var n=e[t],a=n.user.id,s=e[t-1];if((null===s||void 0===s?void 0:s.type)!==i.C.CHAT)return!1;if(!s.timestamp||!n.timestamp)return!1;var r=new Date(s.timestamp).getTime();return!(new Date(n.timestamp).getTime()-r>12e4)&&a===(null===s||void 0===s?void 0:s.user.id)}function me(e){var t=e.user.scopes;return!(!t||0===t.length)&&t.includes("MODERATOR")}var ge=function(e){var t=e.messages,n=e.usernameToHighlight,c=e.chatUserId,u=e.isModerator,d=e.showInput,h=e.height,m=(0,r.useState)(!1),g=m[0],p=m[1],f=(0,r.useRef)(null),x=function(e,s){switch(s.type){case i.C.CHAT:var r,d,h;return(0,a.jsx)(U,{message:s,showModeratorMenu:u,highlightString:n,sentBySelf:(null===(r=s.user)||void 0===r?void 0:r.id)===c,sameUserAsLast:he(t,e),isAuthorModerator:null===(d=s.user.scopes)||void 0===d?void 0:d.includes("MODERATOR"),isAuthorAuthenticated:null===(h=s.user)||void 0===h?void 0:h.authenticated},s.id);case i.C.NAME_CHANGE:return function(e){var t=e.oldName,n=e.user,s=n.displayName,r=n.displayColor,i="var(--theme-color-users-".concat(r,")");return(0,a.jsxs)("div",{className:l().nameChangeView,children:[(0,a.jsx)("div",{style:{marginRight:5,height:"max-content",margin:"auto 5px auto 0"},children:(0,a.jsx)(o.Z,{})}),(0,a.jsxs)("div",{className:l().nameChangeText,children:[(0,a.jsx)("span",{style:{color:i},children:t}),(0,a.jsx)("span",{className:l().plain,children:" is now known as "}),(0,a.jsx)("span",{style:{color:i},children:s})]})]})}(s);case i.C.CONNECTED_USER_INFO:return function(e){if(!me(e))return(0,a.jsx)("div",{style:{width:"1px",height:"1px"}});return(0,a.jsx)(ee,{})}(s);case i.C.USER_JOINED:return function(e){var t=e.user,n=t.displayName,s=t.displayColor,r=me(e);return(0,a.jsx)(ce,{displayName:n,userColor:s,isAuthorModerator:r})}(s);case i.C.SYSTEM:return(0,a.jsx)(se,{message:s,highlightString:n},s.id);default:return null}},_=(0,r.useMemo)((function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.OO,{style:{height:h},className:l().virtuoso,ref:f,initialTopMostItemIndex:t.length-1,data:t,itemContent:function(e,t){return x(e,t)},followOutput:"auto",alignToBottom:!0,atBottomStateChange:function(e){return p(e)}}),!g&&(0,a.jsx)(de,{chatContainerRef:f,messages:t})]})}),[t,n,c,u,g]);return(0,a.jsxs)("div",{className:l().chatContainer,children:[_,d&&(0,a.jsx)(X,{})]})};ge.defaultProps={showInput:!0,height:"auto"}},13545:function(e){e.exports={chatHeader:"ChatContainer_chatHeader__EJsYI",toBottomWrap:"ChatContainer_toBottomWrap__3V5wa",toBottomBtn:"ChatContainer_toBottomBtn__453AG",nameChangeView:"ChatContainer_nameChangeView__ziyXN",nameChangeText:"ChatContainer_nameChangeText__yXG__",plain:"ChatContainer_plain__IPS19",chatContainer:"ChatContainer_chatContainer__O2lYN",virtuoso:"ChatContainer_virtuoso__OS9Kz"}},83066:function(e){e.exports={root:"ChatJoinMessage_root__vuVXa"}},93174:function(e){e.exports={chatModerationNotification:"ChatModeratorNotification_chatModerationNotification__kgFWe",icon:"ChatModeratorNotification_icon__7FdGg"}},31681:function(e){e.exports={chatSystemMessage:"ChatSystemMessage_chatSystemMessage__c6XEN",user:"ChatSystemMessage_user__6yHSJ",message:"ChatSystemMessage_message__ySq5g"}},25882:function(e){e.exports={root:"ChatTextField_root__4oUkJ",inputWrap:"ChatTextField_inputWrap__1mAjD",maxCharacters:"ChatTextField_maxCharacters__yGT4s",emojiButton:"ChatTextField_emojiButton__ON_Cu",sendButton:"ChatTextField_sendButton__MOmD4"}},79010:function(e){e.exports={badge:"ChatUserBadge_badge__1EdUp"}},78583:function(e){e.exports={root:"ChatUserMessage_root__79heB",user:"ChatUserMessage_user__xUEp9",message:"ChatUserMessage_message__MJ9LD",ownMessage:"ChatUserMessage_ownMessage__d28A3",background:"ChatUserMessage_background__Tfghp",modMenuWrapper:"ChatUserMessage_modMenuWrapper__7fblv",messagePadding:"ChatUserMessage_messagePadding__Xp1F6",messagePaddingCollapsed:"ChatUserMessage_messagePaddingCollapsed__qxN0E"}}}]);