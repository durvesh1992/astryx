import{ah as U,a1 as r,a6 as C,af as N,ay as T}from"./iframe-D8BQ-rJP.js";import{a as D,r as M,u as _,A as t}from"./Avatar-f4aQkjbQ.js";import{S as $}from"./StatusDot-NUXxo318.js";import"./preload-helper-Ct5FWWRu.js";const I=.25,q={root:{k1xSpc:"astryx3nfvp2",kGNEyG:"astryx6s0dn4",$$css:!0}};function s({children:e,size:a="small","data-testid":i,"aria-label":E="Avatars",xstyle:b,className:j,style:z,ref:O,...c}){const l=M(a),p=Math.round(l*I),R=U.useMemo(()=>({size:a,overlap:p,numericSize:l}),[a,p,l]);return r.jsx(D,{value:R,children:r.jsx("div",{ref:O,role:"group","aria-label":E,"data-testid":i,...C(T("avatar-group",{size:a}),N(q.root,b),j,z),...c,children:e})})}s.displayName="AvatarGroup";s.__docgenInfo={description:`Stacked avatar display showing multiple avatars overlapping with an
optional overflow indicator. Uses a compositional children-based API
so each avatar can carry its own props (status dots, click handlers, etc.).

Consumers handle slicing — pass only the avatars you want visible,
then add an AvatarGroupOverflow for the "+N" indicator.

@example
\`\`\`
<AvatarGroup size="medium">
  {users.slice(0, 3).map(u => (
    <Avatar key={u.id} src={u.src} name={u.name} />
  ))}
  <AvatarGroupOverflow count={users.length - 3} />
</AvatarGroup>
\`\`\``,methods:[],displayName:"AvatarGroup",props:{xstyle:{required:!1,tsType:{name:"StyleXStyles"},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:"Ref forwarded to the root element."},children:{required:!0,tsType:{name:"ReactNode"},description:`Avatar children, optionally followed by one AvatarGroupOverflow.
Consumers are responsible for slicing to the desired visible count.`},size:{required:!1,tsType:{name:"union",raw:"AvatarNamedSize | AvatarNumericSize",elements:[{name:"union",raw:"'tiny' | 'xsmall' | 'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'tiny'"},{name:"literal",value:"'xsmall'"},{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},{name:"union",raw:`| 16
| 20
| 24
| 32
| 36
| 40
| 48
| 60
| 64
| 72
| 96
| 128
| 144
| 180`,elements:[{name:"literal",value:"16"},{name:"literal",value:"20"},{name:"literal",value:"24"},{name:"literal",value:"32"},{name:"literal",value:"36"},{name:"literal",value:"40"},{name:"literal",value:"48"},{name:"literal",value:"60"},{name:"literal",value:"64"},{name:"literal",value:"72"},{name:"literal",value:"96"},{name:"literal",value:"128"},{name:"literal",value:"144"},{name:"literal",value:"180"}]}]},description:`Size applied to all avatars via context.
@default 'small'`,defaultValue:{value:"'small'",computed:!1}},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for integration testing."},"aria-label":{defaultValue:{value:"'Avatars'",computed:!1},required:!1}},composes:["Omit"]};const W=.35,u={base:{kVAEAm:"astryx1n2onr6",k1xSpc:"astryx78zum5",kGNEyG:"astryx6s0dn4",kjj79g:"astryxl56j7k",kaIpWk:"astryxjspbzw",kWkggS:"astryx10xzikg",kMwMTN:"astryxv1l7n4",kMv6JI:"astryx9ynric",k63SB2:"astryx1e4wzip",kfSwDN:"astryx87ps6o",kMzoRj:"astryxdh2fpr",ksu8eU:"astryx1y0btm7",kVAM5u:"astryx1touxvs",kB7OPa:"astryx1afcbsf",kKwaWg:"astryx14bno8m",$$css:!0},button:{kkrTdU:"astryx1ypdohk",kmVPX3:"astryx1717udv",kKwaWg:"astryx14bno8m astryxbfmc0r astryx1nocapi",kI3sdo:"astryx1a2a7pz astryx17nn4n9",kInvED:"astryx7s97pk",$$css:!0},overlap:{keTefX:"astryx13hpdyo",$$css:!0}},L={kGuDYH:"astryxdmh292",$$css:!0},P={"--_avatar-group-overlap":"astryxlz5hwt",$$css:!0},m={size:e=>[{kzqmXN:e!=null?"astryx5lhr3w":e,kZKoxP:e!=null?"astryx16ye13r":e,$$css:!0},{"--x-width":(a=>typeof a=="number"?a+"px":a??void 0)(e),"--x-height":(a=>typeof a=="number"?a+"px":a??void 0)(e)}],fontSize:e=>[L,{"--x-fontSize":(a=>typeof a=="number"?a+"px":a??void 0)(e*W)}],overlap:e=>[P,{"--x---_avatar-group-overlap":`${e}px`!=null?`${e}px`:void 0}]};function o({ref:e,count:a,onClick:i,children:E,xstyle:b,className:j,style:z}){const O=_(),c=O?.numericSize??36,l=O?.overlap??0,p=`${a} more`,R=E??`+${a}`;return i?r.jsx("button",{ref:e,type:"button",onClick:i,"aria-label":p,...C(T("avatar-group-overflow"),N(u.base,u.button,u.overlap,m.size(c),m.fontSize(c),m.overlap(-l),b),j,z),children:R}):r.jsx("span",{ref:e,"aria-label":p,...C(T("avatar-group-overflow"),N(u.base,u.overlap,m.size(c),m.fontSize(c),m.overlap(-l),b),j,z),children:R})}o.displayName="AvatarGroupOverflow";o.__docgenInfo={description:`Overflow indicator for AvatarGroup. Shows a "+N" count and
optionally handles clicks.

@example
\`\`\`
<AvatarGroup size="medium">
  {users.slice(0, 3).map(u => (
    <Avatar key={u.id} src={u.src} name={u.name} />
  ))}
  <AvatarGroupOverflow count={users.length - 3} onClick={showAll} />
</AvatarGroup>
\`\`\``,methods:[],displayName:"AvatarGroupOverflow",props:{ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLElement>",elements:[{name:"HTMLElement"}]},description:""},count:{required:!0,tsType:{name:"number"},description:"The overflow count to display."},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:`Callback fired when the overflow indicator is clicked.
When provided, the indicator renders as a focusable button.`},children:{required:!1,tsType:{name:"ReactNode"},description:'Custom content to render instead of the default "+N" label.'}},composes:["Omit"]};const n=[{name:"Alice Johnson",src:"https://i.pravatar.cc/150?img=1",key:"alice"},{name:"Bob Smith",src:"https://i.pravatar.cc/150?img=2",key:"bob"},{name:"Charlie Davis",src:"https://i.pravatar.cc/150?img=3",key:"charlie"},{name:"Diana Lee",src:"https://i.pravatar.cc/150?img=4",key:"diana"},{name:"Eve Park",src:"https://i.pravatar.cc/150?img=5",key:"eve"}],F={title:"Core/AvatarGroup",component:s,tags:["autodocs"],argTypes:{size:{control:"select",options:["tiny","xsmall","small","medium","large"],description:"Size applied to all child avatars"}}},d={render:()=>r.jsx(s,{size:"medium",children:n.slice(0,3).map(e=>r.jsx(t,{src:e.src,name:e.name},e.key))})},v={render:()=>r.jsxs(s,{size:"medium",children:[n.slice(0,3).map(e=>r.jsx(t,{src:e.src,name:e.name},e.key)),r.jsx(o,{count:n.length-3})]})},y={render:()=>r.jsxs(s,{size:"medium",children:[n.slice(0,3).map(e=>r.jsx(t,{src:e.src,name:e.name},e.key)),r.jsx(o,{count:n.length-3,onClick:()=>alert("Show all participants")})]})},x={render:()=>r.jsxs(s,{size:"medium",children:[n.slice(0,3).map(e=>r.jsx(t,{src:e.src,name:e.name},e.key)),r.jsx(o,{count:44})]})},h={render:()=>r.jsxs(s,{size:"medium",children:[r.jsx(t,{src:"https://i.pravatar.cc/150?img=1",name:"Alice",status:r.jsx($,{variant:"success",label:"Online"})}),r.jsx(t,{src:"https://i.pravatar.cc/150?img=2",name:"Bob",status:r.jsx($,{variant:"warning",label:"Away"})}),r.jsx(t,{src:"https://i.pravatar.cc/150?img=3",name:"Charlie",status:r.jsx($,{variant:"error",label:"Offline"})})]})},f={render:()=>r.jsx("div",{className:"x78zum5 xdt5ytf x1qh66ti",children:["tiny","xsmall","small","medium","large"].map(e=>r.jsxs("div",{children:[r.jsx("h4",{className:"xrcdmg7 x9ynric",children:e}),r.jsxs(s,{size:e,children:[n.slice(0,3).map(a=>r.jsx(t,{src:a.src,name:a.name},a.key)),r.jsx(o,{count:n.length-3})]})]},e))})},A={render:()=>r.jsxs(s,{size:"medium",children:[n.slice(0,4).map(e=>r.jsx(t,{name:e.name},e.key)),r.jsx(o,{count:1})]})},g={render:()=>r.jsx(s,{size:"medium",children:r.jsx(t,{src:"https://i.pravatar.cc/150?img=1",name:"Alice Johnson"})})},k={render:()=>r.jsxs(s,{size:"medium",children:[n.slice(0,3).map(e=>r.jsx(t,{src:e.src,name:e.name},e.key)),r.jsx(o,{count:999})]})},S={render:()=>r.jsxs(s,{size:"medium",children:[n.slice(0,3).map(e=>r.jsx(t,{src:e.src,name:e.name},e.key)),r.jsx(o,{count:0})]})},w={render:()=>r.jsx("div",{style:{width:120,border:"1px dashed grey",padding:8},children:r.jsxs(s,{size:"medium",children:[n.slice(0,5).map(e=>r.jsx(t,{src:e.src,name:e.name},e.key)),r.jsx(o,{count:10})]})})},G={render:()=>{const e=Array.from({length:10},(a,i)=>({key:`user-${i}`,name:`User ${i+1}`,src:`https://i.pravatar.cc/150?img=${i%70+1}`}));return r.jsxs(s,{size:"small",children:[e.map(a=>r.jsx(t,{src:a.src,name:a.name},a.key)),r.jsx(o,{count:37})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <AvatarGroup size="medium">
      {USERS.slice(0, 3).map(u => <Avatar key={u.key} src={u.src} name={u.name} />)}
    </AvatarGroup>
}`,...d.parameters?.docs?.source},description:{story:"Basic avatar group showing all members.",...d.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <AvatarGroup size="medium">
      {USERS.slice(0, 3).map(u => <Avatar key={u.key} src={u.src} name={u.name} />)}
      <AvatarGroupOverflow count={USERS.length - 3} />
    </AvatarGroup>
}`,...v.parameters?.docs?.source},description:{story:'Sliced to 3 with "+N" overflow indicator.',...v.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <AvatarGroup size="medium">
      {USERS.slice(0, 3).map(u => <Avatar key={u.key} src={u.src} name={u.name} />)}
      <AvatarGroupOverflow count={USERS.length - 3} onClick={() => alert('Show all participants')} />
    </AvatarGroup>
}`,...y.parameters?.docs?.source},description:{story:"Clickable overflow indicator.",...y.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <AvatarGroup size="medium">
      {USERS.slice(0, 3).map(u => <Avatar key={u.key} src={u.src} name={u.name} />)}
      <AvatarGroupOverflow count={44} />
    </AvatarGroup>
}`,...x.parameters?.docs?.source},description:{story:"Server-side total count (47 participants, only 3 rendered).",...x.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <AvatarGroup size="medium">
      <Avatar src="https://i.pravatar.cc/150?img=1" name="Alice" status={<StatusDot variant="success" label="Online" />} />
      <Avatar src="https://i.pravatar.cc/150?img=2" name="Bob" status={<StatusDot variant="warning" label="Away" />} />
      <Avatar src="https://i.pravatar.cc/150?img=3" name="Charlie" status={<StatusDot variant="error" label="Offline" />} />
    </AvatarGroup>
}`,...h.parameters?.docs?.source},description:{story:"Per-avatar status dots — just works with compositional API.",...h.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div {...stylex.props(storyStyles.storyWrapper)}>
      {(['tiny', 'xsmall', 'small', 'medium', 'large'] as const).map(size => <div key={size}>
          <h4 {...stylex.props(storyStyles.heading)}>{size}</h4>
          <AvatarGroup size={size}>
            {USERS.slice(0, 3).map(u => <Avatar key={u.key} src={u.src} name={u.name} />)}
            <AvatarGroupOverflow count={USERS.length - 3} />
          </AvatarGroup>
        </div>)}
    </div>
}`,...f.parameters?.docs?.source},description:{story:"All sizes side by side.",...f.parameters?.docs?.description}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <AvatarGroup size="medium">
      {USERS.slice(0, 4).map(u => <Avatar key={u.key} name={u.name} />)}
      <AvatarGroupOverflow count={1} />
    </AvatarGroup>
}`,...A.parameters?.docs?.source},description:{story:"Initials fallback when no images provided.",...A.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <AvatarGroup size="medium">
      <Avatar src="https://i.pravatar.cc/150?img=1" name="Alice Johnson" />
    </AvatarGroup>
}`,...g.parameters?.docs?.source},description:{story:"Single avatar — no overlap applied.",...g.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <AvatarGroup size="medium">
      {USERS.slice(0, 3).map(u => <Avatar key={u.key} src={u.src} name={u.name} />)}
      <AvatarGroupOverflow count={999} />
    </AvatarGroup>
}`,...k.parameters?.docs?.source},description:{story:"Large overflow count (99+).",...k.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <AvatarGroup size="medium">
      {USERS.slice(0, 3).map(u => <Avatar key={u.key} src={u.src} name={u.name} />)}
      <AvatarGroupOverflow count={0} />
    </AvatarGroup>
}`,...S.parameters?.docs?.source},description:{story:"Zero overflow count edge case.",...S.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 120,
    border: '1px dashed grey',
    padding: 8
  }}>
      <AvatarGroup size="medium">
        {USERS.slice(0, 5).map(u => <Avatar key={u.key} src={u.src} name={u.name} />)}
        <AvatarGroupOverflow count={10} />
      </AvatarGroup>
    </div>
}`,...w.parameters?.docs?.source},description:{story:"Narrow container — tests overflow behavior in constrained width.",...w.parameters?.docs?.description}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => {
    const manyUsers = Array.from({
      length: 10
    }, (_, i) => ({
      key: \`user-\${i}\`,
      name: \`User \${i + 1}\`,
      src: \`https://i.pravatar.cc/150?img=\${i % 70 + 1}\`
    }));
    return <AvatarGroup size="small">
        {manyUsers.map(u => <Avatar key={u.key} src={u.src} name={u.name} />)}
        <AvatarGroupOverflow count={37} />
      </AvatarGroup>;
  }
}`,...G.parameters?.docs?.source},description:{story:"Many avatars — 10+ items to verify overlap stacking.",...G.parameters?.docs?.description}}};const J=["Default","WithOverflow","ClickableOverflow","ServerSideCount","WithStatusDots","AllSizes","InitialsFallback","SingleAvatar","LargeOverflowCount","ZeroOverflow","NarrowContainer","ManyAvatars"];export{f as AllSizes,y as ClickableOverflow,d as Default,A as InitialsFallback,k as LargeOverflowCount,G as ManyAvatars,w as NarrowContainer,x as ServerSideCount,g as SingleAvatar,v as WithOverflow,h as WithStatusDots,S as ZeroOverflow,J as __namedExportsOrder,F as default};
