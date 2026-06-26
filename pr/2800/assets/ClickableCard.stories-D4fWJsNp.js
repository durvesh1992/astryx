import{at as C,aU as E,ad as e,ai as H,aZ as I,aj as R,r as t,X as U}from"./iframe-yRFQ_7VC.js";import{X as $}from"./XDSCard-CyDoBnn3.js";import{u as B}from"./useClickableContainer-B3IEmxS8.js";import{X as P}from"./XDSHStack-BmU4dpCo.js";import{X as u}from"./XDSVStack-uMCoSZ_B.js";import"./preload-helper-Ct5FWWRu.js";import"./container.stylex-BI6SFdSl.js";import"./padding.stylex-BDg7w1Mn.js";import"./XDSStack-CFJ7xIVk.js";import"./stack.stylex-5XIQDawT.js";const s={interactive:{kVAEAm:"xds1n2onr6",kkrTdU:"xds1ypdohk",kybGjl:"xds1hl2dhg",k1TLXF:null,kMnn75:null,kmVMDM:null,kNySMw:null,kMwMTN:"xds1heor9g",kInvED:"xds1hl8ikr",$$css:!0},focusWithin:{kRYL1X:"xds1irc7jg",kry4t4:null,kf5QHk:null,kuo1qL:null,koJ47v:"xdsdjuwb3",$$css:!0},overlay:{k5JduY:"xds1s928wv",kwXMNM:"xds1j6awrg",kv0HGH:"xdsarstr8",kcktkL:null,kc1e00:null,kH8aOt:null,kH8cDV:null,kLxBhq:null,kSy8m5:null,k3foIR:null,k8Iv0R:null,kUfP38:"xds1k48kgn",kGftIZ:null,kSluu6:null,kYXnhQ:null,kaOt8G:null,kgFEc0:null,kDH5la:null,kskBYc:null,kBNLoZ:null,kloYau:"xds2q1x1w",kRicXK:"xds1ywzrc5",kPNhGg:"xds97pup0",kA8PQs:"xds1dlmc9c",ks3ayO:"xdsyhc2n1",kAcZsS:"xdsotisz4",$$css:!0},hoverOnPointer:{kJs8I2:"xds1vwwndy",$$css:!0},disabled:{kkrTdU:"xds1h6gzvc",kSiTet:"xdsbyyjgo",$$css:!0}};function r({label:l,onClick:n,onMouseUp:h,href:m,target:g,isDisabled:a=!1,children:f,padding:S,variant:y="default",width:w,height:X,maxWidth:D,ref:T,xstyle:j,className:N,style:M,...q}){const b=C.useRef(null),k=C.useRef(null),A=E(),{onClick:O,onMouseUp:x}=B({containerRef:b,interactiveRef:k,onClick:n,href:m,target:g,disabled:a}),V=h?v=>{x(v),h(v)}:x,L=m!=null;return e.jsxs($,{ref:R(T,b),width:w,height:X,maxWidth:D,padding:S,variant:y,...H(I("clickable-card",{variant:y}),{className:N,style:M}),xstyle:[s.interactive,s.focusWithin,!a&&s.overlay,!a&&s.hoverOnPointer,a&&s.disabled,j],onClick:a?void 0:O,onMouseUp:a?void 0:V,...q,children:[L?e.jsx(A,{ref:k,href:m,target:g,"aria-label":l,"aria-disabled":a||void 0,tabIndex:a?-1:0,className:"xds10l6tqk xds1i1rx1s xdsjm9jq1 xds1717udv xdskdpibf xdsb3r6kr xdszpqnlu xdsuxw1ft xdsc342km"}):e.jsx("button",{ref:k,type:"button","aria-label":l,disabled:a,onClick:n,className:"xds10l6tqk xds1i1rx1s xdsjm9jq1 xds1717udv xdskdpibf xdsb3r6kr xdszpqnlu xdsuxw1ft xdsc342km"}),f]})}r.displayName="XDSClickableCard";r.__docgenInfo={description:`An interactive card that acts as a single navigation or action target.

Composes XDSCard for visual styling and adds an interactive layer
with useClickableContainer. Nested interactive elements (buttons,
links, inputs) work independently — clicking them does NOT trigger
the card's onClick or navigation.

A visually-hidden <button> or <a> inside the card provides the
accessible role and label. The card surface is a plain <div> —
no role or tabIndex on the container.

@compositionHint Use for cards that navigate to a detail page or trigger an action.
For toggle selection cards, use XDSSelectableCard instead.
Nest XDSButton or other interactive elements freely inside — they won't conflict.

@example
\`\`\`
<XDSClickableCard label="Settings" href="/settings">
  <XDSText type="body" weight="bold">Settings</XDSText>
  <XDSText type="supporting" color="secondary">Manage your preferences</XDSText>
</XDSClickableCard>
\`\`\`

@example
\`\`\`
<XDSClickableCard label="Open modal" onClick={() => setShowModal(true)}>
  <XDSText type="body">Click anywhere to open</XDSText>
  <XDSButton label="Other action" onClick={handleOther} />
</XDSClickableCard>
\`\`\``,methods:[],displayName:"XDSClickableCard",props:{xstyle:{required:!1,tsType:{name:"StyleXStyles"},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:"Ref",elements:[{name:"HTMLDivElement"}],raw:"Ref<HTMLDivElement>"},description:"Ref forwarded to the root element."},label:{required:!0,tsType:{name:"string"},description:`Accessibility label for the card.
Used as \`aria-label\` — provides the accessible name for screen readers.
When the card has visible text that serves as its label, prefer
passing that text here so the screen reader announcement matches.`},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: MouseEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"MouseEvent",elements:[{name:"HTMLElement"}],raw:"MouseEvent<HTMLElement>"},name:"event"}],return:{name:"void"}}},description:`Click handler. Fires when the card surface is clicked
(not when nested interactive elements are clicked).`},href:{required:!1,tsType:{name:"string"},description:`Navigation URL. When provided, clicking the card navigates to this URL.
Ctrl/Cmd+click opens in a new tab.`},target:{required:!1,tsType:{name:"string"},description:`Link target for href navigation.
@default '_self'`},isDisabled:{required:!1,tsType:{name:"boolean"},description:`Set to true to disable the card.
Disabled cards remain focusable (tabIndex 0) with aria-disabled
so screen reader users can discover them.`,defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:`Content to render inside the card.
Can include nested interactive elements (buttons, links) — they will
work independently from the card's click/navigation behavior.`},padding:{required:!1,tsType:{name:"union",raw:"0 | 0.5 | 1 | 1.5 | 2 | 3 | 4 | 5 | 6 | 8 | 10",elements:[{name:"literal",value:"0"},{name:"literal",value:"0.5"},{name:"literal",value:"1"},{name:"literal",value:"1.5"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"8"},{name:"literal",value:"10"}]},description:`Internal padding of the card using the spacing scale.
@default 4 (16px)`},variant:{required:!1,tsType:{name:"union",raw:`| 'default'
| 'transparent'
| 'muted'
| 'blue'
| 'cyan'
| 'gray'
| 'green'
| 'orange'
| 'pink'
| 'purple'
| 'red'
| 'teal'
| 'yellow'`,elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'transparent'"},{name:"literal",value:"'muted'"},{name:"literal",value:"'blue'"},{name:"literal",value:"'cyan'"},{name:"literal",value:"'gray'"},{name:"literal",value:"'green'"},{name:"literal",value:"'orange'"},{name:"literal",value:"'pink'"},{name:"literal",value:"'purple'"},{name:"literal",value:"'red'"},{name:"literal",value:"'teal'"},{name:"literal",value:"'yellow'"}]},description:`Background color variant.
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Width of the card."},height:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Height of the card."},maxWidth:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Maximum width of the card."}},composes:["Omit"]};const ee={title:"Core/ClickableCard",component:r,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","transparent","muted","blue","cyan","gray","green","orange","pink","purple","red","teal","yellow"]}},parameters:{docs:{description:{component:"An interactive card for navigation or action targets. Nested interactive elements (buttons, links) work independently; clicking them does NOT trigger the card's onClick or navigation. Uses `useClickableContainer` internally."}}}},i={name:"Navigation (href)",render:()=>e.jsx(r,{label:"Settings",href:"/settings",width:300,children:e.jsxs(u,{gap:1,children:[e.jsx(t,{type:"body",weight:"bold",children:"Settings"}),e.jsx(t,{type:"supporting",color:"secondary",children:"Manage your preferences"})]})}),parameters:{docs:{description:{story:"Card with `href`: clicking navigates. Ctrl/Cmd+click opens new tab. Middle-click opens new tab."}}}},o={name:"Action (onClick)",render:()=>e.jsx(r,{label:"Open modal",onClick:()=>alert("Card clicked!"),width:300,children:e.jsxs(u,{gap:1,children:[e.jsx(t,{type:"body",weight:"bold",children:"Click me"}),e.jsx(t,{type:"supporting",color:"secondary",children:"Opens a modal"})]})}),parameters:{docs:{description:{story:"Card with `onClick`: fires the handler when the card surface is clicked."}}}},d={name:"Nested Interactive Elements",render:()=>e.jsx(r,{label:"Product card",href:"/product/123",width:300,children:e.jsxs(u,{gap:2,children:[e.jsx(t,{type:"body",weight:"bold",children:"Product Name"}),e.jsx(t,{type:"supporting",color:"secondary",children:"$29.99"}),e.jsx(U,{label:"Add to cart",onClick:()=>alert("Added to cart! (card did NOT navigate)"),variant:"primary"})]})}),parameters:{docs:{description:{story:'The key feature: nested buttons/links work independently. Clicking "Add to cart" fires its own handler without triggering card navigation. This is handled by `useClickableContainer` which checks `hasInteractiveAncestor` on each click.'}}}},c={render:()=>e.jsx(r,{label:"Disabled card",onClick:()=>{},isDisabled:!0,width:300,children:e.jsxs(u,{gap:1,children:[e.jsx(t,{type:"body",weight:"bold",children:"Disabled"}),e.jsx(t,{type:"supporting",color:"secondary",children:"This card cannot be clicked"})]})}),parameters:{docs:{description:{story:"`isDisabled` suppresses click, hover, focus, and sets `aria-disabled`. `tabIndex` becomes -1."}}}},p={name:"Color Variants",render:()=>{const l=["default","muted","transparent","blue","cyan","gray","green","orange","pink","purple","red","teal","yellow"];return e.jsx(P,{gap:3,wrap:"wrap",children:l.map(n=>e.jsx(r,{label:n,onClick:()=>alert(n),variant:n,width:140,children:e.jsx(t,{type:"body",weight:"bold",children:n})},n))})},parameters:{docs:{description:{story:"All color variants: same palette as XDSCard. Color cards have transparent borders."}}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Navigation (href)',
  render: () => <XDSClickableCard label="Settings" href="/settings" width={300}>
      <XDSVStack gap={1}>
        <XDSText type="body" weight="bold">
          Settings
        </XDSText>
        <XDSText type="supporting" color="secondary">
          Manage your preferences
        </XDSText>
      </XDSVStack>
    </XDSClickableCard>,
  parameters: {
    docs: {
      description: {
        story: 'Card with \`href\`: clicking navigates. Ctrl/Cmd+click opens new tab. Middle-click opens new tab.'
      }
    }
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Action (onClick)',
  render: () => <XDSClickableCard label="Open modal" onClick={() => alert('Card clicked!')} width={300}>
      <XDSVStack gap={1}>
        <XDSText type="body" weight="bold">
          Click me
        </XDSText>
        <XDSText type="supporting" color="secondary">
          Opens a modal
        </XDSText>
      </XDSVStack>
    </XDSClickableCard>,
  parameters: {
    docs: {
      description: {
        story: 'Card with \`onClick\`: fires the handler when the card surface is clicked.'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Nested Interactive Elements',
  render: () => <XDSClickableCard label="Product card" href="/product/123" width={300}>
      <XDSVStack gap={2}>
        <XDSText type="body" weight="bold">
          Product Name
        </XDSText>
        <XDSText type="supporting" color="secondary">
          $29.99
        </XDSText>
        <XDSButton label="Add to cart" onClick={() => alert('Added to cart! (card did NOT navigate)')} variant="primary" />
      </XDSVStack>
    </XDSClickableCard>,
  parameters: {
    docs: {
      description: {
        story: 'The key feature: nested buttons/links work independently. ' + 'Clicking "Add to cart" fires its own handler without triggering card navigation. ' + 'This is handled by \`useClickableContainer\` which checks \`hasInteractiveAncestor\` on each click.'
      }
    }
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <XDSClickableCard label="Disabled card" onClick={() => {}} isDisabled width={300}>
      <XDSVStack gap={1}>
        <XDSText type="body" weight="bold">
          Disabled
        </XDSText>
        <XDSText type="supporting" color="secondary">
          This card cannot be clicked
        </XDSText>
      </XDSVStack>
    </XDSClickableCard>,
  parameters: {
    docs: {
      description: {
        story: '\`isDisabled\` suppresses click, hover, focus, and sets \`aria-disabled\`. \`tabIndex\` becomes -1.'
      }
    }
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Color Variants',
  render: () => {
    const variants = ['default', 'muted', 'transparent', 'blue', 'cyan', 'gray', 'green', 'orange', 'pink', 'purple', 'red', 'teal', 'yellow'] as const;
    return <XDSHStack gap={3} wrap="wrap">
        {variants.map(v => <XDSClickableCard key={v} label={v} onClick={() => alert(v)} variant={v} width={140}>
            <XDSText type="body" weight="bold">
              {v}
            </XDSText>
          </XDSClickableCard>)}
      </XDSHStack>;
  },
  parameters: {
    docs: {
      description: {
        story: 'All color variants: same palette as XDSCard. Color cards have transparent borders.'
      }
    }
  }
}`,...p.parameters?.docs?.source}}};const ae=["Navigation","WithOnClick","NestedButton","Disabled","ColorVariants"];export{p as ColorVariants,c as Disabled,i as Navigation,d as NestedButton,o as WithOnClick,ae as __namedExportsOrder,ee as default};
