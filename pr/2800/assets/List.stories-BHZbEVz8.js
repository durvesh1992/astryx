import{at as a,ad as e,r as L,m as r,f as j}from"./iframe-yRFQ_7VC.js";import{X as n}from"./XDSList-B0MkGqZF.js";import{a as t}from"./XDSListItem-C5CIKGjL.js";import{X as f}from"./XDSAvatar-W6VpExB0.js";import{X as C}from"./XDSBadge-COTe2g1g.js";import{X as k}from"./XDSSwitch-CKn8Zjtu.js";import{F as A}from"./DocumentIcon-CM0Cx-HA.js";import{F as y}from"./BellIcon-BTy9GmgZ.js";import{F as I}from"./ShieldCheckIcon-BXWf3Fak.js";import{F as v}from"./Cog6ToothIcon-FIJug-Ow.js";import"./preload-helper-Ct5FWWRu.js";import"./XDSItem-CTSSy95c.js";import"./computeTargetAndRel-BlG0ENK0.js";import"./XDSFieldStatus-BgnciRVy.js";function R({title:s,titleId:o,...i},X){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:X,"aria-labelledby":o},i),s?a.createElement("title",{id:o},s):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 13.5h3.86a2.25 2.25 0 0 1 2.012 1.244l.256.512a2.25 2.25 0 0 0 2.013 1.244h3.218a2.25 2.25 0 0 0 2.013-1.244l.256-.512a2.25 2.25 0 0 1 2.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 0 0-2.15-1.588H6.911a2.25 2.25 0 0 0-2.15 1.588L2.35 13.177a2.25 2.25 0 0 0-.1.661Z"}))}const T=a.forwardRef(R);function F({title:s,titleId:o,...i},X){return a.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:X,"aria-labelledby":o},i),s?a.createElement("title",{id:o},s):null,a.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"}))}const P=a.forwardRef(F),Z={title:"Core/List",component:n,tags:["autodocs"],argTypes:{density:{control:"select",options:["compact","balanced","spacious"],description:"Spacing density for list items"},hasDividers:{control:"boolean",description:"Whether to show dividers between items"},listStyle:{control:"select",options:["none","disc","decimal","circle"],description:"List marker style"}}},l={render:s=>e.jsxs(n,{...s,children:[e.jsx(t,{label:"Notifications",description:"Manage your alerts"}),e.jsx(t,{label:"Privacy",description:"Control your data"}),e.jsx(t,{label:"Security",description:"Password and 2FA"})]})},c={render:s=>e.jsxs(n,{hasDividers:!0,header:e.jsx("strong",{children:"Settings"}),...s,children:[e.jsx(t,{label:"Notifications",description:"Manage your alerts",startContent:e.jsx(r,{icon:y})}),e.jsx(t,{label:"Privacy",description:"Control your data",startContent:e.jsx(r,{icon:I})}),e.jsx(t,{label:"General",description:"App preferences",startContent:e.jsx(r,{icon:v})})]})},d={render:s=>e.jsxs(n,{density:"compact",hasDividers:!0,...s,children:[e.jsx(t,{label:"Notifications",onClick:()=>{},endContent:e.jsx(C,{label:"3"})}),e.jsx(t,{label:"Messages",onClick:()=>{},endContent:e.jsx(C,{label:"12"})}),e.jsx(t,{label:"Settings",onClick:()=>{}})]})},p={render:s=>e.jsxs(n,{density:"spacious",...s,children:[e.jsx(t,{label:"Getting Started",description:"Learn the basics of our platform"}),e.jsx(t,{label:"Advanced Topics",description:"Deep dive into advanced features"}),e.jsx(t,{label:"API Reference",description:"Complete API documentation"})]})},m={render:s=>e.jsxs(n,{...s,children:[e.jsx(t,{label:"Inbox",isSelected:!0,onClick:()=>{},startContent:e.jsx(r,{icon:T}),endContent:e.jsx(r,{icon:j})}),e.jsx(t,{label:"Sent",onClick:()=>{},startContent:e.jsx(r,{icon:P}),endContent:e.jsx(r,{icon:j})}),e.jsx(t,{label:"Drafts",onClick:()=>{},startContent:e.jsx(r,{icon:A}),endContent:e.jsx(r,{icon:j})})]})},h={render:s=>e.jsxs(n,{...s,children:[e.jsx(t,{label:"Documentation",href:"/docs"}),e.jsx(t,{label:"GitHub",href:"https://github.com",target:"_blank",description:"View source code"}),e.jsx(t,{label:"Storybook",href:"/storybook",description:"Component playground"})]})},b={render:s=>e.jsxs(n,{listStyle:"decimal",...s,children:[e.jsx(t,{label:"Install the package",description:"npm install @xds/core"}),e.jsx(t,{label:"Import components",description:"import { XDSList } from '@xds/core'"}),e.jsx(t,{label:"Start building",description:"Use components in your app"})]})},S={render:s=>e.jsxs(n,{listStyle:"disc",...s,children:[e.jsx(t,{label:"Accessible by default"}),e.jsx(t,{label:"Themeable with StyleX"}),e.jsx(t,{label:"Composable and extensible"})]})},u={render:s=>e.jsxs(n,{...s,children:[e.jsx(t,{label:"Available",onClick:()=>{}}),e.jsx(t,{label:"Unavailable",onClick:()=>{},isDisabled:!0}),e.jsx(t,{label:"Also Available",onClick:()=>{}})]})},x={render:s=>e.jsxs(n,{hasDividers:!0,...s,children:[e.jsx(t,{label:"Alex Johnson",description:"Hey, are we still on for lunch tomorrow?",startContent:e.jsx(f,{name:"Alex Johnson",size:40}),onClick:()=>{},endContent:e.jsx(C,{label:"2"})}),e.jsx(t,{label:"Sam Rivera",description:"I pushed the latest changes to the repo",startContent:e.jsx(f,{name:"Sam Rivera",size:40}),onClick:()=>{}}),e.jsx(t,{label:"Jordan Lee",description:"Can you review the design spec when you get a chance?",startContent:e.jsx(f,{name:"Jordan Lee",size:40}),onClick:()=>{},endContent:e.jsx(C,{label:"5"})})]})};function w(){const[s,o]=a.useState(!1);return e.jsxs(n,{hasDividers:!0,header:e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[e.jsx(L,{type:"label",size:"lg",children:"Notifications"}),e.jsx(k,{label:"Show archived",value:s,onChange:i=>o(i)})]}),children:[e.jsx(t,{label:"New deployment succeeded",description:"Production v2.4.1 deployed",startContent:e.jsx(r,{icon:y})}),e.jsx(t,{label:"Security alert",description:"Unusual login detected",startContent:e.jsx(r,{icon:I})}),s&&e.jsx(t,{label:"Archived: Build completed",description:"CI pipeline finished",startContent:e.jsx(r,{icon:v})})]})}const g={render:()=>e.jsx(w,{}),parameters:{docs:{description:{story:"A list with a toggle in the header. The header and list are wrapped so they stack correctly even inside flex parents."}}}},D={render:()=>e.jsxs("div",{style:{display:"flex",gap:24,border:"1px dashed #888",padding:16},children:[e.jsx("div",{style:{flex:1},children:e.jsx(L,{type:"label",size:"lg",children:"Sidebar"})}),e.jsx("div",{style:{flex:2},children:e.jsx(w,{})})]}),parameters:{docs:{description:{story:"Demonstrates the list with a header inside a flex parent. The header should appear above the list, not beside it."}}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <XDSList {...args}>
      <XDSListItem label="Notifications" description="Manage your alerts" />
      <XDSListItem label="Privacy" description="Control your data" />
      <XDSListItem label="Security" description="Password and 2FA" />
    </XDSList>
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <XDSList hasDividers header={<strong>Settings</strong>} {...args}>
      <XDSListItem label="Notifications" description="Manage your alerts" startContent={<XDSIcon icon={BellIcon} />} />
      <XDSListItem label="Privacy" description="Control your data" startContent={<XDSIcon icon={ShieldCheckIcon} />} />
      <XDSListItem label="General" description="App preferences" startContent={<XDSIcon icon={Cog6ToothIcon} />} />
    </XDSList>
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <XDSList density="compact" hasDividers {...args}>
      <XDSListItem label="Notifications" onClick={() => {}} endContent={<XDSBadge label="3" />} />
      <XDSListItem label="Messages" onClick={() => {}} endContent={<XDSBadge label="12" />} />
      <XDSListItem label="Settings" onClick={() => {}} />
    </XDSList>
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <XDSList density="spacious" {...args}>
      <XDSListItem label="Getting Started" description="Learn the basics of our platform" />
      <XDSListItem label="Advanced Topics" description="Deep dive into advanced features" />
      <XDSListItem label="API Reference" description="Complete API documentation" />
    </XDSList>
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <XDSList {...args}>
      <XDSListItem label="Inbox" isSelected onClick={() => {}} startContent={<XDSIcon icon={InboxIcon} />} endContent={<XDSIcon icon={ChevronRightIcon} />} />
      <XDSListItem label="Sent" onClick={() => {}} startContent={<XDSIcon icon={PaperAirplaneIcon} />} endContent={<XDSIcon icon={ChevronRightIcon} />} />
      <XDSListItem label="Drafts" onClick={() => {}} startContent={<XDSIcon icon={DocumentIcon} />} endContent={<XDSIcon icon={ChevronRightIcon} />} />
    </XDSList>
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <XDSList {...args}>
      <XDSListItem label="Documentation" href="/docs" />
      <XDSListItem label="GitHub" href="https://github.com" target="_blank" description="View source code" />
      <XDSListItem label="Storybook" href="/storybook" description="Component playground" />
    </XDSList>
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <XDSList listStyle="decimal" {...args}>
      <XDSListItem label="Install the package" description="npm install @xds/core" />
      <XDSListItem label="Import components" description="import { XDSList } from '@xds/core'" />
      <XDSListItem label="Start building" description="Use components in your app" />
    </XDSList>
}`,...b.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => <XDSList listStyle="disc" {...args}>
      <XDSListItem label="Accessible by default" />
      <XDSListItem label="Themeable with StyleX" />
      <XDSListItem label="Composable and extensible" />
    </XDSList>
}`,...S.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <XDSList {...args}>
      <XDSListItem label="Available" onClick={() => {}} />
      <XDSListItem label="Unavailable" onClick={() => {}} isDisabled />
      <XDSListItem label="Also Available" onClick={() => {}} />
    </XDSList>
}`,...u.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <XDSList hasDividers {...args}>
      <XDSListItem label="Alex Johnson" description="Hey, are we still on for lunch tomorrow?" startContent={<XDSAvatar name="Alex Johnson" size={40} />} onClick={() => {}} endContent={<XDSBadge label="2" />} />
      <XDSListItem label="Sam Rivera" description="I pushed the latest changes to the repo" startContent={<XDSAvatar name="Sam Rivera" size={40} />} onClick={() => {}} />
      <XDSListItem label="Jordan Lee" description="Can you review the design spec when you get a chance?" startContent={<XDSAvatar name="Jordan Lee" size={40} />} onClick={() => {}} endContent={<XDSBadge label="5" />} />
    </XDSList>
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <ToggleHeaderDemo />,
  parameters: {
    docs: {
      description: {
        story: 'A list with a toggle in the header. The header and list are ' + 'wrapped so they stack correctly even inside flex parents.'
      }
    }
  }
}`,...g.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 24,
    border: '1px dashed #888',
    padding: 16
  }}>
      <div style={{
      flex: 1
    }}>
        <XDSText type="label" size="lg">
          Sidebar
        </XDSText>
      </div>
      <div style={{
      flex: 2
    }}>
        <ToggleHeaderDemo />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates the list with a header inside a flex parent. ' + 'The header should appear above the list, not beside it.'
      }
    }
  }
}`,...D.parameters?.docs?.source}}};const q=["Basic","WithDividers","Compact","Spacious","Interactive","Links","OrderedList","BulletedList","DisabledItems","WithMedia","HeaderWithToggle","HeaderInFlexParent"];export{l as Basic,S as BulletedList,d as Compact,u as DisabledItems,D as HeaderInFlexParent,g as HeaderWithToggle,m as Interactive,h as Links,b as OrderedList,p as Spacious,c as WithDividers,x as WithMedia,q as __namedExportsOrder,Z as default};
