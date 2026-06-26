import{at as t,ad as e,ai as W,ar as G,aZ as $,aj as be,m as re,q as Oe,X as C}from"./iframe-yRFQ_7VC.js";import{u as Ce,X as we}from"./XDSDialog-Cl0gADPY.js";import{X as Xe,b as Pe}from"./XDSLayoutContent-DBrMIkuH.js";import{X as Te}from"./XDSLayoutHeader-ByHa8jrV.js";import{X as Re}from"./XDSLayoutFooter-BJLeHzEf.js";import{u as je}from"./hooks-CNj4otaP.js";import{X as Y}from"./XDSKbd-XtbOZf08.js";import{c as k}from"./createStaticSource-6dLwtoO2.js";import"./preload-helper-Ct5FWWRu.js";import"./useScrollLock-CuP4hIo8.js";import"./container.stylex-BI6SFdSl.js";import"./padding.stylex-BDg7w1Mn.js";import"./stack.stylex-5XIQDawT.js";import"./stackItem.stylex-CYo-hkeX.js";const ie=t.createContext(null);ie.displayName="CommandPaletteContext";function le(){return t.use(ie)}const Ne={list:{kORKVm:"xds1odjw0f",kskxy:"xdsmz0i5r",kmVPX3:"xds9epnlk",kUk6DE:"xds98rzlu",k1xSpc:"xds78zum5",kXwgrk:"xdsdt5ytf",kOIVth:"xds1lsbc85",$$css:!0}};function de({children:r,label:s="Commands",ref:n,xstyle:a,className:o,style:l,...i}){const d=le();return e.jsx("div",{ref:n,id:d?.listId,role:"listbox","aria-label":s,...W($("command-palette-list"),G(Ne.list,a),o,l),...i,children:r})}de.displayName="XDSCommandPaletteList";de.__docgenInfo={description:`Scrollable results container for the command palette.
Renders as a listbox for ARIA compliance.

When used inside XDSCommandPalette, automatically gets the correct
ID for aria-controls linking with the input.

@compositionHint Place inside XDSCommandPalette, after XDSCommandPaletteInput.
  Contains XDSCommandPaletteItem and XDSCommandPaletteGroup children.

@example
\`\`\`
<XDSCommandPaletteList>
  <XDSCommandPaletteItem value="home" onSelect={goHome}>
    Go Home
  </XDSCommandPaletteItem>
</XDSCommandPaletteList>
\`\`\``,methods:[],displayName:"XDSCommandPaletteList",props:{xstyle:{required:!1,tsType:{name:"StyleXStyles"},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:"Ref forwarded to the root element."},children:{required:!0,tsType:{name:"ReactNode"},description:"Command palette items, groups, empty states, etc."},label:{required:!1,tsType:{name:"string"},description:`Accessible label for the listbox.
@default 'Commands'`,defaultValue:{value:"'Commands'",computed:!1}}},composes:["Omit"]};const N={item:{k1xSpc:"xds78zum5",kGNEyG:"xds6s0dn4",kOIVth:"xds1txdalj",kzqmXN:"xdsh8yej3",kg3NbH:"xdsrrkdod",k8WAf4:"xdsce4md1",kaIpWk:"xdsx3sua9",kMv6JI:"xds9ynric",kGuDYH:"xdscr08ib",kMwMTN:"xds1tgivj0",kWkggS:"xdsjbqb8w",kQgIW9:"xds1gs6z28",kkrTdU:"xds1ypdohk",k9WMMc:"xdsdpxx8g",kI3sdo:"xds1a2a7pz",kfSwDN:"xds87ps6o",$$css:!0},itemHover:{kHE3J0:"xdse9uy6x",kSReZ0:"xdsyxi2l3",$$css:!0},itemHighlighted:{kWkggS:"xds1lmrjuc",$$css:!0},itemDisabled:{kSiTet:"xdsbyyjgo",kkrTdU:"xds1h6gzvc",$$css:!0},itemSelected:{kWkggS:"xdsgcxg3y",$$css:!0}};function ce({value:r,onSelect:s,isHighlighted:n,isSelected:a,isDisabled:o=!1,children:l,ref:i,xstyle:d,className:m,style:x,...u}){const p=le(),w=Ce()?.isInline===!0,D=t.useRef(null),S=t.useRef(!1),h=t.useMemo(()=>p?.selectableItems.findIndex(P=>P.value===r)??-1,[p?.selectableItems,r]),f=n??(p?p.highlightedIndex===h&&h>=0:!1),V=a??(p?p.value===r:!1);t.useEffect(()=>{const P=w&&!S.current;S.current=!0,!P&&f&&D.current&&D.current.scrollIntoView?.({block:"nearest"})},[f,w]);const B=t.useCallback(()=>{o||(s?.(r),p&&(p.selectItem(r),p.onClose()))},[o,r,s,p]),X=t.useCallback(()=>{o||!p||h<0||p.setHighlightedIndex(h)},[o,h,p]);return e.jsx("div",{ref:be(i,D),id:p&&h>=0?p.getItemId(h):void 0,role:"option","aria-selected":V,"aria-disabled":o||void 0,"data-value":r,onClick:B,onMouseEnter:X,...W($("command-palette-item"),G(N.item,!o&&N.itemHover,f&&N.itemHighlighted,V&&N.itemSelected,o&&N.itemDisabled,d),m,x),...u,children:l})}ce.displayName="XDSCommandPaletteItem";ce.__docgenInfo={description:`A selectable item in the command palette.
Accepts arbitrary children for full rendering control.

When used inside XDSCommandPalette, registers with context for
keyboard navigation and selection. Can also be used
standalone with explicit isHighlighted/isSelected props.

@compositionHint Place inside XDSCommandPaletteList or XDSCommandPaletteGroup.

@example
\`\`\`
<XDSCommandPaletteItem value="settings" onSelect={() => navigate('/settings')}>
  Settings
</XDSCommandPaletteItem>
\`\`\``,methods:[],displayName:"XDSCommandPaletteItem",props:{ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:"Ref forwarded to the root element."},value:{required:!0,tsType:{name:"string"},description:"Unique value for identification and selection."},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Called when this item is selected (via click or Enter)."},isHighlighted:{required:!1,tsType:{name:"boolean"},description:`Whether this item is visually highlighted (keyboard focus).
When omitted inside XDSCommandPalette, derived from context.
@default false`},isSelected:{required:!1,tsType:{name:"boolean"},description:`Whether this item is currently selected (picker mode).
@default false`},isDisabled:{required:!1,tsType:{name:"boolean"},description:`Whether the item is disabled.
@default false`,defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:"Item content. Fully custom — render icons, descriptions, shortcuts, etc."}},composes:["Omit"]};const He={group:{k1xSpc:"xds78zum5",kXwgrk:"xdsdt5ytf",kOIVth:"xds1lsbc85",k8WAf4:"xdsu0wf1k",$$css:!0}};function me({heading:r,children:s,ref:n,xstyle:a,className:o,style:l,...i}){return e.jsxs("div",{ref:n,role:"group","aria-label":r,...W($("command-palette-group"),G(He.group,a),o,l),...i,children:[e.jsx("div",{"aria-hidden":"true",className:"xdsrrkdod xdsu0wf1k xds9ynric xds141an7d xds1ltkj2j xdsv1l7n4 xds87ps6o",children:r}),s]})}me.displayName="XDSCommandPaletteGroup";me.__docgenInfo={description:`Visual grouping for command palette items with a heading label.

Heading style matches DropdownMenu section headings:
supporting-size (12px), secondary color, no uppercase/letterSpacing.

@compositionHint Place inside XDSCommandPaletteList.
  Contains XDSCommandPaletteItem children.

@example
\`\`\`
<XDSCommandPaletteGroup heading="Navigation">
  <XDSCommandPaletteItem value="home" onSelect={goHome}>
    Home
  </XDSCommandPaletteItem>
</XDSCommandPaletteGroup>
\`\`\``,methods:[],displayName:"XDSCommandPaletteGroup",props:{xstyle:{required:!1,tsType:{name:"StyleXStyles"},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:"Ref forwarded to the root element."},heading:{required:!0,tsType:{name:"string"},description:"Group heading text."},children:{required:!0,tsType:{name:"ReactNode"},description:"Items within this group."}},composes:["Omit"]};const Me={wrapper:{k1xSpc:"xds78zum5",kGNEyG:"xds6s0dn4",kOIVth:"xds1txdalj",kg3NbH:"xds1pzlopt",k8WAf4:"xds8o8v82",kmuXW:"xds2lah0s",$$css:!0}};function ee({value:r,onValueChange:s,placeholder:n="Search...",hasAutoFocus:a=!0,endContent:o,onChange:l,onKeyDown:i,ref:d,xstyle:m,...x}){const u=le(),p=Ce(),O=t.useRef(null),w=r??u?.search,D=s??u?.setSearch,S=a&&p?.isInline!==!0;t.useEffect(()=>{S&&O.current&&requestAnimationFrame(()=>{O.current?.focus()})},[S]);const h=t.useCallback(f=>{i?.(f),!f.defaultPrevented&&u?.onKeyDown(f)},[u,i]);return e.jsxs("div",{...W($("command-palette-input"),G(Me.wrapper,m)),children:[e.jsx("span",{className:"xds78zum5 xds6s0dn4 xds2lah0s xdsv1l7n4",children:e.jsx(re,{icon:"search",size:"sm",color:"inherit"})}),e.jsx("input",{ref:be(d,O),type:"text",role:"combobox","aria-expanded":u?.isOpen??!0,"aria-autocomplete":"list","aria-controls":u?.listId,"aria-activedescendant":u&&u.highlightedIndex>=0?u.getItemId(u.highlightedIndex):void 0,placeholder:n,value:w,"data-autofocus":S||void 0,onChange:f=>{D?.(f.target.value),l?.(f)},onKeyDown:h,className:"xds98rzlu xdseuugli xds1gs6z28 xds1a2a7pz xdsjbqb8w xds1tgivj0 xds9ynric xdsjm74w1 xds6pjikd xdsw6l6zx xds1717udv xdseyghm5",...x}),(u?.isBusy||o)&&e.jsxs("span",{className:"xds78zum5 xds6s0dn4 xdszye2dw xds2lah0s",children:[u?.isBusy&&e.jsx("span",{className:"xds78zum5 xds6s0dn4 xds2lah0s xdsv1l7n4 xds1hc1fzr xds19991ni xdsjd9b36 xds5h36tt xds4itv7f",children:e.jsx(Oe,{size:"sm"})}),o]})," "]})}ee.displayName="XDSCommandPaletteInput";ee.__docgenInfo={description:`Search input for the command palette.

Renders a search icon and a text input. Auto-focuses when mounted
so users can start typing immediately.

When used inside XDSCommandPalette, automatically wires to the
context for search state and keyboard navigation (via useCombobox).
Can also be used standalone with explicit value/onValueChange props.

@compositionHint Place as the first child of XDSCommandPalette.

@example
\`\`\`
<XDSCommandPalette isOpen={isOpen} onOpenChange={setIsOpen}>
  <XDSCommandPaletteInput placeholder="Search commands..." />
</XDSCommandPalette>
\`\`\``,methods:[],displayName:"XDSCommandPaletteInput",props:{ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:"Ref forwarded to the input element (for focus management)."},value:{required:!1,tsType:{name:"string"},description:`The current search value.
When omitted inside XDSCommandPalette, reads from context.`},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:`Called when the search value changes.
When omitted inside XDSCommandPalette, writes to context.`},placeholder:{required:!1,tsType:{name:"string"},description:`Placeholder text for the input.
@default 'Search...'`,defaultValue:{value:"'Search...'",computed:!1}},hasAutoFocus:{required:!1,tsType:{name:"boolean"},description:`Whether to auto-focus the input when mounted.
@default true`,defaultValue:{value:"true",computed:!1}},endContent:{required:!1,tsType:{name:"ReactNode"},description:`Content rendered at the trailing end of the input, after the spinner.
Use for clear buttons, keyboard shortcuts, or other trailing actions.
The spinner (when busy) appears immediately before this content with a 4px gap.`},onChange:{required:!1,tsType:{name:"ReactChangeEventHandler",raw:"React.ChangeEventHandler<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:"Native onChange handler for the input element."}},composes:["Omit"]};const Ee={footer:{k1xSpc:"xds78zum5",kGNEyG:"xds6s0dn4",kOIVth:"xds18g69wz",kg3NbH:"xds1pzlopt",k8WAf4:"xdsce4md1",kmuXW:"xds2lah0s",kMv6JI:"xds9ynric",kGuDYH:"xds141an7d",kLWn49:"xds1ltkj2j",kMwMTN:"xdsv1l7n4",$$css:!0}};function te({children:r,ref:s,xstyle:n,className:a,style:o,...l}){return e.jsx("div",{ref:s,...W($("command-palette-footer"),G(Ee.footer,n),a,o),...l,children:r??e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:"xds78zum5 xds6s0dn4 xdszye2dw",children:[e.jsx(Y,{keys:"up"}),e.jsx(Y,{keys:"down"}),"Navigate"]}),e.jsxs("span",{className:"xds78zum5 xds6s0dn4 xdszye2dw",children:[e.jsx(Y,{keys:"enter"}),"Select"]}),e.jsxs("span",{className:"xds78zum5 xds6s0dn4 xdszye2dw",children:[e.jsx(Y,{keys:"escape"}),"Close"]})]})})}te.displayName="XDSCommandPaletteFooter";te.__docgenInfo={description:`Footer for the command palette showing keyboard navigation hints.

When no children are provided, renders default hints using XDSKbd
for arrow keys, Enter to select, and Escape to close.

@compositionHint Pass to XDSCommandPalette's \`footer\` slot.

@example
\`\`\`
<XDSCommandPalette
  isOpen={isOpen}
  onOpenChange={setIsOpen}
  input={<XDSCommandPaletteInput />}
  footer={<XDSCommandPaletteFooter />}>
  <XDSCommandPaletteList>...</XDSCommandPaletteList>
</XDSCommandPalette>
\`\`\``,methods:[],displayName:"XDSCommandPaletteFooter",props:{xstyle:{required:!1,tsType:{name:"StyleXStyles"},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:"Ref forwarded to the footer element."},children:{required:!1,tsType:{name:"ReactNode"},description:`Footer content. When provided, renders custom content instead of default hints.
Custom children inherit the footer font treatment (supporting/12px, secondary color).
When omitted, renders default keyboard navigation hints using XDSKbd.`}},composes:["Omit"]};function Z({ref:r,children:s}){return e.jsx("div",{ref:r,className:"xds78zum5 xds6s0dn4 xdsl56j7k xdsmfvnks xds1pzlopt xds9ynric xds141an7d xds1ltkj2j xdsv1l7n4 xds2b8uid",children:s})}Z.displayName="XDSCommandPaletteEmpty";Z.__docgenInfo={description:`Empty state for the command palette list area.

Rendered automatically by XDSCommandPalette in two situations:
- \`emptyBootstrapText\`: no search term and bootstrap() returns nothing
- \`emptySearchText\`: a search query returned no results

Can also be composed manually inside a custom render function.

@example
\`\`\`
<XDSCommandPalette
  emptyBootstrapText={<XDSCommandPaletteEmpty>Start typing to search</XDSCommandPaletteEmpty>}
  emptySearchText={<XDSCommandPaletteEmpty>No results found</XDSCommandPaletteEmpty>}
  searchSource={source}
/>
\`\`\``,methods:[],displayName:"XDSCommandPaletteEmpty",props:{xstyle:{required:!1,tsType:{name:"StyleXStyles"},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:"The message or content to display."}},composes:["Omit"]};function Q(r){const s=r.auxiliaryData;return typeof s?.group=="string"?s.group:void 0}function qe(r){if(!r.some(i=>Q(i)!=null))return r.map(i=>({value:i.id,label:i.label}));const n=[],a=new Map,o=[];for(const i of r){const d=Q(i);d!=null?(a.has(d)||(n.push(d),a.set(d,[])),a.get(d)?.push(i)):o.push(i)}const l=[];for(const i of n)for(const d of a.get(i)??[])l.push({value:d.id,label:d.label});for(const i of o)l.push({value:i.id,label:i.label});return l}function ze({items:r,value:s,renderItem:n}){const a=m=>e.jsx(ce,{value:m.id,children:n?n(m,m.id===s):m.label},m.id);if(!r.some(m=>Q(m)!=null))return e.jsx(e.Fragment,{children:r.map(a)});const l=[],i=new Map,d=[];for(const m of r){const x=Q(m);x!=null?(i.has(x)||(l.push(x),i.set(x,[])),i.get(x)?.push(m)):d.push(m)}return e.jsxs(e.Fragment,{children:[l.map(m=>e.jsx(me,{heading:m,children:(i.get(m)??[]).map(a)},m)),d.map(a)]})}function y({ref:r,isOpen:s,isInline:n,onOpenChange:a,searchSource:o,input:l,footer:i,renderItem:d,emptySearchText:m="No results",emptyBootstrapText:x="Type to search",value:u,onValueChange:p,label:O="Command palette",width:w=640,maxHeight:D=480}){const S=t.useId(),[h,f]=t.useState(""),[V,B]=t.useState(""),[X,P]=t.useState([]),[ue,pe]=t.useTransition(),[he,fe]=t.useOptimistic(h),[v,ne]=t.useOptimistic(X),ge=ue,xe=t.useRef(0),b=u??V,_=t.useCallback(c=>{u===void 0&&B(c),p?.(c)},[u,p]),T=t.useMemo(()=>qe(v),[v]),I=t.useCallback(()=>{f(""),P([]),u===void 0&&B(""),o.cancel?.(),a(!1)},[a,o,u]),R=t.useCallback(c=>{_(c)},[_]),g=je({selectableItems:T,value:b,isOpen:!0,onOpen:()=>{},onClose:()=>{},onSelect:c=>{R(c),I()},listboxId:S}),K=t.useCallback(c=>{o.cancel?.();const j=++xe.current;pe(async()=>{const se=c==="";if(!se&&X.length>0){const J=c.toLowerCase().trim();ne(X.filter(oe=>oe.label.toLowerCase().includes(J)))}const ke=se?o.bootstrap():o.search(c),ae=await Promise.resolve(ke);if(xe.current===j&&(f(c),ne(ae),P(ae),se&&b!=null&&b!=="")){const J=ae.findIndex(oe=>oe.id===b);J>=0&&g.setHighlightedIndex(J)}})},[o,X,pe,b,g,ne]),ye=t.useRef(K);ye.current=K,t.useEffect(()=>{s&&ye.current("")},[s]);const Se=t.useCallback(c=>{if(c.key==="Escape"){c.preventDefault(),I();return}if(c.key==="Enter"){if(c.preventDefault(),g.highlightedIndex>=0&&g.highlightedIndex<T.length){const j=T[g.highlightedIndex];j&&!j.disabled&&(R(j.value),I())}return}c.key!==" "&&g.onKeyDown(c)},[g,I,T,R]),De=t.useMemo(()=>({search:he,setSearch:c=>{fe(c),K(c)},value:b,setValue:_,listId:S,highlightedIndex:g.highlightedIndex,setHighlightedIndex:g.setHighlightedIndex,getItemId:g.getItemId,selectableItems:T,searchResults:v,selectItem:R,onKeyDown:Se,onClose:I,isOpen:s,isBusy:ge}),[he,fe,K,b,_,S,g.highlightedIndex,g.setHighlightedIndex,g.getItemId,T,v,R,Se,I,s,ge]),ve=h===""&&v.length===0,Ie=!ue&&h!==""&&v.length===0;let U;return ve?U=e.jsx(Z,{children:x}):Ie?U=e.jsx(Z,{children:m}):U=e.jsx(ze,{items:v,value:b,renderItem:d}),e.jsx(we,{ref:r,isOpen:s,isInline:n,onOpenChange:c=>{c?a(!0):I()},width:w,maxHeight:D,purpose:"info","aria-label":O,children:e.jsx(ie,{value:De,children:e.jsx(Xe,{defaultHasDividers:!0,header:e.jsx(Te,{hasDivider:!0,padding:0,children:l??e.jsx(ee,{})}),content:e.jsx(Pe,{padding:0,children:e.jsx(de,{children:U})}),footer:e.jsx(Re,{hasDivider:!0,padding:0,children:i??e.jsx(te,{})})})})})}y.displayName="XDSCommandPalette";y.__docgenInfo={description:`Command palette root component.

Uses \`searchSource\` for all search logic — same interface as XDSTypeahead.
For static lists, use \`createStaticSource\` from \`@xds/core/Typeahead\`.

Keyboard navigation is handled by \`useCombobox\` from XDSSelector,
ensuring consistent arrow key, Home/End, Enter, and Escape behavior
across all combobox-pattern components.

Input and footer are rendered by default — only pass them to replace the defaults.

@compositionHint
  - \`input\` slot: XDSCommandPaletteInput (default)
  - \`footer\` slot: XDSCommandPaletteFooter (default)
  - \`renderItem(item, isSelected)\`: custom per-item content (grouping preserved)

@example
\`\`\`
<XDSCommandPalette
  isOpen={isOpen}
  onOpenChange={setIsOpen}
  searchSource={createStaticSource(commands)}
/>
\`\`\``,methods:[],displayName:"XDSCommandPalette",props:{ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDialogElement>",elements:[{name:"HTMLDialogElement"}]},description:""},isOpen:{required:!0,tsType:{name:"boolean"},description:"Whether the command palette is open."},isInline:{required:!1,tsType:{name:"boolean"},description:`Renders command palette content inline without modal behavior.
Suppresses input auto-focus and initial highlighted-item auto-scroll.
For documentation previews and showcases only.
@default false`},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(isOpen: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isOpen"}],return:{name:"void"}}},description:"Called when the command palette visibility changes."},searchSource:{required:!0,tsType:{name:"XDSSearchSource",elements:[{name:"T"}],raw:"XDSSearchSource<T>"},description:"Search source providing items. Implements `search(query)` and `bootstrap()`.\nSame interface as XDSTypeahead's searchSource.\nUse `createStaticSource` for simple static lists."},input:{required:!1,tsType:{name:"ReactNode"},description:`The search input slot.
@default <XDSCommandPaletteInput />`},footer:{required:!1,tsType:{name:"ReactNode"},description:`The footer slot.
@default <XDSCommandPaletteFooter />`},renderItem:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: T, isSelected: boolean) => ReactNode",signature:{arguments:[{type:{name:"T"},name:"item"},{type:{name:"boolean"},name:"isSelected"}],return:{name:"ReactNode"}}},description:"Per-item render function. Receives the item and whether it is currently selected.\nAuto-grouping by `auxiliaryData.group` is preserved.\nWhen omitted, renders each item's `label` text."},emptySearchText:{required:!1,tsType:{name:"ReactNode"},description:`Content shown when a search query returns no results.
@default 'No results'`,defaultValue:{value:"'No results'",computed:!1}},emptyBootstrapText:{required:!1,tsType:{name:"ReactNode"},description:`Content shown when there is no search query and bootstrap() returns nothing.
@default 'Type to search'`,defaultValue:{value:"'Type to search'",computed:!1}},value:{required:!1,tsType:{name:"string"},description:"Controlled selected value (for picker mode)."},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Called when the selected value changes."},label:{required:!1,tsType:{name:"string"},description:`Accessible label for the command palette dialog.
@default 'Command palette'`,defaultValue:{value:"'Command palette'",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:`Width of the command palette dialog.
@default 640`,defaultValue:{value:"640",computed:!1}},maxHeight:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:`Maximum height of the command palette dialog.
@default 480`,defaultValue:{value:"480",computed:!1}}},composes:["Omit"]};const Qe={title:"Core/CommandPalette",component:y,tags:["autodocs"]},H={render:function(){const[s,n]=t.useState(!1),a=t.useMemo(()=>k([{id:"home",label:"Home"},{id:"settings",label:"Settings"},{id:"profile",label:"Profile"},{id:"dashboard",label:"Dashboard"},{id:"help",label:"Help"}]),[]);return e.jsxs(e.Fragment,{children:[e.jsx(C,{label:"Open Command Palette",onClick:()=>n(!0)}),e.jsx(y,{isOpen:s,onOpenChange:n,searchSource:a})]})}},M={render:function(){const[s,n]=t.useState(!1),a=t.useMemo(()=>k([{id:"home",label:"Home",auxiliaryData:{group:"Navigation"}},{id:"settings",label:"Settings",auxiliaryData:{group:"Navigation"}},{id:"profile",label:"Profile",auxiliaryData:{group:"Navigation"}},{id:"new-file",label:"New File",auxiliaryData:{group:"Actions"}},{id:"save",label:"Save",auxiliaryData:{group:"Actions"}},{id:"export",label:"Export",auxiliaryData:{group:"Actions"}}]),[]);return e.jsxs(e.Fragment,{children:[e.jsx(C,{label:"Open Grouped",onClick:()=>n(!0)}),e.jsx(y,{isOpen:s,onOpenChange:n,searchSource:a})]})}},E={render:function(){const[s,n]=t.useState(!1),a=[{id:"dashboard",label:"Go to Dashboard",auxiliaryData:{icon:"menu",group:"Navigation"}},{id:"settings",label:"Open Settings",auxiliaryData:{icon:"wrench",group:"Navigation",shortcut:"⌘,"}},{id:"profile",label:"View Profile",auxiliaryData:{icon:"info",group:"Navigation"}},{id:"dark-mode",label:"Toggle Dark Mode",auxiliaryData:{group:"Actions",keywords:["theme","appearance"]}},{id:"new-file",label:"Create New File",auxiliaryData:{group:"Actions",shortcut:"⌘N"}},{id:"search",label:"Search Files",auxiliaryData:{icon:"search",group:"Actions",shortcut:"⌘P"}}],o=t.useMemo(()=>k(a,{keywords:l=>l.auxiliaryData?.keywords??[]}),[]);return e.jsxs(e.Fragment,{children:[e.jsx(C,{label:"Open Rich Palette",onClick:()=>n(!0)}),e.jsx(y,{isOpen:s,onOpenChange:n,searchSource:o,renderItem:l=>e.jsxs("span",{style:{display:"flex",alignItems:"center",gap:8,flex:1},children:[l.auxiliaryData?.icon&&e.jsx(re,{icon:l.auxiliaryData.icon,size:"sm"}),e.jsx("span",{style:{flex:1},children:l.label}),l.auxiliaryData?.shortcut&&e.jsx("span",{style:{fontSize:12,opacity:.5},children:l.auxiliaryData.shortcut})]})})]})}},q={render:function(){const[s,n]=t.useState(!1),[a,o]=t.useState("light"),l=t.useMemo(()=>k([{id:"light",label:"Light"},{id:"dark",label:"Dark"},{id:"system",label:"System"}]),[]);return e.jsxs(e.Fragment,{children:[e.jsx(C,{label:`Theme: ${a}`,onClick:()=>n(!0)}),e.jsx(y,{isOpen:s,onOpenChange:n,searchSource:l,value:a,onValueChange:i=>{o(i),n(!1)},renderItem:(i,d)=>e.jsxs("span",{style:{display:"flex",alignItems:"center",gap:8,flex:1},children:[e.jsx("span",{style:{flex:1},children:i.label}),d&&e.jsx(re,{icon:"check",size:"sm"})]})})]})}},z={render:function(){const[s,n]=t.useState(!1),a=t.useMemo(()=>{let o=null;return{cancel(){o?.abort()},async search(l){return o?.abort(),o=new AbortController,await new Promise(d=>setTimeout(d,400)),[{id:"readme",label:"README.md"},{id:"package",label:"package.json"},{id:"tsconfig",label:"tsconfig.json"},{id:"index",label:"src/index.ts"},{id:"app",label:"src/App.tsx"}].filter(d=>d.label.toLowerCase().includes(l.toLowerCase()))},bootstrap(){return[]}}},[]);return e.jsxs(e.Fragment,{children:[e.jsx(C,{label:"Open File Search",onClick:()=>n(!0)}),e.jsx(y,{isOpen:s,onOpenChange:n,searchSource:a,input:e.jsx(ee,{placeholder:"Search files..."}),emptyBootstrapText:"Type a filename to search",emptySearchText:"No files found"})]})}},A={render:function(){const[s,n]=t.useState(!1),a=[{id:"home",label:"Home"},{id:"dark-mode",label:"Toggle Dark Mode",auxiliaryData:{aliases:["theme","appearance"]}},{id:"font-size",label:"Change Font Size",auxiliaryData:{aliases:["text","zoom"]}}],o=t.useMemo(()=>k(a,{keywords:l=>l.auxiliaryData?.aliases??[]}),[]);return e.jsxs(e.Fragment,{children:[e.jsx(C,{label:"Open (try 'theme')",onClick:()=>n(!0)}),e.jsx(y,{isOpen:s,onOpenChange:n,searchSource:o})]})}},F={render:function(){const[s,n]=t.useState(!1),a=["Files","Actions","Navigation","Settings","Recent"],o=Array.from({length:50},(i,d)=>({id:`item-${d}`,label:`Item ${d+1}`,auxiliaryData:{group:a[d%a.length]}})),l=t.useMemo(()=>k(o),[]);return e.jsxs(e.Fragment,{children:[e.jsx(C,{label:"Open (50 items)",onClick:()=>n(!0)}),e.jsx(y,{isOpen:s,onOpenChange:n,searchSource:l})]})}},L={render:function(){const[s,n]=t.useState(!1),a=t.useMemo(()=>k([{id:"home",label:"Home"},{id:"settings",label:"Settings"}]),[]);return e.jsxs(e.Fragment,{children:[e.jsx(C,{label:"Open",onClick:()=>n(!0)}),e.jsx(y,{isOpen:s,onOpenChange:n,searchSource:a,footer:e.jsx(te,{children:e.jsx("span",{children:"Pro tip: use ⌘K to open anywhere"})})})]})}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [isOpen, setIsOpen] = useState(false);
    const source = useMemo(() => createStaticSource([{
      id: 'home',
      label: 'Home'
    }, {
      id: 'settings',
      label: 'Settings'
    }, {
      id: 'profile',
      label: 'Profile'
    }, {
      id: 'dashboard',
      label: 'Dashboard'
    }, {
      id: 'help',
      label: 'Help'
    }]), []);
    return <>
        <XDSButton label="Open Command Palette" onClick={() => setIsOpen(true)} />
        <XDSCommandPalette isOpen={isOpen} onOpenChange={setIsOpen} searchSource={source} />
      </>;
  }
}`,...H.parameters?.docs?.source},description:{story:"Simplest case — no input/footer/renderItem needed.",...H.parameters?.docs?.description}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [isOpen, setIsOpen] = useState(false);
    const source = useMemo(() => createStaticSource([{
      id: 'home',
      label: 'Home',
      auxiliaryData: {
        group: 'Navigation'
      }
    }, {
      id: 'settings',
      label: 'Settings',
      auxiliaryData: {
        group: 'Navigation'
      }
    }, {
      id: 'profile',
      label: 'Profile',
      auxiliaryData: {
        group: 'Navigation'
      }
    }, {
      id: 'new-file',
      label: 'New File',
      auxiliaryData: {
        group: 'Actions'
      }
    }, {
      id: 'save',
      label: 'Save',
      auxiliaryData: {
        group: 'Actions'
      }
    }, {
      id: 'export',
      label: 'Export',
      auxiliaryData: {
        group: 'Actions'
      }
    }]), []);
    return <>
        <XDSButton label="Open Grouped" onClick={() => setIsOpen(true)} />
        <XDSCommandPalette isOpen={isOpen} onOpenChange={setIsOpen} searchSource={source} />
      </>;
  }
}`,...M.parameters?.docs?.source},description:{story:"Groups detected automatically from auxiliaryData.group. No custom rendering needed.",...M.parameters?.docs?.description}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [isOpen, setIsOpen] = useState(false);
    const commands: RichCommand[] = [{
      id: 'dashboard',
      label: 'Go to Dashboard',
      auxiliaryData: {
        icon: 'menu',
        group: 'Navigation'
      }
    }, {
      id: 'settings',
      label: 'Open Settings',
      auxiliaryData: {
        icon: 'wrench',
        group: 'Navigation',
        shortcut: '⌘,'
      }
    }, {
      id: 'profile',
      label: 'View Profile',
      auxiliaryData: {
        icon: 'info',
        group: 'Navigation'
      }
    }, {
      id: 'dark-mode',
      label: 'Toggle Dark Mode',
      auxiliaryData: {
        group: 'Actions',
        keywords: ['theme', 'appearance']
      }
    }, {
      id: 'new-file',
      label: 'Create New File',
      auxiliaryData: {
        group: 'Actions',
        shortcut: '⌘N'
      }
    }, {
      id: 'search',
      label: 'Search Files',
      auxiliaryData: {
        icon: 'search',
        group: 'Actions',
        shortcut: '⌘P'
      }
    }];
    const source = useMemo(() => createStaticSource(commands, {
      keywords: item => item.auxiliaryData?.keywords ?? []
    }), []);
    return <>
        <XDSButton label="Open Rich Palette" onClick={() => setIsOpen(true)} />
        <XDSCommandPalette isOpen={isOpen} onOpenChange={setIsOpen} searchSource={source} renderItem={(item: RichCommand) => <span style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        flex: 1
      }}>
              {item.auxiliaryData?.icon && <XDSIcon icon={item.auxiliaryData.icon} size="sm" />}
              <span style={{
          flex: 1
        }}>{item.label}</span>
              {item.auxiliaryData?.shortcut && <span style={{
          fontSize: 12,
          opacity: 0.5
        }}>
                  {item.auxiliaryData.shortcut}
                </span>}
            </span>} />
      </>;
  }
}`,...E.parameters?.docs?.source},description:{story:`Custom item content via renderItem — icons and shortcuts.
Grouping remains automatic via auxiliaryData.group.`,...E.parameters?.docs?.description}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState('light');
    const source = useMemo(() => createStaticSource([{
      id: 'light',
      label: 'Light'
    }, {
      id: 'dark',
      label: 'Dark'
    }, {
      id: 'system',
      label: 'System'
    }]), []);
    return <>
        <XDSButton label={\`Theme: \${theme}\`} onClick={() => setIsOpen(true)} />
        <XDSCommandPalette isOpen={isOpen} onOpenChange={setIsOpen} searchSource={source} value={theme} onValueChange={v => {
        setTheme(v);
        setIsOpen(false);
      }} renderItem={(item, isSelected) => <span style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        flex: 1
      }}>
              <span style={{
          flex: 1
        }}>{item.label}</span>
              {isSelected && <XDSIcon icon="check" size="sm" />}
            </span>} />
      </>;
  }
}`,...q.parameters?.docs?.source},description:{story:"Selection persists across opens. isSelected passed to renderItem.",...q.parameters?.docs?.description}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [isOpen, setIsOpen] = useState(false);
    const source = useMemo<XDSSearchSource>(() => {
      let controller: AbortController | null = null;
      return {
        cancel() {
          controller?.abort();
        },
        async search(query: string) {
          controller?.abort();
          controller = new AbortController();
          await new Promise(r => setTimeout(r, 400));
          const all = [{
            id: 'readme',
            label: 'README.md'
          }, {
            id: 'package',
            label: 'package.json'
          }, {
            id: 'tsconfig',
            label: 'tsconfig.json'
          }, {
            id: 'index',
            label: 'src/index.ts'
          }, {
            id: 'app',
            label: 'src/App.tsx'
          }];
          return all.filter(f => f.label.toLowerCase().includes(query.toLowerCase()));
        },
        bootstrap() {
          return [];
        }
      };
    }, []);
    return <>
        <XDSButton label="Open File Search" onClick={() => setIsOpen(true)} />
        <XDSCommandPalette isOpen={isOpen} onOpenChange={setIsOpen} searchSource={source} input={<XDSCommandPaletteInput placeholder="Search files..." />} emptyBootstrapText="Type a filename to search" emptySearchText="No files found" />
      </>;
  }
}`,...z.parameters?.docs?.source},description:{story:"Server-side search. Spinner shown while pending. Empty state on no results.",...z.parameters?.docs?.description}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [isOpen, setIsOpen] = useState(false);
    const commands: XDSSearchableItem<{
      aliases?: string[];
    }>[] = [{
      id: 'home',
      label: 'Home'
    }, {
      id: 'dark-mode',
      label: 'Toggle Dark Mode',
      auxiliaryData: {
        aliases: ['theme', 'appearance']
      }
    }, {
      id: 'font-size',
      label: 'Change Font Size',
      auxiliaryData: {
        aliases: ['text', 'zoom']
      }
    }];
    const source = useMemo(() => createStaticSource(commands, {
      keywords: item => item.auxiliaryData?.aliases ?? []
    }), []);
    return <>
        <XDSButton label="Open (try 'theme')" onClick={() => setIsOpen(true)} />
        <XDSCommandPalette isOpen={isOpen} onOpenChange={setIsOpen} searchSource={source} />
      </>;
  }
}`,...A.parameters?.docs?.source},description:{story:'Type "theme" or "appearance" to find "Toggle Dark Mode".',...A.parameters?.docs?.description}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [isOpen, setIsOpen] = useState(false);
    const groups = ['Files', 'Actions', 'Navigation', 'Settings', 'Recent'];
    const items = Array.from({
      length: 50
    }, (_, i) => ({
      id: \`item-\${i}\`,
      label: \`Item \${i + 1}\`,
      auxiliaryData: {
        group: groups[i % groups.length]
      }
    }));
    const source = useMemo(() => createStaticSource(items), []);
    return <>
        <XDSButton label="Open (50 items)" onClick={() => setIsOpen(true)} />
        <XDSCommandPalette isOpen={isOpen} onOpenChange={setIsOpen} searchSource={source} />
      </>;
  }
}`,...F.parameters?.docs?.source},description:{story:`50 items across 5 groups. Verifies the list scrolls within the dialog
rather than expanding it past maxHeight.`,...F.parameters?.docs?.description}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [isOpen, setIsOpen] = useState(false);
    const source = useMemo(() => createStaticSource([{
      id: 'home',
      label: 'Home'
    }, {
      id: 'settings',
      label: 'Settings'
    }]), []);
    return <>
        <XDSButton label="Open" onClick={() => setIsOpen(true)} />
        <XDSCommandPalette isOpen={isOpen} onOpenChange={setIsOpen} searchSource={source} footer={<XDSCommandPaletteFooter>
              <span>Pro tip: use ⌘K to open anywhere</span>
            </XDSCommandPaletteFooter>} />
      </>;
  }
}`,...L.parameters?.docs?.source},description:{story:"Replacing the footer with custom content.",...L.parameters?.docs?.description}}};const et=["Default","AutoGrouped","WithRenderItem","Picker","AsyncSearch","WithKeywords","ManyItems","CustomFooter"];export{z as AsyncSearch,M as AutoGrouped,L as CustomFooter,H as Default,F as ManyItems,q as Picker,A as WithKeywords,E as WithRenderItem,et as __namedExportsOrder,Qe as default};
