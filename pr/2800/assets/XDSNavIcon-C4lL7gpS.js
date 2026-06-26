import{ad as i,ai as c,ar as d,aZ as l}from"./iframe-yRFQ_7VC.js";const p={base:{k1xSpc:"xds78zum5",kGNEyG:"xds6s0dn4",kjj79g:"xdsl56j7k",kaIpWk:"xds16rqkct",kWkggS:"xds1ewilqj",kMwMTN:"xds17wrial",kmuXW:"xds2lah0s",kzqmXN:"xds805d0l",kZKoxP:"xds1ueg155",$$css:!0}};function e({icon:n,xstyle:o,className:a,style:s,ref:t,...r}){return i.jsx("span",{ref:t,...c(l("navicon"),d(p.base,o),a,s),...r,children:n})}e.displayName="XDSNavIcon";e.__docgenInfo={description:`Circular icon container for navigation headers.

Wraps an icon with a circular accent-colored background, suitable for
use as a logo in top navigation or side navigation title areas.

@example
\`\`\`
import {HomeIcon} from '@heroicons/react/24/solid';
<XDSTopNavHeading
  heading="Dashboard"
  logo={<XDSNavIcon icon={<HomeIcon style={{width: 16, height: 16}} />} />}
/>
<XDSPageNavHeader
  icon={<XDSNavIcon icon={<HomeIcon style={{width: 16, height: 16}} />} />}
  heading="My App"
/>
\`\`\``,methods:[],displayName:"XDSNavIcon",props:{xstyle:{required:!1,tsType:{name:"StyleXStyles"},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLSpanElement>",elements:[{name:"HTMLSpanElement"}]},description:"Ref forwarded to the root element"},icon:{required:!0,tsType:{name:"ReactNode"},description:`The icon element to render inside the circular background.
Should be an XDSIcon or similar icon component.`}},composes:["Omit"]};export{e as X};
