import{ad as f,ai as S,ar as b,aZ as h}from"./iframe-yRFQ_7VC.js";import{c as v}from"./container.stylex-BI6SFdSl.js";import{e as $,b as w,a as D,c as X,f as T}from"./padding.stylex-BDg7w1Mn.js";const u={card:{"--_card-radius":"xds2kkz0m",kaIpWk:"xds153u1i6",kVQacm:"xds7giv3",kMzoRj:"xds1litavf",ksu8eU:"xds1y0btm7",kVAM5u:"xds9r1u3d",$$css:!0},withBorder:{kVAM5u:"xdsvy26l8",kzOINU:null,kGJrpR:null,kaZRDh:null,kBCPoo:null,k26BEO:null,k5QoK5:null,kLZC3w:null,kL6WhQ:null,$$css:!0},scrollable:{kVQacm:"xdsysyzu8",kXHlph:null,kORKVm:null,$$css:!0}},C={default:{kWkggS:"xds1de1mus",$$css:!0},transparent:{kWkggS:"xdsjbqb8w",$$css:!0},muted:{kWkggS:"xdswmxj5m",$$css:!0},blue:{kWkggS:"xds1o0wnni",$$css:!0},cyan:{kWkggS:"xds1rgj867",$$css:!0},gray:{kWkggS:"xdsspzpui",$$css:!0},green:{kWkggS:"xds1sqjeoo",$$css:!0},orange:{kWkggS:"xds1e9xt6e",$$css:!0},pink:{kWkggS:"xdsnpoty2",$$css:!0},purple:{kWkggS:"xds16i6n6f",$$css:!0},red:{kWkggS:"xds1cibrc5",$$css:!0},teal:{kWkggS:"xds1jtji5o",$$css:!0},yellow:{kWkggS:"xds1bo7t0x",$$css:!0}},W={sizing:(t,a,r,s)=>[{kzqmXN:t!=null?"xds5lhr3w":t,kZKoxP:a!=null?"xds16ye13r":a,ks0D6T:r!=null?"xdsf68679":r,kAzted:s!=null?"xds82snj4":s,$$css:!0},{"--x-width":(e=>typeof e=="number"?e+"px":e??void 0)(t),"--x-height":(e=>typeof e=="number"?e+"px":e??void 0)(a),"--x-maxWidth":(e=>typeof e=="number"?e+"px":e??void 0)(r),"--x-minHeight":(e=>typeof e=="number"?e+"px":e??void 0)(s)}]};function m({width:t,height:a,maxWidth:r,minHeight:s,children:e,padding:o,variant:d="default",xstyle:c,className:p,style:g,ref:y,...k}){const x=a!=null&&a!=="auto",l=o==null,n=o??4,i=T[n];return f.jsx("div",{ref:y,...S(h("card",{variant:d}),b(u.card,C[d],d==="default"&&u.withBorder,x&&u.scrollable,W.sizing(t??null,a??null,r??null,s??null),...v(l?{useThemeDefault:"card"}:{paddingInnerX:i,paddingInnerY:i,paddingOuterX:i,paddingOuterY:i}),!l&&n!==4&&$[n],!l&&n!==4&&w[n],!l&&n!==4&&D[n],!l&&n!==4&&X[n],c),p,g),...k,children:e})}m.displayName="XDSCard";m.__docgenInfo={description:`A card container with border and themed styling.

Applies card-specific appearance (background, border, border-radius)
and sets CSS variables for child layout components.

@compositionHint Use as a top-level container for elevated content.
Pair with XDSLayout for structured header/content/footer layouts.

@example
\`\`\`
<XDSCard width={400} height={300}>
  <XDSLayout
    header={<XDSLayoutHeader hasDivider>Title</XDSLayoutHeader>}
    content={<XDSLayoutContent>Content</XDSLayoutContent>}
    footer={<XDSLayoutFooter hasDivider>Actions</XDSLayoutFooter>}
  />
</XDSCard>
\`\`\`

@example
\`\`\`
<XDSCard variant="blue" width={300}>
  <p>Blue tinted card</p>
</XDSCard>
\`\`\`

@example
\`\`\`
<XDSCard variant="muted" width={300}>
  <p>Subtle de-emphasised card</p>
</XDSCard>
\`\`\``,methods:[],displayName:"XDSCard",props:{xstyle:{required:!1,tsType:{name:"StyleXStyles"},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:""},className:{required:!1,tsType:{name:"string"},description:"CSS class name(s) appended to the root element."},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles to apply to the root element."},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:`Width of the card.
Numbers are treated as pixels, strings are used as-is.`},height:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:`Height of the card.
Numbers are treated as pixels, strings are used as-is.`},maxWidth:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:`Maximum width of the card.
Numbers are treated as pixels, strings are used as-is.`},minHeight:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:`Minimum height of the card.
Numbers are treated as pixels, strings are used as-is.`},children:{required:!1,tsType:{name:"ReactNode"},description:`Content to render inside the card.
Should typically be XDSLayout child components.`},padding:{required:!1,tsType:{name:"union",raw:"0 | 0.5 | 1 | 1.5 | 2 | 3 | 4 | 5 | 6 | 8 | 10",elements:[{name:"literal",value:"0"},{name:"literal",value:"0.5"},{name:"literal",value:"1"},{name:"literal",value:"1.5"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"8"},{name:"literal",value:"10"}]},description:`Internal padding of the card using the spacing scale.
Accepts numeric spacing steps: 0, 0.5, 1, 1.5, 2, 3, 4, 5, 6, 8, 10.
@default 4 (16px)`},variant:{required:!1,tsType:{name:"union",raw:`| 'default'
| 'transparent'
| 'muted'
| 'blue'
| 'cyan'
| 'gray'
| 'green'
| 'orange'
| 'pink'
| 'purple'
| 'red'
| 'teal'
| 'yellow'`,elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'transparent'"},{name:"literal",value:"'muted'"},{name:"literal",value:"'blue'"},{name:"literal",value:"'cyan'"},{name:"literal",value:"'gray'"},{name:"literal",value:"'green'"},{name:"literal",value:"'orange'"},{name:"literal",value:"'pink'"},{name:"literal",value:"'purple'"},{name:"literal",value:"'red'"},{name:"literal",value:"'teal'"},{name:"literal",value:"'yellow'"}]},description:"Background color variant.\n- `default`: standard card background with visible border\n- `transparent`: no background, no visible border — for grouping without visual weight\n- `muted`: subtle muted background for de-emphasised cards\n- Non-semantic: `blue`, `cyan`, `gray`, `green`, `orange`, `pink`, `purple`, `red`, `teal`, `yellow`\n@default 'default'",defaultValue:{value:"'default'",computed:!1}}},composes:["Omit"]};export{m as X};
