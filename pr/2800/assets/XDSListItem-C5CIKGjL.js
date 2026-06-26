import{at as a,ad as e,ai as L,aZ as T}from"./iframe-yRFQ_7VC.js";import{X as D}from"./XDSItem-CTSSy95c.js";const r=a.createContext(null);r.displayName="XDSListContext";const i={withCounter:{kAmcRD:"xds1qwvq9q",$$css:!0},withDivider:{kt9PQ7:"xds92x3c3",kfdmCh:"xds1q0q8m5",kL6WhQ:"xdsw8gpjh",kIy1pl:"xds1rix2v9",kx8K5S:null,kTFOXF:null,kdIrg8:null,$$css:!0}},C={noRadius:{kaIpWk:"xds2u8bby",krdFHd:null,kfmiAY:null,kVL7Gh:null,kT0f0o:null,kIxVMA:null,ksF3WI:null,kqGeR4:null,kYm2EN:null,$$css:!0}};function l({label:o,description:d,startContent:c,endContent:p,onClick:m,href:u,target:x,rel:f,isDisabled:h=!1,isSelected:y=!1,xstyle:v,className:k,style:b,ref:g,...w}){const s=a.use(r),R=s?.density??"balanced",n=s?.hasDividers??!1,t=s?.listStyle??"none",q=t!=="none",S=t==="disc"?e.jsx("span",{className:"xdsoi2r2e xds9f619 xds78zum5 xds6s0dn4 xdsl56j7k xds2lah0s xds12xnipv xds1233pnv",children:e.jsx("span",{className:"xds1v4s8kt xdsols6we xds16rqkct xds19aspcf"})}):t==="circle"?e.jsx("span",{className:"xdsoi2r2e xds9f619 xds78zum5 xds6s0dn4 xdsl56j7k xds2lah0s xds12xnipv xds1233pnv",children:e.jsx("span",{className:"xds1v4s8kt xdsols6we xds16rqkct xdsmkeg23 xds1y0btm7 xdsqcx1ss xdsjbqb8w"})}):t==="decimal"?e.jsx("span",{className:"xdsoi2r2e xds2lah0s xds1tgivj0 xdsjm74w1 xdsw6l6zx xds12xnipv xds83grso"}):null;return e.jsx(D,{as:"li",ref:g,marker:S,startContent:c,label:o,description:d,endContent:p,onClick:m,href:u,target:x,rel:f,isDisabled:h,isSelected:y,density:R,xstyle:[q&&i.withCounter,n&&i.withDivider,n&&C.noRadius,v],...L(T("list-item"),{className:k,style:b}),...w})}l.displayName="XDSListItem";l.__docgenInfo={description:`A list item component for use within XDSList.

Renders structured content with label, description, start/end content areas.
When \`onClick\` is provided, uses the invisible button pattern for accessibility.
When \`href\` is provided, uses an invisible anchor pattern.

@example
\`\`\`
<XDSListItem label="Settings" description="Manage your preferences" />
<XDSListItem label="Profile" onClick={() => navigate('/profile')} />
<XDSListItem label="Docs" href="/docs" target="_blank" rel="noreferrer" />
\`\`\``,methods:[],displayName:"XDSListItem",props:{xstyle:{required:!1,tsType:{name:"StyleXStyles"},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLLIElement>",elements:[{name:"HTMLLIElement"}]},description:"Ref forwarded to the root element"},label:{required:!0,tsType:{name:"ReactNode"},description:`Primary text label for the item.

Accepts a plain string (single-line truncation applied automatically)
or a ReactNode for rich content (no truncation constraints —
child components control their own text behavior).`},description:{required:!1,tsType:{name:"ReactNode"},description:`Secondary description below the label.

Accepts a plain string (single-line truncation applied automatically)
or a ReactNode for rich/multi-line content (no wrapping constraints
applied — child components control their own text behavior).`},startContent:{required:!1,tsType:{name:"ReactNode"},description:`Content rendered before the item (icon, avatar, checkbox).
Uses start/end naming for RTL support.`},endContent:{required:!1,tsType:{name:"ReactNode"},description:"Content rendered after the item (badge, action button, chevron)."},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent"},name:"e"}],return:{name:"void"}}},description:`Click handler for interactive items.
Automatically enables hover/press styles when provided.`},href:{required:!1,tsType:{name:"string"},description:`URL for link items. Renders an invisible anchor element.
Automatically enables hover/press styles when provided.`},target:{required:!1,tsType:{name:"string"},description:"Link target (e.g., '_blank'). Only used with href."},rel:{required:!1,tsType:{name:"string"},description:`Link relationship. Automatically includes noopener noreferrer when
target is "_blank".`},isDisabled:{required:!1,tsType:{name:"boolean"},description:`Whether the item is disabled.
@default false`,defaultValue:{value:"false",computed:!1}},isSelected:{required:!1,tsType:{name:"boolean"},description:`Whether the item is currently selected.
@default false`,defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};export{r as X,l as a};
