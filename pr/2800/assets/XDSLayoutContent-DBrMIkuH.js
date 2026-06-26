import{at as i,ad as n,ar as u,ai as T,aZ as j}from"./iframe-yRFQ_7VC.js";import{s as C}from"./stack.stylex-5XIQDawT.js";import{s as N}from"./stackItem.stylex-CYo-hkeX.js";import{l as V,d as H,c as M,a as O,b as z,e as Z}from"./padding.stylex-BDg7w1Mn.js";const q=i.createContext(null);q.displayName="XDSLayoutAreaContext";const F={hasHeader:!1,hasFooter:!1,hasStart:!1,hasEnd:!1},k=i.createContext(F);k.displayName="XDSLayoutSlotsContext";const R=i.createContext(null);R.displayName="XDSLayoutDividerContext";const l={layoutOuter:{keTefX:"xdsojxgvx",k71WvV:"xds1fcf3bl",keoZOQ:"xds1sa9bsh",k1K539:"xds6h7pi7",$$css:!0},layoutInner:{"--container-padding-inline-start":"xdsrhngw9","--container-padding-inline-end":"xdsjsfl84","--container-padding-block-start":"xds1047aw6","--container-padding-block-end":"xdsax9j7h",$$css:!0},fill:{kZKoxP:"xds12qplqi",kskxy:"xdsenllk4",$$css:!0},auto:{kAzted:"xds1us19tq",$$css:!0},middle:{kUk6DE:"xds98rzlu",kzQI83:null,kmuXW:null,kCS8Yb:null,kAzted:"xds2lwn1j",$$css:!0},fullBleed:{"--layout-padding-outer-x":"xds1wbjvqu","--layout-padding-outer-y":"xdszxxx64",$$css:!0}},I={"--layout-content-width":"xds4906uf",$$css:!0},W={kzqmXN:"xdsh8yej3",kUOVxO:"xdsvueqy4",keTefX:"",koQZXg:"",k71WvV:"",km5ZXQ:"",$$css:!0},$={contentWidthVar:a=>[I,{"--x---layout-content-width":`${a}px`!=null?`${a}px`:void 0}],contentWidth:a=>[W,{ks0D6T:a!=null?"xdsf68679":a,$$css:!0},{"--x-maxWidth":(t=>typeof t=="number"?t+"px":t??void 0)(a)}]};function d({area:a,children:t}){return t==null?null:n.jsx(q,{value:a,children:t})}function P({content:a,contentWidth:t,defaultHasDividers:e,end:c,footer:p,header:y,height:m="fill",padding:s,ref:h,start:x,xstyle:S,className:v,style:g}){const f=m==="fill",o=i.useMemo(()=>e!=null?{defaultHasDividers:e}:null,[e]),D=y!=null,L=p!=null,X=x!=null,b=c!=null,E=i.useMemo(()=>({hasHeader:D,hasFooter:L,hasStart:X,hasEnd:b}),[D,L,X,b]),w=n.jsx(k,{value:E,children:n.jsx("div",{ref:h,...T(j("layout",{height:m}),u(l.layoutOuter,f?l.fill:l.auto,S),v,g),children:n.jsxs("div",{...u({"xds-default-marker":"xds-default-marker",$$css:!0},l.layoutInner,...C({direction:"vertical"}),f?l.fill:l.auto,s===0&&l.fullBleed,s!=null&&V[s],s!=null&&H[s],t!=null&&$.contentWidthVar(t)),children:[n.jsx(d,{area:"header",children:y}),n.jsxs("div",{...u(...C({direction:"horizontal"}),l.middle,t!=null&&$.contentWidth(t)),children:[n.jsx(d,{area:"start",children:x}),n.jsx("div",{...u(...N({size:"fill"})),children:n.jsx(d,{area:"content",children:a})}),n.jsx(d,{area:"end",children:c})]}),n.jsx(d,{area:"footer",children:p})]})})});return o!=null?n.jsx(R,{value:o,children:w}):w}P.displayName="XDSLayout";P.__docgenInfo={description:`Page shell with header, sidebar(s), content, and footer slots.
Use this for full-page layouts, app shells, dashboard layouts, or any UI
that needs a header bar, side navigation, scrollable content area, or action footer.
Can be used standalone for page-level layouts, or inside a container
(XDSCard, XDSSection) for content-level layouts.

Handles padding collapse between adjacent slots, scroll containment in the
content area, and automatic RTL support via CSS logical properties.

Structure:
\`\`\`
┌─────────────────────────────────────────┐
│                 header                  │
├──────┬─────────────────────────┬────────┤
│      │                         │        │
│start │        content          │  end   │
│      │                         │        │
├──────┴─────────────────────────┴────────┤
│                 footer                  │
└─────────────────────────────────────────┘
\`\`\`

When to use XDSLayout vs raw flexbox:
- Page with a sidebar → XDSLayout with \`start\` slot
- Dashboard with header + scrollable body → XDSLayout with \`header\` + \`content\`
- Settings page with nav panel → XDSLayout with \`start\` + \`content\`
- Simple vertical stack of items → use XDSVStack instead

@example
\`\`\`
<XDSLayout
  header={<XDSLayoutHeader hasDivider>App Name</XDSLayoutHeader>}
  start={
    <XDSLayoutPanel hasDivider width={240} role="navigation">
      <Navigation />
    </XDSLayoutPanel>
  }
  content={
    <XDSLayoutContent role="main">
      <MainContent />
    </XDSLayoutContent>
  }
/>
\`\`\``,methods:[],displayName:"XDSLayout",props:{ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:"Ref forwarded to the root DOM element."},content:{required:!1,tsType:{name:"ReactNode"},description:"Main content area (center)."},contentWidth:{required:!1,tsType:{name:"number"},description:"Maximum width of the content within each slot (header, content, footer,\npanels). Dividers remain full-bleed. Content is centered with\n`margin-inline: auto` when narrower than the available space.\n\nAccepts any pixel value. Common page widths from internal patterns:\n- `640` — forms, settings, text-focused pages\n- `960` — content pages, component demos, wider layouts"},end:{required:!1,tsType:{name:"ReactNode"},description:"End panel slot (right in LTR, left in RTL)."},footer:{required:!1,tsType:{name:"ReactNode"},description:"Footer slot."},header:{required:!1,tsType:{name:"ReactNode"},description:"Header slot."},height:{required:!1,tsType:{name:"union",raw:"'fill' | 'auto'",elements:[{name:"literal",value:"'fill'"},{name:"literal",value:"'auto'"}]},description:"Controls the height behavior:\n- `fill`: Layout fills container height, content scrolls internally (default)\n- `auto`: Layout grows with content, container/page scrolls\n@default 'fill'",defaultValue:{value:"'fill'",computed:!1}},padding:{required:!1,tsType:{name:"union",raw:"0 | 0.5 | 1 | 1.5 | 2 | 3 | 4 | 5 | 6 | 8 | 10",elements:[{name:"literal",value:"0"},{name:"literal",value:"0.5"},{name:"literal",value:"1"},{name:"literal",value:"1.5"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"8"},{name:"literal",value:"10"}]},description:"Padding at the layout's outer edges using the spacing scale.\nControls both `--layout-padding-outer-x` and `--layout-padding-outer-y`.\nAccepts numeric spacing steps: 0, 0.5, 1, 1.5, 2, 3, 4, 5, 6, 8, 10."},start:{required:!1,tsType:{name:"ReactNode"},description:"Start panel slot (left in LTR, right in RTL)."},defaultHasDividers:{required:!1,tsType:{name:"boolean"},description:"Default divider visibility for XDSLayoutHeader and XDSLayoutFooter children.\nWhen set, headers/footers that don't explicitly pass `hasDivider` will use this value.\nWhen not set, nested layouts inherit from their parent context."},className:{required:!1,tsType:{name:"string"},description:"CSS class name(s) appended to the root element."},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles to apply to the root element."}},composes:["Omit"]};const r={content:{kB7OPa:"xds9f619",kZKoxP:"xds5yr21d",kUk6DE:"xds98rzlu",kAzted:"xds2lwn1j",kVQacm:"xds7giv3",kZCmMZ:"xdswjyata",kwRFfy:"xds1peupej",kLKAdn:"xdsqty4a xds1oyikli",kGO01o:"xdsg476vw xdsrdfv45","--container-padding-inline-start":"xds408pgh","--container-padding-inline-end":"xdsikqloz","--container-padding-block-start":"xdsjmgx01","--container-padding-block-end":"xdsi9ns85",$$css:!0},noStart:{kZCmMZ:"xds139j0dd","--container-padding-inline-start":"xdsdvaxxn","--container-padding-inline-end":"xdsqpvj4r",$$css:!0},noEnd:{kwRFfy:"xdspc6k2p",$$css:!0},noHeader:{kLKAdn:"xds81pis9","--container-padding-block-start":"xdszz8v79",$$css:!0},noFooter:{kGO01o:"xdson7vh3","--container-padding-block-end":"xds1xjq73n",$$css:!0},scrollable:{kVQacm:"xdsysyzu8",$$css:!0},fullBleed:{kZCmMZ:"xds1c1uobl",kwRFfy:"xdsyri2b",kLKAdn:"xdsexx8yu",kGO01o:"xds18d9i69","--container-padding-inline-start":"xdsrhngw9","--container-padding-inline-end":"xdsjsfl84","--container-padding-block-start":"xds1047aw6","--container-padding-block-end":"xdsax9j7h",$$css:!0}};function A({children:a,isScrollable:t=!0,padding:e,label:c,role:p,xstyle:y,className:m,style:s,ref:h,...x}){const{hasHeader:S,hasFooter:v,hasStart:g,hasEnd:f}=i.use(k),o=e===0;return n.jsx("div",{ref:h,role:p,"aria-label":c,...T(j("layout-content"),u(r.content,!g&&!o&&e==null&&r.noStart,!f&&!o&&e==null&&r.noEnd,!S&&!o&&e==null&&r.noHeader,!v&&!o&&e==null&&r.noFooter,t&&r.scrollable,o&&r.fullBleed,e!=null&&Z[e],e!=null&&z[e],e!=null&&O[e],e!=null&&M[e],y),m,s),...x,children:a})}A.displayName="XDSLayoutContent";A.__docgenInfo={description:`Scrollable main content area for XDSLayout. Wraps the primary body content
with automatic scroll containment and context-aware padding.

Already provides its own padding and scroll — don't add padding or
overflow to children. Use \`padding={0}\` if you need edge-to-edge content.

@example
\`\`\`
<XDSLayoutContainer variant="card">
  <XDSLayout
    header={<XDSLayoutHeader>Title</XDSLayoutHeader>}
    content={<XDSLayoutContent>Main body content</XDSLayoutContent>}
  />
</XDSLayoutContainer>
<XDSLayoutContainer variant="card">
  <XDSLayout
    content={
      <XDSLayoutContent padding={0}>
        <Table />
      </XDSLayoutContent>
    }
  />
</XDSLayoutContainer>
<XDSLayoutContainer variant="card">
  <XDSLayout
    content={
      <XDSLayoutContent isScrollable={false}>
        <StickyElement />
      </XDSLayoutContent>
    }
  />
</XDSLayoutContainer>
\`\`\``,methods:[],displayName:"XDSLayoutContent",props:{xstyle:{required:!1,tsType:{name:"StyleXStyles"},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:"Content to render inside the content area."},padding:{required:!1,tsType:{name:"union",raw:"0 | 0.5 | 1 | 1.5 | 2 | 3 | 4 | 5 | 6 | 8 | 10",elements:[{name:"literal",value:"0"},{name:"literal",value:"0.5"},{name:"literal",value:"1"},{name:"literal",value:"1.5"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"8"},{name:"literal",value:"10"}]},description:`Internal padding of the content area using the spacing scale.
Accepts numeric spacing steps: 0, 0.5, 1, 1.5, 2, 3, 4, 5, 6, 8, 10.
Overrides the default padding from the layout container.`},isScrollable:{required:!1,tsType:{name:"boolean"},description:`Enables scrollable overflow for the content area.
Set to false for auto-height layouts where sticky positioning
needs to work with parent containers.
@default true`,defaultValue:{value:"true",computed:!1}},label:{required:!1,tsType:{name:"string"},description:`Accessible label for the landmark.
Required when role is set and multiple landmarks of the same type exist.`},role:{required:!1,tsType:{name:"AriaRole"},description:`ARIA landmark role for accessibility.
Use 'main' only for the primary content area of the page (not in nested layouts).`}},composes:["Omit"]};export{P as X,q as a,A as b,R as c,k as d};
