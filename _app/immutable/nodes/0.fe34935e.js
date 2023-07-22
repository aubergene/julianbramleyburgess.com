import{S as F,i as G,s as M,k as h,q as J,l as v,m as k,r as O,h as u,n as _,b as w,C as g,D as N,E as R,F as K,G as Q,H as U,I as X,g as y,d as E,J as Z,y as B,a as A,z as V,c as D,A as C,K as x,B as j,L as Y,p as T}from"../chunks/index.c9f2c2cb.js";import{e as ee}from"../chunks/singletons.b0a61a0b.js";import{p as te}from"../chunks/stores.929067ff.js";const se=!0,we=Object.freeze(Object.defineProperty({__proto__:null,prerender:se},Symbol.toStringTag,{value:"Module"}));function ae(o){let e,t,a,r,n;return{c(){e=h("section"),t=h("div"),a=h("div"),r=h("p"),n=J("Julian Bramley Burgess"),this.h()},l(l){e=v(l,"SECTION",{class:!0});var c=k(e);t=v(c,"DIV",{class:!0});var m=k(t);a=v(m,"DIV",{class:!0});var f=k(a);r=v(f,"P",{class:!0});var s=k(r);n=O(s,"Julian Bramley Burgess"),s.forEach(u),f.forEach(u),m.forEach(u),c.forEach(u),this.h()},h(){_(r,"class","title has-text-grey"),_(a,"class","container is-max-desktop"),_(t,"class","hero-body"),_(e,"class","hero has-background-white-ter")},m(l,c){w(l,e,c),g(e,t),g(t,a),g(a,r),g(r,n)},p:N,i:N,o:N,d(l){l&&u(e)}}}class re extends F{constructor(e){super(),G(this,e,null,ae,M,{})}}function ne(o){let e,t;const a=o[6].default,r=R(a,o,o[5],null);return{c(){e=h("a"),r&&r.c(),this.h()},l(n){e=v(n,"A",{href:!0,"aria-current":!0,class:!0,target:!0});var l=k(e);r&&r.l(l),l.forEach(u),this.h()},h(){_(e,"href",o[0]),_(e,"aria-current",o[2]),_(e,"class","navbar-item svelte-11ansks"),_(e,"target",o[1]),K(e,"is-active",o[2])},m(n,l){w(n,e,l),r&&r.m(e,null),t=!0},p(n,[l]){r&&r.p&&(!t||l&32)&&Q(r,a,n,n[5],t?X(a,n[5],l,null):U(n[5]),null),(!t||l&1)&&_(e,"href",n[0]),(!t||l&4)&&_(e,"aria-current",n[2]),(!t||l&2)&&_(e,"target",n[1]),(!t||l&4)&&K(e,"is-active",n[2])},i(n){t||(y(r,n),t=!0)},o(n){E(r,n),t=!1},d(n){n&&u(e),r&&r.d(n)}}}function le(o,e,t){let a;Z(o,te,s=>t(4,a=s));let{$$slots:r={},$$scope:n}=e,{href:l}=e,{target:c}=e,m,f;return o.$$set=s=>{"href"in s&&t(0,l=s.href),"target"in s&&t(1,c=s.target),"$$scope"in s&&t(5,n=s.$$scope)},o.$$.update=()=>{o.$$.dirty&25&&(t(3,f=l.startsWith("http")),t(1,c=f?"_blank":null),t(0,l=f?l:ee+l),t(2,m=a.url.pathname===l))},[l,c,m,f,a,n,r]}class q extends F{constructor(e){super(),G(this,e,le,ne,M,{href:0,target:1})}}function oe(o){let e;return{c(){e=J("About")},l(t){e=O(t,"About")},m(t,a){w(t,e,a)},d(t){t&&u(e)}}}function fe(o){let e;return{c(){e=J("Works")},l(t){e=O(t,"Works")},m(t,a){w(t,e,a)},d(t){t&&u(e)}}}function ie(o){let e;return{c(){e=J("CV")},l(t){e=O(t,"CV")},m(t,a){w(t,e,a)},d(t){t&&u(e)}}}function ue(o){let e;return{c(){e=J("Contact")},l(t){e=O(t,"Contact")},m(t,a){w(t,e,a)},d(t){t&&u(e)}}}function ce(o){let e,t;return{c(){e=h("img"),this.h()},l(a){e=v(a,"IMG",{src:!0,alt:!0,style:!0}),this.h()},h(){Y(e.src,t="/instagram.svg")||_(e,"src",t),_(e,"alt","Instagram"),T(e,"opacity","0.3")},m(a,r){w(a,e,r)},p:N,d(a){a&&u(e)}}}function me(o){let e,t,a,r,n,l,c,m,f,s,$,d,I,S,L;return r=new q({props:{href:"/",$$slots:{default:[oe]},$$scope:{ctx:o}}}),l=new q({props:{href:"/works",$$slots:{default:[fe]},$$scope:{ctx:o}}}),m=new q({props:{href:"/cv",$$slots:{default:[ie]},$$scope:{ctx:o}}}),s=new q({props:{href:"/contact",$$slots:{default:[ue]},$$scope:{ctx:o}}}),d=new q({props:{href:"https://www.instagram.com/julianbramleyburgess/",$$slots:{default:[ce]},$$scope:{ctx:o}}}),{c(){e=h("nav"),t=h("div"),a=h("div"),B(r.$$.fragment),n=A(),B(l.$$.fragment),c=A(),B(m.$$.fragment),f=A(),B(s.$$.fragment),$=A(),B(d.$$.fragment),this.h()},l(i){e=v(i,"NAV",{class:!0,"aria-label":!0});var p=k(e);t=v(p,"DIV",{class:!0});var P=k(t);a=v(P,"DIV",{class:!0});var b=k(a);V(r.$$.fragment,b),n=D(b),V(l.$$.fragment,b),c=D(b),V(m.$$.fragment,b),f=D(b),V(s.$$.fragment,b),$=D(b),V(d.$$.fragment,b),b.forEach(u),P.forEach(u),p.forEach(u),this.h()},h(){_(a,"class","navbar-brand"),_(t,"class","container is-max-desktop"),_(e,"class","navbar is-fixed-top svelte-4mfko1"),_(e,"aria-label","main navigation")},m(i,p){w(i,e,p),g(e,t),g(t,a),C(r,a,null),g(a,n),C(l,a,null),g(a,c),C(m,a,null),g(a,f),C(s,a,null),g(a,$),C(d,a,null),I=!0,S||(L=x(window,"click",o[0]),S=!0)},p(i,[p]){const P={};p&4&&(P.$$scope={dirty:p,ctx:i}),r.$set(P);const b={};p&4&&(b.$$scope={dirty:p,ctx:i}),l.$set(b);const W={};p&4&&(W.$$scope={dirty:p,ctx:i}),m.$set(W);const z={};p&4&&(z.$$scope={dirty:p,ctx:i}),s.$set(z);const H={};p&4&&(H.$$scope={dirty:p,ctx:i}),d.$set(H)},i(i){I||(y(r.$$.fragment,i),y(l.$$.fragment,i),y(m.$$.fragment,i),y(s.$$.fragment,i),y(d.$$.fragment,i),I=!0)},o(i){E(r.$$.fragment,i),E(l.$$.fragment,i),E(m.$$.fragment,i),E(s.$$.fragment,i),E(d.$$.fragment,i),I=!1},d(i){i&&u(e),j(r),j(l),j(m),j(s),j(d),S=!1,L()}}}function _e(o){function e(){}return[e]}class $e extends F{constructor(e){super(),G(this,e,_e,me,M,{})}}function ge(o){let e,t,a,r,n,l,c,m,f,s;return{c(){e=h("footer"),t=h("div"),a=h("p"),r=h("a"),n=h("img"),c=J(" julianbramleyburgess"),m=A(),f=h("p"),s=J("© 2023 Julian Bramley Burgess"),this.h()},l($){e=v($,"FOOTER",{class:!0});var d=k(e);t=v(d,"DIV",{class:!0});var I=k(t);a=v(I,"P",{});var S=k(a);r=v(S,"A",{href:!0});var L=k(r);n=v(L,"IMG",{src:!0,alt:!0,style:!0}),c=O(L," julianbramleyburgess"),L.forEach(u),S.forEach(u),m=D(I),f=v(I,"P",{});var i=k(f);s=O(i,"© 2023 Julian Bramley Burgess"),i.forEach(u),I.forEach(u),d.forEach(u),this.h()},h(){Y(n.src,l="/instagram.svg")||_(n,"src",l),_(n,"alt","Instagram"),T(n,"vertical-align","middle"),T(n,"opacity","0.25"),_(r,"href","https://www.instagram.com/julianbramleyburgess/"),_(t,"class","content has-text-centered"),_(e,"class","footer")},m($,d){w($,e,d),g(e,t),g(t,a),g(a,r),g(r,n),g(r,c),g(t,m),g(t,f),g(f,s)},p:N,i:N,o:N,d($){$&&u(e)}}}class pe extends F{constructor(e){super(),G(this,e,null,ge,M,{})}}function he(o){let e,t,a,r,n,l,c;e=new re({}),a=new $e({});const m=o[1].default,f=R(m,o,o[0],null);return l=new pe({}),{c(){B(e.$$.fragment),t=A(),B(a.$$.fragment),r=A(),f&&f.c(),n=A(),B(l.$$.fragment)},l(s){V(e.$$.fragment,s),t=D(s),V(a.$$.fragment,s),r=D(s),f&&f.l(s),n=D(s),V(l.$$.fragment,s)},m(s,$){C(e,s,$),w(s,t,$),C(a,s,$),w(s,r,$),f&&f.m(s,$),w(s,n,$),C(l,s,$),c=!0},p(s,[$]){f&&f.p&&(!c||$&1)&&Q(f,m,s,s[0],c?X(m,s[0],$,null):U(s[0]),null)},i(s){c||(y(e.$$.fragment,s),y(a.$$.fragment,s),y(f,s),y(l.$$.fragment,s),c=!0)},o(s){E(e.$$.fragment,s),E(a.$$.fragment,s),E(f,s),E(l.$$.fragment,s),c=!1},d(s){j(e,s),s&&u(t),j(a,s),s&&u(r),f&&f.d(s),s&&u(n),j(l,s)}}}function ve(o,e,t){let{$$slots:a={},$$scope:r}=e;return o.$$set=n=>{"$$scope"in n&&t(0,r=n.$$scope)},[r,a]}class ye extends F{constructor(e){super(),G(this,e,ve,he,M,{})}}export{ye as component,we as universal};
