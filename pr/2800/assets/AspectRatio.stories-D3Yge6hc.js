import{ad as e,r as s}from"./iframe-yRFQ_7VC.js";import{X as t}from"./XDSAspectRatio-C_SkGWhh.js";import{X as j}from"./XDSGrid-BQOCBtio.js";import{X as u}from"./XDSSkeleton-Lffgyi3P.js";import"./preload-helper-Ct5FWWRu.js";const r={sectionLabel:{k1K539:"x1p37lm5",$$css:!0}},R={title:"Core/AspectRatio",component:t,tags:["autodocs"],argTypes:{ratio:{control:"number",description:"The aspect ratio as width/height (e.g., 16/9 = 1.777...)"},shape:{control:"select",options:["rectangle","ellipse"],description:'Container shape. Both respect the ratio; "ellipse" clips to an oval (circle at 1:1).'}}},S="https://picsum.photos/800/600",D="https://picsum.photos/400/400",l={args:{ratio:16/9},render:i=>e.jsxs("div",{className:"x1shk3sm x10xzikg xrlsmeg",children:[e.jsx(s,{type:"supporting",xstyle:r.sectionLabel,children:"16:9 Aspect Ratio (Default)"}),e.jsx(t,{...i,children:e.jsx("img",{className:"xh8yej3 x5yr21d xl1xv1r xh6dtrn",src:S,alt:"16:9 placeholder"})})]})},n={render:()=>e.jsxs("div",{className:"x1shk3sm x10xzikg xrlsmeg",children:[e.jsx(s,{type:"supporting",xstyle:r.sectionLabel,children:"16:9 - Standard widescreen (YouTube, TV)"}),e.jsx(t,{ratio:16/9,children:e.jsx("img",{className:"xh8yej3 x5yr21d xl1xv1r xh6dtrn",src:S,alt:"16:9 widescreen"})})]})},o={render:()=>e.jsxs("div",{className:"x1shk3sm x10xzikg xrlsmeg",children:[e.jsx(s,{type:"supporting",xstyle:r.sectionLabel,children:"4:3 - Classic TV and photography"}),e.jsx(t,{ratio:4/3,children:e.jsx("img",{className:"xh8yej3 x5yr21d xl1xv1r xh6dtrn",src:S,alt:"4:3 classic"})})]})},x={render:()=>e.jsxs("div",{className:"xw5ewwj x1shk3sm x10xzikg",children:[e.jsx(s,{type:"supporting",xstyle:r.sectionLabel,children:"1:1 - Square (Instagram, avatars)"}),e.jsx(t,{ratio:1,children:e.jsx("img",{className:"xh8yej3 x5yr21d xl1xv1r xh6dtrn",src:D,alt:"1:1 square"})})]})},c={render:()=>e.jsxs("div",{className:"x1shk3sm x10xzikg xted6l9",children:[e.jsx(s,{type:"supporting",xstyle:r.sectionLabel,children:"21:9 - Ultrawide cinematic"}),e.jsx(t,{ratio:21/9,children:e.jsx("div",{className:"xh8yej3 x5yr21d x1cxgd31 xh6dtrn x78zum5 x6s0dn4 xl56j7k x1awj2ng",children:e.jsx(s,{type:"label",children:"Ultrawide 21:9"})})})]})},p={args:{ratio:1,shape:"ellipse"},render:i=>e.jsxs("div",{className:"xw5ewwj x1shk3sm x10xzikg",children:[e.jsx(s,{type:"supporting",xstyle:r.sectionLabel,children:"Ellipse at 1:1 — a circle (avatars, profile images)"}),e.jsx(t,{...i,children:e.jsx("img",{className:"xh8yej3 x5yr21d xl1xv1r xh6dtrn",src:D,alt:"Circular media"})})]})},d={args:{ratio:16/9,shape:"ellipse"},render:i=>e.jsxs("div",{className:"x1shk3sm x10xzikg xrlsmeg",children:[e.jsx(s,{type:"supporting",xstyle:r.sectionLabel,children:"Ellipse at 16:9 — an oval (respects the ratio)"}),e.jsx(t,{...i,children:e.jsx("img",{className:"xh8yej3 x5yr21d xl1xv1r xh6dtrn",src:S,alt:"Oval media"})})]})},y={render:()=>e.jsxs("div",{className:"x78zum5 xdt5ytf x1qh66ti",children:[e.jsxs("div",{className:"x1shk3sm x10xzikg xrlsmeg",children:[e.jsx(s,{type:"supporting",xstyle:r.sectionLabel,children:"16:9 with loading skeleton"}),e.jsx(t,{ratio:16/9,children:e.jsx(u,{width:"100%",height:"100%"})})]}),e.jsxs("div",{className:"xw5ewwj x1shk3sm x10xzikg",children:[e.jsx(s,{type:"supporting",xstyle:r.sectionLabel,children:"1:1 with loading skeleton"}),e.jsx(t,{ratio:1,children:e.jsx(u,{width:"100%",height:"100%"})})]})]})},m={render:()=>e.jsxs("div",{className:"x1shk3sm x10xzikg xted6l9",children:[e.jsx(s,{type:"supporting",xstyle:r.sectionLabel,children:"Responsive grid of aspect ratio boxes"}),e.jsx(j,{columns:{minWidth:200},gap:4,children:[{ratio:16/9,label:"16:9"},{ratio:4/3,label:"4:3"},{ratio:1,label:"1:1"},{ratio:3/2,label:"3:2"},{ratio:21/9,label:"21:9"},{ratio:2/3,label:"2:3 Portrait"}].map(({ratio:i,label:a})=>e.jsx("div",{className:"xb3r6kr",children:e.jsx(t,{ratio:i,children:e.jsx("div",{className:"xh8yej3 x5yr21d x1eiddq6 xh6dtrn x78zum5 x6s0dn4 xl56j7k",children:e.jsx(s,{type:"label",children:a})})})},a))})]})},h={render:()=>e.jsxs("div",{className:"x78zum5 xdt5ytf x1qh66ti",children:[e.jsxs("div",{className:"x1shk3sm x10xzikg xrlsmeg",children:[e.jsx(s,{type:"supporting",xstyle:r.sectionLabel,children:"16:9 (1.778) - Widescreen HD"}),e.jsx(t,{ratio:16/9,children:e.jsx("div",{className:"xh8yej3 x5yr21d x1eiddq6 xh6dtrn x78zum5 x6s0dn4 xl56j7k",children:e.jsx(s,{type:"body",children:"16:9"})})})]}),e.jsxs("div",{className:"x1shk3sm x10xzikg xrlsmeg",children:[e.jsx(s,{type:"supporting",xstyle:r.sectionLabel,children:"4:3 (1.333) - Classic TV"}),e.jsx(t,{ratio:4/3,children:e.jsx("div",{className:"xh8yej3 x5yr21d x1eiddq6 xh6dtrn x78zum5 x6s0dn4 xl56j7k",children:e.jsx(s,{type:"body",children:"4:3"})})})]}),e.jsxs("div",{className:"xw5ewwj x1shk3sm x10xzikg",children:[e.jsx(s,{type:"supporting",xstyle:r.sectionLabel,children:"1:1 (1.0) - Square"}),e.jsx(t,{ratio:1,children:e.jsx("div",{className:"xh8yej3 x5yr21d x1eiddq6 xh6dtrn x78zum5 x6s0dn4 xl56j7k",children:e.jsx(s,{type:"body",children:"1:1"})})})]}),e.jsxs("div",{className:"x1shk3sm x10xzikg xrlsmeg",children:[e.jsx(s,{type:"supporting",xstyle:r.sectionLabel,children:"3:2 (1.5) - Classic 35mm Film"}),e.jsx(t,{ratio:3/2,children:e.jsx("div",{className:"xh8yej3 x5yr21d x1eiddq6 xh6dtrn x78zum5 x6s0dn4 xl56j7k",children:e.jsx(s,{type:"body",children:"3:2"})})})]}),e.jsxs("div",{className:"x1shk3sm x10xzikg xted6l9",children:[e.jsx(s,{type:"supporting",xstyle:r.sectionLabel,children:"21:9 (2.333) - Ultrawide Cinematic"}),e.jsx(t,{ratio:21/9,children:e.jsx("div",{className:"xh8yej3 x5yr21d x1eiddq6 xh6dtrn x78zum5 x6s0dn4 xl56j7k",children:e.jsx(s,{type:"body",children:"21:9"})})})]})]})},g={render:()=>e.jsxs("div",{className:"x1shk3sm x10xzikg xted6l9",children:[e.jsx(s,{type:"supporting",xstyle:r.sectionLabel,children:"Image gallery with consistent aspect ratios"}),e.jsx(j,{columns:3,gap:4,children:Array.from({length:6},(i,a)=>e.jsx(t,{ratio:4/3,children:e.jsx("img",{className:"xh8yej3 x5yr21d xl1xv1r xh6dtrn",src:`https://picsum.photos/seed/${a+1}/400/300`,alt:`Gallery image ${a+1}`})},a))})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    ratio: 16 / 9
  },
  render: args => <div {...stylex.props(styles.container)}>
      <XDSText type="supporting" xstyle={styles.sectionLabel}>
        16:9 Aspect Ratio (Default)
      </XDSText>
      <XDSAspectRatio {...args}>
        <img {...stylex.props(styles.image)} src={PLACEHOLDER_IMAGE} alt="16:9 placeholder" />
      </XDSAspectRatio>
    </div>
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div {...stylex.props(styles.container)}>
      <XDSText type="supporting" xstyle={styles.sectionLabel}>
        16:9 - Standard widescreen (YouTube, TV)
      </XDSText>
      <XDSAspectRatio ratio={16 / 9}>
        <img {...stylex.props(styles.image)} src={PLACEHOLDER_IMAGE} alt="16:9 widescreen" />
      </XDSAspectRatio>
    </div>
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div {...stylex.props(styles.container)}>
      <XDSText type="supporting" xstyle={styles.sectionLabel}>
        4:3 - Classic TV and photography
      </XDSText>
      <XDSAspectRatio ratio={4 / 3}>
        <img {...stylex.props(styles.image)} src={PLACEHOLDER_IMAGE} alt="4:3 classic" />
      </XDSAspectRatio>
    </div>
}`,...o.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div {...stylex.props(styles.smallContainer)}>
      <XDSText type="supporting" xstyle={styles.sectionLabel}>
        1:1 - Square (Instagram, avatars)
      </XDSText>
      <XDSAspectRatio ratio={1}>
        <img {...stylex.props(styles.image)} src={PLACEHOLDER_SQUARE} alt="1:1 square" />
      </XDSAspectRatio>
    </div>
}`,...x.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div {...stylex.props(styles.wideContainer)}>
      <XDSText type="supporting" xstyle={styles.sectionLabel}>
        21:9 - Ultrawide cinematic
      </XDSText>
      <XDSAspectRatio ratio={21 / 9}>
        <div {...stylex.props(styles.gradientPlaceholder)}>
          <XDSText type="label">Ultrawide 21:9</XDSText>
        </div>
      </XDSAspectRatio>
    </div>
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ratio: 1,
    shape: 'ellipse'
  },
  render: args => <div {...stylex.props(styles.smallContainer)}>
      <XDSText type="supporting" xstyle={styles.sectionLabel}>
        Ellipse at 1:1 — a circle (avatars, profile images)
      </XDSText>
      <XDSAspectRatio {...args}>
        <img {...stylex.props(styles.image)} src={PLACEHOLDER_SQUARE} alt="Circular media" />
      </XDSAspectRatio>
    </div>
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ratio: 16 / 9,
    shape: 'ellipse'
  },
  render: args => <div {...stylex.props(styles.container)}>
      <XDSText type="supporting" xstyle={styles.sectionLabel}>
        Ellipse at 16:9 — an oval (respects the ratio)
      </XDSText>
      <XDSAspectRatio {...args}>
        <img {...stylex.props(styles.image)} src={PLACEHOLDER_IMAGE} alt="Oval media" />
      </XDSAspectRatio>
    </div>
}`,...d.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div {...stylex.props(styles.storyWrapper)}>
      <div {...stylex.props(styles.container)}>
        <XDSText type="supporting" xstyle={styles.sectionLabel}>
          16:9 with loading skeleton
        </XDSText>
        <XDSAspectRatio ratio={16 / 9}>
          <XDSSkeleton width="100%" height="100%" />
        </XDSAspectRatio>
      </div>
      <div {...stylex.props(styles.smallContainer)}>
        <XDSText type="supporting" xstyle={styles.sectionLabel}>
          1:1 with loading skeleton
        </XDSText>
        <XDSAspectRatio ratio={1}>
          <XDSSkeleton width="100%" height="100%" />
        </XDSAspectRatio>
      </div>
    </div>
}`,...y.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div {...stylex.props(styles.wideContainer)}>
      <XDSText type="supporting" xstyle={styles.sectionLabel}>
        Responsive grid of aspect ratio boxes
      </XDSText>
      <XDSGrid columns={{
      minWidth: 200
    }} gap={4}>
        {[{
        ratio: 16 / 9,
        label: '16:9'
      }, {
        ratio: 4 / 3,
        label: '4:3'
      }, {
        ratio: 1,
        label: '1:1'
      }, {
        ratio: 3 / 2,
        label: '3:2'
      }, {
        ratio: 21 / 9,
        label: '21:9'
      }, {
        ratio: 2 / 3,
        label: '2:3 Portrait'
      }].map(({
        ratio,
        label
      }) => <div key={label} {...stylex.props(styles.gridItem)}>
            <XDSAspectRatio ratio={ratio}>
              <div {...stylex.props(styles.placeholder)}>
                <XDSText type="label">{label}</XDSText>
              </div>
            </XDSAspectRatio>
          </div>)}
      </XDSGrid>
    </div>
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div {...stylex.props(styles.storyWrapper)}>
      <div {...stylex.props(styles.container)}>
        <XDSText type="supporting" xstyle={styles.sectionLabel}>
          16:9 (1.778) - Widescreen HD
        </XDSText>
        <XDSAspectRatio ratio={16 / 9}>
          <div {...stylex.props(styles.placeholder)}>
            <XDSText type="body">16:9</XDSText>
          </div>
        </XDSAspectRatio>
      </div>
      <div {...stylex.props(styles.container)}>
        <XDSText type="supporting" xstyle={styles.sectionLabel}>
          4:3 (1.333) - Classic TV
        </XDSText>
        <XDSAspectRatio ratio={4 / 3}>
          <div {...stylex.props(styles.placeholder)}>
            <XDSText type="body">4:3</XDSText>
          </div>
        </XDSAspectRatio>
      </div>
      <div {...stylex.props(styles.smallContainer)}>
        <XDSText type="supporting" xstyle={styles.sectionLabel}>
          1:1 (1.0) - Square
        </XDSText>
        <XDSAspectRatio ratio={1}>
          <div {...stylex.props(styles.placeholder)}>
            <XDSText type="body">1:1</XDSText>
          </div>
        </XDSAspectRatio>
      </div>
      <div {...stylex.props(styles.container)}>
        <XDSText type="supporting" xstyle={styles.sectionLabel}>
          3:2 (1.5) - Classic 35mm Film
        </XDSText>
        <XDSAspectRatio ratio={3 / 2}>
          <div {...stylex.props(styles.placeholder)}>
            <XDSText type="body">3:2</XDSText>
          </div>
        </XDSAspectRatio>
      </div>
      <div {...stylex.props(styles.wideContainer)}>
        <XDSText type="supporting" xstyle={styles.sectionLabel}>
          21:9 (2.333) - Ultrawide Cinematic
        </XDSText>
        <XDSAspectRatio ratio={21 / 9}>
          <div {...stylex.props(styles.placeholder)}>
            <XDSText type="body">21:9</XDSText>
          </div>
        </XDSAspectRatio>
      </div>
    </div>
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div {...stylex.props(styles.wideContainer)}>
      <XDSText type="supporting" xstyle={styles.sectionLabel}>
        Image gallery with consistent aspect ratios
      </XDSText>
      <XDSGrid columns={3} gap={4}>
        {Array.from({
        length: 6
      }, (_, i) => <XDSAspectRatio key={i} ratio={4 / 3}>
            <img {...stylex.props(styles.image)} src={\`https://picsum.photos/seed/\${i + 1}/400/300\`} alt={\`Gallery image \${i + 1}\`} />
          </XDSAspectRatio>)}
      </XDSGrid>
    </div>
}`,...g.parameters?.docs?.source}}};const k=["Default","Widescreen16x9","Classic4x3","Square1x1","Ultrawide21x9","EllipseCircle","EllipseOval","WithPlaceholderSkeleton","ResponsiveGrid","AllRatiosComparison","ImageGallery"];export{h as AllRatiosComparison,o as Classic4x3,l as Default,p as EllipseCircle,d as EllipseOval,g as ImageGallery,m as ResponsiveGrid,x as Square1x1,c as Ultrawide21x9,n as Widescreen16x9,y as WithPlaceholderSkeleton,k as __namedExportsOrder,R as default};
