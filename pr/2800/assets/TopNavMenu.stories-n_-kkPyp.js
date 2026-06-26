import{aU as B,at as s,aj as V,ad as e,a6 as R,ar as q,ai as k,aZ as w,X as A}from"./iframe-yRFQ_7VC.js";import{u as _,X as E,F as ae,b as j,a as P}from"./UserCircleIcon-tBhdN0PL.js";import{u as Q}from"./useXDSPopover-ChRJmaAz.js";import{u as re,F as J}from"./CubeIcon-Bt-IooIW.js";import{n as z}from"./navItemStyles.stylex-DaSkyk1F.js";import{c as F}from"./XDSTopNavMobileContentContext-DQaQZFe4.js";import{u as Y}from"./XDSAppShellMobileContext-S4OI9hZX.js";import{X as ie}from"./XDSGrid-BQOCBtio.js";import{X as ee}from"./XDSNavIcon-C4lL7gpS.js";import{F as L}from"./ChartBarIcon-BUStbx20.js";import{F as H}from"./ShieldCheckIcon-BXWf3Fak.js";import"./preload-helper-Ct5FWWRu.js";import"./XDSDivider-CD2fc5JP.js";import"./XDSLink-CIWTg4UH.js";import"./computeTargetAndRel-BlG0ENK0.js";import"./useXDSInteractiveRole-C4QNKBOy.js";import"./useListFocus-C2Hg4nex.js";import"./XDSHeading---Kr4LhL.js";const K={menuOffset:{keoZOQ:"xdscsaf9d",$$css:!0}},Z={header:{kjj79g:"xds1qughib",kQgIW9:"xds1gs6z28",kMzoRj:null,kjGldf:null,k2ei4v:null,kZ1KPB:null,ke9TFa:null,kWqL5O:null,kLoX6v:null,kEafiO:null,kt9PQ7:null,ksu8eU:null,kJRH4f:null,kVhnKS:null,k4WBpm:null,k8ry5P:null,kSWEuD:null,kDUl1X:null,kPef9Z:null,kfdmCh:null,kVAM5u:null,kzOINU:null,kGJrpR:null,kaZRDh:null,kBCPoo:null,k26BEO:null,k5QoK5:null,kLZC3w:null,kL6WhQ:null,kC7eKd:"xds11g6tue",ku1ltF:null,kHypHr:null,kWkggS:null,kKwaWg:null,kl9DO0:null,k1YJky:null,kDwdnV:null,kAiEkY:null,kz484i:null,kgSjnq:null,$$css:!0},item:{kZCmMZ:"xds31w388",kE3dHu:null,kpe85a:null,kybGjl:"xds1hl2dhg",k1TLXF:null,kMnn75:null,kmVMDM:null,kNySMw:null,$$css:!0}};function U(t){return t.title}function b({ref:t,label:n,items:a,delay:r=150,hideDelay:l=200}){const d=F(),{closeMobileNav:c}=Y(),p=B(),[x,g]=s.useState(!1),f=s.useId(),v=_(),y=s.useRef(null),u=Q({dialogLabel:n,xstyle:K.menuOffset}),{triggerProps:o,contentProps:m,menuRef:D,setTriggerEl:C}=re({show:u.show,hide:u.hide,isOpen:u.isOpen,isEnabled:!0,showDelay:r,hideDelay:l}),I=V(y,u.triggerRef,C,t);return d==="mobile-bar"?null:d==="drawer"?e.jsxs("div",{className:"xds78zum5 xdsdt5ytf",children:[e.jsxs("button",{type:"button",onClick:()=>g(i=>!i),"aria-expanded":x,"aria-controls":`${f}-items`,...q(z.item,Z.header),children:[n,e.jsx("span",{...{0:{className:"xds3nfvp2 xds11xpdln xdsuedmi6 xdslr8y92"},1:{className:"xds3nfvp2 xds11xpdln xdsuedmi6 xdslr8y92 xds19jd1h0"}}[!!x<<0],children:R("chevronDown")})]}),e.jsx("div",{id:`${f}-items`,...{0:{className:"xdsrvj5dj xdsihq33y xds1qn9uv2 xds80gvsz xdslr8y92"},1:{className:"xdsrvj5dj xds1qn9uv2 xds80gvsz xdslr8y92 xds1tu4anv"}}[!!x<<0],children:e.jsx("div",{className:"xdsb3r6kr xds2lwn1j",children:a.map(i=>e.jsxs(p,{href:i.href,onClick:X=>{i.onClick?.(),c()},...q(z.item,Z.item),children:[i.icon&&e.jsx("span",{className:"xds2lah0s xdsw4jnvo xds1qx5ct2",children:i.icon}),e.jsxs("span",{className:"xds78zum5 xdsdt5ytf xds1lsbc85",children:[i.title,i.description&&e.jsx("span",{className:"xds141an7d xdsv1l7n4 xds1sodnla",children:i.description})]})]},U(i)))})})]}):e.jsxs(e.Fragment,{children:[e.jsxs("button",{ref:I,type:"button",...u.triggerProps,...o,...k(w("top-nav-menu"),{0:{className:"xds3nfvp2 xds6s0dn4 xds1txdalj xds1vofgu7 xdsrrkdod xdsh6dtrn xdscr08ib xds1kq96og xds1e4wzip xdsv1l7n4 xds1hl2dhg xds1ypdohk xdss2xxs2 xdsuedmi6 xdslr8y92 xdsjbqb8w xdse9uy6x xds17nn4n9 xds1wfwxd8 xds7s97pk xds1gs6z28 xdsjb2p0i"},1:{className:"xds3nfvp2 xds6s0dn4 xds1txdalj xds1vofgu7 xdsrrkdod xdsh6dtrn xdscr08ib xds1kq96og xds1e4wzip xds1hl2dhg xds1ypdohk xdss2xxs2 xdsuedmi6 xdslr8y92 xds17nn4n9 xds1wfwxd8 xds7s97pk xds1gs6z28 xdsjb2p0i xds1tgivj0 xds1lmrjuc"}}[!!u.isOpen<<0]),children:[n,e.jsx("span",{...{0:{className:"xds3nfvp2 xds6s0dn4 xds11xpdln xdsuedmi6 xdslr8y92"},1:{className:"xds3nfvp2 xds6s0dn4 xds11xpdln xdsuedmi6 xdslr8y92 xds19jd1h0"}}[!!u.isOpen<<0],children:R("chevronDown")})]}),u.render(e.jsx("div",{ref:D,role:"menu","aria-label":n,...m,className:"xds78zum5 xdsdt5ytf xdszye2dw xds1u2d2a2 xds9epnlk",children:a.map(i=>{const X=i.href?"a":"div";return e.jsxs(X,{role:"menuitem",tabIndex:u.isOpen?0:-1,href:i.href,onClick:i.onClick,className:"xds78zum5 xds6s0dn4 xdsjcht0a xds8o8v82 xdsrrkdod xdsh6dtrn xds1hl2dhg xds1ypdohk xds15406qy xdsuedmi6 xdslr8y92 xdsjbqb8w xdse9uy6x xds1gs6z28 xds17nn4n9 xds1wfwxd8 xds7s97pk",children:[e.jsx("div",{className:"xds78zum5 xds6s0dn4 xdsl56j7k xds100vrsf xds1vqgdyp xdsh6dtrn xds17x4s8c xds2lah0s",children:i.icon}),e.jsxs("div",{className:"xds78zum5 xdsdt5ytf xdszye2dw xdseuugli",children:[e.jsx("span",{className:"xdscr08ib xds1kq96og xds2mo6ok xds1tgivj0",children:i.title}),i.description&&e.jsx("span",{className:"xds141an7d xds1ltkj2j xds1sodnla xdsv1l7n4",children:i.description})]})]},U(i))})}),{placement:"below",alignment:v,xstyle:K.menuOffset})]})}b.displayName="XDSTopNavMenu";b.__docgenInfo={description:`A navigation item that displays a hover-triggered overflow menu.

Renders as a nav item in XDSTopNav's startContent slot. On hover,
shows a popover with rich menu items containing an icon, title,
and optional description.

@example
\`\`\`
<XDSTopNav
  startContent={
    <>
      <XDSTopNavItem label="Home" href="/" isSelected />
      <XDSTopNavMenu
        label="Products"
        items={[
          {
            title: 'Analytics',
            description: 'Track and analyze user behavior',
            icon: <ChartBarIcon />,
            href: '/products/analytics',
          },
          {
            title: 'Messaging',
            description: 'Real-time communication tools',
            icon: <ChatBubbleIcon />,
            href: '/products/messaging',
          },
        ]}
      />
    </>
  }
/>
\`\`\``,methods:[],displayName:"XDSTopNavMenu",props:{xstyle:{required:!1,tsType:{name:"StyleXStyles"},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},description:""},label:{required:!0,tsType:{name:"string"},description:"The visible label for the nav item trigger."},items:{required:!0,tsType:{name:"Array",elements:[{name:"XDSTopNavMenuItemData"}],raw:"XDSTopNavMenuItemData[]"},description:"Menu items to display in the hover popover."},delay:{required:!1,tsType:{name:"number"},description:`Delay before showing the menu on hover (ms).
@default 150`,defaultValue:{value:"150",computed:!1}},hideDelay:{required:!1,tsType:{name:"number"},description:`Delay before hiding the menu after mouse leaves (ms).
@default 200`,defaultValue:{value:"200",computed:!1}}},composes:["Omit"]};const se={panelAnimation:{kSiTet:"xdsg01cxk xdsofkqq2",k3aq6I:"xds1bvilyr xds9cjr8z",k1ekBW:"xds4bbghf",kIyJzY:"xdsgneliz",kAMwcw:"xdslr8y92",kzIqYQ:"xdsd00j3c",kamtoy:"xds4itv7f",k1tdAh:"xds12p7p72",$$css:!0},drawerHeader:{kjj79g:"xds1qughib",kQgIW9:"xds1gs6z28",kMzoRj:null,kjGldf:null,k2ei4v:null,kZ1KPB:null,ke9TFa:null,kWqL5O:null,kLoX6v:null,kEafiO:null,kt9PQ7:null,ksu8eU:null,kJRH4f:null,kVhnKS:null,k4WBpm:null,k8ry5P:null,kSWEuD:null,kDUl1X:null,kPef9Z:null,kfdmCh:null,kVAM5u:null,kzOINU:null,kGJrpR:null,kaZRDh:null,kBCPoo:null,k26BEO:null,k5QoK5:null,kLZC3w:null,kL6WhQ:null,kC7eKd:"xds11g6tue",ku1ltF:null,kHypHr:null,kWkggS:null,kKwaWg:null,kl9DO0:null,k1YJky:null,kDwdnV:null,kAiEkY:null,kz484i:null,kgSjnq:null,$$css:!0}};function O({ref:t,label:n,items:a,featured:r,delay:l=150,hideDelay:d=250,onOpenChange:c}){const p=F();return p==="mobile-bar"?null:p==="drawer"?e.jsx(de,{label:n,items:a,featured:r}):e.jsx(oe,{ref:t,label:n,items:a,featured:r,delay:l,hideDelay:d,onOpenChange:c})}O.displayName="XDSTopNavMegaMenu";function oe({ref:t,label:n,items:a,featured:r,delay:l=150,hideDelay:d=250,onOpenChange:c}){const p=_(),x=s.useRef(null),g=s.useRef(null),f=s.useRef(null),v=s.useRef(!1),y=s.useCallback(()=>{c?.(!0)},[c]),u=s.useCallback(()=>{c?.(!1)},[c]),o=Q({dialogLabel:n,hasSurface:!1,onShow:y,onHide:u});s.useEffect(()=>{const G=f.current?.closest("nav");return G&&o.triggerRef(G),()=>{o.triggerRef(null)}},[o]);const m=s.useCallback(()=>{x.current&&(clearTimeout(x.current),x.current=null),g.current&&(clearTimeout(g.current),g.current=null)},[]),D=s.useCallback(()=>{m(),x.current=setTimeout(()=>{o.show({skipAutoFocus:!0})},l)},[m,o,l]),C=s.useCallback(()=>{m(),g.current=setTimeout(()=>{o.hide()},d)},[m,o,d]),I=s.useCallback(()=>{v.current||D()},[D]),i=s.useCallback(()=>{v.current||C()},[C]),X=s.useCallback(()=>{m(),o.isOpen?(v.current=!1,o.hide(),f.current?.focus()):(v.current=!0,o.show())},[o,m]);return s.useEffect(()=>()=>{m()},[m]),e.jsxs(e.Fragment,{children:[e.jsxs("button",{ref:V(f,t),type:"button","aria-haspopup":"true","aria-expanded":o.isOpen,onClick:X,onMouseEnter:I,onMouseLeave:i,...k(w("top-nav-mega-menu"),{0:{className:"xds3nfvp2 xds6s0dn4 xds1txdalj xds1vofgu7 xdsrrkdod xdsh6dtrn xdscr08ib xds1kq96og xds1e4wzip xdsv1l7n4 xds1hl2dhg xds1ypdohk xdss2xxs2 xdsuedmi6 xdslr8y92 xdsjbqb8w xdse9uy6x xds17nn4n9 xds1wfwxd8 xds7s97pk xds1gs6z28 xdsjb2p0i"},1:{className:"xds3nfvp2 xds6s0dn4 xds1txdalj xds1vofgu7 xdsrrkdod xdsh6dtrn xdscr08ib xds1kq96og xds1e4wzip xds1hl2dhg xds1ypdohk xdss2xxs2 xdsuedmi6 xdslr8y92 xds17nn4n9 xds1wfwxd8 xds7s97pk xds1gs6z28 xdsjb2p0i xds1tgivj0 xds1lmrjuc"}}[!!o.isOpen<<0]),children:[n,e.jsx("span",{...{0:{className:"xds3nfvp2 xds6s0dn4 xds11xpdln xdsuedmi6 xdslr8y92"},1:{className:"xds3nfvp2 xds6s0dn4 xds11xpdln xdsuedmi6 xdslr8y92 xds19jd1h0"}}[!!o.isOpen<<0],children:R("chevronDown")})]}),o.render(e.jsx("div",{role:"menu","aria-label":n,onMouseEnter:I,onMouseLeave:i,className:"xds1prclbq xds11xkdxz xds13fuv20 xds1pc3f07 xds1hviunn xds1i5ehqx xdsb3r6kr",children:e.jsxs("div",{className:"xds78zum5 xds1a02dak xds1qh66ti xds8o8v82 xdsrrkdod xdsyzno7u",children:[a!=null&&e.jsx("div",{className:"xdsgyuaek xdss83m0k xdschdapg xdseuugli",children:e.jsx(ie,{columns:2,gap:2,children:a})}),r!=null&&e.jsx("div",{className:"xds1iyjqo2 xdss83m0k xdsjpgo6f xds1hviunn xdswmxj5m xdsb3r6kr xds78zum5 xdsdt5ytf",children:r})]})}),{placement:"below",alignment:p,xstyle:se.panelAnimation})]})}function de({label:t,items:n,featured:a}){const[r,l]=s.useState(!1),d=`mega-menu-${t.toLowerCase().replace(/\s+/g,"-")}`;return e.jsxs("div",{className:"xds78zum5 xdsdt5ytf",children:[e.jsxs("button",{type:"button",onClick:()=>l(c=>!c),"aria-expanded":r,"aria-controls":`${d}-items`,...k(w("top-nav-mega-menu",{mode:"drawer"}),q(z.item,se.drawerHeader)),children:[t,e.jsx("span",{...{0:{className:"xds3nfvp2 xds11xpdln xdsuedmi6 xdslr8y92"},1:{className:"xds3nfvp2 xds11xpdln xdsuedmi6 xdslr8y92 xds19jd1h0"}}[!!r<<0],children:R("chevronDown")})]}),e.jsx("div",{id:`${d}-items`,...{0:{className:"xdsrvj5dj xdsihq33y xds1qn9uv2 xds80gvsz xdslr8y92"},1:{className:"xdsrvj5dj xds1qn9uv2 xds80gvsz xdslr8y92 xds1tu4anv"}}[!!r<<0],children:e.jsxs("div",{className:"xdsb3r6kr xds2lwn1j",children:[n,a!=null&&e.jsx("div",{className:"xdstbrsbv xds1l10yog xds1hviunn xdswmxj5m xdsb3r6kr",children:a})]})})]})}O.__docgenInfo={description:`A navigation item that displays a full-width mega menu on hover.

Uses a composed children API with sub-components:
- \`items\` — ReactNode slot, typically XDSTopNavMegaMenuItem components
- \`featured\` — ReactNode slot for the right-panel / drawer featured card

Supports three render modes via XDSTopNavRenderContext:
- \`'default'\`: desktop popover with hover/click trigger
- \`'mobile-bar'\`: hidden (returns null)
- \`'drawer'\`: inline collapsible matching TopNavMenu pattern

@example
\`\`\`
<XDSTopNav
  startContent={
    <XDSTopNavMegaMenu
      label="Products"
      items={
        <>
          <XDSTopNavMegaMenuItem
            title="Analytics"
            description="Track behavior"
            icon={<ChartIcon />}
            href="/analytics"
          />
          <XDSTopNavMegaMenuItem
            title="Messaging"
            description="Real-time comms"
            icon={<ChatIcon />}
            href="/messaging"
          />
        </>
      }
      featured={
        <>
          <strong>New: AI Features</strong>
          <p>Explore our latest AI-powered tools.</p>
        </>
      }
    />
  }
/>
\`\`\``,methods:[],displayName:"XDSTopNavMegaMenu",props:{xstyle:{required:!1,tsType:{name:"StyleXStyles"},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},description:""},label:{required:!0,tsType:{name:"string"},description:"The visible label for the nav item trigger."},items:{required:!1,tsType:{name:"ReactNode"},description:`Menu items slot — typically one or more XDSTopNavMegaMenuItem components,
but accepts any ReactNode for custom layouts.`},featured:{required:!1,tsType:{name:"ReactNode"},description:`Featured content slot — rendered in the right panel on desktop,
and below the items in the mobile drawer.`},delay:{required:!1,tsType:{name:"number"},description:"Delay before showing the menu on hover (ms). @default 150",defaultValue:{value:"150",computed:!1}},hideDelay:{required:!1,tsType:{name:"number"},description:"Delay before hiding the menu after mouse leaves (ms). @default 250",defaultValue:{value:"250",computed:!1}},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(isOpen: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isOpen"}],return:{name:"void"}}},description:`Callback fired when the mega menu opens or closes.
Useful for coordinating wrapper styles (e.g. hiding other shadows).`}},composes:["Omit"]};const le={drawerItem:{kZCmMZ:"xds31w388",kE3dHu:null,kpe85a:null,kGNEyG:"xds1cy8zhl",kybGjl:"xds1hl2dhg",k1TLXF:null,kMnn75:null,kmVMDM:null,kNySMw:null,$$css:!0}};function h({ref:t,title:n,description:a,icon:r,href:l,onClick:d,as:c,tabIndex:p}){const x=F(),g=B(c),{closeMobileNav:f}=Y();if(x==="drawer"){const y=l?g:"button",u=y==="button"?{type:"button"}:{},o=()=>{d?.(),f()};return e.jsxs(y,{ref:t,href:l,onClick:o,...u,...k(w("top-nav-mega-menu-item",{mode:"drawer"}),q(z.item,le.drawerItem)),children:[r&&e.jsx("div",{className:"xds78zum5 xds6s0dn4 xdsl56j7k xds1td3qas xds10w6t97 xdsh6dtrn xds17x4s8c xds2lah0s xdsv9yike xdsjc2qm6",children:r}),e.jsxs("div",{className:"xds78zum5 xdsdt5ytf xds1lsbc85 xdseuugli",children:[n,a&&e.jsx("span",{className:"xds141an7d xds1ltkj2j xdsv1l7n4 xds1sodnla",children:a})]})]})}const v=l?g:"div";return e.jsxs(v,{ref:t,href:l,onClick:d,tabIndex:p,...k(w("top-nav-mega-menu-item"),{className:"xds78zum5 xds1cy8zhl xdsjcht0a xds8o8v82 xdsrrkdod xdsh6dtrn xds1hl2dhg xds1ypdohk xds15406qy xdsuedmi6 xdslr8y92 xdsjbqb8w xdse9uy6x xdsyxi2l3 xds1gs6z28 xds17nn4n9 xds1wfwxd8 xds7s97pk xds1heor9g xdsjb2p0i xds1yc453h xds9f619 xdsh8yej3"}),children:[r&&e.jsx("div",{className:"xds78zum5 xds6s0dn4 xdsl56j7k xds100vrsf xds1vqgdyp xdsh6dtrn xds17x4s8c xds2lah0s xdsv9yike",children:r}),e.jsxs("div",{className:"xds78zum5 xdsdt5ytf xdszye2dw xdseuugli",children:[e.jsx("span",{className:"xdscr08ib xds1kq96og xds2mo6ok xds1tgivj0",children:n}),a&&e.jsx("span",{className:"xds141an7d xds1ltkj2j xds1sodnla xdsv1l7n4",children:a})]})]})}h.displayName="XDSTopNavMegaMenuItem";h.__docgenInfo={description:`An individual item inside an XDSTopNavMegaMenu.

Renders itself in both desktop (popover grid) and mobile drawer modes
using XDSTopNavRenderContext to switch appearance.

@example
\`\`\`
<XDSTopNavMegaMenu
  label="Products"
  items={
    <>
      <XDSTopNavMegaMenuItem
        title="Analytics"
        description="Track and analyze user behavior"
        icon={<ChartIcon />}
        href="/analytics"
      />
      <XDSTopNavMegaMenuItem title="Reports" href="/reports" />
    </>
  }
/>
\`\`\``,methods:[],displayName:"XDSTopNavMegaMenuItem",props:{ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLElement>",elements:[{name:"HTMLElement"}]},description:""},title:{required:!0,tsType:{name:"string"},description:"Display title for the menu item."},description:{required:!1,tsType:{name:"string"},description:"Optional description text displayed below the title."},icon:{required:!1,tsType:{name:"ReactNode"},description:"Optional icon element displayed to the left."},href:{required:!1,tsType:{name:"string"},description:"URL to navigate to when clicked."},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when item is clicked."},as:{required:!1,tsType:{name:"ElementType"},description:"Custom component to render instead of `<a>` for link items.\nOverrides the provider-level default set by XDSLinkProvider."}},composes:["Omit"]};function $({ref:t,title:n,description:a,image:r,imageAlt:l,linkLabel:d,linkHref:c,children:p}){const x=B();return e.jsxs("div",{ref:t,...k(w("top-nav-mega-menu-featured-card"),{className:"xds78zum5 xdsdt5ytf"}),children:[r&&e.jsx("img",{src:r,alt:l??"",className:"xdsh8yej3 xdshjk10j xdsl1xv1r xds1lliihq"}),e.jsxs("div",{className:"xds78zum5 xdsdt5ytf xds1txdalj xds1shk3sm",children:[e.jsx("span",{className:"xdscr08ib xds2mo6ok xds1kq96og xds1tgivj0",children:n}),a&&e.jsx("span",{className:"xds141an7d xds1ltkj2j xdsv1l7n4",children:a}),d&&c&&e.jsxs(x,{href:c,className:"xds141an7d xds2mo6ok xds1ltkj2j xdsjse4m1 xds1hl2dhg",children:[d," →"]}),p]})]})}$.displayName="XDSTopNavMegaMenuFeaturedCard";$.__docgenInfo={description:`Standard featured card for the XDSTopNavMegaMenu \`featured\` slot.

Provides a consistent card with optional image, title, description,
and CTA link. For fully custom content, pass any ReactNode directly
to the \`featured\` slot instead.

@example
\`\`\`
<XDSTopNavMegaMenu
  label="Products"
  items={...}
  featured={
    <XDSTopNavMegaMenuFeaturedCard
      title="What's new in v4.0"
      description="AI-powered analytics and real-time collaboration."
      image="https://example.com/promo.jpg"
      imageAlt="Team collaboration"
      linkLabel="Read the announcement"
      linkHref="/blog/v4"
    />
  }
/>
\`\`\``,methods:[],displayName:"XDSTopNavMegaMenuFeaturedCard",props:{xstyle:{required:!1,tsType:{name:"StyleXStyles"},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:""},title:{required:!0,tsType:{name:"string"},description:"Card title."},description:{required:!1,tsType:{name:"string"},description:"Description text below the title."},image:{required:!1,tsType:{name:"string"},description:"Optional image URL displayed above the body."},imageAlt:{required:!1,tsType:{name:"string"},description:"Alt text for the image."},linkLabel:{required:!1,tsType:{name:"string"},description:"CTA link text."},linkHref:{required:!1,tsType:{name:"string"},description:"CTA link URL."},children:{required:!1,tsType:{name:"ReactNode"},description:"Custom content rendered below the standard body."}},composes:["Omit"]};function ce({title:t,titleId:n,...a},r){return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":n},a),t?s.createElement("title",{id:n},t):null,s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"}))}const ne=s.forwardRef(ce);function ue({title:t,titleId:n,...a},r){return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":n},a),t?s.createElement("title",{id:n},t):null,s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"}))}const W=s.forwardRef(ue);function xe({title:t,titleId:n,...a},r){return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":n},a),t?s.createElement("title",{id:n},t):null,s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"}))}const te=s.forwardRef(xe),Xe={title:"Core/TopNavMenu",component:b,tags:["autodocs"],parameters:{layout:"fullscreen"}},M={render:()=>e.jsx(E,{label:"Main navigation",heading:e.jsx(P,{heading:"My App",logo:e.jsx(ee,{icon:e.jsx(J,{style:{width:16,height:16}})}),href:"#"}),startContent:e.jsxs(e.Fragment,{children:[e.jsx(j,{label:"Home",href:"#",isSelected:!0}),e.jsx(b,{label:"Products",items:[{title:"Analytics",description:"Track and analyze user behavior",icon:e.jsx(L,{style:{width:20,height:20}}),href:"#analytics"},{title:"Security",description:"Enterprise-grade protection",icon:e.jsx(H,{style:{width:20,height:20}}),href:"#security"},{title:"Automation",description:"Streamline your workflows",icon:e.jsx(ne,{style:{width:20,height:20}}),href:"#automation"},{title:"Developer Tools",description:"APIs, SDKs, and CLI tools",icon:e.jsx(W,{style:{width:20,height:20}}),href:"#dev-tools"}]}),e.jsx(j,{label:"Pricing",href:"#"})]}),endContent:e.jsx(A,{label:"Profile",variant:"ghost",icon:e.jsx(ae,{style:{width:16,height:16}}),isIconOnly:!0})})},S={name:"Multiple Menus",render:()=>e.jsx(E,{label:"Main navigation",heading:e.jsx(P,{heading:"Platform",href:"#"}),startContent:e.jsxs(e.Fragment,{children:[e.jsx(b,{label:"Products",items:[{title:"Analytics",description:"Track behavior",icon:e.jsx(L,{style:{width:20,height:20}}),href:"#"},{title:"Security",description:"Enterprise protection",icon:e.jsx(H,{style:{width:20,height:20}}),href:"#"}]}),e.jsx(b,{label:"Resources",items:[{title:"Documentation",href:"#"},{title:"API Reference",href:"#"},{title:"Community Forum",href:"#"}]}),e.jsx(j,{label:"Pricing",href:"#"})]})})},N={name:"Mega Menu",render:function(){const[,n]=s.useState(!1);return e.jsx("div",{style:{position:"relative"},children:e.jsx(E,{label:"Marketing navigation",heading:e.jsx(P,{heading:"Acme",logo:e.jsx(ee,{icon:e.jsx(J,{style:{width:16,height:16}})}),href:"#"}),startContent:e.jsxs(e.Fragment,{children:[e.jsx(O,{label:"Products",onOpenChange:n,items:e.jsxs(e.Fragment,{children:[e.jsx(h,{title:"Analytics",description:"Track and analyze user behavior across your apps",icon:e.jsx(L,{style:{width:20,height:20}}),href:"#analytics"}),e.jsx(h,{title:"Security",description:"Enterprise-grade protection for your data",icon:e.jsx(H,{style:{width:20,height:20}}),href:"#security"}),e.jsx(h,{title:"Automation",description:"Streamline workflows with intelligent tools",icon:e.jsx(ne,{style:{width:20,height:20}}),href:"#automation"}),e.jsx(h,{title:"Developer Tools",description:"APIs, SDKs, and CLI for integration",icon:e.jsx(W,{style:{width:20,height:20}}),href:"#dev-tools"}),e.jsx(h,{title:"Global Network",description:"Low-latency edge infra in 40+ regions",icon:e.jsx(te,{style:{width:20,height:20}}),href:"#network"})]}),featured:e.jsx($,{title:"What's new in v4.0",description:"AI-powered analytics and real-time collaboration.",image:"https://images.unsplash.com/photo-1551434678-e076c223a692?w=560&h=280&fit=crop",imageAlt:"Team collaboration",linkLabel:"Read the announcement",linkHref:"#announcement"})}),e.jsx(j,{label:"Pricing",href:"#"}),e.jsx(j,{label:"Docs",href:"#"})]}),endContent:e.jsxs(e.Fragment,{children:[e.jsx(A,{label:"Sign in",variant:"ghost"}),e.jsx(A,{label:"Get started",variant:"primary"})]})})})}},T={name:"Mega Menu (Simple)",render:()=>e.jsx("div",{style:{position:"relative"},children:e.jsx(E,{label:"Simple navigation",heading:e.jsx(P,{heading:"App",href:"#"}),startContent:e.jsxs(e.Fragment,{children:[e.jsx(j,{label:"Home",href:"#",isSelected:!0}),e.jsx(O,{label:"Features",items:e.jsxs(e.Fragment,{children:[e.jsx(h,{title:"Dashboard",description:"Overview of your key metrics",icon:e.jsx(L,{style:{width:20,height:20}}),href:"#"}),e.jsx(h,{title:"Integrations",description:"Connect with your favorite tools",icon:e.jsx(W,{style:{width:20,height:20}}),href:"#"}),e.jsx(h,{title:"API Access",description:"Programmatic access to all features",icon:e.jsx(te,{style:{width:20,height:20}}),href:"#"})]})})]}),endContent:e.jsx(A,{label:"Sign in",variant:"primary"})})})};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <XDSTopNav label="Main navigation" heading={<XDSTopNavHeading heading="My App" logo={<XDSNavIcon icon={<CubeIcon style={{
    width: 16,
    height: 16
  }} />} />} href="#" />} startContent={<>
          <XDSTopNavItem label="Home" href="#" isSelected />
          <XDSTopNavMenu label="Products" items={[{
      title: 'Analytics',
      description: 'Track and analyze user behavior',
      icon: <ChartBarIcon style={{
        width: 20,
        height: 20
      }} />,
      href: '#analytics'
    }, {
      title: 'Security',
      description: 'Enterprise-grade protection',
      icon: <ShieldCheckIcon style={{
        width: 20,
        height: 20
      }} />,
      href: '#security'
    }, {
      title: 'Automation',
      description: 'Streamline your workflows',
      icon: <BoltIcon style={{
        width: 20,
        height: 20
      }} />,
      href: '#automation'
    }, {
      title: 'Developer Tools',
      description: 'APIs, SDKs, and CLI tools',
      icon: <CodeBracketIcon style={{
        width: 20,
        height: 20
      }} />,
      href: '#dev-tools'
    }]} />
          <XDSTopNavItem label="Pricing" href="#" />
        </>} endContent={<XDSButton label="Profile" variant="ghost" icon={<UserCircleIcon style={{
    width: 16,
    height: 16
  }} />} isIconOnly />} />
}`,...M.parameters?.docs?.source},description:{story:`Basic hover-triggered nav menu with 4 items, each with icon, title,
and description.`,...M.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Multiple Menus',
  render: () => <XDSTopNav label="Main navigation" heading={<XDSTopNavHeading heading="Platform" href="#" />} startContent={<>
          <XDSTopNavMenu label="Products" items={[{
      title: 'Analytics',
      description: 'Track behavior',
      icon: <ChartBarIcon style={{
        width: 20,
        height: 20
      }} />,
      href: '#'
    }, {
      title: 'Security',
      description: 'Enterprise protection',
      icon: <ShieldCheckIcon style={{
        width: 20,
        height: 20
      }} />,
      href: '#'
    }]} />
          <XDSTopNavMenu label="Resources" items={[{
      title: 'Documentation',
      href: '#'
    }, {
      title: 'API Reference',
      href: '#'
    }, {
      title: 'Community Forum',
      href: '#'
    }]} />
          <XDSTopNavItem label="Pricing" href="#" />
        </>} />
}`,...S.parameters?.docs?.source},description:{story:`Multiple nav menus side by side. Hovering one closes the other
(standard hover-menu behavior).`,...S.parameters?.docs?.description}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'Mega Menu',
  render: function MegaMenuStory() {
    const [, setMenuOpen] = useState(false);
    return <div style={{
      position: 'relative'
    }}>
        <XDSTopNav label="Marketing navigation" heading={<XDSTopNavHeading heading="Acme" logo={<XDSNavIcon icon={<CubeIcon style={{
        width: 16,
        height: 16
      }} />} />} href="#" />} startContent={<>
              <XDSTopNavMegaMenu label="Products" onOpenChange={setMenuOpen} items={<>
                    <XDSTopNavMegaMenuItem title="Analytics" description="Track and analyze user behavior across your apps" icon={<ChartBarIcon style={{
            width: 20,
            height: 20
          }} />} href="#analytics" />
                    <XDSTopNavMegaMenuItem title="Security" description="Enterprise-grade protection for your data" icon={<ShieldCheckIcon style={{
            width: 20,
            height: 20
          }} />} href="#security" />
                    <XDSTopNavMegaMenuItem title="Automation" description="Streamline workflows with intelligent tools" icon={<BoltIcon style={{
            width: 20,
            height: 20
          }} />} href="#automation" />
                    <XDSTopNavMegaMenuItem title="Developer Tools" description="APIs, SDKs, and CLI for integration" icon={<CodeBracketIcon style={{
            width: 20,
            height: 20
          }} />} href="#dev-tools" />
                    <XDSTopNavMegaMenuItem title="Global Network" description="Low-latency edge infra in 40+ regions" icon={<GlobeAltIcon style={{
            width: 20,
            height: 20
          }} />} href="#network" />
                  </>} featured={<XDSTopNavMegaMenuFeaturedCard title="What's new in v4.0" description="AI-powered analytics and real-time collaboration." image="https://images.unsplash.com/photo-1551434678-e076c223a692?w=560&h=280&fit=crop" imageAlt="Team collaboration" linkLabel="Read the announcement" linkHref="#announcement" />} />
              <XDSTopNavItem label="Pricing" href="#" />
              <XDSTopNavItem label="Docs" href="#" />
            </>} endContent={<>
              <XDSButton label="Sign in" variant="ghost" />
              <XDSButton label="Get started" variant="primary" />
            </>} />
      </div>;
  }
}`,...N.parameters?.docs?.source},description:{story:"Full-width mega menu with composed children API.",...N.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Mega Menu (Simple)',
  render: () => <div style={{
    position: 'relative'
  }}>
      <XDSTopNav label="Simple navigation" heading={<XDSTopNavHeading heading="App" href="#" />} startContent={<>
            <XDSTopNavItem label="Home" href="#" isSelected />
            <XDSTopNavMegaMenu label="Features" items={<>
                  <XDSTopNavMegaMenuItem title="Dashboard" description="Overview of your key metrics" icon={<ChartBarIcon style={{
          width: 20,
          height: 20
        }} />} href="#" />
                  <XDSTopNavMegaMenuItem title="Integrations" description="Connect with your favorite tools" icon={<CodeBracketIcon style={{
          width: 20,
          height: 20
        }} />} href="#" />
                  <XDSTopNavMegaMenuItem title="API Access" description="Programmatic access to all features" icon={<GlobeAltIcon style={{
          width: 20,
          height: 20
        }} />} href="#" />
                </>} />
          </>} endContent={<XDSButton label="Sign in" variant="primary" />} />
    </div>
}`,...T.parameters?.docs?.source},description:{story:"Mega menu without the featured content area — just the items grid.",...T.parameters?.docs?.description}}};const Re=["Default","MultipleMenus","MegaMenu","MegaMenuSimple"];export{M as Default,N as MegaMenu,T as MegaMenuSimple,S as MultipleMenus,Re as __namedExportsOrder,Xe as default};
