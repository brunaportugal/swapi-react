(this["webpackJsonpswapi-react"]=this["webpackJsonpswapi-react"]||[]).push([[0],{103:function(e,t,c){},104:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(0),r=c.n(a),s=c(76),i=c.n(s),o=(c(94),c.p,c(71),c(69)),j=c(29),l=c.n(j),u=c(47),b=c(35),h=c(114),d=c(113),f=c(20);function O(){return Object(n.jsx)(h.a,{inverted:!0,children:Object(n.jsxs)(d.a,{children:[Object(n.jsx)(f.b,{to:"/",children:Object(n.jsx)(h.a.Item,{name:"films"})}),Object(n.jsx)(f.b,{to:"/characters",children:Object(n.jsx)(h.a.Item,{name:"characters"})})]})})}var m=c(115);function p(e){var t=e.data,c=e.favoriteFilms,a=e.toggleFavoriteFilm;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h1",{children:"Films"}),Object(n.jsx)(m.a,{columns:1,children:t.map((function(e,t){var r=c.includes(e.episode_id);return Object(n.jsxs)(m.a.Column,{children:[Object(n.jsx)(f.b,{to:{pathname:"/film/".concat(e.episode_id),state:e},children:Object(n.jsx)("img",{className:"films-images",src:"../films/".concat(e.episode_id,".jpg"),alt:""})}),Object(n.jsx)("h3",{children:e.title}),Object(n.jsx)("button",{onClick:function(){return a(e.episode_id)},children:r?"Favorite":"Not Favorite"})]},t)}))})]})}var x=c(5);function v(){var e=Object(x.f)();console.log(e);var t=e.state;console.log(t);var c=/\d+/,r=t.characters.map((function(e){return e.match(c)[0]}));console.log(r);var s=Object(a.useState)([]),i=Object(b.a)(s,2),o=i[0],j=i[1];return Object(a.useEffect)((function(){function e(){return(e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(r.map(function(){var e=Object(u.a)(l.a.mark((function e(t){var c,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://swapi.dev/api/people/".concat(t,"/"));case 2:return c=e.sent,e.next=5,c.json();case 5:return(n=e.sent).id=t,e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 2:t=e.sent,j(t),console.log(t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h1",{children:t.title}),Object(n.jsx)(m.a,{columns:1,children:Object(n.jsxs)(m.a.Column,{children:[Object(n.jsx)("img",{className:"films-images",src:"../films/".concat(t.episode_id,".jpg"),alt:""}),Object(n.jsx)(m.a.Column,{columns:2,children:Object(n.jsx)("ul",{children:o.map((function(e){return Object(n.jsxs)("li",{children:[Object(n.jsx)(f.b,{to:{pathname:"/character/".concat(e.id),state:e},children:Object(n.jsx)("img",{className:"avatar",src:"../characters/".concat(e.id,".jpg"),alt:""})}),e.name]})}))})})]})})]})}function g(e){var t=e.favoriteCharacters,c=e.toggleFavoriteCharacter,a=Object(x.f)();console.log(a);var r=a.state;console.log(r);var s=t.includes(r.id);return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("img",{className:"films-images",src:"../characters/".concat(r.id,".jpg"),alt:""}),Object(n.jsx)("h1",{children:r.name}),Object(n.jsx)("button",{onClick:function(){return c(r.id)},children:s?"Favorite":"Not Favorite"})]})}c(103);var F=function(){var e=Object(a.useState)([]),t=Object(b.a)(e,2),c=t[0],r=t[1];Object(a.useEffect)((function(){function e(){return(e=Object(u.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://swapi.dev/api/films/?format=json");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,console.log(c),r(c.results);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var s=Object(a.useState)([]),i=Object(b.a)(s,2),j=i[0],h=i[1],m=Object(a.useState)([]),F=Object(b.a)(m,2),w=F[0],C=F[1],k=Object(a.useState)(!0),S=Object(b.a)(k,2);return S[0],S[1],Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(f.a,{children:[Object(n.jsx)(O,{}),Object(n.jsx)(d.a,{children:Object(n.jsxs)(x.c,{children:[Object(n.jsx)(x.a,{exact:!0,path:"/",children:Object(n.jsx)(p,{data:c,favoriteFilms:j,toggleFavoriteFilm:function(e){if(j.includes(e)){var t=j.filter((function(t){return t!==e}));h(t)}else{var c=[].concat(Object(o.a)(j),[e]);h(c)}}})}),Object(n.jsx)(x.a,{path:"/film/:id",children:Object(n.jsx)(v,{data:c})}),Object(n.jsx)(x.a,{path:"/character/:id",children:Object(n.jsx)(g,{favoriteCharacters:w,toggleFavoriteCharacter:function(e){if(w.includes(e)){var t=w.filter((function(t){return t!==e}));C(t)}else{var c=[].concat(Object(o.a)(w),[e]);C(c)}}})})]})})]})})},w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,116)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(F,{})}),document.getElementById("root")),w()},71:function(e,t,c){}},[[104,1,2]]]);
//# sourceMappingURL=main.2c447717.chunk.js.map