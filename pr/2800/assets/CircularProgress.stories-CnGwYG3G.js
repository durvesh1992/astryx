import{at as E,ad as e,ai as d,ar as u,aZ as m,r as k}from"./iframe-yRFQ_7VC.js";import"./preload-helper-Ct5FWWRu.js";const U={sm:{diameter:32,strokeWidth:3},md:{diameter:48,strokeWidth:4},lg:{diameter:64,strokeWidth:5}},i={root:{k1xSpc:"xds3nfvp2",kGNEyG:"xds6s0dn4",kjj79g:"xdsl56j7k",kVAEAm:"xds1n2onr6",kmuXW:"xds2lah0s",$$css:!0},rootWithLabel:{kXwgrk:"xdsdt5ytf",kOIVth:"xdszye2dw",$$css:!0},track:{kDwRjp:"xdsbh8q5q",kjVXCG:"xdspi25hw",$$css:!0},fill:{kDwRjp:"xdsbh8q5q",kU5bRw:"xds1owpc8m",k1ekBW:"xdsxnu56j",kIyJzY:"xds80gvsz",kAMwcw:"xdslr8y92",$$css:!0},fillIndeterminate:{kDwRjp:"xdsbh8q5q",kU5bRw:"xds1owpc8m",kKVMdj:"xds1e3k2x2",k44tkh:"xdsmg6eyc xdsnh0sag",kyAemX:"xds4hg4is",ko0y90:"xdsa4qsjk",$$css:!0}},I={accent:{kjVXCG:"xdsjsr54c",$$css:!0},success:{kjVXCG:"xds8y33gb",$$css:!0},warning:{kjVXCG:"xds9ezeq1",$$css:!0},error:{kjVXCG:"xds1vco6zm",$$css:!0},neutral:{kjVXCG:"xdsuxf9kk",$$css:!0}},_={accent:{kjVXCG:"xdsimx5ud",$$css:!0},success:{kjVXCG:"xds1uro670",$$css:!0},warning:{kjVXCG:"xds1wjzxuj",$$css:!0},error:{kjVXCG:"xdsjswp7v",$$css:!0},neutral:{kjVXCG:"xdspi25hw",$$css:!0}};function s({value:X,max:n=100,label:V,isLabelHidden:q=!0,children:C,size:D="md",variant:r="accent",xstyle:L,className:T,style:N,"data-testid":W,ref:M,...G}){const z=E.useId(),a=X==null,{diameter:l,strokeWidth:o}=U[D],c=(l-o)/2,P=2*Math.PI*c,w=Math.min(Math.max(0,X??0),n),R=n>0?w/n:0,A=P*(1-R),t=l/2,$=!q;return e.jsxs("div",{ref:M,...d(m("circular-progress",{variant:r,size:D}),u(i.root,$&&i.rootWithLabel,L),T,N),"data-testid":W,...G,children:[e.jsx("span",{id:z,...{0:{className:"xds10l6tqk xds1i1rx1s xdsjm9jq1 xds1717udv xdskdpibf xdsb3r6kr xdszpqnlu xdsuxw1ft xdsc342km"},1:{className:"xds141an7d xds1ltkj2j xds1e4wzip xdsv1l7n4"}}[!!$<<0],children:V}),e.jsxs("div",{className:"xds1n2onr6 xds3nfvp2",children:[e.jsxs("svg",{role:a?"progressbar":"meter","aria-labelledby":z,"aria-valuenow":a?void 0:w,"aria-valuemin":a?void 0:0,"aria-valuemax":a?void 0:n,width:l,height:l,viewBox:`0 0 ${l} ${l}`,...{0:{className:"xds1lliihq xds9tu13d"},1:{className:"xds1lliihq xdsca73tq xds1c74tu6 xdsy02sl2 xds1esw782 xdsa4qsjk"}}[!!a<<0],children:[e.jsx("circle",{...d(m("circular-progress-track"),u(i.track,_[r])),cx:t,cy:t,r:c,strokeWidth:o}),a?e.jsx("circle",{...d(m("circular-progress-fill",{variant:r}),u(i.fillIndeterminate,I[r])),cx:t,cy:t,r:c,strokeWidth:o}):e.jsx("circle",{...d(m("circular-progress-fill",{variant:r}),u(i.fill,I[r])),cx:t,cy:t,r:c,strokeWidth:o,strokeDasharray:P,strokeDashoffset:A})]}),C!=null&&e.jsx("div",{className:"xds10l6tqk xds10a8y8t xds78zum5 xds6s0dn4 xdsl56j7k xds47corl",children:C})]})]})}s.displayName="XDSCircularProgress";s.__docgenInfo={description:`A circular/radial progress indicator that shows completion as a ring.

In determinate mode, displays a known value as an arc fill.
In indeterminate mode, shows an animated spinning indicator.
Supports center content via children for labels, percentages, or icons.

@example
\`\`\`
<XDSCircularProgress value={75} label="Upload progress" />
<XDSCircularProgress value={75} label="Progress" max={100}>75%</XDSCircularProgress>
<XDSCircularProgress label="Loading..." />
\`\`\``,methods:[],displayName:"XDSCircularProgress",props:{xstyle:{required:!1,tsType:{name:"StyleXStyles"},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:"Ref forwarded to the root element"},value:{required:!1,tsType:{name:"number"},description:`Current value of the circular progress.
When omitted, the component renders an indeterminate spinning animation.`},max:{required:!1,tsType:{name:"number"},description:`Maximum value.
@default 100`,defaultValue:{value:"100",computed:!1}},label:{required:!0,tsType:{name:"string"},description:"Accessible label for the progress indicator. Required for a11y."},isLabelHidden:{required:!1,tsType:{name:"boolean"},description:`When true, the label is visually hidden but remains accessible to screen readers.
@default true`,defaultValue:{value:"true",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:`Content displayed in the center of the ring.
Typically a percentage string, icon, or custom content.`},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:`Diameter of the circular progress.
- 'sm': 32px
- 'md': 48px
- 'lg': 64px
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},variant:{required:!1,tsType:{name:"XDSCircularProgressVariantMap"},description:`Visual style variant mapped to semantic color tokens.
@default 'accent'`,defaultValue:{value:"'accent'",computed:!1}},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing utilities."}},composes:["Omit"]};const F={title:"Lab/CircularProgress",component:s,tags:["autodocs"],argTypes:{value:{control:{type:"range",min:0,max:100,step:1},description:"Current value"},max:{control:"number",description:"Maximum value"},label:{control:"text",description:"Accessible label"},size:{control:"select",options:["sm","md","lg"],description:"Ring diameter"},variant:{control:"select",options:["accent","success","warning","error","neutral"],description:"Semantic color variant"},isLabelHidden:{control:"boolean",description:"Visually hide the label"}}},p={args:{value:60,label:"Progress"}},g={args:{value:75,label:"Upload progress",size:"lg",children:"75%"}},x={render:()=>e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:[e.jsx(s,{value:60,size:"sm",label:"Small"}),e.jsx(s,{value:60,size:"md",label:"Medium"}),e.jsx(s,{value:60,size:"lg",label:"Large"})]})},v={render:()=>e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:[e.jsx(s,{value:60,size:"sm",label:"Small",children:e.jsx(k,{type:"supporting",style:{fontSize:8},children:"60%"})}),e.jsx(s,{value:60,size:"md",label:"Medium",children:e.jsx(k,{type:"supporting",style:{fontSize:11},children:"60%"})}),e.jsx(s,{value:60,size:"lg",label:"Large",children:e.jsx(k,{type:"body",children:"60%"})})]})},b={render:()=>e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:[e.jsx(s,{value:60,label:"Accent",variant:"accent"}),e.jsx(s,{value:80,label:"Positive",variant:"success"}),e.jsx(s,{value:50,label:"Warning",variant:"warning"}),e.jsx(s,{value:92,label:"Negative",variant:"error"}),e.jsx(s,{value:35,label:"Neutral",variant:"neutral"})]})},y={args:{value:0,label:"Not started"}},f={args:{value:100,label:"Complete",variant:"success",size:"lg",children:"100%"}},h={args:{label:"Loading..."}},S={render:()=>e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:[e.jsx(s,{size:"sm",label:"Loading small"}),e.jsx(s,{size:"md",label:"Loading medium"}),e.jsx(s,{size:"lg",label:"Loading large"})]})},j={render:()=>e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:[e.jsx(s,{label:"Accent",variant:"accent"}),e.jsx(s,{label:"Positive",variant:"success"}),e.jsx(s,{label:"Warning",variant:"warning"}),e.jsx(s,{label:"Negative",variant:"error"})]})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    value: 60,
    label: 'Progress'
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    value: 75,
    label: 'Upload progress',
    size: 'lg',
    children: '75%'
  }
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    alignItems: 'center'
  }}>
      <XDSCircularProgress value={60} size="sm" label="Small" />
      <XDSCircularProgress value={60} size="md" label="Medium" />
      <XDSCircularProgress value={60} size="lg" label="Large" />
    </div>
}`,...x.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    alignItems: 'center'
  }}>
      <XDSCircularProgress value={60} size="sm" label="Small">
        <XDSText type="supporting" style={{
        fontSize: 8
      }}>
          60%
        </XDSText>
      </XDSCircularProgress>
      <XDSCircularProgress value={60} size="md" label="Medium">
        <XDSText type="supporting" style={{
        fontSize: 11
      }}>
          60%
        </XDSText>
      </XDSCircularProgress>
      <XDSCircularProgress value={60} size="lg" label="Large">
        <XDSText type="body">60%</XDSText>
      </XDSCircularProgress>
    </div>
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    alignItems: 'center'
  }}>
      <XDSCircularProgress value={60} label="Accent" variant="accent" />
      <XDSCircularProgress value={80} label="Positive" variant="success" />
      <XDSCircularProgress value={50} label="Warning" variant="warning" />
      <XDSCircularProgress value={92} label="Negative" variant="error" />
      <XDSCircularProgress value={35} label="Neutral" variant="neutral" />
    </div>
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    value: 0,
    label: 'Not started'
  }
}`,...y.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    value: 100,
    label: 'Complete',
    variant: 'success',
    size: 'lg',
    children: '100%'
  }
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Loading...'
  }
}`,...h.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    alignItems: 'center'
  }}>
      <XDSCircularProgress size="sm" label="Loading small" />
      <XDSCircularProgress size="md" label="Loading medium" />
      <XDSCircularProgress size="lg" label="Loading large" />
    </div>
}`,...S.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    alignItems: 'center'
  }}>
      <XDSCircularProgress label="Accent" variant="accent" />
      <XDSCircularProgress label="Positive" variant="success" />
      <XDSCircularProgress label="Warning" variant="warning" />
      <XDSCircularProgress label="Negative" variant="error" />
    </div>
}`,...j.parameters?.docs?.source}}};const Z=["Default","WithCenterLabel","Sizes","SizesWithLabels","Variants","Empty","Full","Indeterminate","IndeterminateSizes","IndeterminateVariants"];export{p as Default,y as Empty,f as Full,h as Indeterminate,S as IndeterminateSizes,j as IndeterminateVariants,x as Sizes,v as SizesWithLabels,b as Variants,g as WithCenterLabel,Z as __namedExportsOrder,F as default};
