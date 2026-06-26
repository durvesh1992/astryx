import{at as c,ad as s,ar as A,ai as V,aZ as W}from"./iframe-yRFQ_7VC.js";import{b as C,X as a}from"./XDSAvatar-W6VpExB0.js";import"./preload-helper-Ct5FWWRu.js";function M(t){return t<=36?{dotSize:10,borderWidth:1,iconSize:0}:t<=72?{dotSize:20,borderWidth:2,iconSize:12}:{dotSize:32,borderWidth:4,iconSize:18}}const l={dot:{kaIpWk:"xdsjspbzw",ksu8eU:"xds1y0btm7",kVAM5u:"xds1touxvs",kB7OPa:"xds9f619",k1xSpc:"xds78zum5",kGNEyG:"xds6s0dn4",kjj79g:"xdsl56j7k",$$css:!0},success:{kWkggS:"xdsdsz4j9",$$css:!0},neutral:{kWkggS:"xdsdomwnj",$$css:!0},error:{kWkggS:"xds1pjz0fi",$$css:!0},icon:{k1xSpc:"xds78zum5",kGNEyG:"xds6s0dn4",kjj79g:"xdsl56j7k",kMwMTN:"xdsrkvqaz",kLWn49:"xds14ju556",$$css:!0}},T={kjGldf:"",k2ei4v:"",kZ1KPB:"",ke9TFa:"",kWqL5O:"",kLoX6v:"",kEafiO:"",kt9PQ7:"",$$css:!0},X={size:(t,r)=>[T,{kzqmXN:t!=null?"xds5lhr3w":t,kZKoxP:t!=null?"xds16ye13r":t,kMzoRj:r!=null?"xds1mw0n95":r,$$css:!0},{"--x-width":(i=>typeof i=="number"?i+"px":i??void 0)(t),"--x-height":(i=>typeof i=="number"?i+"px":i??void 0)(t),"--x-borderWidth":(i=>typeof i=="number"?i+"px":i??void 0)(r)}],iconSize:t=>[{kzqmXN:t!=null?"xds5lhr3w":t,kZKoxP:t!=null?"xds16ye13r":t,$$css:!0},{"--x-width":(r=>typeof r=="number"?r+"px":r??void 0)(t),"--x-height":(r=>typeof r=="number"?r+"px":r??void 0)(t)}]},O={success:l.success,neutral:l.neutral,error:l.error};function e({ref:t,variant:r="success",label:i,icon:m,xstyle:f,className:b,style:N,...k}){const w=c.use(C),{dotSize:I,borderWidth:U,iconSize:D}=M(w);return s.jsx("div",{ref:t,...i?{role:"img","aria-label":i}:void 0,...V(W("avatar-status-dot",{variant:r}),A(l.dot,O[r],X.size(I,U),f),b,N),...k,children:m&&D>0&&s.jsx("span",{"aria-hidden":"true",...A(l.icon,X.iconSize(D)),children:m})})}e.displayName="XDSAvatarStatusDot";e.__docgenInfo={description:`A status indicator dot that automatically scales to match the parent
XDSAvatar's size.

Must be used inside an XDSAvatar's \`status\` prop so it can read
the avatar size from context.

@example
\`\`\`
<XDSAvatar
  name="John Doe"
  size="medium"
  status={<XDSAvatarStatusDot variant="success" label="Online" />}
/>
<XDSAvatar
  name="Jane Smith"
  size="large"
  status={<XDSAvatarStatusDot variant="success" label="Verified" icon={<CheckIcon />} />}
/>
\`\`\``,methods:[],displayName:"XDSAvatarStatusDot",props:{xstyle:{required:!1,tsType:{name:"StyleXStyles"},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:""},variant:{required:!1,tsType:{name:"XDSAvatarStatusDotVariantMap"},description:"The semantic color variant of the dot.\n- `success` — green dot (e.g. online, accepted)\n- `neutral` — gray dot (e.g. offline, pending)\n- `error` — red dot (e.g. busy, rejected)\n\nMatches the `variant` convention from `XDSStatusDot`.\n@default 'success'",defaultValue:{value:"'success'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:`Accessible label for the status dot.
Describes the meaning of the indicator for screen readers
(e.g. "Online", "Accepted", "John Doe is busy").`},icon:{required:!1,tsType:{name:"ReactNode"},description:`Optional icon to render centered inside the dot.
Accepts any ReactNode (typically an SVG icon).
The icon is automatically sized to fit the dot and hidden
at the smallest avatar sizes where there isn't enough room.

@example
\`\`\`
<XDSAvatarStatusDot variant="success" label="Verified" icon={<CheckIcon />} />
\`\`\``}},composes:["Omit"]};function q({title:t,titleId:r,...i},m){return c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:m,"aria-labelledby":r},i),t?c.createElement("title",{id:r},t):null,c.createElement("path",{fillRule:"evenodd",d:"M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z",clipRule:"evenodd"}))}const n=c.forwardRef(q),R={title:"Core/Avatar",component:a,tags:["autodocs"],argTypes:{size:{control:"select",options:["tiny","xsmall","small","medium","large",16,20,24,32,36,40,48,60,64,72,96,128,144,180],description:"Size of the avatar"},src:{control:"text",description:"Primary image source URL"},fallbackSrc:{control:"text",description:"Fallback image when primary fails"},name:{control:"text",description:"User name for initials and alt text"},alt:{control:"text",description:"Alt text (falls back to name)"},status:{control:"boolean",description:"Show status indicator dot",mapping:{true:s.jsx(e,{}),false:void 0}}}},o={args:{name:"John Doe",size:"medium"}},d={args:{src:"https://i.pravatar.cc/150?img=1",name:"Jane Smith",size:"medium"}},x={render:()=>s.jsxs("div",{className:"x78zum5 xdt5ytf x1qh66ti",children:[s.jsx("h4",{className:"xrcdmg7 x9ynric",children:"Named Sizes"}),s.jsxs("div",{className:"x78zum5 x6s0dn4 x18g69wz",children:[s.jsx(a,{name:"TY",size:"tiny"}),s.jsx(a,{name:"XS",size:"xsmall"}),s.jsx(a,{name:"SM",size:"small"}),s.jsx(a,{name:"MD",size:"medium"}),s.jsx(a,{name:"LG",size:"large"})]})]})},p={render:()=>s.jsxs("div",{className:"x78zum5 xdt5ytf x1qh66ti",children:[s.jsx("h4",{className:"xrcdmg7 x9ynric",children:"With Images (Different Sizes)"}),s.jsxs("div",{className:"x78zum5 x6s0dn4 x18g69wz",children:[s.jsx(a,{src:"https://i.pravatar.cc/150?img=1",name:"User 1",size:"tiny"}),s.jsx(a,{src:"https://i.pravatar.cc/150?img=2",name:"User 2",size:"xsmall"}),s.jsx(a,{src:"https://i.pravatar.cc/150?img=3",name:"User 3",size:"small"}),s.jsx(a,{src:"https://i.pravatar.cc/150?img=4",name:"User 4",size:"medium"}),s.jsx(a,{src:"https://i.pravatar.cc/150?img=5",name:"User 5",size:"large"})]})]})},u={render:()=>s.jsxs("div",{className:"x78zum5 xdt5ytf x1qh66ti",children:[s.jsx("h4",{className:"xrcdmg7 x9ynric",children:"Initials Fallback"}),s.jsxs("div",{className:"x78zum5 x6s0dn4 x18g69wz",children:[s.jsx(a,{name:"John Doe",size:"medium"}),s.jsx(a,{name:"Alice",size:"medium"}),s.jsx(a,{name:"Bob Smith Johnson",size:"medium"}),s.jsx(a,{name:"Dr. Sarah Connor",size:"medium"})]})]})},v={render:()=>s.jsxs("div",{className:"x78zum5 xdt5ytf x1qh66ti",children:[s.jsx("h4",{className:"xrcdmg7 x9ynric",children:"Default Icon (No Image or Name)"}),s.jsxs("div",{className:"x78zum5 x6s0dn4 x18g69wz",children:[s.jsx(a,{size:"tiny"}),s.jsx(a,{size:"xsmall"}),s.jsx(a,{size:"small"}),s.jsx(a,{size:"medium"}),s.jsx(a,{size:"large"})]})]})},h={render:()=>s.jsxs("div",{className:"x78zum5 xdt5ytf x1qh66ti",children:[s.jsx("h4",{className:"xrcdmg7 x9ynric",children:"Fallback Chain Demo"}),s.jsxs("div",{className:"x78zum5 x6s0dn4 x18g69wz",children:[s.jsxs("div",{children:[s.jsx("p",{className:"xrcdmg7 x9ynric",children:"Valid src"}),s.jsx(a,{src:"https://i.pravatar.cc/150?img=10",name:"Test User",size:"large"})]}),s.jsxs("div",{children:[s.jsx("p",{className:"xrcdmg7 x9ynric",children:"Invalid src, valid fallbackSrc"}),s.jsx(a,{src:"https://invalid-url.example/broken.jpg",fallbackSrc:"https://i.pravatar.cc/150?img=11",name:"Test User",size:"large"})]}),s.jsxs("div",{children:[s.jsx("p",{className:"xrcdmg7 x9ynric",children:"Both invalid, has name"}),s.jsx(a,{src:"https://invalid-url.example/broken.jpg",fallbackSrc:"https://also-invalid.example/broken.jpg",name:"Test User",size:"large"})]}),s.jsxs("div",{children:[s.jsx("p",{className:"xrcdmg7 x9ynric",children:"All invalid, no name"}),s.jsx(a,{src:"https://invalid-url.example/broken.jpg",size:"large"})]})]})]})},S={render:()=>s.jsxs("div",{className:"x78zum5 xdt5ytf x1qh66ti",children:[s.jsx("h4",{className:"xrcdmg7 x9ynric",children:"With Status Indicators"}),s.jsxs("div",{className:"x78zum5 x6s0dn4 x18g69wz",children:[s.jsx(a,{src:"https://i.pravatar.cc/150?img=20",name:"Online User",size:"large",status:s.jsx(e,{variant:"success",label:"Online"})}),s.jsx(a,{src:"https://i.pravatar.cc/150?img=21",name:"Offline User",size:"large",status:s.jsx(e,{variant:"neutral",label:"Offline"})}),s.jsx(a,{src:"https://i.pravatar.cc/150?img=22",name:"Busy User",size:"large",status:s.jsx(e,{variant:"error",label:"Busy"})})]})]})},g={name:"Status Dot Across All Sizes",render:()=>s.jsxs("div",{className:"x78zum5 xdt5ytf x1qh66ti",children:[s.jsx("h4",{className:"xrcdmg7 x9ynric",children:"Status dot scales proportionally with avatar size"}),s.jsx("h4",{className:"xrcdmg7 x9ynric",children:"Named Sizes"}),s.jsxs("div",{className:"x78zum5 x6s0dn4 x18g69wz",children:[s.jsx(a,{name:"TY",size:"tiny",status:s.jsx(e,{variant:"success"})}),s.jsx(a,{name:"XS",size:"xsmall",status:s.jsx(e,{variant:"success"})}),s.jsx(a,{name:"SM",size:"small",status:s.jsx(e,{variant:"success"})}),s.jsx(a,{name:"MD",size:"medium",status:s.jsx(e,{variant:"success"})}),s.jsx(a,{name:"LG",size:"large",status:s.jsx(e,{variant:"success"})})]}),s.jsx("h4",{className:"xrcdmg7 x9ynric",children:"Numeric Sizes with Images"}),s.jsxs("div",{className:"x78zum5 x6s0dn4 x18g69wz",children:[s.jsx(a,{src:"https://i.pravatar.cc/150?img=30",name:"U1",size:20,status:s.jsx(e,{variant:"success"})}),s.jsx(a,{src:"https://i.pravatar.cc/150?img=31",name:"U2",size:32,status:s.jsx(e,{variant:"success"})}),s.jsx(a,{src:"https://i.pravatar.cc/150?img=32",name:"U3",size:48,status:s.jsx(e,{variant:"error"})}),s.jsx(a,{src:"https://i.pravatar.cc/150?img=33",name:"U4",size:72,status:s.jsx(e,{variant:"neutral"})}),s.jsx(a,{src:"https://i.pravatar.cc/150?img=34",name:"U5",size:96,status:s.jsx(e,{variant:"success"})}),s.jsx(a,{src:"https://i.pravatar.cc/150?img=35",name:"U6",size:128,status:s.jsx(e,{variant:"success"})})]}),s.jsx("h4",{className:"xrcdmg7 x9ynric",children:"All Colors at Medium"}),s.jsxs("div",{className:"x78zum5 x6s0dn4 x18g69wz",children:[s.jsx(a,{src:"https://i.pravatar.cc/150?img=40",name:"Positive",size:"medium",status:s.jsx(e,{variant:"success",label:"Online"})}),s.jsx(a,{src:"https://i.pravatar.cc/150?img=41",name:"Neutral",size:"medium",status:s.jsx(e,{variant:"neutral",label:"Offline"})}),s.jsx(a,{src:"https://i.pravatar.cc/150?img=42",name:"Negative",size:"medium",status:s.jsx(e,{variant:"error",label:"Busy"})})]})]})},z={render:()=>s.jsxs("div",{className:"x78zum5 xdt5ytf x1qh66ti",children:[s.jsx("h4",{className:"xrcdmg7 x9ynric",children:"Status with Different Sizes"}),s.jsxs("div",{className:"x78zum5 x6s0dn4 x18g69wz",children:[s.jsx(a,{name:"AB",size:"small",status:s.jsx(e,{})}),s.jsx(a,{name:"CD",size:"medium",status:s.jsx(e,{})}),s.jsx(a,{name:"EF",size:"large",status:s.jsx(e,{})}),s.jsx(a,{name:"GH",size:72,status:s.jsx(e,{})})]})]})},y={name:"Status Dot with Icon",render:()=>s.jsxs("div",{className:"x78zum5 xdt5ytf x1qh66ti",children:[s.jsx("h4",{className:"xrcdmg7 x9ynric",children:"Icon inside status dot (hidden at tiny sizes where there isn't room)"}),s.jsx("h4",{className:"xrcdmg7 x9ynric",children:"Named Sizes"}),s.jsxs("div",{className:"x78zum5 x6s0dn4 x18g69wz",children:[s.jsx(a,{name:"TY",size:"tiny",status:s.jsx(e,{variant:"success",label:"Verified",icon:s.jsx(n,{})})}),s.jsx(a,{name:"XS",size:"xsmall",status:s.jsx(e,{variant:"success",label:"Verified",icon:s.jsx(n,{})})}),s.jsx(a,{name:"SM",size:"small",status:s.jsx(e,{variant:"success",label:"Verified",icon:s.jsx(n,{})})}),s.jsx(a,{src:"https://i.pravatar.cc/150?img=50",name:"MD",size:"medium",status:s.jsx(e,{variant:"success",label:"Verified",icon:s.jsx(n,{})})}),s.jsx(a,{src:"https://i.pravatar.cc/150?img=51",name:"LG",size:"large",status:s.jsx(e,{variant:"success",label:"Verified",icon:s.jsx(n,{})})})]}),s.jsx("h4",{className:"xrcdmg7 x9ynric",children:"Numeric Sizes with Images"}),s.jsxs("div",{className:"x78zum5 x6s0dn4 x18g69wz",children:[s.jsx(a,{src:"https://i.pravatar.cc/150?img=30",name:"U1",size:20,status:s.jsx(e,{variant:"success",label:"Verified",icon:s.jsx(n,{})})}),s.jsx(a,{src:"https://i.pravatar.cc/150?img=31",name:"U2",size:32,status:s.jsx(e,{variant:"success",label:"Verified",icon:s.jsx(n,{})})}),s.jsx(a,{src:"https://i.pravatar.cc/150?img=32",name:"U3",size:48,status:s.jsx(e,{variant:"success",label:"Verified",icon:s.jsx(n,{})})}),s.jsx(a,{src:"https://i.pravatar.cc/150?img=33",name:"U4",size:72,status:s.jsx(e,{variant:"success",label:"Verified",icon:s.jsx(n,{})})}),s.jsx(a,{src:"https://i.pravatar.cc/150?img=34",name:"U5",size:96,status:s.jsx(e,{variant:"success",label:"Verified",icon:s.jsx(n,{})})}),s.jsx(a,{src:"https://i.pravatar.cc/150?img=35",name:"U6",size:128,status:s.jsx(e,{variant:"success",label:"Verified",icon:s.jsx(n,{})})})]}),s.jsx("h4",{className:"xrcdmg7 x9ynric",children:"All Variants with Icons"}),s.jsxs("div",{className:"x78zum5 x6s0dn4 x18g69wz",children:[s.jsx(a,{src:"https://i.pravatar.cc/150?img=52",name:"Positive",size:"large",status:s.jsx(e,{variant:"success",label:"Verified",icon:s.jsx(n,{})})}),s.jsx(a,{src:"https://i.pravatar.cc/150?img=53",name:"Neutral",size:"large",status:s.jsx(e,{variant:"neutral",label:"Pending",icon:s.jsx(n,{})})}),s.jsx(a,{src:"https://i.pravatar.cc/150?img=54",name:"Negative",size:"large",status:s.jsx(e,{variant:"error",label:"Rejected",icon:s.jsx(n,{})})})]})]})},j={render:()=>s.jsxs("div",{className:"x78zum5 xdt5ytf x1qh66ti",children:[s.jsx("h4",{className:"xrcdmg7 x9ynric",children:"Numeric Pixel Sizes"}),s.jsxs("div",{className:"x78zum5 x6s0dn4 x18g69wz",children:[s.jsx(a,{name:"16",size:16}),s.jsx(a,{name:"24",size:24}),s.jsx(a,{name:"36",size:36}),s.jsx(a,{name:"48",size:48}),s.jsx(a,{name:"72",size:72}),s.jsx(a,{name:"96",size:96}),s.jsx(a,{name:"128",size:128})]})]})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'John Doe',
    size: 'medium'
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    src: 'https://i.pravatar.cc/150?img=1',
    name: 'Jane Smith',
    size: 'medium'
  }
}`,...d.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div {...stylex.props(styles.storyWrapper)}>
      <h4 {...stylex.props(styles.heading)}>Named Sizes</h4>
      <div {...stylex.props(styles.row)}>
        <XDSAvatar name="TY" size="tiny" />
        <XDSAvatar name="XS" size="xsmall" />
        <XDSAvatar name="SM" size="small" />
        <XDSAvatar name="MD" size="medium" />
        <XDSAvatar name="LG" size="large" />
      </div>
    </div>
}`,...x.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div {...stylex.props(styles.storyWrapper)}>
      <h4 {...stylex.props(styles.heading)}>With Images (Different Sizes)</h4>
      <div {...stylex.props(styles.row)}>
        <XDSAvatar src="https://i.pravatar.cc/150?img=1" name="User 1" size="tiny" />
        <XDSAvatar src="https://i.pravatar.cc/150?img=2" name="User 2" size="xsmall" />
        <XDSAvatar src="https://i.pravatar.cc/150?img=3" name="User 3" size="small" />
        <XDSAvatar src="https://i.pravatar.cc/150?img=4" name="User 4" size="medium" />
        <XDSAvatar src="https://i.pravatar.cc/150?img=5" name="User 5" size="large" />
      </div>
    </div>
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div {...stylex.props(styles.storyWrapper)}>
      <h4 {...stylex.props(styles.heading)}>Initials Fallback</h4>
      <div {...stylex.props(styles.row)}>
        <XDSAvatar name="John Doe" size="medium" />
        <XDSAvatar name="Alice" size="medium" />
        <XDSAvatar name="Bob Smith Johnson" size="medium" />
        <XDSAvatar name="Dr. Sarah Connor" size="medium" />
      </div>
    </div>
}`,...u.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div {...stylex.props(styles.storyWrapper)}>
      <h4 {...stylex.props(styles.heading)}>Default Icon (No Image or Name)</h4>
      <div {...stylex.props(styles.row)}>
        <XDSAvatar size="tiny" />
        <XDSAvatar size="xsmall" />
        <XDSAvatar size="small" />
        <XDSAvatar size="medium" />
        <XDSAvatar size="large" />
      </div>
    </div>
}`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div {...stylex.props(styles.storyWrapper)}>
      <h4 {...stylex.props(styles.heading)}>Fallback Chain Demo</h4>
      <div {...stylex.props(styles.row)}>
        <div>
          <p {...stylex.props(styles.heading)}>Valid src</p>
          <XDSAvatar src="https://i.pravatar.cc/150?img=10" name="Test User" size="large" />
        </div>
        <div>
          <p {...stylex.props(styles.heading)}>
            Invalid src, valid fallbackSrc
          </p>
          <XDSAvatar src="https://invalid-url.example/broken.jpg" fallbackSrc="https://i.pravatar.cc/150?img=11" name="Test User" size="large" />
        </div>
        <div>
          <p {...stylex.props(styles.heading)}>Both invalid, has name</p>
          <XDSAvatar src="https://invalid-url.example/broken.jpg" fallbackSrc="https://also-invalid.example/broken.jpg" name="Test User" size="large" />
        </div>
        <div>
          <p {...stylex.props(styles.heading)}>All invalid, no name</p>
          <XDSAvatar src="https://invalid-url.example/broken.jpg" size="large" />
        </div>
      </div>
    </div>
}`,...h.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div {...stylex.props(styles.storyWrapper)}>
      <h4 {...stylex.props(styles.heading)}>With Status Indicators</h4>
      <div {...stylex.props(styles.row)}>
        <XDSAvatar src="https://i.pravatar.cc/150?img=20" name="Online User" size="large" status={<XDSAvatarStatusDot variant="success" label="Online" />} />
        <XDSAvatar src="https://i.pravatar.cc/150?img=21" name="Offline User" size="large" status={<XDSAvatarStatusDot variant="neutral" label="Offline" />} />
        <XDSAvatar src="https://i.pravatar.cc/150?img=22" name="Busy User" size="large" status={<XDSAvatarStatusDot variant="error" label="Busy" />} />
      </div>
    </div>
}`,...S.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Status Dot Across All Sizes',
  render: () => <div {...stylex.props(styles.storyWrapper)}>
      <h4 {...stylex.props(styles.heading)}>
        Status dot scales proportionally with avatar size
      </h4>

      <h4 {...stylex.props(styles.heading)}>Named Sizes</h4>
      <div {...stylex.props(styles.row)}>
        <XDSAvatar name="TY" size="tiny" status={<XDSAvatarStatusDot variant="success" />} />
        <XDSAvatar name="XS" size="xsmall" status={<XDSAvatarStatusDot variant="success" />} />
        <XDSAvatar name="SM" size="small" status={<XDSAvatarStatusDot variant="success" />} />
        <XDSAvatar name="MD" size="medium" status={<XDSAvatarStatusDot variant="success" />} />
        <XDSAvatar name="LG" size="large" status={<XDSAvatarStatusDot variant="success" />} />
      </div>

      <h4 {...stylex.props(styles.heading)}>Numeric Sizes with Images</h4>
      <div {...stylex.props(styles.row)}>
        <XDSAvatar src="https://i.pravatar.cc/150?img=30" name="U1" size={20} status={<XDSAvatarStatusDot variant="success" />} />
        <XDSAvatar src="https://i.pravatar.cc/150?img=31" name="U2" size={32} status={<XDSAvatarStatusDot variant="success" />} />
        <XDSAvatar src="https://i.pravatar.cc/150?img=32" name="U3" size={48} status={<XDSAvatarStatusDot variant="error" />} />
        <XDSAvatar src="https://i.pravatar.cc/150?img=33" name="U4" size={72} status={<XDSAvatarStatusDot variant="neutral" />} />
        <XDSAvatar src="https://i.pravatar.cc/150?img=34" name="U5" size={96} status={<XDSAvatarStatusDot variant="success" />} />
        <XDSAvatar src="https://i.pravatar.cc/150?img=35" name="U6" size={128} status={<XDSAvatarStatusDot variant="success" />} />
      </div>

      <h4 {...stylex.props(styles.heading)}>All Colors at Medium</h4>
      <div {...stylex.props(styles.row)}>
        <XDSAvatar src="https://i.pravatar.cc/150?img=40" name="Positive" size="medium" status={<XDSAvatarStatusDot variant="success" label="Online" />} />
        <XDSAvatar src="https://i.pravatar.cc/150?img=41" name="Neutral" size="medium" status={<XDSAvatarStatusDot variant="neutral" label="Offline" />} />
        <XDSAvatar src="https://i.pravatar.cc/150?img=42" name="Negative" size="medium" status={<XDSAvatarStatusDot variant="error" label="Busy" />} />
      </div>
    </div>
}`,...g.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <div {...stylex.props(styles.storyWrapper)}>
      <h4 {...stylex.props(styles.heading)}>Status with Different Sizes</h4>
      <div {...stylex.props(styles.row)}>
        <XDSAvatar name="AB" size="small" status={<XDSAvatarStatusDot />} />
        <XDSAvatar name="CD" size="medium" status={<XDSAvatarStatusDot />} />
        <XDSAvatar name="EF" size="large" status={<XDSAvatarStatusDot />} />
        <XDSAvatar name="GH" size={72} status={<XDSAvatarStatusDot />} />
      </div>
    </div>
}`,...z.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Status Dot with Icon',
  render: () => <div {...stylex.props(styles.storyWrapper)}>
      <h4 {...stylex.props(styles.heading)}>
        Icon inside status dot (hidden at tiny sizes where there isn't room)
      </h4>

      <h4 {...stylex.props(styles.heading)}>Named Sizes</h4>
      <div {...stylex.props(styles.row)}>
        <XDSAvatar name="TY" size="tiny" status={<XDSAvatarStatusDot variant="success" label="Verified" icon={<CheckIcon />} />} />
        <XDSAvatar name="XS" size="xsmall" status={<XDSAvatarStatusDot variant="success" label="Verified" icon={<CheckIcon />} />} />
        <XDSAvatar name="SM" size="small" status={<XDSAvatarStatusDot variant="success" label="Verified" icon={<CheckIcon />} />} />
        <XDSAvatar src="https://i.pravatar.cc/150?img=50" name="MD" size="medium" status={<XDSAvatarStatusDot variant="success" label="Verified" icon={<CheckIcon />} />} />
        <XDSAvatar src="https://i.pravatar.cc/150?img=51" name="LG" size="large" status={<XDSAvatarStatusDot variant="success" label="Verified" icon={<CheckIcon />} />} />
      </div>

      <h4 {...stylex.props(styles.heading)}>Numeric Sizes with Images</h4>
      <div {...stylex.props(styles.row)}>
        <XDSAvatar src="https://i.pravatar.cc/150?img=30" name="U1" size={20} status={<XDSAvatarStatusDot variant="success" label="Verified" icon={<CheckIcon />} />} />
        <XDSAvatar src="https://i.pravatar.cc/150?img=31" name="U2" size={32} status={<XDSAvatarStatusDot variant="success" label="Verified" icon={<CheckIcon />} />} />
        <XDSAvatar src="https://i.pravatar.cc/150?img=32" name="U3" size={48} status={<XDSAvatarStatusDot variant="success" label="Verified" icon={<CheckIcon />} />} />
        <XDSAvatar src="https://i.pravatar.cc/150?img=33" name="U4" size={72} status={<XDSAvatarStatusDot variant="success" label="Verified" icon={<CheckIcon />} />} />
        <XDSAvatar src="https://i.pravatar.cc/150?img=34" name="U5" size={96} status={<XDSAvatarStatusDot variant="success" label="Verified" icon={<CheckIcon />} />} />
        <XDSAvatar src="https://i.pravatar.cc/150?img=35" name="U6" size={128} status={<XDSAvatarStatusDot variant="success" label="Verified" icon={<CheckIcon />} />} />
      </div>

      <h4 {...stylex.props(styles.heading)}>All Variants with Icons</h4>
      <div {...stylex.props(styles.row)}>
        <XDSAvatar src="https://i.pravatar.cc/150?img=52" name="Positive" size="large" status={<XDSAvatarStatusDot variant="success" label="Verified" icon={<CheckIcon />} />} />
        <XDSAvatar src="https://i.pravatar.cc/150?img=53" name="Neutral" size="large" status={<XDSAvatarStatusDot variant="neutral" label="Pending" icon={<CheckIcon />} />} />
        <XDSAvatar src="https://i.pravatar.cc/150?img=54" name="Negative" size="large" status={<XDSAvatarStatusDot variant="error" label="Rejected" icon={<CheckIcon />} />} />
      </div>
    </div>
}`,...y.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <div {...stylex.props(styles.storyWrapper)}>
      <h4 {...stylex.props(styles.heading)}>Numeric Pixel Sizes</h4>
      <div {...stylex.props(styles.row)}>
        <XDSAvatar name="16" size={16} />
        <XDSAvatar name="24" size={24} />
        <XDSAvatar name="36" size={36} />
        <XDSAvatar name="48" size={48} />
        <XDSAvatar name="72" size={72} />
        <XDSAvatar name="96" size={96} />
        <XDSAvatar name="128" size={128} />
      </div>
    </div>
}`,...j.parameters?.docs?.source}}};const G=["Default","WithImage","AllSizes","WithImages","InitialsFallback","NoImageNoName","FallbackChain","WithStatus","StatusAcrossAllSizes","StatusWithSizes","StatusWithIcon","NumericSizes"];export{x as AllSizes,o as Default,h as FallbackChain,u as InitialsFallback,v as NoImageNoName,j as NumericSizes,g as StatusAcrossAllSizes,y as StatusWithIcon,z as StatusWithSizes,d as WithImage,p as WithImages,S as WithStatus,G as __namedExportsOrder,R as default};
