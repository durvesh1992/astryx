import{ad as e,ai as V,ar as E,aZ as H,o as Y,at as d,aQ as Z,aj as K,r as a,X as g,q as ee}from"./iframe-yRFQ_7VC.js";import{u as te}from"./useClickableContainer-B3IEmxS8.js";import{X as u}from"./XDSAspectRatio-C_SkGWhh.js";import{X as N}from"./XDSCard-CyDoBnn3.js";import{X as se,b as re}from"./XDSLayoutContent-DBrMIkuH.js";import{X as oe}from"./XDSGrid-BQOCBtio.js";import{X as p}from"./XDSVStack-uMCoSZ_B.js";import{X as M}from"./XDSHeading---Kr4LhL.js";import"./preload-helper-Ct5FWWRu.js";import"./container.stylex-BI6SFdSl.js";import"./padding.stylex-BDg7w1Mn.js";import"./stack.stylex-5XIQDawT.js";import"./stackItem.stylex-CYo-hkeX.js";import"./XDSStack-CFJ7xIVk.js";const G={xds1o1la66:"xds1o1la66",$$css:!0},B={root:{kVAEAm:"xds1n2onr6",kVQacm:"xds7giv3",kXHlph:null,kORKVm:null,$$css:!0}},s={base:{kVAEAm:"xds10l6tqk",k1xSpc:"xds78zum5",kXwgrk:"xdsdt5ytf",kOIVth:"xds1txdalj",kmVPX3:"xds1b2ylru",kfzvcC:"xds47corl",k1ekBW:"xdsxup5nn",kIyJzY:"xdsuedmi6 xds12w9bfk",kAMwcw:"xdslr8y92",$$css:!0},fill:{kpwlN0:"xds10a8y8t",kkqhue:null,kLqNvP:null,kt4wiu:null,kbCHJM:null,kCIrl2:null,kYYq5F:null,k87sOh:null,krVfgx:null,$$css:!0},bottom:{kkqhue:"xds17y0mx6",kLqNvP:null,kt4wiu:null,kbCHJM:null,kCIrl2:null,krVfgx:"xds1ey2m1c",$$css:!0},top:{kkqhue:"xds17y0mx6",kLqNvP:null,kt4wiu:null,kbCHJM:null,kCIrl2:null,k87sOh:"xds13vifvy",$$css:!0},alignStart:{kGNEyG:"xds1cy8zhl",kjj79g:"xds1nhvcw1",$$css:!0},alignCenter:{kGNEyG:"xds6s0dn4",kjj79g:"xdsl56j7k",$$css:!0},alignEnd:{kGNEyG:"xdsuk3077",kjj79g:"xds1nhvcw1",$$css:!0},scrimDark:{kWkggS:"xds1u4601x",$$css:!0},scrimLight:{kWkggS:"xds1rkw3yq",$$css:!0},hidden:{kSiTet:"xdsg01cxk",k33iCy:"xdslshs6z",$$css:!0},hiddenBottom:{k3aq6I:"xds1weeur4",$$css:!0},hiddenTop:{k3aq6I:"xds105ttfm",$$css:!0},visible:{kSiTet:"xds1hc1fzr",k33iCy:"xdsnpuxes",kfzvcC:"xds67bb7w",k3aq6I:"xdsnn1q72",kamtoy:"xds4itv7f",$$css:!0},visibleFromBottom:{kamtoy:"xds4itv7f",k1tdAh:"xdshbqy3z",$$css:!0},visibleFromTop:{kamtoy:"xds4itv7f",k1tdAh:"xdsub2912",$$css:!0},hoverReveal:{kSiTet:"xdsg01cxk xds1mhwa8e xds13ub6kt",k33iCy:"xdslshs6z xdsm0b3rk xds1vl0gs4",kfzvcC:"xds47corl xds1pdf1po xdsucygrf",$$css:!0},hoverRevealBottom:{k3aq6I:"xds1weeur4 xds650l9 xds1ak8qx5",$$css:!0},hoverRevealTop:{k3aq6I:"xds105ttfm xds650l9 xds1ak8qx5",$$css:!0},focusReveal:{kSiTet:"xdsg01cxk xds13ub6kt",k33iCy:"xdslshs6z xds1vl0gs4",kfzvcC:"xds47corl xdsucygrf",$$css:!0},focusRevealBottom:{k3aq6I:"xds1weeur4 xds1ak8qx5",$$css:!0},focusRevealTop:{k3aq6I:"xds105ttfm xds1ak8qx5",$$css:!0}},ne={start:s.alignStart,center:s.alignCenter,end:s.alignEnd},ae={fill:s.fill,bottom:s.bottom,top:s.top};function ie(r,t){return r?{base:s.visible,bottom:t==="bottom"&&s.visibleFromBottom,top:t==="top"&&s.visibleFromTop}:{base:s.hidden,bottom:t==="bottom"&&s.hiddenBottom,top:t==="top"&&s.hiddenTop}}function le(r,t){switch(r){case"always":return{base:s.visible,bottom:t==="bottom"&&s.visibleFromBottom,top:t==="top"&&s.visibleFromTop};case"hover":case"hover-or-focus":return{base:s.hoverReveal,bottom:t==="bottom"&&s.hoverRevealBottom,top:t==="top"&&s.hoverRevealTop};case"focus":return{base:s.focusReveal,bottom:t==="bottom"&&s.focusRevealBottom,top:t==="top"&&s.focusRevealTop}}}function _({scrim:r,position:t,align:i,showOn:l,isOpen:c,children:m}){const h=c!==void 0,x=r==="dark"?"dark":r==="light"?"light":null,S=x?e.jsx(Y,{mode:x,children:m}):m,v=h?ie(c,t):le(l,t);return e.jsx("div",{...V(H("overlay-scrim",{position:t}),E(s.base,ae[t],ne[i],r==="dark"&&s.scrimDark,r==="light"&&s.scrimLight,v.base,v.bottom,v.top)),inert:h&&!c?!0:void 0,children:S})}_.__docgenInfo={description:"",methods:[],displayName:"OverlayScrim",props:{scrim:{required:!0,tsType:{name:"union",raw:"'dark' | 'light' | false",elements:[{name:"literal",value:"'dark'"},{name:"literal",value:"'light'"},{name:"literal",value:"false"}]},description:""},position:{required:!0,tsType:{name:"union",raw:"'fill' | 'bottom' | 'top'",elements:[{name:"literal",value:"'fill'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'top'"}]},description:""},align:{required:!0,tsType:{name:"union",raw:"'start' | 'center' | 'end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'end'"}]},description:""},showOn:{required:!0,tsType:{name:"union",raw:"'hover' | 'always' | 'focus' | 'hover-or-focus'",elements:[{name:"literal",value:"'hover'"},{name:"literal",value:"'always'"},{name:"literal",value:"'focus'"},{name:"literal",value:"'hover-or-focus'"}]},description:""},isOpen:{required:!0,tsType:{name:"union",raw:"boolean | undefined",elements:[{name:"boolean"},{name:"undefined"}]},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};function ce(){return typeof window>"u"?!1:window.matchMedia("(hover: none)").matches}function de(r){if(typeof window>"u")return()=>{};const t=window.matchMedia("(hover: none)");return t.addEventListener("change",r),()=>t.removeEventListener("change",r)}function pe(){return!1}function z({content:r,showOn:t="always",isOpen:i,scrim:l="dark",position:c="fill",align:m="end"}={}){const h=d.useRef(null),x=d.useSyncExternalStore(de,ce,pe),[S,v]=d.useState(!1),o=x&&(t==="hover"||t==="hover-or-focus"),D=d.useCallback(()=>{v($=>!$)},[]),{onClick:k,onMouseUp:y}=te({containerRef:h,onClick:o?D:void 0,disabled:!o}),L=i!==void 0?i:o?S:void 0,q=E(G,B.root),Q=d.useMemo(()=>({className:q.className??void 0,style:q.style??void 0,onClick:o?k:void 0,onMouseUp:o?y:void 0}),[q.className,q.style,o,k,y]),P=d.useCallback($=>e.jsx(_,{scrim:l,position:c,align:m,showOn:t,isOpen:L,children:$}),[l,c,m,t,L]),W=r!=null?P(r):null;return{containerRef:h,containerProps:Q,element:W,renderOverlay:P}}function n({children:r,content:t,showOn:i,isOpen:l,scrim:c,position:m,align:h,xstyle:x,className:S,style:v,ref:I}){const o=z({content:t,showOn:i,isOpen:l,scrim:c,position:m,align:h});return Z(()=>{const D=o.containerRef.current;if(!D)return;const k=D.firstElementChild;if(!k)return;const y=getComputedStyle(k).borderRadius;y&&y!=="0px"&&(D.style.borderRadius=y)},[]),e.jsxs("div",{ref:K(I,o.containerRef),...V(H("overlay"),E(G,B.root,x),S,v),onClick:o.containerProps.onClick,onMouseUp:o.containerProps.onMouseUp,children:[r,o.element]})}n.displayName="XDSOverlay";n.__docgenInfo={description:`Overlay — renders content on top of media with a scrim background
and automatic theme inversion.

\`children\` = base content, \`content\` = what appears on top.

@compositionHint Wrap images, video, or media content.

@example
\`\`\`
<XDSOverlay
  showOn="hover"
  content={<XDSButton label="Quick view" variant="ghost" />}>
  <XDSAspectRatio ratio={16/9}>
    <img src="hero.jpg" style={{objectFit: 'cover', width: '100%', height: '100%'}} />
  </XDSAspectRatio>
</XDSOverlay>
\`\`\``,methods:[],displayName:"XDSOverlay",props:{ref:{required:!1,tsType:{name:"Ref",elements:[{name:"HTMLDivElement"}],raw:"Ref<HTMLDivElement>"},description:"Ref forwarded to the container element."},children:{required:!1,tsType:{name:"ReactNode"},description:"Base content (image, card, video, etc.)."},content:{required:!0,tsType:{name:"ReactNode"},description:"Content rendered inside the overlay scrim."},showOn:{required:!1,tsType:{name:"union",raw:"'hover' | 'always' | 'focus' | 'hover-or-focus'",elements:[{name:"literal",value:"'hover'"},{name:"literal",value:"'always'"},{name:"literal",value:"'focus'"},{name:"literal",value:"'hover-or-focus'"}]},description:'@default "always"'},isOpen:{required:!1,tsType:{name:"boolean"},description:"JS-controlled visibility override."},scrim:{required:!1,tsType:{name:"union",raw:"'dark' | 'light' | false",elements:[{name:"literal",value:"'dark'"},{name:"literal",value:"'light'"},{name:"literal",value:"false"}]},description:'@default "dark"'},position:{required:!1,tsType:{name:"union",raw:"'fill' | 'bottom' | 'top'",elements:[{name:"literal",value:"'fill'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'top'"}]},description:'@default "fill"'},align:{required:!1,tsType:{name:"union",raw:"'start' | 'center' | 'end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'end'"}]},description:'@default "end"'},xstyle:{required:!1,tsType:{name:"StyleXStyles"},description:"StyleX styles for layout customization (margins, positioning, sizing).\nMust be a `stylex.create()` value — not an inline style object.\n\n@example\n```\nconst styles = stylex.create({ wrapper: { marginTop: 8 } });\n<XDSOverlay xstyle={styles.wrapper} />\n```"},className:{required:!1,tsType:{name:"string"},description:"CSS class name(s) appended to the root element."},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Inline styles."}}};const ue={metadata:{kmVPX3:"x1tamke2",kg3NbH:null,kuDDbn:null,kE3dHu:null,kP0aTx:null,kpe85a:null,k8WAf4:null,kLKAdn:null,kGO01o:null,$$css:!0}},U="https://picsum.photos/seed/xds-overlay/800/450",F="https://picsum.photos/seed/xds-overlay-2/800/450",J="https://picsum.photos/seed/xds-overlay-3/800/450",me="https://picsum.photos/seed/xds-hero/1200/600",Te={title:"Core/Overlay",component:n,tags:["autodocs"],decorators:[r=>e.jsx("div",{className:"x1eiddq6 x1gt495",children:e.jsx(r,{})})]},f={render:()=>e.jsx("div",{style:{width:400},children:e.jsx(n,{showOn:"hover",align:"center",content:e.jsx(g,{label:"Quick view",variant:"ghost"}),children:e.jsx(u,{ratio:16/9,children:e.jsx("img",{src:U,alt:"Product",className:"xl1xv1r xh8yej3 x5yr21d x1lliihq"})})})})},X={render:()=>e.jsx("div",{style:{width:600},children:e.jsx(n,{position:"bottom",align:"start",content:e.jsxs(p,{gap:1,children:[e.jsx(M,{level:3,children:"Gallery Collection"}),e.jsx(a,{type:"supporting",color:"secondary",children:"24 items · Updated today"})]}),children:e.jsx(u,{ratio:2,children:e.jsx("img",{src:me,alt:"Hero",className:"xl1xv1r xh8yej3 x5yr21d x1lliihq"})})})})},b={render:()=>e.jsx(n,{showOn:"hover",align:"center",content:e.jsx(g,{label:"View Details",variant:"ghost"}),children:e.jsx(N,{width:360,children:e.jsx(se,{content:e.jsx(re,{children:e.jsxs(p,{gap:2,children:[e.jsx(M,{level:3,children:"Project Alpha"}),e.jsx(a,{children:"A comprehensive design system for building internal tools with consistent, accessible interfaces."}),e.jsx(a,{type:"supporting",color:"secondary",children:"Updated 2 hours ago · 12 contributors"})]})})})})})},w={render:()=>e.jsx("div",{style:{width:400},children:e.jsx(n,{showOn:"hover-or-focus",align:"center",content:e.jsx(g,{label:"Edit",variant:"ghost"}),children:e.jsx(u,{ratio:16/9,children:e.jsx("img",{src:F,alt:"Photo",className:"xl1xv1r xh8yej3 x5yr21d x1lliihq"})})})})},j={render:function(){const[t,i]=d.useState(!1);return e.jsxs(p,{gap:4,style:{width:300},children:[e.jsx(g,{label:t?"Cancel upload":"Simulate upload",onClick:()=>i(l=>!l)}),e.jsx(n,{isOpen:t,scrim:"light",align:"center",content:e.jsxs(p,{gap:2,hAlign:"center",children:[e.jsx(ee,{size:"md"}),e.jsx(a,{weight:"bold",children:"Uploading..."})]}),children:e.jsx(u,{ratio:1,children:e.jsx("img",{src:J,alt:"Upload",className:"xl1xv1r xh8yej3 x5yr21d x1lliihq"})})})]})}},O={render:()=>{const r=[{src:"https://picsum.photos/seed/g1/400/400",title:"Mountain Lake"},{src:"https://picsum.photos/seed/g2/400/400",title:"Forest Path"},{src:"https://picsum.photos/seed/g3/400/400",title:"Ocean Sunset"},{src:"https://picsum.photos/seed/g4/400/400",title:"City Skyline"},{src:"https://picsum.photos/seed/g5/400/400",title:"Desert Dunes"},{src:"https://picsum.photos/seed/g6/400/400",title:"Snowy Peaks"}];return e.jsx(oe,{columns:3,gap:4,children:r.map(t=>e.jsx(n,{showOn:"hover",position:"bottom",align:"start",content:e.jsx(a,{weight:"bold",children:t.title}),children:e.jsx(u,{ratio:1,children:e.jsx("img",{src:t.src,alt:t.title,className:"xl1xv1r xh8yej3 x5yr21d x1lliihq"})})},t.title))})}},T={render:()=>e.jsx("div",{style:{width:400},children:e.jsx(n,{showOn:"hover",align:"center",content:e.jsxs(p,{gap:2,hAlign:"center",children:[e.jsx(a,{weight:"bold",size:"lg",children:"▶"}),e.jsx(a,{weight:"bold",children:"Introduction to XDS"})]}),children:e.jsx(u,{ratio:16/9,children:e.jsx("img",{src:U,alt:"Video",className:"xl1xv1r xh8yej3 x5yr21d x1lliihq"})})})})},A={render:function(){const t=z({showOn:"hover",position:"bottom",align:"start",content:e.jsx(M,{level:4,children:"Featured Article"})});return e.jsxs(N,{width:360,ref:t.containerRef,...t.containerProps,children:[e.jsxs("div",{className:"x1n2onr6",children:[e.jsx(u,{ratio:16/9,children:e.jsx("img",{src:F,alt:"Article",className:"xl1xv1r xh8yej3 x5yr21d x1lliihq"})}),t.element]}),e.jsxs(p,{gap:1,xstyle:ue.metadata,children:[e.jsx(a,{type:"supporting",color:"secondary",children:"Jan 15, 2026 · 5 min read"}),e.jsx(a,{type:"supporting",color:"secondary",children:"By Jane Author"})]})]})}},C={render:function(){const[t,i]=d.useState(!1);return e.jsxs(p,{gap:4,style:{width:400},children:[e.jsx(g,{label:t?"Simulate drag leave":"Simulate drag enter",variant:"secondary",onClick:()=>i(l=>!l)}),e.jsx(n,{isOpen:t,align:"center",content:e.jsxs(p,{gap:2,hAlign:"center",children:[e.jsx(a,{size:"lg",children:"📁"}),e.jsx(a,{weight:"bold",children:"Drop files here"})]}),children:e.jsx("div",{className:"xz65tgg x78zum5 x6s0dn4 xl56j7k xdh2fpr xbsl7fq x14i3s5s xur7f20 x1shk3sm",children:e.jsx("p",{className:"x9ynric xv1l7n4",children:"Drop files here or click to browse"})})})]})}},R={render:()=>e.jsx("div",{style:{width:300},children:e.jsx(n,{showOn:"hover",scrim:!1,align:"center",content:e.jsx(g,{label:"♡",variant:"ghost"}),children:e.jsx(u,{ratio:1,children:e.jsx("img",{src:J,alt:"Selected",className:"xl1xv1r xh8yej3 x5yr21d x1lliihq"})})})})};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 400
  }}>
      <XDSOverlay showOn="hover" align="center" content={<XDSButton label="Quick view" variant="ghost" />}>
        <XDSAspectRatio ratio={16 / 9}>
          <img src={SAMPLE_IMAGE} alt="Product" {...stylex.props(styles.image)} />
        </XDSAspectRatio>
      </XDSOverlay>
    </div>
}`,...f.parameters?.docs?.source},description:{story:"Basic hover overlay on an image.",...f.parameters?.docs?.description}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 600
  }}>
      <XDSOverlay position="bottom" align="start" content={<XDSVStack gap={1}>
            <XDSHeading level={3}>Gallery Collection</XDSHeading>
            <XDSText type="supporting" color="secondary">
              24 items · Updated today
            </XDSText>
          </XDSVStack>}>
        <XDSAspectRatio ratio={2}>
          <img src={SAMPLE_HERO} alt="Hero" {...stylex.props(styles.image)} />
        </XDSAspectRatio>
      </XDSOverlay>
    </div>
}`,...X.parameters?.docs?.source},description:{story:"Always-visible bottom strip with title over a hero image.",...X.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <XDSOverlay showOn="hover" align="center" content={<XDSButton label="View Details" variant="ghost" />}>
      <XDSCard width={360}>
        <XDSLayout content={<XDSLayoutContent>
              <XDSVStack gap={2}>
                <XDSHeading level={3}>Project Alpha</XDSHeading>
                <XDSText>
                  A comprehensive design system for building internal tools with
                  consistent, accessible interfaces.
                </XDSText>
                <XDSText type="supporting" color="secondary">
                  Updated 2 hours ago · 12 contributors
                </XDSText>
              </XDSVStack>
            </XDSLayoutContent>} />
      </XDSCard>
    </XDSOverlay>
}`,...b.parameters?.docs?.source},description:{story:"Full overlay wrapping a Card.",...b.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 400
  }}>
      <XDSOverlay showOn="hover-or-focus" align="center" content={<XDSButton label="Edit" variant="ghost" />}>
        <XDSAspectRatio ratio={16 / 9}>
          <img src={SAMPLE_IMAGE_2} alt="Photo" {...stylex.props(styles.image)} />
        </XDSAspectRatio>
      </XDSOverlay>
    </div>
}`,...w.parameters?.docs?.source},description:{story:"Hover + focus — also appears on keyboard focus.",...w.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: function LoadingOverlayStory() {
    const [isUploading, setIsUploading] = useState(false);
    return <XDSVStack gap={4} style={{
      width: 300
    }}>
        <XDSButton label={isUploading ? 'Cancel upload' : 'Simulate upload'} onClick={() => setIsUploading(v => !v)} />
        <XDSOverlay isOpen={isUploading} scrim="light" align="center" content={<XDSVStack gap={2} hAlign="center">
              <XDSSpinner size="md" />
              <XDSText weight="bold">Uploading...</XDSText>
            </XDSVStack>}>
          <XDSAspectRatio ratio={1}>
            <img src={SAMPLE_IMAGE_3} alt="Upload" {...stylex.props(styles.image)} />
          </XDSAspectRatio>
        </XDSOverlay>
      </XDSVStack>;
  }
}`,...j.parameters?.docs?.source},description:{story:"Light scrim for loading/upload states.",...j.parameters?.docs?.description}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: () => {
    const images = [{
      src: 'https://picsum.photos/seed/g1/400/400',
      title: 'Mountain Lake'
    }, {
      src: 'https://picsum.photos/seed/g2/400/400',
      title: 'Forest Path'
    }, {
      src: 'https://picsum.photos/seed/g3/400/400',
      title: 'Ocean Sunset'
    }, {
      src: 'https://picsum.photos/seed/g4/400/400',
      title: 'City Skyline'
    }, {
      src: 'https://picsum.photos/seed/g5/400/400',
      title: 'Desert Dunes'
    }, {
      src: 'https://picsum.photos/seed/g6/400/400',
      title: 'Snowy Peaks'
    }];
    return <XDSGrid columns={3} gap={4}>
        {images.map(img => <XDSOverlay key={img.title} showOn="hover" position="bottom" align="start" content={<XDSText weight="bold">{img.title}</XDSText>}>
            <XDSAspectRatio ratio={1}>
              <img src={img.src} alt={img.title} {...stylex.props(styles.image)} />
            </XDSAspectRatio>
          </XDSOverlay>)}
      </XDSGrid>;
  }
}`,...O.parameters?.docs?.source},description:{story:"Gallery grid — each image has its own hover overlay.",...O.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 400
  }}>
      <XDSOverlay showOn="hover" align="center" content={<XDSVStack gap={2} hAlign="center">
            <XDSText weight="bold" size="lg">
              ▶
            </XDSText>
            <XDSText weight="bold">Introduction to XDS</XDSText>
          </XDSVStack>}>
        <XDSAspectRatio ratio={16 / 9}>
          <img src={SAMPLE_IMAGE} alt="Video" {...stylex.props(styles.image)} />
        </XDSAspectRatio>
      </XDSOverlay>
    </div>
}`,...T.parameters?.docs?.source},description:{story:"Video thumbnail with duration badge (always visible) + hover play overlay.",...T.parameters?.docs?.description}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: function DisconnectedHoverStory() {
    const overlay = useXDSOverlay({
      showOn: 'hover',
      position: 'bottom',
      align: 'start',
      content: <XDSHeading level={4}>Featured Article</XDSHeading>
    });
    return <XDSCard width={360} ref={overlay.containerRef as React.RefObject<HTMLDivElement>} {...overlay.containerProps}>
        <div {...stylex.props(styles.imageSection)}>
          <XDSAspectRatio ratio={16 / 9}>
            <img src={SAMPLE_IMAGE_2} alt="Article" {...stylex.props(styles.image)} />
          </XDSAspectRatio>
          {overlay.element}
        </div>
        <XDSVStack gap={1} xstyle={styles.metadata}>
          <XDSText type="supporting" color="secondary">
            Jan 15, 2026 · 5 min read
          </XDSText>
          <XDSText type="supporting" color="secondary">
            By Jane Author
          </XDSText>
        </XDSVStack>
      </XDSCard>;
  }
}`,...A.parameters?.docs?.source},description:{story:"Disconnected hover — useXDSOverlay hook on Card. Hover Card reveals overlay on image.",...A.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: function DragAndDropStory() {
    const [isDragOver, setIsDragOver] = useState(false);
    return <XDSVStack gap={4} style={{
      width: 400
    }}>
        <XDSButton label={isDragOver ? 'Simulate drag leave' : 'Simulate drag enter'} variant="secondary" onClick={() => setIsDragOver(v => !v)} />
        <XDSOverlay isOpen={isDragOver} align="center" content={<XDSVStack gap={2} hAlign="center">
              <XDSText size="lg">📁</XDSText>
              <XDSText weight="bold">Drop files here</XDSText>
            </XDSVStack>}>
          <div {...stylex.props(styles.dropZone)}>
            <p {...stylex.props(styles.dropZoneText)}>
              Drop files here or click to browse
            </p>
          </div>
        </XDSOverlay>
      </XDSVStack>;
  }
}`,...C.parameters?.docs?.source},description:{story:"Drag-and-drop overlay — simulated with a toggle button.",...C.parameters?.docs?.description}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 300
  }}>
      <XDSOverlay showOn="hover" scrim={false} align="center" content={<XDSButton label="♡" variant="ghost" />}>
        <XDSAspectRatio ratio={1}>
          <img src={SAMPLE_IMAGE_3} alt="Selected" {...stylex.props(styles.image)} />
        </XDSAspectRatio>
      </XDSOverlay>
    </div>
}`,...R.parameters?.docs?.source},description:{story:"No scrim — content-only overlay without a background.",...R.parameters?.docs?.description}}};const Ae=["HoverOnImage","BottomStrip","CardOverlay","HoverOrFocus","LoadingOverlay","GalleryGrid","VideoThumbnail","DisconnectedHover","DragAndDrop","NoScrim"];export{X as BottomStrip,b as CardOverlay,A as DisconnectedHover,C as DragAndDrop,O as GalleryGrid,f as HoverOnImage,w as HoverOrFocus,j as LoadingOverlay,R as NoScrim,T as VideoThumbnail,Ae as __namedExportsOrder,Te as default};
