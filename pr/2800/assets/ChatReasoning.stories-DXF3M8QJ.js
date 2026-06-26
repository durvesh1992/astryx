import{at as x,ad as e,ai as N,ar as M,aZ as E}from"./iframe-yRFQ_7VC.js";import{X as R}from"./XDSChatMessageList-iaotiKMM.js";import{X as S}from"./XDSChatMessage-DjVgtZME.js";import{X as z}from"./XDSChatMessageBubble-lAJho-xC.js";import{X as I}from"./XDSAvatar-W6VpExB0.js";import{X as b}from"./XDSMarkdown-C51mApFy.js";import"./preload-helper-Ct5FWWRu.js";import"./XDSChatContext-Bvyev7ex.js";import"./XDSCodeBlock-B5b8s25t.js";import"./highlightRanges-DQjygsEE.js";import"./XDSCheckboxListItem-G66nArwI.js";import"./XDSField-COi97ivg.js";import"./XDSFieldStatus-BgnciRVy.js";import"./XDSList-B0MkGqZF.js";import"./XDSListItem-C5CIKGjL.js";import"./XDSItem-CTSSy95c.js";import"./computeTargetAndRel-BlG0ENK0.js";import"./XDSCheckboxInput-C50y4c1Q.js";import"./XDSBlockquote-kq4Y3FPM.js";import"./XDSTable-tIgxviJL.js";import"./XDSEmptyState-CWiMy9oI.js";import"./useXDSStreamingText-CdCvbZFo.js";import"./XDSCitation-DzquwPCW.js";import"./XDSCode-CEZ5ThnD.js";const L={root:{k1xSpc:"xds78zum5",kXwgrk:"xdsdt5ytf",keoZOQ:"xdstbrsbv",$$css:!0}};function q(){return e.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:[e.jsx("circle",{cx:"7",cy:"7",r:"5.5",stroke:"currentColor",strokeWidth:"1.5",strokeDasharray:"3 2"}),e.jsx("circle",{cx:"5.5",cy:"7",r:"0.75",fill:"currentColor"}),e.jsx("circle",{cx:"8.5",cy:"7",r:"0.75",fill:"currentColor"})]})}function A(){return e.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:e.jsx("path",{d:"M3 4.5L6 7.5L9 4.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})}function s(n){const{children:t,label:m="Thinking",duration:u,isStreaming:p=!1,isExpanded:g,defaultIsExpanded:v=!1,onExpandedChange:y,xstyle:k,className:w,style:C,...X}=n,[D,T]=x.useState(v),h=g!==void 0,a=h?g:D,f=x.useCallback(()=>{const r=!a;h||T(r),y?.(r)},[a,h,y]),j=typeof t=="string"?t:null;return e.jsxs("div",{...N(E("chat-reasoning",{expanded:a?"expanded":null,streaming:p?"streaming":null}),M(L.root,k),w,C),...X,children:[e.jsxs("div",{role:"button",tabIndex:0,"aria-expanded":a,onClick:f,onKeyDown:r=>{(r.key==="Enter"||r.key===" ")&&(r.preventDefault(),f())},className:"xds78zum5 xds6s0dn4 xds1s4dlld xds1ypdohk xds87ps6o xdsjwf9q1 xds13f7esw",children:[e.jsx("span",{className:"xds3nfvp2 xds6s0dn4 xdsl56j7k xds2lah0s xds1kky2od xdslup9mm xdsv1l7n4",children:e.jsx(q,{})}),e.jsxs("div",{className:"xds78zum5 xds6s0dn4 xdszye2dw xdseuugli xdsb3r6kr",children:[e.jsx("span",{...{0:{className:"xds141an7d xds1ltkj2j xds9ynric xds1e4wzip xdsv1l7n4 xdsuxw1ft xds2lah0s"},1:{className:"xds141an7d xds1ltkj2j xds9ynric xds1e4wzip xdsuxw1ft xds2lah0s xdsct3ic7 xdsakli9p xds1ta4xzc xds19co3pv xdssrnzaw xdseaay5l xds1esw782 xdsa4qsjk"}}[!!p<<0],children:m}),u!=null&&!p&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"xds141an7d xdsnbbluu xds2lah0s",children:"·"}),e.jsx("span",{className:"xds141an7d xds1ltkj2j xds9ynric xdsnbbluu xdsuxw1ft xds2lah0s",children:u})]}),!a&&j&&!p&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"xds141an7d xdsnbbluu xds2lah0s",children:"—"}),e.jsx("span",{className:"xds141an7d xds1ltkj2j xds9ynric xdsnbbluu xdsuxw1ft xdsb3r6kr xdslyipyv xdseuugli",children:j})]})]}),e.jsx("span",{...{0:{className:"xds3nfvp2 xds6s0dn4 xdsl56j7k xds2lah0s xds6jxa94 xds1v9usgg xdsnbbluu xds1ob6yzd"},1:{className:"xds3nfvp2 xds6s0dn4 xdsl56j7k xds2lah0s xds6jxa94 xds1v9usgg xdsnbbluu xds1ob6yzd xds19jd1h0"}}[!!a<<0],children:e.jsx(A,{})})]}),e.jsx("div",{...{0:{className:"xdsrvj5dj xdsihq33y xdsb0j27v"},1:{className:"xdsrvj5dj xdsb0j27v xds1tu4anv"}}[!!a<<0],children:e.jsx("div",{className:"xdsb3r6kr xds2lwn1j",children:e.jsx("div",{className:"xds1xye8es xds1f43n9v xds141an7d xds1ltkj2j xds9ynric xdsv1l7n4",children:t})})})]})}s.displayName="XDSChatReasoning";s.__docgenInfo={description:`Compact collapsible display for model reasoning/thinking content.

Renders as a single line: icon + label + duration + ellipsized preview.
Expands to show full reasoning on click.

@example
\`\`\`
<XDSChatMessage sender="assistant">
  <XDSChatReasoning duration="12s">
    Let me work through the constraints on adjacent fields...
  </XDSChatReasoning>
  <XDSMarkdown>{response}</XDSMarkdown>
</XDSChatMessage>
\`\`\``,methods:[],displayName:"XDSChatReasoning",props:{xstyle:{required:!1,tsType:{name:"StyleXStyles"},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},children:{required:!0,tsType:{name:"ReactNode"},description:"Reasoning content. String renders as plain text; ReactNode for XDSMarkdown etc."},label:{required:!1,tsType:{name:"string"},description:"Header label. @default 'Thinking'"},duration:{required:!1,tsType:{name:"string"},description:'Duration string shown after label (e.g. "12s").'},isStreaming:{required:!1,tsType:{name:"boolean"},description:"Whether reasoning is still streaming. Shows shimmer on label."},isExpanded:{required:!1,tsType:{name:"boolean"},description:"Controlled expanded state."},defaultIsExpanded:{required:!1,tsType:{name:"boolean"},description:"Default expanded state (uncontrolled). @default false"},onExpandedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(isExpanded: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isExpanded"}],return:{name:"void"}}},description:"Callback when expanded state changes."}},composes:["Omit"]};const ie={title:"Lab/ChatReasoning",component:s,tags:["autodocs"],parameters:{layout:"centered"},decorators:[n=>e.jsx("div",{style:{width:600,padding:40},children:e.jsx(n,{})})]},o={render:()=>e.jsx(s,{duration:"12s",children:"Let me work through the constraints systematically. The farmer has 3 fields and rotates wheat, corn, soy. No same crop in adjacent fields and no same crop in the same field two years in a row..."})},d={render:()=>e.jsx(s,{duration:"8s",defaultIsExpanded:!0,children:e.jsx(b,{density:"compact",children:`First, I need to understand the constraints:
1. Three fields, three crops (wheat, corn, soy)
2. No adjacent fields can have the same crop
3. No field can repeat its crop from the previous year

For **Year 1**: 3 × 2 × 2 = 12 arrangements...`})})},i={render:()=>{const[n,t]=x.useState(!0);return x.useEffect(()=>{const m=setTimeout(()=>t(!1),5e3);return()=>clearTimeout(m)},[]),e.jsxs("div",{children:[e.jsx(s,{isStreaming:n,label:"Thinking",children:"Working through the combinatorial constraints..."}),!n&&e.jsx("p",{style:{marginTop:8,fontSize:13,color:"#888"},children:"(Shimmer stopped after 5s)"})]})}},l={render:()=>e.jsx(s,{label:"Analyzing",duration:"3s",children:"Checking the codebase for similar patterns..."})},c={render:()=>e.jsxs(R,{children:[e.jsx(S,{sender:"user",children:e.jsx(z,{children:"How many valid planting arrangements are possible over 3 years?"})}),e.jsxs(S,{sender:"assistant",avatar:e.jsx(I,{name:"AI",size:"small"}),children:[e.jsx(s,{duration:"12s",children:"Let me work through the constraints systematically..."}),e.jsx(b,{density:"compact",children:"There are **42** valid planting arrangements over 3 years."})]})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <XDSChatReasoning duration="12s">
      Let me work through the constraints systematically. The farmer has 3
      fields and rotates wheat, corn, soy. No same crop in adjacent fields and
      no same crop in the same field two years in a row...
    </XDSChatReasoning>
}`,...o.parameters?.docs?.source},description:{story:"Collapsed (default) — shows label, duration, and ellipsis preview",...o.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <XDSChatReasoning duration="8s" defaultIsExpanded>
      <XDSMarkdown density="compact">{\`First, I need to understand the constraints:
1. Three fields, three crops (wheat, corn, soy)
2. No adjacent fields can have the same crop
3. No field can repeat its crop from the previous year

For **Year 1**: 3 \\u00d7 2 \\u00d7 2 = 12 arrangements...\`}</XDSMarkdown>
    </XDSChatReasoning>
}`,...d.parameters?.docs?.source},description:{story:"Expanded — shows full reasoning content",...d.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [streaming, setStreaming] = useState(true);
    useEffect(() => {
      const t = setTimeout(() => setStreaming(false), 5000);
      return () => clearTimeout(t);
    }, []);
    return <div>
        <XDSChatReasoning isStreaming={streaming} label="Thinking">
          Working through the combinatorial constraints...
        </XDSChatReasoning>
        {!streaming && <p style={{
        marginTop: 8,
        fontSize: 13,
        color: '#888'
      }}>
            (Shimmer stopped after 5s)
          </p>}
      </div>;
  }
}`,...i.parameters?.docs?.source},description:{story:"Streaming — shimmer effect on label while thinking",...i.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <XDSChatReasoning label="Analyzing" duration="3s">
      Checking the codebase for similar patterns...
    </XDSChatReasoning>
}`,...l.parameters?.docs?.source},description:{story:"Custom label",...l.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <XDSChatMessageList>
      <XDSChatMessage sender="user">
        <XDSChatMessageBubble>
          How many valid planting arrangements are possible over 3 years?
        </XDSChatMessageBubble>
      </XDSChatMessage>
      <XDSChatMessage sender="assistant" avatar={<XDSAvatar name="AI" size="small" />}>
        <XDSChatReasoning duration="12s">
          Let me work through the constraints systematically...
        </XDSChatReasoning>
        <XDSMarkdown density="compact">{\`There are **42** valid planting arrangements over 3 years.\`}</XDSMarkdown>
      </XDSChatMessage>
    </XDSChatMessageList>
}`,...c.parameters?.docs?.source},description:{story:"In a message — reasoning above the response",...c.parameters?.docs?.description}}};const le=["Collapsed","Expanded","Streaming","CustomLabel","InMessage"];export{o as Collapsed,l as CustomLabel,d as Expanded,c as InMessage,i as Streaming,le as __namedExportsOrder,ie as default};
