import{ad as e,r as s,m as n,at as z,b as j}from"./iframe-yRFQ_7VC.js";import{X as t}from"./XDSItem-CTSSy95c.js";import{X as g}from"./XDSAvatar-W6VpExB0.js";import{X as C}from"./XDSBadge-COTe2g1g.js";import{X as o}from"./XDSStack-CFJ7xIVk.js";import{F as w,a as y}from"./PencilSquareIcon-B3zvzd1y.js";import{F as A}from"./Cog6ToothIcon-FIJug-Ow.js";import{F as X}from"./UserIcon-B3zzc9I3.js";import{F as b}from"./DocumentIcon-CM0Cx-HA.js";import{F as f}from"./BellIcon-BTy9GmgZ.js";import"./preload-helper-Ct5FWWRu.js";import"./computeTargetAndRel-BlG0ENK0.js";import"./stack.stylex-5XIQDawT.js";const q={title:"Core/Item",component:t,tags:["autodocs"],argTypes:{align:{control:"select",options:["center","start"]},density:{control:"select",options:["compact","balanced","spacious"]}}},r={render:()=>e.jsx(t,{startContent:e.jsx(n,{icon:X,size:"sm"}),label:"Alice Johnson",description:"Software Engineer",endContent:e.jsx(C,{label:"Admin"})})},i={render:()=>e.jsxs(o,{gap:0,children:[e.jsx(t,{startContent:e.jsx(g,{name:"Alice Johnson",size:40}),label:"Alice Johnson",description:"Engineering Lead",endContent:e.jsx(C,{label:"Admin"}),onClick:()=>{}}),e.jsx(t,{startContent:e.jsx(g,{name:"Bob Smith",size:40}),label:"Bob Smith",description:"Product Designer",onClick:()=>{}}),e.jsx(t,{startContent:e.jsx(g,{name:"Carol Williams",size:40}),label:"Carol Williams",description:"Data Scientist",endContent:e.jsx(s,{color:"secondary",children:"Away"}),onClick:()=>{}})]})},a={render:()=>e.jsxs(o,{gap:0,children:[e.jsx(t,{startContent:e.jsx(g,{name:"Alice",size:40}),label:e.jsxs(e.Fragment,{children:[e.jsx("b",{children:"Alice"})," commented on your PR"]}),description:"Looks good, one nit on the error handling...",endContent:e.jsx(s,{color:"secondary",children:"2h ago"}),descriptionLines:1,onClick:()=>{}}),e.jsx(t,{startContent:e.jsx("div",{className:"x78zum5 x6s0dn4 xl56j7k x100vrsf x1vqgdyp x16rqkct x17x4s8c",children:e.jsx(n,{icon:f,size:"sm"})}),label:"Build completed successfully",description:"Pipeline #4521 — all 42 tests passed",endContent:e.jsx(s,{color:"secondary",children:"5h ago"}),descriptionLines:1,onClick:()=>{}})]})},c={render:()=>e.jsxs(o,{gap:0,children:[e.jsx(t,{startContent:e.jsx(n,{icon:w,size:"sm"}),label:"Edit",density:"compact",onClick:()=>{}}),e.jsx(t,{startContent:e.jsx(n,{icon:A,size:"sm"}),label:"Settings",description:"Manage your preferences",density:"compact",onClick:()=>{}}),e.jsx(t,{startContent:e.jsx(n,{icon:y,size:"sm"}),label:"Messages",density:"compact",endContent:e.jsx(C,{label:"12"}),onClick:()=>{}})]})},d={render:()=>e.jsxs(o,{gap:0,children:[e.jsx(t,{startContent:e.jsx(n,{icon:f,size:"sm"}),label:"Product updates",description:"Major announcements and release notes",density:"spacious"}),e.jsx(t,{startContent:e.jsx(n,{icon:y,size:"sm"}),label:"Team messages",description:"Direct messages, mentions, and thread replies",endContent:e.jsx(C,{label:"4"}),density:"spacious"})]})},l={render:function(){const[h,I]=z.useState(new Set(["doc1"])),x=D=>I(k=>{const u=new Set(k);return u.has(D)?u.delete(D):u.add(D),u});return e.jsxs(o,{gap:0,children:[e.jsx(t,{startContent:e.jsx(n,{icon:b,size:"sm"}),label:"design-spec.pdf",description:"Modified 2 hours ago",endContent:e.jsx(s,{color:"secondary",children:"2.4 MB"}),isSelected:h.has("doc1"),onClick:()=>x("doc1")}),e.jsx(t,{startContent:e.jsx(n,{icon:b,size:"sm"}),label:"architecture-diagram.png",description:"Modified yesterday",endContent:e.jsx(s,{color:"secondary",children:"1.2 MB"}),isSelected:h.has("doc2"),onClick:()=>x("doc2")}),e.jsx(t,{startContent:e.jsx(n,{icon:b,size:"sm"}),label:"meeting-notes.md",description:"Modified 3 days ago",endContent:e.jsx(s,{color:"secondary",children:"48 KB"}),isSelected:h.has("doc3"),onClick:()=>x("doc3")})]})}},m={render:()=>e.jsxs(o,{gap:0,children:[e.jsx(t,{startContent:e.jsx(n,{icon:j,size:"sm"}),label:e.jsxs(e.Fragment,{children:["XDS ",e.jsx("b",{children:"Button"})," Component"]}),description:"Primary interactive element for triggering actions...",descriptionLines:1,href:"/docs/button"}),e.jsx(t,{startContent:e.jsx(n,{icon:j,size:"sm"}),label:e.jsxs(e.Fragment,{children:["XDS ",e.jsx("b",{children:"Button"}),"Group"]}),description:"Groups related buttons into a single connected control...",descriptionLines:1,href:"/docs/button-group"})]})},p={render:()=>e.jsxs(o,{gap:0,children:[e.jsx(t,{startContent:e.jsx(n,{icon:X,size:"sm"}),label:"Active item",description:"This item is interactive",onClick:()=>{}}),e.jsx(t,{startContent:e.jsx(n,{icon:X,size:"sm"}),label:"Disabled item",description:"This item cannot be interacted with",onClick:()=>{},isDisabled:!0})]})},S={render:()=>e.jsx(t,{align:"start",startContent:e.jsx(g,{name:"Alice",size:40}),label:"Alice Johnson",description:"This is a longer description that wraps across multiple lines to demonstrate the align=start behavior, which positions the start and end content at the top rather than vertically centering them.",endContent:e.jsx(s,{color:"secondary",children:"Just now"})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <XDSItem startContent={<XDSIcon icon={UserIcon} size="sm" />} label="Alice Johnson" description="Software Engineer" endContent={<XDSBadge label="Admin" />} />
}`,...r.parameters?.docs?.source},description:{story:"Basic item with all slots populated.",...r.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <XDSStack gap={0}>
      <XDSItem startContent={<XDSAvatar name="Alice Johnson" size={40} />} label="Alice Johnson" description="Engineering Lead" endContent={<XDSBadge label="Admin" />} onClick={() => {}} />
      <XDSItem startContent={<XDSAvatar name="Bob Smith" size={40} />} label="Bob Smith" description="Product Designer" onClick={() => {}} />
      <XDSItem startContent={<XDSAvatar name="Carol Williams" size={40} />} label="Carol Williams" description="Data Scientist" endContent={<XDSText color="secondary">Away</XDSText>} onClick={() => {}} />
    </XDSStack>
}`,...i.parameters?.docs?.source},description:{story:"Contact list with avatars and roles.",...i.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <XDSStack gap={0}>
      <XDSItem startContent={<XDSAvatar name="Alice" size={40} />} label={<>
            <b>Alice</b> commented on your PR
          </>} description="Looks good, one nit on the error handling..." endContent={<XDSText color="secondary">2h ago</XDSText>} descriptionLines={1} onClick={() => {}} />
      <XDSItem startContent={<div {...stylex.props(storyStyles.iconCircle)}>
            <XDSIcon icon={BellIcon} size="sm" />
          </div>} label="Build completed successfully" description="Pipeline #4521 — all 42 tests passed" endContent={<XDSText color="secondary">5h ago</XDSText>} descriptionLines={1} onClick={() => {}} />
    </XDSStack>
}`,...a.parameters?.docs?.source},description:{story:"Notification inbox with timestamps and truncation.",...a.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <XDSStack gap={0}>
      <XDSItem startContent={<XDSIcon icon={PencilSquareIcon} size="sm" />} label="Edit" density="compact" onClick={() => {}} />
      <XDSItem startContent={<XDSIcon icon={Cog6ToothIcon} size="sm" />} label="Settings" description="Manage your preferences" density="compact" onClick={() => {}} />
      <XDSItem startContent={<XDSIcon icon={ChatBubbleLeftIcon} size="sm" />} label="Messages" density="compact" endContent={<XDSBadge label="12" />} onClick={() => {}} />
    </XDSStack>
}`,...c.parameters?.docs?.source},description:{story:"Compact menu items with icons.",...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <XDSStack gap={0}>
      <XDSItem startContent={<XDSIcon icon={BellIcon} size="sm" />} label="Product updates" description="Major announcements and release notes" density="spacious" />
      <XDSItem startContent={<XDSIcon icon={ChatBubbleLeftIcon} size="sm" />} label="Team messages" description="Direct messages, mentions, and thread replies" endContent={<XDSBadge label="4" />} density="spacious" />
    </XDSStack>
}`,...d.parameters?.docs?.source},description:{story:"Spacious item rows for roomy layouts.",...d.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function FileBrowserStory() {
    const [selected, setSelected] = useState<Set<string>>(new Set(['doc1']));
    const toggle = (id: string) => setSelected(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
    return <XDSStack gap={0}>
        <XDSItem startContent={<XDSIcon icon={DocumentIcon} size="sm" />} label="design-spec.pdf" description="Modified 2 hours ago" endContent={<XDSText color="secondary">2.4 MB</XDSText>} isSelected={selected.has('doc1')} onClick={() => toggle('doc1')} />
        <XDSItem startContent={<XDSIcon icon={DocumentIcon} size="sm" />} label="architecture-diagram.png" description="Modified yesterday" endContent={<XDSText color="secondary">1.2 MB</XDSText>} isSelected={selected.has('doc2')} onClick={() => toggle('doc2')} />
        <XDSItem startContent={<XDSIcon icon={DocumentIcon} size="sm" />} label="meeting-notes.md" description="Modified 3 days ago" endContent={<XDSText color="secondary">48 KB</XDSText>} isSelected={selected.has('doc3')} onClick={() => toggle('doc3')} />
      </XDSStack>;
  }
}`,...l.parameters?.docs?.source},description:{story:"File browser with selection state.",...l.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <XDSStack gap={0}>
      <XDSItem startContent={<XDSIcon icon={MagnifyingGlassIcon} size="sm" />} label={<>
            XDS <b>Button</b> Component
          </>} description="Primary interactive element for triggering actions..." descriptionLines={1} href="/docs/button" />
      <XDSItem startContent={<XDSIcon icon={MagnifyingGlassIcon} size="sm" />} label={<>
            XDS <b>Button</b>Group
          </>} description="Groups related buttons into a single connected control..." descriptionLines={1} href="/docs/button-group" />
    </XDSStack>
}`,...m.parameters?.docs?.source},description:{story:"Search results with highlighted terms and links.",...m.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <XDSStack gap={0}>
      <XDSItem startContent={<XDSIcon icon={UserIcon} size="sm" />} label="Active item" description="This item is interactive" onClick={() => {}} />
      <XDSItem startContent={<XDSIcon icon={UserIcon} size="sm" />} label="Disabled item" description="This item cannot be interacted with" onClick={() => {}} isDisabled />
    </XDSStack>
}`,...p.parameters?.docs?.source},description:{story:"Disabled items.",...p.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <XDSItem align="start" startContent={<XDSAvatar name="Alice" size={40} />} label="Alice Johnson" description="This is a longer description that wraps across multiple lines to demonstrate the align=start behavior, which positions the start and end content at the top rather than vertically centering them." endContent={<XDSText color="secondary">Just now</XDSText>} />
}`,...S.parameters?.docs?.source},description:{story:"Top-aligned layout for multi-line content.",...S.parameters?.docs?.description}}};const U=["Default","ContactList","Notifications","CompactMenu","SpaciousRows","FileBrowser","SearchResults","Disabled","AlignStart"];export{S as AlignStart,c as CompactMenu,i as ContactList,r as Default,p as Disabled,l as FileBrowser,a as Notifications,m as SearchResults,d as SpaciousRows,U as __namedExportsOrder,q as default};
