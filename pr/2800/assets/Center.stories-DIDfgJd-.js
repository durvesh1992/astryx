import{ai as z,ar as T,aZ as I,ad as e,r as g,m as y}from"./iframe-yRFQ_7VC.js";import{X as o}from"./XDSCard-CyDoBnn3.js";import{X as s}from"./XDSSection-C0P8UZDV.js";import{F as C}from"./CheckCircleIcon-C_AMskyK.js";import"./preload-helper-Ct5FWWRu.js";import"./container.stylex-BI6SFdSl.js";import"./padding.stylex-BDg7w1Mn.js";const l={base:{k1xSpc:"xds78zum5",$$css:!0},inline:{k1xSpc:"xds3nfvp2",$$css:!0},alignItemsCenter:{kGNEyG:"xds6s0dn4",$$css:!0},justifyContentCenter:{kjj79g:"xdsl56j7k",$$css:!0}},B={sizing:(n,a)=>[{kzqmXN:n!=null?"xds5lhr3w":n,kZKoxP:a!=null?"xds16ye13r":a,$$css:!0},{"--x-width":(t=>typeof t=="number"?t+"px":t??void 0)(n),"--x-height":(t=>typeof t=="number"?t+"px":t??void 0)(a)}]};function r({axis:n="both",width:a,height:t,isInline:D=!1,children:X,xstyle:f,className:j,style:v,ref:b,...k}){const w=z(I("center",{axis:n}),T(D?l.inline:l.base,(n==="both"||n==="vertical")&&l.alignItemsCenter,(n==="both"||n==="horizontal")&&l.justifyContentCenter,B.sizing(a??null,t??null),f),j,v);return e.jsx("div",{ref:b,...w,...k,children:X})}r.displayName="XDSCenter";r.__docgenInfo={description:`Center component for centering children horizontally and/or vertically.

Uses flexbox for centering. By default, centers on both axes.
Use the \`axis\` prop to center on only one axis.

@example
\`\`\`
<XDSCenter width={300} height={200}>
  <Content />
</XDSCenter>
\`\`\``,methods:[],displayName:"XDSCenter",props:{xstyle:{required:!1,tsType:{name:"StyleXStyles"},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:"Ref forwarded to the root element"},axis:{required:!1,tsType:{name:"union",raw:"'both' | 'horizontal' | 'vertical'",elements:[{name:"literal",value:"'both'"},{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"Center axis - which direction(s) to center.\n- `both`: Center both horizontally and vertically (default)\n- `horizontal`: Center horizontally only (justifyContent: center)\n- `vertical`: Center vertically only (alignItems: center)\n@default 'both'",defaultValue:{value:"'both'",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:`Width of the container.
Numbers are treated as pixels, strings are used as-is (e.g., '100%').`},height:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:`Height of the container.
Numbers are treated as pixels, strings are used as-is (e.g., '100%').`},isInline:{required:!1,tsType:{name:"boolean"},description:`Whether to make the container inline-flex (useful for text/icons).
@default false`,defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:"Content to render inside the center container."}},composes:["Omit"]};const W={iconWrapper:{kWkggS:"x1o0wnni",kMwMTN:"x1vvqiwl",kmVPX3:"xlsj2fj",kg3NbH:null,kuDDbn:null,kE3dHu:null,kP0aTx:null,kpe85a:null,k8WAf4:null,kLKAdn:null,kGO01o:null,kaIpWk:"xh6dtrn",krdFHd:null,kfmiAY:null,kVL7Gh:null,kT0f0o:null,kIxVMA:null,ksF3WI:null,kqGeR4:null,kYm2EN:null,$$css:!0}},i=({children:n})=>e.jsx("div",{className:"x1o0wnni x1vvqiwl xmkeg23 x1y0btm7 xlee4gx x1na6nto xm7rs69 xh6dtrn xk50ysn",children:n}),F={title:"Core/Center",component:r,tags:["autodocs"],argTypes:{axis:{control:"select",options:["both","horizontal","vertical"],description:"Which direction(s) to center"},width:{control:"text",description:"Width of the container (number for px, string for any unit)"},height:{control:"text",description:"Height of the container (number for px, string for any unit)"},isInline:{control:"boolean",description:"Whether to render as inline-flex"}}},d={args:{axis:"both",width:"100%",height:200,children:null},render:n=>e.jsx(s,{variant:"muted",width:"100%",children:e.jsx(r,{...n,children:e.jsx(i,{children:"Centered Content"})})})},c={args:{axis:"horizontal",width:"100%",children:null},render:n=>e.jsx(s,{variant:"muted",width:"100%",children:e.jsx(r,{...n,children:e.jsx(i,{children:"Horizontal Center"})})})},h={args:{axis:"vertical",height:150,width:"100%",children:null},render:n=>e.jsx(s,{variant:"muted",width:"100%",children:e.jsx(r,{...n,children:e.jsx(i,{children:"Vertical Center"})})})},x={args:{axis:"both",width:"100%",height:300,children:null},render:n=>e.jsx(s,{variant:"muted",children:e.jsx(r,{...n,children:e.jsx(i,{children:"Full Width, Fixed Height"})})})},u={args:{isInline:!0,children:null},render:n=>e.jsx(s,{variant:"muted",children:e.jsx(o,{children:e.jsxs(g,{type:"body",children:["Text with inline centered icon:"," ",e.jsx(r,{...n,xstyle:W.iconWrapper,children:e.jsx(y,{icon:C,size:"sm"})})," ","and more text after."]})})})},p={args:{axis:"both",width:300,height:200,children:null},render:n=>e.jsx(s,{variant:"muted",children:e.jsx(r,{...n,children:e.jsx("div",{className:"x1o0wnni x1vvqiwl xlsj2fj xh6dtrn",children:e.jsx(y,{icon:C,size:"lg"})})})})},m={args:{height:150,children:null},render:n=>e.jsx(s,{variant:"muted",children:e.jsx(o,{children:e.jsx(r,{...n,children:e.jsx(i,{children:"Centered in Card"})})})})},S={args:{children:null},render:()=>e.jsx(s,{variant:"muted",children:e.jsxs("div",{className:"x78zum5 xdt5ytf x1qh66ti",children:[e.jsxs(o,{children:[e.jsx(g,{type:"supporting",display:"block",children:"axis: both (default)"}),e.jsx(r,{axis:"both",width:300,height:150,children:e.jsx(i,{children:"Both Axes"})})]}),e.jsxs(o,{children:[e.jsx(g,{type:"supporting",display:"block",children:"axis: horizontal"}),e.jsx(r,{axis:"horizontal",width:300,children:e.jsx(i,{children:"Horizontal Only"})})]}),e.jsxs(o,{children:[e.jsx(g,{type:"supporting",display:"block",children:"axis: vertical"}),e.jsx(r,{axis:"vertical",height:150,children:e.jsx(i,{children:"Vertical Only"})})]})]})})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    axis: 'both',
    width: '100%',
    height: 200,
    children: null
  },
  render: args => <XDSSection variant="muted" width="100%">
      <XDSCenter {...args}>
        <Box>Centered Content</Box>
      </XDSCenter>
    </XDSSection>
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    axis: 'horizontal',
    width: '100%',
    children: null
  },
  render: args => <XDSSection variant="muted" width="100%">
      <XDSCenter {...args}>
        <Box>Horizontal Center</Box>
      </XDSCenter>
    </XDSSection>
}`,...c.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    axis: 'vertical',
    height: 150,
    width: '100%',
    children: null
  },
  render: args => <XDSSection variant="muted" width="100%">
      <XDSCenter {...args}>
        <Box>Vertical Center</Box>
      </XDSCenter>
    </XDSSection>
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    axis: 'both',
    width: '100%',
    height: 300,
    children: null
  },
  render: args => <XDSSection variant="muted">
      <XDSCenter {...args}>
        <Box>Full Width, Fixed Height</Box>
      </XDSCenter>
    </XDSSection>
}`,...x.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    isInline: true,
    children: null
  },
  render: args => <XDSSection variant="muted">
      <XDSCard>
        <XDSText type="body">
          Text with inline centered icon:{' '}
          <XDSCenter {...args} xstyle={styles.iconWrapper}>
            <XDSIcon icon={CheckCircleIcon} size="sm" />
          </XDSCenter>{' '}
          and more text after.
        </XDSText>
      </XDSCard>
    </XDSSection>
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    axis: 'both',
    width: 300,
    height: 200,
    children: null
  },
  render: args => <XDSSection variant="muted">
      <XDSCenter {...args}>
        <div {...stylex.props(styles.iconWrapper)}>
          <XDSIcon icon={CheckCircleIcon} size="lg" />
        </div>
      </XDSCenter>
    </XDSSection>
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    height: 150,
    children: null
  },
  render: args => <XDSSection variant="muted">
      <XDSCard>
        <XDSCenter {...args}>
          <Box>Centered in Card</Box>
        </XDSCenter>
      </XDSCard>
    </XDSSection>
}`,...m.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    children: null
  },
  render: () => <XDSSection variant="muted">
      <div {...stylex.props(styles.storyWrapper)}>
        <XDSCard>
          <XDSText type="supporting" display="block">
            axis: both (default)
          </XDSText>
          <XDSCenter axis="both" width={300} height={150}>
            <Box>Both Axes</Box>
          </XDSCenter>
        </XDSCard>
        <XDSCard>
          <XDSText type="supporting" display="block">
            axis: horizontal
          </XDSText>
          <XDSCenter axis="horizontal" width={300}>
            <Box>Horizontal Only</Box>
          </XDSCenter>
        </XDSCard>
        <XDSCard>
          <XDSText type="supporting" display="block">
            axis: vertical
          </XDSText>
          <XDSCenter axis="vertical" height={150}>
            <Box>Vertical Only</Box>
          </XDSCenter>
        </XDSCard>
      </div>
    </XDSSection>
}`,...S.parameters?.docs?.source}}};const R=["Default","HorizontalOnly","VerticalOnly","FullSize","Inline","WithIcon","InsideACard","AllAxisModes"];export{S as AllAxisModes,d as Default,x as FullSize,c as HorizontalOnly,u as Inline,m as InsideACard,h as VerticalOnly,p as WithIcon,R as __namedExportsOrder,F as default};
