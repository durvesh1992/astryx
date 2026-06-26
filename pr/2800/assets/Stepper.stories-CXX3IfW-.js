import{at as r,ad as e,ai as y,ar as p,aZ as L,r as x,m as l,X as h}from"./iframe-yRFQ_7VC.js";import{X as g}from"./XDSTextInput-C1ju8zVt.js";import"./preload-helper-Ct5FWWRu.js";import"./XDSField-COi97ivg.js";import"./XDSFieldStatus-BgnciRVy.js";import"./inputStyles.stylex-BIqXE6lP.js";import"./groupStyles-BZhxclV-.js";import"./useInputContainer-DjJ5nP5w.js";import"./useClickableContainer-B3IEmxS8.js";const Q=r.createContext(null);Q.displayName="XDSStepperContext";function ye(){const s=r.use(Q);if(s==null)throw new Error("useXDSStepperContext must be used within XDSStepper. Wrap your XDSStep in <XDSStepper>.");return s}const Y={root:{k1xSpc:"xds78zum5",kzqmXN:"xdsh8yej3",kH6xsr:"xds3ct3a4",kogj98:"xds1ghz6dp",kmVPX3:"xds1717udv",$$css:!0},horizontal:{kXwgrk:"xds1q0g3np",kGNEyG:"xds1cy8zhl",kOIVth:"xds195vfkc",$$css:!0},vertical:{kXwgrk:"xdsdt5ytf",kOIVth:"xds195vfkc",$$css:!0}};function a({activeStep:s,children:i,orientation:u="horizontal",onStepClick:m,label:O="Progress",density:o="balanced",xstyle:S,className:V,style:H,ref:b,...G}){const k=r.useMemo(()=>({activeStep:s,orientation:u,isNonLinear:m!=null,onStepClick:m??null,density:o}),[s,u,m,o]);return e.jsx(Q,{value:k,children:e.jsx("ol",{ref:b,"aria-label":O,...G,...y(L("stepper",{orientation:u}),p(Y.root,u==="horizontal"?Y.horizontal:Y.vertical,S),V,H),children:i})})}a.displayName="XDSStepper";a.__docgenInfo={description:`A stepper component for multi-step workflows. Displays numbered steps
with visual indicators for completed, active, and upcoming states.

Each XDSStep child must provide a \`step\` prop (zero-based index) so it
can derive its state from the parent's activeStep. CSS :last-child
handles connector hiding — no child introspection needed.

Rendered as an ordered list (\`<ol>\`/\`<li>\`) rather than a \`nav\`
landmark: a stepper communicates *progress through a sequence*, not a
set of site navigation links. The active step is marked with
\`aria-current="step"\` (handled per-step) and the list carries an
accessible \`label\`. This follows the WAI-ARIA pattern for steppers /
progress sequences and avoids polluting the page's landmark map.

@example
\`\`\`
<XDSStepper activeStep={1}>
  <XDSStep step={0} label="Account" />
  <XDSStep step={1} label="Profile" />
  <XDSStep step={2} label="Review" />
</XDSStepper>
\`\`\``,methods:[],displayName:"XDSStepper",props:{xstyle:{required:!1,tsType:{name:"StyleXStyles"},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLOListElement>",elements:[{name:"HTMLOListElement"}]},description:"Ref forwarded to the root element"},activeStep:{required:!0,tsType:{name:"number"},description:"Zero-based index of the active step."},children:{required:!0,tsType:{name:"ReactNode"},description:"XDSStep elements to render."},orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:`Layout direction of the stepper.
@default 'horizontal'`,defaultValue:{value:"'horizontal'",computed:!1}},onStepClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:`Called when a step indicator is clicked. Enables non-linear navigation.
When provided, completed and current steps become clickable.`},label:{required:!1,tsType:{name:"string"},description:`Accessible label describing the set of steps.
@default 'Progress'`,defaultValue:{value:"'Progress'",computed:!1}},density:{required:!1,tsType:{name:"union",raw:"'compact' | 'balanced' | 'spacious'",elements:[{name:"literal",value:"'compact'"},{name:"literal",value:"'balanced'"},{name:"literal",value:"'spacious'"}]},description:`Controls density (padding) of all steps.
@default 'balanced'`,defaultValue:{value:"'balanced'",computed:!1}}},composes:["Omit"]};function ke(){return e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:[e.jsx("circle",{cx:"8",cy:"8",r:"8",fill:"currentColor"}),e.jsx("path",{d:"M5 8.5l2 2 4-4",stroke:"white",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})]})}function je(){return e.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:[e.jsx("circle",{cx:"8",cy:"8",r:"7",stroke:"currentColor",strokeWidth:"2"}),e.jsx("circle",{cx:"8",cy:"8",r:"4",fill:"currentColor"})]})}const n={verticalRoot:{k1xSpc:"xds78zum5",kXwgrk:"xds1q0g3np",kGNEyG:"xds1qjc9v5",kVAEAm:"xds1n2onr6",kOIVth:"xds1lsbc85",$$css:!0},verticalBar:{kzqmXN:"xds51ohtg",kaIpWk:"xdsjspbzw",kmuXW:"xds2lah0s",kSGwAc:"xdskh2ocl",$$css:!0},barCompleted:{kWkggS:"xds1ewilqj",$$css:!0},barIncomplete:{kWkggS:"xds1m4xfpy",$$css:!0},barAccent:{kWkggS:"xds1ewilqj",$$css:!0},barSuccess:{kWkggS:"xdsdsz4j9",$$css:!0},barWarning:{kWkggS:"xds1q8g9m5",$$css:!0},barError:{kWkggS:"xds1pjz0fi",$$css:!0},horizontalStep:{k1xSpc:"xds78zum5",kXwgrk:"xdsdt5ytf",kGNEyG:"xds1cy8zhl",kUk6DE:"xds98rzlu",$$css:!0},horizontalBar:{kzqmXN:"xdsh8yej3",kZKoxP:"xdsqu0tyb",kaIpWk:"xdsjspbzw",kmuXW:"xds2lah0s",k1K539:"xdslstkdb",$$css:!0},icon:{k1xSpc:"xds78zum5",kGNEyG:"xds6s0dn4",kjj79g:"xdsl56j7k",kzqmXN:"xds12xnipv",kZKoxP:"xds6b6gus",kmuXW:"xds2lah0s",$$css:!0},iconCompleted:{kMwMTN:"xdsqwr325",$$css:!0},iconInProgress:{kMwMTN:"xdsqwr325",$$css:!0},iconNotStarted:{kMwMTN:"xdsv9yike",$$css:!0},iconDisabled:{kMwMTN:"xdsqa6c3m",kSiTet:"xdsbyyjgo",$$css:!0},iconAccent:{kMwMTN:"xdsqwr325",$$css:!0},iconSuccess:{kMwMTN:"xdstjic6",$$css:!0},iconWarning:{kMwMTN:"xdss3pv69",$$css:!0},iconError:{kMwMTN:"xdsjt36v0",$$css:!0},numberBadge:{k1xSpc:"xdsrvj5dj",kgQiWS:"xds1ku5rj1",kzqmXN:"xdsfyiiit",kZKoxP:"xds1grt7ep",kaIpWk:"xdsjspbzw",kGuDYH:"xds1k6wstc",kGO01o:"xds1j85h84",k63SB2:"xds2mo6ok",kLWn49:"xdso5v014",kmuXW:"xds2lah0s",k9WMMc:"xds2b8uid",$$css:!0},numberCompleted:{kWkggS:"xds1ewilqj",kMwMTN:"xdsrkvqaz",$$css:!0},numberInProgress:{kWkggS:"xds1ewilqj",kMwMTN:"xdsrkvqaz",$$css:!0},numberNotStarted:{kWkggS:"xdswmxj5m",kMwMTN:"xdsv1l7n4",$$css:!0},numberDisabled:{kWkggS:"xdswmxj5m",kMwMTN:"xdsnbbluu",kSiTet:"xdsbyyjgo",$$css:!0},numberAccent:{kWkggS:"xds1ewilqj",kMwMTN:"xds17wrial",$$css:!0},numberSuccess:{kWkggS:"xdsdsz4j9",kMwMTN:"xdsri61p4",$$css:!0},numberWarning:{kWkggS:"xds1q8g9m5",kMwMTN:"xdsrebv38",$$css:!0},numberError:{kWkggS:"xds1pjz0fi",kMwMTN:"xds1m024r3",$$css:!0},label:{kGuDYH:"xdsjm74w1",kLWn49:"xdsw6l6zx",k63SB2:"xds1sodnla",kMwMTN:"xds1tgivj0",$$css:!0},labelInProgress:{k63SB2:"xds2mo6ok",$$css:!0},labelNotStarted:{kMwMTN:"xdsv1l7n4",$$css:!0},labelDisabled:{kMwMTN:"xdsnbbluu",$$css:!0},descriptionRow:{kZCmMZ:"xds18gyask",$$css:!0},descriptionRowWithIndicator:{kZCmMZ:"xds31w388",$$css:!0},descriptionRowWithNumber:{kZCmMZ:"xdschaq28",$$css:!0},stepContent:{kLKAdn:"xds1xye8es",$$css:!0},stepContentWithIndicator:{kZCmMZ:"xds31w388",$$css:!0},stepContentWithNumber:{kZCmMZ:"xdschaq28",$$css:!0}};function t({step:s,label:i,description:u,children:m,icon:O,status:o,isDisabled:S=!1,isOptional:V=!1,endContent:H,indicator:b,density:G,xstyle:k,className:ee,style:te,ref:se,"data-testid":ie,...ne}){const ue=ye(),{activeStep:ae,orientation:me,onStepClick:Z,density:Se}=ue,d=G??Se,re=b!=null&&typeof b!="string",v=re?"auto":b??"auto",c=s===ae?"in-progress":s<ae?"completed":"not-started",be=me==="vertical",U=c==="in-progress",_=!S&&Z!=null,oe=()=>{_&&Z&&Z(s)},de=c==="completed"||c==="in-progress",ce=o==="accent"?n.barAccent:o==="success"?n.barSuccess:o==="warning"?n.barWarning:o==="error"?n.barError:void 0;let F=null;const j=re?b:O??null;if(v!=="none")if(j==null&&(v==="number"||v==="auto"&&c==="not-started")){const J=S?n.numberDisabled:o==="accent"?n.numberAccent:o==="success"?n.numberSuccess:o==="warning"?n.numberWarning:o==="error"?n.numberError:c==="completed"?n.numberCompleted:c==="in-progress"?n.numberInProgress:n.numberNotStarted;F=e.jsx("div",{"aria-hidden":"true",...p(n.numberBadge,J),children:s+1})}else{const J=j??(c==="completed"?e.jsx(ke,{}):e.jsx(je,{})),he=S?n.iconDisabled:o==="accent"?n.iconAccent:o==="success"?n.iconSuccess:o==="warning"?n.iconWarning:o==="error"?n.iconError:c==="completed"?n.iconCompleted:c==="in-progress"?n.iconInProgress:n.iconNotStarted;F=e.jsx("div",{"aria-hidden":"true",...p(n.icon,he),children:J})}const K=v!=="none",le=K&&j==null&&(v==="number"||v==="auto"&&c==="not-started"),ve=S?n.labelDisabled:c==="not-started"?n.labelNotStarted:U?n.labelInProgress:void 0,f=e.jsxs("div",{className:"xds78zum5 xds1q0g3np xds6s0dn4 xds1txdalj",children:[F,e.jsx("span",{...p(n.label,ve),children:i}),V&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"xdsjm74w1 xdsv1l7n4",children:"•"}),e.jsx("span",{className:"xdsjm74w1 xdsv1l7n4",children:"Optional"})]}),H]}),D=u!=null?e.jsx("div",{...p(K?le?n.descriptionRowWithNumber:n.descriptionRowWithIndicator:n.descriptionRow),children:e.jsx("span",{className:"xds141an7d xds1ltkj2j xdsv1l7n4",children:u})}):null,pe=m!=null?e.jsx("div",{...p(n.stepContent,K&&(le?n.stepContentWithNumber:n.stepContentWithIndicator)),children:m}):null,xe=L("step",{progress:c,status:o??void 0});return be?e.jsxs("li",{ref:se,...y(xe,p(n.verticalRoot,k),ee,te),"aria-current":U?"step":void 0,"data-testid":ie,...ne,children:[e.jsx("div",{...y(L("step-bar"),p(n.verticalBar,ce??(de?n.barCompleted:n.barIncomplete))),"aria-hidden":"true"}),e.jsxs("div",{className:"xds78zum5 xdsdt5ytf xds98rzlu",children:[_?e.jsxs("button",{type:"button",onClick:oe,"aria-label":`Go to step ${s+1}: ${i}`,...{0:{className:"xds1yc453h xds1qjc9v5 xds78zum5 xdsdt5ytf xdsh8yej3 xds1ypdohk xdsh6dtrn xds15406qy xdskvfbh3 xdslr8y92 xdsjbqb8w xdse9uy6x xdsyxi2l3 xds1a2a7pz xds17nn4n9 xds1wfwxd8 xds7s97pk"},4:{className:"xds1yc453h xds1qjc9v5 xds78zum5 xdsdt5ytf xdsh8yej3 xds1ypdohk xdsh6dtrn xds15406qy xdskvfbh3 xdslr8y92 xdsjbqb8w xdse9uy6x xdsyxi2l3 xds1a2a7pz xds17nn4n9 xds1wfwxd8 xds7s97pk xdsu0wf1k xdsf314gf"},2:{className:"xds1yc453h xds1qjc9v5 xds78zum5 xdsdt5ytf xdsh8yej3 xds1ypdohk xdsh6dtrn xds15406qy xdskvfbh3 xdslr8y92 xdsjbqb8w xdse9uy6x xdsyxi2l3 xds1a2a7pz xds17nn4n9 xds1wfwxd8 xds7s97pk xdsce4md1 xdsf314gf"},6:{className:"xds1yc453h xds1qjc9v5 xds78zum5 xdsdt5ytf xdsh8yej3 xds1ypdohk xdsh6dtrn xds15406qy xdskvfbh3 xdslr8y92 xdsjbqb8w xdse9uy6x xdsyxi2l3 xds1a2a7pz xds17nn4n9 xds1wfwxd8 xds7s97pk xdsce4md1 xdsf314gf"},1:{className:"xds1yc453h xds1qjc9v5 xds78zum5 xdsdt5ytf xdsh8yej3 xds1ypdohk xdsh6dtrn xds15406qy xdskvfbh3 xdslr8y92 xdsjbqb8w xdse9uy6x xdsyxi2l3 xds1a2a7pz xds17nn4n9 xds1wfwxd8 xds7s97pk xds8o8v82 xdsrrkdod"},5:{className:"xds1yc453h xds1qjc9v5 xds78zum5 xdsdt5ytf xdsh8yej3 xds1ypdohk xdsh6dtrn xds15406qy xdskvfbh3 xdslr8y92 xdsjbqb8w xdse9uy6x xdsyxi2l3 xds1a2a7pz xds17nn4n9 xds1wfwxd8 xds7s97pk xds8o8v82 xdsrrkdod"},3:{className:"xds1yc453h xds1qjc9v5 xds78zum5 xdsdt5ytf xdsh8yej3 xds1ypdohk xdsh6dtrn xds15406qy xdskvfbh3 xdslr8y92 xdsjbqb8w xdse9uy6x xdsyxi2l3 xds1a2a7pz xds17nn4n9 xds1wfwxd8 xds7s97pk xds8o8v82 xdsrrkdod"},7:{className:"xds1yc453h xds1qjc9v5 xds78zum5 xdsdt5ytf xdsh8yej3 xds1ypdohk xdsh6dtrn xds15406qy xdskvfbh3 xdslr8y92 xdsjbqb8w xdse9uy6x xdsyxi2l3 xds1a2a7pz xds17nn4n9 xds1wfwxd8 xds7s97pk xds8o8v82 xdsrrkdod"}}[(d==="compact")<<2|(d==="balanced")<<1|(d==="spacious")<<0],children:[f,D]}):e.jsxs("div",{...{0:{},4:{className:"xdsu0wf1k xdsf314gf"},2:{className:"xdsce4md1 xdsf314gf"},6:{className:"xdsce4md1 xdsf314gf"},1:{className:"xds8o8v82 xdsrrkdod"},5:{className:"xds8o8v82 xdsrrkdod"},3:{className:"xds8o8v82 xdsrrkdod"},7:{className:"xds8o8v82 xdsrrkdod"}}[(d==="compact")<<2|(d==="balanced")<<1|(d==="spacious")<<0],children:[f,D]}),pe]})]}):e.jsxs("li",{ref:se,...y(xe,p(n.horizontalStep,k),ee,te),"aria-current":U?"step":void 0,"data-testid":ie,...ne,children:[e.jsx("div",{...y(L("step-bar"),p(n.horizontalBar,ce??(de?n.barCompleted:n.barIncomplete))),"aria-hidden":"true"}),_?e.jsxs("button",{type:"button",onClick:oe,"aria-label":`Go to step ${s+1}: ${i}`,...{0:{className:"xds1yc453h xds1qjc9v5 xds78zum5 xdsdt5ytf xdsh8yej3 xds1ypdohk xdsh6dtrn xds15406qy xdskvfbh3 xdslr8y92 xdsjbqb8w xdse9uy6x xdsyxi2l3 xds1a2a7pz xds17nn4n9 xds1wfwxd8 xds7s97pk"},4:{className:"xds1yc453h xds1qjc9v5 xds78zum5 xdsdt5ytf xdsh8yej3 xds1ypdohk xdsh6dtrn xds15406qy xdskvfbh3 xdslr8y92 xdsjbqb8w xdse9uy6x xdsyxi2l3 xds1a2a7pz xds17nn4n9 xds1wfwxd8 xds7s97pk xdsu0wf1k xdsf314gf"},2:{className:"xds1yc453h xds1qjc9v5 xds78zum5 xdsdt5ytf xdsh8yej3 xds1ypdohk xdsh6dtrn xds15406qy xdskvfbh3 xdslr8y92 xdsjbqb8w xdse9uy6x xdsyxi2l3 xds1a2a7pz xds17nn4n9 xds1wfwxd8 xds7s97pk xdsce4md1 xdsf314gf"},6:{className:"xds1yc453h xds1qjc9v5 xds78zum5 xdsdt5ytf xdsh8yej3 xds1ypdohk xdsh6dtrn xds15406qy xdskvfbh3 xdslr8y92 xdsjbqb8w xdse9uy6x xdsyxi2l3 xds1a2a7pz xds17nn4n9 xds1wfwxd8 xds7s97pk xdsce4md1 xdsf314gf"},1:{className:"xds1yc453h xds1qjc9v5 xds78zum5 xdsdt5ytf xdsh8yej3 xds1ypdohk xdsh6dtrn xds15406qy xdskvfbh3 xdslr8y92 xdsjbqb8w xdse9uy6x xdsyxi2l3 xds1a2a7pz xds17nn4n9 xds1wfwxd8 xds7s97pk xds8o8v82 xdsrrkdod"},5:{className:"xds1yc453h xds1qjc9v5 xds78zum5 xdsdt5ytf xdsh8yej3 xds1ypdohk xdsh6dtrn xds15406qy xdskvfbh3 xdslr8y92 xdsjbqb8w xdse9uy6x xdsyxi2l3 xds1a2a7pz xds17nn4n9 xds1wfwxd8 xds7s97pk xds8o8v82 xdsrrkdod"},3:{className:"xds1yc453h xds1qjc9v5 xds78zum5 xdsdt5ytf xdsh8yej3 xds1ypdohk xdsh6dtrn xds15406qy xdskvfbh3 xdslr8y92 xdsjbqb8w xdse9uy6x xdsyxi2l3 xds1a2a7pz xds17nn4n9 xds1wfwxd8 xds7s97pk xds8o8v82 xdsrrkdod"},7:{className:"xds1yc453h xds1qjc9v5 xds78zum5 xdsdt5ytf xdsh8yej3 xds1ypdohk xdsh6dtrn xds15406qy xdskvfbh3 xdslr8y92 xdsjbqb8w xdse9uy6x xdsyxi2l3 xds1a2a7pz xds17nn4n9 xds1wfwxd8 xds7s97pk xds8o8v82 xdsrrkdod"}}[(d==="compact")<<2|(d==="balanced")<<1|(d==="spacious")<<0],children:[f,D]}):e.jsxs("div",{...{0:{},4:{className:"xdsu0wf1k xdsf314gf"},2:{className:"xdsce4md1 xdsf314gf"},6:{className:"xdsce4md1 xdsf314gf"},1:{className:"xds8o8v82 xdsrrkdod"},5:{className:"xds8o8v82 xdsrrkdod"},3:{className:"xds8o8v82 xdsrrkdod"},7:{className:"xds8o8v82 xdsrrkdod"}}[(d==="compact")<<2|(d==="balanced")<<1|(d==="spacious")<<0],children:[f,D]}),pe]})}t.displayName="XDSStep";t.__docgenInfo={description:'An individual step within an XDSStepper. Renders a 4px progress-bar segment,\nan indicator (numbered badge, check, or any custom icon), a label with\noptional description, and an optional content slot.\n\nProgress (completed / active / not-started) is derived from the parent\'s\n`activeStep` and this step\'s `step` prop. The optional `status` prop layers a\nsemantic color (`accent` / `success` / `warning` / `error`) on top — color\nonly; it does not change layout or iconography.\n\n@example\n```\n<XDSStep step={0} label="Account details" description="Enter your email" />\n```\n\n@example\n```\n// Generic icon + semantic color\n<XDSStep step={1} label="Payment" status="error" icon={<XDSIcon icon="warning" />} />\n```',methods:[],displayName:"XDSStep",props:{xstyle:{required:!1,tsType:{name:"StyleXStyles"},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLLIElement>",elements:[{name:"HTMLLIElement"}]},description:"Ref forwarded to the root element"},step:{required:!0,tsType:{name:"number"},description:"Zero-based index of this step. Used to derive progress (completed /\nactive / not-started) relative to the parent's `activeStep`."},label:{required:!0,tsType:{name:"string"},description:"Step label text."},description:{required:!1,tsType:{name:"string"},description:"Optional description shown below the label."},children:{required:!1,tsType:{name:"ReactNode"},description:`Content rendered below the label and description. Useful in vertical
steppers to show form fields or detailed content for each step.`},icon:{required:!1,tsType:{name:"ReactNode"},description:"Custom icon rendered inside the indicator. Accepts any ReactNode (for\nexample an `<XDSIcon />`). Equivalent to passing the node directly to\n`indicator`; takes precedence over the built-in number/check."},status:{required:!1,tsType:{name:"union",raw:"'accent' | 'success' | 'warning' | 'error'",elements:[{name:"literal",value:"'accent'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:"Semantic color for the step. Controls **color only** and maps to the\nglobal XDS semantic tokens (`accent`, `success`, `warning`, `error`).\nLeave unset to use the progress-derived default coloring."},isDisabled:{required:!1,tsType:{name:"boolean"},description:`Disable interaction for this step.
@default false`,defaultValue:{value:"false",computed:!1}},isOptional:{required:!1,tsType:{name:"boolean"},description:`Marks the step as optional, appending an "Optional" affordance after the
label.
@default false`,defaultValue:{value:"false",computed:!1}},endContent:{required:!1,tsType:{name:"ReactNode"},description:`Trailing content rendered at the end of the label row (e.g. a timestamp
or status chip).`},indicator:{required:!1,tsType:{name:"union",raw:"XDSStepIndicatorPreset | ReactNode",elements:[{name:"union",raw:"'auto' | 'number' | 'none'",elements:[{name:"literal",value:"'auto'"},{name:"literal",value:"'number'"},{name:"literal",value:"'none'"}]},{name:"ReactNode"}]},description:`What to show as the step indicator. Accepts a preset string or any
ReactNode:
- 'auto': numbered badge until completed, then a check (default)
- 'number': always a numbered badge
- 'none': no indicator, just the bar + label
- ReactNode: any custom icon or element to render as the indicator
@default 'auto'`},density:{required:!1,tsType:{name:"union",raw:"'compact' | 'balanced' | 'spacious'",elements:[{name:"literal",value:"'compact'"},{name:"literal",value:"'balanced'"},{name:"literal",value:"'spacious'"}]},description:`Controls vertical padding of the step. Falls back to the stepper-level
density when unset.
- 'compact': minimal padding (4px block)
- 'balanced': default (8px block)
- 'spacious': generous (12px block, 12px inline)`}},composes:["Omit"]};const We={title:"Lab/Stepper",component:a,tags:["autodocs"],argTypes:{activeStep:{control:{type:"number",min:0,max:5}},orientation:{control:"select",options:["horizontal","vertical"]},density:{control:"select",options:["compact","balanced","spacious"]}}},X={name:"Default",render:()=>{const[s,i]=r.useState(2);return e.jsx("div",{style:{maxWidth:400},children:e.jsxs(a,{activeStep:s,orientation:"vertical",onStepClick:i,children:[e.jsx(t,{step:0,label:"Create workspace",description:"Name and configure your workspace"}),e.jsx(t,{step:1,label:"Invite team members",description:"Add collaborators by email"}),e.jsx(t,{step:2,label:"Set up integrations",description:"Connect Slack, GitHub, Jira"}),e.jsx(t,{step:3,label:"Import data",description:"Bring in existing projects"}),e.jsx(t,{step:4,label:"Launch",description:"Go live with your team"})]})})}},w={name:"Default — Horizontal",render:()=>{const[s,i]=r.useState(1);return e.jsx("div",{style:{maxWidth:700},children:e.jsxs(a,{activeStep:s,orientation:"horizontal",onStepClick:i,children:[e.jsx(t,{step:0,label:"Workspace"}),e.jsx(t,{step:1,label:"Team"}),e.jsx(t,{step:2,label:"Integrations"}),e.jsx(t,{step:3,label:"Import"}),e.jsx(t,{step:4,label:"Launch"})]})})}},C={name:"Numbered — Deploy Pipeline",render:()=>{const[s,i]=r.useState(2);return e.jsx("div",{style:{maxWidth:400},children:e.jsxs(a,{activeStep:s,orientation:"vertical",onStepClick:i,children:[e.jsx(t,{step:0,label:"Push to main",description:"Merge your pull request",indicator:"number"}),e.jsx(t,{step:1,label:"Run CI checks",description:"Lint, type-check, test",indicator:"number"}),e.jsx(t,{step:2,label:"Build container",description:"Docker image to registry",indicator:"number"}),e.jsx(t,{step:3,label:"Deploy to staging",description:"Verify in staging environment",indicator:"number"}),e.jsx(t,{step:4,label:"Promote to production",description:"Canary → full rollout",indicator:"number"})]})})}},z={name:"Numbered — Horizontal Checkout",render:()=>{const[s,i]=r.useState(1);return e.jsx("div",{style:{maxWidth:600},children:e.jsxs(a,{activeStep:s,orientation:"horizontal",onStepClick:i,children:[e.jsx(t,{step:0,label:"Cart",indicator:"number"}),e.jsx(t,{step:1,label:"Shipping",indicator:"number"}),e.jsx(t,{step:2,label:"Payment",indicator:"number"}),e.jsx(t,{step:3,label:"Confirm",indicator:"number"})]})})}},A={name:"Status — Account Verification",render:()=>{const[s,i]=r.useState(3);return e.jsx("div",{style:{maxWidth:400},children:e.jsxs(a,{activeStep:s,orientation:"vertical",onStepClick:i,children:[e.jsx(t,{step:0,label:"Email verified",description:"ernesttien@meta.com",status:"success",icon:e.jsx(l,{icon:"check",size:"sm"})}),e.jsx(t,{step:1,label:"Phone verified",description:"+1 (555) 012-3456",status:"success",icon:e.jsx(l,{icon:"check",size:"sm"})}),e.jsx(t,{step:2,label:"Identity document",description:"Passport upload failed",status:"error",icon:e.jsx(l,{icon:"warning",size:"sm"})}),e.jsx(t,{step:3,label:"Address verification",description:"Pending review",status:"accent"}),e.jsx(t,{step:4,label:"Background check",isOptional:!0,description:"Skipped"}),e.jsx(t,{step:5,label:"Account activated"})]})})}},N={name:"Status — Semantic Colors Reference",render:()=>{const[s,i]=r.useState(1);return e.jsx("div",{style:{maxWidth:400},children:e.jsxs(a,{activeStep:s,orientation:"vertical",onStepClick:i,children:[e.jsx(t,{step:0,label:"Accent",description:"--color-accent",status:"accent"}),e.jsx(t,{step:1,label:"Success",description:"--color-success",status:"success",icon:e.jsx(l,{icon:"check",size:"sm"})}),e.jsx(t,{step:2,label:"Warning",description:"--color-warning",status:"warning",icon:e.jsx(l,{icon:"warning",size:"sm"})}),e.jsx(t,{step:3,label:"Error",description:"--color-error",status:"error",icon:e.jsx(l,{icon:"warning",size:"sm"})}),e.jsx(t,{step:4,label:"Default (no status)",description:"progress-derived color"})]})})}},q={name:"Minimal — Interview Process",render:()=>{const[s,i]=r.useState(2);return e.jsx("div",{style:{maxWidth:400},children:e.jsxs(a,{activeStep:s,orientation:"vertical",onStepClick:i,children:[e.jsx(t,{step:0,label:"Phone screen",description:"30 min with recruiter",indicator:"none"}),e.jsx(t,{step:1,label:"Technical interview",description:"1 hour coding session",indicator:"none"}),e.jsx(t,{step:2,label:"System design",description:"45 min whiteboard",indicator:"none"}),e.jsx(t,{step:3,label:"Team match",description:"Meet potential teammates",indicator:"none"}),e.jsx(t,{step:4,label:"Offer",indicator:"none"})]})})}},W={name:"Minimal — Video Upload",render:()=>{const[s,i]=r.useState(1);return e.jsx("div",{style:{maxWidth:500},children:e.jsxs(a,{activeStep:s,orientation:"horizontal",onStepClick:i,children:[e.jsx(t,{step:0,label:"Upload",indicator:"none"}),e.jsx(t,{step:1,label:"Details",indicator:"none"}),e.jsx(t,{step:2,label:"Audience",indicator:"none"}),e.jsx(t,{step:3,label:"Publish",indicator:"none"})]})})}},T={name:"Indicator Modes — Side by Side",render:()=>{const[s,i]=r.useState(2);return e.jsxs("div",{style:{display:"flex",gap:48},children:[e.jsxs("div",{style:{maxWidth:280},children:[e.jsx(x,{type:"label",children:"Auto (default)"}),e.jsxs(a,{activeStep:s,orientation:"vertical",onStepClick:i,children:[e.jsx(t,{step:0,label:"Account"}),e.jsx(t,{step:1,label:"Profile"}),e.jsx(t,{step:2,label:"Settings"}),e.jsx(t,{step:3,label:"Review"}),e.jsx(t,{step:4,label:"Done"})]})]}),e.jsxs("div",{style:{maxWidth:280},children:[e.jsx(x,{type:"label",children:"Number"}),e.jsxs(a,{activeStep:s,orientation:"vertical",onStepClick:i,children:[e.jsx(t,{step:0,label:"Account",indicator:"number"}),e.jsx(t,{step:1,label:"Profile",indicator:"number"}),e.jsx(t,{step:2,label:"Settings",indicator:"number"}),e.jsx(t,{step:3,label:"Review",indicator:"number"}),e.jsx(t,{step:4,label:"Done",indicator:"number"})]})]}),e.jsxs("div",{style:{maxWidth:280},children:[e.jsx(x,{type:"label",children:"Custom icon"}),e.jsxs(a,{activeStep:s,orientation:"vertical",onStepClick:i,children:[e.jsx(t,{step:0,label:"Account",icon:e.jsx(l,{icon:"info",size:"sm"})}),e.jsx(t,{step:1,label:"Profile",icon:e.jsx(l,{icon:"search",size:"sm"})}),e.jsx(t,{step:2,label:"Settings",icon:e.jsx(l,{icon:"wrench",size:"sm"})}),e.jsx(t,{step:3,label:"Review",icon:e.jsx(l,{icon:"clock",size:"sm"})}),e.jsx(t,{step:4,label:"Done",icon:e.jsx(l,{icon:"check",size:"sm"})})]})]}),e.jsxs("div",{style:{maxWidth:280},children:[e.jsx(x,{type:"label",children:"None"}),e.jsxs(a,{activeStep:s,orientation:"vertical",onStepClick:i,children:[e.jsx(t,{step:0,label:"Account",indicator:"none"}),e.jsx(t,{step:1,label:"Profile",indicator:"none"}),e.jsx(t,{step:2,label:"Settings",indicator:"none"}),e.jsx(t,{step:3,label:"Review",indicator:"none"}),e.jsx(t,{step:4,label:"Done",indicator:"none"})]})]})]})}},$={name:"With Content — Multi-Step Form",render:()=>{const[s,i]=r.useState(0);return e.jsx("div",{style:{maxWidth:480},children:e.jsxs(a,{activeStep:s,orientation:"vertical",onStepClick:i,children:[e.jsx(t,{step:0,label:"Project details",indicator:"number",children:s===0&&e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(g,{label:"Project name",placeholder:"My awesome project",value:""}),e.jsx(g,{label:"Repository URL",placeholder:"https://github.com/...",value:""}),e.jsx("div",{children:e.jsx(h,{label:"Continue",variant:"primary",onClick:()=>i(1)})})]})}),e.jsx(t,{step:1,label:"Environment",indicator:"number",children:s===1&&e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(g,{label:"Node version",placeholder:"20",value:""}),e.jsx(g,{label:"Build command",placeholder:"npm run build",value:""}),e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(h,{label:"Back",variant:"secondary",onClick:()=>i(0)}),e.jsx(h,{label:"Continue",variant:"primary",onClick:()=>i(2)})]})]})}),e.jsx(t,{step:2,label:"Deploy",indicator:"number",children:s===2&&e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(x,{type:"body",children:"Ready to deploy. This will create a production build and push to your configured hosting."}),e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(h,{label:"Back",variant:"secondary",onClick:()=>i(1)}),e.jsx(h,{label:"Deploy now",variant:"primary",onClick:()=>i(3)})]})]})}),e.jsx(t,{step:3,label:"Done",indicator:"number"})]})})}},M={name:"Density — Compact / Balanced / Spacious",render:()=>{const[s,i]=r.useState(1);return e.jsxs("div",{style:{display:"flex",gap:48},children:[e.jsxs("div",{style:{maxWidth:250},children:[e.jsx(x,{type:"label",children:"Compact"}),e.jsxs(a,{activeStep:s,orientation:"vertical",onStepClick:i,density:"compact",children:[e.jsx(t,{step:0,label:"Account",indicator:"number"}),e.jsx(t,{step:1,label:"Profile",indicator:"number"}),e.jsx(t,{step:2,label:"Payment",indicator:"number"}),e.jsx(t,{step:3,label:"Review",indicator:"number"})]})]}),e.jsxs("div",{style:{maxWidth:250},children:[e.jsx(x,{type:"label",children:"Balanced"}),e.jsxs(a,{activeStep:s,orientation:"vertical",onStepClick:i,density:"balanced",children:[e.jsx(t,{step:0,label:"Account",indicator:"number"}),e.jsx(t,{step:1,label:"Profile",indicator:"number"}),e.jsx(t,{step:2,label:"Payment",indicator:"number"}),e.jsx(t,{step:3,label:"Review",indicator:"number"})]})]}),e.jsxs("div",{style:{maxWidth:250},children:[e.jsx(x,{type:"label",children:"Spacious"}),e.jsxs(a,{activeStep:s,orientation:"vertical",onStepClick:i,density:"spacious",children:[e.jsx(t,{step:0,label:"Account",indicator:"number"}),e.jsx(t,{step:1,label:"Profile",indicator:"number"}),e.jsx(t,{step:2,label:"Payment",indicator:"number"}),e.jsx(t,{step:3,label:"Review",indicator:"number"})]})]})]})}},I={name:"Edge — Two Steps",render:()=>{const[s,i]=r.useState(0);return e.jsx("div",{style:{maxWidth:400},children:e.jsxs(a,{activeStep:s,orientation:"horizontal",onStepClick:i,children:[e.jsx(t,{step:0,label:"Before"}),e.jsx(t,{step:1,label:"After"})]})})}},P={name:"Edge — Seven Steps (Horizontal)",render:()=>{const[s,i]=r.useState(3);return e.jsxs(a,{activeStep:s,orientation:"horizontal",onStepClick:i,children:[e.jsx(t,{step:0,label:"Idea",indicator:"number"}),e.jsx(t,{step:1,label:"Design",indicator:"number"}),e.jsx(t,{step:2,label:"Build",indicator:"number"}),e.jsx(t,{step:3,label:"Test",indicator:"number"}),e.jsx(t,{step:4,label:"Review",indicator:"number"}),e.jsx(t,{step:5,label:"Deploy",indicator:"number"}),e.jsx(t,{step:6,label:"Monitor",indicator:"number"})]})}},R={name:"Edge — Disabled Steps",render:()=>{const[s,i]=r.useState(1);return e.jsx("div",{style:{maxWidth:400},children:e.jsxs(a,{activeStep:s,orientation:"vertical",onStepClick:i,children:[e.jsx(t,{step:0,label:"Basic info"}),e.jsx(t,{step:1,label:"Permissions"}),e.jsx(t,{step:2,label:"Admin settings",description:"Requires admin role",isDisabled:!0}),e.jsx(t,{step:3,label:"Confirm"})]})})}},B={name:"Edge — Optional + Skipped",render:()=>{const[s,i]=r.useState(3);return e.jsx("div",{style:{maxWidth:400},children:e.jsxs(a,{activeStep:s,orientation:"vertical",onStepClick:i,children:[e.jsx(t,{step:0,label:"Basic profile"}),e.jsx(t,{step:1,label:"Profile photo",isOptional:!0,description:"Skipped"}),e.jsx(t,{step:2,label:"Connect socials",isOptional:!0}),e.jsx(t,{step:3,label:"Preferences"}),e.jsx(t,{step:4,label:"All done"})]})})}},E={name:"Edge — Long Labels & Descriptions",render:()=>{const[s,i]=r.useState(1);return e.jsx("div",{style:{maxWidth:400},children:e.jsxs(a,{activeStep:s,orientation:"vertical",onStepClick:i,children:[e.jsx(t,{step:0,label:"Configure your development environment",description:"Install dependencies, set up local database, configure environment variables"}),e.jsx(t,{step:1,label:"Create initial data migration",description:"Define schema, seed data, and run migrations against staging"}),e.jsx(t,{step:2,label:"Submit for code review",description:"Open pull request and address reviewer feedback"})]})})}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: 'Default',
  render: () => {
    const [active, setActive] = useState(2);
    return <div style={{
      maxWidth: 400
    }}>
        <XDSStepper activeStep={active} orientation="vertical" onStepClick={setActive}>
          <XDSStep step={0} label="Create workspace" description="Name and configure your workspace" />
          <XDSStep step={1} label="Invite team members" description="Add collaborators by email" />
          <XDSStep step={2} label="Set up integrations" description="Connect Slack, GitHub, Jira" />
          <XDSStep step={3} label="Import data" description="Bring in existing projects" />
          <XDSStep step={4} label="Launch" description="Go live with your team" />
        </XDSStepper>
      </div>;
  }
}`,...X.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Default — Horizontal',
  render: () => {
    const [active, setActive] = useState(1);
    return <div style={{
      maxWidth: 700
    }}>
        <XDSStepper activeStep={active} orientation="horizontal" onStepClick={setActive}>
          <XDSStep step={0} label="Workspace" />
          <XDSStep step={1} label="Team" />
          <XDSStep step={2} label="Integrations" />
          <XDSStep step={3} label="Import" />
          <XDSStep step={4} label="Launch" />
        </XDSStepper>
      </div>;
  }
}`,...w.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Numbered — Deploy Pipeline',
  render: () => {
    const [active, setActive] = useState(2);
    return <div style={{
      maxWidth: 400
    }}>
        <XDSStepper activeStep={active} orientation="vertical" onStepClick={setActive}>
          <XDSStep step={0} label="Push to main" description="Merge your pull request" indicator="number" />
          <XDSStep step={1} label="Run CI checks" description="Lint, type-check, test" indicator="number" />
          <XDSStep step={2} label="Build container" description="Docker image to registry" indicator="number" />
          <XDSStep step={3} label="Deploy to staging" description="Verify in staging environment" indicator="number" />
          <XDSStep step={4} label="Promote to production" description="Canary → full rollout" indicator="number" />
        </XDSStepper>
      </div>;
  }
}`,...C.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: 'Numbered — Horizontal Checkout',
  render: () => {
    const [active, setActive] = useState(1);
    return <div style={{
      maxWidth: 600
    }}>
        <XDSStepper activeStep={active} orientation="horizontal" onStepClick={setActive}>
          <XDSStep step={0} label="Cart" indicator="number" />
          <XDSStep step={1} label="Shipping" indicator="number" />
          <XDSStep step={2} label="Payment" indicator="number" />
          <XDSStep step={3} label="Confirm" indicator="number" />
        </XDSStepper>
      </div>;
  }
}`,...z.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'Status — Account Verification',
  render: () => {
    const [active, setActive] = useState(3);
    return <div style={{
      maxWidth: 400
    }}>
        <XDSStepper activeStep={active} orientation="vertical" onStepClick={setActive}>
          <XDSStep step={0} label="Email verified" description="ernesttien@meta.com" status="success" icon={<XDSIcon icon="check" size="sm" />} />
          <XDSStep step={1} label="Phone verified" description="+1 (555) 012-3456" status="success" icon={<XDSIcon icon="check" size="sm" />} />
          <XDSStep step={2} label="Identity document" description="Passport upload failed" status="error" icon={<XDSIcon icon="warning" size="sm" />} />
          <XDSStep step={3} label="Address verification" description="Pending review" status="accent" />
          <XDSStep step={4} label="Background check" isOptional description="Skipped" />
          <XDSStep step={5} label="Account activated" />
        </XDSStepper>
      </div>;
  }
}`,...A.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'Status — Semantic Colors Reference',
  render: () => {
    const [active, setActive] = useState(1);
    return <div style={{
      maxWidth: 400
    }}>
        <XDSStepper activeStep={active} orientation="vertical" onStepClick={setActive}>
          <XDSStep step={0} label="Accent" description="--color-accent" status="accent" />
          <XDSStep step={1} label="Success" description="--color-success" status="success" icon={<XDSIcon icon="check" size="sm" />} />
          <XDSStep step={2} label="Warning" description="--color-warning" status="warning" icon={<XDSIcon icon="warning" size="sm" />} />
          <XDSStep step={3} label="Error" description="--color-error" status="error" icon={<XDSIcon icon="warning" size="sm" />} />
          <XDSStep step={4} label="Default (no status)" description="progress-derived color" />
        </XDSStepper>
      </div>;
  }
}`,...N.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: 'Minimal — Interview Process',
  render: () => {
    const [active, setActive] = useState(2);
    return <div style={{
      maxWidth: 400
    }}>
        <XDSStepper activeStep={active} orientation="vertical" onStepClick={setActive}>
          <XDSStep step={0} label="Phone screen" description="30 min with recruiter" indicator="none" />
          <XDSStep step={1} label="Technical interview" description="1 hour coding session" indicator="none" />
          <XDSStep step={2} label="System design" description="45 min whiteboard" indicator="none" />
          <XDSStep step={3} label="Team match" description="Meet potential teammates" indicator="none" />
          <XDSStep step={4} label="Offer" indicator="none" />
        </XDSStepper>
      </div>;
  }
}`,...q.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: 'Minimal — Video Upload',
  render: () => {
    const [active, setActive] = useState(1);
    return <div style={{
      maxWidth: 500
    }}>
        <XDSStepper activeStep={active} orientation="horizontal" onStepClick={setActive}>
          <XDSStep step={0} label="Upload" indicator="none" />
          <XDSStep step={1} label="Details" indicator="none" />
          <XDSStep step={2} label="Audience" indicator="none" />
          <XDSStep step={3} label="Publish" indicator="none" />
        </XDSStepper>
      </div>;
  }
}`,...W.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Indicator Modes — Side by Side',
  render: () => {
    const [active, setActive] = useState(2);
    return <div style={{
      display: 'flex',
      gap: 48
    }}>
        <div style={{
        maxWidth: 280
      }}>
          <XDSText type="label">Auto (default)</XDSText>
          <XDSStepper activeStep={active} orientation="vertical" onStepClick={setActive}>
            <XDSStep step={0} label="Account" />
            <XDSStep step={1} label="Profile" />
            <XDSStep step={2} label="Settings" />
            <XDSStep step={3} label="Review" />
            <XDSStep step={4} label="Done" />
          </XDSStepper>
        </div>
        <div style={{
        maxWidth: 280
      }}>
          <XDSText type="label">Number</XDSText>
          <XDSStepper activeStep={active} orientation="vertical" onStepClick={setActive}>
            <XDSStep step={0} label="Account" indicator="number" />
            <XDSStep step={1} label="Profile" indicator="number" />
            <XDSStep step={2} label="Settings" indicator="number" />
            <XDSStep step={3} label="Review" indicator="number" />
            <XDSStep step={4} label="Done" indicator="number" />
          </XDSStepper>
        </div>
        <div style={{
        maxWidth: 280
      }}>
          <XDSText type="label">Custom icon</XDSText>
          <XDSStepper activeStep={active} orientation="vertical" onStepClick={setActive}>
            <XDSStep step={0} label="Account" icon={<XDSIcon icon="info" size="sm" />} />
            <XDSStep step={1} label="Profile" icon={<XDSIcon icon="search" size="sm" />} />
            <XDSStep step={2} label="Settings" icon={<XDSIcon icon="wrench" size="sm" />} />
            <XDSStep step={3} label="Review" icon={<XDSIcon icon="clock" size="sm" />} />
            <XDSStep step={4} label="Done" icon={<XDSIcon icon="check" size="sm" />} />
          </XDSStepper>
        </div>
        <div style={{
        maxWidth: 280
      }}>
          <XDSText type="label">None</XDSText>
          <XDSStepper activeStep={active} orientation="vertical" onStepClick={setActive}>
            <XDSStep step={0} label="Account" indicator="none" />
            <XDSStep step={1} label="Profile" indicator="none" />
            <XDSStep step={2} label="Settings" indicator="none" />
            <XDSStep step={3} label="Review" indicator="none" />
            <XDSStep step={4} label="Done" indicator="none" />
          </XDSStepper>
        </div>
      </div>;
  }
}`,...T.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  name: 'With Content — Multi-Step Form',
  render: () => {
    const [active, setActive] = useState(0);
    return <div style={{
      maxWidth: 480
    }}>
        <XDSStepper activeStep={active} orientation="vertical" onStepClick={setActive}>
          <XDSStep step={0} label="Project details" indicator="number">
            {active === 0 && <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 12
          }}>
                <XDSTextInput label="Project name" placeholder="My awesome project" value="" />
                <XDSTextInput label="Repository URL" placeholder="https://github.com/..." value="" />
                <div>
                  <XDSButton label="Continue" variant="primary" onClick={() => setActive(1)} />
                </div>
              </div>}
          </XDSStep>
          <XDSStep step={1} label="Environment" indicator="number">
            {active === 1 && <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 12
          }}>
                <XDSTextInput label="Node version" placeholder="20" value="" />
                <XDSTextInput label="Build command" placeholder="npm run build" value="" />
                <div style={{
              display: 'flex',
              gap: 8
            }}>
                  <XDSButton label="Back" variant="secondary" onClick={() => setActive(0)} />
                  <XDSButton label="Continue" variant="primary" onClick={() => setActive(2)} />
                </div>
              </div>}
          </XDSStep>
          <XDSStep step={2} label="Deploy" indicator="number">
            {active === 2 && <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 12
          }}>
                <XDSText type="body">
                  Ready to deploy. This will create a production build and push
                  to your configured hosting.
                </XDSText>
                <div style={{
              display: 'flex',
              gap: 8
            }}>
                  <XDSButton label="Back" variant="secondary" onClick={() => setActive(1)} />
                  <XDSButton label="Deploy now" variant="primary" onClick={() => setActive(3)} />
                </div>
              </div>}
          </XDSStep>
          <XDSStep step={3} label="Done" indicator="number" />
        </XDSStepper>
      </div>;
  }
}`,...$.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'Density — Compact / Balanced / Spacious',
  render: () => {
    const [active, setActive] = useState(1);
    return <div style={{
      display: 'flex',
      gap: 48
    }}>
        <div style={{
        maxWidth: 250
      }}>
          <XDSText type="label">Compact</XDSText>
          <XDSStepper activeStep={active} orientation="vertical" onStepClick={setActive} density="compact">
            <XDSStep step={0} label="Account" indicator="number" />
            <XDSStep step={1} label="Profile" indicator="number" />
            <XDSStep step={2} label="Payment" indicator="number" />
            <XDSStep step={3} label="Review" indicator="number" />
          </XDSStepper>
        </div>
        <div style={{
        maxWidth: 250
      }}>
          <XDSText type="label">Balanced</XDSText>
          <XDSStepper activeStep={active} orientation="vertical" onStepClick={setActive} density="balanced">
            <XDSStep step={0} label="Account" indicator="number" />
            <XDSStep step={1} label="Profile" indicator="number" />
            <XDSStep step={2} label="Payment" indicator="number" />
            <XDSStep step={3} label="Review" indicator="number" />
          </XDSStepper>
        </div>
        <div style={{
        maxWidth: 250
      }}>
          <XDSText type="label">Spacious</XDSText>
          <XDSStepper activeStep={active} orientation="vertical" onStepClick={setActive} density="spacious">
            <XDSStep step={0} label="Account" indicator="number" />
            <XDSStep step={1} label="Profile" indicator="number" />
            <XDSStep step={2} label="Payment" indicator="number" />
            <XDSStep step={3} label="Review" indicator="number" />
          </XDSStepper>
        </div>
      </div>;
  }
}`,...M.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'Edge — Two Steps',
  render: () => {
    const [active, setActive] = useState(0);
    return <div style={{
      maxWidth: 400
    }}>
        <XDSStepper activeStep={active} orientation="horizontal" onStepClick={setActive}>
          <XDSStep step={0} label="Before" />
          <XDSStep step={1} label="After" />
        </XDSStepper>
      </div>;
  }
}`,...I.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: 'Edge — Seven Steps (Horizontal)',
  render: () => {
    const [active, setActive] = useState(3);
    return <XDSStepper activeStep={active} orientation="horizontal" onStepClick={setActive}>
        <XDSStep step={0} label="Idea" indicator="number" />
        <XDSStep step={1} label="Design" indicator="number" />
        <XDSStep step={2} label="Build" indicator="number" />
        <XDSStep step={3} label="Test" indicator="number" />
        <XDSStep step={4} label="Review" indicator="number" />
        <XDSStep step={5} label="Deploy" indicator="number" />
        <XDSStep step={6} label="Monitor" indicator="number" />
      </XDSStepper>;
  }
}`,...P.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'Edge — Disabled Steps',
  render: () => {
    const [active, setActive] = useState(1);
    return <div style={{
      maxWidth: 400
    }}>
        <XDSStepper activeStep={active} orientation="vertical" onStepClick={setActive}>
          <XDSStep step={0} label="Basic info" />
          <XDSStep step={1} label="Permissions" />
          <XDSStep step={2} label="Admin settings" description="Requires admin role" isDisabled />
          <XDSStep step={3} label="Confirm" />
        </XDSStepper>
      </div>;
  }
}`,...R.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'Edge — Optional + Skipped',
  render: () => {
    const [active, setActive] = useState(3);
    return <div style={{
      maxWidth: 400
    }}>
        <XDSStepper activeStep={active} orientation="vertical" onStepClick={setActive}>
          <XDSStep step={0} label="Basic profile" />
          <XDSStep step={1} label="Profile photo" isOptional description="Skipped" />
          <XDSStep step={2} label="Connect socials" isOptional />
          <XDSStep step={3} label="Preferences" />
          <XDSStep step={4} label="All done" />
        </XDSStepper>
      </div>;
  }
}`,...B.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Edge — Long Labels & Descriptions',
  render: () => {
    const [active, setActive] = useState(1);
    return <div style={{
      maxWidth: 400
    }}>
        <XDSStepper activeStep={active} orientation="vertical" onStepClick={setActive}>
          <XDSStep step={0} label="Configure your development environment" description="Install dependencies, set up local database, configure environment variables" />
          <XDSStep step={1} label="Create initial data migration" description="Define schema, seed data, and run migrations against staging" />
          <XDSStep step={2} label="Submit for code review" description="Open pull request and address reviewer feedback" />
        </XDSStepper>
      </div>;
  }
}`,...E.parameters?.docs?.source}}};const Te=["Default","DefaultHorizontal","NumberedVertical","NumberedHorizontal","StatusVertical","StatusAllStates","MinimalVertical","MinimalHorizontal","IndicatorComparison","WithContentSlot","DensityComparison","TwoSteps","ManySteps","DisabledSteps","OptionalSteps","LongLabels"];export{X as Default,w as DefaultHorizontal,M as DensityComparison,R as DisabledSteps,T as IndicatorComparison,E as LongLabels,P as ManySteps,W as MinimalHorizontal,q as MinimalVertical,z as NumberedHorizontal,C as NumberedVertical,B as OptionalSteps,N as StatusAllStates,A as StatusVertical,I as TwoSteps,$ as WithContentSlot,Te as __namedExportsOrder,We as default};
