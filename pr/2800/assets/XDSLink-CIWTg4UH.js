import{aU as U,ad as t,ai as b,ar as T,aZ as g,v as V,r as B,m as C}from"./iframe-yRFQ_7VC.js";import{c as I}from"./computeTargetAndRel-BlG0ENK0.js";import{u as N}from"./useXDSInteractiveRole-C4QNKBOy.js";const e={base:{k1xSpc:"xds3nfvp2",kGNEyG:"xds6s0dn4",kOIVth:"xds1lsbc85",kMv6JI:"xdsjb2p0i",kGuDYH:"xds1qlqyl8",kLWn49:"xds15bjb6t",k63SB2:"xds1pd3egz",kybGjl:"xds1hl2dhg xds4ohgrr",kkrTdU:"xds1ypdohk",k1ekBW:"xds1mpt4pi",kIyJzY:"xdsuedmi6",kAMwcw:"xdslr8y92",kI3sdo:"xds17nn4n9",kInvED:"xds1wfwxd8 xds7s97pk",$$css:!0},buttonReset:{kWkggS:"xdsjbqb8w",ksu8eU:"xdsng3xce",kmVPX3:"xds1717udv",kfzvcC:"xds67bb7w",kVAEAm:"xds1n2onr6",$$css:!0},hasUnderline:{kybGjl:"xds1bvjpef",k1TLXF:null,kMnn75:null,kmVMDM:null,kNySMw:null,$$css:!0},disabled:{kkrTdU:"xds1h6gzvc",kSiTet:"xdsbyyjgo",kfzvcC:"xds47corl",$$css:!0},standalone:{kGuDYH:"xdsjm74w1",kLWn49:"xdsw6l6zx",$$css:!0}},w={primary:{kMwMTN:"xds1tgivj0",$$css:!0},secondary:{kMwMTN:"xdsv1l7n4",$$css:!0},disabled:{kMwMTN:"xdsnbbluu",$$css:!0},placeholder:{kMwMTN:"xdsv1l7n4",$$css:!0},active:{kMwMTN:"xdsjse4m1",$$css:!0},inherit:{kMwMTN:"xds1heor9g",$$css:!0}};function L({as:S,label:i,href:r,hasUnderline:o=!1,isDisabled:n=!1,isExternalLink:d=!1,target:M,onClick:s,tooltip:u,isStandalone:m=!1,type:X="body",size:D,weight:q,color:a="active",display:E="inline",maxLines:$=0,children:R,rel:H,xstyle:c,className:p,style:f,ref:y,...h}){const A=U(S),x=N({href:r,onClick:s,isDisabled:n}),{target:j,rel:W}=I(d?"_blank":M,H),k=x==="button"||x==="inert"&&r==null,v=t.jsxs(t.Fragment,{children:[t.jsx(B,{type:X,size:D,weight:q,color:a,display:E,maxLines:$,children:R}),d&&!k&&t.jsx(C,{icon:"externalLink",size:"xsm",color:"inherit"})]});let l;return k?l=t.jsx("button",{ref:y,type:"button",onClick:s,"aria-label":i||void 0,"aria-disabled":n||void 0,tabIndex:n?-1:void 0,disabled:n,...b(g("link",{color:a}),T(e.base,e.buttonReset,w[a],o&&e.hasUnderline,m&&e.standalone,n&&e.disabled,c),p,f),...h,children:v}):l=t.jsx(A,{ref:y,href:r,target:j,rel:W,onClick:s,"aria-label":i||void 0,"aria-disabled":n||void 0,tabIndex:n?-1:void 0,...b(g("link",{color:a}),T(e.base,w[a],o&&e.hasUnderline,m&&e.standalone,n&&e.disabled,c),p,f),...h,children:v}),u?t.jsx(V,{content:u,placement:"above",children:l}):l}L.displayName="XDSLink";L.__docgenInfo={description:`A styled anchor link component.

Uses XDSText internally for typography styling.
Wrap your app in <Theme> to apply a theme.

@example
\`\`\`
<XDSLink href="/docs">Documentation</XDSLink>
<XDSLink href="https://github.com" isExternalLink>GitHub</XDSLink>
<XDSLink href="/settings" color="secondary">Settings</XDSLink>
<XDSLink href="/privacy" hasUnderline>Privacy Policy</XDSLink>
<XDSLink label="Close dialog" href="/home"><XDSIcon icon="x" /></XDSLink>
\`\`\``,methods:[],displayName:"XDSLink",props:{xstyle:{required:!1,tsType:{name:"StyleXStyles"},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLAnchorElement | HTMLButtonElement>",elements:[{name:"union",raw:"HTMLAnchorElement | HTMLButtonElement",elements:[{name:"HTMLAnchorElement"},{name:"HTMLButtonElement"}]}]},description:"Ref forwarded to the root element"},as:{required:!1,tsType:{name:"ElementType"},description:`Custom component to render instead of \`<a>\`.
Overrides the provider-level default set by XDSLinkProvider.
Must accept href, className, style, and children props.
Only used when href is provided.`},label:{required:!1,tsType:{name:"string"},description:`Accessible label for the link.
Used as aria-label when content is not self-descriptive
(e.g. icon-only links). When children are text, this is
unnecessary — the link text itself serves as the label.`},href:{required:!1,tsType:{name:"string"},description:"Link destination URL.\nWhen undefined, renders as a `<button>` with link styling\nfor semantic correctness and accessibility."},hasUnderline:{required:!1,tsType:{name:"boolean"},description:`Whether the link should always display an underline.
When false, underline only appears on hover.
@default false`,defaultValue:{value:"false",computed:!1}},isDisabled:{required:!1,tsType:{name:"boolean"},description:`Whether the link is disabled.
@default false`,defaultValue:{value:"false",computed:!1}},isExternalLink:{required:!1,tsType:{name:"boolean"},description:`Whether the link opens in a new tab with an external link icon.
When true, sets target="_blank" and rel="noopener noreferrer".
@default false`,defaultValue:{value:"false",computed:!1}},target:{required:!1,tsType:{name:"string"},description:`Where to open the linked document.
Overridden to "_blank" when isExternalLink is true.`},rel:{required:!1,tsType:{name:"string"},description:`Link relationship (e.g. "noopener noreferrer").
Automatically includes "noopener noreferrer" when isExternalLink is true.`},download:{required:!1,tsType:{name:"union",raw:"string | boolean",elements:[{name:"string"},{name:"boolean"}]},description:`Causes the browser to download the linked URL. A string value
specifies the suggested filename.`},referrerPolicy:{required:!1,tsType:{name:"ReactHTMLAttributeReferrerPolicy",raw:"React.HTMLAttributeReferrerPolicy"},description:"Referrer policy for the link."},onClick:{required:!1,tsType:{name:"ReactMouseEventHandler",raw:"React.MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>",elements:[{name:"union",raw:"HTMLAnchorElement | HTMLButtonElement",elements:[{name:"HTMLAnchorElement"},{name:"HTMLButtonElement"}]}]},description:`Click handler. Fires before navigation (when href is set),
or as the primary action (when href is undefined).`},tooltip:{required:!1,tsType:{name:"string"},description:"Tooltip text to display on hover."},isStandalone:{required:!1,tsType:{name:"boolean"},description:`Whether the link is standalone (not inline within text).
Applies base font sizing when true.
@default false`,defaultValue:{value:"false",computed:!1}},type:{required:!1,tsType:{name:"union",raw:`| XDSBuiltinTextType
| (keyof XDSCustomTextTypes & string)`,elements:[{name:"union",raw:`| 'body'
| 'large'
| 'label'
| 'supporting'
| 'code'
| 'display-1'
| 'display-2'
| 'display-3'
| 'inherit'`,elements:[{name:"literal",value:"'body'"},{name:"literal",value:"'large'"},{name:"literal",value:"'label'"},{name:"literal",value:"'supporting'"},{name:"literal",value:"'code'"},{name:"literal",value:"'display-1'"},{name:"literal",value:"'display-2'"},{name:"literal",value:"'display-3'"},{name:"literal",value:"'inherit'"}]},{name:"unknown"}]},description:`Semantic text type for XDSText. Determines base typography.
@default 'body'`,defaultValue:{value:"'body'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:`| '4xs'
| '3xs'
| '2xs'
| 'xsm'
| 'sm'
| 'base'
| 'lg'
| 'xl'
| '2xl'
| '3xl'
| '4xl'`,elements:[{name:"literal",value:"'4xs'"},{name:"literal",value:"'3xs'"},{name:"literal",value:"'2xs'"},{name:"literal",value:"'xsm'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'base'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"},{name:"literal",value:"'3xl'"},{name:"literal",value:"'4xl'"}]},description:"Explicit font size override. Forwarded to XDSText."},weight:{required:!1,tsType:{name:"union",raw:"'normal' | 'medium' | 'semibold' | 'bold'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'semibold'"},{name:"literal",value:"'bold'"}]},description:"Font weight override. Forwarded to XDSText."},color:{required:!1,tsType:{name:"union",raw:`| 'primary'
| 'secondary'
| 'disabled'
| 'placeholder'
| 'active'
| 'inherit'`,elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'disabled'"},{name:"literal",value:"'placeholder'"},{name:"literal",value:"'active'"},{name:"literal",value:"'inherit'"}]},description:`Text color. Forwarded to XDSText.
@default 'active'`,defaultValue:{value:"'active'",computed:!1}},display:{required:!1,tsType:{name:"union",raw:"'inline' | 'block'",elements:[{name:"literal",value:"'inline'"},{name:"literal",value:"'block'"}]},description:`Display type for XDSText. Forwarded to XDSText.
@default 'inline'`,defaultValue:{value:"'inline'",computed:!1}},maxLines:{required:!1,tsType:{name:"number"},description:`Maximum lines before truncation. Forwarded to XDSText.
@default 0`,defaultValue:{value:"0",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:"Link content (required)."}},composes:["Omit"]};export{L as X};
