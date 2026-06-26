import{at as r,ad as e,r as C}from"./iframe-yRFQ_7VC.js";import{X as k}from"./XDSStack-CFJ7xIVk.js";import{u as M}from"./useXDSChartColors-DP0GcV3K.js";import{X as j}from"./XDSHeading---Kr4LhL.js";import{X as v,a as h}from"./XDSChartAxis-AXPU4QOc.js";import{X as w}from"./XDSChartGrid-BGENEt5h.js";import{X as b}from"./XDSChartStreamGL-B1_q6gEx.js";import"./preload-helper-Ct5FWWRu.js";import"./stack.stylex-5XIQDawT.js";import"./ChartContext-DZbKxN5B.js";import"./linear-gs3faI6G.js";import"./webgl-B2CDFegl.js";function K({xWindow:s,yDomain:n,yPadding:t=.1,yCenter:o=!1}){const[c,a]=r.useState([0,0]),[u,i]=r.useState(n??[0,1]),d=r.useRef({yMin:n?n[0]:1/0,yMax:n?n[1]:-1/0}),S=r.useCallback((m,p,F)=>{F?.current?.push(m,p);const A=m>=s?m-s:0,G=m>=s?m:Math.max(m,1);if(a([A,G]),!n){const l=d.current;let R=!1;if(p<l.yMin&&(l.yMin=p,R=!0),p>l.yMax&&(l.yMax=p,R=!0),R){const q=(l.yMax-l.yMin||1)*t;let g=l.yMin-q,X=l.yMax+q;if(o){const z=Math.max(Math.abs(g),Math.abs(X));g=-z,X=z}i([g,X])}}},[s,n,t,o]),x=r.useCallback(()=>{d.current={yMin:n?n[0]:1/0,yMax:n?n[1]:-1/0},a([0,0]),i(n??[0,1])},[n]);return{xDomain:c,yDomain:n??u,push:S,reset:x}}const J={title:"Lab/useXDSChartRange"},f={render:()=>{const s=M(),n=r.useRef(null),t=r.useRef(0),{xDomain:o,yDomain:c,push:a}=K({xWindow:300,yDomain:[0,100]});return r.useEffect(()=>{const u=setInterval(()=>{t.current+=1;const i=Math.sin(t.current*.04)*30+50+(Math.random()-.5)*10;a(t.current,i,n)},33);return()=>clearInterval(u)},[a]),e.jsxs(k,{direction:"vertical",gap:4,children:[e.jsx(j,{level:3,children:"Known Range (0-100%)"}),e.jsx(C,{type:"supporting",color:"secondary",children:"yDomain fixed at [0, 100]. useXDSChartRange manages xDomain sliding window."}),e.jsxs(v,{data:[],xKey:"t",yKeys:[],xDomain:o,yDomain:c,height:200,children:[e.jsx(w,{horizontal:!0}),e.jsx(h,{position:"bottom"}),e.jsx(h,{position:"left"}),e.jsx(b,{handleRef:n,color:s.categorical(1)[0],bufferSize:300,lineWidth:1.5})]})]})}},y={render:()=>{const s=M(),n=r.useRef(null),t=r.useRef(0),{xDomain:o,yDomain:c,push:a}=K({xWindow:300,yPadding:.1});return r.useEffect(()=>{const u=setInterval(()=>{t.current+=1;const i=10+t.current*.05,d=Math.sin(t.current*.03)*i+50;a(t.current,d,n)},33);return()=>clearInterval(u)},[a]),e.jsxs(k,{direction:"vertical",gap:4,children:[e.jsx(j,{level:3,children:"Unknown Range (auto-tracks)"}),e.jsxs(C,{type:"supporting",color:"secondary",children:["No fixed yDomain. Range auto-expands as data reveals amplitude. Currently: [",c[0].toFixed(1),", ",c[1].toFixed(1),"]"]}),e.jsxs(v,{data:[],xKey:"t",yKeys:[],xDomain:o,yDomain:c,height:200,children:[e.jsx(w,{horizontal:!0}),e.jsx(h,{position:"bottom"}),e.jsx(h,{position:"left"}),e.jsx(b,{handleRef:n,color:s.categorical(2)[1],bufferSize:300,lineWidth:1.5})]})]})}},D={render:()=>{const s=M(),n=r.useRef(null),t=r.useRef(0),o=r.useRef(0),{xDomain:c,yDomain:a,push:u}=K({xWindow:600,yCenter:!0,yPadding:.05});return r.useEffect(()=>{let i;const d=()=>{t.current+=1,Math.random()<.003&&(o.current=30+Math.random()*50),o.current*=.97;const S=(Math.random()-.5)*2,x=o.current>.5?Math.sin(t.current*.5)*o.current*(.5+Math.random()*.5):0;u(t.current,S+x,n),i=requestAnimationFrame(d)};return i=requestAnimationFrame(d),()=>cancelAnimationFrame(i)},[u]),e.jsxs(k,{direction:"vertical",gap:4,children:[e.jsx(j,{level:3,children:"Zero-Centered (seismograph)"}),e.jsxs(C,{type:"supporting",color:"secondary",children:["yCenter=true keeps 0 at center. Range auto-expands on quake bursts. Currently: [",a[0].toFixed(1),", ",a[1].toFixed(1),"]"]}),e.jsxs(v,{data:[],xKey:"t",yKeys:[],xDomain:c,yDomain:a,yBaseline:"zero",height:220,children:[e.jsx(w,{horizontal:!0}),e.jsx(h,{position:"bottom"}),e.jsx(h,{position:"left"}),e.jsx(b,{handleRef:n,color:s.categorical(5)[3],bufferSize:600,lineWidth:1,opacity:.9})]})]})}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const colors = useXDSChartColors();
    const streamRef = useRef<XDSChartStreamGLHandle>(null);
    const tRef = useRef(0);
    const {
      xDomain,
      yDomain,
      push
    } = useXDSChartRange({
      xWindow: 300,
      yDomain: [0, 100]
    });
    useEffect(() => {
      const id = setInterval(() => {
        tRef.current += 1;
        const y = Math.sin(tRef.current * 0.04) * 30 + 50 + (Math.random() - 0.5) * 10;
        push(tRef.current, y, streamRef);
      }, 33);
      return () => clearInterval(id);
    }, [push]);
    return <XDSStack direction="vertical" gap={4}>
        <XDSHeading level={3}>Known Range (0-100%)</XDSHeading>
        <XDSText type="supporting" color="secondary">
          yDomain fixed at [0, 100]. useXDSChartRange manages xDomain sliding
          window.
        </XDSText>
        <XDSChart data={[]} xKey="t" yKeys={[]} xDomain={xDomain} yDomain={yDomain} height={200}>
          <XDSChartGrid horizontal />
          <XDSChartAxis position="bottom" />
          <XDSChartAxis position="left" />
          <XDSChartStreamGL handleRef={streamRef} color={colors.categorical(1)[0]} bufferSize={300} lineWidth={1.5} />
        </XDSChart>
      </XDSStack>;
  }
}`,...f.parameters?.docs?.source},description:{story:"Known y-range — useXDSChartRange just manages the sliding x window",...f.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const colors = useXDSChartColors();
    const streamRef = useRef<XDSChartStreamGLHandle>(null);
    const tRef = useRef(0);
    const {
      xDomain,
      yDomain,
      push
    } = useXDSChartRange({
      xWindow: 300,
      yPadding: 0.1
    });
    useEffect(() => {
      const id = setInterval(() => {
        tRef.current += 1;
        // Gradually increasing range to show auto-expansion
        const amplitude = 10 + tRef.current * 0.05;
        const y = Math.sin(tRef.current * 0.03) * amplitude + 50;
        push(tRef.current, y, streamRef);
      }, 33);
      return () => clearInterval(id);
    }, [push]);
    return <XDSStack direction="vertical" gap={4}>
        <XDSHeading level={3}>Unknown Range (auto-tracks)</XDSHeading>
        <XDSText type="supporting" color="secondary">
          No fixed yDomain. Range auto-expands as data reveals amplitude.
          Currently: [{yDomain[0].toFixed(1)}, {yDomain[1].toFixed(1)}]
        </XDSText>
        <XDSChart data={[]} xKey="t" yKeys={[]} xDomain={xDomain} yDomain={yDomain} height={200}>
          <XDSChartGrid horizontal />
          <XDSChartAxis position="bottom" />
          <XDSChartAxis position="left" />
          <XDSChartStreamGL handleRef={streamRef} color={colors.categorical(2)[1]} bufferSize={300} lineWidth={1.5} />
        </XDSChart>
      </XDSStack>;
  }
}`,...y.parameters?.docs?.source},description:{story:"Unknown y-range — auto-tracks from data with 10% padding",...y.parameters?.docs?.description}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => {
    const colors = useXDSChartColors();
    const streamRef = useRef<XDSChartStreamGLHandle>(null);
    const tRef = useRef(0);
    const quakeRef = useRef(0);
    const {
      xDomain,
      yDomain,
      push
    } = useXDSChartRange({
      xWindow: 600,
      yCenter: true,
      yPadding: 0.05
    });
    useEffect(() => {
      let raf: number;
      const tick = () => {
        tRef.current += 1;
        if (Math.random() < 0.003) {
          quakeRef.current = 30 + Math.random() * 50;
        }
        quakeRef.current *= 0.97;
        const tremor = (Math.random() - 0.5) * 2;
        const quake = quakeRef.current > 0.5 ? Math.sin(tRef.current * 0.5) * quakeRef.current * (0.5 + Math.random() * 0.5) : 0;
        push(tRef.current, tremor + quake, streamRef);
        raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(raf);
    }, [push]);
    return <XDSStack direction="vertical" gap={4}>
        <XDSHeading level={3}>Zero-Centered (seismograph)</XDSHeading>
        <XDSText type="supporting" color="secondary">
          yCenter=true keeps 0 at center. Range auto-expands on quake bursts.
          Currently: [{yDomain[0].toFixed(1)}, {yDomain[1].toFixed(1)}]
        </XDSText>
        <XDSChart data={[]} xKey="t" yKeys={[]} xDomain={xDomain} yDomain={yDomain} yBaseline="zero" height={220}>
          <XDSChartGrid horizontal />
          <XDSChartAxis position="bottom" />
          <XDSChartAxis position="left" />
          <XDSChartStreamGL handleRef={streamRef} color={colors.categorical(5)[3]} bufferSize={600} lineWidth={1} opacity={0.9} />
        </XDSChart>
      </XDSStack>;
  }
}`,...D.parameters?.docs?.source},description:{story:"Zero-centered — seismograph pattern with yCenter",...D.parameters?.docs?.description}}};const Q=["KnownRange","UnknownRange","ZeroCentered"];export{f as KnownRange,y as UnknownRange,D as ZeroCentered,Q as __namedExportsOrder,J as default};
