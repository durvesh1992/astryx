import{ad as e,r as i}from"./iframe-yRFQ_7VC.js";import{X as n}from"./XDSLink-CIWTg4UH.js";import"./preload-helper-Ct5FWWRu.js";import"./computeTargetAndRel-BlG0ENK0.js";import"./useXDSInteractiveRole-C4QNKBOy.js";const X={title:"Core/Link",component:n,tags:["autodocs"],argTypes:{label:{control:"text",description:"Accessible label (required)"},href:{control:"text",description:"Link destination URL"},color:{control:"select",options:["active","primary","secondary","disabled","placeholder","inherit"],description:"Text color"},hasUnderline:{control:"boolean",description:"Always show underline"},isDisabled:{control:"boolean",description:"Disabled state"},isExternalLink:{control:"boolean",description:"Opens in new tab with external icon"},tooltip:{control:"text",description:"Tooltip text on hover"},isStandalone:{control:"boolean",description:"Standalone (applies base font sizing)"}}},r={args:{label:"Documentation",href:"/docs",children:"Documentation"}},t={args:{label:"Privacy Policy",href:"/privacy",color:"secondary",children:"Privacy Policy"}},a={args:{label:"Learn more",href:"/learn",color:"primary",children:"Learn more"}},s={args:{label:"Always underlined",href:"/underlined",hasUnderline:!0,children:"Always underlined"}},o={args:{label:"Disabled link",href:"/disabled",isDisabled:!0,children:"Disabled link"}},l={args:{label:"GitHub",href:"https://github.com",isExternalLink:!0,children:"GitHub"}},d={args:{label:"Settings",href:"/settings",tooltip:"Configure your preferences",children:"Settings"}},c={args:{label:"Standalone Link",href:"/standalone",isStandalone:!0,children:"Standalone Link"}},p={render:()=>e.jsxs(i,{type:"body",children:["Read the ",e.jsx(n,{href:"/docs",children:"documentation"})," for more information about using XDS components."]})},u={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",maxWidth:"600px"},children:[e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(n,{href:"/active",isStandalone:!0,children:"Active (default)"}),e.jsx(n,{href:"/primary",color:"primary",isStandalone:!0,children:"Primary"}),e.jsx(n,{href:"/secondary",color:"secondary",isStandalone:!0,children:"Secondary"}),e.jsx(n,{href:"/inherit",color:"inherit",isStandalone:!0,children:"Inherit"})]}),e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(n,{href:"/underlined",hasUnderline:!0,isStandalone:!0,children:"With underline"}),e.jsx(n,{href:"https://example.com",isExternalLink:!0,isStandalone:!0,children:"External"}),e.jsx(n,{href:"/tooltip",tooltip:"Helpful info",isStandalone:!0,children:"With tooltip"})]}),e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(n,{href:"/disabled",isDisabled:!0,isStandalone:!0,children:"Disabled active"}),e.jsx(n,{href:"/disabled",color:"secondary",isDisabled:!0,isStandalone:!0,children:"Disabled secondary"})]})]})},h={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx(n,{href:"https://github.com",isExternalLink:!0,isStandalone:!0,children:"GitHub"}),e.jsx(n,{href:"https://developer.mozilla.org",isExternalLink:!0,isStandalone:!0,children:"MDN Web Docs"}),e.jsx(n,{href:"https://react.dev",isExternalLink:!0,hasUnderline:!0,isStandalone:!0,children:"React Documentation"})]})},m={render:()=>e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(n,{href:"/settings",tooltip:"Configure your account settings",isStandalone:!0,children:"Settings"}),e.jsx(n,{href:"/profile",tooltip:"View and edit your profile",isStandalone:!0,children:"Profile"}),e.jsx(n,{href:"/help",tooltip:"Get help and support",color:"secondary",isStandalone:!0,children:"Help"})]})},y={args:{children:"Click me (no href)",onClick:()=>alert("Clicked!")},parameters:{docs:{description:{story:"When `href` is undefined, XDSLink renders a `<button>` with reset styles. Visually identical to a link, but semantically correct for actions that do not navigate."}}}},x={args:{children:"Disabled action",isDisabled:!0},parameters:{docs:{description:{story:"The button fallback supports the `isDisabled` prop with native `disabled` attribute."}}}},S={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px",maxWidth:"600px"},children:[e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(n,{onClick:()=>{},isStandalone:!0,children:"Active (default)"}),e.jsx(n,{onClick:()=>{},color:"primary",isStandalone:!0,children:"Primary"}),e.jsx(n,{onClick:()=>{},color:"secondary",isStandalone:!0,children:"Secondary"}),e.jsx(n,{onClick:()=>{},color:"inherit",isStandalone:!0,children:"Inherit"})]}),e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(n,{onClick:()=>{},hasUnderline:!0,isStandalone:!0,children:"With underline"}),e.jsx(n,{onClick:()=>{},tooltip:"Action tooltip",isStandalone:!0,children:"With tooltip"}),e.jsx(n,{onClick:()=>{},isDisabled:!0,isStandalone:!0,children:"Disabled"})]})]}),parameters:{docs:{description:{story:"Button fallback supports all visual variants (color, underline, tooltip, disabled), visually indistinguishable from a regular link."}}}},f={render:()=>e.jsxs(i,{type:"body",children:["You can ",e.jsx(n,{onClick:()=>alert("Undo!"),children:"undo this action"})," ","if you change your mind."]}),parameters:{docs:{description:{story:"Button fallback works inline within text, just like a regular link. Inspect the DOM; it renders a `<button>` not an `<a>`."}}}},k={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"600px"},children:[e.jsx(i,{type:"large",size:"sm",children:"Link (with href) vs Button (without href)"}),e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"center"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px",alignItems:"center"},children:[e.jsx(n,{href:"/destination",isStandalone:!0,children:"I navigate"}),e.jsx(i,{type:"body",size:"sm",color:"secondary",children:'<a href="/destination">'})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px",alignItems:"center"},children:[e.jsx(n,{onClick:()=>alert("Action!"),isStandalone:!0,children:"I act"}),e.jsx(i,{type:"body",size:"sm",color:"secondary",children:'<button type="button">'})]})]}),e.jsx(i,{type:"body",size:"sm",color:"secondary",children:"Both look the same, but inspect the DOM to see the semantic difference."})]}),parameters:{docs:{description:{story:"Side-by-side comparison showing that links and button fallbacks are visually identical. The only difference is in the rendered DOM element."}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Documentation',
    href: '/docs',
    children: 'Documentation'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Privacy Policy',
    href: '/privacy',
    color: 'secondary',
    children: 'Privacy Policy'
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Learn more',
    href: '/learn',
    color: 'primary',
    children: 'Learn more'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Always underlined',
    href: '/underlined',
    hasUnderline: true,
    children: 'Always underlined'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled link',
    href: '/disabled',
    isDisabled: true,
    children: 'Disabled link'
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'GitHub',
    href: 'https://github.com',
    isExternalLink: true,
    children: 'GitHub'
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Settings',
    href: '/settings',
    tooltip: 'Configure your preferences',
    children: 'Settings'
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Standalone Link',
    href: '/standalone',
    isStandalone: true,
    children: 'Standalone Link'
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <XDSText type="body">
      Read the <XDSLink href="/docs">documentation</XDSLink> for more
      information about using XDS components.
    </XDSText>
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    maxWidth: '600px'
  }}>
      <div style={{
      display: 'flex',
      gap: '16px',
      alignItems: 'center'
    }}>
        <XDSLink href="/active" isStandalone>
          Active (default)
        </XDSLink>
        <XDSLink href="/primary" color="primary" isStandalone>
          Primary
        </XDSLink>
        <XDSLink href="/secondary" color="secondary" isStandalone>
          Secondary
        </XDSLink>
        <XDSLink href="/inherit" color="inherit" isStandalone>
          Inherit
        </XDSLink>
      </div>
      <div style={{
      display: 'flex',
      gap: '16px',
      alignItems: 'center'
    }}>
        <XDSLink href="/underlined" hasUnderline isStandalone>
          With underline
        </XDSLink>
        <XDSLink href="https://example.com" isExternalLink isStandalone>
          External
        </XDSLink>
        <XDSLink href="/tooltip" tooltip="Helpful info" isStandalone>
          With tooltip
        </XDSLink>
      </div>
      <div style={{
      display: 'flex',
      gap: '16px',
      alignItems: 'center'
    }}>
        <XDSLink href="/disabled" isDisabled isStandalone>
          Disabled active
        </XDSLink>
        <XDSLink href="/disabled" color="secondary" isDisabled isStandalone>
          Disabled secondary
        </XDSLink>
      </div>
    </div>
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  }}>
      <XDSLink href="https://github.com" isExternalLink isStandalone>
        GitHub
      </XDSLink>
      <XDSLink href="https://developer.mozilla.org" isExternalLink isStandalone>
        MDN Web Docs
      </XDSLink>
      <XDSLink href="https://react.dev" isExternalLink hasUnderline isStandalone>
        React Documentation
      </XDSLink>
    </div>
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '16px',
    alignItems: 'center'
  }}>
      <XDSLink href="/settings" tooltip="Configure your account settings" isStandalone>
        Settings
      </XDSLink>
      <XDSLink href="/profile" tooltip="View and edit your profile" isStandalone>
        Profile
      </XDSLink>
      <XDSLink href="/help" tooltip="Get help and support" color="secondary" isStandalone>
        Help
      </XDSLink>
    </div>
}`,...m.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Click me (no href)',
    onClick: () => alert('Clicked!')
  },
  parameters: {
    docs: {
      description: {
        story: 'When \`href\` is undefined, XDSLink renders a \`<button>\` with reset styles. ' + 'Visually identical to a link, but semantically correct for actions that do not navigate.'
      }
    }
  }
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Disabled action',
    isDisabled: true
  },
  parameters: {
    docs: {
      description: {
        story: 'The button fallback supports the \`isDisabled\` prop with native \`disabled\` attribute.'
      }
    }
  }
}`,...x.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    maxWidth: '600px'
  }}>
      <div style={{
      display: 'flex',
      gap: '16px',
      alignItems: 'center'
    }}>
        <XDSLink onClick={() => {}} isStandalone>
          Active (default)
        </XDSLink>
        <XDSLink onClick={() => {}} color="primary" isStandalone>
          Primary
        </XDSLink>
        <XDSLink onClick={() => {}} color="secondary" isStandalone>
          Secondary
        </XDSLink>
        <XDSLink onClick={() => {}} color="inherit" isStandalone>
          Inherit
        </XDSLink>
      </div>
      <div style={{
      display: 'flex',
      gap: '16px',
      alignItems: 'center'
    }}>
        <XDSLink onClick={() => {}} hasUnderline isStandalone>
          With underline
        </XDSLink>
        <XDSLink onClick={() => {}} tooltip="Action tooltip" isStandalone>
          With tooltip
        </XDSLink>
        <XDSLink onClick={() => {}} isDisabled isStandalone>
          Disabled
        </XDSLink>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Button fallback supports all visual variants (color, underline, tooltip, disabled), ' + 'visually indistinguishable from a regular link.'
      }
    }
  }
}`,...S.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <XDSText type="body">
      You can <XDSLink onClick={() => alert('Undo!')}>undo this action</XDSLink>{' '}
      if you change your mind.
    </XDSText>,
  parameters: {
    docs: {
      description: {
        story: 'Button fallback works inline within text, just like a regular link. ' + 'Inspect the DOM; it renders a \`<button>\` not an \`<a>\`.'
      }
    }
  }
}`,...f.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    maxWidth: '600px'
  }}>
      <XDSText type="large" size="sm">
        Link (with href) vs Button (without href)
      </XDSText>
      <div style={{
      display: 'flex',
      gap: '24px',
      alignItems: 'center'
    }}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
        alignItems: 'center'
      }}>
          <XDSLink href="/destination" isStandalone>
            I navigate
          </XDSLink>
          <XDSText type="body" size="sm" color="secondary">
            {'<a href="/destination">'}
          </XDSText>
        </div>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
        alignItems: 'center'
      }}>
          <XDSLink onClick={() => alert('Action!')} isStandalone>
            I act
          </XDSLink>
          <XDSText type="body" size="sm" color="secondary">
            {'<button type="button">'}
          </XDSText>
        </div>
      </div>
      <XDSText type="body" size="sm" color="secondary">
        Both look the same, but inspect the DOM to see the semantic difference.
      </XDSText>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Side-by-side comparison showing that links and button fallbacks are visually identical. ' + 'The only difference is in the rendered DOM element.'
      }
    }
  }
}`,...k.parameters?.docs?.source}}};const j=["Default","Secondary","Primary","WithUnderline","Disabled","ExternalLink","WithTooltip","Standalone","InlineWithText","AllVariants","ExternalLinks","LinksWithTooltips","ButtonFallback","ButtonFallbackDisabled","ButtonFallbackVariants","ButtonFallbackInline","LinkVsButtonComparison"];export{u as AllVariants,y as ButtonFallback,x as ButtonFallbackDisabled,f as ButtonFallbackInline,S as ButtonFallbackVariants,r as Default,o as Disabled,l as ExternalLink,h as ExternalLinks,p as InlineWithText,k as LinkVsButtonComparison,m as LinksWithTooltips,a as Primary,t as Secondary,c as Standalone,d as WithTooltip,s as WithUnderline,j as __namedExportsOrder,X as default};
