(this["webpackJsonpstarter-bt5"]=this["webpackJsonpstarter-bt5"]||[]).push([[0],{115:function(e,t,c){"use strict";c.d(t,"b",(function(){return s}));var a=c(124),n=Object(a.b)({name:"tag",initialState:{tagId:"",tagScanStatus:!1,tagListRequiredDetails:{}},reducers:{setTagId:function(e,t){e.tagId=t.payload},setTagScanStatus:function(e,t){e.tagScanStatus=t.payload},setTagDetailsRequiredDetails:function(e,t){e.tagListRequiredDetails=t.payload}}}),s=n.actions;t.a=n.reducer},117:function(e,t,c){"use strict";t.a=c.p+"static/media/user1.f3714f33.jpg"},131:function(e,t,c){"use strict";t.a=c.p+"static/media/user2.ddd14b39.jpg"},132:function(e,t,c){"use strict";t.a=c.p+"static/media/user3.a57a5165.jpg"},133:function(e,t,c){"use strict";t.a=c.p+"static/media/user4.6ac95ef9.jpg"},134:function(e,t,c){"use strict";t.a=c.p+"static/media/user5.847ea5a9.jpg"},152:function(e,t,c){"use strict";var a=c(4),n=c(2),s=c(9),r=c(0),i=c(77),l=c(106),j=c(280),o=c(198),d=c(202),u=c(200),b=c(158),h=c(199),O=c(46),x=c(67),m=c(21),g=c(62),f=c(40),p=c.n(f),v=c(3);t.a=function(e){var t=Object(m.e)(),c=(Object(x.b)(),Object(m.f)().tagId),f=Object(r.useState)({tagId:c,userId:"default",name:"",houseNo:"",phoneNo:"",locality:"",city:"",state:"",pincode:"0000000"}),y=Object(s.a)(f,2),N=y[0],S=y[1],C=function(e){var t=e.target,c=t.name,s=t.value;console.log(c,s),S((function(e){return Object(n.a)(Object(n.a)({},e),{},Object(a.a)({},c,s))}))};return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(O.a,{title:"Form Details",children:Object(v.jsx)("form",{onSubmit:function(e){e.preventDefault(),console.log(N),g.a.tagRegister(N).then((function(e){console.log(e),p.a.fire({icon:"Already Registerd"===e.data.message?"error":"success",title:e.data.message}),S({tagId:"",userId:"",name:"",houseNo:"",phoneNo:"",locality:"",city:"",state:"",pincode:""}),t("/starter")})).catch((function(e){console.log(e.response.data.errors),p.a.fire({icon:"error",title:"Error",text:"Enter Correct Details"})}))},children:Object(v.jsxs)(i.a,{container:!0,spacing:2,children:[Object(v.jsx)(i.a,{item:!0,xs:12,children:Object(v.jsx)(l.a,{name:"name",label:"Name",variant:"outlined",fullWidth:!0,value:N.name,onChange:C,required:!0})}),Object(v.jsx)(i.a,{item:!0,xs:12,children:Object(v.jsx)(l.a,{name:"houseNo",label:"House No",variant:"outlined",fullWidth:!0,value:N.houseNo,onChange:C,required:!0})}),Object(v.jsx)(i.a,{item:!0,xs:6,children:Object(v.jsx)(l.a,{name:"phoneNo",label:"Phone No",variant:"outlined",fullWidth:!0,value:N.phoneNo,onChange:C,required:!0})}),Object(v.jsx)(i.a,{item:!0,xs:6,children:Object(v.jsx)(l.a,{name:"locality",label:"Locality",variant:"outlined",fullWidth:!0,value:N.locality,onChange:C,required:!0})}),Object(v.jsx)(i.a,{item:!0,xs:6,children:Object(v.jsxs)(o.a,{fullWidth:!0,required:!0,children:[Object(v.jsx)(d.a,{fullWidth:!0,children:"City"}),Object(v.jsxs)(u.a,{name:"city",fullWidth:!0,value:N.city,onChange:C,children:[Object(v.jsx)(b.a,{value:"Hisar",children:"Hisar"}),Object(v.jsx)(b.a,{value:"Sirsa",children:"Sirsa"}),Object(v.jsx)(b.a,{value:"Delhi",children:"Delhi"})]}),Object(v.jsx)(h.a,{children:"Select your city"})]})}),Object(v.jsx)(i.a,{item:!0,xs:6,children:Object(v.jsx)(l.a,{name:"state",label:"State",variant:"outlined",fullWidth:!0,value:N.state,onChange:C})}),Object(v.jsx)(i.a,{item:!0,xs:12,children:Object(v.jsx)(j.a,{type:"submit",variant:"contained",color:"primary",children:"\xa0 \xa0 \xa0 \xa0 \xa0 \xa0Submit"})})]})})})})}},170:function(e,t,c){"use strict";var a=c(9),n=c(0),s=c(140),r=c(21),i=(c(46),c(62)),l=c(40),j=c.n(l),o=c(3);t.a=function(){var e=Object(r.f)(),t=Object(r.e)(),c=Object(n.useState)(!0),l=Object(a.a)(c,2),d=l[0],u=l[1];return Object(n.useEffect)((function(){console.log(e),i.a.scanTag(e.tagId).then((function(e){console.log(e.data),j.a.fire({icon:"Already Scanned Today"===e.data.message?"info":"success",title:"success",text:e.data.message}).then((function(){return t("/starter")}))})).catch((function(e){return console.log(e)}))}),[]),Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(s.a,{show:d,onHide:function(){u(!1),t("/starter")},size:"sm",scrollable:!0,children:Object(o.jsx)(s.a.Header,{closeButton:!0,children:Object(o.jsx)(s.a.Title,{children:"Done"})})})})}},172:function(e,t,c){"use strict";var a=c(17),n=c(3);t.a=function(e){var t=e.children,c=(e.title,e.subtitle);return Object(n.jsx)(a.g,{children:Object(n.jsxs)(a.h,{className:"p-4",children:[Object(n.jsx)(a.k,{className:"text-muted mb-3",children:c||""}),Object(n.jsx)("div",{children:t})]})})}},203:function(e,t,c){"use strict";var a=c(17),n=c(117),s=c(131),r=c(132),i=c(133),l=c(134),j=c(3),o=[{avatar:n.a,name:"Hanna Gover",email:"hgover@gmail.com",project:"Flexy React",status:"pending",weeks:"35",budget:"95K"},{avatar:s.a,name:"Hanna Gover",email:"hgover@gmail.com",project:"Lading pro React",status:"done",weeks:"35",budget:"95K"},{avatar:r.a,name:"Hanna Gover",email:"hgover@gmail.com",project:"Elite React",status:"holt",weeks:"35",budget:"95K"},{avatar:i.a,name:"Hanna Gover",email:"hgover@gmail.com",project:"Flexy React",status:"pending",weeks:"35",budget:"95K"},{avatar:l.a,name:"Hanna Gover",email:"hgover@gmail.com",project:"Ample React",status:"done",weeks:"35",budget:"95K"}];t.a=function(e){return Object(j.jsx)("div",{children:Object(j.jsx)(a.g,{children:Object(j.jsxs)(a.h,{children:[Object(j.jsx)(a.m,{tag:"h5",children:"RegisteredUser Listing"}),Object(j.jsx)(a.k,{className:"mb-2 text-muted",tag:"h6",children:"Overview of the projects"}),Object(j.jsxs)(a.H,{className:"no-wrap mt-3 align-middle",responsive:!0,borderless:!0,children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Team Lead"}),Object(j.jsx)("th",{children:"Project"}),Object(j.jsx)("th",{children:"Status"}),Object(j.jsx)("th",{children:"Weeks"}),Object(j.jsx)("th",{children:"Weeks"}),Object(j.jsx)("th",{children:"Weeks"}),Object(j.jsx)("th",{children:"Budget"})]})}),Object(j.jsx)("tbody",{children:o.map((function(e,t){return Object(j.jsxs)("tr",{className:"border-top",children:[Object(j.jsx)("td",{children:Object(j.jsx)("div",{className:"d-flex align-items-center p-2",children:Object(j.jsxs)("div",{className:"ms-3",children:[Object(j.jsx)("h6",{className:"mb-0",children:e.name}),Object(j.jsx)("span",{className:"text-muted",children:e.email})]})})}),Object(j.jsx)("td",{children:e.project}),Object(j.jsx)("td",{children:"pending"===e.status?Object(j.jsx)("span",{className:"p-2 bg-danger rounded-circle d-inline-block ms-3"}):"holt"===e.status?Object(j.jsx)("span",{className:"p-2 bg-warning rounded-circle d-inline-block ms-3"}):Object(j.jsx)("span",{className:"p-2 bg-success rounded-circle d-inline-block ms-3"})}),Object(j.jsx)("td",{children:e.weeks}),Object(j.jsx)("td",{children:e.budget})]},t)}))})]})]})})})}},237:function(e,t,c){},269:function(e,t,c){},270:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(22),s=c.n(n),r=(c(237),c(21)),i=c(17),l=c(46),j=c(3),o=function(){var e=Object(r.e)();return Object(j.jsxs)(i.F,{children:[Object(j.jsx)(i.n,{sm:"6",lg:"6",children:Object(j.jsx)(l.a,{title:"Create New User",children:Object(j.jsx)(i.F,{children:Object(j.jsx)(i.n,{lg:"8",children:Object(j.jsx)("div",{className:"mt-3",children:Object(j.jsx)(i.e,{color:"primary",onClick:function(){return e("/users/createUser")},children:"Create User"})})})})})}),Object(j.jsx)(i.n,{sm:"6",lg:"6",children:Object(j.jsx)(l.a,{title:"User Details",children:Object(j.jsx)(i.F,{children:Object(j.jsx)(i.n,{lg:"8",children:Object(j.jsx)("div",{className:"mt-3",children:Object(j.jsx)(i.e,{color:"primary",onClick:function(){return e("/users/details")},children:"List of Users"})})})})})})]})},d=c(2),u=c(9),b=c(77),h=c(106),O=c(389),x=c(387),m=c(395),g=c(385),f=c(384),p=c(60),v=c.n(p),y=c(187),N=c(380),S=c(62),C=c(67),D=c(115),k=function(){var e=Object(C.b)(),t=Object(r.e)(),c=Object(a.useState)(v()()),n=Object(u.a)(c,2),s=n[0],o=n[1],p=Object(a.useState)(),S=Object(u.a)(p,2),k=S[0],w=S[1];v()();return Object(j.jsxs)(i.F,{children:[Object(j.jsx)(i.n,{sm:"6",lg:"6",children:Object(j.jsxs)(l.a,{title:"drop down for date and city name",children:[Object(j.jsxs)(b.a,{container:!0,spacing:1,children:[Object(j.jsx)(b.a,{item:!0,xs:6,children:Object(j.jsxs)(m.a,{sx:{marginBottom:1,minWidth:"100%"},children:[Object(j.jsx)(O.a,{id:"demo-simple-select-autowidth-label",children:"City"}),Object(j.jsxs)(g.a,{required:!0,labelId:"city",id:"city",value:k,onChange:function(e){w(e.target.value)},autoWidth:!0,label:"City",children:[Object(j.jsx)(x.a,{value:"",children:Object(j.jsx)("em",{children:"None"})}),Object(j.jsx)(x.a,{value:"Hisar",children:"Hisar"}),Object(j.jsx)(x.a,{value:"Sirsa",children:"Sirsa"}),Object(j.jsx)(x.a,{value:"Delhi",children:"Delhi"})]})]})}),Object(j.jsx)(y.a,{dateAdapter:N.a,children:Object(j.jsx)(f.a,{value:s,onChange:function(e){o(e)},renderInput:function(e){return Object(j.jsx)(h.a,Object(d.a)({},e))},disableFuture:!0,shouldDisableDate:function(e){var t=new Date(e);if(t>new Date)return!0;if(0===t.getDay())return!0;var c=new Date;return c.setDate(c.getDate()-3),t<c}})})]}),Object(j.jsx)(i.F,{children:Object(j.jsx)(i.n,{lg:"8",children:Object(j.jsx)("div",{className:"mt-3",children:Object(j.jsx)(i.e,{color:"primary",onClick:function(){console.log(s,k);var c=new Date(s).toLocaleDateString(),a={city:k,date:c};e(D.b.setTagDetailsRequiredDetails(a)),t("/tags/completeDetail")},children:"Tag List"})})})})]})}),Object(j.jsx)(i.n,{sm:"6",lg:"6",children:Object(j.jsx)(l.a,{title:"Xtreme React Admin Pro Version",children:Object(j.jsx)(i.F,{children:Object(j.jsx)(i.n,{lg:"8",children:Object(j.jsx)("div",{className:"mt-3",children:Object(j.jsx)(i.e,{color:"primary",disabled:!0,children:"List of Registered Tags"})})})})})})]})},w=c(152),I=c(107),T=c(80),W={headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json",accept:"application/json",token:Object(T.a)()}},F="http://43.205.254.36",A=function(e){return I.a.post(F+"/createUser",e,W)},R=function(){return I.a.get(F+"/users",W)},q=function(e){return I.a.delete(F+"/users/"+e,W)},H=c(198),L=c(202),P=c(200),U=c(158),E=c(280),B=c(40),G=c.n(B),K=["Hisar","Sirsa","Pune","Delhi"],z=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(""),r=Object(u.a)(s,2),i=r[0],o=r[1],d=Object(a.useState)(""),O=Object(u.a)(d,2),x=O[0],m=O[1],g=Object(a.useState)([]),f=Object(u.a)(g,2),p=f[0],v=f[1],y=Object(a.useState)(""),N=Object(u.a)(y,2),S=N[0],C=N[1],D=Object(a.useState)(""),k=Object(u.a)(D,2),w=k[0],I=k[1];return Object(j.jsx)(l.a,{title:"User Details",children:Object(j.jsx)("form",{onSubmit:function(e){A({name:c,adhaarNumber:i,firmName:x,selectedCities:p,phoneNumber:S,userType:w}).then((function(e){console.log(e),G.a.fire({icon:"success",title:e.data.message,text:"user Id: "+e.data.userId+"-----Password: "+e.data.password})})).catch((function(e){return G.a.fire("Adhar/Phone must be numbers")}))},children:Object(j.jsxs)(b.a,{container:!0,spacing:1,children:[Object(j.jsx)(b.a,{item:!0,xs:6,children:Object(j.jsx)(h.a,{label:"Name",value:c,onChange:function(e){n(e.target.value)},required:!0,fullWidth:!0})}),Object(j.jsx)(b.a,{item:!0,xs:6,children:Object(j.jsx)(h.a,{label:"Aadhaar Number",value:i,onChange:function(e){o(e.target.value)},required:!0,fullWidth:!0})}),Object(j.jsx)(b.a,{item:!0,xs:6,children:Object(j.jsx)(h.a,{label:"Firm Name",value:x,onChange:function(e){m(e.target.value)},required:!0,fullWidth:!0})}),Object(j.jsx)(b.a,{item:!0,xs:6,children:Object(j.jsxs)(H.a,{fullWidth:!0,required:!0,children:[Object(j.jsx)(L.a,{children:"City"}),Object(j.jsxs)(P.a,{multiple:!0,value:p,onChange:function(e){v(e.target.value)},renderValue:function(e){return e.join(", ")},children:["\xa0 \xa0 \xa0 \xa0 \xa0 \xa0",K.map((function(e){return Object(j.jsxs)(U.a,{value:e,children:["\xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0 \xa0",e]},e)}))]})]})}),Object(j.jsx)(b.a,{item:!0,xs:6,children:Object(j.jsx)(h.a,{label:"Phone Number",value:S,onChange:function(e){C(e.target.value)},required:!0,fullWidth:!0})}),Object(j.jsx)(b.a,{item:!0,xs:6,children:Object(j.jsxs)(H.a,{fullWidth:!0,required:!0,children:[Object(j.jsx)(L.a,{fullWidth:!0,children:"User Type"}),Object(j.jsxs)(P.a,{value:w,onChange:function(e){I(e.target.value)},children:[Object(j.jsx)(U.a,{value:"admin",children:"Admin"}),Object(j.jsx)(U.a,{value:"tagger",children:"Tagger"}),Object(j.jsx)(U.a,{value:"scanner",children:"Scanner"}),Object(j.jsx)(U.a,{value:"visitor",children:"Visitor"})]})]})}),Object(j.jsx)(b.a,{item:!0,xs:6,children:Object(j.jsx)(E.a,{type:"submit",variant:"contained",color:"primary",children:"\xa0 \xa0 \xa0 \xa0 \xa0Submit"})})]})})})},V=c(396),J=(c(203),c(193)),X=c.n(J),M=c(117),Q=c(131),Y=c(132),Z=c(133),$=c(134),_=(M.a,Q.a,Y.a,Z.a,$.a,function(){Object(r.e)();var e=Object(a.useState)(),t=Object(u.a)(e,2),c=t[0],n=t[1];Object(a.useEffect)((function(){R().then((function(e){console.log(e.data),n(e.data)})).catch((function(e){return console.log(e)}))}),[]);return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(i.F,{children:Object(j.jsx)(i.n,{lg:"12",children:Object(j.jsx)(i.g,{children:Object(j.jsxs)(i.h,{children:[Object(j.jsx)(i.m,{tag:"h5",children:"Registered User Listing"}),Object(j.jsx)(i.k,{className:"mb-2 text-muted",tag:"h6"}),Object(j.jsxs)(i.H,{className:"no-wrap mt-3 align-middle",responsive:!0,borderless:!0,children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"User"}),Object(j.jsx)("th",{children:"Id"}),Object(j.jsx)("th",{children:"Firm"}),Object(j.jsx)("th",{children:"Phone No."}),Object(j.jsx)("th",{children:"Adhaar"}),Object(j.jsx)("th",{children:"City"}),Object(j.jsx)("th",{children:"Password"}),Object(j.jsx)("th",{children:"Delete"})]})}),Object(j.jsx)("tbody",{children:null===c||void 0===c?void 0:c.map((function(e,t){return Object(j.jsxs)("tr",{className:"border-top",children:[Object(j.jsx)("td",{children:Object(j.jsx)("div",{className:"d-flex align-items-center p-2",children:Object(j.jsxs)("div",{className:"ms-3",children:[Object(j.jsx)("h6",{className:"mb-0",children:e.name}),Object(j.jsx)("span",{className:"text-muted",children:e.userType})]})})}),Object(j.jsx)("td",{children:e.userId}),Object(j.jsx)("td",{children:e.firmName}),Object(j.jsx)("td",{children:e.phoneNumber}),Object(j.jsx)("td",{children:e.adhaarNumber}),Object(j.jsx)("td",{children:e.city}),Object(j.jsx)("td",{children:e.password}),Object(j.jsx)("td",{children:Object(j.jsx)(V.a,{onClick:(c=e.userId,function(){console.log("HI"),"sadmin"===c?G.a.fire({icon:"warn",title:"Sorry"}):(console.log(c),q(c).then((function(e){G.a.fire({icon:"success",title:e.data.message}).then((function(){R().then((function(e){console.log(e.data),n(e.data)})).catch((function(e){return console.log(e)}))})),console.log(e)})).catch((function(e){return alert(e)})))}),"aria-label":"delete",children:Object(j.jsx)(X.a,{})})})]},t);var c}))})]})]})})})})})}),ee=c(170),te=c(153),ce=c(171),ae=c(382),ne=c(383),se=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)(""),i=Object(u.a)(s,2),o=i[0],d=i[1],O=Object(a.useState)({}),x=Object(u.a)(O,2),m=x[0],g=x[1],f=Object(r.e)(),p=Object(a.useCallback)(function(){var e=Object(ce.a)(Object(te.a)().mark((function e(t){var c,a;return Object(te.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://43.205.254.36/login",{method:"POST",body:JSON.stringify(t),headers:{"Content-type":"application/json"}});case 3:if(403!==(c=e.sent).status&&401!==c.status||(console.log("hiii"),G.a.fire({icon:"error",title:"Authentication Error",text:"User not found"})),200!==c.status){e.next=14;break}return e.next=8,c.json();case 8:a=e.sent,console.log(a),sessionStorage.setItem("token",a.token),sessionStorage.setItem("userId",a.userId),sessionStorage.setItem("userType",a.userType),f("/starter");case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),console.log(e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t){return e.apply(this,arguments)}}(),[]);return Object(j.jsx)(l.a,{children:Object(j.jsx)(ae.a,{maxWidth:"sm",children:Object(j.jsx)("form",{onSubmit:function(e){(e.preventDefault(),function(){var e=!0,t={};return c||(e=!1,t.email="Email is required"),o||(e=!1,t.password="Password is required"),g(t),e}())&&(p({userId:c,password:o}),console.log("Login successful"))},children:Object(j.jsxs)(b.a,{container:!0,spacing:2,children:[Object(j.jsx)(b.a,{item:!0,xs:12,children:Object(j.jsx)(ne.a,{variant:"h4",align:"center",gutterBottom:!0,children:"Login"})}),Object(j.jsx)(b.a,{item:!0,xs:12,children:Object(j.jsx)(h.a,{label:"Email",fullWidth:!0,value:c,onChange:function(e){return n(e.target.value)},error:!!m.email,helperText:m.email})}),Object(j.jsx)(b.a,{item:!0,xs:12,children:Object(j.jsx)(h.a,{label:"Password",type:"password",fullWidth:!0,value:o,onChange:function(e){return d(e.target.value)},error:!!m.password,helperText:m.password})}),Object(j.jsx)(b.a,{item:!0,xs:12,children:Object(j.jsx)(E.a,{type:"submit",variant:"contained",color:"primary",fullWidth:!0,children:"Log In"})})]})})})})},re=c(172),ie=c(194),le=c.n(ie),je=function(){var e=Object(a.useState)(),t=Object(u.a)(e,2),c=t[0],n=t[1],s=Object(C.c)((function(e){return e.tagDetails.tagListRequiredDetails})),l=Object(r.e)();Object(a.useEffect)((function(){console.log(s),S.a.getTagStatusCompleteDetails(s).then((function(e){console.log(e),404===e.status?alert(e.message):n(e.data)})).catch((function(e){console.log(e.response.data),G.a.fire({icon:"error",title:"Error",text:e.response.data.message}).then((function(){return l(-1)}))}))}),[s]);return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(re.a,{children:Object(j.jsx)(i.g,{children:Object(j.jsxs)(i.h,{children:[Object(j.jsx)(i.m,{tag:"h5",children:"Status Report"}),Object(j.jsx)(i.k,{className:"mb-2 text-muted",tag:"h6"}),Object(j.jsxs)(i.H,{className:"no-wrap mt-3 align-middle",responsive:!0,borderless:!0,children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"House Detail"}),Object(j.jsx)("th",{children:"Locality"}),Object(j.jsx)("th",{children:"City"}),Object(j.jsx)("th",{children:"Status"}),Object(j.jsx)("th",{children:"Time"}),Object(j.jsx)("th",{children:"Action"})]})}),Object(j.jsx)("tbody",{children:null===c||void 0===c?void 0:c.map((function(e,t){return Object(j.jsxs)("tr",{className:"border-top",children:[Object(j.jsx)("td",{children:Object(j.jsx)("div",{className:"d-flex align-items-center p-2",children:Object(j.jsxs)("div",{className:"ms-3",children:[Object(j.jsx)("h6",{className:"mb-0",children:e.name}),Object(j.jsx)("span",{className:"text-muted",children:e.houseNo})]})})}),Object(j.jsx)("td",{children:e.locality}),Object(j.jsx)("td",{children:e.city}),Object(j.jsx)("td",{children:!1===e.scanned?Object(j.jsx)("span",{className:"p-2 bg-danger rounded-circle d-inline-block ms-3"}):Object(j.jsx)("span",{className:"p-2 bg-success rounded-circle d-inline-block ms-3"})}),Object(j.jsx)("td",{children:e.time}),Object(j.jsx)("td",{children:Object(j.jsx)(V.a,{"aria-label":"delete",onClick:function(){return t=e.tagId,console.log(t),void S.a.scanTag(t).then((function(e){console.log(e.data),G.a.fire({icon:"Already Scanned Today"===e.data.message?"info":"success",title:"success",text:e.data.message}).then((function(){S.a.getTagStatusCompleteDetails(s).then((function(e){console.log(e),404===e.status?alert(e.message):n(e.data)})).catch((function(e){console.log(e.response.data),G.a.fire({icon:"error",title:"Error",text:e.response.data.message}).then((function(){return l(-1)}))}))}))})).catch((function(e){return console.log(e)}));var t},children:Object(j.jsx)(le.a,{})})})]},t)}))})]})]})})})})},oe=Object(a.lazy)((function(){return c.e(6).then(c.bind(null,421))})),de=Object(a.lazy)((function(){return Promise.all([c.e(5),c.e(3)]).then(c.bind(null,420))})),ue=Object(a.lazy)((function(){return c.e(7).then(c.bind(null,410))})),be=Object(T.b)(),he=[{path:"/",element:Object(j.jsx)(se,{})},{path:"logout",element:Object(j.jsx)(se,{})},{path:"/",element:Object(j.jsx)(oe,{}),children:[{path:"/starter",exact:!0,element:Object(j.jsx)(de,{})},{path:"/about",exact:!0,element:Object(j.jsx)(ue,{})},("admin"===be||"superAdmin"===be)&&{path:"/users",exact:!0,children:[{path:"",exact:!0,element:Object(j.jsx)(o,{})},{path:"createUser",exact:!0,element:Object(j.jsx)(z,{})},{path:"details",exact:!0,element:Object(j.jsx)(_,{})}]},("admin"===be||"superAdmin"===be)&&{path:"/tags",exact:!0,children:[{path:"",element:Object(j.jsx)(k,{})},{path:"scan/:tagId",exact:!0,element:Object(j.jsx)(ee.a,{})},{path:"register/:tagId",exact:!0,element:Object(j.jsx)(w.a,{})},{path:"register/:tagId",exact:!0,element:Object(j.jsx)(w.a,{})},{path:"completeDetail",exact:!0,element:Object(j.jsx)(je,{})}]}]}],Oe=function(){var e=Object(r.h)(he);return Object(j.jsx)("div",{className:"dark",children:e})},xe=function(e){e&&e instanceof Function&&c.e(15).then(c.bind(null,419)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))},me=c(52),ge=(c(269),function(){return Object(j.jsx)("div",{className:"fallback-spinner",children:Object(j.jsx)("div",{className:"loading",children:Object(j.jsx)(i.G,{color:"primary"})})})}),fe=c(124),pe=Object(fe.a)({reducer:{tagDetails:D.a}});s.a.render(Object(j.jsx)(a.Suspense,{fallback:Object(j.jsx)(ge,{}),children:Object(j.jsx)(me.a,{basename:"/",children:Object(j.jsx)(C.a,{store:pe,children:Object(j.jsx)(Oe,{})})})}),document.getElementById("root")),xe()},46:function(e,t,c){"use strict";var a=c(17),n=c(3);t.a=function(e){var t=e.children,c=e.title,s=e.subtitle;return Object(n.jsxs)(a.g,{children:[Object(n.jsx)(a.m,{tag:"h4",className:"border-bottom px-4 py-3 mb-0",children:c}),Object(n.jsxs)(a.h,{className:"p-4",children:[Object(n.jsx)(a.k,{className:"text-muted mb-3",children:s||""}),Object(n.jsx)("div",{children:t})]})]})}},62:function(e,t,c){"use strict";var a=c(107),n=c(80),s={headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json",accept:"application/json",token:Object(n.a)()}},r="http://43.205.254.36";t.a={tagRegister:function(e){return a.a.post(r+"/tagRegister",e,s)},scanTag:function(e){return a.a.get(r+"/tags/"+e,s)},getTagStatusCompleteDetails:function(e){return a.a.post(r+"/tagDetailsByCity",e,s)},getAllRegiteredTagsInACity:function(e){return a.a.get(r+"/tags/byCity?city="+e,s)},getTagStatusForVisitor:function(e){return a.a.post(r+"/tags/count",e,s)}}},80:function(e,t,c){"use strict";function a(){return sessionStorage.getItem("token")}function n(){return sessionStorage.getItem("userType")}c.d(t,"a",(function(){return a})),c.d(t,"b",(function(){return n}))}},[[270,1,2]]]);
//# sourceMappingURL=main.37148a5c.chunk.js.map