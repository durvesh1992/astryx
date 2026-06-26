import{ad as e}from"./iframe-yRFQ_7VC.js";import{X as s,a as t,b as a,c as o}from"./bar-CaHnEBcM.js";import{a as L}from"./area-C5zWI711.js";import{a as O,c as V}from"./step-fxRLXcQr.js";import{m as $,c as E,l as N}from"./monotone-BKrwi6Sb.js";import{l as A}from"./line-BaQs2ygX.js";import{c as W}from"./formatters-BTRd7dIg.js";import"./preload-helper-Ct5FWWRu.js";import"./linear-gs3faI6G.js";import"./ChartContext-DZbKxN5B.js";import"./array-2GBN5xbU.js";import"./XDSChartLegend-Bl1KuAfH.js";import"./XDSChartSwatch-BC5wXYlS.js";import"./XDSHStack-BmU4dpCo.js";import"./XDSStack-CFJ7xIVk.js";import"./stack.stylex-5XIQDawT.js";import"./XDSVStack-uMCoSZ_B.js";import"./index-D8Xh4Tce.js";import"./index-CXyWrEU_.js";const I={linear:E,monotone:$,natural:V,step:O};function K(c,i={}){const p=i.color??"var(--color-chart-1)",M=i.opacity??.3,T=i.curve??"monotone",X=i.gradient??!1,w=i.stroke??!0;return{type:"area",key:c,dataKeys:[c],color:p,label:i.label??c,layout:{stack:i.stack,includeZero:!0},resolve(m,l){const{data:B,xKey:j,xScale:h,yScale:d}=m,u=[];for(let r=0;r<B.length;r++){const D=B[r];let G;"bandwidth"in h?G=(h(String(D[j]))??0)+h.bandwidth()/2:G=h(D[j]);let R,F;if(l)R=d(l[r].y1),F=d(l[r].y0);else{const J=typeof D[c]=="number"?D[c]:0;R=d(J),F=d(0)}u.push({px:G,py:R,py0:F,dataIndex:r})}return u},render(m){if(m.length===0)return null;const l=I[T],j=L().x(r=>r.px).y0(r=>r.py0).y1(r=>r.py).curve(l)(m)??"",d=N().x(r=>r.px).y(r=>r.py).curve(l)(m)??"",u=`area-grad-${c}`;return e.jsxs("g",{children:[X&&e.jsx("defs",{children:e.jsxs("linearGradient",{id:u,x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:p,stopOpacity:M}),e.jsx("stop",{offset:"100%",stopColor:p,stopOpacity:0})]})}),e.jsx("path",{d:j,fill:X?`url(#${u})`:p,fillOpacity:X?1:M,stroke:"none"}),w&&e.jsx("path",{d,fill:"none",stroke:p,strokeWidth:2})]})}}}const me={title:"Lab/ChartV2",component:s},n=[{month:"Jan",revenue:45,costs:30,trend:38},{month:"Feb",revenue:52,costs:35,trend:42},{month:"Mar",revenue:48,costs:32,trend:40},{month:"Apr",revenue:61,costs:38,trend:48},{month:"May",revenue:55,costs:34,trend:45},{month:"Jun",revenue:70,costs:40,trend:52}],_=[{month:"Jan",revenueA:30,costsA:15,revenueB:25,costsB:20},{month:"Feb",revenueA:35,costsA:18,revenueB:28,costsB:22},{month:"Mar",revenueA:28,costsA:14,revenueB:32,costsB:18},{month:"Apr",revenueA:42,costsA:20,revenueB:35,costsB:25},{month:"May",revenueA:38,costsA:17,revenueB:30,costsB:21},{month:"Jun",revenueA:50,costsA:22,revenueB:40,costsB:28}],x={render:()=>e.jsx(s,{data:n,xKey:"month",title:"Monthly Revenue",series:[o("revenue",{color:"#3b82f6"})],tooltip:!0,grid:e.jsx(a,{}),axes:e.jsxs(e.Fragment,{children:[e.jsx(t,{position:"bottom"}),e.jsx(t,{position:"left",tickFormat:W()})]}),height:300})},g={render:()=>e.jsx(s,{data:n,xKey:"month",series:[A("trend",{color:"#3b82f6"})],tooltip:!0,grid:e.jsx(a,{}),axes:e.jsxs(e.Fragment,{children:[e.jsx(t,{position:"bottom"}),e.jsx(t,{position:"left"})]}),height:300})},b={render:()=>e.jsx(s,{data:n,xKey:"month",title:"Revenue & Costs",subtitle:"Stacked by category",series:[o("revenue",{color:"#3b82f6",stack:"totals",label:"Revenue"}),o("costs",{color:"#ef4444",stack:"totals",label:"Costs"})],legend:{position:"bottom",alignment:"center"},grid:e.jsx(a,{}),axes:e.jsxs(e.Fragment,{children:[e.jsx(t,{position:"bottom"}),e.jsx(t,{position:"left"})]}),height:300})},f={render:()=>e.jsx(s,{data:n,xKey:"month",title:"Revenue vs Costs",series:[o("revenue",{color:"#3b82f6",group:"compare",label:"Revenue"}),o("costs",{color:"#ef4444",group:"compare",label:"Costs"})],legend:{position:"top",alignment:"end"},grid:e.jsx(a,{}),axes:e.jsxs(e.Fragment,{children:[e.jsx(t,{position:"bottom"}),e.jsx(t,{position:"left"})]}),height:300})},v={render:()=>e.jsx(s,{data:_,xKey:"month",series:[o("revenueA",{color:"#3b82f6",stack:"stackA",group:"comparison"}),o("costsA",{color:"#93c5fd",stack:"stackA",group:"comparison"}),o("revenueB",{color:"#ef4444",stack:"stackB",group:"comparison"}),o("costsB",{color:"#fca5a5",stack:"stackB",group:"comparison"})],grid:e.jsx(a,{}),axes:e.jsxs(e.Fragment,{children:[e.jsx(t,{position:"bottom"}),e.jsx(t,{position:"left"})]}),height:300})},S={render:()=>e.jsx(s,{data:n,xKey:"month",title:"Revenue vs Trend",subtitle:"Bar chart with trendline overlay",series:[o("revenue",{color:"#3b82f6",label:"Revenue"}),A("trend",{color:"#f59e0b",label:"Trend"})],tooltip:!0,legend:{position:"end",alignment:"start"},grid:e.jsx(a,{}),axes:e.jsxs(e.Fragment,{children:[e.jsx(t,{position:"bottom"}),e.jsx(t,{position:"left"})]}),height:300})},y={render:()=>e.jsx(s,{data:n,xKey:"month",title:"Revenue Over Time",series:[K("revenue",{color:"#3b82f6",gradient:!0}),A("revenue",{color:"#3b82f6"})],grid:e.jsx(a,{}),axes:e.jsxs(e.Fragment,{children:[e.jsx(t,{position:"bottom"}),e.jsx(t,{position:"left"})]}),height:300})},C={render:()=>e.jsx(s,{data:n,xKey:"month",title:"Revenue & Costs Over Time",series:[K("revenue",{color:"#3b82f6",stack:"total",label:"Revenue"}),K("costs",{color:"#ef4444",stack:"total",label:"Costs"})],legend:!0,grid:e.jsx(a,{}),axes:e.jsxs(e.Fragment,{children:[e.jsx(t,{position:"bottom"}),e.jsx(t,{position:"left"})]}),height:300})},U=[{month:"Jan",profit:20,trend:15},{month:"Feb",profit:-10,trend:5},{month:"Mar",profit:35,trend:20},{month:"Apr",profit:-25,trend:-5},{month:"May",profit:15,trend:10},{month:"Jun",profit:-5,trend:8}],k={render:()=>e.jsx(s,{data:U,xKey:"month",series:[o("profit",{color:"#3b82f6"}),A("trend",{color:"#f59e0b",dots:!0,strokeWidth:2})],grid:e.jsx(a,{}),axes:e.jsxs(e.Fragment,{children:[e.jsx(t,{position:"bottom"}),e.jsx(t,{position:"left"})]}),height:300})};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <XDSChart data={monthlyData} xKey="month" title="Monthly Revenue" series={[bar('revenue', {
    color: '#3b82f6'
  })]} tooltip={true} grid={<XDSChartGrid />} axes={<>
          <XDSChartAxis position="bottom" />
          <XDSChartAxis position="left" tickFormat={currency()} />
        </>} height={300} />
}`,...x.parameters?.docs?.source},description:{story:"Simple bar chart",...x.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <XDSChart data={monthlyData} xKey="month" series={[line('trend', {
    color: '#3b82f6'
  })]} tooltip={true} grid={<XDSChartGrid />} axes={<>
          <XDSChartAxis position="bottom" />
          <XDSChartAxis position="left" />
        </>} height={300} />
}`,...g.parameters?.docs?.source},description:{story:"Simple line chart",...g.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <XDSChart data={monthlyData} xKey="month" title="Revenue & Costs" subtitle="Stacked by category" series={[bar('revenue', {
    color: '#3b82f6',
    stack: 'totals',
    label: 'Revenue'
  }), bar('costs', {
    color: '#ef4444',
    stack: 'totals',
    label: 'Costs'
  })]} legend={{
    position: 'bottom',
    alignment: 'center'
  }} grid={<XDSChartGrid />} axes={<>
          <XDSChartAxis position="bottom" />
          <XDSChartAxis position="left" />
        </>} height={300} />
}`,...b.parameters?.docs?.source},description:{story:"Stacked bars",...b.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <XDSChart data={monthlyData} xKey="month" title="Revenue vs Costs" series={[bar('revenue', {
    color: '#3b82f6',
    group: 'compare',
    label: 'Revenue'
  }), bar('costs', {
    color: '#ef4444',
    group: 'compare',
    label: 'Costs'
  })]} legend={{
    position: 'top',
    alignment: 'end'
  }} grid={<XDSChartGrid />} axes={<>
          <XDSChartAxis position="bottom" />
          <XDSChartAxis position="left" />
        </>} height={300} />
}`,...f.parameters?.docs?.source},description:{story:"Grouped bars",...f.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <XDSChart data={groupedStackData} xKey="month" series={[
  // Stack A (left bar in each group)
  bar('revenueA', {
    color: '#3b82f6',
    stack: 'stackA',
    group: 'comparison'
  }), bar('costsA', {
    color: '#93c5fd',
    stack: 'stackA',
    group: 'comparison'
  }),
  // Stack B (right bar in each group)
  bar('revenueB', {
    color: '#ef4444',
    stack: 'stackB',
    group: 'comparison'
  }), bar('costsB', {
    color: '#fca5a5',
    stack: 'stackB',
    group: 'comparison'
  })]} grid={<XDSChartGrid />} axes={<>
          <XDSChartAxis position="bottom" />
          <XDSChartAxis position="left" />
        </>} height={300} />
}`,...v.parameters?.docs?.source},description:{story:"Grouped stacked bars — two stacks side by side per x value",...v.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <XDSChart data={monthlyData} xKey="month" title="Revenue vs Trend" subtitle="Bar chart with trendline overlay" series={[bar('revenue', {
    color: '#3b82f6',
    label: 'Revenue'
  }), line('trend', {
    color: '#f59e0b',
    label: 'Trend'
  })]} tooltip={true} legend={{
    position: 'end',
    alignment: 'start'
  }} grid={<XDSChartGrid />} axes={<>
          <XDSChartAxis position="bottom" />
          <XDSChartAxis position="left" />
        </>} height={300} />
}`,...S.parameters?.docs?.source},description:{story:"Mixed: bars + line",...S.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <XDSChart data={monthlyData} xKey="month" title="Revenue Over Time" series={[area('revenue', {
    color: '#3b82f6',
    gradient: true
  }), line('revenue', {
    color: '#3b82f6'
  })]} grid={<XDSChartGrid />} axes={<>
          <XDSChartAxis position="bottom" />
          <XDSChartAxis position="left" />
        </>} height={300} />
}`,...y.parameters?.docs?.source},description:{story:"Area with gradient",...y.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <XDSChart data={monthlyData} xKey="month" title="Revenue & Costs Over Time" series={[area('revenue', {
    color: '#3b82f6',
    stack: 'total',
    label: 'Revenue'
  }), area('costs', {
    color: '#ef4444',
    stack: 'total',
    label: 'Costs'
  })]} legend={true} grid={<XDSChartGrid />} axes={<>
          <XDSChartAxis position="bottom" />
          <XDSChartAxis position="left" />
        </>} height={300} />
}`,...C.parameters?.docs?.source},description:{story:"Stacked areas",...C.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <XDSChart data={profitLossData} xKey="month" series={[bar('profit', {
    color: '#3b82f6'
  }), line('trend', {
    color: '#f59e0b',
    dots: true,
    strokeWidth: 2
  })]} grid={<XDSChartGrid />} axes={<>
          <XDSChartAxis position="bottom" />
          <XDSChartAxis position="left" />
        </>} height={300} />
}`,...k.parameters?.docs?.source},description:{story:"Mixed marks with negative values",...k.parameters?.docs?.description}}};const he=["SimpleBar","SimpleLine","StackedBars","GroupedBars","GroupedStackedBars","MixedMarks","AreaGradient","StackedAreas","NegativeValues"];export{y as AreaGradient,f as GroupedBars,v as GroupedStackedBars,S as MixedMarks,k as NegativeValues,x as SimpleBar,g as SimpleLine,C as StackedAreas,b as StackedBars,he as __namedExportsOrder,me as default};
