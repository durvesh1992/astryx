import{ad as t,X as b,m as v,at as e}from"./iframe-yRFQ_7VC.js";import{u as f}from"./XDSAppShellMobileContext-S4OI9hZX.js";function n({ref:i,children:l,label:s="Open navigation","data-testid":r,xstyle:u,className:d,style:c}){const{isMobile:p,isMobileNavEnabled:m,toggleMobileNav:g}=f();return!p||!m?null:t.jsx(b,{ref:i,variant:"ghost",label:s,icon:l??t.jsx(v,{icon:"menu",color:"inherit"}),onClick:g,"data-testid":r??"mobile-nav-toggle",xstyle:u,className:d,style:c,isIconOnly:!0})}n.displayName="XDSMobileNavToggle";n.__docgenInfo={description:`Mobile nav toggle button. Reads from AppShell context to open/close
the mobile navigation drawer.

Renders nothing when above the mobile breakpoint — safe to include
unconditionally in your layout.

@example
\`\`\`
<div className="my-toolbar">
  <XDSMobileNavToggle />
  <h1>Page Title</h1>
</div>
<XDSMobileNavToggle label="Menu">
  <MyCustomMenuIcon />
</XDSMobileNavToggle>
\`\`\``,methods:[],displayName:"XDSMobileNavToggle",props:{ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:"Custom content to render instead of the default hamburger icon."},label:{required:!1,tsType:{name:"string"},description:`Accessible label for the toggle button.
@default 'Open navigation'`,defaultValue:{value:"'Open navigation'",computed:!1}},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for the button element."}},composes:["Pick"]};const o=e.createContext("default");o.displayName="XDSTopNavRenderContext";function T(){return e.use(o)}const a=e.createContext(null);a.displayName="XDSTopNavMobileContentContext";function S(){return e.use(a)}export{n as X,a,o as b,T as c,S as u};
