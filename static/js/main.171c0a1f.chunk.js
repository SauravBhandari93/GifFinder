(this["webpackJsonpgifs-search"]=this["webpackJsonpgifs-search"]||[]).push([[0],{45:function(e,t,c){},55:function(e,t,c){},56:function(e,t,c){},63:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),i=c(9),s=c.n(i),r=(c(55),c(29)),l=c(11),j=c(98),o=(c(56),c(4));var d=function(){return Object(o.jsxs)("div",{className:"header",children:[Object(o.jsx)(r.b,{to:"/",children:Object(o.jsx)("h1",{children:"Search"})}),Object(o.jsx)(r.b,{to:"/favorite",children:Object(o.jsx)("h1",{children:"Favorite"})})]})},h=c(42),b=c(22),O=c(99),u=c(100),v=c(94);c(45);var f=function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)(!0),s=Object(b.a)(i,2),r=s[0],l=s[1],j=Object(n.useState)(""),d=Object(b.a)(j,2),f=d[0],g=d[1],x=Object(n.useState)("all"),m=Object(b.a)(x,2),S=m[0],p=m[1],y=Object(n.useState)(""),N=Object(b.a)(y,2),C=N[0],I=N[1];return Object(n.useEffect)((function(){fetch("https://api.giphy.com/v1/gifs/search?limit=20&api_key=dCGrnKPTBrjaXvCsR4QGoY1qRVxg3Qij&q=".concat(encodeURI(S))).then((function(e){return e.json()})).then((function(e){l(!1);var t=Object(h.a)(e.data);a(t)}))}),[S]),r?Object(o.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:Object(o.jsx)(v.a,{color:"secondary"})}):Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"search",children:[Object(o.jsx)(O.a,{id:"outlined-basic",label:"Search Gifs",variant:"outlined",value:f,onChange:function(e){g(e.target.value)}}),Object(o.jsx)(u.a,{variant:"contained",color:"primary",href:"#contained-buttons",onClick:function(){p(f),l(!0)},children:"Search"})]}),Object(o.jsx)("div",{className:"gallery",children:c.map((function(e,t){return Object(o.jsxs)("div",{className:"gal",onMouseOver:function(e){I(t)},children:[Object(o.jsx)("img",{src:e.images.original.url,alt:"gif",style:{height:"15vw",width:"15vw"}}),C===t?Object(o.jsx)("div",{className:"addToFav",children:Object(o.jsx)("button",{onClick:function(t){var c=localStorage.getItem("favs");c?0===(c=JSON.parse(c)).filter((function(t){return t.id===e.id})).length&&(c=[].concat(Object(h.a)(c),[e]),localStorage.setItem("favs",JSON.stringify(c))):(c=[e],localStorage.setItem("favs",JSON.stringify(c))),console.log(c)},children:"Add to favourite"})}):Object(o.jsx)("div",{})]},t)}))})]})};var g=function(){var e=Object(n.useState)(!0),t=Object(b.a)(e,2),c=t[0],a=t[1],i=localStorage.getItem("favs");return console.log(c),Object(o.jsx)("div",{children:i?Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"clear",children:[Object(o.jsx)("h1",{style:{textAlign:"center"},children:"Selected Items"}),Object(o.jsx)("button",{onClick:function(){localStorage.removeItem("favs"),a(!1)},children:"Clear"})]}),Object(o.jsx)("div",{className:"gallery",children:JSON.parse(i).map((function(e,t){return Object(o.jsx)("div",{className:"gal",children:Object(o.jsx)("img",{src:e.images.original.url,alt:"gif",style:{height:"15vw",width:"15vw"}})},t)}))})]}):Object(o.jsx)("h1",{style:{textAlign:"center",color:"red"},children:"NO ITEM"})})};var x=function(){return Object(o.jsx)(g,{})};var m=function(){return Object(o.jsx)(j.a,{children:Object(o.jsxs)(r.a,{children:[Object(o.jsx)(d,{}),Object(o.jsxs)(l.c,{children:[Object(o.jsx)(l.a,{exact:!0,path:"/favorite",children:Object(o.jsx)(x,{})}),Object(o.jsx)(l.a,{exact:!0,path:"/",children:Object(o.jsx)(f,{})})]})]})})},S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,102)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),i(e),s(e)}))};s.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(m,{})}),document.getElementById("root")),S()}},[[63,1,2]]]);
//# sourceMappingURL=main.171c0a1f.chunk.js.map