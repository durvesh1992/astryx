import{ad as e,s as h,V as j,aW as b,Z as W,at as _}from"./iframe-yRFQ_7VC.js";import{X as u}from"./XDSCard-CyDoBnn3.js";import{X as m}from"./XDSStack-CFJ7xIVk.js";import{X as w}from"./XDSBadge-COTe2g1g.js";import{X as x}from"./XDSHeading---Kr4LhL.js";import"./preload-helper-Ct5FWWRu.js";import"./container.stylex-BI6SFdSl.js";import"./padding.stylex-BDg7w1Mn.js";import"./stack.stylex-5XIQDawT.js";const I=[{label:"Mon",value:42},{label:"Tue",value:78},{label:"Wed",value:56},{label:"Thu",value:91},{label:"Fri",value:64},{label:"Sat",value:35},{label:"Sun",value:48}],X=[{label:"Q1",series:[120,90,70]},{label:"Q2",series:[140,110,85]},{label:"Q3",series:[100,130,95]},{label:"Q4",series:[160,105,120]}];function E({data:s,width:n=400,height:i=200}){const{token:a}=b(),o=Math.max(...s.map(t=>t.value)),g=(n-60)/s.length-8,p=i-40;return e.jsxs("svg",{width:n,height:i,role:"img","aria-label":"Bar chart",children:[[.25,.5,.75,1].map(t=>{const c=p-p*t+20;return e.jsxs("g",{children:[e.jsx("line",{x1:50,y1:c,x2:n-10,y2:c,stroke:a("--color-border"),strokeDasharray:"4 4"}),e.jsx("text",{x:45,y:c+4,textAnchor:"end",fontSize:10,fill:a("--color-text-secondary"),children:Math.round(o*t)})]},t)}),s.map((t,c)=>{const d=t.value/o*p,r=55+c*(g+8),l=p-d+20;return e.jsxs("g",{children:[e.jsx("rect",{x:r,y:l,width:g,height:d,rx:3,fill:a("--color-accent")}),e.jsx("text",{x:r+g/2,y:i-5,textAnchor:"middle",fontSize:11,fill:a("--color-text-secondary"),children:t.label})]},t.label)})]})}function k({data:s,width:n=480,height:i=220}){const{token:a}=b(),o=[a("--color-accent"),a("--color-success"),a("--color-warning")],g=["Revenue","Users","Sessions"],p=Math.max(...s.flatMap(r=>r.series)),t=(n-80)/s.length,c=(t-16)/3,d=i-50;return e.jsxs("div",{children:[e.jsxs("svg",{width:n,height:i,role:"img","aria-label":"Grouped bar chart",children:[[.25,.5,.75,1].map(r=>{const l=d-d*r+20;return e.jsx("line",{x1:55,y1:l,x2:n-10,y2:l,stroke:a("--color-border"),strokeDasharray:"4 4"},r)}),s.map((r,l)=>{const C=60+l*t;return e.jsxs("g",{children:[r.series.map((B,f)=>{const A=B/p*d,M=C+f*(c+2),R=d-A+20;return e.jsx("rect",{x:M,y:R,width:c,height:A,rx:2,fill:o[f],opacity:.85},f)}),e.jsx("text",{x:C+(t-16)/2,y:i-26,textAnchor:"middle",fontSize:11,fill:a("--color-text-secondary"),children:r.label})]},r.label)})]}),e.jsx("div",{style:{display:"flex",gap:16,paddingLeft:55},children:g.map((r,l)=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[e.jsx("div",{style:{width:10,height:10,borderRadius:2,backgroundColor:o[l],opacity:.85}}),e.jsx("span",{style:{fontSize:11,color:a("--color-text-secondary")},children:r})]},r))})]})}function H(){const{token:s,mode:n,name:i}=b(),a=["--color-accent","--color-success","--color-warning","--color-error","--color-text-primary","--color-text-secondary","--color-background-surface","--color-border","--spacing-4","--radius-element"];return e.jsx(u,{children:e.jsxs(m,{direction:"vertical",gap:2,children:[e.jsxs(m,{direction:"horizontal",gap:2,vAlign:"center",children:[e.jsx(x,{level:4,children:"Token Inspector"}),e.jsx(w,{label:i}),e.jsx(w,{variant:n==="dark"?"neutral":"info",label:n})]}),e.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr auto",gap:"4px 16px",fontFamily:"monospace",fontSize:12},children:a.map(o=>e.jsxs(_.Fragment,{children:[e.jsx("span",{style:{color:s("--color-text-secondary")},children:o}),e.jsxs("span",{style:{display:"flex",alignItems:"center",gap:6},children:[o.startsWith("--color-")&&e.jsx("span",{style:{display:"inline-block",width:14,height:14,borderRadius:3,backgroundColor:s(o),border:`1px solid ${s("--color-border-emphasized")}`}}),e.jsx("code",{children:s(o)})]})]},o))})]})})}const F=W({name:"ocean",tokens:{"--color-accent":["#0077B6","#48CAE4"],"--color-success":["#2D6A4F","#52B788"],"--color-warning":["#E76F51","#F4A261"],"--color-background-surface":["#F0F8FF","#0A1628"],"--color-text-primary":["#023E8A","#CAF0F8"],"--color-text-secondary":["#4A7FB5","#89C2D9"],"--color-border":["#ADE8F433","#02394A66"]},typography:{scale:{base:14,ratio:1.2}}}),q={title:"Core/XDSTheme",parameters:{docs:{description:{component:"`XDSTheme` applies a theme to its children via CSS custom properties and provides programmatic token access through `useXDSTheme()`.\n\n`useXDSTheme()` returns resolved token values for the current color mode, designed for non-CSS consumers like data visualization libraries, canvas rendering, and SVG charts that need concrete values (hex colors, px values) rather than CSS custom property references.\n\n**No double render.** Values are available on first paint; no `getComputedStyle` or `useEffect` needed."}}}},S={render:()=>e.jsx(h,{theme:j,mode:"light",children:e.jsxs(m,{direction:"vertical",gap:4,children:[e.jsx(x,{level:3,children:"Weekly Activity"}),e.jsx(u,{children:e.jsx(E,{data:I})})]})})},T={render:()=>e.jsx(h,{theme:j,mode:"dark",children:e.jsxs(m,{direction:"vertical",gap:4,children:[e.jsx(x,{level:3,children:"Weekly Activity"}),e.jsx(u,{children:e.jsx(E,{data:I})})]})})},y={render:()=>e.jsx(h,{theme:j,mode:"light",children:e.jsxs(m,{direction:"vertical",gap:4,children:[e.jsx(x,{level:3,children:"Quarterly Metrics"}),e.jsx(u,{children:e.jsx(k,{data:X})})]})})},v={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16},children:[e.jsx(h,{theme:j,mode:"light",children:e.jsxs(m,{direction:"vertical",gap:2,children:[e.jsx(x,{level:4,children:"Default Theme"}),e.jsx(u,{children:e.jsx(k,{data:X,width:360})})]})}),e.jsx(h,{theme:F,mode:"light",children:e.jsxs(m,{direction:"vertical",gap:2,children:[e.jsx(x,{level:4,children:"Ocean Theme"}),e.jsx(u,{children:e.jsx(k,{data:X,width:360})})]})})]})},D={name:"Token Inspector",render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16},children:[e.jsx(h,{theme:j,mode:"light",children:e.jsx(H,{})}),e.jsx(h,{theme:F,mode:"dark",children:e.jsx(H,{})})]})};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <XDSTheme theme={defaultTheme} mode="light">
      <XDSStack direction="vertical" gap={4}>
        <XDSHeading level={3}>Weekly Activity</XDSHeading>
        <XDSCard>
          <ThemeAwareBarChart data={CHART_DATA} />
        </XDSCard>
      </XDSStack>
    </XDSTheme>
}`,...S.parameters?.docs?.source},description:{story:"A simple bar chart using `useXDSTheme` to read token values.\nThe chart colors, text, and grid lines all come from the theme.",...S.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <XDSTheme theme={defaultTheme} mode="dark">
      <XDSStack direction="vertical" gap={4}>
        <XDSHeading level={3}>Weekly Activity</XDSHeading>
        <XDSCard>
          <ThemeAwareBarChart data={CHART_DATA} />
        </XDSCard>
      </XDSStack>
    </XDSTheme>
}`,...T.parameters?.docs?.source},description:{story:`The same chart in dark mode \\u2014 token values automatically resolve
to their dark variants.`,...T.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <XDSTheme theme={defaultTheme} mode="light">
      <XDSStack direction="vertical" gap={4}>
        <XDSHeading level={3}>Quarterly Metrics</XDSHeading>
        <XDSCard>
          <ThemeAwareGroupedChart data={MULTI_SERIES} />
        </XDSCard>
      </XDSStack>
    </XDSTheme>
}`,...y.parameters?.docs?.source},description:{story:`A grouped bar chart using multiple color tokens (accent, success, warning)
to differentiate data series.`,...y.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 16
  }}>
      <XDSTheme theme={defaultTheme} mode="light">
        <XDSStack direction="vertical" gap={2}>
          <XDSHeading level={4}>Default Theme</XDSHeading>
          <XDSCard>
            <ThemeAwareGroupedChart data={MULTI_SERIES} width={360} />
          </XDSCard>
        </XDSStack>
      </XDSTheme>
      <XDSTheme theme={oceanTheme} mode="light">
        <XDSStack direction="vertical" gap={2}>
          <XDSHeading level={4}>Ocean Theme</XDSHeading>
          <XDSCard>
            <ThemeAwareGroupedChart data={MULTI_SERIES} width={360} />
          </XDSCard>
        </XDSStack>
      </XDSTheme>
    </div>
}`,...v.parameters?.docs?.source},description:{story:`Side-by-side comparison: same chart rendered with two different themes.
The ocean theme overrides accent, success, and warning colors.`,...v.parameters?.docs?.description}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Token Inspector',
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 16
  }}>
      <XDSTheme theme={defaultTheme} mode="light">
        <TokenInspector />
      </XDSTheme>
      <XDSTheme theme={oceanTheme} mode="dark">
        <TokenInspector />
      </XDSTheme>
    </div>
}`,...D.parameters?.docs?.source},description:{story:`Shows the raw resolved token values for both themes side by side.
Useful for debugging and understanding what values your charts receive.`,...D.parameters?.docs?.description}}};const J=["BarChart","BarChartDark","GroupedChart","ThemeComparison","TokenInspectorStory"];export{S as BarChart,T as BarChartDark,y as GroupedChart,v as ThemeComparison,D as TokenInspectorStory,J as __namedExportsOrder,q as default};
