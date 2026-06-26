import{at as c,aU as z,ad as e,ai as H,ar as N,aZ as $,aj as U,aB as B,r as y}from"./iframe-yRFQ_7VC.js";import{p as P,X as G}from"./XDSMarkdown-C51mApFy.js";import{X as W}from"./XDSBadge-COTe2g1g.js";import{X as v}from"./XDSHeading---Kr4LhL.js";import"./preload-helper-Ct5FWWRu.js";import"./XDSCodeBlock-B5b8s25t.js";import"./highlightRanges-DQjygsEE.js";import"./XDSCheckboxListItem-G66nArwI.js";import"./XDSField-COi97ivg.js";import"./XDSFieldStatus-BgnciRVy.js";import"./XDSList-B0MkGqZF.js";import"./XDSListItem-C5CIKGjL.js";import"./XDSItem-CTSSy95c.js";import"./computeTargetAndRel-BlG0ENK0.js";import"./XDSCheckboxInput-C50y4c1Q.js";import"./XDSBlockquote-kq4Y3FPM.js";import"./XDSTable-tIgxviJL.js";import"./XDSEmptyState-CWiMy9oI.js";import"./useXDSStreamingText-CdCvbZFo.js";import"./XDSCitation-DzquwPCW.js";import"./XDSCode-CEZ5ThnD.js";function Y(t){let n=t?.parentElement??null;for(;n!=null;){const i=window.getComputedStyle(n).overflowY;if((i==="auto"||i==="scroll"||i==="overlay")&&n.scrollHeight>n.clientHeight)return n;n=n.parentElement}return null}function _({activeId:t,items:n,onActiveIdChange:s,rootRef:i}){const l=t!==void 0,[k,b]=c.useState(n[0]?.id),C=c.useRef(new Set),M=c.useRef(new Map),g=c.useRef(t),S=n.map(d=>d.id).join(`
`);return g.current=l?t:k,c.useEffect(()=>{if(l||typeof IntersectionObserver>"u")return;const d=n.map(r=>document.getElementById(r.id)).filter(r=>r!=null);if(d.length===0)return;const p=C.current,x=M.current,o=r=>{g.current!==r&&(g.current=r,b(r),s?.(r))},a=()=>{let r,m=Number.POSITIVE_INFINITY;for(const u of p){const R=x.get(u)??Number.POSITIVE_INFINITY;R<m&&(m=R,r=u)}r!=null&&o(r)},f=new IntersectionObserver(r=>{for(const m of r){const u=m.target.id;x.set(u,m.boundingClientRect.top),m.isIntersecting?p.add(u):p.delete(u)}a()},{root:Y(i.current),threshold:0});for(const r of d)f.observe(r);return()=>{f.disconnect(),p.clear(),x.clear()}},[l,S,n,s,i]),[l?t:k,d=>{l||b(d),s?.(d)}]}const w={root:{kMwMTN:"xdsv1l7n4",kGuDYH:"xds141an7d",kLWn49:"xds1ltkj2j",kzqmXN:"xdsh8yej3",$$css:!0},link:{kGNEyG:"xds6s0dn4",kaIpWk:"xdsx3sua9",kB7OPa:"xds9f619",kMwMTN:"xds1heor9g",kkrTdU:"xds1ypdohk",k1xSpc:"xds78zum5",kAzted:"xdsimsjs8",kI3sdo:"xds1a2a7pz",k8WAf4:"xdsu0wf1k",kwRFfy:"xds1djylfy",kVAEAm:"xds1n2onr6",k9WMMc:"xds1yc453h",kybGjl:"xds1hl2dhg",kIyJzY:"xdsuedmi6",k1ekBW:"xdss2xxs2",kAMwcw:"xdslr8y92",kzqmXN:"xdsh8yej3",kHE3J0:"xdse9uy6x",krNwJM:"xds140uwzg",kSReZ0:"xdsyxi2l3",k3Woio:"xds17nn4n9",kiEn40:"xds7s97pk",$$css:!0},activeLink:{kMwMTN:"xdsjse4m1",k63SB2:"xds1e4wzip",$$css:!0},activeIndicator:{kLkRvE:"xds1tzqye7",kPB484:"xdsmwhqxd",kCyh2J:null,kgXx4x:null,kKGWhT:null,kBjukC:null,kGBI9E:null,ks091d:null,kLSKZI:null,k9BEaU:null,k5Ofw7:"xdsdun358",kgeoSG:"xds1cpjm7i",kSJ0CW:"xds1682cnc",k75S9Q:null,kLBHJ3:null,kEoFBp:"xds1hmns74",k96MEf:"xds1pyfput",kOlAkY:"xdsjuy2up",$$css:!0}},J={kZCmMZ:"xdsnvo3vl",kE3dHu:"",kpe85a:"",$$css:!0},K={levelIndent:t=>[J,{"--x-paddingInlineStart":(n=>typeof n=="number"?n+"px":n??void 0)(`calc(${Math.max(0,Math.min(5,t-1))} * ${B["--spacing-4"]} + ${B["--spacing-2"]})`)}]};function h({items:t,activeId:n,onActiveIdChange:s,label:i="Table of contents",xstyle:l,className:k,style:b,ref:C,"data-testid":M,...g}){const S=c.useRef(null),E=z(),[d,p]=_({activeId:n,items:t,onActiveIdChange:s,rootRef:S}),x=o=>a=>{const f=document.getElementById(o);p(o),!(f==null||a.defaultPrevented||a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)&&(a.preventDefault(),window.history.pushState(null,"",`#${o}`),f.scrollIntoView({behavior:"smooth",block:"start"}))};return e.jsx("nav",{...g,ref:U(S,C),"aria-label":i,"data-testid":M,...H($("outline"),N(w.root,l),k,b),children:e.jsx("ul",{className:"xds3ct3a4 xds1ghz6dp xds1717udv",children:t.map(o=>{const a=o.id===d;return e.jsx("li",{className:"xds3ct3a4 xds1ghz6dp xds1717udv",children:e.jsx(E,{href:`#${o.id}`,"aria-current":a?"true":void 0,onClick:x(o.id),...H($("outline-item",{active:a?"active":null,level:o.level}),N(w.link,K.levelIndent(o.level),a&&w.activeLink,a&&w.activeIndicator)),children:e.jsx("span",{className:"xdsb3r6kr xdslyipyv xdsuxw1ft",children:o.label})})},o.id)})})})}h.displayName="XDSOutline";h.__docgenInfo={description:"A table-of-contents navigation component for document headings.\n\nXDSOutline accepts a flat `items` array and renders anchor links with\nindentation based on each heading level. When `activeId` is omitted, it\nobserves heading elements by id and marks the topmost visible heading active.",methods:[],displayName:"XDSOutline",props:{xstyle:{required:!1,tsType:{name:"StyleXStyles"},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLElement>",elements:[{name:"HTMLElement"}]},description:"Ref forwarded to the root nav element."},items:{required:!0,tsType:{name:"Array",elements:[{name:"OutlineItem"}],raw:"OutlineItem[]"},description:"Ordered list of heading items to render."},activeId:{required:!1,tsType:{name:"string"},description:"ID of the currently active item. When provided, disables built-in scroll-spy."},onActiveIdChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:"Called when the active item changes from scroll-spy or click."},label:{required:!1,tsType:{name:"string"},description:"Accessible label for the nav landmark. @default 'Table of contents'",defaultValue:{value:"'Table of contents'",computed:!1}},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing frameworks."}},composes:["Omit"]};function q(t){return t.map(n=>{switch(n.type){case"text":case"code":return n.content;case"bold":case"italic":case"strikethrough":case"link":return q(n.children);case"image":return n.alt;case"citation":case"break":return""}}).join("")}function V(t){return t.trim().toLowerCase().replace(/['"]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}function Z(t,n){const s=t||"section",i=n.get(s)??0;return n.set(s,i+1),i===0?s:`${s}-${i}`}function Q(t){const n=new Map;return P(t).filter(s=>s.type==="heading").map(s=>{const i=q(s.children).trim();return{id:Z(V(i),n),label:i,level:s.level}})}function ee(t){return c.useMemo(()=>Q(t),[t])}function O(t){return t==null?[]:Array.from(t.querySelectorAll("h1,h2,h3,h4,h5,h6")).map(n=>{const s=Number(n.tagName.slice(1)),i=n.textContent?.trim()??"";return{id:n.id,label:i,level:s}}).filter(n=>n.id!==""&&n.label!=="")}function te(t){const[n,s]=c.useState(()=>O(t.current));return c.useEffect(()=>{const i=t.current;if(s(O(i)),i==null||typeof MutationObserver>"u")return;const l=new MutationObserver(()=>{s(O(i))});return l.observe(i,{childList:!0,subtree:!0,characterData:!0,attributes:!0,attributeFilter:["id"]}),()=>{l.disconnect()}},[t]),n}const Te={title:"Core/Outline",component:h,tags:["autodocs"],argTypes:{label:{control:"text",description:"Accessible label for the nav landmark"},activeId:{control:"text",description:"Controlled active item id"}}},A=[{id:"overview",label:"Overview",level:2},{id:"installation",label:"Installation",level:2},{id:"theming",label:"Theming",level:2},{id:"tokens",label:"Tokens",level:3},{id:"component-overrides",label:"Component overrides",level:3},{id:"accessibility",label:"Accessibility",level:2}],L=["## Overview","","XDS gives teams a consistent foundation for internal product surfaces.","","## Installation","","Install the package and wrap the app in an XDSTheme provider.","","### Package setup","","Import components from their component subpaths for clear ownership.","","### Theme setup","","Use a built theme in production so component overrides are present at first paint.","","## Accessibility","","Components include semantic roles, labels, and focus behavior where applicable."].join(`
`);function F(t){return typeof t=="string"||typeof t=="number"?String(t):Array.isArray(t)?t.map(F).join(""):""}function ne(t){return t.trim().toLowerCase().replace(/['"]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")||"section"}const T={args:{items:A}},j={args:{items:A,activeId:"tokens"}},I={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"minmax(0, 1fr) 220px",gap:32,maxWidth:960},children:[e.jsxs("article",{style:{display:"grid",gap:24},children:[e.jsxs("section",{children:[e.jsx("h2",{id:"overview",children:"Overview"}),e.jsx("p",{children:"XDS components provide consistent interaction, styling, and theme behavior for internal tools."})]}),e.jsxs("section",{children:[e.jsx("h2",{id:"installation",children:"Installation"}),e.jsx("p",{children:"Install the package, wrap the app with XDSTheme, and import components from their subpaths."})]}),e.jsxs("section",{children:[e.jsx("h2",{id:"theming",children:"Theming"}),e.jsx("p",{children:"Themes define semantic tokens and component overrides without changing app code."}),e.jsx("h3",{id:"tokens",children:"Tokens"}),e.jsx("p",{children:"Use semantic color, spacing, typography, radius, elevation, and motion tokens."}),e.jsx("h3",{id:"component-overrides",children:"Component overrides"}),e.jsx("p",{children:"Component overrides target the stable XDS selector surface emitted by each component: xds-* classes plus data-* prop reflections."})]}),e.jsxs("section",{children:[e.jsx("h2",{id:"accessibility",children:"Accessibility"}),e.jsx("p",{children:"Components include landmark, keyboard, focus, and ARIA behavior where applicable."})]})]}),e.jsx("aside",{style:{position:"sticky",top:24,alignSelf:"start"},children:e.jsx(h,{items:A})})]})},D={render:()=>{const t=ee(L);return e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"minmax(0, 1fr) 220px",gap:32,maxWidth:960},children:[e.jsx(G,{components:{heading:({level:n,children:s})=>{const i=`h${n}`;return e.jsx(i,{id:ne(F(s)),children:s})}},children:L}),e.jsx("aside",{style:{position:"sticky",top:24,alignSelf:"start"},children:e.jsx(h,{items:t})})]})}},X={render:()=>{const t=c.useRef(null),n=te(t);return e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"minmax(0, 1fr) 220px",gap:32,maxWidth:960},children:[e.jsxs("article",{ref:t,style:{display:"grid",gap:24},children:[e.jsxs("section",{children:[e.jsx(v,{id:"account-settings",level:2,children:"Account settings"}),e.jsx(y,{type:"body",children:"Manage profile, authentication, and workspace preferences."}),e.jsxs("div",{style:{display:"flex",gap:8,marginTop:12},children:[e.jsx(W,{variant:"success",label:"Active"}),e.jsx(W,{variant:"neutral",label:"Workspace"})]})]}),e.jsxs("section",{children:[e.jsx(v,{id:"notifications",level:2,children:"Notifications"}),e.jsx(y,{type:"body",children:"Choose which product events should notify the team."}),e.jsx(v,{id:"email-alerts",level:3,children:"Email alerts"}),e.jsx(y,{type:"body",children:"Use email for low-frequency summaries and approvals."}),e.jsx(v,{id:"push-alerts",level:3,children:"Push alerts"}),e.jsx(y,{type:"body",children:"Use push for time-sensitive updates and incidents."})]}),e.jsxs("section",{children:[e.jsx(v,{id:"billing",level:2,children:"Billing"}),e.jsx(y,{type:"body",children:"Review invoices, payment methods, and usage limits."})]})]}),e.jsx("aside",{style:{position:"sticky",top:24,alignSelf:"start"},children:e.jsx(h,{items:n})})]})}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    items: outlineItems
  }
}`,...T.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    items: outlineItems,
    activeId: 'tokens'
  }
}`,...j.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1fr) 220px',
    gap: 32,
    maxWidth: 960
  }}>
      <article style={{
      display: 'grid',
      gap: 24
    }}>
        <section>
          <h2 id="overview">Overview</h2>
          <p>
            XDS components provide consistent interaction, styling, and theme
            behavior for internal tools.
          </p>
        </section>
        <section>
          <h2 id="installation">Installation</h2>
          <p>
            Install the package, wrap the app with XDSTheme, and import
            components from their subpaths.
          </p>
        </section>
        <section>
          <h2 id="theming">Theming</h2>
          <p>
            Themes define semantic tokens and component overrides without
            changing app code.
          </p>
          <h3 id="tokens">Tokens</h3>
          <p>
            Use semantic color, spacing, typography, radius, elevation, and
            motion tokens.
          </p>
          <h3 id="component-overrides">Component overrides</h3>
          <p>
            Component overrides target the stable XDS selector surface emitted
            by each component: xds-* classes plus data-* prop reflections.
          </p>
        </section>
        <section>
          <h2 id="accessibility">Accessibility</h2>
          <p>
            Components include landmark, keyboard, focus, and ARIA behavior
            where applicable.
          </p>
        </section>
      </article>
      <aside style={{
      position: 'sticky',
      top: 24,
      alignSelf: 'start'
    }}>
        <XDSOutline items={outlineItems} />
      </aside>
    </div>
}`,...I.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => {
    const items = useOutlineFromMarkdown(markdownContent);
    return <div style={{
      display: 'grid',
      gridTemplateColumns: 'minmax(0, 1fr) 220px',
      gap: 32,
      maxWidth: 960
    }}>
        <XDSMarkdown components={{
        heading: ({
          level,
          children
        }) => {
          const Tag = \`h\${level}\` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
          return <Tag id={storySlug(nodeText(children))}>{children}</Tag>;
        }
      }}>
          {markdownContent}
        </XDSMarkdown>
        <aside style={{
        position: 'sticky',
        top: 24,
        alignSelf: 'start'
      }}>
          <XDSOutline items={items} />
        </aside>
      </div>;
  }
}`,...D.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => {
    const contentRef = useRef<HTMLElement | null>(null);
    const items = useOutlineFromDOM(contentRef);
    return <div style={{
      display: 'grid',
      gridTemplateColumns: 'minmax(0, 1fr) 220px',
      gap: 32,
      maxWidth: 960
    }}>
        <article ref={contentRef} style={{
        display: 'grid',
        gap: 24
      }}>
          <section>
            <XDSHeading id="account-settings" level={2}>
              Account settings
            </XDSHeading>
            <XDSText type="body">
              Manage profile, authentication, and workspace preferences.
            </XDSText>
            <div style={{
            display: 'flex',
            gap: 8,
            marginTop: 12
          }}>
              <XDSBadge variant="success" label="Active" />
              <XDSBadge variant="neutral" label="Workspace" />
            </div>
          </section>
          <section>
            <XDSHeading id="notifications" level={2}>
              Notifications
            </XDSHeading>
            <XDSText type="body">
              Choose which product events should notify the team.
            </XDSText>
            <XDSHeading id="email-alerts" level={3}>
              Email alerts
            </XDSHeading>
            <XDSText type="body">
              Use email for low-frequency summaries and approvals.
            </XDSText>
            <XDSHeading id="push-alerts" level={3}>
              Push alerts
            </XDSHeading>
            <XDSText type="body">
              Use push for time-sensitive updates and incidents.
            </XDSText>
          </section>
          <section>
            <XDSHeading id="billing" level={2}>
              Billing
            </XDSHeading>
            <XDSText type="body">
              Review invoices, payment methods, and usage limits.
            </XDSText>
          </section>
        </article>
        <aside style={{
        position: 'sticky',
        top: 24,
        alignSelf: 'start'
      }}>
          <XDSOutline items={items} />
        </aside>
      </div>;
  }
}`,...X.parameters?.docs?.source}}};const je=["Basic","Controlled","WithDocument","ExtractFromMarkdown","ExtractFromHTML"];export{T as Basic,j as Controlled,X as ExtractFromHTML,D as ExtractFromMarkdown,I as WithDocument,je as __namedExportsOrder,Te as default};
