import{j as s}from"./jsx-runtime.D_zvdyIk.js";import{r as d,R as E}from"./index.D6whbu08.js";import{r as N,R as T}from"./router.DsY5xYPL.js";import"./site-config.BAbVgF_m.js";import{I as S}from"./iconify.BWf9v2dp.js";import{c as w}from"./utils.BpMRZbEX.js";import{a as j}from"./design-tokens.Dn6fllXW.js";import{u as C,a as L,g as D,b as I,e as R,c as P,d as Y,F as O,f as B}from"./useFloatingUI.BQ67YeUn.js";import{A as F}from"./index.s74VRsaB.js";import{m as M}from"./proxy.C2vk4wBE.js";import{S as z}from"./SearchDialog.hTsPPMtm.js";import"./_commonjsHelpers.CqkleIqs.js";import"./site.a4jwyKQn.js";import"./index.Bn74zGeF.js";import"./index.BFlOlsrl.js";import"./useKeyboardShortcut.DCroO9rU.js";import"./index.TWhk7goS.js";import"./useIsMounted.BG1lVfvv.js";import"./index.CTdVSFIz.js";import"./modal.BeECZm2d.js";import"./index.BHh4vvK5.js";import"./index.3whys8t3.js";function H(l={}){const{open:a,defaultOpen:n=!1,onChange:c}=l,o=a!==void 0,[e,i]=d.useState(n),f=o?a:e,r=d.useCallback(b=>{o||i(b),c?.(b)},[o,c]),t=d.useCallback(()=>{r(!f)},[f,r]),m=d.useCallback(()=>{r(!0)},[r]),p=d.useCallback(()=>{r(!1)},[r]);return{isOpen:f,toggle:t,open:m,close:p,setIsOpen:r}}function A(){const[l,a]=d.useState(()=>typeof document<"u"?document.documentElement.classList.contains("dark"):!1);d.useEffect(()=>{const o=document.documentElement;a(o.classList.contains("dark"));const e=new MutationObserver(i=>{for(const f of i)f.attributeName==="class"&&a(o.classList.contains("dark"))});return e.observe(o,{attributes:!0,attributeFilter:["class"]}),()=>e.disconnect()},[]);const n=d.useCallback(o=>{const e=document.documentElement,i=o?"dark":"light";e.classList.toggle("dark",o),e.dataset.theme=i,localStorage.setItem("theme",i)},[]),c=d.useCallback(()=>{const o=!l,e=document.documentElement;if(e.classList.add("theme-transition"),!document.startViewTransition){n(o),a(o),setTimeout(()=>{e.classList.remove("theme-transition")},100);return}document.startViewTransition(()=>{n(o),a(o)}).finished.finally(()=>{e.classList.remove("theme-transition")})},[l,n]);return{isDark:l,toggle:c}}function V({className:l}){const{isDark:a,toggle:n}=A(),c=()=>{n()},o=e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),n())};return s.jsxs("button",{className:`theme-toggle scale-80 cursor-pointer transition duration-300 hover:scale-90 ${l||""}`,tabIndex:0,"aria-label":"toggle theme",onKeyDown:o,type:"button",children:[s.jsxs("label",{className:"toggle block cursor-pointer","aria-label":"toggle theme",children:[s.jsx("input",{type:"checkbox",className:"hidden",checked:a,onChange:c}),s.jsx("div",{className:"toggle-indicator"})]}),s.jsx("style",{children:`
        :root {
          --theme-toggle-color: currentColor;
        }

        .theme-toggle {
          z-index: 10;
        }

        .toggle-indicator {
          border-radius: 50%;
          width: 36px;
          height: 36px;
          position: relative;
          box-shadow: inset 16px -16px 0 0 var(--theme-toggle-color, #ffbb52);
          transform: scale(1) rotate(-2deg);
          transition:
            box-shadow 0.5s ease 0s,
            transform 0.4s ease 0.1s;
        }

        .toggle-indicator:before {
          content: '';
          width: inherit;
          height: inherit;
          border-radius: inherit;
          position: absolute;
          left: 0;
          top: 0;
          background: transparent;
          transition: background 0.3s ease;
        }

        .toggle-indicator:after {
          content: '';
          width: 8px;
          height: 8px;
          border-radius: 50%;
          margin: -4px 0 0 -4px;
          position: absolute;
          top: 50%;
          left: 50%;
          box-shadow:
            0 -23px 0 var(--theme-toggle-color, #ffbb52),
            0 23px 0 var(--theme-toggle-color, #ffbb52),
            23px 0 0 var(--theme-toggle-color, #ffbb52),
            -23px 0 0 var(--theme-toggle-color, #ffbb52),
            15px 15px 0 var(--theme-toggle-color, #ffbb52),
            -15px 15px 0 var(--theme-toggle-color, #ffbb52),
            15px -15px 0 var(--theme-toggle-color, #ffbb52),
            -15px -15px 0 var(--theme-toggle-color, #ffbb52);
          transform: scale(0);
          transition: all 0.3s ease;
        }

        /* Dark mode (moon) */
        input:checked + .toggle-indicator {
          box-shadow: inset 32px -32px 0 0 var(--theme-background-color, #17181c);
          transform: scale(0.5) rotate(0deg);
          transition:
            transform 0.3s ease 0.1s,
            box-shadow 0.2s ease 0s;
        }

        input:checked + .toggle-indicator:before {
          background: var(--theme-toggle-color, #ffbb52);
          transition: background 0.3s ease 0.1s;
        }

        input:checked + .toggle-indicator:after {
          transform: scale(1.5);
          transition: transform 0.5s ease 0.15s;
        }
      `})]})}const W={scrollY:0,isBeyond:!1,direction:"none",isScrolling:!1};function $(l={}){const{triggerDistance:a=.45,isPixels:n=!1,throttleMs:c=80,skipFirstScroll:o=!0}=l;let e={scrollY:typeof window<"u"?window.scrollY:0,isBeyond:!1,direction:"none",isScrolling:!1},i=e.scrollY,f=o;const r=new Set;let t=0,m=null,p=null;const b=()=>n?a:(typeof window<"u"?window.innerHeight:800)*a,h=u=>{const g=e;if(e={...e,...u},g.scrollY!==e.scrollY||g.isBeyond!==e.isBeyond||g.direction!==e.direction||g.isScrolling!==e.isScrolling)for(const x of r)x()},v=()=>{const u=window.scrollY,g=b(),x=u>g;if(f){f=!1,h({scrollY:u,isBeyond:x,isScrolling:!0}),i=u;return}let y="none";u>i?y="down":u<i&&(y="up"),p&&clearTimeout(p),p=setTimeout(()=>{h({isScrolling:!1})},150),h({scrollY:u,isBeyond:x,direction:y,isScrolling:!0}),i=u},k=()=>{const u=Date.now();u-t>=c?(v(),t=u):(m&&clearTimeout(m),m=setTimeout(()=>{Date.now()-t>=c&&(v(),t=Date.now())},c-(u-t)))};return{subscribe:u=>{if(r.size===0&&typeof window<"u"){const g=window.scrollY,x=b();e={scrollY:g,isBeyond:g>x,direction:"none",isScrolling:!1},i=g,f=o,window.addEventListener("scroll",k,{passive:!0})}return r.add(u),()=>{r.delete(u),r.size===0&&typeof window<"u"&&(window.removeEventListener("scroll",k),m&&clearTimeout(m),p&&clearTimeout(p))}},getSnapshot:()=>e,getServerSnapshot:()=>W}}function K(l={}){const{triggerDistance:a,isPixels:n,throttleMs:c,skipFirstScroll:o}=l,e=d.useMemo(()=>$({triggerDistance:a,isPixels:n,throttleMs:c,skipFirstScroll:o}),[a,n,c,o]);return d.useSyncExternalStore(e.subscribe,e.getSnapshot,e.getServerSnapshot)}function U({children:l,render:a,open:n,placement:c,onOpenChange:o,className:e,offset:i=10,motionProps:f,trigger:r="click"}){const[t,m]=C({value:n,defaultValue:!1,onChange:o}),{refs:p,floatingStyles:b,context:h}=L({open:t,onOpenChange:m,placement:c,offset:i,transform:!1}),v=D(h,{enabled:r==="hover",delay:{open:0,close:j.duration.fast}}),k=I(h,{enabled:r==="click"}),{getReferenceProps:u,getFloatingProps:g}=R([v,k,P(h),Y(h)]);return s.jsxs(s.Fragment,{children:[d.cloneElement(l,u({ref:p.setReference,...l.props})),s.jsx(F,{children:t&&s.jsx(O,{children:s.jsx(B,{context:h,modal:!1,children:s.jsx(M.div,{className:w("z-10 rounded-ss-2xl rounded-ee-2xl bg-black/30 backdrop-blur-sm",e),initial:{opacity:0,scale:.85},animate:{opacity:1,scale:1,originY:0},exit:{opacity:0,scale:.85},transition:j.spring.popoverContent,style:{...b},...f,...g({ref:p.setFloating}),children:a({close:()=>m(!1)})})})})})]})}const _=E.memo(U),q=({item:l,className:a})=>{const{isOpen:n,setIsOpen:c}=H({defaultOpen:!1}),{name:o,icon:e,children:i}=l,f=d.useCallback(()=>s.jsx("div",{className:"nav-dropdown flex flex-col items-center",children:i?.length?i.map((r,t)=>s.jsx("a",{href:r.path,className:w("group px-4 py-2 text-base outline-hidden transition-colors duration-300 hover:bg-gradient-shoka-button",{"rounded-ss-2xl":t===0,"rounded-ee-2xl":t===i.length-1,"bg-gradient-shoka-button text-muted":window.location.pathname===r.path}),children:s.jsxs("div",{className:"flex items-center gap-2 text-white transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-white",children:[r.icon&&s.jsx(S,{icon:r.icon,className:"size-4"}),r.name]})},r.path)):null}),[i]);return s.jsx(_,{open:n,onOpenChange:c,placement:"bottom-start",trigger:"hover",render:f,children:s.jsxs("button",{type:"button",className:w("inline-flex h-10 items-center px-4 py-2 text-base tracking-wider","relative after:absolute after:bottom-1 after:left-1/2 after:h-0.5 after:w-0",'after:-translate-x-1/2 after:bg-white after:transition-all after:duration-300 after:content-[""]',a),"aria-expanded":n,"aria-haspopup":"true","aria-label":`${o}菜单`,children:[e&&s.jsx(S,{icon:e,className:"mr-1.5"}),o,s.jsx(S,{icon:"ri:arrow-drop-down-fill",className:w("absolute -right-1.5 size-6 transition-transform duration-300",{"rotate-180":n})})]})})},G=d.memo(q);function J({name:l}){return s.jsx(S,{icon:l,className:"mr-1.5 h-4 w-4"})}function Q({url:l,label:a,isActive:n,children:c}){return s.jsx("a",{href:l,"aria-label":a,className:w("relative flex items-center px-3 py-2 text-base tracking-wider","after:absolute after:bottom-1 after:left-1/2 after:block after:h-0.5 after:w-0 after:-translate-x-1/2 after:transition-all after:duration-300","hover:after:w-9/12",n&&"after:w-9/12"),children:c})}function ve({currentPath:l}){const{isBeyond:a,direction:n}=K({triggerDistance:.45,throttleMs:80}),[c,o]=d.useState(!1),e=d.useRef(null),i=d.useRef(!1),f=d.useRef(!0);d.useEffect(()=>{const t=()=>{const m=window.innerWidth<=992,p=window.location.pathname.startsWith("/post/");o(m&&p)};return t(),window.addEventListener("resize",t),()=>window.removeEventListener("resize",t)},[]),d.useEffect(()=>{const t=document.getElementById("site-header");t&&(a?t.classList.add("with-background"):t.classList.remove("with-background"))},[a]),d.useEffect(()=>{const t=document.getElementById("site-header"),m=document.getElementById("mobile-menu-container");if(f.current){f.current=!1;return}if(c){e.current&&clearTimeout(e.current),i.current=!0,t?.classList.remove("-translate-y-full"),m?.classList.remove("-translate-y-full"),e.current=setTimeout(()=>{i.current=!1},800);return}n==="down"?(t?.classList.add("-translate-y-full"),m?.classList.add("-translate-y-full")):n==="up"&&(t?.classList.remove("-translate-y-full"),m?.classList.remove("-translate-y-full"))},[n,c]),d.useEffect(()=>()=>{e.current&&clearTimeout(e.current)},[]);const r=N.filter(t=>(t.path,T.Weekly,!0));return s.jsxs("div",{className:"flex grow tablet:grow-0 items-center",children:[s.jsx("div",{className:"flex tablet:hidden grow items-center",children:r.map(t=>t.children?.length?s.jsx(G,{item:t},t.path??t.name):!t.path||!t.name?null:s.jsxs(Q,{url:t.path,label:t.name,isActive:t.path===l,children:[t.icon&&s.jsx(J,{name:t.icon}),t.name]},t.path))}),s.jsxs("div",{className:"ml-auto flex items-center gap-2",children:[s.jsx(z,{}),s.jsx(V,{})]})]})}export{ve as default};
