const e="mycomp";let t,n,l=null,s=!1;const o="undefined"!=typeof window?window:{},c=o.document||{head:{}},i={t:0,l:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},r=e=>Promise.resolve(e),a=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replace}catch(e){}return!1})(),u=new WeakMap,$=(e,t,n)=>{let l=ie.get(e);a&&n?(l=l||new CSSStyleSheet,l.replace(t)):l=t,ie.set(e,l)},f=(e,t)=>{let n=d(t),l=ie.get(n);if(e=11===e.nodeType?e:c,l)if("string"==typeof l){let t,s=u.get(e=e.head||e);s||u.set(e,s=new Set),s.has(n)||(e.host&&(t=e.querySelector(`[sty-id="${n}"]`))?t.innerHTML=l:(t=c.createElement("style"),t.innerHTML=l,e.insertBefore(t,e.querySelector("link"))),s&&s.add(n))}else e.adoptedStyleSheets.includes(l)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,l]);return n},d=e=>"sc-"+e.o,m=e=>e.replace(/\/\*!@([^\/]+)\*\/[^\{]+\{/g,"$1{"),p={},y=e=>"object"==(e=typeof e)||"function"===e,h=(e,t,...n)=>{let l=null,s=!1,o=!1,c=[];const i=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?i(l):null!=l&&"boolean"!=typeof l&&((s="function"!=typeof e&&!y(l))&&(l+=""),s&&o?c[c.length-1].i+=l:c.push(s?b(null,l):l),o=s)};if(i(n),t){const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}if("function"==typeof e)return e(null===t?{}:t,c,g);const r=b(e,null);return r.u=t,c.length>0&&(r.$=c),r},b=(e,t)=>({t:0,m:e,i:t,p:null,$:null,u:null}),w={},g={forEach:(e,t)=>e.map(v).forEach(t),map:(e,t)=>e.map(v).map(t).map(S)},v=e=>({vattrs:e.u,vchildren:e.$,vkey:e.h,vname:e.g,vtag:e.m,vtext:e.i}),S=e=>{if("function"==typeof e.vtag){const t=Object.assign({},e.vattrs);return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),h(e.vtag,t,...e.vchildren||[])}const t=b(e.vtag,e.vtext);return t.u=e.vattrs,t.$=e.vchildren,t.h=e.vkey,t.g=e.vname,t},k=(e,t,n,l,s,c)=>{if(n!==l){let r=le(e,t),a=t.toLowerCase();if("class"===t){const t=e.classList,s=M(n),o=M(l);t.remove(...s.filter((e=>e&&!o.includes(e)))),t.add(...o.filter((e=>e&&!s.includes(e))))}else if("ref"===t)l&&l(e);else if(r||"o"!==t[0]||"n"!==t[1]){const o=y(l);if((r||o&&null!==l)&&!s)try{if(e.tagName.includes("-"))e[t]=l;else{let s=null==l?"":l;"list"===t?r=!1:null!=n&&e[t]==s||(e[t]=s)}}catch(e){}null==l||!1===l?!1===l&&""!==e.getAttribute(t)||e.removeAttribute(t):(!r||4&c||s)&&!o&&e.setAttribute(t,l=!0===l?"":l)}else t="-"===t[2]?t.slice(3):le(o,a)?a.slice(2):a[2]+t.slice(3),n&&i.rel(e,t,n,!1),l&&i.ael(e,t,l,!1)}},j=/\s/,M=e=>e?e.split(j):[],x=(e,t,n,l)=>{const s=11===t.p.nodeType&&t.p.host?t.p.host:t.p,o=e&&e.u||p,c=t.u||p;for(l in o)l in c||k(s,l,o[l],void 0,n,t.t);for(l in c)k(s,l,o[l],c[l],n,t.t)},C=(e,n,l)=>{let s,o,i=n.$[l],r=0;if(null!==i.i)s=i.p=c.createTextNode(i.i);else if(s=i.p=c.createElement(i.m),x(null,i,!1),null!=t&&s["s-si"]!==t&&s.classList.add(s["s-si"]=t),i.$)for(r=0;r<i.$.length;++r)o=C(e,i,r),o&&s.appendChild(o);return s},O=(e,t,l,s,o,c)=>{let i,r=e;for(r.shadowRoot&&r.tagName===n&&(r=r.shadowRoot);o<=c;++o)s[o]&&(i=C(null,l,o),i&&(s[o].p=i,r.insertBefore(i,t)))},W=(e,t,n,l,s)=>{for(;t<=n;++t)(l=e[t])&&(s=l.p,I(l),s.remove())},_=(e,t)=>e.m===t.m,E=(e,t)=>{const n=t.p=e.p,l=e.$,s=t.$,o=t.i;null===o?(x(e,t,!1),null!==l&&null!==s?((e,t,n,l)=>{let s,o=0,c=0,i=t.length-1,r=t[0],a=t[i],u=l.length-1,$=l[0],f=l[u];for(;o<=i&&c<=u;)null==r?r=t[++o]:null==a?a=t[--i]:null==$?$=l[++c]:null==f?f=l[--u]:_(r,$)?(E(r,$),r=t[++o],$=l[++c]):_(a,f)?(E(a,f),a=t[--i],f=l[--u]):_(r,f)?(E(r,f),e.insertBefore(r.p,a.p.nextSibling),r=t[++o],f=l[--u]):_(a,$)?(E(a,$),e.insertBefore(a.p,r.p),a=t[--i],$=l[++c]):(s=C(t&&t[c],n,c),$=l[++c],s&&r.p.parentNode.insertBefore(s,r.p));o>i?O(e,null==l[u+1]?null:l[u+1].p,n,l,c,u):c>u&&W(t,o,i)})(n,l,t,s):null!==s?(null!==e.i&&(n.textContent=""),O(n,null,t,s,0,s.length-1)):null!==l&&W(l,0,l.length-1)):e.i!==o&&(n.data=o)},I=e=>{e.u&&e.u.ref&&e.u.ref(null),e.$&&e.$.map(I)},L=(e,t,n)=>{const l=(e=>ee(e).v)(e);return{emit:e=>N(l,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}},N=(e,t,n)=>{const l=i.ce(t,n);return e.dispatchEvent(l),l},P=(e,t)=>{t&&!e.S&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.S=t)))},R=(e,t)=>{if(e.t|=16,!(4&e.t))return P(e,e.k),me((()=>U(e,t)));e.t|=512},U=(e,t)=>{const n=e.j;let l;return l=V(n,t?"componentWillLoad":"componentWillUpdate"),l=z(l,(()=>V(n,"componentWillRender"))),z(l,(()=>D(e,n,t)))},D=async(e,t,n)=>{const l=e.v,s=l["s-rc"];n&&(e=>{const t=e.M,n=e.v,l=t.t,s=f(n.shadowRoot?n.shadowRoot:n.getRootNode(),t);10&l&&(n["s-sc"]=s,n.classList.add(s+"-h"))})(e);T(e,t),s&&(s.map((e=>e())),l["s-rc"]=void 0);{const t=l["s-p"],n=()=>F(e);0===t.length?n():(Promise.all(t).then(n),e.t|=4,t.length=0)}},T=(e,s)=>{try{l=s,s=s.render(),e.t&=-17,e.t|=2,((e,l)=>{const s=e.v,o=e.C||b(null,null),c=(e=>e&&e.m===w)(l)?l:h(null,null,l);n=s.tagName,c.m=null,c.t|=4,e.C=c,c.p=o.p=s.shadowRoot||s,t=s["s-sc"],E(o,c)})(e,s)}catch(t){se(t,e.v)}return l=null,null},A=()=>l,F=e=>{const t=e.v,n=e.j,l=e.k;V(n,"componentDidRender"),64&e.t?V(n,"componentDidUpdate"):(e.t|=64,B(t),V(n,"componentDidLoad"),e.O(t),l||q()),e.S&&(e.S(),e.S=void 0),512&e.t&&de((()=>R(e,!1))),e.t&=-517},H=e=>{{const t=ee(e),n=t.v.isConnected;return n&&2==(18&t.t)&&R(t,!1),n}},q=()=>{B(c.documentElement),de((()=>N(o,"appload",{detail:{namespace:"mycomp"}})))},V=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){se(e)}},z=(e,t)=>e&&e.then?e.then(t):t(),B=e=>e.classList.add("hydrated"),G=(e,t,n,l,s,o,i)=>{let r,a,u,$;if(1===o.nodeType){for(r=o.getAttribute("c-id"),r&&(a=r.split("."),a[0]!==i&&"0"!==a[0]||(u={t:0,W:a[0],_:a[1],I:a[2],L:a[3],m:o.tagName.toLowerCase(),p:o,u:null,$:null,h:null,g:null,i:null},t.push(u),o.removeAttribute("c-id"),e.$||(e.$=[]),e.$[u.L]=u,e=u,l&&"0"===u.I&&(l[u.L]=u.p))),$=o.childNodes.length-1;$>=0;$--)G(e,t,n,l,s,o.childNodes[$],i);if(o.shadowRoot)for($=o.shadowRoot.childNodes.length-1;$>=0;$--)G(e,t,n,l,s,o.shadowRoot.childNodes[$],i)}else if(8===o.nodeType)a=o.nodeValue.split("."),a[1]!==i&&"0"!==a[1]||(r=a[0],u={t:0,W:a[1],_:a[2],I:a[3],L:a[4],p:o,u:null,$:null,h:null,g:null,m:null,i:null},"t"===r?(u.p=o.nextSibling,u.p&&3===u.p.nodeType&&(u.i=u.p.textContent,t.push(u),o.remove(),e.$||(e.$=[]),e.$[u.L]=u,l&&"0"===u.I&&(l[u.L]=u.p))):u.W===i&&("s"===r?(u.m="slot",o["s-sn"]=a[5]?u.g=a[5]:"",o["s-sr"]=!0,l&&(u.p=c.createElement(u.m),u.g&&u.p.setAttribute("name",u.g),o.parentNode.insertBefore(u.p,o),o.remove(),"0"===u.I&&(l[u.L]=u.p)),n.push(u),e.$||(e.$=[]),e.$[u.L]=u):"r"===r&&l&&o.remove()));else if(e&&"style"===e.m){const t=b(null,o.textContent);t.p=o,t.L="0",e.$=[t]}},J=(e,t)=>{if(1===e.nodeType){let n=0;for(;n<e.childNodes.length;n++)J(e.childNodes[n],t);if(e.shadowRoot)for(n=0;n<e.shadowRoot.childNodes.length;n++)J(e.shadowRoot.childNodes[n],t)}else if(8===e.nodeType){const n=e.nodeValue.split(".");"o"===n[0]&&(t.set(n[1]+"."+n[2],e),e.nodeValue="",e["s-en"]=n[3])}},K=(e,t,n)=>{if(t.N){const l=Object.entries(t.N),s=e.prototype;if(l.map((([e,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(s,e,{get(){return((e,t)=>ee(this).P.get(t))(0,e)},set(n){((e,t,n,l)=>{const s=ee(e),o=s.P.get(t),c=s.t,i=s.j;n=((e,t)=>null==e||y(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?e+"":e)(n,l.N[t][0]),8&c&&void 0!==o||n===o||Number.isNaN(o)&&Number.isNaN(n)||(s.P.set(t,n),i&&2==(18&c)&&R(s,!1))})(this,e,n,t)},configurable:!0,enumerable:!0})})),1&n){const t=new Map;s.attributeChangedCallback=function(e,n,l){i.jmp((()=>{const n=t.get(e);if(this.hasOwnProperty(n))l=this[n],delete this[n];else if(s.hasOwnProperty(n)&&"number"==typeof this[n]&&this[n]==l)return;this[n]=(null!==l||"boolean"!=typeof this[n])&&l}))},e.observedAttributes=l.filter((([e,t])=>15&t[0])).map((([e,n])=>{const l=n[1]||e;return t.set(l,e),l}))}}return e},Q=e=>{V(e,"connectedCallback")},X=e=>{if(0==(1&i.t)){const t=ee(e),n=t.M,l=()=>{};if(1&t.t)Q(t.j);else{let l;if(t.t|=1,l=e.getAttribute("s-id"),l){if(1&n.t){const t=f(e.shadowRoot,n);e.classList.remove(t+"-h",t+"-s")}((e,t,n,l)=>{const s=e.shadowRoot,o=[],r=s?[]:null,a=l.C=b(t,null);i.R||J(c.body,i.R=new Map),e["s-id"]=n,e.removeAttribute("s-id"),G(a,o,[],r,e,e,n),o.map((e=>{const n=e.W+"."+e._,l=i.R.get(n),o=e.p;l&&""===l["s-en"]&&l.parentNode.insertBefore(o,l.nextSibling),s||(o["s-hn"]=t,l&&(o["s-ol"]=l,o["s-ol"]["s-nr"]=o)),i.R.delete(n)})),s&&r.map((e=>{e&&s.appendChild(e)}))})(e,n.o,l,t)}{let n=e;for(;n=n.parentNode||n.host;)if(1===n.nodeType&&n.hasAttribute("s-id")&&n["s-p"]||n["s-p"]){P(t,t.k=n);break}}n.N&&Object.entries(n.N).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),de((()=>(async(e,t,n,l,s)=>{if(0==(32&t.t)){{if(t.t|=32,(s=ce(n)).then){const e=()=>{};s=await s,e()}s.isProxied||(K(s,n,2),s.isProxied=!0);const e=()=>{};t.t|=8;try{new s(t)}catch(e){se(e)}t.t&=-9,e(),Q(t.j)}if(s.style){let e=s.style;const t=d(n);if(!ie.has(t)){const l=()=>{};$(t,e,!!(1&n.t)),l()}}}const o=t.k,c=()=>R(t,!0);o&&o["s-rc"]?o["s-rc"].push(c):c()})(0,t,n)))}l()}},Y=(e,t={})=>{const n=[],l=t.exclude||[],s=o.customElements,r=c.head,a=r.querySelector("meta[charset]"),u=c.createElement("style"),f=[],d=c.querySelectorAll("[sty-id]");let p,y=!0,h=0;for(Object.assign(i,t),i.l=new URL(t.resourcesUrl||"./",c.baseURI).href,i.t|=2;h<d.length;h++)$(d[h].getAttribute("sty-id"),m(d[h].innerHTML),!0);e.map((e=>{e[1].map((t=>{const o={t:t[0],o:t[1],N:t[2],U:t[3]};o.N=t[2];const c=o.o,r=class extends HTMLElement{constructor(e){super(e),ne(e=this,o),1&o.t&&e.attachShadow({mode:"open"})}connectedCallback(){p&&(clearTimeout(p),p=null),y?f.push(this):i.jmp((()=>X(this)))}disconnectedCallback(){i.jmp((()=>(()=>{0==(1&i.t)&&V(ee(this).j,"disconnectedCallback")})()))}componentOnReady(){return ee(this).D}};o.T=e[0],l.includes(c)||s.get(c)||(n.push(c),s.define(c,K(r,o,1)))}))})),u.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",u.setAttribute("data-styles",""),r.insertBefore(u,a?a.nextSibling:r.firstChild),y=!1,f.length?f.map((e=>e.connectedCallback())):i.jmp((()=>p=setTimeout(q,30)))},Z=new WeakMap,ee=e=>Z.get(e),te=(e,t)=>Z.set(t.j=e,t),ne=(e,t)=>{const n={t:0,v:e,M:t,P:new Map};return n.D=new Promise((e=>n.O=e)),e["s-p"]=[],e["s-rc"]=[],Z.set(e,n)},le=(e,t)=>t in e,se=(e,t)=>(0,console.error)(e,t),oe=new Map,ce=e=>{const t=e.o.replace(/-/g,"_"),n=e.T,l=oe.get(n);return l?l[t]:__sc_import_mycomp(`./${n}.entry.js`).then((e=>(oe.set(n,e),e[t])),se)},ie=new Map,re=[],ae=[],ue=(e,t)=>n=>{e.push(n),s||(s=!0,t&&4&i.t?de(fe):i.raf(fe))},$e=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){se(e)}e.length=0},fe=()=>{$e(re),$e(ae),(s=re.length>0)&&i.raf(fe)},de=e=>r().then(e),me=ue(ae,!0);export{w as H,e as N,Y as b,L as c,c as d,H as f,A as g,h,r as p,te as r,o as w}