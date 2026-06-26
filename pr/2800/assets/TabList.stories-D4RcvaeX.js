import{at as r,aj as q,ad as e,ar as H,m as Z,ai as m,aZ as b,av as $,X as P,c as F}from"./iframe-yRFQ_7VC.js";import{u as E,t as K,a as n,X as s}from"./XDSTab-CU6s1iLz.js";import{u as G}from"./useXDSPopover-ChRJmaAz.js";import{u as _}from"./useListFocus-C2Hg4nex.js";import{X as B}from"./XDSCarousel-DTH_SCjb.js";import{F as J}from"./PlusIcon-BOlsoorq.js";import"./preload-helper-Ct5FWWRu.js";const z={trigger:{kVAEAm:"xds1n2onr6",k1xSpc:"xds3nfvp2",kGNEyG:"xds6s0dn4",kjj79g:"xdsl56j7k",kOIVth:"xdszye2dw",kg3NbH:"xdsrrkdod",kWkggS:"xdsjbqb8w",kMzoRj:"xdsc342km",ksu8eU:"xdsng3xce",kaIpWk:"xdsh6dtrn",kMv6JI:"xdsjb2p0i",kGuDYH:"xdscr08ib",kLWn49:"xds1kq96og",k63SB2:"xds1sodnla",kMwMTN:"xdsv1l7n4",kkrTdU:"xds1ypdohk",kybGjl:"xds1hl2dhg",k1ekBW:"xdst3l3uh",kIyJzY:"xdsuedmi6",kAMwcw:"xdslr8y92",kI3sdo:"xds17nn4n9",kInvED:"xds1wfwxd8 xds7s97pk",$$css:!0},triggerSelected:{kMwMTN:"xds1tgivj0",k63SB2:"xds2mo6ok",$$css:!0},hoverBg:{kVAEAm:"xds10l6tqk",kpwlN0:"xds10a8y8t",kogj98:"xds1bpp3o7",kzqmXN:"xdsh8yej3",kaIpWk:"xdsh6dtrn",kfzvcC:"xds47corl",kWkggS:"xdsjbqb8w xds9velyj",k1ekBW:"xds15406qy",kIyJzY:"xdsuedmi6",kAMwcw:"xdslr8y92",$$css:!0}},Y={sm:{kZKoxP:"xds6k0iem",$$css:!0},md:{kZKoxP:"xds1ueg155",$$css:!0},lg:{kZKoxP:"xdsssyfek",$$css:!0}},U={sm:{kZKoxP:"xds6k0iem",$$css:!0},md:{kZKoxP:"xds1ueg155",$$css:!0},lg:{kZKoxP:"xdsssyfek",$$css:!0}};function w({ref:l,label:a,options:t,xstyle:d,className:c,style:T}){const u=E(),C=r.useId(),o=G({hasLightDismiss:!0,hasCloseButton:!1,hasAutoFocus:!1}),{listRef:N,handleKeyDown:O}=_({onEscape:()=>o.hide()}),R=r.useCallback(()=>{o.isOpen?o.hide():o.show()},[o]),A=t.find(i=>i.value===u.value),I=A?.label??a,V=A!=null,M=u.size,L=r.useCallback(i=>{u.onChange(i),o.hide()},[u,o]),W=q(o.triggerRef,l);return e.jsxs(e.Fragment,{children:[e.jsxs("button",{ref:W,type:"button","aria-haspopup":"menu","aria-expanded":o.isOpen,"aria-controls":C,onClick:R,...m(b("tab-menu"),H(z.trigger,Y[M],V&&z.triggerSelected,K,d),c,T),children:[e.jsx("span",{"aria-hidden":"true",...H(z.hoverBg,U[M])}),e.jsxs("span",{className:"xds1n2onr6 xdswz0xwf xds6s0dn4 xdskh2ocl",children:[e.jsx("span",{className:"xds1agbcgv xdscrlgei",children:I}),e.jsx("span",{"aria-hidden":"true",className:"xds1agbcgv xdscrlgei xdslshs6z xds47corl xds2mo6ok",children:I})]}),e.jsx("span",{"aria-hidden":"true",...{0:{className:"xds12xnipv xds6b6gus xds2lah0s xds11xpdln xdsuedmi6 xdslr8y92"},1:{className:"xds12xnipv xds6b6gus xds2lah0s xds11xpdln xdsuedmi6 xdslr8y92 xds19jd1h0"}}[!!o.isOpen<<0],children:e.jsx(Z,{icon:"chevronDown",size:"sm",color:"inherit"})}),V&&e.jsx("span",{...m(b("tab-indicator",{selected:"selected"}),{className:"xds10l6tqk xdsqmqy1e xdsnp31yv xdsmz3bnw xds36qwtl xdsjspbzw xds47corl xdsnpjden xdsuedmi6 xdslr8y92 xdsowkcby xds1hc1fzr"})})]}),o.render(e.jsxs("div",{ref:N,id:C,role:"menu","aria-label":a,onKeyDown:O,...m(b("tab-menu-dropdown"),{className:"xds78zum5 xdsdt5ytf xds1lsbc85 xdsu0wf1k xds7a5moj"}),children:[e.jsx("span",{role:"presentation",className:"xds141an7d xds1ltkj2j xds2mo6ok xdsv1l7n4 xdsu0wf1k xdsrrkdod",children:a}),t.map(i=>{const X=u.value===i.value;return e.jsxs("div",{role:"menuitem",tabIndex:0,"aria-current":X?"true":void 0,onClick:()=>L(i.value),onKeyDown:f=>{(f.key==="Enter"||f.key===" ")&&(f.preventDefault(),L(i.value))},...m(b("tab-menu-item"),{0:{className:"xds78zum5 xds6s0dn4 xds1qughib xds1txdalj xdsce4md1 xdsrrkdod xdsh6dtrn xdsjb2p0i xdscr08ib xds1kq96og xds1sodnla xds1tgivj0 xds1ypdohk xds15406qy xdsuedmi6 xdslr8y92 xdsjbqb8w xdse9uy6x xds17nn4n9"},1:{className:"xds78zum5 xds6s0dn4 xds1qughib xds1txdalj xdsce4md1 xdsrrkdod xdsh6dtrn xdsjb2p0i xdscr08ib xds1kq96og xds1tgivj0 xds1ypdohk xds15406qy xdsuedmi6 xdslr8y92 xdsjbqb8w xdse9uy6x xds17nn4n9 xds1e4wzip"}}[!!X<<0]),children:[e.jsxs("span",{className:"xds78zum5 xds6s0dn4 xds1txdalj",children:[i.icon&&$(i.icon,{size:"sm",color:"secondary"}),i.label]}),X&&e.jsx(Z,{icon:"check",size:"sm",color:"accent"})]},i.value)})]}),{placement:"below",alignment:"start"})]})}w.displayName="XDSTabMenu";w.__docgenInfo={description:`Tab menu trigger that opens a dropdown of additional tab options.
Shows the selected option's label as trigger text when an option is active.
Dropdown includes a heading showing the menu's label prop.

@example
\`\`\`
<XDSTabList value={tab} onChange={setTab}>
  <XDSTab value="overview" label="Overview" />
  <XDSTabMenu label="More" options={[
    { value: "settings", label: "Settings" },
    { value: "history", label: "History" },
  ]} />
</XDSTabList>
\`\`\``,methods:[],displayName:"XDSTabMenu",props:{ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},description:""},label:{required:!0,tsType:{name:"string"},description:`Label for the trigger button and dropdown heading.
Displayed as trigger text when no option is selected.`},options:{required:!0,tsType:{name:"Array",elements:[{name:"XDSTabMenuOption"}],raw:"XDSTabMenuOption[]"},description:"Menu options rendered in the dropdown."}},composes:["Pick"]};const oe={title:"Core/TabList",component:n,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],description:"Size of the tab hover targets"}}},p={args:{size:"md"},render:l=>{const[a,t]=r.useState("home");return e.jsxs(n,{value:a,onChange:t,size:l.size,children:[e.jsx(s,{value:"home",label:"Home"}),e.jsx(s,{value:"projects",label:"Projects"}),e.jsx(s,{value:"settings",label:"Settings"})]})}},g={args:{size:"md"},render:l=>{const[a,t]=r.useState("home");return e.jsxs(n,{value:a,onChange:t,size:l.size,children:[e.jsx(s,{value:"home",label:"Home"}),e.jsx(s,{value:"projects",label:"Projects"}),e.jsx(w,{label:"More",options:[{value:"analytics",label:"Analytics"},{value:"reports",label:"Reports"},{value:"billing",label:"Billing"}]})]})}},S={args:{size:"md"},render:l=>{const[a,t]=r.useState("analytics");return e.jsxs(n,{value:a,onChange:t,size:l.size,children:[e.jsx(s,{value:"home",label:"Home"}),e.jsx(s,{value:"projects",label:"Projects"}),e.jsx(w,{label:"More",options:[{value:"analytics",label:"Analytics"},{value:"reports",label:"Reports"}]})]})}},j={render:()=>{const[l,a]=r.useState("home");return e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:["sm","md","lg"].map(t=>e.jsxs("div",{children:[e.jsxs("div",{style:{marginBottom:"8px",fontSize:"12px",color:"#666",fontFamily:"monospace"},children:['size=\\"',t,'\\"']}),e.jsx("div",{style:{border:"1px dashed #ccc",display:"inline-flex"},children:e.jsxs(n,{value:l,onChange:a,size:t,children:[e.jsx(s,{value:"home",label:"Home"}),e.jsx(s,{value:"projects",label:"Projects"}),e.jsx(s,{value:"settings",label:"Settings"})]})})]},t))})}},D={args:{size:"md"},render:l=>{const[a,t]=r.useState("home"),d=e.jsx("svg",{viewBox:"0 0 16 16",fill:"currentColor",width:"100%",height:"100%",children:e.jsx("path",{d:"M8.543 2.232a.75.75 0 0 0-1.085 0l-5.25 5.5A.75.75 0 0 0 2.75 9H4v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2h1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V9h1.25a.75.75 0 0 0 .543-1.268l-5.25-5.5Z"})}),c=e.jsx("svg",{viewBox:"0 0 16 16",fill:"currentColor",width:"100%",height:"100%",children:e.jsx("path",{fillRule:"evenodd",d:"M6.955 1.45A.5.5 0 0 1 7.452 1h1.096a.5.5 0 0 1 .497.45l.17 1.699c.484.12.94.312 1.356.562l1.321-.816a.5.5 0 0 1 .67.087l.774.774a.5.5 0 0 1 .087.67l-.816 1.321c.25.416.442.872.562 1.356l1.699.17a.5.5 0 0 1 .45.497v1.096a.5.5 0 0 1-.45.497l-1.699.17c-.12.484-.312.94-.562 1.356l.816 1.321a.5.5 0 0 1-.087.67l-.774.774a.5.5 0 0 1-.67.087l-1.321-.816c-.416.25-.872.442-1.356.562l-.17 1.699a.5.5 0 0 1-.497.45H7.452a.5.5 0 0 1-.497-.45l-.17-1.699a4.973 4.973 0 0 1-1.356-.562l-1.321.816a.5.5 0 0 1-.67-.087l-.774-.774a.5.5 0 0 1-.087-.67l.816-1.321a4.972 4.972 0 0 1-.562-1.356l-1.699-.17A.5.5 0 0 1 1 8.548V7.452a.5.5 0 0 1 .45-.497l1.699-.17c.12-.484.312-.94.562-1.356l-.816-1.321a.5.5 0 0 1 .087-.67l.774-.774a.5.5 0 0 1 .67-.087l1.321.816c.416-.25.872-.442 1.356-.562l.17-1.699ZM8 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",clipRule:"evenodd"})});return e.jsxs(n,{value:a,onChange:t,size:l.size,children:[e.jsx(s,{value:"home",label:"Home",icon:d}),e.jsx(s,{value:"settings",label:"Settings",icon:c})]})}},y={args:{size:"md"},render:l=>{const[a,t]=r.useState("desktop"),d=e.jsx("svg",{viewBox:"0 0 16 16",fill:"currentColor",width:"100%",height:"100%",children:e.jsx("path",{d:"M2.5 3A1.5 1.5 0 0 0 1 4.5v5A1.5 1.5 0 0 0 2.5 11h4.75v1.5H5a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H8.75V11h4.75A1.5 1.5 0 0 0 15 9.5v-5A1.5 1.5 0 0 0 13.5 3h-11Zm0 1.5h11v5h-11v-5Z"})}),c=e.jsx("svg",{viewBox:"0 0 16 16",fill:"currentColor",width:"100%",height:"100%",children:e.jsx("path",{d:"M5 1.5A1.5 1.5 0 0 0 3.5 3v10A1.5 1.5 0 0 0 5 14.5h6a1.5 1.5 0 0 0 1.5-1.5V3A1.5 1.5 0 0 0 11 1.5H5Zm0 1.5h6v10H5V3Zm2.25 8.5a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75Z"})}),T=e.jsx("svg",{viewBox:"0 0 16 16",fill:"currentColor",width:"100%",height:"100%",children:e.jsx("path",{d:"M8 1.5a6.5 6.5 0 0 0 0 13h.25a1.75 1.75 0 0 0 1.2-3.02.35.35 0 0 1 .23-.6h.97A3.85 3.85 0 0 0 14.5 7.03 5.53 5.53 0 0 0 8.97 1.5H8Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm2-1.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0ZM4.5 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm6-1.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"})});return e.jsxs(n,{value:a,onChange:t,size:l.size,children:[e.jsx(s,{value:"desktop",label:"Desktop preview",icon:d,isLabelHidden:!0}),e.jsx(s,{value:"phone",label:"Phone preview",icon:c,isLabelHidden:!0}),e.jsx(s,{value:"theme",label:"Theme",icon:T,isLabelHidden:!0})]})}},v={render:()=>{const[l,a]=r.useState("all");return e.jsxs(n,{value:l,onChange:a,size:"lg",hasDivider:!0,children:[e.jsx(s,{value:"all",label:"All items"}),e.jsx(s,{value:"active",label:"Active"}),e.jsx(s,{value:"archived",label:"Archived"}),e.jsxs("div",{style:{marginInlineStart:"auto",display:"flex",alignItems:"center",gap:"4px"},children:[e.jsx(P,{label:"Filter",variant:"ghost",size:"sm",icon:e.jsx(F,{}),isIconOnly:!0}),e.jsx(P,{label:"New item",variant:"primary",size:"sm",icon:e.jsx(J,{})})]})]})}},k={render:()=>{const[l,a]=r.useState("home");return e.jsx("div",{style:{width:"500px"},children:e.jsxs(n,{value:l,onChange:a,layout:"fill",hasDivider:!0,children:[e.jsx(s,{value:"home",label:"Home"}),e.jsx(s,{value:"projects",label:"Projects"}),e.jsx(s,{value:"settings",label:"Settings"})]})})}},x={render:()=>{const[l,a]=r.useState("overview");return e.jsx("div",{style:{maxWidth:"400px",border:"1px dashed #ccc"},children:e.jsx(n,{value:l,onChange:a,children:e.jsxs(B,{gap:.5,hasSnap:!1,children:[e.jsx(s,{value:"overview",label:"Overview"}),e.jsx(s,{value:"activity",label:"Activity"}),e.jsx(s,{value:"members",label:"Members"}),e.jsx(s,{value:"settings",label:"Settings"}),e.jsx(s,{value:"integrations",label:"Integrations"}),e.jsx(s,{value:"billing",label:"Billing & Plans"}),e.jsx(s,{value:"security",label:"Security"}),e.jsx(s,{value:"notifications",label:"Notifications"}),e.jsx(s,{value:"api",label:"API Keys"})]})})})}},h={render:()=>{const[l,a]=r.useState("dashboard");return e.jsx("div",{style:{maxWidth:"350px"},children:e.jsx(n,{value:l,onChange:a,hasDivider:!0,size:"lg",children:e.jsxs(B,{gap:.5,hasSnap:!1,children:[e.jsx(s,{value:"dashboard",label:"Dashboard"}),e.jsx(s,{value:"analytics",label:"Analytics"}),e.jsx(s,{value:"reports",label:"Reports"}),e.jsx(s,{value:"customers",label:"Customers"}),e.jsx(s,{value:"products",label:"Products"}),e.jsx(s,{value:"orders",label:"Orders"})]})})})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md'
  },
  render: args => {
    const [value, setValue] = useState('home');
    return <XDSTabList value={value} onChange={setValue} size={args.size}>
        <XDSTab value="home" label="Home" />
        <XDSTab value="projects" label="Projects" />
        <XDSTab value="settings" label="Settings" />
      </XDSTabList>;
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md'
  },
  render: args => {
    const [value, setValue] = useState('home');
    return <XDSTabList value={value} onChange={setValue} size={args.size}>
        <XDSTab value="home" label="Home" />
        <XDSTab value="projects" label="Projects" />
        <XDSTabMenu label="More" options={[{
        value: 'analytics',
        label: 'Analytics'
      }, {
        value: 'reports',
        label: 'Reports'
      }, {
        value: 'billing',
        label: 'Billing'
      }]} />
      </XDSTabList>;
  }
}`,...g.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md'
  },
  render: args => {
    const [value, setValue] = useState('analytics');
    return <XDSTabList value={value} onChange={setValue} size={args.size}>
        <XDSTab value="home" label="Home" />
        <XDSTab value="projects" label="Projects" />
        <XDSTabMenu label="More" options={[{
        value: 'analytics',
        label: 'Analytics'
      }, {
        value: 'reports',
        label: 'Reports'
      }]} />
      </XDSTabList>;
  }
}`,...S.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('home');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    }}>
        {(['sm', 'md', 'lg'] as const).map(size => <div key={size}>
            <div style={{
          marginBottom: '8px',
          fontSize: '12px',
          color: '#666',
          fontFamily: 'monospace'
        }}>
              size=\\"{size}\\"
            </div>
            <div style={{
          border: '1px dashed #ccc',
          display: 'inline-flex'
        }}>
              <XDSTabList value={value} onChange={setValue} size={size}>
                <XDSTab value="home" label="Home" />
                <XDSTab value="projects" label="Projects" />
                <XDSTab value="settings" label="Settings" />
              </XDSTabList>
            </div>
          </div>)}
      </div>;
  }
}`,...j.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md'
  },
  render: args => {
    const [value, setValue] = useState('home');
    const HomeIcon = <svg viewBox="0 0 16 16" fill="currentColor" width="100%" height="100%">
        <path d="M8.543 2.232a.75.75 0 0 0-1.085 0l-5.25 5.5A.75.75 0 0 0 2.75 9H4v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2h1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V9h1.25a.75.75 0 0 0 .543-1.268l-5.25-5.5Z" />
      </svg>;
    const CogIcon = <svg viewBox="0 0 16 16" fill="currentColor" width="100%" height="100%">
        <path fillRule="evenodd" d="M6.955 1.45A.5.5 0 0 1 7.452 1h1.096a.5.5 0 0 1 .497.45l.17 1.699c.484.12.94.312 1.356.562l1.321-.816a.5.5 0 0 1 .67.087l.774.774a.5.5 0 0 1 .087.67l-.816 1.321c.25.416.442.872.562 1.356l1.699.17a.5.5 0 0 1 .45.497v1.096a.5.5 0 0 1-.45.497l-1.699.17c-.12.484-.312.94-.562 1.356l.816 1.321a.5.5 0 0 1-.087.67l-.774.774a.5.5 0 0 1-.67.087l-1.321-.816c-.416.25-.872.442-1.356.562l-.17 1.699a.5.5 0 0 1-.497.45H7.452a.5.5 0 0 1-.497-.45l-.17-1.699a4.973 4.973 0 0 1-1.356-.562l-1.321.816a.5.5 0 0 1-.67-.087l-.774-.774a.5.5 0 0 1-.087-.67l.816-1.321a4.972 4.972 0 0 1-.562-1.356l-1.699-.17A.5.5 0 0 1 1 8.548V7.452a.5.5 0 0 1 .45-.497l1.699-.17c.12-.484.312-.94.562-1.356l-.816-1.321a.5.5 0 0 1 .087-.67l.774-.774a.5.5 0 0 1 .67-.087l1.321.816c.416-.25.872-.442 1.356-.562l.17-1.699ZM8 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" clipRule="evenodd" />
      </svg>;
    return <XDSTabList value={value} onChange={setValue} size={args.size}>
        <XDSTab value="home" label="Home" icon={HomeIcon} />
        <XDSTab value="settings" label="Settings" icon={CogIcon} />
      </XDSTabList>;
  }
}`,...D.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'md'
  },
  render: args => {
    const [value, setValue] = useState('desktop');
    const DesktopIcon = <svg viewBox="0 0 16 16" fill="currentColor" width="100%" height="100%">
        <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v5A1.5 1.5 0 0 0 2.5 11h4.75v1.5H5a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5H8.75V11h4.75A1.5 1.5 0 0 0 15 9.5v-5A1.5 1.5 0 0 0 13.5 3h-11Zm0 1.5h11v5h-11v-5Z" />
      </svg>;
    const PhoneIcon = <svg viewBox="0 0 16 16" fill="currentColor" width="100%" height="100%">
        <path d="M5 1.5A1.5 1.5 0 0 0 3.5 3v10A1.5 1.5 0 0 0 5 14.5h6a1.5 1.5 0 0 0 1.5-1.5V3A1.5 1.5 0 0 0 11 1.5H5Zm0 1.5h6v10H5V3Zm2.25 8.5a.75.75 0 0 1 .75-.75h.01a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75Z" />
      </svg>;
    const ThemeIcon = <svg viewBox="0 0 16 16" fill="currentColor" width="100%" height="100%">
        <path d="M8 1.5a6.5 6.5 0 0 0 0 13h.25a1.75 1.75 0 0 0 1.2-3.02.35.35 0 0 1 .23-.6h.97A3.85 3.85 0 0 0 14.5 7.03 5.53 5.53 0 0 0 8.97 1.5H8Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm2-1.75a1 1 0 1 1 2 0 1 1 0 0 1-2 0ZM4.5 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm6-1.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
      </svg>;
    return <XDSTabList value={value} onChange={setValue} size={args.size}>
        <XDSTab value="desktop" label="Desktop preview" icon={DesktopIcon} isLabelHidden />
        <XDSTab value="phone" label="Phone preview" icon={PhoneIcon} isLabelHidden />
        <XDSTab value="theme" label="Theme" icon={ThemeIcon} isLabelHidden />
      </XDSTabList>;
  }
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('all');
    return <XDSTabList value={value} onChange={setValue} size="lg" hasDivider>
        <XDSTab value="all" label="All items" />
        <XDSTab value="active" label="Active" />
        <XDSTab value="archived" label="Archived" />
        <div style={{
        marginInlineStart: 'auto',
        display: 'flex',
        alignItems: 'center',
        gap: '4px'
      }}>
          <XDSButton label="Filter" variant="ghost" size="sm" icon={<FunnelIcon />} isIconOnly />
          <XDSButton label="New item" variant="primary" size="sm" icon={<PlusIcon />} />
        </div>
      </XDSTabList>;
  }
}`,...v.parameters?.docs?.source},description:{story:`Demonstrates a common page header pattern: large tab list items on the left
with action buttons on the right, separated by a full-width divider underneath.`,...v.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('home');
    return <div style={{
      width: '500px'
    }}>
        <XDSTabList value={value} onChange={setValue} layout="fill" hasDivider>
          <XDSTab value="home" label="Home" />
          <XDSTab value="projects" label="Projects" />
          <XDSTab value="settings" label="Settings" />
        </XDSTabList>
      </div>;
  }
}`,...k.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('overview');
    return <div style={{
      maxWidth: '400px',
      border: '1px dashed #ccc'
    }}>
        <XDSTabList value={value} onChange={setValue}>
          <XDSCarousel gap={0.5} hasSnap={false}>
            <XDSTab value="overview" label="Overview" />
            <XDSTab value="activity" label="Activity" />
            <XDSTab value="members" label="Members" />
            <XDSTab value="settings" label="Settings" />
            <XDSTab value="integrations" label="Integrations" />
            <XDSTab value="billing" label="Billing & Plans" />
            <XDSTab value="security" label="Security" />
            <XDSTab value="notifications" label="Notifications" />
            <XDSTab value="api" label="API Keys" />
          </XDSCarousel>
        </XDSTabList>
      </div>;
  }
}`,...x.parameters?.docs?.source},description:{story:`When tabs overflow, wrap XDSTabList's children in XDSCarousel.
The Carousel handles scroll, fade masks, and arrow buttons.
Each tab keeps its intrinsic label width — no truncation.`,...x.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('dashboard');
    return <div style={{
      maxWidth: '350px'
    }}>
        <XDSTabList value={value} onChange={setValue} hasDivider size="lg">
          <XDSCarousel gap={0.5} hasSnap={false}>
            <XDSTab value="dashboard" label="Dashboard" />
            <XDSTab value="analytics" label="Analytics" />
            <XDSTab value="reports" label="Reports" />
            <XDSTab value="customers" label="Customers" />
            <XDSTab value="products" label="Products" />
            <XDSTab value="orders" label="Orders" />
          </XDSCarousel>
        </XDSTabList>
      </div>;
  }
}`,...h.parameters?.docs?.source},description:{story:"Overflow with divider — typical page header in a narrow viewport.",...h.parameters?.docs?.description}}};const ie=["Default","WithMenu","MenuWithSelectedChild","SizeVariants","WithIcons","IconOnly","WithActions","FillLayout","Overflow","OverflowWithDivider"];export{p as Default,k as FillLayout,y as IconOnly,S as MenuWithSelectedChild,x as Overflow,h as OverflowWithDivider,j as SizeVariants,v as WithActions,D as WithIcons,g as WithMenu,ie as __namedExportsOrder,oe as default};
