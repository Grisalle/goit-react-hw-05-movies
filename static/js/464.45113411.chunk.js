"use strict";(self.webpackChunkgrisalle_react_hw_05=self.webpackChunkgrisalle_react_hw_05||[]).push([[464],{848:function(n,t,e){e.d(t,{E3:function(){return f},Hx:function(){return d},PQ:function(){return l},Y5:function(){return p},wr:function(){return o}});var r=e(861),a=e(757),c=e.n(a),u=e(340),i="https://api.themoviedb.org/3/",s="4bf52262cafa45f4a78d30477a8ff03d",o=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"trending/movie/day?api_key=").concat(s));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e,r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"search/movie?api_key=").concat(s,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"movie/").concat(t,"?api_key=").concat(s));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"movie/").concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(i,"movie/").concat(t,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},464:function(n,t,e){e.r(t);var r=e(439),a=e(791),c=e(689),u=e(848),i=e(184);t.default=function(){var n=(0,c.UO)().movieId,t=(0,a.useState)([]),e=(0,r.Z)(t,2),s=e[0],o=e[1],f=(0,a.useState)(!1),p=(0,r.Z)(f,2),l=p[0],d=p[1];return(0,a.useEffect)((function(){d(!0),(0,u.Hx)(n).then((function(n){o(n)})).catch((function(n){console.log(n)})).finally((function(){d(!1)}))}),[n]),(0,i.jsxs)(i.Fragment,{children:[l&&(0,i.jsx)("div",{children:"Loading..."}),0!==s.length&&(0,i.jsx)("div",{children:(0,i.jsx)("ul",{children:s.map((function(n){var t=n.id,e=n.author,r=n.content;return(0,i.jsxs)("li",{children:[(0,i.jsxs)("h2",{children:["Author: ",e]}),(0,i.jsx)("p",{children:r})]},t)}))})}),0===s.length&&(0,i.jsx)("div",{children:"We don't have any reviews for this movie"})]})}}}]);
//# sourceMappingURL=464.45113411.chunk.js.map