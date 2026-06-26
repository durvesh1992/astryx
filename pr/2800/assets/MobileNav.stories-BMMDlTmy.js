import{at as r,ad as e,X as c,m as f,aR as N}from"./iframe-yRFQ_7VC.js";import{X as s}from"./navItemStyles.stylex-DaSkyk1F.js";import{a as n,X as x}from"./XDSSideNavItem-I7W4dS-C.js";import{b as i,F as j,a as O,X as C}from"./FolderIcon-Z3IGoqF4.js";import{X as M}from"./XDSNavIcon-C4lL7gpS.js";import{F as v}from"./HomeIcon-3a052QAK.js";import{F as l}from"./HomeIcon-zfW6wt4l.js";import{F as d}from"./FolderIcon-DsMd81hJ.js";import{F as X}from"./ChartBarIcon-BUStbx20.js";import{F as D}from"./Cog6ToothIcon-FIJug-Ow.js";import{F as y}from"./CubeIcon-Bt-IooIW.js";import"./preload-helper-Ct5FWWRu.js";import"./XDSHeading---Kr4LhL.js";import"./XDSAppShellMobileContext-S4OI9hZX.js";import"./XDSSideNavRenderContext-Cy9JZzso.js";import"./XDSResizeHandle-CZjMQgOh.js";import"./useXDSPopover-ChRJmaAz.js";import"./XDSLink-CIWTg4UH.js";import"./computeTargetAndRel-BlG0ENK0.js";import"./useXDSInteractiveRole-C4QNKBOy.js";import"./useListFocus-C2Hg4nex.js";const V={title:"Core/MobileNav",component:s,tags:["autodocs"],parameters:{layout:"centered"}},p={render:()=>{const[a,t]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(c,{label:"Open Navigation",icon:e.jsx(f,{icon:"menu",color:"inherit"}),variant:"ghost",onClick:()=>t(!0),isIconOnly:!0}),e.jsxs(s,{isOpen:a,onOpenChange:o=>t(o),header:"Navigation",children:[e.jsxs(i,{title:"Main",children:[e.jsx(n,{label:"Dashboard",icon:l,selectedIcon:v,isSelected:!0,href:"/dashboard"}),e.jsx(n,{label:"Projects",icon:d,selectedIcon:j,href:"/projects"}),e.jsx(n,{label:"Analytics",icon:X,href:"/analytics"})]}),e.jsxs(i,{title:"Settings",children:[e.jsx(n,{label:"General",icon:D,href:"/settings"}),e.jsx(n,{label:"Team",icon:O,href:"/team"})]})]})]})}},h={name:"With SideNav Children",render:()=>{const[a,t]=r.useState(!1),o=e.jsxs(e.Fragment,{children:[e.jsxs(i,{title:"Main",children:[e.jsx(n,{label:"Dashboard",icon:l,selectedIcon:v,isSelected:!0,href:"/dashboard"}),e.jsx(n,{label:"Projects",icon:d,selectedIcon:j,href:"/projects"}),e.jsx(n,{label:"Analytics",icon:X,href:"/analytics"})]}),e.jsx(i,{title:"Settings",children:e.jsx(n,{label:"General",icon:D,href:"/settings"})})]});return e.jsxs(e.Fragment,{children:[e.jsx(c,{label:"Open Drawer",onClick:()=>t(!0)}),e.jsx(s,{isOpen:a,onOpenChange:S=>t(S),header:"My App",children:o})]})}},m={name:"Responsive Pattern",render:()=>{const a=N("(max-width: 768px)"),[t,o]=r.useState(!1),S=e.jsxs(e.Fragment,{children:[e.jsxs(i,{title:"Main",children:[e.jsx(n,{label:"Dashboard",icon:l,selectedIcon:v,isSelected:!0,href:"/"}),e.jsx(n,{label:"Projects",icon:d,selectedIcon:j,href:"/projects"}),e.jsx(n,{label:"Analytics",icon:X,href:"/analytics"})]}),e.jsxs(i,{title:"Settings",children:[e.jsx(n,{label:"General",icon:D,href:"/settings"}),e.jsx(n,{label:"Team",icon:O,href:"/team"})]})]});return a?e.jsxs(e.Fragment,{children:[e.jsx(c,{label:"Menu",icon:e.jsx(f,{icon:"menu",color:"inherit"}),variant:"ghost",onClick:()=>o(!0),isIconOnly:!0}),e.jsx(s,{isOpen:t,onOpenChange:g=>o(g),header:"My App",children:S})]}):e.jsx("div",{style:{width:280,height:600,border:"1px solid #e5e7eb"},children:e.jsx(x,{header:e.jsx(C,{icon:e.jsx(M,{icon:e.jsx(y,{style:{width:16,height:16}})}),heading:"My App",headingHref:"/"}),children:S})})}},u={name:"End Side",render:()=>{const[a,t]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(c,{label:"Open from Right",onClick:()=>t(!0)}),e.jsx(s,{isOpen:a,onOpenChange:o=>t(o),header:"Settings",side:"end",children:e.jsxs(i,{title:"Settings",children:[e.jsx(n,{label:"General",icon:D,href:"/settings"}),e.jsx(n,{label:"Team",icon:O,href:"/team"})]})})]})}},I={name:"Custom Width",render:()=>{const[a,t]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(c,{label:"Open Wide Drawer",onClick:()=>t(!0)}),e.jsx(s,{isOpen:a,onOpenChange:o=>t(o),header:"Wide Navigation",width:360,children:e.jsxs(i,{title:"Main",children:[e.jsx(n,{label:"Dashboard",icon:l,selectedIcon:v,isSelected:!0,href:"/dashboard"}),e.jsx(n,{label:"Projects",icon:d,href:"/projects"})]})})]})}},b={name:"Without Title",render:()=>{const[a,t]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(c,{label:"Open Navigation",icon:e.jsx(f,{icon:"menu",color:"inherit"}),variant:"ghost",onClick:()=>t(!0),isIconOnly:!0}),e.jsx(s,{isOpen:a,onOpenChange:o=>t(o),children:e.jsxs(i,{title:"Main",children:[e.jsx(n,{label:"Dashboard",icon:l,isSelected:!0,href:"/dashboard"}),e.jsx(n,{label:"Projects",icon:d,href:"/projects"})]})})]})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <XDSButton label="Open Navigation" icon={<XDSIcon icon="menu" color="inherit" />} variant="ghost" onClick={() => setIsOpen(true)} isIconOnly />
        <XDSMobileNav isOpen={isOpen} onOpenChange={open => setIsOpen(open)} header="Navigation">
          <XDSSideNavSection title="Main">
            <XDSSideNavItem label="Dashboard" icon={HomeIcon} selectedIcon={HomeIconSolid} isSelected href="/dashboard" />
            <XDSSideNavItem label="Projects" icon={FolderIcon} selectedIcon={FolderIconSolid} href="/projects" />
            <XDSSideNavItem label="Analytics" icon={ChartBarIcon} href="/analytics" />
          </XDSSideNavSection>
          <XDSSideNavSection title="Settings">
            <XDSSideNavItem label="General" icon={Cog6ToothIcon} href="/settings" />
            <XDSSideNavItem label="Team" icon={UserGroupIcon} href="/team" />
          </XDSSideNavSection>
        </XDSMobileNav>
      </>;
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'With SideNav Children',
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const navSections = <>
        <XDSSideNavSection title="Main">
          <XDSSideNavItem label="Dashboard" icon={HomeIcon} selectedIcon={HomeIconSolid} isSelected href="/dashboard" />
          <XDSSideNavItem label="Projects" icon={FolderIcon} selectedIcon={FolderIconSolid} href="/projects" />
          <XDSSideNavItem label="Analytics" icon={ChartBarIcon} href="/analytics" />
        </XDSSideNavSection>
        <XDSSideNavSection title="Settings">
          <XDSSideNavItem label="General" icon={Cog6ToothIcon} href="/settings" />
        </XDSSideNavSection>
      </>;
    return <>
        <XDSButton label="Open Drawer" onClick={() => setIsOpen(true)} />
        <XDSMobileNav isOpen={isOpen} onOpenChange={open => setIsOpen(open)} header="My App">
          {navSections}
        </XDSMobileNav>
      </>;
  }
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Responsive Pattern',
  render: () => {
    const isMobile = useMediaQuery('(max-width: 768px)');
    const [drawerOpen, setDrawerOpen] = useState(false);
    const navSections = <>
        <XDSSideNavSection title="Main">
          <XDSSideNavItem label="Dashboard" icon={HomeIcon} selectedIcon={HomeIconSolid} isSelected href="/" />
          <XDSSideNavItem label="Projects" icon={FolderIcon} selectedIcon={FolderIconSolid} href="/projects" />
          <XDSSideNavItem label="Analytics" icon={ChartBarIcon} href="/analytics" />
        </XDSSideNavSection>
        <XDSSideNavSection title="Settings">
          <XDSSideNavItem label="General" icon={Cog6ToothIcon} href="/settings" />
          <XDSSideNavItem label="Team" icon={UserGroupIcon} href="/team" />
        </XDSSideNavSection>
      </>;
    if (isMobile) {
      return <>
          <XDSButton label="Menu" icon={<XDSIcon icon="menu" color="inherit" />} variant="ghost" onClick={() => setDrawerOpen(true)} isIconOnly />
          <XDSMobileNav isOpen={drawerOpen} onOpenChange={open => setDrawerOpen(open)} header="My App">
            {navSections}
          </XDSMobileNav>
        </>;
    }
    return <div style={{
      width: 280,
      height: 600,
      border: '1px solid #e5e7eb'
    }}>
        <XDSSideNav header={<XDSSideNavHeading icon={<XDSNavIcon icon={<CubeIcon style={{
        width: 16,
        height: 16
      }} />} />} heading="My App" headingHref="/" />}>
          {navSections}
        </XDSSideNav>
      </div>;
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'End Side',
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <XDSButton label="Open from Right" onClick={() => setIsOpen(true)} />
        <XDSMobileNav isOpen={isOpen} onOpenChange={open => setIsOpen(open)} header="Settings" side="end">
          <XDSSideNavSection title="Settings">
            <XDSSideNavItem label="General" icon={Cog6ToothIcon} href="/settings" />
            <XDSSideNavItem label="Team" icon={UserGroupIcon} href="/team" />
          </XDSSideNavSection>
        </XDSMobileNav>
      </>;
  }
}`,...u.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'Custom Width',
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <XDSButton label="Open Wide Drawer" onClick={() => setIsOpen(true)} />
        <XDSMobileNav isOpen={isOpen} onOpenChange={open => setIsOpen(open)} header="Wide Navigation" width={360}>
          <XDSSideNavSection title="Main">
            <XDSSideNavItem label="Dashboard" icon={HomeIcon} selectedIcon={HomeIconSolid} isSelected href="/dashboard" />
            <XDSSideNavItem label="Projects" icon={FolderIcon} href="/projects" />
          </XDSSideNavSection>
        </XDSMobileNav>
      </>;
  }
}`,...I.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Without Title',
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <XDSButton label="Open Navigation" icon={<XDSIcon icon="menu" color="inherit" />} variant="ghost" onClick={() => setIsOpen(true)} isIconOnly />
        <XDSMobileNav isOpen={isOpen} onOpenChange={open => setIsOpen(open)}>
          <XDSSideNavSection title="Main">
            <XDSSideNavItem label="Dashboard" icon={HomeIcon} isSelected href="/dashboard" />
            <XDSSideNavItem label="Projects" icon={FolderIcon} href="/projects" />
          </XDSSideNavSection>
        </XDSMobileNav>
      </>;
  }
}`,...b.parameters?.docs?.source}}};const Y=["Default","WithSideNavChildren","ResponsivePattern","EndSide","CustomWidth","WithoutTitle"];export{I as CustomWidth,p as Default,u as EndSide,m as ResponsivePattern,h as WithSideNavChildren,b as WithoutTitle,Y as __namedExportsOrder,V as default};
