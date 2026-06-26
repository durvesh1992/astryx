import{at as t,ad as e,r as p}from"./iframe-yRFQ_7VC.js";import{X as d}from"./XDSStack-CFJ7xIVk.js";import{u as C}from"./useXDSChartColors-DP0GcV3K.js";import{X as v}from"./XDSHeading---Kr4LhL.js";import{X as x,a as c}from"./XDSChartAxis-AXPU4QOc.js";import{X}from"./XDSChartGrid-BGENEt5h.js";import{X as S}from"./XDSChartStreamGL-B1_q6gEx.js";import"./preload-helper-Ct5FWWRu.js";import"./stack.stylex-5XIQDawT.js";import"./ChartContext-DZbKxN5B.js";import"./linear-gs3faI6G.js";import"./webgl-B2CDFegl.js";const E={title:"Lab/ChartStreamGL"},R={render:()=>{const s=C(),n=t.useRef(null),a=t.useRef(150),r=t.useRef(0),[l,u]=t.useState(150),[i,m]=t.useState([0,400]);return t.useEffect(()=>{const f=setInterval(()=>{r.current+=1;const M=(Math.random()+Math.random()+Math.random()-1.5)*2,D=1e-4-.008*.008/2+.008*M;a.current*=Math.exp(D),u(a.current),n.current?.push(r.current,a.current),m([Math.max(0,r.current-400),r.current])},50);return()=>clearInterval(f)},[]),e.jsxs(d,{direction:"vertical",gap:4,children:[e.jsx(v,{level:3,children:"Simulated Stock Ticker"}),e.jsxs(d,{direction:"horizontal",gap:3,vAlign:"center",children:[e.jsx(p,{type:"label",children:"ACME Corp"}),e.jsxs(p,{type:"body",children:["$",l.toFixed(2)]})]}),e.jsxs(x,{data:[{t:0,v:130},{t:1,v:170}],xKey:"t",yKeys:["v"],yDomain:[130,170],xDomain:i,yBaseline:"data",height:220,children:[e.jsx(X,{horizontal:!0}),e.jsx(c,{position:"bottom"}),e.jsx(c,{position:"left"}),e.jsx(S,{handleRef:n,color:s.categorical(1)[0],bufferSize:400,lineWidth:1.5})]})]})}};function k(s,n,a){const r=t.useRef(0);t.useEffect(()=>{const{base:l,amplitude:u,frequency:i,noise:m,spikeProbability:o,spikeSize:h,windowSize:f}=a,M=setInterval(()=>{r.current+=1;let D=l+Math.sin(r.current*i)*u+Math.sin(r.current*i*2.7)*u*.3+(Math.random()-.5)*m;Math.random()<o&&(D+=h*(.5+Math.random()*.5)),D=Math.max(0,Math.min(100,D)),s.current?.push(r.current,D),n([Math.max(0,r.current-f),r.current])},33);return()=>clearInterval(M)},[s,n,a])}const y={render:()=>{const s=C(),n=t.useRef(null),a=t.useRef(null),r=t.useRef(null),[l,u]=t.useState([0,300]),[i,m]=t.useState([0,300]),[o,h]=t.useState([0,300]);k(n,u,{base:35,amplitude:15,frequency:.04,noise:8,spikeProbability:.01,spikeSize:40,windowSize:300}),k(a,m,{base:62,amplitude:5,frequency:.008,noise:2,spikeProbability:.005,spikeSize:15,windowSize:300}),k(r,h,{base:20,amplitude:12,frequency:.06,noise:10,spikeProbability:.02,spikeSize:30,windowSize:300});const f={data:[{t:0,v:0},{t:1,v:100}],xKey:"t",yKeys:["v"],yDomain:[0,100],height:150};return e.jsxs(d,{direction:"vertical",gap:4,children:[e.jsx(v,{level:3,children:"Server Metrics Dashboard"}),e.jsxs(d,{direction:"vertical",gap:1,children:[e.jsx(p,{type:"label",children:"CPU Usage (%)"}),e.jsxs(x,{...f,xDomain:l,children:[e.jsx(X,{horizontal:!0}),e.jsx(c,{position:"bottom"}),e.jsx(c,{position:"left"}),e.jsx(S,{handleRef:n,color:s.categorical(3)[0],bufferSize:300,lineWidth:1.5})]})]}),e.jsxs(d,{direction:"vertical",gap:1,children:[e.jsx(p,{type:"label",children:"Memory Usage (%)"}),e.jsxs(x,{...f,xDomain:i,children:[e.jsx(X,{horizontal:!0}),e.jsx(c,{position:"bottom"}),e.jsx(c,{position:"left"}),e.jsx(S,{handleRef:a,color:s.categorical(3)[1],bufferSize:300,lineWidth:1.5})]})]}),e.jsxs(d,{direction:"vertical",gap:1,children:[e.jsx(p,{type:"label",children:"Network I/O (Mbps)"}),e.jsxs(x,{...f,xDomain:o,children:[e.jsx(X,{horizontal:!0}),e.jsx(c,{position:"bottom"}),e.jsx(c,{position:"left"}),e.jsx(S,{handleRef:r,color:s.categorical(3)[2],bufferSize:300,lineWidth:1.5})]})]})]})}},g={render:()=>{const s=C(),n=t.useRef(null),a=t.useRef(0),r=t.useRef(0),[l,u]=t.useState([0,600]);return t.useEffect(()=>{let i;const m=()=>{a.current+=1,Math.random()<.003&&(r.current=30+Math.random()*50),r.current*=.97;const o=(Math.random()-.5)*2,h=r.current>.5?Math.sin(a.current*.5)*r.current*(.5+Math.random()*.5):0;n.current?.push(a.current,o+h),u([Math.max(0,a.current-600),a.current]),i=requestAnimationFrame(m)};return i=requestAnimationFrame(m),()=>cancelAnimationFrame(i)},[]),e.jsxs(d,{direction:"vertical",gap:4,children:[e.jsx(v,{level:3,children:"Seismograph"}),e.jsx(p,{type:"supporting",color:"secondary",children:'yBaseline="zero" anchors 0 to center. Both axes from chart context.'}),e.jsxs(x,{data:[{t:0,v:-80},{t:1,v:80}],xKey:"t",yKeys:["v"],yDomain:[-80,80],xDomain:l,yBaseline:"zero",height:220,children:[e.jsx(X,{horizontal:!0}),e.jsx(c,{position:"bottom"}),e.jsx(c,{position:"left"}),e.jsx(S,{handleRef:n,color:s.categorical(5)[3],bufferSize:600,lineWidth:1,opacity:.9})]})]})}},b={render:()=>{const s=C(),n=t.useRef(null),a=t.useRef(null),r=t.useRef(null),l=t.useRef(0),[u,i]=t.useState([0,400]);return t.useEffect(()=>{const m=setInterval(()=>{l.current+=1;const o=l.current,h=Math.sin(o*.02)*20;n.current?.push(o,50+h+Math.sin(o*.07)*10+(Math.random()-.5)*4),a.current?.push(o,50+h*.6+Math.cos(o*.05)*15+(Math.random()-.5)*6),r.current?.push(o,50+h*.3+Math.sin(o*.11)*8+(Math.random()-.5)*3),o>400&&i([Math.max(0,o-400),o])},33);return()=>clearInterval(m)},[]),e.jsxs(d,{direction:"vertical",gap:4,children:[e.jsx(v,{level:3,children:"Multi-Sensor Overlay"}),e.jsx(p,{type:"supporting",color:"secondary",children:"Three streams sharing one chart, same xDomain, same yDomain=[0, 100]."}),e.jsxs(x,{data:[{t:0,v:0},{t:1,v:100}],xKey:"t",yKeys:["v"],yDomain:[0,100],xDomain:u,height:280,children:[e.jsx(X,{horizontal:!0}),e.jsx(c,{position:"bottom"}),e.jsx(c,{position:"left"}),e.jsx(S,{handleRef:n,color:s.categorical(3)[0],bufferSize:400,lineWidth:1.5,opacity:.8}),e.jsx(S,{handleRef:a,color:s.categorical(3)[1],bufferSize:400,lineWidth:1.5,opacity:.8}),e.jsx(S,{handleRef:r,color:s.categorical(3)[2],bufferSize:400,lineWidth:1.5,opacity:.8})]})]})}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => {
    const colors = useXDSChartColors();
    const streamRef = useRef<XDSChartStreamGLHandle>(null);
    const priceRef = useRef(150);
    const tRef = useRef(0);
    const [price, setPrice] = useState(150);
    const [xDomain, setXDomain] = useState<[number, number]>([0, 400]);
    useEffect(() => {
      const mu = 0.0001;
      const sigma = 0.008;
      const id = setInterval(() => {
        tRef.current += 1;
        const z = (Math.random() + Math.random() + Math.random() - 1.5) * 2;
        const logReturn = mu - sigma * sigma / 2 + sigma * z;
        priceRef.current *= Math.exp(logReturn);
        setPrice(priceRef.current);
        streamRef.current?.push(tRef.current, priceRef.current);
        // Slide the x window
        {
          setXDomain([Math.max(0, tRef.current - 400), tRef.current]);
        }
      }, 50);
      return () => clearInterval(id);
    }, []);
    return <XDSStack direction="vertical" gap={4}>
        <XDSHeading level={3}>Simulated Stock Ticker</XDSHeading>
        <XDSStack direction="horizontal" gap={3} vAlign="center">
          <XDSText type="label">ACME Corp</XDSText>
          <XDSText type="body">\${price.toFixed(2)}</XDSText>
        </XDSStack>
        <XDSChart data={[{
        t: 0,
        v: 130
      }, {
        t: 1,
        v: 170
      }]} xKey="t" yKeys={['v']} yDomain={[130, 170]} xDomain={xDomain} yBaseline="data" height={220}>
          <XDSChartGrid horizontal />
          <XDSChartAxis position="bottom" />
          <XDSChartAxis position="left" />
          <XDSChartStreamGL handleRef={streamRef} color={colors.categorical(1)[0]} bufferSize={400} lineWidth={1.5} />
        </XDSChart>
      </XDSStack>;
  }
}`,...R.parameters?.docs?.source},description:{story:"Simulated stock price — GBM with drift and volatility",...R.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const colors = useXDSChartColors();
    const cpuRef = useRef<XDSChartStreamGLHandle>(null);
    const memRef = useRef<XDSChartStreamGLHandle>(null);
    const netRef = useRef<XDSChartStreamGLHandle>(null);
    const [cpuX, setCpuX] = useState<[number, number]>([0, 300]);
    const [memX, setMemX] = useState<[number, number]>([0, 300]);
    const [netX, setNetX] = useState<[number, number]>([0, 300]);
    useMetricStream(cpuRef, setCpuX, {
      base: 35,
      amplitude: 15,
      frequency: 0.04,
      noise: 8,
      spikeProbability: 0.01,
      spikeSize: 40,
      windowSize: 300
    });
    useMetricStream(memRef, setMemX, {
      base: 62,
      amplitude: 5,
      frequency: 0.008,
      noise: 2,
      spikeProbability: 0.005,
      spikeSize: 15,
      windowSize: 300
    });
    useMetricStream(netRef, setNetX, {
      base: 20,
      amplitude: 12,
      frequency: 0.06,
      noise: 10,
      spikeProbability: 0.02,
      spikeSize: 30,
      windowSize: 300
    });
    const chartProps = {
      data: [{
        t: 0,
        v: 0
      }, {
        t: 1,
        v: 100
      }] as Record<string, unknown>[],
      xKey: 't',
      yKeys: ['v'] as string[],
      yDomain: [0, 100] as [number, number],
      height: 150
    };
    return <XDSStack direction="vertical" gap={4}>
        <XDSHeading level={3}>Server Metrics Dashboard</XDSHeading>
        <XDSStack direction="vertical" gap={1}>
          <XDSText type="label">CPU Usage (%)</XDSText>
          <XDSChart {...chartProps} xDomain={cpuX}>
            <XDSChartGrid horizontal />
            <XDSChartAxis position="bottom" />
            <XDSChartAxis position="left" />
            <XDSChartStreamGL handleRef={cpuRef} color={colors.categorical(3)[0]} bufferSize={300} lineWidth={1.5} />
          </XDSChart>
        </XDSStack>
        <XDSStack direction="vertical" gap={1}>
          <XDSText type="label">Memory Usage (%)</XDSText>
          <XDSChart {...chartProps} xDomain={memX}>
            <XDSChartGrid horizontal />
            <XDSChartAxis position="bottom" />
            <XDSChartAxis position="left" />
            <XDSChartStreamGL handleRef={memRef} color={colors.categorical(3)[1]} bufferSize={300} lineWidth={1.5} />
          </XDSChart>
        </XDSStack>
        <XDSStack direction="vertical" gap={1}>
          <XDSText type="label">Network I/O (Mbps)</XDSText>
          <XDSChart {...chartProps} xDomain={netX}>
            <XDSChartGrid horizontal />
            <XDSChartAxis position="bottom" />
            <XDSChartAxis position="left" />
            <XDSChartStreamGL handleRef={netRef} color={colors.categorical(3)[2]} bufferSize={300} lineWidth={1.5} />
          </XDSChart>
        </XDSStack>
      </XDSStack>;
  }
}`,...y.parameters?.docs?.source},description:{story:"Server dashboard — CPU, Memory, and Network at 30fps",...y.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const colors = useXDSChartColors();
    const streamRef = useRef<XDSChartStreamGLHandle>(null);
    const tRef = useRef(0);
    const quakeRef = useRef(0);
    const [xDomain, setXDomain] = useState<[number, number]>([0, 600]);
    useEffect(() => {
      let raf: number;
      const tick = () => {
        tRef.current += 1;
        if (Math.random() < 0.003) {
          quakeRef.current = 30 + Math.random() * 50;
        }
        quakeRef.current *= 0.97;
        const microTremor = (Math.random() - 0.5) * 2;
        const quakeSignal = quakeRef.current > 0.5 ? Math.sin(tRef.current * 0.5) * quakeRef.current * (0.5 + Math.random() * 0.5) : 0;
        streamRef.current?.push(tRef.current, microTremor + quakeSignal);
        {
          setXDomain([Math.max(0, tRef.current - 600), tRef.current]);
        }
        raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(raf);
    }, []);
    return <XDSStack direction="vertical" gap={4}>
        <XDSHeading level={3}>Seismograph</XDSHeading>
        <XDSText type="supporting" color="secondary">
          yBaseline=&quot;zero&quot; anchors 0 to center. Both axes from chart
          context.
        </XDSText>
        <XDSChart data={[{
        t: 0,
        v: -80
      }, {
        t: 1,
        v: 80
      }]} xKey="t" yKeys={['v']} yDomain={[-80, 80]} xDomain={xDomain} yBaseline="zero" height={220}>
          <XDSChartGrid horizontal />
          <XDSChartAxis position="bottom" />
          <XDSChartAxis position="left" />
          <XDSChartStreamGL handleRef={streamRef} color={colors.categorical(5)[3]} bufferSize={600} lineWidth={1} opacity={0.9} />
        </XDSChart>
      </XDSStack>;
  }
}`,...g.parameters?.docs?.source},description:{story:"Seismograph — zero-centered with x-axis",...g.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const colors = useXDSChartColors();
    const s1Ref = useRef<XDSChartStreamGLHandle>(null);
    const s2Ref = useRef<XDSChartStreamGLHandle>(null);
    const s3Ref = useRef<XDSChartStreamGLHandle>(null);
    const tRef = useRef(0);
    const [xDomain, setXDomain] = useState<[number, number]>([0, 400]);
    useEffect(() => {
      const id = setInterval(() => {
        tRef.current += 1;
        const t = tRef.current;
        const shared = Math.sin(t * 0.02) * 20;
        s1Ref.current?.push(t, 50 + shared + Math.sin(t * 0.07) * 10 + (Math.random() - 0.5) * 4);
        s2Ref.current?.push(t, 50 + shared * 0.6 + Math.cos(t * 0.05) * 15 + (Math.random() - 0.5) * 6);
        s3Ref.current?.push(t, 50 + shared * 0.3 + Math.sin(t * 0.11) * 8 + (Math.random() - 0.5) * 3);
        if (t > 400) {
          setXDomain([Math.max(0, t - 400), t]);
        }
      }, 33);
      return () => clearInterval(id);
    }, []);
    return <XDSStack direction="vertical" gap={4}>
        <XDSHeading level={3}>Multi-Sensor Overlay</XDSHeading>
        <XDSText type="supporting" color="secondary">
          
          Three streams sharing one chart, same xDomain, same yDomain=[0, 100].
        </XDSText>
        <XDSChart data={[{
        t: 0,
        v: 0
      }, {
        t: 1,
        v: 100
      }]} xKey="t" yKeys={['v']} yDomain={[0, 100]} xDomain={xDomain} height={280}>
          <XDSChartGrid horizontal />
          <XDSChartAxis position="bottom" />
          <XDSChartAxis position="left" />
          <XDSChartStreamGL handleRef={s1Ref} color={colors.categorical(3)[0]} bufferSize={400} lineWidth={1.5} opacity={0.8} />
          <XDSChartStreamGL handleRef={s2Ref} color={colors.categorical(3)[1]} bufferSize={400} lineWidth={1.5} opacity={0.8} />
          <XDSChartStreamGL handleRef={s3Ref} color={colors.categorical(3)[2]} bufferSize={400} lineWidth={1.5} opacity={0.8} />
        </XDSChart>
      </XDSStack>;
  }
}`,...b.parameters?.docs?.source},description:{story:"Three streams on one chart sharing xDomain and yDomain",...b.parameters?.docs?.description}}};const I=["StockPrice","ServerDashboard","SeismographDemo","MultiSensorOverlay"];export{b as MultiSensorOverlay,g as SeismographDemo,y as ServerDashboard,R as StockPrice,I as __namedExportsOrder,E as default};
