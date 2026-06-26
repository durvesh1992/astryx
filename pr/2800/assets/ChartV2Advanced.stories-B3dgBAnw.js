import{ad as r,at as b}from"./iframe-yRFQ_7VC.js";import{u as ue,X as C,a as A,b as _,c as Q}from"./bar-CaHnEBcM.js";import{a as be}from"./area-C5zWI711.js";import{m as ve}from"./monotone-BKrwi6Sb.js";import{l as ee}from"./line-BaQs2ygX.js";import{m as re,a as te,g as oe,c as ne,s as ae,h as se,P as Se}from"./webgl-B2CDFegl.js";import{b as Ae}from"./ChartContext-DZbKxN5B.js";import"./preload-helper-Ct5FWWRu.js";import"./linear-gs3faI6G.js";import"./array-2GBN5xbU.js";import"./XDSChartLegend-Bl1KuAfH.js";import"./XDSChartSwatch-BC5wXYlS.js";import"./XDSHStack-BmU4dpCo.js";import"./XDSStack-CFJ7xIVk.js";import"./stack.stylex-5XIQDawT.js";import"./XDSVStack-uMCoSZ_B.js";import"./index-D8Xh4Tce.js";import"./index-CXyWrEU_.js";import"./step-fxRLXcQr.js";function Z(e){const t=e.color??"var(--color-chart-1)",u=e.opacity??.15;return{type:"band",key:`band-${e.upper}-${e.lower}`,dataKeys:[e.upper,e.lower],layout:{},resolve(a){const{data:o,xKey:c,xScale:h,yScale:i}=a,d=[];for(let f=0;f<o.length;f++){const m=o[f];let y;"bandwidth"in h?y=(h(String(m[c]))??0)+h.bandwidth()/2:y=h(m[c]);const l=typeof m[e.upper]=="number"?m[e.upper]:0,g=typeof m[e.lower]=="number"?m[e.lower]:0;d.push({px:y,py:i(l),py0:i(g),dataIndex:f})}return d},render(a){if(a.length===0)return null;const c=be().x(h=>h.px).y0(h=>h.py0).y1(h=>h.py).curve(ve)(a)??"";return r.jsx("path",{d:c,fill:t,fillOpacity:u,stroke:"none"})}}}function de(e){const t=e.upColor??"var(--color-positive)",u=e.downColor??"var(--color-negative)";return{type:"candlestick",key:`ohlc-${e.close}`,dataKeys:[e.open,e.high,e.low,e.close],layout:{},resolve(a){const{data:o,xKey:c,xScale:h,yScale:i}=a,d=[];for(let f=0;f<o.length;f++){const m=o[f];let y;"bandwidth"in h?y=(h(String(m[c]))??0)+h.bandwidth()/2:y=h(m[c]);const l=typeof m[e.close]=="number"?m[e.close]:0;d.push({px:y,py:i(l),py0:i(0),dataIndex:f})}return d},render(a,o){const{data:c,xScale:h,yScale:i}=o;if(!("bandwidth"in h))return null;const f=h.bandwidth()*.6;return r.jsx("g",{children:a.map((m,y)=>{const l=c[m.dataIndex],g=typeof l[e.open]=="number"?l[e.open]:0,p=typeof l[e.close]=="number"?l[e.close]:0,v=typeof l[e.high]=="number"?l[e.high]:0,x=typeof l[e.low]=="number"?l[e.low]:0,n=p>=g?t:u;return r.jsxs("g",{children:[r.jsx("line",{x1:m.px,x2:m.px,y1:i(v),y2:i(x),stroke:n,strokeWidth:1}),r.jsx("rect",{x:m.px-f/2,y:i(Math.max(g,p)),width:f,height:Math.max(1,Math.abs(i(g)-i(p))),fill:n})]},y)})})}}}function fe(e){const{high:t,low:u}=e,a=e.color??"var(--color-text-primary)",o=e.strokeWidth??1.5,c=e.capWidth??8;return{type:"errorBar",key:`errorBar-${t}-${u}`,dataKeys:[t,u],layout:{},resolve(h){const{data:i,xKey:d,xScale:f,yScale:m}=h,y=[];for(let l=0;l<i.length;l++){const g=i[l];let p;"bandwidth"in f?p=(f(String(g[d]))??0)+f.bandwidth()/2:p=f(g[d]);const v=typeof g[t]=="number"?g[t]:0,x=typeof g[u]=="number"?g[u]:0;y.push({px:p,py:m(v),py0:m(x),dataIndex:l})}return y},render(h){const i=c/2;return r.jsx("g",{children:h.map((d,f)=>r.jsxs("g",{children:[r.jsx("line",{x1:d.px,x2:d.px,y1:d.py,y2:d.py0,stroke:a,strokeWidth:o}),r.jsx("line",{x1:d.px-i,x2:d.px+i,y1:d.py,y2:d.py,stroke:a,strokeWidth:o}),r.jsx("line",{x1:d.px-i,x2:d.px+i,y1:d.py0,y2:d.py0,stroke:a,strokeWidth:o})]},f))})}}}function P(e){const t=e.color??"var(--color-border-emphasized)",u=e.strokeWidth??1,a=e.strokeDasharray??"6 3",o=e.label,c=e.labelPosition??"end",h=e.bandOpacity??.1,i=14,d=3,f=10;return{type:"referenceLine",key:`ref-${e.y??e.x??"none"}`,dataKeys:[],layout:{},resolve(){return[]},render(m,y){const{width:l,height:g,xScale:p,yScale:v}=y;if(e.y!=null){const x=v(e.y),s=o?o.length*5.5+8:0,n=c==="end"?l-s-2:2;if(e.y2!=null){const S=v(e.y2),w=Math.min(x,S),R=Math.abs(S-x);return r.jsxs("g",{children:[r.jsx("rect",{x:0,y:w,width:l,height:R,fill:t,opacity:h}),r.jsx("line",{x1:0,x2:l,y1:x,y2:x,stroke:t,strokeWidth:u,strokeDasharray:a}),r.jsx("line",{x1:0,x2:l,y1:S,y2:S,stroke:t,strokeWidth:u,strokeDasharray:a}),o&&r.jsxs("g",{transform:`translate(${n},${x})`,pointerEvents:"none",children:[r.jsx("rect",{x:0,y:-i/2,width:s,height:i,rx:d,fill:"var(--color-background-popover)",fillOpacity:.85,stroke:t,strokeWidth:.5}),r.jsx("text",{x:s/2,dy:"0.35em",textAnchor:"middle",fontSize:f,fontWeight:500,fill:t,children:o})]})]})}return r.jsxs("g",{children:[r.jsx("line",{x1:0,x2:l,y1:x,y2:x,stroke:t,strokeWidth:u,strokeDasharray:a}),o&&r.jsxs("g",{transform:`translate(${n},${x})`,pointerEvents:"none",children:[r.jsx("rect",{x:0,y:-i/2,width:s,height:i,rx:d,fill:"var(--color-background-popover)",fillOpacity:.85,stroke:t,strokeWidth:.5}),r.jsx("text",{x:s/2,dy:"0.35em",textAnchor:"middle",fontSize:f,fontWeight:500,fill:t,children:o})]})]})}if(e.x!=null&&!("bandwidth"in p)){const x=p(e.x),s=o?o.length*5.5+8:0,n=c==="end"?4:g-i-4;return r.jsxs("g",{children:[r.jsx("line",{x1:x,x2:x,y1:0,y2:g,stroke:t,strokeWidth:u,strokeDasharray:a}),o&&r.jsxs("g",{transform:`translate(${x-s/2},${n})`,pointerEvents:"none",children:[r.jsx("rect",{x:0,y:0,width:s,height:i,rx:d,fill:"var(--color-background-popover)",fillOpacity:.85,stroke:t,strokeWidth:.5}),r.jsx("text",{x:s/2,y:i/2,dy:"0.35em",textAnchor:"middle",fontSize:f,fontWeight:500,fill:t,children:o})]})]})}return null}}}const we=`
  attribute vec2 a_position;
  uniform vec2 u_resolution;
  uniform float u_size;
  void main() {
    vec2 clip = (a_position / u_resolution) * 2.0 - 1.0;
    gl_Position = vec4(clip.x, -clip.y, 0.0, 1.0);
    gl_PointSize = u_size * ${Se.toFixed(6)};
  }
`,Re=`
  precision mediump float;
  uniform vec3 u_color;
  uniform float u_opacity;
  void main() {
    vec2 coord = gl_PointCoord - vec2(0.5);
    float dist = length(coord);
    if (dist > 0.5) discard;
    float edge = 1.0 - smoothstep(0.48, 0.5, dist);
    float a = u_opacity * edge;
    gl_FragColor = vec4(u_color * a, a);
  }
`;function Ce({resolved:e,color:t,size:u,opacity:a,width:o,height:c}){const{svgRef:h}=ue(),i=b.useRef(null),d=b.useRef(null),f=b.useRef(null),m=b.useRef(null),y=b.useCallback(()=>{const l=[];for(const g of e)l.push(g.px,g.py);return new Float32Array(l)},[e]);return b.useEffect(()=>{const l=m.current;if(l)return i.current||(i.current=document.createElement("canvas")),re(l,i.current,o,c)},[o,c]),b.useEffect(()=>{const l=i.current;if(!l||o<=0||c<=0)return;const g=te(l,o,c);d.current||(d.current=oe(l));const p=d.current;if(!p)return;f.current||(f.current=ne(p,we,Re));const v=f.current;if(!v)return;p.viewport(0,0,l.width,l.height),ae(p),p.useProgram(v);const x=y(),s=p.createBuffer();p.bindBuffer(p.ARRAY_BUFFER,s),p.bufferData(p.ARRAY_BUFFER,x,p.STATIC_DRAW);const n=p.getAttribLocation(v,"a_position");p.enableVertexAttribArray(n),p.vertexAttribPointer(n,2,p.FLOAT,!1,0,0);const[S,w,R]=se(t);p.uniform2f(p.getUniformLocation(v,"u_resolution"),o,c),p.uniform3f(p.getUniformLocation(v,"u_color"),S,w,R),p.uniform1f(p.getUniformLocation(v,"u_size"),u*g),p.uniform1f(p.getUniformLocation(v,"u_opacity"),a),p.drawArrays(p.POINTS,0,x.length/2),p.deleteBuffer(s)},[o,c,t,u,a,y]),o<=0||c<=0?null:r.jsx("g",{ref:m})}function je(e,t){const{color:u}=t,a=t.size??6,o=t.opacity??.8;return{type:"dotGL",key:e,dataKeys:[e],layout:{},resolve(c){const{data:h,xKey:i,xScale:d,yScale:f}=c,m=[];for(let y=0;y<h.length;y++){const l=h[y];let g;"bandwidth"in d?g=(d(String(l[i]))??0)+d.bandwidth()/2:g=d(l[i]);const p=typeof l[e]=="number"?l[e]:0;m.push({px:g,py:f(p),py0:f(0),dataIndex:y})}return m},render(c,h){return r.jsx(Ce,{resolved:c,color:u,size:a,opacity:o,width:h.width,height:h.height})}}}const _e=`
  attribute vec2 a_position;
  attribute vec3 a_color;
  uniform vec2 u_resolution;
  varying vec3 v_color;
  void main() {
    vec2 clip = (a_position / u_resolution) * 2.0 - 1.0;
    gl_Position = vec4(clip.x, -clip.y, 0.0, 1.0);
    v_color = a_color;
  }
`,Le=`
  precision mediump float;
  varying vec3 v_color;
  void main() {
    gl_FragColor = vec4(v_color, 1.0);
  }
`;function ke(e,t){const u=Math.max(0,Math.min(1,t));if(e.length===1)return e[0];const a=u*(e.length-1),o=Math.floor(a),c=Math.min(o+1,e.length-1),h=a-o;return[e[o][0]+h*(e[c][0]-e[o][0]),e[o][1]+h*(e[c][1]-e[o][1]),e[o][2]+h*(e[c][2]-e[o][2])]}function Me({data:e,xKey:t,yKey:u,valueKey:a,xScale:o,colorRange:c,domain:h,cellGap:i,width:d,height:f}){const m=b.useRef(null),y=b.useRef(null),l=b.useRef(null),g=b.useRef(null),p=b.useMemo(()=>c.map(se),[c]),v=b.useMemo(()=>{const s=[...new Set(e.map(n=>String(n[u])))];return Ae().domain(s).range([0,f]).padding(.05)},[e,u,f]),x=b.useMemo(()=>{if(h)return h;let s=1/0,n=-1/0;for(const S of e){const w=S[a];typeof w=="number"&&(w<s&&(s=w),w>n&&(n=w))}return[s,n]},[e,a,h]);return b.useEffect(()=>{const s=g.current;if(s)return m.current||(m.current=document.createElement("canvas")),re(s,m.current,d,f)},[d,f]),b.useEffect(()=>{const s=m.current;if(!s||d<=0||f<=0)return;te(s,d,f),y.current||(y.current=oe(s));const n=y.current;if(!n)return;l.current||(l.current=ne(n,_e,Le));const S=l.current;if(!S)return;n.viewport(0,0,s.width,s.height),ae(n),n.useProgram(S);const w=[],R=[],[T,k]=x,I=k-T||1,L=i,$=o.bandwidth(),H=v.bandwidth();for(const O of e){const U=o(String(O[t])),V=v(String(O[u]));if(U==null||V==null)continue;const me=((typeof O[a]=="number"?O[a]:0)-T)/I,[xe,ye,ge]=ke(p,me),Y=U+L/2,z=U+$-L/2,N=V+L/2,J=V+H-L/2;w.push(Y,N,z,N,Y,J,z,N,z,J,Y,J);for(let le=0;le<6;le++)R.push(xe,ye,ge)}const j=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,j),n.bufferData(n.ARRAY_BUFFER,new Float32Array(w),n.STATIC_DRAW);const M=n.getAttribLocation(S,"a_position");n.enableVertexAttribArray(M),n.vertexAttribPointer(M,2,n.FLOAT,!1,0,0);const ce=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,ce),n.bufferData(n.ARRAY_BUFFER,new Float32Array(R),n.STATIC_DRAW);const ie=n.getAttribLocation(S,"a_color");n.enableVertexAttribArray(ie),n.vertexAttribPointer(ie,3,n.FLOAT,!1,0,0),n.uniform2f(n.getUniformLocation(S,"u_resolution"),d,f),n.drawArrays(n.TRIANGLES,0,w.length/2),n.deleteBuffer(j),n.deleteBuffer(ce)},[e,t,u,a,o,v,d,f,x,p,i]),d<=0||f<=0?null:r.jsx("g",{ref:g})}function De(e){const{xKey:t,yKey:u,valueKey:a,colorRange:o}=e,c=e.cellGap??1;return{type:"heatmapGL",key:`heatmap-${a}`,dataKeys:[a],layout:{},resolve(h){const{data:i,xScale:d,yScale:f}=h,m=[];if(!("bandwidth"in d))return m;for(let y=0;y<i.length;y++){const l=i[y],g=(d(String(l[t]))??0)+d.bandwidth()/2,p=typeof l[a]=="number"?l[a]:0;m.push({px:g,py:f(p),py0:f(0),dataIndex:y})}return m},render(h,i){return"bandwidth"in i.xScale?r.jsx(Me,{data:i.data,xKey:t,yKey:u,valueKey:a,xScale:i.xScale,colorRange:o,domain:e.domain,cellGap:c,width:i.width,height:i.height}):null}}}const Fe=`
  attribute vec2 a_position;
  uniform vec2 u_resolution;
  void main() {
    vec2 clip = (a_position / u_resolution) * 2.0 - 1.0;
    gl_Position = vec4(clip.x, -clip.y, 0.0, 1.0);
  }
`,Ge=`
  precision mediump float;
  uniform vec3 u_color;
  uniform float u_opacity;
  void main() {
    float a = u_opacity;
    gl_FragColor = vec4(u_color * a, a);
  }
`;function We({color:e,bufferSize:t,lineWidth:u,opacity:a,width:o,height:c,handleRef:h}){const{xScale:i,yScale:d}=ue(),f=b.useRef(null),m=b.useRef(null),y=b.useRef(null),l=b.useRef(null),g=b.useRef(null),p=b.useRef({data:new Float32Array(t*2),head:0,count:0});b.useEffect(()=>{const x=g.current;if(x)return f.current||(f.current=document.createElement("canvas")),re(x,f.current,o,c)},[o,c]),b.useEffect(()=>{const x=f.current;!x||o<=0||c<=0||te(x,o,c)},[o,c]);const v=b.useCallback(()=>{const x=f.current;if(!x)return;m.current||(m.current=oe(x));const s=m.current;if(!s)return;y.current||(y.current=ne(s,Fe,Ge));const n=y.current;if(!n)return;l.current||(l.current=s.createBuffer());const{data:S,head:w,count:R}=p.current;if(R<2)return;const T=i,k=new Float32Array(R*2);for(let j=0;j<R;j++){const M=(w-R+j+t)%t*2;k[j*2]=T(S[M]),k[j*2+1]=d(S[M+1])}s.viewport(0,0,x.width,x.height),ae(s),s.useProgram(n),s.bindBuffer(s.ARRAY_BUFFER,l.current),s.bufferData(s.ARRAY_BUFFER,k,s.DYNAMIC_DRAW);const I=s.getAttribLocation(n,"a_position");s.enableVertexAttribArray(I),s.vertexAttribPointer(I,2,s.FLOAT,!1,0,0);const[L,$,H]=se(e);s.uniform2f(s.getUniformLocation(n,"u_resolution"),o,c),s.uniform3f(s.getUniformLocation(n,"u_color"),L,$,H),s.uniform1f(s.getUniformLocation(n,"u_opacity"),a),s.lineWidth(u),s.drawArrays(s.LINE_STRIP,0,R)},[o,c,e,u,a,t,i,d]);return b.useImperativeHandle(h,()=>({push(x,s){const n=p.current,S=n.head*2;n.data[S]=x,n.data[S+1]=s,n.head=(n.head+1)%t,n.count=Math.min(n.count+1,t),v()},clear(){p.current.head=0,p.current.count=0;const x=m.current;x&&(x.clearColor(0,0,0,0),x.clear(x.COLOR_BUFFER_BIT))}}),[t,v]),o<=0||c<=0?null:r.jsx("g",{ref:g})}function Be(e){const{color:t}=e,u=e.bufferSize??500,a=e.lineWidth??2,o=e.opacity??1,c=e.handleRef;return{type:"streamGL",key:"stream",dataKeys:[],layout:{},resolve(){return[]},render(h,i){return r.jsx(We,{color:t,bufferSize:u,lineWidth:a,opacity:o,width:i.width,height:i.height,handleRef:c})}}}const ar={title:"Lab/ChartV2Advanced",component:C},q=Array.from({length:30},(e,t)=>{const u=100+Math.sin(t/5)*20+t*.5,a=u+(Math.random()-.5)*8,o=u+(Math.random()-.5)*8;return{day:`Day ${t+1}`,open:Math.round(a*10)/10,close:Math.round(o*10)/10,high:Math.round(Math.max(a,o,u+Math.random()*10)*10)/10,low:Math.round(Math.min(a,o,u-Math.random()*10)*10)/10,volume:Math.round(500+Math.random()*1e3)}}),Ee=Array.from({length:20},(e,t)=>{const u=t,a=30+t*2+Math.sin(t/3)*5;return{x:u,mean:Math.round(a*10)/10,upper95:Math.round((a+8+t*.3)*10)/10,lower95:Math.round((a-8-t*.3)*10)/10,upper80:Math.round((a+4+t*.15)*10)/10,lower80:Math.round((a-4-t*.15)*10)/10}}),pe=[{month:"Jan",sales:45,target:50,errorHigh:48,errorLow:42},{month:"Feb",sales:52,target:50,errorHigh:56,errorLow:48},{month:"Mar",sales:48,target:50,errorHigh:52,errorLow:44},{month:"Apr",sales:61,target:50,errorHigh:66,errorLow:56},{month:"May",sales:55,target:50,errorHigh:59,errorLow:51},{month:"Jun",sales:70,target:50,errorHigh:76,errorLow:64}],Xe=Array.from({length:200},e=>({x:Math.random()*100,y:Math.random()*100})),he=[],Ke=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];for(const e of Ke)for(let t=0;t<24;t++)he.push({hour:`${t}`,day:e,traffic:Math.round(50+Math.sin(t/4)*30+(e==="Sat"||e==="Sun"?-20:10)+Math.random()*20)});const D={render:()=>r.jsx(C,{data:q,xKey:"day",series:[de({open:"open",high:"high",low:"low",close:"close",upColor:"#22c55e",downColor:"#ef4444"})],grid:r.jsx(_,{}),axes:r.jsxs(r.Fragment,{children:[r.jsx(A,{position:"bottom"}),r.jsx(A,{position:"left"})]}),height:350})},F={name:"Financial (Candlestick + MA + Volume)",render:()=>{const e=b.useMemo(()=>{let t=0;return q.map((u,a)=>(t+=u.close,{...u,ma5:a>=4?Math.round((t-q.slice(0,a-4).reduce((o,c)=>o+c.close,0))/5*10)/10:void 0}))},[]);return r.jsx(C,{data:e,xKey:"day",series:[de({open:"open",high:"high",low:"low",close:"close",upColor:"#22c55e",downColor:"#ef4444"}),ee("ma5",{color:"#f59e0b",strokeWidth:1.5}),Q("volume",{color:"#94a3b8",opacity:.3})],grid:r.jsx(_,{}),axes:r.jsxs(r.Fragment,{children:[r.jsx(A,{position:"bottom"}),r.jsx(A,{position:"left"})]}),height:400})}},G={render:()=>r.jsx(C,{data:Ee,xKey:"x",series:[Z({upper:"upper95",lower:"lower95",color:"#3b82f6",opacity:.1}),Z({upper:"upper80",lower:"lower80",color:"#3b82f6",opacity:.2}),ee("mean",{color:"#3b82f6",strokeWidth:2})],grid:r.jsx(_,{}),axes:r.jsxs(r.Fragment,{children:[r.jsx(A,{position:"bottom"}),r.jsx(A,{position:"left"})]}),height:300})},W={name:"Error Bars + Reference Line",render:()=>r.jsx(C,{data:pe,xKey:"month",series:[Q("sales",{color:"#3b82f6"}),fe({high:"errorHigh",low:"errorLow",color:"#1e3a5f"}),P({y:50,label:"Target",color:"#ef4444"}),P({y:40,y2:60,label:"Acceptable",color:"#22c55e",bandOpacity:.1})],grid:r.jsx(_,{}),axes:r.jsxs(r.Fragment,{children:[r.jsx(A,{position:"bottom"}),r.jsx(A,{position:"left"})]}),height:300})},B={name:"WebGL Scatter (dotGL)",render:()=>r.jsx(C,{data:Xe,xKey:"x",series:[je("y",{color:"#3b82f6",size:4})],grid:r.jsx(_,{horizontal:!0,vertical:!0}),axes:r.jsxs(r.Fragment,{children:[r.jsx(A,{position:"bottom"}),r.jsx(A,{position:"left"})]}),height:400})},E={name:"WebGL Heatmap",render:()=>r.jsx(C,{data:he,xKey:"hour",series:[De({xKey:"hour",yKey:"day",valueKey:"traffic",colorRange:["#eff6ff","#1e40af"]})],axes:r.jsxs(r.Fragment,{children:[r.jsx(A,{position:"bottom"}),r.jsx(A,{position:"left"})]}),height:280})},X={name:"Streaming (streamGL)",render:()=>{const e=b.useRef(null);return b.useEffect(()=>{let t=0;const u=setInterval(()=>{e.current?.push(t,50+Math.sin(t/10)*30+Math.random()*10),t++},200);return()=>clearInterval(u)},[]),r.jsx(C,{data:[],xKey:"x",series:[Be({handleRef:e,color:"#3b82f6"})],grid:r.jsx(_,{}),axes:r.jsxs(r.Fragment,{children:[r.jsx(A,{position:"bottom"}),r.jsx(A,{position:"left"})]}),height:300})}},K={name:"Kitchen Sink",render:()=>{const e=pe.map((t,u,a)=>({...t,runAvg:Math.round(a.slice(0,u+1).reduce((o,c)=>o+c.sales,0)/(u+1)*10)/10,upper:Math.round((a.slice(0,u+1).reduce((o,c)=>o+c.sales,0)/(u+1)+8)*10)/10,lower:Math.round((a.slice(0,u+1).reduce((o,c)=>o+c.sales,0)/(u+1)-8)*10)/10}));return r.jsx(C,{data:e,xKey:"month",series:[P({y:40,y2:60,color:"#22c55e",bandOpacity:.08}),P({y:50,label:"Target",color:"#ef4444"}),Z({upper:"upper",lower:"lower",color:"#f59e0b",opacity:.15}),Q("sales",{color:"#3b82f6"}),fe({high:"errorHigh",low:"errorLow",color:"#1e3a5f"}),ee("runAvg",{color:"#f59e0b",strokeWidth:2})],grid:r.jsx(_,{}),axes:r.jsxs(r.Fragment,{children:[r.jsx(A,{position:"bottom"}),r.jsx(A,{position:"left"})]}),height:400})}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <XDSChart data={stockData} xKey="day" series={[candlestick({
    open: 'open',
    high: 'high',
    low: 'low',
    close: 'close',
    upColor: '#22c55e',
    downColor: '#ef4444'
  })]} grid={<XDSChartGrid />} axes={<>
          <XDSChartAxis position="bottom" />
          <XDSChartAxis position="left" />
        </>} height={350} />
}`,...D.parameters?.docs?.source},description:{story:"Candlestick chart",...D.parameters?.docs?.description}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: 'Financial (Candlestick + MA + Volume)',
  render: () => {
    const data = useMemo(() => {
      let sum = 0;
      return stockData.map((d, i) => {
        sum += d.close;
        return {
          ...d,
          ma5: i >= 4 ? Math.round((sum - stockData.slice(0, i - 4).reduce((s, v) => s + v.close, 0)) / 5 * 10) / 10 : undefined
        };
      });
    }, []);
    return <XDSChart data={data} xKey="day" series={[candlestick({
      open: 'open',
      high: 'high',
      low: 'low',
      close: 'close',
      upColor: '#22c55e',
      downColor: '#ef4444'
    }), line('ma5', {
      color: '#f59e0b',
      strokeWidth: 1.5
    }), bar('volume', {
      color: '#94a3b8',
      opacity: 0.3
    })]} grid={<XDSChartGrid />} axes={<>
            <XDSChartAxis position="bottom" />
            <XDSChartAxis position="left" />
          </>} height={400} />;
  }
}`,...F.parameters?.docs?.source},description:{story:"Candlestick + MA line + volume bars",...F.parameters?.docs?.description}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <XDSChart data={predictionData} xKey="x" series={[band({
    upper: 'upper95',
    lower: 'lower95',
    color: '#3b82f6',
    opacity: 0.1
  }), band({
    upper: 'upper80',
    lower: 'lower80',
    color: '#3b82f6',
    opacity: 0.2
  }), line('mean', {
    color: '#3b82f6',
    strokeWidth: 2
  })]} grid={<XDSChartGrid />} axes={<>
          <XDSChartAxis position="bottom" />
          <XDSChartAxis position="left" />
        </>} height={300} />
}`,...G.parameters?.docs?.source},description:{story:"Confidence bands (80% + 95%)",...G.parameters?.docs?.description}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: 'Error Bars + Reference Line',
  render: () => <XDSChart data={salesData} xKey="month" series={[bar('sales', {
    color: '#3b82f6'
  }), errorBar({
    high: 'errorHigh',
    low: 'errorLow',
    color: '#1e3a5f'
  }), referenceLine({
    y: 50,
    label: 'Target',
    color: '#ef4444'
  }), referenceLine({
    y: 40,
    y2: 60,
    label: 'Acceptable',
    color: '#22c55e',
    bandOpacity: 0.1
  })]} grid={<XDSChartGrid />} axes={<>
          <XDSChartAxis position="bottom" />
          <XDSChartAxis position="left" />
        </>} height={300} />
}`,...W.parameters?.docs?.source},description:{story:"Error bars on bar chart + reference line",...W.parameters?.docs?.description}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'WebGL Scatter (dotGL)',
  render: () => <XDSChart data={scatterData} xKey="x" series={[dotGL('y', {
    color: '#3b82f6',
    size: 4
  })]} grid={<XDSChartGrid horizontal vertical />} axes={<>
          <XDSChartAxis position="bottom" />
          <XDSChartAxis position="left" />
        </>} height={400} />
}`,...B.parameters?.docs?.source},description:{story:"WebGL scatter — 200 points",...B.parameters?.docs?.description}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'WebGL Heatmap',
  render: () => <XDSChart data={heatmapData} xKey="hour" series={[heatmapGL({
    xKey: 'hour',
    yKey: 'day',
    valueKey: 'traffic',
    colorRange: ['#eff6ff', '#1e40af']
  })]} axes={<>
          <XDSChartAxis position="bottom" />
          <XDSChartAxis position="left" />
        </>} height={280} />
}`,...E.parameters?.docs?.source},description:{story:"WebGL heatmap — traffic by hour × day",...E.parameters?.docs?.description}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: 'Streaming (streamGL)',
  render: () => {
    const handleRef = useRef<StreamGLHandle | null>(null) as MutableRefObject<StreamGLHandle | null>;
    useEffect(() => {
      let t = 0;
      const interval = setInterval(() => {
        handleRef.current?.push(t, 50 + Math.sin(t / 10) * 30 + Math.random() * 10);
        t++;
      }, 200);
      return () => clearInterval(interval);
    }, []);
    return <XDSChart data={[]} xKey="x" series={[streamGL({
      handleRef,
      color: '#3b82f6'
    })]} grid={<XDSChartGrid />} axes={<>
            <XDSChartAxis position="bottom" />
            <XDSChartAxis position="left" />
          </>} height={300} />;
  }
}`,...X.parameters?.docs?.source},description:{story:"Streaming line — real-time data",...X.parameters?.docs?.description}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  name: 'Kitchen Sink',
  render: () => {
    const data = salesData.map((d, i, arr) => ({
      ...d,
      runAvg: Math.round(arr.slice(0, i + 1).reduce((s, v) => s + v.sales, 0) / (i + 1) * 10) / 10,
      upper: Math.round((arr.slice(0, i + 1).reduce((s, v) => s + v.sales, 0) / (i + 1) + 8) * 10) / 10,
      lower: Math.round((arr.slice(0, i + 1).reduce((s, v) => s + v.sales, 0) / (i + 1) - 8) * 10) / 10
    }));
    return <XDSChart data={data} xKey="month" series={[referenceLine({
      y: 40,
      y2: 60,
      color: '#22c55e',
      bandOpacity: 0.08
    }), referenceLine({
      y: 50,
      label: 'Target',
      color: '#ef4444'
    }), band({
      upper: 'upper',
      lower: 'lower',
      color: '#f59e0b',
      opacity: 0.15
    }), bar('sales', {
      color: '#3b82f6'
    }), errorBar({
      high: 'errorHigh',
      low: 'errorLow',
      color: '#1e3a5f'
    }), line('runAvg', {
      color: '#f59e0b',
      strokeWidth: 2
    })]} grid={<XDSChartGrid />} axes={<>
            <XDSChartAxis position="bottom" />
            <XDSChartAxis position="left" />
          </>} height={400} />;
  }
}`,...K.parameters?.docs?.source},description:{story:"Mixed: bars with error bars, line, reference line, confidence band",...K.parameters?.docs?.description}}};const sr=["Candlestick","FinancialComposite","ConfidenceBands","ErrorBarsWithTarget","WebGLScatter","WebGLHeatmap","StreamingLine","KitchenSink"];export{D as Candlestick,G as ConfidenceBands,W as ErrorBarsWithTarget,F as FinancialComposite,K as KitchenSink,X as StreamingLine,E as WebGLHeatmap,B as WebGLScatter,sr as __namedExportsOrder,ar as default};
