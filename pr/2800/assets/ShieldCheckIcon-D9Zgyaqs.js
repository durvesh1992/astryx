import{at as a,ad as e,m as x,ai as o,aZ as h,X as v,ar as m,a0 as M,aB as V}from"./iframe-yRFQ_7VC.js";const O={info:"info",warning:"warning",error:"error",success:"success"},F={info:"status",warning:"alert",error:"alert",success:"status"},H={info:"accent",warning:"warning",error:"error",success:"success"},n={root:{k1xSpc:"xds78zum5",kXwgrk:"xdsdt5ytf",kMv6JI:"xdsjb2p0i",$$css:!0},header:{k1xSpc:"xds78zum5",kGNEyG:"xds1cy8zhl",kOIVth:"xds1txdalj",k8WAf4:"xds8o8v82",kg3NbH:"xds1pzlopt",$$css:!0},headerCardStandalone:{kaIpWk:"xds1hviunn",krdFHd:null,kfmiAY:null,kVL7Gh:null,kT0f0o:null,kIxVMA:null,ksF3WI:null,kqGeR4:null,kYm2EN:null,$$css:!0},headerCardWithContent:{kIxVMA:"xds14k9mlb",ksF3WI:"xdsn9rnvb",krdFHd:null,kfmiAY:null,kqGeR4:"xdsfrllxf",kYm2EN:"xdsjppbhk",kVL7Gh:null,kT0f0o:null,$$css:!0},headerCentered:{kGNEyG:"xds6s0dn4",$$css:!0},endArea:{k1xSpc:"xds78zum5",kGNEyG:"xds6s0dn4",kOIVth:"xds1txdalj",kmuXW:"xds2lah0s",keTefX:"xdsvc5jky",kqGvvJ:"xds81ka23",$$css:!0}},L={info:{kWkggS:"xdsgcxg3y",$$css:!0},warning:{kWkggS:"xds24i8r5",$$css:!0},error:{kWkggS:"xds1pritpl",$$css:!0},success:{kWkggS:"xdsu13z74",$$css:!0}};function y({status:s,title:d,description:t,icon:i,isDismissable:l=!1,onDismiss:b,endContent:c,container:u="card",defaultIsExpanded:w=!1,children:f,xstyle:S,className:D,style:j,ref:C,...N}){const[q,T]=a.useState(!1),[r,E]=a.useState(w),X=O[s],R=F[s],z=H[s],p=f!=null;if(q)return null;const $=()=>{T(!0),b?.()},I=()=>{E(G=>!G)},B=c!=null||l||p,W=c!=null||l,A=t==null&&W,g=p&&r,k=u==="card";return e.jsxs("div",{ref:C,role:R,...o(m(n.root,S),D,j),...N,children:[e.jsxs("div",{...o(h("banner",{container:u,status:s}),m(n.header,A&&n.headerCentered,L[s],k&&(g?n.headerCardWithContent:n.headerCardStandalone))),children:[e.jsx("div",{...o(h("banner-icon",{status:s}),{className:"xds78zum5 xds6s0dn4 xds2lah0s"}),"aria-hidden":"true",children:i??e.jsx(x,{icon:X,size:"md",color:z})}),e.jsxs("div",{className:"xds78zum5 xdsdt5ytf xdsxhr3t xds98rzlu xdseuugli",children:[e.jsx("p",{className:"xds1ghz6dp xdsjb2p0i xdscr08ib xds2mo6ok xds1kq96og xds1tgivj0",children:d}),t!=null&&e.jsx("p",{className:"xds1ghz6dp xdsjb2p0i xds141an7d xds1sodnla xds1ltkj2j xdsv1l7n4",children:t})]}),B&&e.jsxs("div",{...m(n.endArea,M.inset(V["--spacing-2"])),children:[c,p&&e.jsx(v,{variant:"ghost",size:"sm",label:r?"Collapse":"Expand",tooltip:r?"Collapse":"Expand",icon:e.jsx("span",{...{0:{className:"xds3nfvp2 xds11xpdln xdsuedmi6 xdslr8y92"},1:{className:"xds3nfvp2 xds11xpdln xdsuedmi6 xdslr8y92 xds19jd1h0"}}[!!r<<0],children:e.jsx(x,{icon:"chevronDown",size:"sm",color:"inherit"})}),onClick:I,"aria-expanded":r,isIconOnly:!0}),l&&e.jsx(v,{variant:"ghost",size:"sm",label:"Dismiss",tooltip:"Dismiss",icon:e.jsx(x,{icon:"close",size:"sm",color:"inherit"}),onClick:$,isIconOnly:!0})]})]}),g&&e.jsx("div",{...o(h("banner-content",{container:u,status:s}),{0:{className:"xds1de1mus xds8o8v82 xds1pzlopt xds1i535u5 xds1pcaw5z xds92x3c3 xds19ypqd9 xds32b0ac xds1q0q8m5 xds1utcnwd xdstgwc6q xdsw8gpjh"},1:{className:"xds1de1mus xds8o8v82 xds1pzlopt xds1i535u5 xds1pcaw5z xds92x3c3 xds19ypqd9 xds32b0ac xds1q0q8m5 xds1utcnwd xdstgwc6q xdsw8gpjh xdsv76oww xds1padx2d"}}[!!k<<0]),children:f})]})}y.displayName="XDSBanner";y.__docgenInfo={description:`A persistent status notification banner for info, warning, error, or success messages.

Two-part visual structure:
- Header: colored status background with icon, title, description, and actions
- Content (optional): collapsible card background area for additional rich content

When children are provided, a collapse/expand chevron button appears in the
header end area (to the left of the dismiss button if present). Clicking it
toggles the visibility of the content area.

Manages its own dismissed state internally — the banner hides on dismiss
even if \`onDismiss\` is not provided, so product teams don't need to wire
up state management for basic dismiss behavior.

Uses \`role="alert"\` for error/warning and \`role="status"\` for info/success.

@example
\`\`\`
<XDSBanner status="info" title="New update available" />
<XDSBanner
  status="error"
  title="Something went wrong"
  description="Please try again later."
  isDismissable
  onDismiss={() => logDismiss()}
/>
<XDSBanner
  status="error"
  title="Multiple errors found"
  description="The following issues need to be resolved:"
  isDismissable>
  <ul>
    <li>Email address is invalid</li>
    <li>Password must be at least 8 characters</li>
  </ul>
</XDSBanner>
<XDSBanner
  status="warning"
  title="Configuration changes"
  defaultIsExpanded>
  <p>Details here...</p>
</XDSBanner>
\`\`\``,methods:[],displayName:"XDSBanner",props:{xstyle:{required:!1,tsType:{name:"StyleXStyles"},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:"Ref forwarded to the root element"},status:{required:!0,tsType:{name:"XDSBannerStatusMap"},description:"Status type controlling the icon and color scheme."},title:{required:!0,tsType:{name:"ReactNode"},description:"Title text or ReactNode displayed prominently in the header area."},description:{required:!1,tsType:{name:"ReactNode"},description:"Optional description text below the title in the header area."},icon:{required:!1,tsType:{name:"ReactNode"},description:"Override the default status icon."},isDismissable:{required:!1,tsType:{name:"boolean"},description:`Whether the banner can be dismissed.
When true, shows a close button and manages internal dismissed state
so the banner disappears even if \`onDismiss\` is not provided.
@default false`,defaultValue:{value:"false",computed:!1}},onDismiss:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:`Called when the dismiss button is clicked.
The banner will hide itself regardless of whether this callback is provided.`},endContent:{required:!1,tsType:{name:"ReactNode"},description:'Action button rendered in the header area (end-aligned).\nTypically an XDSButton with a secondary or ghost variant.\n\n@example\n```\nendContent={<XDSButton label="Retry" variant="ghost" onClick={handleRetry} />}\n```'},container:{required:!1,tsType:{name:"XDSBannerContainerMap"},description:"Container type of the banner.\n- `card`: standalone card with border-radius\n- `section`: full-width section banner (no border-radius)\n@default 'card'",defaultValue:{value:"'card'",computed:!1}},defaultIsExpanded:{required:!1,tsType:{name:"boolean"},description:`Whether the content area (children) starts expanded.
Only relevant when children are provided.
@default false`,defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:`Extra content rendered below the header in a collapsible card-background area.
Use for rich content like lists, links, or detailed information.
When provided, a collapse/expand toggle button appears in the header.`}},composes:["Omit"]};function P({title:s,titleId:d,...t},i){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:i,"aria-labelledby":d},t),s?a.createElement("title",{id:d},s):null,a.createElement("path",{fillRule:"evenodd",d:"M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z",clipRule:"evenodd"}))}const Z=a.forwardRef(P);export{Z as F,y as X};
