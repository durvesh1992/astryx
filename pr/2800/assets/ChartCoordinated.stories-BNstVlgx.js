import{at as i,ad as e,r as l}from"./iframe-yRFQ_7VC.js";import{X as c}from"./XDSStack-CFJ7xIVk.js";import{u as M}from"./useDataset-B-cOmpQT.js";import{u as j}from"./useXDSChartColors-DP0GcV3K.js";import{X as v}from"./XDSHeading---Kr4LhL.js";import{X as x,a as h}from"./XDSChartAxis-AXPU4QOc.js";import{X as m}from"./XDSChartGrid-BGENEt5h.js";import{X as w}from"./XDSChartDot-CnercKbk.js";import{X as C,a as D}from"./XDSChartReferenceLine-D72NMxf0.js";import{X as B}from"./XDSChartBar-KLFM76_T.js";import"./preload-helper-Ct5FWWRu.js";import"./stack.stylex-5XIQDawT.js";import"./ChartContext-DZbKxN5B.js";import"./linear-gs3faI6G.js";const N={title:"Lab/Chart Interactions/Coordinated Views"},d={render:()=>{const b=j(),[g]=M("cars.json"),[r,u]=i.useState(null),o=i.useMemo(()=>g.filter(t=>t.Horsepower!=null&&t.Miles_per_Gallon!=null&&t.Origin!=null),[g]),n=i.useMemo(()=>r?o.filter(t=>t.Horsepower>=r[0]&&t.Horsepower<=r[1]):o,[o,r]),y=i.useMemo(()=>o.map(t=>({hp:t.Horsepower,mpg:t.Miles_per_Gallon})),[o]),S=i.useMemo(()=>{const t=new Map;for(const a of n){const s=t.get(a.Origin)??{sum:0,count:0};s.sum+=a.Miles_per_Gallon,s.count+=1,t.set(a.Origin,s)}return[...t.entries()].map(([a,{sum:s,count:X}])=>({origin:a,avgMpg:Math.round(s/X*10)/10})).sort((a,s)=>s.avgMpg-a.avgMpg)},[n]),f=i.useMemo(()=>n.slice(0,10).map(t=>({name:t.Name,hp:t.Horsepower,mpg:t.Miles_per_Gallon,origin:t.Origin})),[n]);if(!o.length)return e.jsx(l,{type:"supporting",children:"Loading\\u2026"});const p=b.categorical(3);return e.jsxs(c,{direction:"vertical",gap:6,children:[e.jsx(v,{level:3,children:"Coordinated Views"}),e.jsxs(l,{type:"supporting",color:"secondary",children:["Brush on the scatter to filter the bar chart and table below.",r?` Showing ${n.length} cars with ${Math.round(r[0])}–${Math.round(r[1])} HP.`:` Showing all ${o.length} cars.`]}),e.jsxs(c,{direction:"vertical",gap:1,children:[e.jsx(l,{type:"label",children:"Horsepower vs MPG"}),e.jsxs(x,{data:y,xKey:"hp",yKeys:["mpg"],yBaseline:"data",height:280,children:[e.jsx(m,{horizontal:!0,vertical:!0}),e.jsx(h,{position:"bottom"}),e.jsx(h,{position:"left"}),e.jsx(w,{dataKey:"mpg",color:p[0],radius:3}),e.jsx(C,{onBrush:t=>u(t.x),onClear:()=>u(null)}),r&&e.jsxs(e.Fragment,{children:[e.jsx(D,{x:r[0],color:p[0],strokeDasharray:"none"}),e.jsx(D,{x:r[1],color:p[0],strokeDasharray:"none"})]})]})]}),e.jsxs(c,{direction:"vertical",gap:1,children:[e.jsx(l,{type:"label",children:"Average MPG by Origin (filtered)"}),e.jsxs(x,{data:S,xKey:"origin",yKeys:["avgMpg"],height:200,children:[e.jsx(m,{horizontal:!0}),e.jsx(h,{position:"bottom"}),e.jsx(h,{position:"left"}),e.jsx(B,{dataKey:"avgMpg",color:p[1]})]})]}),e.jsxs(c,{direction:"vertical",gap:1,children:[e.jsx(l,{type:"label",children:"Top 10 cars (filtered)"}),e.jsx("div",{style:{fontSize:12,overflow:"auto"},children:e.jsxs("table",{style:{width:"100%",borderCollapse:"collapse"},children:[e.jsx("thead",{children:e.jsxs("tr",{style:{borderBottom:"1px solid var(--color-border)",textAlign:"left"},children:[e.jsx("th",{style:{padding:"4px 8px"},children:"Name"}),e.jsx("th",{style:{padding:"4px 8px"},children:"HP"}),e.jsx("th",{style:{padding:"4px 8px"},children:"MPG"}),e.jsx("th",{style:{padding:"4px 8px"},children:"Origin"})]})}),e.jsx("tbody",{children:f.map((t,a)=>e.jsxs("tr",{style:{borderBottom:"1px solid var(--color-border)"},children:[e.jsx("td",{style:{padding:"4px 8px"},children:t.name}),e.jsx("td",{style:{padding:"4px 8px"},children:t.hp}),e.jsx("td",{style:{padding:"4px 8px"},children:t.mpg}),e.jsx("td",{style:{padding:"4px 8px"},children:t.origin})]},a))})]})})]})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => {
    const colors = useXDSChartColors();
    const [raw] = useDataset<Car>('cars.json');
    const [brushRange, setBrushRange] = useState<[number, number] | null>(null);
    const allData = useMemo(() => raw.filter(d => d.Horsepower != null && d.Miles_per_Gallon != null && d.Origin != null), [raw]);
    const filteredData = useMemo(() => {
      if (!brushRange) {
        return allData;
      }
      return allData.filter(d => d.Horsepower >= brushRange[0] && d.Horsepower <= brushRange[1]);
    }, [allData, brushRange]);

    // Scatter data
    const scatterData = useMemo(() => allData.map(d => ({
      hp: d.Horsepower,
      mpg: d.Miles_per_Gallon
    })), [allData]);

    // Bar data — average MPG by origin, from filtered set
    const barData = useMemo(() => {
      const byOrigin = new Map<string, {
        sum: number;
        count: number;
      }>();
      for (const d of filteredData) {
        const e = byOrigin.get(d.Origin) ?? {
          sum: 0,
          count: 0
        };
        e.sum += d.Miles_per_Gallon;
        e.count += 1;
        byOrigin.set(d.Origin, e);
      }
      return [...byOrigin.entries()].map(([origin, {
        sum,
        count
      }]) => ({
        origin,
        avgMpg: Math.round(sum / count * 10) / 10
      })).sort((a, b) => b.avgMpg - a.avgMpg);
    }, [filteredData]);

    // Table data — top 10 from filtered set
    const tableData = useMemo(() => filteredData.slice(0, 10).map(d => ({
      name: d.Name,
      hp: d.Horsepower,
      mpg: d.Miles_per_Gallon,
      origin: d.Origin
    })), [filteredData]);
    if (!allData.length) {
      return <XDSText type="supporting">Loading\\u2026</XDSText>;
    }
    const c = colors.categorical(3);
    return <XDSStack direction="vertical" gap={6}>
        <XDSHeading level={3}>Coordinated Views</XDSHeading>
        <XDSText type="supporting" color="secondary">
          Brush on the scatter to filter the bar chart and table below.
          {brushRange ? \` Showing \${filteredData.length} cars with \${Math.round(brushRange[0])}\\u2013\${Math.round(brushRange[1])} HP.\` : \` Showing all \${allData.length} cars.\`}
        </XDSText>

        {/* Scatter with brush */}
        <XDSStack direction="vertical" gap={1}>
          <XDSText type="label">Horsepower vs MPG</XDSText>
          <XDSChart data={scatterData} xKey="hp" yKeys={['mpg']} yBaseline="data" height={280}>
            <XDSChartGrid horizontal vertical />
            <XDSChartAxis position="bottom" />
            <XDSChartAxis position="left" />
            <XDSChartDot dataKey="mpg" color={c[0]} radius={3} />
            <XDSChartBrush onBrush={range => setBrushRange(range.x)} onClear={() => setBrushRange(null)} />
            {brushRange && <>
                <XDSChartReferenceLine x={brushRange[0]} color={c[0]} strokeDasharray="none" />
                <XDSChartReferenceLine x={brushRange[1]} color={c[0]} strokeDasharray="none" />
              </>}
          </XDSChart>
        </XDSStack>

        {/* Bar chart — reacts to brush */}
        <XDSStack direction="vertical" gap={1}>
          <XDSText type="label">Average MPG by Origin (filtered)</XDSText>
          <XDSChart data={barData} xKey="origin" yKeys={['avgMpg']} height={200}>
            <XDSChartGrid horizontal />
            <XDSChartAxis position="bottom" />
            <XDSChartAxis position="left" />
            <XDSChartBar dataKey="avgMpg" color={c[1]} />
          </XDSChart>
        </XDSStack>

        {/* Table — reacts to brush */}
        <XDSStack direction="vertical" gap={1}>
          <XDSText type="label">Top 10 cars (filtered)</XDSText>
          <div style={{
          fontSize: 12,
          overflow: 'auto'
        }}>
            <table style={{
            width: '100%',
            borderCollapse: 'collapse'
          }}>
              <thead>
                <tr style={{
                borderBottom: '1px solid var(--color-border)',
                textAlign: 'left'
              }}>
                  <th style={{
                  padding: '4px 8px'
                }}>Name</th>
                  <th style={{
                  padding: '4px 8px'
                }}>HP</th>
                  <th style={{
                  padding: '4px 8px'
                }}>MPG</th>
                  <th style={{
                  padding: '4px 8px'
                }}>Origin</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((d, i) => <tr key={i} style={{
                borderBottom: '1px solid var(--color-border)'
              }}>
                    <td style={{
                  padding: '4px 8px'
                }}>{d.name}</td>
                    <td style={{
                  padding: '4px 8px'
                }}>{d.hp}</td>
                    <td style={{
                  padding: '4px 8px'
                }}>{d.mpg}</td>
                    <td style={{
                  padding: '4px 8px'
                }}>{d.origin}</td>
                  </tr>)}
              </tbody>
            </table>
          </div>
        </XDSStack>
      </XDSStack>;
  }
}`,...d.parameters?.docs?.source},description:{story:"Brush on scatter filters bar chart + table — coordinated views",...d.parameters?.docs?.description}}};const E=["CoordinatedViews"];export{d as CoordinatedViews,E as __namedExportsOrder,N as default};
