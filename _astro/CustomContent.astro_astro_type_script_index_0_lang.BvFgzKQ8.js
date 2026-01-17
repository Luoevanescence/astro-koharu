const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["_astro/index.CLTWAILK.js","_astro/_getTag.C3kekzmL.js","_astro/linear.D_oRkt06.js","_astro/init.Gi6I4Gst.js","_astro/defaultLocale.D2nGpDRe.js","_astro/pie.NiMuLl8l.js","_astro/arc.CmJdAG5B.js","_astro/index.DOot-1bs.js","_astro/_getAllKeys.DssHa7y4.js","_astro/cloneDeep.KaxXcLax.js","_astro/_baseClone.IIiT0Ddh.js","_astro/_commonjsHelpers.CqkleIqs.js"])))=>i.map(i=>d[i]);
import{c as Y,a as H,b as q,e as Z}from"./code-block-enhancer.DP3lGJ60.js";import{_ as M}from"./preload-helper.BlTxHScW.js";const A=new WeakSet,F=1,_=5;function $(){return{scale:1,translateX:0,translateY:0,lastPinchDistance:0,isPinching:!1,isPanning:!1,isMouseDragging:!1,lastPanPoint:{x:0,y:0}}}let i=$(),l=null;function G(){let e=document.querySelector(".markdown-image-lightbox");return e?l=e.querySelector(".markdown-image-lightbox-img"):(e=ie(),document.body.appendChild(e)),e}function J(){const e=document.createElement("button");return e.className="markdown-image-fullscreen",e.setAttribute("type","button"),e.setAttribute("aria-label","全屏查看"),e.title="全屏查看",e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>',e}function V(e){if(e.length<2)return 0;const a=e[0].clientX-e[1].clientX,t=e[0].clientY-e[1].clientY;return Math.sqrt(a*a+t*t)}function Q(e){return e.length<2?{x:e[0].clientX,y:e[0].clientY}:{x:(e[0].clientX+e[1].clientX)/2,y:(e[0].clientY+e[1].clientY)/2}}function ee(e){if(i.scale<=1)return;const a=e.getBoundingClientRect(),t=window.innerWidth,n=window.innerHeight,r=a.width,o=a.height,s=Math.max(0,(r-t)/2+t*.3),c=Math.max(0,(o-n)/2+n*.3);i.translateX=Math.max(-s,Math.min(s,i.translateX)),i.translateY=Math.max(-c,Math.min(c,i.translateY))}function p(e){ee(e);const{scale:a,translateX:t,translateY:n}=i;e.style.transform=`translate(${t}px, ${n}px) scale(${a})`,e.style.cursor=a>1?i.isMouseDragging?"grabbing":"grab":"zoom-in"}function v(){i=$(),l&&(l.style.transform="",l.style.cursor="zoom-in")}function te(e){e.touches.length===2?(e.preventDefault(),i.isPinching=!0,i.lastPinchDistance=V(e.touches)):e.touches.length===1&&i.scale>1&&(i.isPanning=!0,i.lastPanPoint={x:e.touches[0].clientX,y:e.touches[0].clientY})}function ne(e){if(l){if(e.touches.length===2&&i.isPinching){e.preventDefault();const a=V(e.touches),t=a/i.lastPinchDistance;let n=i.scale*t;if(n=Math.max(F,Math.min(_,n)),n!==i.scale){const r=Q(e.touches),o=l.getBoundingClientRect(),s=o.left+o.width/2,c=o.top+o.height/2,d=n/i.scale;i.translateX=r.x-(r.x-s-i.translateX)*d-s,i.translateY=r.y-(r.y-c-i.translateY)*d-c,i.scale=n,p(l)}i.lastPinchDistance=a}else if(e.touches.length===1&&i.isPanning&&i.scale>1){e.preventDefault();const a=e.touches[0].clientX-i.lastPanPoint.x,t=e.touches[0].clientY-i.lastPanPoint.y;i.translateX+=a,i.translateY+=t,i.lastPanPoint={x:e.touches[0].clientX,y:e.touches[0].clientY},p(l)}}}function T(e){e.touches.length<2&&(i.isPinching=!1),e.touches.length===0&&(i.isPanning=!1,l&&i.scale>1&&(l.style.cursor="grab")),i.scale<1.05&&v()}function ae(e){if(!e.ctrlKey&&!e.metaKey||!l)return;e.preventDefault();const a=e.deltaY>0?.9:1.1;let t=i.scale*a;if(t=Math.max(F,Math.min(_,t)),t!==i.scale){const n=l.getBoundingClientRect(),r=n.left+n.width/2,o=n.top+n.height/2,s=t/i.scale;i.translateX=e.clientX-(e.clientX-r-i.translateX)*s-r,i.translateY=e.clientY-(e.clientY-o-i.translateY)*s-o,i.scale=t,p(l)}i.scale<1.05&&v()}function re(e){if(!(!l||!e.target.classList.contains("markdown-image-lightbox-img")))if(e.preventDefault(),e.stopPropagation(),i.scale>1)v();else{const t=l.getBoundingClientRect(),n=t.left+t.width/2,r=t.top+t.height/2,o=2,s=o/i.scale;i.translateX=e.clientX-(e.clientX-n)*s-n,i.translateY=e.clientY-(e.clientY-r)*s-r,i.scale=o,p(l)}}function oe(e){if(!i.isMouseDragging||i.scale<=1||!l)return;const a=e.clientX-i.lastPanPoint.x,t=e.clientY-i.lastPanPoint.y;i.translateX+=a,i.translateY+=t,i.lastPanPoint={x:e.clientX,y:e.clientY},p(l)}function S(){i.isMouseDragging&&(i.isMouseDragging=!1,l&&i.scale>1&&(l.style.cursor="grab"))}function ie(){const e=document.createElement("div");e.className="markdown-image-lightbox",e.setAttribute("role","dialog"),e.setAttribute("aria-modal","true"),e.setAttribute("aria-label","图片全屏查看");const a=document.createElement("button");a.className="markdown-image-lightbox-close",a.setAttribute("type","button"),a.setAttribute("aria-label","关闭"),a.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';const t=document.createElement("div");t.className="markdown-image-lightbox-content";const n=document.createElement("img");return n.className="markdown-image-lightbox-img",l=n,t.appendChild(n),e.appendChild(a),e.appendChild(t),e.addEventListener("click",r=>{i.scale>1||(r.target===e||r.target===t)&&k()}),a.addEventListener("click",k),t.addEventListener("touchstart",te,{passive:!1}),t.addEventListener("touchmove",ne,{passive:!1}),t.addEventListener("touchend",T),t.addEventListener("touchcancel",T),t.addEventListener("wheel",ae,{passive:!1}),n.addEventListener("dblclick",re),n.addEventListener("mousedown",r=>{i.scale>1&&(r.preventDefault(),i.isMouseDragging=!0,i.lastPanPoint={x:r.clientX,y:r.clientY},n.style.cursor="grabbing")}),t.addEventListener("mousemove",oe),t.addEventListener("mouseup",S),t.addEventListener("mouseleave",S),e}function P(e,a){const t=G();v(),l&&(l.classList.remove("loaded"),l.src="",l.alt=a,l.src=e,l.onload=()=>{l?.classList.add("loaded")},t.classList.add("active"),document.body.classList.add("lightbox-open"),document.addEventListener("keydown",W))}function k(){const e=document.querySelector(".markdown-image-lightbox");e&&(e.classList.remove("active"),document.body.classList.remove("lightbox-open"),document.removeEventListener("keydown",W),v())}function W(e){e.key==="Escape"&&k()}function se(e){const a=document.createElement("div");a.className="markdown-image-error",a.setAttribute("role","img"),a.setAttribute("aria-label",e.alt?`图片加载失败: ${e.alt}`:"图片加载失败");const t=document.createElement("span");t.className="markdown-image-error-icon",t.setAttribute("aria-hidden","true");const n=document.createElement("span");return n.className="markdown-image-error-text",n.textContent="图片加载失败",a.appendChild(t),a.appendChild(n),a}function ce(e){const a=e.target;if(a.classList.contains("markdown-image")){const t=a;P(t.src,t.alt||"图片")}else if(a.closest(".markdown-image-fullscreen")){const n=a.closest(".markdown-image-wrapper")?.querySelector(".markdown-image");n&&(e.stopPropagation(),P(n.src,n.alt||"图片"))}}function le(e){const a=e.querySelectorAll(".markdown-image");let t=0;const n=a.length;e.addEventListener("click",ce);const r=()=>{t++,t>=n&&X(e)};a.forEach(o=>{if(A.has(o)){r();return}if(A.add(o),o.complete&&o.naturalWidth>0){I(o),r();return}if(o.complete&&o.naturalWidth===0){B(o),r();return}o.addEventListener("load",()=>{I(o),r()},{once:!0}),o.addEventListener("error",()=>{B(o),r()},{once:!0})}),n===0&&X(e)}function I(e){e.classList.add("loaded"),e.naturalHeight>e.naturalWidth*1.2&&e.closest(".markdown-image-wrapper")?.classList.add("portrait");const t=e.closest(".markdown-image-wrapper");if(!t||t.querySelector(".markdown-image-fullscreen"))return;const n=J();t.appendChild(n),e.style.cursor="zoom-in"}function B(e){e.classList.add("error");const a=e.closest(".markdown-image-wrapper");if(a&&!a.querySelector(".markdown-image-error")){const t=se(e);a.appendChild(t)}}function X(e){const a=Array.from(e.querySelectorAll(".markdown-image-wrapper"));let t=[];const n=()=>{if(t.length>=2){const r=document.createElement("div");r.className="markdown-image-row",t[0].parentNode?.insertBefore(r,t[0]);const o=document.createDocumentFragment();t.forEach(s=>{o.appendChild(s)}),r.appendChild(o)}t=[]};a.forEach((r,o)=>{const s=r.classList.contains("portrait");if(!r.parentElement?.classList.contains("markdown-image-row"))if(s){const c=a[o-1];t.length>0&&c&&c.classList.contains("portrait")&&de(c,r)?t.push(r):(n(),t=[r])}else n()}),n()}function de(e,a){let t=e.nextSibling;for(;t;){if(t.nodeType===Node.TEXT_NODE&&t.textContent?.trim()===""){t=t.nextSibling;continue}return t===a}return!1}let D=!1,L=[],C=[],f=null;const w=new Map;function ue(){return`
    <div class="infographic-toolbar">
      <div class="infographic-dots">
        <span class="infographic-dot red"></span>
        <span class="infographic-dot yellow"></span>
        <span class="infographic-dot green"></span>
        <span class="infographic-language">infographic</span>
      </div>
      <div class="infographic-actions">
        <button
          class="infographic-button infographic-fullscreen"
          aria-label="Fullscreen"
          title="Fullscreen"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
          </svg>
        </button>
        <button
          class="infographic-button infographic-copy"
          aria-label="Copy source"
          title="Copy source"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 448 512" fill="currentColor">
            <path d="M192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-200.6c0-17.4-7.1-34.1-19.7-46.2L370.6 17.8C358.7 6.4 342.8 0 326.3 0L192 0zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-64 0 0 16-192 0 0-256 16 0 0-64-16 0z"/>
          </svg>
        </button>
        <button
          class="infographic-button infographic-view-source"
          aria-label="View source code"
          title="View source code"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
            <path d="m7 8l-4 4l4 4m10-8l4 4l-4 4M14 4l-4 16"/>
          </svg>
        </button>
      </div>
    </div>
  `}function fe(){const e=`checkmark-infographic-${Date.now()}`;return`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
      <mask id="${e}">
        <g fill="none" stroke="#fff" stroke-dasharray="24" stroke-dashoffset="24" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
          <path d="M2 13.5l4 4l10.75 -10.75">
            <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="24;0"/>
          </path>
          <path stroke="#000" stroke-width="6" d="M7.5 13.5l4 4l10.75 -10.75">
            <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.4s" values="24;0"/>
          </path>
          <path d="M7.5 13.5l4 4l10.75 -10.75">
            <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.4s" values="24;0"/>
          </path>
        </g>
      </mask>
      <rect width="24" height="24" fill="currentColor" mask="url(#${e})"/>
    </svg>`}function R(e){return e.parentElement?.classList.contains("infographic-wrapper")??!1}function z(){return document.documentElement.classList.contains("dark")}async function O(){if(D)return;const{registerFont:e}=await M(async()=>{const{registerFont:a}=await import("./index.CLTWAILK.js");return{registerFont:a}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]));e({fontFamily:"寒蝉全圆体",name:"寒蝉全圆体",baseUrl:"/fonts/ChillRoundFRegular/result.css",fontWeight:{regular:"regular"}}),e({fontFamily:"寒蝉全圆体",name:"寒蝉全圆体 Bold",baseUrl:"/fonts/ChillRoundFBold/result.css",fontWeight:{bold:"bold"}}),D=!0}async function he(e,a){const{Infographic:t}=await M(async()=>{const{Infographic:c}=await import("./index.CLTWAILK.js");return{Infographic:c}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]));await O();const n=z()?"dark":"default",r=new t({container:e,width:"100%",height:"auto",theme:n}),s=`${a}

theme
  base
    text
      font-family 寒蝉全圆体
  item
    label
      font-family 寒蝉全圆体
`;return r.render(s),r}async function me(e){if(e.dataset.infographicEnhanced==="true"||R(e))return;const t=e.querySelector("code")?.textContent?.trim()||e.textContent?.trim()||"";if(!t)return;const n=document.createElement("div");n.className="infographic-wrapper",e.parentNode?.insertBefore(n,e),n.appendChild(e),e.insertAdjacentHTML("beforebegin",ue());const r=document.createElement("div");r.className="infographic-container",n.appendChild(r),e.style.display="none",e.dataset.infographicEnhanced="true";try{const d=await he(r,t);w.set(e,{instance:d,source:t,container:r})}catch(d){console.error("Failed to render infographic:",d),e.style.display="",r.remove()}const o=n.querySelector(".infographic-copy");if(o){const d=o.innerHTML;o.addEventListener("click",async()=>{await Y(t)&&(o.classList.add("copied"),o.innerHTML=fe(),setTimeout(()=>{o.classList.remove("copied"),o.innerHTML=d},2e3))})}const s=n.querySelector(".infographic-fullscreen");s&&s.addEventListener("click",()=>{const d=r.innerHTML;window.dispatchEvent(new CustomEvent("open-infographic-fullscreen",{detail:{svg:d,source:t}}))});const c=n.querySelector(".infographic-view-source");if(c){const d=q(),u=H();t||(c.disabled=!0),c.addEventListener("click",()=>{(n.getAttribute("data-view-mode")||"rendered")==="rendered"?(e.style.display="",r.style.display="none",n.setAttribute("data-view-mode","source"),c.innerHTML=u,c.setAttribute("aria-label","View rendered diagram"),c.setAttribute("title","View rendered diagram")):(e.style.display="none",r.style.display="",n.setAttribute("data-view-mode","rendered"),c.innerHTML=d,c.setAttribute("aria-label","View source code"),c.setAttribute("title","View source code"))})}}function j(e=!1){for(const a of L)a.disconnect();L=[],f&&(f.disconnect(),f=null);for(const a of C)clearTimeout(a);if(C=[],e){for(const[a,t]of w){try{t.instance&&typeof t.instance.destroy=="function"&&t.instance.destroy();const n=a.closest(".infographic-wrapper");n&&n.replaceWith(a)}catch{}a.dataset.infographicEnhanced="false",a.style.display=""}w.clear()}}function ge(e){return(e.querySelector("code")?.textContent?.trim()||e.textContent?.trim()||"").startsWith("infographic ")}function pe(){document.querySelectorAll("pre").forEach(a=>{const t=a;t.dataset.infographicEnhanced==="true"||R(t)||ge(t)&&me(t)})}async function we(){const{Infographic:e}=await M(async()=>{const{Infographic:n}=await import("./index.CLTWAILK.js");return{Infographic:n}},__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]));await O();const a=z()?"dark":"default",t=`
theme
  base
    text
      font-family 寒蝉全圆体
  item
    label
      font-family 寒蝉全圆体
`;for(const[,n]of w)try{n.instance&&typeof n.instance.destroy=="function"&&n.instance.destroy(),n.container.innerHTML="";const r=new e({container:n.container,width:"100%",height:"auto",theme:a}),o=`${n.source}
${t}`;r.render(o),n.instance=r}catch(r){console.error("Failed to re-render infographic:",r)}}function ve(){f&&f.disconnect(),f=new MutationObserver(()=>{w.size>0&&we()}),f.observe(document.documentElement,{attributes:!0,attributeFilter:["class"]}),L.push(f)}function be(){j(),ve();const e=setTimeout(pe,100);C.push(e)}typeof document<"u"&&document.addEventListener("astro:before-swap",()=>j(!0));let h=[],m=[],g=null;function ye(){return`
    <div class="mermaid-toolbar">
      <div class="mermaid-dots">
        <span class="mermaid-dot red"></span>
        <span class="mermaid-dot yellow"></span>
        <span class="mermaid-dot green"></span>
        <span class="mermaid-language">mermaid</span>
      </div>
      <div class="mermaid-actions">
        <button
          class="mermaid-button mermaid-fullscreen"
          aria-label="Fullscreen"
          title="Fullscreen"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
          </svg>
        </button>
        <button
          class="mermaid-button mermaid-copy"
          aria-label="Copy source"
          title="Copy source"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 448 512" fill="currentColor">
            <path d="M192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-200.6c0-17.4-7.1-34.1-19.7-46.2L370.6 17.8C358.7 6.4 342.8 0 326.3 0L192 0zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-64 0 0 16-192 0 0-256 16 0 0-64-16 0z"/>
          </svg>
        </button>
        <button
          class="mermaid-button mermaid-view-source"
          aria-label="View source code"
          title="View source code"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
            <path d="m7 8l-4 4l4 4m10-8l4 4l-4 4M14 4l-4 16"/>
          </svg>
        </button>
      </div>
    </div>
  `}function ke(){const e=`checkmark-mermaid-${Date.now()}`;return`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
      <mask id="${e}">
        <g fill="none" stroke="#fff" stroke-dasharray="24" stroke-dashoffset="24" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
          <path d="M2 13.5l4 4l10.75 -10.75">
            <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="24;0"/>
          </path>
          <path stroke="#000" stroke-width="6" d="M7.5 13.5l4 4l10.75 -10.75">
            <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.4s" values="24;0"/>
          </path>
          <path d="M7.5 13.5l4 4l10.75 -10.75">
            <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.4s" values="24;0"/>
          </path>
        </g>
      </mask>
      <rect width="24" height="24" fill="currentColor" mask="url(#${e})"/>
    </svg>`}function x(e){return e.parentElement?.classList.contains("mermaid-wrapper")??!1}function y(e){if(e.dataset.toolbarEnhanced==="true"||x(e))return;const a=document.createElement("div");a.className="mermaid-wrapper",e.parentNode?.insertBefore(a,e),a.appendChild(e),e.insertAdjacentHTML("beforebegin",ye()),e.dataset.toolbarEnhanced="true";const t=e.getAttribute("data-diagram")||e.textContent||"",n=a.querySelector(".mermaid-copy");if(n){const s=n.innerHTML;n.addEventListener("click",async()=>{await Y(t)&&(n.classList.add("copied"),n.innerHTML=ke(),setTimeout(()=>{n.classList.remove("copied"),n.innerHTML=s},2e3))})}const r=a.querySelector(".mermaid-fullscreen");r&&r.addEventListener("click",()=>{const s=e.innerHTML;window.dispatchEvent(new CustomEvent("open-mermaid-fullscreen",{detail:{svg:s,source:t}}))});const o=a.querySelector(".mermaid-view-source");if(o){const s=q(),c=H();if(!t){o.disabled=!0;return}let d=null,u=null;o.addEventListener("click",()=>{if((a.getAttribute("data-view-mode")||"rendered")==="rendered"){if(!d){d=e.innerHTML,u=document.createElement("div"),u.className="mermaid-source";const b=document.createElement("code");b.className="language-mermaid",b.textContent=t,u.appendChild(b)}e.innerHTML="",u&&e.appendChild(u),a.setAttribute("data-view-mode","source"),o.innerHTML=c,o.setAttribute("aria-label","View rendered diagram"),o.setAttribute("title","View rendered diagram")}else d&&(e.innerHTML=d),a.setAttribute("data-view-mode","rendered"),o.innerHTML=s,o.setAttribute("aria-label","View source code"),o.setAttribute("title","View source code")})}}function K(){for(const e of h)e.disconnect();h=[];for(const e of m)clearTimeout(e);m=[],g&&(window.removeEventListener("mermaid:rendered",g),g=null)}function N(){document.querySelectorAll("pre.mermaid").forEach(a=>{const t=a;if(!(t.dataset.toolbarEnhanced==="true"||x(t)))if(t.getAttribute("data-processed")==="true")y(t);else{const n=new MutationObserver((o,s)=>{for(const c of o)if(c.type==="attributes"&&c.attributeName==="data-processed"&&t.getAttribute("data-processed")==="true"){y(t),s.disconnect();const d=h.indexOf(s);d>-1&&h.splice(d,1);return}});n.observe(t,{attributes:!0,attributeFilter:["data-processed"]}),h.push(n);const r=setTimeout(()=>{n.disconnect();const o=h.indexOf(n);o>-1&&h.splice(o,1);const s=m.indexOf(r);s>-1&&m.splice(s,1),t.dataset.toolbarEnhanced!=="true"&&!x(t)&&y(t)},5e3);m.push(r)}})}function Le(){K();const e=setTimeout(N,100);m.push(e),g=()=>{setTimeout(N,50)},window.addEventListener("mermaid:rendered",g)}typeof document<"u"&&document.addEventListener("astro:before-swap",K);function E(){const e=document.querySelector(".custom-content");if(!e||e.getAttribute("data-enhanced")==="true")return;const a=e.getAttribute("data-config"),t=a?JSON.parse(a):{addBlankTarget:!0,smoothScroll:!0,addHeadingLevel:!0,enhanceCodeBlock:!0,enableCodeCopy:!0,enableCodeFullscreen:!0};t.addBlankTarget&&e.querySelectorAll("a[href]").forEach(r=>{const o=r,s=o.getAttribute("href")||"";(s.startsWith("http")||s.startsWith("//"))&&o.setAttribute("target","_blank")}),t.smoothScroll&&e.querySelectorAll('a.anchor-link[href^="#"]').forEach(r=>{const o=r;o.addEventListener("click",s=>{s.preventDefault();const c=o.getAttribute("href")?.substring(1);if(!c)return;const d=document.getElementById(c);d&&(d.scrollIntoView({behavior:"smooth",block:"start"}),history.pushState(null,"",`#${c}`))})}),t.addHeadingLevel&&e.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach(r=>{const o=r.tagName[1];r.setAttribute("data-level",`H${o}`)}),t.enhanceCodeBlock&&(Z(e,{enableCopy:t.enableCodeCopy,enableFullscreen:t.enableCodeFullscreen,onFullscreen:n=>{window.dispatchEvent(new CustomEvent("open-code-fullscreen",{detail:{code:n.code,codeHTML:n.codeHTML,language:n.language,preClassName:n.preClassName,preStyle:n.preStyle,codeClassName:n.codeClassName}}))}}),Le(),be()),le(e),e.setAttribute("data-enhanced","true")}document.addEventListener("astro:page-load",()=>{const e=document.querySelector(".custom-content");e&&e.removeAttribute("data-enhanced"),E()});document.readyState==="loading"?document.addEventListener("DOMContentLoaded",E):E();
