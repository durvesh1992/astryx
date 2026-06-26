import{ad as e,X as m,F as y}from"./iframe-yRFQ_7VC.js";import{X as r}from"./XDSChatMessageList-iaotiKMM.js";import{X as a}from"./XDSChatMessage-DjVgtZME.js";import{X as s}from"./XDSChatMessageBubble-lAJho-xC.js";import{b as o,X as t,F as v,a as f}from"./HandThumbUpIcon-CV7cSrLb.js";import{X as l}from"./XDSAvatar-W6VpExB0.js";import{X as i}from"./XDSMarkdown-C51mApFy.js";import{X as b}from"./XDSToken-DnzEkZ3B.js";import{X as C}from"./XDSCodeBlock-B5b8s25t.js";import{X as n}from"./XDSTimestamp-B11u0PZH.js";import{X as j}from"./XDSHStack-BmU4dpCo.js";import"./preload-helper-Ct5FWWRu.js";import"./XDSChatContext-Bvyev7ex.js";import"./XDSDivider-CD2fc5JP.js";import"./XDSCheckboxListItem-G66nArwI.js";import"./XDSField-COi97ivg.js";import"./XDSFieldStatus-BgnciRVy.js";import"./XDSList-B0MkGqZF.js";import"./XDSListItem-C5CIKGjL.js";import"./XDSItem-CTSSy95c.js";import"./computeTargetAndRel-BlG0ENK0.js";import"./XDSCheckboxInput-C50y4c1Q.js";import"./XDSBlockquote-kq4Y3FPM.js";import"./XDSTable-tIgxviJL.js";import"./XDSEmptyState-CWiMy9oI.js";import"./useXDSStreamingText-CdCvbZFo.js";import"./XDSCitation-DzquwPCW.js";import"./XDSCode-CEZ5ThnD.js";import"./useXDSInteractiveRole-C4QNKBOy.js";import"./highlightRanges-DQjygsEE.js";import"./XDSStack-CFJ7xIVk.js";import"./stack.stylex-5XIQDawT.js";const re={title:"Core/Chat",component:r,tags:["autodocs"]},c={name:"Default",render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column"},children:e.jsxs(r,{children:[e.jsx(a,{sender:"user",children:e.jsx(s,{metadata:e.jsx(t,{timestamp:e.jsx(n,{value:"2026-03-15T14:30:00",format:"time"}),status:"read"}),children:"How should I handle state management in a React app?"})}),e.jsxs(a,{sender:"assistant",children:[e.jsx(i,{density:"compact",children:`For most cases, **React's built-in state** is sufficient:

- \`useState\` for local component state
- \`useReducer\` for complex state logic
- \`useContext\` for shared state across a subtree

For **server state**, use a library like **TanStack Query** or **SWR** — they handle caching, revalidation, and loading states out of the box.

Avoid global state managers unless you have a genuine need for cross-cutting state. Most apps are over-engineered in this area.`}),e.jsx(t,{timestamp:e.jsx(n,{value:"2026-03-15T14:30:30",format:"time"}),footer:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Claude Opus 4.6"}),e.jsx("span",{children:"·"}),e.jsx(m,{label:"Thumbs up",icon:e.jsx(v,{style:{width:14,height:14}}),variant:"ghost",size:"sm",isIconOnly:!0}),e.jsx(m,{label:"Thumbs down",icon:e.jsx(f,{style:{width:14,height:14}}),variant:"ghost",size:"sm",isIconOnly:!0}),e.jsx(m,{label:"Copy",icon:e.jsx(y,{style:{width:14,height:14}}),variant:"ghost",size:"sm",isIconOnly:!0})]})})]}),e.jsx(a,{sender:"user",children:e.jsx(s,{metadata:e.jsx(t,{timestamp:e.jsx(n,{value:"2026-03-15T14:31:00",format:"time"}),status:"read"}),children:"Can you show me a useReducer example?"})}),e.jsxs(a,{sender:"assistant",children:[e.jsx(i,{density:"compact",children:"Here's a common pattern for form state:"}),e.jsx(C,{code:`const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, [action.field]: action.value };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

const [state, dispatch] = useReducer(reducer, initialState);`,language:"tsx"}),e.jsx(i,{density:"compact",children:"This keeps all your form logic in one place. The reducer is pure and easy to test — just pass in state and action, assert on the output.\n\n| Hook | Use case | Re-renders | Complexity | Best for |\n|------|----------|------------|------------|----------|\n| `useState` | Simple values | On every set | Low | Toggles, inputs, counters |\n| `useReducer` | Complex state logic | On dispatch | Medium | Forms, multi-field state |\n| `useContext` | Shared subtree state | All consumers | Low | Theme, auth, locale |\n| `useSyncExternalStore` | External stores | On snapshot change | High | Redux, Zustand, signals |\n| `useRef` | Mutable values | Never | Low | DOM refs, timers, previous values |"}),e.jsx(t,{timestamp:e.jsx(n,{value:"2026-03-15T14:31:30",format:"time"}),footer:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Claude Opus 4.6"}),e.jsx("span",{children:"·"}),e.jsx(m,{label:"Thumbs up",icon:e.jsx(v,{style:{width:14,height:14}}),variant:"ghost",size:"sm",isIconOnly:!0}),e.jsx(m,{label:"Thumbs down",icon:e.jsx(f,{style:{width:14,height:14}}),variant:"ghost",size:"sm",isIconOnly:!0}),e.jsx(m,{label:"Copy",icon:e.jsx(y,{style:{width:14,height:14}}),variant:"ghost",size:"sm",isIconOnly:!0})]})})]})]})})},u={name:"Mixed Content",render:()=>e.jsx("div",{style:{height:600,display:"flex",flexDirection:"column"},children:e.jsxs(r,{children:[e.jsx(a,{sender:"user",children:e.jsx(s,{children:"Show me the component files and explain the architecture"})}),e.jsxs(a,{sender:"assistant",children:[e.jsx(s,{children:"Sure! Here's an overview of the component architecture."}),e.jsx(s,{variant:"ghost",children:e.jsx(i,{density:"compact",children:`The system uses a **compound component** pattern with three layers:

1. **MessageList** — scrollable container with auto-scroll
2. **Message** — layout wrapper with sender context
3. **Bubble** — styled content container`})}),e.jsxs(s,{variant:"ghost",children:[e.jsx(i,{density:"compact",children:"Here are the files:"}),e.jsxs(j,{gap:2,wrap:"wrap",children:[e.jsx(b,{label:"Button.tsx"}),e.jsx(b,{label:"Card.tsx"}),e.jsx(b,{label:"Dialog.tsx"})]}),e.jsx(C,{code:`export * from './Button';
export * from './Card';
export * from './Dialog';`,language:"typescript"})]}),e.jsx(s,{children:"Let me know which one to open — I can walk through the implementation."})]}),e.jsx(a,{sender:"user",children:e.jsx(s,{children:"Open Button.tsx"})}),e.jsx(o,{children:"Navi opened Button.tsx"}),e.jsx(a,{sender:"assistant",children:e.jsxs(s,{variant:"ghost",children:[e.jsx(C,{code:`import * as stylex from '@stylexjs/stylex';

export function XDSButton({ label, variant = 'primary' }) {
  return (
    <button {...stylex.props(styles.base, styles[variant])}>
      {label}
    </button>
  );
}`,language:"tsx"}),e.jsx(i,{density:"compact",children:"The Button uses StyleX for styles and reads variant from props."})]})})]})})},g={name:"Chat Conversation",render:()=>{const d={fontSize:12,fontWeight:600,color:"#666",lineHeight:"16px"};return e.jsx("div",{style:{height:500,display:"flex",flexDirection:"column"},children:e.jsxs(r,{children:[e.jsx(o,{variant:"divider",children:"Today"}),e.jsx(a,{sender:"assistant",avatar:e.jsx(l,{name:"Navi",size:"small"}),children:e.jsx(s,{name:e.jsx("span",{style:d,children:"Navi"}),metadata:e.jsx(t,{timestamp:e.jsx(n,{value:"2026-03-15T14:30:00",format:"time"})}),children:"Hey! I looked at the PR and left a few comments on the density styles."})}),e.jsxs(a,{sender:"user",avatar:e.jsx(l,{name:"Cindy",size:"small"}),children:[e.jsx(s,{group:"first",name:e.jsx("span",{style:d,children:"Cindy"}),children:"Thanks! I'll take a look."}),e.jsx(s,{group:"last",metadata:e.jsx(t,{timestamp:e.jsx(n,{value:"2026-03-15T14:31:00",format:"time"}),status:"read"}),children:"Should be quick to fix."})]}),e.jsx(a,{sender:"assistant",avatar:e.jsx(l,{name:"Navi",size:"small"}),children:e.jsx(s,{name:e.jsx("span",{style:d,children:"Navi"}),metadata:e.jsx(t,{timestamp:e.jsx(n,{value:"2026-03-15T14:32:00",format:"time"})}),children:"Sounds good. The main thing is the compact radius — it should use the container token, not the page token."})}),e.jsx(a,{sender:"user",avatar:e.jsx(l,{name:"Cindy",size:"small"}),children:e.jsx(s,{name:e.jsx("span",{style:d,children:"Cindy"}),metadata:e.jsx(t,{timestamp:e.jsx(n,{value:"2026-03-15T14:33:00",format:"time"}),status:"delivered"}),children:"Good catch, fixed and pushed."})}),e.jsx(o,{children:"Cindy liked a message"})]})})}},p={name:"Density Comparison",render:()=>{const d={compact:"xsmall",balanced:"small",spacious:"small"},M=h=>e.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",minWidth:0,border:"1px solid var(--color-border-primary)",borderRadius:8},children:[e.jsx("div",{style:{padding:"8px 12px",borderBottom:"1px solid var(--color-border-primary)",fontSize:12,fontWeight:600,textTransform:"uppercase",letterSpacing:"0.05em"},children:h}),e.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",minHeight:0},children:e.jsxs(r,{density:h,children:[e.jsx(a,{sender:"user",children:e.jsx(s,{children:"How does the density system work?"})}),e.jsx(a,{sender:"assistant",avatar:e.jsx(l,{name:"Navi",size:d[h]}),children:e.jsx(i,{density:"compact",children:`Density controls **spacing** at every level:

- **Default gap** between messages
- **Padding** inside bubbles
- **Gap** between child elements

Use gap when top-level rows need different spacing from density.

This is the **${h}** density. ${h==="compact"?"Great for sidebars and panels where space is limited.":h==="spacious"?"Ideal for long-form reading where breathing room helps comprehension.":"The default — works well for most full-page chat interfaces."}`})}),e.jsx(a,{sender:"user",children:e.jsx(s,{children:"Makes sense, thanks!"})})]})})]});return e.jsxs("div",{style:{display:"flex",gap:16,height:500},children:[M("compact"),M("balanced"),M("spacious")]})}},S={name:"Message Gap Override",render:()=>e.jsx("div",{style:{height:420,display:"flex",flexDirection:"column"},children:e.jsxs(r,{density:"compact",gap:5,children:[e.jsx(a,{sender:"assistant",children:e.jsx(s,{name:"Clio",children:"Starting the requested change."})}),e.jsx(a,{sender:"assistant",children:e.jsx(s,{variant:"ghost",children:"Reading repository context and relevant files..."})}),e.jsx(a,{sender:"assistant",children:e.jsx(s,{variant:"ghost",children:"Running tests for the updated package."})}),e.jsx(a,{sender:"assistant",children:e.jsx(s,{metadata:e.jsx(t,{footer:"Done"}),children:"The patch is ready for review."})})]})})},x={name:"System Messages",render:()=>e.jsx("div",{style:{height:400,display:"flex",flexDirection:"column"},children:e.jsxs(r,{children:[e.jsx(o,{variant:"divider",children:"March 15, 2026"}),e.jsx(a,{sender:"assistant",avatar:e.jsx(l,{name:"Navi",size:"small"}),children:e.jsx(i,{density:"compact",children:"Good morning!"})}),e.jsx(o,{children:"Conversation started"}),e.jsx(a,{sender:"user",children:e.jsx(s,{children:"Hey Navi"})}),e.jsx(o,{variant:"divider",children:"Today"}),e.jsx(o,{children:"Cindy shared a file"})]})})},D={name:"Message Status",render:()=>e.jsx("div",{style:{height:400,display:"flex",flexDirection:"column"},children:e.jsxs(r,{children:[e.jsx(a,{sender:"user",children:e.jsx(s,{metadata:e.jsx(t,{status:"sending"}),children:"Sending..."})}),e.jsx(a,{sender:"user",children:e.jsx(s,{metadata:e.jsx(t,{status:"sent"}),children:"Sent"})}),e.jsx(a,{sender:"user",children:e.jsx(s,{metadata:e.jsx(t,{status:"delivered"}),children:"Delivered"})}),e.jsx(a,{sender:"user",children:e.jsx(s,{metadata:e.jsx(t,{status:"read"}),children:"Read"})}),e.jsx(a,{sender:"user",children:e.jsx(s,{metadata:e.jsx(t,{status:"error"}),children:"Failed to send"})})]})})},X={name:"Multi-Bubble Grouping",render:()=>e.jsx("div",{style:{height:500,display:"flex",flexDirection:"column"},children:e.jsxs(r,{children:[e.jsxs(a,{sender:"user",children:[e.jsx(s,{group:"first",children:"Hey, can you review my PR?"}),e.jsx(s,{group:"middle",children:"It's the one for the chat components"}),e.jsx(s,{group:"last",metadata:e.jsx(t,{timestamp:e.jsx(n,{value:"2026-03-15T14:31:00",format:"time"}),status:"delivered"}),children:"Link: github.com/xds/pull/1180"})]}),e.jsxs(a,{sender:"assistant",avatar:e.jsx(l,{name:"Navi",size:"small"}),children:[e.jsx(s,{group:"first",children:"Sure, looking at it now!"}),e.jsx(s,{group:"middle",children:"The compound pattern looks solid. A few minor comments on the density styles."}),e.jsx(s,{group:"last",metadata:e.jsx(t,{timestamp:e.jsx(n,{value:"2026-03-15T14:33:00",format:"time"})}),children:"I'll leave them as review comments."})]}),e.jsx(a,{sender:"user",children:e.jsx(s,{metadata:e.jsx(t,{timestamp:e.jsx(n,{value:"2026-03-15T14:34:00",format:"time"}),status:"sending"}),children:"Thanks, will address those"})})]})})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Default',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column'
  }}>
      <XDSChatMessageList>
        <XDSChatMessage sender="user">
          <XDSChatMessageBubble metadata={<XDSChatMessageMetadata timestamp={<XDSTimestamp value="2026-03-15T14:30:00" format="time" />} status="read" />}>
            How should I handle state management in a React app?
          </XDSChatMessageBubble>
        </XDSChatMessage>
        <XDSChatMessage sender="assistant">
          <XDSMarkdown density="compact">{\`For most cases, **React's built-in state** is sufficient:

- \\\`useState\\\` for local component state
- \\\`useReducer\\\` for complex state logic
- \\\`useContext\\\` for shared state across a subtree

For **server state**, use a library like **TanStack Query** or **SWR** — they handle caching, revalidation, and loading states out of the box.

Avoid global state managers unless you have a genuine need for cross-cutting state. Most apps are over-engineered in this area.\`}</XDSMarkdown>
          <XDSChatMessageMetadata timestamp={<XDSTimestamp value="2026-03-15T14:30:30" format="time" />} footer={<>
                <span>Claude Opus 4.6</span>
                <span>·</span>
                <XDSButton label="Thumbs up" icon={<HandThumbUpIcon style={{
            width: 14,
            height: 14
          }} />} variant="ghost" size="sm" isIconOnly />
                <XDSButton label="Thumbs down" icon={<HandThumbDownIcon style={{
            width: 14,
            height: 14
          }} />} variant="ghost" size="sm" isIconOnly />
                <XDSButton label="Copy" icon={<ClipboardDocumentIcon style={{
            width: 14,
            height: 14
          }} />} variant="ghost" size="sm" isIconOnly />
              </>} />
        </XDSChatMessage>
        <XDSChatMessage sender="user">
          <XDSChatMessageBubble metadata={<XDSChatMessageMetadata timestamp={<XDSTimestamp value="2026-03-15T14:31:00" format="time" />} status="read" />}>
            Can you show me a useReducer example?
          </XDSChatMessageBubble>
        </XDSChatMessage>
        <XDSChatMessage sender="assistant">
          <XDSMarkdown density="compact">
            Here's a common pattern for form state:
          </XDSMarkdown>
          <XDSCodeBlock code={\`const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, [action.field]: action.value };
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};

const [state, dispatch] = useReducer(reducer, initialState);\`} language="tsx" />
          <XDSMarkdown density="compact">{\`This keeps all your form logic in one place. The reducer is pure and easy to test — just pass in state and action, assert on the output.

| Hook | Use case | Re-renders | Complexity | Best for |
|------|----------|------------|------------|----------|
| \\\`useState\\\` | Simple values | On every set | Low | Toggles, inputs, counters |
| \\\`useReducer\\\` | Complex state logic | On dispatch | Medium | Forms, multi-field state |
| \\\`useContext\\\` | Shared subtree state | All consumers | Low | Theme, auth, locale |
| \\\`useSyncExternalStore\\\` | External stores | On snapshot change | High | Redux, Zustand, signals |
| \\\`useRef\\\` | Mutable values | Never | Low | DOM refs, timers, previous values |\`}</XDSMarkdown>
          <XDSChatMessageMetadata timestamp={<XDSTimestamp value="2026-03-15T14:31:30" format="time" />} footer={<>
                <span>Claude Opus 4.6</span>
                <span>·</span>
                <XDSButton label="Thumbs up" icon={<HandThumbUpIcon style={{
            width: 14,
            height: 14
          }} />} variant="ghost" size="sm" isIconOnly />
                <XDSButton label="Thumbs down" icon={<HandThumbDownIcon style={{
            width: 14,
            height: 14
          }} />} variant="ghost" size="sm" isIconOnly />
                <XDSButton label="Copy" icon={<ClipboardDocumentIcon style={{
            width: 14,
            height: 14
          }} />} variant="ghost" size="sm" isIconOnly />
              </>} />
        </XDSChatMessage>
      </XDSChatMessageList>
    </div>
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Mixed Content',
  render: () => <div style={{
    height: 600,
    display: 'flex',
    flexDirection: 'column'
  }}>
      <XDSChatMessageList>
        <XDSChatMessage sender="user">
          <XDSChatMessageBubble>
            Show me the component files and explain the architecture
          </XDSChatMessageBubble>
        </XDSChatMessage>

        <XDSChatMessage sender="assistant">
          <XDSChatMessageBubble>
            Sure! Here's an overview of the component architecture.
          </XDSChatMessageBubble>
          <XDSChatMessageBubble variant="ghost">
            <XDSMarkdown density="compact">{\`The system uses a **compound component** pattern with three layers:

1. **MessageList** — scrollable container with auto-scroll
2. **Message** — layout wrapper with sender context
3. **Bubble** — styled content container\`}</XDSMarkdown>
          </XDSChatMessageBubble>
          <XDSChatMessageBubble variant="ghost">
            <XDSMarkdown density="compact">Here are the files:</XDSMarkdown>
            <XDSHStack gap={2} wrap="wrap">
              <XDSToken label="Button.tsx" />
              <XDSToken label="Card.tsx" />
              <XDSToken label="Dialog.tsx" />
            </XDSHStack>
            <XDSCodeBlock code={"export * from './Button';\\nexport * from './Card';\\nexport * from './Dialog';"} language="typescript" />
          </XDSChatMessageBubble>
          <XDSChatMessageBubble>
            Let me know which one to open — I can walk through the
            implementation.
          </XDSChatMessageBubble>
        </XDSChatMessage>

        <XDSChatMessage sender="user">
          <XDSChatMessageBubble>Open Button.tsx</XDSChatMessageBubble>
        </XDSChatMessage>

        <XDSChatSystemMessage>Navi opened Button.tsx</XDSChatSystemMessage>

        <XDSChatMessage sender="assistant">
          <XDSChatMessageBubble variant="ghost">
            <XDSCodeBlock code={\`import * as stylex from '@stylexjs/stylex';

export function XDSButton({ label, variant = 'primary' }) {
  return (
    <button {...stylex.props(styles.base, styles[variant])}>
      {label}
    </button>
  );
}\`} language="tsx" />
            <XDSMarkdown density="compact">{\`The Button uses StyleX for styles and reads variant from props.\`}</XDSMarkdown>
          </XDSChatMessageBubble>
        </XDSChatMessage>
      </XDSChatMessageList>
    </div>
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Chat Conversation',
  render: () => {
    const nameStyle = {
      fontSize: 12,
      fontWeight: 600,
      color: '#666',
      lineHeight: '16px'
    };
    return <div style={{
      height: 500,
      display: 'flex',
      flexDirection: 'column'
    }}>
        <XDSChatMessageList>
          <XDSChatSystemMessage variant="divider">Today</XDSChatSystemMessage>
          <XDSChatMessage sender="assistant" avatar={<XDSAvatar name="Navi" size="small" />}>
            <XDSChatMessageBubble name={<span style={nameStyle}>Navi</span>} metadata={<XDSChatMessageMetadata timestamp={<XDSTimestamp value="2026-03-15T14:30:00" format="time" />} />}>
              Hey! I looked at the PR and left a few comments on the density
              styles.
            </XDSChatMessageBubble>
          </XDSChatMessage>

          <XDSChatMessage sender="user" avatar={<XDSAvatar name="Cindy" size="small" />}>
            <XDSChatMessageBubble group="first" name={<span style={nameStyle}>Cindy</span>}>
              Thanks! I'll take a look.
            </XDSChatMessageBubble>
            <XDSChatMessageBubble group="last" metadata={<XDSChatMessageMetadata timestamp={<XDSTimestamp value="2026-03-15T14:31:00" format="time" />} status="read" />}>
              Should be quick to fix.
            </XDSChatMessageBubble>
          </XDSChatMessage>

          <XDSChatMessage sender="assistant" avatar={<XDSAvatar name="Navi" size="small" />}>
            <XDSChatMessageBubble name={<span style={nameStyle}>Navi</span>} metadata={<XDSChatMessageMetadata timestamp={<XDSTimestamp value="2026-03-15T14:32:00" format="time" />} />}>
              Sounds good. The main thing is the compact radius — it should use
              the container token, not the page token.
            </XDSChatMessageBubble>
          </XDSChatMessage>

          <XDSChatMessage sender="user" avatar={<XDSAvatar name="Cindy" size="small" />}>
            <XDSChatMessageBubble name={<span style={nameStyle}>Cindy</span>} metadata={<XDSChatMessageMetadata timestamp={<XDSTimestamp value="2026-03-15T14:33:00" format="time" />} status="delivered" />}>
              Good catch, fixed and pushed.
            </XDSChatMessageBubble>
          </XDSChatMessage>

          <XDSChatSystemMessage>Cindy liked a message</XDSChatSystemMessage>
        </XDSChatMessageList>
      </div>;
  }
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Density Comparison',
  render: () => {
    const avatarSize = {
      compact: 'xsmall' as const,
      balanced: 'small' as const,
      spacious: 'small' as const
    };
    const messages = (density: 'compact' | 'balanced' | 'spacious') => <div style={{
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      minWidth: 0,
      border: '1px solid var(--color-border-primary)',
      borderRadius: 8
    }}>
        <div style={{
        padding: '8px 12px',
        borderBottom: '1px solid var(--color-border-primary)',
        fontSize: 12,
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.05em'
      }}>
          {density}
        </div>
        <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        minHeight: 0
      }}>
          <XDSChatMessageList density={density}>
            <XDSChatMessage sender="user">
              <XDSChatMessageBubble>
                How does the density system work?
              </XDSChatMessageBubble>
            </XDSChatMessage>
            <XDSChatMessage sender="assistant" avatar={<XDSAvatar name="Navi" size={avatarSize[density]} />}>
              <XDSMarkdown density="compact">{\`Density controls **spacing** at every level:

- **Default gap** between messages
- **Padding** inside bubbles
- **Gap** between child elements

Use gap when top-level rows need different spacing from density.

This is the **\${density}** density. \${density === 'compact' ? 'Great for sidebars and panels where space is limited.' : density === 'spacious' ? 'Ideal for long-form reading where breathing room helps comprehension.' : 'The default — works well for most full-page chat interfaces.'}\`}</XDSMarkdown>
            </XDSChatMessage>
            <XDSChatMessage sender="user">
              <XDSChatMessageBubble>Makes sense, thanks!</XDSChatMessageBubble>
            </XDSChatMessage>
          </XDSChatMessageList>
        </div>
      </div>;
    return <div style={{
      display: 'flex',
      gap: 16,
      height: 500
    }}>
        {messages('compact')}
        {messages('balanced')}
        {messages('spacious')}
      </div>;
  }
}`,...p.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Message Gap Override',
  render: () => <div style={{
    height: 420,
    display: 'flex',
    flexDirection: 'column'
  }}>
      <XDSChatMessageList density="compact" gap={5}>
        <XDSChatMessage sender="assistant">
          <XDSChatMessageBubble name="Clio">
            Starting the requested change.
          </XDSChatMessageBubble>
        </XDSChatMessage>
        <XDSChatMessage sender="assistant">
          <XDSChatMessageBubble variant="ghost">
            Reading repository context and relevant files...
          </XDSChatMessageBubble>
        </XDSChatMessage>
        <XDSChatMessage sender="assistant">
          <XDSChatMessageBubble variant="ghost">
            Running tests for the updated package.
          </XDSChatMessageBubble>
        </XDSChatMessage>
        <XDSChatMessage sender="assistant">
          <XDSChatMessageBubble metadata={<XDSChatMessageMetadata footer="Done" />}>
            The patch is ready for review.
          </XDSChatMessageBubble>
        </XDSChatMessage>
      </XDSChatMessageList>
    </div>
}`,...S.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'System Messages',
  render: () => <div style={{
    height: 400,
    display: 'flex',
    flexDirection: 'column'
  }}>
      <XDSChatMessageList>
        <XDSChatSystemMessage variant="divider">
          March 15, 2026
        </XDSChatSystemMessage>
        <XDSChatMessage sender="assistant" avatar={<XDSAvatar name="Navi" size="small" />}>
          <XDSMarkdown density="compact">Good morning!</XDSMarkdown>
        </XDSChatMessage>
        <XDSChatSystemMessage>Conversation started</XDSChatSystemMessage>
        <XDSChatMessage sender="user">
          <XDSChatMessageBubble>Hey Navi</XDSChatMessageBubble>
        </XDSChatMessage>
        <XDSChatSystemMessage variant="divider">Today</XDSChatSystemMessage>
        <XDSChatSystemMessage>Cindy shared a file</XDSChatSystemMessage>
      </XDSChatMessageList>
    </div>
}`,...x.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Message Status',
  render: () => <div style={{
    height: 400,
    display: 'flex',
    flexDirection: 'column'
  }}>
      <XDSChatMessageList>
        <XDSChatMessage sender="user">
          <XDSChatMessageBubble metadata={<XDSChatMessageMetadata status="sending" />}>
            Sending...
          </XDSChatMessageBubble>
        </XDSChatMessage>
        <XDSChatMessage sender="user">
          <XDSChatMessageBubble metadata={<XDSChatMessageMetadata status="sent" />}>
            Sent
          </XDSChatMessageBubble>
        </XDSChatMessage>
        <XDSChatMessage sender="user">
          <XDSChatMessageBubble metadata={<XDSChatMessageMetadata status="delivered" />}>
            Delivered
          </XDSChatMessageBubble>
        </XDSChatMessage>
        <XDSChatMessage sender="user">
          <XDSChatMessageBubble metadata={<XDSChatMessageMetadata status="read" />}>
            Read
          </XDSChatMessageBubble>
        </XDSChatMessage>
        <XDSChatMessage sender="user">
          <XDSChatMessageBubble metadata={<XDSChatMessageMetadata status="error" />}>
            Failed to send
          </XDSChatMessageBubble>
        </XDSChatMessage>
      </XDSChatMessageList>
    </div>
}`,...D.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: 'Multi-Bubble Grouping',
  render: () => <div style={{
    height: 500,
    display: 'flex',
    flexDirection: 'column'
  }}>
      <XDSChatMessageList>
        <XDSChatMessage sender="user">
          <XDSChatMessageBubble group="first">
            Hey, can you review my PR?
          </XDSChatMessageBubble>
          <XDSChatMessageBubble group="middle">
            It's the one for the chat components
          </XDSChatMessageBubble>
          <XDSChatMessageBubble group="last" metadata={<XDSChatMessageMetadata timestamp={<XDSTimestamp value="2026-03-15T14:31:00" format="time" />} status="delivered" />}>
            Link: github.com/xds/pull/1180
          </XDSChatMessageBubble>
        </XDSChatMessage>
        <XDSChatMessage sender="assistant" avatar={<XDSAvatar name="Navi" size="small" />}>
          <XDSChatMessageBubble group="first">
            Sure, looking at it now!
          </XDSChatMessageBubble>
          <XDSChatMessageBubble group="middle">
            The compound pattern looks solid. A few minor comments on the
            density styles.
          </XDSChatMessageBubble>
          <XDSChatMessageBubble group="last" metadata={<XDSChatMessageMetadata timestamp={<XDSTimestamp value="2026-03-15T14:33:00" format="time" />} />}>
            I'll leave them as review comments.
          </XDSChatMessageBubble>
        </XDSChatMessage>
        <XDSChatMessage sender="user">
          <XDSChatMessageBubble metadata={<XDSChatMessageMetadata timestamp={<XDSTimestamp value="2026-03-15T14:34:00" format="time" />} status="sending" />}>
            Thanks, will address those
          </XDSChatMessageBubble>
        </XDSChatMessage>
      </XDSChatMessageList>
    </div>
}`,...X.parameters?.docs?.source}}};const ie=["Default","MixedContent","ChatConversation","DensityComparison","GapOverride","SystemMessages","MessageStatus","MultiBubble"];export{g as ChatConversation,c as Default,p as DensityComparison,S as GapOverride,D as MessageStatus,u as MixedContent,X as MultiBubble,x as SystemMessages,ie as __namedExportsOrder,re as default};
