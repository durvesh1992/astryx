import{ad as e,s as k,Y as L,Z as b}from"./iframe-yRFQ_7VC.js";import{X as r}from"./XDSCodeBlock-B5b8s25t.js";import{a as N,X as t,c as D,b as P,d as v,g as j,e as U,m as X,n as T,o as B,f as E,s as w,t as H,h as I}from"./presets-DdfaAlJl.js";import"./preload-helper-Ct5FWWRu.js";import"./highlightRanges-DQjygsEE.js";const s=["import {useState, useEffect} from 'react';","","interface User {","  id: string;","  name: string;","  roles: string[];","}","",'const API_URL = "https://api.example.com";',"const MAX_RETRIES = 3;","","// Fetch user data with retry logic","async function fetchUser(id: string): Promise<User> {","  const response = await fetch(`${API_URL}/users/${id}`);","  if (!response.ok) {","    throw new Error(`HTTP ${response.status}`);","  }","  return response.json();","}","","export function UserCard({id}: {id: string}) {","  const [user, setUser] = useState<User | null>(null);","","  useEffect(() => {","    fetchUser(id).then(setUser);","  }, [id]);","","  if (!user) return <div>Loading...</div>;","","  return (",'    <div className="card">',"      <h2>{user.name}</h2>","      <span>{user.roles.length} roles</span>","    </div>","  );","}"].join(`
`),$={title:"Core/CodeTheme",tags:["autodocs"],parameters:{docs:{description:{component:"Syntax theme provider for code components. Wraps XDSCodeBlock and XDSCodeEditor to apply community syntax color themes. 12 presets ship in @xds/core/theme/syntax."}}}},a={render:()=>e.jsx(t,{theme:B,children:e.jsx(r,{code:s,language:"typescript",title:"UserCard.tsx",hasLineNumbers:!0})})},o={render:()=>e.jsx(t,{theme:v,children:e.jsx(r,{code:s,language:"typescript",title:"UserCard.tsx",hasLineNumbers:!0})})},n={render:()=>e.jsx(t,{theme:X,children:e.jsx(r,{code:s,language:"typescript",title:"UserCard.tsx",hasLineNumbers:!0})})},d={render:()=>e.jsx(t,{theme:T,children:e.jsx(r,{code:s,language:"typescript",title:"UserCard.tsx",hasLineNumbers:!0})})},i={render:()=>e.jsx(t,{theme:H,children:e.jsx(r,{code:s,language:"typescript",title:"UserCard.tsx",hasLineNumbers:!0})})},c={render:()=>e.jsx(t,{theme:P,children:e.jsx(r,{code:s,language:"typescript",title:"UserCard.tsx",hasLineNumbers:!0})})},m={render:()=>e.jsx(t,{theme:U,children:e.jsx(r,{code:s,language:"typescript",title:"UserCard.tsx",hasLineNumbers:!0})})},p={render:()=>e.jsx(t,{theme:j,children:e.jsx(r,{code:s,language:"typescript",title:"UserCard.tsx",hasLineNumbers:!0})})},l={render:()=>e.jsx(t,{theme:w,children:e.jsx(r,{code:s,language:"typescript",title:"UserCard.tsx",hasLineNumbers:!0})})},u={render:()=>e.jsx(t,{theme:E,children:e.jsx(r,{code:s,language:"typescript",title:"UserCard.tsx",hasLineNumbers:!0})})},h={render:()=>e.jsx(t,{theme:D,children:e.jsx(r,{code:s,language:"typescript",title:"UserCard.tsx",hasLineNumbers:!0})})},g={render:()=>e.jsx(t,{theme:I,children:e.jsx(r,{code:s,language:"typescript",title:"UserCard.tsx",hasLineNumbers:!0})})},M=["const greet = (name: string) => {","  // Say hello","  return `Hello, ${name}!`;","};","",'const result = greet("World");',"console.log(result); // Hello, World!"].join(`
`),x={render:()=>e.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16},children:N.map(f=>e.jsx(t,{theme:f,children:e.jsx(r,{code:M,language:"typescript",title:f.name,hasLineNumbers:!0})},f.name))}),parameters:{layout:"padded"}},y={render:()=>e.jsx(t,{theme:T,children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(r,{code:"// Inherits Nord from provider",language:"typescript",title:"nord (from provider)"}),e.jsx(t,{theme:v,children:e.jsx(r,{code:"// Inner provider overrides to Dracula",language:"typescript",title:"dracula (inner override)"})})]})})},O=L({name:"cyberpunk",tokens:{keyword:"#ff2a6d",string:"#05d9e8",comment:"#4a5568",number:"#d1f7ff",function:"#ff6ac1",type:"#7efff5",variable:"#e2e8f0",operator:"#ff9e64",constant:"#d1f7ff",tag:"#ff2a6d",attribute:"#7efff5",property:"#05d9e8",punctuation:"#718096",background:"#0d0221"}}),S={render:()=>e.jsx(t,{theme:O,children:e.jsx(r,{code:s,language:"typescript",title:"Custom: Cyberpunk",hasLineNumbers:!0})})},G=b({name:"dark-dev",syntax:v,tokens:{"--color-background-surface":"#282a36","--color-text-primary":"#f8f8f2"}}),C={render:()=>e.jsx(k,{theme:G,mode:"dark",children:e.jsx(r,{code:s,language:"typescript",title:"defineTheme with syntax: dracula",hasLineNumbers:!0})})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <SyntaxThemeProvider theme={oneDarkPro}>
      <XDSCodeBlock code={sampleCode} language="typescript" title="UserCard.tsx" hasLineNumbers />
    </SyntaxThemeProvider>
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <SyntaxThemeProvider theme={dracula}>
      <XDSCodeBlock code={sampleCode} language="typescript" title="UserCard.tsx" hasLineNumbers />
    </SyntaxThemeProvider>
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <SyntaxThemeProvider theme={monokai}>
      <XDSCodeBlock code={sampleCode} language="typescript" title="UserCard.tsx" hasLineNumbers />
    </SyntaxThemeProvider>
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <SyntaxThemeProvider theme={nord}>
      <XDSCodeBlock code={sampleCode} language="typescript" title="UserCard.tsx" hasLineNumbers />
    </SyntaxThemeProvider>
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <SyntaxThemeProvider theme={tokyoNight}>
      <XDSCodeBlock code={sampleCode} language="typescript" title="UserCard.tsx" hasLineNumbers />
    </SyntaxThemeProvider>
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <SyntaxThemeProvider theme={catppuccinMocha}>
      <XDSCodeBlock code={sampleCode} language="typescript" title="UserCard.tsx" hasLineNumbers />
    </SyntaxThemeProvider>
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <SyntaxThemeProvider theme={githubLight}>
      <XDSCodeBlock code={sampleCode} language="typescript" title="UserCard.tsx" hasLineNumbers />
    </SyntaxThemeProvider>
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <SyntaxThemeProvider theme={githubDark}>
      <XDSCodeBlock code={sampleCode} language="typescript" title="UserCard.tsx" hasLineNumbers />
    </SyntaxThemeProvider>
}`,...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <SyntaxThemeProvider theme={solarizedLight}>
      <XDSCodeBlock code={sampleCode} language="typescript" title="UserCard.tsx" hasLineNumbers />
    </SyntaxThemeProvider>
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <SyntaxThemeProvider theme={oneLight}>
      <XDSCodeBlock code={sampleCode} language="typescript" title="UserCard.tsx" hasLineNumbers />
    </SyntaxThemeProvider>
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <SyntaxThemeProvider theme={catppuccinLatte}>
      <XDSCodeBlock code={sampleCode} language="typescript" title="UserCard.tsx" hasLineNumbers />
    </SyntaxThemeProvider>
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <SyntaxThemeProvider theme={tokyoNightLight}>
      <XDSCodeBlock code={sampleCode} language="typescript" title="UserCard.tsx" hasLineNumbers />
    </SyntaxThemeProvider>
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 16
  }}>
      {allSyntaxPresets.map(theme => <SyntaxThemeProvider key={theme.name} theme={theme}>
          <XDSCodeBlock code={shortCode} language="typescript" title={theme.name} hasLineNumbers />
        </SyntaxThemeProvider>)}
    </div>,
  parameters: {
    layout: 'padded'
  }
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <SyntaxThemeProvider theme={nord}>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }}>
        <XDSCodeBlock code="// Inherits Nord from provider" language="typescript" title="nord (from provider)" />
        <SyntaxThemeProvider theme={dracula}>
          <XDSCodeBlock code="// Inner provider overrides to Dracula" language="typescript" title="dracula (inner override)" />
        </SyntaxThemeProvider>
      </div>
    </SyntaxThemeProvider>
}`,...y.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <SyntaxThemeProvider theme={cyberpunk}>
      <XDSCodeBlock code={sampleCode} language="typescript" title="Custom: Cyberpunk" hasLineNumbers />
    </SyntaxThemeProvider>
}`,...S.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <XDSTheme theme={darkDevTheme} mode="dark">
      <XDSCodeBlock code={sampleCode} language="typescript" title="defineTheme with syntax: dracula" hasLineNumbers />
    </XDSTheme>
}`,...C.parameters?.docs?.source}}};const F=["OneDarkPro","Dracula","Monokai","Nord","TokyoNight","CatppuccinMocha","GitHubLight","GitHubDark","SolarizedLight","OneLight","CatppuccinLatte","TokyoNightLight","AllThemesGallery","NestedOverride","CustomTheme","ThemeWithSyntaxDefaults"];export{x as AllThemesGallery,h as CatppuccinLatte,c as CatppuccinMocha,S as CustomTheme,o as Dracula,p as GitHubDark,m as GitHubLight,n as Monokai,y as NestedOverride,d as Nord,a as OneDarkPro,u as OneLight,l as SolarizedLight,C as ThemeWithSyntaxDefaults,i as TokyoNight,g as TokyoNightLight,F as __namedExportsOrder,$ as default};
