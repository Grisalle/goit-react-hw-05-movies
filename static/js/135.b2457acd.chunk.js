"use strict";(self.webpackChunkgrisalle_react_hw_05=self.webpackChunkgrisalle_react_hw_05||[]).push([[135],{848:function(e,n,t){t.d(n,{E3:function(){return l},Hx:function(){return p},PQ:function(){return f},Y5:function(){return d},wr:function(){return o}});var r=t(861),a=t(757),c=t.n(a),s=t(340),i="https://api.themoviedb.org/3/",u="4bf52262cafa45f4a78d30477a8ff03d",o=function(){var e=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(i,"trending/movie/day?api_key=").concat(u));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(n){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(i,"search/movie?api_key=").concat(u,"&language=en-US&page=1&include_adult=false&query=").concat(n));case 2:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(i,"movie/").concat(n,"?api_key=").concat(u));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(i,"movie/").concat(n,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("".concat(i,"movie/").concat(n,"/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},135:function(e,n,t){t.r(n),t.d(n,{default:function(){return l}});var r=t(439),a=t(791),c=t(689),s=t(87),i=t(848),u={},o=t(184),l=function(){var e,n=(0,c.UO)().movieId,t=(0,a.useState)(null),l=(0,r.Z)(t,2),d=l[0],f=l[1],p=(0,a.useState)(!1),h=(0,r.Z)(p,2),v=h[0],x=h[1],m=(0,c.TH)(),g=(0,a.useRef)((null===(e=m.state)||void 0===e?void 0:e.from)||"/");if((0,a.useEffect)((function(){x(!0),(0,i.Y5)(n).then((function(e){f(e)})).catch((function(e){console.log(e)})).finally((function(){x(!1)}))}),[n]),d){var j=d||{},w=j.title,k=j.release_date,_=j.popularity,b=j.overview,y=j.genres,Z=j.poster_path,N=j.original_title;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.rU,{to:g.current,children:(0,o.jsx)("button",{type:"button",className:u.btnGB,children:"Go back"})}),v&&(0,o.jsx)("div",{children:"Loading..."}),d&&(0,o.jsxs)("div",{className:u.container,children:[(0,o.jsx)("img",{className:u.poster,width:"300px",src:Z?"https://image.tmdb.org/t/p/w500".concat(Z):"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg",alt:N}),(0,o.jsxs)("div",{className:u.information,children:[(0,o.jsxs)("h1",{children:[w," (",k.slice(0,4),")"]}),(0,o.jsxs)("p",{children:["User score: ",_]}),(0,o.jsx)("h2",{children:"Overview"}),(0,o.jsx)("p",{children:b}),(0,o.jsx)("h2",{children:"Genres"}),(0,o.jsx)("ul",{children:y.map((function(e){return(0,o.jsx)("li",{children:e.name},e.id)}))})]})]}),(0,o.jsx)("hr",{}),(0,o.jsxs)("div",{className:u.addInfoContainer,children:[(0,o.jsx)("h3",{children:"Additional information"}),(0,o.jsxs)("ul",{className:u.addInfoList,children:[(0,o.jsx)("li",{children:(0,o.jsx)(s.rU,{to:"cast",className:u.addInfo,children:"Cast"})}),(0,o.jsx)("li",{children:(0,o.jsx)(s.rU,{to:"reviews",className:u.addInfo,children:"Reviews"})})]}),(0,o.jsx)("hr",{}),(0,o.jsx)(c.j3,{})]})]})}}}}]);
//# sourceMappingURL=135.b2457acd.chunk.js.map