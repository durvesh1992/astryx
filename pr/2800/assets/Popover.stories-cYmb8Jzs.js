import{ad as e,X as a,r,R as c}from"./iframe-yRFQ_7VC.js";import{X as s}from"./XDSPopover-CB4jHxPk.js";import{X as C}from"./XDSToken-DnzEkZ3B.js";import{X as T}from"./XDSLink-CIWTg4UH.js";import{X as k}from"./XDSSwitch-CKn8Zjtu.js";import{X as S}from"./XDSCheckboxInput-C50y4c1Q.js";import{X as d}from"./XDSDivider-CD2fc5JP.js";import{X as i}from"./XDSVStack-uMCoSZ_B.js";import{X as l}from"./XDSHeading---Kr4LhL.js";import{X as u}from"./XDSHStack-BmU4dpCo.js";import"./preload-helper-Ct5FWWRu.js";import"./useXDSPopover-ChRJmaAz.js";import"./useXDSInteractiveRole-C4QNKBOy.js";import"./computeTargetAndRel-BlG0ENK0.js";import"./XDSFieldStatus-BgnciRVy.js";import"./XDSStack-CFJ7xIVk.js";import"./stack.stylex-5XIQDawT.js";const G={title:"Core/Popover",component:s,tags:["autodocs"],argTypes:{placement:{control:"select",options:["above","below","start","end"],description:"Position relative to trigger"},alignment:{control:"select",options:["start","center","end"],description:"Alignment on placement axis"},isEnabled:{control:"boolean",description:"Enable/disable the popover"}}};function w(){const[n,t]=c.useState(!0),[o,p]=c.useState(!1),[b,h]=c.useState(!0);return e.jsxs(i,{gap:3,children:[e.jsx(l,{level:4,tabIndex:-1,children:"Settings"}),e.jsx(d,{}),e.jsx(k,{label:"Notifications",description:"Receive push notifications",value:n,onChange:t}),e.jsx(k,{label:"Dark mode",description:"Use dark color theme",value:o,onChange:p}),e.jsx(k,{label:"Sounds",description:"Play sounds for actions",value:b,onChange:h})]})}const g={args:{placement:"below",label:"Settings",width:280,content:e.jsx(w,{}),children:e.jsx(a,{label:"Settings",children:"Settings"})}};function R({onApply:n}){const[t,o]=c.useState({active:!0,archived:!1,drafts:!0,shared:!1}),p=b=>o(h=>({...h,[b]:!h[b]}));return e.jsxs(i,{gap:3,children:[e.jsx(l,{level:4,tabIndex:-1,children:"Filter by status"}),e.jsx(d,{}),e.jsx(S,{label:"Active",value:t.active,onChange:()=>p("active")}),e.jsx(S,{label:"Archived",value:t.archived,onChange:()=>p("archived")}),e.jsx(S,{label:"Drafts",value:t.drafts,onChange:()=>p("drafts")}),e.jsx(S,{label:"Shared with me",value:t.shared,onChange:()=>p("shared")}),e.jsx(d,{}),e.jsxs(u,{gap:2,hAlign:"end",children:[e.jsx(a,{label:"Apply",variant:"primary",onClick:n,children:"Apply"}),e.jsx(a,{label:"Reset",variant:"ghost",onClick:()=>o({active:!0,archived:!1,drafts:!0,shared:!1}),children:"Reset"})]})]})}const x={render:function(){const[t,o]=c.useState(!1);return e.jsx(s,{placement:"below",label:"Filter",width:240,isOpen:t,onOpenChange:o,content:e.jsx(R,{onApply:()=>o(!1)}),children:e.jsx(a,{label:"Filter",children:"Filter"})})}};function P({onConfirm:n,onCancel:t}){return e.jsxs(i,{gap:3,children:[e.jsx(l,{level:4,tabIndex:-1,children:"Delete project?"}),e.jsx(r,{type:"body",children:"This will permanently delete the project and all its data. This action cannot be undone."}),e.jsxs(u,{gap:2,hAlign:"end",children:[e.jsx(a,{label:"Delete",variant:"destructive",onClick:n,children:"Delete"}),e.jsx(a,{label:"Cancel",variant:"ghost",onClick:t,children:"Cancel"})]})]})}const m={render:function(){const[t,o]=c.useState(!1);return e.jsx(s,{placement:"below",label:"Confirm deletion",width:300,isOpen:t,onOpenChange:o,content:e.jsx(P,{onConfirm:()=>o(!1),onCancel:()=>o(!1)}),children:e.jsx(a,{label:"Delete project",variant:"destructive",children:"Delete project"})})}},D={render:function(){const t=c.useRef(null);return e.jsxs(e.Fragment,{children:[e.jsx(a,{ref:t,label:"Anchor button",children:"Anchor button"}),e.jsx(s,{anchorRef:t,label:"Sibling popover",width:260,placement:"below",content:e.jsxs(i,{gap:2,children:[e.jsx(l,{level:4,tabIndex:-1,children:"Sibling mode"}),e.jsx(r,{type:"body",children:"This popover uses anchorRef to attach to the button as a sibling, without wrapping it."})]})})]})}},X={render:()=>e.jsx("div",{style:{paddingTop:200},children:e.jsx(s,{placement:"above",label:"Info",width:260,content:e.jsxs(i,{gap:2,children:[e.jsx(l,{level:4,tabIndex:-1,children:"Keyboard shortcuts"}),e.jsx(d,{}),e.jsxs(u,{gap:3,children:[e.jsx(r,{type:"body",weight:"bold",children:"⌘K"}),e.jsx(r,{type:"body",children:"Command palette"})]}),e.jsxs(u,{gap:3,children:[e.jsx(r,{type:"body",weight:"bold",children:"⌘/"}),e.jsx(r,{type:"body",children:"Toggle sidebar"})]}),e.jsxs(u,{gap:3,children:[e.jsx(r,{type:"body",weight:"bold",children:"⌘."}),e.jsx(r,{type:"body",children:"Quick actions"})]})]}),children:e.jsx(a,{label:"Shortcuts",children:"Shortcuts"})})})},f={args:{placement:"below",label:"Disabled popover",isEnabled:!1,content:e.jsx(r,{type:"body",children:"This should not appear."}),children:e.jsx(a,{label:"Disabled popover",children:"Disabled"})}},v={render:()=>e.jsx(s,{placement:"below",label:"Token options",width:220,content:e.jsxs(i,{gap:2,children:[e.jsx(l,{level:4,tabIndex:-1,children:"Filter options"}),e.jsx(d,{}),e.jsx(r,{type:"body",children:"The token automatically renders as a button via context."})]}),children:e.jsx(C,{label:"Status: Active",icon:"filter"})})},j={render:()=>e.jsx(s,{placement:"below",label:"Link actions",width:220,content:e.jsxs(i,{gap:2,children:[e.jsx(l,{level:4,tabIndex:-1,children:"Quick actions"}),e.jsx(d,{}),e.jsx(r,{type:"body",children:"XDSLink without href renders as a button, suitable for triggers."})]}),children:e.jsx(T,{children:"More options"})})},y={render:()=>e.jsx(s,{placement:"below",label:"Custom trigger",width:260,content:e.jsxs(i,{gap:2,children:[e.jsx(l,{level:4,tabIndex:-1,children:"Custom trigger"}),e.jsx(d,{}),e.jsx(r,{type:"body",children:"The render prop gives full control over the trigger element."})]}),children:n=>e.jsx("button",{ref:n.ref,onClick:n.onClick,"aria-haspopup":n["aria-haspopup"],"aria-expanded":n["aria-expanded"],"aria-controls":n["aria-controls"],style:{padding:"8px 16px",border:"1px dashed currentColor",borderRadius:4,background:"transparent",cursor:"pointer"},children:"Custom trigger element"})})};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    placement: 'below',
    label: 'Settings',
    width: 280,
    content: <SettingsContent />,
    children: <XDSButton label="Settings">Settings</XDSButton>
  }
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function FilterPanelStory() {
    const [isOpen, setIsOpen] = React.useState(false);
    return <XDSPopover placement="below" label="Filter" width={240} isOpen={isOpen} onOpenChange={setIsOpen} content={<FilterContent onApply={() => setIsOpen(false)} />}>
        <XDSButton label="Filter">Filter</XDSButton>
      </XDSPopover>;
  }
}`,...x.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function ConfirmationStory() {
    const [isOpen, setIsOpen] = React.useState(false);
    return <XDSPopover placement="below" label="Confirm deletion" width={300} isOpen={isOpen} onOpenChange={setIsOpen} content={<ConfirmContent onConfirm={() => setIsOpen(false)} onCancel={() => setIsOpen(false)} />}>
        <XDSButton label="Delete project" variant="destructive">
          Delete project
        </XDSButton>
      </XDSPopover>;
  }
}`,...m.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: function AnchorRefStory() {
    const buttonRef = React.useRef<HTMLButtonElement>(null);
    return <>
        <XDSButton ref={buttonRef} label="Anchor button">
          Anchor button
        </XDSButton>
        <XDSPopover anchorRef={buttonRef as React.RefObject<HTMLElement>} label="Sibling popover" width={260} placement="below" content={<XDSVStack gap={2}>
              <XDSHeading level={4} tabIndex={-1}>
                Sibling mode
              </XDSHeading>
              <XDSText type="body">
                This popover uses anchorRef to attach to the button as a
                sibling, without wrapping it.
              </XDSText>
            </XDSVStack>} />
      </>;
  }
}`,...D.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    paddingTop: 200
  }}>
      <XDSPopover placement="above" label="Info" width={260} content={<XDSVStack gap={2}>
            <XDSHeading level={4} tabIndex={-1}>
              Keyboard shortcuts
            </XDSHeading>
            <XDSDivider />
            <XDSHStack gap={3}>
              <XDSText type="body" weight="bold">
                ⌘K
              </XDSText>
              <XDSText type="body">Command palette</XDSText>
            </XDSHStack>
            <XDSHStack gap={3}>
              <XDSText type="body" weight="bold">
                ⌘/
              </XDSText>
              <XDSText type="body">Toggle sidebar</XDSText>
            </XDSHStack>
            <XDSHStack gap={3}>
              <XDSText type="body" weight="bold">
                ⌘.
              </XDSText>
              <XDSText type="body">Quick actions</XDSText>
            </XDSHStack>
          </XDSVStack>}>
        <XDSButton label="Shortcuts">Shortcuts</XDSButton>
      </XDSPopover>
    </div>
}`,...X.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    placement: 'below',
    label: 'Disabled popover',
    isEnabled: false,
    content: <XDSText type="body">This should not appear.</XDSText>,
    children: <XDSButton label="Disabled popover">Disabled</XDSButton>
  }
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <XDSPopover placement="below" label="Token options" width={220} content={<XDSVStack gap={2}>
          <XDSHeading level={4} tabIndex={-1}>
            Filter options
          </XDSHeading>
          <XDSDivider />
          <XDSText type="body">
            The token automatically renders as a button via context.
          </XDSText>
        </XDSVStack>}>
      <XDSToken label="Status: Active" icon="filter" />
    </XDSPopover>
}`,...v.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <XDSPopover placement="below" label="Link actions" width={220} content={<XDSVStack gap={2}>
          <XDSHeading level={4} tabIndex={-1}>
            Quick actions
          </XDSHeading>
          <XDSDivider />
          <XDSText type="body">
            XDSLink without href renders as a button, suitable for triggers.
          </XDSText>
        </XDSVStack>}>
      <XDSLink>More options</XDSLink>
    </XDSPopover>
}`,...j.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <XDSPopover placement="below" label="Custom trigger" width={260} content={<XDSVStack gap={2}>
          <XDSHeading level={4} tabIndex={-1}>
            Custom trigger
          </XDSHeading>
          <XDSDivider />
          <XDSText type="body">
            The render prop gives full control over the trigger element.
          </XDSText>
        </XDSVStack>}>
      {(triggerProps: PopoverTriggerRenderProps) => <button ref={triggerProps.ref} onClick={triggerProps.onClick} aria-haspopup={triggerProps['aria-haspopup']} aria-expanded={triggerProps['aria-expanded']} aria-controls={triggerProps['aria-controls']} style={{
      padding: '8px 16px',
      border: '1px dashed currentColor',
      borderRadius: 4,
      background: 'transparent',
      cursor: 'pointer'
    }}>
          Custom trigger element
        </button>}
    </XDSPopover>
}`,...y.parameters?.docs?.source}}};const J=["Default","FilterPanel","Confirmation","AnchorRef","Above","Disabled","TokenTrigger","LinkTrigger","RenderProp"];export{X as Above,D as AnchorRef,m as Confirmation,g as Default,f as Disabled,x as FilterPanel,j as LinkTrigger,y as RenderProp,v as TokenTrigger,J as __namedExportsOrder,G as default};
