import{S as j,i as q,s as z,k as m,q as F,l as p,m as v,r as G,h as c,n as u,b as k,C as _,D as T,E as R,F as K,G as U,H as W,I as X,g as I,d as B,J as Y,a as S,y as C,c as V,z as J,A as L,B as O}from"../chunks/index.a12f4a43.js";import{e as Z}from"../chunks/singletons.1e33aa8a.js";import{p as x}from"../chunks/stores.3f3c1bab.js";const ee=!0,me=Object.freeze(Object.defineProperty({__proto__:null,prerender:ee},Symbol.toStringTag,{value:"Module"}));function te(i){let e,t,n,a,r;return{c(){e=m("section"),t=m("div"),n=m("div"),a=m("p"),r=F("Julian Bramley Burgess"),this.h()},l(l){e=p(l,"SECTION",{class:!0});var o=v(e);t=p(o,"DIV",{class:!0});var s=v(t);n=p(s,"DIV",{class:!0});var f=v(n);a=p(f,"P",{class:!0});var N=v(a);r=G(N,"Julian Bramley Burgess"),N.forEach(c),f.forEach(c),s.forEach(c),o.forEach(c),this.h()},h(){u(a,"class","title has-text-grey"),u(n,"class","container is-max-desktop"),u(t,"class","hero-body"),u(e,"class","hero has-background-white-ter")},m(l,o){k(l,e,o),_(e,t),_(t,n),_(n,a),_(a,r)},p:T,i:T,o:T,d(l){l&&c(e)}}}class ae extends j{constructor(e){super(),q(this,e,null,te,z,{})}}function se(i){let e,t;const n=i[4].default,a=R(n,i,i[3],null);return{c(){e=m("a"),a&&a.c(),this.h()},l(r){e=p(r,"A",{href:!0,"aria-current":!0,class:!0});var l=v(e);a&&a.l(l),l.forEach(c),this.h()},h(){u(e,"href",i[0]),u(e,"aria-current",i[1]),u(e,"class","navbar-item svelte-11ansks"),K(e,"is-active",i[1])},m(r,l){k(r,e,l),a&&a.m(e,null),t=!0},p(r,[l]){a&&a.p&&(!t||l&8)&&U(a,n,r,r[3],t?X(n,r[3],l,null):W(r[3]),null),(!t||l&1)&&u(e,"href",r[0]),(!t||l&2)&&u(e,"aria-current",r[1]),(!t||l&2)&&K(e,"is-active",r[1])},i(r){t||(I(a,r),t=!0)},o(r){B(a,r),t=!1},d(r){r&&c(e),a&&a.d(r)}}}function re(i,e,t){let n;Y(i,x,s=>t(2,n=s));let{$$slots:a={},$$scope:r}=e,{href:l}=e,o;return i.$$set=s=>{"href"in s&&t(0,l=s.href),"$$scope"in s&&t(3,r=s.$$scope)},i.$$.update=()=>{i.$$.dirty&5&&(t(0,l=Z+l),t(1,o=n.url.pathname===l))},[l,o,n,r,a]}class Q extends j{constructor(e){super(),q(this,e,re,se,z,{href:0})}}function ne(i){let e;return{c(){e=F("About")},l(t){e=G(t,"About")},m(t,n){k(t,e,n)},d(t){t&&c(e)}}}function le(i){let e;return{c(){e=F("CV")},l(t){e=G(t,"CV")},m(t,n){k(t,e,n)},d(t){t&&c(e)}}}function ie(i){let e,t,n,a,r,l,o,s,f,N,E,$,g,H,b,P;return g=new Q({props:{href:"/",$$slots:{default:[ne]},$$scope:{ctx:i}}}),b=new Q({props:{href:"/cv",$$slots:{default:[le]},$$scope:{ctx:i}}}),{c(){e=m("nav"),t=m("div"),n=m("div"),a=m("span"),r=m("span"),l=S(),o=m("span"),s=S(),f=m("span"),N=S(),E=m("div"),$=m("div"),C(g.$$.fragment),H=S(),C(b.$$.fragment),this.h()},l(d){e=p(d,"NAV",{class:!0,"aria-label":!0});var h=v(e);t=p(h,"DIV",{class:!0});var y=v(t);n=p(y,"DIV",{class:!0});var D=v(n);a=p(D,"SPAN",{role:!0,class:!0,"aria-label":!0,"aria-expanded":!0,"data-target":!0});var A=v(a);r=p(A,"SPAN",{"aria-hidden":!0}),v(r).forEach(c),l=V(A),o=p(A,"SPAN",{"aria-hidden":!0}),v(o).forEach(c),s=V(A),f=p(A,"SPAN",{"aria-hidden":!0}),v(f).forEach(c),A.forEach(c),D.forEach(c),N=V(y),E=p(y,"DIV",{id:!0,class:!0});var M=v(E);$=p(M,"DIV",{class:!0});var w=v($);J(g.$$.fragment,w),H=V(w),J(b.$$.fragment,w),w.forEach(c),M.forEach(c),y.forEach(c),h.forEach(c),this.h()},h(){u(r,"aria-hidden","true"),u(o,"aria-hidden","true"),u(f,"aria-hidden","true"),u(a,"role","button"),u(a,"class","navbar-burger"),u(a,"aria-label","menu"),u(a,"aria-expanded","false"),u(a,"data-target","navbarBasicExample"),u(n,"class","navbar-brand"),u($,"class","navbar-start"),u(E,"id","navbarBasicExample"),u(E,"class","navbar-menu"),u(t,"class","container is-max-desktop"),u(e,"class","navbar svelte-4mfko1"),u(e,"aria-label","main navigation")},m(d,h){k(d,e,h),_(e,t),_(t,n),_(n,a),_(a,r),_(a,l),_(a,o),_(a,s),_(a,f),_(t,N),_(t,E),_(E,$),L(g,$,null),_($,H),L(b,$,null),P=!0},p(d,[h]){const y={};h&1&&(y.$$scope={dirty:h,ctx:d}),g.$set(y);const D={};h&1&&(D.$$scope={dirty:h,ctx:d}),b.$set(D)},i(d){P||(I(g.$$.fragment,d),I(b.$$.fragment,d),P=!0)},o(d){B(g.$$.fragment,d),B(b.$$.fragment,d),P=!1},d(d){d&&c(e),O(g),O(b)}}}class oe extends j{constructor(e){super(),q(this,e,null,ie,z,{})}}function ue(i){let e,t,n,a,r;e=new ae({}),n=new oe({});const l=i[1].default,o=R(l,i,i[0],null);return{c(){C(e.$$.fragment),t=S(),C(n.$$.fragment),a=S(),o&&o.c()},l(s){J(e.$$.fragment,s),t=V(s),J(n.$$.fragment,s),a=V(s),o&&o.l(s)},m(s,f){L(e,s,f),k(s,t,f),L(n,s,f),k(s,a,f),o&&o.m(s,f),r=!0},p(s,[f]){o&&o.p&&(!r||f&1)&&U(o,l,s,s[0],r?X(l,s[0],f,null):W(s[0]),null)},i(s){r||(I(e.$$.fragment,s),I(n.$$.fragment,s),I(o,s),r=!0)},o(s){B(e.$$.fragment,s),B(n.$$.fragment,s),B(o,s),r=!1},d(s){O(e,s),s&&c(t),O(n,s),s&&c(a),o&&o.d(s)}}}function ce(i,e,t){let{$$slots:n={},$$scope:a}=e;return i.$$set=r=>{"$$scope"in r&&t(0,a=r.$$scope)},[a,n]}class pe extends j{constructor(e){super(),q(this,e,ce,ue,z,{})}}export{pe as component,me as universal};
