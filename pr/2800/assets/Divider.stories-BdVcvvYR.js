import{ad as e,r as t}from"./iframe-yRFQ_7VC.js";import{X as r}from"./XDSDivider-CD2fc5JP.js";import{X as n}from"./XDSCard-CyDoBnn3.js";import{X as a}from"./XDSSection-C0P8UZDV.js";import{X as s}from"./XDSVStack-uMCoSZ_B.js";import{X}from"./XDSHStack-BmU4dpCo.js";import"./preload-helper-Ct5FWWRu.js";import"./container.stylex-BI6SFdSl.js";import"./padding.stylex-BDg7w1Mn.js";import"./XDSStack-CFJ7xIVk.js";import"./stack.stylex-5XIQDawT.js";const h={fullHeight:{kZKoxP:"x5yr21d",$$css:!0}},k={title:"Core/Divider",component:r,tags:["autodocs"],argTypes:{orientation:{control:"select",options:["horizontal","vertical"],description:"Orientation of the divider"},variant:{control:"select",options:["subtle","strong"],description:"Visual weight of the divider line"},isFullBleed:{control:"boolean",description:"Escape parent container padding"},label:{control:"text",description:"Optional label text (rendered small and secondary)"}}},d={args:{},render:i=>e.jsx(a,{variant:"muted",children:e.jsx(n,{children:e.jsxs(s,{gap:3,children:[e.jsx(t,{type:"body",children:"Content above"}),e.jsx(r,{...i}),e.jsx(t,{type:"body",children:"Content below"})]})})})},o={args:{label:"or"},render:i=>e.jsx(a,{variant:"muted",children:e.jsx(n,{children:e.jsxs(s,{gap:3,children:[e.jsx(t,{type:"body",children:"Content above"}),e.jsx(r,{...i}),e.jsx(t,{type:"body",children:"Content below"})]})})})},l={render:()=>e.jsx(a,{variant:"muted",children:e.jsxs("div",{className:"x78zum5 xdt5ytf x1qh66ti",children:[e.jsx(n,{children:e.jsxs(s,{gap:3,children:[e.jsx(t,{type:"supporting",children:"Subtle (default)"}),e.jsx(r,{variant:"subtle"})]})}),e.jsx(n,{children:e.jsxs(s,{gap:3,children:[e.jsx(t,{type:"supporting",children:"Strong"}),e.jsx(r,{variant:"strong"})]})})]})})},c={render:()=>e.jsx(a,{variant:"muted",children:e.jsxs("div",{className:"x78zum5 xdt5ytf x1qh66ti",children:[e.jsx(n,{children:e.jsxs(s,{gap:3,children:[e.jsx(t,{type:"label",children:"Normal divider"}),e.jsx(t,{type:"body",children:"The divider respects container padding."}),e.jsx(r,{}),e.jsx(t,{type:"body",children:"Content below the divider."})]})}),e.jsx(n,{children:e.jsxs(s,{gap:3,children:[e.jsx(t,{type:"label",children:"Full bleed divider"}),e.jsx(t,{type:"body",children:"The divider extends to container edges."}),e.jsx(r,{isFullBleed:!0}),e.jsx(t,{type:"body",children:"Content below the divider."})]})})]})})},S={args:{orientation:"vertical"},render:i=>e.jsx(a,{variant:"muted",children:e.jsx(n,{height:200,children:e.jsxs(X,{gap:4,xstyle:h.fullHeight,children:[e.jsx(t,{type:"body",children:"Left content"}),e.jsx(r,{...i}),e.jsx(t,{type:"body",children:"Right content"})]})})})},p={args:{orientation:"vertical",label:"OR"},render:i=>e.jsx(a,{variant:"muted",children:e.jsx(n,{height:200,children:e.jsxs(X,{gap:4,xstyle:h.fullHeight,children:[e.jsx(t,{type:"body",children:"Option A"}),e.jsx(r,{...i}),e.jsx(t,{type:"body",children:"Option B"})]})})})},D={render:()=>e.jsx(a,{variant:"muted",children:e.jsx(n,{children:e.jsxs(s,{gap:3,children:[e.jsx(t,{type:"label",children:"Card Title"}),e.jsx(r,{}),e.jsx(t,{type:"body",children:"This demonstrates how a divider can be used to separate content sections within a card or panel."}),e.jsx(r,{label:"More Info"}),e.jsx(t,{type:"supporting",children:"Additional details can appear below a labeled divider."})]})})})},x={render:()=>e.jsx(a,{variant:"muted",children:e.jsx(n,{height:200,children:e.jsxs(X,{gap:4,xstyle:h.fullHeight,children:[e.jsx(t,{type:"body",children:"Left content"}),e.jsx(r,{orientation:"vertical",isFullBleed:!0}),e.jsx(t,{type:"body",children:"Right content"})]})})})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {},
  render: args => <XDSSection variant="muted">
      <XDSCard>
        <XDSVStack gap={3}>
          <XDSText type="body">Content above</XDSText>
          <XDSDivider {...args} />
          <XDSText type="body">Content below</XDSText>
        </XDSVStack>
      </XDSCard>
    </XDSSection>
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'or'
  },
  render: args => <XDSSection variant="muted">
      <XDSCard>
        <XDSVStack gap={3}>
          <XDSText type="body">Content above</XDSText>
          <XDSDivider {...args} />
          <XDSText type="body">Content below</XDSText>
        </XDSVStack>
      </XDSCard>
    </XDSSection>
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <XDSSection variant="muted">
      <div {...stylex.props(styles.storyWrapper)}>
        <XDSCard>
          <XDSVStack gap={3}>
            <XDSText type="supporting">Subtle (default)</XDSText>
            <XDSDivider variant="subtle" />
          </XDSVStack>
        </XDSCard>
        <XDSCard>
          <XDSVStack gap={3}>
            <XDSText type="supporting">Strong</XDSText>
            <XDSDivider variant="strong" />
          </XDSVStack>
        </XDSCard>
      </div>
    </XDSSection>
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <XDSSection variant="muted">
      <div {...stylex.props(styles.storyWrapper)}>
        <XDSCard>
          <XDSVStack gap={3}>
            <XDSText type="label">Normal divider</XDSText>
            <XDSText type="body">
              The divider respects container padding.
            </XDSText>
            <XDSDivider />
            <XDSText type="body">Content below the divider.</XDSText>
          </XDSVStack>
        </XDSCard>
        <XDSCard>
          <XDSVStack gap={3}>
            <XDSText type="label">Full bleed divider</XDSText>
            <XDSText type="body">
              The divider extends to container edges.
            </XDSText>
            <XDSDivider isFullBleed />
            <XDSText type="body">Content below the divider.</XDSText>
          </XDSVStack>
        </XDSCard>
      </div>
    </XDSSection>
}`,...c.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical'
  },
  render: args => <XDSSection variant="muted">
      <XDSCard height={200}>
        <XDSHStack gap={4} xstyle={styles.fullHeight}>
          <XDSText type="body">Left content</XDSText>
          <XDSDivider {...args} />
          <XDSText type="body">Right content</XDSText>
        </XDSHStack>
      </XDSCard>
    </XDSSection>
}`,...S.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical',
    label: 'OR'
  },
  render: args => <XDSSection variant="muted">
      <XDSCard height={200}>
        <XDSHStack gap={4} xstyle={styles.fullHeight}>
          <XDSText type="body">Option A</XDSText>
          <XDSDivider {...args} />
          <XDSText type="body">Option B</XDSText>
        </XDSHStack>
      </XDSCard>
    </XDSSection>
}`,...p.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <XDSSection variant="muted">
      <XDSCard>
        <XDSVStack gap={3}>
          <XDSText type="label">Card Title</XDSText>
          <XDSDivider />
          <XDSText type="body">
            This demonstrates how a divider can be used to separate content
            sections within a card or panel.
          </XDSText>
          <XDSDivider label="More Info" />
          <XDSText type="supporting">
            Additional details can appear below a labeled divider.
          </XDSText>
        </XDSVStack>
      </XDSCard>
    </XDSSection>
}`,...D.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <XDSSection variant="muted">
      <XDSCard height={200}>
        <XDSHStack gap={4} xstyle={styles.fullHeight}>
          <XDSText type="body">Left content</XDSText>
          <XDSDivider orientation="vertical" isFullBleed />
          <XDSText type="body">Right content</XDSText>
        </XDSHStack>
      </XDSCard>
    </XDSSection>
}`,...x.parameters?.docs?.source}}};const w=["Default","WithLabel","Variants","FullBleed","Vertical","VerticalWithLabel","InCard","FullBleedVertical"];export{d as Default,c as FullBleed,x as FullBleedVertical,D as InCard,l as Variants,S as Vertical,p as VerticalWithLabel,o as WithLabel,w as __namedExportsOrder,k as default};
