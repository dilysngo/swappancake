(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[27],{1572:function(t,e,c){"use strict";c.r(e);var n,r,i,s,j=c(0),a=c(77),b=c(244),o=c(73),l=c(791),u=c(370),d=c(1136),O=c(3),x=c.n(O),h=c(11),f=c(9),p=c(2),v=c(803),m=c.n(v),g=c(878),w=c.n(g),y=c(32),S=c(71),k=c(14),A=c(5),B=c(53),C=c(1),F=["initialOpenState","title","children"],I=function(t){var e=t.initialOpenState,c=void 0===e||e,n=t.title,r=t.children,i=Object(B.a)(t,F),s=Object(j.useState)(c),a=Object(f.a)(s,2),b=a[0],o=a[1];return Object(C.jsxs)(p.y,Object(A.a)(Object(A.a)({},i),{},{children:[Object(C.jsx)(p.B,{p:"16px",children:Object(C.jsxs)(p.bb,{alignItems:"center",justifyContent:"space-between",children:[Object(C.jsx)(p.db,{as:"h3",children:n}),Object(C.jsx)(p.gb,{variant:"text",scale:"sm",onClick:function(){return o(!b)},children:b?Object(C.jsx)(p.N,{width:"24px"}):Object(C.jsx)(p.K,{width:"24px"})})]})}),b&&r]}))},P=c(905),L=c(854),D=c(89),z=c(8),N=c(6),E=N.e.button(n||(n=Object(z.a)(["\n  border: none;\n  cursor: pointer;\n  background: none;\n  color: ",";\n  font-weight: bold;\n"])),(function(t){return t.theme.colors.secondary})),R=N.e.div(r||(r=Object(z.a)(["\n  -webkit-overflow-scrolling: touch;\n  min-width: 320px;\n  overflow-x: auto;\n"]))),T=Object(N.e)(p.hb)(i||(i=Object(z.a)(["\n  flex: none;\n  & > img {\n    border-radius: 8px;\n  }\n"]))),J=N.e.tr(s||(s=Object(z.a)(["\n  cursor: pointer;\n\n  &:hover {\n    td {\n      opacity: 0.65;\n    }\n  }\n"]))),W=function(t){var e=t.thumbnailSrc,c=t.name;return Object(C.jsxs)(p.bb,{alignItems:"center",children:[Object(C.jsx)(T,{src:e,width:48,height:48,mr:"8px"}),Object(C.jsx)(p.zc,{children:c})]})},K=function(t){var e=t.bunnyId,c=Object(P.a)(e),n=c.isFetching,r=c.lowestPrice;return n?Object(C.jsx)(p.bb,{justifyContent:"flex-end",width:"100px",children:Object(C.jsx)(p.fc,{height:"24px",width:"48px"})}):r?Object(C.jsx)(L.a,{justifyContent:"flex-end",amount:r,width:"100px"}):null},M=function(t){var e=t.collectionAddress,c=Object(j.useState)(null),n=Object(f.a)(c,2),r=n[0],i=n[1],s=Object(j.useState)("asc"),b=Object(f.a)(s,2),o=b[0],l=b[1],u=Object(k.b)().t,d=Object(a.g)().push;Object(j.useEffect)((function(){(function(){var t=Object(h.a)(x.a.mark((function t(){var c;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(S.r)(e);case 2:c=t.sent,i(c);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e,i]);var O=r?w()(Object.values(r.attributesDistribution)):0,v=Object(j.useMemo)((function(){return r?Object.keys(r.data).sort(function(t){var e=t.raritySort,c=t.data;return function(t,n){var r,i,s=null!==(r=c.attributesDistribution[t])&&void 0!==r?r:0,j=null!==(i=c.attributesDistribution[n])&&void 0!==i?i:0;return"asc"===e?s-j:j-s}}({raritySort:o,data:r})):[]}),[o,r]);return Object(C.jsx)(C.Fragment,{children:r?Object(C.jsx)(I,{title:u("Bunny Id"),children:Object(C.jsx)(R,{children:Object(C.jsxs)(p.vc,{children:[Object(C.jsx)("thead",{children:Object(C.jsxs)("tr",{children:[Object(C.jsx)(p.Bc,{textAlign:"left",children:u("Name")}),Object(C.jsx)(p.Bc,{children:u("Count")}),Object(C.jsx)(p.Bc,{children:Object(C.jsx)(E,{type:"button",onClick:function(){l((function(t){return"asc"===t?"desc":"asc"}))},children:Object(C.jsxs)(p.bb,{alignItems:"center",children:[u("Rarity"),"asc"===o?Object(C.jsx)(p.h,{color:"secondary"}):Object(C.jsx)(p.d,{color:"secondary"})]})})}),Object(C.jsx)(p.Bc,{textAlign:"right",children:u("Lowest")})]})}),Object(C.jsx)("tbody",{children:v.map((function(t){var c,n=r.data[t];if(!n)return null;var i=null!==(c=r.attributesDistribution[t])&&void 0!==c?c:0,s=i/O*100;return Object(C.jsxs)(J,{onClick:function(){d("".concat(D.a,"/collections/").concat(e,"/").concat(t))},title:u("Click to view NFT"),children:[Object(C.jsx)(p.xc,{children:Object(C.jsx)(W,{thumbnailSrc:n.image.thumbnail,name:n.name})}),Object(C.jsx)(p.xc,{textAlign:"center",children:Object(y.e)(i,0,0)}),Object(C.jsx)(p.xc,{textAlign:"center",children:"".concat(Object(y.e)(s,0,2),"%")}),Object(C.jsx)(p.xc,{textAlign:"right",width:"100px",children:Object(C.jsx)(K,{bunnyId:t})})]},t)}))})]})})}):Object(C.jsx)(I,{title:u("Loading..."),children:Object(C.jsxs)(p.vc,{children:[Object(C.jsx)("thead",{children:Object(C.jsxs)("tr",{children:[Object(C.jsx)(p.Bc,{textAlign:"left",children:u("Name")}),Object(C.jsx)(p.Bc,{children:u("Count")}),Object(C.jsx)(p.Bc,{children:u("Rarity")}),Object(C.jsx)(p.Bc,{children:u("Lowest")})]})}),Object(C.jsx)("tbody",{children:m()(19).map((function(t){return Object(C.jsxs)("tr",{children:[Object(C.jsx)(p.xc,{children:Object(C.jsxs)(p.bb,{alignItems:"center",children:[Object(C.jsx)(p.fc,{height:"48px",width:"48px",mr:"8px"}),Object(C.jsx)(p.fc,{width:"100px"})]})}),Object(C.jsx)(p.xc,{children:Object(C.jsx)(p.fc,{})}),Object(C.jsx)(p.xc,{children:Object(C.jsx)(p.fc,{})})]},t)}))})]})})})},Q=c(18),$=c(31),q=c(1132),G=c.n(q),H=c(251),U=c.n(H),V=c(877),X=function(t){var e=t.collectionAddress,c=Object(V.a)(e),n=c.data,r=c.isFetching,i=Object(j.useState)({}),s=Object(f.a)(i,2),a=s[0],b=s[1],o=Object(k.b)().t;return r?Object(C.jsx)(I,{title:o("Loading..."),children:Object(C.jsxs)(p.vc,{children:[Object(C.jsx)("thead",{children:Object(C.jsxs)("tr",{children:[Object(C.jsx)(p.Bc,{textAlign:"left",children:o("Name")}),Object(C.jsx)(p.Bc,{width:"100px",children:o("Count")}),Object(C.jsx)(p.Bc,{width:"160px",children:o("Rarity")})]})}),Object(C.jsx)("tbody",{children:m()(19).map((function(t){return Object(C.jsxs)("tr",{children:[Object(C.jsx)(p.xc,{children:Object(C.jsx)(p.fc,{width:"100px"})}),Object(C.jsx)(p.xc,{children:Object(C.jsx)(p.fc,{})}),Object(C.jsx)(p.xc,{children:Object(C.jsx)(p.fc,{})})]},t)}))})]})}):Object(C.jsx)(C.Fragment,{children:n&&Object.keys(n).map((function(t,e){var c=w()(Object.values(n[t])),r=Object.keys(n[t]).reduce((function(e,r){var i=n[t][r],s=i/c*100;return[].concat(Object($.a)(e),[{value:r,count:i,rarity:s}])}),[]),i=a[t]||"desc";return Object(C.jsx)(I,{title:G()(t),initialOpenState:e<=1,mb:"32px",children:Object(C.jsx)(R,{children:Object(C.jsxs)(p.vc,{children:[Object(C.jsx)("thead",{children:Object(C.jsxs)("tr",{children:[Object(C.jsx)(p.Bc,{textAlign:"left",children:o("Name")}),Object(C.jsx)(p.Bc,{width:"100px",children:o("Count")}),Object(C.jsx)(p.Bc,{width:"160px",children:Object(C.jsx)(E,{type:"button",onClick:function(){b((function(e){return e[t]?Object(A.a)(Object(A.a)({},e),{},Object(Q.a)({},t,"asc"===e[t]?"desc":"asc")):Object(A.a)(Object(A.a)({},e),{},Object(Q.a)({},t,"asc"))}))},children:Object(C.jsxs)(p.bb,{alignItems:"center",children:[o("Rarity"),"asc"===a[t]?Object(C.jsx)(p.h,{color:"secondary"}):Object(C.jsx)(p.d,{color:"secondary"})]})})})]})}),Object(C.jsx)("tbody",{children:U()(r,"rarity",i).map((function(t){var e=t.value,c=t.count,n=t.rarity;return Object(C.jsxs)("tr",{children:[Object(C.jsx)(p.xc,{children:G()(e)}),Object(C.jsx)(p.xc,{textAlign:"center",children:Object(y.e)(c,0,0)}),Object(C.jsx)(p.xc,{textAlign:"center",children:"".concat(Object(y.e)(n,0,2),"%")})]},e)}))})]})})},t)}))})};e.default=function(){var t=Object(a.i)().collectionAddress,e=Object(o.b)(),c=Object(l.e)(t);return Object(j.useEffect)((function(){t&&e(Object(u.c)(t))}),[t,e]),Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(d.a,{collection:c}),Object(C.jsx)(b.a,{py:"40px",children:t===D.b?Object(C.jsx)(M,{collectionAddress:t}):Object(C.jsx)(X,{collectionAddress:t})})]})}},854:function(t,e,c){"use strict";c.d(e,"a",(function(){return x})),c.d(e,"b",(function(){return h})),c.d(e,"d",(function(){return f})),c.d(e,"e",(function(){return p})),c.d(e,"c",(function(){return v}));var n,r=c(8),i=c(5),s=c(53),j=(c(0),c(2)),a=c(14),b=c(90),o=c(6),l=c(1),u=["amount"],d=["cost","bnbBusdPrice"],O=["title","children"],x=function(t){var e=t.amount,c=Object(s.a)(t,u);return Object(l.jsxs)(j.bb,Object(i.a)(Object(i.a)({alignItems:"center"},c),{},{children:[Object(l.jsx)(j.l,{width:"16px",mx:"4px"}),Object(l.jsx)(j.zc,{fontWeight:"600",children:e.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:4})})]}))},h=function(t){var e=t.cost,c=t.bnbBusdPrice,n=Object(s.a)(t,d),r=Object(b.d)(c,e);return Object(l.jsxs)(j.bb,Object(i.a)(Object(i.a)({alignItems:"center"},n),{},{children:[r>0&&Object(l.jsx)(j.zc,{fontSize:"12px",color:"textSubtle",children:"($".concat(r.toLocaleString(void 0,{minimumFractionDigits:2,maximumFractionDigits:2}),")")}),Object(l.jsx)(x,{amount:e})]}))},f=function(t){var e=t.title,c=t.children,n=Object(s.a)(t,O);return Object(l.jsxs)(j.bb,Object(i.a)(Object(i.a)({alignItems:"center",justifyContent:"space-between"},n),{},{children:[Object(l.jsx)(j.zc,{fontSize:"12px",color:"textSubtle",maxWidth:"120px",ellipsis:!0,title:e,children:e}),Object(l.jsx)(j.o,{children:c})]}))},p=Object(o.e)(j.y)(n||(n=Object(r.a)(["\n  border-radius: 8px;\n  max-width: 320px;\n  transition: opacity 200ms;\n\n  & > div {\n    border-radius: 8px;\n  }\n\n  "," {\n    &:hover {\n      cursor: pointer;\n      opacity: 0.6;\n    }\n  }\n"])),(function(t){return t.theme.mediaQueries.lg})),v=function(t){var e=t.lowestPrice,c=t.isFetching,n=t.bnbBusdPrice,r=Object(a.b)().t;return c||e?Object(l.jsx)(f,{title:r("Lowest price"),children:c?Object(l.jsx)(j.fc,{height:"24px",width:"30px"}):Object(l.jsx)(h,{cost:e,bnbBusdPrice:n})}):null}},878:function(t,e,c){var n=c(990),r=c(249);t.exports=function(t){return t&&t.length?n(t,r):0}},905:function(t,e,c){"use strict";c.d(e,"a",(function(){return l})),c.d(e,"b",(function(){return u}));var n=c(3),r=c.n(n),i=c(11),s=c(9),j=c(0),a=c(71),b=c(89),o=function(t){var e,c,n=null===(e=t.attributes)||void 0===e||null===(c=e.find((function(t){return"bunnyId"===t.traitType})))||void 0===c?void 0:c.value;return n?n.toString():null},l=function(t){var e=Object(j.useState)(!1),c=Object(s.a)(e,2),n=c[0],b=c[1],o=Object(j.useState)(null),l=Object(s.a)(o,2),u=l[0],d=l[1];return Object(j.useEffect)((function(){t&&function(){var e=Object(i.a)(r.a.mark((function e(){var c,n,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,b(!0),e.next=4,Object(a.t)({otherId:t,isTradable:!0},1,"currentAskPrice","asc");case 4:(c=e.sent).length>0&&(n=Object(s.a)(c,1),i=n[0],d(parseFloat(i.currentAskPrice)));case 6:return e.prev=6,b(!1),e.finish(6);case 9:case"end":return e.stop()}}),e,null,[[0,,6,9]])})));return function(){return e.apply(this,arguments)}}()()}),[t]),{isFetching:n,lowestPrice:u}},u=function(t){var e,c=Object(j.useState)(!1),n=Object(s.a)(c,2),l=n[0],u=n[1],d=Object(j.useState)(null),O=Object(s.a)(d,2),x=O[0],h=O[1],f=(null===(e=t.collectionAddress)||void 0===e?void 0:e.toLowerCase())===b.b.toLowerCase();return Object(j.useEffect)((function(){f&&t&&function(){var e=Object(i.a)(r.a.mark((function e(){var c,n,i,j;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=o(t),e.prev=1,u(!0),e.next=5,Object(a.t)({otherId:c,isTradable:!0},1,"currentAskPrice","asc");case 5:(n=e.sent).length>0&&(i=Object(s.a)(n,1),j=i[0],h(parseFloat(j.currentAskPrice)));case 7:return e.prev=7,u(!1),e.finish(7);case 10:case"end":return e.stop()}}),e,null,[[1,,7,10]])})));return function(){return e.apply(this,arguments)}}()()}),[f,t]),{isFetching:l,lowestPrice:x}}},990:function(t,e){t.exports=function(t,e){for(var c,n=-1,r=t.length;++n<r;){var i=e(t[n]);void 0!==i&&(c=void 0===c?i:c+i)}return c}}}]);
//# sourceMappingURL=27.155871e4.chunk.js.map