"use strict";(self.webpackChunkgrisalle_react_hw_05=self.webpackChunkgrisalle_react_hw_05||[]).push([[135],{848:function(e,n,t){t.d(n,{E3:function(){return l},Hx:function(){return p},PQ:function(){return f},Y5:function(){return d},wr:function(){return u}});var r=t(861),a=t(757),s=t.n(a),c=t(340),i="https://api.themoviedb.org/3/",o="4bf52262cafa45f4a78d30477a8ff03d",u=function(){var e=(0,r.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(i,"trending/movie/day?api_key=").concat(o));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(s().mark((function e(n){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(i,"search/movie?api_key=").concat(o,"&language=en-US&page=1&include_adult=false&query=").concat(n));case 2:return t=e.sent,r=t.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(s().mark((function e(n){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(i,"movie/").concat(n,"?api_key=").concat(o));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(s().mark((function e(n){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(i,"movie/").concat(n,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(s().mark((function e(n){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(i,"movie/").concat(n,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},135:function(e,n,t){t.r(n),t.d(n,{default:function(){return l}});var r=t(439),a=t(791),s=t(689),c=t(87),i=t(848),o={btnGB:"MovieDetails_btnGB__9rowL",wrapper:"MovieDetails_wrapper__YMWLn",desc:"MovieDetails_desc__nunY6",descGenres:"MovieDetails_descGenres__5FvW7",title:"MovieDetails_title__cUGs9",addInfoList:"MovieDetails_addInfoList__rUVXv",addInfoItem:"MovieDetails_addInfoItem__NLvZp",addInfo:"MovieDetails_addInfo__lKFr+"},u=t(184),l=function(){var e,n=(0,s.UO)().movieId,t=(0,a.useState)(null),l=(0,r.Z)(t,2),d=l[0],f=l[1],p=(0,a.useState)(!1),h=(0,r.Z)(p,2),v=h[0],m=h[1],x=(0,s.TH)(),_=(0,a.useRef)((null===(e=x.state)||void 0===e?void 0:e.from)||"/");if((0,a.useEffect)((function(){m(!0),(0,i.Y5)(n).then((function(e){f(e)})).catch((function(e){console.log(e)})).finally((function(){m(!1)}))}),[n]),d){var j=d||{},g=j.title,w=j.release_date,N=j.popularity,b=j.overview,k=j.genres,I=j.poster_path,y=j.original_title;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("section",{className:"sectionBtn",children:(0,u.jsxs)("div",{className:"container",children:[(0,u.jsx)(c.rU,{to:_.current,children:(0,u.jsx)("button",{type:"button",className:o.btnGB,children:"\u2190 Go back"})}),v&&(0,u.jsx)("div",{children:"Loading..."})]})}),d&&(0,u.jsx)("section",{className:"section",children:(0,u.jsx)("div",{className:"container",children:(0,u.jsxs)("div",{className:o.wrapper,children:[(0,u.jsx)("img",{className:o.poster,width:"300px",src:I?"https://image.tmdb.org/t/p/w500".concat(I):"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg",alt:y}),(0,u.jsxs)("div",{className:o.information,children:[(0,u.jsxs)("h1",{children:[g," (",w.slice(0,4),")"]}),(0,u.jsxs)("p",{className:o.desc,children:["User score: ",N]}),(0,u.jsx)("h2",{className:o.title,children:"Overview"}),(0,u.jsx)("p",{className:o.desc,children:b}),(0,u.jsx)("h2",{className:o.title,children:"Genres"}),(0,u.jsx)("ul",{className:o.descGenres,children:k.map((function(e){return(0,u.jsx)("li",{children:e.name},e.id)}))})]})]})})}),(0,u.jsx)("hr",{}),(0,u.jsx)("section",{className:"section",children:(0,u.jsxs)("div",{className:"container",children:[(0,u.jsx)("h3",{children:"Additional information"}),(0,u.jsxs)("ul",{className:o.addInfoList,children:[(0,u.jsx)("li",{className:o.addInfoItem,children:(0,u.jsx)(c.rU,{to:"cast",className:o.addInfo,children:"Cast"})}),(0,u.jsx)("li",{className:o.addInfoItem,children:(0,u.jsx)(c.rU,{to:"reviews",className:o.addInfo,children:"Reviews"})})]})]})}),(0,u.jsx)("hr",{}),(0,u.jsx)(s.j3,{})]})}}}}]);
//# sourceMappingURL=135.4fe5ba12.chunk.js.map