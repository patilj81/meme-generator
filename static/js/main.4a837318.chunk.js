(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(4),s=n.n(c),o=(n(15),n(0));var r=function(){return Object(o.jsxs)("header",{className:"header",children:[Object(o.jsx)("h1",{children:"Meme Generator"}),Object(o.jsx)("h1",{children:"- By JP STORM..."})]})},i=n(5),h=n(6),l=n(7),j=n(2),m=n(10),d=n(9),b=n.p+"static/media/simply.6e1245ef.jpg",u=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(h.a)(this,n),(e=t.call(this)).state={topText:"One should simply",bottomText:"try this meme generator..."},e.handleChange=e.handleChange.bind(Object(j.a)(e)),e}return Object(l.a)(n,[{key:"handleChange",value:function(e){var t=e.target,n=t.name,a=t.value;this.setState(Object(i.a)({},n,a))}},{key:"render",value:function(){return Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"meme-input",children:[Object(o.jsx)("input",{type:"text",name:"topText",placeholder:"enter top text",onChange:this.handleChange}),Object(o.jsx)("input",{type:"text",name:"bottomText",placeholder:"enter bottom text",onChange:this.handleChange})]}),Object(o.jsxs)("div",{className:"meme-creator",children:[Object(o.jsx)("img",{src:b}),Object(o.jsx)("h1",{className:"topText",children:this.state.topText}),Object(o.jsx)("h1",{className:"bottomText",children:this.state.bottomText}),Object(o.jsx)("h1",{})]})]})}}]),n}(a.Component),x=n(8),O=n.n(x);function p(){console.log(document.getElementsByClassName("meme-creator")),O.a.toPng(document.getElementsByClassName("meme-creator")[0]).then((function(e){var t=document.createElement("a");t.download="my-image-name.jpeg",t.href=e,t.click()})).catch((function(e){console.error("oops, something went wrong!",e)}))}var g=function(){return Object(o.jsx)("button",{type:"button",class:"download-btn",onClick:p,children:"Download"})};function f(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(r,{}),Object(o.jsx)(u,{}),Object(o.jsx)(g,{})]})}s.a.render(Object(o.jsx)(f,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.4a837318.chunk.js.map