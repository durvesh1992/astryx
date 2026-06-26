import{at as c,aT as X,ad as e,ai as q,ar as L,a_ as D,aj as Z,T as f}from"./iframe-BsyQNsjg.js";import{p as V,M as G}from"./Markdown-BPKYfmUZ.js";import{B as F}from"./Badge-Bk6Kqozi.js";import{H as v}from"./Heading-DrDMw6ge.js";import"./preload-helper-Ct5FWWRu.js";import"./CodeBlock-D6wOP1I-.js";import"./highlightRanges-EIPCprQf.js";import"./CheckboxListItem-rav7Z1RX.js";import"./Field-CwBWJ3UK.js";import"./FieldStatus-CpbQmNrj.js";import"./List-BvnhqnJa.js";import"./ListItem-BbfLZ1zc.js";import"./Item-ls6cDVeU.js";import"./computeTargetAndRel-BlG0ENK0.js";import"./CheckboxInput-A4vOtGqU.js";import"./Blockquote-qTccG1Qt.js";import"./Table-DbWwTk6p.js";import"./EmptyState-B2QAVwKi.js";import"./useStreamingText-CKZh63Ww.js";import"./Citation-jIUfuAuS.js";import"./Code-DUs3QDLC.js";function _(t){let s=t?.parentElement??null;for(;s!=null;){const r=window.getComputedStyle(s).overflowY;if((r==="auto"||r==="scroll"||r==="overlay")&&s.scrollHeight>s.clientHeight)return s;s=s.parentElement}return null}function K({activeId:t,items:s,onActiveIdChange:n,rootRef:r}){const o=t!==void 0,[k,w]=c.useState(s[0]?.id),E=c.useRef(new Set),H=c.useRef(new Map),h=c.useRef(t),R=s.map(d=>d.id).join(`
`);return h.current=o?t:k,c.useEffect(()=>{if(o||typeof IntersectionObserver>"u")return;const d=s.map(i=>document.getElementById(i.id)).filter(i=>i!=null);if(d.length===0)return;const u=E.current,x=H.current,N=i=>{h.current!==i&&(h.current=i,w(i),n?.(i))},l=()=>{let i,m=Number.POSITIVE_INFINITY;for(const y of u){const z=x.get(y)??Number.POSITIVE_INFINITY;z<m&&(m=z,i=y)}i!=null&&N(i)},a=new IntersectionObserver(i=>{for(const m of i){const y=m.target.id;x.set(y,m.boundingClientRect.top),m.isIntersecting?u.add(y):u.delete(y)}l()},{root:_(r.current),threshold:0});for(const i of d)a.observe(i);return()=>{a.disconnect(),u.clear(),x.clear()}},[o,R,s,n,r]),[o?t:k,d=>{o||w(d),n?.(d)}]}const j={root:{k1xSpc:"astryx78zum5",kXwgrk:"astryx1q0g3np",kVAEAm:"astryx1n2onr6",kOIVth:"astryx1lsbc85",kzqmXN:"astryxh8yej3",$$css:!0},activeAnchor:{k48fcG:"astryx7dpabl",$$css:!0},link:{kGNEyG:"astryx6s0dn4",kaIpWk:"astryxh6dtrn",kB7OPa:"astryx9f619",kMwMTN:"astryxv1l7n4",kkrTdU:"astryx1ypdohk",k1xSpc:"astryx78zum5",k63SB2:"astryx1sodnla",kI3sdo:"astryx1a2a7pz",kVAEAm:"astryx1n2onr6",k9WMMc:"astryx1yc453h",kybGjl:"astryx1hl2dhg",kIyJzY:"astryxuedmi6",k1ekBW:"astryxs2xxs2",kAMwcw:"astryxlr8y92",kzqmXN:"astryxh8yej3",kGuDYH:"astryxjm74w1",kLWn49:"astryxw6l6zx",kHE3J0:"astryxe9uy6x",krNwJM:"astryx140uwzg",kSReZ0:"astryxyxi2l3",k3Woio:"astryx17nn4n9",kiEn40:"astryx7s97pk",$$css:!0},activeLink:{kMwMTN:"astryx1tgivj0",k63SB2:"astryx2mo6ok",$$css:!0}},Y={compact:{k8WAf4:"astryxu0wf1k",kLKAdn:null,kGO01o:null,kwRFfy:"astryx1djylfy",kE3dHu:null,kpe85a:null,$$css:!0},default:{k8WAf4:"astryxce4md1",kLKAdn:null,kGO01o:null,kwRFfy:"astryx1djylfy",kE3dHu:null,kpe85a:null,$$css:!0}},T={level1:{kZCmMZ:"astryx126nfab",kE3dHu:null,kpe85a:null,$$css:!0},level2:{kZCmMZ:"astryxchaq28",kE3dHu:null,kpe85a:null,$$css:!0},level3:{kZCmMZ:"astryxc8afjc",kE3dHu:null,kpe85a:null,$$css:!0},level4:{kZCmMZ:"astryx19b7t93",kE3dHu:null,kpe85a:null,$$css:!0}};function J(t){switch(Math.max(1,Math.min(4,t-1||1))){case 1:return T.level1;case 2:return T.level2;case 3:return T.level3;default:return T.level4}}function p({items:t,activeId:s,onActiveIdChange:n,label:r="Table of contents",density:o="default",xstyle:k,className:w,style:E,ref:H,"data-testid":h,...R}){const $=c.useRef(null),d=X(),[u,x]=K({activeId:s,items:t,onActiveIdChange:n,rootRef:$}),N=l=>a=>{const i=document.getElementById(l);x(l),!(i==null||a.defaultPrevented||a.metaKey||a.altKey||a.ctrlKey||a.shiftKey)&&(a.preventDefault(),window.history.pushState(null,"",`#${l}`),i.scrollIntoView({behavior:"smooth",block:"start"}))};return e.jsxs("nav",{...R,ref:Z($,H),"aria-label":r,"data-testid":h,...q(D("outline",{density:o}),L(j.root,k),w,E),children:[e.jsx("ul",{className:"astryx78zum5 astryxdt5ytf astryx1lsbc85 astryx1ghz6dp astryx1717udv astryxe8uvvx astryx98rzlu astryxeuugli",role:"list",children:t.map(l=>{const a=l.id===u;return e.jsx("li",{className:"astryx3ct3a4 astryx1ghz6dp astryx1717udv",role:"listitem",children:e.jsx(d,{href:`#${l.id}`,"aria-current":a?"true":void 0,onClick:N(l.id),...q(D("outline-item",{active:a?"active":null,level:l.level}),L(j.link,Y[o],J(l.level),a&&j.activeLink,a&&j.activeAnchor)),children:e.jsx("span",{className:"astryxb3r6kr astryxlyipyv astryxuxw1ft",children:l.label})})},l.id)})}),e.jsx("div",{className:"astryx1n2onr6 astryxfo62xy astryx2lah0s astryx1clqncf","aria-hidden":"true",children:e.jsx("span",{className:"astryx10l6tqk astryx13vifvy astryx1ey2m1c astryx1o0tod astryxfo62xy astryx1m4xfpy astryxjspbzw astryx47corl"})}),e.jsx("span",{...q(D("outline-indicator"),{className:"astryx10l6tqk astryx1o0tod astryxfo62xy astryxowkcby astryxjspbzw astryx47corl astryx1vjfegm astryx1tsffl5 astryx1ltwjim astryx1qjb5ga astryx1xuz8iz astryxkvfbh3 astryxlr8y92"}),"aria-hidden":"true"})]})}p.displayName="Outline";p.__docgenInfo={description:`A table-of-contents navigation component for document headings.

Outline accepts a flat \`items\` array and renders anchor links with
indentation based on each heading level. Features a sliding indicator
track that animates to the active item.

When \`activeId\` is omitted, it observes heading elements by id and marks
the topmost visible heading active.

@example
\`\`\`
<Outline
  items={[
    {id: 'intro', label: 'Introduction', level: 1},
    {id: 'features', label: 'Features', level: 2},
    {id: 'api', label: 'API Reference', level: 1},
  ]}
/>
\`\`\``,methods:[],displayName:"Outline",props:{xstyle:{required:!1,tsType:{name:"StyleXStyles"},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLElement>",elements:[{name:"HTMLElement"}]},description:"Ref forwarded to the root nav element."},items:{required:!0,tsType:{name:"Array",elements:[{name:"OutlineItem"}],raw:"OutlineItem[]"},description:"Ordered list of heading items to render."},activeId:{required:!1,tsType:{name:"string"},description:"ID of the currently active item. When provided, disables built-in scroll-spy."},onActiveIdChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:"Called when the active item changes from scroll-spy or click."},label:{required:!1,tsType:{name:"string"},description:"Accessible label for the nav landmark. @default 'Table of contents'",defaultValue:{value:"'Table of contents'",computed:!1}},density:{required:!1,tsType:{name:"union",raw:"'default' | 'compact'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'compact'"}]},description:`Density variant controlling item padding.
- 'default': Standard spacing (default)
- 'compact': Reduced spacing for dense UIs
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing frameworks."}},composes:["Omit"]};function U(t){return t.map(s=>{switch(s.type){case"text":case"code":return s.content;case"bold":case"italic":case"strikethrough":case"link":return U(s.children);case"image":return s.alt;case"citation":case"break":return""}}).join("")}function Q(t){return t.trim().toLowerCase().replace(/['"]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}function ee(t,s){const n=t||"section",r=s.get(n)??0;return s.set(n,r+1),r===0?n:`${n}-${r}`}function te(t){const s=new Map;return V(t).filter(n=>n.type==="heading").map(n=>{const r=U(n.children).trim();return{id:ee(Q(r),s),label:r,level:n.level}})}function se(t){return c.useMemo(()=>te(t),[t])}function W(t){return t==null?[]:Array.from(t.querySelectorAll("h1,h2,h3,h4,h5,h6")).map(s=>{const n=Number(s.tagName.slice(1)),r=s.textContent?.trim()??"";return{id:s.id,label:r,level:n}}).filter(s=>s.id!==""&&s.label!=="")}function ne(t){const[s,n]=c.useState(()=>W(t.current));return c.useEffect(()=>{const r=t.current;if(n(W(r)),r==null||typeof MutationObserver>"u")return;const o=new MutationObserver(()=>{n(W(r))});return o.observe(r,{childList:!0,subtree:!0,characterData:!0,attributes:!0,attributeFilter:["id"]}),()=>{o.disconnect()}},[t]),s}const Se={title:"Core/Outline",component:p,tags:["autodocs"],argTypes:{label:{control:"text",description:"Accessible label for the nav landmark"},activeId:{control:"text",description:"Controlled active item id"},density:{control:"radio",options:["default","compact"],description:"Density variant"}}},O=[{id:"overview",label:"Overview",level:2},{id:"installation",label:"Installation",level:2},{id:"theming",label:"Theming",level:2},{id:"tokens",label:"Tokens",level:3},{id:"component-overrides",label:"Component overrides",level:3},{id:"accessibility",label:"Accessibility",level:2}],B=["## Overview","","XDS gives teams a consistent foundation for internal product surfaces.","","## Installation","","Install the package and wrap the app in an Theme provider.","","### Package setup","","Import components from their component subpaths for clear ownership.","","### Theme setup","","Use a built theme in production so component overrides are present at first paint.","","## Accessibility","","Components include semantic roles, labels, and focus behavior where applicable."].join(`
`);function P(t){return typeof t=="string"||typeof t=="number"?String(t):Array.isArray(t)?t.map(P).join(""):""}function re(t){return t.trim().toLowerCase().replace(/['\u201C\u201D"]/g,"").replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")||"section"}const I={args:{items:O}},S={args:{items:O,activeId:"tokens"}},g={args:{items:O,activeId:"installation",density:"compact"}},C={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"minmax(0, 1fr) 220px",gap:32,maxWidth:960},children:[e.jsxs("article",{style:{display:"grid",gap:24},children:[e.jsxs("section",{children:[e.jsx("h2",{id:"overview",children:"Overview"}),e.jsx("p",{children:"XDS components provide consistent interaction, styling, and theme behavior for internal tools."})]}),e.jsxs("section",{children:[e.jsx("h2",{id:"installation",children:"Installation"}),e.jsx("p",{children:"Install the package, wrap the app with Theme, and import components from their subpaths."})]}),e.jsxs("section",{children:[e.jsx("h2",{id:"theming",children:"Theming"}),e.jsx("p",{children:"Themes define semantic tokens and component overrides without changing app code."}),e.jsx("h3",{id:"tokens",children:"Tokens"}),e.jsx("p",{children:"Use semantic color, spacing, typography, radius, elevation, and motion tokens."}),e.jsx("h3",{id:"component-overrides",children:"Component overrides"}),e.jsx("p",{children:"Component overrides target the stable XDS selector surface emitted by each component: xds-* classes plus data-* prop reflections."})]}),e.jsxs("section",{children:[e.jsx("h2",{id:"accessibility",children:"Accessibility"}),e.jsx("p",{children:"Components include landmark, keyboard, focus, and ARIA behavior where applicable."})]})]}),e.jsx("aside",{style:{position:"sticky",top:24,alignSelf:"start"},children:e.jsx(p,{items:O})})]})},M={render:()=>{const t=se(B);return e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"minmax(0, 1fr) 220px",gap:32,maxWidth:960},children:[e.jsx(G,{components:{heading:({level:s,children:n})=>{const r=`h${s}`;return e.jsx(r,{id:re(P(n)),children:n})}},children:B}),e.jsx("aside",{style:{position:"sticky",top:24,alignSelf:"start"},children:e.jsx(p,{items:t})})]})}},A={render:()=>{const t=c.useRef(null),s=ne(t);return e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"minmax(0, 1fr) 220px",gap:32,maxWidth:960},children:[e.jsxs("article",{ref:t,style:{display:"grid",gap:24},children:[e.jsxs("section",{children:[e.jsx(v,{id:"account-settings",level:2,children:"Account settings"}),e.jsx(f,{type:"body",children:"Manage profile, authentication, and workspace preferences."}),e.jsxs("div",{style:{display:"flex",gap:8,marginTop:12},children:[e.jsx(F,{variant:"success",label:"Active"}),e.jsx(F,{variant:"neutral",label:"Workspace"})]})]}),e.jsxs("section",{children:[e.jsx(v,{id:"notifications",level:2,children:"Notifications"}),e.jsx(f,{type:"body",children:"Choose which product events should notify the team."}),e.jsx(v,{id:"email-alerts",level:3,children:"Email alerts"}),e.jsx(f,{type:"body",children:"Use email for low-frequency summaries and approvals."}),e.jsx(v,{id:"push-alerts",level:3,children:"Push alerts"}),e.jsx(f,{type:"body",children:"Use push for time-sensitive updates and incidents."})]}),e.jsxs("section",{children:[e.jsx(v,{id:"billing",level:2,children:"Billing"}),e.jsx(f,{type:"body",children:"Review invoices, payment methods, and usage limits."})]})]}),e.jsx("aside",{style:{position:"sticky",top:24,alignSelf:"start"},children:e.jsx(p,{items:s})})]})}},b={render:()=>{const t=[{id:"chapter-1",label:"Chapter 1",level:1},{id:"section-1-1",label:"Section 1.1",level:2},{id:"subsection-1-1-1",label:"Subsection 1.1.1",level:3},{id:"subsection-1-1-2",label:"Subsection 1.1.2",level:3},{id:"section-1-2",label:"Section 1.2",level:2},{id:"chapter-2",label:"Chapter 2",level:1},{id:"section-2-1",label:"Section 2.1",level:2}];return e.jsx("div",{style:{width:240},children:e.jsx(p,{items:t,activeId:"subsection-1-1-1"})})}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    items: outlineItems
  }
}`,...I.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    items: outlineItems,
    activeId: 'tokens'
  }
}`,...S.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    items: outlineItems,
    activeId: 'installation',
    density: 'compact'
  }
}`,...g.parameters?.docs?.source},description:{story:"Compact density variant — reduced spacing for dense UIs",...g.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
            Install the package, wrap the app with Theme, and import components
            from their subpaths.
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
        <Outline items={outlineItems} />
      </aside>
    </div>
}`,...C.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => {
    const items = useOutlineFromMarkdown(markdownContent);
    return <div style={{
      display: 'grid',
      gridTemplateColumns: 'minmax(0, 1fr) 220px',
      gap: 32,
      maxWidth: 960
    }}>
        <Markdown components={{
        heading: ({
          level,
          children
        }) => {
          const Tag = \`h\${level}\` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
          return <Tag id={storySlug(nodeText(children))}>{children}</Tag>;
        }
      }}>
          {markdownContent}
        </Markdown>
        <aside style={{
        position: 'sticky',
        top: 24,
        alignSelf: 'start'
      }}>
          <Outline items={items} />
        </aside>
      </div>;
  }
}`,...M.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
            <Heading id="account-settings" level={2}>
              Account settings
            </Heading>
            <Text type="body">
              Manage profile, authentication, and workspace preferences.
            </Text>
            <div style={{
            display: 'flex',
            gap: 8,
            marginTop: 12
          }}>
              <Badge variant="success" label="Active" />
              <Badge variant="neutral" label="Workspace" />
            </div>
          </section>
          <section>
            <Heading id="notifications" level={2}>
              Notifications
            </Heading>
            <Text type="body">
              Choose which product events should notify the team.
            </Text>
            <Heading id="email-alerts" level={3}>
              Email alerts
            </Heading>
            <Text type="body">
              Use email for low-frequency summaries and approvals.
            </Text>
            <Heading id="push-alerts" level={3}>
              Push alerts
            </Heading>
            <Text type="body">
              Use push for time-sensitive updates and incidents.
            </Text>
          </section>
          <section>
            <Heading id="billing" level={2}>
              Billing
            </Heading>
            <Text type="body">
              Review invoices, payment methods, and usage limits.
            </Text>
          </section>
        </article>
        <aside style={{
        position: 'sticky',
        top: 24,
        alignSelf: 'start'
      }}>
          <Outline items={items} />
        </aside>
      </div>;
  }
}`,...A.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const items: OutlineItem[] = [{
      id: 'chapter-1',
      label: 'Chapter 1',
      level: 1
    }, {
      id: 'section-1-1',
      label: 'Section 1.1',
      level: 2
    }, {
      id: 'subsection-1-1-1',
      label: 'Subsection 1.1.1',
      level: 3
    }, {
      id: 'subsection-1-1-2',
      label: 'Subsection 1.1.2',
      level: 3
    }, {
      id: 'section-1-2',
      label: 'Section 1.2',
      level: 2
    }, {
      id: 'chapter-2',
      label: 'Chapter 2',
      level: 1
    }, {
      id: 'section-2-1',
      label: 'Section 2.1',
      level: 2
    }];
    return <div style={{
      width: 240
    }}>
        <Outline items={items} activeId="subsection-1-1-1" />
      </div>;
  }
}`,...b.parameters?.docs?.source},description:{story:"Deep nesting with multiple indent levels",...b.parameters?.docs?.description}}};const Ce=["Basic","Controlled","Compact","WithDocument","ExtractFromMarkdown","ExtractFromHTML","DeepNesting"];export{I as Basic,g as Compact,S as Controlled,b as DeepNesting,A as ExtractFromHTML,M as ExtractFromMarkdown,C as WithDocument,Ce as __namedExportsOrder,Se as default};
