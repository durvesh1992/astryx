import{at as o,ad as e,ai as N,ar as H,aZ as I,aj as T,aU as R,av as E,r as k}from"./iframe-yRFQ_7VC.js";import{u as $}from"./useListFocus-C2Hg4nex.js";import{u as C,a as A,b as q,F}from"./ChartBarIcon-BUStbx20.js";import{F as X}from"./UserIcon-B3zzc9I3.js";import{F as j}from"./Cog6ToothIcon-FIJug-Ow.js";import{F as G}from"./DocumentTextIcon-zTWH5D0N.js";import{F as P}from"./ShieldCheckIcon-BXWf3Fak.js";import"./preload-helper-Ct5FWWRu.js";const L={root:{k1xSpc:"xds78zum5",kXwgrk:"xdsdt5ytf",kOIVth:"xds1lsbc85",$$css:!0}},V={sm:{k7Eaqz:"xds5w4yej",$$css:!0},md:{k7Eaqz:"xds1jzhcrs",$$css:!0},lg:{k7Eaqz:"xdslm99nl",$$css:!0}};function y({ref:s,children:r,size:a="md",minWidth:i,xstyle:c,className:m,style:t,"data-testid":S}){const l=C()?.closeMenu,{listRef:b,handleKeyDown:d}=$({onEscape:l}),u=o.useMemo(()=>({closeMenu:l??(()=>{}),size:a}),[l,a]),v=i!=null?{...t,minWidth:i}:t;return e.jsx(A,{value:u,children:e.jsx("div",{ref:T(s,b),role:"menu",onKeyDown:d,"data-testid":S,...N(I("nav-heading-menu",{size:a}),H(L.root,V[a],c),m,v),children:r})})}y.displayName="XDSNavHeadingMenu";y.__docgenInfo={description:`Accessible menu container for nav heading popovers.

Provides \`role="menu"\` with arrow-key navigation (Home/End/Escape)
and a size context that flows to child items for consistent padding.
Pass as the \`menu\` prop of XDSSideNavHeading or XDSTopNavHeading.

The parent heading component injects the close callback via context,
so items automatically dismiss the popover on selection.

@example
\`\`\`
<XDSSideNavHeading
  heading="Products"
  menu={
    <XDSNavHeadingMenu size="lg">
      <XDSNavHeadingMenuItem label="Dashboard" href="/dashboard" />
      <XDSNavHeadingMenuItem label="Analytics" href="/analytics" />
    </XDSNavHeadingMenu>
  }
/>
\`\`\``,methods:[],displayName:"XDSNavHeadingMenu",props:{xstyle:{required:!1,tsType:{name:"StyleXStyles"},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:"Menu items (XDSNavHeadingMenuItem, dividers, custom content)."},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:`Size — controls min-width and flows to items for padding.
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},minWidth:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Minimum width override. Takes precedence over size-based defaults."}},composes:["Omit"]};const M={root:{kB7OPa:"xds9f619",k1xSpc:"xds78zum5",kGNEyG:"xds6s0dn4",kOIVth:"xds1txdalj",kzqmXN:"xdsh8yej3",kaIpWk:"xdsh6dtrn",kMv6JI:"xds9ynric",kGuDYH:"xdscr08ib",kMwMTN:"xds1tgivj0",kWkggS:"xdsjbqb8w xds1c52tdz xds1uwx2nv",kQgIW9:"xds1gs6z28",kkrTdU:"xds1ypdohk",k9WMMc:"xdsdpxx8g",kI3sdo:"xds1a2a7pz",kybGjl:"xds1hl2dhg",$$css:!0},disabled:{kSiTet:"xdsbyyjgo",kkrTdU:"xds1h6gzvc",$$css:!0}},W={sm:{k8WAf4:"xdsu0wf1k",kLKAdn:null,kGO01o:null,kg3NbH:"xdsf314gf",kuDDbn:null,kE3dHu:null,kP0aTx:null,kpe85a:null,$$css:!0},md:{k8WAf4:"xdsce4md1",kLKAdn:null,kGO01o:null,kg3NbH:"xdsf314gf",kuDDbn:null,kE3dHu:null,kP0aTx:null,kpe85a:null,$$css:!0},lg:{k8WAf4:"xds8o8v82",kLKAdn:null,kGO01o:null,kg3NbH:"xdsrrkdod",kuDDbn:null,kE3dHu:null,kP0aTx:null,kpe85a:null,$$css:!0}};function n({ref:s,icon:r,label:a,description:i,href:c,onClick:m,isDisabled:t=!1,xstyle:S,className:D,style:l,"data-testid":b}){const d=q(),u=d?.size??"md",v=o.useCallback(()=>{t||(m?.(),d?.closeMenu())},[t,m,d]),w=R(),z=c?w:"div";return e.jsxs(z,{ref:s,role:"menuitem",tabIndex:t?void 0:-1,"aria-disabled":t||void 0,href:c,onClick:v,"data-testid":b,...N(I("nav-heading-menu-item",{size:u}),H(M.root,W[u],t&&M.disabled,S),D,l),children:[r&&E(r,{size:"sm",color:"secondary"}),e.jsxs("span",{className:"xds78zum5 xdsdt5ytf xds98rzlu xdseuugli",children:[typeof a=="string"?e.jsx(k,{type:"body",maxLines:1,children:a}):a,i&&e.jsx(k,{type:"supporting",maxLines:1,children:i})]})]})}n.displayName="XDSNavHeadingMenuItem";n.__docgenInfo={description:`Menu item for nav heading popovers.

Reads size from the parent XDSNavHeadingMenu for consistent padding.
Automatically dismisses the menu on click via context.
Renders as a link when \`href\` is provided.

@example
\`\`\`
<XDSNavHeadingMenu>
  <XDSNavHeadingMenuItem label="Dashboard" href="/dashboard" />
  <XDSNavHeadingMenuItem label="Settings" icon={GearIcon} onClick={open} />
</XDSNavHeadingMenu>
\`\`\``,methods:[],displayName:"XDSNavHeadingMenuItem",props:{ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLElement>",elements:[{name:"HTMLElement"}]},description:""},icon:{required:!1,tsType:{name:"union",raw:"ReactNode | XDSIconType",elements:[{name:"ReactNode"},{name:"ComponentType",elements:[{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"}],raw:"ComponentType<SVGProps<SVGSVGElement>>"}]},description:"Icon to display before the label."},label:{required:!0,tsType:{name:"ReactNode"},description:"Primary label text."},description:{required:!1,tsType:{name:"ReactNode"},description:"Secondary description text displayed below the label."},href:{required:!1,tsType:{name:"string"},description:"URL to navigate to. Renders as an anchor element when provided."},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when the item is selected."},isDisabled:{required:!1,tsType:{name:"boolean"},description:"Whether the item is disabled. @default false",defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};function O({title:s,titleId:r,...a},i){return o.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:i,"aria-labelledby":r},a),s?o.createElement("title",{id:r},s):null,o.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"}))}const U=o.forwardRef(O),ne={title:"Core/NavMenu",component:y,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],description:"Size — controls min-width and flows to items for padding"},minWidth:{control:"number",description:"Minimum width override"}},decorators:[s=>e.jsx("div",{style:{padding:24,maxWidth:300},children:e.jsx(s,{})})]},p={args:{size:"md",children:e.jsxs(e.Fragment,{children:[e.jsx(n,{label:"Dashboard",href:"#"}),e.jsx(n,{label:"Analytics",href:"#"}),e.jsx(n,{label:"Settings",href:"#"})]})}},g={args:{size:"md",children:e.jsxs(e.Fragment,{children:[e.jsx(n,{label:"Profile",icon:X,href:"#"}),e.jsx(n,{label:"Documents",icon:G,href:"#"}),e.jsx(n,{label:"Analytics",icon:F,href:"#"}),e.jsx(n,{label:"Security",icon:P,href:"#"}),e.jsx(n,{label:"Settings",icon:j,href:"#"})]})}},h={args:{size:"lg",children:e.jsxs(e.Fragment,{children:[e.jsx(n,{label:"Profile",description:"Manage your account settings",icon:X,href:"#"}),e.jsx(n,{label:"Settings",description:"Configure application preferences",icon:j,href:"#"}),e.jsx(n,{label:"Sign out",description:"End your current session",icon:U})]})}},f={args:{size:"sm",children:e.jsxs(e.Fragment,{children:[e.jsx(n,{label:"Edit",href:"#"}),e.jsx(n,{label:"Duplicate",href:"#"}),e.jsx(n,{label:"Delete"})]})}},x={args:{size:"md",children:e.jsxs(e.Fragment,{children:[e.jsx(n,{label:"Dashboard",href:"#"}),e.jsx(n,{label:"Analytics",href:"#",isDisabled:!0}),e.jsx(n,{label:"Settings",href:"#"}),e.jsx(n,{label:"Admin",isDisabled:!0})]})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    children: <>
        <XDSNavHeadingMenuItem label="Dashboard" href="#" />
        <XDSNavHeadingMenuItem label="Analytics" href="#" />
        <XDSNavHeadingMenuItem label="Settings" href="#" />
      </>
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    children: <>
        <XDSNavHeadingMenuItem label="Profile" icon={UserIcon} href="#" />
        <XDSNavHeadingMenuItem label="Documents" icon={DocumentTextIcon} href="#" />
        <XDSNavHeadingMenuItem label="Analytics" icon={ChartBarIcon} href="#" />
        <XDSNavHeadingMenuItem label="Security" icon={ShieldCheckIcon} href="#" />
        <XDSNavHeadingMenuItem label="Settings" icon={Cog6ToothIcon} href="#" />
      </>
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    children: <>
        <XDSNavHeadingMenuItem label="Profile" description="Manage your account settings" icon={UserIcon} href="#" />
        <XDSNavHeadingMenuItem label="Settings" description="Configure application preferences" icon={Cog6ToothIcon} href="#" />
        <XDSNavHeadingMenuItem label="Sign out" description="End your current session" icon={ArrowRightStartOnRectangleIcon} />
      </>
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    children: <>
        <XDSNavHeadingMenuItem label="Edit" href="#" />
        <XDSNavHeadingMenuItem label="Duplicate" href="#" />
        <XDSNavHeadingMenuItem label="Delete" />
      </>
  }
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md',
    children: <>
        <XDSNavHeadingMenuItem label="Dashboard" href="#" />
        <XDSNavHeadingMenuItem label="Analytics" href="#" isDisabled />
        <XDSNavHeadingMenuItem label="Settings" href="#" />
        <XDSNavHeadingMenuItem label="Admin" isDisabled />
      </>
  }
}`,...x.parameters?.docs?.source}}};const ae=["Default","WithIcons","WithDescriptions","SmallSize","DisabledItems"];export{p as Default,x as DisabledItems,f as SmallSize,h as WithDescriptions,g as WithIcons,ae as __namedExportsOrder,ne as default};
