import{at as g,a6 as G,ad as e,ai as N,ar as O,aZ as T}from"./iframe-yRFQ_7VC.js";import{X as n}from"./XDSCard-CyDoBnn3.js";import{X as S}from"./XDSVStack-uMCoSZ_B.js";import"./preload-helper-Ct5FWWRu.js";import"./container.stylex-BI6SFdSl.js";import"./padding.stylex-BDg7w1Mn.js";import"./XDSStack-CFJ7xIVk.js";import"./stack.stylex-5XIQDawT.js";const q=g.createContext(null);q.displayName="CollapsibleGroupContext";function V(l){const{isCollapsible:p,value:t}=l,r=g.use(q),c=r!=null&&t!=null,a=p===!0?{}:p||null,m=a!=null,[h,i]=g.useState(()=>c?!0:a?.isOpen!==void 0?a.isOpen:a?.defaultIsOpen??!0);let d;return c&&t!=null?d=r.isOpen(t):a?.isOpen!==void 0?d=a.isOpen:d=h,{isEnabled:m,isOpen:d,toggle:()=>{c&&t!=null?r.toggle(t):a?.onOpenChange?a.onOpenChange(!d):i(y=>!y)}}}const I={root:{kzqmXN:"xdsh8yej3",$$css:!0}};function s({trigger:l,children:p,defaultIsOpen:t,isOpen:r,onOpenChange:c,value:a,ref:m,xstyle:h,className:i,style:d,...C}){const y=r!==void 0?{isOpen:r,onOpenChange:c}:{defaultIsOpen:t??!0,onOpenChange:c},{isOpen:o,toggle:u}=V({isCollapsible:y,value:a}),w=G("chevronDown");return e.jsxs("div",{ref:m,...N(T("collapsible"),O(I.root,h),i,d),...C,children:[e.jsxs("button",{type:"button",onClick:u,"aria-expanded":o,className:"xds9f619 xds78zum5 xds6s0dn4 xds1qughib xdsh8yej3 xds1ypdohk xds9ynric xds18juvz8 xds2mo6ok xds1tgivj0 xds1yc453h xdst970qd",children:[e.jsx("span",{className:"xds1b2iylo xdswgcxoh",children:l}),e.jsx("span",{...{0:{className:"xds3nfvp2 xds6s0dn4 xdsl56j7k xds2lah0s xds11xpdln xdsuedmi6 xdslr8y92 xdsv9yike xds7p49u4"},1:{className:"xds3nfvp2 xds6s0dn4 xdsl56j7k xds2lah0s xds11xpdln xdsuedmi6 xdslr8y92 xdsv9yike xds19jd1h0"}}[!!o<<0],children:w})]}),e.jsx("div",{...o?{className:"xdsfsso4q"}:{className:"xdsfsso4q xds1s85apg"},children:p})]})}s.displayName="XDSCollapsible";s.__docgenInfo={description:`A primitive that makes any content collapsible.

Renders a trigger area (always visible) with a chevron indicator,
and a content area that toggles visibility on click.
Handles its own state by default, or defers to XDSCollapsibleGroup
when a \`value\` prop is provided and a group is present.

Use inside XDSCard for elevated collapsible sections.
Wrap multiple instances in XDSCollapsibleGroup for accordion behavior.

@example
\`\`\`
<XDSCollapsible trigger="Details">
  <XDSText type="body">Collapsible content</XDSText>
</XDSCollapsible>
<XDSCard>
  <XDSCollapsible trigger="Settings">
    <SettingsForm />
  </XDSCollapsible>
</XDSCard>
<XDSCollapsibleGroup type="single" defaultValue="general">
  <XDSVStack gap={2}>
    <XDSCard>
      <XDSCollapsible trigger="General" value="general">
        <GeneralSettings />
      </XDSCollapsible>
    </XDSCard>
    <XDSCard>
      <XDSCollapsible trigger="Advanced" value="advanced">
        <AdvancedSettings />
      </XDSCollapsible>
    </XDSCard>
  </XDSVStack>
</XDSCollapsibleGroup>
\`\`\``,methods:[],displayName:"XDSCollapsible",props:{xstyle:{required:!1,tsType:{name:"StyleXStyles"},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:"Ref forwarded to the root element"},trigger:{required:!0,tsType:{name:"ReactNode"},description:`Content shown in the trigger area (always visible).
Rendered inside a button with aria-expanded and a chevron indicator.`},children:{required:!1,tsType:{name:"ReactNode"},description:"Content that collapses/expands when the trigger is clicked."},defaultIsOpen:{required:!1,tsType:{name:"boolean"},description:`Default open state for uncontrolled usage.
@default true`},isOpen:{required:!1,tsType:{name:"boolean"},description:"Controlled open state. When provided, the component is fully controlled."},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(isOpen: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isOpen"}],return:{name:"void"}}},description:"Callback when the open state changes."},value:{required:!1,tsType:{name:"string"},description:`Unique identifier for this collapsible within an XDSCollapsibleGroup.
Required when using inside a group for coordination.`},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for the collapsible element."}},composes:["Omit"]};function k(l){return l==null?[]:Array.isArray(l)?l:[l]}function x({type:l="single",defaultValue:p,value:t,onChange:r,children:c}){const a=t!==void 0,[m,h]=g.useState(()=>k(p)),i=a?k(t):m,d=g.useCallback(o=>i.includes(o),[i]),C=g.useCallback(o=>{let u;l==="single"?u=i.includes(o)?[]:[o]:u=i.includes(o)?i.filter(w=>w!==o):[...i,o],a||h(u),r&&r(l==="single"?u[0]??"":u)},[l,i,a,r]),y=g.useMemo(()=>({isOpen:d,toggle:C}),[d,C]);return e.jsx(q,{value:y,children:c})}x.displayName="XDSCollapsibleGroup";x.__docgenInfo={description:`Groups collapsible components with coordinated open/close behavior.
Renders no wrapper DOM.

In "single" mode (default), opening one item closes the others.
In "multiple" mode, items toggle independently.

@compositionHint Wrap XDSCollapsible instances to coordinate their open/close state.
Each XDSCollapsible needs a \`value\` prop to participate.

@example
\`\`\`
<XDSCollapsibleGroup type="single" defaultValue="faq1">
  <XDSVStack gap={2}>
    <XDSCard>
      <XDSCollapsible trigger="What is XDS?" value="faq1">
        XDS is a design system for building internal tools.
      </XDSCollapsible>
    </XDSCard>
    <XDSCard>
      <XDSCollapsible trigger="How do I start?" value="faq2">
        Install the package and import components.
      </XDSCollapsible>
    </XDSCard>
  </XDSVStack>
</XDSCollapsibleGroup>
\`\`\``,methods:[],displayName:"XDSCollapsibleGroup",props:{ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLElement>",elements:[{name:"HTMLElement"}]},description:""},type:{required:!1,tsType:{name:"union",raw:"'single' | 'multiple'",elements:[{name:"literal",value:"'single'"},{name:"literal",value:"'multiple'"}]},description:`Whether only one item can be open at a time, or multiple.
@default "single"`,defaultValue:{value:"'single'",computed:!1}},defaultValue:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:`Default open item(s) — uncontrolled mode.
Use a string for single mode, string[] for multiple mode.`},value:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:`Controlled open item(s).
When provided, the group is fully controlled externally.`},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | string[]) => void",signature:{arguments:[{type:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},name:"value"}],return:{name:"void"}}},description:"Callback when the open item(s) change."},children:{required:!0,tsType:{name:"ReactNode"},description:`Children — any components that support isCollapsible + value.

@compositionHint Wrap XDSCollapsible instances (typically inside XDSCard).
Each XDSCollapsible needs a \`value\` prop to participate in the group.

@example
\`\`\`
<XDSCollapsibleGroup type="single" defaultValue="general">
  <XDSVStack gap={2}>
    <XDSCard>
      <XDSCollapsible trigger="General" value="general">
        <p>General settings content</p>
      </XDSCollapsible>
    </XDSCard>
    <XDSCard>
      <XDSCollapsible trigger="Advanced" value="advanced">
        <p>Advanced settings content</p>
      </XDSCollapsible>
    </XDSCard>
  </XDSVStack>
</XDSCollapsibleGroup>
\`\`\``}},composes:["Omit"]};const Y={title:"Core/Collapsible",component:x,tags:["autodocs"],decorators:[l=>e.jsx("div",{className:"x1eiddq6 x1gt495",children:e.jsx(l,{})})]},D={name:"Single Mode (default)",render:()=>e.jsx(x,{type:"single",defaultValue:"general",children:e.jsxs(S,{gap:2,children:[e.jsx(n,{children:e.jsx(s,{trigger:"General Settings",value:"general",children:e.jsx("p",{className:"x9ynric x1tgivj0 x1ghz6dp",children:"Configure your general preferences including language, timezone, and display options."})})}),e.jsx(n,{children:e.jsx(s,{trigger:"Privacy Settings",value:"privacy",children:e.jsx("p",{className:"x9ynric x1tgivj0 x1ghz6dp",children:"Manage who can see your profile, activity, and personal information."})})}),e.jsx(n,{children:e.jsx(s,{trigger:"Notification Settings",value:"notifications",children:e.jsx("p",{className:"x9ynric x1tgivj0 x1ghz6dp",children:"Choose which notifications you receive and how they are delivered."})})})]})})},X={name:"Multiple Mode",render:()=>e.jsx(x,{type:"multiple",defaultValue:["faq1","faq3"],children:e.jsxs(S,{gap:2,children:[e.jsx(n,{children:e.jsx(s,{trigger:"What is XDS?",value:"faq1",children:e.jsx("p",{className:"x9ynric x1tgivj0 x1ghz6dp",children:"XDS is a design system for building internal tools and products."})})}),e.jsx(n,{children:e.jsx(s,{trigger:"How do I install it?",value:"faq2",children:e.jsxs("p",{className:"x9ynric x1tgivj0 x1ghz6dp",children:["Run ",e.jsx("code",{children:"npm install @xds/core"})," to get started."]})})}),e.jsx(n,{children:e.jsx(s,{trigger:"Is it open source?",value:"faq3",children:e.jsx("p",{className:"x9ynric x1tgivj0 x1ghz6dp",children:"Yes! XDS is open source and available on GitHub."})})})]})})},f={name:"Controlled",render:function(){const[p,t]=g.useState("section1");return e.jsxs("div",{children:[e.jsxs("p",{className:"xv1l7n4 xif65rj x9ynric x1ghz6dp",children:["Currently open: ",e.jsx("strong",{children:String(p)||"(none)"})]}),e.jsx(x,{type:"single",value:p,onChange:t,children:e.jsxs(S,{gap:2,children:[e.jsx(n,{children:e.jsx(s,{trigger:"Section 1",value:"section1",children:e.jsx("p",{className:"x9ynric x1tgivj0 x1ghz6dp",children:"Content for section 1."})})}),e.jsx(n,{children:e.jsx(s,{trigger:"Section 2",value:"section2",children:e.jsx("p",{className:"x9ynric x1tgivj0 x1ghz6dp",children:"Content for section 2."})})}),e.jsx(n,{children:e.jsx(s,{trigger:"Section 3",value:"section3",children:e.jsx("p",{className:"x9ynric x1tgivj0 x1ghz6dp",children:"Content for section 3."})})})]})})]})}},b={name:"Standalone Collapsible",render:()=>e.jsxs(S,{gap:2,children:[e.jsx(n,{children:e.jsx(s,{trigger:"Starts open (default)",children:e.jsx("p",{className:"x9ynric x1tgivj0 x1ghz6dp",children:"This collapsible manages its own state. Click the trigger to toggle."})})}),e.jsx(n,{children:e.jsx(s,{trigger:"Starts collapsed",defaultIsOpen:!1,children:e.jsx("p",{className:"x9ynric x1tgivj0 x1ghz6dp",children:"This collapsible starts collapsed. Click to reveal."})})})]})},v={name:"Without Card (standalone)",render:()=>e.jsxs(S,{gap:2,children:[e.jsx(s,{trigger:"Show more details",children:e.jsx("p",{className:"x9ynric x1tgivj0 x1ghz6dp",children:"XDSCollapsible works anywhere; it doesn't require a card wrapper."})}),e.jsx(s,{trigger:"Another section",defaultIsOpen:!1,children:e.jsx("p",{className:"x9ynric x1tgivj0 x1ghz6dp",children:"This section starts collapsed."})})]})},j={name:"FAQ Page",render:()=>e.jsx(x,{type:"single",children:e.jsxs(S,{gap:2,children:[e.jsx(n,{children:e.jsx(s,{trigger:"How do I reset my password?",value:"q1",children:e.jsx("p",{className:"x9ynric x1tgivj0 x1ghz6dp",children:"Go to Settings → Security → Change Password. You'll receive a confirmation email."})})}),e.jsx(n,{children:e.jsx(s,{trigger:"Can I change my username?",value:"q2",children:e.jsx("p",{className:"x9ynric x1tgivj0 x1ghz6dp",children:"Usernames can be changed once every 30 days from your profile settings."})})}),e.jsx(n,{children:e.jsx(s,{trigger:"How do I delete my account?",value:"q3",children:e.jsx("p",{className:"x9ynric x1tgivj0 x1ghz6dp",children:"Account deletion is permanent. Go to Settings → Account → Delete Account. Your data will be removed within 30 days."})})}),e.jsx(n,{children:e.jsx(s,{trigger:"What payment methods are accepted?",value:"q4",children:e.jsx("p",{className:"x9ynric x1tgivj0 x1ghz6dp",children:"We accept Visa, Mastercard, American Express, and PayPal."})})})]})})};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Single Mode (default)',
  render: () => <XDSCollapsibleGroup type="single" defaultValue="general">
      <XDSVStack gap={2}>
        <XDSCard>
          <XDSCollapsible trigger="General Settings" value="general">
            <p {...stylex.props(styles.text)}>
              Configure your general preferences including language, timezone,
              and display options.
            </p>
          </XDSCollapsible>
        </XDSCard>
        <XDSCard>
          <XDSCollapsible trigger="Privacy Settings" value="privacy">
            <p {...stylex.props(styles.text)}>
              Manage who can see your profile, activity, and personal
              information.
            </p>
          </XDSCollapsible>
        </XDSCard>
        <XDSCard>
          <XDSCollapsible trigger="Notification Settings" value="notifications">
            <p {...stylex.props(styles.text)}>
              Choose which notifications you receive and how they are delivered.
            </p>
          </XDSCollapsible>
        </XDSCard>
      </XDSVStack>
    </XDSCollapsibleGroup>
}`,...D.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: 'Multiple Mode',
  render: () => <XDSCollapsibleGroup type="multiple" defaultValue={['faq1', 'faq3']}>
      <XDSVStack gap={2}>
        <XDSCard>
          <XDSCollapsible trigger="What is XDS?" value="faq1">
            <p {...stylex.props(styles.text)}>
              XDS is a design system for building internal tools and products.
            </p>
          </XDSCollapsible>
        </XDSCard>
        <XDSCard>
          <XDSCollapsible trigger="How do I install it?" value="faq2">
            <p {...stylex.props(styles.text)}>
              Run <code>npm install @xds/core</code> to get started.
            </p>
          </XDSCollapsible>
        </XDSCard>
        <XDSCard>
          <XDSCollapsible trigger="Is it open source?" value="faq3">
            <p {...stylex.props(styles.text)}>
              Yes! XDS is open source and available on GitHub.
            </p>
          </XDSCollapsible>
        </XDSCard>
      </XDSVStack>
    </XDSCollapsibleGroup>
}`,...X.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Controlled',
  render: function ControlledStory() {
    const [open, setOpen] = useState<string | string[]>('section1');
    return <div>
        <p {...stylex.props(styles.textSecondary)}>
          Currently open: <strong>{String(open) || '(none)'}</strong>
        </p>
        <XDSCollapsibleGroup type="single" value={open} onChange={setOpen}>
          <XDSVStack gap={2}>
            <XDSCard>
              <XDSCollapsible trigger="Section 1" value="section1">
                <p {...stylex.props(styles.text)}>Content for section 1.</p>
              </XDSCollapsible>
            </XDSCard>
            <XDSCard>
              <XDSCollapsible trigger="Section 2" value="section2">
                <p {...stylex.props(styles.text)}>Content for section 2.</p>
              </XDSCollapsible>
            </XDSCard>
            <XDSCard>
              <XDSCollapsible trigger="Section 3" value="section3">
                <p {...stylex.props(styles.text)}>Content for section 3.</p>
              </XDSCollapsible>
            </XDSCard>
          </XDSVStack>
        </XDSCollapsibleGroup>
      </div>;
  }
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Standalone Collapsible',
  render: () => <XDSVStack gap={2}>
      <XDSCard>
        <XDSCollapsible trigger="Starts open (default)">
          <p {...stylex.props(styles.text)}>
            This collapsible manages its own state. Click the trigger to toggle.
          </p>
        </XDSCollapsible>
      </XDSCard>
      <XDSCard>
        <XDSCollapsible trigger="Starts collapsed" defaultIsOpen={false}>
          <p {...stylex.props(styles.text)}>
            This collapsible starts collapsed. Click to reveal.
          </p>
        </XDSCollapsible>
      </XDSCard>
    </XDSVStack>
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Without Card (standalone)',
  render: () => <XDSVStack gap={2}>
      <XDSCollapsible trigger="Show more details">
        <p {...stylex.props(styles.text)}>
          
          XDSCollapsible works anywhere; it doesn't require a card wrapper.
        </p>
      </XDSCollapsible>
      <XDSCollapsible trigger="Another section" defaultIsOpen={false}>
        <p {...stylex.props(styles.text)}>This section starts collapsed.</p>
      </XDSCollapsible>
    </XDSVStack>
}`,...v.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'FAQ Page',
  render: () => <XDSCollapsibleGroup type="single">
      <XDSVStack gap={2}>
        <XDSCard>
          <XDSCollapsible trigger="How do I reset my password?" value="q1">
            <p {...stylex.props(styles.text)}>
              Go to Settings → Security → Change Password. You'll receive a
              confirmation email.
            </p>
          </XDSCollapsible>
        </XDSCard>
        <XDSCard>
          <XDSCollapsible trigger="Can I change my username?" value="q2">
            <p {...stylex.props(styles.text)}>
              Usernames can be changed once every 30 days from your profile
              settings.
            </p>
          </XDSCollapsible>
        </XDSCard>
        <XDSCard>
          <XDSCollapsible trigger="How do I delete my account?" value="q3">
            <p {...stylex.props(styles.text)}>
              Account deletion is permanent. Go to Settings → Account → Delete
              Account. Your data will be removed within 30 days.
            </p>
          </XDSCollapsible>
        </XDSCard>
        <XDSCard>
          <XDSCollapsible trigger="What payment methods are accepted?" value="q4">
            <p {...stylex.props(styles.text)}>
              We accept Visa, Mastercard, American Express, and PayPal.
            </p>
          </XDSCollapsible>
        </XDSCard>
      </XDSVStack>
    </XDSCollapsibleGroup>
}`,...j.parameters?.docs?.source}}};const _=["SingleMode","MultipleMode","Controlled","StandaloneCollapsible","WithoutCard","FAQ"];export{f as Controlled,j as FAQ,X as MultipleMode,D as SingleMode,b as StandaloneCollapsible,v as WithoutCard,_ as __namedExportsOrder,Y as default};
