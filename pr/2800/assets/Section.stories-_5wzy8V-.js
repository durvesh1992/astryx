import{ad as e,X as g}from"./iframe-yRFQ_7VC.js";import{X as t}from"./XDSSection-C0P8UZDV.js";import{X as l,b as h}from"./XDSLayoutContent-DBrMIkuH.js";import{X as x}from"./XDSLayoutHeader-ByHa8jrV.js";import{X as y}from"./XDSLayoutFooter-BJLeHzEf.js";import{X as m}from"./XDSLayoutPanel-DpS1Q-H7.js";import{X as p}from"./XDSVStack-uMCoSZ_B.js";import{X as S}from"./XDSHStack-BmU4dpCo.js";import"./preload-helper-Ct5FWWRu.js";import"./container.stylex-BI6SFdSl.js";import"./padding.stylex-BDg7w1Mn.js";import"./stack.stylex-5XIQDawT.js";import"./stackItem.stylex-CYo-hkeX.js";import"./XDSStack-CFJ7xIVk.js";const H={title:"Core/Section",component:t,tags:["autodocs"],decorators:[c=>e.jsx("div",{className:"x10xzikg x1gt495",children:e.jsx(c,{})})],argTypes:{variant:{control:"select",options:["section","transparent","muted"],description:"Visual variant of the section"},width:{control:{type:"range",min:100,max:800,step:10},description:"Width in pixels"},height:{control:{type:"range",min:100,max:600,step:10},description:"Height in pixels"}}},n={args:{variant:"section",width:300},render:c=>e.jsx(t,{...c,children:e.jsx("p",{className:"x9ynric x1tgivj0 x1ghz6dp",children:"A section with default padding. Sections are used to define distinct areas within a page."})})},i={render:()=>e.jsxs("div",{className:"x78zum5 x1qh66ti x1a02dak",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"xrcdmg7 x9ynric xif65rj xv1l7n4",children:"section (default)"}),e.jsx(t,{variant:"section",width:200,children:e.jsx("p",{className:"x9ynric x1tgivj0 x1ghz6dp",children:"Surface background"})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"xrcdmg7 x9ynric xif65rj xv1l7n4",children:"muted"}),e.jsx(t,{variant:"muted",width:200,children:e.jsx("p",{className:"x9ynric x1tgivj0 x1ghz6dp",children:"Wash background"})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"xrcdmg7 x9ynric xif65rj xv1l7n4",children:"transparent"}),e.jsx(t,{variant:"transparent",width:200,children:e.jsx("p",{className:"x9ynric x1tgivj0 x1ghz6dp",children:"Transparent background"})})]})]})},s={render:()=>e.jsx(t,{variant:"muted",width:320,children:e.jsxs(p,{gap:2,children:[e.jsx("h3",{className:"x9ynric x1tgivj0 x1ghz6dp",children:"Section Title"}),e.jsx("p",{className:"x9ynric x1ghz6dp xv1l7n4 xif65rj",children:"This section contains simple content without XDSLayout. The container padding is applied automatically."})]})})},a={render:()=>e.jsx(t,{variant:"muted",width:350,height:250,children:e.jsx(l,{header:e.jsx(x,{hasDivider:!0,children:e.jsx("h3",{className:"x9ynric x1tgivj0 x1ghz6dp",children:"Section with Layout"})}),content:e.jsx(h,{children:e.jsx("p",{className:"x9ynric x1ghz6dp xv1l7n4 xif65rj",children:"When using XDSLayout, the layout manages its own padding independently from the container padding."})}),footer:e.jsx(y,{hasDivider:!0,children:e.jsx(S,{gap:2,hAlign:"end",children:e.jsx(g,{label:"Action",variant:"primary",children:"Action"})})})})})},r={render:()=>e.jsx(t,{variant:"section",width:600,height:300,children:e.jsx(l,{header:e.jsx(x,{hasDivider:!0,children:e.jsxs(p,{gap:2,children:[e.jsx("h2",{className:"x9ynric x1tgivj0 x1ghz6dp",children:"Page Header"}),e.jsx("p",{className:"x9ynric x1ghz6dp xv1l7n4 xif65rj",children:"Welcome to the application"})]})}),start:e.jsx(m,{hasDivider:!0,width:150,children:e.jsx("h3",{className:"x9ynric x1tgivj0 x1ghz6dp",children:"Sidebar"})}),content:e.jsx(h,{children:e.jsxs(p,{gap:2,children:[e.jsx("h3",{className:"x9ynric x1tgivj0 x1ghz6dp",children:"Main Content"}),e.jsx("p",{className:"x9ynric x1ghz6dp xv1l7n4 xif65rj",children:"This demonstrates how XDSLayout can be used to create page layouts with header, sidebar, and content areas."})]})})})})},d={render:()=>e.jsxs("div",{className:"x78zum5 x1qh66ti x1a02dak",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"xrcdmg7 x9ynric xif65rj xv1l7n4",children:"Default (with padding)"}),e.jsx(t,{variant:"muted",width:250,children:e.jsx("div",{style:{backgroundColor:"rgba(0,100,200,0.2)",padding:8},children:e.jsx("p",{className:"x9ynric x1tgivj0 x1ghz6dp",children:"Content with section padding"})})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"xrcdmg7 x9ynric xif65rj xv1l7n4",children:"Full Bleed (no padding)"}),e.jsx(t,{variant:"muted",width:250,padding:0,children:e.jsx("div",{style:{backgroundColor:"rgba(0,100,200,0.2)",padding:8},children:e.jsx("p",{className:"x9ynric x1tgivj0 x1ghz6dp",children:"Content touches section edges"})})})]})]})},o={render:()=>e.jsxs("div",{className:"x78zum5 x1qh66ti x1a02dak",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"xrcdmg7 x9ynric xif65rj xv1l7n4",children:"padding=6 → nested (inherits 6)"}),e.jsx(t,{variant:"section",width:350,padding:6,children:e.jsx(t,{variant:"muted",children:e.jsx("p",{className:"x9ynric x1tgivj0 x1ghz6dp",children:"Inner section inherits padding=6 from parent. Edge compensation and content inset should both use 24px."})})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"xrcdmg7 x9ynric xif65rj xv1l7n4",children:"padding=6 → nested padding=2"}),e.jsx(t,{variant:"section",width:350,padding:6,children:e.jsx(t,{variant:"muted",padding:2,children:e.jsx("p",{className:"x9ynric x1tgivj0 x1ghz6dp",children:"Inner section explicitly sets padding=2, overriding the parent's padding=6. Content inset is 8px."})})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"xrcdmg7 x9ynric xif65rj xv1l7n4",children:"padding=2 → nested (inherits 2)"}),e.jsx(t,{variant:"section",width:350,padding:2,children:e.jsx(t,{variant:"muted",children:e.jsx("p",{className:"x9ynric x1tgivj0 x1ghz6dp",children:"Inner section inherits padding=2 from parent. Both edge compensation and content inset use 8px."})})})]})]})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'section',
    width: 300
  },
  render: args => <XDSSection {...args}>
      <p {...stylex.props(styles.text)}>
        A section with default padding. Sections are used to define distinct
        areas within a page.
      </p>
    </XDSSection>
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div {...stylex.props(styles.storyWrapper)}>
      <div>
        <h4 {...stylex.props(styles.heading)}>section (default)</h4>
        <XDSSection variant="section" width={200}>
          <p {...stylex.props(styles.text)}>Surface background</p>
        </XDSSection>
      </div>
      <div>
        <h4 {...stylex.props(styles.heading)}>muted</h4>
        <XDSSection variant="muted" width={200}>
          <p {...stylex.props(styles.text)}>Wash background</p>
        </XDSSection>
      </div>
      <div>
        <h4 {...stylex.props(styles.heading)}>transparent</h4>
        <XDSSection variant="transparent" width={200}>
          <p {...stylex.props(styles.text)}>Transparent background</p>
        </XDSSection>
      </div>
    </div>
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <XDSSection variant="muted" width={320}>
      <XDSVStack gap={2}>
        <h3 {...stylex.props(styles.text)}>Section Title</h3>
        <p {...stylex.props(styles.text, styles.textSecondary)}>
          This section contains simple content without XDSLayout. The container
          padding is applied automatically.
        </p>
      </XDSVStack>
    </XDSSection>
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <XDSSection variant="muted" width={350} height={250}>
      <XDSLayout header={<XDSLayoutHeader hasDivider>
            <h3 {...stylex.props(styles.text)}>Section with Layout</h3>
          </XDSLayoutHeader>} content={<XDSLayoutContent>
            <p {...stylex.props(styles.text, styles.textSecondary)}>
              When using XDSLayout, the layout manages its own padding
              independently from the container padding.
            </p>
          </XDSLayoutContent>} footer={<XDSLayoutFooter hasDivider>
            <XDSHStack gap={2} hAlign="end">
              <XDSButton label="Action" variant="primary">
                Action
              </XDSButton>
            </XDSHStack>
          </XDSLayoutFooter>} />
    </XDSSection>
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <XDSSection variant="section" width={600} height={300}>
      <XDSLayout header={<XDSLayoutHeader hasDivider>
            <XDSVStack gap={2}>
              <h2 {...stylex.props(styles.text)}>Page Header</h2>
              <p {...stylex.props(styles.text, styles.textSecondary)}>
                Welcome to the application
              </p>
            </XDSVStack>
          </XDSLayoutHeader>} start={<XDSLayoutPanel hasDivider width={150}>
            <h3 {...stylex.props(styles.text)}>Sidebar</h3>
          </XDSLayoutPanel>} content={<XDSLayoutContent>
            <XDSVStack gap={2}>
              <h3 {...stylex.props(styles.text)}>Main Content</h3>
              <p {...stylex.props(styles.text, styles.textSecondary)}>
                This demonstrates how XDSLayout can be used to create page
                layouts with header, sidebar, and content areas.
              </p>
            </XDSVStack>
          </XDSLayoutContent>} />
    </XDSSection>
}`,...r.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div {...stylex.props(styles.storyWrapper)}>
      <div>
        <h4 {...stylex.props(styles.heading)}>Default (with padding)</h4>
        <XDSSection variant="muted" width={250}>
          <div style={{
          backgroundColor: 'rgba(0,100,200,0.2)',
          padding: 8
        }}>
            <p {...stylex.props(styles.text)}>Content with section padding</p>
          </div>
        </XDSSection>
      </div>
      <div>
        <h4 {...stylex.props(styles.heading)}>Full Bleed (no padding)</h4>
        <XDSSection variant="muted" width={250} padding={0}>
          <div style={{
          backgroundColor: 'rgba(0,100,200,0.2)',
          padding: 8
        }}>
            <p {...stylex.props(styles.text)}>Content touches section edges</p>
          </div>
        </XDSSection>
      </div>
    </div>
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div {...stylex.props(styles.storyWrapper)}>
      <div>
        <h4 {...stylex.props(styles.heading)}>
          padding=6 → nested (inherits 6)
        </h4>
        <XDSSection variant="section" width={350} padding={6}>
          <XDSSection variant="muted">
            <p {...stylex.props(styles.text)}>
              Inner section inherits padding=6 from parent. Edge compensation
              and content inset should both use 24px.
            </p>
          </XDSSection>
        </XDSSection>
      </div>
      <div>
        <h4 {...stylex.props(styles.heading)}>padding=6 → nested padding=2</h4>
        <XDSSection variant="section" width={350} padding={6}>
          <XDSSection variant="muted" padding={2}>
            <p {...stylex.props(styles.text)}>
              Inner section explicitly sets padding=2, overriding the parent's
              padding=6. Content inset is 8px.
            </p>
          </XDSSection>
        </XDSSection>
      </div>
      <div>
        <h4 {...stylex.props(styles.heading)}>
          padding=2 → nested (inherits 2)
        </h4>
        <XDSSection variant="section" width={350} padding={2}>
          <XDSSection variant="muted">
            <p {...stylex.props(styles.text)}>
              Inner section inherits padding=2 from parent. Both edge
              compensation and content inset use 8px.
            </p>
          </XDSSection>
        </XDSSection>
      </div>
    </div>
}`,...o.parameters?.docs?.source}}};const T=["Default","Variants","WithSimpleContent","WithInnerLayout","PageLayout","FullBleed","NestedPaddingInheritance"];export{n as Default,d as FullBleed,o as NestedPaddingInheritance,r as PageLayout,i as Variants,a as WithInnerLayout,s as WithSimpleContent,T as __namedExportsOrder,H as default};
