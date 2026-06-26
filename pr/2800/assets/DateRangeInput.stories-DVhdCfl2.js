import{aV as De,at as n,ad as t,m as A,q as fe,ai as ye,ar as Re,aZ as Ce}from"./iframe-yRFQ_7VC.js";import{k as J,y as Ve,i as G,b as we,c as je}from"./plainDate-C-ANv9VG.js";import{X as Ie}from"./XDSField-COi97ivg.js";import{a as ze,b as ke,i as qe,c as Q}from"./inputStyles.stylex-BIqXE6lP.js";import{X as Oe}from"./XDSCalendar-DnQEEy7F.js";import{u as Te}from"./useXDSPopover-ChRJmaAz.js";import"./preload-helper-Ct5FWWRu.js";import"./XDSFieldStatus-BgnciRVy.js";const We={sm:{kZKoxP:"xds6k0iem",k7Eaqz:"xdsfb3i0g",$$css:!0},md:{kZKoxP:"xds1ueg155",k7Eaqz:"xdsfb3i0g",$$css:!0},lg:{kZKoxP:"xdsssyfek",k7Eaqz:"xdsfb3i0g",$$css:!0}};function Xe(e){if(!e)return"";const a=J(e.start),s=J(e.end),g=Ve().year,u=a.year===s.year&&a.year===g?we:je;return`${G(a,u)} – ${G(s,u)}`}function Me(e,a){return e===a?!0:!e||!a?!1:e.start===a.start&&e.end===a.end}function r({label:e,isLabelHidden:a=!1,description:s,isOptional:g=!1,isRequired:p=!1,isDisabled:u=!1,value:c,onChange:S,changeAction:b,isLoading:X=!1,min:U,max:ee,dateConstraints:ae,presets:M,hasClear:se=!0,placeholder:N="Select date range",size:te,status:l,labelTooltip:ne,numberOfMonths:re=2,width:le,xstyle:oe,className:de,style:ie,ref:ue,...ce}){const E=De(te,"md"),_=n.useId(),B=n.useId(),F=n.useId(),[,H]=n.useTransition(),[$,Y]=n.useOptimistic(c),v=X||$!==c,i=u||v,ge={warning:"warning",error:"error",success:"success"},pe={warning:"warning",error:"error",success:"success"},me=[s?B:null,l?.message?F:null].filter(Boolean).join(" ")||void 0,P=n.useMemo(()=>Xe($),[$]),o=Te({dialogLabel:"Choose date range",closeButtonLabel:"Close calendar"}),x=n.useCallback(d=>{v||(S(d),b&&H(async()=>{Y(d),await b(d)}))},[v,S,b,H,Y]),Z=n.useCallback(()=>{i||(o.isOpen?o.hide():o.show())},[i,o]),xe=n.useCallback(d=>{x(d),o.hide()},[x,o]),he=n.useCallback(d=>{x(d.getRange()),o.hide()},[x,o]),be=n.useCallback(d=>{d.stopPropagation(),x(null)},[x]),ve=c?`${e}: ${P}`:`${e}: ${N}`;return t.jsxs(Ie,{label:e,isLabelHidden:a,description:s,inputID:_,descriptionID:s?B:void 0,isOptional:g,isRequired:p,isDisabled:i,status:l?{type:l.type,message:l.message,messageID:l.message?F:void 0}:void 0,labelTooltip:ne,width:le,children:[t.jsxs("div",{ref:o.triggerRef,...ce,...ye(Ce("date-range-input",{size:E,status:l?.type??null}),Re(Q.base,We[E],i&&Q.disabled,l&&qe[l.type],l&&ke[l.type],l&&ze[l.type],oe),de,ie),children:[t.jsx("button",{type:"button",onClick:Z,disabled:i,"aria-label":o.isOpen?"Close calendar":"Open calendar",tabIndex:-1,...{0:{className:"xds78zum5 xds6s0dn4 xdsl56j7k xds1717udv xds1ghz6dp xdsc342km xdsng3xce xdsjbqb8w xds1ypdohk xdsh6dtrn xds1a2a7pz xds1p25gnr xds1y3gkto"},1:{className:"xds78zum5 xds6s0dn4 xdsl56j7k xds1717udv xds1ghz6dp xdsc342km xdsng3xce xdsjbqb8w xdsh6dtrn xds1a2a7pz xds1p25gnr xds1y3gkto xds1h6gzvc"}}[!!i<<0],children:t.jsx(A,{icon:"calendar",size:"sm",color:"secondary"})}),t.jsx("button",{ref:ue,id:_,type:"button",onClick:Z,disabled:i,"aria-label":ve,"aria-describedby":me,"aria-required":p===!0?"true":void 0,"aria-invalid":l?.type==="error"?"true":void 0,"aria-busy":v||void 0,"aria-expanded":o.isOpen,"aria-haspopup":"dialog","aria-controls":o.isOpen?o.id:void 0,...{0:{className:"xds1lliihq xds98rzlu xdseuugli xdsc342km xdsng3xce xds1717udv xds9ynric xdsjm74w1 xds6pjikd xdsw6l6zx xds1tgivj0 xdsjbqb8w xds1a2a7pz xds1ypdohk xds1yc453h xdsuxw1ft xdsb3r6kr xdslyipyv"},2:{className:"xds1lliihq xds98rzlu xdseuugli xdsc342km xdsng3xce xds1717udv xds9ynric xdsjm74w1 xds6pjikd xdsw6l6zx xdsjbqb8w xds1a2a7pz xds1ypdohk xds1yc453h xdsuxw1ft xdsb3r6kr xdslyipyv xdsv1l7n4"},1:{className:"xds1lliihq xds98rzlu xdseuugli xdsc342km xdsng3xce xds1717udv xds9ynric xdsjm74w1 xds6pjikd xdsw6l6zx xds1tgivj0 xdsjbqb8w xds1a2a7pz xds1yc453h xdsuxw1ft xdsb3r6kr xdslyipyv xds1h6gzvc"},3:{className:"xds1lliihq xds98rzlu xdseuugli xdsc342km xdsng3xce xds1717udv xds9ynric xdsjm74w1 xds6pjikd xdsw6l6zx xdsjbqb8w xds1a2a7pz xds1yc453h xdsuxw1ft xdsb3r6kr xdslyipyv xdsv1l7n4 xds1h6gzvc"}}[!P<<1|!!i<<0],children:P||N}),se&&c!==null&&!i&&t.jsx("button",{type:"button",onClick:be,"aria-label":`Clear ${e}`,className:"xds78zum5 xds6s0dn4 xdsl56j7k xds1717udv xds1ghz6dp xdsc342km xdsng3xce xdsjbqb8w xds1ypdohk xdsh6dtrn xds1a2a7pz xds1p25gnr xds1y3gkto",children:t.jsx(A,{icon:"close",size:"sm",color:"secondary"})}),v&&t.jsx(fe,{size:"sm"}),l&&t.jsx(A,{icon:ge[l.type],size:"md",color:pe[l.type]})]}),o.render(t.jsxs("div",{className:"xds78zum5",children:[M&&M.length>0&&t.jsx("div",{role:"listbox","aria-label":"Preset date ranges",className:"xds78zum5 xdsdt5ytf xdszye2dw xds1b2ylru xds1pcaw5z xds32b0ac xdsdz7fjg xds1d77m7x",children:M.map(d=>{const Se=d.getRange(),K=Me(c,Se);return t.jsx("button",{type:"button",role:"option","aria-selected":K,onClick:()=>he(d),...{0:{className:"xds1lliihq xdsh8yej3 xdstozwh xds1ghz6dp xdsc342km xdsng3xce xdsh6dtrn xdsjbqb8w xdse9uy6x xds9ynric xdsjm74w1 xdsw6l6zx xds1tgivj0 xds1ypdohk xds1yc453h xds1a2a7pz xds1p25gnr"},1:{className:"xds1lliihq xdsh8yej3 xdstozwh xds1ghz6dp xdsc342km xdsng3xce xdsh6dtrn xds9ynric xdsjm74w1 xdsw6l6zx xds1ypdohk xds1yc453h xds1a2a7pz xds1p25gnr xdsgcxg3y xdsqwr325"}}[!!K<<0],children:d.label},d.label)})}),t.jsx(Oe,{mode:"range",value:c??void 0,onChange:xe,min:U,max:ee,dateConstraints:ae,numberOfMonths:re})]}),{placement:"below",alignment:"start"})]})}r.displayName="XDSDateRangeInput";r.__docgenInfo={description:`A date range picker with a button trigger that opens a popover
containing a dual-month calendar and optional preset ranges.

@example
\`\`\`
<XDSDateRangeInput
  label="Date range"
  value={range}
  onChange={setRange}
  presets={[
    { label: "Last 7 days", getRange: () => ({start: "...", end: "..."}) },
  ]}
/>
\`\`\``,methods:[],displayName:"XDSDateRangeInput",props:{ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},description:"Ref forwarded to the trigger button"},label:{required:!0,tsType:{name:"string"},description:"Label text for the input (required for accessibility)."},isLabelHidden:{required:!1,tsType:{name:"boolean"},description:`Whether to visually hide the label (still accessible to screen readers).
@default false`,defaultValue:{value:"false",computed:!1}},description:{required:!1,tsType:{name:"string"},description:"Description text displayed between the label and input."},isOptional:{required:!1,tsType:{name:"boolean"},description:`Whether the field is optional. Mutually exclusive with isRequired.
@default false`,defaultValue:{value:"false",computed:!1}},isRequired:{required:!1,tsType:{name:"boolean"},description:`Whether the field is required. Mutually exclusive with isOptional.
@default false`,defaultValue:{value:"false",computed:!1}},isDisabled:{required:!1,tsType:{name:"boolean"},description:`Whether the input is disabled.
@default false`,defaultValue:{value:"false",computed:!1}},value:{required:!0,tsType:{name:"union",raw:"DateRange | null",elements:[{name:"DateRange"},{name:"null"}]},description:"The selected date range, or null if no range is selected."},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: DateRange | null) => void",signature:{arguments:[{type:{name:"union",raw:"DateRange | null",elements:[{name:"DateRange"},{name:"null"}]},name:"value"}],return:{name:"void"}}},description:`Callback fired when the date range changes.
Called with null when the range is cleared.`},changeAction:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: DateRange | null) => void | Promise<void>",signature:{arguments:[{type:{name:"union",raw:"DateRange | null",elements:[{name:"DateRange"},{name:"null"}]},name:"value"}],return:{name:"union",raw:"void | Promise<void>",elements:[{name:"void"},{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}]}}},description:"Async action on change. Fires after onChange."},isLoading:{required:!1,tsType:{name:"boolean"},description:`Whether the input is in a loading state.
@default false`,defaultValue:{value:"false",computed:!1}},min:{required:!1,tsType:{name:"literal",value:"`${number}${number}${number}${number}-${number}${number}-${number}${number}`"},description:"Minimum selectable date in ISO format."},max:{required:!1,tsType:{name:"literal",value:"`${number}${number}${number}${number}-${number}${number}-${number}${number}`"},description:"Maximum selectable date in ISO format."},dateConstraints:{required:!1,tsType:{name:"ReadonlyArray",elements:[{name:"signature",type:"function",raw:"(date: Date) => boolean",signature:{arguments:[{type:{name:"Date"},name:"date"}],return:{name:"boolean"}}}],raw:"ReadonlyArray<(date: Date) => boolean>"},description:`Custom date constraint functions.
A date is disabled if ANY function returns false.`},presets:{required:!1,tsType:{name:"ReadonlyArray",elements:[{name:"DateRangePreset"}],raw:"ReadonlyArray<DateRangePreset>"},description:"Preset date ranges shown as quick-select options beside the calendar."},hasClear:{required:!1,tsType:{name:"boolean"},description:`Whether to show a clear button when a range is selected.
@default true`,defaultValue:{value:"true",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:`Placeholder text shown when no range is selected.
@default "Select date range"`,defaultValue:{value:"'Select date range'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:`The size of the trigger.
@default 'md'`},status:{required:!1,tsType:{name:"XDSInputStatus"},description:"Status indicator for the input."},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Width of the field. Numbers are treated as pixels, strings are used as-is\n(e.g. `'100%'`). Sizes the whole field (label, control, and status) so they\nstay aligned, unlike setting width via `xstyle`/`className`/`style`."},labelTooltip:{required:!1,tsType:{name:"string"},description:"Tooltip text to display in an info icon at the end of the label."},numberOfMonths:{required:!1,tsType:{name:"union",raw:"1 | 2",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"}]},description:`Number of months to display in the calendar.
@default 2`,defaultValue:{value:"2",computed:!1}}},composes:["Omit"]};function h(e){const a=new Date;return a.setDate(a.getDate()-e),a.toISOString().slice(0,10)}function m(){return new Date().toISOString().slice(0,10)}function $e(){const e=new Date;return e.setDate(1),e.toISOString().slice(0,10)}const L=[{label:"Last 1 day",getRange:()=>({start:h(1),end:m()})},{label:"Last 3 days",getRange:()=>({start:h(3),end:m()})},{label:"Last 7 days",getRange:()=>({start:h(7),end:m()})},{label:"Last 14 days",getRange:()=>({start:h(14),end:m()})},{label:"Last 30 days",getRange:()=>({start:h(30),end:m()})},{label:"This month",getRange:()=>({start:$e(),end:m()})}],He={title:"Core/DateRangeInput",component:r,tags:["autodocs"],argTypes:{label:{control:"text",description:"Label text (required)"},isLabelHidden:{control:"boolean",description:"Visually hide the label"},placeholder:{control:"text",description:"Placeholder text"},description:{control:"text",description:"Description text"},isOptional:{control:"boolean",description:"Show optional indicator"},isRequired:{control:"boolean",description:"Mark as required"},isDisabled:{control:"boolean",description:"Disable the picker"},size:{control:"radio",options:["sm","md","lg"]},hasClear:{control:"boolean",description:"Show clear button"},numberOfMonths:{control:"radio",options:[1,2],description:"Calendar months"}}},D={render:e=>{const[a,s]=n.useState(null);return t.jsx(r,{...e,value:a,onChange:s})},args:{label:"Date range"}},f={render:e=>{const[a,s]=n.useState({start:"2026-03-10",end:"2026-03-20"});return t.jsx(r,{...e,value:a,onChange:s})},args:{label:"Report period"}},y={render:e=>{const[a,s]=n.useState(null);return t.jsx(r,{...e,value:a,onChange:s})},args:{label:"Date range",presets:L}},R={render:e=>{const[a,s]=n.useState({start:h(7),end:m()});return t.jsx(r,{...e,value:a,onChange:s})},args:{label:"Analytics period",presets:L}},C={render:e=>{const[a,s]=n.useState(null);return t.jsx(r,{...e,value:a,onChange:s})},args:{label:"Coverage period",description:"Select the start and end dates for the report"}},V={render:e=>{const[a,s]=n.useState(null);return t.jsx(r,{...e,value:a,onChange:s})},args:{label:"Booking dates",min:"2026-03-01",max:"2026-06-30",description:"Available: Mar 1 – Jun 30, 2026"}},w={render:e=>{const[a,s]=n.useState(null);return t.jsx(r,{...e,value:a,onChange:s})},args:{label:"Filter by date",isOptional:!0}},j={render:e=>{const[a,s]=n.useState(null);return t.jsx(r,{...e,value:a,onChange:s})},args:{label:"Coverage period",isRequired:!0}},I={render:e=>{const[a,s]=n.useState({start:"2026-03-10",end:"2026-03-20"});return t.jsx(r,{...e,value:a,onChange:s})},args:{label:"Locked range",isDisabled:!0}},z={render:()=>{const[e,a]=n.useState(null),[s,g]=n.useState(null),[p,u]=n.useState(null);return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"340px"},children:[t.jsx(r,{label:"Small (28px)",value:e,onChange:a,size:"sm"}),t.jsx(r,{label:"Medium (32px)",value:s,onChange:g,size:"md"}),t.jsx(r,{label:"Large (36px)",value:p,onChange:u,size:"lg"})]})}},k={render:e=>{const[a,s]=n.useState(null);return t.jsx(r,{...e,value:a,onChange:s})},args:{label:"Date range",numberOfMonths:1}},q={render:e=>{const[a,s]=n.useState(null);return t.jsx(r,{...e,value:a,onChange:s})},args:{label:"Date range",status:{type:"error",message:"Please select a date range"}}},O={render:e=>{const[a,s]=n.useState({start:"2026-03-01",end:"2026-06-30"});return t.jsx(r,{...e,value:a,onChange:s})},args:{label:"Date range",status:{type:"warning",message:"Range exceeds 90 days"}}},T={render:e=>{const[a,s]=n.useState({start:"2026-03-10",end:"2026-03-20"});return t.jsx(r,{...e,value:a,onChange:s})},args:{label:"Required range",hasClear:!1}},W={render:()=>{const[e,a]=n.useState(null),[s,g]=n.useState({start:"2026-03-10",end:"2026-03-20"}),[p,u]=n.useState(null),[c,S]=n.useState({start:"2026-03-10",end:"2026-03-20"}),[b,X]=n.useState(null);return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"340px"},children:[t.jsx(r,{label:"Default",value:e,onChange:a}),t.jsx(r,{label:"With value",value:s,onChange:g}),t.jsx(r,{label:"With presets",value:p,onChange:u,presets:L}),t.jsx(r,{label:"Disabled",isDisabled:!0,value:c,onChange:S}),t.jsx(r,{label:"With error",value:b,onChange:X,status:{type:"error",message:"Date range is required"}})]})}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<DateRange | null>(null);
    return <XDSDateRangeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Date range'
  }
}`,...D.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<DateRange | null>({
      start: '2026-03-10' as ISODateString,
      end: '2026-03-20' as ISODateString
    });
    return <XDSDateRangeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Report period'
  }
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<DateRange | null>(null);
    return <XDSDateRangeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Date range',
    presets: defaultPresets
  }
}`,...y.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<DateRange | null>({
      start: daysAgo(7),
      end: today()
    });
    return <XDSDateRangeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Analytics period',
    presets: defaultPresets
  }
}`,...R.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<DateRange | null>(null);
    return <XDSDateRangeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Coverage period',
    description: 'Select the start and end dates for the report'
  }
}`,...C.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<DateRange | null>(null);
    return <XDSDateRangeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Booking dates',
    min: '2026-03-01' as ISODateString,
    max: '2026-06-30' as ISODateString,
    description: 'Available: Mar 1 – Jun 30, 2026'
  }
}`,...V.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<DateRange | null>(null);
    return <XDSDateRangeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Filter by date',
    isOptional: true
  }
}`,...w.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<DateRange | null>(null);
    return <XDSDateRangeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Coverage period',
    isRequired: true
  }
}`,...j.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<DateRange | null>({
      start: '2026-03-10' as ISODateString,
      end: '2026-03-20' as ISODateString
    });
    return <XDSDateRangeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Locked range',
    isDisabled: true
  }
}`,...I.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [sm, setSm] = useState<DateRange | null>(null);
    const [md, setMd] = useState<DateRange | null>(null);
    const [lg, setLg] = useState<DateRange | null>(null);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      maxWidth: '340px'
    }}>
        <XDSDateRangeInput label="Small (28px)" value={sm} onChange={setSm} size="sm" />
        <XDSDateRangeInput label="Medium (32px)" value={md} onChange={setMd} size="md" />
        <XDSDateRangeInput label="Large (36px)" value={lg} onChange={setLg} size="lg" />
      </div>;
  }
}`,...z.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<DateRange | null>(null);
    return <XDSDateRangeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Date range',
    numberOfMonths: 1
  }
}`,...k.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<DateRange | null>(null);
    return <XDSDateRangeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Date range',
    status: {
      type: 'error',
      message: 'Please select a date range'
    }
  }
}`,...q.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<DateRange | null>({
      start: '2026-03-01' as ISODateString,
      end: '2026-06-30' as ISODateString
    });
    return <XDSDateRangeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Date range',
    status: {
      type: 'warning',
      message: 'Range exceeds 90 days'
    }
  }
}`,...O.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<DateRange | null>({
      start: '2026-03-10' as ISODateString,
      end: '2026-03-20' as ISODateString
    });
    return <XDSDateRangeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Required range',
    hasClear: false
  }
}`,...T.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [v1, setV1] = useState<DateRange | null>(null);
    const [v2, setV2] = useState<DateRange | null>({
      start: '2026-03-10' as ISODateString,
      end: '2026-03-20' as ISODateString
    });
    const [v3, setV3] = useState<DateRange | null>(null);
    const [v4, setV4] = useState<DateRange | null>({
      start: '2026-03-10' as ISODateString,
      end: '2026-03-20' as ISODateString
    });
    const [v5, setV5] = useState<DateRange | null>(null);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      maxWidth: '340px'
    }}>
        <XDSDateRangeInput label="Default" value={v1} onChange={setV1} />
        <XDSDateRangeInput label="With value" value={v2} onChange={setV2} />
        <XDSDateRangeInput label="With presets" value={v3} onChange={setV3} presets={defaultPresets} />
        <XDSDateRangeInput label="Disabled" isDisabled value={v4} onChange={setV4} />
        <XDSDateRangeInput label="With error" value={v5} onChange={setV5} status={{
        type: 'error',
        message: 'Date range is required'
      }} />
      </div>;
  }
}`,...W.parameters?.docs?.source}}};const Ye=["Default","WithValue","WithPresets","WithPresetsAndValue","WithDescription","WithMinMax","Optional","Required","Disabled","SizeVariants","SingleMonth","WithErrorStatus","WithWarningStatus","NoClear","AllVariations"];export{W as AllVariations,D as Default,I as Disabled,T as NoClear,w as Optional,j as Required,k as SingleMonth,z as SizeVariants,C as WithDescription,q as WithErrorStatus,V as WithMinMax,y as WithPresets,R as WithPresetsAndValue,f as WithValue,O as WithWarningStatus,Ye as __namedExportsOrder,He as default};
