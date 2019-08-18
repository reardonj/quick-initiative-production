(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{70:function(e,n,t){e.exports=t(86)},75:function(e,n,t){},86:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(8),c=t.n(i),l=(t(75),t(158)),o=t(154),u=t(148),s=t(149),m=t(46),f=t(4),d=t(14),v=t(124),h=t(88),p=t(126),E=t(153),g=t(127),b=t(130),w=t(131),y=t(121),k=t(120),C=t(155),j=t(125),O=[25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0,-1,-2];var I=Object(f.a)(function(e){return{button:{margin:e.spacing(1)}}})(function(e){var n=e.classes,t=e.disabled,i=e.onSelected,c=Object(a.useState)(null),l=Object(d.a)(c,2),o=l[0],u=l[1];return r.a.createElement("span",null,r.a.createElement(k.a,{onClick:function(e){u(e.currentTarget)},className:n.button,disabled:t,"aria-label":"Add to Initiative"},r.a.createElement(y.a,null)),r.a.createElement(C.a,{id:"lock-menu",anchorEl:o,open:Boolean(o),onClose:function(){u(null)}},O.map(function(e,n){return r.a.createElement(j.a,{dense:!0,key:e,onClick:function(e){return function(e,n){u(null),i(O[n])}(0,n)}},e)})))}),N=t(30),x=t(43),S=function(){function e(n,t){Object(N.a)(this,e),this.round=n,this.activeItem=t}return Object(x.a)(e,[{key:"next",value:function(n){var t=(this.activeItem+1)%n,a=this.round;return t<=this.activeItem&&a++,new e(a,t)}}]),e}(),M="NotStarted",L=function(){function e(n,t,a,r,i,c){Object(N.a)(this,e),this.name=n,this.init=t,this.id=a,this.active=r,this.canMoveDown=i,this.canMoveUp=c}return Object(x.a)(e,[{key:"updateActive",value:function(n){return new e(this.name,this.init,this.id,n,this.canMoveDown,this.canMoveUp)}},{key:"updateMovement",value:function(n,t){var a=n<t-1,r=n>0;return new e(this.name,this.init,this.id,this.active,a,r)}}]),e}();function T(e){var n=[];return{fire:function(){return n.map(function(n){return n(e())})},useEvents:function(t){var r=Object(a.useState)(e),i=Object(d.a)(r,2),c=i[0],l=i[1],o=function(e){l(e),t(e)};return Object(a.useEffect)(function(){return n.push(o),function(){return function(e,n){for(var t=e.length-1;t>=0;t--)e[t]===n&&e.splice(t,1)}(n,o)}}),c}}}var B=M,D=T(function(){return B}),A=D.fire,R=D.useEvents;var z=0,F=[],G={},J=T(function(){return F.slice().map(function(e){return G[e].entry})}),P=J.fire,U=J.useEvents;function W(e){return G[F[e]]}function q(e,n){$(e,n,function(e){for(var n=0;n<F.length;n++)if(W(n).entry.init<e)return n;return F.length}(n))}function $(e,n,t){var a=z++,r=new L(e,n,a,!1,!1,!1);F.splice(t,0,r.id),B instanceof S&&B.activeItem>=t&&(B=new S(B.round,B.activeItem+1),A()),G[r.id]={entry:r,handlers:T(function(){return G[r.id].entry})},K(t),P()}function _(e){var n=F.findIndex(function(n){return n===e.id});if(-1===n)throw new Error("Tried to remove initiative entry that doesn't exist. ID:"+e.id);if(F.splice(n,1),delete G[e.id],P(),K(Math.min(n,F.length-1)),B instanceof S){if(0===F.length)B=M;else if(n>=B.activeItem){var t=Math.max(0,B.activeItem-1);if(B=new S(B.round,t),e.active){var a=W(t);V(a,!0),a.handlers.fire()}}A()}}function Q(e,n){var t=F[e];F[e]=F[n],F[n]=t;var a=H(e),r=H(n);B instanceof S&&(e===B.activeItem?(B=new S(B.round,n),A()):n===B.activeItem&&(B=new S(B.round,e),A())),P(),a(),r()}function H(e){var n=W(e);return n.entry=n.entry.updateMovement(e,F.length),n.handlers.fire}function K(e){e>=F.length||e<0||(H(e)(),e>0&&H(e-1)(),e<F.length-1&&H(e+1)())}function V(e,n){G[e.entry.id].entry=e.entry.updateActive(n)}var X=function e(n){Object(N.a)(this,e),this.name=n,this.groups=void 0,this.groups=new Set};function Y(e,n){return e.name.localeCompare(n.name)}var Z=T(ae),ee=Z.fire,ne=Z.useEvents,te=new Map;function ae(){return Array.from(te.values(),function(e){return e.entry})}function re(e,n){if(te.has(e))return!1;var t=new X(e);return n.forEach(function(e){t.groups.add(e)}),te.set(e,{entry:t,handlers:T(function(){var n=te.get(e);if(n)return n.entry;throw new Error("Missing history item.")})}),ee(),!0}function ie(){localStorage.setItem("historyItems",JSON.stringify(ae().map(function(e){return{name:e.name,groups:Array.from(e.groups).filter(function(e){return e.length>0})}})))}var ce=localStorage.getItem("historyItems");ce&&JSON.parse(ce).forEach(function(e){re(e.name,e.groups)});var le=t(128);var oe=Object(f.a)(function(e){return{input:{margin:e.spacing(1)}}})(function(e){var n=function(e,n){var t=te.get(e);if(!t)throw new Error("Tried to get events for non-existant entry.");return t.handlers.useEvents(n)}(e.item.name,function(){});return r.a.createElement(h.a,{dense:!0,button:!0,onClick:function(){n.groups.has("")&&!e.showInit?function(e,n){var t=te.get(e.name);if(!t)throw new Error("Missing history item.");t.entry.groups.delete(n)&&(t.handlers.fire(),ee())}(n,""):function(e,n){var t=te.get(e.name);if(!t)throw new Error("Missing history item.");t.entry.groups.add(n),t.handlers.fire(),ee()}(n,"")}},r.a.createElement(p.a,{primary:n.name}),e.showInit?r.a.createElement(g.a,null,r.a.createElement(k.a,{onClick:function(){return function(e){te.delete(e.name)&&ee()}(n)}},r.a.createElement(le.a,null)),r.a.createElement(I,{disabled:!1,onSelected:function(e){q(n.name,e)}})):r.a.createElement(r.a.Fragment,null))});function ue(e){return null===e||null!==e.match(/^ *$/)}var se=t(129);var me=Object(f.a)(function(e){return{input:{margin:e.spacing(1)}}})(function(e){var n=e.classes,t=Object(a.useRef)(null),i=Object(a.useState)(!0),c=Object(d.a)(i,2),l=c[0],o=c[1],u=Object(a.useState)(""),s=Object(d.a)(u,2),m=s[0],f=s[1];return r.a.createElement(h.a,null,r.a.createElement(p.a,null,r.a.createElement(E.a,{inputRef:t,placeholder:"Group Name",onChange:function(e){o(ue(e.currentTarget.value)),f(e.currentTarget.value)},inputProps:{"aria-label":"Group Name"}})),r.a.createElement(g.a,null,r.a.createElement(k.a,{className:n.input,disabled:l,onClick:function(){var e,n;e="",n=m,te.forEach(function(t){t.entry.groups.delete(e)&&(t.entry.groups.add(n),t.handlers.fire())}),ee()}},r.a.createElement(se.a,null))))});var fe=Object(f.a)(function(){return{input:{},historyList:{overflow:"scroll",height:"calc(100% - 70px)"},filteringBar:{overflow:"hidden"}}})(function(e){var n=e.classes,t=Object(a.useRef)(null),i=Object(a.useState)(!0),c=Object(d.a)(i,2),l=c[0],o=c[1],u=Object(a.useState)(""),s=Object(d.a)(u,2),m=s[0],f=s[1],y=ne(ie),k=Object(a.useMemo)(function(){return y.filter(function(e){return function(e,n){if(e.name.toLocaleLowerCase().includes(n.toLocaleLowerCase()))return!0;var t=!1;return e.groups.forEach(function(e){e.toLocaleLowerCase().includes(n.toLocaleLowerCase())&&(t=!0)}),t}(e,m)}).sort(Y)},[y,m]),C=y.filter(function(e){return e.groups.has("")}),j=k.filter(function(e){return 0===e.groups.size}),O=new Map,N=!0,x=!1,S=void 0;try{for(var M,L=function(){var e=M.value;e.groups.forEach(function(n){if(!ue(n)){var t=O.get(n);void 0===t?O.set(n,[]):t.push(e)}})},T=k[Symbol.iterator]();!(N=(M=T.next()).done);N=!0)L()}catch(B){x=!0,S=B}finally{try{N||null==T.return||T.return()}finally{if(x)throw S}}return r.a.createElement("div",{className:n.filteringBar},r.a.createElement(v.a,null,r.a.createElement(h.a,null,r.a.createElement(p.a,null,r.a.createElement(E.a,{inputRef:t,placeholder:"Name",onChange:function(e){o(ue(e.currentTarget.value)),f(e.currentTarget.value)},className:n.input,inputProps:{"aria-label":"Name"}})),r.a.createElement(g.a,null,r.a.createElement(I,{disabled:l,onSelected:function(e){null!=t.current&&(q(t.current.value,e),re(t.current.value,[""]),t.current.value="",o(!0),f(""))}})))),r.a.createElement(b.a,null),C.length>0?r.a.createElement(v.a,null,r.a.createElement(me,null),C.map(function(e){return r.a.createElement(oe,{key:e.name,item:e,showInit:!1})}),r.a.createElement(b.a,null)):r.a.createElement(r.a.Fragment,null),r.a.createElement("div",{className:n.historyList},Array.from(O).sort(function(e,n){return e[0].localeCompare(n[0])}).map(function(e){return r.a.createElement(v.a,null,r.a.createElement(w.a,{disableSticky:!0},e[0]),e[1].map(function(e){return r.a.createElement(oe,{key:e.name,item:e,showInit:!0})}))}),j.length>0?r.a.createElement(v.a,null,r.a.createElement(w.a,{disableSticky:!0},"Others"),j.map(function(e){return r.a.createElement(oe,{key:e.name,item:e,showInit:!0})})):r.a.createElement(r.a.Fragment,null)))});var de=Object(f.a)(function(e){return{label:{margin:e.spacing(1)}}})(function(e){var n=e.classes,t=R(function(){});return t instanceof S?r.a.createElement(m.a,{variant:"body2",color:"inherit",noWrap:!0,className:n.label},"Round ",t.round):r.a.createElement(r.a.Fragment,null)}),ve=t(140),he=t(141),pe=t(132),Ee=t(133),ge=t(136),be=t(137),we=t(138),ye=t(134),ke=t(135),Ce=t(139),je=[2,3,4,5];var Oe=Object(f.a)(function(e){return{initCell:{width:"auto",align:"right",padding:"checkbox"},titleCell:{width:"100%"},actionCell:{width:"auto"},hpControls:{marginRight:e.spacing(2),alignSelf:"center"}}})(function(e){var n,t,i=e.classes,c=Object(a.useState)(0),l=Object(d.a)(c,2),o=l[0],u=l[1],s=(n=e.item.id,t=function(){},G[n].handlers.useEvents(t)),f=Object(a.useState)(null),v=Object(d.a)(f,2),h=v[0],p=v[1],E=function(e,n){p(null),function(e,n){for(var t=F.findIndex(function(n){return n===e.id}),a=G[F[t]],r=0;r<n;r++)$(a.entry.name+" ("+(r+2)+")",a.entry.init,t+1+r);a.entry=new L(a.entry.name+" (1)",a.entry.init,a.entry.id,a.entry.active,a.entry.canMoveDown,a.entry.canMoveUp),a.handlers.fire()}(s,je[n]-1)};return r.a.createElement(pe.a,{selected:s.active},r.a.createElement(Ee.a,{className:i.actionCell,padding:"checkbox"},r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(k.a,{onClick:function(e){return function(e){var n=F.findIndex(function(n){return n===e.id});if(-1===n)throw new Error("Tried to move initiative entry that doesn't exist. ID:"+e.id);0!==n&&Q(n,n-1)}(s)},disabled:!s.canMoveUp},r.a.createElement(ye.a,null)),r.a.createElement(k.a,{onClick:function(e){return function(e){var n=F.findIndex(function(n){return n===e.id});if(-1===n)throw new Error("Tried to move initiative entry that doesn't exist. ID:"+e.id);n!==F.length-1&&Q(n,n+1)}(s)},disabled:!s.canMoveDown},r.a.createElement(ke.a,null)))),r.a.createElement(Ee.a,{className:i.initCell},s.init),r.a.createElement(Ee.a,{className:i.titleCell},r.a.createElement(m.a,{variant:"subtitle1"},s.name)),r.a.createElement(Ee.a,{className:i.actionCell,padding:"checkbox"},r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(ge.a,{item:!0,alignItems:"center",style:{alignSelf:"center"}},r.a.createElement(be.a,{color:"primary",variant:"outlined",size:"small"},r.a.createElement(we.a,{onClick:function(){return u(o-10)}},"-10"),r.a.createElement(we.a,{onClick:function(){return u(o-5)}},"-5"),r.a.createElement(we.a,{onClick:function(){return u(o-1)}},"-1"))),r.a.createElement(ge.a,{item:!0,alignItems:"center",style:{alignSelf:"center"}},r.a.createElement(m.a,{align:"center",style:{width:50}},o)),r.a.createElement(ge.a,{item:!0,alignItems:"center",className:i.hpControls},r.a.createElement(be.a,{color:"primary",variant:"outlined",size:"small"},r.a.createElement(we.a,{onClick:function(){return u(o+1)}},"+1"),r.a.createElement(we.a,{onClick:function(){return u(o+5)}},"+5"),r.a.createElement(we.a,{onClick:function(){return u(o+10)}},"+10"))),r.a.createElement("span",null,r.a.createElement(k.a,{onClick:function(e){p(e.currentTarget)},className:i.button,"aria-label":"Duplicate Entry"},r.a.createElement(Ce.a,null)),r.a.createElement(C.a,{anchorEl:h,open:Boolean(h),onClose:function(){p(null)}},je.map(function(e,n){return r.a.createElement(j.a,{dense:!0,key:e,onClick:function(e){return E(0,n)}},e)}))),r.a.createElement(k.a,{onClick:function(e){return _(s)}},r.a.createElement(le.a,null)))))});var Ie=Object(f.a)(function(e){return{root:{width:"100%",backgroundColor:e.palette.background.paper},initCell:{width:"50px",align:"right"}}})(function(e){var n=e.classes,t=U(function(){});return r.a.createElement("div",{className:n.root},r.a.createElement(ve.a,null,r.a.createElement(he.a,null,t.map(function(e){return r.a.createElement(Oe,{item:e,key:e.id})}))))}),Ne=t(142),xe=t(143),Se=t(144);var Me=Object(f.a)(function(e){return{fabBox:{position:"absolute",bottom:e.spacing(2),right:e.spacing(2)},fab:{marginLeft:e.spacing(2)}}})(function(e){var n=e.classes,t=R(function(){}),a=U(function(){}),i=0===a.length;return r.a.createElement("div",{className:n.fabBox},r.a.createElement(Ne.a,{className:n.fab,color:"secondary",disabled:i,onClick:function(){return a.forEach(function(e){return _(e)})}},r.a.createElement(xe.a,null)),r.a.createElement(Ne.a,{className:n.fab,color:"primary",disabled:i,onClick:function(){return t instanceof S?function(){if(B instanceof S){var e=G[F[B.activeItem]];B=B.next(F.length);var n=G[F[B.activeItem]];V(e,!1),V(n,!0),A(),e.handlers.fire(),n.handlers.fire()}}():function(){if(0!==F.length){B=new S(1,0);var e=W(0);e.entry=e.entry.updateActive(!0),A(),e.handlers.fire()}}()}},r.a.createElement(Se.a,null)))}),Le=t(156),Te=t(157),Be=t(151),De=t(145),Ae=t(146),Re=t(147),ze=[{icon:r.a.createElement(De.a,null),name:"To www.jmreardon.com",url:"https://www.jmreardon.com/projects/quick_initiative/"},{icon:r.a.createElement(Ae.a,null),name:"Get the Code",url:"https://github.com/reardonj/quick-initiative"}];var Fe=Object(f.a)(function(e){return{speedDial:{position:"absolute",top:e.spacing(.5),right:e.spacing(.5)}}})(function(e){var n=e.classes,t=r.a.useState(!1),a=Object(d.a)(t,2),i=a[0],c=a[1],l=function(){return c(function(e){return!e})},o=function(){return c(!0)},u=function(){return c(!1)};return r.a.createElement("div",{className:n.root},r.a.createElement(Le.a,{ariaLabel:"SpeedDial openIcon example",className:n.speedDial,icon:r.a.createElement(Te.a,{icon:r.a.createElement(Re.a,null),openIcon:r.a.createElement(Re.a,null)}),onBlur:u,onClick:l,onClose:u,onFocus:o,onMouseEnter:o,onMouseLeave:u,open:i,direction:"down"},ze.map(function(e){return r.a.createElement(Be.a,{key:e.name,icon:e.icon,tooltipTitle:e.name,onClick:function(){l(),window.open(e.url,"_blank")}})})))});var Ge=Object(f.a)(function(e){return{root:{display:"flex"},appBar:{zIndex:e.zIndex.drawer+1},drawer:{width:300,flexShrink:0},drawerPaper:{width:300},content:{flexGrow:1,padding:e.spacing(2),marginLeft:300},input:{margin:e.spacing(1)},toolbar:e.mixins.toolbar,grow:{flexGrow:1}}})(function(e){var n=e.classes;return r.a.createElement("div",{className:"App"},r.a.createElement(l.a,null),r.a.createElement(u.a,{position:"fixed",className:n.appBar},r.a.createElement(s.a,null,r.a.createElement(m.a,{variant:"h6",color:"inherit",noWrap:!0},"Quick Initiative"),r.a.createElement(de,null),r.a.createElement("div",{className:n.grow}),r.a.createElement(Fe,null))),r.a.createElement(o.a,{className:n.drawer,variant:"permanent",classes:{paper:n.drawerPaper},anchor:"left"},r.a.createElement("div",{className:n.toolbar}),r.a.createElement(fe,null)),r.a.createElement("main",{className:n.content},r.a.createElement("div",{className:n.toolbar}),r.a.createElement(Ie,null)),r.a.createElement(Me,null))});var Je=function(e){return r.a.createElement(Ge,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(Je,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[70,1,2]]]);
//# sourceMappingURL=main.74533597.chunk.js.map