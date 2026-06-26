import{aV as z,at as n,ad as e,p as U,ai as j,ar as L,aZ as V,m as N}from"./iframe-yRFQ_7VC.js";import{X as E}from"./XDSField-COi97ivg.js";import{X as M}from"./groupStyles-BZhxclV-.js";import{X as u}from"./XDSTextInput-C1ju8zVt.js";import{X as _}from"./XDSNumberInput-BmZY7aVn.js";import"./preload-helper-Ct5FWWRu.js";import"./XDSFieldStatus-BgnciRVy.js";import"./inputStyles.stylex-BIqXE6lP.js";import"./useInputContainer-DjJ5nP5w.js";import"./useClickableContainer-B3IEmxS8.js";const y={group:{k1xSpc:"xds3nfvp2",kGNEyG:"xds1qjc9v5",kWkggS:"xdsjbqb8w",$$css:!0},disabled:{kkrTdU:"xds1h6gzvc",kSiTet:"xdsbyyjgo",$$css:!0}},F={sm:{kZKoxP:"xds6k0iem",$$css:!0},md:{kZKoxP:"xds1ueg155",$$css:!0},lg:{kZKoxP:"xdsssyfek",$$css:!0}};function l({children:r,label:t,isLabelHidden:s=!1,description:i,isDisabled:o=!1,isOptional:p=!1,isRequired:v=!1,size:T,status:d,labelTooltip:H,xstyle:W,className:k,style:C,ref:P,"data-testid":q,...R}){const G=z(T,"md"),$=n.useId(),A=n.useId(),w=n.useMemo(()=>({isInGroup:!0}),[]);return e.jsx(M,{value:w,children:e.jsx(U,{value:G,children:e.jsx(E,{label:t,isLabelHidden:s,description:i,inputID:$,isOptional:p,isRequired:v,isDisabled:o,status:d?{type:d.type,message:d.message,messageID:d.message?A:void 0}:void 0,statusVariant:"detached",labelTooltip:H,children:e.jsx("div",{ref:P,role:"group","aria-label":t,"data-testid":q,...R,...j(V("input-group",{size:G,status:d?.type??null}),L(y.group,F[G],o&&y.disabled,W),k,C),children:r})})})})}l.displayName="XDSInputGroup";l.__docgenInfo={description:`Groups an input with prefix/suffix addons in a visually connected
container with shared border and focus ring.

@example
\`\`\`
<XDSInputGroup label="Price">
  <XDSInputGroupText>$</XDSInputGroupText>
  <XDSTextInput label="Price" isLabelHidden value={price} onChange={setPrice} />
</XDSInputGroup>
\`\`\``,methods:[],displayName:"XDSInputGroup",props:{ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:"Ref forwarded to the group container element"},children:{required:!0,tsType:{name:"ReactNode"},description:"Input and addon children."},label:{required:!0,tsType:{name:"string"},description:"Label text for the group (required for accessibility)."},isLabelHidden:{required:!1,tsType:{name:"boolean"},description:`Whether to visually hide the label.
@default false`,defaultValue:{value:"false",computed:!1}},description:{required:!1,tsType:{name:"string"},description:"Description text displayed between the label and input group."},isDisabled:{required:!1,tsType:{name:"boolean"},description:`Whether the group is disabled.
@default false`,defaultValue:{value:"false",computed:!1}},isOptional:{required:!1,tsType:{name:"boolean"},description:`Whether the field is optional.
@default false`,defaultValue:{value:"false",computed:!1}},isRequired:{required:!1,tsType:{name:"boolean"},description:`Whether the field is required.
@default false`,defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:`Default size for inputs in the group.
@default 'md'`},status:{required:!1,tsType:{name:"XDSInputStatus"},description:"Status indicator applied to the group border."},labelTooltip:{required:!1,tsType:{name:"string"},description:"Tooltip text at the end of the label."},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing frameworks."}},composes:["Omit"]};const O={text:{k1xSpc:"xds78zum5",kGNEyG:"xds6s0dn4",kg3NbH:"xdsf314gf",kWkggS:"xdswmxj5m",kMv6JI:"xds9ynric",kGuDYH:"xdsjm74w1",kLWn49:"xdsw6l6zx",kMwMTN:"xdsv1l7n4",khDVqt:"xdsuxw1ft",kmuXW:"xds2lah0s",kMzoRj:"xds1litavf",ksu8eU:"xds1y0btm7",kVAM5u:"xdsvy26l8",keTefX:"xdsd10s4z xds1pwwqoy",krdFHd:"xds15mokao xds8eehn2",kVL7Gh:"xdsbiv7yw xds1xrp5p4",kfmiAY:"xds1ga7v0g xds11xp8u1",kT0f0o:"xds16uus16 xds747jw7",$$css:!0}};function a({ref:r,children:t,xstyle:s,className:i,style:o,...p}){return e.jsx("div",{ref:r,...p,...j(V("input-group-text"),L(O.text,s),i,o),children:t})}a.displayName="XDSInputGroupText";a.__docgenInfo={description:`A prefix or suffix text element for use inside XDSInputGroup.

@example
\`\`\`
<XDSInputGroup label="URL">
  <XDSInputGroupText>https://</XDSInputGroupText>
  <XDSTextInput label="URL" isLabelHidden value={url} onChange={setUrl} />
</XDSInputGroup>
\`\`\``,methods:[],displayName:"XDSInputGroupText",props:{xstyle:{required:!1,tsType:{name:"StyleXStyles"},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:`Content to render in the text slot.
Can be text or an icon.`}},composes:["Omit"]};const ae={title:"Core/InputGroup",component:l,tags:["autodocs"],argTypes:{label:{control:"text",description:"Label text (required)"},isLabelHidden:{control:"boolean",description:"Visually hide the label"},description:{control:"text",description:"Description text"},isDisabled:{control:"boolean",description:"Disable the group"},size:{control:"radio",options:["sm","md","lg"],description:"Input size"}}},c={render:r=>{const[t,s]=n.useState("");return e.jsxs(l,{...r,children:[e.jsx(a,{children:"$"}),e.jsx(u,{label:"Amount",isLabelHidden:!0,value:t,onChange:s,placeholder:"0.00"})]})},args:{label:"Price"}},x={render:r=>{const[t,s]=n.useState("");return e.jsxs(l,{...r,children:[e.jsx(u,{label:"Weight",isLabelHidden:!0,value:t,onChange:s,placeholder:"0"}),e.jsx(a,{children:"kg"})]})},args:{label:"Weight"}},m={render:r=>{const[t,s]=n.useState("");return e.jsxs(l,{...r,children:[e.jsx(a,{children:"https://"}),e.jsx(u,{label:"URL",isLabelHidden:!0,value:t,onChange:s,placeholder:"example"}),e.jsx(a,{children:".com"})]})},args:{label:"Website"}},h={render:r=>{const[t,s]=n.useState("");return e.jsxs(l,{...r,children:[e.jsx(a,{children:e.jsx(N,{icon:"search",size:"sm",color:"secondary"})}),e.jsx(u,{label:"Search",isLabelHidden:!0,value:t,onChange:s,placeholder:"Search..."})]})},args:{label:"Search",isLabelHidden:!0}},S={render:r=>{const[t,s]=n.useState(void 0);return e.jsxs(l,{...r,children:[e.jsx(a,{children:"$"}),e.jsx(_,{label:"Amount",isLabelHidden:!0,value:t,onChange:s,placeholder:"0.00"})]})},args:{label:"Budget"}},g={render:r=>{const[t,s]=n.useState("");return e.jsxs(l,{...r,children:[e.jsx(a,{children:"@"}),e.jsx(u,{label:"Username",isLabelHidden:!0,value:t,onChange:s,placeholder:"username"})]})},args:{label:"Username",description:"Your public display name"}},b={render:r=>{const[t,s]=n.useState("");return e.jsxs(l,{...r,children:[e.jsx(a,{children:"$"}),e.jsx(u,{label:"Amount",isLabelHidden:!0,value:t,onChange:s,placeholder:"0.00"})]})},args:{label:"Price",status:{type:"error",message:"Price is required"}}},D={render:r=>{const[t,s]=n.useState("");return e.jsxs(l,{...r,children:[e.jsx(a,{children:"$"}),e.jsx(u,{label:"Amount",isLabelHidden:!0,value:t,onChange:s,placeholder:"0.00"})]})},args:{label:"Price",size:"sm"}},I={render:r=>{const[t,s]=n.useState("");return e.jsx("div",{style:{maxWidth:500},children:e.jsxs(l,{...r,children:[e.jsx(a,{children:"https://"}),e.jsx(u,{label:"URL",isLabelHidden:!0,value:t,onChange:s,placeholder:"example.com"})]})})},args:{label:"Website URL"}},X={render:r=>{const[t,s]=n.useState(""),[i,o]=n.useState("");return e.jsxs(l,{...r,children:[e.jsx(u,{label:"Address",isLabelHidden:!0,value:t,onChange:s,placeholder:"Address"}),e.jsx(a,{children:"@"}),e.jsx(u,{label:"Domain",isLabelHidden:!0,value:i,onChange:o,placeholder:"Domain"})]})},args:{label:"Email"}},f={render:()=>{const[r,t]=n.useState(""),[s,i]=n.useState(""),[o,p]=n.useState(""),[v,T]=n.useState("");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"400px"},children:[e.jsxs(l,{label:"Price",children:[e.jsx(a,{children:"$"}),e.jsx(u,{label:"Amount",isLabelHidden:!0,value:r,onChange:t,placeholder:"0.00"})]}),e.jsxs(l,{label:"Website",children:[e.jsx(a,{children:"https://"}),e.jsx(u,{label:"URL",isLabelHidden:!0,value:s,onChange:i,placeholder:"example"}),e.jsx(a,{children:".com"})]}),e.jsxs(l,{label:"Weight",children:[e.jsx(u,{label:"Weight",isLabelHidden:!0,value:o,onChange:p,placeholder:"0"}),e.jsx(a,{children:"kg"})]}),e.jsxs(l,{label:"Price",status:{type:"error",message:"Price is required"},children:[e.jsx(a,{children:"$"}),e.jsx(u,{label:"Amount",isLabelHidden:!0,value:v,onChange:T,placeholder:"0.00"})]})]})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    return <XDSInputGroup {...args}>
        <XDSInputGroupText>$</XDSInputGroupText>
        <XDSTextInput label="Amount" isLabelHidden value={value} onChange={setValue} placeholder="0.00" />
      </XDSInputGroup>;
  },
  args: {
    label: 'Price'
  }
}`,...c.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    return <XDSInputGroup {...args}>
        <XDSTextInput label="Weight" isLabelHidden value={value} onChange={setValue} placeholder="0" />
        <XDSInputGroupText>kg</XDSInputGroupText>
      </XDSInputGroup>;
  },
  args: {
    label: 'Weight'
  }
}`,...x.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    return <XDSInputGroup {...args}>
        <XDSInputGroupText>https://</XDSInputGroupText>
        <XDSTextInput label="URL" isLabelHidden value={value} onChange={setValue} placeholder="example" />
        <XDSInputGroupText>.com</XDSInputGroupText>
      </XDSInputGroup>;
  },
  args: {
    label: 'Website'
  }
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    return <XDSInputGroup {...args}>
        <XDSInputGroupText>
          <XDSIcon icon="search" size="sm" color="secondary" />
        </XDSInputGroupText>
        <XDSTextInput label="Search" isLabelHidden value={value} onChange={setValue} placeholder="Search..." />
      </XDSInputGroup>;
  },
  args: {
    label: 'Search',
    isLabelHidden: true
  }
}`,...h.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<number | undefined>(undefined);
    return <XDSInputGroup {...args}>
        <XDSInputGroupText>$</XDSInputGroupText>
        <XDSNumberInput label="Amount" isLabelHidden value={value} onChange={setValue} placeholder="0.00" />
      </XDSInputGroup>;
  },
  args: {
    label: 'Budget'
  }
}`,...S.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    return <XDSInputGroup {...args}>
        <XDSInputGroupText>@</XDSInputGroupText>
        <XDSTextInput label="Username" isLabelHidden value={value} onChange={setValue} placeholder="username" />
      </XDSInputGroup>;
  },
  args: {
    label: 'Username',
    description: 'Your public display name'
  }
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    return <XDSInputGroup {...args}>
        <XDSInputGroupText>$</XDSInputGroupText>
        <XDSTextInput label="Amount" isLabelHidden value={value} onChange={setValue} placeholder="0.00" />
      </XDSInputGroup>;
  },
  args: {
    label: 'Price',
    status: {
      type: 'error',
      message: 'Price is required'
    }
  }
}`,...b.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    return <XDSInputGroup {...args}>
        <XDSInputGroupText>$</XDSInputGroupText>
        <XDSTextInput label="Amount" isLabelHidden value={value} onChange={setValue} placeholder="0.00" />
      </XDSInputGroup>;
  },
  args: {
    label: 'Price',
    size: 'sm'
  }
}`,...D.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    return <div style={{
      maxWidth: 500
    }}>
        <XDSInputGroup {...args}>
          <XDSInputGroupText>https://</XDSInputGroupText>
          <XDSTextInput label="URL" isLabelHidden value={value} onChange={setValue} placeholder="example.com" />
        </XDSInputGroup>
      </div>;
  },
  args: {
    label: 'Website URL'
  }
}`,...I.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [left, setLeft] = useState('');
    const [right, setRight] = useState('');
    return <XDSInputGroup {...args}>
        <XDSTextInput label="Address" isLabelHidden value={left} onChange={setLeft} placeholder="Address" />
        <XDSInputGroupText>@</XDSInputGroupText>
        <XDSTextInput label="Domain" isLabelHidden value={right} onChange={setRight} placeholder="Domain" />
      </XDSInputGroup>;
  },
  args: {
    label: 'Email'
  }
}`,...X.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [v1, setV1] = useState('');
    const [v2, setV2] = useState('');
    const [v3, setV3] = useState('');
    const [v4, setV4] = useState('');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      maxWidth: '400px'
    }}>
        <XDSInputGroup label="Price">
          <XDSInputGroupText>$</XDSInputGroupText>
          <XDSTextInput label="Amount" isLabelHidden value={v1} onChange={setV1} placeholder="0.00" />
        </XDSInputGroup>
        <XDSInputGroup label="Website">
          <XDSInputGroupText>https://</XDSInputGroupText>
          <XDSTextInput label="URL" isLabelHidden value={v2} onChange={setV2} placeholder="example" />
          <XDSInputGroupText>.com</XDSInputGroupText>
        </XDSInputGroup>
        <XDSInputGroup label="Weight">
          <XDSTextInput label="Weight" isLabelHidden value={v3} onChange={setV3} placeholder="0" />
          <XDSInputGroupText>kg</XDSInputGroupText>
        </XDSInputGroup>
        <XDSInputGroup label="Price" status={{
        type: 'error',
        message: 'Price is required'
      }}>
          <XDSInputGroupText>$</XDSInputGroupText>
          <XDSTextInput label="Amount" isLabelHidden value={v4} onChange={setV4} placeholder="0.00" />
        </XDSInputGroup>
      </div>;
  }
}`,...f.parameters?.docs?.source}}};const ne=["WithPrefix","WithSuffix","WithPrefixAndSuffix","WithIconPrefix","WithNumberInput","WithDescription","WithErrorStatus","SmallSize","FullWidth","TwoInputs","AllVariations"];export{f as AllVariations,I as FullWidth,D as SmallSize,X as TwoInputs,g as WithDescription,b as WithErrorStatus,h as WithIconPrefix,S as WithNumberInput,c as WithPrefix,m as WithPrefixAndSuffix,x as WithSuffix,ne as __namedExportsOrder,ae as default};
