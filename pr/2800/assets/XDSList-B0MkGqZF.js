import{at as u,ad as s,ai as b,ar as g,aZ as T}from"./iframe-yRFQ_7VC.js";import{X as p}from"./XDSListItem-C5CIKGjL.js";const o={list:{kogj98:"xds1ghz6dp",kZCmMZ:"xds1c1uobl",kH6xsr:"xds3ct3a4",k1xSpc:"xds78zum5",kXwgrk:"xdsdt5ytf",kOIVth:"xds1lsbc85",$$css:!0},withDividers:{kOIVth:"xdsxhr3t",$$css:!0},withCounter:{kt6KFK:"xds1vtlanm",$$css:!0}},X={kt6KFK:"xds1khind5",$$css:!0},w={counterStart:n=>[X,{"--x-counterReset":`xds-list ${n}`!=null?`xds-list ${n}`:void 0}]};function f({children:n,density:a="balanced",hasDividers:i=!1,header:l,listStyle:e="none",start:t,xstyle:x,className:y,style:h,"data-testid":v,ref:L}){const d=u.useId(),r=e==="decimal",S=r?"ol":"ul",c=u.useMemo(()=>({density:a,hasDividers:i,listStyle:e}),[a,i,e]),m=s.jsx(S,{ref:L,"data-testid":v,"aria-labelledby":l!=null?d:void 0,...r&&t!=null&&t!==1?{start:t}:{},...e==="none"&&!r?{role:"list"}:{},...b(T("list",{density:a,listStyle:e}),g(o.list,i&&o.withDividers,e!=="none"&&(t!=null&&t!==1?w.counterStart(t-1):o.withCounter),x),y,h),children:n});return l==null?s.jsx(p,{value:c,children:m}):s.jsx(p,{value:c,children:s.jsxs("div",{className:"xds78zum5 xdsdt5ytf",children:[s.jsx("div",{id:d,className:"xds1p37lm5",children:l}),m]})})}f.displayName="XDSList";f.__docgenInfo={description:`A vertical list component for rendering collections of items.

Renders semantic \`<ul>\` or \`<ol>\` elements with configurable density,
dividers, marker styles, and an optional header.

@example
\`\`\`
<XDSList>
  <XDSListItem label="Notifications" description="Manage your alerts" />
  <XDSListItem label="Privacy" description="Control your data" />
</XDSList>
<XDSList listStyle="decimal" density="compact">
  <XDSListItem label="First step" />
  <XDSListItem label="Second step" />
</XDSList>
\`\`\``,methods:[],displayName:"XDSList",props:{xstyle:{required:!1,tsType:{name:"StyleXStyles"},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLUListElement | HTMLOListElement>",elements:[{name:"union",raw:"HTMLUListElement | HTMLOListElement",elements:[{name:"HTMLUListElement"},{name:"HTMLOListElement"}]}]},description:"Ref forwarded to the root element"},children:{required:!0,tsType:{name:"ReactNode"},description:"List items. Should be XDSListItem components."},density:{required:!1,tsType:{name:"union",raw:"'compact' | 'balanced' | 'spacious'",elements:[{name:"literal",value:"'compact'"},{name:"literal",value:"'balanced'"},{name:"literal",value:"'spacious'"}]},description:`Spacing density for list items.
- 'compact': Tighter spacing for dense UIs
- 'balanced': Standard spacing
- 'spacious': Extra spacing for readability
@default 'balanced'`,defaultValue:{value:"'balanced'",computed:!1}},hasDividers:{required:!1,tsType:{name:"boolean"},description:`Whether to show dividers between list items.
@default false`,defaultValue:{value:"false",computed:!1}},header:{required:!1,tsType:{name:"ReactNode"},description:`Header content rendered above the list.
Semantically associated via aria-labelledby.`},listStyle:{required:!1,tsType:{name:"union",raw:"'none' | 'disc' | 'decimal' | 'circle'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'disc'"},{name:"literal",value:"'decimal'"},{name:"literal",value:"'circle'"}]},description:"List marker style.\nWhen 'decimal', renders an `<ol>`. Otherwise renders a `<ul>`.\n@default 'none'",defaultValue:{value:"'none'",computed:!1}},start:{required:!1,tsType:{name:"number"},description:`Starting number for ordered lists (listStyle='decimal').
Sets the CSS counter to begin at this value.
@default 1`},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing frameworks."}},composes:["Omit"]};export{f as X};
