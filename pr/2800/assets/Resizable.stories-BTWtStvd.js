import{ad as e,r as s}from"./iframe-yRFQ_7VC.js";import{X as n,u as t}from"./XDSResizeHandle-CZjMQgOh.js";import{X as r}from"./XDSStack-CFJ7xIVk.js";import{X as l,b as d}from"./XDSLayoutContent-DBrMIkuH.js";import{X as o}from"./XDSLayoutPanel-DpS1Q-H7.js";import{X as v,a as m}from"./XDSSideNavItem-I7W4dS-C.js";import{X as g}from"./XDSDivider-CD2fc5JP.js";import{X as a}from"./XDSHeading---Kr4LhL.js";import"./preload-helper-Ct5FWWRu.js";import"./stack.stylex-5XIQDawT.js";import"./stackItem.stylex-CYo-hkeX.js";import"./padding.stylex-BDg7w1Mn.js";import"./XDSAppShellMobileContext-S4OI9hZX.js";import"./XDSSideNavRenderContext-Cy9JZzso.js";import"./navItemStyles.stylex-DaSkyk1F.js";import"./useXDSPopover-ChRJmaAz.js";const V={title:"Lab/Resizable",component:n,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Hook-based resizable panel system. useXDSResizable() manages size state; XDSResizeHandle provides the interactive pill-grip separator with optional divider line."}}}},p={render:()=>{const i=t({defaultSize:250,minSizePx:150,maxSizePx:500});return e.jsx("div",{className:"x16nrsnc xh8yej3 xmkeg23 x1y0btm7 x14i3s5s x1hviunn xb3r6kr",children:e.jsx(l,{height:"fill",start:e.jsxs(e.Fragment,{children:[e.jsx(o,{width:i.size,hasDivider:!1,children:e.jsxs(r,{gap:2,children:[e.jsx(a,{level:4,children:"Sidebar"}),e.jsx(s,{children:e.jsxs("span",{className:"x197sbye xfifm61 x1ey7xld",children:[i.size,"px"]})}),e.jsx(s,{children:"Drag the handle to resize. Arrow keys when focused."})]})}),e.jsx(n,{direction:"horizontal",hasDivider:!0,resizable:i.props,label:"Resize sidebar"})]}),content:e.jsx(d,{children:e.jsxs(r,{gap:2,children:[e.jsx(a,{level:4,children:"Content"}),e.jsx(s,{children:"Main content area fills remaining space."})]})})})})}},c={render:()=>{const i=t({defaultSize:250,minSizePx:100,maxSizePx:350});return e.jsx("div",{className:"x16nrsnc xh8yej3 xmkeg23 x1y0btm7 x14i3s5s x1hviunn xb3r6kr",children:e.jsx(l,{height:"fill",header:e.jsxs("div",{style:{height:i.size},children:[e.jsx(o,{padding:4,width:"100%",children:e.jsxs(r,{gap:2,children:[e.jsx(a,{level:4,children:"Editor"}),e.jsx(s,{children:e.jsxs("span",{className:"x197sbye xfifm61 x1ey7xld",children:[i.size,"px"]})})]})}),e.jsx(n,{direction:"vertical",hasDivider:!0,resizable:i.props,label:"Resize editor"})]}),content:e.jsx(d,{children:e.jsxs(r,{gap:2,children:[e.jsx(a,{level:4,children:"Terminal"}),e.jsx(s,{children:"Bottom panel fills remaining space."})]})})})})}},S={render:()=>{const i=t({defaultSize:260,minSizePx:180,collapsible:!0,collapsedSize:60});return e.jsx("div",{className:"x16nrsnc xh8yej3 xmkeg23 x1y0btm7 x14i3s5s x1hviunn xb3r6kr",children:e.jsx(l,{height:"fill",start:e.jsxs(e.Fragment,{children:[!i.isCollapsed&&e.jsx(o,{width:i.size,hasDivider:!1,children:e.jsxs(r,{gap:2,children:[e.jsx(a,{level:4,children:"Sidebar"}),e.jsx(s,{children:e.jsxs("span",{className:"x197sbye xfifm61 x1ey7xld",children:[i.size,"px"]})}),e.jsx(s,{children:"Double-click handle or press Enter to collapse."})]})}),e.jsx(n,{direction:"horizontal",hasDivider:!0,resizable:i.props,label:"Resize sidebar"})]}),content:e.jsx(d,{children:e.jsxs(r,{gap:2,children:[e.jsx(a,{level:4,children:"Content"}),e.jsxs(s,{children:["Sidebar is ",i.isCollapsed?"collapsed":"expanded",".",i.isCollapsed&&e.jsx("button",{onClick:()=>i.expand(),style:{marginLeft:8},children:"Expand"})]})]})})})})}},h={render:()=>{const i=t({defaultSize:220,minSizePx:150,maxSizePx:400}),x=t({defaultSize:280,minSizePx:100,maxSizePx:350});return e.jsx("div",{className:"x16nrsnc xh8yej3 xmkeg23 x1y0btm7 x14i3s5s x1hviunn xb3r6kr",children:e.jsx(l,{height:"fill",start:e.jsxs(e.Fragment,{children:[e.jsx(o,{width:i.size,hasDivider:!1,children:e.jsxs(r,{gap:2,children:[e.jsx(a,{level:4,children:"Explorer"}),e.jsx(s,{children:e.jsxs("span",{className:"x197sbye xfifm61 x1ey7xld",children:[i.size,"px"]})})]})}),e.jsx(n,{direction:"horizontal",hasDivider:!0,resizable:i.props,label:"Resize explorer"})]}),content:e.jsx(d,{padding:0,children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:[e.jsx("div",{style:{flex:"none",height:x.size,padding:16},children:e.jsxs(r,{gap:2,children:[e.jsx(a,{level:4,children:"Editor"}),e.jsx(s,{children:e.jsxs("span",{className:"x197sbye xfifm61 x1ey7xld",children:[x.size,"px"]})})]})}),e.jsx(n,{direction:"vertical",hasDivider:!0,resizable:x.props,label:"Resize editor"}),e.jsx("div",{style:{flex:1,padding:16},children:e.jsx(a,{level:4,children:"Terminal"})})]})})})})}},D={render:()=>{const i=t({defaultSize:260,minSizePx:56,maxSizePx:600,snaps:[56,160,260,400]}),x=i.size<=60;return e.jsx("div",{className:"x16nrsnc xh8yej3 xmkeg23 x1y0btm7 x14i3s5s x1hviunn xb3r6kr",children:e.jsx(l,{height:"fill",start:e.jsxs(e.Fragment,{children:[e.jsx(o,{width:i.size,hasDivider:!1,children:x?e.jsx(s,{children:"☰"}):e.jsxs(r,{gap:2,children:[e.jsx(a,{level:4,children:"Sidebar"}),e.jsx(s,{children:e.jsxs("span",{className:"x197sbye xfifm61 x1ey7xld",children:[i.size,"px"]})}),e.jsx(s,{children:"Snaps to 56 \\u00b7 160 \\u00b7 260 \\u00b7 400px."})]})}),e.jsx(n,{direction:"horizontal",hasDivider:!0,resizable:i.props,label:"Resize sidebar"})]}),content:e.jsx(d,{children:e.jsx(a,{level:4,children:"Content"})})})})}},b={render:()=>{const i=t({defaultSize:250,minSizePx:150,maxSizePx:500});return e.jsx("div",{className:"x16nrsnc xh8yej3 xmkeg23 x1y0btm7 x14i3s5s x1hviunn xb3r6kr",children:e.jsx(l,{height:"fill",start:e.jsxs(e.Fragment,{children:[e.jsx(o,{width:i.size,hasDivider:!1,children:e.jsxs(r,{gap:2,children:[e.jsx(a,{level:4,children:"Sidebar"}),e.jsx(s,{children:e.jsxs("span",{className:"x197sbye xfifm61 x1ey7xld",children:[i.size,"px"]})}),e.jsx(s,{children:"Pill only appears on hover."})]})}),e.jsx(n,{direction:"horizontal",hasDivider:!0,isAlwaysVisible:!1,resizable:i.props,label:"Resize sidebar"})]}),content:e.jsx(d,{children:e.jsx(a,{level:4,children:"Content"})})})})}},z={render:()=>{const i=t({defaultSize:250,minSizePx:150});return e.jsx("div",{className:"x16nrsnc xh8yej3 xmkeg23 x1y0btm7 x14i3s5s x1hviunn xb3r6kr",children:e.jsx(l,{height:"fill",start:e.jsxs(e.Fragment,{children:[e.jsx(o,{width:i.size,hasDivider:!1,children:e.jsx(a,{level:4,children:"Sidebar (locked)"})}),e.jsx(n,{direction:"horizontal",hasDivider:!0,resizable:i.props,isDisabled:!0,label:"Locked"})]}),content:e.jsx(d,{children:e.jsx(a,{level:4,children:"Content"})})})})}},X={render:()=>{const i=t({defaultSize:260,minSizePx:180,maxSizePx:450,collapsible:!0,collapsedSize:50});return e.jsx("div",{className:"x16nrsnc xh8yej3 xmkeg23 x1y0btm7 x14i3s5s x1hviunn xb3r6kr",style:{height:500},children:e.jsx(l,{height:"fill",start:e.jsxs(e.Fragment,{children:[!i.isCollapsed&&e.jsx(o,{resizable:i.props,hasDivider:!1,role:"navigation",label:"Sidebar",children:e.jsxs(r,{gap:2,children:[e.jsx(a,{level:4,children:"Navigation"}),e.jsx(s,{children:e.jsxs("span",{className:"x197sbye xfifm61 x1ey7xld",children:[i.size,"px"]})}),e.jsx(g,{}),e.jsx(s,{children:"Drag the handle to resize."}),e.jsx(s,{children:"Double-click or press Enter to collapse."})]})}),e.jsx(n,{direction:"horizontal",hasDivider:!0,resizable:i.props,label:"Resize navigation"})]}),content:e.jsx(d,{children:e.jsxs(r,{gap:3,children:[e.jsx(a,{level:3,children:"Main Content"}),e.jsx(s,{children:"XDSLayoutPanel with resizable prop + XDSResizeHandle with hasDivider."}),e.jsxs(s,{children:["Sidebar is"," ",e.jsx("strong",{children:i.isCollapsed?"collapsed":"expanded"}),i.isCollapsed&&e.jsx("button",{onClick:()=>i.expand(),style:{marginLeft:8},children:"Expand"})]})]})})})})}},u={render:()=>{const i=t({defaultSize:260,minSizePx:200,maxSizePx:400,collapsible:!0,collapsedSize:50,snaps:[56,260]});return e.jsx("div",{className:"x16nrsnc xh8yej3 xmkeg23 x1y0btm7 x14i3s5s x1hviunn xb3r6kr",style:{height:500},children:e.jsx(l,{height:"fill",start:e.jsxs(e.Fragment,{children:[!i.isCollapsed&&e.jsx(o,{width:i.size,hasDivider:!1,padding:0,children:e.jsxs(v,{children:[e.jsx(m,{label:"Home",isSelected:!0}),e.jsx(m,{label:"Dashboard"}),e.jsx(m,{label:"Settings"})]})}),e.jsx(n,{direction:"horizontal",hasDivider:!0,resizable:i.props,label:"Resize navigation"})]}),content:e.jsx(d,{children:e.jsxs(r,{gap:3,children:[e.jsx(a,{level:3,children:"Dashboard"}),e.jsxs(s,{children:[e.jsxs("span",{className:"x197sbye xfifm61 x1ey7xld",children:[i.size,"px"]})," — ",i.isCollapsed?"Collapsed":"Expanded"]}),e.jsx(s,{children:"SideNav width driven by useXDSResizable. Double-click handle to collapse."})]})})})})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const sidebar = useXDSResizable({
      defaultSize: 250,
      minSizePx: 150,
      maxSizePx: 500
    });
    return <div {...stylex.props(ps.shell)}>
        <XDSLayout height="fill" start={<>
              <XDSLayoutPanel width={sidebar.size} hasDivider={false}>
                <XDSStack gap={2}>
                  <XDSHeading level={4}>Sidebar</XDSHeading>
                  <XDSText>
                    <span {...stylex.props(ps.sz)}>{sidebar.size}px</span>
                  </XDSText>
                  <XDSText>
                    Drag the handle to resize. Arrow keys when focused.
                  </XDSText>
                </XDSStack>
              </XDSLayoutPanel>
              <XDSResizeHandle direction="horizontal" hasDivider resizable={sidebar.props} label="Resize sidebar" />
            </>} content={<XDSLayoutContent>
              <XDSStack gap={2}>
                <XDSHeading level={4}>Content</XDSHeading>
                <XDSText>Main content area fills remaining space.</XDSText>
              </XDSStack>
            </XDSLayoutContent>} />
      </div>;
  }
}`,...p.parameters?.docs?.source},description:{story:"Basic horizontal split with divider line.",...p.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const top = useXDSResizable({
      defaultSize: 250,
      minSizePx: 100,
      maxSizePx: 350
    });
    return <div {...stylex.props(ps.shell)}>
        <XDSLayout height="fill" header={<div style={{
        height: top.size
      }}>
              <XDSLayoutPanel padding={4} width="100%">
                <XDSStack gap={2}>
                  <XDSHeading level={4}>Editor</XDSHeading>
                  <XDSText>
                    <span {...stylex.props(ps.sz)}>{top.size}px</span>
                  </XDSText>
                </XDSStack>
              </XDSLayoutPanel>
              <XDSResizeHandle direction="vertical" hasDivider resizable={top.props} label="Resize editor" />
            </div>} content={<XDSLayoutContent>
              <XDSStack gap={2}>
                <XDSHeading level={4}>Terminal</XDSHeading>
                <XDSText>Bottom panel fills remaining space.</XDSText>
              </XDSStack>
            </XDSLayoutContent>} />
      </div>;
  }
}`,...c.parameters?.docs?.source},description:{story:"Vertical split with divider line.",...c.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    const sidebar = useXDSResizable({
      defaultSize: 260,
      minSizePx: 180,
      collapsible: true,
      collapsedSize: 60
    });
    return <div {...stylex.props(ps.shell)}>
        <XDSLayout height="fill" start={<>
              {!sidebar.isCollapsed && <XDSLayoutPanel width={sidebar.size} hasDivider={false}>
                  <XDSStack gap={2}>
                    <XDSHeading level={4}>Sidebar</XDSHeading>
                    <XDSText>
                      <span {...stylex.props(ps.sz)}>{sidebar.size}px</span>
                    </XDSText>
                    <XDSText>
                      Double-click handle or press Enter to collapse.
                    </XDSText>
                  </XDSStack>
                </XDSLayoutPanel>}
              <XDSResizeHandle direction="horizontal" hasDivider resizable={sidebar.props} label="Resize sidebar" />
            </>} content={<XDSLayoutContent>
              <XDSStack gap={2}>
                <XDSHeading level={4}>Content</XDSHeading>
                <XDSText>
                  Sidebar is {sidebar.isCollapsed ? 'collapsed' : 'expanded'}.
                  {sidebar.isCollapsed && <button onClick={() => sidebar.expand()} style={{
              marginLeft: 8
            }}>
                      Expand
                    </button>}
                </XDSText>
              </XDSStack>
            </XDSLayoutContent>} />
      </div>;
  }
}`,...S.parameters?.docs?.source},description:{story:"Collapsible sidebar — drag past threshold or double-click to collapse.",...S.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const explorer = useXDSResizable({
      defaultSize: 220,
      minSizePx: 150,
      maxSizePx: 400
    });
    const editor = useXDSResizable({
      defaultSize: 280,
      minSizePx: 100,
      maxSizePx: 350
    });
    return <div {...stylex.props(ps.shell)}>
        <XDSLayout height="fill" start={<>
              <XDSLayoutPanel width={explorer.size} hasDivider={false}>
                <XDSStack gap={2}>
                  <XDSHeading level={4}>Explorer</XDSHeading>
                  <XDSText>
                    <span {...stylex.props(ps.sz)}>{explorer.size}px</span>
                  </XDSText>
                </XDSStack>
              </XDSLayoutPanel>
              <XDSResizeHandle direction="horizontal" hasDivider resizable={explorer.props} label="Resize explorer" />
            </>} content={<XDSLayoutContent padding={0}>
              <div style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}>
                <div style={{
            flex: 'none',
            height: editor.size,
            padding: 16
          }}>
                  <XDSStack gap={2}>
                    <XDSHeading level={4}>Editor</XDSHeading>
                    <XDSText>
                      <span {...stylex.props(ps.sz)}>{editor.size}px</span>
                    </XDSText>
                  </XDSStack>
                </div>
                <XDSResizeHandle direction="vertical" hasDivider resizable={editor.props} label="Resize editor" />
                <div style={{
            flex: 1,
            padding: 16
          }}>
                  <XDSHeading level={4}>Terminal</XDSHeading>
                </div>
              </div>
            </XDSLayoutContent>} />
      </div>;
  }
}`,...h.parameters?.docs?.source},description:{story:"Three-panel IDE layout with nested horizontal + vertical splits.",...h.parameters?.docs?.description}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => {
    const sidebar = useXDSResizable({
      defaultSize: 260,
      minSizePx: 56,
      maxSizePx: 600,
      snaps: [56, 160, 260, 400]
    });
    const isRail = sidebar.size <= 60;
    return <div {...stylex.props(ps.shell)}>
        <XDSLayout height="fill" start={<>
              <XDSLayoutPanel width={sidebar.size} hasDivider={false}>
                {isRail ? <XDSText>{'\\u2630'}</XDSText> : <XDSStack gap={2}>
                    <XDSHeading level={4}>Sidebar</XDSHeading>
                    <XDSText>
                      <span {...stylex.props(ps.sz)}>{sidebar.size}px</span>
                    </XDSText>
                    <XDSText>
                      Snaps to 56 \\u00b7 160 \\u00b7 260 \\u00b7 400px.
                    </XDSText>
                  </XDSStack>}
              </XDSLayoutPanel>
              <XDSResizeHandle direction="horizontal" hasDivider resizable={sidebar.props} label="Resize sidebar" />
            </>} content={<XDSLayoutContent>
              <XDSHeading level={4}>Content</XDSHeading>
            </XDSLayoutContent>} />
      </div>;
  }
}`,...D.parameters?.docs?.source},description:{story:"Snap points — sidebar snaps to predefined widths.",...D.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const sidebar = useXDSResizable({
      defaultSize: 250,
      minSizePx: 150,
      maxSizePx: 500
    });
    return <div {...stylex.props(ps.shell)}>
        <XDSLayout height="fill" start={<>
              <XDSLayoutPanel width={sidebar.size} hasDivider={false}>
                <XDSStack gap={2}>
                  <XDSHeading level={4}>Sidebar</XDSHeading>
                  <XDSText>
                    <span {...stylex.props(ps.sz)}>{sidebar.size}px</span>
                  </XDSText>
                  <XDSText>Pill only appears on hover.</XDSText>
                </XDSStack>
              </XDSLayoutPanel>
              <XDSResizeHandle direction="horizontal" hasDivider isAlwaysVisible={false} resizable={sidebar.props} label="Resize sidebar" />
            </>} content={<XDSLayoutContent>
              <XDSHeading level={4}>Content</XDSHeading>
            </XDSLayoutContent>} />
      </div>;
  }
}`,...b.parameters?.docs?.source},description:{story:"Pill hidden at rest — only appears on hover/focus.",...b.parameters?.docs?.description}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const sidebar = useXDSResizable({
      defaultSize: 250,
      minSizePx: 150
    });
    return <div {...stylex.props(ps.shell)}>
        <XDSLayout height="fill" start={<>
              <XDSLayoutPanel width={sidebar.size} hasDivider={false}>
                <XDSHeading level={4}>Sidebar (locked)</XDSHeading>
              </XDSLayoutPanel>
              <XDSResizeHandle direction="horizontal" hasDivider resizable={sidebar.props} isDisabled label="Locked" />
            </>} content={<XDSLayoutContent>
              <XDSHeading level={4}>Content</XDSHeading>
            </XDSLayoutContent>} />
      </div>;
  }
}`,...z.parameters?.docs?.source},description:{story:"Disabled handle — divider visible but non-interactive.",...z.parameters?.docs?.description}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => {
    const sidebar = useXDSResizable({
      defaultSize: 260,
      minSizePx: 180,
      maxSizePx: 450,
      collapsible: true,
      collapsedSize: 50
    });
    return <div {...stylex.props(ps.shell)} style={{
      height: 500
    }}>
        <XDSLayout height="fill" start={<>
              {!sidebar.isCollapsed && <XDSLayoutPanel resizable={sidebar.props} hasDivider={false} role="navigation" label="Sidebar">
                  <XDSStack gap={2}>
                    <XDSHeading level={4}>Navigation</XDSHeading>
                    <XDSText>
                      <span {...stylex.props(ps.sz)}>{sidebar.size}px</span>
                    </XDSText>
                    <XDSDivider />
                    <XDSText>Drag the handle to resize.</XDSText>
                    <XDSText>Double-click or press Enter to collapse.</XDSText>
                  </XDSStack>
                </XDSLayoutPanel>}
              <XDSResizeHandle direction="horizontal" hasDivider resizable={sidebar.props} label="Resize navigation" />
            </>} content={<XDSLayoutContent>
              <XDSStack gap={3}>
                <XDSHeading level={3}>Main Content</XDSHeading>
                <XDSText>
                  XDSLayoutPanel with resizable prop + XDSResizeHandle with
                  hasDivider.
                </XDSText>
                <XDSText>
                  Sidebar is{' '}
                  <strong>
                    {sidebar.isCollapsed ? 'collapsed' : 'expanded'}
                  </strong>
                  {sidebar.isCollapsed && <button onClick={() => sidebar.expand()} style={{
              marginLeft: 8
            }}>
                      Expand
                    </button>}
                </XDSText>
              </XDSStack>
            </XDSLayoutContent>} />
      </div>;
  }
}`,...X.parameters?.docs?.source},description:{story:"Integration with XDSLayout — resizable sidebar with collapsible.",...X.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const nav = useXDSResizable({
      defaultSize: 260,
      minSizePx: 200,
      maxSizePx: 400,
      collapsible: true,
      collapsedSize: 50,
      snaps: [56, 260]
    });
    return <div {...stylex.props(ps.shell)} style={{
      height: 500
    }}>
        <XDSLayout height="fill" start={<>
              {!nav.isCollapsed && <XDSLayoutPanel width={nav.size} hasDivider={false} padding={0}>
                  <XDSSideNav>
                    <XDSSideNavItem label="Home" isSelected />
                    <XDSSideNavItem label="Dashboard" />
                    <XDSSideNavItem label="Settings" />
                  </XDSSideNav>
                </XDSLayoutPanel>}
              <XDSResizeHandle direction="horizontal" hasDivider resizable={nav.props} label="Resize navigation" />
            </>} content={<XDSLayoutContent>
              <XDSStack gap={3}>
                <XDSHeading level={3}>Dashboard</XDSHeading>
                <XDSText>
                  <span {...stylex.props(ps.sz)}>{nav.size}px</span>
                  {' \\u2014 '}
                  {nav.isCollapsed ? 'Collapsed' : 'Expanded'}
                </XDSText>
                <XDSText>
                  SideNav width driven by useXDSResizable. Double-click handle
                  to collapse.
                </XDSText>
              </XDSStack>
            </XDSLayoutContent>} />
      </div>;
  }
}`,...u.parameters?.docs?.source},description:{story:"AppShell with resizable SideNav.",...u.parameters?.docs?.description}}};const M=["HorizontalSplit","VerticalSplit","Collapsible","ThreePanelIDE","SnapPoints","HiddenPill","Disabled","WithXDSLayout","WithAppShell"];export{S as Collapsible,z as Disabled,b as HiddenPill,p as HorizontalSplit,D as SnapPoints,h as ThreePanelIDE,c as VerticalSplit,u as WithAppShell,X as WithXDSLayout,M as __namedExportsOrder,V as default};
