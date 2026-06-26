import{at as s,aV as A,ad as e,ai as W,ar as w,aZ as L,aj as F,m as b}from"./iframe-yRFQ_7VC.js";import{F as E}from"./Squares2X2Icon-CYQinxmb.js";import{F as G}from"./ListBulletIcon-DLFFDJFy.js";import"./preload-helper-Ct5FWWRu.js";const V=s.createContext(null);V.displayName="XDSSegmentedControlContext";function Y(){const t=s.use(V);if(t==null)throw new Error("useXDSSegmentedControlContext must be used within XDSSegmentedControl. Wrap your XDSSegmentedControlItem in <XDSSegmentedControl>.");return t}const z={container:{k1xSpc:"xds3nfvp2",kGNEyG:"xds6s0dn4",kOIVth:"xds1lsbc85","--_segmented-control-padding":"xds18jk3ff",kmVPX3:"xdspoxszi",kWkggS:"xds17x4s8c",$$css:!0},fill:{k1xSpc:"xds78zum5",kzqmXN:"xdsh8yej3",$$css:!0},disabled:{kSiTet:"xdsbyyjgo",kfzvcC:"xds47corl",$$css:!0}},B={sm:{"--_segmented-control-radius":"xds9icjy1",kaIpWk:"xds1hapoqb",krdFHd:null,kfmiAY:null,kVL7Gh:null,kT0f0o:null,kIxVMA:null,ksF3WI:null,kqGeR4:null,kYm2EN:null,$$css:!0},md:{"--_segmented-control-radius":"xds9icjy1",kaIpWk:"xds1hapoqb",krdFHd:null,kfmiAY:null,kVL7Gh:null,kT0f0o:null,kIxVMA:null,ksF3WI:null,kqGeR4:null,kYm2EN:null,$$css:!0},lg:{"--_segmented-control-radius":"xds9icjy1",kaIpWk:"xds1hapoqb",krdFHd:null,kfmiAY:null,kVL7Gh:null,kT0f0o:null,kIxVMA:null,ksF3WI:null,kqGeR4:null,kYm2EN:null,$$css:!0}};function o({ref:t,value:n,onChange:a,label:c,size:v,layout:x="hug",isDisabled:r=!1,children:i,xstyle:d,className:k,style:j}){const m=A(v,"md"),p=s.useRef(null),H=s.useCallback(T=>{if(r)return;const M=p.current;if(!M)return;const u=Array.from(M.querySelectorAll('[role="radio"]:not([aria-disabled="true"])'));if(u.length===0)return;const h=u.findIndex(R=>R===document.activeElement);let S;switch(T.key){case"ArrowRight":S=h===-1?0:(h+1)%u.length;break;case"ArrowLeft":S=h===-1?u.length-1:(h-1+u.length)%u.length;break;case"Home":S=0;break;case"End":S=u.length-1;break;default:return}T.preventDefault();const $=u[S];$.focus();const q=$.dataset.value;q!=null&&a(q)},[r,a]),N=s.useMemo(()=>({value:n,onChange:a,size:m,layout:x,isDisabled:r}),[n,a,m,x,r]);return e.jsx(V,{value:N,children:e.jsx("div",{ref:F(t,p),role:"radiogroup","aria-label":c,"aria-disabled":r||void 0,onKeyDown:H,...W(L("segmented-control",{size:m}),w(z.container,B[m],x==="fill"&&z.fill,r&&z.disabled,d),k,j),children:i})})}o.displayName="XDSSegmentedControl";o.__docgenInfo={description:`Segmented button group for single selection (radio group semantics).
Visually resembles a tab bar but controls a value, not a view.

@example
\`\`\`
<XDSSegmentedControl value={view} onChange={setView} label="View mode">
  <XDSSegmentedControlItem value="grid" label="Grid" />
  <XDSSegmentedControlItem value="list" label="List" />
  <XDSSegmentedControlItem value="table" label="Table" />
</XDSSegmentedControl>
\`\`\``,methods:[],displayName:"XDSSegmentedControl",props:{ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:""},value:{required:!0,tsType:{name:"string"},description:"The currently selected value (controlled)."},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Callback fired when a segment is selected."},label:{required:!0,tsType:{name:"string"},description:"Accessible label for the radio group (used as aria-label, never rendered visually)."},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:`Size variant for the control.
@default 'md'`},layout:{required:!1,tsType:{name:"union",raw:"'hug' | 'fill'",elements:[{name:"literal",value:"'hug'"},{name:"literal",value:"'fill'"}]},description:"Layout mode for segment sizing.\n- `'hug'` (default): each segment hugs its content width.\n- `'fill'`: segments stretch equally to fill the container width.\n@default 'hug'",defaultValue:{value:"'hug'",computed:!1}},isDisabled:{required:!1,tsType:{name:"boolean"},description:`Whether the entire control is disabled.
@default false`,defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:"XDSSegmentedControlItem children."}},composes:["Omit"]};const g={base:{kVAEAm:"xds1n2onr6",k1xSpc:"xds3nfvp2",kGNEyG:"xds6s0dn4",kjj79g:"xdsl56j7k",kOIVth:"xdszye2dw",kg3NbH:"xdsrrkdod",kWkggS:"xdsjbqb8w",kMzoRj:"xdsc342km",ksu8eU:"xdsng3xce",kMv6JI:"xdsjb2p0i",kGuDYH:"xdscr08ib",kLWn49:"xds1kq96og",k63SB2:"xds1e4wzip",kMwMTN:"xdsv1l7n4",kkrTdU:"xds1ypdohk",k1ekBW:"xds1vix5yk",kIyJzY:"xdsuedmi6",kAMwcw:"xdslr8y92",kI3sdo:"xds17nn4n9",kInvED:"xds1wfwxd8 xds7s97pk",$$css:!0},hover:{kWkggS:"xdse9uy6x",$$css:!0},selected:{kMwMTN:"xds1tgivj0",k63SB2:"xds2mo6ok",kWkggS:"xds10xzikg",kGVxlE:"xds1i5ehqx",$$css:!0},disabled:{kkrTdU:"xdst0e3qv",kMwMTN:"xdsnbbluu",$$css:!0},fill:{kUk6DE:"xds98rzlu",kzQI83:null,kmuXW:null,kCS8Yb:null,kjj79g:"xdsl56j7k",$$css:!0},icon:{k1xSpc:"xds3nfvp2",kGNEyG:"xds6s0dn4",kjj79g:"xdsl56j7k",kmuXW:"xds2lah0s",$$css:!0}},P={sm:{kZKoxP:"xdszj98nu",kaIpWk:"xdsc910v0",krdFHd:null,kfmiAY:null,kVL7Gh:null,kT0f0o:null,kIxVMA:null,ksF3WI:null,kqGeR4:null,kYm2EN:null,kg3NbH:"xdsf314gf",kuDDbn:null,kE3dHu:null,kP0aTx:null,kpe85a:null,kGuDYH:"xds141an7d",$$css:!0},md:{kZKoxP:"xds184gfjb",kaIpWk:"xdsc910v0",krdFHd:null,kfmiAY:null,kVL7Gh:null,kT0f0o:null,kIxVMA:null,ksF3WI:null,kqGeR4:null,kYm2EN:null,kg3NbH:"xdsrrkdod",kuDDbn:null,kE3dHu:null,kP0aTx:null,kpe85a:null,$$css:!0},lg:{kZKoxP:"xds1uiybsj",kaIpWk:"xdsc910v0",krdFHd:null,kfmiAY:null,kVL7Gh:null,kT0f0o:null,kIxVMA:null,ksF3WI:null,kqGeR4:null,kYm2EN:null,kg3NbH:"xdsrrkdod",kuDDbn:null,kE3dHu:null,kP0aTx:null,kpe85a:null,$$css:!0}},_={sm:{kzqmXN:"xds6jxa94",kZKoxP:"xds1v9usgg",$$css:!0},md:{kzqmXN:"xds1kky2od",kZKoxP:"xdslup9mm",$$css:!0},lg:{kzqmXN:"xds1xp8n7a",kZKoxP:"xdsmix8c7",$$css:!0}};function l({ref:t,value:n,label:a,isLabelHidden:c=!1,icon:v,isDisabled:x=!1}){const r=Y(),i=r.value===n,d=x||r.isDisabled,k=r.size,j=r.layout==="fill",m=s.useCallback(()=>{!d&&!i&&r.onChange(n)},[r,n,d,i]),p=v?e.jsx("span",{...w(g.icon,_[k]),children:v}):null;return e.jsxs("button",{ref:t,type:"button",role:"radio","aria-checked":i,"aria-disabled":d||void 0,"aria-label":c?a:void 0,"data-value":n,tabIndex:i?0:-1,onClick:m,...W(L("segmented-control-item",{size:k,selected:i?"selected":null,disabled:d?"disabled":null}),w(g.base,P[k],j&&g.fill,i&&g.selected,!i&&!d&&g.hover,d&&g.disabled)),children:[p,!c&&e.jsx("span",{children:a})]})}l.displayName="XDSSegmentedControlItem";l.__docgenInfo={description:'Individual segment item within an XDSSegmentedControl.\nRenders as a radio button with visual segment styling.\n\n@example\n```\n<XDSSegmentedControlItem value="grid" label="Grid" icon={<GridIcon />} />\n```',methods:[],displayName:"XDSSegmentedControlItem",props:{xstyle:{required:!1,tsType:{name:"StyleXStyles"},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},description:""},value:{required:!0,tsType:{name:"string"},description:"Unique value for this segment. Matched against the parent's value."},label:{required:!0,tsType:{name:"string"},description:`Accessible label for this segment (required for accessibility).
Used as visible text, or as aria-label when isLabelHidden is true.`},isLabelHidden:{required:!1,tsType:{name:"boolean"},description:`Whether the label is visually hidden. When true, only the icon is
displayed and the label is used as aria-label for accessibility.
@default false`,defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"ReactNode"},description:"Icon element displayed before the label."},isDisabled:{required:!1,tsType:{name:"boolean"},description:`Whether this individual item is disabled.
@default false`,defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};function K({title:t,titleId:n,...a},c){return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:c,"aria-labelledby":n},a),t?s.createElement("title",{id:n},t):null,s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-7.5A1.125 1.125 0 0 1 12 18.375m9.75-12.75c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125m19.5 0v1.5c0 .621-.504 1.125-1.125 1.125M2.25 5.625v1.5c0 .621.504 1.125 1.125 1.125m0 0h17.25m-17.25 0h7.5c.621 0 1.125.504 1.125 1.125M3.375 8.25c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m17.25-3.75h-7.5c-.621 0-1.125.504-1.125 1.125m8.625-1.125c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M12 10.875v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125M13.125 12h7.5m-7.5 0c-.621 0-1.125.504-1.125 1.125M20.625 12c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h7.5M12 14.625v-1.5m0 1.5c0 .621-.504 1.125-1.125 1.125M12 14.625c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m0 1.5v-1.5m0 0c0-.621.504-1.125 1.125-1.125m0 0h7.5"}))}const O=s.forwardRef(K),ee={title:"Core/SegmentedControl",component:o,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],description:"Size variant for the control"},isDisabled:{control:"boolean",description:"Whether the entire control is disabled"}}},f={args:{size:"md",isDisabled:!1},render:t=>{const[n,a]=s.useState("grid");return e.jsxs(o,{value:n,onChange:a,label:"View mode",size:t.size,isDisabled:t.isDisabled,children:[e.jsx(l,{value:"grid",label:"Grid"}),e.jsx(l,{value:"list",label:"List"}),e.jsx(l,{value:"table",label:"Table"})]})}},y={args:{size:"md"},render:t=>{const[n,a]=s.useState("grid");return e.jsxs(o,{value:n,onChange:a,label:"View mode",size:t.size,children:[e.jsx(l,{value:"grid",label:"Grid",icon:e.jsx(b,{icon:E,color:"inherit"})}),e.jsx(l,{value:"list",label:"List",icon:e.jsx(b,{icon:G,color:"inherit"})}),e.jsx(l,{value:"table",label:"Table",icon:e.jsx(b,{icon:O,color:"inherit"})})]})}},D={args:{size:"sm"},render:t=>{const[n,a]=s.useState("grid");return e.jsxs(o,{value:n,onChange:a,label:"View mode",size:t.size,children:[e.jsx(l,{value:"grid",label:"Grid",isLabelHidden:!0,icon:e.jsx(b,{icon:E,color:"inherit"})}),e.jsx(l,{value:"list",label:"List",isLabelHidden:!0,icon:e.jsx(b,{icon:G,color:"inherit"})})]})}},C={render:()=>{const[t,n]=s.useState("day");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsxs("div",{children:[e.jsx("div",{style:{marginBottom:"8px",fontSize:"12px",color:"#666"},children:"Small"}),e.jsxs(o,{value:t,onChange:n,label:"Time period",size:"sm",children:[e.jsx(l,{value:"day",label:"Day"}),e.jsx(l,{value:"week",label:"Week"}),e.jsx(l,{value:"month",label:"Month"})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:{marginBottom:"8px",fontSize:"12px",color:"#666"},children:"Medium (default)"}),e.jsxs(o,{value:t,onChange:n,label:"Time period",size:"md",children:[e.jsx(l,{value:"day",label:"Day"}),e.jsx(l,{value:"week",label:"Week"}),e.jsx(l,{value:"month",label:"Month"})]})]}),e.jsxs("div",{children:[e.jsx("div",{style:{marginBottom:"8px",fontSize:"12px",color:"#666"},children:"Large"}),e.jsxs(o,{value:t,onChange:n,label:"Time period",size:"lg",children:[e.jsx(l,{value:"day",label:"Day"}),e.jsx(l,{value:"week",label:"Week"}),e.jsx(l,{value:"month",label:"Month"})]})]})]})}},I={render:()=>{const[t,n]=s.useState("all");return e.jsxs(o,{value:t,onChange:n,label:"Filter",isDisabled:!0,children:[e.jsx(l,{value:"all",label:"All"}),e.jsx(l,{value:"active",label:"Active"}),e.jsx(l,{value:"completed",label:"Completed"})]})}},X={render:()=>{const[t,n]=s.useState("hourly");return e.jsxs(o,{value:t,onChange:n,label:"Data granularity",children:[e.jsx(l,{value:"hourly",label:"Hourly"}),e.jsx(l,{value:"daily",label:"Daily"}),e.jsx(l,{value:"weekly",label:"Weekly",isDisabled:!0})]})}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    isDisabled: false
  },
  render: args => {
    const [value, setValue] = useState('grid');
    return <XDSSegmentedControl value={value} onChange={setValue} label="View mode" size={args.size} isDisabled={args.isDisabled}>
        <XDSSegmentedControlItem value="grid" label="Grid" />
        <XDSSegmentedControlItem value="list" label="List" />
        <XDSSegmentedControlItem value="table" label="Table" />
      </XDSSegmentedControl>;
  }
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md'
  },
  render: args => {
    const [value, setValue] = useState('grid');
    return <XDSSegmentedControl value={value} onChange={setValue} label="View mode" size={args.size}>
        <XDSSegmentedControlItem value="grid" label="Grid" icon={<XDSIcon icon={Squares2X2Icon} color="inherit" />} />
        <XDSSegmentedControlItem value="list" label="List" icon={<XDSIcon icon={ListBulletIcon} color="inherit" />} />
        <XDSSegmentedControlItem value="table" label="Table" icon={<XDSIcon icon={TableCellsIcon} color="inherit" />} />
      </XDSSegmentedControl>;
  }
}`,...y.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  },
  render: args => {
    const [value, setValue] = useState('grid');
    return <XDSSegmentedControl value={value} onChange={setValue} label="View mode" size={args.size}>
        <XDSSegmentedControlItem value="grid" label="Grid" isLabelHidden icon={<XDSIcon icon={Squares2X2Icon} color="inherit" />} />
        <XDSSegmentedControlItem value="list" label="List" isLabelHidden icon={<XDSIcon icon={ListBulletIcon} color="inherit" />} />
      </XDSSegmentedControl>;
  }
}`,...D.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('day');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    }}>
        <div>
          <div style={{
          marginBottom: '8px',
          fontSize: '12px',
          color: '#666'
        }}>
            Small
          </div>
          <XDSSegmentedControl value={value} onChange={setValue} label="Time period" size="sm">
            <XDSSegmentedControlItem value="day" label="Day" />
            <XDSSegmentedControlItem value="week" label="Week" />
            <XDSSegmentedControlItem value="month" label="Month" />
          </XDSSegmentedControl>
        </div>
        <div>
          <div style={{
          marginBottom: '8px',
          fontSize: '12px',
          color: '#666'
        }}>
            Medium (default)
          </div>
          <XDSSegmentedControl value={value} onChange={setValue} label="Time period" size="md">
            <XDSSegmentedControlItem value="day" label="Day" />
            <XDSSegmentedControlItem value="week" label="Week" />
            <XDSSegmentedControlItem value="month" label="Month" />
          </XDSSegmentedControl>
        </div>
        <div>
          <div style={{
          marginBottom: '8px',
          fontSize: '12px',
          color: '#666'
        }}>
            Large
          </div>
          <XDSSegmentedControl value={value} onChange={setValue} label="Time period" size="lg">
            <XDSSegmentedControlItem value="day" label="Day" />
            <XDSSegmentedControlItem value="week" label="Week" />
            <XDSSegmentedControlItem value="month" label="Month" />
          </XDSSegmentedControl>
        </div>
      </div>;
  }
}`,...C.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('all');
    return <XDSSegmentedControl value={value} onChange={setValue} label="Filter" isDisabled>
        <XDSSegmentedControlItem value="all" label="All" />
        <XDSSegmentedControlItem value="active" label="Active" />
        <XDSSegmentedControlItem value="completed" label="Completed" />
      </XDSSegmentedControl>;
  }
}`,...I.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('hourly');
    return <XDSSegmentedControl value={value} onChange={setValue} label="Data granularity">
        <XDSSegmentedControlItem value="hourly" label="Hourly" />
        <XDSSegmentedControlItem value="daily" label="Daily" />
        <XDSSegmentedControlItem value="weekly" label="Weekly" isDisabled />
      </XDSSegmentedControl>;
  }
}`,...X.parameters?.docs?.source}}};const le=["Default","WithIcons","IconOnly","SizeVariants","Disabled","DisabledItem"];export{f as Default,I as Disabled,X as DisabledItem,D as IconOnly,C as SizeVariants,y as WithIcons,le as __namedExportsOrder,ee as default};
