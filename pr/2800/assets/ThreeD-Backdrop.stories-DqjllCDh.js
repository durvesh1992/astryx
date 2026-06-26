import{at as D,ad as t}from"./iframe-yRFQ_7VC.js";import{X as b,u as w}from"./XDS3DChart-DEuLc0fT.js";import"./preload-helper-Ct5FWWRu.js";const _={title:"Lab/3DChart/Backdrop"};function R({splitX:r,leftColor:n,rightColor:d,radius:o=1.2,opacity:a=.65}){const{data:c,xKey:y,yKey:u,zKey:F,project:m,xDomain:x,yDomain:l,zDomain:j,normalize:i}=w(),h=D.useMemo(()=>c.map((e,s)=>{const p=i(e[y],x),v=i(e[u],l),z=i(e[F],j),{px:B,py:M,depth:S}=m(p,v,z);return{px:B,py:M,depth:S,index:s}}).sort((e,s)=>e.depth-s.depth),[c,y,u,F,m,x,l,j,i]);return t.jsx("g",{children:h.map(e=>{const s=.5+(e.depth+.5)*.5,p=e.px<r?n:d;return t.jsx("circle",{cx:e.px,cy:e.py,r:o*s,fill:p,fillOpacity:a*s},e.index)})})}function k({width:r,height:n,leftBg:d,rightBg:o}){return t.jsxs("g",{children:[t.jsx("rect",{x:0,y:0,width:r/2,height:n,fill:d}),t.jsx("rect",{x:r/2,y:0,width:r/2,height:n,fill:o})]})}function C({leftBg:r,rightBg:n,leftDot:d,rightDot:o}){const{width:a,height:c}=w();return t.jsxs(t.Fragment,{children:[t.jsx(k,{width:a,height:c,leftBg:r,rightBg:n}),t.jsx(R,{splitX:a/2,leftColor:d,rightColor:o})]})}function E(r){const n=(1+Math.sqrt(5))/2;return Array.from({length:r},(d,o)=>{const a=Math.acos(1-2*(o+.5)/r),c=2*Math.PI*o/n;return{x:Math.sin(a)*Math.cos(c),y:Math.sin(a)*Math.sin(c),z:Math.cos(a)}})}function X(r){return Array.from({length:r},(n,d)=>{const o=d/r*Math.PI*2,a=Math.cos(3*o)+2;return{x:a*Math.cos(2*o),y:a*Math.sin(2*o),z:Math.sin(3*o)}})}const g={render:()=>{const r=D.useMemo(()=>E(2e3),[]);return t.jsx("div",{style:{borderRadius:16,overflow:"hidden",maxWidth:600},children:t.jsx(b,{data:r,xKey:"x",yKey:"y",zKey:"z",height:400,interactive:!0,autoRotate:.15,children:t.jsx(C,{leftBg:"#0A1317",rightBg:"#F1F4F7",leftDot:"#DFE2E5",rightDot:"#0A1317"})})})}},f={render:()=>{const r=D.useMemo(()=>X(2500),[]);return t.jsx("div",{style:{borderRadius:16,overflow:"hidden",maxWidth:600},children:t.jsx(b,{data:r,xKey:"x",yKey:"y",zKey:"z",height:400,interactive:!0,autoRotate:.2,children:t.jsx(C,{leftBg:"#0064E0",rightBg:"#E3193B",leftDot:"#FFFFFF",rightDot:"#FFFFFF"})})})}};function A(){const{width:r,height:n,data:d,xKey:o,yKey:a,zKey:c,project:y,xDomain:u,yDomain:F,zDomain:m,normalize:x}=w(),l=[{bg:"#0064E0",dot:"#FFFFFF"},{bg:"#E3193B",dot:"#FFFFFF"},{bg:"#FBCE03",dot:"#0A1317"},{bg:"#0B991F",dot:"#FFFFFF"}],j=D.useMemo(()=>d.map((e,s)=>{const p=x(e[o],u),v=x(e[a],F),z=x(e[c],m),{px:B,py:M,depth:S}=y(p,v,z);return{px:B,py:M,depth:S,index:s}}).sort((e,s)=>e.depth-s.depth),[d,o,a,c,y,u,F,m,x]),i=r/2,h=n/2;return t.jsxs(t.Fragment,{children:[t.jsx("rect",{x:0,y:0,width:i,height:h,fill:l[0].bg}),t.jsx("rect",{x:i,y:0,width:i,height:h,fill:l[1].bg}),t.jsx("rect",{x:0,y:h,width:i,height:h,fill:l[2].bg}),t.jsx("rect",{x:i,y:h,width:i,height:h,fill:l[3].bg}),t.jsx("g",{children:j.map(e=>{const s=.5+(e.depth+.5)*.5,p=(e.px<i?0:1)+(e.py<h?0:2);return t.jsx("circle",{cx:e.px,cy:e.py,r:1.2*s,fill:l[p].dot,fillOpacity:.65*s},e.index)})})]})}const K={render:()=>{const r=D.useMemo(()=>E(2500),[]);return t.jsx("div",{style:{borderRadius:16,overflow:"hidden",maxWidth:600},children:t.jsx(b,{data:r,xKey:"x",yKey:"y",zKey:"z",height:400,interactive:!0,autoRotate:.15,children:t.jsx(A,{})})})}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const data = useMemo(() => sphere(2000), []);
    return <div style={{
      borderRadius: 16,
      overflow: 'hidden',
      maxWidth: 600
    }}>
        <XDS3DChart data={data} xKey="x" yKey="y" zKey="z" height={400} interactive autoRotate={0.15}>
          <BackdropInner leftBg="#0A1317" rightBg="#F1F4F7" leftDot="#DFE2E5" rightDot="#0A1317" />
        </XDS3DChart>
      </div>;
  }
}`,...g.parameters?.docs?.source},description:{story:"Dark/light split — points adapt color based on which half they project onto",...g.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const data = useMemo(() => torusKnot(2500), []);
    return <div style={{
      borderRadius: 16,
      overflow: 'hidden',
      maxWidth: 600
    }}>
        <XDS3DChart data={data} xKey="x" yKey="y" zKey="z" height={400} interactive autoRotate={0.2}>
          <BackdropInner leftBg="#0064E0" rightBg="#E3193B" leftDot="#FFFFFF" rightDot="#FFFFFF" />
        </XDS3DChart>
      </div>;
  }
}`,...f.parameters?.docs?.source},description:{story:"Color split — two bold colors",...f.parameters?.docs?.description}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => {
    const data = useMemo(() => sphere(2500), []);
    return <div style={{
      borderRadius: 16,
      overflow: 'hidden',
      maxWidth: 600
    }}>
        <XDS3DChart data={data} xKey="x" yKey="y" zKey="z" height={400} interactive autoRotate={0.15}>
          <QuadBackdropInner />
        </XDS3DChart>
      </div>;
  }
}`,...K.parameters?.docs?.source}}};const L=["SplitDarkLight","SplitBoldColors","QuadSplit"];export{K as QuadSplit,f as SplitBoldColors,g as SplitDarkLight,L as __namedExportsOrder,_ as default};
