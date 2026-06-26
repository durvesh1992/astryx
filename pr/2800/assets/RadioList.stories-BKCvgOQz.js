import{at as n,ad as e,ai as A,aZ as E,ar as b}from"./iframe-yRFQ_7VC.js";import{X as H}from"./XDSField-COi97ivg.js";import{X as G}from"./XDSItem-CTSSy95c.js";import"./preload-helper-Ct5FWWRu.js";import"./XDSFieldStatus-BgnciRVy.js";import"./computeTargetAndRel-BlG0ENK0.js";const _=n.createContext(null);_.displayName="XDSRadioListContext";function o({ref:s,label:i,isLabelHidden:t=!1,description:r,value:d,onChange:l,orientation:g="vertical",isDisabled:v=!1,isRequired:c=!1,isOptional:S=!1,size:x="md",status:u,labelTooltip:h,width:p,xstyle:f,className:z,style:M,"data-testid":$,children:P}){const N=n.useId(),O=n.useId(),W=n.useId(),w=n.useId(),B=n.useMemo(()=>({name:N,value:d,onChange:l,isDisabled:v,isRequired:c,size:x,status:u}),[N,d,l,v,c,x,u]);return e.jsx(H,{ref:s,"data-testid":$,label:i,isLabelHidden:t,description:r,inputID:O,descriptionID:r?W:void 0,isOptional:S,isRequired:c,isDisabled:v,status:u?{type:u.type,message:u.message,messageID:u.message?w:void 0}:void 0,labelTooltip:h,statusVariant:"detached",width:p,xstyle:f,className:z,style:M,children:e.jsx("div",{role:"radiogroup","aria-label":i,"aria-describedby":[r?W:null,u?.message?w:null].filter(Boolean).join(" ")||void 0,"aria-invalid":u?.type==="error"?!0:void 0,"aria-required":c||void 0,...A(E("radio-list",{orientation:g,size:x}),{0:{className:"xds78zum5 xds1q0g3np xds9mgr7n"},1:{className:"xds78zum5 xdsdt5ytf xds1txdalj"}}[(g==="vertical")<<0]),children:e.jsx(_,{value:B,children:P})})})}o.displayName="XDSRadioList";o.__docgenInfo={description:`A radio group component for single-value selection.

@example
\`\`\`
<XDSRadioList
  label="Notification preference"
  value={selected}
  onChange={setSelected}>
  <XDSRadioListItem label="Email" value="email" />
  <XDSRadioListItem label="SMS" value="sms" />
  <XDSRadioListItem label="Push" value="push" />
</XDSRadioList>
\`\`\``,methods:[],displayName:"XDSRadioList",props:{ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:""},label:{required:!0,tsType:{name:"string"},description:"Label text for the radio group (always rendered for accessibility)."},isLabelHidden:{required:!1,tsType:{name:"boolean"},description:`Whether to visually hide the label (still accessible to screen readers).
@default false`,defaultValue:{value:"false",computed:!1}},description:{required:!1,tsType:{name:"string"},description:"Description text displayed below the label."},value:{required:!0,tsType:{name:"string"},description:"The currently selected value."},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Callback fired when the selected value changes."},orientation:{required:!1,tsType:{name:"union",raw:"'vertical' | 'horizontal'",elements:[{name:"literal",value:"'vertical'"},{name:"literal",value:"'horizontal'"}]},description:`Layout direction of the radio items.
@default "vertical"`,defaultValue:{value:"'vertical'",computed:!1}},isDisabled:{required:!1,tsType:{name:"boolean"},description:`Whether all radio items are disabled.
@default false`,defaultValue:{value:"false",computed:!1}},isRequired:{required:!1,tsType:{name:"boolean"},description:`Whether the radio group is required.
@default false`,defaultValue:{value:"false",computed:!1}},isOptional:{required:!1,tsType:{name:"boolean"},description:`Whether the field is optional. Mutually exclusive with isRequired.
@default false`,defaultValue:{value:"false",computed:!1}},status:{required:!1,tsType:{name:"XDSInputStatus"},description:`Status indicator for the radio group.
When set with a message, displays a colored message box below the group.`},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"}]},description:`The size of the radio controls.
- 'sm': Compact size (18px radio, 20px wrapper)
- 'md': Default size (22px radio, 24px wrapper)
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Width of the field. Numbers are treated as pixels, strings are used as-is\n(e.g. `'100%'`). Sizes the whole field (label, control, and status) so they\nstay aligned, unlike setting width via `xstyle`/`className`/`style`."},labelTooltip:{required:!1,tsType:{name:"string"},description:"Tooltip text to display in an info icon at the end of the label."},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for the outer container."},children:{required:!0,tsType:{name:"ReactNode"},description:"Radio list items to render."}},composes:["Omit"]};const U={xdsuy93a6:"xdsuy93a6",$$css:!0},m={container:{k1xSpc:"xds78zum5",kGNEyG:"xds6s0dn4",kOIVth:"xds1txdalj",$$css:!0},radioWrapper:{kVAEAm:"xds1n2onr6",k1xSpc:"xds78zum5",kGNEyG:"xds6s0dn4",kjj79g:"xdsl56j7k",kmuXW:"xds2lah0s",kHBbk8:"xdsc8icb0",$$css:!0},input:{kVAEAm:"xds10l6tqk",kogj98:"xds1ghz6dp",kmVPX3:"xds1717udv",kSiTet:"xdsg01cxk",kkrTdU:"xds1ypdohk",kY2c9j:"xds1vjfegm",$$css:!0},inputDisabled:{kkrTdU:"xds1h6gzvc",$$css:!0},radio:{k1xSpc:"xds78zum5",kGNEyG:"xds6s0dn4",kjj79g:"xdsl56j7k",kMzoRj:"xds1litavf",ksu8eU:"xds1y0btm7",kaIpWk:"xds16rqkct",k1ekBW:"xdsts7igz",kIyJzY:"xdsuedmi6",kAMwcw:"xdslr8y92",kB7OPa:"xds9f619",$$css:!0},radioUnchecked:{kVAM5u:"xdsvy26l8 xdsicc0r3",kzOINU:null,kGJrpR:null,kaZRDh:null,kBCPoo:null,k26BEO:null,k5QoK5:null,kLZC3w:null,kL6WhQ:null,kWkggS:"xds10xzikg xdsqtr024",$$css:!0},radioChecked:{kVAM5u:"xdsad5do xds1uqf7uv",kzOINU:null,kGJrpR:null,kaZRDh:null,kBCPoo:null,k26BEO:null,k5QoK5:null,kLZC3w:null,kL6WhQ:null,kWkggS:"xds1ewilqj xdsjxm4cd",$$css:!0},radioWrapperFocus:{kI3sdo:"xds1a2a7pz xds1irc7jg",kjBf7l:null,k3XXqK:null,kMeerF:null,kInvED:"xds1wfwxd8 xdsdjuwb3",kaIpWk:"xds16rqkct",krdFHd:null,kfmiAY:null,kVL7Gh:null,kT0f0o:null,kIxVMA:null,ksF3WI:null,kqGeR4:null,kYm2EN:null,$$css:!0},radioDisabled:{kSiTet:"xdsbyyjgo",kVAM5u:"xds14i3s5s",kzOINU:null,kGJrpR:null,kaZRDh:null,kBCPoo:null,k26BEO:null,k5QoK5:null,kLZC3w:null,kL6WhQ:null,$$css:!0},radioDisabledUnchecked:{kWkggS:"xdswmxj5m",$$css:!0},innerDot:{kaIpWk:"xds16rqkct",kWkggS:"xds1azo05",$$css:!0}},T={sm:{kzqmXN:"xdsw4jnvo",kZKoxP:"xds1qx5ct2",$$css:!0},md:{kzqmXN:"xdsvy4d1p",kZKoxP:"xdsxk0z11",$$css:!0}},Z={sm:{kzqmXN:"xds1xp8n7a",kZKoxP:"xdsmix8c7",$$css:!0},md:{kzqmXN:"xds17z2i9w",kZKoxP:"xds17rw0jw",$$css:!0}},F={sm:{kzqmXN:"xds1xc55vz",kZKoxP:"xdsdk7pt",$$css:!0},md:{kzqmXN:"xds1fsd2vl",kZKoxP:"xds170jfvy",$$css:!0}},K={root:{k8WAf4:"xdst970qd",kLKAdn:null,kGO01o:null,kg3NbH:"xdsnjsko4",kuDDbn:null,kE3dHu:null,kP0aTx:null,kpe85a:null,kaIpWk:"xds2u8bby",krdFHd:null,kfmiAY:null,kVL7Gh:null,kT0f0o:null,kIxVMA:null,ksF3WI:null,kqGeR4:null,kYm2EN:null,kUk6DE:"xds98rzlu",kzQI83:null,kmuXW:null,kCS8Yb:null,k7Eaqz:"xdseuugli",$$css:!0}};function a({ref:s,label:i,value:t,description:r,isDisabled:d=!1,startContent:l,endContent:g,"data-testid":v}){const c=n.use(_);if(!c)throw new Error("XDSRadioListItem must be used within an XDSRadioList");const S=n.useId(),x=n.useId(),u=c.isDisabled||d,h=c.value===t,p=c.size,f=e.jsxs("div",{...b(m.radioWrapper,T[p],!u&&m.radioWrapperFocus),children:[e.jsx("input",{id:S,type:"radio",name:c.name,value:t,checked:h,disabled:u,required:c.isRequired,onChange:()=>c.onChange(t),"aria-describedby":r?x:void 0,...b(m.input,T[p],u&&m.inputDisabled)}),e.jsx("div",{"aria-hidden":"true",...A(E("radio",{size:p,checked:h?"checked":null,disabled:u?"disabled":null}),b(m.radio,Z[p],h?m.radioChecked:m.radioUnchecked,u&&m.radioDisabled,u&&!h&&m.radioDisabledUnchecked)),children:h&&e.jsx("div",{...A(E("radio-dot",{size:p}),b(m.innerDot,F[p]))})})]}),z=l!=null?e.jsxs(e.Fragment,{children:[f,l]}):f;return e.jsx("div",{ref:s,"data-testid":v,...A(E("radio-list-item"),b(m.container,!u&&U)),children:e.jsx(G,{startContent:z,label:e.jsx("label",{htmlFor:S,...{0:{},1:{className:"xdsnbbluu xds1h6gzvc"}}[!!u<<0],children:i}),description:r!=null?e.jsx("span",{id:x,children:r}):void 0,endContent:g,xstyle:K.root})})}a.displayName="XDSRadioListItem";a.__docgenInfo={description:`An individual radio item within an XDSRadioList.

@example
\`\`\`
<XDSRadioListItem label="Email" value="email" />
<XDSRadioListItem
  label="SMS"
  value="sms"
  description="Standard messaging rates apply"
/>
\`\`\``,methods:[],displayName:"XDSRadioListItem",props:{xstyle:{required:!1,tsType:{name:"StyleXStyles"},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:""},label:{required:!0,tsType:{name:"string"},description:"Label text for the radio item."},value:{required:!0,tsType:{name:"string"},description:"Value of this radio item."},description:{required:!1,tsType:{name:"string"},description:"Description text displayed below the label."},isDisabled:{required:!1,tsType:{name:"boolean"},description:`Whether this individual radio item is disabled.
@default false`,defaultValue:{value:"false",computed:!1}},startContent:{required:!1,tsType:{name:"ReactNode"},description:"Content to render before the radio circle."},endContent:{required:!1,tsType:{name:"ReactNode"},description:"Content to render after the label."}},composes:["Omit"]};const te={title:"Core/RadioList",component:o,tags:["autodocs"],argTypes:{label:{control:"text",description:"Label text (required)"},isLabelHidden:{control:"boolean",description:"Visually hide the label (still accessible to screen readers)"},description:{control:"text",description:"Description text displayed below the label"},value:{control:"text",description:"The currently selected value"},orientation:{control:"select",options:["vertical","horizontal"],description:"Layout direction of the radio items"},isDisabled:{control:"boolean",description:"Whether all radio items are disabled"},isRequired:{control:"boolean",description:"Whether the radio group is required"},isOptional:{control:"boolean",description:"Whether the field is optional"}}},D={render:s=>{const[i,t]=n.useState(s.value??""),{value:r,onChange:d,...l}=s;return e.jsxs(o,{...l,value:i,onChange:t,children:[e.jsx(a,{label:"Email",value:"email"}),e.jsx(a,{label:"SMS",value:"sms"}),e.jsx(a,{label:"Push notification",value:"push"})]})},args:{label:"Notification preference"}},k={render:s=>{const[i,t]=n.useState(s.value??""),{value:r,onChange:d,...l}=s;return e.jsxs(o,{...l,value:i,onChange:t,children:[e.jsx(a,{label:"Email",value:"email",description:"Receive notifications via email"}),e.jsx(a,{label:"SMS",value:"sms",description:"Standard messaging rates apply"}),e.jsx(a,{label:"Push notification",value:"push",description:"Instant alerts on your device"})]})},args:{label:"Notification preference",description:"Choose how you would like to be notified"}},R={render:s=>{const[i,t]=n.useState(s.value??""),{value:r,onChange:d,...l}=s;return e.jsxs(o,{...l,value:i,onChange:t,children:[e.jsx(a,{label:"Small",value:"sm"}),e.jsx(a,{label:"Medium",value:"md"}),e.jsx(a,{label:"Large",value:"lg"})]})},args:{label:"Size",orientation:"horizontal"}},C={render:s=>{const[i,t]=n.useState(s.value??"email"),{value:r,onChange:d,...l}=s;return e.jsxs(o,{...l,value:i,onChange:t,children:[e.jsx(a,{label:"Email",value:"email"}),e.jsx(a,{label:"SMS",value:"sms"}),e.jsx(a,{label:"Push notification",value:"push"})]})},args:{label:"Notification preference",isDisabled:!0}},L={render:s=>{const[i,t]=n.useState(s.value??""),{value:r,onChange:d,...l}=s;return e.jsxs(o,{...l,value:i,onChange:t,children:[e.jsx(a,{label:"Email",value:"email"}),e.jsx(a,{label:"SMS",value:"sms",isDisabled:!0}),e.jsx(a,{label:"Push notification",value:"push"})]})},args:{label:"Notification preference"}},y={render:s=>{const[i,t]=n.useState(s.value??""),{value:r,onChange:d,...l}=s;return e.jsxs(o,{...l,value:i,onChange:t,children:[e.jsx(a,{label:"Email",value:"email"}),e.jsx(a,{label:"SMS",value:"sms"}),e.jsx(a,{label:"Push notification",value:"push"})]})},args:{label:"Notification preference",isRequired:!0}},X={render:s=>{const[i,t]=n.useState(s.value??""),{value:r,onChange:d,...l}=s;return e.jsxs(o,{...l,value:i,onChange:t,children:[e.jsx(a,{label:"Email",value:"email"}),e.jsx(a,{label:"SMS",value:"sms"}),e.jsx(a,{label:"Push notification",value:"push"})]})},args:{label:"Notification preference",isOptional:!0}},j={render:s=>{const[i,t]=n.useState(s.value??""),{value:r,onChange:d,...l}=s;return e.jsxs(o,{...l,value:i,onChange:t,children:[e.jsx(a,{label:"Email",value:"email"}),e.jsx(a,{label:"SMS",value:"sms"}),e.jsx(a,{label:"Push notification",value:"push"})]})},args:{label:"Notification preference",isRequired:!0,status:{type:"error",message:"Please select a notification method"}}},I={render:s=>{const[i,t]=n.useState(s.value??""),{value:r,onChange:d,...l}=s;return e.jsxs(o,{...l,value:i,onChange:t,children:[e.jsx(a,{label:"Email",value:"email",startContent:e.jsx("span",{children:"📧"})}),e.jsx(a,{label:"SMS",value:"sms",startContent:e.jsx("span",{children:"💬"})}),e.jsx(a,{label:"Push notification",value:"push",startContent:e.jsx("span",{children:"🔔"})})]})},args:{label:"Notification preference"}},V={render:s=>{const[i,t]=n.useState(s.value??""),{value:r,onChange:d,...l}=s;return e.jsxs(o,{...l,value:i,onChange:t,children:[e.jsx(a,{label:"Free",value:"free",endContent:e.jsx("span",{style:{color:"#0D8626"},children:"$0/mo"})}),e.jsx(a,{label:"Pro",value:"pro",endContent:e.jsx("span",{style:{color:"#0064E0"},children:"$9/mo"})}),e.jsx(a,{label:"Enterprise",value:"enterprise",endContent:e.jsx("span",{style:{color:"#5B08D8"},children:"Custom"})})]})},args:{label:"Plan"}},q={render:()=>{const[s,i]=n.useState(""),[t,r]=n.useState("email"),[d,l]=n.useState(""),[g,v]=n.useState("sm");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",maxWidth:"400px"},children:[e.jsxs(o,{label:"Unselected",value:s,onChange:i,children:[e.jsx(a,{label:"Option A",value:"a"}),e.jsx(a,{label:"Option B",value:"b"})]}),e.jsxs(o,{label:"Pre-selected",value:t,onChange:r,children:[e.jsx(a,{label:"Email",value:"email"}),e.jsx(a,{label:"SMS",value:"sms"})]}),e.jsxs(o,{label:"Disabled group",value:"",onChange:()=>{},isDisabled:!0,children:[e.jsx(a,{label:"Option A",value:"a"}),e.jsx(a,{label:"Option B",value:"b"})]}),e.jsxs(o,{label:"With descriptions",value:d,onChange:l,children:[e.jsx(a,{label:"Email",value:"email",description:"Delivered to your inbox"}),e.jsx(a,{label:"SMS",value:"sms",description:"Standard rates apply"})]}),e.jsxs(o,{label:"Horizontal",value:g,onChange:v,orientation:"horizontal",children:[e.jsx(a,{label:"S",value:"sm"}),e.jsx(a,{label:"M",value:"md"}),e.jsx(a,{label:"L",value:"lg"})]}),e.jsxs(o,{label:"With error",value:"",onChange:()=>{},isRequired:!0,status:{type:"error",message:"Please select an option"},children:[e.jsx(a,{label:"Option A",value:"a"}),e.jsx(a,{label:"Option B",value:"b"})]})]})}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? '');
    const {
      value: _value,
      onChange: _onChange,
      ...restArgs
    } = args;
    return <XDSRadioList {...restArgs} value={value} onChange={setValue}>
        <XDSRadioListItem label="Email" value="email" />
        <XDSRadioListItem label="SMS" value="sms" />
        <XDSRadioListItem label="Push notification" value="push" />
      </XDSRadioList>;
  },
  args: {
    label: 'Notification preference'
  }
}`,...D.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? '');
    const {
      value: _value,
      onChange: _onChange,
      ...restArgs
    } = args;
    return <XDSRadioList {...restArgs} value={value} onChange={setValue}>
        <XDSRadioListItem label="Email" value="email" description="Receive notifications via email" />
        <XDSRadioListItem label="SMS" value="sms" description="Standard messaging rates apply" />
        <XDSRadioListItem label="Push notification" value="push" description="Instant alerts on your device" />
      </XDSRadioList>;
  },
  args: {
    label: 'Notification preference',
    description: 'Choose how you would like to be notified'
  }
}`,...k.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? '');
    const {
      value: _value,
      onChange: _onChange,
      ...restArgs
    } = args;
    return <XDSRadioList {...restArgs} value={value} onChange={setValue}>
        <XDSRadioListItem label="Small" value="sm" />
        <XDSRadioListItem label="Medium" value="md" />
        <XDSRadioListItem label="Large" value="lg" />
      </XDSRadioList>;
  },
  args: {
    label: 'Size',
    orientation: 'horizontal'
  }
}`,...R.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? 'email');
    const {
      value: _value,
      onChange: _onChange,
      ...restArgs
    } = args;
    return <XDSRadioList {...restArgs} value={value} onChange={setValue}>
        <XDSRadioListItem label="Email" value="email" />
        <XDSRadioListItem label="SMS" value="sms" />
        <XDSRadioListItem label="Push notification" value="push" />
      </XDSRadioList>;
  },
  args: {
    label: 'Notification preference',
    isDisabled: true
  }
}`,...C.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? '');
    const {
      value: _value,
      onChange: _onChange,
      ...restArgs
    } = args;
    return <XDSRadioList {...restArgs} value={value} onChange={setValue}>
        <XDSRadioListItem label="Email" value="email" />
        <XDSRadioListItem label="SMS" value="sms" isDisabled />
        <XDSRadioListItem label="Push notification" value="push" />
      </XDSRadioList>;
  },
  args: {
    label: 'Notification preference'
  }
}`,...L.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? '');
    const {
      value: _value,
      onChange: _onChange,
      ...restArgs
    } = args;
    return <XDSRadioList {...restArgs} value={value} onChange={setValue}>
        <XDSRadioListItem label="Email" value="email" />
        <XDSRadioListItem label="SMS" value="sms" />
        <XDSRadioListItem label="Push notification" value="push" />
      </XDSRadioList>;
  },
  args: {
    label: 'Notification preference',
    isRequired: true
  }
}`,...y.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? '');
    const {
      value: _value,
      onChange: _onChange,
      ...restArgs
    } = args;
    return <XDSRadioList {...restArgs} value={value} onChange={setValue}>
        <XDSRadioListItem label="Email" value="email" />
        <XDSRadioListItem label="SMS" value="sms" />
        <XDSRadioListItem label="Push notification" value="push" />
      </XDSRadioList>;
  },
  args: {
    label: 'Notification preference',
    isOptional: true
  }
}`,...X.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? '');
    const {
      value: _value,
      onChange: _onChange,
      ...restArgs
    } = args;
    return <XDSRadioList {...restArgs} value={value} onChange={setValue}>
        <XDSRadioListItem label="Email" value="email" />
        <XDSRadioListItem label="SMS" value="sms" />
        <XDSRadioListItem label="Push notification" value="push" />
      </XDSRadioList>;
  },
  args: {
    label: 'Notification preference',
    isRequired: true,
    status: {
      type: 'error',
      message: 'Please select a notification method'
    }
  }
}`,...j.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? '');
    const {
      value: _value,
      onChange: _onChange,
      ...restArgs
    } = args;
    return <XDSRadioList {...restArgs} value={value} onChange={setValue}>
        <XDSRadioListItem label="Email" value="email" startContent={<span>📧</span>} />
        <XDSRadioListItem label="SMS" value="sms" startContent={<span>💬</span>} />
        <XDSRadioListItem label="Push notification" value="push" startContent={<span>🔔</span>} />
      </XDSRadioList>;
  },
  args: {
    label: 'Notification preference'
  }
}`,...I.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? '');
    const {
      value: _value,
      onChange: _onChange,
      ...restArgs
    } = args;
    return <XDSRadioList {...restArgs} value={value} onChange={setValue}>
        <XDSRadioListItem label="Free" value="free" endContent={<span style={{
        color: '#0D8626'
      }}>$0/mo</span>} />
        <XDSRadioListItem label="Pro" value="pro" endContent={<span style={{
        color: '#0064E0'
      }}>$9/mo</span>} />
        <XDSRadioListItem label="Enterprise" value="enterprise" endContent={<span style={{
        color: '#5B08D8'
      }}>Custom</span>} />
      </XDSRadioList>;
  },
  args: {
    label: 'Plan'
  }
}`,...V.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('email');
    const [value3, setValue3] = useState('');
    const [value4, setValue4] = useState('sm');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      maxWidth: '400px'
    }}>
        <XDSRadioList label="Unselected" value={value1} onChange={setValue1}>
          <XDSRadioListItem label="Option A" value="a" />
          <XDSRadioListItem label="Option B" value="b" />
        </XDSRadioList>
        <XDSRadioList label="Pre-selected" value={value2} onChange={setValue2}>
          <XDSRadioListItem label="Email" value="email" />
          <XDSRadioListItem label="SMS" value="sms" />
        </XDSRadioList>
        <XDSRadioList label="Disabled group" value="" onChange={() => {}} isDisabled>
          <XDSRadioListItem label="Option A" value="a" />
          <XDSRadioListItem label="Option B" value="b" />
        </XDSRadioList>
        <XDSRadioList label="With descriptions" value={value3} onChange={setValue3}>
          <XDSRadioListItem label="Email" value="email" description="Delivered to your inbox" />
          <XDSRadioListItem label="SMS" value="sms" description="Standard rates apply" />
        </XDSRadioList>
        <XDSRadioList label="Horizontal" value={value4} onChange={setValue4} orientation="horizontal">
          <XDSRadioListItem label="S" value="sm" />
          <XDSRadioListItem label="M" value="md" />
          <XDSRadioListItem label="L" value="lg" />
        </XDSRadioList>
        <XDSRadioList label="With error" value="" onChange={() => {}} isRequired status={{
        type: 'error',
        message: 'Please select an option'
      }}>
          <XDSRadioListItem label="Option A" value="a" />
          <XDSRadioListItem label="Option B" value="b" />
        </XDSRadioList>
      </div>;
  }
}`,...q.parameters?.docs?.source}}};const le=["Default","WithDescription","Horizontal","Disabled","DisabledItem","Required","Optional","WithErrorStatus","WithStartContent","WithEndContent","AllVariations"];export{q as AllVariations,D as Default,C as Disabled,L as DisabledItem,R as Horizontal,X as Optional,y as Required,k as WithDescription,V as WithEndContent,j as WithErrorStatus,I as WithStartContent,le as __namedExportsOrder,te as default};
