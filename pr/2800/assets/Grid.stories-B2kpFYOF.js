import{ad as e,r as s}from"./iframe-yRFQ_7VC.js";import{X as i}from"./XDSGrid-BQOCBtio.js";import{X as l}from"./XDSGridSpan-BbWymq_j.js";import{X as n}from"./XDSCard-CyDoBnn3.js";import{X as g}from"./XDSSection-C0P8UZDV.js";import{X as D}from"./XDSVStack-uMCoSZ_B.js";import"./preload-helper-Ct5FWWRu.js";import"./container.stylex-BI6SFdSl.js";import"./padding.stylex-BDg7w1Mn.js";import"./XDSStack-CFJ7xIVk.js";import"./stack.stylex-5XIQDawT.js";const r={sectionLabel:{k1K539:"x1p37lm5",$$css:!0}},W={title:"Core/Grid",component:i,tags:["autodocs"],argTypes:{columns:{control:"object",description:"Column configuration: number for fixed columns, or {minWidth, max?, repeat?} for responsive"},gap:{control:"select",options:[0,.5,1,1.5,2,3,4,5,6,8,10],description:"Spacing between all grid items"},rowGap:{control:"select",options:[0,.5,1,1.5,2,3,4,5,6,8,10],description:"Spacing between rows (overrides gap)"},columnGap:{control:"select",options:[0,.5,1,1.5,2,3,4,5,6,8,10],description:"Spacing between columns (overrides gap)"},align:{control:"select",options:["start","center","end","stretch"],description:"Vertical alignment of grid items"},justify:{control:"select",options:["start","center","end","stretch"],description:"Horizontal alignment of grid items"}}},t=({children:d})=>e.jsx("div",{className:"x1shk3sm x1eiddq6 xh6dtrn x2b8uid",children:e.jsx(s,{type:"body",children:d})}),S=({children:d})=>e.jsx("div",{className:"x1gt495 xgcxg3y xh6dtrn x2b8uid x5yr21d x9f619",children:e.jsx(s,{type:"body",children:d})}),c={args:{columns:3,gap:4},render:d=>e.jsx("div",{className:"x1shk3sm x10xzikg",children:e.jsxs(i,{...d,children:[e.jsx(t,{children:"Item 1"}),e.jsx(t,{children:"Item 2"}),e.jsx(t,{children:"Item 3"}),e.jsx(t,{children:"Item 4"}),e.jsx(t,{children:"Item 5"}),e.jsx(t,{children:"Item 6"})]})})},p={render:()=>e.jsxs("div",{className:"x78zum5 xdt5ytf x1qh66ti",children:[e.jsxs("div",{className:"x1shk3sm x10xzikg",children:[e.jsx(s,{type:"supporting",xstyle:r.sectionLabel,children:"2 Columns"}),e.jsxs(i,{columns:2,gap:4,children:[e.jsx(t,{children:"Item 1"}),e.jsx(t,{children:"Item 2"}),e.jsx(t,{children:"Item 3"}),e.jsx(t,{children:"Item 4"})]})]}),e.jsxs("div",{className:"x1shk3sm x10xzikg",children:[e.jsx(s,{type:"supporting",xstyle:r.sectionLabel,children:"4 Columns"}),e.jsxs(i,{columns:4,gap:4,children:[e.jsx(t,{children:"Item 1"}),e.jsx(t,{children:"Item 2"}),e.jsx(t,{children:"Item 3"}),e.jsx(t,{children:"Item 4"}),e.jsx(t,{children:"Item 5"}),e.jsx(t,{children:"Item 6"}),e.jsx(t,{children:"Item 7"}),e.jsx(t,{children:"Item 8"})]})]})]})},a={render:()=>e.jsxs(D,{gap:6,children:[e.jsxs("div",{className:"x1shk3sm x10xzikg",children:[e.jsx(s,{type:"supporting",xstyle:r.sectionLabel,children:"columns={{minWidth: 200}} with 2 items — cards stretch to fill (auto-fit)"}),e.jsxs(i,{columns:{minWidth:200},gap:4,children:[e.jsx(t,{children:"Item 1"}),e.jsx(t,{children:"Item 2"})]})]}),e.jsxs("div",{className:"x1shk3sm x10xzikg",children:[e.jsx(s,{type:"supporting",xstyle:r.sectionLabel,children:"Same grid with 6 items; looks fine because items fill the tracks"}),e.jsxs(i,{columns:{minWidth:200},gap:4,children:[e.jsx(t,{children:"Item 1"}),e.jsx(t,{children:"Item 2"}),e.jsx(t,{children:"Item 3"}),e.jsx(t,{children:"Item 4"}),e.jsx(t,{children:"Item 5"}),e.jsx(t,{children:"Item 6"})]})]})]})},m={render:()=>e.jsxs("div",{className:"x1shk3sm x10xzikg",children:[e.jsx(s,{type:"supporting",xstyle:r.sectionLabel,children:"Resize the viewport — columns auto-fill, empty tracks preserved (min 200px per item)"}),e.jsxs(i,{columns:{minWidth:200},gap:4,children:[e.jsx(t,{children:"Item 1"}),e.jsx(t,{children:"Item 2"}),e.jsx(t,{children:"Item 3"})]})]})},o={render:()=>e.jsxs(D,{gap:6,children:[e.jsxs("div",{className:"x1shk3sm x10xzikg",children:[e.jsx(s,{type:"supporting",xstyle:r.sectionLabel,children:"auto-fill (default) — items stay consistent width, empty tracks preserved"}),e.jsxs(i,{columns:{minWidth:250},gap:4,children:[e.jsx(t,{children:"Item 1"}),e.jsx(t,{children:"Item 2"})]})]}),e.jsxs("div",{className:"x1shk3sm x10xzikg",children:[e.jsx(s,{type:"supporting",xstyle:r.sectionLabel,children:"auto-fit — items stretch to fill all available space"}),e.jsxs(i,{columns:{minWidth:250,repeat:"fit"},gap:4,children:[e.jsx(t,{children:"Item 1"}),e.jsx(t,{children:"Item 2"})]})]})]})},x={render:()=>e.jsxs("div",{className:"x1shk3sm x10xzikg",children:[e.jsx(s,{type:"supporting",xstyle:r.sectionLabel,children:"Responsive with max 3 columns (min 250px per item, capped via track-max)"}),e.jsxs(i,{columns:{minWidth:250,max:3},gap:4,children:[e.jsx(t,{children:"Item 1"}),e.jsx(t,{children:"Item 2"}),e.jsx(t,{children:"Item 3"}),e.jsx(t,{children:"Item 4"}),e.jsx(t,{children:"Item 5"}),e.jsx(t,{children:"Item 6"})]})]})},I={render:()=>e.jsxs("div",{className:"x1shk3sm x10xzikg",children:[e.jsx(s,{type:"supporting",xstyle:r.sectionLabel,children:"Using XDSGridSpan to span multiple columns/rows"}),e.jsxs(i,{columns:4,gap:4,children:[e.jsx(l,{columns:2,children:e.jsx(S,{children:"Spans 2 columns"})}),e.jsx(t,{children:"Normal"}),e.jsx(t,{children:"Normal"}),e.jsx(t,{children:"Normal"}),e.jsx(l,{columns:3,children:e.jsx(S,{children:"Spans 3 columns"})}),e.jsx(l,{columns:"full",children:e.jsx(S,{children:"Full width (spans all columns)"})})]})]})},h={render:()=>e.jsxs("div",{className:"x1shk3sm x10xzikg",children:[e.jsx(s,{type:"supporting",xstyle:r.sectionLabel,children:"Grid items spanning both columns and rows"}),e.jsxs(i,{columns:4,gap:4,children:[e.jsx(l,{columns:2,rows:2,children:e.jsx(S,{children:"2x2 Featured"})}),e.jsx(t,{children:"Item 1"}),e.jsx(t,{children:"Item 2"}),e.jsx(t,{children:"Item 3"}),e.jsx(t,{children:"Item 4"}),e.jsx(t,{children:"Item 5"}),e.jsx(t,{children:"Item 6"})]})]})},u={render:()=>e.jsxs(g,{variant:"muted",children:[e.jsx(s,{type:"supporting",xstyle:r.sectionLabel,children:"Gallery/Card Grid — Responsive with min 280px cards (auto-fill)"}),e.jsx(i,{columns:{minWidth:280},gap:5,children:Array.from({length:8},(d,j)=>e.jsxs(n,{children:[e.jsx("div",{className:"x1wkxgih x1eiddq6 xh6dtrn xep27e5"}),e.jsxs(s,{type:"label",display:"block",children:["Card Title ",j+1]}),e.jsx(s,{type:"supporting",display:"block",children:"A brief description of the card content goes here."})]},j))})]})},y={render:()=>e.jsxs("div",{className:"x78zum5 xdt5ytf x1qh66ti",children:[e.jsxs("div",{className:"x1shk3sm x10xzikg",children:[e.jsx(s,{type:"supporting",xstyle:r.sectionLabel,children:"Same gap for rows and columns (gap=4)"}),e.jsxs(i,{columns:3,gap:4,children:[e.jsx(t,{children:"Item 1"}),e.jsx(t,{children:"Item 2"}),e.jsx(t,{children:"Item 3"}),e.jsx(t,{children:"Item 4"}),e.jsx(t,{children:"Item 5"}),e.jsx(t,{children:"Item 6"})]})]}),e.jsxs("div",{className:"x1shk3sm x10xzikg",children:[e.jsx(s,{type:"supporting",xstyle:r.sectionLabel,children:"Different gaps: rowGap=2, columnGap=6"}),e.jsxs(i,{columns:3,rowGap:2,columnGap:6,children:[e.jsx(t,{children:"Item 1"}),e.jsx(t,{children:"Item 2"}),e.jsx(t,{children:"Item 3"}),e.jsx(t,{children:"Item 4"}),e.jsx(t,{children:"Item 5"}),e.jsx(t,{children:"Item 6"})]})]})]})},G={render:()=>e.jsxs(g,{variant:"muted",children:[e.jsx(s,{type:"supporting",xstyle:r.sectionLabel,children:"Dashboard-style layout with different sized widgets"}),e.jsxs(i,{columns:4,gap:4,children:[e.jsx(l,{columns:2,rows:2,children:e.jsxs(n,{children:[e.jsx(s,{type:"label",display:"block",children:"Main Chart"}),e.jsx(s,{type:"supporting",display:"block",children:"Large visualization widget"})]})}),e.jsxs(n,{children:[e.jsx(s,{type:"label",display:"block",children:"Metric 1"}),e.jsx(s,{type:"supporting",display:"block",children:"Quick stat"})]}),e.jsxs(n,{children:[e.jsx(s,{type:"label",display:"block",children:"Metric 2"}),e.jsx(s,{type:"supporting",display:"block",children:"Quick stat"})]}),e.jsxs(n,{children:[e.jsx(s,{type:"label",display:"block",children:"Metric 3"}),e.jsx(s,{type:"supporting",display:"block",children:"Quick stat"})]}),e.jsxs(n,{children:[e.jsx(s,{type:"label",display:"block",children:"Metric 4"}),e.jsx(s,{type:"supporting",display:"block",children:"Quick stat"})]}),e.jsx(l,{columns:"full",children:e.jsxs(n,{children:[e.jsx(s,{type:"label",display:"block",children:"Full-width Section"}),e.jsx(s,{type:"supporting",display:"block",children:"This section spans the entire width of the grid"})]})})]})]})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    columns: 3,
    gap: 4
  },
  render: args => <div {...stylex.props(styles.container)}>
      <XDSGrid {...args}>
        <GridItem>Item 1</GridItem>
        <GridItem>Item 2</GridItem>
        <GridItem>Item 3</GridItem>
        <GridItem>Item 4</GridItem>
        <GridItem>Item 5</GridItem>
        <GridItem>Item 6</GridItem>
      </XDSGrid>
    </div>
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div {...stylex.props(styles.storyWrapper)}>
      <div {...stylex.props(styles.container)}>
        <XDSText type="supporting" xstyle={styles.sectionLabel}>
          2 Columns
        </XDSText>
        <XDSGrid columns={2} gap={4}>
          <GridItem>Item 1</GridItem>
          <GridItem>Item 2</GridItem>
          <GridItem>Item 3</GridItem>
          <GridItem>Item 4</GridItem>
        </XDSGrid>
      </div>
      <div {...stylex.props(styles.container)}>
        <XDSText type="supporting" xstyle={styles.sectionLabel}>
          4 Columns
        </XDSText>
        <XDSGrid columns={4} gap={4}>
          <GridItem>Item 1</GridItem>
          <GridItem>Item 2</GridItem>
          <GridItem>Item 3</GridItem>
          <GridItem>Item 4</GridItem>
          <GridItem>Item 5</GridItem>
          <GridItem>Item 6</GridItem>
          <GridItem>Item 7</GridItem>
          <GridItem>Item 8</GridItem>
        </XDSGrid>
      </div>
    </div>
}`,...p.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <XDSVStack gap={6}>
      <div {...stylex.props(styles.container)}>
        <XDSText type="supporting" xstyle={styles.sectionLabel}>
          {'columns={{minWidth: 200}} with 2 items — cards stretch to fill (auto-fit)'}
        </XDSText>
        <XDSGrid columns={{
        minWidth: 200
      }} gap={4}>
          <GridItem>Item 1</GridItem>
          <GridItem>Item 2</GridItem>
        </XDSGrid>
      </div>
      <div {...stylex.props(styles.container)}>
        <XDSText type="supporting" xstyle={styles.sectionLabel}>
          
          Same grid with 6 items; looks fine because items fill the tracks
        </XDSText>
        <XDSGrid columns={{
        minWidth: 200
      }} gap={4}>
          <GridItem>Item 1</GridItem>
          <GridItem>Item 2</GridItem>
          <GridItem>Item 3</GridItem>
          <GridItem>Item 4</GridItem>
          <GridItem>Item 5</GridItem>
          <GridItem>Item 6</GridItem>
        </XDSGrid>
      </div>
    </XDSVStack>
}`,...a.parameters?.docs?.source},description:{story:`auto-fit (repeat: 'fit') stretches items to fill when there are fewer
items than available columns. Compare with auto-fill (default) which
preserves consistent widths.`,...a.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div {...stylex.props(styles.container)}>
      <XDSText type="supporting" xstyle={styles.sectionLabel}>
        Resize the viewport — columns auto-fill, empty tracks preserved (min
        200px per item)
      </XDSText>
      <XDSGrid columns={{
      minWidth: 200
    }} gap={4}>
        <GridItem>Item 1</GridItem>
        <GridItem>Item 2</GridItem>
        <GridItem>Item 3</GridItem>
      </XDSGrid>
    </div>
}`,...m.parameters?.docs?.source},description:{story:"New API: responsive columns with auto-fill (consistent widths)",...m.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <XDSVStack gap={6}>
      <div {...stylex.props(styles.container)}>
        <XDSText type="supporting" xstyle={styles.sectionLabel}>
          auto-fill (default) — items stay consistent width, empty tracks
          preserved
        </XDSText>
        <XDSGrid columns={{
        minWidth: 250
      }} gap={4}>
          <GridItem>Item 1</GridItem>
          <GridItem>Item 2</GridItem>
        </XDSGrid>
      </div>
      <div {...stylex.props(styles.container)}>
        <XDSText type="supporting" xstyle={styles.sectionLabel}>
          auto-fit — items stretch to fill all available space
        </XDSText>
        <XDSGrid columns={{
        minWidth: 250,
        repeat: 'fit'
      }} gap={4}>
          <GridItem>Item 1</GridItem>
          <GridItem>Item 2</GridItem>
        </XDSGrid>
      </div>
    </XDSVStack>
}`,...o.parameters?.docs?.source},description:{story:"Side-by-side comparison: auto-fill vs auto-fit with few items",...o.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div {...stylex.props(styles.container)}>
      <XDSText type="supporting" xstyle={styles.sectionLabel}>
        Responsive with max 3 columns (min 250px per item, capped via track-max)
      </XDSText>
      <XDSGrid columns={{
      minWidth: 250,
      max: 3
    }} gap={4}>
        <GridItem>Item 1</GridItem>
        <GridItem>Item 2</GridItem>
        <GridItem>Item 3</GridItem>
        <GridItem>Item 4</GridItem>
        <GridItem>Item 5</GridItem>
        <GridItem>Item 6</GridItem>
      </XDSGrid>
    </div>
}`,...x.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <div {...stylex.props(styles.container)}>
      <XDSText type="supporting" xstyle={styles.sectionLabel}>
        Using XDSGridSpan to span multiple columns/rows
      </XDSText>
      <XDSGrid columns={4} gap={4}>
        <XDSGridSpan columns={2}>
          <FeaturedItem>Spans 2 columns</FeaturedItem>
        </XDSGridSpan>
        <GridItem>Normal</GridItem>
        <GridItem>Normal</GridItem>
        <GridItem>Normal</GridItem>
        <XDSGridSpan columns={3}>
          <FeaturedItem>Spans 3 columns</FeaturedItem>
        </XDSGridSpan>
        <XDSGridSpan columns="full">
          <FeaturedItem>Full width (spans all columns)</FeaturedItem>
        </XDSGridSpan>
      </XDSGrid>
    </div>
}`,...I.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div {...stylex.props(styles.container)}>
      <XDSText type="supporting" xstyle={styles.sectionLabel}>
        Grid items spanning both columns and rows
      </XDSText>
      <XDSGrid columns={4} gap={4}>
        <XDSGridSpan columns={2} rows={2}>
          <FeaturedItem>2x2 Featured</FeaturedItem>
        </XDSGridSpan>
        <GridItem>Item 1</GridItem>
        <GridItem>Item 2</GridItem>
        <GridItem>Item 3</GridItem>
        <GridItem>Item 4</GridItem>
        <GridItem>Item 5</GridItem>
        <GridItem>Item 6</GridItem>
      </XDSGrid>
    </div>
}`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <XDSSection variant="muted">
      <XDSText type="supporting" xstyle={styles.sectionLabel}>
        Gallery/Card Grid — Responsive with min 280px cards (auto-fill)
      </XDSText>
      <XDSGrid columns={{
      minWidth: 280
    }} gap={5}>
        {Array.from({
        length: 8
      }, (_, i) => <XDSCard key={i}>
            <div {...stylex.props(styles.cardImage)} />
            <XDSText type="label" display="block">
              Card Title {i + 1}
            </XDSText>
            <XDSText type="supporting" display="block">
              A brief description of the card content goes here.
            </XDSText>
          </XDSCard>)}
      </XDSGrid>
    </XDSSection>
}`,...u.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div {...stylex.props(styles.storyWrapper)}>
      <div {...stylex.props(styles.container)}>
        <XDSText type="supporting" xstyle={styles.sectionLabel}>
          Same gap for rows and columns (gap=4)
        </XDSText>
        <XDSGrid columns={3} gap={4}>
          <GridItem>Item 1</GridItem>
          <GridItem>Item 2</GridItem>
          <GridItem>Item 3</GridItem>
          <GridItem>Item 4</GridItem>
          <GridItem>Item 5</GridItem>
          <GridItem>Item 6</GridItem>
        </XDSGrid>
      </div>
      <div {...stylex.props(styles.container)}>
        <XDSText type="supporting" xstyle={styles.sectionLabel}>
          Different gaps: rowGap=2, columnGap=6
        </XDSText>
        <XDSGrid columns={3} rowGap={2} columnGap={6}>
          <GridItem>Item 1</GridItem>
          <GridItem>Item 2</GridItem>
          <GridItem>Item 3</GridItem>
          <GridItem>Item 4</GridItem>
          <GridItem>Item 5</GridItem>
          <GridItem>Item 6</GridItem>
        </XDSGrid>
      </div>
    </div>
}`,...y.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <XDSSection variant="muted">
      <XDSText type="supporting" xstyle={styles.sectionLabel}>
        Dashboard-style layout with different sized widgets
      </XDSText>
      <XDSGrid columns={4} gap={4}>
        <XDSGridSpan columns={2} rows={2}>
          <XDSCard>
            <XDSText type="label" display="block">
              Main Chart
            </XDSText>
            <XDSText type="supporting" display="block">
              Large visualization widget
            </XDSText>
          </XDSCard>
        </XDSGridSpan>
        <XDSCard>
          <XDSText type="label" display="block">
            Metric 1
          </XDSText>
          <XDSText type="supporting" display="block">
            Quick stat
          </XDSText>
        </XDSCard>
        <XDSCard>
          <XDSText type="label" display="block">
            Metric 2
          </XDSText>
          <XDSText type="supporting" display="block">
            Quick stat
          </XDSText>
        </XDSCard>
        <XDSCard>
          <XDSText type="label" display="block">
            Metric 3
          </XDSText>
          <XDSText type="supporting" display="block">
            Quick stat
          </XDSText>
        </XDSCard>
        <XDSCard>
          <XDSText type="label" display="block">
            Metric 4
          </XDSText>
          <XDSText type="supporting" display="block">
            Quick stat
          </XDSText>
        </XDSCard>
        <XDSGridSpan columns="full">
          <XDSCard>
            <XDSText type="label" display="block">
              Full-width Section
            </XDSText>
            <XDSText type="supporting" display="block">
              This section spans the entire width of the grid
            </XDSText>
          </XDSCard>
        </XDSGridSpan>
      </XDSGrid>
    </XDSSection>
}`,...G.parameters?.docs?.source}}};const z=["Default","FixedColumns","ResponsiveAutoFit","ResponsiveAutoFill","FillVsFitComparison","CappedResponsive","WithGridSpan","GridSpanWithRows","GalleryExample","DifferentGaps","DashboardLayout"];export{x as CappedResponsive,G as DashboardLayout,c as Default,y as DifferentGaps,o as FillVsFitComparison,p as FixedColumns,u as GalleryExample,h as GridSpanWithRows,m as ResponsiveAutoFill,a as ResponsiveAutoFit,I as WithGridSpan,z as __namedExportsOrder,W as default};
