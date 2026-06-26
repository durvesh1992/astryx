import{at as i,ad as e}from"./iframe-yRFQ_7VC.js";import{X as r,a as s}from"./XDSCheckboxListItem-G66nArwI.js";import{X as I}from"./XDSList-B0MkGqZF.js";import{X as y}from"./XDSCard-CyDoBnn3.js";import"./preload-helper-Ct5FWWRu.js";import"./XDSField-COi97ivg.js";import"./XDSFieldStatus-BgnciRVy.js";import"./XDSCheckboxInput-C50y4c1Q.js";import"./XDSListItem-C5CIKGjL.js";import"./XDSItem-CTSSy95c.js";import"./computeTargetAndRel-BlG0ENK0.js";import"./container.stylex-BI6SFdSl.js";import"./padding.stylex-BDg7w1Mn.js";const G={title:"Core/CheckboxList",component:r,tags:["autodocs"],argTypes:{label:{control:"text",description:"Label text (required)"},isLabelHidden:{control:"boolean",description:"Visually hide the label (still accessible to screen readers)"},description:{control:"text",description:"Description text displayed below the label"},density:{control:"select",options:["compact","balanced","spacious"],description:"Spacing density for list items"},hasDividers:{control:"boolean",description:"Whether to show dividers between items"},isDisabled:{control:"boolean",description:"Whether all checkbox items are disabled"}}},h={render:t=>{const[a,l]=i.useState(t.value??[]),{value:c,onChange:u,...n}=t;return e.jsxs(r,{...n,value:a,onChange:l,children:[e.jsx(s,{label:"Email",value:"email"}),e.jsx(s,{label:"SMS",value:"sms"}),e.jsx(s,{label:"Push notification",value:"push"})]})},args:{label:"Notification preferences"}},b={render:t=>{const[a,l]=i.useState(t.value??[]),{value:c,onChange:u,...n}=t;return e.jsxs(r,{...n,value:a,onChange:l,children:[e.jsx(s,{label:"Email",value:"email",description:"Receive notifications via email"}),e.jsx(s,{label:"SMS",value:"sms",description:"Standard messaging rates apply"}),e.jsx(s,{label:"Push notification",value:"push",description:"Instant alerts on your device"})]})},args:{label:"Notification preferences",description:"Choose how you would like to be notified",hasDividers:!0}},m={render:t=>{const a=[{id:"react",label:"React"},{id:"vue",label:"Vue"},{id:"angular",label:"Angular"},{id:"svelte",label:"Svelte"}],[l,c]=i.useState(["react"]),{value:u,onChange:n,...d}=t;return e.jsx(r,{...d,value:l,onChange:c,children:a.map(o=>e.jsx(s,{label:o.label,value:o.id},o.id))})},args:{label:"Frameworks"}},p={render:()=>{const[t,a]=i.useState(!1),[l,c]=i.useState(!0),[u,n]=i.useState(!1);return e.jsxs(I,{children:[e.jsx(s,{label:"Accept terms and conditions",isChecked:t,onCheck:a}),e.jsx(s,{label:"Subscribe to newsletter",description:"Weekly updates about new features",isChecked:l,onCheck:c}),e.jsx(s,{label:"Receive marketing emails",isChecked:u,onCheck:n})]})}},S={render:()=>e.jsxs(I,{children:[e.jsx(s,{label:"Completed task",isChecked:!0}),e.jsx(s,{label:"Pending task",isChecked:!1}),e.jsx(s,{label:"In progress",isChecked:"indeterminate"})]})},v={render:()=>{const t=["email","sms","push"],[a,l]=i.useState(["email"]),c=t.every(o=>a.includes(o)),u=a.length===0,n=c?!0:u?!1:"indeterminate",d=o=>{l(o?[...t]:[])};return e.jsxs(r,{label:"Notifications",hasDividers:!0,children:[e.jsx(s,{label:"Select all",isChecked:n,onCheck:d}),t.map(o=>e.jsx(s,{label:o.charAt(0).toUpperCase()+o.slice(1),isChecked:a.includes(o),onCheck:V=>{l(A=>V?[...A,o]:A.filter(E=>E!==o))}},o))]})}},C={render:t=>{const[a,l]=i.useState(["email"]),{value:c,onChange:u,...n}=t;return e.jsxs(r,{...n,value:a,onChange:l,children:[e.jsx(s,{label:"Email",value:"email"}),e.jsx(s,{label:"SMS",value:"sms"}),e.jsx(s,{label:"Push notification",value:"push"})]})},args:{label:"Notification preferences",isDisabled:!0}},x={render:()=>{const[t,a]=i.useState(["email"]);return e.jsxs(r,{label:"Notification preferences",value:t,onChange:a,children:[e.jsx(s,{label:"Email",value:"email"}),e.jsx(s,{label:"SMS",value:"sms",isLoading:!0}),e.jsx(s,{label:"Push notification",value:"push"})]})}},g={render:()=>{const[t,a]=i.useState(["email"]),l=c=>new Promise(u=>{setTimeout(()=>{a(c),u()},1500)});return e.jsxs(r,{label:"Notification preferences",description:"Toggle an option — it spins while saving",value:t,changeAction:l,hasDividers:!0,children:[e.jsx(s,{label:"Email",value:"email"}),e.jsx(s,{label:"SMS",value:"sms"}),e.jsx(s,{label:"Push notification",value:"push"})]})}},k={render:t=>{const[a,l]=i.useState([]),{value:c,onChange:u,...n}=t;return e.jsxs(r,{...n,value:a,onChange:l,children:[e.jsx(s,{label:"Email",value:"email"}),e.jsx(s,{label:"SMS",value:"sms",isDisabled:!0}),e.jsx(s,{label:"Push notification",value:"push"})]})},args:{label:"Notification preferences"}},D={render:t=>{const[a,l]=i.useState([]),{value:c,onChange:u,...n}=t;return e.jsxs(r,{...n,value:a,onChange:l,children:[e.jsx(s,{label:"Email",value:"email"}),e.jsx(s,{label:"SMS",value:"sms"}),e.jsx(s,{label:"Push notification",value:"push"})]})},args:{label:"Notification preferences",status:{type:"error",message:"Please select at least one notification method"}}},X={render:t=>{const[a,l]=i.useState(["free"]),{value:c,onChange:u,...n}=t;return e.jsxs(r,{...n,value:a,onChange:l,children:[e.jsx(s,{label:"Free tier",value:"free",description:"Basic features included",endContent:e.jsx("span",{style:{color:"#0D8626"},children:"$0/mo"})}),e.jsx(s,{label:"Pro tier",value:"pro",description:"Advanced features",endContent:e.jsx("span",{style:{color:"#0064E0"},children:"$9/mo"})}),e.jsx(s,{label:"Enterprise",value:"enterprise",description:"Custom solutions",endContent:e.jsx("span",{style:{color:"#5B08D8"},children:"Custom"})})]})},args:{label:"Add-on packages",hasDividers:!0}},L={render:()=>{const[t,a]=i.useState([]),[l,c]=i.useState(["email"]),[u,n]=i.useState(!1),[d,o]=i.useState(!0);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",maxWidth:"400px"},children:[e.jsxs(r,{label:"Unselected",value:t,onChange:a,children:[e.jsx(s,{label:"Option A",value:"a"}),e.jsx(s,{label:"Option B",value:"b"})]}),e.jsxs(r,{label:"Pre-selected",value:l,onChange:c,children:[e.jsx(s,{label:"Email",value:"email"}),e.jsx(s,{label:"SMS",value:"sms"})]}),e.jsxs(r,{label:"Disabled group",value:["a"],onChange:()=>{},isDisabled:!0,children:[e.jsx(s,{label:"Option A",value:"a"}),e.jsx(s,{label:"Option B",value:"b"})]}),e.jsxs(r,{label:"With descriptions",value:t,onChange:a,hasDividers:!0,children:[e.jsx(s,{label:"Email",value:"email",description:"Delivered to your inbox"}),e.jsx(s,{label:"SMS",value:"sms",description:"Standard rates apply"})]}),e.jsxs(r,{label:"With error",value:[],onChange:()=>{},status:{type:"error",message:"Please select at least one option"},children:[e.jsx(s,{label:"Option A",value:"a"}),e.jsx(s,{label:"Option B",value:"b"})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{margin:"0 0 8px"},children:"Standalone mode"}),e.jsxs(I,{children:[e.jsx(s,{label:"Accept terms",isChecked:u,onCheck:n}),e.jsx(s,{label:"Subscribe",isChecked:d,onCheck:o})]})]})]})}},f={render(){const[t,a]=i.useState(["email"]);return e.jsx("div",{style:{maxWidth:400},children:e.jsx(y,{children:e.jsxs(r,{label:"Notifications",description:"Choose how to be notified",value:t,onChange:a,children:[e.jsx(s,{value:"email",label:"Email",description:"Weekly digest"}),e.jsx(s,{value:"push",label:"Push notifications"}),e.jsx(s,{value:"sms",label:"SMS",isDisabled:!0})]})})})}},j={render(){const[t,a]=i.useState(["admin"]);return e.jsx("div",{style:{maxWidth:400},children:e.jsx(y,{children:e.jsxs(r,{label:"Assign Roles",value:t,onChange:a,hasDividers:!0,children:[e.jsx(s,{value:"admin",label:"Admin"}),e.jsx(s,{value:"editor",label:"Editor"}),e.jsx(s,{value:"viewer",label:"Viewer"}),e.jsx(s,{value:"guest",label:"Guest"})]})})})}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string[]>(args.value ?? []);
    const {
      value: _value,
      onChange: _onChange,
      ...restArgs
    } = args;
    return <XDSCheckboxList {...restArgs} value={value} onChange={setValue}>
        <XDSCheckboxListItem label="Email" value="email" />
        <XDSCheckboxListItem label="SMS" value="sms" />
        <XDSCheckboxListItem label="Push notification" value="push" />
      </XDSCheckboxList>;
  },
  args: {
    label: 'Notification preferences'
  }
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string[]>(args.value ?? []);
    const {
      value: _value,
      onChange: _onChange,
      ...restArgs
    } = args;
    return <XDSCheckboxList {...restArgs} value={value} onChange={setValue}>
        <XDSCheckboxListItem label="Email" value="email" description="Receive notifications via email" />
        <XDSCheckboxListItem label="SMS" value="sms" description="Standard messaging rates apply" />
        <XDSCheckboxListItem label="Push notification" value="push" description="Instant alerts on your device" />
      </XDSCheckboxList>;
  },
  args: {
    label: 'Notification preferences',
    description: 'Choose how you would like to be notified',
    hasDividers: true
  }
}`,...b.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    const items = [{
      id: 'react',
      label: 'React'
    }, {
      id: 'vue',
      label: 'Vue'
    }, {
      id: 'angular',
      label: 'Angular'
    }, {
      id: 'svelte',
      label: 'Svelte'
    }];
    const [value, setValue] = useState<string[]>(['react']);
    const {
      value: _value,
      onChange: _onChange,
      ...restArgs
    } = args;
    return <XDSCheckboxList {...restArgs} value={value} onChange={setValue}>
        {items.map(item => <XDSCheckboxListItem key={item.id} label={item.label} value={item.id} />)}
      </XDSCheckboxList>;
  },
  args: {
    label: 'Frameworks'
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [accepted, setAccepted] = useState(false);
    const [subscribed, setSubscribed] = useState(true);
    const [marketing, setMarketing] = useState(false);
    return <XDSList>
        <XDSCheckboxListItem label="Accept terms and conditions" isChecked={accepted} onCheck={setAccepted} />
        <XDSCheckboxListItem label="Subscribe to newsletter" description="Weekly updates about new features" isChecked={subscribed} onCheck={setSubscribed} />
        <XDSCheckboxListItem label="Receive marketing emails" isChecked={marketing} onCheck={setMarketing} />
      </XDSList>;
  }
}`,...p.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <XDSList>
      <XDSCheckboxListItem label="Completed task" isChecked={true} />
      <XDSCheckboxListItem label="Pending task" isChecked={false} />
      <XDSCheckboxListItem label="In progress" isChecked="indeterminate" />
    </XDSList>
}`,...S.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const allItems = ['email', 'sms', 'push'];
    const [selected, setSelected] = useState<string[]>(['email']);
    const allChecked = allItems.every(item => selected.includes(item));
    const noneChecked = selected.length === 0;
    const selectAllState = allChecked ? true : noneChecked ? false : 'indeterminate' as const;
    const handleSelectAll = (checked: boolean) => {
      if (checked) {
        setSelected([...allItems]);
      } else {
        setSelected([]);
      }
    };
    return <XDSCheckboxList label="Notifications" hasDividers>
        <XDSCheckboxListItem label="Select all" isChecked={selectAllState} onCheck={handleSelectAll} />
        {allItems.map(item => <XDSCheckboxListItem key={item} label={item.charAt(0).toUpperCase() + item.slice(1)} isChecked={selected.includes(item)} onCheck={checked => {
        setSelected(prev => checked ? [...prev, item] : prev.filter(v => v !== item));
      }} />)}
      </XDSCheckboxList>;
  }
}`,...v.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string[]>(['email']);
    const {
      value: _value,
      onChange: _onChange,
      ...restArgs
    } = args;
    return <XDSCheckboxList {...restArgs} value={value} onChange={setValue}>
        <XDSCheckboxListItem label="Email" value="email" />
        <XDSCheckboxListItem label="SMS" value="sms" />
        <XDSCheckboxListItem label="Push notification" value="push" />
      </XDSCheckboxList>;
  },
  args: {
    label: 'Notification preferences',
    isDisabled: true
  }
}`,...C.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>(['email']);
    return <XDSCheckboxList label="Notification preferences" value={value} onChange={setValue}>
        <XDSCheckboxListItem label="Email" value="email" />
        <XDSCheckboxListItem label="SMS" value="sms" isLoading />
        <XDSCheckboxListItem label="Push notification" value="push" />
      </XDSCheckboxList>;
  }
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState<string[]>(['email']);
    // Simulates persisting the new selection to a server. While the promise
    // is pending, the toggled item shows a spinner inside its checkbox and
    // blocks re-toggling; the other items stay interactive.
    const persist = (next: string[]) => new Promise<void>(resolve => {
      setTimeout(() => {
        setValue(next);
        resolve();
      }, 1500);
    });
    return <XDSCheckboxList label="Notification preferences" description="Toggle an option — it spins while saving" value={value} changeAction={persist} hasDividers>
        <XDSCheckboxListItem label="Email" value="email" />
        <XDSCheckboxListItem label="SMS" value="sms" />
        <XDSCheckboxListItem label="Push notification" value="push" />
      </XDSCheckboxList>;
  }
}`,...g.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string[]>([]);
    const {
      value: _value,
      onChange: _onChange,
      ...restArgs
    } = args;
    return <XDSCheckboxList {...restArgs} value={value} onChange={setValue}>
        <XDSCheckboxListItem label="Email" value="email" />
        <XDSCheckboxListItem label="SMS" value="sms" isDisabled />
        <XDSCheckboxListItem label="Push notification" value="push" />
      </XDSCheckboxList>;
  },
  args: {
    label: 'Notification preferences'
  }
}`,...k.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string[]>([]);
    const {
      value: _value,
      onChange: _onChange,
      ...restArgs
    } = args;
    return <XDSCheckboxList {...restArgs} value={value} onChange={setValue}>
        <XDSCheckboxListItem label="Email" value="email" />
        <XDSCheckboxListItem label="SMS" value="sms" />
        <XDSCheckboxListItem label="Push notification" value="push" />
      </XDSCheckboxList>;
  },
  args: {
    label: 'Notification preferences',
    status: {
      type: 'error',
      message: 'Please select at least one notification method'
    }
  }
}`,...D.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string[]>(['free']);
    const {
      value: _value,
      onChange: _onChange,
      ...restArgs
    } = args;
    return <XDSCheckboxList {...restArgs} value={value} onChange={setValue}>
        <XDSCheckboxListItem label="Free tier" value="free" description="Basic features included" endContent={<span style={{
        color: '#0D8626'
      }}>$0/mo</span>} />
        <XDSCheckboxListItem label="Pro tier" value="pro" description="Advanced features" endContent={<span style={{
        color: '#0064E0'
      }}>$9/mo</span>} />
        <XDSCheckboxListItem label="Enterprise" value="enterprise" description="Custom solutions" endContent={<span style={{
        color: '#5B08D8'
      }}>Custom</span>} />
      </XDSCheckboxList>;
  },
  args: {
    label: 'Add-on packages',
    hasDividers: true
  }
}`,...X.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value1, setValue1] = useState<string[]>([]);
    const [value2, setValue2] = useState<string[]>(['email']);
    const [standalone1, setStandalone1] = useState(false);
    const [standalone2, setStandalone2] = useState(true);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      maxWidth: '400px'
    }}>
        <XDSCheckboxList label="Unselected" value={value1} onChange={setValue1}>
          <XDSCheckboxListItem label="Option A" value="a" />
          <XDSCheckboxListItem label="Option B" value="b" />
        </XDSCheckboxList>
        <XDSCheckboxList label="Pre-selected" value={value2} onChange={setValue2}>
          <XDSCheckboxListItem label="Email" value="email" />
          <XDSCheckboxListItem label="SMS" value="sms" />
        </XDSCheckboxList>
        <XDSCheckboxList label="Disabled group" value={['a']} onChange={() => {}} isDisabled>
          <XDSCheckboxListItem label="Option A" value="a" />
          <XDSCheckboxListItem label="Option B" value="b" />
        </XDSCheckboxList>
        <XDSCheckboxList label="With descriptions" value={value1} onChange={setValue1} hasDividers>
          <XDSCheckboxListItem label="Email" value="email" description="Delivered to your inbox" />
          <XDSCheckboxListItem label="SMS" value="sms" description="Standard rates apply" />
        </XDSCheckboxList>
        <XDSCheckboxList label="With error" value={[]} onChange={() => {}} status={{
        type: 'error',
        message: 'Please select at least one option'
      }}>
          <XDSCheckboxListItem label="Option A" value="a" />
          <XDSCheckboxListItem label="Option B" value="b" />
        </XDSCheckboxList>
        <div>
          <h4 style={{
          margin: '0 0 8px'
        }}>Standalone mode</h4>
          <XDSList>
            <XDSCheckboxListItem label="Accept terms" isChecked={standalone1} onCheck={setStandalone1} />
            <XDSCheckboxListItem label="Subscribe" isChecked={standalone2} onCheck={setStandalone2} />
          </XDSList>
        </div>
      </div>;
  }
}`,...L.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render() {
    const [selected, setSelected] = useState<string[]>(['email']);
    return <div style={{
      maxWidth: 400
    }}>
        <XDSCard>
          <XDSCheckboxList label="Notifications" description="Choose how to be notified" value={selected} onChange={setSelected}>
            <XDSCheckboxListItem value="email" label="Email" description="Weekly digest" />
            <XDSCheckboxListItem value="push" label="Push notifications" />
            <XDSCheckboxListItem value="sms" label="SMS" isDisabled />
          </XDSCheckboxList>
        </XDSCard>
      </div>;
  }
}`,...f.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render() {
    const [selected, setSelected] = useState<string[]>(['admin']);
    return <div style={{
      maxWidth: 400
    }}>
        <XDSCard>
          <XDSCheckboxList label="Assign Roles" value={selected} onChange={setSelected} hasDividers>
            <XDSCheckboxListItem value="admin" label="Admin" />
            <XDSCheckboxListItem value="editor" label="Editor" />
            <XDSCheckboxListItem value="viewer" label="Viewer" />
            <XDSCheckboxListItem value="guest" label="Guest" />
          </XDSCheckboxList>
        </XDSCard>
      </div>;
  }
}`,...j.parameters?.docs?.source}}};const q=["Default","WithDescriptions","DynamicItems","StandaloneMode","ReadOnly","SelectAllWithIndeterminate","Disabled","Loading","ChangeAction","DisabledItem","WithErrorStatus","WithEndContent","AllVariations","InsideCard","InsideCardWithDividers"];export{L as AllVariations,g as ChangeAction,h as Default,C as Disabled,k as DisabledItem,m as DynamicItems,f as InsideCard,j as InsideCardWithDividers,x as Loading,S as ReadOnly,v as SelectAllWithIndeterminate,p as StandaloneMode,b as WithDescriptions,X as WithEndContent,D as WithErrorStatus,q as __namedExportsOrder,G as default};
