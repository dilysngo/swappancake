(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[29],{1573:function(e,t,n){"use strict";n.r(t);n(0);var c,i,r,s,a,o,b,l=n(190),d=n(77),j=n(94),u=n(2),x=n(373),p=n(232),O=n(14),m=n(856),h=n(8),f=n(6),g=n(1),v=function(e){var t=e.children,n=Object(O.b)().t;return Object(g.jsxs)(u.bb,{flexDirection:"column",alignItems:"center",justifyContent:"center",p:"24px",children:[Object(g.jsx)(u.s,{width:"72px",height:"72px"}),Object(g.jsx)(u.db,{as:"h5",scale:"md",color:"textDisabled",children:t||n("Coming Soon!")})]})},y=n(915),w=f.e.div(c||(c=Object(h.a)(["\n  padding-top: 16px;\n\n  "," {\n    padding-top: 24px;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),z=f.e.img(i||(i=Object(h.a)(["\n  border-radius: 50%;\n  height: 64px;\n  margin-top: -12px;\n  width: 64px;\n  border: solid 2px white;\n\n  "," {\n    height: 128px;\n    margin-top: -24px;\n    width: 128px;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),k=f.e.div(r||(r=Object(h.a)(["\n  margin-bottom: 8px;\n  text-align: center;\n"]))),D=Object(f.e)(u.y)(s||(s=Object(h.a)(["\n  overflow: visible;\n"]))),I=Object(f.e)(u.B)(a||(a=Object(h.a)(["\n  position: relative;\n  background: url(",");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  padding-top: 0;\n  text-align: center;\n"])),(function(e){return e.bg})),S=Object(f.e)(u.db).attrs({as:"h2"})(o||(o=Object(h.a)(["\n  font-size: 24px;\n\n  "," {\n    font-size: 40px;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),C=f.e.div(b||(b=Object(h.a)(["\n  display: grid;\n  grid-gap: 16px;\n  grid-template-columns: 1fr;\n  margin-bottom: 16px;\n\n  "," {\n    grid-gap: 32px;\n    grid-template-columns: repeat(2, 1fr);\n    margin-bottom: 32px;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),T=function(e){var t=e.team,n=Object(O.b)().t;return Object(g.jsx)(w,{children:Object(g.jsxs)(D,{children:[Object(g.jsxs)(I,{bg:"/images/teams/".concat(t.background),children:[Object(g.jsx)(k,{children:Object(g.jsx)(z,{src:"/images/teams/".concat(t.images.md),alt:"team avatar"})}),Object(g.jsx)(S,{color:t.textColor,children:t.name}),Object(g.jsx)(u.zc,{as:"p",color:t.textColor,children:n(t.description)})]}),Object(g.jsxs)(u.z,{children:[Object(g.jsxs)(C,{children:[Object(g.jsx)(y.a,{icon:u.R,title:t.users,subtitle:n("Active Members")}),Object(g.jsx)(y.a,{icon:u.Wb,title:n("Coming Soon"),subtitle:n("Team Points"),isDisabled:!0})]}),Object(g.jsx)(u.db,{as:"h3",children:n("Team Achievements")}),Object(g.jsx)(v,{})]})]})})},P=n(994);t.default=function(){var e=Object(d.i)().id,t=Number(e),n=Object(O.b)().t,c=-1!==p.a.findIndex((function(e){return e.id===t})),i=Object(m.a)(t);return c?i?Object(g.jsxs)(l.b,{children:[Object(g.jsx)(P.a,{}),Object(g.jsx)(u.bb,{mb:"24px",children:Object(g.jsx)(j.a,{to:"/teams",children:Object(g.jsxs)(u.bb,{alignItems:"center",children:[Object(g.jsx)(u.L,{color:"primary"}),Object(g.jsx)(u.zc,{color:"primary",children:n("Teams Overview")})]})})}),Object(g.jsx)(T,{team:i})]}):Object(g.jsx)(x.a,{}):Object(g.jsx)(d.a,{to:"/404"})}},856:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o}));var c=n(0),i=n(28),r=n(73),s=n(177),a=function(e){var t=Object(i.c)((function(t){return t.teams.data[e]})),n=Object(r.b)();return Object(c.useEffect)((function(){n(Object(s.b)(e))}),[e,n]),t},o=function(){var e=Object(i.c)((function(e){return e.teams})),t=e.isInitialized,n=e.isLoading,a=e.data,o=Object(r.b)();return Object(c.useEffect)((function(){o(Object(s.c)())}),[o]),{teams:a,isInitialized:t,isLoading:n}}},915:function(e,t,n){"use strict";var c,i=n(5),r=n(53),s=n(8),a=(n(0),n(2)),o=n(6),b=n(1),l=["icon","title","subtitle","isDisabled"],d=Object(o.e)(a.zc)(c||(c=Object(s.a)(["\n  border: 2px solid ",";\n  border-radius: 16px;\n"])),(function(e){return e.theme.colors.tertiary}));d.defaultProps={p:"24px"};t.a=function(e){var t=e.icon,n=e.title,c=e.subtitle,s=e.isDisabled,o=void 0!==s&&s,j=Object(r.a)(e,l);return Object(b.jsx)(d,Object(i.a)(Object(i.a)({},j),{},{children:Object(b.jsxs)(a.bb,{alignItems:"start",children:[Object(b.jsx)(t,{width:"44px",mr:"24px",color:o?"textDisabled":"currentColor"}),Object(b.jsxs)("div",{children:[Object(b.jsx)(a.db,{as:"h3",scale:"xl",color:o?"textDisabled":"text",children:n}),Object(b.jsx)(a.zc,{textTransform:"uppercase",color:o?"textDisabled":"textSubtle",fontSize:"12px",bold:!0,children:c})]})]})}))}},994:function(e,t,n){"use strict";var c,i=n(8),r=(n(0),n(6)),s=n(2),a=n(245),o=n(14),b=n(94),l=n(1),d=function(){var e=Object(o.b)().t;return Object(l.jsx)(s.y,{mb:"32px",isActive:!0,children:Object(l.jsx)(s.z,{children:Object(l.jsxs)(s.bb,{alignItems:["start",null,"center"],justifyContent:["start",null,"space-between"],flexDirection:["column",null,"row"],children:[Object(l.jsxs)("div",{children:[Object(l.jsx)(s.db,{scale:"lg",mb:"8px",children:e("You haven\u2019t set up your profile yet!")}),Object(l.jsx)(s.zc,{children:e("You can do this at any time by clicking on your profile picture in the menu")})]}),Object(l.jsx)(s.t,{as:b.a,to:"/create-profile",id:"teamsPageSetUpProfile",mt:["16px",null,0],children:e("Set up now")})]})})})},j=r.e.div(c||(c=Object(i.a)(["\n  border-bottom: 2px solid ",";\n  margin-bottom: 24px;\n  padding-bottom: 24px;\n"])),(function(e){return e.theme.colors.textSubtle}));t.a=function(){var e=Object(o.b)().t,t=Object(a.d)(),n=t.isInitialized,c=t.profile,i=n&&!c;return Object(l.jsxs)(l.Fragment,{children:[i&&Object(l.jsx)(d,{}),Object(l.jsxs)(j,{children:[Object(l.jsx)(s.db,{as:"h1",scale:"xxl",color:"secondary",children:e("Teams & Profiles")}),Object(l.jsx)(s.zc,{bold:!0,children:e("Show off your stats and collectibles with your unique profile. Team features will be revealed soon!")})]})]})}}}]);
//# sourceMappingURL=29.dadfc197.chunk.js.map