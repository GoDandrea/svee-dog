function w(){}function H(t,e){for(const n in e)t[n]=e[n];return t}function T(t){return t()}function k(){return Object.create(null)}function g(t){t.forEach(T)}function q(t){return typeof t=="function"}function st(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function I(t){return Object.keys(t).length===0}function L(t,...e){if(t==null)return w;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function at(t,e,n){t.$$.on_destroy.push(L(e,n))}function ft(t,e,n,i){if(t){const r=B(t,e,n,i);return t[0](r)}}function B(t,e,n,i){return t[1]&&i?H(n.ctx.slice(),t[1](i(e))):n.ctx}function dt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const s=[],o=Math.max(e.dirty.length,r.length);for(let u=0;u<o;u+=1)s[u]=e.dirty[u]|r[u];return s}return e.dirty|r}return e.dirty}function _t(t,e,n,i,r,s){if(r){const o=B(e,n,i,s);t.p(o,r)}}function ht(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function mt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function pt(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}const G=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;"WeakMap"in G;let v=!1;function J(){v=!0}function K(){v=!1}function Q(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function R(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let c=0;c<e.length;c++){const f=e[c];f.claim_order!==void 0&&l.push(f)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let l=0;l<e.length;l++){const c=e[l].claim_order,f=(r>0&&e[n[r]].claim_order<=c?r+1:Q(1,r,b=>e[n[b]].claim_order,c))-1;i[l]=n[f]+1;const a=f+1;n[a]=l,r=Math.max(a,r)}const s=[],o=[];let u=e.length-1;for(let l=n[r]+1;l!=0;l=i[l-1]){for(s.push(e[l-1]);u>=l;u--)o.push(e[u]);u--}for(;u>=0;u--)o.push(e[u]);s.reverse(),o.sort((l,c)=>l.claim_order-c.claim_order);for(let l=0,c=0;l<o.length;l++){for(;c<s.length&&o[l].claim_order>=s[c].claim_order;)c++;const f=c<s.length?s[c]:null;t.insertBefore(o[l],f)}}function U(t,e){if(v){for(R(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function yt(t,e,n){v&&!n?U(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function V(t){t.parentNode&&t.parentNode.removeChild(t)}function gt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function X(t){return document.createElement(t)}function Y(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function A(t){return document.createTextNode(t)}function xt(){return A(" ")}function bt(){return A("")}function $t(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Z(t){return Array.from(t.childNodes)}function tt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function P(t,e,n,i,r=!1){tt(t);const s=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const u=t[o];if(e(u)){const l=n(u);return l===void 0?t.splice(o,1):t[o]=l,r||(t.claim_info.last_index=o),u}}for(let o=t.claim_info.last_index-1;o>=0;o--){const u=t[o];if(e(u)){const l=n(u);return l===void 0?t.splice(o,1):t[o]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,u}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function D(t,e,n,i){return P(t,r=>r.nodeName===e,r=>{const s=[];for(let o=0;o<r.attributes.length;o++){const u=r.attributes[o];n[u.name]||s.push(u.name)}s.forEach(o=>r.removeAttribute(o))},()=>i(e))}function wt(t,e,n){return D(t,e,n,X)}function vt(t,e,n){return D(t,e,n,Y)}function et(t,e){return P(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>A(e),!0)}function Et(t){return et(t," ")}function Nt(t,e){e=""+e,t.data!==e&&(t.data=e)}function St(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function At(t,e){return new t(e)}let y;function p(t){y=t}function x(){if(!y)throw new Error("Function called outside component initialization");return y}function Mt(t){x().$$.on_mount.push(t)}function jt(t){x().$$.after_update.push(t)}function kt(t){x().$$.on_destroy.push(t)}function Ct(t,e){return x().$$.context.set(t,e),e}function Ot(t){return x().$$.context.get(t)}const h=[],C=[];let m=[];const O=[],W=Promise.resolve();let N=!1;function z(){N||(N=!0,W.then(F))}function Tt(){return z(),W}function S(t){m.push(t)}const E=new Set;let _=0;function F(){if(_!==0)return;const t=y;do{try{for(;_<h.length;){const e=h[_];_++,p(e),nt(e.$$)}}catch(e){throw h.length=0,_=0,e}for(p(null),h.length=0,_=0;C.length;)C.pop()();for(let e=0;e<m.length;e+=1){const n=m[e];E.has(n)||(E.add(n),n())}m.length=0}while(h.length);for(;O.length;)O.pop()();N=!1,E.clear(),p(t)}function nt(t){if(t.fragment!==null){t.update(),g(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}function it(t){const e=[],n=[];m.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),m=e}const $=new Set;let d;function qt(){d={r:0,c:[],p:d}}function Bt(){d.r||g(d.c),d=d.p}function rt(t,e){t&&t.i&&($.delete(t),t.i(e))}function Pt(t,e,n,i){if(t&&t.o){if($.has(t))return;$.add(t),d.c.push(()=>{$.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const ot=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"];[...ot];function Dt(t){t&&t.c()}function Wt(t,e){t&&t.l(e)}function lt(t,e,n,i){const{fragment:r,after_update:s}=t.$$;r&&r.m(e,n),i||S(()=>{const o=t.$$.on_mount.map(T).filter(q);t.$$.on_destroy?t.$$.on_destroy.push(...o):g(o),t.$$.on_mount=[]}),s.forEach(S)}function ct(t,e){const n=t.$$;n.fragment!==null&&(it(n.after_update),g(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ut(t,e){t.$$.dirty[0]===-1&&(h.push(t),z(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function zt(t,e,n,i,r,s,o,u=[-1]){const l=y;p(t);const c=t.$$={fragment:null,ctx:[],props:s,update:w,not_equal:r,bound:k(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:k(),dirty:u,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let f=!1;if(c.ctx=n?n(t,e.props||{},(a,b,...M)=>{const j=M.length?M[0]:b;return c.ctx&&r(c.ctx[a],c.ctx[a]=j)&&(!c.skip_bound&&c.bound[a]&&c.bound[a](j),f&&ut(t,a)),b}):[],c.update(),f=!0,g(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){J();const a=Z(e.target);c.fragment&&c.fragment.l(a),a.forEach(V)}else c.fragment&&c.fragment.c();e.intro&&rt(t.$$.fragment),lt(t,e.target,e.anchor,e.customElement),K(),F()}p(l)}class Ft{$destroy(){ct(this,1),this.$destroy=w}$on(e,n){if(!q(n))return w;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!I(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{lt as A,ct as B,ft as C,_t as D,ht as E,dt as F,U as G,w as H,at as I,pt as J,H as K,mt as L,Y as M,vt as N,Ct as O,Ot as P,kt as Q,gt as R,Ft as S,xt as a,yt as b,Et as c,Pt as d,bt as e,Bt as f,rt as g,V as h,zt as i,jt as j,X as k,wt as l,Z as m,$t as n,Mt as o,St as p,A as q,et as r,st as s,Tt as t,Nt as u,qt as v,C as w,At as x,Dt as y,Wt as z};
