const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./iframe-yRFQ_7VC.js","./preload-helper-Ct5FWWRu.js","./iframe-DthuJqN0.css"])))=>i.map(i=>d[i]);
import{_ as j}from"./preload-helper-Ct5FWWRu.js";import{aS as M,at as s,ad as t,ai as P,ar as v,aZ as V,aj as W,T as z,L as E,ae as B,aH as N,aY as C,aJ as f,$ as A,W as U,az as $,ay as F,N as I,aK as O}from"./iframe-yRFQ_7VC.js";const J=s.lazy(async()=>j(()=>import("./iframe-yRFQ_7VC.js").then(a=>a.w),__vite__mapDeps([0,1,2]),import.meta.url).then(a=>({default:a.XDSTooltip}))),K={1:"h1",2:"h2",3:"h3",4:"h4",5:"h5",6:"h6"};function y({level:a,type:l,accessibilityLevel:i,color:o="primary",display:h="block",maxLines:e=0,hasTruncateTooltip:r=!0,wordBreak:g,textWrap:d,justify:u="start",hasCapsize:m=!1,hasStrikethrough:S=!1,xstyle:b,className:T,style:H,children:w,ref:D,...k}){const X=K[a],x=i&&i!==a?{"aria-level":i}:{},R=g??(e===1?"break-all":"break-word"),q=e>0||m?"block":h,n=M({maxLines:e}),L=typeof r=="string"?r:"above",p=e>0&&r!==!1&&n.isTruncated,c=s.useRef(null),_=e>1?{WebkitLineClamp:e}:void 0;return t.jsxs(t.Fragment,{children:[t.jsx(X,{ref:W(D,n.ref,c),...P(V("heading",{level:a,color:o,...l&&{type:l}}),v(I[o],l?$[l]:F[a],l&&U[l],e===1?f.singleLine:e>1?f.multiLine:A[q],e>0&&C[R],d&&N[d],u!=="start"&&B[u],m&&E.enabled,S&&z.strikethrough,b),T,{...H,..._}),title:p?n.fullText:void 0,...x,...k,children:w}),p&&t.jsx(s.Suspense,{fallback:null,children:t.jsx(J,{anchorRef:c,content:t.jsx("span",{...v(O.content),children:n.fullText}),placement:L})})]})}y.displayName="XDSHeading";y.__docgenInfo={description:`XDSHeading - Semantic heading component

Renders headings with semantic HTML (h1-h6) and themed styling.

@example
\`\`\`
<XDSHeading level={1}>Page Title</XDSHeading>
<XDSHeading level={2}>Section</XDSHeading>
<XDSHeading level={2} accessibilityLevel={3}>Sidebar Section</XDSHeading>
<XDSHeading level={1} type="display-1">Hero Title</XDSHeading>
<XDSHeading level={2} type="display-2">$1.2M Revenue</XDSHeading>
<XDSHeading level={2} maxLines={1}>Very Long Section Title...</XDSHeading>
<XDSHeading level={3} color="secondary">Muted Heading</XDSHeading>
\`\`\``,methods:[],displayName:"XDSHeading",props:{ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLHeadingElement>",elements:[{name:"HTMLHeadingElement"}]},description:"Ref forwarded to the root element"},level:{required:!0,tsType:{name:"union",raw:"1 | 2 | 3 | 4 | 5 | 6",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"}]},description:"Heading level (1-6). Determines the semantic HTML element (h1–h6).\nAlso determines visual styling unless `type` is set."},type:{required:!1,tsType:{name:"union",raw:"'display-1' | 'display-2' | 'display-3'",elements:[{name:"literal",value:"'display-1'"},{name:"literal",value:"'display-2'"},{name:"literal",value:"'display-3'"}]},description:`Display type variant. When set, overrides the visual styling from \`level\`
with display-scale sizing (larger, lighter weight, tighter line-height).
The \`level\` still determines the HTML element for accessibility.

Use for hero banners, marketing headlines, and data callouts that need
heading semantics.

@example
\`\`\`
<XDSHeading level={1} type="display-1">Hero Title</XDSHeading>
<XDSHeading level={2} type="display-2">$1.2M Revenue</XDSHeading>
\`\`\``},accessibilityLevel:{required:!1,tsType:{name:"union",raw:"1 | 2 | 3 | 4 | 5 | 6",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"}]},description:"Accessibility level override. When set, the `aria-level` will differ\nfrom the visual `level`. Use this when the visual hierarchy doesn't\nmatch the document outline (e.g., sidebar headings, reused components).\n\n@default Same as `level`\n\n@example\n```\n<XDSHeading level={2} accessibilityLevel={3}>Sidebar Section</XDSHeading>\n```"},color:{required:!1,tsType:{name:"union",raw:`| 'primary'
| 'secondary'
| 'disabled'
| 'placeholder'
| 'active'
| 'inherit'`,elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'disabled'"},{name:"literal",value:"'placeholder'"},{name:"literal",value:"'active'"},{name:"literal",value:"'inherit'"}]},description:`Text color.
@default 'primary'`,defaultValue:{value:"'primary'",computed:!1}},display:{required:!1,tsType:{name:"union",raw:"'inline' | 'block'",elements:[{name:"literal",value:"'inline'"},{name:"literal",value:"'block'"}]},description:`Display type. Headings default to block.
Note: Silently overridden to 'block' when maxLines > 0 or hasCapsize is true.
@default 'block'`,defaultValue:{value:"'block'",computed:!1}},maxLines:{required:!1,tsType:{name:"number"},description:`Maximum lines before truncation. 0 = no truncation.
When set, shows tooltip on hover if content is truncated.
@default 0`,defaultValue:{value:"0",computed:!1}},hasTruncateTooltip:{required:!1,tsType:{name:"union",raw:"boolean | LayerPlacement",elements:[{name:"boolean"},{name:"union",raw:"'above' | 'below' | 'start' | 'end'",elements:[{name:"literal",value:"'above'"},{name:"literal",value:"'below'"},{name:"literal",value:"'start'"},{name:"literal",value:"'end'"}]}]},description:"Control tooltip behavior for truncated text.\n- `true` (default when maxLines > 0): show tooltip at default position\n- `false`: disable tooltip\n- Position value: show tooltip at specific position\n@default true",defaultValue:{value:"true",computed:!1}},wordBreak:{required:!1,tsType:{name:"union",raw:"'break-word' | 'break-all'",elements:[{name:"literal",value:"'break-word'"},{name:"literal",value:"'break-all'"}]},description:`Word break behavior for truncated text.
@default 'break-all' for maxLines=1, 'break-word' otherwise`},textWrap:{required:!1,tsType:{name:"union",raw:"'wrap' | 'nowrap' | 'balance' | 'pretty'",elements:[{name:"literal",value:"'wrap'"},{name:"literal",value:"'nowrap'"},{name:"literal",value:"'balance'"},{name:"literal",value:"'pretty'"}]},description:"Text wrapping behavior."},justify:{required:!1,tsType:{name:"union",raw:"'start' | 'center' | 'end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'end'"}]},description:`Text alignment (justification). Uses logical values (start/end)
for i18n/RTL compatibility.
@default 'start'`,defaultValue:{value:"'start'",computed:!1}},hasCapsize:{required:!1,tsType:{name:"boolean"},description:`Enable optical alignment (text-box-trim).
Forces block display.
@default false`,defaultValue:{value:"false",computed:!1}},hasStrikethrough:{required:!1,tsType:{name:"boolean"},description:`Strikethrough decoration.
@default false`,defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:"Heading content"}},composes:["Omit"]};export{y as X};
