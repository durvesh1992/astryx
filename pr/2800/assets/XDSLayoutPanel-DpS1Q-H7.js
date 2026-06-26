import{at as d,ad as w,ai as L,ar as R,aZ as $}from"./iframe-yRFQ_7VC.js";import{a as z,d as E}from"./XDSLayoutContent-DBrMIkuH.js";import{c as T,a as q,b as Z,e as W}from"./padding.stylex-BDg7w1Mn.js";const n={panel:{kB7OPa:"xds9f619",kmuXW:"xds2lah0s",kVQacm:"xds7giv3",kZCmMZ:"xdswjyata",kwRFfy:"xds1peupej",kLKAdn:"xdsqty4a",kGO01o:"xdsg476vw","--container-padding-inline-start":"xds408pgh","--container-padding-inline-end":"xdsikqloz","--container-padding-block-start":"xdsjmgx01","--container-padding-block-end":"xdsi9ns85",$$css:!0},startPanel:{kZCmMZ:"xds139j0dd",kE3dHu:null,kpe85a:null,$$css:!0},endPanel:{kwRFfy:"xdspc6k2p",kE3dHu:null,kpe85a:null,$$css:!0},noHeader:{kLKAdn:"xds81pis9",$$css:!0},noFooter:{kGO01o:"xdson7vh3",$$css:!0},fullBleed:{kZCmMZ:"xds1c1uobl",kwRFfy:"xdsyri2b",kE3dHu:null,kpe85a:null,kLKAdn:"xdsexx8yu",kGO01o:"xds18d9i69","--container-padding-inline-start":"xdsrhngw9","--container-padding-inline-end":"xdsjsfl84","--container-padding-block-start":"xds1047aw6","--container-padding-block-end":"xdsax9j7h",$$css:!0},scrollable:{kVQacm:"xdsysyzu8",kXHlph:null,kORKVm:null,$$css:!0},dividerEnd:{ke9TFa:"xds1lun4ml",kZ1KPB:null,kWqL5O:null,k8ry5P:"xds18b5jzi",k4WBpm:null,kSWEuD:null,kBCPoo:"xds1gejf6u",kaZRDh:null,k26BEO:null,$$css:!0},dividerStart:{k2ei4v:"xdspilrb4",kZ1KPB:null,kWqL5O:null,kVhnKS:"xds1t7ytsu",k4WBpm:null,kSWEuD:null,kGJrpR:"xds1j92z86",kaZRDh:null,k26BEO:null,$$css:!0},collapseStart:{keTefX:"xds1wim8z0",koQZXg:null,km5ZXQ:null,$$css:!0},collapseEnd:{k71WvV:"xds1kpg4um",koQZXg:null,km5ZXQ:null,$$css:!0}},j={sizing:t=>[{kzqmXN:t!=null?"xds5lhr3w":t,$$css:!0},{"--x-width":(a=>typeof a=="number"?a+"px":a??void 0)(t)}]};function u({children:t,hasDivider:a=!1,isScrollable:p=!0,label:c,padding:e,role:m,width:y,resizable:o,xstyle:f,className:k,style:h,ref:x,...v}){const r=d.use(z),{hasHeader:S,hasFooter:g}=d.use(E),b=o?o._size:y,s=r==="start",i=r==="end",l=e===0,X=!a&&!l&&e==null,D=s?n.dividerEnd:i?n.dividerStart:null,P=s?n.collapseEnd:i?n.collapseStart:null;return w.jsx("div",{ref:x,role:m,"aria-label":c,...L($("layout-panel"),R(n.panel,j.sizing(b??null),s&&!l&&e==null&&n.startPanel,i&&!l&&e==null&&n.endPanel,!S&&!l&&e==null&&n.noHeader,!g&&!l&&e==null&&n.noFooter,p&&n.scrollable,l&&n.fullBleed,e!=null&&W[e],e!=null&&Z[e],e!=null&&q[e],e!=null&&T[e],a&&D,X&&P,f),k,h),...v,children:t})}u.displayName="XDSLayoutPanel";u.__docgenInfo={description:`Sidebar or side panel for XDSLayout. Use in the \`start\` slot for left navigation
or in the \`end\` slot for detail/inspector panels.
Renders with optional divider and context-aware padding.
Divider position is auto-detected based on which slot the panel is in.

Already provides its own padding and scroll — don't add padding or
overflow to children. Use \`padding={0}\` if you need edge-to-edge content.

@example
\`\`\`
<XDSLayoutContainer variant="card">
  <XDSLayout
    start={
      <XDSLayoutPanel hasDivider role="navigation">
        <Navigation />
      </XDSLayoutPanel>
    }
    content={<XDSLayoutContent>Main content</XDSLayoutContent>}
    end={
      <XDSLayoutPanel hasDivider role="complementary">
        <Sidebar />
      </XDSLayoutPanel>
    }
  />
</XDSLayoutContainer>
\`\`\``,methods:[],displayName:"XDSLayoutPanel",props:{xstyle:{required:!1,tsType:{name:"StyleXStyles"},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:"Content to render inside the panel."},hasDivider:{required:!1,tsType:{name:"boolean"},description:`Adds a themed border on the appropriate edge.
- Start panel: border on end edge (right in LTR)
- End panel: border on start edge (left in LTR)
When false, spacing collapse is applied automatically for seamless visual flow.

Note: When using \`resizable\` with an adjacent \`XDSResizeHandle hasDivider\`,
set this to \`false\` to avoid a double-line artifact.
@default false`,defaultValue:{value:"false",computed:!1}},padding:{required:!1,tsType:{name:"union",raw:"0 | 0.5 | 1 | 1.5 | 2 | 3 | 4 | 5 | 6 | 8 | 10",elements:[{name:"literal",value:"0"},{name:"literal",value:"0.5"},{name:"literal",value:"1"},{name:"literal",value:"1.5"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"8"},{name:"literal",value:"10"}]},description:`Internal padding of the panel using the spacing scale.
Accepts numeric spacing steps: 0, 0.5, 1, 1.5, 2, 3, 4, 5, 6, 8, 10.
Overrides the default padding from the layout container.`},isScrollable:{required:!1,tsType:{name:"boolean"},description:`Enables scrollable overflow for the panel.
Set to false for auto-height layouts where sticky positioning
needs to work with parent containers.
@default true`,defaultValue:{value:"true",computed:!1}},label:{required:!1,tsType:{name:"string"},description:`Accessible label for the landmark.
Required when role is set and multiple landmarks of the same type exist.`},role:{required:!1,tsType:{name:"AriaRole"},description:`ARIA landmark role for accessibility.
Use 'navigation' or 'complementary' only for top-level layouts (not nested).`},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Width of the panel.\nNumbers are treated as pixels, strings are used as-is.\nWhen `resizable` is provided, this is ignored — the hook controls width."},resizable:{required:!1,tsType:{name:"ResizableProps"},description:`Resize props from \`useXDSResizable()\`. When provided, the panel width
is driven by the hook and a resize handle should be placed adjacent
to this panel.

@example
\`\`\`
const sidebar = useXDSResizable({ defaultSize: 250, minSizePx: 200 });
<XDSLayoutPanel resizable={sidebar.props}>
  <Navigation />
</XDSLayoutPanel>
<XDSResizeHandle resizable={sidebar.props} />
\`\`\``}},composes:["Omit"]};export{u as X};
