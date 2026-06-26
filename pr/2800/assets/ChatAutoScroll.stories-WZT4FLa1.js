import{at as r,ad as e,X as g,r as L}from"./iframe-yRFQ_7VC.js";import{X as R}from"./XDSChatComposer-CoWXtv-8.js";import{X as T}from"./XDSChatMessageList-iaotiKMM.js";import{X}from"./XDSChatMessage-DjVgtZME.js";import{X as M}from"./XDSChatToolCalls-C1UyoWY6.js";import{X as w}from"./XDSChatLayout-B2Ab9Ncy.js";import{X as j}from"./XDSMarkdown-C51mApFy.js";import{X as k}from"./XDSCodeBlock-B5b8s25t.js";import{X as z}from"./XDSBadge-COTe2g1g.js";import"./preload-helper-Ct5FWWRu.js";import"./index-D8Xh4Tce.js";import"./index-CXyWrEU_.js";import"./useXDSPopover-ChRJmaAz.js";import"./XDSHoverCard-BRL1pJWj.js";import"./XDSChatContext-Bvyev7ex.js";import"./getKey-DyRdrWhf.js";import"./XDSCheckboxListItem-G66nArwI.js";import"./XDSField-COi97ivg.js";import"./XDSFieldStatus-BgnciRVy.js";import"./XDSList-B0MkGqZF.js";import"./XDSListItem-C5CIKGjL.js";import"./XDSItem-CTSSy95c.js";import"./computeTargetAndRel-BlG0ENK0.js";import"./XDSCheckboxInput-C50y4c1Q.js";import"./XDSBlockquote-kq4Y3FPM.js";import"./XDSTable-tIgxviJL.js";import"./XDSEmptyState-CWiMy9oI.js";import"./useXDSStreamingText-CdCvbZFo.js";import"./XDSCitation-DzquwPCW.js";import"./XDSCode-CEZ5ThnD.js";import"./highlightRanges-DQjygsEE.js";const me={title:"Core/ChatAutoScroll",tags:["autodocs"],parameters:{layout:"fullscreen"}},D=`Let me analyze this codebase for you. I'll start by looking at the project structure and understanding the architecture.

The project uses a **monorepo** structure with the following key directories:

- \`packages/core/\` — Published core components and utilities
- \`packages/cli/\` — CLI tooling for scaffolding
- \`apps/storybook/\` — Storybook for component development
- \`apps/sandbox/\` — Sandbox testing app

Looking at the architecture more closely, the system follows a **plugin-based pattern** where components are composed through a unified swizzle system. This means any internal primitive can be overridden at any level.

The auto-scroll system uses \`useXDSChatStreamScroll\` which provides spring-based scroll-to-bottom with lock/unlock behavior:

\`\`\`tsx
const scroll = useXDSChatStreamScroll({scrollRef});
// scroll.isLocked — auto-following content
// scroll.scrollIfLocked() — call on resize
\`\`\`

This is paired with \`useXDSChatNewMessages\` which observes the content element via ResizeObserver and calls \`scrollIfLocked()\` on every height change.

The key question is: **does the ResizeObserver fire reliably for all types of content additions?**`,I=[[{key:"1",name:"read",target:"packages/core/src/Chat/useXDSChatStreamScroll.ts",status:"complete",duration:"42ms",node:"xds"}],[{key:"2",name:"bash",target:"yarn test --filter Chat",status:"complete",duration:"4.2s",node:"xds"}],[{key:"3",name:"edit",target:"XDSChatLayout.tsx",status:"complete",duration:"95ms",node:"xds",additions:12,deletions:3,resultDetail:e.jsx(k,{code:`// Added MutationObserver supplement
const observer = new MutationObserver(() => {
  scrollIfLocked();
});
observer.observe(contentEl, { childList: true, subtree: true });`,language:"typescript"})}],[{key:"4",name:"bash",target:"yarn test",status:"complete",duration:"8.1s",node:"xds",resultDetail:e.jsx(k,{code:`$ yarn test
✓ 142 tests passed (18 suites)

Test Suites: 18 passed, 18 total
Tests:       142 passed, 142 total
Time:        8.1s`,language:"bash"})}],[{key:"5",name:"read",target:"packages/core/src/Chat/useXDSChatNewMessages.ts",status:"complete",duration:"38ms",node:"xds"}]],C={name:"Scroll Behavior Comparison",render:()=>{const[S,o]=r.useState([{id:1,role:"user",text:"Can you analyze the auto-scroll system and fix the issue with tool calls?"},{id:2,role:"assistant",text:"Sure, I'll look into the auto-scroll behavior. Let me start by reading the relevant files.\n\nThe scroll system uses `useXDSChatStreamScroll` for spring-based scroll tracking and `useXDSChatNewMessages` for content observation."},{id:3,role:"user",text:"Great, show me what you find."}]),[n,u]=r.useState(!1),c=r.useRef(void 0),h=r.useRef(0),f=r.useCallback(()=>{const t=Date.now();u(!0),o(a=>[...a,{id:t,role:"assistant",text:"",isStreaming:!0}]);let s=0;c.current=setInterval(()=>{if(s+=2+Math.floor(Math.random()*4),s>=D.length){clearInterval(c.current),o(a=>a.map(l=>l.id===t?{...l,text:D,isStreaming:!1}:l)),u(!1);return}o(a=>a.map(l=>l.id===t?{...l,text:D.slice(0,s)}:l))},25)},[]),d=r.useCallback(()=>{const t=I[h.current%I.length];h.current++;const s=Date.now();o(a=>[...a,{id:s,role:"assistant",text:"",toolCalls:t?.map(l=>({...l,status:"running",duration:void 0}))}]),setTimeout(()=>{o(a=>a.map(l=>l.id===s?{...l,toolCalls:t}:l))},1200)},[]),p=r.useCallback(()=>{const t=Date.now(),s=I.flat().map((a,l)=>({...a,key:`batch-${l}`}));o(a=>[...a,{id:t,role:"assistant",text:"Here are the results from my investigation:",toolCalls:s}])},[]),i=r.useCallback(()=>{const t=Date.now();o(s=>[...s,{id:t,role:"assistant",text:"",customElement:e.jsxs("div",{className:"x1tamke2 x4pepcl x1991y5z x8ot6hp",children:[e.jsx(L,{type:"label",weight:"bold",children:"Architecture Diagram"}),e.jsx("div",{className:"x78zum5 x6s0dn4 xl56j7k x1m3v4wt xur7f20 xjjgpb2",children:e.jsx(L,{type:"body",color:"secondary",children:"📊 Embedded visualization (200px tall custom element)"})}),e.jsx(k,{code:`┌─────────────────────┐
│  useXDSChatStream   │
│      Scroll         │
├─────────────────────┤
│ ResizeObserver ──►  │──► scrollIfLocked()
│ (content height)    │
└─────────────────────┘
         ▲
         │ fires on height change
         │
┌─────────────────────┐
│ useXDSChatNew       │
│     Messages        │
├─────────────────────┤
│ observeResize() ──► │──► onResize callback
│ (shared observer)   │
└─────────────────────┘`,language:"text"})]})}])},[]),m=r.useCallback(()=>{clearInterval(c.current),u(!1),h.current=0,o([{id:1,role:"user",text:"Can you analyze the auto-scroll system and fix the issue with tool calls?"},{id:2,role:"assistant",text:"Sure, I'll look into the auto-scroll behavior. Let me start by reading the relevant files.\n\nThe scroll system uses `useXDSChatStreamScroll` for spring-based scroll tracking and `useXDSChatNewMessages` for content observation."},{id:3,role:"user",text:"Great, show me what you find."}])},[]);return e.jsxs("div",{className:"x1dr59a3 x78zum5 xdt5ytf",children:[e.jsxs("div",{className:"x78zum5 x167g77z xc7ga6q x4befzd x1a02dak x6s0dn4",children:[e.jsx(g,{label:"Stream Text (works ✓)",variant:"primary",size:"sm",onClick:f,isDisabled:n}),e.jsx(g,{label:"Add Tool Call (may fail ✗)",variant:"secondary",size:"sm",onClick:d}),e.jsx(g,{label:"Batch Tool Calls (likely fails ✗)",variant:"secondary",size:"sm",onClick:p}),e.jsx(g,{label:"Add Custom Element (may fail ✗)",variant:"secondary",size:"sm",onClick:i}),e.jsx(g,{label:"Reset",variant:"ghost",size:"sm",onClick:m}),e.jsx("div",{className:"xvc5jky x78zum5 x6s0dn4 x17d4w8g",children:e.jsx(z,{variant:n?"green":"neutral",label:n?"Streaming":"Idle"})})]}),e.jsx(w,{composer:e.jsx(R,{onSubmit:()=>{},placeholder:"Observe auto-scroll behavior above...",isStopShown:n}),children:e.jsx(T,{children:S.map(t=>e.jsxs(X,{sender:t.role,children:[t.text&&e.jsx(j,{density:"compact",children:t.text}),t.toolCalls&&t.toolCalls.length>0&&e.jsx(M,{calls:t.toolCalls}),t.customElement]},t.id))})})]})}},y={name:"Rapid Tool Calls",render:()=>{const[S,o]=r.useState([{id:1,role:"user",text:"Run the full test suite across all packages."}]),[n,u]=r.useState(!1),c=r.useRef(void 0),h=r.useRef(0),f=r.useCallback(()=>{u(!0),h.current=0,c.current=setInterval(()=>{if(h.current++,h.current>10){clearInterval(c.current),u(!1);return}const i=Date.now()+h.current,m=["read","bash","edit","ipython","show"],t=["XDSButton.test.tsx","yarn test --filter=Button","XDSButton.tsx +8 -2","analyze_coverage()","coverage-report.html"],s=(h.current-1)%m.length;o(a=>[...a,{id:i,role:"assistant",text:"",toolCalls:[{key:String(i),name:m[s]??"read",target:t[s],status:"running",node:"xds"}]}]),setTimeout(()=>{o(a=>a.map(l=>l.id===i?{...l,toolCalls:[{key:String(i),name:m[s]??"read",target:t[s],status:"complete",duration:`${(Math.random()*3+.1).toFixed(1)}s`,node:"xds"}]}:l))},300)},500)},[]),d=r.useCallback(()=>{clearInterval(c.current),u(!1)},[]),p=r.useCallback(()=>{clearInterval(c.current),u(!1),h.current=0,o([{id:1,role:"user",text:"Run the full test suite across all packages."}])},[]);return e.jsxs("div",{className:"x1dr59a3 x78zum5 xdt5ytf",children:[e.jsxs("div",{className:"x78zum5 x167g77z xc7ga6q x4befzd x1a02dak x6s0dn4",children:[e.jsx(g,{label:n?"Running...":"Start Rapid Tool Calls",variant:"primary",size:"sm",onClick:f,isDisabled:n}),e.jsx(g,{label:"Stop",variant:"destructive",size:"sm",onClick:d,isDisabled:!n}),e.jsx(g,{label:"Reset",variant:"ghost",size:"sm",onClick:p}),e.jsx("div",{className:"xvc5jky x78zum5 x6s0dn4 x17d4w8g",children:e.jsx(z,{variant:n?"yellow":"neutral",label:n?`Tool call ${h.current}/10`:`${S.length-1} messages`})})]}),e.jsx(w,{composer:e.jsx(R,{onSubmit:()=>{},placeholder:"Watch scroll behavior..."}),children:e.jsx(T,{children:S.map(i=>e.jsxs(X,{sender:i.role,children:[i.text&&e.jsx(j,{density:"compact",children:i.text}),i.toolCalls&&i.toolCalls.length>0&&e.jsx(M,{calls:i.toolCalls})]},i.id))})})]})}},b={name:"Mixed Stream + Tools",render:()=>{const[S,o]=r.useState([{id:1,role:"user",text:"Fix the focus ring and run the tests."}]),[n,u]=r.useState("idle"),c=r.useRef(void 0),h=r.useCallback(()=>{u("streaming");const d=Date.now(),p=`Let me look at the Button component's focus styles and fix the ring.

I can see the issue — the focus ring uses a hardcoded color instead of the theme token. Let me fix that and run the tests.`;o(m=>[...m,{id:d,role:"assistant",text:"",isStreaming:!0}]);let i=0;c.current=setInterval(()=>{if(i+=3+Math.floor(Math.random()*4),i>=p.length){clearInterval(c.current),o(m=>m.map(t=>t.id===d?{...t,text:p,isStreaming:!1}:t)),u("tools"),setTimeout(()=>{const m=Date.now();o(t=>[...t,{id:m,role:"assistant",text:"",toolCalls:[{key:"1",name:"edit",target:"XDSButton.tsx",status:"running",node:"xds"}]}]),setTimeout(()=>{o(t=>t.map(s=>s.id===m?{...s,toolCalls:[{key:"1",name:"edit",target:"XDSButton.tsx",status:"complete",duration:"92ms",node:"xds",additions:4,deletions:2,resultDetail:e.jsx(k,{code:`- outline: 2px solid blue;
+ outline: 2px solid var(--color-ring-focus);
+ outline-offset: 2px;`,language:"diff"})}]}:s)),setTimeout(()=>{const t=Date.now();o(s=>[...s,{id:t,role:"assistant",text:"",toolCalls:[{key:"2",name:"bash",target:"yarn test --filter Button",status:"running",node:"xds"}]}]),setTimeout(()=>{o(s=>s.map(a=>a.id===t?{...a,toolCalls:[{key:"2",name:"bash",target:"yarn test --filter Button",status:"complete",duration:"3.8s",node:"xds",resultDetail:e.jsx(k,{code:`✓ 24 tests passed

Test Suites: 3 passed, 3 total
Tests:       24 passed, 24 total`,language:"bash"})}]}:a)),setTimeout(()=>{const s=Date.now(),a="Done! The focus ring now uses the theme token `var(--color-ring-focus)` with a 2px offset. All 24 tests pass.\n\nThe fix ensures the ring adapts to different themes automatically — no more hardcoded blue.";o(v=>[...v,{id:s,role:"assistant",text:"",isStreaming:!0}]);let l=0;c.current=setInterval(()=>{if(l+=3+Math.floor(Math.random()*4),l>=a.length){clearInterval(c.current),o(v=>v.map(x=>x.id===s?{...x,text:a,isStreaming:!1}:x)),u("done");return}o(v=>v.map(x=>x.id===s?{...x,text:a.slice(0,l)}:x))},25)},600)},2e3)},800)},1500)},500);return}o(m=>m.map(t=>t.id===d?{...t,text:p.slice(0,i)}:t))},25)},[]),f=r.useCallback(()=>{clearInterval(c.current),u("idle"),o([{id:1,role:"user",text:"Fix the focus ring and run the tests."}])},[]);return e.jsxs("div",{className:"x1dr59a3 x78zum5 xdt5ytf",children:[e.jsxs("div",{className:"x78zum5 x167g77z xc7ga6q x4befzd x1a02dak x6s0dn4",children:[e.jsx(g,{label:"Run Full Sequence",variant:"primary",size:"sm",onClick:h,isDisabled:n!=="idle"&&n!=="done"}),e.jsx(g,{label:"Reset",variant:"ghost",size:"sm",onClick:f}),e.jsx("div",{className:"xvc5jky x78zum5 x6s0dn4 x17d4w8g",children:e.jsx(z,{variant:n==="streaming"?"green":n==="tools"?"yellow":"neutral",label:n==="idle"?"Ready":n==="streaming"?"Streaming text...":n==="tools"?"Adding tool calls...":"Complete"})})]}),e.jsx(w,{composer:e.jsx(R,{onSubmit:()=>{},placeholder:"Watch the transition from streaming → tool calls..."}),children:e.jsx(T,{children:S.map(d=>e.jsxs(X,{sender:d.role,children:[d.text&&e.jsx(j,{density:"compact",children:d.text}),d.toolCalls&&d.toolCalls.length>0&&e.jsx(M,{calls:d.toolCalls})]},d.id))})})]})}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Scroll Behavior Comparison',
  render: () => {
    const [messages, setMessages] = useState<DemoMessage[]>([{
      id: 1,
      role: 'user',
      text: 'Can you analyze the auto-scroll system and fix the issue with tool calls?'
    }, {
      id: 2,
      role: 'assistant',
      text: "Sure, I'll look into the auto-scroll behavior. Let me start by reading the relevant files.\\n\\nThe scroll system uses \`useXDSChatStreamScroll\` for spring-based scroll tracking and \`useXDSChatNewMessages\` for content observation."
    }, {
      id: 3,
      role: 'user',
      text: 'Great, show me what you find.'
    }]);
    const [isStreaming, setIsStreaming] = useState(false);
    const streamRef = useRef<ReturnType<typeof setInterval>>(undefined);
    const toolCallIndex = useRef(0);

    // --- Stream text (should auto-scroll) ---
    const handleStreamText = useCallback(() => {
      const msgId = Date.now();
      setIsStreaming(true);
      setMessages(prev => [...prev, {
        id: msgId,
        role: 'assistant',
        text: '',
        isStreaming: true
      }]);
      let charIdx = 0;
      streamRef.current = setInterval(() => {
        charIdx += 2 + Math.floor(Math.random() * 4);
        if (charIdx >= STREAMING_TEXT.length) {
          clearInterval(streamRef.current);
          setMessages(prev => prev.map(m => m.id === msgId ? {
            ...m,
            text: STREAMING_TEXT,
            isStreaming: false
          } : m));
          setIsStreaming(false);
          return;
        }
        setMessages(prev => prev.map(m => m.id === msgId ? {
          ...m,
          text: STREAMING_TEXT.slice(0, charIdx)
        } : m));
      }, 25);
    }, []);

    // --- Add tool calls one at a time (may fail to auto-scroll) ---
    const handleAddToolCall = useCallback(() => {
      const tools = TOOL_CALLS_SEQUENCE[toolCallIndex.current % TOOL_CALLS_SEQUENCE.length];
      toolCallIndex.current++;
      const msgId = Date.now();
      // First add with 'running' status
      setMessages(prev => [...prev, {
        id: msgId,
        role: 'assistant',
        text: '',
        toolCalls: tools?.map(tc => ({
          ...tc,
          status: 'running' as const,
          duration: undefined
        }))
      }]);

      // After a delay, mark as complete
      setTimeout(() => {
        setMessages(prev => prev.map(m => m.id === msgId ? {
          ...m,
          toolCalls: tools
        } : m));
      }, 1200);
    }, []);

    // --- Add batch of tool calls at once (most likely to miss scroll) ---
    const handleBatchToolCalls = useCallback(() => {
      const msgId = Date.now();
      const allCalls = TOOL_CALLS_SEQUENCE.flat().map((tc, i) => ({
        ...tc,
        key: \`batch-\${i}\`
      }));
      setMessages(prev => [...prev, {
        id: msgId,
        role: 'assistant',
        text: 'Here are the results from my investigation:',
        toolCalls: allCalls
      }]);
    }, []);

    // --- Add a large custom element (simulates embedded widget) ---
    const handleAddCustomElement = useCallback(() => {
      const msgId = Date.now();
      setMessages(prev => [...prev, {
        id: msgId,
        role: 'assistant',
        text: '',
        customElement: <div {...stylex.props(styles.customElement)}>
              <XDSText type="label" weight="bold">
                Architecture Diagram
              </XDSText>
              <div {...stylex.props(styles.customElementInner)}>
                <XDSText type="body" color="secondary">
                  📊 Embedded visualization (200px tall custom element)
                </XDSText>
              </div>
              <XDSCodeBlock code={\`┌─────────────────────┐\\n│  useXDSChatStream   │\\n│      Scroll         │\\n├─────────────────────┤\\n│ ResizeObserver ──►  │──► scrollIfLocked()\\n│ (content height)    │\\n└─────────────────────┘\\n         ▲\\n         │ fires on height change\\n         │\\n┌─────────────────────┐\\n│ useXDSChatNew       │\\n│     Messages        │\\n├─────────────────────┤\\n│ observeResize() ──► │──► onResize callback\\n│ (shared observer)   │\\n└─────────────────────┘\`} language="text" />
            </div>
      }]);
    }, []);

    // --- Reset ---
    const handleReset = useCallback(() => {
      clearInterval(streamRef.current);
      setIsStreaming(false);
      toolCallIndex.current = 0;
      setMessages([{
        id: 1,
        role: 'user',
        text: 'Can you analyze the auto-scroll system and fix the issue with tool calls?'
      }, {
        id: 2,
        role: 'assistant',
        text: "Sure, I'll look into the auto-scroll behavior. Let me start by reading the relevant files.\\n\\nThe scroll system uses \`useXDSChatStreamScroll\` for spring-based scroll tracking and \`useXDSChatNewMessages\` for content observation."
      }, {
        id: 3,
        role: 'user',
        text: 'Great, show me what you find.'
      }]);
    }, []);
    return <div {...stylex.props(styles.wrapper)}>
        {/* Control bar */}
        <div {...stylex.props(styles.controls)}>
          <XDSButton label="Stream Text (works ✓)" variant="primary" size="sm" onClick={handleStreamText} isDisabled={isStreaming} />
          <XDSButton label="Add Tool Call (may fail ✗)" variant="secondary" size="sm" onClick={handleAddToolCall} />
          <XDSButton label="Batch Tool Calls (likely fails ✗)" variant="secondary" size="sm" onClick={handleBatchToolCalls} />
          <XDSButton label="Add Custom Element (may fail ✗)" variant="secondary" size="sm" onClick={handleAddCustomElement} />
          <XDSButton label="Reset" variant="ghost" size="sm" onClick={handleReset} />
          <div {...stylex.props(styles.statusPill)}>
            <XDSBadge variant={isStreaming ? 'green' : 'neutral'} label={isStreaming ? 'Streaming' : 'Idle'} />
          </div>
        </div>
        {/* Chat area */}
        <XDSChatLayout composer={<XDSChatComposer onSubmit={() => {}} placeholder="Observe auto-scroll behavior above..." isStopShown={isStreaming} />}>
          <XDSChatMessageList>
            {messages.map(msg => <XDSChatMessage key={msg.id} sender={msg.role}>
                {msg.text && <XDSMarkdown density="compact">{msg.text}</XDSMarkdown>}
                {msg.toolCalls && msg.toolCalls.length > 0 && <XDSChatToolCalls calls={msg.toolCalls} />}
                {msg.customElement}
              </XDSChatMessage>)}
          </XDSChatMessageList>
        </XDSChatLayout>
      </div>;
  }
}`,...C.parameters?.docs?.source},description:{story:`Demonstrates the auto-scroll issue: streaming text scrolls correctly,
but tool calls and custom elements may not trigger auto-scroll.

Use the control buttons to add different content types and observe
whether the chat auto-scrolls to keep new content visible.`,...C.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Rapid Tool Calls',
  render: () => {
    const [messages, setMessages] = useState<DemoMessage[]>([{
      id: 1,
      role: 'user',
      text: 'Run the full test suite across all packages.'
    }]);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef<ReturnType<typeof setInterval>>(undefined);
    const counterRef = useRef(0);
    const handleStart = useCallback(() => {
      setIsRunning(true);
      counterRef.current = 0;
      intervalRef.current = setInterval(() => {
        counterRef.current++;
        if (counterRef.current > 10) {
          clearInterval(intervalRef.current);
          setIsRunning(false);
          return;
        }
        const msgId = Date.now() + counterRef.current;
        const toolNames = ['read', 'bash', 'edit', 'ipython', 'show'];
        const targets = ['XDSButton.test.tsx', 'yarn test --filter=Button', 'XDSButton.tsx +8 -2', 'analyze_coverage()', 'coverage-report.html'];
        const idx = (counterRef.current - 1) % toolNames.length;
        setMessages(prev => [...prev, {
          id: msgId,
          role: 'assistant',
          text: '',
          toolCalls: [{
            key: String(msgId),
            name: toolNames[idx] ?? 'read',
            target: targets[idx],
            status: 'running',
            node: 'xds'
          }]
        }]);

        // Mark complete after 300ms
        setTimeout(() => {
          setMessages(prev => prev.map(m => m.id === msgId ? {
            ...m,
            toolCalls: [{
              key: String(msgId),
              name: toolNames[idx] ?? 'read',
              target: targets[idx],
              status: 'complete' as const,
              duration: \`\${(Math.random() * 3 + 0.1).toFixed(1)}s\`,
              node: 'xds'
            }]
          } : m));
        }, 300);
      }, 500);
    }, []);
    const handleStop = useCallback(() => {
      clearInterval(intervalRef.current);
      setIsRunning(false);
    }, []);
    const handleReset = useCallback(() => {
      clearInterval(intervalRef.current);
      setIsRunning(false);
      counterRef.current = 0;
      setMessages([{
        id: 1,
        role: 'user',
        text: 'Run the full test suite across all packages.'
      }]);
    }, []);
    return <div {...stylex.props(styles.wrapper)}>
        <div {...stylex.props(styles.controls)}>
          <XDSButton label={isRunning ? 'Running...' : 'Start Rapid Tool Calls'} variant="primary" size="sm" onClick={handleStart} isDisabled={isRunning} />
          <XDSButton label="Stop" variant="destructive" size="sm" onClick={handleStop} isDisabled={!isRunning} />
          <XDSButton label="Reset" variant="ghost" size="sm" onClick={handleReset} />
          <div {...stylex.props(styles.statusPill)}>
            <XDSBadge variant={isRunning ? 'yellow' : 'neutral'} label={isRunning ? \`Tool call \${counterRef.current}/10\` : \`\${messages.length - 1} messages\`} />
          </div>
        </div>

        <XDSChatLayout composer={<XDSChatComposer onSubmit={() => {}} placeholder="Watch scroll behavior..." />}>
          <XDSChatMessageList>
            {messages.map(msg => <XDSChatMessage key={msg.id} sender={msg.role}>
                {msg.text && <XDSMarkdown density="compact">{msg.text}</XDSMarkdown>}
                {msg.toolCalls && msg.toolCalls.length > 0 && <XDSChatToolCalls calls={msg.toolCalls} />}
              </XDSChatMessage>)}
          </XDSChatMessageList>
        </XDSChatLayout>
      </div>;
  }
}`,...y.parameters?.docs?.source},description:{story:`Rapid tool call additions — fires 5 tool calls every 500ms to stress-test
the ResizeObserver + scrollIfLocked pathway.`,...y.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Mixed Stream + Tools',
  render: () => {
    const [messages, setMessages] = useState<DemoMessage[]>([{
      id: 1,
      role: 'user',
      text: 'Fix the focus ring and run the tests.'
    }]);
    const [phase, setPhase] = useState<'idle' | 'streaming' | 'tools' | 'done'>('idle');
    const streamRef = useRef<ReturnType<typeof setInterval>>(undefined);
    const handleRun = useCallback(() => {
      setPhase('streaming');
      const msgId = Date.now();
      const introText = "Let me look at the Button component's focus styles and fix the ring.\\n\\nI can see the issue — the focus ring uses a hardcoded color instead of the theme token. Let me fix that and run the tests.";
      setMessages(prev => [...prev, {
        id: msgId,
        role: 'assistant',
        text: '',
        isStreaming: true
      }]);
      let i = 0;
      streamRef.current = setInterval(() => {
        i += 3 + Math.floor(Math.random() * 4);
        if (i >= introText.length) {
          clearInterval(streamRef.current);
          setMessages(prev => prev.map(m => m.id === msgId ? {
            ...m,
            text: introText,
            isStreaming: false
          } : m));

          // Transition to tool calls
          setPhase('tools');
          setTimeout(() => {
            const toolMsgId = Date.now();
            setMessages(prev => [...prev, {
              id: toolMsgId,
              role: 'assistant',
              text: '',
              toolCalls: [{
                key: '1',
                name: 'edit',
                target: 'XDSButton.tsx',
                status: 'running',
                node: 'xds'
              }]
            }]);
            setTimeout(() => {
              setMessages(prev => prev.map(m => m.id === toolMsgId ? {
                ...m,
                toolCalls: [{
                  key: '1',
                  name: 'edit',
                  target: 'XDSButton.tsx',
                  status: 'complete',
                  duration: '92ms',
                  node: 'xds',
                  additions: 4,
                  deletions: 2,
                  resultDetail: <XDSCodeBlock code={\`- outline: 2px solid blue;\\n+ outline: 2px solid var(--color-ring-focus);\\n+ outline-offset: 2px;\`} language="diff" />
                }]
              } : m));

              // Second tool call
              setTimeout(() => {
                const testMsgId = Date.now();
                setMessages(prev => [...prev, {
                  id: testMsgId,
                  role: 'assistant',
                  text: '',
                  toolCalls: [{
                    key: '2',
                    name: 'bash',
                    target: 'yarn test --filter Button',
                    status: 'running',
                    node: 'xds'
                  }]
                }]);
                setTimeout(() => {
                  setMessages(prev => prev.map(m => m.id === testMsgId ? {
                    ...m,
                    toolCalls: [{
                      key: '2',
                      name: 'bash',
                      target: 'yarn test --filter Button',
                      status: 'complete',
                      duration: '3.8s',
                      node: 'xds',
                      resultDetail: <XDSCodeBlock code={\`✓ 24 tests passed\\n\\nTest Suites: 3 passed, 3 total\\nTests:       24 passed, 24 total\`} language="bash" />
                    }]
                  } : m));

                  // Final streaming summary
                  setTimeout(() => {
                    const summaryId = Date.now();
                    const summaryText = 'Done! The focus ring now uses the theme token \`var(--color-ring-focus)\` with a 2px offset. All 24 tests pass.\\n\\nThe fix ensures the ring adapts to different themes automatically — no more hardcoded blue.';
                    setMessages(prev => [...prev, {
                      id: summaryId,
                      role: 'assistant',
                      text: '',
                      isStreaming: true
                    }]);
                    let j = 0;
                    streamRef.current = setInterval(() => {
                      j += 3 + Math.floor(Math.random() * 4);
                      if (j >= summaryText.length) {
                        clearInterval(streamRef.current);
                        setMessages(prev => prev.map(m => m.id === summaryId ? {
                          ...m,
                          text: summaryText,
                          isStreaming: false
                        } : m));
                        setPhase('done');
                        return;
                      }
                      setMessages(prev => prev.map(m => m.id === summaryId ? {
                        ...m,
                        text: summaryText.slice(0, j)
                      } : m));
                    }, 25);
                  }, 600);
                }, 2000);
              }, 800);
            }, 1500);
          }, 500);
          return;
        }
        setMessages(prev => prev.map(m => m.id === msgId ? {
          ...m,
          text: introText.slice(0, i)
        } : m));
      }, 25);
    }, []);
    const handleReset = useCallback(() => {
      clearInterval(streamRef.current);
      setPhase('idle');
      setMessages([{
        id: 1,
        role: 'user',
        text: 'Fix the focus ring and run the tests.'
      }]);
    }, []);
    return <div {...stylex.props(styles.wrapper)}>
        <div {...stylex.props(styles.controls)}>
          <XDSButton label="Run Full Sequence" variant="primary" size="sm" onClick={handleRun} isDisabled={phase !== 'idle' && phase !== 'done'} />
          <XDSButton label="Reset" variant="ghost" size="sm" onClick={handleReset} />
          <div {...stylex.props(styles.statusPill)}>
            <XDSBadge variant={phase === 'streaming' ? 'green' : phase === 'tools' ? 'yellow' : 'neutral'} label={phase === 'idle' ? 'Ready' : phase === 'streaming' ? 'Streaming text...' : phase === 'tools' ? 'Adding tool calls...' : 'Complete'} />
          </div>
        </div>

        <XDSChatLayout composer={<XDSChatComposer onSubmit={() => {}} placeholder="Watch the transition from streaming → tool calls..." />}>
          <XDSChatMessageList>
            {messages.map(msg => <XDSChatMessage key={msg.id} sender={msg.role}>
                {msg.text && <XDSMarkdown density="compact">{msg.text}</XDSMarkdown>}
                {msg.toolCalls && msg.toolCalls.length > 0 && <XDSChatToolCalls calls={msg.toolCalls} />}
              </XDSChatMessage>)}
          </XDSChatMessageList>
        </XDSChatLayout>
      </div>;
  }
}`,...b.parameters?.docs?.source},description:{story:`Mixed content — alternates between streaming text and tool call blocks,
showing the transition points where scroll may break.`,...b.parameters?.docs?.description}}};const ue=["ScrollBehaviorComparison","RapidToolCalls","MixedStreamAndTools"];export{b as MixedStreamAndTools,y as RapidToolCalls,C as ScrollBehaviorComparison,ue as __namedExportsOrder,me as default};
