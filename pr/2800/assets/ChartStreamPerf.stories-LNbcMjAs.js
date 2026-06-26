import{at as t,ad as e,r as h}from"./iframe-yRFQ_7VC.js";import{X as T}from"./XDSStack-CFJ7xIVk.js";import{u as j}from"./useXDSChartColors-DP0GcV3K.js";import{X as w}from"./XDSHeading---Kr4LhL.js";import{X as A,a as p}from"./XDSChartAxis-AXPU4QOc.js";import{X as k}from"./XDSChartGrid-BGENEt5h.js";import{X as b}from"./XDSChartStreamGL-B1_q6gEx.js";import"./preload-helper-Ct5FWWRu.js";import"./stack.stylex-5XIQDawT.js";import"./ChartContext-DZbKxN5B.js";import"./linear-gs3faI6G.js";import"./webgl-B2CDFegl.js";const I={title:"Lab/ChartStreamPerf"},v={render:()=>{const S=j(),i=t.useRef(null),n=t.useRef(0),[d,l]=t.useState([0,300]),[R,D]=t.useState(0),[x,X]=t.useState(0),r=t.useRef([]),m=t.useRef(performance.now());return t.useEffect(()=>{let a;const o=()=>{const u=performance.now(),c=u-m.current;if(m.current=u,r.current.push(c),r.current.length>60&&r.current.shift(),n.current%30===0&&r.current.length>0){const s=r.current.reduce((f,g)=>f+g,0)/r.current.length;D(Math.round(1e3/s)),X(Math.round(s*100)/100)}n.current+=1;const y=Math.sin(n.current*.05)*40+50+(Math.random()-.5)*10;i.current?.push(n.current,y),l([Math.max(0,n.current-300),n.current]),a=requestAnimationFrame(o)};return a=requestAnimationFrame(o),()=>cancelAnimationFrame(a)},[]),e.jsxs(T,{direction:"vertical",gap:4,children:[e.jsx(w,{level:3,children:"Performance: xDomain on every frame"}),e.jsxs(T,{direction:"horizontal",gap:6,children:[e.jsxs(h,{type:"label",children:["FPS: ",R]}),e.jsxs(h,{type:"label",children:["Frame: ",x,"ms"]}),e.jsx(h,{type:"supporting",color:"secondary",children:"xDomain updates via setState on every requestAnimationFrame"})]}),e.jsxs(A,{data:[{t:0,v:0},{t:1,v:100}],xKey:"t",yKeys:["v"],yDomain:[0,100],xDomain:d,height:250,children:[e.jsx(k,{horizontal:!0}),e.jsx(p,{position:"bottom"}),e.jsx(p,{position:"left"}),e.jsx(b,{handleRef:i,color:S.categorical(1)[0],bufferSize:300,lineWidth:1.5})]})]})}},F={render:()=>{const S=j(),i=t.useRef(null),n=t.useRef(0),[d,l]=t.useState([0,300]),[R,D]=t.useState(0),[x,X]=t.useState(0),r=t.useRef([]),m=t.useRef(performance.now()),a=t.useRef(0);return t.useEffect(()=>{let o;const u=()=>{const c=performance.now(),y=c-m.current;if(m.current=c,r.current.push(y),r.current.length>60&&r.current.shift(),n.current%30===0&&r.current.length>0){const f=r.current.reduce((g,C)=>g+C,0)/r.current.length;D(Math.round(1e3/f)),X(Math.round(f*100)/100)}n.current+=1;const s=Math.sin(n.current*.05)*40+50+(Math.random()-.5)*10;i.current?.push(n.current,s),c-a.current>500&&(l([Math.max(0,n.current-300),n.current]),a.current=c),o=requestAnimationFrame(u)};return o=requestAnimationFrame(u),()=>cancelAnimationFrame(o)},[]),e.jsxs(T,{direction:"vertical",gap:4,children:[e.jsx(w,{level:3,children:"Performance: throttled xDomain (500ms)"}),e.jsxs(T,{direction:"horizontal",gap:6,children:[e.jsxs(h,{type:"label",children:["FPS: ",R]}),e.jsxs(h,{type:"label",children:["Frame: ",x,"ms"]}),e.jsx(h,{type:"supporting",color:"secondary",children:"xDomain updates every 500ms; WebGL draws every frame"})]}),e.jsxs(A,{data:[{t:0,v:0},{t:1,v:100}],xKey:"t",yKeys:["v"],yDomain:[0,100],xDomain:d,height:250,children:[e.jsx(k,{horizontal:!0}),e.jsx(p,{position:"bottom"}),e.jsx(p,{position:"left"}),e.jsx(b,{handleRef:i,color:S.categorical(1)[0],bufferSize:300,lineWidth:1.5})]})]})}},M={render:()=>{const S=j(),i=t.useRef(null),n=t.useRef(null),d=t.useRef(null),l=t.useRef(0),[R,D]=t.useState([0,400]),[x,X]=t.useState(0),r=t.useRef([]),m=t.useRef(performance.now());t.useEffect(()=>{let o;const u=()=>{const c=performance.now(),y=c-m.current;if(m.current=c,r.current.push(y),r.current.length>60&&r.current.shift(),l.current%30===0&&r.current.length>0){const g=r.current.reduce((C,z)=>C+z,0)/r.current.length;X(Math.round(1e3/g))}l.current+=1;const s=l.current,f=Math.sin(s*.02)*20;i.current?.push(s,50+f+Math.sin(s*.07)*10+(Math.random()-.5)*4),n.current?.push(s,50+f*.6+Math.cos(s*.05)*15+(Math.random()-.5)*6),d.current?.push(s,50+f*.3+Math.sin(s*.11)*8+(Math.random()-.5)*3),D([Math.max(0,s-400),s]),o=requestAnimationFrame(u)};return o=requestAnimationFrame(u),()=>cancelAnimationFrame(o)},[]);const a=S.categorical(3);return e.jsxs(T,{direction:"vertical",gap:4,children:[e.jsx(w,{level:3,children:"Stress: 3 streams + axes + grid @ 60fps"}),e.jsxs(h,{type:"label",children:["FPS: ",x]}),e.jsxs(A,{data:[{t:0,v:0},{t:1,v:100}],xKey:"t",yKeys:["v"],yDomain:[0,100],xDomain:R,height:300,children:[e.jsx(k,{horizontal:!0}),e.jsx(p,{position:"bottom"}),e.jsx(p,{position:"left"}),e.jsx(b,{handleRef:i,color:a[0],bufferSize:400,lineWidth:1.5,opacity:.8}),e.jsx(b,{handleRef:n,color:a[1],bufferSize:400,lineWidth:1.5,opacity:.8}),e.jsx(b,{handleRef:d,color:a[2],bufferSize:400,lineWidth:1.5,opacity:.8})]})]})}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const colors = useXDSChartColors();
    const streamRef = useRef<XDSChartStreamGLHandle>(null);
    const tRef = useRef(0);
    const [xDomain, setXDomain] = useState<[number, number]>([0, 300]);
    const [fps, setFps] = useState(0);
    const [renderMs, setRenderMs] = useState(0);
    const frameTimesRef = useRef<number[]>([]);
    const lastFrameRef = useRef(performance.now());
    useEffect(() => {
      let raf: number;
      const tick = () => {
        const now = performance.now();
        const dt = now - lastFrameRef.current;
        lastFrameRef.current = now;
        frameTimesRef.current.push(dt);
        if (frameTimesRef.current.length > 60) {
          frameTimesRef.current.shift();
        }

        // Update stats every 30 frames
        if (tRef.current % 30 === 0 && frameTimesRef.current.length > 0) {
          const avg = frameTimesRef.current.reduce((a, b) => a + b, 0) / frameTimesRef.current.length;
          setFps(Math.round(1000 / avg));
          setRenderMs(Math.round(avg * 100) / 100);
        }
        tRef.current += 1;
        const y = Math.sin(tRef.current * 0.05) * 40 + 50 + (Math.random() - 0.5) * 10;
        streamRef.current?.push(tRef.current, y);
        {
          setXDomain([Math.max(0, tRef.current - 300), tRef.current]);
        }
        raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(raf);
    }, []);
    return <XDSStack direction="vertical" gap={4}>
        <XDSHeading level={3}>Performance: xDomain on every frame</XDSHeading>
        <XDSStack direction="horizontal" gap={6}>
          <XDSText type="label">FPS: {fps}</XDSText>
          <XDSText type="label">Frame: {renderMs}ms</XDSText>
          <XDSText type="supporting" color="secondary">
            xDomain updates via setState on every requestAnimationFrame
          </XDSText>
        </XDSStack>
        <XDSChart data={[{
        t: 0,
        v: 0
      }, {
        t: 1,
        v: 100
      }]} xKey="t" yKeys={['v']} yDomain={[0, 100]} xDomain={xDomain} height={250}>
          <XDSChartGrid horizontal />
          <XDSChartAxis position="bottom" />
          <XDSChartAxis position="left" />
          <XDSChartStreamGL handleRef={streamRef} color={colors.categorical(1)[0]} bufferSize={300} lineWidth={1.5} />
        </XDSChart>
      </XDSStack>;
  }
}`,...v.parameters?.docs?.source},description:{story:`Measures frame timing when xDomain updates on every push.
Shows: fps, render time per frame, and dropped frames.`,...v.parameters?.docs?.description}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => {
    const colors = useXDSChartColors();
    const streamRef = useRef<XDSChartStreamGLHandle>(null);
    const tRef = useRef(0);
    const [xDomain, setXDomain] = useState<[number, number]>([0, 300]);
    const [fps, setFps] = useState(0);
    const [renderMs, setRenderMs] = useState(0);
    const frameTimesRef = useRef<number[]>([]);
    const lastFrameRef = useRef(performance.now());
    const lastDomainUpdateRef = useRef(0);
    useEffect(() => {
      let raf: number;
      const tick = () => {
        const now = performance.now();
        const dt = now - lastFrameRef.current;
        lastFrameRef.current = now;
        frameTimesRef.current.push(dt);
        if (frameTimesRef.current.length > 60) {
          frameTimesRef.current.shift();
        }
        if (tRef.current % 30 === 0 && frameTimesRef.current.length > 0) {
          const avg = frameTimesRef.current.reduce((a, b) => a + b, 0) / frameTimesRef.current.length;
          setFps(Math.round(1000 / avg));
          setRenderMs(Math.round(avg * 100) / 100);
        }
        tRef.current += 1;
        const y = Math.sin(tRef.current * 0.05) * 40 + 50 + (Math.random() - 0.5) * 10;
        streamRef.current?.push(tRef.current, y);

        // Throttle xDomain updates to every 500ms
        if (now - lastDomainUpdateRef.current > 500) {
          setXDomain([Math.max(0, tRef.current - 300), tRef.current]);
          lastDomainUpdateRef.current = now;
        }
        raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(raf);
    }, []);
    return <XDSStack direction="vertical" gap={4}>
        <XDSHeading level={3}>
          Performance: throttled xDomain (500ms)
        </XDSHeading>
        <XDSStack direction="horizontal" gap={6}>
          <XDSText type="label">FPS: {fps}</XDSText>
          <XDSText type="label">Frame: {renderMs}ms</XDSText>
          <XDSText type="supporting" color="secondary">
            xDomain updates every 500ms; WebGL draws every frame
          </XDSText>
        </XDSStack>
        <XDSChart data={[{
        t: 0,
        v: 0
      }, {
        t: 1,
        v: 100
      }]} xKey="t" yKeys={['v']} yDomain={[0, 100]} xDomain={xDomain} height={250}>
          <XDSChartGrid horizontal />
          <XDSChartAxis position="bottom" />
          <XDSChartAxis position="left" />
          <XDSChartStreamGL handleRef={streamRef} color={colors.categorical(1)[0]} bufferSize={300} lineWidth={1.5} />
        </XDSChart>
      </XDSStack>;
  }
}`,...F.parameters?.docs?.source},description:{story:`Throttled xDomain — updates every 500ms instead of every frame.
Axis slides in steps; stream still renders every frame via WebGL.`,...F.parameters?.docs?.description}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => {
    const colors = useXDSChartColors();
    const s1 = useRef<XDSChartStreamGLHandle>(null);
    const s2 = useRef<XDSChartStreamGLHandle>(null);
    const s3 = useRef<XDSChartStreamGLHandle>(null);
    const tRef = useRef(0);
    const [xDomain, setXDomain] = useState<[number, number]>([0, 400]);
    const [fps, setFps] = useState(0);
    const frameTimesRef = useRef<number[]>([]);
    const lastFrameRef = useRef(performance.now());
    useEffect(() => {
      let raf: number;
      const tick = () => {
        const now = performance.now();
        const dt = now - lastFrameRef.current;
        lastFrameRef.current = now;
        frameTimesRef.current.push(dt);
        if (frameTimesRef.current.length > 60) {
          frameTimesRef.current.shift();
        }
        if (tRef.current % 30 === 0 && frameTimesRef.current.length > 0) {
          const avg = frameTimesRef.current.reduce((a, b) => a + b, 0) / frameTimesRef.current.length;
          setFps(Math.round(1000 / avg));
        }
        tRef.current += 1;
        const t = tRef.current;
        const shared = Math.sin(t * 0.02) * 20;
        s1.current?.push(t, 50 + shared + Math.sin(t * 0.07) * 10 + (Math.random() - 0.5) * 4);
        s2.current?.push(t, 50 + shared * 0.6 + Math.cos(t * 0.05) * 15 + (Math.random() - 0.5) * 6);
        s3.current?.push(t, 50 + shared * 0.3 + Math.sin(t * 0.11) * 8 + (Math.random() - 0.5) * 3);
        setXDomain([Math.max(0, t - 400), t]);
        raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(raf);
    }, []);
    const c = colors.categorical(3);
    return <XDSStack direction="vertical" gap={4}>
        <XDSHeading level={3}>
          Stress: 3 streams + axes + grid @ 60fps
        </XDSHeading>
        <XDSText type="label">FPS: {fps}</XDSText>
        <XDSChart data={[{
        t: 0,
        v: 0
      }, {
        t: 1,
        v: 100
      }]} xKey="t" yKeys={['v']} yDomain={[0, 100]} xDomain={xDomain} height={300}>
          <XDSChartGrid horizontal />
          <XDSChartAxis position="bottom" />
          <XDSChartAxis position="left" />
          <XDSChartStreamGL handleRef={s1} color={c[0]} bufferSize={400} lineWidth={1.5} opacity={0.8} />
          <XDSChartStreamGL handleRef={s2} color={c[1]} bufferSize={400} lineWidth={1.5} opacity={0.8} />
          <XDSChartStreamGL handleRef={s3} color={c[2]} bufferSize={400} lineWidth={1.5} opacity={0.8} />
        </XDSChart>
      </XDSStack>;
  }
}`,...M.parameters?.docs?.source},description:{story:"Stress test: 3 streams + both axes + grid, xDomain every frame.",...M.parameters?.docs?.description}}};const J=["XDomainUpdateCost","ThrottledXDomain","StressTest"];export{M as StressTest,F as ThrottledXDomain,v as XDomainUpdateCost,J as __namedExportsOrder,I as default};
