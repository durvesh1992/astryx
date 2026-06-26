import{at as i,ad as e,r as w}from"./iframe-yRFQ_7VC.js";import{X as K}from"./XDSStack-CFJ7xIVk.js";import{u as Y}from"./useDataset-B-cOmpQT.js";import{u as T}from"./useXDSChartColors-DP0GcV3K.js";import{X as _}from"./XDSHeading---Kr4LhL.js";import{X as B,a as X}from"./XDSChartAxis-AXPU4QOc.js";import{X as z}from"./XDSChartGrid-BGENEt5h.js";import{X as W}from"./XDSChartDot-CnercKbk.js";import{X as ee,a as re}from"./XDSChartReferenceLine-D72NMxf0.js";import{X as se}from"./XDSChartBar-KLFM76_T.js";import{X as oe}from"./XDSChartLine-CiFqkSw6.js";import{u as ae,i as H,x as ne}from"./ChartContext-DZbKxN5B.js";import{X as pe}from"./XDSChartTooltip-CTG93094.js";import{r as de}from"./index-D8Xh4Tce.js";import{X as O}from"./XDSIconButton-qQNkmkAZ.js";import"./preload-helper-Ct5FWWRu.js";import"./stack.stylex-5XIQDawT.js";import"./linear-gs3faI6G.js";import"./monotone-BKrwi6Sb.js";import"./array-2GBN5xbU.js";import"./index-CXyWrEU_.js";function me(){return e.jsx("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",children:e.jsx("path",{d:"M8 3v10M3 8h10"})})}function he(){return e.jsx("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",children:e.jsx("path",{d:"M3 8h10"})})}function xe(){return e.jsx("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"M2 8a6 6 0 1 1 1.5 4M2 12V8h4"})})}function ie({onXDomainChange:n,onYDomainChange:o,zoomSpeed:s=.1,xOnly:r=!1,yOnly:u=!1,toolbar:h="top-right"}){const{width:j,height:y,xScale:c,yScale:D,svgRef:L}=ae(),G=i.useRef(null);i.useEffect(()=>{if(G.current)return;const t=H(c)?null:c.domain(),a=D.domain();G.current={x:t,y:a}},[c,D]);const p=i.useRef(null),x=i.useRef(new Map),C=i.useRef(null),b=i.useCallback(()=>H(c)?[0,0]:c.domain(),[c]),g=i.useCallback((t,a,S)=>{const[d,m]=t,l=m-d,f=(S-d)/l,v=l*a;return[S-v*f,S+v*(1-f)]},[]),M=i.useCallback((t,a,S)=>{if(!u&&!H(c)){const d=c,[m,l]=d.domain(),f=a!=null?d.invert(a):(m+l)/2;n?.(g([m,l],t,f))}if(!r){const[d,m]=D.domain(),l=S!=null?D.invert(S):(d+m)/2;o?.(g([d,m],t,l))}},[c,D,n,o,r,u,g]),k=i.useCallback(t=>{t.preventDefault();const a=t.currentTarget.ownerSVGElement;if(!a)return;const S=a.createSVGPoint();S.x=t.clientX,S.y=t.clientY;const d=S.matrixTransform(t.currentTarget.getScreenCTM()?.inverse()),l=1+Math.sign(t.deltaY)*Math.min(Math.abs(t.deltaY),50)/50*s;if(!u&&!H(c)){const f=c,[v,Q]=f.domain(),ue=f.invert(d.x);n?.(g([v,Q],l,ue))}if(!r){const[f,v]=D.domain(),Q=D.invert(d.y);o?.(g([f,v],l,Q))}},[s,c,D,n,o,r,u,g]),N=i.useCallback(t=>{if(t.target.setPointerCapture(t.pointerId),t.preventDefault(),x.current.set(t.pointerId,{x:t.clientX,y:t.clientY}),x.current.size===2){const a=[...x.current.values()],S=Math.hypot(a[1].x-a[0].x,a[1].y-a[0].y);C.current={dist:S,xDomain:b(),yDomain:D.domain()},p.current=null}else x.current.size===1&&(p.current={startX:t.clientX,startY:t.clientY,xDomain:b(),yDomain:D.domain()})},[b,D]),J=i.useCallback(t=>{if(x.current.set(t.pointerId,{x:t.clientX,y:t.clientY}),x.current.size===2&&C.current){const a=[...x.current.values()],S=Math.hypot(a[1].x-a[0].x,a[1].y-a[0].y),d=C.current.dist/S;if(!u&&!H(c)){const[m,l]=C.current.xDomain,f=(m+l)/2,v=(l-m)/2*d;n?.([f-v,f+v])}if(!r){const[m,l]=C.current.yDomain,f=(m+l)/2,v=(l-m)/2*d;o?.([f-v,f+v])}}else if(p.current){const a=t.clientX-p.current.startX,S=t.clientY-p.current.startY;if(!u&&!H(c)){const[d,m]=p.current.xDomain,l=-(a/j)*(m-d);n?.([d+l,m+l])}if(!r){const[d,m]=p.current.yDomain,l=S/y*(m-d);o?.([d+l,m+l])}}},[c,j,y,n,o,r,u]),R=i.useCallback(t=>{x.current.delete(t.pointerId),x.current.size<2&&(C.current=null),x.current.size===0&&(p.current=null)},[]),U=i.useCallback(()=>{const t=G.current;t&&(t.x&&n?.(t.x),o?.(t.y))},[n,o]),P=L.current?.parentElement,F=t=>{const a={position:"absolute",display:"flex",flexDirection:"column",gap:4,zIndex:1};switch(t){case"top-right":return{...a,top:8,right:8};case"top-left":return{...a,top:8,left:8};case"bottom-right":return{...a,bottom:8,right:8};case"bottom-left":return{...a,bottom:8,left:8}}},ce={cursor:"grab",touchAction:"none",userSelect:"none"};return e.jsxs(e.Fragment,{children:[e.jsx("g",{children:e.jsx("rect",{x:0,y:0,width:j,height:y,fill:"transparent",style:ce,onWheel:k,onPointerDown:N,onPointerMove:J,onPointerUp:R,onPointerCancel:R})}),h&&P&&de.createPortal(e.jsxs("div",{style:F(h),children:[e.jsx(O,{label:"Zoom in",icon:e.jsx(me,{}),variant:"ghost",size:"sm",onClick:()=>M(1/(1+s))}),e.jsx(O,{label:"Zoom out",icon:e.jsx(he,{}),variant:"ghost",size:"sm",onClick:()=>M(1+s)}),e.jsx(O,{label:"Reset zoom",icon:e.jsx(xe,{}),variant:"ghost",size:"sm",onClick:U})]}),P)]})}ie.__docgenInfo={description:"",methods:[],displayName:"XDSChartZoom",props:{onXDomainChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(domain: [number, number]) => void",signature:{arguments:[{type:{name:"tuple",raw:"[number, number]",elements:[{name:"number"},{name:"number"}]},name:"domain"}],return:{name:"void"}}},description:""},onYDomainChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(domain: [number, number]) => void",signature:{arguments:[{type:{name:"tuple",raw:"[number, number]",elements:[{name:"number"},{name:"number"}]},name:"domain"}],return:{name:"void"}}},description:""},zoomSpeed:{required:!1,tsType:{name:"number"},description:`Zoom speed factor per scroll tick. Higher = faster zoom.
@default 0.1`,defaultValue:{value:"0.1",computed:!1}},xOnly:{required:!1,tsType:{name:"boolean"},description:"Only zoom/pan the x-axis",defaultValue:{value:"false",computed:!1}},yOnly:{required:!1,tsType:{name:"boolean"},description:"Only zoom/pan the y-axis",defaultValue:{value:"false",computed:!1}},toolbar:{required:!1,tsType:{name:"union",raw:"false | ZoomToolbarPosition",elements:[{name:"literal",value:"false"},{name:"union",raw:`| 'top-right'
| 'top-left'
| 'bottom-right'
| 'bottom-left'`,elements:[{name:"literal",value:"'top-right'"},{name:"literal",value:"'top-left'"},{name:"literal",value:"'bottom-right'"},{name:"literal",value:"'bottom-left'"}]}]},description:"Show the zoom/pan toolbar.\nPass `false` to hide, or a position string to show at that corner.\n@default 'top-right'",defaultValue:{value:"'top-right'",computed:!1}}}};function le({onSelect:n,onSelectionChange:o,selected:s=[],color:r="var(--color-accent)",radius:u=6}){const{width:h,height:j,data:y,xKey:c,xScale:D,yScale:L}=ae(),G=i.useCallback(p=>{const x=p.currentTarget.ownerSVGElement;if(!x)return;const C=x.createSVGPoint();C.x=p.clientX,C.y=p.clientY;const b=C.matrixTransform(p.currentTarget.getScreenCTM()?.inverse());let g=0,M=1/0;y.forEach((k,N)=>{const J=ne(k,c,D),R=Object.keys(k).filter(F=>F!==c&&typeof k[F]=="number"),U=R.length>0?L(k[R[0]]):0,P=Math.hypot(J-b.x,U-b.y);P<M&&(M=P,g=N)}),!(M>30)&&(n?.(y[g],g),o&&(p.shiftKey||p.metaKey?o(s.includes(g)?s.filter(k=>k!==g):[...s,g]):o([g])))},[y,c,D,L,s,n,o]);return e.jsxs("g",{children:[e.jsx("rect",{x:0,y:0,width:h,height:j,fill:"transparent",style:{cursor:"pointer"},onPointerUp:G}),s.map(p=>{if(p<0||p>=y.length)return null;const x=y[p],C=ne(x,c,D),b=Object.keys(x).find(M=>M!==c&&typeof x[M]=="number"),g=b?L(x[b]):0;return e.jsx("circle",{cx:C,cy:g,r:u,fill:"none",stroke:r,strokeWidth:2,pointerEvents:"none"},p)})]})}le.__docgenInfo={description:"",methods:[],displayName:"XDSChartSelect",props:{onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(datum: Record<string, unknown>, index: number) => void",signature:{arguments:[{type:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"},name:"datum"},{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},onSelectionChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(indices: number[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"number"}],raw:"number[]"},name:"indices"}],return:{name:"void"}}},description:""},selected:{required:!1,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:"",defaultValue:{value:"[]",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'var(--color-accent)'",computed:!1}},radius:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"6",computed:!1}}}};const Re={title:"Lab/Chart Interactions",tags:["autodocs"]},te=[{month:"Jan",revenue:4200,expenses:2800},{month:"Feb",revenue:3800,expenses:2600},{month:"Mar",revenue:5100,expenses:3200},{month:"Apr",revenue:4600,expenses:2900},{month:"May",revenue:5400,expenses:3100},{month:"Jun",revenue:6200,expenses:3400},{month:"Jul",revenue:5800,expenses:3300},{month:"Aug",revenue:5500,expenses:3e3},{month:"Sep",revenue:4900,expenses:2700},{month:"Oct",revenue:5200,expenses:3100},{month:"Nov",revenue:5700,expenses:3200},{month:"Dec",revenue:6800,expenses:3600}],A={render:()=>{const n=T(),[o,s]=i.useState(null);return e.jsxs(K,{direction:"vertical",gap:4,children:[e.jsx(_,{level:3,children:"1D Brush — Bar Chart"}),e.jsxs(w,{type:"supporting",color:"secondary",children:["Drag to select a range. ",o??"Click to clear."]}),e.jsxs(B,{data:te,xKey:"month",yKeys:["revenue"],height:300,children:[e.jsx(z,{horizontal:!0}),e.jsx(X,{position:"bottom"}),e.jsx(X,{position:"left"}),e.jsx(se,{dataKey:"revenue",color:n.categorical(1)[0]}),e.jsx(ee,{onBrush:(r,u)=>s(`${u.length} months selected`),onClear:()=>s(null)})]})]})}},I={render:()=>{const n=T(),[o,s]=i.useState(null);return e.jsxs(K,{direction:"vertical",gap:4,children:[e.jsx(_,{level:3,children:"1D Brush — Line Chart"}),e.jsxs(w,{type:"supporting",color:"secondary",children:["Drag to select a range. ",o??"Click to clear."]}),e.jsxs(B,{data:te,xKey:"month",yKeys:["revenue","expenses"],height:300,children:[e.jsx(z,{horizontal:!0}),e.jsx(X,{position:"bottom"}),e.jsx(X,{position:"left"}),e.jsx(oe,{dataKey:"revenue",color:n.categorical(2)[0],dots:!0}),e.jsx(oe,{dataKey:"expenses",color:n.categorical(2)[1],dots:!0}),e.jsx(ee,{onBrush:(r,u)=>s(`${u.length} months selected`),onClear:()=>s(null)})]})]})}},Z={render:()=>{const n=T(),[o]=Y("cars.json"),[s,r]=i.useState(null),u=i.useMemo(()=>o.filter(h=>h.Horsepower!=null&&h.Miles_per_Gallon!=null).map(h=>({hp:h.Horsepower,mpg:h.Miles_per_Gallon})),[o]);return u.length?e.jsxs(K,{direction:"vertical",gap:4,children:[e.jsx(_,{level:3,children:"2D Brush — Scatter Plot"}),e.jsxs(w,{type:"supporting",color:"secondary",children:["Drag a rectangle to select."," ",s!=null?`${s} points selected.`:"Click to clear."]}),e.jsxs(B,{data:u,xKey:"hp",yKeys:["mpg"],yBaseline:"data",height:350,children:[e.jsx(z,{horizontal:!0,vertical:!0}),e.jsx(X,{position:"bottom"}),e.jsx(X,{position:"left"}),e.jsx(W,{dataKey:"mpg",color:n.categorical(1)[0],radius:3}),e.jsx(ee,{mode:"xy",onBrush:(h,j)=>r(j.length),onClear:()=>r(null)})]})]}):e.jsx(w,{type:"supporting",children:"Loading…"})}},V={render:()=>{const n=T(),[o]=Y("cars.json"),s=i.useMemo(()=>o.filter(r=>r.Horsepower!=null&&r.Miles_per_Gallon!=null).map(r=>({hp:r.Horsepower,mpg:r.Miles_per_Gallon})),[o]);return s.length?e.jsxs(K,{direction:"vertical",gap:4,children:[e.jsx(_,{level:3,children:"Crosshair"}),e.jsxs(B,{data:s,xKey:"hp",yKeys:["mpg"],yBaseline:"data",height:350,children:[e.jsx(z,{horizontal:!0,vertical:!0}),e.jsx(X,{position:"bottom"}),e.jsx(X,{position:"left"}),e.jsx(W,{dataKey:"mpg",color:n.categorical(1)[0],radius:3}),e.jsx(pe,{crosshair:"xy",crosshairLabels:!0,xFormat:r=>`${Math.round(Number(r))} hp`,yFormat:r=>`${Math.round(r)} mpg`})]})]}):e.jsx(w,{type:"supporting",children:"Loading…"})}},q={render:()=>{const n=T(),[o]=Y("cars.json"),s=i.useMemo(()=>o.filter(y=>y.Horsepower!=null&&y.Miles_per_Gallon!=null).map(y=>({hp:y.Horsepower,mpg:y.Miles_per_Gallon})),[o]),[r,u]=i.useState([40,230]),[h,j]=i.useState([8,47]);return s.length?e.jsxs(K,{direction:"vertical",gap:4,children:[e.jsx(_,{level:3,children:"Zoom & Pan"}),e.jsxs(w,{type:"supporting",color:"secondary",children:["Scroll to zoom, drag to pan. x: [",Math.round(r[0]),","," ",Math.round(r[1]),"]"]}),e.jsxs(B,{data:s,xKey:"hp",yKeys:["mpg"],xDomain:r,yDomain:h,height:350,children:[e.jsx(z,{horizontal:!0,vertical:!0}),e.jsx(X,{position:"bottom"}),e.jsx(X,{position:"left"}),e.jsx(W,{dataKey:"mpg",color:n.categorical(1)[0],radius:3}),e.jsx(ie,{onXDomainChange:u,onYDomainChange:j})]})]}):e.jsx(w,{type:"supporting",children:"Loading…"})}},E={render:()=>{const n=T(),[o]=Y("cars.json"),s=i.useMemo(()=>o.filter(h=>h.Horsepower!=null&&h.Miles_per_Gallon!=null).map(h=>({hp:h.Horsepower,mpg:h.Miles_per_Gallon})),[o]),[r,u]=i.useState([]);return s.length?e.jsxs(K,{direction:"vertical",gap:4,children:[e.jsx(_,{level:3,children:"Click to Select"}),e.jsxs(w,{type:"supporting",color:"secondary",children:["Click a point. Shift-click for multi. ",r.length," selected."]}),e.jsxs(B,{data:s,xKey:"hp",yKeys:["mpg"],yBaseline:"data",height:350,children:[e.jsx(z,{horizontal:!0,vertical:!0}),e.jsx(X,{position:"bottom"}),e.jsx(X,{position:"left"}),e.jsx(W,{dataKey:"mpg",color:n.categorical(1)[0],radius:3}),e.jsx(le,{selected:r,onSelectionChange:u})]})]}):e.jsx(w,{type:"supporting",children:"Loading…"})}},$={render:()=>{const n=T();return e.jsxs(K,{direction:"vertical",gap:4,children:[e.jsx(_,{level:3,children:"Reference Lines"}),e.jsxs(B,{data:te,xKey:"month",yKeys:["revenue"],height:300,children:[e.jsx(z,{horizontal:!0}),e.jsx(X,{position:"bottom"}),e.jsx(X,{position:"left"}),e.jsx(se,{dataKey:"revenue",color:n.categorical(1)[0]}),e.jsx(re,{y:5e3,label:"Target",color:n.semantic.positive}),e.jsx(re,{y:4700,label:"Average",color:n.semantic.neutral})]})]})}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => {
    const colors = useXDSChartColors();
    const [selected, setSelected] = useState<string | null>(null);
    return <XDSStack direction="vertical" gap={4}>
        <XDSHeading level={3}>1D Brush — Bar Chart</XDSHeading>
        <XDSText type="supporting" color="secondary">
          Drag to select a range. {selected ?? 'Click to clear.'}
        </XDSText>
        <XDSChart data={monthlyData} xKey="month" yKeys={['revenue']} height={300}>
          <XDSChartGrid horizontal />
          <XDSChartAxis position="bottom" />
          <XDSChartAxis position="left" />
          <XDSChartBar dataKey="revenue" color={colors.categorical(1)[0]} />
          <XDSChartBrush onBrush={(_, sel) => setSelected(\`\${sel.length} months selected\`)} onClear={() => setSelected(null)} />
        </XDSChart>
      </XDSStack>;
  }
}`,...A.parameters?.docs?.source},description:{story:"1D brush on a bar chart — select a range of months",...A.parameters?.docs?.description}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => {
    const colors = useXDSChartColors();
    const [selected, setSelected] = useState<string | null>(null);
    return <XDSStack direction="vertical" gap={4}>
        <XDSHeading level={3}>1D Brush — Line Chart</XDSHeading>
        <XDSText type="supporting" color="secondary">
          Drag to select a range. {selected ?? 'Click to clear.'}
        </XDSText>
        <XDSChart data={monthlyData} xKey="month" yKeys={['revenue', 'expenses']} height={300}>
          <XDSChartGrid horizontal />
          <XDSChartAxis position="bottom" />
          <XDSChartAxis position="left" />
          <XDSChartLine dataKey="revenue" color={colors.categorical(2)[0]} dots />
          <XDSChartLine dataKey="expenses" color={colors.categorical(2)[1]} dots />
          <XDSChartBrush onBrush={(_, sel) => setSelected(\`\${sel.length} months selected\`)} onClear={() => setSelected(null)} />
        </XDSChart>
      </XDSStack>;
  }
}`,...I.parameters?.docs?.source},description:{story:"1D brush on a line chart — select a time range",...I.parameters?.docs?.description}}};Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const colors = useXDSChartColors();
    const [raw] = useDataset<Car>('cars.json');
    const [count, setCount] = useState<number | null>(null);
    const data = useMemo(() => raw.filter(d => d.Horsepower != null && d.Miles_per_Gallon != null).map(d => ({
      hp: d.Horsepower,
      mpg: d.Miles_per_Gallon
    })), [raw]);
    if (!data.length) {
      return <XDSText type="supporting">Loading…</XDSText>;
    }
    return <XDSStack direction="vertical" gap={4}>
        <XDSHeading level={3}>2D Brush — Scatter Plot</XDSHeading>
        <XDSText type="supporting" color="secondary">
          Drag a rectangle to select.{' '}
          {count != null ? \`\${count} points selected.\` : 'Click to clear.'}
        </XDSText>
        <XDSChart data={data} xKey="hp" yKeys={['mpg']} yBaseline="data" height={350}>
          <XDSChartGrid horizontal vertical />
          <XDSChartAxis position="bottom" />
          <XDSChartAxis position="left" />
          <XDSChartDot dataKey="mpg" color={colors.categorical(1)[0]} radius={3} />
          <XDSChartBrush mode="xy" onBrush={(_, sel) => setCount(sel.length)} onClear={() => setCount(null)} />
        </XDSChart>
      </XDSStack>;
  }
}`,...Z.parameters?.docs?.source},description:{story:"2D rectangular brush on a scatter plot",...Z.parameters?.docs?.description}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => {
    const colors = useXDSChartColors();
    const [raw] = useDataset<Car>('cars.json');
    const data = useMemo(() => raw.filter(d => d.Horsepower != null && d.Miles_per_Gallon != null).map(d => ({
      hp: d.Horsepower,
      mpg: d.Miles_per_Gallon
    })), [raw]);
    if (!data.length) {
      return <XDSText type="supporting">Loading…</XDSText>;
    }
    return <XDSStack direction="vertical" gap={4}>
        <XDSHeading level={3}>Crosshair</XDSHeading>
        <XDSChart data={data} xKey="hp" yKeys={['mpg']} yBaseline="data" height={350}>
          <XDSChartGrid horizontal vertical />
          <XDSChartAxis position="bottom" />
          <XDSChartAxis position="left" />
          <XDSChartDot dataKey="mpg" color={colors.categorical(1)[0]} radius={3} />
          <XDSChartTooltip crosshair="xy" crosshairLabels xFormat={v => \`\${Math.round(Number(v))} hp\`} yFormat={v => \`\${Math.round(v)} mpg\`} />
        </XDSChart>
      </XDSStack>;
  }
}`,...V.parameters?.docs?.source},description:{story:"Crosshair with value readouts",...V.parameters?.docs?.description}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => {
    const colors = useXDSChartColors();
    const [raw] = useDataset<Car>('cars.json');
    const data = useMemo(() => raw.filter(d => d.Horsepower != null && d.Miles_per_Gallon != null).map(d => ({
      hp: d.Horsepower,
      mpg: d.Miles_per_Gallon
    })), [raw]);
    const [xDomain, setXDomain] = useState<[number, number]>([40, 230]);
    const [yDomain, setYDomain] = useState<[number, number]>([8, 47]);
    if (!data.length) {
      return <XDSText type="supporting">Loading…</XDSText>;
    }
    return <XDSStack direction="vertical" gap={4}>
        <XDSHeading level={3}>Zoom & Pan</XDSHeading>
        <XDSText type="supporting" color="secondary">
          Scroll to zoom, drag to pan. x: [{Math.round(xDomain[0])},{' '}
          {Math.round(xDomain[1])}]
        </XDSText>
        <XDSChart data={data} xKey="hp" yKeys={['mpg']} xDomain={xDomain} yDomain={yDomain} height={350}>
          <XDSChartGrid horizontal vertical />
          <XDSChartAxis position="bottom" />
          <XDSChartAxis position="left" />
          <XDSChartDot dataKey="mpg" color={colors.categorical(1)[0]} radius={3} />
          <XDSChartZoom onXDomainChange={setXDomain} onYDomainChange={setYDomain} />
        </XDSChart>
      </XDSStack>;
  }
}`,...q.parameters?.docs?.source},description:{story:"Scroll to zoom, drag to pan",...q.parameters?.docs?.description}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => {
    const colors = useXDSChartColors();
    const [raw] = useDataset<Car>('cars.json');
    const data = useMemo(() => raw.filter(d => d.Horsepower != null && d.Miles_per_Gallon != null).map(d => ({
      hp: d.Horsepower,
      mpg: d.Miles_per_Gallon
    })), [raw]);
    const [selected, setSelected] = useState<number[]>([]);
    if (!data.length) {
      return <XDSText type="supporting">Loading…</XDSText>;
    }
    return <XDSStack direction="vertical" gap={4}>
        <XDSHeading level={3}>Click to Select</XDSHeading>
        <XDSText type="supporting" color="secondary">
          Click a point. Shift-click for multi. {selected.length} selected.
        </XDSText>
        <XDSChart data={data} xKey="hp" yKeys={['mpg']} yBaseline="data" height={350}>
          <XDSChartGrid horizontal vertical />
          <XDSChartAxis position="bottom" />
          <XDSChartAxis position="left" />
          <XDSChartDot dataKey="mpg" color={colors.categorical(1)[0]} radius={3} />
          <XDSChartSelect selected={selected} onSelectionChange={setSelected} />
        </XDSChart>
      </XDSStack>;
  }
}`,...E.parameters?.docs?.source},description:{story:"Click to select points",...E.parameters?.docs?.description}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => {
    const colors = useXDSChartColors();
    return <XDSStack direction="vertical" gap={4}>
        <XDSHeading level={3}>Reference Lines</XDSHeading>
        <XDSChart data={monthlyData} xKey="month" yKeys={['revenue']} height={300}>
          <XDSChartGrid horizontal />
          <XDSChartAxis position="bottom" />
          <XDSChartAxis position="left" />
          <XDSChartBar dataKey="revenue" color={colors.categorical(1)[0]} />
          <XDSChartReferenceLine y={5000} label="Target" color={colors.semantic.positive} />
          <XDSChartReferenceLine y={4700} label="Average" color={colors.semantic.neutral} />
        </XDSChart>
      </XDSStack>;
  }
}`,...$.parameters?.docs?.source},description:{story:"Reference lines for target and average",...$.parameters?.docs?.description}}};const Pe=["BrushBars","BrushLine","Brush2D","Crosshair","ZoomPan","ClickSelect","ReferenceLines"];export{Z as Brush2D,A as BrushBars,I as BrushLine,E as ClickSelect,V as Crosshair,$ as ReferenceLines,q as ZoomPan,Pe as __namedExportsOrder,Re as default};
