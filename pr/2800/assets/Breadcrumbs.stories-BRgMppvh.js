import{at as m,ad as e,ai as H,ar as M,aZ as R,aU as $,aj as E}from"./iframe-yRFQ_7VC.js";import{F as L}from"./HomeIcon-zfW6wt4l.js";import{F}from"./FolderIcon-DsMd81hJ.js";import{F as _}from"./Cog6ToothIcon-FIJug-Ow.js";import"./preload-helper-Ct5FWWRu.js";const T=m.createContext({variant:"default",separator:"/"});T.displayName="BreadcrumbContext";const G={root:{k1xSpc:"xds1lliihq",$$css:!0}};function t({children:s,separator:u="/",variant:d="default",xstyle:l,className:c,style:p,label:h="Breadcrumb",ref:x,...b}){const S=m.useMemo(()=>({variant:d,separator:u}),[d,u]);return e.jsx(T,{value:S,children:e.jsx("nav",{ref:x,"aria-label":h,...H(R("breadcrumbs",{variant:d}),M(G.root,l),c,p),...b,children:e.jsx("ol",{className:"xds78zum5 xds6s0dn4 xds1a02dak xdse8uvvx xds1ghz6dp xds1717udv xdszye2dw",children:s})})})}t.displayName="XDSBreadcrumbs";t.__docgenInfo={description:`A navigation breadcrumb trail. Wraps XDSBreadcrumbItem children in
semantic \`<nav>\` + \`<ol>\` markup with separators between items.

Auto-detects the last child as the current page if no item has
\`isCurrent\` explicitly set — handled by each item via DOM inspection,
no React child introspection needed.

@example
\`\`\`
<XDSBreadcrumbs>
  <XDSBreadcrumbItem href="/">Home</XDSBreadcrumbItem>
  <XDSBreadcrumbItem href="/projects">Projects</XDSBreadcrumbItem>
  <XDSBreadcrumbItem isCurrent>My Project</XDSBreadcrumbItem>
</XDSBreadcrumbs>
\`\`\``,methods:[],displayName:"XDSBreadcrumbs",props:{xstyle:{required:!1,tsType:{name:"StyleXStyles"},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLElement>",elements:[{name:"HTMLElement"}]},description:"Ref forwarded to the root element"},children:{required:!0,tsType:{name:"ReactNode"},description:"XDSBreadcrumbItem elements to render as breadcrumb trail."},separator:{required:!1,tsType:{name:"ReactNode"},description:`Separator rendered between items. Decorative only (aria-hidden).
@default '/'`,defaultValue:{value:"'/'",computed:!1}},variant:{required:!1,tsType:{name:"XDSBreadcrumbsVariantMap"},description:"Visual variant for the breadcrumb trail.\n- `'default'`: Standard text styling\n- `'supporting'`: Smaller, secondary text for supporting context\n@default 'default'",defaultValue:{value:"'default'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:`Accessible label for the nav landmark.
@default 'Breadcrumb'`,defaultValue:{value:"'Breadcrumb'",computed:!1}}},composes:["Omit"]};const n={root:{k1xSpc:"xds78zum5",kGNEyG:"xds6s0dn4",kOIVth:"xdszye2dw",kogj98:"xds1ghz6dp","--separator-display":"xdskce8z9 xds1ibt0lz",$$css:!0},defaultSize:{kGuDYH:"xdsjm74w1",kLWn49:"xdsw6l6zx",$$css:!0},supportingSize:{kGuDYH:"xds141an7d",kLWn49:"xds1ltkj2j",$$css:!0}};function r({ref:s,as:u,children:d,href:l,onClick:c,isCurrent:p,startIcon:h,xstyle:x,className:b,style:S,"data-testid":N}){const w=m.use(T),A=$(u),a=w.variant==="supporting",z=m.useRef(null),q=p===!0,O=p==null;m.useEffect(()=>{if(!O)return;const o=z.current;if(!o)return;const k=o.parentElement;if(!k)return;const P=Array.from(k.children),V=P.length>0&&P[P.length-1]===o,W=k.querySelector('[aria-current="page"]');return V&&!W&&o.setAttribute("aria-current","page"),()=>{o.removeAttribute("aria-current")}});const f=e.jsxs(e.Fragment,{children:[h&&e.jsx("span",{className:"xds78zum5 xds6s0dn4 xds2lah0s",children:h}),d]});return q?e.jsxs("li",{ref:E(s,z),...H(R("breadcrumb-item"),M(n.root,a?n.supportingSize:n.defaultSize,x),b,S),"data-testid":N,children:[e.jsx("span",{"aria-hidden":"true",className:"xds11ke7fs xds6s0dn4 xdsv1l7n4 xdsu0wf1k xds87ps6o",children:w.separator}),e.jsx("span",{...{0:{className:"xds78zum5 xds6s0dn4 xdszye2dw xds1pd3egz xds1tgivj0"},1:{className:"xds78zum5 xds6s0dn4 xdszye2dw xds1pd3egz xdsv1l7n4"}}[!!a<<0],"aria-current":"page",children:f})]}):e.jsxs("li",{ref:E(s,z),...H(R("breadcrumb-item"),M(n.root,a?n.supportingSize:n.defaultSize,x),b,S),"data-testid":N,children:[e.jsx("span",{"aria-hidden":"true",className:"xds11ke7fs xds6s0dn4 xdsv1l7n4 xdsu0wf1k xds87ps6o",children:w.separator}),l!=null?e.jsx(A,{href:l,onClick:c,...{0:{className:"xds78zum5 xds6s0dn4 xdszye2dw xdsu0wf1k xds1hl2dhg xds4ohgrr xds1ypdohk xdsv1l7n4"},1:{className:"xds78zum5 xds6s0dn4 xdszye2dw xdsu0wf1k xds1hl2dhg xds4ohgrr xds1ypdohk xdsv1l7n4"}}[!!a<<0],children:f}):c!=null?e.jsx("button",{type:"button",onClick:c,...{0:{className:"xds78zum5 xds6s0dn4 xdszye2dw xds1hl2dhg xds4ohgrr xds1ypdohk xds11g6tue xds1gs6z28 xds1717udv xds1ghz6dp xdsln7xf2 xdsv1l7n4"},1:{className:"xds78zum5 xds6s0dn4 xdszye2dw xds1hl2dhg xds4ohgrr xds1ypdohk xds11g6tue xds1gs6z28 xds1717udv xds1ghz6dp xdsln7xf2 xdsv1l7n4"}}[!!a<<0],children:f}):e.jsx("span",{...{0:{className:"xds78zum5 xds6s0dn4 xdszye2dw xds1pd3egz xds1tgivj0"},1:{className:"xds78zum5 xds6s0dn4 xdszye2dw xds1pd3egz xdsv1l7n4"}}[!!a<<0],children:f})]})}r.displayName="XDSBreadcrumbItem";r.__docgenInfo={description:`An individual breadcrumb item. Renders as a link (\`<a>\`) or a span
depending on whether it represents the current page.

Each item renders its own leading separator, hidden on :first-child via
CSS. Auto-current detection uses a post-render effect that checks the
DOM — no React child introspection.

@example
\`\`\`
<XDSBreadcrumbItem href="/projects">Projects</XDSBreadcrumbItem>
<XDSBreadcrumbItem isCurrent>My Project</XDSBreadcrumbItem>
\`\`\``,methods:[],displayName:"XDSBreadcrumbItem",props:{ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLLIElement>",elements:[{name:"HTMLLIElement"}]},description:""},as:{required:!1,tsType:{name:"ElementType"},description:"Custom component to render instead of `<a>` for breadcrumb links.\nOverrides the provider-level default set by XDSLinkProvider.\nOnly applies for non-current items. Must accept href, className, style, and children props."},children:{required:!0,tsType:{name:"ReactNode"},description:"Label content of the breadcrumb item."},href:{required:!1,tsType:{name:"string"},description:"URL for the breadcrumb link. Omit for the current page."},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: MouseEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLElement"}],raw:"MouseEvent<HTMLElement>"},name:"e"}],return:{name:"void"}}},description:"Click handler. Works with or without href."},isCurrent:{required:!1,tsType:{name:"boolean"},description:`Marks this item as the current page. Renders as a span with aria-current="page".
If not set on any item, the last item is auto-detected as current.
@default false`},startIcon:{required:!1,tsType:{name:"ReactNode"},description:"Optional icon rendered before the label."}},composes:["Omit"]};const Q={title:"Core/Breadcrumbs",component:t,tags:["autodocs"],argTypes:{separator:{control:"text",description:"Separator between items"},label:{control:"text",description:"Accessible label for the nav landmark"},variant:{control:"select",options:["default","supporting"],description:"Visual variant controlling text size and color"}}},D={render:()=>e.jsxs(t,{children:[e.jsx(r,{href:"/",children:"Home"}),e.jsx(r,{href:"/projects",children:"Projects"}),e.jsx(r,{isCurrent:!0,children:"My Project"})]})},g={render:()=>e.jsxs(t,{children:[e.jsx(r,{href:"/",children:"Home"}),e.jsx(r,{isCurrent:!0,children:"Settings"})]})},B={name:"Auto-detect Current",render:()=>e.jsxs(t,{children:[e.jsx(r,{href:"/",children:"Home"}),e.jsx(r,{href:"/projects",children:"Projects"}),e.jsx(r,{children:"Auto Current"})]})},X={render:()=>e.jsxs(t,{separator:"›",children:[e.jsx(r,{href:"/",children:"Home"}),e.jsx(r,{href:"/docs",children:"Docs"}),e.jsx(r,{isCurrent:!0,children:"API Reference"})]})},j={render:()=>e.jsxs(t,{children:[e.jsx(r,{href:"/",startIcon:e.jsx(L,{width:16,height:16,"aria-hidden":"true"}),children:"Home"}),e.jsx(r,{href:"/settings",startIcon:e.jsx(_,{width:16,height:16,"aria-hidden":"true"}),children:"Settings"}),e.jsx(r,{isCurrent:!0,children:"Profile"})]})},I={render:()=>e.jsxs(t,{children:[e.jsx(r,{href:"/",onClick:s=>{s.preventDefault(),console.log("Navigate to Home")},children:"Home"}),e.jsx(r,{href:"/projects",onClick:s=>{s.preventDefault(),console.log("Navigate to Projects")},children:"Projects"}),e.jsx(r,{isCurrent:!0,children:"Detail"})]})},y={render:()=>e.jsxs(t,{children:[e.jsx(r,{href:"/",children:"Home"}),e.jsx(r,{href:"/products",children:"Products"}),e.jsx(r,{href:"/products/electronics",children:"Electronics"}),e.jsx(r,{href:"/products/electronics/phones",children:"Phones"}),e.jsx(r,{isCurrent:!0,children:"iPhone 15 Pro"})]})},v={name:"Supporting Variant",render:()=>e.jsxs(t,{variant:"supporting",children:[e.jsx(r,{href:"/",children:"Home"}),e.jsx(r,{href:"/projects",children:"Projects"}),e.jsx(r,{isCurrent:!0,children:"My Project"})]})},C={name:"Supporting Variant with Icons",render:()=>e.jsxs(t,{variant:"supporting",children:[e.jsx(r,{href:"/",startIcon:e.jsx(L,{width:14,height:14,"aria-hidden":"true"}),children:"Home"}),e.jsx(r,{href:"/projects",startIcon:e.jsx(F,{width:14,height:14,"aria-hidden":"true"}),children:"Projects"}),e.jsx(r,{isCurrent:!0,children:"My Project"})]})},i={name:"Current on Middle Item",render:()=>e.jsxs(t,{children:[e.jsx(r,{href:"/",children:"Home"}),e.jsx(r,{isCurrent:!0,children:"Projects"}),e.jsx(r,{href:"/projects/my-project/settings",children:"Settings"})]})};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <XDSBreadcrumbs>
      <XDSBreadcrumbItem href="/">Home</XDSBreadcrumbItem>
      <XDSBreadcrumbItem href="/projects">Projects</XDSBreadcrumbItem>
      <XDSBreadcrumbItem isCurrent>My Project</XDSBreadcrumbItem>
    </XDSBreadcrumbs>
}`,...D.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <XDSBreadcrumbs>
      <XDSBreadcrumbItem href="/">Home</XDSBreadcrumbItem>
      <XDSBreadcrumbItem isCurrent>Settings</XDSBreadcrumbItem>
    </XDSBreadcrumbs>
}`,...g.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'Auto-detect Current',
  render: () => <XDSBreadcrumbs>
      <XDSBreadcrumbItem href="/">Home</XDSBreadcrumbItem>
      <XDSBreadcrumbItem href="/projects">Projects</XDSBreadcrumbItem>
      <XDSBreadcrumbItem>Auto Current</XDSBreadcrumbItem>
    </XDSBreadcrumbs>
}`,...B.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => <XDSBreadcrumbs separator={'›'}>
      <XDSBreadcrumbItem href="/">Home</XDSBreadcrumbItem>
      <XDSBreadcrumbItem href="/docs">Docs</XDSBreadcrumbItem>
      <XDSBreadcrumbItem isCurrent>API Reference</XDSBreadcrumbItem>
    </XDSBreadcrumbs>
}`,...X.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <XDSBreadcrumbs>
      <XDSBreadcrumbItem href="/" startIcon={<HomeIcon width={16} height={16} aria-hidden="true" />}>
        Home
      </XDSBreadcrumbItem>
      <XDSBreadcrumbItem href="/settings" startIcon={<Cog6ToothIcon width={16} height={16} aria-hidden="true" />}>
        Settings
      </XDSBreadcrumbItem>
      <XDSBreadcrumbItem isCurrent>Profile</XDSBreadcrumbItem>
    </XDSBreadcrumbs>
}`,...j.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <XDSBreadcrumbs>
      <XDSBreadcrumbItem href="/" onClick={e => {
      e.preventDefault();
      console.log('Navigate to Home');
    }}>
        Home
      </XDSBreadcrumbItem>
      <XDSBreadcrumbItem href="/projects" onClick={e => {
      e.preventDefault();
      console.log('Navigate to Projects');
    }}>
        Projects
      </XDSBreadcrumbItem>
      <XDSBreadcrumbItem isCurrent>Detail</XDSBreadcrumbItem>
    </XDSBreadcrumbs>
}`,...I.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <XDSBreadcrumbs>
      <XDSBreadcrumbItem href="/">Home</XDSBreadcrumbItem>
      <XDSBreadcrumbItem href="/products">Products</XDSBreadcrumbItem>
      <XDSBreadcrumbItem href="/products/electronics">
        Electronics
      </XDSBreadcrumbItem>
      <XDSBreadcrumbItem href="/products/electronics/phones">
        Phones
      </XDSBreadcrumbItem>
      <XDSBreadcrumbItem isCurrent>iPhone 15 Pro</XDSBreadcrumbItem>
    </XDSBreadcrumbs>
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Supporting Variant',
  render: () => <XDSBreadcrumbs variant="supporting">
      <XDSBreadcrumbItem href="/">Home</XDSBreadcrumbItem>
      <XDSBreadcrumbItem href="/projects">Projects</XDSBreadcrumbItem>
      <XDSBreadcrumbItem isCurrent>My Project</XDSBreadcrumbItem>
    </XDSBreadcrumbs>
}`,...v.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Supporting Variant with Icons',
  render: () => <XDSBreadcrumbs variant="supporting">
      <XDSBreadcrumbItem href="/" startIcon={<HomeIcon width={14} height={14} aria-hidden="true" />}>
        Home
      </XDSBreadcrumbItem>
      <XDSBreadcrumbItem href="/projects" startIcon={<FolderIcon width={14} height={14} aria-hidden="true" />}>
        Projects
      </XDSBreadcrumbItem>
      <XDSBreadcrumbItem isCurrent>My Project</XDSBreadcrumbItem>
    </XDSBreadcrumbs>
}`,...C.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Current on Middle Item',
  render: () => <XDSBreadcrumbs>
      <XDSBreadcrumbItem href="/">Home</XDSBreadcrumbItem>
      <XDSBreadcrumbItem isCurrent>Projects</XDSBreadcrumbItem>
      <XDSBreadcrumbItem href="/projects/my-project/settings">
        Settings
      </XDSBreadcrumbItem>
    </XDSBreadcrumbs>
}`,...i.parameters?.docs?.source},description:{story:`Shows \`isCurrent\` on a middle breadcrumb item rather than the last one.
This is useful when navigating to a child page that isn't represented
in the breadcrumb trail — the parent is still the "current" page in
the hierarchy.`,...i.parameters?.docs?.description}}};const ee=["Default","TwoLevels","AutoDetectCurrent","CustomSeparator","WithIcons","WithOnClick","DeepHierarchy","SupportingVariant","SupportingWithIcons","CurrentOnMiddleItem"];export{B as AutoDetectCurrent,i as CurrentOnMiddleItem,X as CustomSeparator,y as DeepHierarchy,D as Default,v as SupportingVariant,C as SupportingWithIcons,g as TwoLevels,j as WithIcons,I as WithOnClick,ee as __namedExportsOrder,Q as default};
