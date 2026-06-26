import{at as a,ad as e}from"./iframe-yRFQ_7VC.js";import{X as d,p as S}from"./XDSTable-tIgxviJL.js";import{u}from"./useXDSTableColumnResize-DIGaOOLz.js";import{a as b,u as f}from"./useXDSTableSelectionState-CU3jUBFV.js";import"./preload-helper-Ct5FWWRu.js";import"./XDSEmptyState-CWiMy9oI.js";import"./XDSCheckboxInput-C50y4c1Q.js";import"./XDSFieldStatus-BgnciRVy.js";const r=[{id:"1",name:"Alice",email:"alice@example.com",role:"Engineer",isLocked:!1},{id:"2",name:"Bob",email:"bob@example.com",role:"Designer",isLocked:!1},{id:"3",name:"Charlie",email:"charlie@example.com",role:"Manager",isLocked:!1},{id:"4",name:"Diana",email:"diana@example.com",role:"Engineer",isLocked:!0},{id:"5",name:"Eve",email:"eve@example.com",role:"Admin",isLocked:!1}],l=[{key:"name",header:"Name"},{key:"email",header:"Email"},{key:"role",header:"Role"}],X={title:"Core/TableColumnResize",tags:["autodocs"]},c={render:()=>{const[s,o]=a.useState({}),i=u({columnWidths:s,columns:l,onColumnResizeEnd:n=>{o(t=>({...t,...n}))}});return e.jsxs("div",{style:{maxWidth:600},children:[e.jsx("p",{style:{marginBottom:8,fontSize:14,color:"#666"},children:"Drag the right edge of any column header to resize. The last proportional column has no handle; it flexes to fill remaining space."}),e.jsx(d,{data:r,columns:l,idKey:"id",plugins:{columnResize:i}})]})}},m={render:()=>{const[s,o]=a.useState({}),i=u({columnWidths:s,onColumnResizeEnd:n=>{o(t=>({...t,...n}))},columns:l,minWidth:80,maxWidth:300});return e.jsxs("div",{style:{maxWidth:600},children:[e.jsx("p",{style:{marginBottom:8,fontSize:14,color:"#666"},children:"Columns are constrained between 80px and 300px."}),e.jsx(d,{data:r,columns:l,idKey:"id",plugins:{columnResize:i}})]})}},p={render:()=>{const[s,o]=a.useState({}),i=u({columnWidths:s,columns:l,onColumnResizeEnd:n=>{o(t=>({...t,...n}))}});return e.jsxs("div",{style:{maxWidth:600},children:[e.jsxs("p",{style:{marginBottom:8,fontSize:14,color:"#666"},children:["Current widths:"," ",Object.keys(s).length>0?Object.entries(s).map(([n,t])=>`${n}: ${t}px`).join(", "):"none set (resize a column to see)"]}),e.jsx("button",{onClick:()=>o({}),style:{marginBottom:8,fontSize:14},children:"Reset all widths"}),e.jsx(d,{data:r,columns:l,idKey:"id",plugins:{columnResize:i}})]})}},h={render:()=>{const[s,o]=a.useState({}),i=u({columnWidths:s,columns:l,onColumnResizeEnd:n=>{o(t=>({...t,...n}))}});return e.jsxs("div",{style:{maxWidth:600},children:[e.jsx("p",{style:{marginBottom:8,fontSize:14,color:"#666"},children:"Tab to a resize handle, press Enter to activate, use Arrow keys to resize (Shift for larger steps), Enter to commit, Escape to cancel."}),e.jsx(d,{data:r,columns:l,idKey:"id",plugins:{columnResize:i}})]})}},g={render:()=>{const[s,o]=a.useState(new Set),[i,n]=a.useState({}),{selectionConfig:t}=b({data:r,idKey:"id",selectedKeys:s,setSelectedKeys:o}),x=f(t),C=u({columnWidths:i,columns:l,onColumnResizeEnd:W=>{n(R=>({...R,...W}))}});return e.jsxs("div",{style:{maxWidth:600},children:[e.jsxs("p",{style:{marginBottom:8,fontSize:14,color:"#666"},children:["Selection and column resize plugins composed together. Selected:"," ",s.size," of ",r.length]}),e.jsx(d,{data:r,columns:l,idKey:"id",plugins:{selection:x,columnResize:C}})]})}},y=[{key:"name",header:"Name",width:S(200)},{key:"email",header:"Email",width:S(250)},{key:"role",header:"Role",width:S(150)}],z={render:()=>{const[s,o]=a.useState({}),i=u({columnWidths:s,columns:y,onColumnResizeEnd:n=>{o(t=>({...t,...n}))}});return e.jsxs("div",{style:{maxWidth:600},children:[e.jsx("p",{style:{marginBottom:8,fontSize:14,color:"#666"},children:"All columns are pixel-width. Every column gets a resize handle, including the last one. Min width defaults to the column's declared pixel value."}),e.jsx(d,{data:r,columns:y,idKey:"id",plugins:{columnResize:i}})]})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [columnWidths, setColumnWidths] = useState<Record<string, number>>({});
    const resizePlugin = useXDSTableColumnResize<User>({
      columnWidths,
      columns: columns as XDSTableColumn<Record<string, unknown>>[],
      onColumnResizeEnd: updates => {
        setColumnWidths(prev => ({
          ...prev,
          ...updates
        }));
      }
    });
    return <div style={{
      maxWidth: 600
    }}>
        <p style={{
        marginBottom: 8,
        fontSize: 14,
        color: '#666'
      }}>
          Drag the right edge of any column header to resize. The last
          proportional column has no handle; it flexes to fill remaining space.
        </p>
        <XDSTable data={users} columns={columns} idKey="id" plugins={{
        columnResize: resizePlugin
      }} />
      </div>;
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [columnWidths, setColumnWidths] = useState<Record<string, number>>({});
    const resizePlugin = useXDSTableColumnResize<User>({
      columnWidths,
      onColumnResizeEnd: updates => {
        setColumnWidths(prev => ({
          ...prev,
          ...updates
        }));
      },
      columns: columns as XDSTableColumn<Record<string, unknown>>[],
      minWidth: 80,
      maxWidth: 300
    });
    return <div style={{
      maxWidth: 600
    }}>
        <p style={{
        marginBottom: 8,
        fontSize: 14,
        color: '#666'
      }}>
          Columns are constrained between 80px and 300px.
        </p>
        <XDSTable data={users} columns={columns} idKey="id" plugins={{
        columnResize: resizePlugin
      }} />
      </div>;
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [columnWidths, setColumnWidths] = useState<Record<string, number>>({});
    const resizePlugin = useXDSTableColumnResize<User>({
      columnWidths,
      columns: columns as XDSTableColumn<Record<string, unknown>>[],
      onColumnResizeEnd: updates => {
        setColumnWidths(prev => ({
          ...prev,
          ...updates
        }));
      }
    });
    return <div style={{
      maxWidth: 600
    }}>
        <p style={{
        marginBottom: 8,
        fontSize: 14,
        color: '#666'
      }}>
          Current widths:{' '}
          {Object.keys(columnWidths).length > 0 ? Object.entries(columnWidths).map(([key, width]) => \`\${key}: \${width}px\`).join(', ') : 'none set (resize a column to see)'}
        </p>
        <button onClick={() => setColumnWidths({})} style={{
        marginBottom: 8,
        fontSize: 14
      }}>
          Reset all widths
        </button>
        <XDSTable data={users} columns={columns} idKey="id" plugins={{
        columnResize: resizePlugin
      }} />
      </div>;
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [columnWidths, setColumnWidths] = useState<Record<string, number>>({});
    const resizePlugin = useXDSTableColumnResize<User>({
      columnWidths,
      columns: columns as XDSTableColumn<Record<string, unknown>>[],
      onColumnResizeEnd: updates => {
        setColumnWidths(prev => ({
          ...prev,
          ...updates
        }));
      }
    });
    return <div style={{
      maxWidth: 600
    }}>
        <p style={{
        marginBottom: 8,
        fontSize: 14,
        color: '#666'
      }}>
          Tab to a resize handle, press Enter to activate, use Arrow keys to
          resize (Shift for larger steps), Enter to commit, Escape to cancel.
        </p>
        <XDSTable data={users} columns={columns} idKey="id" plugins={{
        columnResize: resizePlugin
      }} />
      </div>;
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [selectedKeys, setSelectedKeys] = useState<Set<string>>(new Set());
    const [columnWidths, setColumnWidths] = useState<Record<string, number>>({});
    const {
      selectionConfig
    } = useXDSTableSelectionState<User>({
      data: users,
      idKey: 'id',
      selectedKeys,
      setSelectedKeys
    });
    const selectionPlugin = useXDSTableSelection<User>(selectionConfig);
    const resizePlugin = useXDSTableColumnResize<User>({
      columnWidths,
      columns: columns as XDSTableColumn<Record<string, unknown>>[],
      onColumnResizeEnd: updates => {
        setColumnWidths(prev => ({
          ...prev,
          ...updates
        }));
      }
    });
    return <div style={{
      maxWidth: 600
    }}>
        <p style={{
        marginBottom: 8,
        fontSize: 14,
        color: '#666'
      }}>
          Selection and column resize plugins composed together. Selected:{' '}
          {selectedKeys.size} of {users.length}
        </p>
        <XDSTable data={users} columns={columns} idKey="id" plugins={{
        selection: selectionPlugin,
        columnResize: resizePlugin
      }} />
      </div>;
  }
}`,...g.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [columnWidths, setColumnWidths] = useState<Record<string, number>>({});
    const resizePlugin = useXDSTableColumnResize<User>({
      columnWidths,
      columns: pixelColumns as XDSTableColumn<Record<string, unknown>>[],
      onColumnResizeEnd: updates => {
        setColumnWidths(prev => ({
          ...prev,
          ...updates
        }));
      }
    });
    return <div style={{
      maxWidth: 600
    }}>
        <p style={{
        marginBottom: 8,
        fontSize: 14,
        color: '#666'
      }}>
          All columns are pixel-width. Every column gets a resize handle,
          including the last one. Min width defaults to the column&apos;s
          declared pixel value.
        </p>
        <XDSTable data={users} columns={pixelColumns} idKey="id" plugins={{
        columnResize: resizePlugin
      }} />
      </div>;
  }
}`,...z.parameters?.docs?.source}}};const K=["Default","WithMinMaxConstraints","PersistingWidths","KeyboardResize","WithSelectionAndResize","AllPixelColumns"];export{z as AllPixelColumns,c as Default,h as KeyboardResize,p as PersistingWidths,m as WithMinMaxConstraints,g as WithSelectionAndResize,K as __namedExportsOrder,X as default};
