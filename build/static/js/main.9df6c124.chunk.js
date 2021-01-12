(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{15:function(e,n,t){e.exports=t(38)},20:function(e,n,t){},38:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),u=t(13),c=t.n(u),o=(t(20),t(14)),l=t(2),i=function(e){var n=e.name,t=e.number,a=e.handleName,u=e.handleNumber,c=e.addPerson;return r.a.createElement("form",{onSubmit:c},r.a.createElement("div",null,"Name: ",r.a.createElement("input",{value:n,onChange:a})),r.a.createElement("div",null,"Number: ",r.a.createElement("input",{value:t,onChange:u})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},m=function(e){var n=e.name,t=e.number,a=e.personId,u=e.handleDelete;return r.a.createElement("li",null,n," ",t,r.a.createElement("button",{onClick:function(){return u(a)}},"remove"))},f=function(e){var n=e.persons,t=e.query,a=e.handleDelete,u=(""===t?n:n.filter((function(e){return e.name.toLowerCase().includes(t)}))).map((function(e){return r.a.createElement(m,{key:e.name,name:e.name,number:e.number,personId:e.id,handleDelete:a})}));return r.a.createElement("ul",{style:{listStyleType:"none"}},u)},d=function(e){var n=e.query,t=e.handleQuery;return r.a.createElement("div",null,"Search by name: ",r.a.createElement("input",{value:n,onChange:t}))},s=function(e){var n=e.message;return null===n?null:r.a.createElement("div",{className:"changeNotification"},n)},h=function(e){var n=e.message;return null===n?null:r.a.createElement("div",{className:"errorNotification"},n)},b=t(3),v=t.n(b),p="/api/persons",E=function(){return v.a.get(p).then((function(e){return e.data}))},y=function(e){return v.a.post(p,e).then((function(e){return e.data}))},g=function(e,n){return v.a.put("".concat(p,"/").concat(e),n).then((function(e){return e.data}))},j=function(e){return v.a.delete("".concat(p,"/").concat(e))},O=function(){var e=Object(a.useState)([]),n=Object(l.a)(e,2),t=n[0],u=n[1],c=Object(a.useState)(""),m=Object(l.a)(c,2),b=m[0],v=m[1],p=Object(a.useState)(""),O=Object(l.a)(p,2),w=O[0],N=O[1],S=Object(a.useState)(""),k=Object(l.a)(S,2),D=k[0],T=k[1],C=Object(a.useState)(null),I=Object(l.a)(C,2),q=I[0],P=I[1],A=Object(a.useState)(null),J=Object(l.a)(A,2),L=J[0],Q=J[1];Object(a.useEffect)((function(){E().then((function(e){u(e)}))}),[]);var U=function(e){g(e.id,e).then((function(n){u(t.map((function(e){return e.id!==n.id?e:n}))),v(""),N(""),P("Updated ".concat(e.name)),setTimeout((function(){return P(null)}),5e3)})).catch((function(n){Q("Updating the information of ".concat(e.name," has failed. It could have been already deleted.")),setTimeout((function(){return Q(null)}),5e3),u(t.filter((function(n){return n.id!==e.id})))}))};return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(d,{query:D,handleQuery:function(e){T(e.target.value.toLowerCase())}}),r.a.createElement(s,{message:q}),r.a.createElement(h,{message:L}),r.a.createElement("h2",null,"Add a new person"),r.a.createElement(i,{name:b,number:w,handleName:function(e){v(e.target.value)},handleNumber:function(e){N(e.target.value)},addPerson:function(e){e.preventDefault();var n={name:b,number:w};if(""===n.number)return Q("Please input a number"),void setTimeout((function(){return Q(null)}),5e3);var a=t.find((function(e){return e.name===b}));a?window.confirm("".concat(b," is already in the phonebook, replace their number with a new one?"))&&U(Object(o.a)({},a,{number:w})):y(n).then((function(e){u(t.concat(e)),v(""),N(""),P("Added ".concat(n.name)),setTimeout((function(){return P(null)}),5e3)}))}}),r.a.createElement("h2",null,"Numbers"),r.a.createElement(f,{persons:t,query:D,handleDelete:function(e){var n=t.find((function(n){return n.id===e}));window.confirm("Delete ".concat(n.name,"?"))&&j(e).then((function(a){u(t.filter((function(n){return n.id!==e}))),P("Deleted ".concat(n.name)),setTimeout((function(){return P(null)}),5e3)})).catch((function(e){Q("Information of ".concat(n.name," has already been \n          removed from the server")),setTimeout((function(){return Q(null)}),5e3),u(t.filter((function(e){return e.id!==n.id})))}))}}))};c.a.render(r.a.createElement(O,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.9df6c124.chunk.js.map