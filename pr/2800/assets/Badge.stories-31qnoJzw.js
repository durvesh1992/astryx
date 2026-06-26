import{ad as a}from"./iframe-yRFQ_7VC.js";import{X as e}from"./XDSBadge-COTe2g1g.js";import"./preload-helper-Ct5FWWRu.js";const c={title:"Core/Badge",component:e,tags:["autodocs"],argTypes:{variant:{control:"select",options:["neutral","info","success","warning","error","blue","cyan","green","orange","pink","purple","red","teal","yellow"],description:"Visual style variant"},label:{control:"text",description:"Badge label text"}}},r={args:{label:"Badge"}},l={render:()=>a.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[a.jsx(e,{variant:"neutral",label:"Neutral"}),a.jsx(e,{variant:"info",label:"Info"}),a.jsx(e,{variant:"success",label:"Success"}),a.jsx(e,{variant:"warning",label:"Warning"}),a.jsx(e,{variant:"error",label:"Error"})]})},s={render:()=>a.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[a.jsx(e,{variant:"info",label:3}),a.jsx(e,{variant:"error",label:"99+"}),a.jsx(e,{variant:"success",label:12})]})},n={render:()=>a.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[a.jsx(e,{variant:"success",label:"Active"}),a.jsx(e,{variant:"warning",label:"Pending"}),a.jsx(e,{variant:"error",label:"Failed"}),a.jsx(e,{variant:"neutral",label:"Draft"})]})},t={render:()=>a.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[a.jsx(e,{variant:"blue",label:"Design"}),a.jsx(e,{variant:"cyan",label:"DevOps"}),a.jsx(e,{variant:"green",label:"Backend"}),a.jsx(e,{variant:"orange",label:"Urgent"}),a.jsx(e,{variant:"pink",label:"Marketing"}),a.jsx(e,{variant:"purple",label:"Engineering"}),a.jsx(e,{variant:"red",label:"Critical"}),a.jsx(e,{variant:"teal",label:"Research"}),a.jsx(e,{variant:"yellow",label:"Review"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Badge'
  }
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '8px',
    alignItems: 'center'
  }}>
      <XDSBadge variant="neutral" label="Neutral" />
      <XDSBadge variant="info" label="Info" />
      <XDSBadge variant="success" label="Success" />
      <XDSBadge variant="warning" label="Warning" />
      <XDSBadge variant="error" label="Error" />
    </div>
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '8px',
    alignItems: 'center'
  }}>
      <XDSBadge variant="info" label={3} />
      <XDSBadge variant="error" label="99+" />
      <XDSBadge variant="success" label={12} />
    </div>
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '8px',
    alignItems: 'center'
  }}>
      <XDSBadge variant="success" label="Active" />
      <XDSBadge variant="warning" label="Pending" />
      <XDSBadge variant="error" label="Failed" />
      <XDSBadge variant="neutral" label="Draft" />
    </div>
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap'
  }}>
      <XDSBadge variant="blue" label="Design" />
      <XDSBadge variant="cyan" label="DevOps" />
      <XDSBadge variant="green" label="Backend" />
      <XDSBadge variant="orange" label="Urgent" />
      <XDSBadge variant="pink" label="Marketing" />
      <XDSBadge variant="purple" label="Engineering" />
      <XDSBadge variant="red" label="Critical" />
      <XDSBadge variant="teal" label="Research" />
      <XDSBadge variant="yellow" label="Review" />
    </div>
}`,...t.parameters?.docs?.source}}};const g=["Default","Variants","Counts","StatusLabels","NonSemanticColors"];export{s as Counts,r as Default,t as NonSemanticColors,n as StatusLabels,l as Variants,g as __namedExportsOrder,c as default};
