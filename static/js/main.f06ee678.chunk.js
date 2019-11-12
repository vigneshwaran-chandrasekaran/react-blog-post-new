(this["webpackJsonpreact-blog-post-new"]=this["webpackJsonpreact-blog-post-new"]||[]).push([[0],{172:function(e,t,a){e.exports=a(346)},346:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(16),o=a.n(l),c=a(55),i=a(28),s=(a(177),a(349)),u=a(348),m=a(45),p=a(10),d=a(57),b=a(34),f=a.n(b),g=a(77),O=a(47),y=a(56),E=a(53),v=a.n(E),h=a(164);function P(e){var t=e.name,a=e.label,n=Object(h.a)(e,["name","label"]);return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"mb-0 small text-uppercase text-primary",htmlFor:t},a),r.a.createElement(O.b,Object.assign({id:t,name:t,className:"form-control"},n)),r.a.createElement(O.a,{name:t,className:"text-danger small",component:"div"}))}var j="https://my-json-server.typicode.com/Srinivasan47/mockjson/posts",S=function(){var e,t,a=Object(n.useRef)(null),l=Object(p.b)(),o=Object(p.c)((function(e){return e.editId})),c=Object(p.c)((function(e){return e.blogPosts}));o?(e=c.find((function(e){return e.id===o})),t="PUT"):(e={title:"",Category:"",author:"",ImageURL:"",Description:""},t="POST");var i=y.object().shape({title:y.string().required("Title required"),Category:y.string().required("Category required"),author:y.string().required("Author required")});function s(e){return u.apply(this,arguments)}function u(){return(u=Object(g.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.post(j,t).then((function(e){l({type:"ADD_BLOG_POST",payload:e.data})})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return d.apply(this,arguments)}function d(){return(d=Object(g.a)(f.a.mark((function e(t){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.a.put("".concat(j,"/").concat(t.id),t).then((function(e){l({type:"UPDATE_BLOG_POST",payload:e.data})})).catch((function(e){console.log(e)}));case 2:l({type:"SHOW_BLOG_POST_POPUP",payload:!1}),l({type:"EDIT_BLOG_POST",payload:null});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var b=function(){var e=Object(g.a)(f.a.mark((function e(a,n){var r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=n.resetForm,"POST"===t?s(a):"PUT"===t&&m(a),r();case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),E=function(){a.current.focus()};return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"my-3 text-center"},"Add new blog post"),r.a.createElement(O.d,{initialValues:e,validationSchema:i,onSubmit:b,onReset:function(e){console.log("handleOnReset",e),E()},render:function(e){var t=e.isSubmitting,n=e.handleReset;return r.a.createElement(O.c,null,r.a.createElement(P,{innerRef:a,name:"title",label:"Title",placeholder:"Title"}),r.a.createElement(P,{name:"Category",label:"Category",placeholder:"Category"}),r.a.createElement(P,{name:"author",label:"Author",placeholder:"Author"}),r.a.createElement(P,{name:"ImageURL",label:"ImageURL",placeholder:"ImageURL"}),r.a.createElement(P,{name:"Description",label:"Description",placeholder:"Description"}),r.a.createElement("button",{type:"submit",className:"btn btn-primary mr-3"},"Submit"),r.a.createElement("button",{type:"reset",className:"btn btn-warning",disabled:t,onClick:n},"Reset"))}}))};function _(){var e=Object(p.b)(),t=Object(p.c)((function(e){return e.showBlogPostPopup}));function a(){e({type:"SHOW_BLOG_POST_POPUP",payload:!1}),e({type:"EDIT_BLOG_POST",payload:null})}return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{show:t,onHide:a},r.a.createElement(d.a.Header,{closeButton:!0}),r.a.createElement(d.a.Body,null,r.a.createElement(S,null)),r.a.createElement(d.a.Footer,null,r.a.createElement(m.a,{variant:"secondary",onClick:a},"Close"))))}var w=function(){var e=Object(p.b)();return r.a.createElement(s.a,{collapseOnSelect:!0,expand:"lg",bg:"light",variant:"light",className:"mb-3"},r.a.createElement(s.a.Brand,{as:c.b,to:"/"},"Blog"),r.a.createElement(s.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(s.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(u.a,{className:"mr-auto"},r.a.createElement(u.a.Link,{exact:!0,as:c.b,to:"/"},"Blog List"),r.a.createElement(m.a,{variant:"primary",onClick:function(){e({type:"SHOW_BLOG_POST_POPUP",payload:!0})}},"Add new post"))),r.a.createElement(_,null))},T=a(350);function B(e){var t=e.Category,a=e.title,n=e.ImageURL,l=e.author,o=e.Description,c=e.id,i=Object(p.b)();return r.a.createElement(T.a,{className:"mb-5"},r.a.createElement(T.a.Body,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-3"},r.a.createElement("img",{src:n,alt:t})),r.a.createElement("div",{className:"col-9"},r.a.createElement("h4",null,a),r.a.createElement("div",null,o),r.a.createElement("div",{className:"d-flex justify-content-between my-2"},r.a.createElement("div",{className:"d-flex justify-content-start"},r.a.createElement("span",{className:"badge badge-warning mr-2","data-toggle":"tooltip",title:"Category"},t),r.a.createElement("span",{className:"badge badge-info","data-toggle":"tooltip",title:"Author name"},l))),r.a.createElement("div",null,r.a.createElement(m.a,{className:"p-0",onClick:function(){return function(e){i({type:"EDIT_BLOG_POST",payload:e}),i({type:"SHOW_BLOG_POST_POPUP",payload:!0})}(c)},variant:"link"},"Edit"))))))}B.defaultProps={Category:"",title:"",ImageURL:"",author:"",Description:""};var L=B;function N(){var e=Object(p.b)(),t=Object(p.c)((function(e){return e.blogPosts}));Object(n.useEffect)((function(){a()}),[]);var a=function(){v.a.get(j).then((function(t){e({type:"LIST_BLOG_POSTS",payload:t.data})})).catch((function(e){console.log(e)}))};return r.a.createElement("section",{className:"container-fluid"},t&&t.map((function(e){return r.a.createElement(L,Object.assign({key:e.id},e))})))}function D(){return Object(n.useEffect)((function(){}),[]),r.a.createElement("div",null,"EditBlogPost")}var k=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null,r.a.createElement(w,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/edit/:id"},r.a.createElement(D,null)),r.a.createElement(i.a,{path:"/add"},r.a.createElement("div",{className:"row d-flex justify-content-center"},r.a.createElement("div",{className:"col-4"},r.a.createElement(S,null)))),r.a.createElement(i.a,{path:"/"},r.a.createElement(N,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var I=a(52),x=a(168),C=a(170),G=a(169);function U(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function R(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?U(a,!0).forEach((function(t){Object(G.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):U(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var A={blogPosts:[],editId:null,showBlogPostPopup:!1};var H=[x.a],W=Object(I.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;if("LIST_BLOG_POSTS"===t.type)return R({},e,{blogPosts:t.payload});if("ADD_BLOG_POST"===t.type)return R({},e,{blogPosts:[].concat(Object(C.a)(e.blogPosts),[t.payload])});if("UPDATE_BLOG_POST"===t.type){var a=e.blogPosts.map((function(e){return e.id===t.payload.id?t.payload:e}));return R({},e,{blogPosts:a})}return"EDIT_BLOG_POST"===t.type?R({},e,{editId:t.payload}):"SHOW_BLOG_POST_POPUP"===t.type?R({},e,{showBlogPostPopup:t.payload}):e}),I.a.apply(void 0,H));W.subscribe((function(){console.log(W.getState())}));var q=W;o.a.render(r.a.createElement(p.a,{store:q},r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[172,1,2]]]);
//# sourceMappingURL=main.f06ee678.chunk.js.map