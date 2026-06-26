import{at as s,aQ as S,ad as o,ai as P,ar as w,aZ as k,af as R}from"./iframe-yRFQ_7VC.js";import{u as B}from"./useXDSPopover-ChRJmaAz.js";import{X as H}from"./useXDSInteractiveRole-C4QNKBOy.js";const E='button, [role="button"]';function j(n){return n.matches(E)?n:n.querySelector(E)}const i={contentPadding:{kLKAdn:"xds1vlblms",kGO01o:"xdsvmdzux",kZCmMZ:"xds126nfab",kwRFfy:"xds1t818jl",$$css:!0},gap:{keoZOQ:"xdscsaf9d",k1K539:"xds14cgwvg",$$css:!0},customWidth:n=>[{kzqmXN:(typeof n=="number"?`${n}px`:n)!=null?"xds5lhr3w":typeof n=="number"?`${n}px`:n,$$css:!0},{"--x-width":(r=>typeof r=="number"?r+"px":r??void 0)(typeof n=="number"?`${n}px`:n)}],matchTrigger:{k7Eaqz:"xdsrzjruh",$$css:!0}};function L({children:n,anchorRef:r,content:m,placement:l="below",alignment:g="start",isOpen:d,onOpenChange:u,isEnabled:D=!0,width:A,label:O,hasCloseButton:F,closeButtonLabel:I,hasAutoFocus:N,xstyle:f,className:h,style:v,"data-testid":b}){const X=s.useRef(null),C=d!==void 0,q=s.useRef(0),$=s.useCallback(()=>{u?.(!0)},[u]),W=s.useCallback(()=>{q.current=Date.now(),u?.(!1)},[u]),t=B({dialogLabel:O,hasLightDismiss:!0,hasCloseButton:F,closeButtonLabel:I,hasAutoFocus:N,onShow:$,onHide:W}),p=s.useCallback(()=>{D&&(Date.now()-q.current<50||t.toggle())},[D,t]),y=s.useCallback(e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),p())},[p]),c=s.useCallback(e=>{e.setAttribute("aria-haspopup",t.triggerProps["aria-haspopup"]),e.setAttribute("aria-expanded",String(t.triggerProps["aria-expanded"])),e.setAttribute("aria-controls",t.triggerProps["aria-controls"]),e.addEventListener("click",p);const a=e.tagName!=="BUTTON"&&e.getAttribute("role")==="button";return a&&e.addEventListener("keydown",y),()=>{e.removeAttribute("aria-haspopup"),e.removeAttribute("aria-expanded"),e.removeAttribute("aria-controls"),e.removeEventListener("click",p),a&&e.removeEventListener("keydown",y)}},[t,p,y]);S(()=>{if(!r)return;const e=r.current;if(!e)return;const a=j(e);if(a||console.warn('XDSPopover: anchorRef must reference a <button> or [role="button"] element. The popover trigger implements the button + dialog ARIA pattern.'),!a)return;t.triggerRef(e);const x=c(a);return()=>{t.triggerRef(null),x()}},[r,t,c]),S(()=>{if(r||typeof n=="function")return;const e=X.current;if(!e)return;t.triggerRef(e);const a=j(e);if(a||console.warn('XDSPopover: children must contain a <button> or [role="button"] element. The popover trigger implements the button + dialog ARIA pattern.'),!a)return;const x=c(a);return()=>{t.triggerRef(null),x()}},[r,t,c]),S(()=>{C&&(d&&!t.isOpen?t.show():!d&&t.isOpen&&t.hide())},[d,C,t]);const T=A?i.customWidth(A):i.matchTrigger;if(r&&n==null)return o.jsx(o.Fragment,{children:t.render(o.jsx("div",{"data-testid":b,...P(k("popover"),w(i.contentPadding,f),h,v),children:m}),{placement:l,alignment:g,xstyle:[T,i.gap,R[l]]})});if(typeof n=="function"){const e={ref:t.triggerRef,onClick:p,"aria-haspopup":"dialog","aria-expanded":t.isOpen,"aria-controls":t.id};return o.jsxs(o.Fragment,{children:[n(e),t.render(o.jsx("div",{"data-testid":b,...P(k("popover"),w(i.contentPadding,f),h,v),children:m}),{placement:l,alignment:g,xstyle:[T,i.gap,R[l]]})]})}return o.jsxs(o.Fragment,{children:[o.jsx(H,{value:"button",children:o.jsx("div",{ref:X,className:"xds3nfvp2",children:n})}),t.render(o.jsx("div",{"data-testid":b,...P(k("popover"),w(i.contentPadding,f),h,v),children:m}),{placement:l,alignment:g,xstyle:[T,i.gap,R[l]]})]})}L.displayName="XDSPopover";L.__docgenInfo={description:`A click-triggered popover for displaying interactive content anchored to a trigger.

Implements the button + dialog ARIA pattern. The trigger must contain a
\`<button>\` or \`[role="button"]\` element — the popover finds it and applies
click/keydown handlers and ARIA attributes automatically.

Uses an inline-flex wrapper as the CSS anchor for stable positioning
(immune to pressed-state transforms like \`:active { scale(0.98) }\`).

Focus is trapped inside the popover when open.
Supports light dismiss (click outside or Escape to close).

For hover-triggered overlays, use {@link XDSHoverCard} instead.

@example
\`\`\`
<XDSPopover label="Settings" content={<SettingsPanel />} placement="below">
  <XDSButton label="Settings" />
</XDSPopover>
<XDSPopover
  isOpen={isOpen}
  onOpenChange={setIsOpen}
  label="Filter"
  content={<FilterForm />}>
  <XDSButton label="Filter" />
</XDSPopover>
<XDSPopover
  anchorRef={myButtonRef}
  label="Actions"
  content={<ActionMenu />}
  placement="below"
/>
\`\`\``,methods:[],displayName:"XDSPopover",props:{children:{required:!1,tsType:{name:"union",raw:"ReactNode | ((props: PopoverTriggerRenderProps) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:`The trigger element. Accepts either:

**ReactNode (automatic mode):** Must contain a \`<button>\` or
\`[role="button"]\` element — the popover locates it and applies
click/keydown handlers and ARIA attributes automatically.
Components that consume \`XDSInteractiveRoleContext\` (e.g., XDSToken)
will render as a button automatically when placed here.

**Render function (explicit mode):** Receives \`PopoverTriggerRenderProps\`
with ref, onClick, and ARIA attributes. The consumer is responsible
for attaching these to their trigger element. Use this for custom
triggers or third-party components.

The trigger is rendered inside an anchor wrapper used for CSS anchor
positioning. The wrapper is stable (no pressed-state transforms),
preventing popover position jitter.

When \`anchorRef\` is provided, children can be omitted and the popover
attaches to the external ref element as a sibling.

@example
\`\`\`
<XDSPopover content={...}><XDSButton label="Open" /></XDSPopover>
<XDSPopover content={...}><XDSToken label="Filter" /></XDSPopover>
<XDSPopover content={...}>
  {(triggerProps) => <MyCustomTrigger {...triggerProps} />}
</XDSPopover>
\`\`\``},anchorRef:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLElement>",elements:[{name:"HTMLElement"}]},description:'External ref to use as the popover anchor.\nWhen provided (and no children), the popover attaches to this element\ninstead of wrapping children. The referenced element must be a\n`<button>` or `[role="button"]` — the popover applies click/keydown\nhandlers and ARIA attributes to it directly.'},content:{required:!0,tsType:{name:"ReactNode"},description:"Content to display inside the popover."},placement:{required:!1,tsType:{name:"union",raw:"'above' | 'below' | 'start' | 'end'",elements:[{name:"literal",value:"'above'"},{name:"literal",value:"'below'"},{name:"literal",value:"'start'"},{name:"literal",value:"'end'"}]},description:`Position placement relative to the trigger.
Uses CSS anchor positioning via useXDSLayer.
@default 'below'`,defaultValue:{value:"'below'",computed:!1}},alignment:{required:!1,tsType:{name:"union",raw:"'start' | 'center' | 'end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'end'"}]},description:`Alignment along the placement axis.
@default 'start'`,defaultValue:{value:"'start'",computed:!1}},isOpen:{required:!1,tsType:{name:"boolean"},description:`Whether the popover is open (controlled mode).
Omit for uncontrolled behavior.`},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(isOpen: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isOpen"}],return:{name:"void"}}},description:"Callback fired when the popover visibility changes."},isEnabled:{required:!1,tsType:{name:"boolean"},description:`Whether the popover is enabled.
When false, trigger interactions are ignored.
@default true`,defaultValue:{value:"true",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:`Width of the popover container.
Numbers are px, strings used as-is.
@default 'auto'`},label:{required:!1,tsType:{name:"string"},description:`Accessible label for the popover dialog.
Recommended for accessibility (used as aria-label on the dialog).`},hasCloseButton:{required:!1,tsType:{name:"boolean"},description:`Whether to include a hidden close button for accessibility.
The button appears when keyboard users tab past the last element.
@default true`},closeButtonLabel:{required:!1,tsType:{name:"string"},description:`Label for the hidden close button.
@default "Close popover"`},hasAutoFocus:{required:!1,tsType:{name:"boolean"},description:"Whether to auto-focus the first focusable element when the popover opens.\nSet to `false` for inline showcases or documentation previews.\n@default true"},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for the popover container."}},composes:["Pick"]};export{L as X};
