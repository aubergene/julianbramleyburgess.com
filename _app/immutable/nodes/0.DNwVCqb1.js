import{c as D,a as i,t as h,d as b}from"../chunks/7KqjxULj.js";import{i as J,p as A,f as w,a as B,q as O,a1 as q,c as l,r as n,t as N,s as _,n as y,aD as z,g as E}from"../chunks/CQVChzyV.js";import{h as L}from"../chunks/F1qcpcF8.js";import{s as P}from"../chunks/CxObbSy0.js";import{s as j}from"../chunks/BBGgxGEX.js";import{p as k,i as M}from"../chunks/DaMg0nkf.js";import"../chunks/Bx4TTkfg.js";import{i as R}from"../chunks/CvSTxEHs.js";import{t as V,s as W}from"../chunks/DYwOu9O5.js";function F(r){var t,e,a="";if(typeof r=="string"||typeof r=="number")a+=r;else if(typeof r=="object")if(Array.isArray(r)){var s=r.length;for(t=0;t<s;t++)r[t]&&(e=F(r[t]))&&(a&&(a+=" "),a+=e)}else for(e in r)r[e]&&(a&&(a+=" "),a+=e);return a}function Y(){for(var r,t,e=0,a="",s=arguments.length;e<s;e++)(r=arguments[e])&&(t=F(r))&&(a&&(a+=" "),a+=t);return a}function G(r){return typeof r=="object"?Y(r):r??""}function H(r,t,e){var a=r.__className,s=K(t);J&&r.className===s?r.__className=s:(a!==s||J&&r.className!==s)&&(t==null?r.removeAttribute("class"):r.className=s,r.__className=s)}function K(r,t){return(r??"")+""}const Q=!0,mr=Object.freeze(Object.defineProperty({__proto__:null,prerender:Q},Symbol.toStringTag,{value:"Module"}));var U=h("<a><!></a>");function p(r,t){A(t,!0);let e=q(()=>k.url.pathname===t.href);var a=D(),s=w(a);{var m=c=>{var o=D(),d=w(o);P(d,()=>t.children),i(c,o)},u=c=>{var o=U(),d=l(o);P(d,()=>t.children),n(o),N(()=>{j(o,"href",t.href),H(o,G({contrast:O(e)})),j(o,"target",t.target)}),i(c,o)};R(s,c=>{O(e)?c(m):c(u,!1)})}i(r,a),B()}var X=h("<strong>Julian Bramley Burgess</strong>"),Z=h('<img src="/instagram.svg" alt="Instagram" style="opacity: 0.4">'),rr=h('<nav class="container"><ul><li><!></li></ul> <ul><li><!></li> <li><!></li> <li><!></li> <li><!></li> <li><!></li></ul></nav>');function tr(r){var t=rr(),e=l(t),a=l(e),s=l(a);p(s,{href:"/",children:(f,$)=>{var v=X();i(f,v)},$$slots:{default:!0}}),n(a),n(e);var m=_(e,2),u=l(m),c=l(u);p(c,{href:"/",children:(f,$)=>{y();var v=b("About");i(f,v)},$$slots:{default:!0}}),n(u);var o=_(u,2),d=l(o);p(d,{href:"/works",children:(f,$)=>{y();var v=b("Works");i(f,v)},$$slots:{default:!0}}),n(o);var g=_(o,2),I=l(g);p(I,{href:"/cv",children:(f,$)=>{y();var v=b("CV");i(f,v)},$$slots:{default:!0}}),n(g);var x=_(g,2),S=l(x);p(S,{href:"/contact",children:(f,$)=>{y();var v=b("Contact");i(f,v)},$$slots:{default:!0}}),n(x);var C=_(x,2),T=l(C);p(T,{href:"https://www.instagram.com/julianbramleyburgess/",target:"_blank",children:(f,$)=>{var v=Z();i(f,v)},$$slots:{default:!0}}),n(C),n(m),n(t),i(r,t)}var ar=h('<footer class="container svelte-1lwwsa1"><p class="svelte-1lwwsa1"></p></footer>');function er(r,t){A(t,!1);const e=new Date().getFullYear();M();var a=ar(),s=l(a);s.textContent=`© ${e??""} Julian Bramley Burgess`,n(a),i(r,a),B()}var sr=h("<header><!></header> <!> <!> <img>",1);function dr(r,t){A(t,!0);const e="4cb076b9-b8ef-4d36-bc1e-fcdcd002408c";var a=sr();L(d=>{N(g=>z.title=`
		${g??""}
	`,[()=>V([k.data.title,W],{two_words_connector:" | "})])});var s=w(a),m=l(s);tr(m),n(s);var u=_(s,2);P(u,()=>t.children??E);var c=_(u,2);er(c,{});var o=_(c,2);N(()=>j(o,"src",`https://app.piratepx.com/ship?p=${e}&i=${k.url.pathname??""}`)),i(r,a),B()}export{dr as component,mr as universal};
