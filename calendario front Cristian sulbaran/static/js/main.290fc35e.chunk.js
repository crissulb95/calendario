(this.webpackJsonpcalendario=this.webpackJsonpcalendario||[]).push([[0],{172:function(e,t,a){},173:function(e,t,a){"use strict";a.r(t);var n=a(3),c=a(0),s=a(9),o=a.n(s),r=a(15),l=a(90),i=a(13),j=function(){return Object(n.jsx)("div",{className:"container login-container",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsxs)("div",{className:"col-md-6 login-form-1",children:[Object(n.jsx)("h3",{children:"Ingreso"}),Object(n.jsxs)("form",{children:[Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"text",className:"form-control",placeholder:"Correo"})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a"})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"submit",className:"btnSubmit",value:"Login"})})]})]}),Object(n.jsxs)("div",{className:"col-md-6 login-form-2",children:[Object(n.jsx)("h3",{children:"Registro"}),Object(n.jsxs)("form",{children:[Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"text",className:"form-control",placeholder:"Nombre"})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"email",className:"form-control",placeholder:"Correo"})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"password",className:"form-control",placeholder:"Contrase\xf1a"})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"password",className:"form-control",placeholder:"Repita la contrase\xf1a"})}),Object(n.jsx)("div",{className:"form-group",children:Object(n.jsx)("input",{type:"submit",className:"btnSubmit",value:"Crear cuenta"})})]})]})]})})},b=a(31),d=function(){return Object(n.jsxs)("div",{className:"navbar navbar-dark bg-dark mb-4 px-4",children:[Object(n.jsx)("span",{className:"navbar-brand",children:"Momoy"}),Object(n.jsxs)("button",{className:"btn btn-outline-warning",children:[Object(n.jsx)("i",{className:"fas fa-sign-out-alt"}),Object(n.jsx)("span",{children:"Salir"})]})]})},u=function(e){var t=e.event,a=t.title,c=t.user;return Object(n.jsxs)("div",{children:[Object(n.jsxs)("h4",{children:[" ",a," "]}),Object(n.jsxs)("p",{children:["- ",c.name," "]})]})},m=a(45),O=a(10),f=a(67),p=a.n(f),v=a(66),h=a.n(v),x=a(19),N=a.n(x),g=a(85),y=a.n(g),E=(a(109),"[UI] Open modal"),C="[UI] Close modal",w="[CALENDAR] set active",D="[CALENDAR] add new event",S="[CALENDAR] clear active event",A="[CALENDAR] update event",R="[CALENDAR] delete event",k=function(){return{type:E}},I=function(){return{type:S}},T={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};h.a.setAppElement("#root");var _=N()().minutes(0).seconds(0).add(1,"hours"),L=_.clone().add(1,"hours"),M={title:"",notes:"",start:_.toDate(),end:L.toDate()},V=function(){var e=Object(r.b)(),t=Object(r.c)((function(e){return e.ui})).modalOpen,a=Object(r.c)((function(e){return e.calendar})).activeEvent,s=Object(c.useState)(_.toDate()),o=Object(b.a)(s,2),l=o[0],i=o[1],j=Object(c.useState)(L.toDate()),d=Object(b.a)(j,2),u=d[0],f=d[1],v=Object(c.useState)(M),x=Object(b.a)(v,2),g=x[0],E=x[1],w=g.notes,S=g.title,R=g.start,k=g.end,V=function(e){var t=e.target;E(Object(O.a)(Object(O.a)({},g),{},Object(m.a)({},t.name,t.value)))},F=Object(c.useState)(!0),H=Object(b.a)(F,2),U=H[0],q=H[1],B=function(){e({type:C}),e(I()),E(M)};return Object(c.useEffect)((function(){E(a||M)}),[E,a]),Object(n.jsxs)(h.a,{isOpen:t,onRequestClose:B,closeTimeoutMS:250,style:T,className:"modal",overlayClassName:"modal-fondo",children:[Object(n.jsxs)("h2",{children:[" ",a?"Editar evento":"Nuevo evento"," "]}),Object(n.jsx)("hr",{}),Object(n.jsxs)("form",{className:"container",onSubmit:function(t){t.preventDefault();var n=N()(R),c=N()(k);if(n.isAfter(c))return console.log("Tiene que ser mayor"),y.a.fire("Error","La fecha de fin tiene que ser mayor a la fecha de inicio","error");S.trim().length<2&&q(!1),e(a?{type:A,payload:g}:function(e){return{type:D,payload:e}}(Object(O.a)(Object(O.a)({},g),{},{id:(new Date).getTime(),user:{_id:"67vb324b",name:"Momoy"}}))),q(!0),B(),console.log(g,n,c)},children:[Object(n.jsxs)("div",{className:"form-group d-flex flex-column",children:[Object(n.jsx)("label",{className:"mb-1",children:"Fecha y hora inicio"}),Object(n.jsx)(p.a,{className:"form-control",value:l,selected:l,onChange:function(e){console.log(e),i(e),E(Object(O.a)(Object(O.a)({},g),{},{start:e}))}})]}),Object(n.jsxs)("div",{className:"form-group d-flex flex-column",children:[Object(n.jsx)("label",{className:"mb-1",children:"Fecha y hora fin"}),Object(n.jsx)(p.a,{className:"form-control",value:u,selected:u,minDate:l,onChange:function(e){console.log(e),f(e),E(Object(O.a)(Object(O.a)({},g),{},{start:e}))}})]}),Object(n.jsx)("hr",{}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{children:"Titulo y notas"}),Object(n.jsx)("input",{type:"text",className:"form-control ".concat(!U&&"is-invalid"),placeholder:"T\xedtulo del evento",name:"title",value:S,onChange:V,autoComplete:"off"}),Object(n.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Una descripci\xf3n corta"})]}),Object(n.jsxs)("div",{className:"form-group mt-4",children:[Object(n.jsx)("textarea",{type:"text",className:"form-control",placeholder:"Notas",rows:"5",value:w,onChange:V,name:"notes"}),Object(n.jsx)("small",{id:"emailHelp",className:"form-text text-muted",children:"Informaci\xf3n adicional"})]}),Object(n.jsxs)("button",{type:"submit",className:"btn btn-block btn-outline-primary mt-4",children:[Object(n.jsx)("i",{className:"far fa-save"}),Object(n.jsx)("span",{children:" Guardar"})]})]})]})},F=a(72),H={allDay:"Todo el d\xeda",previous:"<",next:">",today:"Hoy",month:"Mes",week:"Semana",day:"D\xeda",agenda:"Agenda",date:"Fecha",time:"Hora",event:"Evento",noEventsInRange:"No hay eventos en este rango",showMore:function(e){return"+ Ver m\xe1s (".concat(e,")")}},U=(a(169),a(170),function(){var e=Object(r.b)();return Object(n.jsx)("button",{className:"btn btn-primary fab",onClick:function(){e(k())},children:Object(n.jsx)("i",{className:"fas fa-plus"})})}),q=function(){var e=Object(r.b)();return Object(n.jsxs)("button",{className:"btn btn-danger fab-danger",onClick:function(){e({type:R})},children:[Object(n.jsx)("i",{className:"fas fa-trash"}),Object(n.jsx)("span",{children:" Borrar evento "})]})};N.a.locale("es");var B=Object(F.b)(N.a),G=function(){var e=Object(r.b)(),t=Object(r.c)((function(e){return e.calendar})),a=t.events,s=t.activeEvent,o=Object(c.useState)(localStorage.getItem("lastView")||"month"),l=Object(b.a)(o,2),i=l[0],j=l[1];return Object(n.jsxs)("div",{className:"calendar-screen",children:[Object(n.jsx)(d,{}),Object(n.jsx)(F.a,{localizer:B,events:a,messages:H,startAccessor:"start",endAccessor:"end",onDoubleClickEvent:function(t){e(k())},onSelectEvent:function(t){console.log(t),e({type:w,payload:t})},onView:function(e){j(e),localStorage.setItem("lastView",e)},view:i,onSelectSlot:function(t){e(I())},selectable:!0,eventPropGetter:function(e,t,a,n){return{style:{backgroundColor:"#0608F0",borderRadius:"0px",opacity:.8,display:"block",color:"#fff"}}},components:{event:u}}),Object(n.jsx)(U,{}),s&&Object(n.jsx)(q,{}),Object(n.jsx)(V,{})]})};function J(){return Object(n.jsx)(l.a,{children:Object(n.jsx)("div",{children:Object(n.jsxs)(i.d,{children:[Object(n.jsx)(i.b,{path:"/login",exact:!0,component:j}),Object(n.jsx)(i.b,{path:"/",exact:!0,component:G}),Object(n.jsx)(i.a,{to:"/login"})]})})})}var P=a(26),X=a(92),z={events:[{id:(new Date).getTime(),title:"Cumple",start:N()().toDate(),end:N()().add(2,"hours").toDate(),bgcolor:"#f3f3f3",user:{_id:543,name:"Momoy"}}],activeEvent:null},K={modalOpen:!1},Q=Object(P.c)({ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(O.a)(Object(O.a)({},e),{},{modalOpen:!0});case C:return Object(O.a)(Object(O.a)({},e),{},{modalOpen:!1});default:return e}},calendar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(O.a)(Object(O.a)({},e),{},{activeEvent:t.payload});case D:return Object(O.a)(Object(O.a)({},e),{},{events:[].concat(Object(X.a)(e.events),[t.payload])});case S:return Object(O.a)(Object(O.a)({},e),{},{activeEvent:null});case A:return Object(O.a)(Object(O.a)({},e),{},{events:e.events.map((function(e){return e.id===t.payload.id?t.payload:e}))});case R:return Object(O.a)(Object(O.a)({},e),{},{events:e.events.filter((function(t){return t.id!==e.activeEvent.id})),activeEvent:null});default:return e}}}),W=a(91),Y="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||P.d,Z=Object(P.e)(Q,Y(Object(P.a)(W.a)));a(172);function $(){return Object(n.jsx)(r.a,{store:Z,children:Object(n.jsx)(J,{})})}o.a.render(Object(n.jsx)($,{}),document.getElementById("root"))}},[[173,1,2]]]);
//# sourceMappingURL=main.290fc35e.chunk.js.map