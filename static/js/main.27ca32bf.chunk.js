(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{21:function(e,t,n){},31:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),r=n(23),o=n.n(r),s=(n(31),n(3)),a=n(50),l=n(51),u=(n(21),n(1)),j=[{title:"A propos de moi...",text:Object(u.jsxs)("p",{id:"bio",children:["Hey salut vous ! Je m'appelle ",Object(u.jsx)("strong",{children:Object(u.jsx)("em",{children:"Jules"})}),".",Object(u.jsx)("br",{}),"Je suis un rouennais de 26 ans \xe9tudiant le d\xe9veloppement web \xe0 l'AFPA de St Etienne du Rouvray.",Object(u.jsx)("br",{}),"Je suis aussi un musicien ferru d'esclade et d\xe9veloppeur de jeu-vid\xe9o sur mon temps libre ! ",Object(u.jsx)("br",{}),"Vous pouvez consulter mes travaux pr\xe9cedents et trouverez mes diff\xe9rentes coordon\xe9es sur cette appli. Je suis aussi actuellement \xe0 la recherche d'un ",Object(u.jsx)("strong",{children:"stage non r\xe9mun\xe9r\xe9 de d\xe9veloppeur d'application web junior."}),'"']})},{title:"Technologies"},{text:"Je suis un d\xe9veloppeur d'appli Web et Web Mobile en herbe avec un attrait pour la programmation de jeu-vid\xe9o durant mon temps libre"}],d=n(11);function m(e){var t=e.img,n=e.title;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(d.a,{icon:t}),Object(u.jsx)("p",{children:n})]})}var b=n(6),p=[{logo:b.h,name:"React"},{logo:b.d,name:"javascript"},{logo:b.c,name:"HMTL"},{logo:b.a,name:"CSS"},{logo:b.g,name:"Php"},{logo:b.i,name:"Symfony"},{logo:b.f,name:"Ubuntu"}];function x(e){var t=e.func,n=e.title1,i=e.text1,r=e.title2,o=Object(c.useState)("-100vh"),a=Object(s.a)(o,2),l=a[0],j=a[1],d=Object(c.useState)("100vh"),b=Object(s.a)(d,2),x=b[0],h=b[1],f=Object(c.useState)(0),O=Object(s.a)(f,2),g=O[0],v=O[1],y=Object(c.useState)("100%"),k=Object(s.a)(y,2),N=k[0],w=k[1];function S(e){e?(j(0),h(0),setTimeout((function(){v(1),w("fit-content")}),1e3)):(j("-100vh"),h("100vh"),v(0))}return Object(c.useEffect)((function(){setTimeout((function(){return S(!0)}),50)}),[]),Object(u.jsxs)("div",{id:"mdl-container",children:[Object(u.jsx)("section",{id:"mdl-1",className:"m-section",style:{top:l,left:l},children:Object(u.jsxs)("div",{className:"opacity-anim",style:{opacity:g,height:N},children:[Object(u.jsx)("h2",{id:"mdl-title",className:"mdl-text mb-2 mb-md-5",children:n}),Object(u.jsx)("p",{id:"mdl-text",children:i})]})}),Object(u.jsx)("section",{id:"mdl-2",className:"m-section",style:{top:x,left:x},children:Object(u.jsxs)("div",{className:"opacity-anim",style:{opacity:g,height:N,color:"black"},children:[Object(u.jsx)("h2",{id:"mdl-title",children:r}),Object(u.jsx)("ul",{id:"tech-list",children:p.map((function(e,t){return Object(u.jsx)("li",{children:Object(u.jsx)(m,{title:e.name,img:e.logo})},t)}))})]})}),Object(u.jsx)("button",{className:"position-absolute top-0 m-2 start-0 btn-close opacity-anim",onClick:function(){S(!1),setTimeout((function(){t()}),600)},style:{opacity:g}})]})}n(38);function h(e){var t=e.reference,n=e.showModal,c=e.modalFunc;return Object(u.jsxs)("section",{id:"acceuil",ref:t,className:"block-section position-relative",children:[Object(u.jsxs)(a.a,{className:"p-0 title-container",children:[Object(u.jsxs)(l.a,{children:[Object(u.jsx)("span",{className:"col-6 p-0"}),Object(u.jsxs)("h1",{className:"col-6 h1left titleSize px-0",children:[" ",Array.from("Jules").map((function(e){return Object(u.jsx)("span",{className:"letter",children:e})}))," ",Object(u.jsx)("br",{}),Array.from("Noir--Vermeulen").map((function(e){return Object(u.jsx)("span",{className:"letter",children:e})}))]})]}),Object(u.jsx)(l.a,{children:Object(u.jsx)("h2",{className:"col-12 text-center px-0 titleSize titleDev",children:"D\xe9veloppeur Web"})}),Object(u.jsxs)(l.a,{className:"position-relative",children:[Object(u.jsx)("p",{className:"col-6 px-0 text lead",children:j[2].text}),Object(u.jsx)("div",{className:"about col-6 ",onClick:function(){return c(!0)},children:"\xc0 propos"})]}),Object(u.jsx)(l.a,{className:"bottom-0 text-center m-3"})]}),n&&Object(u.jsx)(x,{func:function(){return c(!1)},title1:j[0].title,text1:j[0].text,title2:j[1].title,text2:j[1].text})]})}n(39);function f(e){var t=e.name,n=e.url,i=e.description,r=e.img,o=Object(c.useState)(!1),a=Object(s.a)(o,2),l=a[0],j=a[1],m=Object(c.useState)(""),p=Object(s.a)(m,2),x=p[0],h=p[1],f=Object(c.useState)(window.innerWidth),O=Object(s.a)(f,2),g=O[0],v=O[1],y=Object(c.useRef)();function k(e,t){t?(e.current.style.opacity=g>768?.6:.4,e.current.style.width="100%",e.current.style.height="100%"):(e.current.style.opacity=0,e.current.style.width=0)}return Object(c.useEffect)((function(){h(l?function(){return"expanded"}:function(){return" "}),v(window.innerWidth)}),[l,g]),Object(u.jsxs)("article",{class:"d-flex justify-content-center align-items-center ".concat(x),onClick:function(){return!l&&j(!0)},style:{writingMode:!l&&g>768?"vertical-lr":"horizontal-tb",textOrientation:!l&&g>768&&"upright",backgroundImage:"url(".concat(r,")")},onPointerEnter:function(){return!l&&k(y,!1)},onPointerLeave:function(){return!l&&k(y,!0)},children:[l&&Object(u.jsx)("button",{style:{background:"none",border:"none",color:"white",backgroundColor:"rgba(0,0,0,.75)",borderRadius:"5px",marginBottom:".5em"},onClick:function(){return j(!1)},children:"< Go back"}),!l&&Object(u.jsx)("div",{ref:y,className:"overlay"}),!l&&Object(u.jsx)("h3",{id:"wf-title",children:t}),Object(u.jsx)("section",{className:"p-2",style:{backgroundColor:l&&"rgba(0,0,0,.75)",borderRadius:"5px"},children:l&&Object(u.jsxs)("div",{id:"frame-content",children:[Object(u.jsx)("h3",{id:"wf-title",children:t}),Object(u.jsx)("p",{children:i}),Object(u.jsx)("a",{href:n,alt:"Lien vers github",children:Object(u.jsx)(d.a,{icon:b.b})})]})})]})}n(40);var O=n.p+"static/media/cards.245d62e9.jpg",g=n.p+"static/media/starwars.6546b138.jpg",v=n.p+"static/media/terredegeek.da550626.jpg",y=n.p+"static/media/norimmobg.750c4c0f.jpg",k=[{name:"Memory Game",description:"Un jeu de m\xe9moire r\xe9alis\xe9 en javascript pendant ma formation \xe0 l'AFPA",img:O,url:"https://github.com/Eryans/Memory-Card-Game"},{name:"Money Manager (WIP)",description:"Projet fil rouge de la formation, il s'agit d'une application bancaire r\xe9alis\xe9 en php avec gestion de base de donn\xe9es.",img:n.p+"static/media/money.ca83e1fc.jpg",url:"https://github.com/Eryans/MoneyManager/tree/dev_oop_mvc"},{name:"Star Wiki",description:"(WIP) Une application utilisant l'api SWAPI afin d'afficher des donn\xe9es sur des personnages et \xe9l\xe9ments de l'univers Star Wars",img:g,url:"https://github.com/Eryans/StarWarsReactApp"},{name:"Terre de Geek",description:"Un site d'e-commerce responsif r\xe9alis\xe9 comme premier projet front-end html/css seulement",img:v,url:"https://github.com/Eryans/TerreDeGeek"},{name:"NorImmo",description:"Une appli d'une fausse agence immobli\xe8re r\xe9alis\xe9 en projet de groupe. code 100% fonctionnel, design 100% volontairement moche",img:y,url:"https://github.com/Eryans/NorImmo"}];function N(e){var t=e.reference;return Object(u.jsxs)("section",{id:"work",ref:t,className:"block-section position-relative project-container",children:[Object(u.jsx)("h1",{id:"w-title",children:"Mes travaux"}),Object(u.jsx)("ul",{className:"d-flex flex-column flex-md-row justify-content-center align-items-center gap-md-4 gap-3",children:k.map((function(e,t){return Object(u.jsxs)("li",{children:[" ",Object(u.jsx)(f,{name:e.name,url:e.url,description:e.description,img:e.img})," "]},t)}))})]})}n(41);var w=n(14),S=[{text:"Acceuil",icon:w.c,link:"#acceuil"},{text:"\xc0 propos",icon:w.b,link:"#acceuil"},{text:"Mes Projets",icon:w.d,link:"#work"},{text:"Contact",icon:w.a,link:"#contact"}],P=[{text:"GitHub",icon:b.b,link:"https://github.com/Eryans/"},{text:"Twitter",icon:b.j,link:"https://twitter.com/JulesNoir"},{text:"Linkedin",icon:b.e,link:"https://www.linkedin.com/in/jules-noir-354350220/"}],C=n(24);n(42);function M(e){var t=Object(c.useState)(!1),n=Object(s.a)(t,2),i=n[0],r=n[1];return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("p",{className:"".concat(!i&&"hidden"," text-white"),children:e.text}),e.isNav&&Object(u.jsx)(C.a,{to:"/pathLink"+e.link,smooth:!0,className:"link",children:Object(u.jsx)(d.a,{icon:e.icon,onPointerEnter:function(){return r(!0)},onPointerLeave:function(){return r(!1)},onClick:function(){return e.text.includes("propos")&&e.modalFunc(!0)}})}),!e.isNav&&Object(u.jsx)("a",{href:e.link,target:"_blank",rel:"noreferrer",className:"link",children:Object(u.jsx)(d.a,{icon:e.icon,onPointerEnter:function(){return r(!0)},onPointerLeave:function(){return r(!1)}})})]})}function E(e){e.title;var t=e.reference;return Object(u.jsxs)("section",{id:"contact",ref:t,className:"block-section parallaxSec col-12",children:[Object(u.jsxs)("h2",{children:["Contactez moi : ",Object(u.jsx)("a",{id:"mail-link",href:"mailto: julesnoir.vermeulen@gmail.com",children:"julesnoir.vermeulen@gmail.com"})," !"]}),Object(u.jsx)("ul",{id:"socialmedia",className:"d-flex justify-content-center ",children:P.map((function(e,t){return Object(u.jsxs)("li",{children:[" ",Object(u.jsx)(M,{icon:e.icon,link:e.link,isNav:!1,modalFunc:null})," "]},t)}))})]})}var F=n(52);n(43);function A(e){var t=e.bsPosition,n=e.direction,c=e.navContent,i=e.upOrDown,r=e.isNav,o=e.func;return Object(u.jsx)(F.a,{className:"nav-container ".concat(t),children:Object(u.jsx)("ul",{className:"px-3 ".concat(i," m-0 d-flex flex-column"),children:c.map((function(e,t){return Object(u.jsx)("li",{className:"d-flex ".concat(n," align-items-center justify-content-end gap-3"),children:Object(u.jsx)(M,{text:e.text,icon:e.icon,link:e.link,isNav:r,modalFunc:o})},t)}))})})}n(46);function W(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),n=t[0],i=t[1];return Object(u.jsxs)("main",{children:[Object(u.jsx)(A,{bsPosition:"bottom-0 start-0",direction:"flex-row-reverse",navContent:P,upOrDown:"down",isNav:!1}),Object(u.jsx)(A,{bsPosition:"end-0",navContent:S,upOrDown:"up",isNav:!0,func:i}),Object(u.jsxs)(a.a,{fluid:!0,id:"content-container",children:[Object(u.jsx)(l.a,{children:Object(u.jsx)(h,{showModal:n,modalFunc:function(e){i(e)}})}),Object(u.jsx)(l.a,{className:"d-flex flex-row flex-nowrap",children:Object(u.jsx)(N,{})}),Object(u.jsx)(l.a,{children:Object(u.jsx)(E,{title:"Contact"})})]})]})}n(47);var J=function(){return Object(u.jsx)("div",{className:"App text-center",children:Object(u.jsx)(W,{})})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,53)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),i(e),r(e),o(e)}))},L=n(12);n(48);o.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(L.a,{children:Object(u.jsx)(J,{})})}),document.getElementById("root")),T()}},[[49,1,2]]]);
//# sourceMappingURL=main.27ca32bf.chunk.js.map