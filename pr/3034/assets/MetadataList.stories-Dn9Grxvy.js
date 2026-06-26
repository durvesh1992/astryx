import{at as r,ad as e,ai as C,ar as T,a_ as $,I as O,j as X}from"./iframe-BsyQNsjg.js";import{T as u}from"./Token-VOWYDPCX.js";import"./preload-helper-Ct5FWWRu.js";import"./useInteractiveRole-De3Y2qEg.js";const q=r.createContext(null);q.displayName="MetadataListContext";const m={root:{k1xSpc:"astryx78zum5",kXwgrk:"astryxdt5ytf",$$css:!0},dl:{kogj98:"astryx1ghz6dp",kmVPX3:"astryx1717udv",$$css:!0},gridSingle:{k1xSpc:"astryxrvj5dj",kumcoG:"astryx1pmbctz",kOIVth:"astryxpec5dj",khm7nJ:null,k1C7PZ:null,kGNEyG:"astryx1pha0wt",$$css:!0},gridMulti:{k1xSpc:"astryxrvj5dj",kumcoG:"astryx189bvgu",kOIVth:"astryx18g69wz",khm7nJ:null,k1C7PZ:null,$$css:!0},gridStackedSingle:{k1xSpc:"astryxrvj5dj",kumcoG:"astryx1y6fwsi",kOIVth:"astryxjcht0a",khm7nJ:null,k1C7PZ:null,$$css:!0},gridStackedMulti:{k1xSpc:"astryxrvj5dj",kumcoG:"astryx189bvgu",kOIVth:"astryx18g69wz",khm7nJ:null,k1C7PZ:null,$$css:!0},horizontal:{k1xSpc:"astryx78zum5",kXwgrk:"astryx1q0g3np",kwnvtZ:"astryx1a02dak",kOIVth:"astryx18g69wz",khm7nJ:null,k1C7PZ:null,$$css:!0}},U={position:"start"},W={position:"top"};function l({children:a,columns:s="single",label:d,maxNumOfItems:n,orientation:o="vertical",title:p,xstyle:c,className:x,style:y,"data-testid":P,ref:z}){const b=s==="multi"||typeof s=="number"&&s>1,i=d??(b?W:U),[N,D]=r.useState(!1),R=r.useId(),H=r.useMemo(()=>({labelConfig:o==="horizontal"?W:i,orientation:o}),[i,o]),A=r.Children.toArray(a),h=o==="horizontal",J=h?void 0:n,E=J!=null&&A.length>J,_=E&&!N?A.slice(0,J):A,B=p!=null?e.jsx("div",{className:"astryxep27e5",children:p}):null,F=()=>h?m.horizontal:i.position==="top"?s==="single"||s===1?m.gridStackedSingle:m.gridStackedMulti:s==="single"||s===1?m.gridSingle:m.gridMulti,Z=!h&&i.position==="start"&&typeof s=="number"&&s>1?{gridTemplateColumns:`repeat(${s}, auto 1fr)`}:!h&&i.position==="start"&&i.width!=null?{gridTemplateColumns:`${typeof i.width=="number"?`${i.width}px`:i.width} 1fr`}:void 0;return e.jsx(q,{value:H,children:e.jsxs("div",{ref:z,"data-testid":P,...C($("metadata-list",{columns:String(s),orientation:o}),T(m.root,c),x,y),children:[B,e.jsx("dl",{id:R,...C(T(m.dl,F()),{style:Z}),children:_}),E&&e.jsx("button",{type:"button","aria-controls":R,"aria-expanded":N,onClick:()=>D(V=>!V),className:"astryxjyslct astryx11g6tue astryx1gs6z28 astryx15nmkw0 astryx1ypdohk astryxqwr325 astryxjm74w1 astryxw6l6zx astryx1e4wzip astryxjb2p0i astryx1yc453h astryxqcrz7y",children:N?"Show less":"Show more"})]})})}l.displayName="MetadataList";l.__docgenInfo={description:"",methods:[],displayName:"MetadataList",props:{ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:"Ref forwarded to the root element"},children:{required:!0,tsType:{name:"ReactNode"},description:"Metadata list items. Should be MetadataListItem components."},columns:{required:!1,tsType:{name:"union",raw:"'multi' | 'single' | number",elements:[{name:"literal",value:"'multi'"},{name:"literal",value:"'single'"},{name:"number"}]},description:`Column layout mode.
- 'single': Items in a single column
- 'multi': Auto-fill columns based on available width
- number: Fixed number of columns
@default 'single'`,defaultValue:{value:"'single'",computed:!1}},label:{required:!1,tsType:{name:"MetadataListLabelConfig"},description:`Label display configuration.
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
@default 'vertical'`,defaultValue:{value:"'vertical'",computed:!1}},title:{required:!1,tsType:{name:"ReactNode"},description:"Optional title or heading rendered above the list."},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing frameworks."}},composes:["Omit"]};const G={label:{kMwMTN:"astryxv1l7n4",kGuDYH:"astryxjm74w1",kLWn49:"astryxw6l6zx",k63SB2:"astryx1e4wzip",k1xSpc:"astryx78zum5",kGNEyG:"astryx6s0dn4",kOIVth:"astryx1txdalj",kogj98:"astryx1ghz6dp",kmVPX3:"astryx1717udv",kAzted:"astryxjwf9q1",kTgw9:"astryx13faqbe",$$css:!0},stackedWrapper:{k1xSpc:"astryx78zum5",kXwgrk:"astryxdt5ytf",kOIVth:"astryx1lsbc85",$$css:!0}};function t({children:a,icon:s,label:d,xstyle:n,className:o,style:p,"data-testid":c,ref:x}){const y=r.use(q),z=(y?.labelConfig.position??"start")==="top"||y?.orientation==="horizontal",b=e.jsxs(e.Fragment,{children:[s!=null&&e.jsx("span",{className:"astryx3nfvp2 astryx6s0dn4 astryx2lah0s astryxv1l7n4",children:s}),d]});return z?e.jsxs("div",{ref:x,"data-testid":c,...C($("metadata-list-item"),T(G.stackedWrapper,n),o,p),children:[e.jsx("dt",{className:"astryxv1l7n4 astryxjm74w1 astryxw6l6zx astryx1e4wzip astryx78zum5 astryx6s0dn4 astryx1txdalj astryx1ghz6dp astryx1717udv",children:b}),e.jsx("dd",{className:"astryx1tgivj0 astryxjm74w1 astryxw6l6zx astryx1ghz6dp astryx1717udv astryx13faqbe",children:a})]}):e.jsxs(e.Fragment,{children:[e.jsx("dt",{ref:x,"data-testid":c?`${c}-label`:void 0,...C($("metadata-list-item"),T(G.label,n),o,p),children:b}),e.jsx("dd",{"data-testid":c?`${c}-value`:void 0,className:"astryx1tgivj0 astryxjm74w1 astryxw6l6zx astryx1ghz6dp astryx1717udv astryxjwf9q1 astryx13faqbe",children:a})]})}t.displayName="MetadataListItem";t.__docgenInfo={description:`A single labeled metadata value within an MetadataList.

Renders a \`<dt>\` / \`<dd>\` pair. Layout (side-by-side or stacked) is
determined by the parent MetadataList's label configuration.

@example
\`\`\`
<MetadataListItem label="Status">Active</MetadataListItem>
<MetadataListItem label="Created" icon={<CalendarIcon />}>
  January 1, 2023
</MetadataListItem>
\`\`\``,methods:[],displayName:"MetadataListItem",props:{xstyle:{required:!1,tsType:{name:"StyleXStyles"},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:"Ref forwarded to the root element"},children:{required:!0,tsType:{name:"ReactNode"},description:"Content value for this metadata item."},icon:{required:!1,tsType:{name:"ReactNode"},description:"Icon rendered before the label text."},label:{required:!0,tsType:{name:"string"},description:"Label text for this metadata item."},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing frameworks."}},composes:["Omit"]};function Y({title:a,titleId:s,...d},n){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:n,"aria-labelledby":s},d),a?r.createElement("title",{id:s},a):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"}))}const K=r.forwardRef(Y);function Q({title:a,titleId:s,...d},n){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:n,"aria-labelledby":s},d),a?r.createElement("title",{id:s},a):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"}),r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 6h.008v.008H6V6Z"}))}const ee=r.forwardRef(Q),le={title:"Core/MetadataList",component:l,tags:["autodocs"],argTypes:{columns:{control:"select",options:["single","multi",2,3],description:"Column layout mode"},orientation:{control:"select",options:["vertical","horizontal"],description:"Layout orientation"}}},M={render:a=>e.jsxs(l,{...a,children:[e.jsx(t,{label:"Name",children:"MetadataList"}),e.jsx(t,{label:"Status",children:"Active"}),e.jsx(t,{label:"Owner",children:"Joey"})]})},L={render:a=>e.jsxs(l,{columns:"multi",...a,children:[e.jsx(t,{label:"Name",children:"MetadataList"}),e.jsx(t,{label:"Status",children:"Active"}),e.jsx(t,{label:"Owner",children:"Joey"}),e.jsx(t,{label:"Created",children:"Jan 15, 2026"}),e.jsx(t,{label:"Tags",children:e.jsxs("span",{style:{display:"flex",gap:4},children:[e.jsx(u,{label:"component"}),e.jsx(u,{label:"xds"})]})}),e.jsx(t,{label:"Priority",children:"Tier 1"})]})},g={render:a=>e.jsxs(l,{title:e.jsx("strong",{children:"Component Details"}),columns:"multi",...a,children:[e.jsx(t,{label:"Name",children:"MetadataList"}),e.jsx(t,{label:"Status",children:"Active"}),e.jsx(t,{label:"Owner",children:"Joey"}),e.jsx(t,{label:"Created",children:"Jan 15, 2026"})]})},I={render:a=>e.jsxs(l,{orientation:"horizontal",...a,children:[e.jsx(t,{label:"Status",children:"Active"}),e.jsx(t,{label:"Type",children:"Premium"}),e.jsx(t,{label:"Owner",children:"Joey"}),e.jsx(t,{label:"Created",children:"Jan 15, 2026"})]})},j={render:a=>e.jsxs(l,{label:{position:"top"},...a,children:[e.jsx(t,{label:"Name",children:"MetadataList"}),e.jsx(t,{label:"Status",children:"Active"}),e.jsx(t,{label:"Owner",children:"Joey"}),e.jsx(t,{label:"Tags",children:e.jsxs("span",{style:{display:"flex",gap:4},children:[e.jsx(u,{label:"component"}),e.jsx(u,{label:"xds"})]})})]})},f={render:a=>e.jsxs(l,{maxNumOfItems:3,...a,children:[e.jsx(t,{label:"Name",children:"MetadataList"}),e.jsx(t,{label:"Status",children:"Active"}),e.jsx(t,{label:"Owner",children:"Joey"}),e.jsx(t,{label:"Created",children:"Jan 15, 2026"}),e.jsx(t,{label:"Updated",children:"Mar 26, 2026"}),e.jsx(t,{label:"Priority",children:"Tier 1"})]})},w={render:a=>e.jsxs(l,{columns:2,...a,children:[e.jsx(t,{label:"Name",children:"MetadataList"}),e.jsx(t,{label:"Status",children:"Active"}),e.jsx(t,{label:"Owner",children:"Joey"}),e.jsx(t,{label:"Priority",children:"Tier 1"})]})},v={render:a=>e.jsxs(l,{label:{position:"start",width:200},...a,children:[e.jsx(t,{label:"Full Name",children:"MetadataList Component"}),e.jsx(t,{label:"Current Status",children:"Active"}),e.jsx(t,{label:"Primary Owner",children:"Joey"})]})},k={render:a=>e.jsxs(l,{columns:"multi",label:{position:"start"},...a,children:[e.jsx(t,{label:"Name",children:"MetadataList"}),e.jsx(t,{label:"Status",children:"Active"}),e.jsx(t,{label:"Owner",children:"Joey"}),e.jsx(t,{label:"Created",children:"Jan 15, 2026"})]})},S={render:a=>e.jsxs(l,{columns:"multi",...a,children:[e.jsx(t,{label:"Information",icon:e.jsx(O,{icon:X,size:"sm"}),children:"Important details about this component"}),e.jsx(t,{label:"Created",icon:e.jsx(O,{icon:K,size:"sm"}),children:"January 1, 2023"}),e.jsx(t,{label:"Tags",icon:e.jsx(O,{icon:ee,size:"sm"}),children:e.jsxs("span",{style:{display:"flex",gap:4},children:[e.jsx(u,{label:"component"}),e.jsx(u,{label:"xds"})]})})]})};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: args => <MetadataList {...args}>
      <MetadataListItem label="Name">MetadataList</MetadataListItem>
      <MetadataListItem label="Status">Active</MetadataListItem>
      <MetadataListItem label="Owner">Joey</MetadataListItem>
    </MetadataList>
}`,...M.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: args => <MetadataList columns="multi" {...args}>
      <MetadataListItem label="Name">MetadataList</MetadataListItem>
      <MetadataListItem label="Status">Active</MetadataListItem>
      <MetadataListItem label="Owner">Joey</MetadataListItem>
      <MetadataListItem label="Created">Jan 15, 2026</MetadataListItem>
      <MetadataListItem label="Tags">
        <span style={{
        display: 'flex',
        gap: 4
      }}>
          <Token label="component" />
          <Token label="xds" />
        </span>
      </MetadataListItem>
      <MetadataListItem label="Priority">Tier 1</MetadataListItem>
    </MetadataList>
}`,...L.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <MetadataList title={<strong>Component Details</strong>} columns="multi" {...args}>
      <MetadataListItem label="Name">MetadataList</MetadataListItem>
      <MetadataListItem label="Status">Active</MetadataListItem>
      <MetadataListItem label="Owner">Joey</MetadataListItem>
      <MetadataListItem label="Created">Jan 15, 2026</MetadataListItem>
    </MetadataList>
}`,...g.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: args => <MetadataList orientation="horizontal" {...args}>
      <MetadataListItem label="Status">Active</MetadataListItem>
      <MetadataListItem label="Type">Premium</MetadataListItem>
      <MetadataListItem label="Owner">Joey</MetadataListItem>
      <MetadataListItem label="Created">Jan 15, 2026</MetadataListItem>
    </MetadataList>
}`,...I.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: args => <MetadataList label={{
    position: 'top'
  }} {...args}>
      <MetadataListItem label="Name">MetadataList</MetadataListItem>
      <MetadataListItem label="Status">Active</MetadataListItem>
      <MetadataListItem label="Owner">Joey</MetadataListItem>
      <MetadataListItem label="Tags">
        <span style={{
        display: 'flex',
        gap: 4
      }}>
          <Token label="component" />
          <Token label="xds" />
        </span>
      </MetadataListItem>
    </MetadataList>
}`,...j.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <MetadataList maxNumOfItems={3} {...args}>
      <MetadataListItem label="Name">MetadataList</MetadataListItem>
      <MetadataListItem label="Status">Active</MetadataListItem>
      <MetadataListItem label="Owner">Joey</MetadataListItem>
      <MetadataListItem label="Created">Jan 15, 2026</MetadataListItem>
      <MetadataListItem label="Updated">Mar 26, 2026</MetadataListItem>
      <MetadataListItem label="Priority">Tier 1</MetadataListItem>
    </MetadataList>
}`,...f.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => <MetadataList columns={2} {...args}>
      <MetadataListItem label="Name">MetadataList</MetadataListItem>
      <MetadataListItem label="Status">Active</MetadataListItem>
      <MetadataListItem label="Owner">Joey</MetadataListItem>
      <MetadataListItem label="Priority">Tier 1</MetadataListItem>
    </MetadataList>
}`,...w.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <MetadataList label={{
    position: 'start',
    width: 200
  }} {...args}>
      <MetadataListItem label="Full Name">
        MetadataList Component
      </MetadataListItem>
      <MetadataListItem label="Current Status">Active</MetadataListItem>
      <MetadataListItem label="Primary Owner">Joey</MetadataListItem>
    </MetadataList>
}`,...v.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: args => <MetadataList columns="multi" label={{
    position: 'start'
  }} {...args}>
      <MetadataListItem label="Name">MetadataList</MetadataListItem>
      <MetadataListItem label="Status">Active</MetadataListItem>
      <MetadataListItem label="Owner">Joey</MetadataListItem>
      <MetadataListItem label="Created">Jan 15, 2026</MetadataListItem>
    </MetadataList>
}`,...k.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => <MetadataList columns="multi" {...args}>
      <MetadataListItem label="Information" icon={<Icon icon={InformationCircleIcon} size="sm" />}>
        Important details about this component
      </MetadataListItem>
      <MetadataListItem label="Created" icon={<Icon icon={CalendarIcon} size="sm" />}>
        January 1, 2023
      </MetadataListItem>
      <MetadataListItem label="Tags" icon={<Icon icon={TagIcon} size="sm" />}>
        <span style={{
        display: 'flex',
        gap: 4
      }}>
          <Token label="component" />
          <Token label="xds" />
        </span>
      </MetadataListItem>
    </MetadataList>
}`,...S.parameters?.docs?.source}}};const ie=["Basic","MultiColumn","WithTitle","Horizontal","StackedLabelsSingleColumn","ShowMore","TwoColumns","CustomLabelWidth","MultiColumnSideLabels","WithIcons"];export{M as Basic,v as CustomLabelWidth,I as Horizontal,L as MultiColumn,k as MultiColumnSideLabels,f as ShowMore,j as StackedLabelsSingleColumn,w as TwoColumns,S as WithIcons,g as WithTitle,ie as __namedExportsOrder,le as default};
