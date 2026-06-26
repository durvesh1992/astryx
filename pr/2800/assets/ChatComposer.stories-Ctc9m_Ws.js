import{ad as e,at as y,r as A,X as n}from"./iframe-yRFQ_7VC.js";import{X as s,b as I}from"./XDSChatComposer-CoWXtv-8.js";import{X}from"./XDSChatComposerDrawer-BsSAE6y3.js";import{X as a}from"./XDSToken-DnzEkZ3B.js";import{X as w}from"./XDSProgressBar-BLfsX17h.js";import{X as B}from"./XDSList-B0MkGqZF.js";import{a as f}from"./XDSListItem-C5CIKGjL.js";import{X as T}from"./XDSBadge-COTe2g1g.js";import"./preload-helper-Ct5FWWRu.js";import"./index-D8Xh4Tce.js";import"./index-CXyWrEU_.js";import"./useXDSPopover-ChRJmaAz.js";import"./XDSHoverCard-BRL1pJWj.js";import"./XDSChatContext-Bvyev7ex.js";import"./useXDSInteractiveRole-C4QNKBOy.js";import"./XDSItem-CTSSy95c.js";import"./computeTargetAndRel-BlG0ENK0.js";const W=e.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"4"}),e.jsx("path",{d:"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"})]}),j=e.jsx("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"})}),k=e.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"}),e.jsx("path",{d:"M19 10v2a7 7 0 0 1-14 0v-2"}),e.jsx("line",{x1:"12",x2:"12",y1:"19",y2:"22"})]}),Z={title:"Core/ChatComposer",component:s,tags:["autodocs"],parameters:{layout:"centered"},decorators:[t=>e.jsx("div",{style:{width:600,padding:40},children:e.jsx(t,{})})]},l={render:()=>e.jsx(s,{onSubmit:t=>{console.log("Submit:",t),alert(`Sent: ${t}`)}})},c={render:()=>{const[t,o]=y.useState(!0);return e.jsx(s,{onSubmit:i=>{console.log("Submit:",i),o(!0)},isStopShown:t,onStop:()=>{console.log("Stopped"),o(!1)}})}},d={render:()=>e.jsx(s,{onSubmit:t=>console.log("Submit:",t),footerActions:e.jsx(n,{label:"GPT-4",variant:"ghost",size:"md"}),sendActions:e.jsx(n,{label:"Microphone",variant:"ghost",size:"md",icon:k,isIconOnly:!0})})},m={render:()=>e.jsx(s,{onSubmit:t=>console.log("Submit:",t),drawer:e.jsxs(X,{children:[e.jsx(a,{label:"report.pdf",onRemove:()=>{}}),e.jsx(a,{label:"data.csv",onRemove:()=>{}})]}),headerActions:e.jsx(n,{label:"Attach file",variant:"ghost",size:"sm",icon:j,isIconOnly:!0}),headerContext:e.jsx(w,{label:"Context window",value:3,isLabelHidden:!0})})},u={render:()=>{const[t,o]=y.useState(!1);return e.jsx(s,{onSubmit:i=>{console.log("Submit:",i),o(!0),setTimeout(()=>o(!1),3e3)},isStopShown:t,onStop:()=>o(!1),placeholder:"Ask me anything...",drawer:e.jsx(X,{children:e.jsx(a,{label:"design-spec.pdf",onRemove:()=>{}})}),headerActions:e.jsxs(e.Fragment,{children:[e.jsx(n,{label:"Mention",variant:"ghost",size:"sm",icon:W,isIconOnly:!0}),e.jsx(n,{label:"Attach file",variant:"ghost",size:"sm",icon:j,isIconOnly:!0})]}),headerContext:e.jsx(w,{label:"Context window",value:3,isLabelHidden:!0}),footerActions:e.jsxs(e.Fragment,{children:[e.jsx(n,{label:"Auto",variant:"ghost",size:"md"}),e.jsx(n,{label:"Settings",variant:"ghost",size:"md"})]}),sendActions:e.jsx(n,{label:"Microphone",variant:"ghost",size:"md",icon:k,isIconOnly:!0})})}},p={render:()=>e.jsx(s,{onSubmit:()=>{},isDisabled:!0,placeholder:"Composer is disabled"})},S={render:()=>e.jsx(s,{onSubmit:t=>console.log("Submit:",t),drawer:e.jsxs(X,{count:6,children:[e.jsx(a,{label:"new_feature_prd.docx",onRemove:()=>{}}),e.jsx(a,{label:"2026_roadmap.docx",onRemove:()=>{}}),e.jsx(a,{label:"user_flow.pdf",onRemove:()=>{}}),e.jsx(a,{label:"launch_plan.docx",onRemove:()=>{}}),e.jsx(a,{label:"user_feedback.csv",onRemove:()=>{}}),e.jsx(a,{label:"kpis.csv",onRemove:()=>{}})]})})},g={render:()=>e.jsx(s,{onSubmit:t=>console.log("Submit:",t),status:{type:"error",message:"Failed to send message. Please try again."}})},b={render:()=>e.jsx(s,{onSubmit:t=>console.log("Submit:",t),statusPosition:"top",status:{type:"warning",message:"Context window is 90% full."}})},h={render:()=>e.jsx(s,{onSubmit:t=>console.log("Submit:",t),status:{type:"error",message:"Failed to send message. Please try again."}})},x={render:()=>e.jsx(s,{onSubmit:t=>{console.log("Submit:",t),alert(`Sent: ${t}`)},placeholder:"Type to enable the send button..."})},v={render:()=>e.jsx(s,{onSubmit:t=>console.log("Submit:",t),sendButton:e.jsx(I,{size:"sm",onSend:()=>alert("Custom send!")})})},C={render:()=>{const[t,o]=y.useState(!1);return e.jsx(s,{onSubmit:i=>{console.log("Submit:",i),o(!0),setTimeout(()=>o(!1),5e3)},isStopShown:t,onStop:()=>{console.log("Stopped"),o(!1)},placeholder:"Send a message to start streaming..."})}},D={render:()=>{const t=[{key:"A",label:"Yes"},{key:"B",label:"Yes, and don’t ask again for `git add` commands"},{key:"C",label:"No, and tell me what to do differently"}],[o,i]=y.useState(null);return e.jsx(s,{onSubmit:r=>{console.log("Submit:",r,"| Answer:",o),alert(`Sent: "${r}"
Answer: ${o}`)},drawer:e.jsx(X,{count:1,label:"User feedback requested",children:e.jsx("div",{style:{width:"100%"},children:e.jsxs(B,{children:[e.jsx(f,{label:e.jsx(A,{weight:"bold",children:"Do you want to proceed?"})}),t.map(r=>e.jsx(f,{label:r.label,startContent:e.jsx(T,{variant:o===r.key?"info":"neutral",label:r.key}),isSelected:o===r.key,onClick:()=>i(r.key)},r.key))]})})})})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <XDSChatComposer onSubmit={value => {
    console.log('Submit:', value);
    alert(\`Sent: \${value}\`);
  }} />
}`,...l.parameters?.docs?.source},description:{story:"Simplest usage — just onSubmit",...l.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isStreaming, setIsStreaming] = useState(true);
    return <XDSChatComposer onSubmit={value => {
      console.log('Submit:', value);
      setIsStreaming(true);
    }} isStopShown={isStreaming} onStop={() => {
      console.log('Stopped');
      setIsStreaming(false);
    }} />;
  }
}`,...c.parameters?.docs?.source},description:{story:"With streaming state and stop button",...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <XDSChatComposer onSubmit={value => console.log('Submit:', value)} footerActions={<XDSButton label="GPT-4" variant="ghost" size="md" />} sendActions={<XDSButton label="Microphone" variant="ghost" size="md" icon={MicIcon} isIconOnly />} />
}`,...d.parameters?.docs?.source},description:{story:"With footer actions (model selector) and mic button",...d.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <XDSChatComposer onSubmit={value => console.log('Submit:', value)} drawer={<XDSChatComposerDrawer>
          <XDSToken label="report.pdf" onRemove={() => {}} />
          <XDSToken label="data.csv" onRemove={() => {}} />
        </XDSChatComposerDrawer>} headerActions={<XDSButton label="Attach file" variant="ghost" size="sm" icon={PaperclipIcon} isIconOnly />} headerContext={<XDSProgressBar label="Context window" value={3} isLabelHidden />} />
}`,...m.parameters?.docs?.source},description:{story:"With attachment chips and a context toolbar",...m.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isStreaming, setIsStreaming] = useState(false);
    return <XDSChatComposer onSubmit={value => {
      console.log('Submit:', value);
      setIsStreaming(true);
      setTimeout(() => setIsStreaming(false), 3000);
    }} isStopShown={isStreaming} onStop={() => setIsStreaming(false)} placeholder="Ask me anything..." drawer={<XDSChatComposerDrawer>
            <XDSToken label="design-spec.pdf" onRemove={() => {}} />
          </XDSChatComposerDrawer>} headerActions={<>
            <XDSButton label="Mention" variant="ghost" size="sm" icon={AtSignIcon} isIconOnly />
            <XDSButton label="Attach file" variant="ghost" size="sm" icon={PaperclipIcon} isIconOnly />
          </>} headerContext={<XDSProgressBar label="Context window" value={3} isLabelHidden />} footerActions={<>
            <XDSButton label="Auto" variant="ghost" size="md" />
            <XDSButton label="Settings" variant="ghost" size="md" />
          </>} sendActions={<XDSButton label="Microphone" variant="ghost" size="md" icon={MicIcon} isIconOnly />} />;
  }
}`,...u.parameters?.docs?.source},description:{story:"Full featured — all slots populated",...u.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <XDSChatComposer onSubmit={() => {}} isDisabled placeholder="Composer is disabled" />
}`,...p.parameters?.docs?.source},description:{story:"Disabled state",...p.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <XDSChatComposer onSubmit={value => console.log('Submit:', value)} drawer={<XDSChatComposerDrawer count={6}>
          <XDSToken label="new_feature_prd.docx" onRemove={() => {}} />
          <XDSToken label="2026_roadmap.docx" onRemove={() => {}} />
          <XDSToken label="user_flow.pdf" onRemove={() => {}} />
          <XDSToken label="launch_plan.docx" onRemove={() => {}} />
          <XDSToken label="user_feedback.csv" onRemove={() => {}} />
          <XDSToken label="kpis.csv" onRemove={() => {}} />
        </XDSChatComposerDrawer>} />
}`,...S.parameters?.docs?.source},description:{story:"With many attachments and collapsible drawer",...S.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <XDSChatComposer onSubmit={value => console.log('Submit:', value)} status={{
    type: 'error',
    message: 'Failed to send message. Please try again.'
  }} />
}`,...g.parameters?.docs?.source},description:{story:"With error status",...g.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <XDSChatComposer onSubmit={value => console.log('Submit:', value)} statusPosition="top" status={{
    type: 'warning',
    message: 'Context window is 90% full.'
  }} />
}`,...b.parameters?.docs?.source},description:{story:"With status on top",...b.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <XDSChatComposer onSubmit={value => console.log('Submit:', value)} status={{
    type: 'error',
    message: 'Failed to send message. Please try again.'
  }} />
}`,...h.parameters?.docs?.source},description:{story:"With status on bottom",...h.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <XDSChatComposer onSubmit={value => {
    console.log('Submit:', value);
    alert(\`Sent: \${value}\`);
  }} placeholder="Type to enable the send button..." />
}`,...x.parameters?.docs?.source},description:{story:"Default send button — reads from composer context automatically",...x.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <XDSChatComposer onSubmit={value => console.log('Submit:', value)} sendButton={<XDSChatSendButton size="sm" onSend={() => alert('Custom send!')} />} />
}`,...v.parameters?.docs?.source},description:{story:"Custom send button via sendButton slot",...v.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isStreaming, setIsStreaming] = useState(false);
    return <XDSChatComposer onSubmit={value => {
      console.log('Submit:', value);
      setIsStreaming(true);
      setTimeout(() => setIsStreaming(false), 5000);
    }} isStopShown={isStreaming} onStop={() => {
      console.log('Stopped');
      setIsStreaming(false);
    }} placeholder="Send a message to start streaming..." />;
  }
}`,...C.parameters?.docs?.source},description:{story:"Send/stop toggle — type text and submit to start streaming, click stop to end",...C.parameters?.docs?.description}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => {
    const options = [{
      key: 'A',
      label: 'Yes'
    }, {
      key: 'B',
      label: 'Yes, and don\\u2019t ask again for \`git add\` commands'
    }, {
      key: 'C',
      label: 'No, and tell me what to do differently'
    }];
    const [selected, setSelected] = useState<string | null>(null);
    return <XDSChatComposer onSubmit={value => {
      console.log('Submit:', value, '| Answer:', selected);
      alert(\`Sent: "\${value}"\\nAnswer: \${selected}\`);
    }} drawer={<XDSChatComposerDrawer count={1} label="User feedback requested">
            <div style={{
        width: '100%'
      }}>
              <XDSList>
                <XDSListItem label={<XDSText weight="bold">Do you want to proceed?</XDSText>} />
                {options.map(opt => <XDSListItem key={opt.key} label={opt.label} startContent={<XDSBadge variant={selected === opt.key ? 'info' : 'neutral'} label={opt.key} />} isSelected={selected === opt.key} onClick={() => setSelected(opt.key)} />)}
              </XDSList>
            </div>
          </XDSChatComposerDrawer>} />;
  }
}`,...D.parameters?.docs?.source},description:{story:"Drawer with a feedback prompt, warning badge, and selectable options",...D.parameters?.docs?.description}}};const J=["Simplest","WithStreaming","WithFooterActions","WithAttachments","FullFeatured","Disabled","WithManyAttachments","WithError","WithStatusTop","WithStatusBottom","DefaultSendButton","CustomSendButton","SendStopToggle","Feedback"];export{v as CustomSendButton,x as DefaultSendButton,p as Disabled,D as Feedback,u as FullFeatured,C as SendStopToggle,l as Simplest,m as WithAttachments,g as WithError,d as WithFooterActions,S as WithManyAttachments,h as WithStatusBottom,b as WithStatusTop,c as WithStreaming,J as __namedExportsOrder,Z as default};
