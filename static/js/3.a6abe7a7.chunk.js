(this["webpackJsonpstarter-bt5"]=this["webpackJsonpstarter-bt5"]||[]).push([[3],{149:function(e,t,c){"use strict";var n=c(9),i=c(3);t.a=function(e){return Object(i.jsxs)(n.g,{children:[Object(i.jsx)(n.j,{alt:"Card image cap",src:e.image}),Object(i.jsxs)(n.h,{className:"p-4",children:[Object(i.jsx)(n.m,{tag:"h5",children:e.title}),Object(i.jsx)(n.k,{children:e.subtitle}),Object(i.jsx)(n.l,{className:"mt-3",children:e.text}),Object(i.jsx)(n.e,{color:e.color,children:"Read More"})]})]})}},150:function(e,t,c){"use strict";t.a=c.p+"static/media/bg1.537e9bd5.jpg"},151:function(e,t,c){"use strict";t.a=c.p+"static/media/bg2.94ab4b60.jpg"},152:function(e,t,c){"use strict";t.a=c.p+"static/media/bg3.5668e1f0.jpg"},153:function(e,t,c){"use strict";t.a=c.p+"static/media/bg4.62319dde.jpg"},158:function(e,t,c){},171:function(e,t,c){"use strict";c.r(t);var n=c(33),i=c(12),s=c(9),a=c(154),r=c.n(a),l=c(3),o=function(){var e={series:[{name:"Iphone 13",data:[0,31,40,28,51,42,109,100]},{name:"Oneplue 9",data:[0,11,32,45,32,34,52,41]}],options:{chart:{type:"area"},dataLabels:{enabled:!1},grid:{strokeDashArray:3},stroke:{curve:"smooth",width:1},xaxis:{categories:["Jan","Feb","March","April","May","June","July","Aug"]}}};return Object(l.jsx)(s.g,{children:Object(l.jsxs)(s.h,{children:[Object(l.jsx)(s.m,{tag:"h5",children:"Sales Summary"}),Object(l.jsx)(s.k,{className:"text-muted",tag:"h6",children:"Yearly Sales Report"}),Object(l.jsx)(r.a,{type:"area",width:"100%",height:"390",options:e.options,series:e.series})]})})},b=c(1),j=[{title:"Cras justo odio",icon:"bi bi-bell",color:"primary",date:"6 minute ago"},{title:"New user registered.",icon:"bi bi-person",color:"info",date:"6 minute ago"},{title:"Server #1 overloaded.",icon:"bi bi-hdd",color:"danger",date:"6 minute ago"},{title:"New order received.",icon:"bi bi-bag-check",color:"success",date:"6 minute ago"},{title:"Cras justo odio",icon:"bi bi-bell",color:"dark",date:"6 minute ago"},{title:"Server #1 overloaded.",icon:"bi bi-hdd",color:"warning",date:"6 minute ago"}],d=function(){return Object(l.jsx)(s.g,{children:Object(l.jsxs)(s.h,{children:[Object(l.jsx)(s.m,{tag:"h5",children:"Feeds"}),Object(l.jsx)(s.k,{className:"mb-2 text-muted",tag:"h6",children:"Widget you can use"}),Object(l.jsx)(s.v,{flush:!0,className:"mt-4",children:j.map((function(e,t){return Object(l.jsxs)(s.w,{action:!0,href:"/",tag:"a",className:"d-flex align-items-center p-3 border-0",children:[Object(l.jsx)(s.e,{className:"rounded-circle me-3",size:"sm",color:e.color,children:Object(l.jsx)("i",{className:e.icon})}),e.title,Object(l.jsx)("small",{className:"ms-auto text-muted text-small",children:e.date})]},t)}))})]})})},u=c(59),g=function(e){return Object(l.jsx)(s.g,{children:Object(l.jsx)(s.h,{children:Object(l.jsxs)("div",{className:"d-flex",children:[Object(l.jsx)("div",{className:"circle-box lg-box d-inline-block ".concat(e.bg),children:Object(l.jsx)("i",{className:e.icon})}),Object(l.jsxs)("div",{className:"ms-3",children:[Object(l.jsx)("h3",{className:"mb-0 font-weight-bold",children:e.earning}),Object(l.jsx)("small",{className:"text-muted",children:e.subtitle})]})]})})})},x=c(149),m=c(150),h=c(151),O=c(152),p=c(153),f=c(22),w=c(8),v=c(45),N=(c(66),c(67)),k=c(156),y=c(157),S=(c(158),c.p+"static/media/spinner.e8697d57.gif"),C=Object(b.createContext)({scan:null,write:null,setActions:function(){}}),T=function(){var e=Object(b.useContext)(C),t=e.actions,c=e.setActions;return Object(l.jsxs)("div",{className:"scanner",children:[Object(l.jsx)("p",{className:"scanner-exit",onClick:function(){return c(Object(n.a)(Object(n.a)({},t),{},{scan:null}))},children:"X"}),Object(l.jsxs)("div",{className:"scanner-container",children:[Object(l.jsx)("img",{src:S,alt:"spinning log",className:"scanner-image"}),Object(l.jsx)("p",{className:"scanner-text",children:"Scanning..."})]})]})},R=(c(160),c(64)),A=function(){var e=Object(b.useState)(""),t=Object(i.a)(e,2),c=(t[0],t[1]),n=Object(b.useState)(""),s=Object(i.a)(n,2),a=s[0],r=s[1],o=Object(b.useContext)(C),j=o.actions,d=o.setActions,u=Object(b.useState)("tagger"),g=Object(i.a)(u,2),x=(g[0],g[1],Object(b.useCallback)(Object(y.a)(Object(k.a)().mark((function e(){var t;return Object(k.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!("NDEFReader"in window)){e.next=14;break}return e.prev=1,t=new window.NDEFReader,e.next=5,t.scan();case 5:console.log("Scan started successfully."),t.onreadingerror=function(){console.log("Cannot read data from the NFC tag. Try another one?")},t.onreading=function(e){console.log("NDEF message read."),m(e),d({scan:"scanned",write:null})},e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log("Error! Scan failed to start: ".concat(e.t0,"."));case 13:case 14:case"end":return e.stop()}}),e,null,[[1,10]])}))),[d])),m=function(e){var t=e.message,n=e.serialNumber;r(n);var i,s=Object(N.a)(t.records);try{for(s.s();!(i=s.n()).done;){var a=i.value;if("text"===a.recordType){var l=new TextDecoder(a.encoding);c(l.decode(a.data))}}}catch(o){s.e(o)}finally{s.f()}};return Object(b.useEffect)((function(){x()}),[x]),Object(l.jsx)(l.Fragment,{children:"scanned"===j.scan?Object(l.jsx)(R.a,{tagId:a}):Object(l.jsx)(T,{status:j.scan})})},B=[{image:m.a,title:"This is simple blog",subtitle:"2 comments, 1 Like",description:"This is a wider card with supporting text below as a natural lead-in to additional content.",btnbg:"primary"},{image:h.a,title:"Lets be simple blog",subtitle:"2 comments, 1 Like",description:"This is a wider card with supporting text below as a natural lead-in to additional content.",btnbg:"primary"},{image:O.a,title:"Don't Lamp blog",subtitle:"2 comments, 1 Like",description:"This is a wider card with supporting text below as a natural lead-in to additional content.",btnbg:"primary"},{image:p.a,title:"Simple is beautiful",subtitle:"2 comments, 1 Like",description:"This is a wider card with supporting text below as a natural lead-in to additional content.",btnbg:"primary"}];t.default=function(){Object(w.f)(),Object(v.b)();var e=Object(b.useState)(!1),t=Object(i.a)(e,2),c=(t[0],t[1]),a=Object(v.c)((function(e){return e.tagDetails.tagScanStatus})),r=Object(b.useState)(null),j=Object(i.a)(r,2),m=j[0],h=j[1],O=m||{},p=O.scan,N=(O.write,{actions:m,setActions:h}),k=function(e){h(Object(n.a)({},e))};return Object(b.useEffect)((function(){console.log(a),c(a)}),[a]),Object(l.jsxs)("div",{children:[Object(l.jsxs)(s.B,{children:[Object(l.jsx)(s.n,{sm:"6",lg:"6",children:Object(l.jsx)(f.a,{title:"Scan Tag",children:Object(l.jsx)(s.B,{children:Object(l.jsx)(s.n,{lg:"8",children:Object(l.jsx)("div",{className:"mt-3",children:Object(l.jsx)(s.e,{color:"primary",onClick:function(){return k({scan:"scanning",write:null})},children:"Scan"})})})})})}),Object(l.jsx)(s.n,{sm:"6",lg:"6",children:Object(l.jsx)(f.a,{title:"Register New Tag",children:Object(l.jsx)(s.B,{children:Object(l.jsx)(s.n,{lg:"8",children:Object(l.jsx)("div",{className:"mt-3",children:Object(l.jsx)(s.e,{color:"primary",onClick:function(){return k({scan:"scanning",write:null})},children:"Register"})})})})})})]}),Object(l.jsxs)(s.B,{children:[Object(l.jsx)(s.n,{sm:"6",lg:"3",children:Object(l.jsx)(g,{bg:"bg-light-success text-success",title:"Profit",subtitle:"Yearly Earning",earning:"$21k",icon:"bi bi-wallet"})}),Object(l.jsx)(s.n,{sm:"6",lg:"3",children:Object(l.jsx)(g,{bg:"bg-light-danger text-danger",title:"Refunds",subtitle:"Refund given",earning:"$1k",icon:"bi bi-coin"})}),Object(l.jsx)(s.n,{sm:"6",lg:"3",children:Object(l.jsx)(g,{bg:"bg-light-warning text-warning",title:"New Project",subtitle:"Yearly Project",earning:"456",icon:"bi bi-basket3"})}),Object(l.jsx)(s.n,{sm:"6",lg:"3",children:Object(l.jsx)(g,{bg:"bg-light-info text-into",title:"Sales",subtitle:"Weekly Sales",earning:"210",icon:"bi bi-bag"})})]}),Object(l.jsxs)(s.B,{children:[Object(l.jsx)(s.n,{sm:"6",lg:"6",xl:"7",xxl:"8",children:Object(l.jsx)(o,{})}),Object(l.jsx)(s.n,{sm:"6",lg:"6",xl:"5",xxl:"4",children:Object(l.jsx)(d,{})})]}),Object(l.jsx)(s.B,{children:Object(l.jsx)(s.n,{lg:"12",children:Object(l.jsx)(u.a,{})})}),Object(l.jsx)(s.B,{children:B.map((function(e,t){return Object(l.jsx)(s.n,{sm:"6",lg:"6",xl:"3",children:Object(l.jsx)(x.a,{image:e.image,title:e.title,subtitle:e.subtitle,text:e.description,color:e.btnbg})},t)}))}),Object(l.jsx)(C.Provider,{value:N,children:p&&Object(l.jsx)(A,{})})]})}}}]);
//# sourceMappingURL=3.a6abe7a7.chunk.js.map