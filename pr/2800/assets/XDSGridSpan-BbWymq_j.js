import{ad as p,ai as m,ar as u,aZ as c}from"./iframe-yRFQ_7VC.js";const f={span:{k7Eaqz:"xdseuugli",k1xSpc:"xdsrvj5dj",kZKoxP:"xds5yr21d",$$css:!0}};function s({columns:e,rows:n,xstyle:r,className:o,style:a,children:t,ref:i,...l}){const d={...e!=null&&{gridColumn:e==="full"?"1 / -1":`span ${e}`},...n!=null&&{gridRow:`span ${n}`}};return p.jsx("div",{ref:i,...m(c("grid-span"),u(f.span,r),o,{...a,...d}),...l,children:t})}s.displayName="XDSGridSpan";s.__docgenInfo={description:`Grid span component for controlling how many columns/rows a grid item spans.

Use as a direct child of XDSGrid to make an item span multiple columns
or rows.

@example
\`\`\`
<XDSGrid columns={3} gap={4}>
  <XDSGridSpan columns={2}>Wide item</XDSGridSpan>
  <div>Normal</div>
</XDSGrid>
\`\`\``,methods:[],displayName:"XDSGridSpan",props:{xstyle:{required:!1,tsType:{name:"StyleXStyles"},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:"Ref forwarded to the root element"},columns:{required:!1,tsType:{name:"union",raw:"number | 'full'",elements:[{name:"number"},{name:"literal",value:"'full'"}]},description:"Number of columns to span, or 'full' to span all columns.\n- Number: `grid-column: span N`\n- 'full': `grid-column: 1 / -1` (spans entire row)"},rows:{required:!1,tsType:{name:"number"},description:"Number of rows to span.\nSets `grid-row: span N`."},children:{required:!1,tsType:{name:"ReactNode"},description:"Content to render inside the grid span."}},composes:["Omit"]};export{s as X};
