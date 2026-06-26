import{ad as e,X as s,at as S}from"./iframe-yRFQ_7VC.js";import{X as a}from"./XDSOverflowList-BEwGV0C7.js";import{X as l}from"./XDSBadge-COTe2g1g.js";import{X as x}from"./XDSDropdownMenu-DeTeBdvZ.js";import{X as u}from"./XDSTextInput-C1ju8zVt.js";import"./preload-helper-Ct5FWWRu.js";import"./useXDSPopover-ChRJmaAz.js";import"./renderXDSDropdownItems-CPOL76aE.js";import"./XDSDivider-CD2fc5JP.js";import"./XDSItem-CTSSy95c.js";import"./computeTargetAndRel-BlG0ENK0.js";import"./useListFocus-C2Hg4nex.js";import"./XDSField-COi97ivg.js";import"./XDSFieldStatus-BgnciRVy.js";import"./inputStyles.stylex-BIqXE6lP.js";import"./groupStyles-BZhxclV-.js";import"./useInputContainer-DjJ5nP5w.js";import"./useClickableContainer-B3IEmxS8.js";const k={title:"Core/OverflowList",component:a,tags:["autodocs"],argTypes:{gap:{control:{type:"number",min:0,max:10},description:"Gap between items as a spacing token step (0, 0.5, 1, 1.5, 2, 3, 4, 5, 6, 8, 10)"},minVisibleItems:{control:{type:"number",min:0,max:10},description:"Minimum number of items to always show"},collapseFrom:{control:"select",options:["start","end"],description:"Which end to collapse items from"}}},o={render:()=>e.jsx("div",{style:{maxWidth:400,border:"1px dashed #ccc",padding:8},children:e.jsxs(a,{gap:2,overflowRenderer:t=>e.jsx(s,{label:`+${t.length} more`,variant:"ghost",size:"sm"}),children:[e.jsx(s,{label:"Edit",size:"sm"}),e.jsx(s,{label:"Duplicate",size:"sm"}),e.jsx(s,{label:"Share",size:"sm"}),e.jsx(s,{label:"Archive",size:"sm"}),e.jsx(s,{label:"Delete",size:"sm"})]})})},n={render:()=>e.jsx("div",{style:{resize:"horizontal",overflow:"hidden",border:"1px dashed #ccc",padding:8,width:500,minWidth:100,maxWidth:"100%"},children:e.jsxs(a,{gap:2,overflowRenderer:t=>e.jsx(s,{label:`+${t.length} more`,variant:"ghost",size:"sm"}),children:[e.jsx(s,{label:"Dashboard",size:"sm"}),e.jsx(s,{label:"Analytics",size:"sm"}),e.jsx(s,{label:"Reports",size:"sm"}),e.jsx(s,{label:"Settings",size:"sm"}),e.jsx(s,{label:"Users",size:"sm"}),e.jsx(s,{label:"Billing",size:"sm"}),e.jsx(s,{label:"Integrations",size:"sm"})]})})},d={render:()=>e.jsx("div",{style:{maxWidth:600,border:"1px dashed #ccc",padding:8},children:e.jsxs(a,{gap:2,overflowRenderer:t=>e.jsx(s,{label:`+${t.length} more`,variant:"ghost",size:"sm"}),children:[e.jsx(s,{label:"Edit",size:"sm"}),e.jsx(s,{label:"Save",size:"sm"})]})})},m={render:()=>e.jsx("div",{style:{resize:"horizontal",overflow:"hidden",border:"1px dashed #ccc",padding:8,width:300,minWidth:80},children:e.jsxs(a,{gap:1,overflowRenderer:t=>e.jsx(l,{variant:"neutral",label:`+${t.length}`}),children:[e.jsx(l,{variant:"info",label:"React"}),e.jsx(l,{variant:"success",label:"TypeScript"}),e.jsx(l,{variant:"warning",label:"StyleX"}),e.jsx(l,{variant:"neutral",label:"Storybook"}),e.jsx(l,{variant:"error",label:"Vitest"})]})})},c={render:()=>e.jsx("div",{style:{maxWidth:300,border:"1px dashed #ccc",padding:8},children:e.jsxs(a,{gap:2,collapseFrom:"start",overflowRenderer:t=>e.jsx(s,{label:`+${t.length} more`,variant:"ghost",size:"sm"}),children:[e.jsx(s,{label:"Step 1",size:"sm"}),e.jsx(s,{label:"Step 2",size:"sm"}),e.jsx(s,{label:"Step 3",size:"sm"}),e.jsx(s,{label:"Step 4",size:"sm"}),e.jsx(s,{label:"Step 5",size:"sm"})]})})},p={render:()=>{const t=["Save","Edit","Duplicate","Share","Archive","Delete"];return e.jsx("div",{style:{resize:"horizontal",overflow:"hidden",border:"1px dashed #ccc",padding:8,width:350,minWidth:100,maxWidth:"100%"},children:e.jsxs(a,{gap:2,overflowRenderer:i=>e.jsx(x,{button:{label:`+${i.length}`,variant:"ghost",size:"sm"},items:i.map(({index:r})=>({label:t[r],onClick:()=>console.log(t[r])}))}),children:[e.jsx(s,{label:"Save",size:"sm",variant:"primary"}),e.jsx(s,{label:"Edit",size:"sm"}),e.jsx(s,{label:"Duplicate",size:"sm"}),e.jsx(s,{label:"Share",size:"sm"}),e.jsx(s,{label:"Archive",size:"sm"}),e.jsx(s,{label:"Delete",size:"sm",variant:"destructive"})]})})}},h={render:()=>{const[t,i]=S.useState("");return e.jsx("div",{style:{resize:"horizontal",overflow:"hidden",border:"1px dashed #ccc",minWidth:100,width:600},children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center",gap:8,padding:8,height:44},children:[e.jsxs(a,{gap:2,behavior:"observeParent",overflowRenderer:r=>e.jsx(s,{label:`+${r.length} more`,variant:"ghost",size:"sm"}),children:[e.jsx(s,{label:"Dashboard",size:"sm"}),e.jsx(s,{label:"Analytics",size:"sm"}),e.jsx(s,{label:"Reports",size:"sm"}),e.jsx(s,{label:"Settings",size:"sm"}),e.jsx(s,{label:"Users",size:"sm"}),e.jsx(s,{label:"Billing",size:"sm"})]}),e.jsx("div",{style:{width:70,flexShrink:0},children:e.jsx(u,{label:"Search",isLabelHidden:!0,placeholder:"Search...",size:"sm",value:t,onChange:i})})]})})}},v={render:()=>{const[t,i]=S.useState(5);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[e.jsx(s,{label:"Remove",size:"sm",onClick:()=>i(r=>Math.max(1,r-1))}),e.jsx(s,{label:"Add",size:"sm",onClick:()=>i(r=>r+1)}),e.jsxs("span",{children:[t," items"]})]}),e.jsx("div",{style:{resize:"horizontal",overflow:"hidden",border:"1px dashed #ccc",padding:8,width:400,minWidth:100,maxWidth:"100%"},children:e.jsx(a,{gap:2,overflowRenderer:r=>e.jsx(s,{label:`+${r.length} more`,variant:"ghost",size:"sm"}),children:Array.from({length:t},(r,b)=>e.jsx(s,{label:`Item ${b+1}`,size:"sm"},b))})})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 400,
    border: '1px dashed #ccc',
    padding: 8
  }}>
      <XDSOverflowList gap={2} overflowRenderer={overflowItems => <XDSButton label={\`+\${overflowItems.length} more\`} variant="ghost" size="sm" />}>
        <XDSButton label="Edit" size="sm" />
        <XDSButton label="Duplicate" size="sm" />
        <XDSButton label="Share" size="sm" />
        <XDSButton label="Archive" size="sm" />
        <XDSButton label="Delete" size="sm" />
      </XDSOverflowList>
    </div>
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    resize: 'horizontal',
    overflow: 'hidden',
    border: '1px dashed #ccc',
    padding: 8,
    width: 500,
    minWidth: 100,
    maxWidth: '100%'
  }}>
      <XDSOverflowList gap={2} overflowRenderer={overflowItems => <XDSButton label={\`+\${overflowItems.length} more\`} variant="ghost" size="sm" />}>
        <XDSButton label="Dashboard" size="sm" />
        <XDSButton label="Analytics" size="sm" />
        <XDSButton label="Reports" size="sm" />
        <XDSButton label="Settings" size="sm" />
        <XDSButton label="Users" size="sm" />
        <XDSButton label="Billing" size="sm" />
        <XDSButton label="Integrations" size="sm" />
      </XDSOverflowList>
    </div>
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 600,
    border: '1px dashed #ccc',
    padding: 8
  }}>
      <XDSOverflowList gap={2} overflowRenderer={overflowItems => <XDSButton label={\`+\${overflowItems.length} more\`} variant="ghost" size="sm" />}>
        <XDSButton label="Edit" size="sm" />
        <XDSButton label="Save" size="sm" />
      </XDSOverflowList>
    </div>
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    resize: 'horizontal',
    overflow: 'hidden',
    border: '1px dashed #ccc',
    padding: 8,
    width: 300,
    minWidth: 80
  }}>
      <XDSOverflowList gap={1} overflowRenderer={overflowItems => <XDSBadge variant="neutral" label={\`+\${overflowItems.length}\`} />}>
        <XDSBadge variant="info" label="React" />
        <XDSBadge variant="success" label="TypeScript" />
        <XDSBadge variant="warning" label="StyleX" />
        <XDSBadge variant="neutral" label="Storybook" />
        <XDSBadge variant="error" label="Vitest" />
      </XDSOverflowList>
    </div>
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: 300,
    border: '1px dashed #ccc',
    padding: 8
  }}>
      <XDSOverflowList gap={2} collapseFrom="start" overflowRenderer={overflowItems => <XDSButton label={\`+\${overflowItems.length} more\`} variant="ghost" size="sm" />}>
        <XDSButton label="Step 1" size="sm" />
        <XDSButton label="Step 2" size="sm" />
        <XDSButton label="Step 3" size="sm" />
        <XDSButton label="Step 4" size="sm" />
        <XDSButton label="Step 5" size="sm" />
      </XDSOverflowList>
    </div>
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const actions = ['Save', 'Edit', 'Duplicate', 'Share', 'Archive', 'Delete'];
    return <div style={{
      resize: 'horizontal',
      overflow: 'hidden',
      border: '1px dashed #ccc',
      padding: 8,
      width: 350,
      minWidth: 100,
      maxWidth: '100%'
    }}>
        <XDSOverflowList gap={2} overflowRenderer={overflowItems => <XDSDropdownMenu button={{
        label: \`+\${overflowItems.length}\`,
        variant: 'ghost',
        size: 'sm'
      }} items={overflowItems.map(({
        index
      }) => ({
        label: actions[index],
        onClick: () => console.log(actions[index])
      }))} />}>
          <XDSButton label="Save" size="sm" variant="primary" />
          <XDSButton label="Edit" size="sm" />
          <XDSButton label="Duplicate" size="sm" />
          <XDSButton label="Share" size="sm" />
          <XDSButton label="Archive" size="sm" />
          <XDSButton label="Delete" size="sm" variant="destructive" />
        </XDSOverflowList>
      </div>;
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [search, setSearch] = useState('');
    return <div style={{
      resize: 'horizontal',
      overflow: 'hidden',
      border: '1px dashed #ccc',
      minWidth: 100,
      width: 600
    }}>
        <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: 8,
        padding: 8,
        height: 44
      }}>
          <XDSOverflowList gap={2} behavior="observeParent" overflowRenderer={overflowItems => <XDSButton label={\`+\${overflowItems.length} more\`} variant="ghost" size="sm" />}>
            <XDSButton label="Dashboard" size="sm" />
            <XDSButton label="Analytics" size="sm" />
            <XDSButton label="Reports" size="sm" />
            <XDSButton label="Settings" size="sm" />
            <XDSButton label="Users" size="sm" />
            <XDSButton label="Billing" size="sm" />
          </XDSOverflowList>
          <div style={{
          width: 70,
          flexShrink: 0
        }}>
            <XDSTextInput label="Search" isLabelHidden placeholder="Search..." size="sm" value={search} onChange={setSearch} />
          </div>
        </div>
      </div>;
  }
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [count, setCount] = useState(5);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }}>
        <div style={{
        display: 'flex',
        gap: 8,
        alignItems: 'center'
      }}>
          <XDSButton label="Remove" size="sm" onClick={() => setCount(c => Math.max(1, c - 1))} />
          <XDSButton label="Add" size="sm" onClick={() => setCount(c => c + 1)} />
          <span>{count} items</span>
        </div>
        <div style={{
        resize: 'horizontal',
        overflow: 'hidden',
        border: '1px dashed #ccc',
        padding: 8,
        width: 400,
        minWidth: 100,
        maxWidth: '100%'
      }}>
          <XDSOverflowList gap={2} overflowRenderer={items => <XDSButton label={\`+\${items.length} more\`} variant="ghost" size="sm" />}>
            {Array.from({
            length: count
          }, (_, i) => <XDSButton key={i} label={\`Item \${i + 1}\`} size="sm" />)}
          </XDSOverflowList>
        </div>
      </div>;
  }
}`,...v.parameters?.docs?.source}}};const F=["Default","Resizable","NoOverflow","WithBadges","CollapseFromStart","WithDropdownOverflow","WithSiblingElement","DynamicItems"];export{c as CollapseFromStart,o as Default,v as DynamicItems,d as NoOverflow,n as Resizable,m as WithBadges,p as WithDropdownOverflow,h as WithSiblingElement,F as __namedExportsOrder,k as default};
