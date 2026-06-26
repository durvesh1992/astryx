import{at as a,ad as e,r as b,X as V}from"./iframe-yRFQ_7VC.js";import{X as T}from"./XDSTable-tIgxviJL.js";import{X as x}from"./XDSMultiSelector-DdkKskzX.js";import{X as D}from"./XDSToolbar-DqTezkuX.js";import{a as M,u as E}from"./useXDSTableSelectionState-CU3jUBFV.js";import"./preload-helper-Ct5FWWRu.js";import"./XDSEmptyState-CWiMy9oI.js";import"./useXDSPopover-ChRJmaAz.js";import"./XDSField-COi97ivg.js";import"./XDSFieldStatus-BgnciRVy.js";import"./inputStyles.stylex-BIqXE6lP.js";import"./XDSDivider-CD2fc5JP.js";import"./XDSCheckboxInput-C50y4c1Q.js";import"./XDSBadge-COTe2g1g.js";import"./utils-_uNaBhDK.js";import"./XDSSection-C0P8UZDV.js";import"./container.stylex-BI6SFdSl.js";import"./padding.stylex-BDg7w1Mn.js";import"./useListFocus-C2Hg4nex.js";function X(o){const u=a.useRef(o);return u.current=o,a.useMemo(()=>({transformColumns(l){const n=u.current,c=new Set(n.activeColumnKeys),s=new Map(n.activeColumnKeys.map((i,d)=>[i,d]));return l.filter(i=>c.has(i.key)).sort((i,d)=>{const g=s.get(i.key)??1/0,m=s.get(d.key)??1/0;return g-m})}}),[])}function k(o){const{columns:u,activeColumnKeys:l}=o,n=a.useRef(o);n.current=o;const c=a.useMemo(()=>new Set(l),[l]),s=a.useMemo(()=>new Set(u.filter(t=>t.isAlwaysVisible).map(t=>t.key)),[u]),i=a.useCallback(t=>{const r=n.current;if(new Set(r.columns.filter(v=>v.isAlwaysVisible).map(v=>v.key)).has(t))return;const C=r.activeColumnKeys;new Set(C).has(t)?r.onChangeActiveColumnKeys(C.filter(v=>v!==t)):r.onChangeActiveColumnKeys([...C,t])},[]),d=a.useCallback(t=>c.has(t),[c]),g=a.useCallback(t=>!s.has(t),[s]),m=a.useCallback(()=>{const t=n.current;t.onChangeActiveColumnKeys(t.columns.map(r=>r.key))},[]),O=a.useCallback(()=>{const t=n.current;t.defaultColumnKeys?t.onChangeActiveColumnKeys([...t.defaultColumnKeys]):t.onChangeActiveColumnKeys(t.columns.map(r=>r.key))},[]),R=a.useCallback(t=>{const r=n.current,w=new Set(r.columns.filter(p=>p.isAlwaysVisible).map(p=>p.key)),C=new Set(t);for(const p of w)C.add(p);r.onChangeActiveColumnKeys(Array.from(C))},[]);return{columnSettingsConfig:o,activeColumnKeys:l,toggleColumn:i,isColumnActive:d,isColumnToggleable:g,showAllColumns:m,resetToDefault:O,setActiveColumnKeys:R}}const S=[{id:"1",name:"Alice",email:"alice@example.com",role:"Engineer",department:"Platform",status:"Active"},{id:"2",name:"Bob",email:"bob@example.com",role:"Designer",department:"Product",status:"Active"},{id:"3",name:"Charlie",email:"charlie@example.com",role:"Manager",department:"Platform",status:"Away"},{id:"4",name:"Diana",email:"diana@example.com",role:"Engineer",department:"Infrastructure",status:"Active"},{id:"5",name:"Eve",email:"eve@example.com",role:"Admin",department:"Operations",status:"Inactive"}],U=[{key:"name",header:"Name"},{key:"email",header:"Email"},{key:"role",header:"Role"},{key:"department",header:"Department"},{key:"status",header:"Status"}],y=[{key:"name",label:"Name",isAlwaysVisible:!0},{key:"email",label:"Email"},{key:"role",label:"Role"},{key:"department",label:"Department"},{key:"status",label:"Status"}],j=["name","email","role","department","status"],se={title:"Core/TableColumnSettings",tags:["autodocs"]},K={render:()=>{const[o,u]=a.useState(j),l=k({columns:y,activeColumnKeys:o,onChangeActiveColumnKeys:s=>u([...s])}),n=X(l.columnSettingsConfig),c=y.map(s=>({value:s.key,label:s.label,disabled:s.isAlwaysVisible===!0}));return e.jsxs("div",{style:{maxWidth:700},children:[e.jsx(D,{label:"Table actions",startContent:e.jsx(b,{type:"label",children:"Users"}),endContent:e.jsx(x,{label:"Columns",isLabelHidden:!0,options:c,value:[...l.activeColumnKeys],onChange:l.setActiveColumnKeys})}),e.jsx(T,{data:S,columns:U,idKey:"id",plugins:{columnSettings:n}})]})}},f={render:()=>{const[o,u]=a.useState(["name","email","role"]),l=k({columns:y,activeColumnKeys:o,onChangeActiveColumnKeys:s=>u([...s])}),n=X(l.columnSettingsConfig),c=y.map(s=>({value:s.key,label:s.label,disabled:s.isAlwaysVisible===!0}));return e.jsxs("div",{style:{maxWidth:700},children:[e.jsx(b,{type:"supporting",children:'"Name" is always visible and cannot be unchecked.'}),e.jsx(D,{label:"Table actions",startContent:e.jsx(b,{type:"label",children:"Users"}),endContent:e.jsx(x,{label:"Columns",isLabelHidden:!0,options:c,value:[...l.activeColumnKeys],onChange:l.setActiveColumnKeys})}),e.jsx(T,{data:S,columns:U,idKey:"id",plugins:{columnSettings:n}})]})}},h={render:()=>{const o=["name","email","role"],[u,l]=a.useState(o),n=k({columns:y,activeColumnKeys:u,onChangeActiveColumnKeys:i=>l([...i]),defaultColumnKeys:o}),c=X(n.columnSettingsConfig),s=y.map(i=>({value:i.key,label:i.label,disabled:i.isAlwaysVisible===!0}));return e.jsxs("div",{style:{maxWidth:700},children:[e.jsx(b,{type:"supporting",children:"Toggle columns, then reset to restore the default set (Name, Email, Role)."}),e.jsx(D,{label:"Table actions",startContent:e.jsx(b,{type:"label",children:"Users"}),endContent:e.jsxs(e.Fragment,{children:[e.jsx(V,{label:"Reset to default",variant:"secondary",onClick:n.resetToDefault}),e.jsx(x,{label:"Columns",isLabelHidden:!0,options:s,value:[...n.activeColumnKeys],onChange:n.setActiveColumnKeys})]})}),e.jsx(T,{data:S,columns:U,idKey:"id",plugins:{columnSettings:c}})]})}},A={render:()=>{const[o,u]=a.useState(j),[l,n]=a.useState(new Set),c=k({columns:y,activeColumnKeys:o,onChangeActiveColumnKeys:m=>u([...m])}),s=X(c.columnSettingsConfig),i=y.map(m=>({value:m.key,label:m.label,disabled:m.isAlwaysVisible===!0})),{selectionConfig:d}=M({data:S,idKey:"id",selectedKeys:l,setSelectedKeys:n}),g=E(d);return e.jsxs("div",{style:{maxWidth:700},children:[e.jsx(D,{label:"Table actions",startContent:e.jsxs(b,{type:"supporting",children:[l.size," of ",S.length," selected"]}),endContent:e.jsx(x,{label:"Columns",isLabelHidden:!0,options:i,value:[...c.activeColumnKeys],onChange:c.setActiveColumnKeys})}),e.jsx(T,{data:S,columns:U,idKey:"id",plugins:{columnSettings:s,selection:g}})]})}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [activeKeys, setActiveKeys] = useState<UserColumnKey[]>(defaultActiveKeys);
    const state = useXDSTableColumnSettingsState<UserColumnKey>({
      columns: columnOptions,
      activeColumnKeys: activeKeys,
      onChangeActiveColumnKeys: (keys: ReadonlyArray<UserColumnKey>) => setActiveKeys([...keys])
    });
    const plugin = useXDSTableColumnSettings<User, UserColumnKey>(state.columnSettingsConfig);
    const selectorOptions = columnOptions.map(c => ({
      value: c.key,
      label: c.label,
      disabled: c.isAlwaysVisible === true
    }));
    return <div style={{
      maxWidth: 700
    }}>
        <XDSToolbar label="Table actions" startContent={<XDSText type="label">Users</XDSText>} endContent={<XDSMultiSelector label="Columns" isLabelHidden options={selectorOptions} value={[...state.activeColumnKeys]} onChange={state.setActiveColumnKeys} />} />
        <XDSTable data={users} columns={allColumns} idKey="id" plugins={{
        columnSettings: plugin
      }} />
      </div>;
  }
}`,...K.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [activeKeys, setActiveKeys] = useState<UserColumnKey[]>(['name', 'email', 'role']);
    const state = useXDSTableColumnSettingsState<UserColumnKey>({
      columns: columnOptions,
      activeColumnKeys: activeKeys,
      onChangeActiveColumnKeys: (keys: ReadonlyArray<UserColumnKey>) => setActiveKeys([...keys])
    });
    const plugin = useXDSTableColumnSettings<User, UserColumnKey>(state.columnSettingsConfig);
    const selectorOptions = columnOptions.map(c => ({
      value: c.key,
      label: c.label,
      disabled: c.isAlwaysVisible === true
    }));
    return <div style={{
      maxWidth: 700
    }}>
        <XDSText type="supporting">
          &quot;Name&quot; is always visible and cannot be unchecked.
        </XDSText>
        <XDSToolbar label="Table actions" startContent={<XDSText type="label">Users</XDSText>} endContent={<XDSMultiSelector label="Columns" isLabelHidden options={selectorOptions} value={[...state.activeColumnKeys]} onChange={state.setActiveColumnKeys} />} />
        <XDSTable data={users} columns={allColumns} idKey="id" plugins={{
        columnSettings: plugin
      }} />
      </div>;
  }
}`,...f.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const defaultKeys: UserColumnKey[] = ['name', 'email', 'role'];
    const [activeKeys, setActiveKeys] = useState<UserColumnKey[]>(defaultKeys);
    const state = useXDSTableColumnSettingsState<UserColumnKey>({
      columns: columnOptions,
      activeColumnKeys: activeKeys,
      onChangeActiveColumnKeys: (keys: ReadonlyArray<UserColumnKey>) => setActiveKeys([...keys]),
      defaultColumnKeys: defaultKeys
    });
    const plugin = useXDSTableColumnSettings<User, UserColumnKey>(state.columnSettingsConfig);
    const selectorOptions = columnOptions.map(c => ({
      value: c.key,
      label: c.label,
      disabled: c.isAlwaysVisible === true
    }));
    return <div style={{
      maxWidth: 700
    }}>
        <XDSText type="supporting">
          Toggle columns, then reset to restore the default set (Name, Email,
          Role).
        </XDSText>
        <XDSToolbar label="Table actions" startContent={<XDSText type="label">Users</XDSText>} endContent={<>
              <XDSButton label="Reset to default" variant="secondary" onClick={state.resetToDefault} />
              <XDSMultiSelector label="Columns" isLabelHidden options={selectorOptions} value={[...state.activeColumnKeys]} onChange={state.setActiveColumnKeys} />
            </>} />
        <XDSTable data={users} columns={allColumns} idKey="id" plugins={{
        columnSettings: plugin
      }} />
      </div>;
  }
}`,...h.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [activeKeys, setActiveKeys] = useState<UserColumnKey[]>(defaultActiveKeys);
    const [selectedKeys, setSelectedKeys] = useState<Set<string>>(new Set());
    const state = useXDSTableColumnSettingsState<UserColumnKey>({
      columns: columnOptions,
      activeColumnKeys: activeKeys,
      onChangeActiveColumnKeys: (keys: ReadonlyArray<UserColumnKey>) => setActiveKeys([...keys])
    });
    const columnPlugin = useXDSTableColumnSettings<User, UserColumnKey>(state.columnSettingsConfig);
    const selectorOptions = columnOptions.map(c => ({
      value: c.key,
      label: c.label,
      disabled: c.isAlwaysVisible === true
    }));
    const {
      selectionConfig
    } = useXDSTableSelectionState<User>({
      data: users,
      idKey: 'id',
      selectedKeys,
      setSelectedKeys
    });
    const selectionPlugin = useXDSTableSelection<User>(selectionConfig);
    return <div style={{
      maxWidth: 700
    }}>
        <XDSToolbar label="Table actions" startContent={<XDSText type="supporting">
              {selectedKeys.size} of {users.length} selected
            </XDSText>} endContent={<XDSMultiSelector label="Columns" isLabelHidden options={selectorOptions} value={[...state.activeColumnKeys]} onChange={state.setActiveColumnKeys} />} />
        <XDSTable data={users} columns={allColumns} idKey="id" plugins={{
        columnSettings: columnPlugin,
        selection: selectionPlugin
      }} />
      </div>;
  }
}`,...A.parameters?.docs?.source}}};const ne=["BasicColumnToggle","DisabledColumns","ResetToDefault","WithSelection"];export{K as BasicColumnToggle,f as DisabledColumns,h as ResetToDefault,A as WithSelection,ne as __namedExportsOrder,se as default};
