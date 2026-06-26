import{at as s,aT as ee,ad as e,ai as oe,ar as ne,aZ as te,af as se,F as q}from"./iframe-yRFQ_7VC.js";import{r as le,X as ie,a as i}from"./renderXDSDropdownItems-CPOL76aE.js";import{u as re}from"./useListFocus-C2Hg4nex.js";import{X as N}from"./XDSDivider-CD2fc5JP.js";import{F as w}from"./PencilIcon-GJY0QtnV.js";import{F as z}from"./DocumentDuplicateIcon-kW_LbK2a.js";import{F as y}from"./TrashIcon-DrwV1FEw.js";import{F as T}from"./ShareIcon-bWFHrdZW.js";import{F as $,a as O}from"./ScissorsIcon-1G5U6IjF.js";import{F as ce}from"./ArrowDownTrayIcon-o6t8q26T.js";import"./preload-helper-Ct5FWWRu.js";import"./XDSItem-CTSSy95c.js";import"./computeTargetAndRel-BlG0ENK0.js";const j={menu:{kB7OPa:"xds9f619",k1xSpc:"xds78zum5",kXwgrk:"xdsdt5ytf",kOIVth:"xds1lsbc85",kskxy:"xdsuyqlj2",kORKVm:"xds1odjw0f","--_dropdown-menu-radius":"xds1fcsqxe","--_dropdown-menu-padding":"xdsgory14",kmVPX3:"xds9epnlk",kaIpWk:"xds1n97fys",kWkggS:"xds1prclbq",kGVxlE:"xds1i5ehqx",kSiTet:"xds1hc1fzr",k1ekBW:"xds19991ni",kIyJzY:"xdsuedmi6",kAMwcw:"xdslr8y92",$$css:!0},popover:{k7Eaqz:"xds5w4yej",$$css:!0},popoverCustomWidth:n=>[{k7Eaqz:(typeof n=="number"?`${n}px`:n)!=null?"xdskj4a21":typeof n=="number"?`${n}px`:n,$$css:!0},{"--x-minWidth":(l=>typeof l=="number"?l+"px":l??void 0)(typeof n=="number"?`${n}px`:n)}]};function o({children:n,menuWidth:l,size:M="md",hasAutoFocus:X=!0,isDisabled:I=!1,onOpenChange:d,ref:A,className:V,style:_,xstyle:B,"data-testid":K,...r}){const L=("items"in r?r.items:void 0)??[],J="menuContent"in r?r.menuContent:void 0,Y=s.useId(),S=s.useRef({x:0,y:0}),[R,E]=s.useState(!1),c=ee({mode:"fixed",onHide:s.useCallback(()=>{E(!1),d?.(!1)},[d]),onShow:s.useCallback(()=>{E(!0),d?.(!0)},[d]),lightDismiss:!1}),a=s.useCallback(()=>{c.hide()},[c]),{listRef:v,handleKeyDown:P,focusFirst:F}=re({itemSelector:'[role="menuitem"]:not([aria-disabled="true"])',wrap:!1,onEscape:a});s.useEffect(()=>{if(!R)return;const t=u=>{const W=v.current;W&&!W.contains(u.target)&&a()};return document.addEventListener("mousedown",t),()=>{document.removeEventListener("mousedown",t)}},[R,a,v]);const G=s.useCallback(t=>{if(t.key==="Enter"||t.key===" "){t.preventDefault();const u=document.activeElement;u?.getAttribute("role")==="menuitem"&&u.click();return}P(t)},[P]),H=s.useCallback(t=>{I||(t.preventDefault(),S.current={x:t.clientX,y:t.clientY},c.show(),X&&requestAnimationFrame(()=>F()))},[I,c,X,F]),Z=l?j.popoverCustomWidth(l):j.popover,Q=s.useMemo(()=>({closeMenu:a,menuSize:M}),[a,M]),U=r.items!==void 0?le(L):J;return e.jsxs(e.Fragment,{children:[e.jsx("div",{ref:A,onContextMenu:H,"aria-haspopup":"menu","data-testid":K,children:n}),c.render(e.jsx("div",{ref:v,id:Y,role:"menu",onKeyDown:G,...oe(te("context-menu"),ne(j.menu,B),V,_),children:e.jsx(ie,{value:Q,children:U})}),{x:S.current.x,y:S.current.y,xstyle:[Z,se.below]})]})}o.displayName="XDSContextMenu";o.__docgenInfo={description:`A context menu component that appears on right-click at cursor position.

Supports two modes:
- **Data-driven**: pass \`items\` for static menus
- **Compound-component**: pass \`menuContent\` JSX for dynamic menus

Both modes share the same DOM-based keyboard navigation via useListFocus.

@example
\`\`\`
<XDSContextMenu
  items={[
    { label: 'Cut', onClick: () => handleCut() },
    { label: 'Copy', onClick: () => handleCopy() },
    { type: 'divider' },
    { label: 'Paste', onClick: () => handlePaste() },
  ]}
>
  <div>Right-click this area</div>
</XDSContextMenu>
\`\`\``,methods:[],displayName:"XDSContextMenu",props:{size:{defaultValue:{value:"'md'",computed:!1},required:!1},hasAutoFocus:{defaultValue:{value:"true",computed:!1},required:!1},isDisabled:{defaultValue:{value:"false",computed:!1},required:!1}}};const ye={title:"Core/ContextMenu",component:o,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{items:{description:"Menu items (items, dividers, or sections)"},menuWidth:{control:"text",description:"Custom menu width (number for px or CSS string)"},size:{control:"select",options:["sm","md","lg"],description:"Menu item size"},isDisabled:{control:"boolean",description:"Disable custom context menu"},"data-testid":{control:"text",description:"Test ID for testing frameworks"}}},p={render:()=>e.jsx(o,{items:[{label:"Cut",onClick:()=>console.log("Cut")},{label:"Copy",onClick:()=>console.log("Copy")},{label:"Paste",onClick:()=>console.log("Paste")}],children:e.jsx("div",{className:"x1o8uwn5 xdh2fpr xbsl7fq x1y0avi5 xur7f20 x2b8uid x93p4j0 x87ps6o",children:"Right-click this area"})})},m={render:()=>e.jsx(o,{items:[{label:"Cut",icon:$,onClick:()=>console.log("Cut")},{label:"Copy",icon:q,onClick:()=>console.log("Copy")},{label:"Paste",icon:O,onClick:()=>console.log("Paste")},{type:"divider"},{label:"Delete",icon:y,onClick:()=>console.log("Delete")}],children:e.jsx("div",{className:"x1o8uwn5 xdh2fpr xbsl7fq x1y0avi5 xur7f20 x2b8uid x93p4j0 x87ps6o",children:"Right-click for actions"})})},x={render:()=>e.jsx(o,{items:[{type:"section",title:"Edit",items:[{label:"Cut",icon:$,onClick:()=>console.log("Cut")},{label:"Copy",icon:q,onClick:()=>console.log("Copy")},{label:"Paste",icon:O,onClick:()=>console.log("Paste")}]},{type:"section",title:"Share",items:[{label:"Share",icon:T,onClick:()=>console.log("Share")},{label:"Download",icon:ce,onClick:()=>console.log("Download")}]}],children:e.jsx("div",{className:"x1o8uwn5 xdh2fpr xbsl7fq x1y0avi5 xur7f20 x2b8uid x93p4j0 x87ps6o",children:"Right-click for grouped actions"})})},C={render:()=>e.jsx(o,{items:[{label:"Edit",onClick:()=>console.log("Edit")},{label:"Duplicate",onClick:()=>console.log("Duplicate")},{type:"divider"},{label:"Delete",onClick:()=>console.log("Delete")}],children:e.jsx("div",{className:"x1o8uwn5 xdh2fpr xbsl7fq x1y0avi5 xur7f20 x2b8uid x93p4j0 x87ps6o",children:"Right-click this area"})})},g={render:()=>e.jsx(o,{items:[{label:"Edit",icon:w,onClick:()=>console.log("Edit")},{label:"Duplicate",icon:z,onClick:()=>console.log("Duplicate")},{label:"Delete (no permission)",icon:y,isDisabled:!0}],children:e.jsx("div",{className:"x1o8uwn5 xdh2fpr xbsl7fq x1y0avi5 xur7f20 x2b8uid x93p4j0 x87ps6o",children:"Right-click this area"})})},h={render:()=>e.jsx(o,{menuWidth:280,items:[{label:"This is a longer option that needs more space",onClick:()=>console.log("Option 1")},{label:"Another long option",onClick:()=>console.log("Option 2")},{label:"Short",onClick:()=>console.log("Option 3")}],children:e.jsx("div",{className:"x1o8uwn5 xdh2fpr xbsl7fq x1y0avi5 xur7f20 x2b8uid x93p4j0 x87ps6o",children:"Right-click for wide menu"})})},b={render:()=>e.jsx(o,{size:"sm",items:[{label:"Cut",onClick:()=>console.log("Cut")},{label:"Copy",onClick:()=>console.log("Copy")},{label:"Paste",onClick:()=>console.log("Paste")}],children:e.jsx("div",{className:"x1o8uwn5 xdh2fpr xbsl7fq x1y0avi5 xur7f20 x2b8uid x93p4j0 x87ps6o",children:"Right-click for compact menu"})})},k={render:()=>e.jsx(o,{isDisabled:!0,items:[{label:"Cut",onClick:()=>console.log("Cut")},{label:"Copy",onClick:()=>console.log("Copy")}],children:e.jsx("div",{className:"x1o8uwn5 xdh2fpr xbsl7fq x1y0avi5 xur7f20 x2b8uid x93p4j0 x87ps6o",children:"Right-click shows native menu (disabled)"})})},f={render:()=>e.jsx(o,{menuContent:e.jsxs(e.Fragment,{children:[e.jsx(i,{icon:w,label:"Edit",onClick:()=>console.log("Edit")}),e.jsx(i,{icon:z,label:"Duplicate",onClick:()=>console.log("Duplicate")}),e.jsx(N,{}),e.jsx(i,{icon:y,label:"Delete",onClick:()=>console.log("Delete")})]}),children:e.jsx("div",{className:"x1o8uwn5 xdh2fpr xbsl7fq x1y0avi5 xur7f20 x2b8uid x93p4j0 x87ps6o",children:"Right-click for compound menu"})})},D={render:()=>e.jsx(o,{menuWidth:280,menuContent:e.jsxs(e.Fragment,{children:[e.jsx(i,{icon:w,label:"Edit",description:"Modify this item",onClick:()=>console.log("Edit")}),e.jsx(i,{icon:T,label:"Share",description:"Share with others",onClick:()=>console.log("Share")}),e.jsx(N,{}),e.jsx(i,{icon:y,label:"Delete",description:"Permanently remove",onClick:()=>console.log("Delete")})]}),children:e.jsx("div",{className:"x1o8uwn5 xdh2fpr xbsl7fq x1y0avi5 xur7f20 x2b8uid x93p4j0 x87ps6o",children:"Right-click for detailed menu"})})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <XDSContextMenu items={[{
    label: 'Cut',
    onClick: () => console.log('Cut')
  }, {
    label: 'Copy',
    onClick: () => console.log('Copy')
  }, {
    label: 'Paste',
    onClick: () => console.log('Paste')
  }]}>
      <div {...stylex.props(triggerStyles.area)}>Right-click this area</div>
    </XDSContextMenu>
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <XDSContextMenu items={[{
    label: 'Cut',
    icon: ScissorsIcon,
    onClick: () => console.log('Cut')
  }, {
    label: 'Copy',
    icon: ClipboardDocumentIcon,
    onClick: () => console.log('Copy')
  }, {
    label: 'Paste',
    icon: ClipboardIcon,
    onClick: () => console.log('Paste')
  }, {
    type: 'divider'
  }, {
    label: 'Delete',
    icon: TrashIcon,
    onClick: () => console.log('Delete')
  }]}>
      <div {...stylex.props(triggerStyles.area)}>Right-click for actions</div>
    </XDSContextMenu>
}`,...m.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <XDSContextMenu items={[{
    type: 'section',
    title: 'Edit',
    items: [{
      label: 'Cut',
      icon: ScissorsIcon,
      onClick: () => console.log('Cut')
    }, {
      label: 'Copy',
      icon: ClipboardDocumentIcon,
      onClick: () => console.log('Copy')
    }, {
      label: 'Paste',
      icon: ClipboardIcon,
      onClick: () => console.log('Paste')
    }]
  }, {
    type: 'section',
    title: 'Share',
    items: [{
      label: 'Share',
      icon: ShareIcon,
      onClick: () => console.log('Share')
    }, {
      label: 'Download',
      icon: ArrowDownTrayIcon,
      onClick: () => console.log('Download')
    }]
  }]}>
      <div {...stylex.props(triggerStyles.area)}>
        Right-click for grouped actions
      </div>
    </XDSContextMenu>
}`,...x.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <XDSContextMenu items={[{
    label: 'Edit',
    onClick: () => console.log('Edit')
  }, {
    label: 'Duplicate',
    onClick: () => console.log('Duplicate')
  }, {
    type: 'divider'
  }, {
    label: 'Delete',
    onClick: () => console.log('Delete')
  }]}>
      <div {...stylex.props(triggerStyles.area)}>Right-click this area</div>
    </XDSContextMenu>
}`,...C.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <XDSContextMenu items={[{
    label: 'Edit',
    icon: PencilIcon,
    onClick: () => console.log('Edit')
  }, {
    label: 'Duplicate',
    icon: DocumentDuplicateIcon,
    onClick: () => console.log('Duplicate')
  }, {
    label: 'Delete (no permission)',
    icon: TrashIcon,
    isDisabled: true
  }]}>
      <div {...stylex.props(triggerStyles.area)}>Right-click this area</div>
    </XDSContextMenu>
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <XDSContextMenu menuWidth={280} items={[{
    label: 'This is a longer option that needs more space',
    onClick: () => console.log('Option 1')
  }, {
    label: 'Another long option',
    onClick: () => console.log('Option 2')
  }, {
    label: 'Short',
    onClick: () => console.log('Option 3')
  }]}>
      <div {...stylex.props(triggerStyles.area)}>Right-click for wide menu</div>
    </XDSContextMenu>
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <XDSContextMenu size="sm" items={[{
    label: 'Cut',
    onClick: () => console.log('Cut')
  }, {
    label: 'Copy',
    onClick: () => console.log('Copy')
  }, {
    label: 'Paste',
    onClick: () => console.log('Paste')
  }]}>
      <div {...stylex.props(triggerStyles.area)}>
        Right-click for compact menu
      </div>
    </XDSContextMenu>
}`,...b.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <XDSContextMenu isDisabled items={[{
    label: 'Cut',
    onClick: () => console.log('Cut')
  }, {
    label: 'Copy',
    onClick: () => console.log('Copy')
  }]}>
      <div {...stylex.props(triggerStyles.area)}>
        Right-click shows native menu (disabled)
      </div>
    </XDSContextMenu>
}`,...k.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <XDSContextMenu menuContent={<>
          <XDSContextMenuItem icon={PencilIcon} label="Edit" onClick={() => console.log('Edit')} />
          <XDSContextMenuItem icon={DocumentDuplicateIcon} label="Duplicate" onClick={() => console.log('Duplicate')} />
          <XDSDivider />
          <XDSContextMenuItem icon={TrashIcon} label="Delete" onClick={() => console.log('Delete')} />
        </>}>
      <div {...stylex.props(triggerStyles.area)}>
        Right-click for compound menu
      </div>
    </XDSContextMenu>
}`,...f.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <XDSContextMenu menuWidth={280} menuContent={<>
          <XDSContextMenuItem icon={PencilIcon} label="Edit" description="Modify this item" onClick={() => console.log('Edit')} />
          <XDSContextMenuItem icon={ShareIcon} label="Share" description="Share with others" onClick={() => console.log('Share')} />
          <XDSDivider />
          <XDSContextMenuItem icon={TrashIcon} label="Delete" description="Permanently remove" onClick={() => console.log('Delete')} />
        </>}>
      <div {...stylex.props(triggerStyles.area)}>
        Right-click for detailed menu
      </div>
    </XDSContextMenu>
}`,...D.parameters?.docs?.source}}};const Se=["Default","WithIcons","WithSections","WithDividers","WithDisabledItems","CustomWidth","SmallSize","Disabled","CompoundBasic","CompoundWithDescriptions"];export{f as CompoundBasic,D as CompoundWithDescriptions,h as CustomWidth,p as Default,k as Disabled,b as SmallSize,g as WithDisabledItems,C as WithDividers,m as WithIcons,x as WithSections,Se as __namedExportsOrder,ye as default};
