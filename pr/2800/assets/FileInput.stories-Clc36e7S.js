import{at as l,ad as e,aj as Fe,ai as we,ar as je,aZ as ze,q as Q,m as E}from"./iframe-yRFQ_7VC.js";import{X as Ve}from"./XDSField-COi97ivg.js";import{X as De}from"./XDSInputClearButton-5cesfNLN.js";import"./preload-helper-Ct5FWWRu.js";import"./XDSFieldStatus-BgnciRVy.js";function Ce(s){return s<1024?`${s} B`:s<1024*1024?`${(s/1024).toFixed(1)} KB`:`${(s/(1024*1024)).toFixed(1)} MB`}function Ie(s,t,a,u,v){const p=[];let i=s;if(t){const m=t.split(",").map(c=>c.trim().toLowerCase());i=i.filter(c=>{const n=m.some(x=>x.startsWith(".")?c.name.toLowerCase().endsWith(x):x.endsWith("/*")?c.type.startsWith(x.slice(0,-1)):c.type.toLowerCase()===x);return n||p.push(`"${c.name}" is not an accepted file type`),n})}return a!=null&&(i=i.filter(m=>m.size>a?(p.push(`"${m.name}" exceeds ${Ce(a)} limit`),!1):!0)),v&&u!=null&&i.length>u&&(p.push(`Maximum ${u} files allowed`),i=i.slice(0,u)),{valid:i,errors:p}}const y={dropzone:{kB7OPa:"xds9f619",kVAEAm:"xds1n2onr6",kY2c9j:"xds1vjfegm",k1xSpc:"xds78zum5",kXwgrk:"xdsdt5ytf",kGNEyG:"xds6s0dn4",kjj79g:"xdsl56j7k",kOIVth:"xds1txdalj",k8WAf4:"xdsq6koh6",kg3NbH:"xds1pzlopt",kMzoRj:"xds1litavf",ksu8eU:"xdsbsl7fq",kVAM5u:"xdsvy26l8 xds6q1khz",kaIpWk:"xdsh6dtrn",kWkggS:"xds10xzikg",k1ekBW:"xds1tv3a4w",kIyJzY:"xdsuedmi6 xds12w9bfk",kAMwcw:"xdslr8y92",kkrTdU:"xds1ypdohk",kI3sdo:"xds1a2a7pz",$$css:!0},dropzoneHover:{kGVxlE:"xdsw6ruzt",$$css:!0},dropzoneActive:{kVAM5u:"xdsad5do",kWkggS:"xdsgcxg3y",$$css:!0},dropzoneDisabled:{kkrTdU:"xds1h6gzvc",kSiTet:"xdsbyyjgo",kVAM5u:"xdsvy26l8",$$css:!0},compact:{kB7OPa:"xds9f619",kVAEAm:"xds1n2onr6",kY2c9j:"xds1vjfegm",k1xSpc:"xds78zum5",kGNEyG:"xds6s0dn4",kOIVth:"xds1txdalj",k8WAf4:"xdsu0wf1k",kg3NbH:"xdsf314gf",kMzoRj:"xds1litavf",ksu8eU:"xds1y0btm7",kVAM5u:"xdsvy26l8 xds6q1khz",kaIpWk:"xdsh6dtrn",kWkggS:"xds10xzikg",k1ekBW:"xds12zzom9",kIyJzY:"xdsuedmi6 xds12w9bfk",kAMwcw:"xdslr8y92",kGVxlE:"xds1gnnqk1 xds70dsy8",kkrTdU:"xds1ypdohk",kZKoxP:"xds1ueg155",kI3sdo:"xds1a2a7pz",$$css:!0},compactDisabled:{kkrTdU:"xds1h6gzvc",kSiTet:"xdsbyyjgo",kVAM5u:"xdsvy26l8",$$css:!0}},Te={warning:{kVAM5u:"xds8wg1ba",kzOINU:null,kGJrpR:null,kaZRDh:null,kBCPoo:null,k26BEO:null,k5QoK5:null,kLZC3w:null,kL6WhQ:null,$$css:!0},error:{kVAM5u:"xds1ofxpqo",kzOINU:null,kGJrpR:null,kaZRDh:null,kBCPoo:null,k26BEO:null,k5QoK5:null,kLZC3w:null,kL6WhQ:null,$$css:!0},success:{kVAM5u:"xds16m2moy",kzOINU:null,kGJrpR:null,kaZRDh:null,kBCPoo:null,k26BEO:null,k5QoK5:null,kLZC3w:null,kL6WhQ:null,$$css:!0}};function o({label:s,isLabelHidden:t=!1,value:a,onChange:u,changeAction:v,accept:p,isMultiple:i=!1,maxSize:m,maxFiles:c,isDisabled:n=!1,isRequired:x=!1,isLoading:S=!1,status:Y,description:X,placeholder:_,mode:g="input",isOptional:ee=!1,labelTooltip:se,width:ae,xstyle:le,className:te,style:ne,ref:re,...oe}){const N=l.useId(),L=l.useId(),G=l.useId(),ie=l.useId(),f=l.useRef(null),[H,F]=l.useState(!1),[R,B]=l.useState(null),[,Z]=l.useTransition(),d=Y??(R?{type:"error",message:R}:void 0),ue={warning:"warning",error:"error",success:"success"},de={warning:"warning",error:"error",success:"success"},ce=[X?L:null,d?.message?G:null].filter(Boolean).join(" ")||void 0,$=_??(i?"Choose files":"Choose file"),w=l.useCallback(r=>{if(n)return;const{valid:h,errors:J}=Ie(r,p,m,c,i);if(J.length>0?B(J[0]):B(null),h.length===0){u(null);return}const K=i?h:h[0];u(K),v&&Z(async()=>{await v(K)})},[p,n,i,c,m,u,v,Z]),pe=l.useCallback(r=>{const h=Array.from(r.target.files??[]);w(h),f.current&&(f.current.value="")},[w]),me=l.useCallback(r=>{r.stopPropagation(),B(null),u(null),f.current&&(f.current.value="",f.current.focus())},[u]),xe=l.useCallback(()=>{n||f.current?.click()},[n]),ge=l.useCallback(r=>{(r.key==="Enter"||r.key===" ")&&!n&&(r.preventDefault(),f.current?.click())},[n]),fe=l.useCallback(r=>{r.preventDefault(),r.stopPropagation(),!n&&g==="dropzone"&&F(!0)},[n,g]),he=l.useCallback(r=>{r.preventDefault(),r.stopPropagation(),!n&&g==="dropzone"&&F(!0)},[n,g]),ve=l.useCallback(r=>{r.preventDefault(),r.stopPropagation(),F(!1)},[]),ke=l.useCallback(r=>{if(r.preventDefault(),r.stopPropagation(),F(!1),n||g!=="dropzone")return;const h=Array.from(r.dataTransfer.files);h.length>0&&w(h)},[n,g,w]),b=a!=null&&(Array.isArray(a)?a.length>0:!0),O=b?Array.isArray(a)?a.map(r=>r.name).join(", "):a?.name??"":null,ye=()=>S?e.jsx(Q,{size:"md"}):b?e.jsx("div",{className:"xds9ynric xdsjm74w1 xds6pjikd xdsw6l6zx xds1tgivj0 xdsb3r6kr xdslyipyv xds98rzlu xdseuugli xds2b8uid xdseaf4i8",children:O}):e.jsxs(e.Fragment,{children:[e.jsx(E,{icon:"arrowUp",size:"md",color:"secondary"}),e.jsx("span",{className:"xds9ynric xdsjm74w1 xds6pjikd xdsw6l6zx xdsv1l7n4 xds2b8uid xds87ps6o",children:H?"Drop files here":$})]}),be=()=>S?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"xds9ynric xdsjm74w1 xds6pjikd xdsw6l6zx xds1tgivj0 xdsb3r6kr xdslyipyv xdsuxw1ft xds98rzlu xdseuugli",children:O??$}),e.jsx(Q,{size:"sm"})]}):e.jsxs(e.Fragment,{children:[e.jsx(E,{icon:"arrowUp",size:"sm",color:"secondary"}),e.jsx("span",{...{0:{className:"xds9ynric xdsjm74w1 xds6pjikd xdsw6l6zx xdsv1l7n4 xds87ps6o xds1yc453h xds98rzlu xdseuugli"},2:{className:"xds9ynric xdsjm74w1 xds6pjikd xdsw6l6zx xds1tgivj0 xdsb3r6kr xdslyipyv xdsuxw1ft xds1yc453h xds98rzlu xdseuugli"},1:{className:"xds9ynric xdsjm74w1 xds6pjikd xdsw6l6zx xdsv1l7n4 xds87ps6o xds1yc453h"},3:{className:"xds9ynric xdsjm74w1 xds6pjikd xdsw6l6zx xds1tgivj0 xdsb3r6kr xdslyipyv xdsuxw1ft xds98rzlu xdseuugli xds1yc453h"}}[!!b<<1|!!b<<0],children:O??$}),d&&e.jsx(E,{icon:ue[d.type],size:"md",color:de[d.type]})]}),k=g==="dropzone",Se=k?{onDragEnter:fe,onDragOver:he,onDragLeave:ve,onDrop:ke}:{};return e.jsxs(Ve,{label:s,isLabelHidden:t,description:X,inputID:N,descriptionID:X?L:void 0,isOptional:ee,isRequired:x,isDisabled:n,status:d?{type:d.type,message:d.message,messageID:d.message?G:void 0}:void 0,labelTooltip:se,width:ae,children:[e.jsxs("div",{role:"button",tabIndex:n?-1:0,onClick:xe,onKeyDown:ge,"aria-label":s,"aria-busy":S||void 0,...Se,...we(ze("file-input",{mode:g,status:d?.type??null}),je(k?y.dropzone:y.compact,k&&!n&&y.dropzoneHover,k&&H&&y.dropzoneActive,k&&n&&y.dropzoneDisabled,!k&&n&&y.compactDisabled,d&&Te[d.type],le),te,ne),children:[e.jsx("input",{...oe,ref:Fe(re,f),id:N,type:"file",accept:p,multiple:i,disabled:n,onChange:pe,"aria-describedby":ce,"aria-required":x?"true":void 0,"aria-invalid":d?.type==="error"?"true":void 0,tabIndex:-1,className:"xds10l6tqk xds1i1rx1s xdsjm9jq1 xds1717udv xdskdpibf xdsb3r6kr xdszpqnlu xdsuxw1ft xdsc342km"}),k?ye():be(),b&&!n&&!S&&e.jsx(De,{label:`Clear ${s}`,onClick:me})]}),e.jsx("div",{id:ie,role:"status","aria-live":"polite",className:"xds10l6tqk xds1i1rx1s xdsjm9jq1 xds1717udv xdskdpibf xdsb3r6kr xdszpqnlu xdsuxw1ft xdsc342km",children:R})]})}o.displayName="XDSFileInput";o.__docgenInfo={description:'A file input component with optional drag-and-drop support.\n\n@example\n```\n<XDSFileInput label="Resume" value={file} onChange={setFile} accept=".pdf" />\n```',methods:[],displayName:"XDSFileInput",props:{ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:""},label:{required:!0,tsType:{name:"string"},description:"Accessible label for the file input."},isLabelHidden:{required:!1,tsType:{name:"boolean"},description:`Whether to visually hide the label (still accessible to screen readers).
@default false`,defaultValue:{value:"false",computed:!1}},value:{required:!0,tsType:{name:"union",raw:"File | File[] | null",elements:[{name:"File"},{name:"Array",elements:[{name:"File"}],raw:"File[]"},{name:"null"}]},description:"Currently selected file(s). Controlled component."},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(files: File | File[] | null) => void",signature:{arguments:[{type:{name:"union",raw:"File | File[] | null",elements:[{name:"File"},{name:"Array",elements:[{name:"File"}],raw:"File[]"},{name:"null"}]},name:"files"}],return:{name:"void"}}},description:"Callback fired when files are selected or removed."},changeAction:{required:!1,tsType:{name:"signature",type:"function",raw:"(files: File | File[] | null) => Promise<void>",signature:{arguments:[{type:{name:"union",raw:"File | File[] | null",elements:[{name:"File"},{name:"Array",elements:[{name:"File"}],raw:"File[]"},{name:"null"}]},name:"files"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:`Async change action (React 19 transitions pattern).
Use for immediate upload on file selection.`},accept:{required:!1,tsType:{name:"string"},description:`Accepted file types. Uses the HTML accept attribute format.
Examples: "image/*", ".pdf,.doc,.docx", "image/png,image/jpeg"`},isMultiple:{required:!1,tsType:{name:"boolean"},description:"Whether multiple files can be selected.\nWhen true, `value` and `onChange` use `File[]` instead of `File`.\n@default false",defaultValue:{value:"false",computed:!1}},maxSize:{required:!1,tsType:{name:"number"},description:`Maximum file size in bytes. Files exceeding this are rejected
with an error status.`},maxFiles:{required:!1,tsType:{name:"number"},description:"Maximum number of files (only applies when `isMultiple` is true)."},isDisabled:{required:!1,tsType:{name:"boolean"},description:`Whether the input is disabled.
@default false`,defaultValue:{value:"false",computed:!1}},isRequired:{required:!1,tsType:{name:"boolean"},description:`Whether the input is required.
@default false`,defaultValue:{value:"false",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:`Whether the input is in a loading state (e.g. uploading).
@default false`,defaultValue:{value:"false",computed:!1}},status:{required:!1,tsType:{name:"XDSInputStatus"},description:"Validation status for the input."},description:{required:!1,tsType:{name:"string"},description:"Description text displayed below the label."},placeholder:{required:!1,tsType:{name:"string"},description:`Placeholder text shown when no file is selected.
@default "Choose file" or "Choose files"`},mode:{required:!1,tsType:{name:"union",raw:"'dropzone' | 'input'",elements:[{name:"literal",value:"'dropzone'"},{name:"literal",value:"'input'"}]},description:`Visual mode for the file input.
- 'input': compact inline style, similar to a text input
- 'dropzone': larger area with dashed border and drag-and-drop support
@default 'input'`,defaultValue:{value:"'input'",computed:!1}},isOptional:{required:!1,tsType:{name:"boolean"},description:`Whether the field is optional. Mutually exclusive with isRequired.
@default false`,defaultValue:{value:"false",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Width of the field. Numbers are treated as pixels, strings are used as-is\n(e.g. `'100%'`). Sizes the whole field (label, control, and status) so they\nstay aligned, unlike setting width via `xstyle`/`className`/`style`."},labelTooltip:{required:!1,tsType:{name:"string"},description:"Tooltip text to display in an info icon at the end of the label."}},composes:["Omit"]};const Xe={title:"Core/FileInput",component:o,tags:["autodocs"],argTypes:{label:{control:"text",description:"Label text (required)"},isLabelHidden:{control:"boolean",description:"Visually hide the label (still accessible to screen readers)"},placeholder:{control:"text",description:"Placeholder text"},description:{control:"text",description:"Description text displayed between the label and input"},accept:{control:"text",description:'Accepted file types (e.g. "image/*", ".pdf,.doc")'},isMultiple:{control:"boolean",description:"Whether multiple files can be selected"},isOptional:{control:"boolean",description:"Whether the field is optional (mutually exclusive with isRequired)"},isRequired:{control:"boolean",description:"Whether the field is required (mutually exclusive with isOptional)"},isDisabled:{control:"boolean",description:"Whether the input is disabled"},isLoading:{control:"boolean",description:"Whether the input is in a loading state"},mode:{control:"select",options:["input","dropzone"],description:"Visual mode: compact input or drag-and-drop dropzone"},status:{control:"object",description:"Status indicator with type (warning/error/success) and optional message"},labelTooltip:{control:"text",description:"Tooltip text to display in an info icon at the end of the label"}}},j={render:s=>{const[t,a]=l.useState(null);return e.jsx(o,{...s,value:t,onChange:a})},args:{label:"Upload file",placeholder:"Drag files here or click to browse"}},z={render:s=>{const[t,a]=l.useState(null);return e.jsx(o,{...s,value:t,onChange:a})},args:{label:"Resume",description:"Upload your resume in PDF or Word format. Max 5MB.",accept:".pdf,.doc,.docx"}},V={render:s=>{const[t,a]=l.useState(null);return e.jsx(o,{...s,value:t,onChange:a})},args:{label:"Attachments",isMultiple:!0,description:"Upload up to 10 files. Max 5MB each.",maxFiles:10,maxSize:5*1024*1024}},D={render:s=>{const[t,a]=l.useState(null);return e.jsx(o,{...s,value:t,onChange:a})},args:{label:"Profile photo",accept:"image/png,image/jpeg",description:"PNG or JPEG, max 2MB.",maxSize:2*1024*1024}},C={render:s=>{const[t,a]=l.useState(null);return e.jsx(o,{...s,value:t,onChange:a})},args:{label:"Upload files",mode:"dropzone",placeholder:"Drag files here or click to browse"}},I={render:s=>{const[t,a]=l.useState(null);return e.jsx(o,{...s,value:t,onChange:a})},args:{label:"Supporting document",isRequired:!0}},T={render:s=>{const[t,a]=l.useState(null);return e.jsx(o,{...s,value:t,onChange:a})},args:{label:"Cover letter",isOptional:!0}},W={render:s=>{const[t,a]=l.useState(null);return e.jsx(o,{...s,value:t,onChange:a})},args:{label:"Upload locked",isDisabled:!0,placeholder:"Upload is currently disabled"}},q={render:s=>{const[t,a]=l.useState(null);return e.jsx(o,{...s,value:t,onChange:a})},args:{label:"Uploading...",isLoading:!0}},M={render:s=>{const[t,a]=l.useState(null);return e.jsx(o,{...s,value:t,onChange:a})},args:{label:"Upload document",status:{type:"error",message:"File must be under 10MB"}}},A={render:s=>{const[t,a]=l.useState(null);return e.jsx(o,{...s,value:t,onChange:a})},args:{label:"Upload document",status:{type:"success",message:"File uploaded successfully"}}},U={render:s=>{const[t,a]=l.useState(null);return e.jsx(o,{...s,value:t,onChange:a})},args:{label:"Tax documents",labelTooltip:"Upload W-2 forms, 1099s, or other tax-related documents."}},P={render:()=>{const[s,t]=l.useState(null),[a,u]=l.useState(null),[v,p]=l.useState(null),[i,m]=l.useState(null),[c,n]=l.useState(null);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",maxWidth:"400px"},children:[e.jsx(o,{label:"Default (input mode)",value:s,onChange:t}),e.jsx(o,{label:"Dropzone with constraints",value:a,onChange:u,mode:"dropzone",isMultiple:!0,accept:"image/*",maxSize:5*1024*1024,maxFiles:5,description:"Up to 5 images, max 5MB each"}),e.jsx(o,{label:"Dropzone mode",value:v,onChange:p,mode:"dropzone",placeholder:"Drag files here or click to browse"}),e.jsx(o,{label:"Disabled",value:i,onChange:m,isDisabled:!0}),e.jsx(o,{label:"With error",value:c,onChange:n,status:{type:"error",message:"Please upload a valid file"}})]})}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<File | File[] | null>(null);
    return <XDSFileInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Upload file',
    placeholder: 'Drag files here or click to browse'
  }
}`,...j.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<File | File[] | null>(null);
    return <XDSFileInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Resume',
    description: 'Upload your resume in PDF or Word format. Max 5MB.',
    accept: '.pdf,.doc,.docx'
  }
}`,...z.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<File | File[] | null>(null);
    return <XDSFileInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Attachments',
    isMultiple: true,
    description: 'Upload up to 10 files. Max 5MB each.',
    maxFiles: 10,
    maxSize: 5 * 1024 * 1024
  }
}`,...V.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<File | File[] | null>(null);
    return <XDSFileInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Profile photo',
    accept: 'image/png,image/jpeg',
    description: 'PNG or JPEG, max 2MB.',
    maxSize: 2 * 1024 * 1024
  }
}`,...D.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<File | File[] | null>(null);
    return <XDSFileInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Upload files',
    mode: 'dropzone',
    placeholder: 'Drag files here or click to browse'
  }
}`,...C.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<File | File[] | null>(null);
    return <XDSFileInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Supporting document',
    isRequired: true
  }
}`,...I.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<File | File[] | null>(null);
    return <XDSFileInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Cover letter',
    isOptional: true
  }
}`,...T.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<File | File[] | null>(null);
    return <XDSFileInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Upload locked',
    isDisabled: true,
    placeholder: 'Upload is currently disabled'
  }
}`,...W.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<File | File[] | null>(null);
    return <XDSFileInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Uploading...',
    isLoading: true
  }
}`,...q.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<File | File[] | null>(null);
    return <XDSFileInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Upload document',
    status: {
      type: 'error',
      message: 'File must be under 10MB'
    }
  }
}`,...M.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<File | File[] | null>(null);
    return <XDSFileInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Upload document',
    status: {
      type: 'success',
      message: 'File uploaded successfully'
    }
  }
}`,...A.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<File | File[] | null>(null);
    return <XDSFileInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Tax documents',
    labelTooltip: 'Upload W-2 forms, 1099s, or other tax-related documents.'
  }
}`,...U.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [v1, setV1] = useState<File | File[] | null>(null);
    const [v2, setV2] = useState<File | File[] | null>(null);
    const [v3, setV3] = useState<File | File[] | null>(null);
    const [v4, setV4] = useState<File | File[] | null>(null);
    const [v5, setV5] = useState<File | File[] | null>(null);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      maxWidth: '400px'
    }}>
        <XDSFileInput label="Default (input mode)" value={v1} onChange={setV1} />
        <XDSFileInput label="Dropzone with constraints" value={v2} onChange={setV2} mode="dropzone" isMultiple accept="image/*" maxSize={5 * 1024 * 1024} maxFiles={5} description="Up to 5 images, max 5MB each" />
        <XDSFileInput label="Dropzone mode" value={v3} onChange={setV3} mode="dropzone" placeholder="Drag files here or click to browse" />
        <XDSFileInput label="Disabled" value={v4} onChange={setV4} isDisabled />
        <XDSFileInput label="With error" value={v5} onChange={setV5} status={{
        type: 'error',
        message: 'Please upload a valid file'
      }} />
      </div>;
  }
}`,...P.parameters?.docs?.source}}};const Re=["Default","WithDescription","MultipleFiles","ImagesOnly","DropzoneMode","Required","Optional","Disabled","Loading","WithErrorStatus","WithSuccessStatus","WithTooltip","AllVariations"];export{P as AllVariations,j as Default,W as Disabled,C as DropzoneMode,D as ImagesOnly,q as Loading,V as MultipleFiles,T as Optional,I as Required,z as WithDescription,M as WithErrorStatus,A as WithSuccessStatus,U as WithTooltip,Re as __namedExportsOrder,Xe as default};
