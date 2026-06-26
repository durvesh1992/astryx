import{aV as xa,at as e,ad as n,m as R,aj as ha,q as fa,ar as ce,ai as Sa,aZ as va}from"./iframe-yRFQ_7VC.js";import{X as ba}from"./XDSField-COi97ivg.js";import{a as qe,b as We,i as Xe,c as P}from"./inputStyles.stylex-BIqXE6lP.js";import{u as Ta,X as Da}from"./XDSCalendar-DnQEEy7F.js";import{u as ya}from"./useXDSPopover-ChRJmaAz.js";import{u as Ia}from"./useInputContainer-DjJ5nP5w.js";import{i as Ca,k as wa,w as pe,D as Oa}from"./plainDate-C-ANv9VG.js";import{p as ge}from"./dateParser-CpYVMWHj.js";import{f as ka,b as Va,p as xe,i as w,c as Re,a as ja}from"./timeParser-CAi7zy_b.js";import"./preload-helper-Ct5FWWRu.js";import"./XDSFieldStatus-BgnciRVy.js";import"./useClickableContainer-B3IEmxS8.js";const he={row:{k1xSpc:"xds78zum5",kOIVth:"xds1txdalj",$$css:!0},dateWrapper:{kUk6DE:"xds98rzlu",kzQI83:null,kmuXW:null,kCS8Yb:"xds1r8uery",$$css:!0},timeWrapper:{kUk6DE:"xds98rzlu",kzQI83:null,kmuXW:null,kCS8Yb:"xds1r8uery",$$css:!0}},_e={sm:{kZKoxP:"xds6k0iem",$$css:!0},md:{kZKoxP:"xds1ueg155",$$css:!0},lg:{kZKoxP:"xdsssyfek",$$css:!0}};function fe(a){if(!a)return{date:void 0,time:void 0};const t=a.indexOf("T");return t===-1?{date:a,time:void 0}:{date:a.slice(0,t),time:a.slice(t+1)}}function L(a,t){if(!(!a||!t))return`${a}T${t}`}function za(a){const t=new Date;return Re({hour:t.getHours(),minute:t.getMinutes(),second:t.getSeconds()},a)}function l({label:a,isLabelHidden:t=!1,description:s,isOptional:O=!1,isRequired:y=!1,isDisabled:C=!1,value:I,onChange:M,changeAction:k,isLoading:ne=!1,min:q,max:W,dateConstraints:Se,hasSeconds:p=!1,hourFormat:se="12h",timeIncrement:re=1,hasClear:Pe=!1,placeholder:Le="Select a date",size:Ae,status:d,labelTooltip:Fe,numberOfMonths:Ne=1,width:Ee,xstyle:He,className:$e,style:Be,ref:Ye,...Ue}){const ie=xa(Ae,"md"),ve=e.useId(),Ke=e.useId(),be=e.useId(),Te=e.useId(),le=e.useRef(null),De=e.useRef(null),ye=e.useRef(null),Ie=e.useRef(null),de=e.useRef(void 0),[,Ce]=e.useTransition(),[oe,we]=e.useOptimistic(I),V=ne||oe!==I,c=C||V,Ze={warning:"warning",error:"error",success:"success"},Qe={warning:"warning",error:"error",success:"success"},Ge=[s?be:null,d?.message?Te:null].filter(Boolean).join(" ")||void 0,g=e.useMemo(()=>fe(q),[q]),x=e.useMemo(()=>fe(W),[W]),r=e.useMemo(()=>fe(oe),[oe]),Oe=g.date,ke=x.date,{isDateDisabled:X}=Ta({min:Oe,max:ke,dateConstraints:Se}),T=e.useMemo(()=>{if(!(!g.date||!g.time||!r.date))return r.date===g.date?g.time:void 0},[g.date,g.time,r.date]),D=e.useMemo(()=>{if(!(!x.date||!x.time||!r.date))return r.date===x.date?x.time:void 0},[x.date,x.time,r.date]),[v,j]=e.useState(null),Ve=e.useRef(r.date);r.date!==Ve.current&&(Ve.current=r.date,r.date!==de.current&&(de.current=void 0,v!==null&&j(null)));const Je=v!==null?v:r.date&&/^\d{4}-\d{2}-\d{2}$/.test(r.date)?Ca(wa(r.date),Oa):"",ea=v===null||!v.trim()?!0:ge(v)!==null,[S,ue]=e.useState(null),[je,ze]=e.useState(!1),Me=se==="12h"?ka:Va,me=e.useMemo(()=>S!==null?S:r.time?Me(r.time,p):"",[S,r.time,Me,p]),aa=e.useMemo(()=>{if(S===null||!S.trim())return!0;const i=xe(S,p);return i?w(i,T,D):!1},[S,p,T,D]),ta=e.useMemo(()=>je&&!me?se==="12h"?"e.g., 2:30 PM":"e.g., 14:30":"Select a time",[je,me,se]),h=e.useCallback(i=>{V||(M(i),k&&Ce(async()=>{we(i),await k(i)}))},[V,M,k,Ce,we]),o=ya({dialogLabel:"Choose date",closeButtonLabel:"Close calendar",onHide:()=>le.current?.focus()}),na=e.useCallback(()=>{c||(o.isOpen?o.hide():o.show())},[c,o]),sa=e.useCallback(()=>{!c&&!o.isOpen&&o.show({skipAutoFocus:!0})},[c,o]),z=e.useCallback((i,u)=>{let m=r.time??za(p);g.date&&i===g.date&&g.time&&(w(m,g.time,void 0)||(m=g.time)),x.date&&i===x.date&&x.time&&(w(m,void 0,x.time)||(m=x.time));const b=L(i,m);b&&h(b),u==="calendar"&&(j(null),o.hide())},[r.time,p,g,x,h,o]),ra=e.useCallback(i=>{const u=i.target.value;j(u);const f=ge(u);if(f&&pe(f)!==r.date&&!X(f)){const m=pe(f);de.current=m,z(m,"input"),Ie.current?.navigateTo(m)}},[r.date,X,z]),_=e.useCallback(()=>{if(v===null)return;if(!v.trim()){I!==void 0&&h(void 0),j(null);return}const i=ge(v);if(i&&!X(i)){const u=pe(i);u!==r.date&&z(u,"input")}j(null)},[v,I,r.date,h,X,z]),ia=e.useCallback(()=>{_()},[_]),la=e.useCallback(i=>{i.key==="Escape"&&o.isOpen?(i.preventDefault(),o.hide()):i.key==="Enter"&&(i.preventDefault(),_())},[o,_]),da=e.useCallback(i=>{const u=i.target.value;ue(u);const f=xe(u,p);if(f&&w(f,T,D)&&f!==r.time&&r.date){const m=L(r.date,f);m&&h(m)}},[p,T,D,r.time,r.date,h]),oa=e.useCallback(()=>ze(!0),[]),ua=e.useCallback(()=>{if(ze(!1),S===null)return;if(!S.trim()){ue(null);return}const i=xe(S,p);if(i&&w(i,T,D)&&i!==r.time&&r.date){const u=L(r.date,i);u&&h(u)}ue(null)},[S,p,T,D,r,h]),ma=e.useCallback(i=>{if(i.key==="ArrowUp"||i.key==="ArrowDown"){i.preventDefault();let u=r.time;if(!u){const b=new Date;u=Re({hour:b.getHours(),minute:b.getMinutes(),second:b.getSeconds()},p)}const f=i.key==="ArrowUp"?re:-re,m=ja(u,f,p);if(w(m,T,D)&&r.date){const b=L(r.date,m);b&&h(b)}}},[r,p,re,T,D,h]),ca=e.useCallback(()=>{h(void 0),le.current?.focus()},[h]),{onClick:pa,onMouseUp:ga}=Ia({containerRef:ye,inputRef:De,disabled:c});return n.jsxs(ba,{label:a,isLabelHidden:t,description:s,inputID:ve,descriptionID:s?be:void 0,isOptional:O,isRequired:y,isDisabled:C,status:d?{type:d.type,message:d.message,messageID:d.message?Te:void 0}:void 0,labelTooltip:Fe,statusVariant:"detached",width:Ee,children:[n.jsxs("div",{...Ue,...Sa(va("date-time-input",{size:ie,status:d?.type??null}),ce(he.row,He),$e,Be),children:[n.jsxs("div",{ref:o.triggerRef,...ce(P.base,_e[ie],he.dateWrapper,c&&P.disabled,d&&Xe[d.type],d&&We[d.type],d&&qe[d.type]),children:[n.jsx("button",{type:"button",onClick:na,disabled:c,"aria-label":o.isOpen?"Close calendar":"Open calendar",...{0:{className:"xds78zum5 xds6s0dn4 xdsl56j7k xds1717udv xds1ghz6dp xdsc342km xdsng3xce xdsjbqb8w xds1ypdohk xdsh6dtrn xds1a2a7pz xds1p25gnr xds1y3gkto"},1:{className:"xds78zum5 xds6s0dn4 xdsl56j7k xds1717udv xds1ghz6dp xdsc342km xdsng3xce xdsjbqb8w xdsh6dtrn xds1a2a7pz xds1p25gnr xds1y3gkto xds1h6gzvc"}}[!!c<<0],children:n.jsx(R,{icon:"calendar",size:"sm",color:"secondary"})}),n.jsx("input",{ref:ha(Ye,le),id:ve,type:"text",role:"combobox",value:Je,onChange:ra,onBlur:ia,onClick:sa,onKeyDown:la,placeholder:Le,disabled:c,"aria-describedby":Ge,"aria-required":y===!0?"true":void 0,"aria-invalid":d?.type==="error"?"true":void 0,"aria-busy":V||void 0,"aria-expanded":o.isOpen,"aria-haspopup":"dialog","aria-controls":o.isOpen?o.id:void 0,"aria-autocomplete":"none",autoComplete:"off",...{0:{className:"xds1lliihq xds98rzlu xdseuugli xdsc342km xdsng3xce xds1717udv xds9ynric xdsjm74w1 xds6pjikd xdsw6l6zx xds1tgivj0 xdsjbqb8w xds1a2a7pz xdseyghm5"},2:{className:"xds1lliihq xds98rzlu xdseuugli xdsc342km xdsng3xce xds1717udv xds9ynric xdsjm74w1 xds6pjikd xdsw6l6zx xds1tgivj0 xdsjbqb8w xds1a2a7pz xdseyghm5 xds1h6gzvc"},1:{className:"xds1lliihq xds98rzlu xdseuugli xdsc342km xdsng3xce xds1717udv xds9ynric xdsjm74w1 xds6pjikd xdsw6l6zx xdsjbqb8w xds1a2a7pz xdseyghm5 xdsv1l7n4"},3:{className:"xds1lliihq xds98rzlu xdseuugli xdsc342km xdsng3xce xds1717udv xds9ynric xdsjm74w1 xds6pjikd xdsw6l6zx xdsjbqb8w xds1a2a7pz xdseyghm5 xds1h6gzvc xdsv1l7n4"}}[!!c<<1|!ea<<0]}),Pe&&I!==void 0&&!c&&n.jsx("button",{type:"button",onClick:ca,"aria-label":`Clear ${a}`,className:"xds78zum5 xds6s0dn4 xdsl56j7k xds1717udv xds1ghz6dp xdsc342km xdsng3xce xdsjbqb8w xds1ypdohk xdsh6dtrn xds1a2a7pz xds1p25gnr xds1y3gkto",children:n.jsx(R,{icon:"close",size:"sm",color:"secondary"})}),V&&n.jsx(fa,{size:"sm"}),d&&n.jsx(R,{icon:Ze[d.type],size:"md",color:Qe[d.type]})]}),n.jsxs("div",{ref:ye,onClick:pa,onMouseUp:ga,...ce(P.base,_e[ie],he.timeWrapper,c&&P.disabled,d&&Xe[d.type],d&&We[d.type],d&&qe[d.type]),children:[n.jsx("div",{className:"xds78zum5 xds6s0dn4 xdsl56j7k xds2lah0s",children:n.jsx(R,{icon:"clock",size:"sm",color:"secondary"})}),n.jsx("input",{ref:De,id:Ke,type:"text",value:me,onChange:da,onFocus:oa,onBlur:ua,onKeyDown:ma,placeholder:ta,disabled:c,"aria-label":"Time","aria-required":y===!0?"true":void 0,"aria-invalid":d?.type==="error"?"true":void 0,...{0:{className:"xds1lliihq xds98rzlu xdseuugli xdsc342km xdsng3xce xds1717udv xds9ynric xdsjm74w1 xds6pjikd xdsw6l6zx xds1tgivj0 xdsjbqb8w xds1a2a7pz xdseyghm5"},2:{className:"xds1lliihq xds98rzlu xdseuugli xdsc342km xdsng3xce xds1717udv xds9ynric xdsjm74w1 xds6pjikd xdsw6l6zx xds1tgivj0 xdsjbqb8w xds1a2a7pz xdseyghm5 xds1h6gzvc"},1:{className:"xds1lliihq xds98rzlu xdseuugli xdsc342km xdsng3xce xds1717udv xds9ynric xdsjm74w1 xds6pjikd xdsw6l6zx xdsjbqb8w xds1a2a7pz xdseyghm5 xdsv1l7n4"},3:{className:"xds1lliihq xds98rzlu xdseuugli xdsc342km xdsng3xce xds1717udv xds9ynric xdsjm74w1 xds6pjikd xdsw6l6zx xdsjbqb8w xds1a2a7pz xdseyghm5 xds1h6gzvc xdsv1l7n4"}}[!!c<<1|!aa<<0]})]})]}),o.render(n.jsx(Da,{handleRef:Ie,mode:"single",value:r.date,onChange:i=>z(i,"calendar"),min:Oe,max:ke,dateConstraints:Se,numberOfMonths:Ne}),{placement:"below",alignment:"start"})]})}l.displayName="XDSDateTimeInput";l.__docgenInfo={description:`A combined date and time picker with side-by-side date input and
time input under a single label. The date input opens a calendar
popover; the time input supports typed entry and arrow-key adjustment.

@example
\`\`\`
<XDSDateTimeInput
  label="Meeting time"
  value={dateTime}
  onChange={setDateTime}
/>
\`\`\``,methods:[],displayName:"XDSDateTimeInput",props:{ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:"Ref forwarded to the date input element"},label:{required:!0,tsType:{name:"string"},description:"Label text for the input (required for accessibility)."},isLabelHidden:{required:!1,tsType:{name:"boolean"},description:`Whether to visually hide the label (still accessible to screen readers).
@default false`,defaultValue:{value:"false",computed:!1}},description:{required:!1,tsType:{name:"string"},description:"Description text displayed between the label and input."},isOptional:{required:!1,tsType:{name:"boolean"},description:`Whether the field is optional. Mutually exclusive with isRequired.
@default false`,defaultValue:{value:"false",computed:!1}},isRequired:{required:!1,tsType:{name:"boolean"},description:`Whether the field is required. Mutually exclusive with isOptional.
@default false`,defaultValue:{value:"false",computed:!1}},isDisabled:{required:!1,tsType:{name:"boolean"},description:`Whether the input is disabled.
@default false`,defaultValue:{value:"false",computed:!1}},value:{required:!1,tsType:{name:"intersection",raw:`string & {
  readonly __brand: 'ISODateTimeString';
}`,elements:[{name:"string"},{name:"signature",type:"object",raw:`{
  readonly __brand: 'ISODateTimeString';
}`,signature:{properties:[{key:"__brand",value:{name:"literal",value:"'ISODateTimeString'",required:!0}}]}}]},description:'The selected datetime in ISO 8601 format ("YYYY-MM-DDTHH:MM" or "YYYY-MM-DDTHH:MM:SS").'},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: ISODateTimeString | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"ISODateTimeString | undefined",elements:[{name:"intersection",raw:`string & {
  readonly __brand: 'ISODateTimeString';
}`,elements:[{name:"string"},{name:"signature",type:"object",raw:`{
  readonly __brand: 'ISODateTimeString';
}`,signature:{properties:[{key:"__brand",value:{name:"literal",value:"'ISODateTimeString'",required:!0}}]}}]},{name:"undefined"}]},name:"value"}],return:{name:"void"}}},description:`Callback fired when the datetime changes.
Called with undefined when input is cleared.`},changeAction:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: ISODateTimeString | undefined) => void | Promise<void>",signature:{arguments:[{type:{name:"union",raw:"ISODateTimeString | undefined",elements:[{name:"intersection",raw:`string & {
  readonly __brand: 'ISODateTimeString';
}`,elements:[{name:"string"},{name:"signature",type:"object",raw:`{
  readonly __brand: 'ISODateTimeString';
}`,signature:{properties:[{key:"__brand",value:{name:"literal",value:"'ISODateTimeString'",required:!0}}]}}]},{name:"undefined"}]},name:"value"}],return:{name:"union",raw:"void | Promise<void>",elements:[{name:"void"},{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}]}}},description:"Async action on change. Fires after onChange."},isLoading:{required:!1,tsType:{name:"boolean"},description:`Whether the input is in a loading state.
@default false`,defaultValue:{value:"false",computed:!1}},min:{required:!1,tsType:{name:"intersection",raw:`string & {
  readonly __brand: 'ISODateTimeString';
}`,elements:[{name:"string"},{name:"signature",type:"object",raw:`{
  readonly __brand: 'ISODateTimeString';
}`,signature:{properties:[{key:"__brand",value:{name:"literal",value:"'ISODateTimeString'",required:!0}}]}}]},description:`Minimum selectable datetime in ISO format.
Constrains both date and time selection.`},max:{required:!1,tsType:{name:"intersection",raw:`string & {
  readonly __brand: 'ISODateTimeString';
}`,elements:[{name:"string"},{name:"signature",type:"object",raw:`{
  readonly __brand: 'ISODateTimeString';
}`,signature:{properties:[{key:"__brand",value:{name:"literal",value:"'ISODateTimeString'",required:!0}}]}}]},description:`Maximum selectable datetime in ISO format.
Constrains both date and time selection.`},dateConstraints:{required:!1,tsType:{name:"ReadonlyArray",elements:[{name:"signature",type:"function",raw:"(date: Date) => boolean",signature:{arguments:[{type:{name:"Date"},name:"date"}],return:{name:"boolean"}}}],raw:"ReadonlyArray<(date: Date) => boolean>"},description:`Custom date constraint functions.
Date is disabled in the calendar if ANY function returns false.`},hasSeconds:{required:!1,tsType:{name:"boolean"},description:`Whether to include seconds in the time portion.
@default false`,defaultValue:{value:"false",computed:!1}},hourFormat:{required:!1,tsType:{name:"union",raw:"'12h' | '24h'",elements:[{name:"literal",value:"'12h'"},{name:"literal",value:"'24h'"}]},description:`Hour display format.
@default '12h'`,defaultValue:{value:"'12h'",computed:!1}},timeIncrement:{required:!1,tsType:{name:"number"},description:`Time increment in minutes when using arrow keys in the time input.
@default 1`,defaultValue:{value:"1",computed:!1}},hasClear:{required:!1,tsType:{name:"boolean"},description:`Whether to show a clear button when a value is set.
@default false`,defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:`Placeholder text shown when no date is selected.
@default "Select a date"`,defaultValue:{value:"'Select a date'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:`The size of the inputs.
@default 'md'`},status:{required:!1,tsType:{name:"XDSInputStatus"},description:"Status indicator for the input."},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Width of the field. Numbers are treated as pixels, strings are used as-is\n(e.g. `'100%'`). Sizes the whole field (label, control, and status) so they\nstay aligned, unlike setting width via `xstyle`/`className`/`style`."},labelTooltip:{required:!1,tsType:{name:"string"},description:"Tooltip text to display in an info icon at the end of the label."},numberOfMonths:{required:!1,tsType:{name:"union",raw:"1 | 2",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"}]},description:`Number of months to display in the calendar.
@default 1`,defaultValue:{value:"1",computed:!1}},xstyle:{required:!1,tsType:{name:"StyleXStyles"},description:"Style overrides applied to the outer row container."}},composes:["Omit"]};const Ha={title:"Core/DateTimeInput",component:l,tags:["autodocs"],argTypes:{label:{control:"text",description:"Label text (required)"},isLabelHidden:{control:"boolean",description:"Visually hide the label (still accessible to screen readers)"},placeholder:{control:"text",description:"Placeholder text"},description:{control:"text",description:"Description text displayed between the label and input"},isOptional:{control:"boolean",description:"Whether the field is optional (mutually exclusive with isRequired)"},isRequired:{control:"boolean",description:"Whether the field is required (mutually exclusive with isOptional)"},isDisabled:{control:"boolean",description:"Whether the input is disabled"},size:{control:"radio",options:["sm","md","lg"]},hourFormat:{control:"radio",options:["12h","24h"],description:"Hour format for display"},hasSeconds:{control:"boolean",description:"Whether to include seconds in the time"},hasClear:{control:"boolean",description:"Whether to show a clear button"},numberOfMonths:{control:"radio",options:[1,2],description:"Number of months to display in calendar"},timeIncrement:{control:"number",description:"Minutes to increment/decrement with arrow keys"}}},A={render:a=>{const[t,s]=e.useState(void 0);return n.jsx(l,{...a,value:t,onChange:s})},args:{label:"Meeting time",placeholder:"Select a date"}},F={render:a=>{const[t,s]=e.useState("2026-03-15T14:30");return n.jsx(l,{...a,value:t,onChange:s})},args:{label:"Event time"}},N={render:a=>{const[t,s]=e.useState("2026-03-15T14:30");return n.jsx(l,{...a,value:t,onChange:s})},args:{label:"Appointment",hourFormat:"24h"}},E={render:a=>{const[t,s]=e.useState("2026-03-15T14:30:45");return n.jsx(l,{...a,value:t,onChange:s})},args:{label:"Log timestamp",hasSeconds:!0}},H={render:a=>{const[t,s]=e.useState(void 0);return n.jsx(l,{...a,value:t,onChange:s})},args:{label:"Deadline",description:"When is this task due?",placeholder:"Select deadline"}},$={render:a=>{const[t,s]=e.useState("2026-03-15T09:00");return n.jsx(l,{...a,value:t,onChange:s})},args:{label:"Start time",hasClear:!0}},B={render:a=>{const[t,s]=e.useState(void 0);return n.jsx(l,{...a,value:t,onChange:s})},args:{label:"Appointment",min:"2026-03-15T09:00",max:"2026-03-15T17:00",description:"Available: Mar 15, 9 AM - 5 PM"}},Y={render:a=>{const[t,s]=e.useState("2026-03-15T09:00");return n.jsx(l,{...a,value:t,onChange:s})},args:{label:"Time slot",timeIncrement:15,description:"Use arrow keys to change by 15 minutes"}},U={render:a=>{const[t,s]=e.useState(void 0);return n.jsx(l,{...a,value:t,onChange:s})},args:{label:"Preferred time",isOptional:!0,placeholder:"Select a date (optional)"}},K={render:a=>{const[t,s]=e.useState(void 0);return n.jsx(l,{...a,value:t,onChange:s})},args:{label:"Start time",isRequired:!0}},Z={render:a=>{const[t,s]=e.useState("2026-03-15T10:00");return n.jsx(l,{...a,value:t,onChange:s})},args:{label:"Locked time",isDisabled:!0}},Q={render:()=>{const[a,t]=e.useState(void 0),[s,O]=e.useState(void 0),[y,C]=e.useState(void 0);return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"460px"},children:[n.jsx(l,{label:"Small (28px)",value:a,onChange:t,placeholder:"Small size",size:"sm"}),n.jsx(l,{label:"Medium (32px)",value:s,onChange:O,placeholder:"Medium size (default)",size:"md"}),n.jsx(l,{label:"Large (36px)",value:y,onChange:C,placeholder:"Large size",size:"lg"})]})}},G={render:a=>{const[t,s]=e.useState(void 0);return n.jsx(l,{...a,value:t,onChange:s})},args:{label:"Travel departure",numberOfMonths:2}},J={render:a=>{const[t,s]=e.useState("2026-03-15T14:30");return n.jsx(l,{...a,value:t,onChange:s})},args:{label:"Event time",status:{type:"error",message:"This time slot is not available"}}},ee={render:a=>{const[t,s]=e.useState("2026-03-15T07:00");return n.jsx(l,{...a,value:t,onChange:s})},args:{label:"Meeting time",status:{type:"warning",message:"Early morning meeting - are you sure?"}}},ae={render:a=>{const[t,s]=e.useState("2026-03-15T10:00");return n.jsx(l,{...a,value:t,onChange:s})},args:{label:"Scheduled time",status:{type:"success",message:"Time slot is available"}}},te={render:()=>{const[a,t]=e.useState(void 0),[s,O]=e.useState("2026-03-15T14:30"),[y,C]=e.useState("2026-03-15T14:30"),[I,M]=e.useState(void 0),[k,ne]=e.useState("2026-03-15T10:00"),[q,W]=e.useState("2026-03-15T22:00");return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"460px"},children:[n.jsx(l,{label:"Default",value:a,onChange:t,placeholder:"Select a date"}),n.jsx(l,{label:"With value (12h)",value:s,onChange:O}),n.jsx(l,{label:"24-hour format",value:y,onChange:C,hourFormat:"24h"}),n.jsx(l,{label:"With description",description:"Pick your preferred datetime",value:I,onChange:M}),n.jsx(l,{label:"Disabled",isDisabled:!0,value:k,onChange:ne}),n.jsx(l,{label:"With error",value:q,onChange:W,status:{type:"error",message:"Invalid datetime selection"}})]})}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<ISODateTimeString | undefined>(undefined);
    return <XDSDateTimeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Meeting time',
    placeholder: 'Select a date'
  }
}`,...A.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<ISODateTimeString | undefined>('2026-03-15T14:30' as ISODateTimeString);
    return <XDSDateTimeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Event time'
  }
}`,...F.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<ISODateTimeString | undefined>('2026-03-15T14:30' as ISODateTimeString);
    return <XDSDateTimeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Appointment',
    hourFormat: '24h'
  }
}`,...N.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<ISODateTimeString | undefined>('2026-03-15T14:30:45' as ISODateTimeString);
    return <XDSDateTimeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Log timestamp',
    hasSeconds: true
  }
}`,...E.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<ISODateTimeString | undefined>(undefined);
    return <XDSDateTimeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Deadline',
    description: 'When is this task due?',
    placeholder: 'Select deadline'
  }
}`,...H.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<ISODateTimeString | undefined>('2026-03-15T09:00' as ISODateTimeString);
    return <XDSDateTimeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Start time',
    hasClear: true
  }
}`,...$.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<ISODateTimeString | undefined>(undefined);
    return <XDSDateTimeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Appointment',
    min: '2026-03-15T09:00' as ISODateTimeString,
    max: '2026-03-15T17:00' as ISODateTimeString,
    description: 'Available: Mar 15, 9 AM - 5 PM'
  }
}`,...B.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<ISODateTimeString | undefined>('2026-03-15T09:00' as ISODateTimeString);
    return <XDSDateTimeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Time slot',
    timeIncrement: 15,
    description: 'Use arrow keys to change by 15 minutes'
  }
}`,...Y.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<ISODateTimeString | undefined>(undefined);
    return <XDSDateTimeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Preferred time',
    isOptional: true,
    placeholder: 'Select a date (optional)'
  }
}`,...U.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<ISODateTimeString | undefined>(undefined);
    return <XDSDateTimeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Start time',
    isRequired: true
  }
}`,...K.parameters?.docs?.source}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<ISODateTimeString | undefined>('2026-03-15T10:00' as ISODateTimeString);
    return <XDSDateTimeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Locked time',
    isDisabled: true
  }
}`,...Z.parameters?.docs?.source}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [sm, setSm] = useState<ISODateTimeString | undefined>(undefined);
    const [md, setMd] = useState<ISODateTimeString | undefined>(undefined);
    const [lg, setLg] = useState<ISODateTimeString | undefined>(undefined);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      maxWidth: '460px'
    }}>
        <XDSDateTimeInput label="Small (28px)" value={sm} onChange={setSm} placeholder="Small size" size="sm" />
        <XDSDateTimeInput label="Medium (32px)" value={md} onChange={setMd} placeholder="Medium size (default)" size="md" />
        <XDSDateTimeInput label="Large (36px)" value={lg} onChange={setLg} placeholder="Large size" size="lg" />
      </div>;
  }
}`,...Q.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<ISODateTimeString | undefined>(undefined);
    return <XDSDateTimeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Travel departure',
    numberOfMonths: 2
  }
}`,...G.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<ISODateTimeString | undefined>('2026-03-15T14:30' as ISODateTimeString);
    return <XDSDateTimeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Event time',
    status: {
      type: 'error',
      message: 'This time slot is not available'
    }
  }
}`,...J.parameters?.docs?.source}}};ee.parameters={...ee.parameters,docs:{...ee.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<ISODateTimeString | undefined>('2026-03-15T07:00' as ISODateTimeString);
    return <XDSDateTimeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Meeting time',
    status: {
      type: 'warning',
      message: 'Early morning meeting - are you sure?'
    }
  }
}`,...ee.parameters?.docs?.source}}};ae.parameters={...ae.parameters,docs:{...ae.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<ISODateTimeString | undefined>('2026-03-15T10:00' as ISODateTimeString);
    return <XDSDateTimeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Scheduled time',
    status: {
      type: 'success',
      message: 'Time slot is available'
    }
  }
}`,...ae.parameters?.docs?.source}}};te.parameters={...te.parameters,docs:{...te.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value1, setValue1] = useState<ISODateTimeString | undefined>(undefined);
    const [value2, setValue2] = useState<ISODateTimeString | undefined>('2026-03-15T14:30' as ISODateTimeString);
    const [value3, setValue3] = useState<ISODateTimeString | undefined>('2026-03-15T14:30' as ISODateTimeString);
    const [value4, setValue4] = useState<ISODateTimeString | undefined>(undefined);
    const [value5, setValue5] = useState<ISODateTimeString | undefined>('2026-03-15T10:00' as ISODateTimeString);
    const [value6, setValue6] = useState<ISODateTimeString | undefined>('2026-03-15T22:00' as ISODateTimeString);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      maxWidth: '460px'
    }}>
        <XDSDateTimeInput label="Default" value={value1} onChange={setValue1} placeholder="Select a date" />
        <XDSDateTimeInput label="With value (12h)" value={value2} onChange={setValue2} />
        <XDSDateTimeInput label="24-hour format" value={value3} onChange={setValue3} hourFormat="24h" />
        <XDSDateTimeInput label="With description" description="Pick your preferred datetime" value={value4} onChange={setValue4} />
        <XDSDateTimeInput label="Disabled" isDisabled value={value5} onChange={setValue5} />
        <XDSDateTimeInput label="With error" value={value6} onChange={setValue6} status={{
        type: 'error',
        message: 'Invalid datetime selection'
      }} />
      </div>;
  }
}`,...te.parameters?.docs?.source}}};const $a=["Default","WithValue","TwentyFourHourFormat","WithSeconds","WithDescription","WithClearButton","WithMinMax","WithTimeIncrement","Optional","Required","Disabled","SizeVariants","TwoMonthCalendar","WithErrorStatus","WithWarningStatus","WithSuccessStatus","AllVariations"];export{te as AllVariations,A as Default,Z as Disabled,U as Optional,K as Required,Q as SizeVariants,N as TwentyFourHourFormat,G as TwoMonthCalendar,$ as WithClearButton,H as WithDescription,J as WithErrorStatus,B as WithMinMax,E as WithSeconds,ae as WithSuccessStatus,Y as WithTimeIncrement,F as WithValue,ee as WithWarningStatus,$a as __namedExportsOrder,Ha as default};
