import{at as t,ad as e,ai as j,ar as z,aZ as X,r as N}from"./iframe-yRFQ_7VC.js";import{a as L,X as F}from"./XDSField-COi97ivg.js";import{X as o}from"./XDSTextInput-C1ju8zVt.js";import{X as g}from"./XDSSelector-KHbCdKmR.js";import"./preload-helper-Ct5FWWRu.js";import"./XDSFieldStatus-BgnciRVy.js";import"./inputStyles.stylex-BIqXE6lP.js";import"./groupStyles-BZhxclV-.js";import"./useInputContainer-DjJ5nP5w.js";import"./useClickableContainer-B3IEmxS8.js";import"./useXDSPopover-ChRJmaAz.js";import"./XDSDivider-CD2fc5JP.js";import"./utils-_uNaBhDK.js";import"./hooks-CNj4otaP.js";import"./XDSItem-CTSSy95c.js";import"./computeTargetAndRel-BlG0ENK0.js";const y={base:{k1xSpc:"xds78zum5",kXwgrk:"xdsdt5ytf",kOIVth:"xds18g69wz",$$css:!0},horizontal:{k1xSpc:"xdsrvj5dj",kprqdN:"xds1mt1orb",klIVar:"xdsu6a5m6",$$css:!0},horizontalLabels:{k1xSpc:"xdsrvj5dj",kumcoG:"xds1pmbctz",kOIVth:"xdslaq8a2",kGNEyG:"xds7a106z",k41HbU:"xdsedohl4",kUxVDj:"xds1rpgqan",k3RL8M:"xds1a1jff",$$css:!0}};function i({children:s,direction:a="vertical",xstyle:l,className:r,style:n,ref:m,...c}){const u=t.useMemo(()=>({direction:a}),[a]);return e.jsx(L,{value:u,children:e.jsx("div",{ref:m,...j(X("form-layout",{direction:a}),z(y.base,a==="horizontal"&&y.horizontal,a==="horizontal-labels"&&y.horizontalLabels,l),r,n),...c,children:s})})}i.displayName="XDSFormLayout";i.__docgenInfo={description:`Spatial layout container for form fields.

Arranges form fields with consistent spacing and direction. Renders a \`<div>\`
(not a \`<form>\` — form submission is a separate concern). For label wrapping
of custom controls, use \`XDSField\` directly.

Provides direction context to children via \`XDSFormLayoutContext\`.
Supports nesting — a horizontal layout inside a vertical layout works naturally.

@example
\`\`\`
<XDSFormLayout>
  <XDSTextInput label="Name" value={name} onChange={setName} />
  <XDSTextInput label="Email" value={email} onChange={setEmail} />
</XDSFormLayout>
\`\`\``,methods:[],displayName:"XDSFormLayout",props:{xstyle:{required:!1,tsType:{name:"StyleXStyles"},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:"Ref forwarded to the root element"},children:{required:!1,tsType:{name:"ReactNode"},description:`Form fields to arrange. Accepts XDS inputs (XDSTextInput, XDSSelector, etc.)
and XDSField-wrapped custom controls.`},direction:{required:!1,tsType:{name:"union",raw:`| 'vertical'
| 'horizontal'
| 'horizontal-labels'`,elements:[{name:"literal",value:"'vertical'"},{name:"literal",value:"'horizontal'"},{name:"literal",value:"'horizontal-labels'"}]},description:`Direction of field arrangement.

- \`'vertical'\` — Fields stack top-to-bottom (default). Most common.
- \`'horizontal'\` — Fields arrange left-to-right in equal-width columns
  using CSS Grid. Each child occupies one equal column.
- \`'horizontal-labels'\` — CSS Grid with labels to the left of inputs.
  Collapses to vertical when the container is narrow (≤480px).

@default 'vertical'`,defaultValue:{value:"'vertical'",computed:!1}}},composes:["Omit"]};const J={title:"Core/FormLayout",component:i,tags:["autodocs"],args:{direction:"vertical"},argTypes:{direction:{control:"select",options:["vertical","horizontal","horizontal-labels"],description:"Direction of field arrangement"}}};function k({direction:s}){const[a,l]=t.useState(""),[r,n]=t.useState(""),[m,c]=t.useState("");return e.jsxs(i,{direction:s,children:[e.jsx(o,{label:"Name",value:a,onChange:l}),e.jsx(o,{label:"Email",value:r,onChange:n}),e.jsx(o,{label:"Bio",value:m,onChange:c})]})}const d={name:"Vertical (Default)",render:s=>e.jsx(k,{direction:s.direction})},p={name:"Horizontal",args:{direction:"horizontal"},render:s=>{const[a,l]=t.useState(""),[r,n]=t.useState("");return e.jsxs(i,{direction:s.direction,children:[e.jsx(o,{label:"First Name",value:a,onChange:l}),e.jsx(o,{label:"Last Name",value:r,onChange:n})]})}},x={name:"Horizontal Labels (Settings)",args:{direction:"horizontal-labels"},render:s=>{const[a,l]=t.useState("Jane Doe"),[r,n]=t.useState("jane@example.com"),[m,c]=t.useState("America/Los_Angeles");return e.jsxs(i,{direction:s.direction,children:[e.jsx(o,{label:"Display Name",value:a,onChange:l}),e.jsx(o,{label:"Email",value:r,onChange:n}),e.jsx(g,{label:"Timezone",value:m,onChange:u=>c(u),options:[{label:"Pacific Time",value:"America/Los_Angeles"},{label:"Eastern Time",value:"America/New_York"},{label:"UTC",value:"UTC"}]})]})}},S={name:"Mixed Controls",render:()=>{const[s,a]=t.useState(""),[l,r]=t.useState("viewer");return e.jsxs(i,{children:[e.jsx(o,{label:"Name",value:s,onChange:a}),e.jsx(g,{label:"Role",value:l,onChange:n=>r(n),options:[{label:"Viewer",value:"viewer"},{label:"Editor",value:"editor"},{label:"Admin",value:"admin"}]}),e.jsx(F,{label:"Notifications",inputID:"notif-group",children:e.jsxs("div",{className:"x78zum5 xdt5ytf x1jnr06f",id:"notif-group",children:[e.jsxs("label",{className:"x78zum5 x6s0dn4 x167g77z",children:[e.jsx("input",{type:"checkbox",defaultChecked:!0})," Email"]}),e.jsxs("label",{className:"x78zum5 x6s0dn4 x167g77z",children:[e.jsx("input",{type:"checkbox"})," SMS"]}),e.jsxs("label",{className:"x78zum5 x6s0dn4 x167g77z",children:[e.jsx("input",{type:"checkbox",defaultChecked:!0})," Push"]})]})})]})}},h={name:"Nested Layouts",render:()=>{const[s,a]=t.useState(""),[l,r]=t.useState(""),[n,m]=t.useState(""),[c,u]=t.useState(""),[v,f]=t.useState(""),[D,C]=t.useState("");return e.jsxs(i,{children:[e.jsxs(i,{direction:"horizontal",children:[e.jsx(o,{label:"First Name",value:s,onChange:a}),e.jsx(o,{label:"Last Name",value:l,onChange:r})]}),e.jsx(o,{label:"Email",value:n,onChange:m}),e.jsxs(i,{direction:"horizontal",children:[e.jsx(o,{label:"City",value:c,onChange:u}),e.jsx(o,{label:"State",value:v,onChange:f}),e.jsx(o,{label:"ZIP",value:D,onChange:C})]})]})}},b={name:"In a Dialog",render:()=>{const[s,a]=t.useState("Jane Doe"),[l,r]=t.useState("jane@example.com");return e.jsxs("div",{className:"xtfardp xur7f20 x17fpy1y xb3r6kr",children:[e.jsx("div",{className:"x1tamke2 x915a4u",children:e.jsx(N,{type:"label",children:"Edit Profile"})}),e.jsx("div",{className:"x1tamke2",children:e.jsx("form",{id:"edit-profile",onSubmit:n=>{n.preventDefault(),alert(`Saved: ${s}, ${l}`)},children:e.jsxs(i,{children:[e.jsx(o,{label:"Name",value:s,onChange:a}),e.jsx(o,{label:"Email",value:l,onChange:r})]})})}),e.jsxs("div",{className:"x78zum5 x13a6bvl x167g77z x1tamke2 xz14g06",children:[e.jsx("button",{className:"x1ff1495 x1kogg8i x1gs6z28 x1ypdohk xif65rj x1dr8pv1 xka2uk4",type:"button",children:"Cancel"}),e.jsx("button",{className:"x1ff1495 x1kogg8i x1gs6z28 x1ypdohk xif65rj xtzjzor xfungia",type:"submit",form:"edit-profile",children:"Save"})]})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Vertical (Default)',
  render: args => <FormLayoutDemo direction={args.direction} />
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Horizontal',
  args: {
    direction: 'horizontal'
  },
  render: args => {
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    return <XDSFormLayout direction={args.direction}>
        <XDSTextInput label="First Name" value={first} onChange={setFirst} />
        <XDSTextInput label="Last Name" value={last} onChange={setLast} />
      </XDSFormLayout>;
  }
}`,...p.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Horizontal Labels (Settings)',
  args: {
    direction: 'horizontal-labels'
  },
  render: args => {
    const [displayName, setDisplayName] = useState('Jane Doe');
    const [email, setEmail] = useState('jane@example.com');
    const [timezone, setTimezone] = useState('America/Los_Angeles');
    return <XDSFormLayout direction={args.direction}>
        <XDSTextInput label="Display Name" value={displayName} onChange={setDisplayName} />
        <XDSTextInput label="Email" value={email} onChange={setEmail} />
        <XDSSelector label="Timezone" value={timezone} onChange={v => setTimezone(v as string)} options={[{
        label: 'Pacific Time',
        value: 'America/Los_Angeles'
      }, {
        label: 'Eastern Time',
        value: 'America/New_York'
      }, {
        label: 'UTC',
        value: 'UTC'
      }]} />
      </XDSFormLayout>;
  }
}`,...x.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Mixed Controls',
  render: () => {
    const [name, setName] = useState('');
    const [role, setRole] = useState('viewer');
    return <XDSFormLayout>
        <XDSTextInput label="Name" value={name} onChange={setName} />
        <XDSSelector label="Role" value={role} onChange={v => setRole(v as string)} options={[{
        label: 'Viewer',
        value: 'viewer'
      }, {
        label: 'Editor',
        value: 'editor'
      }, {
        label: 'Admin',
        value: 'admin'
      }]} />
        <XDSField label="Notifications" inputID="notif-group">
          <div {...stylex.props(checkboxStyles.group)} id="notif-group">
            <label {...stylex.props(checkboxStyles.label)}>
              <input type="checkbox" defaultChecked /> Email
            </label>
            <label {...stylex.props(checkboxStyles.label)}>
              <input type="checkbox" /> SMS
            </label>
            <label {...stylex.props(checkboxStyles.label)}>
              <input type="checkbox" defaultChecked /> Push
            </label>
          </div>
        </XDSField>
      </XDSFormLayout>;
  }
}`,...S.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Nested Layouts',
  render: () => {
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [email, setEmail] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    return <XDSFormLayout>
        <XDSFormLayout direction="horizontal">
          <XDSTextInput label="First Name" value={first} onChange={setFirst} />
          <XDSTextInput label="Last Name" value={last} onChange={setLast} />
        </XDSFormLayout>
        <XDSTextInput label="Email" value={email} onChange={setEmail} />
        <XDSFormLayout direction="horizontal">
          <XDSTextInput label="City" value={city} onChange={setCity} />
          <XDSTextInput label="State" value={state} onChange={setState} />
          <XDSTextInput label="ZIP" value={zip} onChange={setZip} />
        </XDSFormLayout>
      </XDSFormLayout>;
  }
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'In a Dialog',
  render: () => {
    const [name, setName] = useState('Jane Doe');
    const [email, setEmail] = useState('jane@example.com');
    return <div {...stylex.props(dialogStyles.container)}>
        <div {...stylex.props(dialogStyles.header)}>
          <XDSText type="label">Edit Profile</XDSText>
        </div>
        <div {...stylex.props(dialogStyles.body)}>
          <form id="edit-profile" onSubmit={e => {
          e.preventDefault();
          alert(\`Saved: \${name}, \${email}\`);
        }}>
            <XDSFormLayout>
              <XDSTextInput label="Name" value={name} onChange={setName} />
              <XDSTextInput label="Email" value={email} onChange={setEmail} />
            </XDSFormLayout>
          </form>
        </div>
        <div {...stylex.props(dialogStyles.footer)}>
          <button {...stylex.props(dialogStyles.button, dialogStyles.secondary)} type="button">
            Cancel
          </button>
          <button {...stylex.props(dialogStyles.button, dialogStyles.primary)} type="submit" form="edit-profile">
            Save
          </button>
        </div>
      </div>;
  }
}`,...b.parameters?.docs?.source}}};const O=["Vertical","Horizontal","HorizontalLabels","MixedControls","Nested","InDialog"];export{p as Horizontal,x as HorizontalLabels,b as InDialog,S as MixedControls,h as Nested,d as Vertical,O as __namedExportsOrder,J as default};
