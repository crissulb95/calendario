(this.webpackJsonpcalendario=this.webpackJsonpcalendario||[]).push([[0],{176:function(e,t,n){},177:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n(0),c=n(10),o=n.n(c),s=n(11),i=n(48),l=n(14),u=n(16),j=n.n(u),d=n(24),b=n(18),m=n.n(b),f="https://mern-calendar-api.herokuapp.com/api",p=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(f,"/").concat(e);return"GET"===n?fetch(a):fetch(a,{method:n,headers:{"Content-type":"application/json"},body:JSON.stringify(t)})},O=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a="".concat(f,"/").concat(e),r=localStorage.getItem("token")||"";return"GET"===n?fetch(a,{method:n,headers:{"x-token":r}}):fetch(a,{method:n,headers:{"Content-type":"application/json","x-token":r},body:JSON.stringify(t)})},v="[UI] Open modal",h="[UI] Close modal",x="[CALENDAR] set active",g="[CALENDAR] add new event",y="[CALENDAR] clear active event",N="[CALENDAR] update event",w="[CALENDAR] delete event",E="[CALENDAR] set loaded events to store",k="[AUTH] finish checking login state",C="[AUTH] login",S="[AUTH] logout",A="[CALENDAR] delete all events",D=n(7),T=n(22),I=n.n(T),P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.map((function(e){return Object(D.a)(Object(D.a)({},e),{},{end:I()(e.end).toDate(),start:I()(e.start).toDate()})}))},R=function(e){return{type:E,payload:e}},L=function(e){return{type:g,payload:e}},M=function(){return{type:y}},_=function(){return{type:w}},U=function(e){return{type:N,payload:e}},H=function(){return function(e){localStorage.clear(),e({type:A}),e(z())}},G=function(e){return{type:C,payload:e}},V=function(){return{type:k}},z=function(){return{type:S}},F=n(19),J=n(36),q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(r.useState)(e),n=Object(F.a)(t,2),a=n[0],c=n[1],o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;c(t)},s=function(e){var t=e.target,n=t.name,r=t.value;c(Object(D.a)(Object(D.a)({},a),{},Object(J.a)({},n,r)))},i=function(){var e=Object(d.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c((function(e){return t=e}));case 2:return e.abrupt("return",t);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return[a,s,i,o]},B=function(){var e=Object(s.b)(),t=q({loginMail:"elpin1995@gmail.com",loginPassword:"123123123"}),n=Object(F.a)(t,2),r=n[0],c=n[1],o=q({registerMail:"",registerName:"",registerPassword:"123123123",registerPassword2:"123123123"}),i=Object(F.a)(o,2),l=i[0],u=i[1],b=r.loginMail,f=r.loginPassword,O=l.registerMail,v=l.registerPassword,h=l.registerName,x=l.registerPassword2;return Object(a.jsx)("div",{className:"container login-container",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"col-md-6 login-form-1",children:[Object(a.jsx)("h3",{children:"Ingreso"}),Object(a.jsxs)("form",{onSubmit:function(t){var n,a;t.preventDefault(),e((n=b,a=f,function(){var e=Object(d.a)(j.a.mark((function e(t){var r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p("auth",{email:n,password:a},"POST");case 2:return r=e.sent,e.next=5,r.json();case 5:(c=e.sent).exito?(localStorage.setItem("token",c.token),localStorage.setItem("token-init-day",(new Date).getTime()),t(G({uid:c.uid,name:c.name}))):m.a.fire("Error",c.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"text",className:"form-control",placeholder:"Correo",name:"loginMail",value:b,onChange:c})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"loginPassword",value:f,onChange:c})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"submit",className:"btnSubmit",value:"Login"})})]})]}),Object(a.jsxs)("div",{className:"col-md-6 login-form-2",children:[Object(a.jsx)("h3",{children:"Registro"}),Object(a.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),v!==x)return m.a.fire("Error","Las contrase\xf1as deben ser iguales","error");var n,a,r;e((n=O,a=v,r=h,function(){var e=Object(d.a)(j.a.mark((function e(t){var c,o;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p("auth/new",{email:n,password:a,name:r},"POST");case 2:return c=e.sent,e.next=5,c.json();case 5:(o=e.sent).exito?(localStorage.setItem("token",o.token),localStorage.setItem("token-init-day",(new Date).getTime()),t(G({uid:o.uid,name:o.name}))):m.a.fire("Error",o.msg,"error");case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},children:[Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"text",className:"form-control",placeholder:"Nombre",name:"registerName",value:h,onChange:u})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"email",className:"form-control",placeholder:"Correo",name:"registerMail",value:O,onChange:u})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a",name:"registerPassword",value:v,onChange:u})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"password",className:"form-control",placeholder:"Repita la contrase\xf1a",name:"registerPassword2",value:x,onChange:u})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"submit",className:"btnSubmit",value:"Crear cuenta"})})]})]})]})})},X=function(){var e=Object(s.c)((function(e){return e.auth})).name,t=Object(s.b)();return Object(a.jsxs)("div",{className:"navbar navbar-dark bg-dark mb-4 px-4",children:[Object(a.jsx)("span",{className:"navbar-brand",children:e}),Object(a.jsxs)("button",{className:"btn btn-outline-warning",onClick:function(){t(H())},children:[Object(a.jsx)("i",{className:"fas fa-sign-out-alt"}),Object(a.jsx)("span",{children:"Salir"})]})]})},K=function(e){var t=e.event,n=t.title,r=t.user;return Object(a.jsxs)("div",{children:[Object(a.jsxs)("h4",{children:[" ",n," "]}),Object(a.jsxs)("p",{children:["- ",r.name," "]})]})},Q=n(72),W=n.n(Q),Y=n(71),Z=n.n(Y),$=(n(113),function(){return{type:v}}),ee={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};Z.a.setAppElement("#root");var te=I()().minutes(0).seconds(0).add(1,"hours"),ne=te.clone().add(1,"hours"),ae={title:"",notes:"",start:te.toDate(),end:ne.toDate()},re=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.ui})).modalOpen,n=Object(s.c)((function(e){return e.calendar})).activeEvent,c=Object(r.useState)(te.toDate()),o=Object(F.a)(c,2),i=o[0],l=o[1],u=Object(r.useState)(ne.toDate()),b=Object(F.a)(u,2),f=b[0],p=b[1],v=Object(r.useState)(ae),x=Object(F.a)(v,2),g=x[0],y=x[1],N=g.notes,w=g.title,E=g.start,k=g.end,C=function(e){var t=e.target;y(Object(D.a)(Object(D.a)({},g),{},Object(J.a)({},t.name,t.value)))},S=Object(r.useState)(!0),A=Object(F.a)(S,2),T=A[0],P=A[1],R=function(){e({type:h}),e(M()),y(ae)};return Object(r.useEffect)((function(){y(n||ae)}),[y,n]),Object(a.jsxs)(Z.a,{isOpen:t,onRequestClose:R,closeTimeoutMS:250,style:ee,className:"modal",overlayClassName:"modal-fondo",children:[Object(a.jsxs)("h2",{children:[" ",n?"Editar evento":"Nuevo evento"," "]}),Object(a.jsx)("hr",{}),Object(a.jsxs)("form",{className:"container",onSubmit:function(t){t.preventDefault();var a,r,c=I()(E),o=I()(k);if(c.isAfter(o))return console.log("Tiene que ser mayor"),m.a.fire("Error","La fecha de fin tiene que ser mayor a la fecha de inicio","error");w.trim().length<2&&P(!1),e(n?(r=g,function(){var e=Object(d.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O("event/".concat(r.id),r,"PUT");case 3:return n=e.sent,e.next=6,n.json();case 6:(a=e.sent).exito?t(U(r)):(m.a.fire("Error",a.msg,"error"),console.log(a.msg)),console.log(a),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("error",e.t0),m()("Error","No tiene permiso para actualizar el estado del evento","error");case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}()):(a=g,function(){var e=Object(d.a)(j.a.mark((function e(t,n){var r,c,o,s,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n().auth,c=r.name,o=r.uid,e.prev=1,e.next=4,O("event/create",a,"POST");case 4:return s=e.sent,e.next=7,s.json();case 7:(i=e.sent).exito&&(a.id=i.event.id,a.user={_id:o,name:c},console.log(a),t(L(a))),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t,n){return e.apply(this,arguments)}}())),P(!0),R()},children:[Object(a.jsxs)("div",{className:"form-group d-flex flex-column",children:[Object(a.jsx)("label",{className:"mb-1",children:"Fecha y hora inicio"}),Object(a.jsx)(W.a,{className:"form-control",value:i,selected:i,onChange:function(e){console.log(e),l(e),y(Object(D.a)(Object(D.a)({},g),{},{start:e}))}})]}),Object(a.jsxs)("div",{className:"form-group d-flex flex-column",children:[Object(a.jsx)("label",{className:"mb-1",children:"Fecha y hora fin"}),Object(a.jsx)(W.a,{className:"form-control",value:f,selected:f,minDate:i,onChange:function(e){console.log(e),p(e),y(Object(D.a)(Object(D.a)({},g),{},{end:e}))}})]}),Object(a.jsx)("hr",{}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{children:"Titulo y notas"}),Object(a.jsx)("input",{type:"text",className:"form-control ".concat(!T&&"is-invalid"),placeholder:"T\xedtulo del evento",name:"title",value:w,onChange:C,autoComplete:"off"}),Object(a.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Una descripci\xf3n corta"})]}),Object(a.jsxs)("div",{className:"form-group mt-4",children:[Object(a.jsx)("textarea",{type:"text",className:"form-control",placeholder:"Notas",rows:"5",value:N,onChange:C,name:"notes"}),Object(a.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Informaci\xf3n adicional"})]}),Object(a.jsxs)("button",{type:"submit",className:"btn btn-block btn-outline-primary mt-4",children:[Object(a.jsx)("i",{className:"far fa-save"}),Object(a.jsx)("span",{children:" Guardar"})]})]})]})},ce=n(77),oe={allDay:"Todo el d\xeda",previous:"<",next:">",today:"Hoy",month:"Mes",week:"Semana",day:"D\xeda",agenda:"Agenda",date:"Fecha",time:"Hora",event:"Evento",noEventsInRange:"No hay eventos en este rango",showMore:function(e){return"+ Ver m\xe1s (".concat(e,")")}},se=(n(173),n(174),function(){var e=Object(s.b)();return Object(a.jsx)("button",{style:{zIndex:"10"},className:"btn btn-primary fab",onClick:function(){e($())},children:Object(a.jsx)("i",{className:"fas fa-plus"})})}),ie=function(){var e=Object(s.b)();return Object(a.jsxs)("button",{style:{zIndex:"10"},className:"btn btn-danger fab-danger",onClick:function(){e(function(){var e=Object(d.a)(j.a.mark((function e(t,n){var a,r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().calendar.activeEvent.id,console.log("id",a),e.prev=2,e.next=5,O("event/".concat(a),{},"DELETE");case 5:return r=e.sent,e.next=8,r.json();case 8:(c=e.sent).exito?t(_()):(m.a.fire("Error",c.msg,"error"),console.log(c.msg)),console.log(c),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(2),console.log("error",e.t0),m.a.fire("Error",e.t0.msg||"No se pudo eliminar","error");case 17:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(t,n){return e.apply(this,arguments)}}())},children:[Object(a.jsx)("i",{className:"fas fa-trash"}),Object(a.jsx)("span",{children:" Borrar evento "})]})};I.a.locale("es");var le=Object(ce.b)(I.a),ue=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.calendar})),n=t.events,c=t.activeEvent,o=Object(s.c)((function(e){return e.auth})).uid,i=Object(r.useState)(localStorage.getItem("lastView")||"month"),l=Object(F.a)(i,2),u=l[0],b=l[1];return Object(r.useEffect)((function(){e(function(){var e=Object(d.a)(j.a.mark((function e(t){var n,a,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O("event");case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,r=P(a.eventos),t(R(r)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log("error",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(a.jsxs)("div",{className:"calendar-screen",children:[Object(a.jsx)(X,{}),Object(a.jsx)(ce.a,{localizer:le,events:n,messages:oe,startAccessor:"start",endAccessor:"end",onDoubleClickEvent:function(t){e($())},onSelectEvent:function(t){console.log(t),e({type:x,payload:t})},onView:function(e){b(e),localStorage.setItem("lastView",e)},view:u,onSelectSlot:function(t){e(M())},selectable:!0,eventPropGetter:function(e,t,n,a){return{style:{backgroundColor:o===e.user._id?"#0608F0":"455660",borderRadius:"0px",opacity:.8,display:"block",color:"#fff"}}},components:{event:K}}),Object(a.jsx)(se,{}),c&&Object(a.jsx)(ie,{}),Object(a.jsx)(re,{})]})},je=n(56),de=function(e){var t=e.isAuth,n=e.component,r=Object(je.a)(e,["isAuth","component"]);return Object(a.jsx)(l.b,Object(D.a)(Object(D.a)({},r),{},{component:function(e){return t?Object(a.jsx)(n,Object(D.a)({},e)):Object(a.jsx)(l.a,{to:"/login"})}}))},be=function(e){var t=e.isAuth,n=e.component,r=Object(je.a)(e,["isAuth","component"]);return Object(a.jsx)(l.b,Object(D.a)(Object(D.a)({},r),{},{component:function(e){return t?Object(a.jsx)(l.a,{to:"/"}):Object(a.jsx)(n,Object(D.a)({},e))}}))};function me(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.auth})),n=t.checking,c=t.uid;return console.log(n),Object(r.useEffect)((function(){e(function(){var e=Object(d.a)(j.a.mark((function e(t){var n,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O("auth/renew");case 2:return n=e.sent,e.next=5,n.json();case 5:(a=e.sent).exito?(localStorage.setItem("token",a.token),localStorage.setItem("token-init-day",(new Date).getTime()),t(G({uid:a.uid,name:a.name}))):t(V());case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[e]),n?Object(a.jsx)("h3",{children:"Cargando..."}):Object(a.jsx)(i.a,{children:Object(a.jsx)("div",{children:Object(a.jsxs)(l.d,{children:[Object(a.jsx)(be,{exact:!0,path:"/login",component:B,isAuth:!!c}),Object(a.jsx)(de,{exact:!0,path:"/",component:ue,isAuth:!!c}),Object(a.jsx)(l.a,{to:"/"})]})})})}var fe=n(30),pe={checking:!0,uid:null,name:null},Oe=n(78),ve={events:[],activeEvent:null},he={modalOpen:!1},xe=Object(fe.c)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(D.a)(Object(D.a)({},e),{},{modalOpen:!0});case h:return Object(D.a)(Object(D.a)({},e),{},{modalOpen:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(D.a)(Object(D.a)({},e),{},{activeEvent:t.payload});case g:return Object(D.a)(Object(D.a)({},e),{},{events:[].concat(Object(Oe.a)(e.events),[t.payload])});case y:return Object(D.a)(Object(D.a)({},e),{},{activeEvent:null});case N:return Object(D.a)(Object(D.a)({},e),{},{events:e.events.map((function(e){return e.id===t.payload.id?t.payload:e}))});case w:return Object(D.a)(Object(D.a)({},e),{},{events:e.events.filter((function(t){return t.id!==e.activeEvent.id})),activeEvent:null});case E:return Object(D.a)(Object(D.a)({},e),{},{events:Object(Oe.a)(t.payload)});case A:return Object(D.a)({},ve);default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(D.a)(Object(D.a)(Object(D.a)({},e),t.payload),{},{checking:!1});case k:return Object(D.a)(Object(D.a)({},e),{},{checking:!1});case S:return{checking:!1,uid:null,name:null};default:return e}}}),ge=n(95),ye="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||fe.d,Ne=Object(fe.e)(xe,ye(Object(fe.a)(ge.a)));n(176);function we(){return Object(a.jsx)(s.a,{store:Ne,children:Object(a.jsx)(me,{})})}o.a.render(Object(a.jsx)(we,{}),document.getElementById("root"))}},[[177,1,2]]]);
//# sourceMappingURL=main.f993aae6.chunk.js.map