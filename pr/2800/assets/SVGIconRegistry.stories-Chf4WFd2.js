import{U as A,ad as c,r as g,at as b}from"./iframe-yRFQ_7VC.js";import{X as w}from"./XDSStack-CFJ7xIVk.js";import{X as R}from"./XDSSVGIcon-DiUzYXAd.js";import"./preload-helper-Ct5FWWRu.js";import"./stack.stylex-5XIQDawT.js";function N(e,t){if(t==="circle"){const i=Number(e.cx||0),n=Number(e.cy||0),l=Number(e.r||0);return{x:i-l,y:n-l,width:l*2,height:l*2}}if(t==="rect")return{x:Number(e.x||0),y:Number(e.y||0),width:Number(e.width||0),height:Number(e.height||0)};const o=(e.d||`${e.x1||0} ${e.y1||0} ${e.x2||0} ${e.y2||0}`).match(/-?[\d.]+/g)?.map(Number)||[];if(o.length<2)return{x:0,y:0,width:24,height:24};let p=1/0,s=1/0,d=-1/0,f=-1/0;for(let i=0;i<o.length-1;i+=2){const n=o[i],l=o[i+1];n<100&&l<100&&(p=Math.min(p,n),d=Math.max(d,n),s=Math.min(s,l),f=Math.max(f,l))}return isFinite(p)?{x:p,y:s,width:d-p,height:f-s}:{x:0,y:0,width:24,height:24}}function k(e,t){return e.x<=t.x&&e.y<=t.y&&e.x+e.width>=t.x+t.width&&e.y+e.height>=t.y+t.height}function j(e){return e.width*e.height}function V(e,t){if(!t?.props)return null;const a=t.props,o=b.Children.toArray(a.children).filter(b.isValidElement),p=a.fill==="currentColor"&&!a.stroke,s=[];for(const i of o){if(!b.isValidElement(i))continue;const n=i.type;if(!["path","circle","rect","line","polyline","polygon"].includes(n))continue;const l=i.props,{key:r,children:x,...m}=l,h={},D=["d","cx","cy","r","x","y","width","height","rx","ry","x1","y1","x2","y2","points","fillRule","clipRule"];for(const[y,v]of Object.entries(m))if(D.includes(y)&&v!=null){const T=y==="fillRule"?"fill-rule":y==="clipRule"?"clip-rule":y;h[T]=String(v)}let u="stroke";if(p)u="fill";else if(n==="circle"&&m.fill==="currentColor")u="fill";else if(n==="rect"&&Number(h.width||0)>6)u="fill";else if(n==="path"){const y=h.d||"";/[Zz]\s*$/.test(y)&&y.length>30&&(u="fill")}const X=N(h,n);s.push({type:n,attrs:h,role:u,bbox:X})}if(s.length===0)return null;const d=[],f=[];if(s.length===1)d.push(s[0]);else{let i=0,n=0;s.forEach((r,x)=>{const m=j(r.bbox);m>n&&(n=m,i=x)});const l=s[i].bbox;s.forEach((r,x)=>{x===i?d.push({type:r.type,attrs:r.attrs,role:r.role}):k(l,r.bbox)&&j(r.bbox)<n*.5?f.push({type:r.type,attrs:r.attrs,role:r.role}):d.push({type:r.type,attrs:r.attrs,role:r.role})})}return{name:e,primary:d,secondary:f.length>0?f:void 0}}const G={title:"Lab/SVGIconRegistry"},I=["linear","bold","twotone","bulk","broken"],S={render:()=>{const e=[];for(const[t,a]of Object.entries(A)){const o=V(t,a);o&&e.push({name:t,def:o})}return c.jsxs(w,{direction:"vertical",gap:3,children:[c.jsx(g,{type:"large",children:"Default Registry Icons \\u2192 SVGIcon System"}),c.jsxs(g,{type:"supporting",children:[e.length," icons auto-converted. Heuristic: containment-based layer classification (only elements fully contained within a larger shape become secondary). Peer elements (same size, not contained) stay primary."]}),c.jsxs("div",{style:{display:"grid",gridTemplateColumns:`130px repeat(${I.length}, 1fr)`,gap:"8px 4px",alignItems:"center"},children:[c.jsx("div",{}),I.map(t=>c.jsx(g,{type:"label",style:{textAlign:"center",fontSize:10},children:t},t)),e.map(({name:t,def:a})=>c.jsxs(b.Fragment,{children:[c.jsx(g,{type:"label",style:{fontSize:11},children:t}),I.map(o=>c.jsx("div",{style:{display:"flex",justifyContent:"center"},children:c.jsx(R,{icon:a,variation:o,size:"lg"})},`${t}-${o}`))]},t))]})]})}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    const converted: Array<{
      name: string;
      def: SVGIconDef;
    }> = [];
    for (const [name, jsx] of Object.entries(defaultIcons)) {
      const def = jsxSvgToIconDef(name, jsx as ReactElement);
      if (def) {
        converted.push({
          name,
          def
        });
      }
    }
    return <XDSStack direction="vertical" gap={3}>
        <XDSText type="large">
          Default Registry Icons \\u2192 SVGIcon System
        </XDSText>
        <XDSText type="supporting">
          {converted.length} icons auto-converted. Heuristic: containment-based
          layer classification (only elements fully contained within a larger
          shape become secondary). Peer elements (same size, not contained) stay
          primary.
        </XDSText>

        <div style={{
        display: 'grid',
        gridTemplateColumns: \`130px repeat(\${VARIATIONS.length}, 1fr)\`,
        gap: '8px 4px',
        alignItems: 'center'
      }}>
          <div />
          {VARIATIONS.map(v => <XDSText key={v} type="label" style={{
          textAlign: 'center',
          fontSize: 10
        }}>
              {v}
            </XDSText>)}

          {converted.map(({
          name,
          def
        }) => <Fragment key={name}>
              <XDSText type="label" style={{
            fontSize: 11
          }}>
                {name}
              </XDSText>
              {VARIATIONS.map(v => <div key={\`\${name}-\${v}\`} style={{
            display: 'flex',
            justifyContent: 'center'
          }}>
                  <XDSSVGIcon icon={def} variation={v} size="lg" />
                </div>)}
            </Fragment>)}
        </div>
      </XDSStack>;
  }
}`,...S.parameters?.docs?.source}}};const B=["DefaultRegistryIcons"];export{S as DefaultRegistryIcons,B as __namedExportsOrder,G as default};
