import{at as r,ad as e,B as o,F as h,I as j,h as g}from"./iframe-BsyQNsjg.js";import{B as t}from"./ButtonGroup-Cyq2pVFW.js";import{I as y}from"./IconButton-CmmhIvF_.js";import{F as I,a as v}from"./ScissorsIcon-Cb9sR_ZW.js";import{F as f,a as w,b as S}from"./UnderlineIcon-CXk43j-2.js";import"./preload-helper-Ct5FWWRu.js";import"./useListFocus-CT4wLc1j.js";function z({title:s,titleId:a,...x},B){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:B,"aria-labelledby":a},x),s?r.createElement("title",{id:a},s):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"}))}const C=r.forwardRef(z);function G({title:s,titleId:a,...x},B){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:B,"aria-labelledby":a},x),s?r.createElement("title",{id:a},s):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3"}))}const R=r.forwardRef(G),L={title:"Core/ButtonGroup",component:t,tags:["autodocs"],argTypes:{orientation:{control:"select",options:["horizontal","vertical"]},size:{control:"select",options:["sm","md","lg"]}}},n={width:16,height:16},i={render:()=>e.jsxs(t,{label:"Clipboard actions",children:[e.jsx(o,{label:"Copy",icon:e.jsx(h,{style:n})}),e.jsx(o,{label:"Cut",icon:e.jsx(I,{style:n})}),e.jsx(o,{label:"Paste",icon:e.jsx(v,{style:n})})]})},l={render:()=>e.jsxs(t,{label:"Actions",orientation:"vertical",children:[e.jsx(o,{label:"Copy"}),e.jsx(o,{label:"Cut"}),e.jsx(o,{label:"Paste"})]})},c={render:()=>e.jsxs(t,{label:"Text formatting",children:[e.jsx(y,{label:"Bold",icon:e.jsx(j,{icon:f,size:"sm"})}),e.jsx(y,{label:"Italic",icon:e.jsx(j,{icon:w,size:"sm"})}),e.jsx(y,{label:"Underline",icon:e.jsx(j,{icon:S,size:"sm"})})]})},p={render:()=>e.jsxs(t,{label:"History",children:[e.jsx(o,{label:"Undo",variant:"ghost",icon:e.jsx(C,{style:n}),isIconOnly:!0}),e.jsx(o,{label:"Redo",variant:"ghost",icon:e.jsx(R,{style:n}),isIconOnly:!0})]})},d={render:()=>e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[e.jsxs(t,{label:"Small actions",size:"sm",children:[e.jsx(o,{label:"Copy"}),e.jsx(o,{label:"Paste"})]}),e.jsxs(t,{label:"Medium actions",size:"md",children:[e.jsx(o,{label:"Copy"}),e.jsx(o,{label:"Paste"})]}),e.jsxs(t,{label:"Large actions",size:"lg",children:[e.jsx(o,{label:"Copy"}),e.jsx(o,{label:"Paste"})]})]})},u={render:()=>e.jsxs(t,{label:"Save options",children:[e.jsx(o,{label:"Save",variant:"primary"}),e.jsx(o,{label:"Save options",variant:"primary",icon:e.jsx(g,{style:n}),isIconOnly:!0})]})},m={render:()=>e.jsxs(t,{label:"Merge options",children:[e.jsx(o,{label:"Merge pull request",variant:"primary"}),e.jsx(o,{label:"More merge options",variant:"primary",icon:e.jsx(g,{style:n}),isIconOnly:!0})]})},b={render:()=>e.jsxs(t,{label:"Edit actions",children:[e.jsx(o,{label:"Edit"}),e.jsx(y,{label:"More options",icon:e.jsx(g,{style:n})})]})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <ButtonGroup label="Clipboard actions">
      <Button label="Copy" icon={<ClipboardDocumentIcon style={iconSize} />} />
      <Button label="Cut" icon={<ScissorsIcon style={iconSize} />} />
      <Button label="Paste" icon={<ClipboardIcon style={iconSize} />} />
    </ButtonGroup>
}`,...i.parameters?.docs?.source},description:{story:"Basic horizontal button group with text buttons.",...i.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <ButtonGroup label="Actions" orientation="vertical">
      <Button label="Copy" />
      <Button label="Cut" />
      <Button label="Paste" />
    </ButtonGroup>
}`,...l.parameters?.docs?.source},description:{story:"Vertical button group.",...l.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <ButtonGroup label="Text formatting">
      <IconButton label="Bold" icon={<Icon icon={BoldIcon} size="sm" />} />
      <IconButton label="Italic" icon={<Icon icon={ItalicIcon} size="sm" />} />
      <IconButton label="Underline" icon={<Icon icon={UnderlineIcon} size="sm" />} />
    </ButtonGroup>
}`,...c.parameters?.docs?.source},description:{story:"Icon-only button group for compact toolbars.",...c.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <ButtonGroup label="History">
      <Button label="Undo" variant="ghost" icon={<ArrowUturnLeftIcon style={iconSize} />} isIconOnly />
      <Button label="Redo" variant="ghost" icon={<ArrowUturnRightIcon style={iconSize} />} isIconOnly />
    </ButtonGroup>
}`,...p.parameters?.docs?.source},description:{story:"Undo/redo pair with ghost variant.",...p.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 16,
    alignItems: 'center'
  }}>
      <ButtonGroup label="Small actions" size="sm">
        <Button label="Copy" />
        <Button label="Paste" />
      </ButtonGroup>
      <ButtonGroup label="Medium actions" size="md">
        <Button label="Copy" />
        <Button label="Paste" />
      </ButtonGroup>
      <ButtonGroup label="Large actions" size="lg">
        <Button label="Copy" />
        <Button label="Paste" />
      </ButtonGroup>
    </div>
}`,...d.parameters?.docs?.source},description:{story:"All three sizes side by side.",...d.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <ButtonGroup label="Save options">
      <Button label="Save" variant="primary" />
      <Button label="Save options" variant="primary" icon={<ChevronDownIcon style={iconSize} />} isIconOnly />
    </ButtonGroup>
}`,...u.parameters?.docs?.source},description:{story:"Primary variant button group.",...u.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <ButtonGroup label="Merge options">
      <Button label="Merge pull request" variant="primary" />
      <Button label="More merge options" variant="primary" icon={<ChevronDownIcon style={iconSize} />} isIconOnly />
    </ButtonGroup>
}`,...m.parameters?.docs?.source},description:{story:"Two-button group (common split button pattern).",...m.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <ButtonGroup label="Edit actions">
      <Button label="Edit" />
      <IconButton label="More options" icon={<ChevronDownIcon style={iconSize} />} />
    </ButtonGroup>
}`,...b.parameters?.docs?.source},description:{story:"Mixed button and icon button children.",...b.parameters?.docs?.description}}};const $=["Horizontal","Vertical","IconOnly","GhostPair","Sizes","PrimaryVariant","SplitButton","Mixed"];export{p as GhostPair,i as Horizontal,c as IconOnly,b as Mixed,u as PrimaryVariant,d as Sizes,m as SplitButton,l as Vertical,$ as __namedExportsOrder,L as default};
