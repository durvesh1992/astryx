import{aV as we,at as t,ad as a,av as De,aj as Ve,q as Ae,m as je,ai as Ie,ar as Ee,aZ as Me}from"./iframe-yRFQ_7VC.js";import{X as We}from"./XDSField-COi97ivg.js";import{a as qe,b as Le,i as Xe,c as ne}from"./inputStyles.stylex-BIqXE6lP.js";import{u as ke}from"./useInputContainer-DjJ5nP5w.js";import{X as Ne}from"./XDSTextInput-C1ju8zVt.js";import{F as Z}from"./DocumentTextIcon-zTWH5D0N.js";import{a as ze,F as Re}from"./PencilSquareIcon-B3zvzd1y.js";import"./preload-helper-Ct5FWWRu.js";import"./XDSFieldStatus-BgnciRVy.js";import"./useClickableContainer-B3IEmxS8.js";import"./groupStyles-BZhxclV-.js";const He=.8,Oe={wrapper:{kY2c9j:"xds1vjfegm",kGNEyG:"xds1cy8zhl",k8WAf4:"xdsu0wf1k",kLKAdn:null,kGO01o:null,$$css:!0}},Fe={sm:{$$css:!0},md:{$$css:!0},lg:{k8WAf4:"xdsce4md1",kLKAdn:null,kGO01o:null,$$css:!0}};function n({label:e,isLabelHidden:s=!1,description:r,isOptional:i=!1,isRequired:u=!1,onChange:d,changeAction:p,isLoading:m=!1,value:x,placeholder:b,rows:S=3,isDisabled:h=!1,status:l,labelTooltip:v,startIcon:g,hasSpellCheck:f=!0,onPaste:y,maxLength:o,hasAutoFocus:T=!1,size:le,htmlName:oe,onFocus:ie,onBlur:ue,width:de,xstyle:ce,className:pe,style:me,ref:he,...ge}){const J=we(le,"md"),Q=t.useId(),ee=t.useId(),ae=t.useId(),te=t.useId(),se=t.useRef(null),re=t.useRef(null),[,xe]=t.useTransition(),[c,ve]=t.useOptimistic(x),U=m||c!==x,be={warning:"warning",error:"error",success:"success"},Se={warning:"warning",error:"error",success:"success"},fe=[r?ee:null,l?.message?ae:null,o!=null?te:null].filter(Boolean).join(" ")||void 0,ye=C=>{const K=C.target.value;d?.(K,C),p&&!C.defaultPrevented&&xe(async()=>{ve(K),await p(K,C)})},Y=h||U,{onClick:Te,onMouseUp:Ce}=ke({containerRef:re,inputRef:se,disabled:Y});return a.jsxs(We,{label:e,isLabelHidden:s,description:r,inputID:Q,descriptionID:r?ee:void 0,isOptional:i,isRequired:u,isDisabled:h,status:l?{type:l.type,message:l.message,messageID:l.message?ae:void 0}:void 0,labelTooltip:v,width:de,children:[a.jsxs("div",{ref:re,onClick:Te,onMouseUp:Ce,...Ie(Me("textarea",{size:J,status:l?.type??null}),Ee(ne.base,Oe.wrapper,Fe[J],Y&&ne.disabled,l&&Xe[l.type],l&&Le[l.type],l&&qe[l.type],ce),pe,me),children:[g&&De(g,{size:"sm",color:"secondary"}),a.jsx("textarea",{...ge,ref:Ve(he,se),id:Q,name:oe,value:c,onChange:ye,onPaste:y,onFocus:ie,onBlur:ue,placeholder:b,rows:S,disabled:h,spellCheck:f,autoFocus:T,"data-autofocus":T||void 0,"aria-describedby":fe,"aria-required":u&&!i?"true":void 0,"aria-invalid":l?.type==="error"||o!=null&&c.length>o?"true":void 0,"aria-busy":U||void 0,...{0:{className:"xds1lliihq xds98rzlu xdseuugli xdsc342km xdsng3xce xds1717udv xds9ynric xdsjm74w1 xds6pjikd xdsw6l6zx xds1tgivj0 xdsjbqb8w xds1a2a7pz xdseyghm5 xds288g5"},2:{className:"xds1lliihq xds98rzlu xdseuugli xdsc342km xdsng3xce xds1717udv xds9ynric xdsjm74w1 xds6pjikd xdsw6l6zx xds1tgivj0 xdsjbqb8w xds1a2a7pz xdseyghm5 xds288g5 xds1h6gzvc"},1:{className:"xds1lliihq xds98rzlu xdseuugli xdsc342km xdsng3xce xds1717udv xds9ynric xdsjm74w1 xds6pjikd xdsw6l6zx xds1tgivj0 xdsjbqb8w xds1a2a7pz xdseyghm5 xds288g5 xds1we12cn"},3:{className:"xds1lliihq xds98rzlu xdseuugli xdsc342km xdsng3xce xds1717udv xds9ynric xdsjm74w1 xds6pjikd xdsw6l6zx xds1tgivj0 xdsjbqb8w xds1a2a7pz xdseyghm5 xds288g5 xds1h6gzvc xds1we12cn"}}[!!Y<<1|!!l<<0]}),U&&a.jsx(Ae,{size:"sm"}),l&&a.jsx("span",{className:"xds10l6tqk xdsctzyg xds72tfeb xds47corl xds78zum5",children:a.jsx(je,{icon:be[l.type],size:"md",color:Se[l.type]})})]}),o!=null&&a.jsxs("div",{id:te,...{0:{className:"xds78zum5 xds13a6bvl xdscsaf9d xds9ynric xds141an7d xdsv1l7n4"},1:{className:"xds78zum5 xds13a6bvl xdscsaf9d xds9ynric xds141an7d xdsjt36v0"}}[(c.length>o)<<0],children:[c.length,"/",o,a.jsx("span",{"aria-live":"polite",className:"xds10l6tqk xds1i1rx1s xdsjm9jq1 xds1717udv xdskdpibf xdsb3r6kr xdszpqnlu xdsuxw1ft xdsc342km",children:c.length>=o*He?c.length>o?`${c.length-o} characters over limit`:`${o-c.length} characters remaining`:""})]})]})}n.displayName="XDSTextArea";n.__docgenInfo={description:'A multi-line text input component for collecting longer user input.\n\n@example\n```\n<XDSTextArea label="Description" value={description} onChange={setDescription} />\n<XDSTextArea label="Notes" rows={5} value={notes} onChange={setNotes} />\n```',methods:[],displayName:"XDSTextArea",props:{ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLTextAreaElement>",elements:[{name:"HTMLTextAreaElement"}]},description:"Ref forwarded to the root element"},label:{required:!0,tsType:{name:"string"},description:"Label text for the textarea (always rendered for accessibility)."},isLabelHidden:{required:!1,tsType:{name:"boolean"},description:`Whether to visually hide the label (still accessible to screen readers).
@default false`,defaultValue:{value:"false",computed:!1}},description:{required:!1,tsType:{name:"string"},description:"Description text displayed between the label and textarea."},isOptional:{required:!1,tsType:{name:"boolean"},description:`Whether the field is optional. Mutually exclusive with isRequired.
@default false`,defaultValue:{value:"false",computed:!1}},isRequired:{required:!1,tsType:{name:"boolean"},description:`Whether the field is required. Mutually exclusive with isOptional.
@default false`,defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string, e: ChangeEvent<HTMLTextAreaElement>) => void",signature:{arguments:[{type:{name:"string"},name:"value"},{type:{name:"ChangeEvent",elements:[{name:"HTMLTextAreaElement"}],raw:"ChangeEvent<HTMLTextAreaElement>"},name:"e"}],return:{name:"void"}}},description:"Callback fired when the textarea value changes."},changeAction:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  value: string,
  e: ChangeEvent<HTMLTextAreaElement>,
) => void | Promise<void>`,signature:{arguments:[{type:{name:"string"},name:"value"},{type:{name:"ChangeEvent",elements:[{name:"HTMLTextAreaElement"}],raw:"ChangeEvent<HTMLTextAreaElement>"},name:"e"}],return:{name:"union",raw:"void | Promise<void>",elements:[{name:"void"},{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}]}}},description:"Async action on change. Fires after onChange if not prevented."},isLoading:{required:!1,tsType:{name:"boolean"},description:"Whether the input is in a loading state. @default false",defaultValue:{value:"false",computed:!1}},value:{required:!0,tsType:{name:"string"},description:"The current value of the textarea."},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text shown when the textarea is empty."},rows:{required:!1,tsType:{name:"number"},description:`The number of visible text rows.
@default 3`,defaultValue:{value:"3",computed:!1}},isDisabled:{required:!1,tsType:{name:"boolean"},description:`Whether the textarea is disabled.
@default false`,defaultValue:{value:"false",computed:!1}},status:{required:!1,tsType:{name:"XDSTextAreaStatus"},description:`Status indicator for the textarea.
When set, displays a colored border and status icon.
If message is provided, displays a floating message box below the textarea.`},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Width of the field. Numbers are treated as pixels, strings are used as-is\n(e.g. `'100%'`). Sizes the whole field (label, control, and status) so they\nstay aligned, unlike setting width via `xstyle`/`className`/`style`."},labelTooltip:{required:!1,tsType:{name:"string"},description:"Tooltip text to display in an info icon at the end of the label."},startIcon:{required:!1,tsType:{name:"union",raw:"ReactNode | XDSIconType",elements:[{name:"ReactNode"},{name:"ComponentType",elements:[{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"}],raw:"ComponentType<SVGProps<SVGSVGElement>>"}]},description:"Icon to display at the start of the textarea.\nAccepts a ReactNode (e.g. `<XDSIcon icon={SearchIcon} />`) or an SVG icon component directly."},hasSpellCheck:{required:!1,tsType:{name:"boolean"},description:`Whether to enable browser spell checking.
@default true`,defaultValue:{value:"true",computed:!1}},onPaste:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: ClipboardEvent<HTMLTextAreaElement>) => void",signature:{arguments:[{type:{name:"ClipboardEvent",elements:[{name:"HTMLTextAreaElement"}],raw:"ClipboardEvent<HTMLTextAreaElement>"},name:"e"}],return:{name:"void"}}},description:"Callback fired when content is pasted into the textarea."},maxLength:{required:!1,tsType:{name:"number"},description:`Maximum number of characters allowed.
When set, displays a character counter below the textarea.
Does not enforce the limit natively — the counter shows error styling
when exceeded, and the consumer can validate via onChange.`},hasAutoFocus:{required:!1,tsType:{name:"boolean"},description:`Whether to automatically focus the textarea on mount.
@default false`,defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"The size of the textarea, affecting internal padding.\nHeight is controlled by `rows`, not size.\n@default 'md'"},htmlName:{required:!1,tsType:{name:"string"},description:`The HTML name attribute for the textarea.
Useful for form submissions.`},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: FocusEvent<HTMLTextAreaElement>) => void",signature:{arguments:[{type:{name:"FocusEvent",elements:[{name:"HTMLTextAreaElement"}],raw:"FocusEvent<HTMLTextAreaElement>"},name:"e"}],return:{name:"void"}}},description:"Callback fired when the textarea receives focus."},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: FocusEvent<HTMLTextAreaElement>) => void",signature:{arguments:[{type:{name:"FocusEvent",elements:[{name:"HTMLTextAreaElement"}],raw:"FocusEvent<HTMLTextAreaElement>"},name:"e"}],return:{name:"void"}}},description:"Callback fired when the textarea loses focus."}},composes:["Omit"]};const ea={title:"Core/TextArea",component:n,tags:["autodocs"],argTypes:{label:{control:"text",description:"Label text (required)"},isLabelHidden:{control:"boolean",description:"Visually hide the label (still accessible to screen readers)"},placeholder:{control:"text",description:"Placeholder text"},description:{control:"text",description:"Description text displayed between the label and textarea"},value:{control:"text",description:"Current textarea value (required)"},isOptional:{control:"boolean",description:"Whether the field is optional (mutually exclusive with isRequired)"},isRequired:{control:"boolean",description:"Whether the field is required (mutually exclusive with isOptional)"},rows:{control:"number",description:"Number of visible text rows (default: 3)"},isDisabled:{control:"boolean",description:"Whether the textarea is disabled"},status:{control:"object",description:"Status indicator with type (warning/error/success) and optional message"},labelTooltip:{control:"text",description:"Tooltip text to display in an info icon at the end of the label"},hasSpellCheck:{control:"boolean",description:"Whether to enable browser spell checking (default: true)"},maxLength:{control:"number",description:"Maximum number of characters allowed. Displays a counter when set."},size:{control:"radio",options:["sm","md","lg"],description:"Textarea size (affects padding, not height)"}}},w={render:e=>{const[s,r]=t.useState(e.value??"");return a.jsx(n,{...e,value:s,onChange:r})},args:{label:"Description",placeholder:"Enter a description..."}},D={render:e=>{const[s,r]=t.useState(e.value??"");return a.jsx(n,{...e,value:s,onChange:r})},args:{label:"Bio",description:"Tell us about yourself in a few sentences.",placeholder:"Write your bio here..."}},V={render:e=>{const[s,r]=t.useState(e.value??"");return a.jsx(n,{...e,value:s,onChange:r})},args:{label:"Comments",isLabelHidden:!0,placeholder:"Add a comment..."}},A={render:e=>{const[s,r]=t.useState(e.value??"This is a pre-filled textarea with some content that demonstrates how the component handles existing text.");return a.jsx(n,{...e,value:s,onChange:r})},args:{label:"Notes",value:"This is a pre-filled textarea with some content that demonstrates how the component handles existing text."}},j={render:e=>{const[s,r]=t.useState(e.value??"");return a.jsx(n,{...e,value:s,onChange:r})},args:{label:"Message",rows:6,placeholder:"Write a longer message..."}},I={render:()=>{const[e,s]=t.useState(""),[r,i]=t.useState(""),[u,d]=t.useState("Pre-filled content in the textarea."),[p,m]=t.useState(""),[x,b]=t.useState(""),[S,h]=t.useState(""),[l,v]=t.useState(""),[g,f]=t.useState(""),[y,o]=t.useState("This field is disabled");return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"400px"},children:[a.jsx(n,{label:"Visible label",value:e,onChange:s,placeholder:"Enter text..."}),a.jsx(n,{label:"With description",description:"Helpful description text",value:p,onChange:m,placeholder:"Enter text..."}),a.jsx(n,{label:"Hidden label",isLabelHidden:!0,value:r,onChange:i,placeholder:"Hidden label textarea"}),a.jsx(n,{label:"With value",value:u,onChange:d}),a.jsx(n,{label:"Optional field",isOptional:!0,value:x,onChange:b,placeholder:"Optional..."}),a.jsx(n,{label:"Required field",isRequired:!0,value:S,onChange:h,placeholder:"Required..."}),a.jsx(n,{label:"Description with optional",description:"Additional notes",isOptional:!0,value:l,onChange:v,placeholder:"Notes..."}),a.jsx(n,{label:"Custom rows (6)",rows:6,value:g,onChange:f,placeholder:"Larger textarea..."}),a.jsx(n,{label:"Disabled field",isDisabled:!0,value:y,onChange:o})]})}},E={render:e=>{const[s,r]=t.useState(e.value??"");return a.jsx(n,{...e,value:s,onChange:r})},args:{label:"Additional Notes",isOptional:!0,placeholder:"Any additional notes..."}},M={render:e=>{const[s,r]=t.useState(e.value??"");return a.jsx(n,{...e,value:s,onChange:r})},args:{label:"Feedback",isRequired:!0,placeholder:"Please provide your feedback..."}},W={render:e=>{const[s,r]=t.useState(e.value??"");return a.jsx(n,{...e,value:s,onChange:r})},args:{label:"Comments",description:"Share any additional thoughts or comments",isOptional:!0,placeholder:"Your comments here..."}},q={render:e=>{const[s,r]=t.useState(e.value??"This textarea is disabled and cannot be edited.");return a.jsx(n,{...e,value:s,onChange:r})},args:{label:"Disabled Field",isDisabled:!0,value:"This textarea is disabled and cannot be edited."}},L={render:e=>{const[s,r]=t.useState(e.value??"");return a.jsx(n,{...e,value:s,onChange:r})},args:{label:"Notes",placeholder:"Enter your notes...",startIcon:Z}},X={render:()=>{const[e,s]=t.useState(""),[r,i]=t.useState(""),[u,d]=t.useState("");return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"400px"},children:[a.jsx(n,{label:"Notes",value:e,onChange:s,placeholder:"Enter your notes...",startIcon:Z}),a.jsx(n,{label:"Message",value:r,onChange:i,placeholder:"Type your message...",startIcon:ze}),a.jsx(n,{label:"Draft",value:u,onChange:d,placeholder:"Write your draft...",startIcon:Re})]})}},k={render:e=>{const[s,r]=t.useState(e.value??"Too short");return a.jsx(n,{...e,value:s,onChange:r})},args:{label:"Description",placeholder:"Enter a description...",status:{type:"error",message:"Description must be at least 50 characters"}}},N={render:e=>{const[s,r]=t.useState(e.value??"This content may contain issues");return a.jsx(n,{...e,value:s,onChange:r})},args:{label:"Content",placeholder:"Enter content...",status:{type:"warning",message:"Content may need review before publishing"}}},z={render:e=>{const[s,r]=t.useState(e.value??"This is a valid description that meets all requirements.");return a.jsx(n,{...e,value:s,onChange:r})},args:{label:"Description",placeholder:"Enter a description...",status:{type:"success",message:"Description looks good!"}}},R={render:e=>{const[s,r]=t.useState(e.value??"Invalid content");return a.jsx(n,{...e,value:s,onChange:r})},args:{label:"Field",placeholder:"Enter value",status:{type:"error"}}},H={render:()=>{const[e,s]=t.useState("Too short"),[r,i]=t.useState("This may need review"),[u,d]=t.useState("This description meets all the requirements perfectly."),[p,m]=t.useState("Invalid");return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"400px"},children:[a.jsx(n,{label:"Error with message",value:e,onChange:s,status:{type:"error",message:"Must be at least 50 characters"}}),a.jsx(n,{label:"Warning with message",value:r,onChange:i,status:{type:"warning",message:"Content may need review"}}),a.jsx(n,{label:"Success with message",value:u,onChange:d,status:{type:"success",message:"Description is valid"}}),a.jsx(n,{label:"Error without message",value:p,onChange:m,status:{type:"error"}})]})}},O={render:e=>{const[s,r]=t.useState(e.value??"");return a.jsx(n,{...e,value:s,onChange:r})},args:{label:"API Documentation",placeholder:"Describe your API endpoint...",labelTooltip:"Provide a detailed description of what this API endpoint does, including expected inputs and outputs."}},F={render:e=>{const[s,r]=t.useState(e.value??"");return a.jsx(n,{...e,value:s,onChange:r})},args:{label:"Additional Notes",placeholder:"Any additional information...",labelTooltip:"Include any extra details that might be helpful for reviewers.",isOptional:!0}},P={render:()=>{const[e,s]=t.useState("");return a.jsx("div",{style:{maxWidth:"400px"},children:a.jsx(n,{label:"Detailed Description",description:"Provide a comprehensive description of your project",value:e,onChange:s,placeholder:"Enter description...",startIcon:Z,labelTooltip:"This description will be visible to all team members",isRequired:!0,status:e.length>0&&e.length<20?{type:"warning",message:"Consider adding more detail"}:e.length>=20?{type:"success",message:"Description looks good!"}:void 0})})}},G={render:()=>{const[e,s]=t.useState(""),[r,i]=t.useState(""),[u,d]=t.useState(""),[p,m]=t.useState(""),[x,b]=t.useState(""),[S,h]=t.useState("");return a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:["sm","md","lg"].map((l,v)=>{const g={sm:"Small (28px)",md:"Medium (32px)",lg:"Large (36px)"}[l],[f,y]=[[e,s],[r,i],[u,d]][v],[o,T]=[[p,m],[x,b],[S,h]][v];return a.jsxs("div",{style:{display:"flex",gap:"16px"},children:[a.jsx("div",{style:{flex:1},children:a.jsx(n,{label:g,value:f,onChange:y,placeholder:"TextArea",size:l})}),a.jsx("div",{style:{flex:1},children:a.jsx(Ne,{label:g,value:o,onChange:T,placeholder:"TextInput",size:l})})]},l)})})}},B={render:e=>{const[s,r]=t.useState(e.value??"");return a.jsx(n,{...e,value:s,onChange:r})},args:{label:"Bio",placeholder:"Tell us about yourself...",maxLength:150}},$={render:e=>{const[s,r]=t.useState(e.value??"This is a pre-filled bio that demonstrates the character counter.");return a.jsx(n,{...e,value:s,onChange:r})},args:{label:"Bio",maxLength:100}},_={render:()=>{const[e,s]=t.useState(""),[r,i]=t.useState("Some text here"),[u,d]=t.useState("This is a longer text that approaches the maximum length limit.");return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"400px"},children:[a.jsx(n,{label:"Short limit",value:e,onChange:s,placeholder:"Max 50 characters",maxLength:50}),a.jsx(n,{label:"Medium limit",value:r,onChange:i,placeholder:"Max 100 characters",maxLength:100}),a.jsx(n,{label:"Long limit",value:u,onChange:d,placeholder:"Max 200 characters",maxLength:200})]})}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? '');
    return <XDSTextArea {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Description',
    placeholder: 'Enter a description...'
  }
}`,...w.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? '');
    return <XDSTextArea {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Bio',
    description: 'Tell us about yourself in a few sentences.',
    placeholder: 'Write your bio here...'
  }
}`,...D.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? '');
    return <XDSTextArea {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Comments',
    isLabelHidden: true,
    placeholder: 'Add a comment...'
  }
}`,...V.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? 'This is a pre-filled textarea with some content that demonstrates how the component handles existing text.');
    return <XDSTextArea {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Notes',
    value: 'This is a pre-filled textarea with some content that demonstrates how the component handles existing text.'
  }
}`,...A.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? '');
    return <XDSTextArea {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Message',
    rows: 6,
    placeholder: 'Write a longer message...'
  }
}`,...j.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('Pre-filled content in the textarea.');
    const [value4, setValue4] = useState('');
    const [value5, setValue5] = useState('');
    const [value6, setValue6] = useState('');
    const [value7, setValue7] = useState('');
    const [value8, setValue8] = useState('');
    const [value9, setValue9] = useState('This field is disabled');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      maxWidth: '400px'
    }}>
        <XDSTextArea label="Visible label" value={value1} onChange={setValue1} placeholder="Enter text..." />
        <XDSTextArea label="With description" description="Helpful description text" value={value4} onChange={setValue4} placeholder="Enter text..." />
        <XDSTextArea label="Hidden label" isLabelHidden value={value2} onChange={setValue2} placeholder="Hidden label textarea" />
        <XDSTextArea label="With value" value={value3} onChange={setValue3} />
        <XDSTextArea label="Optional field" isOptional value={value5} onChange={setValue5} placeholder="Optional..." />
        <XDSTextArea label="Required field" isRequired value={value6} onChange={setValue6} placeholder="Required..." />
        <XDSTextArea label="Description with optional" description="Additional notes" isOptional value={value7} onChange={setValue7} placeholder="Notes..." />
        <XDSTextArea label="Custom rows (6)" rows={6} value={value8} onChange={setValue8} placeholder="Larger textarea..." />
        <XDSTextArea label="Disabled field" isDisabled value={value9} onChange={setValue9} />
      </div>;
  }
}`,...I.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? '');
    return <XDSTextArea {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Additional Notes',
    isOptional: true,
    placeholder: 'Any additional notes...'
  }
}`,...E.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? '');
    return <XDSTextArea {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Feedback',
    isRequired: true,
    placeholder: 'Please provide your feedback...'
  }
}`,...M.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? '');
    return <XDSTextArea {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Comments',
    description: 'Share any additional thoughts or comments',
    isOptional: true,
    placeholder: 'Your comments here...'
  }
}`,...W.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? 'This textarea is disabled and cannot be edited.');
    return <XDSTextArea {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Disabled Field',
    isDisabled: true,
    value: 'This textarea is disabled and cannot be edited.'
  }
}`,...q.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? '');
    return <XDSTextArea {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Notes',
    placeholder: 'Enter your notes...',
    startIcon: DocumentTextIcon
  }
}`,...L.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [notes, setNotes] = useState('');
    const [message, setMessage] = useState('');
    const [draft, setDraft] = useState('');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      maxWidth: '400px'
    }}>
        <XDSTextArea label="Notes" value={notes} onChange={setNotes} placeholder="Enter your notes..." startIcon={DocumentTextIcon} />
        <XDSTextArea label="Message" value={message} onChange={setMessage} placeholder="Type your message..." startIcon={ChatBubbleLeftIcon} />
        <XDSTextArea label="Draft" value={draft} onChange={setDraft} placeholder="Write your draft..." startIcon={PencilSquareIcon} />
      </div>;
  }
}`,...X.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? 'Too short');
    return <XDSTextArea {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Description',
    placeholder: 'Enter a description...',
    status: {
      type: 'error',
      message: 'Description must be at least 50 characters'
    }
  }
}`,...k.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? 'This content may contain issues');
    return <XDSTextArea {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Content',
    placeholder: 'Enter content...',
    status: {
      type: 'warning',
      message: 'Content may need review before publishing'
    }
  }
}`,...N.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? 'This is a valid description that meets all requirements.');
    return <XDSTextArea {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Description',
    placeholder: 'Enter a description...',
    status: {
      type: 'success',
      message: 'Description looks good!'
    }
  }
}`,...z.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? 'Invalid content');
    return <XDSTextArea {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Field',
    placeholder: 'Enter value',
    status: {
      type: 'error'
    }
  }
}`,...R.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [error, setError] = useState('Too short');
    const [warning, setWarning] = useState('This may need review');
    const [success, setSuccess] = useState('This description meets all the requirements perfectly.');
    const [errorNoMsg, setErrorNoMsg] = useState('Invalid');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      maxWidth: '400px'
    }}>
        <XDSTextArea label="Error with message" value={error} onChange={setError} status={{
        type: 'error',
        message: 'Must be at least 50 characters'
      }} />
        <XDSTextArea label="Warning with message" value={warning} onChange={setWarning} status={{
        type: 'warning',
        message: 'Content may need review'
      }} />
        <XDSTextArea label="Success with message" value={success} onChange={setSuccess} status={{
        type: 'success',
        message: 'Description is valid'
      }} />
        <XDSTextArea label="Error without message" value={errorNoMsg} onChange={setErrorNoMsg} status={{
        type: 'error'
      }} />
      </div>;
  }
}`,...H.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? '');
    return <XDSTextArea {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'API Documentation',
    placeholder: 'Describe your API endpoint...',
    labelTooltip: 'Provide a detailed description of what this API endpoint does, including expected inputs and outputs.'
  }
}`,...O.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? '');
    return <XDSTextArea {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Additional Notes',
    placeholder: 'Any additional information...',
    labelTooltip: 'Include any extra details that might be helpful for reviewers.',
    isOptional: true
  }
}`,...F.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <div style={{
      maxWidth: '400px'
    }}>
        <XDSTextArea label="Detailed Description" description="Provide a comprehensive description of your project" value={value} onChange={setValue} placeholder="Enter description..." startIcon={DocumentTextIcon} labelTooltip="This description will be visible to all team members" isRequired status={value.length > 0 && value.length < 20 ? {
        type: 'warning',
        message: 'Consider adding more detail'
      } : value.length >= 20 ? {
        type: 'success',
        message: 'Description looks good!'
      } : undefined} />
      </div>;
  }
}`,...P.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [smArea, setSmArea] = useState('');
    const [mdArea, setMdArea] = useState('');
    const [lgArea, setLgArea] = useState('');
    const [smInput, setSmInput] = useState('');
    const [mdInput, setMdInput] = useState('');
    const [lgInput, setLgInput] = useState('');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        {(['sm', 'md', 'lg'] as const).map((sz, i) => {
        const label = {
          sm: 'Small (28px)',
          md: 'Medium (32px)',
          lg: 'Large (36px)'
        }[sz];
        const [area, setArea] = [[smArea, setSmArea], [mdArea, setMdArea], [lgArea, setLgArea]][i] as [string, (v: string) => void];
        const [input, setInput] = [[smInput, setSmInput], [mdInput, setMdInput], [lgInput, setLgInput]][i] as [string, (v: string) => void];
        return <div key={sz} style={{
          display: 'flex',
          gap: '16px'
        }}>
              <div style={{
            flex: 1
          }}>
                <XDSTextArea label={label} value={area} onChange={setArea} placeholder="TextArea" size={sz} />
              </div>
              <div style={{
            flex: 1
          }}>
                <XDSTextInput label={label} value={input} onChange={setInput} placeholder="TextInput" size={sz} />
              </div>
            </div>;
      })}
      </div>;
  }
}`,...G.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? '');
    return <XDSTextArea {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Bio',
    placeholder: 'Tell us about yourself...',
    maxLength: 150
  }
}`,...B.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? 'This is a pre-filled bio that demonstrates the character counter.');
    return <XDSTextArea {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Bio',
    maxLength: 100
  }
}`,...$.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [short, setShort] = useState('');
    const [medium, setMedium] = useState('Some text here');
    const [long, setLong] = useState('This is a longer text that approaches the maximum length limit.');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      maxWidth: '400px'
    }}>
        <XDSTextArea label="Short limit" value={short} onChange={setShort} placeholder="Max 50 characters" maxLength={50} />
        <XDSTextArea label="Medium limit" value={medium} onChange={setMedium} placeholder="Max 100 characters" maxLength={100} />
        <XDSTextArea label="Long limit" value={long} onChange={setLong} placeholder="Max 200 characters" maxLength={200} />
      </div>;
  }
}`,..._.parameters?.docs?.source}}};const aa=["Default","WithDescription","WithHiddenLabel","WithValue","CustomRows","AllVariations","OptionalField","RequiredField","DescriptionWithOptional","Disabled","WithStartIcon","StartIconVariations","ErrorStatus","WarningStatus","SuccessStatus","StatusWithoutMessage","StatusVariations","WithTooltip","TooltipWithOptional","CombinedFeatures","SizeVariants","WithMaxLength","MaxLengthWithValue","MaxLengthVariations"];export{I as AllVariations,P as CombinedFeatures,j as CustomRows,w as Default,W as DescriptionWithOptional,q as Disabled,k as ErrorStatus,_ as MaxLengthVariations,$ as MaxLengthWithValue,E as OptionalField,M as RequiredField,G as SizeVariants,X as StartIconVariations,H as StatusVariations,R as StatusWithoutMessage,z as SuccessStatus,F as TooltipWithOptional,N as WarningStatus,D as WithDescription,V as WithHiddenLabel,B as WithMaxLength,L as WithStartIcon,O as WithTooltip,A as WithValue,aa as __namedExportsOrder,ea as default};
