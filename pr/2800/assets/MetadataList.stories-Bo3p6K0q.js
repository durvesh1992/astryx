import{at as i,ad as e,ai as v,ar as k,aZ as J,m as A,i as _}from"./iframe-yRFQ_7VC.js";import{X as u}from"./XDSToken-DnzEkZ3B.js";import"./preload-helper-Ct5FWWRu.js";import"./useXDSInteractiveRole-C4QNKBOy.js";const O=i.createContext(null);O.displayName="XDSMetadataListContext";const c={root:{k1xSpc:"xds78zum5",kXwgrk:"xdsdt5ytf",$$css:!0},dl:{kogj98:"xds1ghz6dp",kmVPX3:"xds1717udv",$$css:!0},gridSingle:{k1xSpc:"xdsrvj5dj",kumcoG:"xds1pmbctz",kOIVth:"xdspec5dj",khm7nJ:null,k1C7PZ:null,kGNEyG:"xds1pha0wt",$$css:!0},gridMulti:{k1xSpc:"xdsrvj5dj",kumcoG:"xds189bvgu",kOIVth:"xds18g69wz",khm7nJ:null,k1C7PZ:null,$$css:!0},gridStackedSingle:{k1xSpc:"xdsrvj5dj",kumcoG:"xds1y6fwsi",kOIVth:"xdsjcht0a",khm7nJ:null,k1C7PZ:null,$$css:!0},gridStackedMulti:{k1xSpc:"xdsrvj5dj",kumcoG:"xds189bvgu",kOIVth:"xds18g69wz",khm7nJ:null,k1C7PZ:null,$$css:!0},horizontal:{k1xSpc:"xds78zum5",kXwgrk:"xds1q0g3np",kwnvtZ:"xds1a02dak",kOIVth:"xds18g69wz",khm7nJ:null,k1C7PZ:null,$$css:!0}},U={position:"start"},E={position:"top"};function l({children:a,columns:s="single",label:o,maxNumOfItems:r,orientation:d="vertical",title:p,xstyle:m,className:S,style:x,"data-testid":$,ref:C}){const b=s==="multi"||typeof s=="number"&&s>1,n=o??(b?E:U),[T,W]=i.useState(!1),q=i.useId(),G=i.useMemo(()=>({labelConfig:d==="horizontal"?E:n,orientation:d}),[n,d]),z=i.Children.toArray(a),h=d==="horizontal",N=h?void 0:r,P=N!=null&&z.length>N,H=P&&!T?z.slice(0,N):z,Z=p!=null?e.jsx("div",{className:"xdsep27e5",children:p}):null,B=()=>h?c.horizontal:n.position==="top"?s==="single"||s===1?c.gridStackedSingle:c.gridStackedMulti:s==="single"||s===1?c.gridSingle:c.gridMulti,F=!h&&n.position==="start"&&typeof s=="number"&&s>1?{gridTemplateColumns:`repeat(${s}, auto 1fr)`}:!h&&n.position==="start"&&n.width!=null?{gridTemplateColumns:`${typeof n.width=="number"?`${n.width}px`:n.width} 1fr`}:void 0;return e.jsx(O,{value:G,children:e.jsxs("div",{ref:C,"data-testid":$,...v(J("metadata-list",{columns:String(s),orientation:d}),k(c.root,m),S,x),children:[Z,e.jsx("dl",{id:q,...v(k(c.dl,B()),{style:F}),children:H}),P&&e.jsx("button",{type:"button","aria-controls":q,"aria-expanded":T,onClick:()=>W(R=>!R),className:"xdsjyslct xds11g6tue xds1gs6z28 xds15nmkw0 xds1ypdohk xdsqwr325 xdsjm74w1 xdsw6l6zx xds1e4wzip xdsjb2p0i xds1yc453h xdsqcrz7y",children:T?"Show less":"Show more"})]})})}l.displayName="XDSMetadataList";l.__docgenInfo={description:"",methods:[],displayName:"XDSMetadataList",props:{ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:"Ref forwarded to the root element"},children:{required:!0,tsType:{name:"ReactNode"},description:"Metadata list items. Should be XDSMetadataListItem components."},columns:{required:!1,tsType:{name:"union",raw:"'multi' | 'single' | number",elements:[{name:"literal",value:"'multi'"},{name:"literal",value:"'single'"},{name:"number"}]},description:`Column layout mode.
- 'single': Items in a single column
- 'multi': Auto-fill columns based on available width
- number: Fixed number of columns
@default 'single'`,defaultValue:{value:"'single'",computed:!1}},label:{required:!1,tsType:{name:"XDSMetadataListLabelConfig"},description:`Label display configuration.
- position: 'start' places labels to the left, 'top' stacks labels above content
- width: Custom label width (number in px or CSS string)

Defaults to \`{ position: 'top' }\` for multi-column layouts and
\`{ position: 'start' }\` for single-column layouts.`},maxNumOfItems:{required:!1,tsType:{name:"number"},description:`Maximum number of items to show before collapsing.
When set and items exceed this count, a "Show more" / "Show less"
toggle appears.`},orientation:{required:!1,tsType:{name:"union",raw:"'vertical' | 'horizontal'",elements:[{name:"literal",value:"'vertical'"},{name:"literal",value:"'horizontal'"}]},description:`Layout orientation for metadata items.
- 'vertical': Items stack vertically (default)
- 'horizontal': Items flow horizontally with flex-wrap

In horizontal mode, items display with labels stacked above content
and wrap to new lines as needed. The following props are ignored:
\`columns\`, \`label\`, \`maxNumOfItems\`.
@default 'vertical'`,defaultValue:{value:"'vertical'",computed:!1}},title:{required:!1,tsType:{name:"ReactNode"},description:"Optional title or heading rendered above the list."},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing frameworks."}},composes:["Omit"]};const V={label:{kMwMTN:"xdsv1l7n4",kGuDYH:"xdsjm74w1",kLWn49:"xdsw6l6zx",k63SB2:"xds1e4wzip",k1xSpc:"xds78zum5",kGNEyG:"xds6s0dn4",kOIVth:"xds1txdalj",kogj98:"xds1ghz6dp",kmVPX3:"xds1717udv",kAzted:"xdsjwf9q1",kTgw9:"xds13faqbe",$$css:!0},stackedWrapper:{k1xSpc:"xds78zum5",kXwgrk:"xdsdt5ytf",kOIVth:"xds1lsbc85",$$css:!0}};function t({children:a,icon:s,label:o,xstyle:r,className:d,style:p,"data-testid":m,ref:S}){const x=i.use(O),C=(x?.labelConfig.position??"start")==="top"||x?.orientation==="horizontal",b=e.jsxs(e.Fragment,{children:[s!=null&&e.jsx("span",{className:"xds3nfvp2 xds6s0dn4 xds2lah0s xdsv1l7n4",children:s}),o]});return C?e.jsxs("div",{ref:S,"data-testid":m,...v(J("metadata-list-item"),k(V.stackedWrapper,r),d,p),children:[e.jsx("dt",{className:"xdsv1l7n4 xdsjm74w1 xdsw6l6zx xds1e4wzip xds78zum5 xds6s0dn4 xds1txdalj xds1ghz6dp xds1717udv",children:b}),e.jsx("dd",{className:"xds1tgivj0 xdsjm74w1 xdsw6l6zx xds1ghz6dp xds1717udv xds13faqbe",children:a})]}):e.jsxs(e.Fragment,{children:[e.jsx("dt",{ref:S,"data-testid":m?`${m}-label`:void 0,...v(J("metadata-list-item"),k(V.label,r),d,p),children:b}),e.jsx("dd",{"data-testid":m?`${m}-value`:void 0,className:"xds1tgivj0 xdsjm74w1 xdsw6l6zx xds1ghz6dp xds1717udv xdsjwf9q1 xds13faqbe",children:a})]})}t.displayName="XDSMetadataListItem";t.__docgenInfo={description:`A single labeled metadata value within an XDSMetadataList.

Renders a \`<dt>\` / \`<dd>\` pair. Layout (side-by-side or stacked) is
determined by the parent XDSMetadataList's label configuration.

@example
\`\`\`
<XDSMetadataListItem label="Status">Active</XDSMetadataListItem>
<XDSMetadataListItem label="Created" icon={<CalendarIcon />}>
  January 1, 2023
</XDSMetadataListItem>
\`\`\``,methods:[],displayName:"XDSMetadataListItem",props:{xstyle:{required:!1,tsType:{name:"StyleXStyles"},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:"Ref forwarded to the root element"},children:{required:!0,tsType:{name:"ReactNode"},description:"Content value for this metadata item."},icon:{required:!1,tsType:{name:"ReactNode"},description:"Icon rendered before the label text."},label:{required:!0,tsType:{name:"string"},description:"Label text for this metadata item."},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing frameworks."}},composes:["Omit"]};function Y({title:a,titleId:s,...o},r){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":s},o),a?i.createElement("title",{id:s},a):null,i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"}))}const K=i.forwardRef(Y);function Q({title:a,titleId:s,...o},r){return i.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":s},o),a?i.createElement("title",{id:s},a):null,i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"}),i.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 6h.008v.008H6V6Z"}))}const ee=i.forwardRef(Q),le={title:"Core/MetadataList",component:l,tags:["autodocs"],argTypes:{columns:{control:"select",options:["single","multi",2,3],description:"Column layout mode"},orientation:{control:"select",options:["vertical","horizontal"],description:"Layout orientation"}}},M={render:a=>e.jsxs(l,{...a,children:[e.jsx(t,{label:"Name",children:"XDSMetadataList"}),e.jsx(t,{label:"Status",children:"Active"}),e.jsx(t,{label:"Owner",children:"Joey"})]})},L={render:a=>e.jsxs(l,{columns:"multi",...a,children:[e.jsx(t,{label:"Name",children:"XDSMetadataList"}),e.jsx(t,{label:"Status",children:"Active"}),e.jsx(t,{label:"Owner",children:"Joey"}),e.jsx(t,{label:"Created",children:"Jan 15, 2026"}),e.jsx(t,{label:"Tags",children:e.jsxs("span",{style:{display:"flex",gap:4},children:[e.jsx(u,{label:"component"}),e.jsx(u,{label:"xds"})]})}),e.jsx(t,{label:"Priority",children:"Tier 1"})]})},D={render:a=>e.jsxs(l,{title:e.jsx("strong",{children:"Component Details"}),columns:"multi",...a,children:[e.jsx(t,{label:"Name",children:"XDSMetadataList"}),e.jsx(t,{label:"Status",children:"Active"}),e.jsx(t,{label:"Owner",children:"Joey"}),e.jsx(t,{label:"Created",children:"Jan 15, 2026"})]})},X={render:a=>e.jsxs(l,{orientation:"horizontal",...a,children:[e.jsx(t,{label:"Status",children:"Active"}),e.jsx(t,{label:"Type",children:"Premium"}),e.jsx(t,{label:"Owner",children:"Joey"}),e.jsx(t,{label:"Created",children:"Jan 15, 2026"})]})},g={render:a=>e.jsxs(l,{label:{position:"top"},...a,children:[e.jsx(t,{label:"Name",children:"XDSMetadataList"}),e.jsx(t,{label:"Status",children:"Active"}),e.jsx(t,{label:"Owner",children:"Joey"}),e.jsx(t,{label:"Tags",children:e.jsxs("span",{style:{display:"flex",gap:4},children:[e.jsx(u,{label:"component"}),e.jsx(u,{label:"xds"})]})})]})},I={render:a=>e.jsxs(l,{maxNumOfItems:3,...a,children:[e.jsx(t,{label:"Name",children:"XDSMetadataList"}),e.jsx(t,{label:"Status",children:"Active"}),e.jsx(t,{label:"Owner",children:"Joey"}),e.jsx(t,{label:"Created",children:"Jan 15, 2026"}),e.jsx(t,{label:"Updated",children:"Mar 26, 2026"}),e.jsx(t,{label:"Priority",children:"Tier 1"})]})},j={render:a=>e.jsxs(l,{columns:2,...a,children:[e.jsx(t,{label:"Name",children:"XDSMetadataList"}),e.jsx(t,{label:"Status",children:"Active"}),e.jsx(t,{label:"Owner",children:"Joey"}),e.jsx(t,{label:"Priority",children:"Tier 1"})]})},f={render:a=>e.jsxs(l,{label:{position:"start",width:200},...a,children:[e.jsx(t,{label:"Full Name",children:"XDSMetadataList Component"}),e.jsx(t,{label:"Current Status",children:"Active"}),e.jsx(t,{label:"Primary Owner",children:"Joey"})]})},y={render:a=>e.jsxs(l,{columns:"multi",label:{position:"start"},...a,children:[e.jsx(t,{label:"Name",children:"XDSMetadataList"}),e.jsx(t,{label:"Status",children:"Active"}),e.jsx(t,{label:"Owner",children:"Joey"}),e.jsx(t,{label:"Created",children:"Jan 15, 2026"})]})},w={render:a=>e.jsxs(l,{columns:"multi",...a,children:[e.jsx(t,{label:"Information",icon:e.jsx(A,{icon:_,size:"sm"}),children:"Important details about this component"}),e.jsx(t,{label:"Created",icon:e.jsx(A,{icon:K,size:"sm"}),children:"January 1, 2023"}),e.jsx(t,{label:"Tags",icon:e.jsx(A,{icon:ee,size:"sm"}),children:e.jsxs("span",{style:{display:"flex",gap:4},children:[e.jsx(u,{label:"component"}),e.jsx(u,{label:"xds"})]})})]})};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: args => <XDSMetadataList {...args}>
      <XDSMetadataListItem label="Name">XDSMetadataList</XDSMetadataListItem>
      <XDSMetadataListItem label="Status">Active</XDSMetadataListItem>
      <XDSMetadataListItem label="Owner">Joey</XDSMetadataListItem>
    </XDSMetadataList>
}`,...M.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: args => <XDSMetadataList columns="multi" {...args}>
      <XDSMetadataListItem label="Name">XDSMetadataList</XDSMetadataListItem>
      <XDSMetadataListItem label="Status">Active</XDSMetadataListItem>
      <XDSMetadataListItem label="Owner">Joey</XDSMetadataListItem>
      <XDSMetadataListItem label="Created">Jan 15, 2026</XDSMetadataListItem>
      <XDSMetadataListItem label="Tags">
        <span style={{
        display: 'flex',
        gap: 4
      }}>
          <XDSToken label="component" />
          <XDSToken label="xds" />
        </span>
      </XDSMetadataListItem>
      <XDSMetadataListItem label="Priority">Tier 1</XDSMetadataListItem>
    </XDSMetadataList>
}`,...L.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: args => <XDSMetadataList title={<strong>Component Details</strong>} columns="multi" {...args}>
      <XDSMetadataListItem label="Name">XDSMetadataList</XDSMetadataListItem>
      <XDSMetadataListItem label="Status">Active</XDSMetadataListItem>
      <XDSMetadataListItem label="Owner">Joey</XDSMetadataListItem>
      <XDSMetadataListItem label="Created">Jan 15, 2026</XDSMetadataListItem>
    </XDSMetadataList>
}`,...D.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: args => <XDSMetadataList orientation="horizontal" {...args}>
      <XDSMetadataListItem label="Status">Active</XDSMetadataListItem>
      <XDSMetadataListItem label="Type">Premium</XDSMetadataListItem>
      <XDSMetadataListItem label="Owner">Joey</XDSMetadataListItem>
      <XDSMetadataListItem label="Created">Jan 15, 2026</XDSMetadataListItem>
    </XDSMetadataList>
}`,...X.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <XDSMetadataList label={{
    position: 'top'
  }} {...args}>
      <XDSMetadataListItem label="Name">XDSMetadataList</XDSMetadataListItem>
      <XDSMetadataListItem label="Status">Active</XDSMetadataListItem>
      <XDSMetadataListItem label="Owner">Joey</XDSMetadataListItem>
      <XDSMetadataListItem label="Tags">
        <span style={{
        display: 'flex',
        gap: 4
      }}>
          <XDSToken label="component" />
          <XDSToken label="xds" />
        </span>
      </XDSMetadataListItem>
    </XDSMetadataList>
}`,...g.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: args => <XDSMetadataList maxNumOfItems={3} {...args}>
      <XDSMetadataListItem label="Name">XDSMetadataList</XDSMetadataListItem>
      <XDSMetadataListItem label="Status">Active</XDSMetadataListItem>
      <XDSMetadataListItem label="Owner">Joey</XDSMetadataListItem>
      <XDSMetadataListItem label="Created">Jan 15, 2026</XDSMetadataListItem>
      <XDSMetadataListItem label="Updated">Mar 26, 2026</XDSMetadataListItem>
      <XDSMetadataListItem label="Priority">Tier 1</XDSMetadataListItem>
    </XDSMetadataList>
}`,...I.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: args => <XDSMetadataList columns={2} {...args}>
      <XDSMetadataListItem label="Name">XDSMetadataList</XDSMetadataListItem>
      <XDSMetadataListItem label="Status">Active</XDSMetadataListItem>
      <XDSMetadataListItem label="Owner">Joey</XDSMetadataListItem>
      <XDSMetadataListItem label="Priority">Tier 1</XDSMetadataListItem>
    </XDSMetadataList>
}`,...j.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <XDSMetadataList label={{
    position: 'start',
    width: 200
  }} {...args}>
      <XDSMetadataListItem label="Full Name">
        XDSMetadataList Component
      </XDSMetadataListItem>
      <XDSMetadataListItem label="Current Status">Active</XDSMetadataListItem>
      <XDSMetadataListItem label="Primary Owner">Joey</XDSMetadataListItem>
    </XDSMetadataList>
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <XDSMetadataList columns="multi" label={{
    position: 'start'
  }} {...args}>
      <XDSMetadataListItem label="Name">XDSMetadataList</XDSMetadataListItem>
      <XDSMetadataListItem label="Status">Active</XDSMetadataListItem>
      <XDSMetadataListItem label="Owner">Joey</XDSMetadataListItem>
      <XDSMetadataListItem label="Created">Jan 15, 2026</XDSMetadataListItem>
    </XDSMetadataList>
}`,...y.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => <XDSMetadataList columns="multi" {...args}>
      <XDSMetadataListItem label="Information" icon={<XDSIcon icon={InformationCircleIcon} size="sm" />}>
        Important details about this component
      </XDSMetadataListItem>
      <XDSMetadataListItem label="Created" icon={<XDSIcon icon={CalendarIcon} size="sm" />}>
        January 1, 2023
      </XDSMetadataListItem>
      <XDSMetadataListItem label="Tags" icon={<XDSIcon icon={TagIcon} size="sm" />}>
        <span style={{
        display: 'flex',
        gap: 4
      }}>
          <XDSToken label="component" />
          <XDSToken label="xds" />
        </span>
      </XDSMetadataListItem>
    </XDSMetadataList>
}`,...w.parameters?.docs?.source}}};const ne=["Basic","MultiColumn","WithTitle","Horizontal","StackedLabelsSingleColumn","ShowMore","TwoColumns","CustomLabelWidth","MultiColumnSideLabels","WithIcons"];export{M as Basic,f as CustomLabelWidth,X as Horizontal,L as MultiColumn,y as MultiColumnSideLabels,I as ShowMore,g as StackedLabelsSingleColumn,j as TwoColumns,w as WithIcons,D as WithTitle,ne as __namedExportsOrder,le as default};
