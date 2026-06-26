import{ad as e,r}from"./iframe-yRFQ_7VC.js";import{X as c}from"./XDSStack-CFJ7xIVk.js";import{X as p}from"./XDSLink-CIWTg4UH.js";import{X as t}from"./XDSCode-CEZ5ThnD.js";import"./preload-helper-Ct5FWWRu.js";import"./stack.stylex-5XIQDawT.js";import"./computeTargetAndRel-BlG0ENK0.js";import"./useXDSInteractiveRole-C4QNKBOy.js";const y={title:"Core/Code",component:t,tags:["autodocs"],argTypes:{children:{control:"text",description:"Code content"}}},o={args:{children:"const x = 1"}},s={name:"Inline in paragraph",render:()=>e.jsxs(r,{type:"body",children:["Use ",e.jsx(t,{children:"useState"})," for local state and"," ",e.jsx(t,{children:"useEffect"})," for side effects. If you need shared state across components, consider ",e.jsx(t,{children:"useContext"})," or a state management library."]})},a={name:"Instructional text",render:()=>e.jsxs(c,{gap:3,children:[e.jsxs(r,{type:"body",children:["Install the package with ",e.jsx(t,{children:"npm install @xds/core"}),", then import the component:"]}),e.jsxs(r,{type:"body",children:["Add ",e.jsx(t,{children:'<XDSButton label="Save">Save</XDSButton>'})," to your JSX. The ",e.jsx(t,{children:"label"})," prop is required for accessibility."]})]})},n={name:"Mixed with links and emphasis",render:()=>e.jsxs(r,{type:"body",children:["The ",e.jsx(t,{children:"XDSThemeProvider"})," component wraps your app and supplies design tokens. See the"," ",e.jsx(p,{href:"/docs/theme",isExternalLink:!1,children:"theme docs"})," ","for setup. Set ",e.jsx(t,{children:'colorScheme="dark"'})," to enable dark mode."]})},d={name:"Various code content",render:()=>e.jsxs(c,{gap:2,children:[e.jsxs(r,{type:"body",children:["Variable: ",e.jsx(t,{children:"const count = 0"})]}),e.jsxs(r,{type:"body",children:["Terminal: ",e.jsx(t,{children:"pnpm build --watch"})]}),e.jsxs(r,{type:"body",children:["CSS property: ",e.jsx(t,{children:"border-radius: 8px"})]}),e.jsxs(r,{type:"body",children:["File path: ",e.jsx(t,{children:"packages/core/src/CodeBlock/XDSCode.tsx"})]}),e.jsxs(r,{type:"body",children:["Keyboard shortcut: ",e.jsx(t,{children:"Ctrl+Shift+P"})]})]})},i={name:"Across text sizes",render:()=>e.jsxs(c,{gap:2,children:[e.jsxs(r,{type:"large",children:["Heading with ",e.jsx(t,{children:"inline code"})]}),e.jsxs(r,{type:"body",children:["Body text with ",e.jsx(t,{children:"inline code"})]}),e.jsxs(r,{type:"supporting",children:["Detail text with ",e.jsx(t,{children:"inline code"})]}),e.jsxs(r,{type:"label",children:["Label text with ",e.jsx(t,{children:"inline code"})]})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'const x = 1'
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Inline in paragraph',
  render: () => <XDSText type="body">
      Use <XDSCode>useState</XDSCode> for local state and{' '}
      <XDSCode>useEffect</XDSCode> for side effects. If you need shared state
      across components, consider <XDSCode>useContext</XDSCode> or a state
      management library.
    </XDSText>
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Instructional text',
  render: () => <XDSStack gap={3}>
      <XDSText type="body">
        Install the package with <XDSCode>npm install @xds/core</XDSCode>, then
        import the component:
      </XDSText>
      <XDSText type="body">
        Add <XDSCode>{'<XDSButton label="Save">Save</XDSButton>'}</XDSCode> to
        your JSX. The <XDSCode>label</XDSCode> prop is required for
        accessibility.
      </XDSText>
    </XDSStack>
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Mixed with links and emphasis',
  render: () => <XDSText type="body">
      The <XDSCode>XDSThemeProvider</XDSCode> component wraps your app and
      supplies design tokens. See the{' '}
      <XDSLink href="/docs/theme" isExternalLink={false}>
        theme docs
      </XDSLink>{' '}
      for setup. Set <XDSCode>colorScheme=&quot;dark&quot;</XDSCode> to enable
      dark mode.
    </XDSText>
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Various code content',
  render: () => <XDSStack gap={2}>
      <XDSText type="body">
        Variable: <XDSCode>const count = 0</XDSCode>
      </XDSText>
      <XDSText type="body">
        Terminal: <XDSCode>pnpm build --watch</XDSCode>
      </XDSText>
      <XDSText type="body">
        CSS property: <XDSCode>border-radius: 8px</XDSCode>
      </XDSText>
      <XDSText type="body">
        File path: <XDSCode>packages/core/src/CodeBlock/XDSCode.tsx</XDSCode>
      </XDSText>
      <XDSText type="body">
        Keyboard shortcut: <XDSCode>Ctrl+Shift+P</XDSCode>
      </XDSText>
    </XDSStack>
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Across text sizes',
  render: () => <XDSStack gap={2}>
      <XDSText type="large">
        Heading with <XDSCode>inline code</XDSCode>
      </XDSText>
      <XDSText type="body">
        Body text with <XDSCode>inline code</XDSCode>
      </XDSText>
      <XDSText type="supporting">
        Detail text with <XDSCode>inline code</XDSCode>
      </XDSText>
      <XDSText type="label">
        Label text with <XDSCode>inline code</XDSCode>
      </XDSText>
    </XDSStack>
}`,...i.parameters?.docs?.source}}};const C=["Default","InParagraph","InstructionalParagraph","MixedInline","VariousContent","TextSizes"];export{o as Default,s as InParagraph,a as InstructionalParagraph,n as MixedInline,i as TextSizes,d as VariousContent,C as __namedExportsOrder,y as default};
