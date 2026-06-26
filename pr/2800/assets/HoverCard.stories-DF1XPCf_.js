import{ad as e,X as r}from"./iframe-yRFQ_7VC.js";import{X as a,u as b}from"./XDSHoverCard-BRL1pJWj.js";import{X as u}from"./XDSVStack-uMCoSZ_B.js";import{X as D}from"./XDSHStack-BmU4dpCo.js";import"./preload-helper-Ct5FWWRu.js";import"./index-D8Xh4Tce.js";import"./index-CXyWrEU_.js";import"./XDSStack-CFJ7xIVk.js";import"./stack.stylex-5XIQDawT.js";const P={title:"Core/HoverCard",component:a,tags:["autodocs"],argTypes:{placement:{control:"select",options:["above","below","start","end"],description:"Position relative to trigger"},alignment:{control:"select",options:["start","center","end"],description:"Alignment on placement axis"},delay:{control:"number",description:"Show delay in ms"},hideDelay:{control:"number",description:"Hide delay in ms"},isEnabled:{control:"boolean",description:"Enable/disable the hover card"}}};function t(){return e.jsx("div",{style:{width:200},children:e.jsxs(u,{gap:2,children:[e.jsx("div",{style:{fontWeight:600},children:"Jane Doe"}),e.jsx("div",{style:{fontSize:14,opacity:.7},children:"Software Engineer"}),e.jsx("div",{style:{fontSize:13},children:"Building great products with great people."})]})})}const o={args:{placement:"above",content:e.jsx(t,{}),children:e.jsx(r,{label:"Hover me",children:"Hover me"})}},n={args:{placement:"below",content:e.jsx(t,{}),children:e.jsx(r,{label:"Hover me",children:"Hover me"})}},s={args:{placement:"start",content:e.jsx(t,{}),children:e.jsx(r,{label:"Hover me",children:"Hover me"})}},l={args:{placement:"end",content:e.jsx(t,{}),children:e.jsx(r,{label:"Hover me",children:"Hover me"})}},d={args:{placement:"above",delay:500,hideDelay:300,content:e.jsx(t,{}),children:e.jsx(r,{label:"Slow hover (500ms)",children:"Slow hover (500ms)"})}},c={args:{placement:"above",isEnabled:!1,content:e.jsx(t,{}),children:e.jsx(r,{label:"Hover disabled",children:"Hover disabled"})}},i={render:()=>e.jsxs("div",{style:{padding:100,display:"flex",gap:24,flexWrap:"wrap"},children:[e.jsx(a,{content:e.jsx(t,{}),placement:"above",children:e.jsx(r,{label:"Above",children:"Above"})}),e.jsx(a,{content:e.jsx(t,{}),placement:"below",children:e.jsx(r,{label:"Below",children:"Below"})}),e.jsx(a,{content:e.jsx(t,{}),placement:"start",children:e.jsx(r,{label:"Start",children:"Start"})}),e.jsx(a,{content:e.jsx(t,{}),placement:"end",children:e.jsx(r,{label:"End",children:"End"})})]})},p={render:function(){const S=b({placement:"above",delay:200});return e.jsxs("div",{style:{padding:100},children:[e.jsx(r,{label:"Using hook directly",ref:S.ref,"aria-describedby":S.describedBy,children:"Using hook directly"}),S.renderHoverCard(e.jsx(t,{}))]})}},m={render:()=>e.jsx("div",{style:{padding:100},children:e.jsx(a,{placement:"below",content:e.jsxs(u,{gap:2,children:[e.jsx("div",{children:"Interactive hover card content"}),e.jsxs(D,{gap:2,children:[e.jsx(r,{label:"Follow",variant:"primary",children:"Follow"}),e.jsx(r,{label:"Message",children:"Message"})]})]}),children:e.jsx(r,{label:"Hover for interactive content",children:"Hover for interactive content"})})})},v={render:()=>e.jsx("div",{style:{padding:100},children:e.jsxs("p",{children:["This feature was created by"," ",e.jsx(a,{content:e.jsx(t,{}),placement:"above",children:"Jane Doe"})," ","and shipped last week."]})})},h={render:()=>e.jsx("div",{style:{padding:100},children:e.jsxs("p",{children:["The project is maintained by"," ",e.jsx(a,{content:e.jsx(t,{}),placement:"above",children:"Jane Doe"}),","," ",e.jsx(a,{content:e.jsx("div",{style:{width:200},children:e.jsxs(u,{gap:2,children:[e.jsx("div",{style:{fontWeight:600},children:"John Smith"}),e.jsx("div",{style:{fontSize:14,opacity:.7},children:"Product Manager"})]})}),placement:"above",children:"John Smith"}),", and others."]})})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    placement: 'above',
    content: <ProfileCard />,
    children: <XDSButton label="Hover me">Hover me</XDSButton>
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    placement: 'below',
    content: <ProfileCard />,
    children: <XDSButton label="Hover me">Hover me</XDSButton>
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    placement: 'start',
    content: <ProfileCard />,
    children: <XDSButton label="Hover me">Hover me</XDSButton>
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    placement: 'end',
    content: <ProfileCard />,
    children: <XDSButton label="Hover me">Hover me</XDSButton>
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    placement: 'above',
    delay: 500,
    hideDelay: 300,
    content: <ProfileCard />,
    children: <XDSButton label="Slow hover (500ms)">Slow hover (500ms)</XDSButton>
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    placement: 'above',
    isEnabled: false,
    content: <ProfileCard />,
    children: <XDSButton label="Hover disabled">Hover disabled</XDSButton>
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 100,
    display: 'flex',
    gap: 24,
    flexWrap: 'wrap'
  }}>
      <XDSHoverCard content={<ProfileCard />} placement="above">
        <XDSButton label="Above">Above</XDSButton>
      </XDSHoverCard>
      <XDSHoverCard content={<ProfileCard />} placement="below">
        <XDSButton label="Below">Below</XDSButton>
      </XDSHoverCard>
      <XDSHoverCard content={<ProfileCard />} placement="start">
        <XDSButton label="Start">Start</XDSButton>
      </XDSHoverCard>
      <XDSHoverCard content={<ProfileCard />} placement="end">
        <XDSButton label="End">End</XDSButton>
      </XDSHoverCard>
    </div>
}`,...i.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function HookExample() {
    const hoverCard = useXDSHoverCard({
      placement: 'above',
      delay: 200
    });
    return <div style={{
      padding: 100
    }}>
        <XDSButton label="Using hook directly" ref={hoverCard.ref} aria-describedby={hoverCard.describedBy}>
          Using hook directly
        </XDSButton>
        {hoverCard.renderHoverCard(<ProfileCard />)}
      </div>;
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 100
  }}>
      <XDSHoverCard placement="below" content={<XDSVStack gap={2}>
            <div>Interactive hover card content</div>
            <XDSHStack gap={2}>
              <XDSButton label="Follow" variant="primary">
                Follow
              </XDSButton>
              <XDSButton label="Message">Message</XDSButton>
            </XDSHStack>
          </XDSVStack>}>
        <XDSButton label="Hover for interactive content">
          Hover for interactive content
        </XDSButton>
      </XDSHoverCard>
    </div>
}`,...m.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 100
  }}>
      <p>
        This feature was created by{' '}
        <XDSHoverCard content={<ProfileCard />} placement="above">
          Jane Doe
        </XDSHoverCard>{' '}
        and shipped last week.
      </p>
    </div>
}`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 100
  }}>
      <p>
        The project is maintained by{' '}
        <XDSHoverCard content={<ProfileCard />} placement="above">
          Jane Doe
        </XDSHoverCard>
        ,{' '}
        <XDSHoverCard content={<div style={{
        width: 200
      }}>
              <XDSVStack gap={2}>
                <div style={{
            fontWeight: 600
          }}>John Smith</div>
                <div style={{
            fontSize: 14,
            opacity: 0.7
          }}>Product Manager</div>
              </XDSVStack>
            </div>} placement="above">
          John Smith
        </XDSHoverCard>
        , and others.
      </p>
    </div>
}`,...h.parameters?.docs?.source}}};const k=["Default","Below","Start","End","CustomDelay","Disabled","AllPlacements","WithHook","InteractiveContent","TextNode","TextNodeMultiple"];export{i as AllPlacements,n as Below,d as CustomDelay,o as Default,c as Disabled,l as End,m as InteractiveContent,s as Start,v as TextNode,h as TextNodeMultiple,p as WithHook,k as __namedExportsOrder,P as default};
