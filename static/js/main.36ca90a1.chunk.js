(this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]=this["webpackJsonpgoit-react-hw-04-hooks-phonebook"]||[]).push([[0],[,,function(e,t,n){e.exports={form:"Form_form__3fM-b",inputContainer:"Form_inputContainer__b3Y6o",input:"Form_input__3WTkG",subtitle:"Form_subtitle__1RWUJ",button:"Form_button__gNTfm"}},,function(e,t,n){e.exports={list:"ContactListItem_list__1px_C",item:"ContactListItem_item__1cLrD",name:"ContactListItem_name__1Fdpd",button:"ContactListItem_button__2ai1R",data:"ContactListItem_data__1zz9b"}},,,function(e,t,n){e.exports={label:"Filter_label__2QdWm",title:"Filter_title__2vI3U",input:"Filter_input__17a_2"}},,function(e,t,n){e.exports={section:"Section_section__31PBg",container:"Section_container__3h8Th"}},function(e,t,n){e.exports={title:"App_title__2bBmO",subtitle:"App_subtitle__3-XFF"}},,function(e,t,n){e.exports={list:"ContactsList_list__p3auQ"}},function(e){e.exports=JSON.parse('[{"id":"id-1","name":"Rosie Simpson","number":"459-12-56"},{"id":"id-2","name":"Hermione Kline","number":"443-89-12"},{"id":"id-3","name":"Eden Clements","number":"645-17-79"},{"id":"id-4","name":"Annie Copeland","number":"227-91-26"}]')},,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(11),s=n.n(i),r=(n(19),n(14)),o=n(3),u=n(23),l=n(2),b=n.n(l),m=n(0),j=function(e){var t=e.onSubmit,n=Object(a.useState)(""),c=Object(o.a)(n,2),i=c[0],s=c[1],r=Object(a.useState)(""),l=Object(o.a)(r,2),j=l[0],d=l[1],_=function(e){var t=e.currentTarget,n=t.name,a=t.value;switch(n){case"name":s(a);break;case"number":d(a);break;default:return}},p=function(){s(""),d("")};return Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({id:Object(u.a)(),name:i,number:j}),p()},className:b.a.form,children:[Object(m.jsxs)("label",{className:b.a.inputContainer,children:[Object(m.jsx)("span",{className:b.a.subtitle,children:"Name"}),Object(m.jsx)("input",{className:b.a.input,type:"text",name:"name",value:i,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:_})]}),Object(m.jsxs)("label",{className:b.a.inputContainer,children:[Object(m.jsx)("span",{className:b.a.subtitle,children:"Number"}),Object(m.jsx)("input",{className:b.a.input,type:"tel",name:"number",value:j,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:_})]}),Object(m.jsx)("button",{className:b.a.button,type:"submit"})]})},d=n(9),_=n.n(d),p=function(e){var t=e.children;return Object(m.jsx)("section",{className:_.a.section,children:Object(m.jsx)("div",{className:_.a.container,children:t})})},f=n(4),O=n.n(f),h=function(e){var t=e.onDelete,n=e.name,a=e.number;return Object(m.jsxs)("li",{className:O.a.item,children:[Object(m.jsx)("button",{className:O.a.button,type:"button",onClick:t}),Object(m.jsxs)("div",{className:O.a.data,children:[Object(m.jsxs)("span",{className:O.a.name,children:[n,":"]}),Object(m.jsx)("span",{className:O.a.number,children:a})]})]})},x=n(12),N=n.n(x),v=function(e){var t=e.contacts,n=e.onDelete;return Object(m.jsx)("ul",{className:N.a.list,children:t.map((function(e){var t=e.id,a=e.name,c=e.number;return Object(m.jsx)(h,{name:a,number:c,onDelete:function(){return n(t)}},t)}))})},C=n(7),g=n.n(C),S=function(e){var t=e.filter,n=e.onFilterName;return Object(m.jsxs)("label",{className:g.a.label,children:[Object(m.jsx)("span",{className:g.a.title,children:"Find contacts by name:"}),Object(m.jsx)("input",{className:g.a.input,type:"text",value:t,onChange:n})]})},F=n(13),k=n(10),w=n.n(k),y=function(){var e=Object(a.useState)((function(){var e;return null!==(e=JSON.parse(window.localStorage.getItem("contacts")))&&void 0!==e?e:F})),t=Object(o.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(""),s=Object(o.a)(i,2),u=s[0],l=s[1];Object(a.useEffect)((function(){window.localStorage.setItem("contacts",JSON.stringify(n))}),[n]);return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(p,{children:[Object(m.jsx)("h1",{className:w.a.title,children:"Phonebook"}),Object(m.jsx)(j,{onSubmit:function(e){n.some((function(t){return t.name.includes(e.name)}))?alert("".concat(e.name," is already in contacts")):c((function(t){return[e].concat(Object(r.a)(n))}))}})]}),Object(m.jsxs)(p,{children:[Object(m.jsx)("h2",{className:w.a.subtitle,children:"Contacts"}),Object(m.jsx)(S,{filter:u,onFilterName:function(e){var t=e.currentTarget.value;l(t)}}),Object(m.jsx)(v,{contacts:function(){var e=u.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(e)}))}(),onDelete:function(e){c((function(t){return t.filter((function(t){return t.id!==e}))}))}})]})]})};s.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(y,{})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.36ca90a1.chunk.js.map