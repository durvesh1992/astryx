import{at as r,ad as s,ai as nt,X as dt,m as pt,ar as mt,O as gt}from"./iframe-yRFQ_7VC.js";import{X as ot,a as ft}from"./XDSChatComposer-CoWXtv-8.js";import"./preload-helper-Ct5FWWRu.js";import"./index-D8Xh4Tce.js";import"./index-CXyWrEU_.js";import"./useXDSPopover-ChRJmaAz.js";import"./XDSBadge-COTe2g1g.js";import"./XDSHoverCard-BRL1pJWj.js";import"./XDSChatContext-Bvyev7ex.js";function rt(){return typeof window>"u"?null:window.SpeechRecognition??window.webkitSpeechRecognition??null}async function ht(c){try{let i=function(){n.getByteFrequencyData(e),R++;for(let t=0;t<e.length;t++){const o=e[t]/255;o>p[t]&&(p[t]=o)}},g=function(t){const o=e[t]/255;return R<w?0:Math.max(0,o-p[t]*1.1)};const v=await navigator.mediaDevices.getUserMedia({audio:!0}),h=c(),d=h.createMediaStreamSource(v),n=h.createAnalyser();n.fftSize=256,n.smoothingTimeConstant=.5,d.connect(n);const e=new Uint8Array(n.frequencyBinCount),p=new Float32Array(n.frequencyBinCount);let R=0;const w=60;return{calibrate:i,getVolume:()=>{n.getByteFrequencyData(e),R<w&&i();let t=0;for(let o=0;o<e.length;o++)t+=g(o);return t/e.length},getBands:t=>{n.getByteFrequencyData(e),R<w&&i();const o=[],b=[3,6,11,18,e.length],C=t<=b.length?b.slice(0,t):b;let f=1;for(let S=0;S<C.length;S++){const y=C[S];let x=0;for(let m=f;m<y;m++)x+=g(m);o.push(x/(y-f)),f=y}return o},getRawBands:t=>{n.getByteFrequencyData(e);const o=[],b=[3,6,11,18,e.length],C=t<=b.length?b.slice(0,t):b;let f=1;for(let S=0;S<C.length;S++){const y=C[S];let x=0;for(let m=f;m<y;m++)x+=e[m]/255;o.push(x/(y-f)),f=y}return o},cleanup:()=>{d.disconnect();for(const t of v.getTracks())t.stop()}}}catch{return null}}let P=null;function bt(){return(!P||P.state==="closed")&&(P=new AudioContext),P.state==="suspended"&&P.resume(),P}function St(c={}){const{lang:i,continuous:g=!0,interimResults:v=!0,onTranscript:h,onResult:d,onError:n,onStart:e,onEnd:p,audioContext:R,transformTranscript:w}=c,t=r.useCallback(()=>R??bt(),[R]),o=r.useMemo(()=>rt()!=null,[]),[A,b]=r.useState(!1),[C,f]=r.useState(!1),[S,y]=r.useState(0),[x,m]=r.useState([0,0,0,0,0]),[V,E]=r.useState([0,0,0,0,0]),[q,F]=r.useState(""),k=r.useRef(null),Q=r.useRef(t);Q.current=t;const I=r.useRef(null),X=r.useRef(0),D=r.useRef({onTranscript:h,onResult:d,onError:n,onStart:e,onEnd:p,transformTranscript:w});D.current={onTranscript:h,onResult:d,onError:n,onStart:e,onEnd:p,transformTranscript:w},r.useEffect(()=>()=>{k.current?.abort(),k.current=null,I.current?.cleanup(),I.current=null,cancelAnimationFrame(X.current)},[]);const z=r.useCallback(()=>{const u=()=>{const a=I.current;a&&(y(a.getVolume()),m(a.getBands(5)),E(a.getRawBands(5))),X.current=requestAnimationFrame(u)};X.current=requestAnimationFrame(u)},[]),M=r.useCallback(()=>{cancelAnimationFrame(X.current),y(0),m([0,0,0,0,0]),E([0,0,0,0,0]),I.current?.cleanup(),I.current=null},[]),T=r.useCallback(()=>{const u=rt();if(!u)return;k.current?.abort();const a=new u;a.lang=i??navigator.language,a.continuous=g,a.interimResults=v,a.onstart=()=>{b(!0),D.current.onStart?.(),ht(Q.current).then(B=>{B&&(I.current=B,z())})},a.onend=()=>{b(!1),f(!1),F(""),M(),D.current.onEnd?.()},a.onspeechstart=()=>{f(!0)},a.onspeechend=()=>{f(!1)},a.onresult=B=>{let H="";for(let N=B.resultIndex;N<B.results.length;N++){const st=B.results[N];let _=st[0].transcript;D.current.transformTranscript&&(_=D.current.transformTranscript(_)),st.isFinal?(D.current.onResult?.(_),D.current.onTranscript?.(_,!0),F("")):H+=_}H&&(F(H),D.current.onTranscript?.(H,!1))},a.onerror=B=>{D.current.onError?.({error:B.error,message:B.message})},a.onnomatch=()=>{D.current.onError?.({error:"no-speech",message:"No speech was detected."})},k.current=a,a.start()},[i,g,v,z,M]),L=r.useCallback(()=>{k.current?.stop()},[]),et=r.useCallback(()=>{k.current?.abort(),M()},[M]),l=r.useCallback(()=>{A?L():T()},[A,T,L]);return{isSupported:o,isListening:A,isSpeaking:C,volume:S,bands:x,rawBands:V,interimTranscript:q,start:T,stop:L,abort:et,toggle:l}}async function yt(c){try{let i=function(){n.getByteFrequencyData(e),R++;for(let t=0;t<e.length;t++){const o=e[t]/255;o>p[t]&&(p[t]=o)}},g=function(t){const o=e[t]/255;return R<w?0:Math.max(0,o-p[t]*1.1)};const v=await navigator.mediaDevices.getUserMedia({audio:!0}),h=c(),d=h.createMediaStreamSource(v),n=h.createAnalyser();n.fftSize=256,n.smoothingTimeConstant=.5,d.connect(n);const e=new Uint8Array(n.frequencyBinCount),p=new Float32Array(n.frequencyBinCount);let R=0;const w=60;return{calibrate:i,getVolume:()=>{n.getByteFrequencyData(e),R<w&&i();let t=0;for(let o=0;o<e.length;o++)t+=g(o);return t/e.length},getBands:t=>{n.getByteFrequencyData(e),R<w&&i();const o=[],b=[3,6,11,18,e.length],C=t<=b.length?b.slice(0,t):b;let f=1;for(let S=0;S<C.length;S++){const y=C[S];let x=0;for(let m=f;m<y;m++)x+=g(m);o.push(x/(y-f)),f=y}return o},getRawBands:t=>{n.getByteFrequencyData(e);const o=[],b=[3,6,11,18,e.length],C=t<=b.length?b.slice(0,t):b;let f=1;for(let S=0;S<C.length;S++){const y=C[S];let x=0;for(let m=f;m<y;m++)x+=e[m]/255;o.push(x/(y-f)),f=y}return o},cleanup:()=>{d.disconnect();for(const t of v.getTracks())t.stop()}}}catch{return null}}let U=null;function xt(){return(!U||U.state==="closed")&&(U=new AudioContext),U.state==="suspended"&&U.resume(),U}const at=typeof navigator<"u"&&/iPad|iPhone|iPod/.test(navigator.userAgent);function tt(c,i,g,v=.25){try{const h=g(),d=h.currentTime,n=c<200?.18:.06,e=h.createOscillator(),p=h.createGain();e.type="sine",e.frequency.setValueAtTime(c*1.3,d+i),e.frequency.exponentialRampToValueAtTime(c,d+i+.01),e.frequency.exponentialRampToValueAtTime(c*.93,d+i+n),p.gain.setValueAtTime(.001,d),p.gain.setValueAtTime(v,d+i),p.gain.exponentialRampToValueAtTime(v*.2,d+i+n*.12),p.gain.exponentialRampToValueAtTime(.001,d+i+n),e.connect(p),p.connect(h.destination),e.start(d+i),e.stop(d+i+n)}catch{}}function vt(c){at||(tt(392,0,c),tt(523,.07,c))}function Ct(c){at||(tt(523,0,c),tt(392,.07,c))}function Rt(c={}){const{lang:i,continuous:g,interimResults:v,transformTranscript:h,onTranscript:d,onResult:n,onError:e,onStart:p,onEnd:R,hasSounds:w=!1,audioContext:t,inputRef:o}=c,A=r.useCallback(()=>t??xt(),[t]),[b,C]=r.useState(0),[f,S]=r.useState([0,0,0,0,0]),[y,x]=r.useState([0,0,0,0,0]),m=r.useRef([]),V=r.useRef(A);V.current=A;const E=r.useRef(null),q=r.useRef(0),F=r.useRef(null),k=r.useRef({onTranscriptProp:d,onResultProp:n,onStartProp:p,onEndProp:R});k.current={onTranscriptProp:d,onResultProp:n,onStartProp:p,onEndProp:R};const Q=r.useCallback(()=>{const l=()=>{const u=E.current;if(u){const a=u.getVolume();C(a);const B=m.current;B.push(a),B.length>30&&B.shift(),S(u.getBands(5)),x(u.getRawBands(5))}q.current=requestAnimationFrame(l)};q.current=requestAnimationFrame(l)},[]),I=r.useCallback(()=>{cancelAnimationFrame(q.current),C(0),S([0,0,0,0,0]),x([0,0,0,0,0]),m.current=[],E.current?.cleanup(),E.current=null},[]),X=r.useCallback(()=>{const l=document.activeElement;return l?.getAttribute("contenteditable")==="true"?l:document.querySelector('.xds-chat-composer-input [contenteditable="true"], [role="textbox"][contenteditable="true"]')},[]),D=r.useCallback(()=>{const l=X();if(!l)return;const u=document.createElement("span");u.setAttribute("data-xds-dictation-interim",""),u.contentEditable="false",u.style.color="var(--color-text-disabled, #999)",u.style.fontStyle="italic",u.style.opacity="0.7",u.style.pointerEvents="none",l.appendChild(u),F.current=u,l.dispatchEvent(new Event("input",{bubbles:!0}))},[X]),z=r.useCallback(()=>{const l=F.current;if(l?.isConnected)try{l.remove()}catch{}F.current=null},[]),M=r.useCallback(l=>{let u=l;h&&(u=h(u));const a=m.current;return(a.length>0?a.reduce((H,N)=>H+N,0)/a.length:0)>=.15&&a.length>=10&&(u=u.toUpperCase()),u},[h]);r.useEffect(()=>()=>{E.current?.cleanup(),E.current=null,cancelAnimationFrame(q.current)},[]);const T=St({lang:i,continuous:g,interimResults:v,transformTranscript:M,onTranscript:(l,u)=>{if(o)if(u){z();const a=o.current;a&&(a.focus(),a.insertText(l+" ")),k.current.onResultProp?.(l),D()}else{const a=F.current;a?a.textContent=l:(D(),F.current&&(F.current.textContent=l))}k.current.onTranscriptProp?.(l,u)},onResult:o?void 0:n,onError:e,onStart:()=>{w&&vt(V.current),yt(V.current).then(l=>{l&&(E.current=l,Q())}),o&&D(),k.current.onStartProp?.()},onEnd:()=>{if(I(),w&&Ct(V.current),o){z();const l=X();l&&l.dispatchEvent(new Event("input",{bubbles:!0}))}k.current.onEndProp?.()}}),L=T.abort,et=r.useCallback(()=>{L(),I()},[L,I]);return{isSupported:T.isSupported,isListening:T.isListening,isSpeaking:T.isSpeaking,interimTranscript:T.interimTranscript,volume:b,bands:f,rawBands:y,start:T.start,stop:T.stop,abort:et,toggle:T.toggle}}const wt={wrapper:{kVAEAm:"xds1n2onr6",k1xSpc:"xds3nfvp2",kGNEyG:"xds6s0dn4",kjj79g:"xdsl56j7k",$$css:!0}},Dt=5,it=.08,Bt={sm:{barWidth:2,barGap:1.5,barMaxHeight:14},md:{barWidth:2.5,barGap:2,barMaxHeight:18}};function j({ref:c,dictation:i,size:g="md",isHiddenWhenUnsupported:v=!0,label:h,xstyle:d,className:n,style:e}){if(v&&!i.isSupported)return null;const{isListening:p,bands:R,volume:w}=i,t=h??(p?"Stop dictation":"Start dictation"),o=R.map(x=>Math.min(Math.pow(x/.2,.5),1)),A=w>=.2,b=A?Math.min((w-.2)/.1,1)*60:0,C=A?`hsl(calc(var(--accent-hue, 210) + ${b}), 80%, 50%)`:`var(--color-accent, ${gt["--color-accent"]})`,{barWidth:f,barGap:S,barMaxHeight:y}=Bt[g];return s.jsxs("span",{ref:c,...nt(mt(wt.wrapper,d),n,e),children:[p&&s.jsx("span",{"aria-hidden":!0,...nt({className:"xds10l6tqk xds78zum5 xds6s0dn4 xdsl56j7k xds47corl xds1vjfegm"},{style:{gap:S,height:y}}),children:o.slice(0,Dt).map((x,m)=>{const V=it+x*(1-it);return s.jsx("span",{...nt({className:"xdsjspbzw xds1g0ag68 xds18dpk69 xds11bq7d0 xds9lcvmn"},{style:{width:f,height:"100%",backgroundColor:C,transform:`scaleY(${V})`}})},m)})}),s.jsx(dt,{label:t,"aria-label":t,variant:"ghost",size:g,icon:p?void 0:s.jsx(pt,{icon:"microphone",size:g}),isIconOnly:!0,onClick:i.toggle})]})}j.displayName="XDSChatDictationButton";j.__docgenInfo={description:"Microphone button for voice input in a chat composer.\nRequires the return value of useXDSChatDictation.\n\n@example\n```\n<XDSChatDictationButton dictation={dictation} />\n```",methods:[],displayName:"XDSChatDictationButton",props:{xstyle:{required:!1,tsType:{name:"StyleXStyles"},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLSpanElement>",elements:[{name:"HTMLSpanElement"}]},description:""},dictation:{required:!0,tsType:{name:"UseSpeechRecognitionReturn"},description:"The return value from useXDSChatDictation or useSpeechRecognition."},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"}]},description:'Button size. @default "md"',defaultValue:{value:"'md'",computed:!1}},isHiddenWhenUnsupported:{required:!1,tsType:{name:"boolean"},description:"Hide the button when SpeechRecognition is not supported. @default true",defaultValue:{value:"true",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Accessible label override."}},composes:["Omit"]};const ct={volume:0,rawBands:[0,0,0,0,0],bands:[0,0,0,0,0],isSupported:!0,isListening:!1,isSpeaking:!1,interimTranscript:"",start:()=>{},stop:()=>{},abort:()=>{},toggle:()=>{}},lt={volume:.05,rawBands:[.08,.06,.04,.02,.01],bands:[.08,.06,.04,.02,.01],isSupported:!0,isListening:!0,isSpeaking:!1,interimTranscript:"",start:()=>{},stop:()=>{},abort:()=>{},toggle:()=>{}},At={volume:.12,rawBands:[.15,.12,.08,.05,.02],bands:[.15,.12,.08,.05,.02],isSupported:!0,isListening:!0,isSpeaking:!0,interimTranscript:"hello world",start:()=>{},stop:()=>{},abort:()=>{},toggle:()=>{}},ut={volume:0,rawBands:[0,0,0,0,0],bands:[0,0,0,0,0],isSupported:!1,isListening:!1,isSpeaking:!1,interimTranscript:"",start:()=>{},stop:()=>{},abort:()=>{},toggle:()=>{}},Mt={title:"Core/ChatDictation",component:j,tags:["autodocs"],parameters:{layout:"centered"},decorators:[c=>s.jsx("div",{style:{width:600,padding:40},children:s.jsx(c,{})})]},O={render:()=>s.jsx(j,{dictation:ct})},$={render:()=>s.jsx(j,{dictation:lt})},G={render:()=>s.jsx(j,{dictation:At})},W={render:()=>s.jsxs("div",{children:[s.jsx("p",{style:{marginBottom:8},children:"Button is hidden when unsupported (nothing below):"}),s.jsx(j,{dictation:ut})]})},Y={render:()=>s.jsx(j,{dictation:ut,isHiddenWhenUnsupported:!1})},Z={render:()=>s.jsx(ot,{onSubmit:c=>console.log("Submit:",c),sendActions:s.jsx(j,{dictation:ct})})},J={render:()=>s.jsx(ot,{onSubmit:c=>console.log("Submit:",c),sendButton:s.jsx(j,{dictation:lt})})},K={render:()=>{const c=r.useRef(null),i=Rt({inputRef:c,hasSounds:!0,onResult:g=>{console.log("Final:",g)}});return s.jsxs("div",{children:[s.jsx(ot,{onSubmit:g=>{console.log("Submit:",g)},input:s.jsx(ft,{handleRef:c}),sendActions:s.jsx(j,{dictation:i})}),i.isListening&&s.jsxs("div",{style:{marginTop:8,display:"flex",alignItems:"center",gap:8},children:[s.jsx("span",{style:{fontSize:12,opacity:.5},children:"Volume:"}),s.jsx("div",{style:{width:120,height:8,backgroundColor:"#eee",borderRadius:4,overflow:"hidden"},children:s.jsx("div",{style:{height:"100%",backgroundColor:i.volume>.3?"#ef4444":"#22c55e",borderRadius:4,transition:"width 0.08s ease-out",width:`${Math.min(i.volume*100*2,100)}%`}})}),s.jsx("span",{style:{fontSize:12,fontFamily:"monospace",opacity:.5},children:i.volume.toFixed(2)})]}),i.isListening&&s.jsxs("div",{style:{marginTop:12},children:[s.jsx("div",{style:{fontSize:12,fontWeight:600,marginBottom:4},children:"Band Debug (raw vs calibrated)"}),s.jsx("div",{style:{display:"flex",gap:8,fontFamily:"monospace",fontSize:11},children:["170-340","340-860","860-1.7k","1.7-3k","3k+"].map((g,v)=>{const h=i.rawBands[v]??0,d=i.bands[v]??0,n=40;return s.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:2,flex:1},children:[s.jsxs("div",{style:{display:"flex",gap:2,alignItems:"flex-end",height:n},children:[s.jsx("div",{style:{width:8,backgroundColor:"rgba(200,200,200,0.5)",height:Math.min(h*n*5,n),borderRadius:2}}),s.jsx("div",{style:{width:8,backgroundColor:"#3b82f6",height:Math.min(d*n*5,n),borderRadius:2}})]}),s.jsx("span",{style:{opacity:.5,fontSize:9},children:g}),s.jsxs("span",{style:{opacity:.4},children:["r:",h.toFixed(3)]}),s.jsxs("span",{style:{color:"#3b82f6"},children:["c:",d.toFixed(3)]})]},g)})}),s.jsx("div",{style:{fontSize:10,opacity:.4,marginTop:4},children:"Gray = raw mic, Blue = after noise floor"})]}),!i.isSupported&&s.jsx("p",{style:{marginTop:8,color:"red"},children:"SpeechRecognition is not supported in this browser."})]})}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => <XDSChatDictationButton dictation={idleDictation} />
}`,...O.parameters?.docs?.source},description:{story:"Idle state — microphone icon, ready to start dictation",...O.parameters?.docs?.description}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => <XDSChatDictationButton dictation={listeningDictation} />
}`,...$.parameters?.docs?.source},description:{story:"Listening state — pulsing red record indicator",...$.parameters?.docs?.description}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <XDSChatDictationButton dictation={speakingDictation} />
}`,...G.parameters?.docs?.source},description:{story:"Speaking state — more intense pulse while speech is detected",...G.parameters?.docs?.description}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => <div>
      <p style={{
      marginBottom: 8
    }}>
        Button is hidden when unsupported (nothing below):
      </p>
      <XDSChatDictationButton dictation={unsupportedDictation} />
    </div>
}`,...W.parameters?.docs?.source},description:{story:"Unsupported browser — button hidden by default",...W.parameters?.docs?.description}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => <XDSChatDictationButton dictation={unsupportedDictation} isHiddenWhenUnsupported={false} />
}`,...Y.parameters?.docs?.source},description:{story:"Unsupported browser — button visible when isHiddenWhenUnsupported is false",...Y.parameters?.docs?.description}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <XDSChatComposer onSubmit={value => console.log('Submit:', value)} sendActions={<XDSChatDictationButton dictation={idleDictation} />} />
}`,...Z.parameters?.docs?.source},description:{story:"Dictation button in sendActions slot of XDSChatComposer",...Z.parameters?.docs?.description}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <XDSChatComposer onSubmit={value => console.log('Submit:', value)} sendButton={<XDSChatDictationButton dictation={listeningDictation} />} />
}`,...J.parameters?.docs?.source},description:{story:"Dictation button replacing the send button",...J.parameters?.docs?.description}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => {
    const inputRef = useRef<XDSChatComposerInputHandle>(null);
    const dictation = useXDSChatDictation({
      inputRef,
      hasSounds: true,
      onResult: text => {
        console.log('Final:', text);
      }
    });
    return <div>
        <XDSChatComposer onSubmit={v => {
        console.log('Submit:', v);
      }} input={<XDSChatComposerInput handleRef={inputRef} />} sendActions={<XDSChatDictationButton dictation={dictation} />} />
        {dictation.isListening && <div style={{
        marginTop: 8,
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }}>
            <span style={{
          fontSize: 12,
          opacity: 0.5
        }}>Volume:</span>
            <div style={{
          width: 120,
          height: 8,
          backgroundColor: '#eee',
          borderRadius: 4,
          overflow: 'hidden'
        }}>
              <div style={{
            height: '100%',
            backgroundColor: dictation.volume > 0.3 ? '#ef4444' : '#22c55e',
            borderRadius: 4,
            transition: 'width 0.08s ease-out',
            width: \`\${Math.min(dictation.volume * 100 * 2, 100)}%\`
          }} />
            </div>
            <span style={{
          fontSize: 12,
          fontFamily: 'monospace',
          opacity: 0.5
        }}>
              {dictation.volume.toFixed(2)}
            </span>
          </div>}

        {dictation.isListening && <div style={{
        marginTop: 12
      }}>
            <div style={{
          fontSize: 12,
          fontWeight: 600,
          marginBottom: 4
        }}>
              Band Debug (raw vs calibrated)
            </div>
            <div style={{
          display: 'flex',
          gap: 8,
          fontFamily: 'monospace',
          fontSize: 11
        }}>
              {['170-340', '340-860', '860-1.7k', '1.7-3k', '3k+'].map((label, i) => {
            const raw = dictation.rawBands[i] ?? 0;
            const clean = dictation.bands[i] ?? 0;
            const barH = 40;
            return <div key={label} style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 2,
              flex: 1
            }}>
                      <div style={{
                display: 'flex',
                gap: 2,
                alignItems: 'flex-end',
                height: barH
              }}>
                        <div style={{
                  width: 8,
                  backgroundColor: 'rgba(200,200,200,0.5)',
                  height: Math.min(raw * barH * 5, barH),
                  borderRadius: 2
                }} />
                        <div style={{
                  width: 8,
                  backgroundColor: '#3b82f6',
                  height: Math.min(clean * barH * 5, barH),
                  borderRadius: 2
                }} />
                      </div>
                      <span style={{
                opacity: 0.5,
                fontSize: 9
              }}>{label}</span>
                      <span style={{
                opacity: 0.4
              }}>r:{raw.toFixed(3)}</span>
                      <span style={{
                color: '#3b82f6'
              }}>
                        c:{clean.toFixed(3)}
                      </span>
                    </div>;
          })}
            </div>
            <div style={{
          fontSize: 10,
          opacity: 0.4,
          marginTop: 4
        }}>
              Gray = raw mic, Blue = after noise floor
            </div>
          </div>}

        {!dictation.isSupported && <p style={{
        marginTop: 8,
        color: 'red'
      }}>
            SpeechRecognition is not supported in this browser.
          </p>}
      </div>;
  }
}`,...K.parameters?.docs?.source},description:{story:`Interactive demo with real SpeechRecognition.

Note: SpeechRecognition may not work in Storybook's iframe.
For full testing, open this story in a standalone browser tab.`,...K.parameters?.docs?.description}}};const Lt=["Idle","Listening","Speaking","Unsupported","UnsupportedVisible","InSendActions","AsSendButton","Interactive"];export{J as AsSendButton,O as Idle,Z as InSendActions,K as Interactive,$ as Listening,G as Speaking,W as Unsupported,Y as UnsupportedVisible,Lt as __namedExportsOrder,Mt as default};
