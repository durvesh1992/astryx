import{aV as w,ad as g,a6 as y}from"./iframe-yRFQ_7VC.js";import{X as M}from"./XDSDropdownMenu-DeTeBdvZ.js";function t({items:o,label:e="More options",variant:a="ghost",size:r,icon:i,isDisabled:s=!1,isMenuOpen:d,onOpenChange:u,hasAutoFocus:l,xstyle:m,className:n,style:p,"data-testid":c,ref:f}){const h=w(r,"md"),D=y("moreHorizontal");return g.jsx(M,{className:n?`xds-more-menu ${n}`:"xds-more-menu",xstyle:m,style:p,isMenuOpen:d,onOpenChange:u,button:{label:e,icon:i??D,variant:a,size:h,isDisabled:s,tooltip:e,isIconOnly:!0,ref:f},items:o,hasChevron:!1,hasAutoFocus:l,"data-testid":c})}t.displayName="XDSMoreMenu";t.__docgenInfo={description:`Overflow menu with a three-dot icon trigger.

A convenience wrapper around XDSDropdownMenu with icon-only button defaults.

@example
\`\`\`
<XDSMoreMenu
  items={[
    { label: 'Edit', onClick: handleEdit },
    { label: 'Delete', onClick: handleDelete },
  ]}
/>
\`\`\``,methods:[],displayName:"XDSMoreMenu",props:{ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},description:"Ref forwarded to the trigger button"},items:{required:!0,tsType:{name:"Array",elements:[{name:"union",raw:`| XDSDropdownMenuItemData
| XDSDropdownMenuDivider
| XDSDropdownMenuSection`,elements:[{name:"XDSDropdownMenuItemData"},{name:"XDSDropdownMenuDivider"},{name:"XDSDropdownMenuSection"}]}],raw:"XDSDropdownMenuOption[]"},description:"Menu items \\u2014 data array of actions, dividers, and sections.\nSame type as XDSDropdownMenu's `items` prop."},label:{required:!1,tsType:{name:"string"},description:`Accessible label for the trigger button.
Always used as aria-label (the button is always icon-only).
@default 'More options'`,defaultValue:{value:"'More options'",computed:!1}},variant:{required:!1,tsType:{name:"XDSButtonVariantMap"},description:`Visual style variant of the trigger button.
@default 'ghost'`,defaultValue:{value:"'ghost'",computed:!1}},size:{required:!1,tsType:{name:"unknown"},description:`Size of the trigger button.
@default 'md'`},icon:{required:!1,tsType:{name:"ReactNode"},description:`Override the default three-dot icon.
@default Three horizontal dots from the icon registry ('moreHorizontal')`},isDisabled:{required:!1,tsType:{name:"boolean"},description:`Whether the menu trigger is disabled.
@default false`,defaultValue:{value:"false",computed:!1}},isMenuOpen:{required:!1,tsType:{name:"boolean"},description:"Controlled open state for the menu."},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(isOpen: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isOpen"}],return:{name:"void"}}},description:"Callback fired when the menu visibility changes."},hasAutoFocus:{required:!1,tsType:{name:"boolean"},description:"Whether to auto-focus the first menu item when the menu opens.\nSet to `false` for inline showcases or documentation previews.\n@default true"},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing frameworks."}},composes:["Pick"]};export{t as X};
