import{ad as t,at as y,ai as f,ar as h,aZ as v}from"./iframe-yRFQ_7VC.js";const d={container:{k1xSpc:"xds78zum5",kXwgrk:"xdsdt5ytf",kGNEyG:"xds6s0dn4",kjj79g:"xdsl56j7k",k9WMMc:"xds2b8uid",kOIVth:"xds18g69wz",k8WAf4:"xdsmfvnks",kg3NbH:"xdsm7rs69",$$css:!0},containerCompact:{kOIVth:"xds1txdalj",k8WAf4:"xds1na6nto",kg3NbH:"xds1pzlopt",$$css:!0}};function l({title:i,description:s,icon:a,actions:n,headingLevel:o=3,isCompact:e=!1,xstyle:r,className:c,style:p,ref:m,...x}){const u=`h${o}`;return t.jsxs("div",{ref:m,role:"status",...f(v("empty-state",{variant:e?"compact":null}),h(d.container,e&&d.containerCompact,r),c,p),...x,children:[a!=null&&t.jsx("div",{"aria-hidden":"true",children:a}),t.jsxs("div",{className:"xds78zum5 xdsdt5ytf xds6s0dn4 xdsxc7z9f",children:[y.createElement(u,{0:{className:"xds1ghz6dp xdsjb2p0i xds18juvz8 xds2mo6ok xdsf74fhv xds1tgivj0"},1:{className:"xds1ghz6dp xdsjb2p0i xds2mo6ok xdsf74fhv xds1tgivj0 xdscr08ib"}}[!!e<<0],i),s!=null&&t.jsx("p",{...{0:{className:"xds1ghz6dp xdsjb2p0i xdsjm74w1 xds1sodnla xdsw6l6zx xdsv1l7n4"},1:{className:"xds1ghz6dp xdsjb2p0i xds1sodnla xdsw6l6zx xdsv1l7n4 xds141an7d"}}[!!e<<0],children:s})]}),n!=null&&t.jsx("div",{...{0:{className:"xds78zum5 xds1q0g3np xds6s0dn4 xds1txdalj xdscsaf9d"},1:{className:"xds78zum5 xds6s0dn4 xds1txdalj xdscsaf9d xdsdt5ytf"}}[!!e<<0],children:n})]})}l.displayName="XDSEmptyState";l.__docgenInfo={description:`An empty state placeholder for content areas with no data.
Displays an icon or illustration, title, optional description, and action buttons.

Uses \`role="status"\` to announce content to screen readers.
Styles use XDS theme tokens via StyleX. Wrap your app in <Theme> to apply a theme.

@example
\`\`\`
<XDSEmptyState
  title="No results found"
  description="Try adjusting your search or filters."
/>
<XDSEmptyState
  icon={<XDSIcon icon={InboxIcon} size="lg" />}
  title="No messages"
  description="You're all caught up!"
  actions={<XDSButton label="Compose" variant="primary" />}
/>
\`\`\``,methods:[],displayName:"XDSEmptyState",props:{xstyle:{required:!1,tsType:{name:"StyleXStyles"},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:"Ref forwarded to the root element"},title:{required:!0,tsType:{name:"string"},description:"The primary message displayed in the empty state."},description:{required:!1,tsType:{name:"string"},description:"Optional secondary text providing additional context."},icon:{required:!1,tsType:{name:"ReactNode"},description:`Optional icon or illustration displayed above the title.
Rendered as decorative (aria-hidden="true").`},actions:{required:!1,tsType:{name:"ReactNode"},description:"Optional action buttons displayed below the description.\nLaid out horizontally by default, stacked vertically when `isCompact`."},headingLevel:{required:!1,tsType:{name:"union",raw:"1 | 2 | 3 | 4 | 5 | 6",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"}]},description:`Semantic heading level for the title element.
Controls the rendered HTML tag (h1–h6) to fit the document outline.
@default 3`,defaultValue:{value:"3",computed:!1}},isCompact:{required:!1,tsType:{name:"boolean"},description:`Use compact variant for constrained spaces with reduced spacing.
@default false`,defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};export{l as X};
