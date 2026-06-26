import{ad as e,X as D}from"./iframe-yRFQ_7VC.js";import{X as o}from"./XDSMoreMenu-DkYzPpgO.js";import{F as S}from"./Cog6ToothIcon-FIJug-Ow.js";import{F as l}from"./PencilIcon-GJY0QtnV.js";import{F as C}from"./ArrowDownTrayIcon-o6t8q26T.js";import{F as k}from"./ShareIcon-bWFHrdZW.js";import{F as n}from"./TrashIcon-DrwV1FEw.js";import{F as g}from"./DocumentDuplicateIcon-kW_LbK2a.js";import"./preload-helper-Ct5FWWRu.js";import"./XDSDropdownMenu-DeTeBdvZ.js";import"./useXDSPopover-ChRJmaAz.js";import"./renderXDSDropdownItems-CPOL76aE.js";import"./XDSDivider-CD2fc5JP.js";import"./XDSItem-CTSSy95c.js";import"./computeTargetAndRel-BlG0ENK0.js";import"./useListFocus-C2Hg4nex.js";const W={title:"Core/MoreMenu",component:o,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{items:{description:"Menu items (items, dividers, or sections)"},label:{control:"text",description:"Accessible label for the trigger button"},variant:{control:"select",options:["primary","secondary","ghost","destructive"],description:"Visual style variant of the trigger button"},size:{control:"select",options:["sm","md","lg"],description:"Size of the trigger button"},isDisabled:{control:"boolean",description:"Whether the menu trigger is disabled"},"data-testid":{control:"text",description:"Test ID for testing frameworks"}}},i={render:()=>e.jsx(o,{items:[{label:"Edit",onClick:()=>console.log("Edit clicked")},{label:"Duplicate",onClick:()=>console.log("Duplicate clicked")},{label:"Delete",onClick:()=>console.log("Delete clicked")}]})},t={render:()=>e.jsx(o,{items:[{label:"Edit",icon:l,onClick:()=>console.log("Edit")},{label:"Duplicate",icon:g,onClick:()=>console.log("Duplicate")},{label:"Download",icon:C,onClick:()=>console.log("Download")},{label:"Share",icon:k,onClick:()=>console.log("Share")}]})},c={render:()=>e.jsx(o,{items:[{label:"Edit",icon:l,onClick:()=>console.log("Edit")},{label:"Duplicate",icon:g,onClick:()=>console.log("Duplicate")},{type:"divider"},{label:"Delete",icon:n,onClick:()=>console.log("Delete")}]})},r={render:()=>e.jsx(o,{label:"Document actions",items:[{type:"section",title:"Actions",items:[{label:"Edit",icon:l,onClick:()=>console.log("Edit")},{label:"Duplicate",icon:g,onClick:()=>console.log("Duplicate")}]},{type:"section",title:"Danger zone",items:[{label:"Delete",icon:n,onClick:()=>console.log("Delete")}]}]})},s={render:()=>e.jsx(o,{size:"sm",label:"Row actions",items:[{label:"Edit",icon:l,onClick:()=>console.log("Edit")},{type:"divider"},{label:"Delete",icon:n,onClick:()=>console.log("Delete")}]})},a={render:()=>e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[e.jsx(o,{variant:"ghost",label:"Ghost variant",items:[{label:"Action",onClick:()=>{}}]}),e.jsx(o,{variant:"secondary",label:"Secondary variant",items:[{label:"Action",onClick:()=>{}}]}),e.jsx(o,{variant:"primary",label:"Primary variant",items:[{label:"Action",onClick:()=>{}}]})]})},d={render:()=>e.jsx(o,{isDisabled:!0,items:[{label:"Edit",onClick:()=>console.log("Edit")},{label:"Delete",onClick:()=>console.log("Delete")}]})},m={render:()=>e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[e.jsx(D,{label:"Save",variant:"primary",onClick:()=>{}}),e.jsx(D,{label:"Preview",variant:"secondary",onClick:()=>{}}),e.jsx(o,{label:"More actions",items:[{label:"Export",icon:C,onClick:()=>console.log("Export")},{label:"Share",icon:k,onClick:()=>console.log("Share")},{type:"divider"},{label:"Delete",icon:n,onClick:()=>console.log("Delete")}]})]})},p={render:()=>e.jsx(o,{label:"User actions",items:[{label:"Alice Johnson",onClick:()=>console.log("Alice")},{label:"Bob Smith",onClick:()=>console.log("Bob")},{label:"Carol Williams",onClick:()=>console.log("Carol")}]})},b={render:()=>e.jsx(o,{items:[{label:"Edit",icon:l,onClick:()=>console.log("Edit")},{label:"Duplicate",icon:g,onClick:()=>console.log("Duplicate"),isDisabled:!0},{type:"divider"},{label:"Delete",icon:n,onClick:()=>console.log("Delete"),isDisabled:!0}]})},u={render:()=>e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[e.jsx(o,{icon:e.jsx(S,{}),label:"Settings",items:[{label:"Preferences",onClick:()=>console.log("Preferences")},{label:"Account",onClick:()=>console.log("Account")},{label:"Logout",onClick:()=>console.log("Logout")}]}),e.jsx(o,{icon:e.jsx(l,{}),label:"Edit options",items:[{label:"Edit title",onClick:()=>console.log("Edit title")},{label:"Edit description",onClick:()=>console.log("Edit description")}]})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <XDSMoreMenu items={[{
    label: 'Edit',
    onClick: () => console.log('Edit clicked')
  }, {
    label: 'Duplicate',
    onClick: () => console.log('Duplicate clicked')
  }, {
    label: 'Delete',
    onClick: () => console.log('Delete clicked')
  }]} />
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <XDSMoreMenu items={[{
    label: 'Edit',
    icon: PencilIcon,
    onClick: () => console.log('Edit')
  }, {
    label: 'Duplicate',
    icon: DocumentDuplicateIcon,
    onClick: () => console.log('Duplicate')
  }, {
    label: 'Download',
    icon: ArrowDownTrayIcon,
    onClick: () => console.log('Download')
  }, {
    label: 'Share',
    icon: ShareIcon,
    onClick: () => console.log('Share')
  }]} />
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <XDSMoreMenu items={[{
    label: 'Edit',
    icon: PencilIcon,
    onClick: () => console.log('Edit')
  }, {
    label: 'Duplicate',
    icon: DocumentDuplicateIcon,
    onClick: () => console.log('Duplicate')
  }, {
    type: 'divider'
  }, {
    label: 'Delete',
    icon: TrashIcon,
    onClick: () => console.log('Delete')
  }]} />
}`,...c.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <XDSMoreMenu label="Document actions" items={[{
    type: 'section',
    title: 'Actions',
    items: [{
      label: 'Edit',
      icon: PencilIcon,
      onClick: () => console.log('Edit')
    }, {
      label: 'Duplicate',
      icon: DocumentDuplicateIcon,
      onClick: () => console.log('Duplicate')
    }]
  }, {
    type: 'section',
    title: 'Danger zone',
    items: [{
      label: 'Delete',
      icon: TrashIcon,
      onClick: () => console.log('Delete')
    }]
  }]} />
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <XDSMoreMenu size="sm" label="Row actions" items={[{
    label: 'Edit',
    icon: PencilIcon,
    onClick: () => console.log('Edit')
  }, {
    type: 'divider'
  }, {
    label: 'Delete',
    icon: TrashIcon,
    onClick: () => console.log('Delete')
  }]} />
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 16,
    alignItems: 'center'
  }}>
      <XDSMoreMenu variant="ghost" label="Ghost variant" items={[{
      label: 'Action',
      onClick: () => {}
    }]} />
      <XDSMoreMenu variant="secondary" label="Secondary variant" items={[{
      label: 'Action',
      onClick: () => {}
    }]} />
      <XDSMoreMenu variant="primary" label="Primary variant" items={[{
      label: 'Action',
      onClick: () => {}
    }]} />
    </div>
}`,...a.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <XDSMoreMenu isDisabled items={[{
    label: 'Edit',
    onClick: () => console.log('Edit')
  }, {
    label: 'Delete',
    onClick: () => console.log('Delete')
  }]} />
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 8,
    alignItems: 'center'
  }}>
      <XDSButton label="Save" variant="primary" onClick={() => {}} />
      <XDSButton label="Preview" variant="secondary" onClick={() => {}} />
      <XDSMoreMenu label="More actions" items={[{
      label: 'Export',
      icon: ArrowDownTrayIcon,
      onClick: () => console.log('Export')
    }, {
      label: 'Share',
      icon: ShareIcon,
      onClick: () => console.log('Share')
    }, {
      type: 'divider'
    }, {
      label: 'Delete',
      icon: TrashIcon,
      onClick: () => console.log('Delete')
    }]} />
    </div>
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <XDSMoreMenu label="User actions" items={[{
    label: 'Alice Johnson',
    onClick: () => console.log('Alice')
  }, {
    label: 'Bob Smith',
    onClick: () => console.log('Bob')
  }, {
    label: 'Carol Williams',
    onClick: () => console.log('Carol')
  }]} />
}`,...p.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <XDSMoreMenu items={[{
    label: 'Edit',
    icon: PencilIcon,
    onClick: () => console.log('Edit')
  }, {
    label: 'Duplicate',
    icon: DocumentDuplicateIcon,
    onClick: () => console.log('Duplicate'),
    isDisabled: true
  }, {
    type: 'divider'
  }, {
    label: 'Delete',
    icon: TrashIcon,
    onClick: () => console.log('Delete'),
    isDisabled: true
  }]} />
}`,...b.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 16,
    alignItems: 'center'
  }}>
      <XDSMoreMenu icon={<Cog6ToothIcon />} label="Settings" items={[{
      label: 'Preferences',
      onClick: () => console.log('Preferences')
    }, {
      label: 'Account',
      onClick: () => console.log('Account')
    }, {
      label: 'Logout',
      onClick: () => console.log('Logout')
    }]} />
      <XDSMoreMenu icon={<PencilIcon />} label="Edit options" items={[{
      label: 'Edit title',
      onClick: () => console.log('Edit title')
    }, {
      label: 'Edit description',
      onClick: () => console.log('Edit description')
    }]} />
    </div>
}`,...u.parameters?.docs?.source}}};const z=["Default","WithIcons","WithDividers","WithSections","SmallSize","Variants","Disabled","InToolbar","CustomItemRendering","WithDisabledItems","CustomIcon"];export{u as CustomIcon,p as CustomItemRendering,i as Default,d as Disabled,m as InToolbar,s as SmallSize,a as Variants,b as WithDisabledItems,c as WithDividers,t as WithIcons,r as WithSections,z as __namedExportsOrder,W as default};
