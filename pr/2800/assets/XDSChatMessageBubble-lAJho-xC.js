import{ad as n,ar as l,ai as M,aZ as S}from"./iframe-yRFQ_7VC.js";import{f as D}from"./XDSChatContext-Bvyev7ex.js";const e={content:{k1xSpc:"xds78zum5",kXwgrk:"xdsdt5ytf",ks0D6T:"xdsl6temz",kaIpWk:"xdsashgol",kMv6JI:"xds9ynric",kGuDYH:"xdsjm74w1",kLWn49:"xdsw6l6zx",kHjlTd:"xds1mzt3pk",kTgw9:"xds13faqbe",$$css:!0},radiusCompact:{kaIpWk:"xds1hviunn",$$css:!0},paddingCompact:{k8WAf4:"xds8o8v82",kLKAdn:null,kGO01o:null,kg3NbH:"xds1pzlopt",kuDDbn:null,kE3dHu:null,kP0aTx:null,kpe85a:null,$$css:!0},paddingBalanced:{k8WAf4:"xds8o8v82",kLKAdn:null,kGO01o:null,kg3NbH:"xds1pzlopt",kuDDbn:null,kE3dHu:null,kP0aTx:null,kpe85a:null,$$css:!0},paddingSpacious:{k8WAf4:"xds1na6nto",kLKAdn:null,kGO01o:null,kg3NbH:"xdszz68wx",kuDDbn:null,kE3dHu:null,kP0aTx:null,kpe85a:null,$$css:!0},paddingBlockNone:{k8WAf4:"xdst970qd",kLKAdn:null,kGO01o:null,$$css:!0},metadataPaddingCompact:{kg3NbH:"xds1pzlopt",kuDDbn:null,kE3dHu:null,kP0aTx:null,kpe85a:null,$$css:!0},metadataPaddingBalanced:{kg3NbH:"xds1pzlopt",kuDDbn:null,kE3dHu:null,kP0aTx:null,kpe85a:null,$$css:!0},metadataPaddingSpacious:{kg3NbH:"xdszz68wx",kuDDbn:null,kE3dHu:null,kP0aTx:null,kpe85a:null,$$css:!0},metadataReducedGap:{keoZOQ:"xds1c40v9y",$$css:!0},headerReducedGap:{k1K539:"xdsdrfirk",$$css:!0},nameRow:{kZKoxP:"xds1grt7ep",k1xSpc:"xds78zum5",kGNEyG:"xds6s0dn4",$$css:!0},alignEnd:{k9WMMc:"xdsp4054r",$$css:!0},assistant:{kWkggS:"xds17x4s8c",kMwMTN:"xds1tgivj0",$$css:!0},user:{kWkggS:"xds17x4s8c",kMwMTN:"xds1tgivj0",$$css:!0},ghost:{kWkggS:"xdsjbqb8w",kMwMTN:"xds1tgivj0",$$css:!0},groupFirstAssistant:{kqGeR4:"xdsgc49yv",kVL7Gh:null,kT0f0o:null,$$css:!0},groupMiddleAssistant:{kIxVMA:"xds1bcgpep",krdFHd:null,kfmiAY:null,kqGeR4:"xdsgc49yv",kVL7Gh:null,kT0f0o:null,$$css:!0},groupLastAssistant:{kIxVMA:"xds1bcgpep",krdFHd:null,kfmiAY:null,$$css:!0},groupFirstUser:{kYm2EN:"xds16vxp44",kVL7Gh:null,kT0f0o:null,$$css:!0},groupMiddleUser:{ksF3WI:"xdsxkfnbn",krdFHd:null,kfmiAY:null,kYm2EN:"xds16vxp44",kVL7Gh:null,kT0f0o:null,$$css:!0},groupLastUser:{ksF3WI:"xdsxkfnbn",krdFHd:null,kfmiAY:null,$$css:!0}};function p({children:k,variant:a="filled",name:r,metadata:u,group:d,xstyle:g,className:m,style:b,"data-testid":x,ref:f}){const o=D(),i=o?.sender??"assistant",s=o?.density??"balanced",h=s==="compact"?e.paddingCompact:s==="spacious"?e.paddingSpacious:e.paddingBalanced,t=i==="user",$=a==="ghost"?e.ghost:t?e.user:e.assistant,y=d==="first"?t?e.groupFirstUser:e.groupFirstAssistant:d==="middle"?t?e.groupMiddleUser:e.groupMiddleAssistant:d==="last"?t?e.groupLastUser:e.groupLastAssistant:null,c=s==="compact"?e.metadataPaddingCompact:s==="spacious"?e.metadataPaddingSpacious:e.metadataPaddingBalanced;return n.jsxs(n.Fragment,{children:[r&&n.jsx("div",{"data-chat-name":!0,...l(c,e.nameRow,e.headerReducedGap,t&&e.alignEnd),children:r}),n.jsx("div",{ref:f,"data-testid":x,...M(S("chat-message-bubble",{sender:i,variant:a,density:s}),l(e.content,s==="compact"&&e.radiusCompact,$,h,a==="ghost"&&e.paddingBlockNone,y,g),m,b),children:k}),u&&n.jsx("div",{...l(c,e.metadataReducedGap,t&&e.alignEnd),children:u})]})}p.displayName="XDSChatMessageBubble";p.__docgenInfo={description:`Styled content container — the chat "bubble."

Reads sender from parent XDSChatMessage context to auto-style background.
Use \`group\` prop for multi-bubble corner grouping.

@example
\`\`\`
<XDSChatMessage sender="user">
  <XDSChatMessageBubble
    name="Cindy"
    metadata={<XDSChatMessageMetadata timestamp="2:30 PM" status="read" />}>
    Hey, how's it going?
  </XDSChatMessageBubble>
</XDSChatMessage>
\`\`\``,methods:[],displayName:"XDSChatMessageBubble",props:{xstyle:{required:!1,tsType:{name:"StyleXStyles"},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:"Ref forwarded to the root element"},children:{required:!0,tsType:{name:"ReactNode"},description:"Bubble content — text, XDSMarkdown, or any ReactNode."},variant:{required:!1,tsType:{name:"union",raw:"'filled' | 'ghost'",elements:[{name:"literal",value:"'filled'"},{name:"literal",value:"'ghost'"}]},description:`Visual variant.
- 'filled': background color based on sender (default)
- 'ghost': no background, but keeps padding for consistent alignment
@default 'filled'`,defaultValue:{value:"'filled'",computed:!1}},name:{required:!1,tsType:{name:"ReactNode"},description:`Sender name rendered above the bubble, aligned with bubble text padding.
Use when the first content in a message is a bubble.
If the first content is raw (no bubble), use XDSChatMessage's \`name\`
prop instead.`},metadata:{required:!1,tsType:{name:"ReactNode"},description:`Metadata content rendered below the bubble, aligned with bubble text padding.
Use when the last content in a message is a bubble.
If the last content is raw (no bubble), use XDSChatMessage's \`metadata\`
prop instead.`},group:{required:!1,tsType:{name:"union",raw:"'first' | 'middle' | 'last'",elements:[{name:"literal",value:"'first'"},{name:"literal",value:"'middle'"},{name:"literal",value:"'last'"}]},description:`Position within a multi-bubble group.
Controls corner radius reduction on the sender side.
- 'first': bottom sender-side corner tightened
- 'middle': both sender-side corners tightened
- 'last': top sender-side corner tightened
Leave unset for standalone bubbles (full radius).`}},composes:["Omit"]};export{p as X};
