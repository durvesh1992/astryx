import{at as l,aX as Y,ad as e,B as h,F as ee}from"./iframe-BsyQNsjg.js";import{C as P,a as V}from"./ChatComposer-DNEFtRWo.js";import{C as w}from"./ChatComposerDrawer-BWn9bpo8.js";import{C as _}from"./ChatTokenizedText-BdvntNlR.js";import{C as G}from"./ChatMessageList-B3-cwwUK.js";import{C as j}from"./ChatMessage-CIyBEJT9.js";import{C as Z}from"./ChatMessageBubble-DFoYBmf0.js";import{a as q,C as N,F as te,b as se}from"./HandThumbUpIcon-D6HtNbQA.js";import{C as U}from"./ChatToolCalls-CnHSJlSK.js";import{C as D}from"./ChatLayout-CGJdg6Ju.js";import{M as L}from"./Markdown-BPKYfmUZ.js";import{T as R}from"./Token-VOWYDPCX.js";import{T as H}from"./Timestamp-Ce1lmfYz.js";import{C as W}from"./CodeBlock-D6wOP1I-.js";import{P as ae}from"./ProgressBar-HRUkJnZd.js";import{c as A}from"./createStaticSource-6dLwtoO2.js";import{E as ne}from"./EmptyState-B2QAVwKi.js";import"./preload-helper-Ct5FWWRu.js";import"./index-CR-DOxqQ.js";import"./index-Bi0DV4yh.js";import"./usePopover-BIgzi40u.js";import"./Badge-Bk6Kqozi.js";import"./HoverCard-B2ME6nyb.js";import"./ChatContext-DI64GbG6.js";import"./Divider-Dde5c7Qn.js";import"./getKey-DyRdrWhf.js";import"./CheckboxListItem-rav7Z1RX.js";import"./Field-CwBWJ3UK.js";import"./FieldStatus-CpbQmNrj.js";import"./List-BvnhqnJa.js";import"./ListItem-BbfLZ1zc.js";import"./Item-ls6cDVeU.js";import"./computeTargetAndRel-BlG0ENK0.js";import"./CheckboxInput-A4vOtGqU.js";import"./Blockquote-qTccG1Qt.js";import"./Table-DbWwTk6p.js";import"./useStreamingText-CKZh63Ww.js";import"./Citation-jIUfuAuS.js";import"./Code-DUs3QDLC.js";import"./useInteractiveRole-De3Y2qEg.js";import"./highlightRanges-EIPCprQf.js";const qe={title:"Core/ChatLayout",component:D,tags:["autodocs"],parameters:{layout:"fullscreen"}},X=e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"})}),J=e.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"4"}),e.jsx("path",{d:"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"})]}),re=e.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"}),e.jsx("path",{d:"M19 10v2a7 7 0 0 1-14 0v-2"}),e.jsx("line",{x1:"12",x2:"12",y1:"19",y2:"22"})]}),k=[{id:"cindy",label:"Cindy Zhang"},{id:"alex",label:"Alex Rivera"},{id:"sam",label:"Sam Chen"},{id:"navi",label:"Navi"}],K=[{id:"summarize",label:"summarize"},{id:"search",label:"search"},{id:"explain",label:"explain"}],Q=[{id:1,role:"system",text:"Today"},{id:2,role:"user",text:"Can you review the Button component and fix the focus ring?",sentAt:new Date("2026-03-15T14:30:00")},{id:3,role:"assistant",introText:"I'll read the Button component and check the focus styles.",text:`I'll read the Button component and check the focus styles.

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
| Button.test.tsx | 18 | 1.2s | ✓ Pass |
| Button.a11y.test.tsx | 4 | 0.8s | ✓ Pass |
| Button.snapshot.test.tsx | 2 | 0.3s | ✓ Pass |

The focus ring meets **WCAG 2.4.7** requirements and uses the theme's focus color token.`,toolCalls:[{key:"1",name:"read",target:"Button.tsx",status:"complete",duration:"45ms",node:"xds"},{key:"2",name:"edit",target:"Button.tsx",status:"complete",duration:"120ms",node:"xds",additions:8,deletions:2,resultDetail:e.jsx(W,{code:`:focus-visible {
  outline: 2px solid var(--color-ring-focus);
  outline-offset: 2px;
}`,language:"css"})},{key:"3",name:"bash",target:"yarn test",status:"complete",duration:"6.1s",node:"xds",resultDetail:e.jsx(W,{code:`$ yarn test
✓ 24 tests passed (3 suites)`,language:"bash"})}]},{id:4,role:"user",text:"Nice, can you also check the Card component?",sentAt:new Date("2026-03-15T14:35:00")}],S={name:"Full AI Chat",render:()=>{const[E,o]=l.useState(Q),[u,f]=l.useState([]),[O,g]=l.useState(!1),p=l.useRef(void 0),x=l.useRef(null),v=Y({placement:"above"}),B=k.map(t=>({value:`@${t.id}`,label:`@${t.label}`,variant:"blue"})),T=[{character:"@",searchSource:A(k),onSelect:t=>({value:`@${t.id}`,label:`@${t.label}`,variant:"blue"})},{character:"/",searchSource:A(K),onSelect:t=>`/${t.label} `}],I=l.useCallback((t,a,d)=>{const r=Date.now();g(!0),o(i=>[...i,{id:r,role:"assistant",text:"",introText:t,isStreaming:!0}]);let m=0;p.current=setInterval(()=>{if(m+=2+Math.floor(Math.random()*4),m>=t.length){clearInterval(p.current),o(i=>i.map(n=>n.id===r?{...n,text:t}:n)),d?setTimeout(()=>{o(i=>i.map(n=>n.id===r&&n.role==="assistant"?{...n,toolCalls:d.map(M=>({...M,status:"running",duration:void 0}))}:n)),setTimeout(()=>{o(i=>i.map(n=>n.id===r&&n.role==="assistant"?{...n,toolCalls:d}:n)),setTimeout(()=>{let i=0;const n=t+`

`+a;p.current=setInterval(()=>{i+=3+Math.floor(Math.random()*5);const M=t.length+2+i;if(M>=n.length){clearInterval(p.current),o(z=>z.map(C=>C.id===r?{...C,text:n,isStreaming:!1}:C)),g(!1);return}o(z=>z.map(C=>C.id===r?{...C,text:n.slice(0,M)}:C))},30)},300)},1800)},400):(o(i=>i.map(n=>n.id===r?{...n,isStreaming:!1}:n)),g(!1));return}o(i=>i.map(n=>n.id===r?{...n,text:t.slice(0,m)}:n))},30)},[]),$=t=>k.filter(a=>t.includes(`@${a.id}`)).map(a=>({value:`@${a.id}`,label:`@${a.label}`,variant:"blue"})),F=l.useCallback(t=>{const a=Date.now();o(d=>[...d,{id:a,role:"user",text:t,files:u.length?[...u]:void 0,tokens:$(t),isSending:!0}]),f([]),setTimeout(()=>{o(d=>d.map(r=>r.id===a&&r.role==="user"?{...r,isSending:!1,sentAt:new Date}:r)),I("I'll check the Card component for the same issue.",`The border radius was hardcoded. I replaced it with the theme token:

\`\`\`css
/* before */
border-radius: 12px;

/* after */
border-radius: var(--radius-element);
\`\`\`

Cards now adapt across themes. All tests pass.`,[{key:"r1",name:"read",target:"Card.tsx",status:"complete",duration:"35ms",node:"xds"},{key:"e1",name:"edit",target:"Card.tsx",status:"complete",duration:"90ms",node:"xds",additions:1,deletions:1},{key:"t1",name:"bash",target:"yarn test --filter Card",status:"complete",duration:"3.2s",node:"xds"}])},2e3)},[u,I]),s=l.useCallback(()=>{clearInterval(p.current),g(!1),o(t=>t.map(a=>a.role==="assistant"&&a.isStreaming?{...a,isStreaming:!1}:a))},[]),c=e.jsx(P,{onSubmit:F,onStop:s,isStopShown:O,drawer:u.length>0?e.jsx(w,{children:u.map(t=>e.jsx(R,{label:t,onRemove:()=>f(a=>a.filter(d=>d!==t))},t))}):void 0,headerActions:e.jsxs(e.Fragment,{children:[e.jsx(h,{label:"Mention",variant:"ghost",size:"sm",icon:J,isIconOnly:!0,onClick:()=>{x.current?.focus(),x.current?.insertText("@")}}),e.jsx(h,{label:"Attach",variant:"ghost",size:"sm",icon:X,isIconOnly:!0,onClick:()=>f(t=>[...t,`file-${t.length+1}.tsx`])})]}),headerContext:e.jsxs(e.Fragment,{children:[e.jsx(ae,{ref:v.ref,"aria-describedby":v.describedBy,label:"Context",value:12,variant:"neutral",isLabelHidden:!0,style:{marginInlineEnd:8}}),v.renderTooltip("3k / 100k tokens used")]}),input:e.jsx(V,{handleRef:x,triggers:T,placeholder:"Ask about the codebase..."}),footerActions:e.jsx(h,{label:"Claude Opus",variant:"ghost",size:"md"}),sendActions:e.jsx(h,{label:"Microphone",variant:"ghost",size:"md",icon:re,isIconOnly:!0})});return e.jsx("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:e.jsx(D,{composer:c,children:e.jsx(G,{children:E.map(t=>{if(t.role==="system")return e.jsx(q,{variant:"divider",children:t.text},t.id);if(t.role==="user")return e.jsxs(j,{sender:"user",children:[t.files&&e.jsx(w,{children:t.files.map(i=>e.jsx(R,{label:i},i))}),e.jsx(Z,{metadata:e.jsx(N,{timestamp:e.jsx(H,{value:t.sentAt?.toISOString()??new Date(t.id).toISOString(),format:"time"}),status:t.isSending?"sending":void 0}),children:e.jsx(_,{tokens:B,children:t.text})})]},t.id);const a=t.introText?.length??0,d=t.toolCalls&&t.toolCalls.length>0,r=a>0?t.text.slice(0,a):null,m=a>0&&t.text.length>a?t.text.slice(a).replace(/^\n+/,""):a?null:t.text;return e.jsxs(j,{sender:"assistant",children:[r&&e.jsx(L,{density:"compact",children:r}),d&&e.jsx(U,{calls:t.toolCalls??[]}),m&&e.jsx(L,{density:"compact",children:m}),!t.isStreaming&&t.text&&e.jsx(N,{timestamp:e.jsx(H,{value:new Date(t.id).toISOString(),format:"time"}),footer:e.jsxs(e.Fragment,{children:[e.jsx("span",{children:"Claude Opus 4.6"}),e.jsx("span",{children:"·"}),e.jsx(h,{label:"Thumbs up",icon:e.jsx(te,{style:{width:14,height:14}}),variant:"ghost",size:"sm",isIconOnly:!0}),e.jsx(h,{label:"Thumbs down",icon:e.jsx(se,{style:{width:14,height:14}}),variant:"ghost",size:"sm",isIconOnly:!0}),e.jsx(h,{label:"Copy",icon:e.jsx(ee,{style:{width:14,height:14}}),variant:"ghost",size:"sm",isIconOnly:!0})]})})]},t.id)})})})})}},b={name:"Panel View",render:()=>{const[E,o]=l.useState(Q),[u,f]=l.useState([]),[O,g]=l.useState(!1),p=l.useRef(void 0),x=l.useRef(null),v=k.map(s=>({value:`@${s.id}`,label:`@${s.label}`,variant:"blue"})),B=[{character:"@",searchSource:A(k),onSelect:s=>({value:`@${s.id}`,label:`@${s.label}`,variant:"blue"})},{character:"/",searchSource:A(K),onSelect:s=>`/${s.label} `}],T=l.useCallback((s,c)=>{const t=Date.now();g(!0),o(r=>[...r,{id:t,role:"assistant",text:"",isStreaming:!0}]);let a=0;const d=s+`

`+c;p.current=setInterval(()=>{if(a+=3+Math.floor(Math.random()*5),a>=d.length){clearInterval(p.current),o(r=>r.map(m=>m.id===t?{...m,text:d,isStreaming:!1}:m)),g(!1);return}o(r=>r.map(m=>m.id===t?{...m,text:d.slice(0,a)}:m))},30)},[]),I=l.useCallback(s=>{o(c=>[...c,{id:Date.now(),role:"user",text:s,files:u.length?[...u]:void 0}]),f([]),setTimeout(()=>{T("Checking the component now.","Found the issue — the border radius was hardcoded. Replaced with the theme token.")},800)},[u,T]),$=l.useCallback(()=>{clearInterval(p.current),g(!1),o(s=>s.map(c=>c.role==="assistant"&&c.isStreaming?{...c,isStreaming:!1}:c))},[]),F=e.jsx(P,{onSubmit:I,onStop:$,isStopShown:O,drawer:u.length>0?e.jsx(w,{children:u.map(s=>e.jsx(R,{label:s,onRemove:()=>f(c=>c.filter(t=>t!==s))},s))}):void 0,headerActions:e.jsxs(e.Fragment,{children:[e.jsx(h,{label:"Mention",variant:"ghost",size:"sm",icon:J,isIconOnly:!0,onClick:()=>{x.current?.focus(),x.current?.insertText("@")}}),e.jsx(h,{label:"Attach",variant:"ghost",size:"sm",icon:X,isIconOnly:!0,onClick:()=>f(s=>[...s,`file-${s.length+1}.tsx`])})]}),input:e.jsx(V,{handleRef:x,triggers:B,placeholder:"Ask something..."})});return e.jsx("div",{style:{width:400,height:600,border:"1px solid #ccc",borderRadius:8,overflow:"hidden"},children:e.jsx(D,{composer:F,children:e.jsx(G,{children:E.map(s=>s.role==="system"?e.jsx(q,{variant:"divider",children:s.text},s.id):s.role==="user"?e.jsxs(j,{sender:"user",children:[s.files&&e.jsx(w,{children:s.files.map(c=>e.jsx(R,{label:c},c))}),e.jsx(Z,{children:e.jsx(_,{tokens:v,children:s.text})})]},s.id):e.jsxs(j,{sender:"assistant",children:[s.text&&e.jsx(L,{density:"compact",children:s.text}),s.toolCalls&&s.toolCalls.length>0&&e.jsx(U,{calls:s.toolCalls??[]})]},s.id))})})})}},y={name:"Empty State",render:()=>e.jsx("div",{style:{height:"100vh",display:"flex",flexDirection:"column"},children:e.jsx(D,{composer:e.jsx(P,{onSubmit:()=>{},placeholder:"Start a conversation…"}),emptyState:e.jsx(ne,{title:"No messages yet",description:"Start a conversation by typing below."}),children:[]})})};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Full AI Chat',
  render: () => {
    const [messages, setMessages] = useState<Message[]>(SEED_MESSAGES);
    const [files, setFiles] = useState<string[]>([]);
    const [isStreaming, setIsStreaming] = useState(false);
    const streamRef = useRef<ReturnType<typeof setInterval>>(undefined);
    const inputRef = useRef<ChatComposerInputHandle>(null);
    const contextTooltip = useTooltip({
      placement: 'above'
    });
    const mentionTokens = CONTACTS.map(c => ({
      value: \`@\${c.id}\`,
      label: \`@\${c.label}\`,
      variant: 'blue' as const
    }));
    const triggers: ChatComposerTrigger[] = [{
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
    const streamResponse = useCallback((introText: string, resultText: string, toolCalls?: ChatToolCallItem[]) => {
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
    const resolveTokens = (text: string): ChatComposerToken[] => CONTACTS.filter(c => text.includes(\`@\${c.id}\`)).map(c => ({
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
          target: 'Card.tsx',
          status: 'complete',
          duration: '35ms',
          node: 'xds'
        }, {
          key: 'e1',
          name: 'edit',
          target: 'Card.tsx',
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
    const composerEl = <ChatComposer onSubmit={handleSubmit} onStop={handleStop} isStopShown={isStreaming} drawer={files.length > 0 ? <ChatComposerDrawer>
              {files.map(f => <Token key={f} label={f} onRemove={() => setFiles(prev => prev.filter(x => x !== f))} />)}
            </ChatComposerDrawer> : undefined} headerActions={<>
            <Button label="Mention" variant="ghost" size="sm" icon={AtSignIcon} isIconOnly onClick={() => {
        inputRef.current?.focus();
        inputRef.current?.insertText('@');
      }} />
            <Button label="Attach" variant="ghost" size="sm" icon={PaperclipIcon} isIconOnly onClick={() => setFiles(prev => [...prev, \`file-\${prev.length + 1}.tsx\`])} />
          </>} headerContext={<>
            <ProgressBar ref={contextTooltip.ref} aria-describedby={contextTooltip.describedBy} label="Context" value={12} variant="neutral" isLabelHidden style={{
        marginInlineEnd: 8
      }} />
            {contextTooltip.renderTooltip('3k / 100k tokens used')}
          </>} input={<ChatComposerInput handleRef={inputRef} triggers={triggers} placeholder="Ask about the codebase..." />} footerActions={<Button label="Claude Opus" variant="ghost" size="md" />} sendActions={<Button label="Microphone" variant="ghost" size="md" icon={MicIcon} isIconOnly />} />;
    return <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
        <ChatLayout composer={composerEl}>
          <ChatMessageList>
            {messages.map(msg => {
            if (msg.role === 'system') {
              return <ChatSystemMessage key={msg.id} variant="divider">
                    {msg.text}
                  </ChatSystemMessage>;
            }
            if (msg.role === 'user') {
              return <ChatMessage key={msg.id} sender="user">
                    {msg.files && <ChatComposerDrawer>
                        {msg.files.map(f => <Token key={f} label={f} />)}
                      </ChatComposerDrawer>}
                    <ChatMessageBubble metadata={<ChatMessageMetadata timestamp={<Timestamp value={msg.sentAt?.toISOString() ?? new Date(msg.id).toISOString()} format="time" />} status={msg.isSending ? 'sending' : undefined} />}>
                      <ChatTokenizedText tokens={mentionTokens}>
                        {msg.text}
                      </ChatTokenizedText>
                    </ChatMessageBubble>
                  </ChatMessage>;
            }
            {
              /* Assistant: intro text → tool calls → rest of text */
            }
            const introEnd = msg.introText?.length ?? 0;
            const hasToolCalls = msg.toolCalls && msg.toolCalls.length > 0;
            const introContent = introEnd > 0 ? msg.text.slice(0, introEnd) : null;
            const restContent = introEnd > 0 && msg.text.length > introEnd ? msg.text.slice(introEnd).replace(/^\\n+/, '') : !introEnd ? msg.text : null;
            return <ChatMessage key={msg.id} sender="assistant">
                  {introContent && <Markdown density="compact">{introContent}</Markdown>}
                  {hasToolCalls && <ChatToolCalls calls={msg.toolCalls ?? []} />}
                  {restContent && <Markdown density="compact">{restContent}</Markdown>}
                  {!msg.isStreaming && msg.text && <ChatMessageMetadata timestamp={<Timestamp value={new Date(msg.id).toISOString()} format="time" />} footer={<>
                          <span>Claude Opus 4.6</span>
                          <span>·</span>
                          <Button label="Thumbs up" icon={<HandThumbUpIcon style={{
                  width: 14,
                  height: 14
                }} />} variant="ghost" size="sm" isIconOnly />
                          <Button label="Thumbs down" icon={<HandThumbDownIcon style={{
                  width: 14,
                  height: 14
                }} />} variant="ghost" size="sm" isIconOnly />
                          <Button label="Copy" icon={<ClipboardDocumentIcon style={{
                  width: 14,
                  height: 14
                }} />} variant="ghost" size="sm" isIconOnly />
                        </>} />}
                </ChatMessage>;
          })}
          </ChatMessageList>
        </ChatLayout>
      </div>;
  }
}`,...S.parameters?.docs?.source},description:{story:"Full AI chat with streaming, tool calls, triggers, attachments, and frosted glass composer dock",...S.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Panel View',
  render: () => {
    const [messages, setMessages] = useState<Message[]>(SEED_MESSAGES);
    const [files, setFiles] = useState<string[]>([]);
    const [isStreaming, setIsStreaming] = useState(false);
    const streamRef = useRef<ReturnType<typeof setInterval>>(undefined);
    const inputRef = useRef<ChatComposerInputHandle>(null);
    const mentionTokens = CONTACTS.map(c => ({
      value: \`@\${c.id}\`,
      label: \`@\${c.label}\`,
      variant: 'blue' as const
    }));
    const triggers: ChatComposerTrigger[] = [{
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
    const composerEl = <ChatComposer onSubmit={handleSubmit} onStop={handleStop} isStopShown={isStreaming} drawer={files.length > 0 ? <ChatComposerDrawer>
              {files.map(f => <Token key={f} label={f} onRemove={() => setFiles(prev => prev.filter(x => x !== f))} />)}
            </ChatComposerDrawer> : undefined} headerActions={<>
            <Button label="Mention" variant="ghost" size="sm" icon={AtSignIcon} isIconOnly onClick={() => {
        inputRef.current?.focus();
        inputRef.current?.insertText('@');
      }} />
            <Button label="Attach" variant="ghost" size="sm" icon={PaperclipIcon} isIconOnly onClick={() => setFiles(prev => [...prev, \`file-\${prev.length + 1}.tsx\`])} />
          </>} input={<ChatComposerInput handleRef={inputRef} triggers={triggers} placeholder="Ask something..." />} />;
    return <div style={{
      width: 400,
      height: 600,
      border: '1px solid #ccc',
      borderRadius: 8,
      overflow: 'hidden'
    }}>
        <ChatLayout composer={composerEl}>
          <ChatMessageList>
            {messages.map(msg => {
            if (msg.role === 'system') {
              return <ChatSystemMessage key={msg.id} variant="divider">
                    {msg.text}
                  </ChatSystemMessage>;
            }
            if (msg.role === 'user') {
              return <ChatMessage key={msg.id} sender="user">
                    {msg.files && <ChatComposerDrawer>
                        {msg.files.map(f => <Token key={f} label={f} />)}
                      </ChatComposerDrawer>}
                    <ChatMessageBubble>
                      <ChatTokenizedText tokens={mentionTokens}>
                        {msg.text}
                      </ChatTokenizedText>
                    </ChatMessageBubble>
                  </ChatMessage>;
            }
            return <ChatMessage key={msg.id} sender="assistant">
                  {msg.text && <Markdown density="compact">{msg.text}</Markdown>}
                  {msg.toolCalls && msg.toolCalls.length > 0 && <ChatToolCalls calls={msg.toolCalls ?? []} />}
                </ChatMessage>;
          })}
          </ChatMessageList>
        </ChatLayout>
      </div>;
  }
}`,...b.parameters?.docs?.source},description:{story:"Panel view — same full features in a narrow sidebar container",...b.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Empty State',
  render: () => <div style={{
    height: '100vh',
    display: 'flex',
    flexDirection: 'column'
  }}>
      <ChatLayout composer={<ChatComposer onSubmit={() => {}} placeholder="Start a conversation…" />} emptyState={<EmptyState title="No messages yet" description="Start a conversation by typing below." />}>
        {[]}
      </ChatLayout>
    </div>
}`,...y.parameters?.docs?.source},description:{story:"Empty state using EmptyState",...y.parameters?.docs?.description}}};const Ue=["FullAIChat","PanelView","WithEmptyState"];export{S as FullAIChat,b as PanelView,y as WithEmptyState,Ue as __namedExportsOrder,qe as default};
