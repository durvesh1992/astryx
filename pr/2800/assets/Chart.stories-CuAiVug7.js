import{at as m,ad as t,r as d}from"./iframe-yRFQ_7VC.js";import{X as M}from"./XDSStack-CFJ7xIVk.js";import{u as y}from"./useDataset-B-cOmpQT.js";import{X as p,a as l}from"./XDSChartAxis-AXPU4QOc.js";import{u as h}from"./useXDSChartColors-DP0GcV3K.js";import{X as C}from"./XDSChartGrid-BGENEt5h.js";import{X as L}from"./XDSChartBar-KLFM76_T.js";import{X as b}from"./XDSChartTooltip-CTG93094.js";import{X as w}from"./XDSChartArea-o-0IGTjq.js";import{X as v}from"./XDSChartLine-CiFqkSw6.js";import{X as G}from"./XDSChartHeatmapGL-BnlQJsJk.js";import{X as j}from"./XDSChartLegend-B0nhyTYb.js";import{X as K}from"./XDSChartDot-CnercKbk.js";import{X as A}from"./XDSChartDotGL-0yCCiMlO.js";import"./preload-helper-Ct5FWWRu.js";import"./stack.stylex-5XIQDawT.js";import"./ChartContext-DZbKxN5B.js";import"./linear-gs3faI6G.js";import"./index-D8Xh4Tce.js";import"./index-CXyWrEU_.js";import"./area-C5zWI711.js";import"./array-2GBN5xbU.js";import"./monotone-BKrwi6Sb.js";import"./webgl-B2CDFegl.js";const rt={title:"Lab/Chart",component:p,tags:["autodocs"],parameters:{docs:{description:{component:`\`XDSChart\` — composable chart system built on d3. All marks share a single
coordinate space via React context.

Datasets from [vega-datasets](https://github.com/vega/vega-datasets) (CDN).`}}}},g={render:()=>{const n=h(),[a,c]=y("barley.json"),i=m.useMemo(()=>{if(!a.length)return[];const e=new Map;for(const r of a){const s=e.get(r.variety)??{sum:0,count:0};s.sum+=r.yield,s.count+=1,e.set(r.variety,s)}return[...e.entries()].map(([r,{sum:s,count:o}])=>({variety:r,avgYield:Math.round(s/o*10)/10})).sort((r,s)=>s.avgYield-r.avgYield).slice(0,10)},[a]);return c?t.jsx(d,{type:"supporting",children:"Loading…"}):t.jsxs(p,{data:i,xKey:"variety",yKeys:["avgYield"],height:300,children:[t.jsx(C,{horizontal:!0}),t.jsx(l,{position:"bottom"}),t.jsx(l,{position:"left"}),t.jsx(L,{dataKey:"avgYield",color:n.categorical(1)[0]}),t.jsx(b,{})]})}},x={render:()=>{const n=h(),[a,c]=y("stocks.csv"),i=m.useMemo(()=>{if(!a.length)return[];const r=a.filter(o=>o.symbol==="AAPL"||o.symbol==="GOOG"),s=new Map;for(const o of r){const u=s.get(o.date)??{date:o.date};u[o.symbol]=o.price,s.set(o.date,u)}return[...s.values()].filter(o=>o.AAPL!=null&&o.GOOG!=null).slice(-12)},[a]);if(c)return t.jsx(d,{type:"supporting",children:"Loading…"});const e=n.categorical(2);return t.jsxs(p,{data:i,xKey:"date",yKeys:["AAPL","GOOG"],yBaseline:"data",height:300,children:[t.jsx(C,{horizontal:!0}),t.jsx(l,{position:"bottom"}),t.jsx(l,{position:"left"}),t.jsx(v,{dataKey:"AAPL",color:e[0],dots:!0}),t.jsx(v,{dataKey:"GOOG",color:e[1],dots:!0}),t.jsx(j,{items:[{label:"AAPL",color:e[0]},{label:"GOOG",color:e[1]}]}),t.jsx(b,{})]})}},S={render:()=>{const n=h(),[a,c]=y("cars.json"),i=m.useMemo(()=>a.filter(e=>e.Horsepower!=null&&e.Miles_per_Gallon!=null).map(e=>({hp:e.Horsepower,mpg:e.Miles_per_Gallon})),[a]);return c?t.jsx(d,{type:"supporting",children:"Loading…"}):t.jsxs(p,{data:i,xKey:"hp",yKeys:["mpg"],yBaseline:"data",height:350,children:[t.jsx(C,{horizontal:!0,vertical:!0}),t.jsx(l,{position:"bottom"}),t.jsx(l,{position:"left"}),t.jsx(K,{dataKey:"mpg",color:n.categorical(1)[0],radius:3}),t.jsx(b,{crosshair:"xy"})]})}},D={render:()=>{const n=h(),[a,c]=y("flights-10k.json"),i=m.useMemo(()=>a.filter(e=>e.delay!=null&&e.distance!=null).map(e=>({distance:e.distance,delay:e.delay})),[a]);return c?t.jsx(d,{type:"supporting",children:"Loading 10k flights…"}):t.jsxs(M,{direction:"vertical",gap:2,children:[t.jsxs(d,{type:"supporting",color:"secondary",children:[i.length.toLocaleString()," flights"]}),t.jsxs(p,{data:i,xKey:"distance",yKeys:["delay"],yBaseline:"zero",height:400,children:[t.jsx(C,{horizontal:!0}),t.jsx(l,{position:"bottom"}),t.jsx(l,{position:"left"}),t.jsx(A,{dataKey:"delay",color:n.categorical(1)[0],size:3,opacity:.3})]})]})}},f={render:()=>{const n=h(),[a,c]=y("seattle-weather.csv"),i=m.useMemo(()=>{if(!a.length)return[];const e=new Map;for(const r of a){const s=String(r.date).slice(0,7),o=e.get(s)??{maxSum:0,minSum:0,count:0};o.maxSum+=r.temp_max,o.minSum+=r.temp_min,o.count+=1,e.set(s,o)}return[...e.entries()].map(([r,{maxSum:s,minSum:o,count:u}])=>({month:r,avgMax:Math.round(s/u*10)/10,avgMin:Math.round(o/u*10)/10,avgMid:Math.round((s+o)/(u*2)*10)/10})).sort((r,s)=>r.month.localeCompare(s.month)).slice(-24)},[a]);return c?t.jsx(d,{type:"supporting",children:"Loading…"}):t.jsxs(p,{data:i,xKey:"month",yKeys:["avgMax","avgMin"],yBaseline:"data",height:300,children:[t.jsx(C,{horizontal:!0}),t.jsx(l,{position:"bottom"}),t.jsx(l,{position:"left"}),t.jsx(w,{yUpper:"avgMax",yLower:"avgMin",color:n.categorical(1)[0],opacity:.15}),t.jsx(v,{dataKey:"avgMid",color:n.categorical(1)[0],dots:!0}),t.jsx(b,{})]})}},X={render:()=>{const n=h(),[a,c]=y("gapminder.json"),i=m.useMemo(()=>{if(!a.length)return[];const e=["United States","China","India","Brazil","Japan","Germany","Nigeria","Russia"];return a.filter(r=>e.includes(r.country)&&r.year>=1960&&r.year%10===0).map(r=>({country:r.country,year:String(r.year),lifeExp:Math.round(r.life_expect)}))},[a]);return c?t.jsx(d,{type:"supporting",children:"Loading…"}):t.jsxs(p,{data:i,xKey:"year",yKeys:["lifeExp"],height:300,children:[t.jsx(l,{position:"bottom"}),t.jsx(G,{xKey:"year",yKey:"country",valueKey:"lifeExp",colorRange:n.sequential.blue(5)}),t.jsx(j,{gradient:n.sequential.blue(5),domain:[30,85],label:"Life Expectancy"})]})}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const colors = useXDSChartColors();
    const [raw, loading] = useDataset<Barley>('barley.json');
    const data = useMemo(() => {
      if (!raw.length) {
        return [];
      }
      const byVariety = new Map<string, {
        sum: number;
        count: number;
      }>();
      for (const d of raw) {
        const e = byVariety.get(d.variety) ?? {
          sum: 0,
          count: 0
        };
        e.sum += d.yield;
        e.count += 1;
        byVariety.set(d.variety, e);
      }
      return [...byVariety.entries()].map(([variety, {
        sum,
        count
      }]) => ({
        variety,
        avgYield: Math.round(sum / count * 10) / 10
      })).sort((a, b) => b.avgYield - a.avgYield).slice(0, 10);
    }, [raw]);
    if (loading) {
      return <XDSText type="supporting">Loading…</XDSText>;
    }
    return <XDSChart data={data} xKey="variety" yKeys={['avgYield']} height={300}>
        <XDSChartGrid horizontal />
        <XDSChartAxis position="bottom" />
        <XDSChartAxis position="left" />
        <XDSChartBar dataKey="avgYield" color={colors.categorical(1)[0]} />
        <XDSChartTooltip />
      </XDSChart>;
  }
}`,...g.parameters?.docs?.source},description:{story:"Iowa barley yields — average by variety (barley.json)",...g.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const colors = useXDSChartColors();
    const [raw, loading] = useDataset<Stock>('stocks.csv');
    const data = useMemo(() => {
      if (!raw.length) {
        return [];
      }
      const filtered = raw.filter(d => d.symbol === 'AAPL' || d.symbol === 'GOOG');
      const byDate = new Map<string, Record<string, unknown>>();
      for (const d of filtered) {
        const e = byDate.get(d.date) ?? {
          date: d.date
        };
        e[d.symbol] = d.price;
        byDate.set(d.date, e);
      }
      return [...byDate.values()].filter(d => d.AAPL != null && d.GOOG != null).slice(-12);
    }, [raw]);
    if (loading) {
      return <XDSText type="supporting">Loading…</XDSText>;
    }
    const c = colors.categorical(2);
    return <XDSChart data={data} xKey="date" yKeys={['AAPL', 'GOOG']} yBaseline="data" height={300}>
        <XDSChartGrid horizontal />
        <XDSChartAxis position="bottom" />
        <XDSChartAxis position="left" />
        <XDSChartLine dataKey="AAPL" color={c[0]} dots />
        <XDSChartLine dataKey="GOOG" color={c[1]} dots />
        <XDSChartLegend items={[{
        label: 'AAPL',
        color: c[0]
      }, {
        label: 'GOOG',
        color: c[1]
      }]} />
        <XDSChartTooltip />
      </XDSChart>;
  }
}`,...x.parameters?.docs?.source},description:{story:"AAPL vs GOOG monthly prices (stocks.csv)",...x.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    const colors = useXDSChartColors();
    const [raw, loading] = useDataset<Car>('cars.json');
    const data = useMemo(() => {
      return raw.filter(d => d.Horsepower != null && d.Miles_per_Gallon != null).map(d => ({
        hp: d.Horsepower,
        mpg: d.Miles_per_Gallon
      }));
    }, [raw]);
    if (loading) {
      return <XDSText type="supporting">Loading…</XDSText>;
    }
    return <XDSChart data={data} xKey="hp" yKeys={['mpg']} yBaseline="data" height={350}>
        <XDSChartGrid horizontal vertical />
        <XDSChartAxis position="bottom" />
        <XDSChartAxis position="left" />
        <XDSChartDot dataKey="mpg" color={colors.categorical(1)[0]} radius={3} />
        <XDSChartTooltip crosshair="xy" />
      </XDSChart>;
  }
}`,...S.parameters?.docs?.source},description:{story:"Horsepower vs MPG — 406 cars (cars.json)",...S.parameters?.docs?.description}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => {
    const colors = useXDSChartColors();
    const [raw, loading] = useDataset<Flight>('flights-10k.json');
    const data = useMemo(() => {
      return raw.filter(d => d.delay != null && d.distance != null).map(d => ({
        distance: d.distance,
        delay: d.delay
      }));
    }, [raw]);
    if (loading) {
      return <XDSText type="supporting">Loading 10k flights…</XDSText>;
    }
    return <XDSStack direction="vertical" gap={2}>
        <XDSText type="supporting" color="secondary">
          {data.length.toLocaleString()} flights
        </XDSText>
        <XDSChart data={data} xKey="distance" yKeys={['delay']} yBaseline="zero" height={400}>
          <XDSChartGrid horizontal />
          <XDSChartAxis position="bottom" />
          <XDSChartAxis position="left" />
          <XDSChartDotGL dataKey="delay" color={colors.categorical(1)[0]} size={3} opacity={0.3} />
        </XDSChart>
      </XDSStack>;
  }
}`,...D.parameters?.docs?.source},description:{story:"Flight delay vs distance — 10k points via WebGL (flights-10k.json)",...D.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const colors = useXDSChartColors();
    const [raw, loading] = useDataset<Weather>('seattle-weather.csv');
    const data = useMemo(() => {
      if (!raw.length) {
        return [];
      }
      const byMonth = new Map<string, {
        maxSum: number;
        minSum: number;
        count: number;
      }>();
      for (const d of raw) {
        const month = String(d.date).slice(0, 7);
        const e = byMonth.get(month) ?? {
          maxSum: 0,
          minSum: 0,
          count: 0
        };
        e.maxSum += d.temp_max;
        e.minSum += d.temp_min;
        e.count += 1;
        byMonth.set(month, e);
      }
      return [...byMonth.entries()].map(([month, {
        maxSum,
        minSum,
        count
      }]) => ({
        month,
        avgMax: Math.round(maxSum / count * 10) / 10,
        avgMin: Math.round(minSum / count * 10) / 10,
        avgMid: Math.round((maxSum + minSum) / (count * 2) * 10) / 10
      })).sort((a, b) => a.month.localeCompare(b.month)).slice(-24);
    }, [raw]);
    if (loading) {
      return <XDSText type="supporting">Loading…</XDSText>;
    }
    return <XDSChart data={data} xKey="month" yKeys={['avgMax', 'avgMin']} yBaseline="data" height={300}>
        <XDSChartGrid horizontal />
        <XDSChartAxis position="bottom" />
        <XDSChartAxis position="left" />
        <XDSChartArea yUpper="avgMax" yLower="avgMin" color={colors.categorical(1)[0]} opacity={0.15} />
        <XDSChartLine dataKey="avgMid" color={colors.categorical(1)[0]} dots />
        <XDSChartTooltip />
      </XDSChart>;
  }
}`,...f.parameters?.docs?.source},description:{story:"Seattle temperature range — monthly avg min/max band (seattle-weather.csv)",...f.parameters?.docs?.description}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => {
    const colors = useXDSChartColors();
    const [raw, loading] = useDataset<Gapminder>('gapminder.json');
    const data = useMemo(() => {
      if (!raw.length) {
        return [];
      }
      const countries = ['United States', 'China', 'India', 'Brazil', 'Japan', 'Germany', 'Nigeria', 'Russia'];
      return raw.filter(d => countries.includes(d.country) && d.year >= 1960 && d.year % 10 === 0).map(d => ({
        country: d.country,
        year: String(d.year),
        lifeExp: Math.round(d.life_expect)
      }));
    }, [raw]);
    if (loading) {
      return <XDSText type="supporting">Loading…</XDSText>;
    }
    return <XDSChart data={data} xKey="year" yKeys={['lifeExp']} height={300}>
        <XDSChartAxis position="bottom" />
        <XDSChartHeatmapGL xKey="year" yKey="country" valueKey="lifeExp" colorRange={colors.sequential.blue(5)} />
        <XDSChartLegend gradient={colors.sequential.blue(5)} domain={[30, 85]} label="Life Expectancy" />
      </XDSChart>;
  }
}`,...X.parameters?.docs?.source},description:{story:"Life expectancy by country × decade (gapminder.json)",...X.parameters?.docs?.description}}};const at=["BarChart","LineChart","ScatterPlot","WebGLScatter","ConfidenceBand","Heatmap"];export{g as BarChart,f as ConfidenceBand,X as Heatmap,x as LineChart,S as ScatterPlot,D as WebGLScatter,at as __namedExportsOrder,rt as default};
