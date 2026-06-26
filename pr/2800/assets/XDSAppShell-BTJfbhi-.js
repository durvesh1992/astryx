import{at as i,aR as fe,ao as Se,aP as be,ad as e,ar as y,ai as T,aZ as k,aj as ye,R as H}from"./iframe-yRFQ_7VC.js";import{X as ke,b as Ne}from"./XDSLayoutContent-DBrMIkuH.js";import{X as B}from"./XDSLayoutHeader-ByHa8jrV.js";import{X as we}from"./XDSLayoutPanel-DpS1Q-H7.js";import{X as Ae,a as I,b as P}from"./XDSTopNavMobileContentContext-DQaQZFe4.js";import{X as N}from"./XDSSideNavRenderContext-Cy9JZzso.js";import{X as De}from"./XDSAppShellMobileContext-S4OI9hZX.js";function C(n){return n!=null&&typeof n!="boolean"&&n!==""}const Xe=typeof H.Activity<"u",je=Xe?({mode:n,children:x})=>e.jsx(H.Activity,{mode:n,children:x}):({children:n})=>e.jsx(e.Fragment,{children:n}),Me={sm:640,md:768,lg:1024,none:0},V="xds-app-shell-main",a={root:{k1xSpc:"xds78zum5",kXwgrk:"xdsdt5ytf",kVAEAm:"xds1n2onr6",$$css:!0},variantWash:{kWkggS:"xds1eiddq6",$$css:!0},variantSurface:{kWkggS:"xds10xzikg",$$css:!0},variantSection:{kWkggS:"xds10xzikg",$$css:!0},variantElevated:{kWkggS:"xds1eiddq6",$$css:!0},rootFill:{kZKoxP:"xdstdtrs8",$$css:!0},rootAuto:{kAzted:"xds1ov3xa9",$$css:!0},contentBgSurface:{kWkggS:"xds10xzikg",$$css:!0},contentBgWash:{kWkggS:"xds1eiddq6",$$css:!0},contentBgTransparent:{kWkggS:"xdsjbqb8w",kHBbk8:"xdsc8icb0",$$css:!0},navAreaWash:{kWkggS:"xds1eiddq6",$$css:!0},navAreaSurface:{kWkggS:"xds10xzikg",$$css:!0},banner:{kmuXW:"xds2lah0s",$$css:!0},headerSticky:{kVAEAm:"xds7wzq59",k87sOh:"xds13vifvy",kY2c9j:"xds1vjfegm",$$css:!0},panelAutoFill:{kUk6DE:"xds98rzlu",kzQI83:null,kmuXW:null,kCS8Yb:null,kVQacm:"xdsysyzu8",kXHlph:null,kORKVm:null,$$css:!0}};function F({variant:n="elevated",banner:x,children:L,contentPadding:_,"data-testid":U,height:w="fill",mobileNav:t,sideNav:c,topNav:m,xstyle:Q,className:K,style:Y,ref:Z}){const g=t===!1,l=t!=null&&t!==!1&&typeof t=="object"&&!i.isValidElement(t)?t:null,$=l?.breakpoint??"md",u=t!=null&&t!==!1&&(i.isValidElement(t)||typeof t=="string")?t:null,A=l?.content??null,f=l?.hasToggle!==!1,E=l?.isOpen!==void 0,G=$==="none"?"(max-width: 0px)":`(max-width: ${Me[$]}px)`,o=fe(G,l?.defaultIsMobile),[J,ee]=i.useState(!1),S=l?.isOpen??J,b=i.useCallback(p=>{E||ee(p),l?.onOpenChange?.(p)},[E,l]),D=w==="fill",d=w==="auto",q=C(x),s=C(m),r=C(c),h=!g&&(s||r)&&u==null,X=n==="section",ne=n==="elevated",v=n==="wash"||n==="elevated"?a.navAreaWash:n==="surface"?a.navAreaSurface:void 0,ae=n==="wash"?a.contentBgWash:n==="elevated"&&s&&r&&!o?a.contentBgTransparent:n==="surface"||n==="elevated"?a.contentBgSurface:void 0,te=v??a.navAreaSurface,j=i.useRef(null),M=i.useRef(null);i.useEffect(()=>{if(!d||!j.current||!M.current)return;const p=j.current,xe=M.current,me=()=>{const ge=p.getBoundingClientRect().height;xe.style.setProperty("--appshell-header-height",`${ge}px`)};return Se(p,()=>me()),()=>be(p)},[d]);const O=r&&!o,se=u!=null,le=h&&A!=null&&o,oe=i.useMemo(()=>({isMobile:o,isMobileNavOpen:S,toggleMobileNav:()=>h&&b(!S),openMobileNav:()=>h&&b(!0),closeMobileNav:()=>b(!1),isMobileNavEnabled:h,hasAutoToggle:f}),[o,S,b,h,f]),ie=r&&f?e.jsx(N,{value:"drawer-content",children:c}):null,de=r?e.jsx(N,{value:"drawer-content",children:c}):null,re=s?o&&!g&&u==null?e.jsx(I,{value:ie,children:e.jsx(P,{value:"mobile-bar",children:m})}):m:null,z=s||q?e.jsxs(B,{padding:0,hasDivider:X&&s,children:[q&&e.jsx("div",{...y(a.banner,v),children:x}),s&&re]}):void 0,ce=z!=null?e.jsx("div",{ref:j,...T(k("app-shell-header",{variant:n}),y(v,d&&a.headerSticky)),children:z}):void 0,R=O?e.jsx(we,{padding:0,hasDivider:X,isScrollable:D,...k("app-shell-sidenav",{variant:n}),xstyle:[v,d&&te,d&&a.panelAutoFill],children:c}):void 0,pe=R!=null&&d?e.jsx("div",{className:"xds2lah0s xds7giv3 xds7wzq59 xdsepuwc7 xds16zugyo xds78zum5 xdsdt5ytf",children:R}):R,ue=ne&&s&&O,W=e.jsx(Ne,{padding:_??0,role:"main",id:V,isScrollable:D,xstyle:ae,children:L}),he=ue?e.jsxs("div",{className:"xds1n2onr6 xds78zum5 xds98rzlu xds2lwn1j xds5yr21d",children:[e.jsx("div",{className:"xds10l6tqk xds10a8y8t xds10xzikg xds183tx6i xds47corl"}),W]}):W,ve=!g&&f&&o&&!s&&r?e.jsx("div",{...T(k("app-shell-header",{variant:n}),y(v,d&&a.headerSticky)),children:e.jsx(B,{padding:0,hasDivider:X,children:e.jsxs("div",{className:"xds78zum5 xds6s0dn4 xds1k15mir xdsf314gf",role:"navigation","aria-label":"Mobile navigation",children:[e.jsx(N,{value:"topbar",children:c}),e.jsx(Ae,{})]})})}):void 0;return e.jsx(De,{value:oe,children:e.jsxs("div",{ref:ye(Z,M),"data-testid":U,...T(k("app-shell",{variant:n}),y(a.root,n==="wash"?a.variantWash:n==="surface"?a.variantSurface:n==="section"?a.variantSection:a.variantElevated,D?a.rootFill:a.rootAuto,Q),K,Y),children:[e.jsx("a",{href:`#${V}`,className:"xds10l6tqk xds1xrnuwo xds1i1rx1s xds1jqxupm xdsjm9jq1 xds15cytp8 xdst970qd xdsh2mrf5 xdsnjsko4 xds1cf3d6k xdskdpibf xds1y5lnwp xdsb3r6kr xdsomzh7y xds1hyvwdk xds1rsz1da xdsuxw1ft xds1hbpcn8 xdsc342km xds13vifvy xds1rw3289 xds1o0tod xdsodanix xds10xzikg xdsjse4m1 xds1q2oy4v xds1hl2dhg xds2mo6ok xdsjm74w1","data-testid":"skip-to-content",children:"Skip to content"}),e.jsx(ke,{height:w,padding:0,header:e.jsxs(e.Fragment,{children:[ce,ve]}),start:pe,content:he}),se&&u,le&&A,o&&!g&&u==null&&!A&&e.jsxs(je,{mode:S?"visible":"hidden",children:[r&&!s&&e.jsx(N,{value:"drawer",children:c}),s&&e.jsx(I,{value:de,children:e.jsx(P,{value:"drawer",children:m})})]})]})})}F.displayName="XDSAppShell";F.__docgenInfo={description:`Application-level layout shell. Provides the structural frame for an app:
top navigation, side navigation, and main content area.

Slot-based API with \`topNav\`, \`sideNav\`, \`banner\`, and \`children\`.
Supports two height modes (\`fill\` and \`auto\`), responsive side nav
collapse, and mobile overlay with backdrop.

@example
\`\`\`
<XDSAppShell
  topNav={<XDSTopNav label="Navigation" heading={<XDSTopNavHeading heading="My App" />} />}
  sideNav={<XDSSideNav>{navSections}</XDSSideNav>}
  mobileNav={
    <XDSMobileNav isOpen={mobileOpen} onOpenChange={(open) => setMobileOpen(open)} title="My App">
      {navSections}
    </XDSMobileNav>
  }>
  <Content />
</XDSAppShell>
\`\`\``,methods:[],displayName:"XDSAppShell",props:{xstyle:{required:!1,tsType:{name:"StyleXStyles"},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:"Ref forwarded to the root element"},variant:{required:!1,tsType:{name:"XDSAppShellVariantMap"},description:"Navigation background style controlling how nav areas contrast with content.\n- `wash`: Nav uses wash background, no dividers\n- `surface`: Nav uses surface background, no dividers\n- `section`: Dividers between nav and content (classic look)\n- `elevated`: Wash nav with elevated surface content area + border radius\n@default 'elevated'",defaultValue:{value:"'elevated'",computed:!1}},banner:{required:!1,tsType:{name:"ReactNode"},description:`Optional banner slot for system-wide announcements.
Renders above the top nav and scrolls away with the page in auto mode.`},children:{required:!0,tsType:{name:"ReactNode"},description:"Main content area (rendered as `<main>`)."},contentPadding:{required:!1,tsType:{name:"union",raw:"0 | 0.5 | 1 | 1.5 | 2 | 3 | 4 | 5 | 6 | 8 | 10",elements:[{name:"literal",value:"0"},{name:"literal",value:"0.5"},{name:"literal",value:"1"},{name:"literal",value:"1.5"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"8"},{name:"literal",value:"10"}]},description:"Padding for the main content area using the spacing scale.\nSet based on the dominant content pattern for the page:\n- `4` (16px) — standard padding for forms, settings, text-heavy pages\n- `0` — no padding, for dashboards, maps, tables that need edge-to-edge\nOverride individual sections with `<XDSSection padding={...}>`.\nAccepts numeric spacing steps: 0, 0.5, 1, 1.5, 2, 3, 4, 5, 6, 8, 10."},height:{required:!1,tsType:{name:"union",raw:"'fill' | 'auto'",elements:[{name:"literal",value:"'fill'"},{name:"literal",value:"'auto'"}]},description:"Height behavior:\n- `fill`: Shell fills viewport, content scrolls internally (default)\n- `auto`: Shell grows with content, page scrolls as a whole\n@default 'fill'",defaultValue:{value:"'fill'",computed:!1}},mobileNav:{required:!1,tsType:{name:"union",raw:"false | XDSMobileNavConfig | ReactNode",elements:[{name:"literal",value:"false"},{name:"XDSMobileNavConfig"},{name:"ReactNode"}]},description:`Mobile navigation configuration.

Accepts three shapes:
- **\`false\`** — Disable mobile nav entirely.
- **\`MobileNavConfig\` object** — Configure auto behavior (toggle, controlled state, custom content).
- **\`ReactNode\`** — Full escape hatch: provide your own \`<XDSMobileNav>\` (you own everything).

When omitted, AppShell automatically generates a mobile drawer with
sideNav content (and TopNav items in the future) below the breakpoint.

@example
\`\`\`
<XDSAppShell topNav={...} sideNav={...} />
<XDSAppShell mobileNav={{ isOpen, onOpenChange }} />
<XDSAppShell mobileNav={{ hasToggle: false }}>
  <XDSMobileNavToggle />
</XDSAppShell>
<XDSAppShell mobileNav={<XDSMobileNav title="Menu">...</XDSMobileNav>} />
<XDSAppShell mobileNav={false} />
\`\`\``},sideNav:{required:!1,tsType:{name:"ReactNode"},description:`Side navigation — typically an XDSSideNav.

Pass \`undefined\` (or omit) when a page has no side navigation.
Do NOT pass a component that renders \`null\` — AppShell treats any
renderable value as "sidenav exists".

**Next.js parallel routes:** Conditionally pass the slot based on
the current route rather than relying on a \`default.tsx\` that
returns \`null\`:

@example
\`\`\`
const SIDEBAR_ROUTES = ['/dashboard', '/settings'];
function Layout({ children, sidebar }) {
  const hasSidebar = SIDEBAR_ROUTES.some(r => pathname.startsWith(r));
  return (
    <XDSAppShell
      sideNav={hasSidebar ? sidebar : undefined}
      mobileNav={hasSidebar ? { breakpoint: 'md' } : false}>
      {children}
    </XDSAppShell>
  );
}
\`\`\``},topNav:{required:!1,tsType:{name:"ReactNode"},description:"Top navigation — typically an XDSTopNav.\nSame contract as `sideNav` — pass `undefined` when there's no top nav."}},composes:["Omit"]};export{F as X};
