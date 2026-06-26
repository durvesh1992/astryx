import{at as l,ad as a,ai as k,aZ as K,aj as ke,v as Ve}from"./iframe-yRFQ_7VC.js";import{X as De}from"./XDSField-COi97ivg.js";import"./preload-helper-Ct5FWWRu.js";import"./XDSFieldStatus-BgnciRVy.js";function w(d,n,t){return Math.min(Math.max(d,n),t)}function Q(d,n,t){if(t<=0)return d;const j=Math.round((d-n)/t);return n+j*t}function C(d,n,t){return t===n?0:(d-n)/(t-n)*100}function c({ref:d,...n}){const{label:t,isLabelHidden:j=!1,description:y,isDisabled:i=!1,isOptional:L=!1,isRequired:O=!1,status:f,labelTooltip:oe,min:o=0,max:m=100,step:h=1,orientation:V="horizontal",formatValue:N,valueDisplay:Y="tooltip",marks:Z,width:ie,xstyle:ue,className:ce,style:me,"data-testid":ve,value:D,onChange:I,onChangeEnd:J}=n,p=Array.isArray(D),X=p&&"minStepsBetweenThumbs"in n?n.minStepsBetweenThumbs??0:0,b=V==="horizontal",ee=l.useId(),se=l.useId(),ae=l.useId(),G=l.useRef(null),z=l.useRef(null),[pe,te]=l.useState(null),P=[];y&&P.push(se),f?.message&&P.push(ae);const ge=P.length>0?P.join(" "):void 0,g=l.useMemo(()=>p?D:[D??o],[p,D,o]),le=l.useRef(g);le.current=g;const M=l.useCallback((e,r)=>{const x=G.current;if(!x)return o;const s=x.getBoundingClientRect();let u;b?u=(e-s.left)/s.width:u=1-(r-s.top)/s.height,u=w(u,0,1);const v=o+u*(m-o);return w(Q(v,o,h),o,m)},[o,m,h,b]),de=l.useCallback(e=>{if(!p)return 0;const[r,x]=g,s=Math.abs(e-r),u=Math.abs(e-x);return s<=u?0:1},[p,g]),S=l.useCallback((e,r)=>{if(i)return;const x=w(Q(r,o,h),o,m);if(p){const s=[...g];s[e]=x;const u=X*h;e===0?s[0]=Math.min(s[0],s[1]-u):s[1]=Math.max(s[1],s[0]+u),s[0]=w(s[0],o,m),s[1]=w(s[1],o,m),I?.(s)}else I?.(x)},[i,p,g,o,m,h,X,I]),ne=l.useRef(J);ne.current=J;const q=l.useCallback(e=>{const r=e??le.current,x=ne.current;x?.(p?r:r[0])},[p]),be=l.useCallback(e=>{if(i)return;e.preventDefault();const r=e.target.closest("[data-mark-value]"),x=r?Number(r.dataset.markValue):M(e.clientX,e.clientY),s=de(x);z.current=s,te(s),S(s,x);const u=G.current;u&&u.querySelectorAll('[role="slider"]')[s]?.focus(),typeof e.currentTarget.setPointerCapture=="function"&&e.currentTarget.setPointerCapture(e.pointerId)},[i,M,de,S]),he=l.useCallback(e=>{if(z.current===null||i)return;const r=M(e.clientX,e.clientY);S(z.current,r)},[i,M,S]),re=l.useCallback(e=>{z.current!==null&&(z.current=null,te(null),q())},[q]),fe=l.useCallback((e,r)=>{if(i)return;const x=g[e];let s;switch(r.key){case"ArrowRight":case"ArrowUp":s=x+h;break;case"ArrowLeft":case"ArrowDown":s=x-h;break;case"PageUp":s=x+h*10;break;case"PageDown":s=x-h*10;break;case"Home":s=o;break;case"End":s=m;break;default:return}r.preventDefault();const u=w(Q(s,o,h),o,m);if(S(e,s),p){const v=[...g];v[e]=u;const T=X*h;e===0?v[0]=Math.min(v[0],v[1]-T):v[1]=Math.max(v[1],v[0]+T),v[0]=w(v[0],o,m),v[1]=w(v[1],o,m),q(v)}else q([u])},[i,p,g,h,o,m,X,S,q]),R=e=>N?N(e):String(e),we=e=>{const r=g[e],x=C(r,o,m),s=b?{left:`${x}%`}:{bottom:`${x}%`,left:"50%"},u=p?e===0?`${t}, minimum value`:`${t}, maximum value`:t,v=Y==="tooltip",T=b?"above":"start",xe=a.jsx("div",{id:p?void 0:ee,role:"slider",tabIndex:i?-1:0,"aria-valuemin":o,"aria-valuemax":m,"aria-valuenow":r,"aria-valuetext":N?N(r):void 0,"aria-orientation":V,"aria-disabled":i||void 0,"aria-invalid":f?.type==="error"?!0:void 0,"aria-label":u,"aria-describedby":ge,onKeyDown:Se=>fe(e,Se),...k(K("slider-thumb",{orientation:V,disabled:i?"disabled":null}),{0:{className:"xds10l6tqk xdsw4jnvo xds1qx5ct2 xdsjspbzw xds1ewilqj xds106061f xdsuedmi6 xds12w9bfk xdslr8y92 xds1a2a7pz xds1jm3nie xds1vjfegm xds1nrll8i xds1m9mm8y"},8:{className:"xds10l6tqk xdsw4jnvo xds1qx5ct2 xdsjspbzw xds1ewilqj xds11lhmoz xds106061f xdsuedmi6 xds12w9bfk xdslr8y92 xds1a2a7pz xds1jm3nie xds1vjfegm xdswa60dl"},4:{className:"xds10l6tqk xdsw4jnvo xds1qx5ct2 xdsjspbzw xds106061f xdsuedmi6 xds12w9bfk xdslr8y92 xds1a2a7pz xds1jm3nie xds1vjfegm xds1nrll8i xds1m9mm8y xds1ewilqj xdsyxu9wt"},12:{className:"xds10l6tqk xdsw4jnvo xds1qx5ct2 xdsjspbzw xds11lhmoz xds106061f xdsuedmi6 xds12w9bfk xdslr8y92 xds1a2a7pz xds1jm3nie xds1vjfegm xdswa60dl xds1ewilqj xdsyxu9wt"},2:{className:"xds10l6tqk xdsw4jnvo xds1qx5ct2 xdsjspbzw xds1ewilqj xds106061f xdsuedmi6 xds12w9bfk xdslr8y92 xds1jm3nie xds1vjfegm xds1nrll8i xds1m9mm8y xds1a2a7pz xds17nn4n9 xds1wfwxd8 xds7s97pk"},10:{className:"xds10l6tqk xdsw4jnvo xds1qx5ct2 xdsjspbzw xds1ewilqj xds11lhmoz xds106061f xdsuedmi6 xds12w9bfk xdslr8y92 xds1jm3nie xds1vjfegm xdswa60dl xds1a2a7pz xds17nn4n9 xds1wfwxd8 xds7s97pk"},6:{className:"xds10l6tqk xdsw4jnvo xds1qx5ct2 xdsjspbzw xds106061f xdsuedmi6 xds12w9bfk xdslr8y92 xds1jm3nie xds1vjfegm xds1nrll8i xds1m9mm8y xds1ewilqj xdsyxu9wt xds1a2a7pz xds17nn4n9 xds1wfwxd8 xds7s97pk"},14:{className:"xds10l6tqk xdsw4jnvo xds1qx5ct2 xdsjspbzw xds11lhmoz xds106061f xdsuedmi6 xds12w9bfk xdslr8y92 xds1jm3nie xds1vjfegm xdswa60dl xds1ewilqj xdsyxu9wt xds1a2a7pz xds17nn4n9 xds1wfwxd8 xds7s97pk"},1:{className:"xds10l6tqk xdsw4jnvo xds1qx5ct2 xdsjspbzw xds106061f xdsuedmi6 xds12w9bfk xdslr8y92 xds1a2a7pz xds1vjfegm xds1nrll8i xds1m9mm8y xdswmxj5m xds1h6gzvc"},9:{className:"xds10l6tqk xdsw4jnvo xds1qx5ct2 xdsjspbzw xds11lhmoz xds106061f xdsuedmi6 xds12w9bfk xdslr8y92 xds1a2a7pz xds1vjfegm xdswa60dl xdswmxj5m xds1h6gzvc"},5:{className:"xds10l6tqk xdsw4jnvo xds1qx5ct2 xdsjspbzw xds106061f xdsuedmi6 xds12w9bfk xdslr8y92 xds1a2a7pz xds1vjfegm xds1nrll8i xds1m9mm8y xdswmxj5m xds1h6gzvc"},13:{className:"xds10l6tqk xdsw4jnvo xds1qx5ct2 xdsjspbzw xds11lhmoz xds106061f xdsuedmi6 xds12w9bfk xdslr8y92 xds1a2a7pz xds1vjfegm xdswa60dl xdswmxj5m xds1h6gzvc"},3:{className:"xds10l6tqk xdsw4jnvo xds1qx5ct2 xdsjspbzw xds106061f xdsuedmi6 xds12w9bfk xdslr8y92 xds1vjfegm xds1nrll8i xds1m9mm8y xds1a2a7pz xds17nn4n9 xds1wfwxd8 xds7s97pk xdswmxj5m xds1h6gzvc"},11:{className:"xds10l6tqk xdsw4jnvo xds1qx5ct2 xdsjspbzw xds11lhmoz xds106061f xdsuedmi6 xds12w9bfk xdslr8y92 xds1vjfegm xdswa60dl xds1a2a7pz xds17nn4n9 xds1wfwxd8 xds7s97pk xdswmxj5m xds1h6gzvc"},7:{className:"xds10l6tqk xdsw4jnvo xds1qx5ct2 xdsjspbzw xds106061f xdsuedmi6 xds12w9bfk xdslr8y92 xds1vjfegm xds1nrll8i xds1m9mm8y xds1a2a7pz xds17nn4n9 xds1wfwxd8 xds7s97pk xdswmxj5m xds1h6gzvc"},15:{className:"xds10l6tqk xdsw4jnvo xds1qx5ct2 xdsjspbzw xds11lhmoz xds106061f xdsuedmi6 xds12w9bfk xdslr8y92 xds1vjfegm xdswa60dl xds1a2a7pz xds17nn4n9 xds1wfwxd8 xds7s97pk xdswmxj5m xds1h6gzvc"}}[!!b<<3|!i<<2|!i<<1|!!i<<0],void 0,s)},e);return v?a.jsx(Ve,{content:R(r),placement:T,delay:0,focusTrigger:"always",isOpen:pe===e?!0:void 0,children:xe},e):xe},je=(()=>{if(p){const[r,x]=g,s=C(r,o,m),u=C(x,o,m);return b?{left:`${s}%`,width:`${u-s}%`}:{bottom:`${s}%`,height:`${u-s}%`}}const e=C(g[0],o,m);return b?{left:"0%",width:`${e}%`}:{bottom:"0%",height:`${e}%`}})(),ye=Y==="text"?a.jsx("span",{className:"xds9ynric xdscr08ib xds1tgivj0 xdsuxw1ft xds2lah0s",children:p?`${R(g[0])} – ${R(g[1])}`:R(g[0])}):null;return a.jsx(De,{"data-testid":ve,label:t,isLabelHidden:j,description:y,inputID:ee,descriptionID:y?se:void 0,isOptional:L,isRequired:O,isDisabled:i,status:f?{type:f.type,message:f.message,messageID:f.message?ae:void 0}:void 0,labelTooltip:oe,statusVariant:"detached",width:ie,xstyle:ue,className:ce,style:me,children:a.jsxs("div",{...k(K("slider",{orientation:V,disabled:i?"disabled":null}),{className:"xds78zum5 xds6s0dn4 xds1txdalj"}),children:[a.jsxs("div",{ref:ke(d,G),...p?{role:"group","aria-label":t}:void 0,onPointerDown:be,onPointerMove:he,onPointerUp:re,onPointerCancel:re,...{0:{className:"xds1n2onr6 xds78zum5 xds6s0dn4 xds1iyjqo2 xds5ve5x3 xds87ps6o xdsc8icb0 xdsw4jnvo xds1ymw6g xdsdt5ytf xdsl56j7k xds1ypdohk"},2:{className:"xds1n2onr6 xds78zum5 xds6s0dn4 xds1iyjqo2 xds5ve5x3 xds87ps6o xdsc8icb0 xds1qx5ct2 xdsh8yej3 xds1ypdohk"},1:{className:"xds1n2onr6 xds78zum5 xds6s0dn4 xds1iyjqo2 xds5ve5x3 xds87ps6o xdsc8icb0 xdsw4jnvo xds1ymw6g xdsdt5ytf xdsl56j7k xdsbyyjgo xds1h6gzvc"},3:{className:"xds1n2onr6 xds78zum5 xds6s0dn4 xds1iyjqo2 xds5ve5x3 xds87ps6o xdsc8icb0 xds1qx5ct2 xdsh8yej3 xdsbyyjgo xds1h6gzvc"}}[!!b<<1|!!i<<0],children:[a.jsx("div",{"aria-hidden":"true",...k(K("slider-track",{orientation:V}),{0:{className:"xds10l6tqk xdswmxj5m xdsjspbzw xds13vifvy xds1ey2m1c xds51ohtg xds1nrll8i xdsuuh30"},1:{className:"xds10l6tqk xdswmxj5m xdsjspbzw xdsu96u03 xds3m8u43 xdsqu0tyb xdswa60dl xds1cb1t30"}}[!!b<<0])}),a.jsx("div",{"aria-hidden":"true",...k({0:{className:"xds10l6tqk xds1ewilqj xdsjspbzw xds51ohtg xds1nrll8i xdsuuh30"},1:{className:"xds10l6tqk xds1ewilqj xdsjspbzw xdsqu0tyb xdswa60dl xds1cb1t30"}}[!!b<<0],{style:je})}),Z&&a.jsx("div",{"aria-hidden":"true",...{0:{className:"xds10l6tqk xds13vifvy xds1ey2m1c xds1nrll8i"},1:{className:"xds10l6tqk xdsu96u03 xds3m8u43 xdswa60dl"}}[!!b<<0],children:Z.map(e=>{const r=C(e.value,o,m),x=b?{left:`${r}%`}:{bottom:`${r}%`};return a.jsxs("div",{children:[a.jsx("div",{"data-testid":"slider-mark","data-mark-value":e.value,...k({0:{className:"xds10l6tqk xds7njt3n xdsjspbzw xds36qwtl xds1xc55vz xds1m9mm8y"},1:{className:"xds10l6tqk xds7njt3n xdsjspbzw xdsfo62xy xdsdk7pt xds11lhmoz"}}[!!b<<0],{style:x})}),e.label&&a.jsx("span",{"data-testid":"slider-mark-label","data-mark-value":e.value,...k({0:{className:"xds10l6tqk xds9ynric xds141an7d xdsv1l7n4 xdsuxw1ft xds131p8rn xds1trqr8e"},1:{className:"xds10l6tqk xds9ynric xds141an7d xdsv1l7n4 xdsuxw1ft xdsuuh30 xdsuivejd"}}[!!b<<0],{style:x}),children:e.label})]},e.value)})}),g.map((e,r)=>we(r))]}),ye]})})}c.displayName="XDSSlider";c.__docgenInfo={description:'A slider component for selecting numeric values or ranges.\n\n@example\n```\n<XDSSlider label="Volume" value={50} onChange={setValue} />\n<XDSSlider label="Price range" value={[20, 80]} onChange={setRange} />\n```',methods:[],displayName:"XDSSlider"};const Xe={title:"Core/Slider",component:c,tags:["autodocs"],argTypes:{label:{control:"text",description:"Label text (required)"},isLabelHidden:{control:"boolean",description:"Visually hide the label (still accessible to screen readers)"},isDisabled:{control:"boolean",description:"Whether the slider is disabled"},min:{control:"number",description:"Minimum value"},max:{control:"number",description:"Maximum value"},step:{control:"number",description:"Step increment"},orientation:{control:"select",options:["horizontal","vertical"],description:"Slider orientation"},valueDisplay:{control:"select",options:["tooltip","text","none"],description:"How the value is displayed"}}},$={render:d=>{const[n,t]=l.useState(50);return a.jsx(c,{...d,value:n,onChange:t})},args:{label:"Volume"}},W={render:d=>{const[n,t]=l.useState([20,80]);return a.jsx(c,{...d,value:n,onChange:t})},args:{label:"Price range"}},A={render:d=>{const[n,t]=l.useState(50);return a.jsx(c,{...d,value:n,onChange:t})},args:{label:"Volume",marks:[{value:0,label:"0"},{value:25,label:"25"},{value:50,label:"50"},{value:75,label:"75"},{value:100,label:"100"}]}},U={render:d=>{const[n,t]=l.useState(50);return a.jsx(c,{...d,value:n,onChange:t,valueDisplay:"text"})},args:{label:"Quantity",min:0,max:100,step:10}},E={render:d=>{const[n,t]=l.useState(72);return a.jsx(c,{...d,value:n,onChange:t,valueDisplay:"text"})},args:{label:"Temperature",min:60,max:90,step:1,formatValue:d=>`${d}°F`}},F={render:d=>a.jsx(c,{...d}),args:{label:"Volume",value:50,isDisabled:!0}},B={render:d=>{const[n,t]=l.useState(50);return a.jsx("div",{style:{height:200},children:a.jsx(c,{...d,value:n,onChange:t})})},args:{label:"Volume",orientation:"vertical"}},_={render:()=>{const[d,n]=l.useState(95),[t,j]=l.useState(50),[y,i]=l.useState(75);return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",maxWidth:"400px"},children:[a.jsx(c,{label:"CPU Usage",value:d,onChange:n,status:{type:"error",message:"CPU usage is critically high"}}),a.jsx(c,{label:"Memory",value:t,onChange:j,status:{type:"warning",message:"Memory usage is moderate"}}),a.jsx(c,{label:"Disk",value:y,onChange:i,status:{type:"success",message:"Disk usage is healthy"}})]})}},H={render:()=>{const[d,n]=l.useState(50),[t,j]=l.useState([20,80]),[y,i]=l.useState(30),[L,O]=l.useState(72);return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",maxWidth:"400px"},children:[a.jsx(c,{label:"Default slider",value:d,onChange:n}),a.jsx(c,{label:"Range slider",value:t,onChange:j}),a.jsx(c,{label:"With marks",value:y,onChange:i,marks:[{value:0,label:"0%"},{value:50,label:"50%"},{value:100,label:"100%"}]}),a.jsx(c,{label:"With text display",value:L,onChange:O,formatValue:f=>`${f}°F`,valueDisplay:"text",min:60,max:90}),a.jsx(c,{label:"Disabled",value:50,isDisabled:!0}),a.jsx(c,{label:"No value display",value:d,onChange:n,valueDisplay:"none"})]})}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(50);
    return <XDSSlider {...args as any} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Volume'
  }
}`,...$.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<[number, number]>([20, 80]);
    return <XDSSlider {...args as any} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Price range'
  }
}`,...W.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(50);
    return <XDSSlider {...args as any} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Volume',
    marks: [{
      value: 0,
      label: '0'
    }, {
      value: 25,
      label: '25'
    }, {
      value: 50,
      label: '50'
    }, {
      value: 75,
      label: '75'
    }, {
      value: 100,
      label: '100'
    }]
  }
}`,...A.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(50);
    return <XDSSlider {...args as any} value={value} onChange={setValue} valueDisplay="text" />;
  },
  args: {
    label: 'Quantity',
    min: 0,
    max: 100,
    step: 10
  }
}`,...U.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(72);
    return <XDSSlider {...args as any} value={value} onChange={setValue} valueDisplay="text" />;
  },
  args: {
    label: 'Temperature',
    min: 60,
    max: 90,
    step: 1,
    formatValue: (v: number) => \`\${v}°F\`
  }
}`,...E.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: args => {
    return <XDSSlider {...args as any} />;
  },
  args: {
    label: 'Volume',
    value: 50,
    isDisabled: true
  }
}`,...F.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(50);
    return <div style={{
      height: 200
    }}>
        <XDSSlider {...args as any} value={value} onChange={setValue} />
      </div>;
  },
  args: {
    label: 'Volume',
    orientation: 'vertical'
  }
}`,...B.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value1, setValue1] = useState(95);
    const [value2, setValue2] = useState(50);
    const [value3, setValue3] = useState(75);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      maxWidth: '400px'
    }}>
        <XDSSlider label="CPU Usage" value={value1} onChange={setValue1} status={{
        type: 'error',
        message: 'CPU usage is critically high'
      }} />
        <XDSSlider label="Memory" value={value2} onChange={setValue2} status={{
        type: 'warning',
        message: 'Memory usage is moderate'
      }} />
        <XDSSlider label="Disk" value={value3} onChange={setValue3} status={{
        type: 'success',
        message: 'Disk usage is healthy'
      }} />
      </div>;
  }
}`,..._.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [v1, setV1] = useState(50);
    const [v2, setV2] = useState<[number, number]>([20, 80]);
    const [v3, setV3] = useState(30);
    const [v4, setV4] = useState(72);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '32px',
      maxWidth: '400px'
    }}>
        <XDSSlider label="Default slider" value={v1} onChange={setV1} />
        <XDSSlider label="Range slider" value={v2} onChange={setV2} />
        <XDSSlider label="With marks" value={v3} onChange={setV3} marks={[{
        value: 0,
        label: '0%'
      }, {
        value: 50,
        label: '50%'
      }, {
        value: 100,
        label: '100%'
      }]} />
        <XDSSlider label="With text display" value={v4} onChange={setV4} formatValue={v => \`\${v}°F\`} valueDisplay="text" min={60} max={90} />
        <XDSSlider label="Disabled" value={50} isDisabled />
        <XDSSlider label="No value display" value={v1} onChange={setV1} valueDisplay="none" />
      </div>;
  }
}`,...H.parameters?.docs?.source}}};const Pe=["Default","Range","WithMarks","CustomStep","WithFormatValue","Disabled","VerticalOrientation","WithStatus","AllVariations"];export{H as AllVariations,U as CustomStep,$ as Default,F as Disabled,W as Range,B as VerticalOrientation,E as WithFormatValue,A as WithMarks,_ as WithStatus,Pe as __namedExportsOrder,Xe as default};
