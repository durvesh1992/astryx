import{ad as e,r as t}from"./iframe-yRFQ_7VC.js";import{X as r}from"./XDSBlockquote-kq4Y3FPM.js";import{X as n}from"./XDSCard-CyDoBnn3.js";import{X as o}from"./XDSSection-C0P8UZDV.js";import{X as l}from"./XDSVStack-uMCoSZ_B.js";import"./preload-helper-Ct5FWWRu.js";import"./container.stylex-BI6SFdSl.js";import"./padding.stylex-BDg7w1Mn.js";import"./XDSStack-CFJ7xIVk.js";import"./stack.stylex-5XIQDawT.js";const y={title:"Core/Blockquote",component:r,tags:["autodocs"],argTypes:{cite:{control:"text",description:"Optional attribution for the quote"}}},s={args:{children:"Design is not just what it looks like and feels like. Design is how it works."},render:p=>e.jsx(o,{variant:"muted",children:e.jsx(n,{children:e.jsx(r,{...p})})})},i={render:()=>e.jsx(o,{variant:"muted",children:e.jsx(n,{children:e.jsx(r,{cite:"Steve Jobs",children:"Design is not just what it looks like and feels like. Design is how it works."})})})},a={render:()=>e.jsx(o,{variant:"muted",children:e.jsx(n,{children:e.jsxs(l,{gap:3,children:[e.jsx(t,{type:"body",children:"In a 2003 interview, the importance of design thinking was emphasized:"}),e.jsx(r,{cite:"Steve Jobs",children:"Design is not just what it looks like and feels like. Design is how it works."}),e.jsx(t,{type:"body",children:"This philosophy has guided product development for decades."})]})})})},d={render:()=>e.jsx(o,{variant:"muted",children:e.jsx(n,{children:e.jsxs(r,{children:[e.jsx(t,{type:"body",children:"The best way to predict the future is to invent it."}),e.jsx(t,{type:"supporting",children:"From a talk at PARC in 1971."})]})})})},c={render:()=>e.jsx(o,{variant:"muted",children:e.jsx(n,{children:e.jsx(r,{cite:"Alan Kay",children:e.jsxs(l,{gap:2,children:[e.jsx(t,{type:"body",children:"The best way to predict the future is to invent it."}),e.jsx(t,{type:"body",children:"People who are really serious about software should make their own hardware."})]})})})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Design is not just what it looks like and feels like. Design is how it works.'
  },
  render: args => <XDSSection variant="muted">
      <XDSCard>
        <XDSBlockquote {...args} />
      </XDSCard>
    </XDSSection>
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <XDSSection variant="muted">
      <XDSCard>
        <XDSBlockquote cite="Steve Jobs">
          Design is not just what it looks like and feels like. Design is how it
          works.
        </XDSBlockquote>
      </XDSCard>
    </XDSSection>
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <XDSSection variant="muted">
      <XDSCard>
        <XDSVStack gap={3}>
          <XDSText type="body">
            In a 2003 interview, the importance of design thinking was
            emphasized:
          </XDSText>
          <XDSBlockquote cite="Steve Jobs">
            Design is not just what it looks like and feels like. Design is how
            it works.
          </XDSBlockquote>
          <XDSText type="body">
            This philosophy has guided product development for decades.
          </XDSText>
        </XDSVStack>
      </XDSCard>
    </XDSSection>
}`,...a.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <XDSSection variant="muted">
      <XDSCard>
        <XDSBlockquote>
          <XDSText type="body">
            The best way to predict the future is to invent it.
          </XDSText>
          <XDSText type="supporting">From a talk at PARC in 1971.</XDSText>
        </XDSBlockquote>
      </XDSCard>
    </XDSSection>
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <XDSSection variant="muted">
      <XDSCard>
        <XDSBlockquote cite="Alan Kay">
          <XDSVStack gap={2}>
            <XDSText type="body">
              The best way to predict the future is to invent it.
            </XDSText>
            <XDSText type="body">
              People who are really serious about software should make their own
              hardware.
            </XDSText>
          </XDSVStack>
        </XDSBlockquote>
      </XDSCard>
    </XDSSection>
}`,...c.parameters?.docs?.source}}};const j=["Default","WithCitation","InContent","NestedContent","MultipleParagraphs"];export{s as Default,a as InContent,c as MultipleParagraphs,d as NestedContent,i as WithCitation,j as __namedExportsOrder,y as default};
