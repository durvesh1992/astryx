import{q as a,ad as e,r as o}from"./iframe-yRFQ_7VC.js";import{X as i}from"./XDSHStack-BmU4dpCo.js";import{X as d}from"./XDSVStack-uMCoSZ_B.js";import"./preload-helper-Ct5FWWRu.js";import"./XDSStack-CFJ7xIVk.js";import"./stack.stylex-5XIQDawT.js";const h={title:"Core/Spinner",component:a,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg","xl"],description:"Spinner size"},shade:{control:"select",options:["default","onMedia"],description:"Color shade"}}},r={args:{size:"md",shade:"default"}},s={render:()=>e.jsxs(i,{gap:4,vAlign:"center",children:[e.jsx(a,{size:"sm"}),e.jsx(a,{size:"md"}),e.jsx(a,{size:"lg"}),e.jsx(a,{size:"xl"})]})},n={render:()=>e.jsxs(i,{gap:4,vAlign:"center",children:[e.jsx(a,{shade:"default"}),e.jsx("div",{style:{backgroundColor:"#1a1a2e",padding:16,borderRadius:8},children:e.jsx(a,{shade:"onMedia"})})]})},t={render:()=>e.jsxs(i,{gap:8,vAlign:"start",children:[e.jsx(a,{size:"lg",label:"Loading..."}),e.jsx(a,{size:"lg",label:e.jsxs(d,{gap:0,hAlign:"center",children:[e.jsx(o,{type:"body",weight:"bold",children:"Fetching data"}),e.jsx(o,{type:"supporting",color:"secondary",children:"This may take a moment"})]}),"aria-label":"Fetching data"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    shade: 'default'
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <XDSHStack gap={4} vAlign="center">
      <XDSSpinner size="sm" />
      <XDSSpinner size="md" />
      <XDSSpinner size="lg" />
      <XDSSpinner size="xl" />
    </XDSHStack>
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <XDSHStack gap={4} vAlign="center">
      <XDSSpinner shade="default" />
      <div style={{
      backgroundColor: '#1a1a2e',
      padding: 16,
      borderRadius: 8
    }}>
        <XDSSpinner shade="onMedia" />
      </div>
    </XDSHStack>
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <XDSHStack gap={8} vAlign="start">
      <XDSSpinner size="lg" label="Loading..." />
      <XDSSpinner size="lg" label={<XDSVStack gap={0} hAlign="center">
            <XDSText type="body" weight="bold">
              Fetching data
            </XDSText>
            <XDSText type="supporting" color="secondary">
              This may take a moment
            </XDSText>
          </XDSVStack>} aria-label="Fetching data" />
    </XDSHStack>
}`,...t.parameters?.docs?.source}}};const u=["Default","Sizes","Shades","WithLabel"];export{r as Default,n as Shades,s as Sizes,t as WithLabel,u as __namedExportsOrder,h as default};
