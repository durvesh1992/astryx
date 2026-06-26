import{ad as t,ai as d,ar as m,aZ as h}from"./iframe-yRFQ_7VC.js";const a={container:{kVAEAm:"xds1n2onr6",kzqmXN:"xdsh8yej3",kVQacm:"xds7giv3",kAzted:"xds2lwn1j",kmuXW:"xds2lah0s",$$css:!0},ellipse:{kaIpWk:"xds16rqkct",$$css:!0}};function i({ratio:s,shape:e="rectangle",children:n,xstyle:o,className:r,style:l,ref:c,...p}){return t.jsx("div",{ref:c,...d(h("aspect-ratio",{shape:e}),m(a.container,e==="ellipse"&&a.ellipse,o),r,{...l,aspectRatio:s}),...p,children:t.jsx("div",{className:"xds10l6tqk xds13vifvy xds1o0tod xdsh8yej3 xds5yr21d",children:n})})}i.displayName="XDSAspectRatio";i.__docgenInfo={description:`AspectRatio component for maintaining a specific aspect ratio for its children.

Uses the CSS aspect-ratio property to maintain the ratio. The child element
is positioned absolutely to fill the container, which is useful for images,
videos, embeds, and placeholders.

Use \`shape="ellipse"\` to clip the container into an ellipse — a circle at
\`ratio={1}\` or an oval at other ratios. Both shapes respect the provided
\`ratio\`.

@example
\`\`\`
<XDSAspectRatio ratio={16 / 9}>
  <img src="image.jpg" alt="Widescreen image" style={{objectFit: 'cover'}} />
</XDSAspectRatio>
\`\`\`

@example
\`\`\`
<XDSAspectRatio ratio={1} shape="ellipse">
  <img src="avatar.jpg" alt="" style={{objectFit: 'cover'}} />
</XDSAspectRatio>
\`\`\``,methods:[],displayName:"XDSAspectRatio",props:{xstyle:{required:!1,tsType:{name:"StyleXStyles"},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:"Ref forwarded to the root element"},ratio:{required:!0,tsType:{name:"number"},description:"The aspect ratio as width/height (e.g., 16/9 = 1.777..., 4/3 = 1.333..., 1 for square)."},shape:{required:!1,tsType:{name:"union",raw:"'rectangle' | 'ellipse'",elements:[{name:"literal",value:"'rectangle'"},{name:"literal",value:"'ellipse'"}]},description:`The shape of the container. Both shapes respect the provided \`ratio\`.
- \`rectangle\` (default): a standard rectangular container.
- \`ellipse\`: clips the container to an ellipse — a circle when \`ratio={1}\`,
  or an oval at other ratios. Pair with a child that fills the container
  (e.g. an image with \`objectFit: 'cover'\`).

@default 'rectangle'

@example
\`\`\`
<XDSAspectRatio ratio={1} shape="ellipse">
  <img src="avatar.jpg" alt="" style={{objectFit: 'cover'}} />
</XDSAspectRatio>
\`\`\``,defaultValue:{value:"'rectangle'",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:`Content to render inside the aspect ratio container.
The child element will be positioned absolutely to fill the container.`}},composes:["Omit"]};export{i as X};
