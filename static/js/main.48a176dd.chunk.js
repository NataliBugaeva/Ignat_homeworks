(this.webpackJsonphomeworks=this.webpackJsonphomeworks||[]).push([[0],[,,,,,function(e,t,n){e.exports={menu:"Header_menu__28N5G",menu_button:"Header_menu_button__2zhbu",menu_links:"Header_menu_links__2giwI",unvisible:"Header_unvisible__3jL7A",visible:"Header_visible__1WEO0",span_link:"Header_span_link__1Efr5"}},,,,,function(e,t,n){e.exports={message:"Message_message__3h9qI",wrapper:"Message_wrapper__6Ya_6",avatar:"Message_avatar__2PyEz",message_text:"Message_message_text__DsknI",test:"Message_test__3cxCb"}},,function(e,t,n){e.exports={input:"SuperInputText_input__2CrZ5",superInput:"SuperInputText_superInput__13xLS",errorInput:"SuperInputText_errorInput__37HIl",error:"SuperInputText_error__1NJz5"}},function(e,t,n){e.exports={greeting:"Greeting_greeting__3V1ED",someClass:"Greeting_someClass__4Q3Uq",error:"Greeting_error__ejKez"}},function(e,t,n){e.exports={default:"SuperButton_default__2FLRQ",red:"SuperButton_red__VKVtQ",button:"SuperButton_button__gt4_4",blink:"SuperButton_blink__3C7TX"}},,function(e,t,n){e.exports={error_img:"Error404_error_img__3RpUb"}},function(e,t,n){e.exports={blue:"HW4_blue__2DgaJ",column:"HW4_column__1J1CM",testSpanError:"HW4_testSpanError__3Lu0K"}},function(e,t,n){e.exports={label:"SuperCheckbox_label__1VXYx",checkbox:"SuperCheckbox_checkbox__3MwxG",spanClassName:"SuperCheckbox_spanClassName__3XCST"}},,function(e,t,n){e.exports={App:"App_App__3pk6l"}},,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(19),s=n.n(c),i=(n(26),n(20)),o=n.n(i),j=n(3),l=n(6),u=n(5),b=n.n(u),d=n(0);var h=function(){var e=a.a.useState(!0),t=Object(j.a)(e,2),n=t[0],r=t[1],c="".concat(b.a.menu_links," ").concat(n?b.a.unvisible:b.a.visible),s="".concat(b.a.menu_button," ").concat(n?b.a.unvisible:b.a.visible);return Object(d.jsxs)("nav",{className:b.a.menu,children:[Object(d.jsxs)("div",{className:c,children:[Object(d.jsx)("span",{className:b.a.span_link,children:Object(d.jsx)(l.b,{to:"/pre-junior",children:"pre-junior"})}),Object(d.jsx)("span",{className:b.a.span_link,children:Object(d.jsx)(l.b,{to:"/junior",children:"junior"})}),Object(d.jsx)("span",{className:b.a.span_link,children:Object(d.jsx)(l.b,{to:"/junior-plus",children:"junior-plus"})})]}),Object(d.jsx)("div",{className:s,onClick:function(){r(!n)}})]})},x=n(2),O=n(16),_=n.n(O),m=n.p+"static/media/not_found.c86ce486.jpg";var p=function(){return Object(d.jsx)("div",{className:_.a.error_page,children:Object(d.jsx)("div",{className:_.a.error_img,children:Object(d.jsx)("img",{src:m,alt:""})})})},f=n(10),v=n.n(f);var g=function(e){return Object(d.jsx)("div",{className:v.a.message,children:Object(d.jsxs)("div",{className:v.a.wrapper,children:[Object(d.jsx)("div",{className:v.a.avatar,children:Object(d.jsx)("img",{src:e.avatar,alt:""})}),Object(d.jsxs)("div",{className:v.a.message_text,children:[Object(d.jsx)("div",{children:e.name}),Object(d.jsx)("div",{children:e.message}),Object(d.jsx)("div",{children:e.time}),Object(d.jsx)("div",{className:v.a.test})]})]})})},k="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",C="Alice",N="Hi! How are you?",w="22:22";var S=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 1",Object(d.jsx)(g,{avatar:k,name:C,message:N,time:w}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var y=function(e){return Object(d.jsxs)("div",{children:["Affair ",e.affair.name," with ",e.affair.priority," priority",Object(d.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},children:"X"})]})};var I=function(e){var t=e.data.map((function(t){return Object(d.jsx)(y,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)}));return Object(d.jsxs)("div",{children:[t,Object(d.jsx)("button",{onClick:function(){e.setFilter("all")},children:"All"}),Object(d.jsx)("button",{onClick:function(){e.setFilter("high")},children:"High"}),Object(d.jsx)("button",{onClick:function(){e.setFilter("middle")},children:"Middle"}),Object(d.jsx)("button",{onClick:function(){e.setFilter("low")},children:"Low"})]})},H=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var T=function(){var e=Object(r.useState)(H),t=Object(j.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)("all"),s=Object(j.a)(c,2),i=s[0],o=s[1],l=function(e,t){switch(t){case"low":return e.filter((function(e){return"low"===e.priority}));case"middle":return e.filter((function(e){return"middle"===e.priority}));case"high":return e.filter((function(e){return"high"===e.priority}));default:return e}}(n,i);return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 2",Object(d.jsx)(I,{data:l,setFilter:o,deleteAffairCallback:function(e){return a(function(e,t){return e.filter((function(e){return e._id!==t}))}(n,e))}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},A=n(21),E=n(13),U=n.n(E),K=function(e){var t=e.name,n=e.setNameCallback,r=e.addUserOnKeyPress,a=e.addUser,c=e.error,s=e.totalUsers,i=c?U.a.error:U.a.someClass,o=c.length>0;return Object(d.jsxs)("div",{className:U.a.greeting,children:[Object(d.jsx)("input",{value:t,onChange:n,onKeyPress:r,className:i}),Object(d.jsx)("button",{onClick:a,disabled:o,children:"add"}),Object(d.jsx)("span",{children:s}),Object(d.jsx)("p",{children:c})]})},M=function(e){var t=e.users,n=e.addUserCallback,a=Object(r.useState)(""),c=Object(j.a)(a,2),s=c[0],i=c[1],o=Object(r.useState)(""),l=Object(j.a)(o,2),u=l[0],b=l[1],h=s.trim(),x=function(){h?(n(h),i(""),alert("Hello, ".concat(h,"!"))):b("Name is required!")},O=t.length;return Object(d.jsx)(K,{name:s,setNameCallback:function(e){e.currentTarget.value.trim()?(b(""),i(e.currentTarget.value)):(b("Name is required!"),i(""))},addUserOnKeyPress:function(e){"Enter"===e.key&&x()},addUser:x,error:u,totalUsers:O})},P=n(30);var F=function(){var e=Object(r.useState)([]),t=Object(j.a)(e,2),n=t[0],a=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 3",Object(d.jsx)(M,{users:n,addUserCallback:function(e){a([].concat(Object(A.a)(n),[{_id:Object(P.a)(),name:e}]))}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},J=n(8),W=n(9),B=n(12),G=n.n(B),L=function(e){e.type;var t=e.onChange,n=e.onChangeText,r=e.onKeyPress,a=e.onEnter,c=e.error,s=e.className,i=e.spanClassName,o=Object(W.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),j="".concat(G.a.error," ").concat(i||""),l="".concat(G.a.input," ").concat(c?G.a.errorInput:G.a.superInput," ").concat(s);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",Object(J.a)({type:"text",onChange:function(e){t&&t(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){r&&r(e),a&&"Enter"===e.key&&a()},className:l},o)),c&&Object(d.jsx)("span",{className:j,children:c})]})},q=n(17),R=n.n(q),X=n(14),z=n.n(X),V=function(e){var t=e.red,n=e.className,r=Object(W.a)(e,["red","className"]),a="".concat(z.a.button," ").concat(t?z.a.red:z.a.default," ").concat(n);return Object(d.jsx)("button",Object(J.a)({className:a},r))},D=n(18),Q=n.n(D),Y=function(e){e.type;var t=e.onChange,n=e.onChangeChecked,r=e.className,a=(e.spanClassName,e.children),c=Object(W.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(Q.a.checkbox," ").concat(r||"");return Object(d.jsxs)("label",{children:[Object(d.jsx)("input",Object(J.a)({type:"checkbox",onChange:function(e){t&&t(e),n&&n(e.currentTarget.checked)},className:s},c)),a&&Object(d.jsx)("span",{className:Q.a.spanClassName,children:a})]})};var Z=function(){var e=Object(r.useState)(""),t=Object(j.a)(e,2),n=t[0],a=t[1],c=n?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(n)},i=Object(r.useState)(!1),o=Object(j.a)(i,2),l=o[0],u=o[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 4",Object(d.jsxs)("div",{className:R.a.column,children:[Object(d.jsx)(L,{value:n,onChangeText:a,onEnter:s,error:c}),Object(d.jsx)(L,{className:R.a.blue}),Object(d.jsx)(V,{children:"default"}),Object(d.jsx)(V,{red:!0,onClick:s,children:"delete "}),Object(d.jsx)(V,{disabled:!0,children:"disabled"}),Object(d.jsx)(Y,{checked:l,onChangeChecked:u,children:"some text "}),Object(d.jsx)(Y,{checked:l,onChange:function(e){return u(e.currentTarget.checked)}})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var $=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(S,{}),Object(d.jsx)(T,{}),Object(d.jsx)(F,{}),Object(d.jsx)(Z,{})]})};var ee=function(){return Object(d.jsx)("div",{children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 JUNIOR"})};var te=function(){return Object(d.jsx)("div",{children:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u0430 JUNIOR_PLUS"})},ne="/pre-junior",re="/junior",ae="/junior-plus";var ce=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(x.d,{children:[Object(d.jsx)(x.b,{path:"/",element:Object(d.jsx)(x.a,{to:ne})}),Object(d.jsx)(x.b,{path:ne,element:Object(d.jsx)($,{})}),"// add routes",Object(d.jsx)(x.b,{path:re,element:Object(d.jsx)(ee,{})}),Object(d.jsx)(x.b,{path:ae,element:Object(d.jsx)(te,{})}),Object(d.jsx)(x.b,{path:"*",element:Object(d.jsx)(p,{})})]})})};var se=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(h,{}),Object(d.jsx)(ce,{})]})};var ie=function(){return Object(d.jsxs)("div",{className:o.a.App,children:[Object(d.jsx)("div",{children:"react homeworks:"}),Object(d.jsx)(se,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(l.a,{children:Object(d.jsx)(ie,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[28,1,2]]]);
//# sourceMappingURL=main.48a176dd.chunk.js.map