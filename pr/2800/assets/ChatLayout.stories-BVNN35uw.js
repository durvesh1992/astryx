import{at as l,aX as Y,ad as e,X as h,F as ee}from"./iframe-yRFQ_7VC.js";import{X as L,a as W}from"./XDSChatComposer-CoWXtv-8.js";import{X as I}from"./XDSChatComposerDrawer-BsSAE6y3.js";import{X as V}from"./XDSChatTokenizedText-Db3Xm0Je.js";import{X as _}from"./XDSChatMessageList-iaotiKMM.js";import{X as M}from"./XDSChatMessage-DjVgtZME.js";import{X as G}from"./XDSChatMessageBubble-lAJho-xC.js";import{b as Z,X as N,F as te,a as se}from"./HandThumbUpIcon-CV7cSrLb.js";import{X as q}from"./XDSChatToolCalls-C1UyoWY6.js";import{X as R}from"./XDSChatLayout-B2Ab9Ncy.js";import{X as z}from"./XDSMarkdown-C51mApFy.js";import{X as w}from"./XDSToken-DnzEkZ3B.js";import{X as P}from"./XDSTimestamp-B11u0PZH.js";import{X as H}from"./XDSCodeBlock-B5b8s25t.js";import{X as ae}from"./XDSProgressBar-BLfsX17h.js";import{c as j}from"./createStaticSource-6dLwtoO2.js";import{X as ne}from"./XDSEmptyState-CWiMy9oI.js";import"./preload-helper-Ct5FWWRu.js";import"./index-D8Xh4Tce.js";import"./index-CXyWrEU_.js";import"./useXDSPopover-ChRJmaAz.js";import"./XDSBadge-COTe2g1g.js";import"./XDSHoverCard-BRL1pJWj.js";import"./XDSChatContext-Bvyev7ex.js";import"./XDSDivider-CD2fc5JP.js";import"./getKey-DyRdrWhf.js";import"./XDSCheckboxListItem-G66nArwI.js";import"./XDSField-COi97ivg.js";import"./XDSFieldStatus-BgnciRVy.js";import"./XDSList-B0MkGqZF.js";import"./XDSListItem-C5CIKGjL.js";import"./XDSItem-CTSSy95c.js";import"./computeTargetAndRel-BlG0ENK0.js";import"./XDSCheckboxInput-C50y4c1Q.js";import"./XDSBlockquote-kq4Y3FPM.js";import"./XDSTable-tIgxviJL.js";import"./useXDSStreamingText-CdCvbZFo.js";import"./XDSCitation-DzquwPCW.js";import"./XDSCode-CEZ5ThnD.js";import"./useXDSInteractiveRole-C4QNKBOy.js";import"./highlightRanges-DQjygsEE.js";const Ze={title:"Core/ChatLayout",component:R,tags:["autodocs"],parameters:{layout:"fullscreen"}},U=e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"})}),J=e.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"4"}),e.jsx("path",{d:"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"})]}),re=e.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"}),e.jsx("path",{d:"M19 10v2a7 7 0 0 1-14 0v-2"}),e.jsx("line",{x1:"12",x2:"12",y1:"19",y2:"22"})]}),y=[{id:"cindy",label:"Cindy Zhang"},{id:"alex",label:"Alex Rivera"},{id:"sam",label:"Sam Chen"},{id:"navi",label:"Navi"}],K=[{id:"summarize",label:"summarize"},{id:"search",label:"search"},{id:"explain",label:"explain"}],Q=[{id:1,role:"system",text:"Today"},{id:2,role:"user",text:"Can you review the Button component and fix the focus ring?",sentAt:new Date("2026-03-15T14:30:00")},{id:3,role:"assistant",introText:"I'll read the Button component and check the focus styles.",text:`I'll read the Button component and check the focus styles.

Added a \`:focus-visible\` style with a 2px solid outline and 2px offset. All 24 Button tests pass.

\`\`\`css
:focus-visible {
  outline: 2px solid var(--color-ring-focus);
  outline-offset: 2px;
}
\`\`\`

Here's the test breakdown:

| Suite | Tests | Duration | Status |
|-------|-------|----------|--------|
| XDSButton.test.tsx | 18 | 1.2s | ✓ Pass |
| XDSButton.a11y.test.tsx | 4 | 0.8s | ✓ Pass |
| XDSButton.snapshot.test.tsx | 2 | 0.3s | ✓ Pass |

The focus ring meets **WCAG 2.4.7** requirements and uses the theme's focus color token.`,toolCalls:[{key:"1",name:"read",target:"XDSButton.tsx",status:"complete",duration:"45ms",node:"xds"},{key:"2",name:"edit",target:"XDSButton.tsx",status:"complete",duration:"120ms",node:"xds",additions:8,deletions:2,resultDetail:e.jsx(H,{code:`:focus-visible {
  outline: 2px solid var(--color-ring-focus);
  outline-offset: 2px;
}`,language:"css"})},{key:"3",name:"bash",target:"yarn test",status:"complete",duration:"6.1s",node:"xds",resultDetail:e.jsx(H,{code:`$ yarn test
✓ 24 tests passed (3 suites)`,language:"bash"})}]},{id:4,role:"user",text:"Nice, can you also check the Card component?",sentAt:new Date("2026-03-15T14:35:00")}],v={name:"Full AI Chat",render:()=>{const[A,o]=l.useState(Q),[u,g]=l.useState([]),[E,S]=l.useState(!1),p=l.useRef(void 0),f=l.useRef(null),C=Y({placement:"above"}),O=y.map(t=>({value:`@${t.id}`,label:`@${t.label}`,variant:"blue"})),X=[{character:"@",searchSource:j(y),onSelect:t=>({value:`@${t.id}`,label:`@${t.label}`,variant:"blue"})},{character:"/",searchSource:j(K),onSelect:t=>`/${t.label} `}],k=l.useCallback((t,a,d)=>{const r=Date.now();S(!0),o(i=>[...i,{id:r,role:"assistant",text:"",introText:t,isStreaming:!0}]);let m=0;p.current=setInterval(()=>{if(m+=2+Math.floor(Math.random()*4),m>=t.length){clearInterval(p.current),o(i=>i.map(n=>n.id===r?{...n,text:t}:n)),d?setTimeout(()=>{o(i=>i.map(n=>n.id===r&&n.role==="assistant"?{...n,toolCalls:d.map(T=>({...T,status:"running",duration:void 0}))}:n)),setTimeout(()=>{o(i=>i.map(n=>n.id===r&&n.role==="assistant"?{...n,toolCalls:d}:n)),setTimeout(()=>{let i=0;const n=t+`

`+a;p.current=setInterval(()=>{i+=3+Math.floor(Math.random()*5);const T=t.length+2+i;if(T>=n.length){clearInterval(p.current),o(F=>F.map(x=>x.id===r?{...x,text:n,isStreaming:!1}:x)),S(!1);return}o(F=>F.map(x=>x.id===r?{...x,text:n.slice(0,T)}:x))},30)},300)},1800)},400):(o(i=>i.map(n=>n.id===r?{...n,isStreaming:!1}:n)),S(!1));return}o(i=>i.map(n=>n.id===r?{...n,text:t.slice(0,m)}:n))},30)},[]),$=t=>y.filter(a=>t.includes(`@${a.id}`)).map(a=>({value:`@${a.id}`,label:`@${a.label}`,variant:"blue"})),B=l.useCallback(t=>{const a=Date.now();o(d=>[...d,{id:a,role:"user",text:t,files:u.length?[...u]:void 0,tokens:$(t),isSending:!0}]),g([]),setTimeout(()=>{o(d=>d.map(r=>r.id===a&&r.role==="user"?{...r,isSending:!1,sentAt:new Date}:r)),k("I'll check the Card component for the same issue.",`The border radius was hardcoded. I replaced it with the theme token:

\`\`\`css
/* before */
border-radius: 12px;

/* after */
border-radius: var(--radius-element);
\`\`\`

Cards now adapt across themes. All tests pass.`,[{key:"r1",name:"read",target:"XDSCard.tsx",status:"complete",duration:"35ms",node:"xds"},{key:"e1",name:"edit",target:"XDSCard.tsx",status:"complete",duration:"90ms",node:"xds",additions:1,deletions:1},{key:"t1",name:"bash",target:"yarn test --filter Card",status:"complete",duration:"3.2s",node:"xds"}])},2e3)},[u,k]),s=l.useCallback(()=>{clearInterval(p.current),S(!1),o(t=>t.map(a=>a.role==="assistant"&&a.isStreaming?{...a,isStreaming:!1}:a))},[]),c=e.jsx(L,{onSubmit:B,onStop:s,isStopShown:E,drawer:u.length>0?e.jsx(I,{children:u.map(t=>e.jsx(w,{label:t,onRemove:()=>g(a=>a.filter(d=>d!==t))},t))}):void 0,headerActions:e.jsxs(e.Fragment,{children:[e.jsx(h,{label:"Mention",variant:"ghost",size:"sm",icon:J,isIconOnly:!0,onClick:()=>{f.current?.focus(),f.current?.insertText("@")}}),e.jsx(h,{label:"Attach",variant:"ghost",size:"sm",icon:U,isIconOnly:!0,onClick:()=>g(t=>[...t,`file-${t.length+1}.tsx`])})]}),headerContext:e.jsxs(e.Fragment,{children:[e.jsx(ae,{ref:C.ref,"aria-describedby":C.describedBy,label:"Context",value:12,variant:"neutral",isLabelHidden:!0,style:{marginInlineEnd:8}}),C.renderTooltip("3k / 100k tokens used")]}),input:e.jsx(W,{handleRef:f,triggers:X,placeholder:"Ask about the codebase..."}),footerActions:e.jsx(h,{label:"Claude Opus",variant:"ghost",size:"md"}),sendActions:e.jsx(h,{label:"Microphone",variant:"ghost",size:"md",icon:re,isIconOnly:!0})});return e.jsx("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:e.jsx(R,{composer:c,children:e.jsx(_,{children:A.map(t=>{if(t.role==="system")return e.jsx(Z,{variant:"divider",children:t.text},t.id);if(t.role==="user")return e.jsxs(M,{sender:"user",children:[t.files&&e.jsx(I,{children:t.files.map(i=>e.jsx(w,{label:i},i))}),e.jsx(G,{metadata:e.jsx(N,{timestamp:e.jsx(P,{value:t.sentAt?.toISOString()??new Date(t.id).toISOString(),format:"time"}),status:t.isSending?"sending":void 0}),children:e.jsx(V,{tokens:O,children:t.text})})]},t.id);const a=t.introText?.length??0,d=t.toolCalls&&t.toolCalls.length>0,r=a>0?t.text.slice(0,a):null,m=a>0&&t.text.length>a?t.text.slice(a).replace(/^\n+/,""):a?null:t.text;return e.jsxs(M,{sender:"assistant",children:[r&&e.jsx(z,{density:"compact",children:r}),d&&e.jsx(q,{calls:t.toolCalls??[]}),m&&e.jsx(z,{density:"compact",children:m}),!t.isStreaming&&t.text&&e.jsx(N,{timestamp:e.jsx(P,{value:new Date(t.id).toISOString(),format:"time"}),footer:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Claude Opus 4.6"}),e.jsx("span",{children:"·"}),e.jsx(h,{label:"Thumbs up",icon:e.jsx(te,{style:{width:14,height:14}}),variant:"ghost",size:"sm",isIconOnly:!0}),e.jsx(h,{label:"Thumbs down",icon:e.jsx(se,{style:{width:14,height:14}}),variant:"ghost",size:"sm",isIconOnly:!0}),e.jsx(h,{label:"Copy",icon:e.jsx(ee,{style:{width:14,height:14}}),variant:"ghost",size:"sm",isIconOnly:!0})]})})]},t.id)})})})})}},b={name:"Panel View",render:()=>{const[A,o]=l.useState(Q),[u,g]=l.useState([]),[E,S]=l.useState(!1),p=l.useRef(void 0),f=l.useRef(null),C=y.map(s=>({value:`@${s.id}`,label:`@${s.label}`,variant:"blue"})),O=[{character:"@",searchSource:j(y),onSelect:s=>({value:`@${s.id}`,label:`@${s.label}`,variant:"blue"})},{character:"/",searchSource:j(K),onSelect:s=>`/${s.label} `}],X=l.useCallback((s,c)=>{const t=Date.now();S(!0),o(r=>[...r,{id:t,role:"assistant",text:"",isStreaming:!0}]);let a=0;const d=s+`

`+c;p.current=setInterval(()=>{if(a+=3+Math.floor(Math.random()*5),a>=d.length){clearInterval(p.current),o(r=>r.map(m=>m.id===t?{...m,text:d,isStreaming:!1}:m)),S(!1);return}o(r=>r.map(m=>m.id===t?{...m,text:d.slice(0,a)}:m))},30)},[]),k=l.useCallback(s=>{o(c=>[...c,{id:Date.now(),role:"user",text:s,files:u.length?[...u]:void 0}]),g([]),setTimeout(()=>{X("Checking the component now.","Found the issue — the border radius was hardcoded. Replaced with the theme token.")},800)},[u,X]),$=l.useCallback(()=>{clearInterval(p.current),S(!1),o(s=>s.map(c=>c.role==="assistant"&&c.isStreaming?{...c,isStreaming:!1}:c))},[]),B=e.jsx(L,{onSubmit:k,onStop:$,isStopShown:E,drawer:u.length>0?e.jsx(I,{children:u.map(s=>e.jsx(w,{label:s,onRemove:()=>g(c=>c.filter(t=>t!==s))},s))}):void 0,headerActions:e.jsxs(e.Fragment,{children:[e.jsx(h,{label:"Mention",variant:"ghost",size:"sm",icon:J,isIconOnly:!0,onClick:()=>{f.current?.focus(),f.current?.insertText("@")}}),e.jsx(h,{label:"Attach",variant:"ghost",size:"sm",icon:U,isIconOnly:!0,onClick:()=>g(s=>[...s,`file-${s.length+1}.tsx`])})]}),input:e.jsx(W,{handleRef:f,triggers:O,placeholder:"Ask something..."})});return e.jsx("div",{style:{width:400,height:600,border:"1px solid #ccc",borderRadius:8,overflow:"hidden"},children:e.jsx(R,{composer:B,children:e.jsx(_,{children:A.map(s=>s.role==="system"?e.jsx(Z,{variant:"divider",children:s.text},s.id):s.role==="user"?e.jsxs(M,{sender:"user",children:[s.files&&e.jsx(I,{children:s.files.map(c=>e.jsx(w,{label:c},c))}),e.jsx(G,{children:e.jsx(V,{tokens:C,children:s.text})})]},s.id):e.jsxs(M,{sender:"assistant",children:[s.text&&e.jsx(z,{density:"compact",children:s.text}),s.toolCalls&&s.toolCalls.length>0&&e.jsx(q,{calls:s.toolCalls??[]})]},s.id))})})})}},D={name:"Empty State",render:()=>e.jsx("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:e.jsx(R,{composer:e.jsx(L,{onSubmit:()=>{},placeholder:"Start a conversation…"}),emptyState:e.jsx(ne,{title:"No messages yet",description:"Start a conversation by typing below."}),children:[]})})};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Full AI Chat',
  render: () => {
    const [messages, setMessages] = useState<Message[]>(SEED_MESSAGES);
    const [files, setFiles] = useState<string[]>([]);
    const [isStreaming, setIsStreaming] = useState(false);
    const streamRef = useRef<ReturnType<typeof setInterval>>(undefined);
    const inputRef = useRef<XDSChatComposerInputHandle>(null);
    const contextTooltip = useXDSTooltip({
      placement: 'above'
    });
    const mentionTokens = CONTACTS.map(c => ({
      value: \`@\${c.id}\`,
      label: \`@\${c.label}\`,
      variant: 'blue' as const
    }));
    const triggers: XDSChatComposerTrigger[] = [{
      character: '@',
      searchSource: createStaticSource(CONTACTS),
      onSelect: item => ({
        value: \`@\${item.id}\`,
        label: \`@\${item.label}\`,
        variant: 'blue' as const
      })
    }, {
      character: '/',
      searchSource: createStaticSource(COMMANDS),
      onSelect: item => \`/\${item.label} \`
    }];
    const streamResponse = useCallback((introText: string, resultText: string, toolCalls?: XDSChatToolCallItem[]) => {
      const msgId = Date.now();
      setIsStreaming(true);
      setMessages(prev => [...prev, {
        id: msgId,
        role: 'assistant',
        text: '',
        introText,
        isStreaming: true
      }]);
      let i = 0;
      streamRef.current = setInterval(() => {
        i += 2 + Math.floor(Math.random() * 4);
        if (i >= introText.length) {
          clearInterval(streamRef.current);
          setMessages(prev => prev.map(m => m.id === msgId ? {
            ...m,
            text: introText
          } : m));
          if (toolCalls) {
            setTimeout(() => {
              setMessages(prev => prev.map(m => m.id === msgId && m.role === 'assistant' ? {
                ...m,
                toolCalls: toolCalls.map(tc => ({
                  ...tc,
                  status: 'running' as const,
                  duration: undefined
                }))
              } : m));
              setTimeout(() => {
                setMessages(prev => prev.map(m => m.id === msgId && m.role === 'assistant' ? {
                  ...m,
                  toolCalls
                } : m));
                setTimeout(() => {
                  let j = 0;
                  const fullText = introText + '\\n\\n' + resultText;
                  streamRef.current = setInterval(() => {
                    j += 3 + Math.floor(Math.random() * 5);
                    const end = introText.length + 2 + j;
                    if (end >= fullText.length) {
                      clearInterval(streamRef.current);
                      setMessages(prev => prev.map(m => m.id === msgId ? {
                        ...m,
                        text: fullText,
                        isStreaming: false
                      } : m));
                      setIsStreaming(false);
                      return;
                    }
                    setMessages(prev => prev.map(m => m.id === msgId ? {
                      ...m,
                      text: fullText.slice(0, end)
                    } : m));
                  }, 30);
                }, 300);
              }, 1800);
            }, 400);
          } else {
            setMessages(prev => prev.map(m => m.id === msgId ? {
              ...m,
              isStreaming: false
            } : m));
            setIsStreaming(false);
          }
          return;
        }
        setMessages(prev => prev.map(m => m.id === msgId ? {
          ...m,
          text: introText.slice(0, i)
        } : m));
      }, 30);
    }, []);

    // Simulate backend token resolution — extract @mentions from text
    const resolveTokens = (text: string): XDSChatComposerToken[] => CONTACTS.filter(c => text.includes(\`@\${c.id}\`)).map(c => ({
      value: \`@\${c.id}\`,
      label: \`@\${c.label}\`,
      variant: 'blue' as const
    }));
    const handleSubmit = useCallback((value: string) => {
      const userMsgId = Date.now();
      setMessages(prev => [...prev, {
        id: userMsgId,
        role: 'user',
        text: value,
        files: files.length ? [...files] : undefined,
        tokens: resolveTokens(value),
        isSending: true
      }]);
      setFiles([]);

      // After 2s, mark as sent and start streaming
      setTimeout(() => {
        setMessages(prev => prev.map(m => m.id === userMsgId && m.role === 'user' ? {
          ...m,
          isSending: false,
          sentAt: new Date()
        } : m));
        streamResponse("I'll check the Card component for the same issue.", 'The border radius was hardcoded. I replaced it with the theme token:\\n\\n\`\`\`css\\n/* before */\\nborder-radius: 12px;\\n\\n/* after */\\nborder-radius: var(--radius-element);\\n\`\`\`\\n\\nCards now adapt across themes. All tests pass.', [{
          key: 'r1',
          name: 'read',
          target: 'XDSCard.tsx',
          status: 'complete',
          duration: '35ms',
          node: 'xds'
        }, {
          key: 'e1',
          name: 'edit',
          target: 'XDSCard.tsx',
          status: 'complete',
          duration: '90ms',
          node: 'xds',
          additions: 1,
          deletions: 1
        }, {
          key: 't1',
          name: 'bash',
          target: 'yarn test --filter Card',
          status: 'complete',
          duration: '3.2s',
          node: 'xds'
        }]);
      }, 2000);
    }, [files, streamResponse]);
    const handleStop = useCallback(() => {
      clearInterval(streamRef.current);
      setIsStreaming(false);
      setMessages(prev => prev.map(m => m.role === 'assistant' && m.isStreaming ? {
        ...m,
        isStreaming: false
      } : m));
    }, []);
    const composerEl = <XDSChatComposer onSubmit={handleSubmit} onStop={handleStop} isStopShown={isStreaming} drawer={files.length > 0 ? <XDSChatComposerDrawer>
              {files.map(f => <XDSToken key={f} label={f} onRemove={() => setFiles(prev => prev.filter(x => x !== f))} />)}
            </XDSChatComposerDrawer> : undefined} headerActions={<>
            <XDSButton label="Mention" variant="ghost" size="sm" icon={AtSignIcon} isIconOnly onClick={() => {
        inputRef.current?.focus();
        inputRef.current?.insertText('@');
      }} />
            <XDSButton label="Attach" variant="ghost" size="sm" icon={PaperclipIcon} isIconOnly onClick={() => setFiles(prev => [...prev, \`file-\${prev.length + 1}.tsx\`])} />
          </>} headerContext={<>
            <XDSProgressBar ref={contextTooltip.ref} aria-describedby={contextTooltip.describedBy} label="Context" value={12} variant="neutral" isLabelHidden style={{
        marginInlineEnd: 8
      }} />
            {contextTooltip.renderTooltip('3k / 100k tokens used')}
          </>} input={<XDSChatComposerInput handleRef={inputRef} triggers={triggers} placeholder="Ask about the codebase..." />} footerActions={<XDSButton label="Claude Opus" variant="ghost" size="md" />} sendActions={<XDSButton label="Microphone" variant="ghost" size="md" icon={MicIcon} isIconOnly />} />;
    return <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
        <XDSChatLayout composer={composerEl}>
          <XDSChatMessageList>
            {messages.map(msg => {
            if (msg.role === 'system') {
              return <XDSChatSystemMessage key={msg.id} variant="divider">
                    {msg.text}
                  </XDSChatSystemMessage>;
            }
            if (msg.role === 'user') {
              return <XDSChatMessage key={msg.id} sender="user">
                    {msg.files && <XDSChatComposerDrawer>
                        {msg.files.map(f => <XDSToken key={f} label={f} />)}
                      </XDSChatComposerDrawer>}
                    <XDSChatMessageBubble metadata={<XDSChatMessageMetadata timestamp={<XDSTimestamp value={msg.sentAt?.toISOString() ?? new Date(msg.id).toISOString()} format="time" />} status={msg.isSending ? 'sending' : undefined} />}>
                      <XDSChatTokenizedText tokens={mentionTokens}>
                        {msg.text}
                      </XDSChatTokenizedText>
                    </XDSChatMessageBubble>
                  </XDSChatMessage>;
            }
            {
              /* Assistant: intro text → tool calls → rest of text */
            }
            const introEnd = msg.introText?.length ?? 0;
            const hasToolCalls = msg.toolCalls && msg.toolCalls.length > 0;
            const introContent = introEnd > 0 ? msg.text.slice(0, introEnd) : null;
            const restContent = introEnd > 0 && msg.text.length > introEnd ? msg.text.slice(introEnd).replace(/^\\n+/, '') : !introEnd ? msg.text : null;
            return <XDSChatMessage key={msg.id} sender="assistant">
                  {introContent && <XDSMarkdown density="compact">{introContent}</XDSMarkdown>}
                  {hasToolCalls && <XDSChatToolCalls calls={msg.toolCalls ?? []} />}
                  {restContent && <XDSMarkdown density="compact">{restContent}</XDSMarkdown>}
                  {!msg.isStreaming && msg.text && <XDSChatMessageMetadata timestamp={<XDSTimestamp value={new Date(msg.id).toISOString()} format="time" />} footer={<>
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
                        </>} />}
                </XDSChatMessage>;
          })}
          </XDSChatMessageList>
        </XDSChatLayout>
      </div>;
  }
}`,...v.parameters?.docs?.source},description:{story:"Full AI chat with streaming, tool calls, triggers, attachments, and frosted glass composer dock",...v.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Panel View',
  render: () => {
    const [messages, setMessages] = useState<Message[]>(SEED_MESSAGES);
    const [files, setFiles] = useState<string[]>([]);
    const [isStreaming, setIsStreaming] = useState(false);
    const streamRef = useRef<ReturnType<typeof setInterval>>(undefined);
    const inputRef = useRef<XDSChatComposerInputHandle>(null);
    const mentionTokens = CONTACTS.map(c => ({
      value: \`@\${c.id}\`,
      label: \`@\${c.label}\`,
      variant: 'blue' as const
    }));
    const triggers: XDSChatComposerTrigger[] = [{
      character: '@',
      searchSource: createStaticSource(CONTACTS),
      onSelect: item => ({
        value: \`@\${item.id}\`,
        label: \`@\${item.label}\`,
        variant: 'blue' as const
      })
    }, {
      character: '/',
      searchSource: createStaticSource(COMMANDS),
      onSelect: item => \`/\${item.label} \`
    }];
    const streamResponse = useCallback((introText: string, resultText: string) => {
      const msgId = Date.now();
      setIsStreaming(true);
      setMessages(prev => [...prev, {
        id: msgId,
        role: 'assistant',
        text: '',
        isStreaming: true
      }]);
      let i = 0;
      const fullText = introText + '\\n\\n' + resultText;
      streamRef.current = setInterval(() => {
        i += 3 + Math.floor(Math.random() * 5);
        if (i >= fullText.length) {
          clearInterval(streamRef.current);
          setMessages(prev => prev.map(m => m.id === msgId ? {
            ...m,
            text: fullText,
            isStreaming: false
          } : m));
          setIsStreaming(false);
          return;
        }
        setMessages(prev => prev.map(m => m.id === msgId ? {
          ...m,
          text: fullText.slice(0, i)
        } : m));
      }, 30);
    }, []);
    const handleSubmit = useCallback((value: string) => {
      setMessages(prev => [...prev, {
        id: Date.now(),
        role: 'user',
        text: value,
        files: files.length ? [...files] : undefined
      }]);
      setFiles([]);
      setTimeout(() => {
        streamResponse('Checking the component now.', 'Found the issue — the border radius was hardcoded. Replaced with the theme token.');
      }, 800);
    }, [files, streamResponse]);
    const handleStop = useCallback(() => {
      clearInterval(streamRef.current);
      setIsStreaming(false);
      setMessages(prev => prev.map(m => m.role === 'assistant' && m.isStreaming ? {
        ...m,
        isStreaming: false
      } : m));
    }, []);
    const composerEl = <XDSChatComposer onSubmit={handleSubmit} onStop={handleStop} isStopShown={isStreaming} drawer={files.length > 0 ? <XDSChatComposerDrawer>
              {files.map(f => <XDSToken key={f} label={f} onRemove={() => setFiles(prev => prev.filter(x => x !== f))} />)}
            </XDSChatComposerDrawer> : undefined} headerActions={<>
            <XDSButton label="Mention" variant="ghost" size="sm" icon={AtSignIcon} isIconOnly onClick={() => {
        inputRef.current?.focus();
        inputRef.current?.insertText('@');
      }} />
            <XDSButton label="Attach" variant="ghost" size="sm" icon={PaperclipIcon} isIconOnly onClick={() => setFiles(prev => [...prev, \`file-\${prev.length + 1}.tsx\`])} />
          </>} input={<XDSChatComposerInput handleRef={inputRef} triggers={triggers} placeholder="Ask something..." />} />;
    return <div style={{
      width: 400,
      height: 600,
      border: '1px solid #ccc',
      borderRadius: 8,
      overflow: 'hidden'
    }}>
        <XDSChatLayout composer={composerEl}>
          <XDSChatMessageList>
            {messages.map(msg => {
            if (msg.role === 'system') {
              return <XDSChatSystemMessage key={msg.id} variant="divider">
                    {msg.text}
                  </XDSChatSystemMessage>;
            }
            if (msg.role === 'user') {
              return <XDSChatMessage key={msg.id} sender="user">
                    {msg.files && <XDSChatComposerDrawer>
                        {msg.files.map(f => <XDSToken key={f} label={f} />)}
                      </XDSChatComposerDrawer>}
                    <XDSChatMessageBubble>
                      <XDSChatTokenizedText tokens={mentionTokens}>
                        {msg.text}
                      </XDSChatTokenizedText>
                    </XDSChatMessageBubble>
                  </XDSChatMessage>;
            }
            return <XDSChatMessage key={msg.id} sender="assistant">
                  {msg.text && <XDSMarkdown density="compact">{msg.text}</XDSMarkdown>}
                  {msg.toolCalls && msg.toolCalls.length > 0 && <XDSChatToolCalls calls={msg.toolCalls ?? []} />}
                </XDSChatMessage>;
          })}
          </XDSChatMessageList>
        </XDSChatLayout>
      </div>;
  }
}`,...b.parameters?.docs?.source},description:{story:"Panel view — same full features in a narrow sidebar container",...b.parameters?.docs?.description}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Empty State',
  render: () => <div style={{
    height: '100vh',
    display: 'flex',
    flexDirection: 'column'
  }}>
      <XDSChatLayout composer={<XDSChatComposer onSubmit={() => {}} placeholder="Start a conversation…" />} emptyState={<XDSEmptyState title="No messages yet" description="Start a conversation by typing below." />}>
        {[]}
      </XDSChatLayout>
    </div>
}`,...D.parameters?.docs?.source},description:{story:"Empty state using XDSEmptyState",...D.parameters?.docs?.description}}};const qe=["FullAIChat","PanelView","WithEmptyState"];export{v as FullAIChat,b as PanelView,D as WithEmptyState,qe as __namedExportsOrder,Ze as default};
