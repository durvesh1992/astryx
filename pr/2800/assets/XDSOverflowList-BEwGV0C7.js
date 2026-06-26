import{at as o,aP as L,ao as Z,aQ as A,ad as w,ar as E,ai as J,aZ as j,aj as N}from"./iframe-yRFQ_7VC.js";function B(a,h={}){const{gap:v=0,minVisibleItems:r=0,collapseFrom:p="end",behavior:b="observeSelf"}=h,u=b==="observeParent",[x,g]=o.useState(a),y=o.useRef(null),S=o.useRef(null),i=o.useRef(null),n=o.useCallback(()=>{const e=y.current,s=S.current;if(!e||!s)return;let c;if(u&&e.parentElement){const l=e.parentElement,O=getComputedStyle(l);c=l.clientWidth-parseFloat(O.paddingLeft)-parseFloat(O.paddingRight)}else c=e.offsetWidth;const t=Array.from(s.children),m=t.length>a,d=m?t.slice(0,a):t,k=m?t[t.length-1].offsetWidth:0;if(d.length===0){g(0);return}const f=d.map(l=>l.offsetWidth);let I=0,$=0;const D=p==="end"?f:[...f].reverse();for(let l=0;l<D.length;l++){const O=D[l],W=l>0?v:0,X=I+O+W,z=l===D.length-1?0:k+($>0||k>0?v:0);if(X+z>c&&$>=r)break;I=X,$++}g(Math.max(Math.min($,a),r))},[a,v,r,p,u]),P=o.useCallback(e=>{if(y.current=e,i.current&&(L(i.current),i.current=null),e){const s=u&&e.parentElement?e.parentElement:e;Z(s,()=>{n()}),i.current=s}},[n,u]),R=o.useCallback(e=>{S.current=e,e&&n()},[n]);A(()=>{n()},[n]);const V=x<a;return{containerRef:P,measureRef:R,visibleCount:x,hasOverflow:V}}const C={container:{k1xSpc:"xds78zum5",kGNEyG:"xds6s0dn4",kVQacm:"xdsb3r6kr",khDVqt:"xdsuxw1ft",k7Eaqz:"xdseuugli",$$css:!0},fillParent:{kzqmXN:"xdsh8yej3",$$css:!0},measureContainer:{kVAEAm:"xds10l6tqk",k33iCy:"xdslshs6z",kZKoxP:"xdsqtp20y",kVQacm:"xdsb3r6kr",k1xSpc:"xds78zum5",kGNEyG:"xds6s0dn4",khDVqt:"xdsuxw1ft",kfzvcC:"xds47corl",$$css:!0}},T={0:{kOIVth:"xdssn7fz1",khm7nJ:null,k1C7PZ:null,$$css:!0},1:{kOIVth:"xdszye2dw",khm7nJ:null,k1C7PZ:null,$$css:!0},2:{kOIVth:"xds1txdalj",khm7nJ:null,k1C7PZ:null,$$css:!0},3:{kOIVth:"xdsjcht0a",khm7nJ:null,k1C7PZ:null,$$css:!0},4:{kOIVth:"xds18g69wz",khm7nJ:null,k1C7PZ:null,$$css:!0},5:{kOIVth:"xds9mgr7n",khm7nJ:null,k1C7PZ:null,$$css:!0},6:{kOIVth:"xds1qh66ti",khm7nJ:null,k1C7PZ:null,$$css:!0},8:{kOIVth:"xds4t41sb",khm7nJ:null,k1C7PZ:null,$$css:!0},10:{kOIVth:"xds3hoi3v",khm7nJ:null,k1C7PZ:null,$$css:!0},"0.5":{kOIVth:"xds1lsbc85",khm7nJ:null,k1C7PZ:null,$$css:!0},"1.5":{kOIVth:"xds1s4dlld",khm7nJ:null,k1C7PZ:null,$$css:!0}},M={0:0,.5:2,1:4,1.5:6,2:8,3:12,4:16,5:20,6:24,8:32,10:40};function q({children:a,gap:h=2,minVisibleItems:v=0,collapseFrom:r="end",behavior:p="observeSelf",overflowRenderer:b,xstyle:u,className:x,style:g,ref:y,...S}){const i=o.Children.toArray(a),n=i.length,P=M[h],R=p==="observeParent",{containerRef:V,measureRef:e,visibleCount:s,hasOverflow:c}=B(n,{gap:P,minVisibleItems:v,collapseFrom:r,behavior:p}),t=i.map((f,I)=>({child:f,index:I}));let m,d;r==="end"?(m=t.slice(0,s),d=t.slice(s)):(m=t.slice(n-s),d=t.slice(0,n-s));const k=b?.(t);return w.jsxs(w.Fragment,{children:[w.jsxs("div",{ref:e,"aria-hidden":"true",inert:!0,...E(C.measureContainer,T[h]),children:[i,k!=null&&w.jsx("div",{className:"xds3nfvp2",children:k})]}),w.jsxs("div",{ref:N(y,V),...J(j("overflow-list"),E(C.container,T[h],R&&c&&C.fillParent,u),x,g),...S,children:[r==="start"&&c&&b?.(d),m.map(({child:f})=>f),r==="end"&&c&&b?.(d)]})]})}q.displayName="XDSOverflowList";q.__docgenInfo={description:`A horizontal list that hides items that don't fit and shows an overflow indicator.

Uses a hidden measurement container to determine which items fit without
causing visual flickering. The overflow indicator is also measured
automatically so no manual width value is needed.

@example
\`\`\`
<XDSOverflowList
  gap={2}
  overflowRenderer={(items) => (
    <XDSButton label={\`+\${items.length} more\`} variant="ghost" />
  )}>
  <XDSButton label="Action 1" />
  <XDSButton label="Action 2" />
  <XDSButton label="Action 3" />
  <XDSButton label="Action 4" />
</XDSOverflowList>
\`\`\``,methods:[],displayName:"XDSOverflowList",props:{xstyle:{required:!1,tsType:{name:"StyleXStyles"},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:"Ref forwarded to the visible container element"},children:{required:!0,tsType:{name:"ReactNode"},description:"The items to render. Each child should be a single element."},gap:{required:!1,tsType:{name:"union",raw:"0 | 0.5 | 1 | 1.5 | 2 | 3 | 4 | 5 | 6 | 8 | 10",elements:[{name:"literal",value:"0"},{name:"literal",value:"0.5"},{name:"literal",value:"1"},{name:"literal",value:"1.5"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"8"},{name:"literal",value:"10"}]},description:`Gap between items as a spacing token step.
Accepts: 0, 0.5, 1, 1.5, 2, 3, 4, 5, 6, 8, 10
@default 2`,defaultValue:{value:"2",computed:!1}},minVisibleItems:{required:!1,tsType:{name:"number"},description:`Minimum number of items to always show.
@default 0`,defaultValue:{value:"0",computed:!1}},collapseFrom:{required:!1,tsType:{name:"union",raw:"'start' | 'end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'end'"}]},description:`Which end to collapse items from.
@default 'end'`,defaultValue:{value:"'end'",computed:!1}},behavior:{required:!1,tsType:{name:"union",raw:"'observeParent' | 'observeSelf'",elements:[{name:"literal",value:"'observeParent'"},{name:"literal",value:"'observeSelf'"}]},description:`Which element to observe for overflow calculations.
- \`'observeSelf'\`: uses the container's own width (default)
- \`'observeParent'\`: observes the parent element's content width
  for overflow calculations. This keeps the overflow list
  content-sized while still detecting available space for
  grow-back. Siblings that don't fit can wrap and be clipped by
  the parent's overflow.
@default 'observeSelf'`,defaultValue:{value:"'observeSelf'",computed:!1}},overflowRenderer:{required:!1,tsType:{name:"signature",type:"function",raw:"(overflowItems: XDSOverflowItem[]) => ReactNode",signature:{arguments:[{type:{name:"Array",elements:[{name:"XDSOverflowItem"}],raw:"XDSOverflowItem[]"},name:"overflowItems"}],return:{name:"ReactNode"}}},description:`Render function for the overflow indicator. Receives the list of
items that are not visible, each with its original index. Only called
when there are overflowing items.

The indicator is automatically measured in a hidden container to
reserve the correct amount of space.

@example
\`\`\`
const labels = ['Save', 'Edit', 'Share'];
<XDSOverflowList
  overflowRenderer={(overflowItems) => (
    <XDSDropdownMenu
      button={{label: \`+\${overflowItems.length}\`, variant: 'ghost'}}
      items={overflowItems.map(({index}) => ({ label: labels[index] }))}
    />
  )}>
  {labels.map(l => <XDSButton key={l} label={l} />)}
</XDSOverflowList>
\`\`\``}},composes:["Omit"]};export{q as X};
