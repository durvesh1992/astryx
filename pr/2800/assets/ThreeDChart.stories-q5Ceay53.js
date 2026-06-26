import{at as L,ad as e,r as V}from"./iframe-yRFQ_7VC.js";import{X as T}from"./XDSStack-CFJ7xIVk.js";import{u as W}from"./useXDSChartColors-DP0GcV3K.js";import{X as $}from"./XDSHeading---Kr4LhL.js";import{u as q,X as F}from"./XDS3DChart-DEuLc0fT.js";import{X as N}from"./XDS3DScatter-Ctq_xuOM.js";import"./preload-helper-Ct5FWWRu.js";import"./stack.stylex-5XIQDawT.js";function I({color:t,barWidth:n=.06,barDepth:h=.06}){const{data:s,xKey:a,yKey:l,zKey:y,project:c,xDomain:d,yDomain:x,zDomain:f,normalize:m}=q(),j=L.useMemo(()=>s.map((r,D)=>{const g=m(r[a],d),X=m(r[l],x),u=m(r[y],f),S=n/2,o=h/2,i=c(g-S,X,u-o),R=c(g+S,X,u-o),E=c(g-S,X,u+o),z=c(g+S,X,u+o),M=c(g-S,0,u-o),w=c(g+S,0,u-o),H=c(g-S,0,u+o),p=c(g+S,0,u+o),v=(i.depth+z.depth+M.depth+p.depth)/4;return{topFL:i,topFR:R,topBL:E,topBR:z,botFL:M,botFR:w,botBL:H,botBR:p,avgDepth:v,index:D,ny:X}}).sort((r,D)=>r.avgDepth-D.avgDepth),[s,a,l,y,c,d,x,f,m,n,h]);return e.jsx("g",{children:j.map(r=>{const D=(S,o)=>S.map(i=>`${i.px},${i.py}`).join(" "),g=[r.botFL,r.botFR,r.topFR,r.topFL],X=[r.botFR,r.botBR,r.topBR,r.topFR],u=[r.topFL,r.topFR,r.topBR,r.topBL];return e.jsxs("g",{children:[e.jsx("polygon",{points:D(g),fill:t,fillOpacity:.9,stroke:t,strokeWidth:.5}),e.jsx("polygon",{points:D(X),fill:t,fillOpacity:.7,stroke:t,strokeWidth:.5}),e.jsx("polygon",{points:D(u),fill:t,fillOpacity:1,stroke:t,strokeWidth:.5})]},r.index)})})}I.__docgenInfo={description:"",methods:[],displayName:"XDS3DBar",props:{color:{required:!0,tsType:{name:"string"},description:""},barWidth:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0.06",computed:!1}},barDepth:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0.06",computed:!1}}}};function B({divisions:t=5}){const{project:n}=q(),h=L.useMemo(()=>{const s=[];for(let a=0;a<=t;a++){const l=a/t,y=n(l,0,0),c=n(l,0,1);s.push({x1:y.px,y1:y.py,x2:c.px,y2:c.py,depth:(y.depth+c.depth)/2});const d=n(0,0,l),x=n(1,0,l);s.push({x1:d.px,y1:d.py,x2:x.px,y2:x.py,depth:(d.depth+x.depth)/2})}return s.sort((a,l)=>a.depth-l.depth)},[n,t]);return e.jsx("g",{children:h.map((s,a)=>e.jsx("line",{x1:s.x1,y1:s.y1,x2:s.x2,y2:s.y2,stroke:"var(--color-border)",strokeOpacity:.3,strokeWidth:1},a))})}B.__docgenInfo={description:"",methods:[],displayName:"XDS3DGrid",props:{divisions:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"5",computed:!1}}}};function _({labels:t=!0}){const{project:n,xKey:h,yKey:s,zKey:a,xDomain:l,yDomain:y,zDomain:c}=q(),d=n(0,0,0),x=n(1,0,0),f=n(0,1,0),m=n(0,0,1),j="var(--color-border-emphasized)",r="var(--color-text-secondary)";return e.jsxs("g",{children:[e.jsx("line",{x1:d.px,y1:d.py,x2:x.px,y2:x.py,stroke:j,strokeWidth:1.5}),e.jsx("line",{x1:d.px,y1:d.py,x2:f.px,y2:f.py,stroke:j,strokeWidth:1.5}),e.jsx("line",{x1:d.px,y1:d.py,x2:m.px,y2:m.py,stroke:j,strokeWidth:1.5}),t&&e.jsxs(e.Fragment,{children:[e.jsxs("text",{x:x.px+8,y:x.py,fill:r,fontSize:11,dominantBaseline:"central",children:[h," [",l[0],"-",l[1],"]"]}),e.jsxs("text",{x:f.px+8,y:f.py,fill:r,fontSize:11,dominantBaseline:"central",children:[s," [",y[0],"-",y[1],"]"]}),e.jsxs("text",{x:m.px+8,y:m.py,fill:r,fontSize:11,dominantBaseline:"central",children:[a," [",c[0],"-",c[1],"]"]})]})]})}_.__docgenInfo={description:"",methods:[],displayName:"XDS3DAxis",props:{labels:{required:!1,tsType:{name:"boolean"},description:"Show axis labels (default: true)",defaultValue:{value:"true",computed:!1}}}};function U(t,n){const h=Math.max(0,Math.min(1,n));if(t.length===1)return t[0];const s=h*(t.length-1),a=Math.floor(s),l=Math.min(a+1,t.length-1);return s-a<.5?t[a]:t[l]}function A({colorRange:t,opacity:n=.8,wireframe:h=!1}){const{data:s,xKey:a,yKey:l,zKey:y,project:c,xDomain:d,yDomain:x,zDomain:f,normalize:m}=q(),j=L.useMemo(()=>{const r=[...new Set(s.map(o=>o[a]))].sort((o,i)=>o-i),D=[...new Set(s.map(o=>o[y]))].sort((o,i)=>o-i),g=r.length,X=D.length;if(g<2||X<2)return[];const u=new Map;for(const o of s)u.set(`${o[a]},${o[y]}`,o);const S=[];for(let o=0;o<X-1;o++)for(let i=0;i<g-1;i++){const R=[u.get(`${r[i]},${D[o]}`),u.get(`${r[i+1]},${D[o]}`),u.get(`${r[i+1]},${D[o+1]}`),u.get(`${r[i]},${D[o+1]}`)];if(R.some(p=>!p))continue;const z=R.filter(p=>p!=null).map(p=>{const v=m(p[a],d),G=m(p[l],x),P=m(p[y],f);return{...c(v,G,P),ny:G}}),M=z.reduce((p,v)=>p+v.ny,0)/4,w=z.reduce((p,v)=>p+v.depth,0)/4,H=U(t,M);S.push({points:z.map(p=>`${p.px},${p.py}`).join(" "),color:H,depth:w})}return S.sort((o,i)=>o.depth-i.depth)},[s,a,l,y,c,d,x,f,m,t]);return e.jsx("g",{children:j.map((r,D)=>e.jsx("polygon",{points:r.points,fill:h?"none":r.color,fillOpacity:n,stroke:r.color,strokeWidth:h?1:.5,strokeOpacity:h?.8:.3},D))})}A.__docgenInfo={description:`3D surface mesh. Data should be a grid of points with x, y (height), z.
Points are triangulated in order and colored by y-value.`,methods:[],displayName:"XDS3DSurface",props:{colorRange:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:`Color ramp for surface height — low to high.
Use useXDSChartColors().sequential.blue(5).`},opacity:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0.8",computed:!1}},wireframe:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const ne={title:"Lab/ThreeDChart",tags:["autodocs"]},Y=Array.from({length:200},()=>({x:Math.random()*100,y:Math.random()*100,z:Math.random()*100})),K={render:()=>{const t=W();return e.jsxs(T,{direction:"vertical",gap:4,children:[e.jsx($,{level:3,children:"3D Scatter Plot"}),e.jsx(V,{type:"supporting",color:"secondary",children:"200 points. Drag to rotate. Depth encoded via size and opacity."}),e.jsxs(F,{data:Y,xKey:"x",yKey:"y",zKey:"z",height:400,interactive:!0,children:[e.jsx(B,{}),e.jsx(_,{}),e.jsx(N,{color:t.categorical(1)[0],radius:4})]})]})}},J=[{product:0,region:0,sales:42},{product:1,region:0,sales:58},{product:2,region:0,sales:35},{product:0,region:1,sales:65},{product:1,region:1,sales:48},{product:2,region:1,sales:72},{product:0,region:2,sales:30},{product:1,region:2,sales:55},{product:2,region:2,sales:40}],C={render:()=>{const t=W();return e.jsxs(T,{direction:"vertical",gap:4,children:[e.jsx($,{level:3,children:"3D Bar Chart"}),e.jsx(V,{type:"supporting",color:"secondary",children:"Sales by product x region. Drag to rotate."}),e.jsxs(F,{data:J,xKey:"product",yKey:"sales",zKey:"region",height:400,interactive:!0,children:[e.jsx(B,{divisions:3}),e.jsx(_,{}),e.jsx(I,{color:t.categorical(1)[0],barWidth:.12,barDepth:.12})]})]})}},O=[];for(let t=0;t<=20;t++)for(let n=0;n<=20;n++){const h=t/20,s=n/20,a=Math.sin(h*Math.PI*2)*Math.cos(s*Math.PI*2)*50+50;O.push({x:t,y:Math.round(a),z:n})}const k={render:()=>{const t=W();return e.jsxs(T,{direction:"vertical",gap:4,children:[e.jsx($,{level:3,children:"3D Surface"}),e.jsx(V,{type:"supporting",color:"secondary",children:"sin(x) * cos(z) surface. Drag to rotate. Color maps to height."}),e.jsxs(F,{data:O,xKey:"x",yKey:"y",zKey:"z",height:450,interactive:!0,children:[e.jsx(B,{}),e.jsx(_,{}),e.jsx(A,{colorRange:t.sequential.blue(5)})]})]})}},b={render:()=>{const t=W();return e.jsxs(T,{direction:"vertical",gap:4,children:[e.jsx($,{level:3,children:"3D Wireframe"}),e.jsxs(F,{data:O,xKey:"x",yKey:"y",zKey:"z",height:450,interactive:!0,children:[e.jsx(B,{}),e.jsx(A,{colorRange:t.sequential.teal(5),wireframe:!0})]})]})}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => {
    const colors = useXDSChartColors();
    return <XDSStack direction="vertical" gap={4}>
        <XDSHeading level={3}>3D Scatter Plot</XDSHeading>
        <XDSText type="supporting" color="secondary">
          200 points. Drag to rotate. Depth encoded via size and opacity.
        </XDSText>
        <XDS3DChart data={scatterData} xKey="x" yKey="y" zKey="z" height={400} interactive>
          <XDS3DGrid />
          <XDS3DAxis />
          <XDS3DScatter color={colors.categorical(1)[0]} radius={4} />
        </XDS3DChart>
      </XDSStack>;
  }
}`,...K.parameters?.docs?.source},description:{story:"3D scatter plot — drag to rotate",...K.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const colors = useXDSChartColors();
    return <XDSStack direction="vertical" gap={4}>
        <XDSHeading level={3}>3D Bar Chart</XDSHeading>
        <XDSText type="supporting" color="secondary">
          Sales by product x region. Drag to rotate.
        </XDSText>
        <XDS3DChart data={barData} xKey="product" yKey="sales" zKey="region" height={400} interactive>
          <XDS3DGrid divisions={3} />
          <XDS3DAxis />
          <XDS3DBar color={colors.categorical(1)[0]} barWidth={0.12} barDepth={0.12} />
        </XDS3DChart>
      </XDSStack>;
  }
}`,...C.parameters?.docs?.source},description:{story:"3D bar chart — drag to rotate",...C.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const colors = useXDSChartColors();
    return <XDSStack direction="vertical" gap={4}>
        <XDSHeading level={3}>3D Surface</XDSHeading>
        <XDSText type="supporting" color="secondary">
          sin(x) * cos(z) surface. Drag to rotate. Color maps to height.
        </XDSText>
        <XDS3DChart data={surfaceData} xKey="x" yKey="y" zKey="z" height={450} interactive>
          <XDS3DGrid />
          <XDS3DAxis />
          <XDS3DSurface colorRange={colors.sequential.blue(5)} />
        </XDS3DChart>
      </XDSStack>;
  }
}`,...k.parameters?.docs?.source},description:{story:"3D surface — height-colored mesh",...k.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const colors = useXDSChartColors();
    return <XDSStack direction="vertical" gap={4}>
        <XDSHeading level={3}>3D Wireframe</XDSHeading>
        <XDS3DChart data={surfaceData} xKey="x" yKey="y" zKey="z" height={450} interactive>
          <XDS3DGrid />
          <XDS3DSurface colorRange={colors.sequential.teal(5)} wireframe />
        </XDS3DChart>
      </XDSStack>;
  }
}`,...b.parameters?.docs?.source},description:{story:"3D surface wireframe",...b.parameters?.docs?.description}}};const ce=["Scatter3D","Bar3D","Surface3D","Wireframe3D"];export{C as Bar3D,K as Scatter3D,k as Surface3D,b as Wireframe3D,ce as __namedExportsOrder,ne as default};
