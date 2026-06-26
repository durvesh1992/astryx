import{at as r,ad as e,X as o,F as X,m as B,g as D}from"./iframe-yRFQ_7VC.js";import{X as t}from"./XDSButtonGroup-D5T1rKQT.js";import{X as S}from"./XDSIconButton-qQNkmkAZ.js";import{F as j,a as g}from"./ScissorsIcon-1G5U6IjF.js";import{F as h,a as I,b as v}from"./UnderlineIcon-DCt4Fon3.js";import"./preload-helper-Ct5FWWRu.js";import"./useListFocus-C2Hg4nex.js";function f({title:s,titleId:a,...y},x){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:x,"aria-labelledby":a},y),s?r.createElement("title",{id:a},s):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"}))}const w=r.forwardRef(f);function z({title:s,titleId:a,...y},x){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:x,"aria-labelledby":a},y),s?r.createElement("title",{id:a},s):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3"}))}const C=r.forwardRef(z),U={title:"Core/ButtonGroup",component:t,tags:["autodocs"],argTypes:{orientation:{control:"select",options:["horizontal","vertical"]},size:{control:"select",options:["sm","md","lg"]}}},n={width:16,height:16},i={render:()=>e.jsxs(t,{label:"Clipboard actions",children:[e.jsx(o,{label:"Copy",icon:e.jsx(X,{style:n})}),e.jsx(o,{label:"Cut",icon:e.jsx(j,{style:n})}),e.jsx(o,{label:"Paste",icon:e.jsx(g,{style:n})})]})},l={render:()=>e.jsxs(t,{label:"Actions",orientation:"vertical",children:[e.jsx(o,{label:"Copy"}),e.jsx(o,{label:"Cut"}),e.jsx(o,{label:"Paste"})]})},c={render:()=>e.jsxs(t,{label:"Text formatting",children:[e.jsx(S,{label:"Bold",icon:e.jsx(B,{icon:h,size:"sm"})}),e.jsx(S,{label:"Italic",icon:e.jsx(B,{icon:I,size:"sm"})}),e.jsx(S,{label:"Underline",icon:e.jsx(B,{icon:v,size:"sm"})})]})},p={render:()=>e.jsxs(t,{label:"History",children:[e.jsx(o,{label:"Undo",variant:"ghost",icon:e.jsx(w,{style:n}),isIconOnly:!0}),e.jsx(o,{label:"Redo",variant:"ghost",icon:e.jsx(C,{style:n}),isIconOnly:!0})]})},d={render:()=>e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[e.jsxs(t,{label:"Small actions",size:"sm",children:[e.jsx(o,{label:"Copy"}),e.jsx(o,{label:"Paste"})]}),e.jsxs(t,{label:"Medium actions",size:"md",children:[e.jsx(o,{label:"Copy"}),e.jsx(o,{label:"Paste"})]}),e.jsxs(t,{label:"Large actions",size:"lg",children:[e.jsx(o,{label:"Copy"}),e.jsx(o,{label:"Paste"})]})]})},u={render:()=>e.jsxs(t,{label:"Save options",children:[e.jsx(o,{label:"Save",variant:"primary"}),e.jsx(o,{label:"Save options",variant:"primary",icon:e.jsx(D,{style:n}),isIconOnly:!0})]})},m={render:()=>e.jsxs(t,{label:"Merge options",children:[e.jsx(o,{label:"Merge pull request",variant:"primary"}),e.jsx(o,{label:"More merge options",variant:"primary",icon:e.jsx(D,{style:n}),isIconOnly:!0})]})},b={render:()=>e.jsxs(t,{label:"Edit actions",children:[e.jsx(o,{label:"Edit"}),e.jsx(S,{label:"More options",icon:e.jsx(D,{style:n})})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <XDSButtonGroup label="Clipboard actions">
      <XDSButton label="Copy" icon={<ClipboardDocumentIcon style={iconSize} />} />
      <XDSButton label="Cut" icon={<ScissorsIcon style={iconSize} />} />
      <XDSButton label="Paste" icon={<ClipboardIcon style={iconSize} />} />
    </XDSButtonGroup>
}`,...i.parameters?.docs?.source},description:{story:"Basic horizontal button group with text buttons.",...i.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <XDSButtonGroup label="Actions" orientation="vertical">
      <XDSButton label="Copy" />
      <XDSButton label="Cut" />
      <XDSButton label="Paste" />
    </XDSButtonGroup>
}`,...l.parameters?.docs?.source},description:{story:"Vertical button group.",...l.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <XDSButtonGroup label="Text formatting">
      <XDSIconButton label="Bold" icon={<XDSIcon icon={BoldIcon} size="sm" />} />
      <XDSIconButton label="Italic" icon={<XDSIcon icon={ItalicIcon} size="sm" />} />
      <XDSIconButton label="Underline" icon={<XDSIcon icon={UnderlineIcon} size="sm" />} />
    </XDSButtonGroup>
}`,...c.parameters?.docs?.source},description:{story:"Icon-only button group for compact toolbars.",...c.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <XDSButtonGroup label="History">
      <XDSButton label="Undo" variant="ghost" icon={<ArrowUturnLeftIcon style={iconSize} />} isIconOnly />
      <XDSButton label="Redo" variant="ghost" icon={<ArrowUturnRightIcon style={iconSize} />} isIconOnly />
    </XDSButtonGroup>
}`,...p.parameters?.docs?.source},description:{story:"Undo/redo pair with ghost variant.",...p.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 16,
    alignItems: 'center'
  }}>
      <XDSButtonGroup label="Small actions" size="sm">
        <XDSButton label="Copy" />
        <XDSButton label="Paste" />
      </XDSButtonGroup>
      <XDSButtonGroup label="Medium actions" size="md">
        <XDSButton label="Copy" />
        <XDSButton label="Paste" />
      </XDSButtonGroup>
      <XDSButtonGroup label="Large actions" size="lg">
        <XDSButton label="Copy" />
        <XDSButton label="Paste" />
      </XDSButtonGroup>
    </div>
}`,...d.parameters?.docs?.source},description:{story:"All three sizes side by side.",...d.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <XDSButtonGroup label="Save options">
      <XDSButton label="Save" variant="primary" />
      <XDSButton label="Save options" variant="primary" icon={<ChevronDownIcon style={iconSize} />} isIconOnly />
    </XDSButtonGroup>
}`,...u.parameters?.docs?.source},description:{story:"Primary variant button group.",...u.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <XDSButtonGroup label="Merge options">
      <XDSButton label="Merge pull request" variant="primary" />
      <XDSButton label="More merge options" variant="primary" icon={<ChevronDownIcon style={iconSize} />} isIconOnly />
    </XDSButtonGroup>
}`,...m.parameters?.docs?.source},description:{story:"Two-button group (common split button pattern).",...m.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <XDSButtonGroup label="Edit actions">
      <XDSButton label="Edit" />
      <XDSIconButton label="More options" icon={<ChevronDownIcon style={iconSize} />} />
    </XDSButtonGroup>
}`,...b.parameters?.docs?.source},description:{story:"Mixed button and icon button children.",...b.parameters?.docs?.description}}};const k=["Horizontal","Vertical","IconOnly","GhostPair","Sizes","PrimaryVariant","SplitButton","Mixed"];export{p as GhostPair,i as Horizontal,c as IconOnly,b as Mixed,u as PrimaryVariant,d as Sizes,m as SplitButton,l as Vertical,k as __namedExportsOrder,U as default};
