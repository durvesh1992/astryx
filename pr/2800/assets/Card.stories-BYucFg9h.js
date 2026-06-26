import{ad as e,X as v}from"./iframe-yRFQ_7VC.js";import{X as a}from"./XDSCard-CyDoBnn3.js";import{X as t}from"./XDSSection-C0P8UZDV.js";import{X as D,b as j}from"./XDSLayoutContent-DBrMIkuH.js";import{X}from"./XDSLayoutHeader-ByHa8jrV.js";import{X as C}from"./XDSLayoutFooter-BJLeHzEf.js";import{X as s}from"./XDSVStack-uMCoSZ_B.js";import{X as r}from"./XDSHeading---Kr4LhL.js";import{X as w}from"./XDSHStack-BmU4dpCo.js";import"./preload-helper-Ct5FWWRu.js";import"./container.stylex-BI6SFdSl.js";import"./padding.stylex-BDg7w1Mn.js";import"./stack.stylex-5XIQDawT.js";import"./stackItem.stylex-CYo-hkeX.js";import"./XDSStack-CFJ7xIVk.js";const O={title:"Core/Card",component:a,tags:["autodocs"],decorators:[n=>e.jsx("div",{className:"x1eiddq6 x1gt495",children:e.jsx(n,{})})],argTypes:{width:{control:{type:"range",min:100,max:800,step:10},description:"Width in pixels"},height:{control:{type:"range",min:100,max:600,step:10},description:"Height in pixels"},maxWidth:{control:{type:"range",min:100,max:800,step:10},description:"Maximum width in pixels"},minHeight:{control:{type:"range",min:100,max:600,step:10},description:"Minimum height in pixels"}}},c={args:{width:300},render:n=>e.jsx(a,{...n,children:e.jsx("p",{className:"x9ynric x1tgivj0 x1ghz6dp",children:"Simple content inside a card. The card provides default padding via the --container-padding CSS variable."})})},o={render:()=>e.jsx(a,{width:320,children:e.jsxs(s,{gap:2,children:[e.jsx(r,{level:3,children:"Card Title"}),e.jsx("p",{className:"x9ynric x1ghz6dp xv1l7n4 xif65rj",children:"This card contains simple content without XDSLayout. The container padding is applied automatically."})]})})},p={render:()=>e.jsx(a,{width:350,children:e.jsx(D,{header:e.jsx(X,{hasDivider:!0,children:e.jsx(r,{level:3,children:"Card with Layout"})}),content:e.jsx(j,{children:e.jsx("p",{className:"x9ynric x1ghz6dp xv1l7n4 xif65rj",children:"When using XDSLayout, the layout uses negative margin to escape the container padding, then manages its own padding."})}),footer:e.jsx(C,{hasDivider:!0,children:e.jsxs(w,{gap:2,hAlign:"end",children:[e.jsx(v,{label:"Cancel",variant:"secondary",children:"Cancel"}),e.jsx(v,{label:"Save",variant:"primary",children:"Save"})]})})})})},h={render:()=>e.jsxs("div",{className:"x78zum5 x1qh66ti x1a02dak",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"xrcdmg7 x9ynric xif65rj xv1l7n4",children:"Small (200px)"}),e.jsx(a,{width:200,children:e.jsx("p",{className:"x9ynric x1tgivj0 x1ghz6dp",children:"Small card"})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"xrcdmg7 x9ynric xif65rj xv1l7n4",children:"Medium (300px)"}),e.jsx(a,{width:300,children:e.jsx("p",{className:"x9ynric x1tgivj0 x1ghz6dp",children:"Medium card"})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"xrcdmg7 x9ynric xif65rj xv1l7n4",children:"Large (400px)"}),e.jsx(a,{width:400,children:e.jsx("p",{className:"x9ynric x1tgivj0 x1ghz6dp",children:"Large card"})})]})]})},x={render:()=>e.jsx(a,{width:300,height:200,children:e.jsx(D,{header:e.jsx(X,{hasDivider:!0,children:e.jsx(r,{level:3,children:"Fixed Height Card"})}),content:e.jsx(j,{children:e.jsx("p",{className:"x9ynric x1ghz6dp xv1l7n4 xif65rj",children:"This card has a fixed height. Content area will scroll if needed."})})})})},S={render:()=>e.jsx(a,{width:400,children:e.jsxs(s,{gap:3,children:[e.jsx(r,{level:3,children:"Parent Card"}),e.jsx(a,{width:"100%",children:e.jsx("p",{className:"x9ynric x1ghz6dp xv1l7n4 xif65rj",children:"Nested card resets --container-padding and gets its own padding."})}),e.jsx(a,{width:"100%",children:e.jsx("p",{className:"x9ynric x1ghz6dp xv1l7n4 xif65rj",children:"Another nested card with independent padding."})})]})})},g={render:()=>e.jsxs(a,{width:400,children:[e.jsx(t,{variant:"transparent",dividers:["bottom"],children:e.jsxs(s,{gap:2,children:[e.jsx(r,{level:3,children:"First Section"}),e.jsx("p",{className:"x9ynric x1ghz6dp xv1l7n4 xif65rj",children:"This section escapes the card padding on top and sides because it's the first child."})]})}),e.jsx(t,{variant:"transparent",dividers:["bottom"],children:e.jsxs(s,{gap:2,children:[e.jsx(r,{level:3,children:"Middle Section"}),e.jsx("p",{className:"x9ynric x1ghz6dp xv1l7n4 xif65rj",children:"Middle sections only escape horizontal padding, maintaining visual separation from adjacent sections."})]})}),e.jsx(t,{variant:"transparent",children:e.jsxs(s,{gap:2,children:[e.jsx(r,{level:3,children:"Last Section"}),e.jsx("p",{className:"x9ynric x1ghz6dp xv1l7n4 xif65rj",children:"This section escapes the card padding on bottom and sides because it's the last child."})]})})]})},y={render:()=>e.jsx(a,{width:350,children:e.jsx(t,{variant:"muted",children:e.jsxs(s,{gap:2,children:[e.jsx(r,{level:3,children:"Only Section (Full Bleed All Sides)"}),e.jsx("p",{className:"x9ynric x1ghz6dp xv1l7n4 xif65rj",children:"When a section is both first and last child, it gets full bleed on all four sides, completely filling the card."})]})})})},m={render:()=>e.jsxs("div",{className:"x78zum5 x1qh66ti x1a02dak",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"xrcdmg7 x9ynric xif65rj xv1l7n4",children:"Simple Content"}),e.jsx(a,{width:250,children:e.jsxs(s,{gap:2,children:[e.jsx(r,{level:3,children:"Card Title"}),e.jsx("p",{className:"x9ynric x1ghz6dp xv1l7n4 xif65rj",children:"Regular content uses the card's container padding."})]})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"xrcdmg7 x9ynric xif65rj xv1l7n4",children:"With Section"}),e.jsx(a,{width:250,children:e.jsx(t,{variant:"muted",children:e.jsxs(s,{gap:2,children:[e.jsx(r,{level:3,children:"Card Title"}),e.jsx("p",{className:"x9ynric x1ghz6dp xv1l7n4 xif65rj",children:"Section content bleeds to the card edges."})]})})})]})]})},u={render:()=>e.jsxs("div",{className:"x78zum5 x1qh66ti x1a02dak",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"xrcdmg7 x9ynric xif65rj xv1l7n4",children:"Default (with padding)"}),e.jsx(a,{width:250,children:e.jsx("div",{style:{backgroundColor:"rgba(0,100,200,0.2)",padding:8},children:e.jsx("p",{className:"x9ynric x1tgivj0 x1ghz6dp",children:"Content with card padding"})})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"xrcdmg7 x9ynric xif65rj xv1l7n4",children:"Full Bleed (no padding)"}),e.jsx(a,{width:250,padding:0,children:e.jsx("div",{style:{backgroundColor:"rgba(0,100,200,0.2)",padding:8},children:e.jsx("p",{className:"x9ynric x1tgivj0 x1ghz6dp",children:"Content touches card edges"})})})]})]})},d={decorators:[n=>e.jsx(n,{})],render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:0},children:[e.jsxs("div",{className:"x1eiddq6 x1gt495",children:[e.jsx("h4",{className:"xrcdmg7 x9ynric xif65rj xv1l7n4",children:"Cards on wash background"}),e.jsxs("div",{className:"x78zum5 x1qh66ti x1a02dak",children:[e.jsx(a,{width:250,children:e.jsxs(s,{gap:2,children:[e.jsx(r,{level:3,children:"Card on Wash"}),e.jsx("p",{className:"x9ynric x1ghz6dp xv1l7n4 xif65rj",children:"Cards stand out clearly against the wash background, creating a layered visual hierarchy."})]})}),e.jsx(a,{width:250,children:e.jsxs(s,{gap:2,children:[e.jsx(r,{level:3,children:"Another Card"}),e.jsx("p",{className:"x9ynric x1ghz6dp xv1l7n4 xif65rj",children:"Multiple cards on wash create a dashboard-like layout."})]})})]})]}),e.jsxs(t,{variant:"section",width:"100%",children:[e.jsx("h4",{className:"xrcdmg7 x9ynric xif65rj xv1l7n4",children:"Cards on surface section"}),e.jsxs("div",{className:"x78zum5 x1qh66ti x1a02dak",children:[e.jsx(a,{width:250,children:e.jsxs(s,{gap:2,children:[e.jsx(r,{level:3,children:"Card on Surface"}),e.jsx("p",{className:"x9ynric x1ghz6dp xv1l7n4 xif65rj",children:"On a surface background, cards are more subtle since both share the same base color."})]})}),e.jsx(a,{width:250,children:e.jsxs(s,{gap:2,children:[e.jsx(r,{level:3,children:"Another Card"}),e.jsx("p",{className:"x9ynric x1ghz6dp xv1l7n4 xif65rj",children:"The card border provides separation from the surface."})]})})]})]})]})},i={render:()=>e.jsxs("div",{className:"x78zum5 x1qh66ti x1a02dak",children:[e.jsx(a,{width:350,variant:"muted",children:e.jsxs(s,{gap:2,children:[e.jsx(r,{level:3,children:"💡 Tip"}),e.jsxs("p",{className:"x9ynric x1ghz6dp xv1l7n4 xif65rj",children:["Use ",e.jsx("code",{children:'variant="muted"'})," for callouts, tips, or highlighted information. The muted background provides visual contrast without needing a nested section."]})]})}),e.jsx(a,{width:350,variant:"muted",children:e.jsxs(s,{gap:2,children:[e.jsx(r,{level:3,children:"⚠️ Warning"}),e.jsx("p",{className:"x9ynric x1ghz6dp xv1l7n4 xif65rj",children:"Muted cards work well for alerts and warnings too."})]})})]})},l={render:()=>e.jsx("div",{className:"x78zum5 x1qh66ti x1a02dak",children:["default","muted","blue","cyan","gray","green","orange","pink","purple","red","teal","yellow"].map(n=>e.jsxs("div",{children:[e.jsx("h4",{className:"xrcdmg7 x9ynric xif65rj xv1l7n4",children:n}),e.jsx(a,{width:160,variant:n,children:e.jsx("p",{className:"x9ynric x1tgivj0 x1ghz6dp",children:n})})]},n))})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    width: 300
  },
  render: args => <XDSCard {...args}>
      <p {...stylex.props(styles.text)}>
        Simple content inside a card. The card provides default padding via the
        --container-padding CSS variable.
      </p>
    </XDSCard>
}`,...c.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <XDSCard width={320}>
      <XDSVStack gap={2}>
        <XDSHeading level={3}>Card Title</XDSHeading>
        <p {...stylex.props(styles.text, styles.textSecondary)}>
          This card contains simple content without XDSLayout. The container
          padding is applied automatically.
        </p>
      </XDSVStack>
    </XDSCard>
}`,...o.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <XDSCard width={350}>
      <XDSLayout header={<XDSLayoutHeader hasDivider>
            <XDSHeading level={3}>Card with Layout</XDSHeading>
          </XDSLayoutHeader>} content={<XDSLayoutContent>
            <p {...stylex.props(styles.text, styles.textSecondary)}>
              When using XDSLayout, the layout uses negative margin to escape
              the container padding, then manages its own padding.
            </p>
          </XDSLayoutContent>} footer={<XDSLayoutFooter hasDivider>
            <XDSHStack gap={2} hAlign="end">
              <XDSButton label="Cancel" variant="secondary">
                Cancel
              </XDSButton>
              <XDSButton label="Save" variant="primary">
                Save
              </XDSButton>
            </XDSHStack>
          </XDSLayoutFooter>} />
    </XDSCard>
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div {...stylex.props(styles.storyWrapper)}>
      <div>
        <h4 {...stylex.props(styles.heading)}>Small (200px)</h4>
        <XDSCard width={200}>
          <p {...stylex.props(styles.text)}>Small card</p>
        </XDSCard>
      </div>
      <div>
        <h4 {...stylex.props(styles.heading)}>Medium (300px)</h4>
        <XDSCard width={300}>
          <p {...stylex.props(styles.text)}>Medium card</p>
        </XDSCard>
      </div>
      <div>
        <h4 {...stylex.props(styles.heading)}>Large (400px)</h4>
        <XDSCard width={400}>
          <p {...stylex.props(styles.text)}>Large card</p>
        </XDSCard>
      </div>
    </div>
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <XDSCard width={300} height={200}>
      <XDSLayout header={<XDSLayoutHeader hasDivider>
            <XDSHeading level={3}>Fixed Height Card</XDSHeading>
          </XDSLayoutHeader>} content={<XDSLayoutContent>
            <p {...stylex.props(styles.text, styles.textSecondary)}>
              This card has a fixed height. Content area will scroll if needed.
            </p>
          </XDSLayoutContent>} />
    </XDSCard>
}`,...x.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <XDSCard width={400}>
      <XDSVStack gap={3}>
        <XDSHeading level={3}>Parent Card</XDSHeading>
        <XDSCard width="100%">
          <p {...stylex.props(styles.text, styles.textSecondary)}>
            Nested card resets --container-padding and gets its own padding.
          </p>
        </XDSCard>
        <XDSCard width="100%">
          <p {...stylex.props(styles.text, styles.textSecondary)}>
            Another nested card with independent padding.
          </p>
        </XDSCard>
      </XDSVStack>
    </XDSCard>
}`,...S.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <XDSCard width={400}>
      <XDSSection variant="transparent" dividers={['bottom']}>
        <XDSVStack gap={2}>
          <XDSHeading level={3}>First Section</XDSHeading>
          <p {...stylex.props(styles.text, styles.textSecondary)}>
            This section escapes the card padding on top and sides because it's
            the first child.
          </p>
        </XDSVStack>
      </XDSSection>
      <XDSSection variant="transparent" dividers={['bottom']}>
        <XDSVStack gap={2}>
          <XDSHeading level={3}>Middle Section</XDSHeading>
          <p {...stylex.props(styles.text, styles.textSecondary)}>
            Middle sections only escape horizontal padding, maintaining visual
            separation from adjacent sections.
          </p>
        </XDSVStack>
      </XDSSection>
      <XDSSection variant="transparent">
        <XDSVStack gap={2}>
          <XDSHeading level={3}>Last Section</XDSHeading>
          <p {...stylex.props(styles.text, styles.textSecondary)}>
            This section escapes the card padding on bottom and sides because
            it's the last child.
          </p>
        </XDSVStack>
      </XDSSection>
    </XDSCard>
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <XDSCard width={350}>
      <XDSSection variant="muted">
        <XDSVStack gap={2}>
          <XDSHeading level={3}>Only Section (Full Bleed All Sides)</XDSHeading>
          <p {...stylex.props(styles.text, styles.textSecondary)}>
            When a section is both first and last child, it gets full bleed on
            all four sides, completely filling the card.
          </p>
        </XDSVStack>
      </XDSSection>
    </XDSCard>
}`,...y.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div {...stylex.props(styles.storyWrapper)}>
      <div>
        <h4 {...stylex.props(styles.heading)}>Simple Content</h4>
        <XDSCard width={250}>
          <XDSVStack gap={2}>
            <XDSHeading level={3}>Card Title</XDSHeading>
            <p {...stylex.props(styles.text, styles.textSecondary)}>
              Regular content uses the card's container padding.
            </p>
          </XDSVStack>
        </XDSCard>
      </div>
      <div>
        <h4 {...stylex.props(styles.heading)}>With Section</h4>
        <XDSCard width={250}>
          <XDSSection variant="muted">
            <XDSVStack gap={2}>
              <XDSHeading level={3}>Card Title</XDSHeading>
              <p {...stylex.props(styles.text, styles.textSecondary)}>
                Section content bleeds to the card edges.
              </p>
            </XDSVStack>
          </XDSSection>
        </XDSCard>
      </div>
    </div>
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div {...stylex.props(styles.storyWrapper)}>
      <div>
        <h4 {...stylex.props(styles.heading)}>Default (with padding)</h4>
        <XDSCard width={250}>
          <div style={{
          backgroundColor: 'rgba(0,100,200,0.2)',
          padding: 8
        }}>
            <p {...stylex.props(styles.text)}>Content with card padding</p>
          </div>
        </XDSCard>
      </div>
      <div>
        <h4 {...stylex.props(styles.heading)}>Full Bleed (no padding)</h4>
        <XDSCard width={250} padding={0}>
          <div style={{
          backgroundColor: 'rgba(0,100,200,0.2)',
          padding: 8
        }}>
            <p {...stylex.props(styles.text)}>Content touches card edges</p>
          </div>
        </XDSCard>
      </div>
    </div>
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <Story />],
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 0
  }}>
      <div {...stylex.props(styles.pageWrapper)}>
        <h4 {...stylex.props(styles.heading)}>Cards on wash background</h4>
        <div {...stylex.props(styles.storyWrapper)}>
          <XDSCard width={250}>
            <XDSVStack gap={2}>
              <XDSHeading level={3}>Card on Wash</XDSHeading>
              <p {...stylex.props(styles.text, styles.textSecondary)}>
                Cards stand out clearly against the wash background, creating a
                layered visual hierarchy.
              </p>
            </XDSVStack>
          </XDSCard>
          <XDSCard width={250}>
            <XDSVStack gap={2}>
              <XDSHeading level={3}>Another Card</XDSHeading>
              <p {...stylex.props(styles.text, styles.textSecondary)}>
                Multiple cards on wash create a dashboard-like layout.
              </p>
            </XDSVStack>
          </XDSCard>
        </div>
      </div>
      <XDSSection variant="section" width="100%">
        <h4 {...stylex.props(styles.heading)}>Cards on surface section</h4>
        <div {...stylex.props(styles.storyWrapper)}>
          <XDSCard width={250}>
            <XDSVStack gap={2}>
              <XDSHeading level={3}>Card on Surface</XDSHeading>
              <p {...stylex.props(styles.text, styles.textSecondary)}>
                On a surface background, cards are more subtle since both share
                the same base color.
              </p>
            </XDSVStack>
          </XDSCard>
          <XDSCard width={250}>
            <XDSVStack gap={2}>
              <XDSHeading level={3}>Another Card</XDSHeading>
              <p {...stylex.props(styles.text, styles.textSecondary)}>
                The card border provides separation from the surface.
              </p>
            </XDSVStack>
          </XDSCard>
        </div>
      </XDSSection>
    </div>
}`,...d.parameters?.docs?.source},description:{story:`Cards shown on top of different background treatments.
Demonstrates the visual contrast between cards on wash (gray)
backgrounds vs surface (white) backgrounds.`,...d.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div {...stylex.props(styles.storyWrapper)}>
      <XDSCard width={350} variant="muted">
        <XDSVStack gap={2}>
          <XDSHeading level={3}>💡 Tip</XDSHeading>
          <p {...stylex.props(styles.text, styles.textSecondary)}>
            Use <code>variant="muted"</code> for callouts, tips, or highlighted
            information. The muted background provides visual contrast without
            needing a nested section.
          </p>
        </XDSVStack>
      </XDSCard>
      <XDSCard width={350} variant="muted">
        <XDSVStack gap={2}>
          <XDSHeading level={3}>⚠️ Warning</XDSHeading>
          <p {...stylex.props(styles.text, styles.textSecondary)}>
            Muted cards work well for alerts and warnings too.
          </p>
        </XDSVStack>
      </XDSCard>
    </div>
}`,...i.parameters?.docs?.source},description:{story:'Callout card: a muted card used as a callout/highlight area.\nUses `variant="muted"` directly on XDSCard instead of wrapping content\nin a wash section — simpler and semantically cleaner.',...i.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div {...stylex.props(styles.storyWrapper)}>
      {(['default', 'muted', 'blue', 'cyan', 'gray', 'green', 'orange', 'pink', 'purple', 'red', 'teal', 'yellow'] as const).map(variant => <div key={variant}>
          <h4 {...stylex.props(styles.heading)}>{variant}</h4>
          <XDSCard width={160} variant={variant}>
            <p {...stylex.props(styles.text)}>{variant}</p>
          </XDSCard>
        </div>)}
    </div>
}`,...l.parameters?.docs?.source},description:{story:"All background color variants in one view.\n`muted` uses the wash background for de-emphasised cards;\nthe non-semantic variants use the `--color-<name>-background` token.",...l.parameters?.docs?.description}}};const R=["Default","WithSimpleContent","WithInnerLayout","Sizes","FixedHeight","NestedCards","NestedSections","SingleSection","MixedContent","FullBleed","OnBackgrounds","Callout","ColorVariants"];export{i as Callout,l as ColorVariants,c as Default,x as FixedHeight,u as FullBleed,m as MixedContent,S as NestedCards,g as NestedSections,d as OnBackgrounds,y as SingleSection,h as Sizes,p as WithInnerLayout,o as WithSimpleContent,R as __namedExportsOrder,O as default};
