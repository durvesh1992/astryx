import{at as n,aQ as xe,ad as e,m as Y,ar as ne,ai as ue,aZ as me,aj as ge}from"./iframe-yRFQ_7VC.js";import{X as B}from"./XDSIconButton-qQNkmkAZ.js";import{u as he}from"./useScrollLock-CuP4hIo8.js";import"./preload-helper-Ct5FWWRu.js";const b={dialog:{kVAEAm:"xdsixxii4",kpwlN0:"xds10a8y8t",kzqmXN:"xdsn9wirt",kZKoxP:"xds1dr59a3",ks0D6T:"xds1x1rfll",kskxy:"xds7ab17h",kogj98:"xds1ghz6dp",kmVPX3:"xds1717udv",kQgIW9:"xds1gs6z28",kWkggS:"xdsjbqb8w",kVQacm:"xdsb3r6kr",kI3sdo:"xds1a2a7pz",kGyWv1:"xdsnixb3f",kba3nw:"xds1abwkk1",$$css:!0},image:{ks0D6T:"xds193iq5w",kskxy:"xdsmz0i5r",kVIFPx:"xds19kjcj4",kfzvcC:"xds47corl",k1ekBW:"xds11xpdln",kIyJzY:"xds13dflua xds12w9bfk",kAMwcw:"xds9lcvmn",$$css:!0},imageDragging:{k1ekBW:"xds13b0p5u",$$css:!0},controlButton:{kMwMTN:"xds9e3rv5",$$css:!0}},fe={imageTransform:t=>[{k3aq6I:t!=null?"xdssqj5wx":t,$$css:!0},{"--x-transform":t??void 0}]};function u({isOpen:t,onOpenChange:o,media:r,index:l,defaultIndex:d=0,onIndexChange:m,hasZoom:g=!1,hasAutoPlay:c=!1,xstyle:X,className:T,style:R,ref:P,onClick:a,onKeyDown:y,...se}){const K=n.useRef(null),te=n.useRef(null),N=n.useRef(null),q=l!==void 0,[oe,H]=n.useState(d),p=q?l:oe,O=n.useCallback(s=>{q||H(s),m?.(s)},[q,m,H]),[x,F]=n.useState(1),[k,C]=n.useState({x:0,y:0}),[I,Z]=n.useState(!1),v=n.useRef({x:0,y:0,panX:0,panY:0}),h=Array.isArray(r)?r:[r],w=h.length>1,i=h.length>0?h[Math.min(p,h.length-1)]:null,f=(i?.type??"image")==="video",W=w&&p>0,G=w&&p<h.length-1;he(t),n.useEffect(()=>{F(1),C({x:0,y:0})},[p,i?.src]),xe(()=>{const s=K.current;s&&(t&&!s.open?(N.current=document.activeElement,s.showModal()):!t&&s.open&&(s.close(),N.current instanceof HTMLElement&&N.current.focus()))},[t]);const j=n.useCallback(()=>{o(!1)},[o]),ae=n.useCallback(s=>{s.preventDefault(),j()},[j]),re=n.useCallback(s=>{s.target===s.currentTarget&&j()},[j]),_=n.useCallback(()=>{W&&O(p-1)},[W,p,O]),$=n.useCallback(()=>{G&&O(p+1)},[G,p,O]),ie=n.useCallback(s=>{s.key==="ArrowLeft"?(s.preventDefault(),_()):s.key==="ArrowRight"&&(s.preventDefault(),$())},[_,$]),le=n.useCallback(()=>{g&&(x===1?(F(2),C({x:0,y:0})):(F(1),C({x:0,y:0})))},[g,x]),de=n.useCallback(s=>{x<=1||!g||(Z(!0),v.current={x:s.clientX,y:s.clientY,panX:k.x,panY:k.y})},[x,g,k]);n.useEffect(()=>{if(!I)return;const s=ee=>{const ce=ee.clientX-v.current.x,pe=ee.clientY-v.current.y;C({x:v.current.panX+ce,y:v.current.panY+pe})},J=()=>{Z(!1)};return window.addEventListener("pointermove",s),window.addEventListener("pointerup",J),()=>{window.removeEventListener("pointermove",s),window.removeEventListener("pointerup",J)}},[I]);const Q=x>1,U=x===1?null:`scale(${x}) translate(${k.x/x}px, ${k.y/x}px)`;return i?e.jsx("dialog",{ref:ge(P,K),onCancel:ae,onClick:s=>{re(s),a?.(s)},onKeyDown:s=>{ie(s),y?.(s)},"aria-label":i.alt||"Media viewer",...ue(me("lightbox"),ne(b.dialog,X),T,R),...se,children:e.jsxs("div",{className:"xds78zum5 xdsdt5ytf xds6s0dn4 xdsl56j7k xdsh8yej3 xds5yr21d xds1n2onr6",children:[e.jsx("div",{className:"xds10l6tqk xdsyx6v2t xdsmz3bnw xds1vjfegm",children:e.jsx(B,{icon:e.jsx(Y,{icon:"close",size:"sm",color:"inherit"}),label:"Close",variant:"ghost",onClick:j,xstyle:b.controlButton})}),w&&W&&e.jsx("div",{className:"xds10l6tqk xdswa60dl xds1cb1t30 xds1vjfegm xdsnp31yv",children:e.jsx(B,{icon:e.jsx(Y,{icon:"chevronLeft",size:"sm",color:"inherit"}),label:"Previous",variant:"ghost",onClick:_,xstyle:b.controlButton})}),e.jsxs("div",{className:"xds78zum5 xdsdt5ytf xds6s0dn4 xds193iq5w xdsmz0i5r xdsb3r6kr",children:[e.jsx("div",{ref:te,...{0:{className:"xds78zum5 xds6s0dn4 xdsl56j7k xdsb3r6kr xdst0e3qv xds87ps6o xds2lwn1j"},4:{className:"xds78zum5 xds6s0dn4 xdsl56j7k xdsb3r6kr xds87ps6o xds2lwn1j xds1huxd7x xds2dt3px"},2:{className:"xds78zum5 xds6s0dn4 xdsl56j7k xdsb3r6kr xds87ps6o xds2lwn1j xds1jm3nie"},6:{className:"xds78zum5 xds6s0dn4 xdsl56j7k xdsb3r6kr xds87ps6o xds2lwn1j xds1jm3nie"},1:{className:"xds78zum5 xds6s0dn4 xdsl56j7k xdsb3r6kr xds87ps6o xds2lwn1j xdsi9pz9s"},5:{className:"xds78zum5 xds6s0dn4 xdsl56j7k xdsb3r6kr xds87ps6o xds2lwn1j xdsi9pz9s"},3:{className:"xds78zum5 xds6s0dn4 xdsl56j7k xdsb3r6kr xds87ps6o xds2lwn1j xdsi9pz9s"},7:{className:"xds78zum5 xds6s0dn4 xdsl56j7k xdsb3r6kr xds87ps6o xds2lwn1j xdsi9pz9s"}}[!!(!f&&g&&!Q)<<2|!!(!f&&Q)<<1|!!(!f&&I)<<0],onDoubleClick:f?void 0:le,onPointerDown:f?void 0:de,children:f?e.jsx("video",{src:i.src,"aria-label":i.alt,controls:!0,autoPlay:c,className:"xds193iq5w xdsmz0i5r xds19kjcj4 xds1a2a7pz"}):e.jsx("img",{src:i.src,alt:i.alt,draggable:!1,...ne(b.image,I&&b.imageDragging,U!=null&&fe.imageTransform(U))})}),i.caption&&e.jsx("div",{className:"xds9e3rv5 xds18juvz8 xdsf74fhv xds2b8uid xds1xye8es xds18d9i69 xdsrrkdod xdsrlsmeg xds2lah0s",children:i.caption})]}),w&&G&&e.jsx("div",{className:"xds10l6tqk xdswa60dl xds1cb1t30 xds1vjfegm xdsmz3bnw",children:e.jsx(B,{icon:e.jsx(Y,{icon:"chevronRight",size:"sm",color:"inherit"}),label:"Next",variant:"ghost",onClick:$,xstyle:b.controlButton})}),w&&h.length>1&&e.jsxs("div",{className:"xds10l6tqk xdsyx6v2t xdsnp31yv xds9e3rv5 xdsjm74w1 xdsw6l6zx xds1vjfegm",children:[p+1," / ",h.length]})]})}):null}u.displayName="XDSLightbox";u.__docgenInfo={description:`A fullscreen overlay for viewing images at full resolution.

Supports single image and gallery modes. In gallery mode, provides
prev/next navigation via buttons and arrow keys. Optionally supports
zoom (double-click to toggle 2x) and pan (drag when zoomed).

Uses the native \`<dialog>\` element with \`showModal()\` for focus
trapping and top-layer placement. Dismiss via Escape, close button,
or backdrop click.

@example
\`\`\`
<XDSLightbox
  isOpen={isOpen}
  onOpenChange={setIsOpen}
  media={{src: "/photo.jpg", alt: "A photo"}}
/>
<XDSLightbox
  isOpen={isOpen}
  onOpenChange={setIsOpen}
  media={photos}
/>
<XDSLightbox
  isOpen={isOpen}
  onOpenChange={setIsOpen}
  media={photos}
  index={currentIndex}
  onIndexChange={setCurrentIndex}
/>
\`\`\``,methods:[],displayName:"XDSLightbox",props:{xstyle:{required:!1,tsType:{name:"StyleXStyles"},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDialogElement>",elements:[{name:"HTMLDialogElement"}]},description:"Ref forwarded to the root dialog element"},isOpen:{required:!0,tsType:{name:"boolean"},description:"Whether the lightbox is open."},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(isOpen: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isOpen"}],return:{name:"void"}}},description:"Callback when the lightbox open state changes.\nCalled with `false` on Escape, backdrop click, or close button."},media:{required:!0,tsType:{name:"union",raw:"XDSLightboxMedia | XDSLightboxMedia[]",elements:[{name:"XDSLightboxMedia"},{name:"Array",elements:[{name:"XDSLightboxMedia"}],raw:"XDSLightboxMedia[]"}]},description:`Media to display. Pass a single object for one item, or an array
for gallery mode with prev/next navigation.`},index:{required:!1,tsType:{name:"number"},description:"Current index in gallery mode (when `media` is an array).\nWhen provided, puts the component in controlled mode."},defaultIndex:{required:!1,tsType:{name:"number"},description:`Initial index in gallery mode for uncontrolled usage.
@default 0`,defaultValue:{value:"0",computed:!1}},onIndexChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(index: number) => void",signature:{arguments:[{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:"Callback when the gallery index changes via prev/next navigation."},hasZoom:{required:!1,tsType:{name:"boolean"},description:`Enable zoom on double-click (images only).
When zoomed, drag to pan.
@default false`,defaultValue:{value:"false",computed:!1}},hasAutoPlay:{required:!1,tsType:{name:"boolean"},description:`Whether video should autoplay when the lightbox opens.
@default false`,defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};function be(t){const{media:o,...r}=t,[l,d]=n.useState(!1),[m,g]=n.useState(0),c=n.useCallback((a=0)=>{g(a),d(!0)},[]),X=n.useCallback(()=>{d(!1)},[]),T=n.useMemo(()=>({role:"button",tabIndex:0,"aria-haspopup":"dialog",onClick:()=>c(),onKeyDown:a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),c())}}),[c]),R=n.useCallback(a=>({role:"button",tabIndex:0,"aria-haspopup":"dialog",onClick:()=>c(a),onKeyDown:y=>{(y.key==="Enter"||y.key===" ")&&(y.preventDefault(),c(a))}}),[c]),P=n.useMemo(()=>e.jsx(u,{isOpen:l,onOpenChange:a=>{a||d(!1)},media:o,index:m,onIndexChange:g,...r}),[l,o,m,r]);return{open:c,close:X,isOpen:l,index:m,element:P,triggerProps:T,getTriggerProps:R}}const Oe={title:"Core/Lightbox",component:u,tags:["autodocs"]},V="https://picsum.photos/id/10/1200/800",M=[{src:"https://picsum.photos/id/10/1200/800",alt:"Forest path",caption:"A winding path through the forest"},{src:"https://picsum.photos/id/15/1200/800",alt:"Mountain lake"},{src:"https://picsum.photos/id/20/1200/800",alt:"Beach sunset",caption:"Golden hour at the beach"},{src:"https://picsum.photos/id/25/1200/800",alt:"City skyline"}],S={render:()=>{const[t,o]=n.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>o(!0),children:"Open lightbox"}),e.jsx(u,{isOpen:t,onOpenChange:o,media:{src:V,alt:"Forest path",caption:"A winding path through the forest"}})]})}},D={render:()=>{const[t,o]=n.useState(!1),[r,l]=n.useState(0);return e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{display:"flex",gap:"8px"},children:M.map((d,m)=>e.jsx("img",{src:d.src,alt:d.alt,style:{width:120,height:80,objectFit:"cover",cursor:"pointer",borderRadius:4},onClick:()=>{l(m),o(!0)}},d.src))}),e.jsx(u,{isOpen:t,onOpenChange:o,media:M,index:r,onIndexChange:l})]})}},L={render:()=>{const[t,o]=n.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>o(!0),children:"Open with zoom"}),e.jsx(u,{isOpen:t,onOpenChange:o,media:{src:V,alt:"Forest path"},hasZoom:!0})]})}},z={render:()=>{const[t,o]=n.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>o(!0),children:"Open with caption"}),e.jsx(u,{isOpen:t,onOpenChange:o,media:{src:V,alt:"Forest path",caption:"A beautiful forest path winding through tall trees on a misty morning"}})]})}},E={render:()=>{const[t,o]=n.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx("button",{onClick:()=>o(!0),children:"Open video"}),e.jsx(u,{isOpen:t,onOpenChange:o,media:{src:"https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm",alt:"Flower blooming",type:"video",caption:"A flower blooming in time-lapse"}})]})}},A={render:()=>{const t=be({media:M});return e.jsxs(e.Fragment,{children:[e.jsx("div",{style:{display:"flex",gap:"8px"},children:M.map((o,r)=>e.jsx("img",{src:o.src,alt:o.alt,style:{width:120,height:80,objectFit:"cover",cursor:"pointer",borderRadius:4},...t.getTriggerProps(r)},o.src))}),t.element]})}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <button onClick={() => setIsOpen(true)}>Open lightbox</button>
        <XDSLightbox isOpen={isOpen} onOpenChange={setIsOpen} media={{
        src: SAMPLE_IMAGE,
        alt: 'Forest path',
        caption: 'A winding path through the forest'
      }} />
      </>;
  }
}`,...S.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [index, setIndex] = useState(0);
    return <>
        <div style={{
        display: 'flex',
        gap: '8px'
      }}>
          {GALLERY_MEDIA.map((item, i) => <img key={item.src} src={item.src} alt={item.alt} style={{
          width: 120,
          height: 80,
          objectFit: 'cover',
          cursor: 'pointer',
          borderRadius: 4
        }} onClick={() => {
          setIndex(i);
          setIsOpen(true);
        }} />)}
        </div>
        <XDSLightbox isOpen={isOpen} onOpenChange={setIsOpen} media={GALLERY_MEDIA} index={index} onIndexChange={setIndex} />
      </>;
  }
}`,...D.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <button onClick={() => setIsOpen(true)}>Open with zoom</button>
        <XDSLightbox isOpen={isOpen} onOpenChange={setIsOpen} media={{
        src: SAMPLE_IMAGE,
        alt: 'Forest path'
      }} hasZoom />
      </>;
  }
}`,...L.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <button onClick={() => setIsOpen(true)}>Open with caption</button>
        <XDSLightbox isOpen={isOpen} onOpenChange={setIsOpen} media={{
        src: SAMPLE_IMAGE,
        alt: 'Forest path',
        caption: 'A beautiful forest path winding through tall trees on a misty morning'
      }} />
      </>;
  }
}`,...z.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <button onClick={() => setIsOpen(true)}>Open video</button>
        <XDSLightbox isOpen={isOpen} onOpenChange={setIsOpen} media={{
        src: 'https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.webm',
        alt: 'Flower blooming',
        type: 'video',
        caption: 'A flower blooming in time-lapse'
      }} />
      </>;
  }
}`,...E.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => {
    const lightbox = useXDSLightbox({
      media: GALLERY_MEDIA
    });
    return <>
        <div style={{
        display: 'flex',
        gap: '8px'
      }}>
          {GALLERY_MEDIA.map((item, i) => <img key={item.src} src={item.src} alt={item.alt} style={{
          width: 120,
          height: 80,
          objectFit: 'cover',
          cursor: 'pointer',
          borderRadius: 4
        }} {...lightbox.getTriggerProps(i)} />)}
        </div>
        {lightbox.element}
      </>;
  }
}`,...A.parameters?.docs?.source}}};const Ce=["Default","Gallery","WithZoom","WithCaption","Video","WithHook"];export{S as Default,D as Gallery,E as Video,z as WithCaption,A as WithHook,L as WithZoom,Ce as __namedExportsOrder,Oe as default};
