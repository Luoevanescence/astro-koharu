function u(e){return e.replace(/[&<>"']/g,"")}function f(e){if(e.classList.contains("mermaid"))return"mermaid";const o=e.getAttribute("data-language");if(o)return o;const t=e.querySelector("code");if(t){const n=t.className.split(" ").find(s=>s.startsWith("language-"));if(n)return n.replace("language-","")}return"text"}function h(e){return e.querySelector("code")?.textContent||""}function g(e){return e.querySelector("code")?.innerHTML||""}function m(e){return e.className}function k(e){return e.getAttribute("style")||""}function p(e){return e.querySelector("code")?.className||""}function v(e,o={}){const{enableCopy:t=!0,enableFullscreen:c=!0}=o;return`
    <div class="code-block-toolbar">
      <div class="code-block-dots">
        <span class="code-block-dot red"></span>
        <span class="code-block-dot yellow"></span>
        <span class="code-block-dot green"></span>
        <span class="code-block-language">${u(e)}</span>
      </div>
      <div class="code-block-actions">
        ${c?`
        <button
          class="code-block-button code-block-fullscreen"
          aria-label="全屏查看"
          title="全屏查看"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
          </svg>
        </button>`:""}
        ${t?`
        <button
          class="code-block-button code-block-copy"
          aria-label="复制代码"
          title="复制代码"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 448 512" fill="currentColor">
            <path d="M192 0c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-200.6c0-17.4-7.1-34.1-19.7-46.2L370.6 17.8C358.7 6.4 342.8 0 326.3 0L192 0zM64 128c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l192 0c35.3 0 64-28.7 64-64l0-16-64 0 0 16-192 0 0-256 16 0 0-64-16 0z"/>
          </svg>
        </button>`:""}
      </div>
    </div>
  `}async function b(e){try{return await navigator.clipboard.writeText(e),!0}catch(o){try{const t=document.createElement("textarea");t.value=e,t.style.position="fixed",t.style.left="-999999px",t.style.top="-999999px",document.body.appendChild(t),t.focus(),t.select();const c=document.execCommand("copy");return document.body.removeChild(t),c}catch{return console.error("Failed to copy:",o),!1}}}function w(e,o={}){if(e.dataset.enhanced==="true")return null;const t=f(e);if(t==="mermaid")return null;const c=h(e);if(c.trim().startsWith("infographic "))return null;const n=g(e),s=m(e),r=k(e),l=p(e),a=document.createElement("div");return a.className="code-block-wrapper",e.parentNode?.insertBefore(a,e),a.appendChild(e),e.insertAdjacentHTML("beforebegin",v(t,o)),e.dataset.enhanced="true",e.dataset.language=t,{element:e,language:t,code:c,codeHTML:n,preClassName:s,preStyle:r,codeClassName:l}}function C(e,o={}){const{enableCopy:t=!0,enableFullscreen:c=!0}=o;e.querySelectorAll("pre").forEach(s=>{const r=s,l=w(r,{enableCopy:t,enableFullscreen:c});if(l){if(t){const a=r.parentElement?.querySelector(".code-block-copy");if(a){const i=a.innerHTML,d=`
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
            <mask id="checkmark-anim-${Date.now()}">
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
            <rect width="24" height="24" fill="currentColor" mask="url(#checkmark-anim-${Date.now()})"/>
          </svg>`;a.addEventListener("click",async()=>{await b(l.code)&&(a.classList.add("copied"),a.innerHTML=d,o.onCopy?.(l.code),setTimeout(()=>{a.classList.remove("copied"),a.innerHTML=i},2e3))})}}if(c){const a=r.parentElement?.querySelector(".code-block-fullscreen");a&&a.addEventListener("click",()=>{o.onFullscreen?.(l)})}}})}function x(){return`
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
      <path d="m7 8l-4 4l4 4m10-8l4 4l-4 4M14 4l-4 16"/>
    </svg>
  `}function L(){return`
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 6a1 1 0 0 0-1 1v10a1 1 0 0 0 2 0V7a1 1 0 0 0-1-1m-5 6a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-1-1m10-2a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1m2-8H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3m1 17a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1Z"/>
    </svg>
  `}export{L as a,x as b,b as c,C as e};
