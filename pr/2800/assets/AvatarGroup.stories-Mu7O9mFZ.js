import{at as C,ad as r,ai as E,ar as $,aZ as T}from"./iframe-yRFQ_7VC.js";import{a as N,r as U,u as M,X as t}from"./XDSAvatar-W6VpExB0.js";import{X as R}from"./XDSStatusDot-CGZv-QET.js";import"./preload-helper-Ct5FWWRu.js";const _=.25,I={root:{k1xSpc:"xds3nfvp2",kGNEyG:"xds6s0dn4",$$css:!0}};function s({children:e,size:a="small","data-testid":i,"aria-label":O="Avatars",xstyle:w,className:G,style:b,ref:j,...c}){const l=U(a),p=Math.round(l*_),z=C.useMemo(()=>({size:a,overlap:p,numericSize:l}),[a,p,l]);return r.jsx(N,{value:z,children:r.jsx("div",{ref:j,role:"group","aria-label":O,"data-testid":i,...E(T("avatar-group",{size:a}),$(I.root,w),G,b),...c,children:e})})}s.displayName="XDSAvatarGroup";s.__docgenInfo={description:`Stacked avatar display showing multiple avatars overlapping with an
optional overflow indicator. Uses a compositional children-based API
so each avatar can carry its own props (status dots, click handlers, etc.).

Consumers handle slicing — pass only the avatars you want visible,
then add an XDSAvatarGroupOverflow for the "+N" indicator.

@example
\`\`\`
<XDSAvatarGroup size="medium">
  {users.slice(0, 3).map(u => (
    <XDSAvatar key={u.id} src={u.src} name={u.name} />
  ))}
  <XDSAvatarGroupOverflow count={users.length - 3} />
</XDSAvatarGroup>
\`\`\``,methods:[],displayName:"XDSAvatarGroup",props:{xstyle:{required:!1,tsType:{name:"StyleXStyles"},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:"Ref forwarded to the root element."},children:{required:!0,tsType:{name:"ReactNode"},description:`XDSAvatar children, optionally followed by one XDSAvatarGroupOverflow.
Consumers are responsible for slicing to the desired visible count.`},size:{required:!1,tsType:{name:"union",raw:"XDSAvatarNamedSize | XDSAvatarNumericSize",elements:[{name:"union",raw:"'tiny' | 'xsmall' | 'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'tiny'"},{name:"literal",value:"'xsmall'"},{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},{name:"union",raw:`| 16
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
@default 'small'`,defaultValue:{value:"'small'",computed:!1}},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for integration testing."},"aria-label":{defaultValue:{value:"'Avatars'",computed:!1},required:!1}},composes:["Omit"]};const q=.35,d={base:{kVAEAm:"xds1n2onr6",k1xSpc:"xds78zum5",kGNEyG:"xds6s0dn4",kjj79g:"xdsl56j7k",kaIpWk:"xdsjspbzw",kWkggS:"xds10xzikg",kMwMTN:"xdsv1l7n4",kMv6JI:"xds9ynric",k63SB2:"xds1e4wzip",kfSwDN:"xds87ps6o",kMzoRj:"xdsdh2fpr",ksu8eU:"xds1y0btm7",kVAM5u:"xds1touxvs",kB7OPa:"xds1afcbsf",kKwaWg:"xds14bno8m",$$css:!0},button:{kkrTdU:"xds1ypdohk",kmVPX3:"xds1717udv",kKwaWg:"xds14bno8m xdsbfmc0r xds1nocapi",kI3sdo:"xds1a2a7pz xds17nn4n9",kInvED:"xds7s97pk",$$css:!0},overlap:{keTefX:"xds13hpdyo",$$css:!0}},W={kGuDYH:"xdsdmh292",$$css:!0},L={"--_avatar-group-overlap":"xdslz5hwt",$$css:!0},m={size:e=>[{kzqmXN:e!=null?"xds5lhr3w":e,kZKoxP:e!=null?"xds16ye13r":e,$$css:!0},{"--x-width":(a=>typeof a=="number"?a+"px":a??void 0)(e),"--x-height":(a=>typeof a=="number"?a+"px":a??void 0)(e)}],fontSize:e=>[W,{"--x-fontSize":(a=>typeof a=="number"?a+"px":a??void 0)(e*q)}],overlap:e=>[L,{"--x---_avatar-group-overlap":`${e}px`!=null?`${e}px`:void 0}]};function o({ref:e,count:a,onClick:i,children:O,xstyle:w,className:G,style:b}){const j=M(),c=j?.numericSize??36,l=j?.overlap??0,p=`${a} more`,z=O??`+${a}`;return i?r.jsx("button",{ref:e,type:"button",onClick:i,"aria-label":p,...E(T("avatar-group-overflow"),$(d.base,d.button,d.overlap,m.size(c),m.fontSize(c),m.overlap(-l),w),G,b),children:z}):r.jsx("span",{ref:e,"aria-label":p,...E(T("avatar-group-overflow"),$(d.base,d.overlap,m.size(c),m.fontSize(c),m.overlap(-l),w),G,b),children:z})}o.displayName="XDSAvatarGroupOverflow";o.__docgenInfo={description:`Overflow indicator for XDSAvatarGroup. Shows a "+N" count and
optionally handles clicks.

@example
\`\`\`
<XDSAvatarGroup size="medium">
  {users.slice(0, 3).map(u => (
    <XDSAvatar key={u.id} src={u.src} name={u.name} />
  ))}
  <XDSAvatarGroupOverflow count={users.length - 3} onClick={showAll} />
</XDSAvatarGroup>
\`\`\``,methods:[],displayName:"XDSAvatarGroupOverflow",props:{ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLElement>",elements:[{name:"HTMLElement"}]},description:""},count:{required:!0,tsType:{name:"number"},description:"The overflow count to display."},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:`Callback fired when the overflow indicator is clicked.
When provided, the indicator renders as a focusable button.`},children:{required:!1,tsType:{name:"ReactNode"},description:'Custom content to render instead of the default "+N" label.'}},composes:["Omit"]};const n=[{name:"Alice Johnson",src:"https://i.pravatar.cc/150?img=1",key:"alice"},{name:"Bob Smith",src:"https://i.pravatar.cc/150?img=2",key:"bob"},{name:"Charlie Davis",src:"https://i.pravatar.cc/150?img=3",key:"charlie"},{name:"Diana Lee",src:"https://i.pravatar.cc/150?img=4",key:"diana"},{name:"Eve Park",src:"https://i.pravatar.cc/150?img=5",key:"eve"}],Z={title:"Core/AvatarGroup",component:s,tags:["autodocs"],argTypes:{size:{control:"select",options:["tiny","xsmall","small","medium","large"],description:"Size applied to all child avatars"}}},u={render:()=>r.jsx(s,{size:"medium",children:n.slice(0,3).map(e=>r.jsx(t,{src:e.src,name:e.name},e.key))})},v={render:()=>r.jsxs(s,{size:"medium",children:[n.slice(0,3).map(e=>r.jsx(t,{src:e.src,name:e.name},e.key)),r.jsx(o,{count:n.length-3})]})},S={render:()=>r.jsxs(s,{size:"medium",children:[n.slice(0,3).map(e=>r.jsx(t,{src:e.src,name:e.name},e.key)),r.jsx(o,{count:n.length-3,onClick:()=>alert("Show all participants")})]})},y={render:()=>r.jsxs(s,{size:"medium",children:[n.slice(0,3).map(e=>r.jsx(t,{src:e.src,name:e.name},e.key)),r.jsx(o,{count:44})]})},x={render:()=>r.jsxs(s,{size:"medium",children:[r.jsx(t,{src:"https://i.pravatar.cc/150?img=1",name:"Alice",status:r.jsx(R,{variant:"success",label:"Online"})}),r.jsx(t,{src:"https://i.pravatar.cc/150?img=2",name:"Bob",status:r.jsx(R,{variant:"warning",label:"Away"})}),r.jsx(t,{src:"https://i.pravatar.cc/150?img=3",name:"Charlie",status:r.jsx(R,{variant:"error",label:"Offline"})})]})},h={render:()=>r.jsx("div",{className:"x78zum5 xdt5ytf x1qh66ti",children:["tiny","xsmall","small","medium","large"].map(e=>r.jsxs("div",{children:[r.jsx("h4",{className:"xrcdmg7 x9ynric",children:e}),r.jsxs(s,{size:e,children:[n.slice(0,3).map(a=>r.jsx(t,{src:a.src,name:a.name},a.key)),r.jsx(o,{count:n.length-3})]})]},e))})},f={render:()=>r.jsxs(s,{size:"medium",children:[n.slice(0,4).map(e=>r.jsx(t,{name:e.name},e.key)),r.jsx(o,{count:1})]})},A={render:()=>r.jsx(s,{size:"medium",children:r.jsx(t,{src:"https://i.pravatar.cc/150?img=1",name:"Alice Johnson"})})},g={render:()=>r.jsxs(s,{size:"medium",children:[n.slice(0,3).map(e=>r.jsx(t,{src:e.src,name:e.name},e.key)),r.jsx(o,{count:999})]})},k={render:()=>r.jsxs(s,{size:"medium",children:[n.slice(0,3).map(e=>r.jsx(t,{src:e.src,name:e.name},e.key)),r.jsx(o,{count:0})]})},D={render:()=>r.jsx("div",{style:{width:120,border:"1px dashed grey",padding:8},children:r.jsxs(s,{size:"medium",children:[n.slice(0,5).map(e=>r.jsx(t,{src:e.src,name:e.name},e.key)),r.jsx(o,{count:10})]})})},X={render:()=>{const e=Array.from({length:10},(a,i)=>({key:`user-${i}`,name:`User ${i+1}`,src:`https://i.pravatar.cc/150?img=${i%70+1}`}));return r.jsxs(s,{size:"small",children:[e.map(a=>r.jsx(t,{src:a.src,name:a.name},a.key)),r.jsx(o,{count:37})]})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <XDSAvatarGroup size="medium">
      {USERS.slice(0, 3).map(u => <XDSAvatar key={u.key} src={u.src} name={u.name} />)}
    </XDSAvatarGroup>
}`,...u.parameters?.docs?.source},description:{story:"Basic avatar group showing all members.",...u.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <XDSAvatarGroup size="medium">
      {USERS.slice(0, 3).map(u => <XDSAvatar key={u.key} src={u.src} name={u.name} />)}
      <XDSAvatarGroupOverflow count={USERS.length - 3} />
    </XDSAvatarGroup>
}`,...v.parameters?.docs?.source},description:{story:'Sliced to 3 with "+N" overflow indicator.',...v.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <XDSAvatarGroup size="medium">
      {USERS.slice(0, 3).map(u => <XDSAvatar key={u.key} src={u.src} name={u.name} />)}
      <XDSAvatarGroupOverflow count={USERS.length - 3} onClick={() => alert('Show all participants')} />
    </XDSAvatarGroup>
}`,...S.parameters?.docs?.source},description:{story:"Clickable overflow indicator.",...S.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <XDSAvatarGroup size="medium">
      {USERS.slice(0, 3).map(u => <XDSAvatar key={u.key} src={u.src} name={u.name} />)}
      <XDSAvatarGroupOverflow count={44} />
    </XDSAvatarGroup>
}`,...y.parameters?.docs?.source},description:{story:"Server-side total count (47 participants, only 3 rendered).",...y.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <XDSAvatarGroup size="medium">
      <XDSAvatar src="https://i.pravatar.cc/150?img=1" name="Alice" status={<XDSStatusDot variant="success" label="Online" />} />
      <XDSAvatar src="https://i.pravatar.cc/150?img=2" name="Bob" status={<XDSStatusDot variant="warning" label="Away" />} />
      <XDSAvatar src="https://i.pravatar.cc/150?img=3" name="Charlie" status={<XDSStatusDot variant="error" label="Offline" />} />
    </XDSAvatarGroup>
}`,...x.parameters?.docs?.source},description:{story:"Per-avatar status dots — just works with compositional API.",...x.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div {...stylex.props(storyStyles.storyWrapper)}>
      {(['tiny', 'xsmall', 'small', 'medium', 'large'] as const).map(size => <div key={size}>
          <h4 {...stylex.props(storyStyles.heading)}>{size}</h4>
          <XDSAvatarGroup size={size}>
            {USERS.slice(0, 3).map(u => <XDSAvatar key={u.key} src={u.src} name={u.name} />)}
            <XDSAvatarGroupOverflow count={USERS.length - 3} />
          </XDSAvatarGroup>
        </div>)}
    </div>
}`,...h.parameters?.docs?.source},description:{story:"All sizes side by side.",...h.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <XDSAvatarGroup size="medium">
      {USERS.slice(0, 4).map(u => <XDSAvatar key={u.key} name={u.name} />)}
      <XDSAvatarGroupOverflow count={1} />
    </XDSAvatarGroup>
}`,...f.parameters?.docs?.source},description:{story:"Initials fallback when no images provided.",...f.parameters?.docs?.description}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <XDSAvatarGroup size="medium">
      <XDSAvatar src="https://i.pravatar.cc/150?img=1" name="Alice Johnson" />
    </XDSAvatarGroup>
}`,...A.parameters?.docs?.source},description:{story:"Single avatar — no overlap applied.",...A.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <XDSAvatarGroup size="medium">
      {USERS.slice(0, 3).map(u => <XDSAvatar key={u.key} src={u.src} name={u.name} />)}
      <XDSAvatarGroupOverflow count={999} />
    </XDSAvatarGroup>
}`,...g.parameters?.docs?.source},description:{story:"Large overflow count (99+).",...g.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <XDSAvatarGroup size="medium">
      {USERS.slice(0, 3).map(u => <XDSAvatar key={u.key} src={u.src} name={u.name} />)}
      <XDSAvatarGroupOverflow count={0} />
    </XDSAvatarGroup>
}`,...k.parameters?.docs?.source},description:{story:"Zero overflow count edge case.",...k.parameters?.docs?.description}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 120,
    border: '1px dashed grey',
    padding: 8
  }}>
      <XDSAvatarGroup size="medium">
        {USERS.slice(0, 5).map(u => <XDSAvatar key={u.key} src={u.src} name={u.name} />)}
        <XDSAvatarGroupOverflow count={10} />
      </XDSAvatarGroup>
    </div>
}`,...D.parameters?.docs?.source},description:{story:"Narrow container — tests overflow behavior in constrained width.",...D.parameters?.docs?.description}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => {
    const manyUsers = Array.from({
      length: 10
    }, (_, i) => ({
      key: \`user-\${i}\`,
      name: \`User \${i + 1}\`,
      src: \`https://i.pravatar.cc/150?img=\${i % 70 + 1}\`
    }));
    return <XDSAvatarGroup size="small">
        {manyUsers.map(u => <XDSAvatar key={u.key} src={u.src} name={u.name} />)}
        <XDSAvatarGroupOverflow count={37} />
      </XDSAvatarGroup>;
  }
}`,...X.parameters?.docs?.source},description:{story:"Many avatars — 10+ items to verify overlap stacking.",...X.parameters?.docs?.description}}};const F=["Default","WithOverflow","ClickableOverflow","ServerSideCount","WithStatusDots","AllSizes","InitialsFallback","SingleAvatar","LargeOverflowCount","ZeroOverflow","NarrowContainer","ManyAvatars"];export{h as AllSizes,S as ClickableOverflow,u as Default,f as InitialsFallback,g as LargeOverflowCount,X as ManyAvatars,D as NarrowContainer,y as ServerSideCount,A as SingleAvatar,v as WithOverflow,x as WithStatusDots,k as ZeroOverflow,F as __namedExportsOrder,Z as default};
