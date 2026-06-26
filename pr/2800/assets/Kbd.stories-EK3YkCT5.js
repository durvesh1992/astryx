import{ad as e,r as t}from"./iframe-yRFQ_7VC.js";import{X as s}from"./XDSKbd-XtbOZf08.js";import"./preload-helper-Ct5FWWRu.js";const m={title:"Core/Kbd",component:s,tags:["autodocs"],argTypes:{keys:{control:"text",description:'Keyboard shortcut string. Use "+" to separate keys. Special keys: mod, ctrl, alt, shift, enter, backspace, escape, tab, up, down, left, right.'}}},d={args:{keys:"k"}},l={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(s,{keys:"mod+k"}),e.jsx(s,{keys:"shift+enter"}),e.jsx(s,{keys:"ctrl+c"}),e.jsx(s,{keys:"alt+tab"})]})},i={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(s,{keys:"mod+shift+z"}),e.jsx(s,{keys:"ctrl+alt+delete"}),e.jsx(s,{keys:"mod+shift+p"})]})},p={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(t,{type:"label",style:{width:"100px"},children:"Escape:"}),e.jsx(s,{keys:"escape"})]}),e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(t,{type:"label",style:{width:"100px"},children:"Enter:"}),e.jsx(s,{keys:"enter"})]}),e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(t,{type:"label",style:{width:"100px"},children:"Backspace:"}),e.jsx(s,{keys:"backspace"})]}),e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(t,{type:"label",style:{width:"100px"},children:"Tab:"}),e.jsx(s,{keys:"tab"})]}),e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(t,{type:"label",style:{width:"100px"},children:"Space:"}),e.jsx(s,{keys:"space"})]}),e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(t,{type:"label",style:{width:"100px"},children:"Arrow Keys:"}),e.jsx(s,{keys:"up"}),e.jsx(s,{keys:"down"}),e.jsx(s,{keys:"left"}),e.jsx(s,{keys:"right"})]})]})},a={render:()=>e.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[e.jsx(s,{keys:"a"}),e.jsx(s,{keys:"b"}),e.jsx(s,{keys:"c"}),e.jsx(s,{keys:"x"}),e.jsx(s,{keys:"y"}),e.jsx(s,{keys:"z"})]})},r={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(t,{type:"label",style:{width:"120px"},children:"Cmd (mod):"}),e.jsx(s,{keys:"mod"}),e.jsx(t,{type:"supporting",children:"⌘"})]}),e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(t,{type:"label",style:{width:"120px"},children:"Ctrl:"}),e.jsx(s,{keys:"ctrl"}),e.jsx(t,{type:"supporting",children:"⌃"})]}),e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(t,{type:"label",style:{width:"120px"},children:"Alt/Option:"}),e.jsx(s,{keys:"alt"}),e.jsx(t,{type:"supporting",children:"⌥"})]}),e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(t,{type:"label",style:{width:"120px"},children:"Shift:"}),e.jsx(s,{keys:"shift"}),e.jsx(t,{type:"supporting",children:"⇧"})]})]})},y={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsxs(t,{type:"body",children:["Press ",e.jsx(s,{keys:"mod+k"})," to open the command palette."]}),e.jsxs(t,{type:"body",children:["Use ",e.jsx(s,{keys:"mod+shift+p"})," to access all commands."]}),e.jsxs(t,{type:"body",children:["Press ",e.jsx(s,{keys:"escape"})," to close the dialog."]}),e.jsxs(t,{type:"body",children:["Navigate with ",e.jsx(s,{keys:"up"})," and ",e.jsx(s,{keys:"down"})," arrow keys, then press ",e.jsx(s,{keys:"enter"})," to select."]})]})},n={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px",padding:"8px",border:"1px solid #e0e0e0",borderRadius:"8px",width:"250px"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px"},children:[e.jsx(t,{type:"body",children:"Cut"}),e.jsx(s,{keys:"mod+x"})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px"},children:[e.jsx(t,{type:"body",children:"Copy"}),e.jsx(s,{keys:"mod+c"})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px"},children:[e.jsx(t,{type:"body",children:"Paste"}),e.jsx(s,{keys:"mod+v"})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px"},children:[e.jsx(t,{type:"body",children:"Undo"}),e.jsx(s,{keys:"mod+z"})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px"},children:[e.jsx(t,{type:"body",children:"Redo"}),e.jsx(s,{keys:"mod+shift+z"})]})]})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    keys: 'k'
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>
      <XDSKbd keys="mod+k" />
      <XDSKbd keys="shift+enter" />
      <XDSKbd keys="ctrl+c" />
      <XDSKbd keys="alt+tab" />
    </div>
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>
      <XDSKbd keys="mod+shift+z" />
      <XDSKbd keys="ctrl+alt+delete" />
      <XDSKbd keys="mod+shift+p" />
    </div>
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      <div style={{
      display: 'flex',
      gap: '16px',
      alignItems: 'center'
    }}>
        <XDSText type="label" style={{
        width: '100px'
      }}>
          Escape:
        </XDSText>
        <XDSKbd keys="escape" />
      </div>
      <div style={{
      display: 'flex',
      gap: '16px',
      alignItems: 'center'
    }}>
        <XDSText type="label" style={{
        width: '100px'
      }}>
          Enter:
        </XDSText>
        <XDSKbd keys="enter" />
      </div>
      <div style={{
      display: 'flex',
      gap: '16px',
      alignItems: 'center'
    }}>
        <XDSText type="label" style={{
        width: '100px'
      }}>
          Backspace:
        </XDSText>
        <XDSKbd keys="backspace" />
      </div>
      <div style={{
      display: 'flex',
      gap: '16px',
      alignItems: 'center'
    }}>
        <XDSText type="label" style={{
        width: '100px'
      }}>
          Tab:
        </XDSText>
        <XDSKbd keys="tab" />
      </div>
      <div style={{
      display: 'flex',
      gap: '16px',
      alignItems: 'center'
    }}>
        <XDSText type="label" style={{
        width: '100px'
      }}>
          Space:
        </XDSText>
        <XDSKbd keys="space" />
      </div>
      <div style={{
      display: 'flex',
      gap: '16px',
      alignItems: 'center'
    }}>
        <XDSText type="label" style={{
        width: '100px'
      }}>
          Arrow Keys:
        </XDSText>
        <XDSKbd keys="up" />
        <XDSKbd keys="down" />
        <XDSKbd keys="left" />
        <XDSKbd keys="right" />
      </div>
    </div>
}`,...p.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '8px',
    alignItems: 'center'
  }}>
      <XDSKbd keys="a" />
      <XDSKbd keys="b" />
      <XDSKbd keys="c" />
      <XDSKbd keys="x" />
      <XDSKbd keys="y" />
      <XDSKbd keys="z" />
    </div>
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      <div style={{
      display: 'flex',
      gap: '16px',
      alignItems: 'center'
    }}>
        <XDSText type="label" style={{
        width: '120px'
      }}>
          Cmd (mod):
        </XDSText>
        <XDSKbd keys="mod" />
        <XDSText type="supporting">⌘</XDSText>
      </div>
      <div style={{
      display: 'flex',
      gap: '16px',
      alignItems: 'center'
    }}>
        <XDSText type="label" style={{
        width: '120px'
      }}>
          Ctrl:
        </XDSText>
        <XDSKbd keys="ctrl" />
        <XDSText type="supporting">⌃</XDSText>
      </div>
      <div style={{
      display: 'flex',
      gap: '16px',
      alignItems: 'center'
    }}>
        <XDSText type="label" style={{
        width: '120px'
      }}>
          Alt/Option:
        </XDSText>
        <XDSKbd keys="alt" />
        <XDSText type="supporting">⌥</XDSText>
      </div>
      <div style={{
      display: 'flex',
      gap: '16px',
      alignItems: 'center'
    }}>
        <XDSText type="label" style={{
        width: '120px'
      }}>
          Shift:
        </XDSText>
        <XDSKbd keys="shift" />
        <XDSText type="supporting">⇧</XDSText>
      </div>
    </div>
}`,...r.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  }}>
      <XDSText type="body">
        Press <XDSKbd keys="mod+k" /> to open the command palette.
      </XDSText>
      <XDSText type="body">
        Use <XDSKbd keys="mod+shift+p" /> to access all commands.
      </XDSText>
      <XDSText type="body">
        Press <XDSKbd keys="escape" /> to close the dialog.
      </XDSText>
      <XDSText type="body">
        Navigate with <XDSKbd keys="up" /> and <XDSKbd keys="down" /> arrow
        keys, then press <XDSKbd keys="enter" /> to select.
      </XDSText>
    </div>
}`,...y.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    padding: '8px',
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    width: '250px'
  }}>
      <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '8px'
    }}>
        <XDSText type="body">Cut</XDSText>
        <XDSKbd keys="mod+x" />
      </div>
      <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '8px'
    }}>
        <XDSText type="body">Copy</XDSText>
        <XDSKbd keys="mod+c" />
      </div>
      <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '8px'
    }}>
        <XDSText type="body">Paste</XDSText>
        <XDSKbd keys="mod+v" />
      </div>
      <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '8px'
    }}>
        <XDSText type="body">Undo</XDSText>
        <XDSKbd keys="mod+z" />
      </div>
      <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '8px'
    }}>
        <XDSText type="body">Redo</XDSText>
        <XDSKbd keys="mod+shift+z" />
      </div>
    </div>
}`,...n.parameters?.docs?.source}}};const g=["Default","ModifierCombinations","MultipleModifiers","SpecialKeys","SingleLetterKeys","AllModifierSymbols","InlineWithText","MenuShortcuts"];export{r as AllModifierSymbols,d as Default,y as InlineWithText,n as MenuShortcuts,l as ModifierCombinations,i as MultipleModifiers,a as SingleLetterKeys,p as SpecialKeys,g as __namedExportsOrder,m as default};
