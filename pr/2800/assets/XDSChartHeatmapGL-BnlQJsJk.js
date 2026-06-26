import{at as a,ad as k}from"./iframe-yRFQ_7VC.js";import{u as H,b as N,i as z}from"./ChartContext-DZbKxN5B.js";import{h as J,m as Q,a as Z,g as $,c as K,s as tt}from"./webgl-B2CDFegl.js";const et=`
  attribute vec2 a_position;
  attribute vec3 a_color;
  uniform vec2 u_resolution;
  varying vec3 v_color;
  void main() {
    vec2 clip = (a_position / u_resolution) * 2.0 - 1.0;
    gl_Position = vec4(clip.x, -clip.y, 0.0, 1.0);
    v_color = a_color;
  }
`,nt=`
  precision mediump float;
  varying vec3 v_color;
  void main() {
    gl_FragColor = vec4(v_color, 1.0);
  }
`;function rt(e,l){const c=Math.max(0,Math.min(1,l));if(e.length===1)return e[0];const d=c*(e.length-1),r=Math.floor(d),m=Math.min(r+1,e.length-1),o=d-r;return[e[r][0]+o*(e[m][0]-e[r][0]),e[r][1]+o*(e[m][1]-e[r][1]),e[r][2]+o*(e[m][2]-e[r][2])]}function ot({xKey:e,yKey:l,valueKey:c,colorRange:d,domain:r,cellGap:m=1}){const{data:o,xScale:g,width:u,height:s}=H(),p=a.useRef(null),R=a.useRef(null),v=a.useRef(null),S=a.useRef(null),w=a.useMemo(()=>d.map(J),[d]),h=a.useMemo(()=>{const n=[...new Set(o.map(t=>String(t[l])))];return N().domain(n).range([0,s]).padding(.05)},[o,l,s]),E=a.useMemo(()=>{if(r)return r;let n=1/0,t=-1/0;for(const f of o){const i=f[c];typeof i=="number"&&(i<n&&(n=i),i>t&&(t=i))}return[n,t]},[o,c,r]);return a.useEffect(()=>{const n=S.current;if(n)return p.current||(p.current=document.createElement("canvas")),Q(n,p.current,u,s)},[u,s]),a.useEffect(()=>{const n=p.current;if(!n||u<=0||s<=0||!z(g))return;Z(n,u,s),R.current||(R.current=$(n));const t=R.current;if(!t)return;v.current||(v.current=K(t,et,nt));const f=v.current;if(!f)return;t.viewport(0,0,n.width,n.height),tt(t),t.useProgram(f);const i=[],L=[],[C,I]=E,U=I-C||1,A=m,W=g.bandwidth(),P=h.bandwidth();for(const b of o){const _=g(String(b[e])),x=h(String(b[l]));if(_==null||x==null)continue;const Y=((typeof b[c]=="number"?b[c]:0)-C)/U,[O,X,j]=rt(w,Y),y=_+A/2,B=_+W-A/2,T=x+A/2,F=x+P-A/2;i.push(y,T,B,T,y,F,B,T,B,F,y,F);for(let D=0;D<6;D++)L.push(O,X,j)}const M=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,M),t.bufferData(t.ARRAY_BUFFER,new Float32Array(i),t.STATIC_DRAW);const G=t.getAttribLocation(f,"a_position");t.enableVertexAttribArray(G),t.vertexAttribPointer(G,2,t.FLOAT,!1,0,0);const V=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,V),t.bufferData(t.ARRAY_BUFFER,new Float32Array(L),t.STATIC_DRAW);const q=t.getAttribLocation(f,"a_color");t.enableVertexAttribArray(q),t.vertexAttribPointer(q,3,t.FLOAT,!1,0,0),t.uniform2f(t.getUniformLocation(f,"u_resolution"),u,s),t.drawArrays(t.TRIANGLES,0,i.length/2),t.deleteBuffer(M),t.deleteBuffer(V)},[o,e,l,c,g,h,u,s,E,w,m]),u<=0||s<=0?null:k.jsx("g",{ref:S})}ot.__docgenInfo={description:"",methods:[],displayName:"XDSChartHeatmapGL",props:{xKey:{required:!0,tsType:{name:"string"},description:""},yKey:{required:!0,tsType:{name:"string"},description:""},valueKey:{required:!0,tsType:{name:"string"},description:""},colorRange:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},domain:{required:!1,tsType:{name:"tuple",raw:"[number, number]",elements:[{name:"number"},{name:"number"}]},description:""},cellGap:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}}}};export{ot as X};
