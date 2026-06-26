import{at as R,ad as e}from"./iframe-yRFQ_7VC.js";import{X as B}from"./XDSStack-CFJ7xIVk.js";import{u as L}from"./useXDSChartColors-DP0GcV3K.js";import{X as _}from"./XDSHeading---Kr4LhL.js";import{X as E}from"./XDSChartLegend-B0nhyTYb.js";import"./preload-helper-Ct5FWWRu.js";import"./stack.stylex-5XIQDawT.js";const O=R.createContext(null),Z=O.Provider;function V(){const a=R.useContext(O);if(!a)throw new Error("Radial components must be used inside <XDSRadialChart>");return a}function K({data:a,height:r=400,axes:t,valueKey:o,labelKey:c,innerRadius:u=0,padAngle:s=.02,children:l}){const d=R.useRef(null),[n,f]=R.useState(0);R.useLayoutEffect(()=>{if(!d.current)return;const x=new ResizeObserver(C=>{const X=C[0];X&&f(X.contentRect.width)});return x.observe(d.current),()=>x.disconnect()},[]);const h=Math.min(n,r),m=n/2,g=r/2,p=h/2-40,i=p*u,S=t?"spider":"pie",D=R.useMemo(()=>{if(!t||t.length===0)return{};const x=new Map,C=2*Math.PI/t.length;t.forEach((j,y)=>{x.set(j,-Math.PI/2+C*y)});const X=new Map;for(const j of t){let y=1/0,v=-1/0;for(const A of a){const M=A[j];typeof M=="number"&&(M<y&&(y=M),M>v&&(v=M))}y>0&&(y=0),X.set(j,[y,v])}return{axes:t,angleByAxis:x,radiusScale:j=>i+j*(p-i),axisDomains:X}},[t,a,p,i]),$=R.useMemo(()=>{if(!o)return{};const x=a.reduce((y,v)=>{const A=v[o];return y+(typeof A=="number"?A:0)},0);if(x===0)return{slices:[]};const C=s*a.length,X=2*Math.PI-C;let b=-Math.PI/2;return{slices:a.map(y=>{const v=typeof y[o]=="number"?y[o]:0,A=v/x,M=A*X,F={key:String(c?y[c]:v),value:v,startAngle:b,endAngle:b+M,percentage:A};return b+=M+s,F})}},[a,o,c,s]),W=R.useMemo(()=>({cx:m,cy:g,radius:p,innerRadius:i,data:a,mode:S,...D,...$}),[m,g,p,i,a,S,D,$]);return e.jsx("div",{ref:d,style:{width:"100%"},children:n>0&&e.jsx("svg",{width:n,height:r,children:e.jsx(Z,{value:W,children:l})})})}K.__docgenInfo={description:`Root radial chart container. Computes angular/radial scales and provides
them to children via context.

@example
\`\`\`
// Spider
<XDSRadialChart data={data} axes={['speed', 'handling', 'comfort']} height={400}>
  <XDSRadialGrid rings={5} />
  <XDSRadialArea dataKey="modelA" color={colors[0]} />
  <XDSRadialAxis />
</XDSRadialChart>

// Pie
<XDSRadialChart data={data} valueKey="revenue" labelKey="region" height={400}>
  <XDSRadialSlice />
</XDSRadialChart>

// Donut
<XDSRadialChart data={data} valueKey="revenue" labelKey="region" innerRadius={0.6} height={400}>
  <XDSRadialSlice />
</XDSRadialChart>
\`\`\``,methods:[],displayName:"XDSRadialChart",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"}],raw:"Record<string, unknown>[]"},description:"The dataset"},height:{required:!1,tsType:{name:"number"},description:"Chart height in pixels. Width is responsive.",defaultValue:{value:"400",computed:!1}},axes:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:`Spider mode: array of axis keys (each key is a dimension).
When provided, the chart operates in spider mode.`},valueKey:{required:!1,tsType:{name:"string"},description:`Pie/donut mode: data key containing the numeric value for each slice.
When provided (without axes), the chart operates in pie mode.`},labelKey:{required:!1,tsType:{name:"string"},description:"Pie/donut mode: data key for the slice label."},innerRadius:{required:!1,tsType:{name:"number"},description:`Inner radius as a fraction of outer radius (0-1).
0 = full pie/spider, 0.6 = donut. Default: 0.`,defaultValue:{value:"0",computed:!1}},padAngle:{required:!1,tsType:{name:"number"},description:"Padding between pie slices in radians. Default: 0.02.",defaultValue:{value:"0.02",computed:!1}},interactive:{required:!1,tsType:{name:"boolean"},description:"Enable touch interaction mode — blocks scroll on mobile."},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};function H({rings:a=5}){const{cx:r,cy:t,radius:o,innerRadius:c,axes:u,angleByAxis:s,radiusScale:l}=V();return!u||!s||!l?null:e.jsxs("g",{children:[Array.from({length:a},(d,n)=>{const f=(n+1)/a,h=l(f),m=u.map(g=>{const p=s.get(g);return p==null?"":`${r+Math.cos(p)*h},${t+Math.sin(p)*h}`}).filter(Boolean).join(" ");return e.jsx("polygon",{points:m,fill:"none",stroke:"var(--color-border)",strokeOpacity:.3,strokeWidth:1},n)}),u.map(d=>{const n=s.get(d);return n==null?null:e.jsx("line",{x1:r+Math.cos(n)*c,y1:t+Math.sin(n)*c,x2:r+Math.cos(n)*o,y2:t+Math.sin(n)*o,stroke:"var(--color-border)",strokeOpacity:.3,strokeWidth:1},d)})]})}H.__docgenInfo={description:"Concentric grid rings and axis lines for spider charts.\n\n@example\n```\n<XDSRadialGrid rings={5} />\n```",methods:[],displayName:"XDSRadialGrid",props:{rings:{required:!1,tsType:{name:"number"},description:"Number of concentric rings (default: 5)",defaultValue:{value:"5",computed:!1}}}};function w({dataKey:a,color:r,opacity:t=.2,strokeWidth:o=2,dots:c=!1,dotRadius:u=4}){const{cx:s,cy:l,data:d,axes:n,angleByAxis:f,radiusScale:h,axisDomains:m}=V(),g=R.useMemo(()=>{if(!n||!f||!h||!m)return[];const i=d.find(S=>Object.values(S).some(D=>D===a))??d[0];return i?n.map(S=>{const D=f.get(S),$=m.get(S);if(D==null||!$)return{x:s,y:l,key:S};const W=typeof i[S]=="number"?i[S]:0,[x,C]=$,X=C>x?(W-x)/(C-x):0,b=h(Math.max(0,Math.min(1,X)));return{x:s+Math.cos(D)*b,y:l+Math.sin(D)*b,key:S}}):[]},[s,l,d,a,n,f,h,m]);if(g.length===0)return null;const p=g.map(i=>`${i.x},${i.y}`).join(" ");return e.jsxs("g",{children:[e.jsx("polygon",{points:p,fill:r,fillOpacity:t,stroke:r,strokeWidth:o,strokeLinejoin:"round"}),c&&g.map(i=>e.jsx("circle",{cx:i.x,cy:i.y,r:u,fill:r},i.key))]})}w.__docgenInfo={description:'Spider/radar polygon. Reads axis definitions and scales from radial context.\nEach axis value is normalized to [0,1] within its domain, then mapped to radius.\n\n@example\n```\n<XDSRadialArea dataKey="modelA" color={colors[0]} dots />\n```',methods:[],displayName:"XDSRadialArea",props:{dataKey:{required:!0,tsType:{name:"string"},description:"Key identifying which dataset row to plot (matches a value in data)"},color:{required:!0,tsType:{name:"string"},description:"Fill color"},opacity:{required:!1,tsType:{name:"number"},description:"Fill opacity (default: 0.2)",defaultValue:{value:"0.2",computed:!1}},strokeWidth:{required:!1,tsType:{name:"number"},description:"Stroke width (default: 2)",defaultValue:{value:"2",computed:!1}},dots:{required:!1,tsType:{name:"boolean"},description:"Show dots at vertices",defaultValue:{value:"false",computed:!1}},dotRadius:{required:!1,tsType:{name:"number"},description:"Dot radius",defaultValue:{value:"4",computed:!1}}}};function N({labelOffset:a=16}){const{cx:r,cy:t,radius:o,axes:c,angleByAxis:u}=V();return!c||!u?null:e.jsx("g",{children:c.map(s=>{const l=u.get(s);if(l==null)return null;const d=r+Math.cos(l)*(o+a),n=t+Math.sin(l)*(o+a),f=Math.cos(l)>.1,h=Math.cos(l)<-.1,m=f?"start":h?"end":"middle";return e.jsx("text",{x:d,y:n,textAnchor:m,dominantBaseline:"central",fill:"var(--color-text-secondary)",fontSize:12,children:s},s)})})}N.__docgenInfo={description:"Axis labels positioned at each spider chart vertex.\n\n@example\n```\n<XDSRadialAxis />\n```",methods:[],displayName:"XDSRadialAxis",props:{labelOffset:{required:!1,tsType:{name:"number"},description:"Label offset from the outer ring in pixels (default: 16)",defaultValue:{value:"16",computed:!1}}}};function U(a,r,t,o,c,u){const s=a+Math.cos(c)*o,l=r+Math.sin(c)*o,d=a+Math.cos(u)*o,n=r+Math.sin(u)*o,f=a+Math.cos(u)*t,h=r+Math.sin(u)*t,m=a+Math.cos(c)*t,g=r+Math.sin(c)*t,i=u-c>Math.PI?1:0;return t===0?[`M ${a} ${r}`,`L ${s} ${l}`,`A ${o} ${o} 0 ${i} 1 ${d} ${n}`,"Z"].join(" "):[`M ${s} ${l}`,`A ${o} ${o} 0 ${i} 1 ${d} ${n}`,`L ${f} ${h}`,`A ${t} ${t} 0 ${i} 0 ${m} ${g}`,"Z"].join(" ")}function G({colors:a,cornerRadius:r=0,labels:t=!0,labelThreshold:o=5}){const{cx:c,cy:u,radius:s,innerRadius:l,slices:d}=V();return!d||d.length===0?null:e.jsx("g",{children:d.map((n,f)=>{const h=a[f%a.length],m=U(c,u,l,s,n.startAngle,n.endAngle),g=(n.startAngle+n.endAngle)/2,p=l+(s-l)*.6,i=c+Math.cos(g)*p,S=u+Math.sin(g)*p,D=t&&n.percentage*100>=o;return e.jsxs("g",{children:[e.jsx("path",{d:m,fill:h,stroke:"var(--color-background-surface)",strokeWidth:r>0?0:1}),D&&e.jsxs("text",{x:i,y:S,textAnchor:"middle",dominantBaseline:"central",fill:"var(--color-text-primary)",fontSize:12,fontWeight:500,children:[Math.round(n.percentage*100),"%"]})]},n.key)})})}G.__docgenInfo={description:"Pie/donut slices. Reads slice geometry from radial context.\n\n@example\n```\n<XDSRadialSlice colors={colors.categorical(5)} />\n```",methods:[],displayName:"XDSRadialSlice",props:{colors:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:`Colors for each slice. Array of hex strings.
Use useXDSChartColors().categorical(n).`},cornerRadius:{required:!1,tsType:{name:"number"},description:"Corner radius on slice edges (default: 2)",defaultValue:{value:"0",computed:!1}},labels:{required:!1,tsType:{name:"boolean"},description:"Show percentage labels (default: true)",defaultValue:{value:"true",computed:!1}},labelThreshold:{required:!1,tsType:{name:"number"},description:"Minimum percentage to show a label (default: 5)",defaultValue:{value:"5",computed:!1}}}};const ne={title:"Lab/RadialChart",tags:["autodocs"]},z=[{model:"Model A",speed:85,handling:70,comfort:90,safety:95,efficiency:60},{model:"Model B",speed:70,handling:95,comfort:60,safety:80,efficiency:85},{model:"Model C",speed:95,handling:60,comfort:75,safety:70,efficiency:90}],k={render:()=>{const r=L().categorical(3);return e.jsxs(B,{direction:"vertical",gap:4,children:[e.jsx(_,{level:3,children:"Spider Chart"}),e.jsxs(K,{data:z,axes:["speed","handling","comfort","safety","efficiency"],height:400,children:[e.jsx(H,{rings:5}),e.jsx(w,{dataKey:"Model A",color:r[0],dots:!0}),e.jsx(w,{dataKey:"Model B",color:r[1],dots:!0}),e.jsx(w,{dataKey:"Model C",color:r[2],dots:!0}),e.jsx(N,{}),e.jsx(E,{items:[{label:"Model A",color:r[0]},{label:"Model B",color:r[1]},{label:"Model C",color:r[2]}]})]})]})}},I=[{region:"North America",revenue:42},{region:"Europe",revenue:28},{region:"Asia Pacific",revenue:18},{region:"Latin America",revenue:8},{region:"Africa",revenue:4}],T={render:()=>{const a=L();return e.jsxs(B,{direction:"vertical",gap:4,children:[e.jsx(_,{level:3,children:"Pie Chart"}),e.jsxs(K,{data:I,valueKey:"revenue",labelKey:"region",height:400,children:[e.jsx(G,{colors:a.categorical(5)}),e.jsx(E,{items:I.map((r,t)=>({label:r.region,color:a.categorical(5)[t]}))})]})]})}},P={render:()=>{const a=L();return e.jsxs(B,{direction:"vertical",gap:4,children:[e.jsx(_,{level:3,children:"Donut Chart"}),e.jsxs(K,{data:I,valueKey:"revenue",labelKey:"region",innerRadius:.55,height:400,children:[e.jsx(G,{colors:a.categorical(5)}),e.jsx(E,{items:I.map((r,t)=>({label:r.region,color:a.categorical(5)[t]}))})]})]})}},q={render:()=>{const r=L().categorical(2);return e.jsxs(B,{direction:"vertical",gap:4,children:[e.jsx(_,{level:3,children:"Spider with Inner Radius"}),e.jsxs(K,{data:z,axes:["speed","handling","comfort","safety","efficiency"],innerRadius:.2,height:400,children:[e.jsx(H,{rings:4}),e.jsx(w,{dataKey:"Model A",color:r[0],dots:!0}),e.jsx(w,{dataKey:"Model B",color:r[1],dots:!0}),e.jsx(N,{})]})]})}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const colors = useXDSChartColors();
    const c = colors.categorical(3);
    return <XDSStack direction="vertical" gap={4}>
        <XDSHeading level={3}>Spider Chart</XDSHeading>
        <XDSRadialChart data={spiderData} axes={['speed', 'handling', 'comfort', 'safety', 'efficiency']} height={400}>
          <XDSRadialGrid rings={5} />
          <XDSRadialArea dataKey="Model A" color={c[0]} dots />
          <XDSRadialArea dataKey="Model B" color={c[1]} dots />
          <XDSRadialArea dataKey="Model C" color={c[2]} dots />
          <XDSRadialAxis />
          <XDSChartLegend items={[{
          label: 'Model A',
          color: c[0]
        }, {
          label: 'Model B',
          color: c[1]
        }, {
          label: 'Model C',
          color: c[2]
        }]} />
        </XDSRadialChart>
      </XDSStack>;
  }
}`,...k.parameters?.docs?.source},description:{story:"Spider/radar chart comparing three models across five dimensions",...k.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    const colors = useXDSChartColors();
    return <XDSStack direction="vertical" gap={4}>
        <XDSHeading level={3}>Pie Chart</XDSHeading>
        <XDSRadialChart data={pieData} valueKey="revenue" labelKey="region" height={400}>
          <XDSRadialSlice colors={colors.categorical(5)} />
          <XDSChartLegend items={pieData.map((d, i) => ({
          label: d.region,
          color: colors.categorical(5)[i]
        }))} />
        </XDSRadialChart>
      </XDSStack>;
  }
}`,...T.parameters?.docs?.source},description:{story:"Pie chart — revenue by region",...T.parameters?.docs?.description}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => {
    const colors = useXDSChartColors();
    return <XDSStack direction="vertical" gap={4}>
        <XDSHeading level={3}>Donut Chart</XDSHeading>
        <XDSRadialChart data={pieData} valueKey="revenue" labelKey="region" innerRadius={0.55} height={400}>
          <XDSRadialSlice colors={colors.categorical(5)} />
          <XDSChartLegend items={pieData.map((d, i) => ({
          label: d.region,
          color: colors.categorical(5)[i]
        }))} />
        </XDSRadialChart>
      </XDSStack>;
  }
}`,...P.parameters?.docs?.source},description:{story:"Donut chart — same data with inner radius",...P.parameters?.docs?.description}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => {
    const colors = useXDSChartColors();
    const c = colors.categorical(2);
    return <XDSStack direction="vertical" gap={4}>
        <XDSHeading level={3}>Spider with Inner Radius</XDSHeading>
        <XDSRadialChart data={spiderData} axes={['speed', 'handling', 'comfort', 'safety', 'efficiency']} innerRadius={0.2} height={400}>
          <XDSRadialGrid rings={4} />
          <XDSRadialArea dataKey="Model A" color={c[0]} dots />
          <XDSRadialArea dataKey="Model B" color={c[1]} dots />
          <XDSRadialAxis />
        </XDSRadialChart>
      </XDSStack>;
  }
}`,...q.parameters?.docs?.source},description:{story:"Spider with donut center",...q.parameters?.docs?.description}}};const oe=["SpiderChart","PieChart","DonutChart","SpiderDonut"];export{P as DonutChart,T as PieChart,k as SpiderChart,q as SpiderDonut,oe as __namedExportsOrder,ne as default};
