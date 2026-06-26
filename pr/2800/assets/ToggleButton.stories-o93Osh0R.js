import{at as o,ad as e,ai as oe,ar as ne,aZ as W,X as te,m as l}from"./iframe-yRFQ_7VC.js";import{b as U,F as E,a as re}from"./StarIcon-CtDEOriZ.js";import{F as ie}from"./HeartIcon-C6VDM5ia.js";import{F as L}from"./BellIcon-BTy9GmgZ.js";import{F as h,a as $,b as Z}from"./UnderlineIcon-DCt4Fon3.js";import{F as le}from"./ListBulletIcon-DLFFDJFy.js";import{F as ae}from"./Squares2X2Icon-CYQinxmb.js";import"./preload-helper-Ct5FWWRu.js";const G=o.createContext(null);G.displayName="XDSToggleButtonGroupContext";function ce(){return o.use(G)}const N={group:{k1xSpc:"xds3nfvp2",kGNEyG:"xds6s0dn4",kOIVth:"xdszye2dw",$$css:!0},vertical:{kXwgrk:"xdsdt5ytf",kGNEyG:"xds1qjc9v5",$$css:!0}};function R(n){const{children:s,label:r,orientation:t="horizontal",size:a,isDisabled:d=!1,xstyle:O,"data-testid":b}=n,f=n.type==="multiple",S=o.useMemo(()=>{if(f)return new Set(n.value);const g=n.value;return g!=null?new Set([g]):new Set},[f,n.value]),I=o.useCallback(g=>{if(f){const u=n.value,y=n.onChange;u.includes(g)?y(u.filter(M=>M!==g)):y([...u,g])}else{const u=n.value,y=n.onChange;y(u===g?null:g)}},[f,n.value,n.onChange]),x=o.useMemo(()=>({selectedValues:S,toggle:I,size:a,isDisabled:d}),[S,I,a,d]);return e.jsx(G,{value:x,children:e.jsx("div",{role:"group","aria-label":r,"data-testid":b,...oe(W("toggle-button-group"),ne(N.group,t==="vertical"&&N.vertical,O)),children:s})})}R.displayName="XDSToggleButtonGroup";R.__docgenInfo={description:`Groups toggle buttons for exclusive (single) or multi-select behavior.

Uses a discriminated union on \`type\` for type-safe value/onChange:
- \`'single'\` (default): \`value: string | null\`, click active deselects
- \`'multiple'\`: \`value: string[]\`, toggles individual items

@example
\`\`\`
const [view, setView] = useState<string | null>('grid');
<XDSToggleButtonGroup value={view} onChange={setView} label="View mode">
  <XDSToggleButton value="list" label="List" icon={<ListIcon />} />
  <XDSToggleButton value="grid" label="Grid" icon={<GridIcon />} />
</XDSToggleButtonGroup>
\`\`\``,methods:[],displayName:"XDSToggleButtonGroup"};const de={background:{kWkggS:"xdsi89dp7",$$css:!0}};function i({ref:n,label:s,isPressed:r,onPressedChange:t,pressedChangeAction:a,size:d,isDisabled:O=!1,isLoading:b=!1,icon:f,isIconOnly:S=!1,pressedIcon:I,children:x,tooltip:g,value:u,xstyle:y,className:M,style:J,...K}){const m=ce(),p=m&&u!=null?m.selectedValues.has(u):r??!1,Q=d??m?.size??"md",F=m?.isDisabled??O,Y=p&&I?I:f,ee=o.useCallback(()=>{if(!(F||b)){if(m&&u!=null)m.toggle(u);else if(t){const q=!p;t(q),a&&a(q)}}},[F,b,m,u,t,a,p]),se=x!=null?e.jsxs("span",{className:"xds3nfvp2 xdsdt5ytf xds6s0dn4 xdsl56j7k",children:[e.jsx("span",{...{0:{},1:{className:"xds2mo6ok"}}[!!p<<0],children:x}),e.jsx("span",{className:"xds1lliihq xds2mo6ok xdsqtp20y xdsb3r6kr xdslshs6z xds47corl","aria-hidden":"true",children:x})]}):S?void 0:e.jsxs("span",{className:"xds3nfvp2 xdsdt5ytf xds6s0dn4 xdsl56j7k",children:[e.jsx("span",{...{0:{},1:{className:"xds2mo6ok"}}[!!p<<0],children:s}),e.jsx("span",{className:"xds1lliihq xds2mo6ok xdsqtp20y xdsb3r6kr xdslshs6z xds47corl","aria-hidden":"true",children:s})]});return e.jsx(te,{ref:n,label:s,variant:"ghost",size:Q,isDisabled:F,isLoading:b,isIconOnly:S,"aria-pressed":p,icon:Y,tooltip:g,...W("toggle-button",{isPressed:p?"true":"false"}),xstyle:[p?de.background:void 0,y],style:J,onClick:ee,...K,children:se})}i.displayName="XDSToggleButton";i.__docgenInfo={description:`A button that toggles between pressed and unpressed states.
Thin wrapper over XDSButton — adds controlled toggle pattern,
icon swap, and font weight emphasis.

Use for toolbar actions, view mode switches, and formatting controls.
For on/off settings, use XDSSwitch instead.

Works standalone (with \`isPressed\`/\`onPressedChange\`) or inside
XDSToggleButtonGroup (which controls selection via \`value\`).

@example
\`\`\`
const [isBold, setIsBold] = useState(false);
<XDSToggleButton
  label="Bold"
  icon={<BoldIcon />}
  isPressed={isBold}
  onPressedChange={setIsBold}
/>
\`\`\``,methods:[],displayName:"XDSToggleButton",props:{xstyle:{required:!1,tsType:{name:"StyleXStyles"},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},description:""},label:{required:!0,tsType:{name:"string"},description:`Accessible label for the button (required).
Used as visible text, or as aria-label for icon-only buttons.`},isPressed:{required:!1,tsType:{name:"boolean"},description:`Whether the button is currently pressed/active.
When used inside XDSToggleButtonGroup, this is controlled by the group
and this prop is ignored.`},onPressedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(isPressed: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isPressed"}],return:{name:"void"}}},description:`Called when the pressed state should change.
When used inside XDSToggleButtonGroup, this is handled by the group
and this prop is ignored.`},pressedChangeAction:{required:!1,tsType:{name:"signature",type:"function",raw:"(isPressed: boolean) => Promise<void>",signature:{arguments:[{type:{name:"boolean"},name:"isPressed"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:`Async action handler for API-backed toggles.
The button shows a loading spinner while the promise is pending.

@example
\`\`\`
<XDSToggleButton
  label="Favorite"
  isPressed={isFavorited}
  onPressedChange={setIsFavorited}
  pressedChangeAction={async (newState) => {
    await api.setFavorite(itemId, newState);
  }}
/>
\`\`\``},size:{required:!1,tsType:{name:"unknown"},description:`The size of the toggle button.
When used inside XDSToggleButtonGroup, defaults to the group's size.
@default 'md'`},isDisabled:{required:!1,tsType:{name:"boolean"},description:`Whether the button is disabled.
When used inside XDSToggleButtonGroup, the group's isDisabled overrides this.
@default false`,defaultValue:{value:"false",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:`Whether the button is in a loading state.
@default false`,defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"ReactNode"},description:"Icon element rendered before the label text."},isIconOnly:{required:!1,tsType:{name:"boolean"},description:"When true, renders as a square icon-only button with `label` as aria-label\nand an automatic tooltip from the label.\n@default false",defaultValue:{value:"false",computed:!1}},pressedIcon:{required:!1,tsType:{name:"ReactNode"},description:"Icon element to render when the button is pressed.\nUse to swap between outline (unpressed) and filled (pressed) icon styles.\nFalls back to `icon` if not provided.\n\nTo color the pressed icon, pass an already-colored element:\n@example\n```\npressedIcon={<StarIconSolid style={{color: 'var(--color-icon-yellow)'}} />}\n```"},children:{required:!1,tsType:{name:"ReactNode"},description:"Optional visible content. When provided, rendered instead of `label`\nas the visible text."},tooltip:{required:!1,tsType:{name:"string"},description:`Tooltip text shown on hover.
Passed through to XDSButton.`},value:{required:!1,tsType:{name:"string"},description:`Value identifier when used inside XDSToggleButtonGroup.
Required when used in a group.`}},composes:["Omit"]};function ue({title:n,titleId:s,...r},t){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":s},r),n?o.createElement("title",{id:s},n):null,o.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.143 17.082a24.248 24.248 0 0 0 3.844.148m-3.844-.148a23.856 23.856 0 0 1-5.455-1.31 8.964 8.964 0 0 0 2.3-5.542m3.155 6.852a3 3 0 0 0 5.667 1.97m1.965-2.277L21 21m-4.225-4.225a23.81 23.81 0 0 0 3.536-1.003A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6.53 6.53m10.245 10.245L6.53 6.53M3 3l3.53 3.53"}))}const ge=o.forwardRef(ue);function pe({title:n,titleId:s,...r},t){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":s},r),n?o.createElement("title",{id:s},n):null,o.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"}))}const _=o.forwardRef(pe);function me({title:n,titleId:s,...r},t){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":s},r),n?o.createElement("title",{id:s},n):null,o.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"}))}const A=o.forwardRef(me);function he({title:n,titleId:s,...r},t){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":s},r),n?o.createElement("title",{id:s},n):null,o.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 12a8.912 8.912 0 0 1-.318-.079c-1.585-.424-2.904-1.247-3.76-2.236-.873-1.009-1.265-2.19-.968-3.301.59-2.2 3.663-3.29 6.863-2.432A8.186 8.186 0 0 1 16.5 5.21M6.42 17.81c.857.99 2.176 1.812 3.761 2.237 3.2.858 6.274-.23 6.863-2.431.233-.868.044-1.779-.465-2.617M3.75 12h16.5"}))}const V=o.forwardRef(he);function fe({title:n,titleId:s,...r},t){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":s},r),n?o.createElement("title",{id:s},n):null,o.createElement("path",{fillRule:"evenodd",d:"M5.246 3.744a.75.75 0 0 1 .75-.75h7.125a4.875 4.875 0 0 1 3.346 8.422 5.25 5.25 0 0 1-2.97 9.58h-7.5a.75.75 0 0 1-.75-.75V3.744Zm7.125 6.75a2.625 2.625 0 0 0 0-5.25H8.246v5.25h4.125Zm-4.125 2.251v6h4.5a3 3 0 0 0 0-6h-4.5Z",clipRule:"evenodd"}))}const ye=o.forwardRef(fe);function be({title:n,titleId:s,...r},t){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":s},r),n?o.createElement("title",{id:s},n):null,o.createElement("path",{fillRule:"evenodd",d:"M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z",clipRule:"evenodd"}))}const H=o.forwardRef(be);function Se({title:n,titleId:s,...r},t){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":s},r),n?o.createElement("title",{id:s},n):null,o.createElement("path",{fillRule:"evenodd",d:"M10.497 3.744a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-3.275l-5.357 15.002h2.632a.75.75 0 1 1 0 1.5h-7.5a.75.75 0 1 1 0-1.5h3.275l5.357-15.002h-2.632a.75.75 0 0 1-.75-.75Z",clipRule:"evenodd"}))}const Ie=o.forwardRef(Se);function xe({title:n,titleId:s,...r},t){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":s},r),n?o.createElement("title",{id:s},n):null,o.createElement("path",{fillRule:"evenodd",d:"M5.995 2.994a.75.75 0 0 1 .75.75v7.5a5.25 5.25 0 1 0 10.5 0v-7.5a.75.75 0 0 1 1.5 0v7.5a6.75 6.75 0 1 1-13.5 0v-7.5a.75.75 0 0 1 .75-.75Zm-3 17.252a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5h-16.5a.75.75 0 0 1-.75-.75Z",clipRule:"evenodd"}))}const ve=o.forwardRef(xe),c={width:16,height:16},ze={title:"Core/ToggleButton",component:i,tags:["autodocs"],argTypes:{label:{control:"text"},isPressed:{control:"boolean"},size:{control:"select",options:["sm","md","lg"]},isDisabled:{control:"boolean"},isLoading:{control:"boolean"}}},v={render:function(){const[s,r]=o.useState(!1);return e.jsx(i,{label:"Bold",icon:e.jsx(h,{style:c}),isPressed:s,onPressedChange:r,isIconOnly:!0})}},w={render:function(){const[s,r]=o.useState(!1),[t,a]=o.useState(!0);return e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(i,{label:"Favorite",icon:e.jsx(E,{style:c}),pressedIcon:e.jsx(U,{style:c}),isPressed:s,onPressedChange:r,isIconOnly:!0}),e.jsx(i,{label:"Bookmark",icon:e.jsx(_,{style:c}),pressedIcon:e.jsx(H,{style:c}),isPressed:t,onPressedChange:a,isIconOnly:!0})]})}},k={render:function(){const[s,r]=o.useState(!1);return e.jsx(i,{label:"Active",isPressed:s,onPressedChange:r,children:"Active"})}},P={args:{label:"Disabled toggle",isPressed:!1,isDisabled:!0,icon:e.jsx(h,{style:c})}},B={args:{label:"Loading toggle",isPressed:!0,isLoading:!0,icon:e.jsx(E,{style:c})}},j={render:function(){const[s,r]=o.useState({}),t=a=>r(d=>({...d,[a]:!d[a]}));return e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center"},children:[e.jsx(i,{label:"Small",size:"sm",icon:e.jsx(h,{style:c}),isPressed:!!s.sm,onPressedChange:()=>t("sm"),isIconOnly:!0}),e.jsx(i,{label:"Medium",size:"md",icon:e.jsx(h,{style:c}),isPressed:!!s.md,onPressedChange:()=>t("md"),isIconOnly:!0}),e.jsx(i,{label:"Large",size:"lg",icon:e.jsx(h,{style:{width:20,height:20}}),isPressed:!!s.lg,onPressedChange:()=>t("lg"),isIconOnly:!0})]})}},D={render:function(){const[s,r]=o.useState("list");return e.jsxs(R,{value:s,onChange:r,label:"View mode",children:[e.jsx(i,{value:"list",label:"List view",icon:e.jsx(le,{style:c}),isIconOnly:!0}),e.jsx(i,{value:"grid",label:"Grid view",icon:e.jsx(ae,{style:c}),isIconOnly:!0})]})}},T={render:function(){const[s,r]=o.useState([]);return e.jsxs(R,{type:"multiple",value:s,onChange:r,label:"Text formatting",children:[e.jsx(i,{value:"bold",label:"Bold",icon:e.jsx(h,{style:c}),isIconOnly:!0}),e.jsx(i,{value:"italic",label:"Italic",icon:e.jsx($,{style:c}),isIconOnly:!0}),e.jsx(i,{value:"underline",label:"Underline",icon:e.jsx(Z,{style:c}),isIconOnly:!0})]})}},X={render:function(){const[s,r]=o.useState(!1);return e.jsx(i,{label:s?"Unmute notifications":"Mute notifications",icon:e.jsx(L,{style:c}),pressedIcon:e.jsx(ge,{style:c}),isPressed:s,onPressedChange:r,isIconOnly:!0})}},z={render:function(){const[s,r]=o.useState({bold:!0,italic:!1,underline:!0,strikethrough:!1,link:!1}),t=a=>r(d=>({...d,[a]:!d[a]}));return e.jsxs("div",{style:{display:"flex",gap:4},children:[e.jsx(i,{label:"Bold",icon:e.jsx(l,{icon:h,size:"sm",color:"secondary"}),pressedIcon:e.jsx(l,{icon:ye,size:"sm",color:"accent"}),isPressed:s.bold,onPressedChange:()=>t("bold"),isIconOnly:!0}),e.jsx(i,{label:"Italic",icon:e.jsx(l,{icon:$,size:"sm",color:"secondary"}),pressedIcon:e.jsx(l,{icon:Ie,size:"sm",color:"accent"}),isPressed:s.italic,onPressedChange:()=>t("italic"),isIconOnly:!0}),e.jsx(i,{label:"Underline",icon:e.jsx(l,{icon:Z,size:"sm",color:"secondary"}),pressedIcon:e.jsx(l,{icon:ve,size:"sm",color:"accent"}),isPressed:s.underline,onPressedChange:()=>t("underline"),isIconOnly:!0}),e.jsx(i,{label:"Strikethrough",icon:e.jsx(l,{icon:V,size:"sm",color:"secondary"}),pressedIcon:e.jsx(l,{icon:V,size:"sm",color:"accent"}),isPressed:s.strikethrough,onPressedChange:()=>t("strikethrough"),isIconOnly:!0}),e.jsx(i,{label:"Link",icon:e.jsx(l,{icon:A,size:"sm",color:"secondary"}),pressedIcon:e.jsx(l,{icon:A,size:"sm",color:"success"}),isPressed:s.link,onPressedChange:()=>t("link"),isIconOnly:!0})]})}},C={render:function(){const[s,r]=o.useState({star:!1,heart:!1,bookmark:!0,bell:!1}),t=a=>r(d=>({...d,[a]:!d[a]}));return e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(i,{label:"Star",icon:e.jsx(l,{icon:E,size:"sm",color:"secondary"}),pressedIcon:e.jsx(l,{icon:U,size:"sm",color:"yellow"}),isPressed:s.star,onPressedChange:()=>t("star"),isIconOnly:!0}),e.jsx(i,{label:"Like",icon:e.jsx(l,{icon:ie,size:"sm",color:"secondary"}),pressedIcon:e.jsx(l,{icon:re,size:"sm",color:"red"}),isPressed:s.heart,onPressedChange:()=>t("heart"),isIconOnly:!0}),e.jsx(i,{label:"Save",icon:e.jsx(l,{icon:_,size:"sm",color:"secondary"}),pressedIcon:e.jsx(l,{icon:H,size:"sm",color:"blue"}),isPressed:s.bookmark,onPressedChange:()=>t("bookmark"),isIconOnly:!0}),e.jsx(i,{label:"Follow",icon:e.jsx(l,{icon:L,size:"sm",color:"secondary"}),pressedIcon:e.jsx(l,{icon:L,size:"sm",color:"accent"}),isPressed:s.bell,onPressedChange:()=>t("bell"),isIconOnly:!0})]})}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [isPressed, setIsPressed] = useState(false);
    return <XDSToggleButton label="Bold" icon={<BoldIcon style={iconSize} />} isPressed={isPressed} onPressedChange={setIsPressed} isIconOnly />;
  }
}`,...v.parameters?.docs?.source},description:{story:"Interactive standalone toggle — click to toggle.",...v.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [isFavorited, setIsFavorited] = useState(false);
    const [isBookmarked, setIsBookmarked] = useState(true);
    return <div style={{
      display: 'flex',
      gap: 8
    }}>
        <XDSToggleButton label="Favorite" icon={<StarIcon style={iconSize} />} pressedIcon={<StarIconSolid style={iconSize} />} isPressed={isFavorited} onPressedChange={setIsFavorited} isIconOnly />
        <XDSToggleButton label="Bookmark" icon={<BookmarkIcon style={iconSize} />} pressedIcon={<BookmarkIconSolid style={iconSize} />} isPressed={isBookmarked} onPressedChange={setIsBookmarked} isIconOnly />
      </div>;
  }
}`,...w.parameters?.docs?.source},description:{story:"Icon-only toggles with icon swap.",...w.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [isActive, setIsActive] = useState(false);
    return <XDSToggleButton label="Active" isPressed={isActive} onPressedChange={setIsActive}>
        Active
      </XDSToggleButton>;
  }
}`,...k.parameters?.docs?.source},description:{story:"Toggle with visible label text — shows font weight shift on press.",...k.parameters?.docs?.description}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled toggle',
    isPressed: false,
    isDisabled: true,
    icon: <BoldIcon style={iconSize} />
  }
}`,...P.parameters?.docs?.source},description:{story:"Disabled state.",...P.parameters?.docs?.description}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Loading toggle',
    isPressed: true,
    isLoading: true,
    icon: <StarIcon style={iconSize} />
  }
}`,...B.parameters?.docs?.source},description:{story:"Loading state.",...B.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [pressed, setPressed] = useState<Record<string, boolean>>({});
    const toggle = (key: string) => setPressed(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
    return <div style={{
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }}>
        <XDSToggleButton label="Small" size="sm" icon={<BoldIcon style={iconSize} />} isPressed={!!pressed.sm} onPressedChange={() => toggle('sm')} isIconOnly />
        <XDSToggleButton label="Medium" size="md" icon={<BoldIcon style={iconSize} />} isPressed={!!pressed.md} onPressedChange={() => toggle('md')} isIconOnly />
        <XDSToggleButton label="Large" size="lg" icon={<BoldIcon style={{
        width: 20,
        height: 20
      }} />} isPressed={!!pressed.lg} onPressedChange={() => toggle('lg')} isIconOnly />
      </div>;
  }
}`,...j.parameters?.docs?.source},description:{story:"All sizes side by side.",...j.parameters?.docs?.description}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [view, setView] = useState<string | null>('list');
    return <XDSToggleButtonGroup value={view} onChange={setView} label="View mode">
        <XDSToggleButton value="list" label="List view" icon={<ListBulletIcon style={iconSize} />} isIconOnly />
        <XDSToggleButton value="grid" label="Grid view" icon={<Squares2X2Icon style={iconSize} />} isIconOnly />
      </XDSToggleButtonGroup>;
  }
}`,...D.parameters?.docs?.source},description:{story:"Single-select group — view mode switcher. Click active to deselect.",...D.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [formats, setFormats] = useState<string[]>([]);
    return <XDSToggleButtonGroup type="multiple" value={formats} onChange={setFormats} label="Text formatting">
        <XDSToggleButton value="bold" label="Bold" icon={<BoldIcon style={iconSize} />} isIconOnly />
        <XDSToggleButton value="italic" label="Italic" icon={<ItalicIcon style={iconSize} />} isIconOnly />
        <XDSToggleButton value="underline" label="Underline" icon={<UnderlineIcon style={iconSize} />} isIconOnly />
      </XDSToggleButtonGroup>;
  }
}`,...T.parameters?.docs?.source},description:{story:"Multi-select group — text formatting toolbar.",...T.parameters?.docs?.description}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [isMuted, setIsMuted] = useState(false);
    return <XDSToggleButton label={isMuted ? 'Unmute notifications' : 'Mute notifications'} icon={<BellIcon style={iconSize} />} pressedIcon={<BellSlashIcon style={iconSize} />} isPressed={isMuted} onPressedChange={setIsMuted} isIconOnly />;
  }
}`,...X.parameters?.docs?.source},description:{story:"Notification toggle — icon swap between bell and bell-slash.",...X.parameters?.docs?.description}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [pressed, setPressed] = useState<Record<string, boolean>>({
      bold: true,
      italic: false,
      underline: true,
      strikethrough: false,
      link: false
    });
    const toggle = (key: string) => setPressed(p => ({
      ...p,
      [key]: !p[key]
    }));
    return <div style={{
      display: 'flex',
      gap: 4
    }}>
        <XDSToggleButton label="Bold" icon={<XDSIcon icon={BoldIcon} size="sm" color="secondary" />} pressedIcon={<XDSIcon icon={BoldIconSolid} size="sm" color="accent" />} isPressed={pressed.bold} onPressedChange={() => toggle('bold')} isIconOnly />
        <XDSToggleButton label="Italic" icon={<XDSIcon icon={ItalicIcon} size="sm" color="secondary" />} pressedIcon={<XDSIcon icon={ItalicIconSolid} size="sm" color="accent" />} isPressed={pressed.italic} onPressedChange={() => toggle('italic')} isIconOnly />
        <XDSToggleButton label="Underline" icon={<XDSIcon icon={UnderlineIcon} size="sm" color="secondary" />} pressedIcon={<XDSIcon icon={UnderlineIconSolid} size="sm" color="accent" />} isPressed={pressed.underline} onPressedChange={() => toggle('underline')} isIconOnly />
        <XDSToggleButton label="Strikethrough" icon={<XDSIcon icon={StrikethroughIcon} size="sm" color="secondary" />} pressedIcon={<XDSIcon icon={StrikethroughIcon} size="sm" color="accent" />} isPressed={pressed.strikethrough} onPressedChange={() => toggle('strikethrough')} isIconOnly />
        <XDSToggleButton label="Link" icon={<XDSIcon icon={LinkIcon} size="sm" color="secondary" />} pressedIcon={<XDSIcon icon={LinkIcon} size="sm" color="success" />} isPressed={pressed.link} onPressedChange={() => toggle('link')} isIconOnly />
      </div>;
  }
}`,...z.parameters?.docs?.source},description:{story:`Formatting toolbar with colored icons — icon shifts to accent color when pressed.
Uses outline → solid icon swap + XDSIcon color prop to reinforce state.`,...z.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [pressed, setPressed] = useState<Record<string, boolean>>({
      star: false,
      heart: false,
      bookmark: true,
      bell: false
    });
    const toggle = (key: string) => setPressed(p => ({
      ...p,
      [key]: !p[key]
    }));
    return <div style={{
      display: 'flex',
      gap: 8
    }}>
        <XDSToggleButton label="Star" icon={<XDSIcon icon={StarIcon} size="sm" color="secondary" />} pressedIcon={<XDSIcon icon={StarIconSolid} size="sm" color="yellow" />} isPressed={pressed.star} onPressedChange={() => toggle('star')} isIconOnly />
        <XDSToggleButton label="Like" icon={<XDSIcon icon={HeartIcon} size="sm" color="secondary" />} pressedIcon={<XDSIcon icon={HeartIconSolid} size="sm" color="red" />} isPressed={pressed.heart} onPressedChange={() => toggle('heart')} isIconOnly />
        <XDSToggleButton label="Save" icon={<XDSIcon icon={BookmarkIcon} size="sm" color="secondary" />} pressedIcon={<XDSIcon icon={BookmarkIconSolid} size="sm" color="blue" />} isPressed={pressed.bookmark} onPressedChange={() => toggle('bookmark')} isIconOnly />
        <XDSToggleButton label="Follow" icon={<XDSIcon icon={BellIcon} size="sm" color="secondary" />} pressedIcon={<XDSIcon icon={BellIcon} size="sm" color="accent" />} isPressed={pressed.bell} onPressedChange={() => toggle('bell')} isIconOnly />
      </div>;
  }
}`,...C.parameters?.docs?.source},description:{story:`Reaction buttons — semantic icon colors (yellow star, red heart, blue bookmark).
Shows icon swap (outline → solid) paired with color to reinforce the pressed state.`,...C.parameters?.docs?.description}}};const Ce=["Standalone","IconSwap","WithLabel","Disabled","Loading","Sizes","GroupSingle","GroupMultiple","NotificationToggle","ColoredIconToolbar","ColoredIconReactions"];export{C as ColoredIconReactions,z as ColoredIconToolbar,P as Disabled,T as GroupMultiple,D as GroupSingle,w as IconSwap,B as Loading,X as NotificationToggle,j as Sizes,v as Standalone,k as WithLabel,Ce as __namedExportsOrder,ze as default};
