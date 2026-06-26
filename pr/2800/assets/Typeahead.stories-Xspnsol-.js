import{b as v,at as f,ad as r}from"./iframe-yRFQ_7VC.js";import{X as t}from"./XDSTypeahead-Bn9GYbcM.js";import"./preload-helper-Ct5FWWRu.js";import"./XDSBaseTypeahead-6XxrNE5q.js";import"./useXDSPopover-ChRJmaAz.js";import"./XDSTypeaheadItem-B2UuIBFd.js";import"./getKey-DyRdrWhf.js";import"./XDSField-COi97ivg.js";import"./XDSFieldStatus-BgnciRVy.js";import"./inputStyles.stylex-BIqXE6lP.js";import"./XDSInputClearButton-5cesfNLN.js";import"./XDSToken-DnzEkZ3B.js";import"./useXDSInteractiveRole-C4QNKBOy.js";const x=[{id:"1",label:"Apple"},{id:"2",label:"Banana"},{id:"3",label:"Cherry"},{id:"4",label:"Date"},{id:"5",label:"Elderberry"},{id:"6",label:"Fig"},{id:"7",label:"Grape"},{id:"8",label:"Honeydew"}],D={search:a=>x.filter(s=>s.label.toLowerCase().includes(a.toLowerCase())),bootstrap:()=>x.slice(0,5)},q={title:"Core/Typeahead",component:t,tags:["autodocs"],argTypes:{label:{control:"text"},placeholder:{control:"text"},isDisabled:{control:"boolean"},isRequired:{control:"boolean"},isOptional:{control:"boolean"},hasEntriesOnFocus:{control:"boolean"},hasClear:{control:"boolean"},maxMenuItems:{control:"number"},size:{control:"radio",options:["sm","md","lg"],description:"Input size"}},decorators:[a=>r.jsx("div",{style:{width:320},children:r.jsx(a,{})})]},e={render:a=>{const[s,b]=f.useState(null);return r.jsx(t,{...a,searchSource:D,value:s,onChange:b})},args:{label:"Fruit",placeholder:"Search fruits..."}},o={...e,args:{...e.args,hasEntriesOnFocus:!0},name:"With Bootstrap Results"},n={...e,args:{...e.args,isRequired:!0}},l={...e,args:{...e.args,isOptional:!0}},c={...e,args:{...e.args,description:"Pick your favorite fruit from the list"}},u={...e,args:{...e.args,status:{type:"error",message:"Please select a fruit"}}},i={...e,args:{...e.args,status:{type:"warning",message:"This fruit may be out of season"}}},m={...e,args:{...e.args,status:{type:"success",message:"Great choice!"}}},p={...e,args:{...e.args,isDisabled:!0}},d={...e,args:{...e.args,hasClear:!1},name:"Without Clear Button"},g={...e,args:{...e.args,hasEntriesOnFocus:!0,maxMenuItems:3},name:"Max 3 Results"},h={render:()=>{const[a,s]=f.useState(null),[b,y]=f.useState(null),[W,C]=f.useState(null);return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[r.jsx(t,{label:"Small (28px)",searchSource:D,value:a,onChange:s,placeholder:"Small size",size:"sm"}),r.jsx(t,{label:"Medium (32px)",searchSource:D,value:b,onChange:y,placeholder:"Medium size (default)",size:"md"}),r.jsx(t,{label:"Large (36px)",searchSource:D,value:W,onChange:C,placeholder:"Large size",size:"lg"})]})}},S={...e,args:{...e.args,startIcon:v,hasEntriesOnFocus:!0},name:"With Start Icon"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<XDSSearchableItem | null>(null);
    return <XDSTypeahead {...args} searchSource={fruitSource} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Fruit',
    placeholder: 'Search fruits...'
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    hasEntriesOnFocus: true
  },
  name: 'With Bootstrap Results'
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    isRequired: true
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    isOptional: true
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    description: 'Pick your favorite fruit from the list'
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    status: {
      type: 'error',
      message: 'Please select a fruit'
    }
  }
}`,...u.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    status: {
      type: 'warning',
      message: 'This fruit may be out of season'
    }
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    status: {
      type: 'success',
      message: 'Great choice!'
    }
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    isDisabled: true
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    hasClear: false
  },
  name: 'Without Clear Button'
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    hasEntriesOnFocus: true,
    maxMenuItems: 3
  },
  name: 'Max 3 Results'
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [sm, setSm] = useState<XDSSearchableItem | null>(null);
    const [md, setMd] = useState<XDSSearchableItem | null>(null);
    const [lg, setLg] = useState<XDSSearchableItem | null>(null);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }}>
        <XDSTypeahead label="Small (28px)" searchSource={fruitSource} value={sm} onChange={setSm} placeholder="Small size" size="sm" />
        <XDSTypeahead label="Medium (32px)" searchSource={fruitSource} value={md} onChange={setMd} placeholder="Medium size (default)" size="md" />
        <XDSTypeahead label="Large (36px)" searchSource={fruitSource} value={lg} onChange={setLg} placeholder="Large size" size="lg" />
      </div>;
  }
}`,...h.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    startIcon: MagnifyingGlassIcon,
    hasEntriesOnFocus: true
  },
  name: 'With Start Icon'
}`,...S.parameters?.docs?.source}}};const V=["Default","WithBootstrap","Required","Optional","WithDescription","WithError","WithWarning","WithSuccess","Disabled","NoClear","LimitedResults","SizeVariants","WithStartIcon"];export{e as Default,p as Disabled,g as LimitedResults,d as NoClear,l as Optional,n as Required,h as SizeVariants,o as WithBootstrap,c as WithDescription,u as WithError,S as WithStartIcon,m as WithSuccess,i as WithWarning,V as __namedExportsOrder,q as default};
