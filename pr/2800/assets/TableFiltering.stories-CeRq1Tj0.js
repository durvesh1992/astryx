import{at as u,ad as l,ar as ee,m as te,X as _}from"./iframe-yRFQ_7VC.js";import{f as re,X as p}from"./XDSTable-tIgxviJL.js";import{u as h}from"./usePowerSearchConfig-DHj68cqL.js";import{X as le}from"./XDSEmptyState-CWiMy9oI.js";import{X as ne}from"./XDSPopover-CB4jHxPk.js";import{X as oe}from"./XDSTextInput-C1ju8zVt.js";import{X as I}from"./XDSNumberInput-BmZY7aVn.js";import{X as se}from"./XDSDateInput-Xu2D3XhU.js";import{X as ie}from"./XDSTimeInput-RNjul_i8.js";import{X as $}from"./XDSSelector-KHbCdKmR.js";import{X as ae}from"./XDSMultiSelector-DdkKskzX.js";import{X as ce}from"./XDSTokenizer-4Maz21Bq.js";import{a as M,u as O}from"./useXDSTableSortableState-BepmNsp7.js";import{u as V}from"./useXDSTableColumnResize-DIGaOOLz.js";import{a as q,u as Z}from"./useXDSTableSelectionState-CU3jUBFV.js";import"./preload-helper-Ct5FWWRu.js";import"./useXDSPopover-ChRJmaAz.js";import"./useXDSInteractiveRole-C4QNKBOy.js";import"./XDSField-COi97ivg.js";import"./XDSFieldStatus-BgnciRVy.js";import"./inputStyles.stylex-BIqXE6lP.js";import"./groupStyles-BZhxclV-.js";import"./useInputContainer-DjJ5nP5w.js";import"./useClickableContainer-B3IEmxS8.js";import"./XDSCalendar-DnQEEy7F.js";import"./plainDate-C-ANv9VG.js";import"./dateParser-CpYVMWHj.js";import"./timeParser-CAi7zy_b.js";import"./XDSDivider-CD2fc5JP.js";import"./utils-_uNaBhDK.js";import"./hooks-CNj4otaP.js";import"./XDSItem-CTSSy95c.js";import"./computeTargetAndRel-BlG0ENK0.js";import"./XDSCheckboxInput-C50y4c1Q.js";import"./XDSBadge-COTe2g1g.js";import"./XDSBaseTypeahead-6XxrNE5q.js";import"./XDSTypeaheadItem-B2UuIBFd.js";import"./getKey-DyRdrWhf.js";import"./XDSInputClearButton-5cesfNLN.js";import"./XDSToken-DnzEkZ3B.js";import"./XDSOverflowList-BEwGV0C7.js";function G(e,n){return n?e.operators.find(t=>t.key===n):e.defaultOperator?e.operators.find(t=>t.key===e.defaultOperator):e.operators[0]}function me(e,n){const t=typeof e=="string"?e:e.field,o=typeof e=="string"?void 0:e.operator,r=n.fields.find(i=>i.key===t);if(!r)return;const s=G(r,o);if(s)return s.value}function y(e,n,t){const o=[];for(const r of n){if(!r.filter)continue;const s=e[r.key];if(s==null)continue;const i=typeof r.filter=="string"?r.filter:r.filter.field,d=typeof r.filter=="string"?void 0:r.filter.operator,c=t.fields.find(g=>g.key===i);if(!c)continue;const a=G(c,d);if(!a)continue;const m=de(s,a.value);m&&o.push({field:i,operator:a.key,value:m})}return o}function de(e,n){switch(n.type){case"string":return typeof e=="string"?{type:"string",value:e}:void 0;case"integer":return typeof e=="number"?{type:"integer",value:e}:void 0;case"float":return typeof e=="number"?{type:"float",value:e}:void 0;case"enum":return typeof e=="string"?{type:"enum",value:e}:void 0;case"enum_list":return Array.isArray(e)?{type:"enum_list",value:e}:void 0;case"date_absolute":return typeof e=="string"?{type:"date_absolute",unixSeconds:Math.floor(new Date(e).getTime()/1e3)}:void 0;case"time":return typeof e=="string"?{type:"time",value:e}:void 0;case"string_list":return Array.isArray(e)?{type:"string_list",value:e}:void 0;case"entity_list":return Array.isArray(e)?{type:"entity_list",value:e.map(t=>({id:t,label:t}))}:void 0;case"nested":case"empty":case"date_relative":case"date_range":case"custom":return}}const W=u.createContext(null);W.displayName="FilterStoreContext";function F(){const e=u.use(W);if(!e)throw new Error("useFilterStore must be used within a Table with filtering");return e}const A=u.createContext("popover");A.displayName="FilterVariantContext";const H={placeholder:{kZKoxP:"xds10w6t97",$$css:!0},placeholderCompact:{kZKoxP:"xds1fgtraw",$$css:!0}};function ue({columnKey:e,header:n,size:t,hasClear:o}){const r=F(),i=r.getConfig().filters[e],d=typeof i=="string"?i:"";return l.jsx(oe,{label:`Filter ${n}`,isLabelHidden:!0,value:d,onChange:c=>{r.getConfig().onFilterChange(e,c===""?null:c)},placeholder:`Filter ${n}`,size:t,hasClear:o})}function fe({columnKey:e,header:n,operatorValue:t,size:o,hasClear:r}){const s=F(),d=s.getConfig().filters[e],c=typeof d=="number"?d:null,a=t.type==="integer"?1:null,m=u.useCallback(g=>{s.getConfig().onFilterChange(e,g)},[s,e]);return r?l.jsx(I,{label:`Filter ${n}`,isLabelHidden:!0,value:c,onChange:m,placeholder:`Filter ${n}`,min:t.minValue??null,max:t.maxValue??null,step:a,size:o,hasClear:!0}):l.jsx(I,{label:`Filter ${n}`,isLabelHidden:!0,value:c,onChange:m,placeholder:`Filter ${n}`,min:t.minValue??null,max:t.maxValue??null,step:a,size:o})}function ge({columnKey:e,header:n,operatorValue:t,size:o,hasClear:r}){const s=F(),d=s.getConfig().filters[e],c=typeof d=="string"?d:"",a=t.values.map(g=>({value:g.value,label:g.label})),m=u.useCallback(g=>{s.getConfig().onFilterChange(e,g===""||g==null?null:g)},[s,e]);return r?l.jsx($,{label:`Filter ${n}`,isLabelHidden:!0,options:a,value:c||null,onChange:m,placeholder:"All",size:o,hasClear:!0}):l.jsx($,{label:`Filter ${n}`,isLabelHidden:!0,options:a,value:c,onChange:m,placeholder:"All",size:o})}function pe({columnKey:e,header:n,operatorValue:t,size:o,hasClear:r}){const s=F(),d=s.getConfig().filters[e],c=Array.isArray(d)?d:[],a=t.values.map(m=>({value:m.value,label:m.label}));return l.jsx(ae,{label:`Filter ${n}`,isLabelHidden:!0,options:a,value:c,onChange:m=>{s.getConfig().onFilterChange(e,m.length===0?null:m)},placeholder:"All",size:o,hasSelectAll:!0,hasSearch:!1,hasClear:r})}function he({columnKey:e,header:n,size:t,hasClear:o}){const r=F(),s=r.getConfig().filters[e];return l.jsx(se,{label:`Filter ${n}`,isLabelHidden:!0,value:s??void 0,onChange:i=>{r.getConfig().onFilterChange(e,i??null)},size:t,hasClear:o})}function ye({columnKey:e,header:n,size:t,hasClear:o}){const r=F(),s=r.getConfig().filters[e];return l.jsx(ie,{label:`Filter ${n}`,isLabelHidden:!0,value:s??void 0,onChange:i=>{r.getConfig().onFilterChange(e,i??null)},size:t,hasClear:o})}function Se({columnKey:e,header:n,operatorValue:t,size:o,hasClear:r}){const s=F(),i=s.getConfig().filters[e]??[],d=u.useMemo(()=>({search:async a=>a.trim()?[{id:a.trim(),label:a.trim()}]:[],bootstrap:()=>[]}),[]),c=t.searchSource??d;return l.jsx(ce,{label:`Filter ${n}`,isLabelHidden:!0,searchSource:c,value:i.map(a=>({id:a,label:a})),onChange:a=>{const m=a.map(g=>g.id);s.getConfig().onFilterChange(e,m.length>0?m:null)},size:o,hasClear:r})}function J({columnKey:e,header:n,operatorValue:t,size:o,hasClear:r}){switch(t.type){case"string":return l.jsx(ue,{columnKey:e,header:n,size:o,hasClear:r});case"integer":case"float":return l.jsx(fe,{columnKey:e,header:n,operatorValue:t,size:o,hasClear:r});case"enum":return l.jsx(ge,{columnKey:e,header:n,operatorValue:t,size:o,hasClear:r});case"enum_list":return l.jsx(pe,{columnKey:e,header:n,operatorValue:t,size:o,hasClear:r});case"date_absolute":return l.jsx(he,{columnKey:e,header:n,size:o,hasClear:r});case"time":return l.jsx(ye,{columnKey:e,header:n,size:o,hasClear:r});case"string_list":case"entity_list":return l.jsx(Se,{columnKey:e,header:n,operatorValue:t,size:o,hasClear:r});case"nested":case"empty":case"date_relative":case"date_range":case"custom":return null}}function Ce({columnKey:e,header:n,operatorValue:t}){const o=F(),s=o.getConfig().filters[e],i=s!=null,[d,c]=u.useState(!1),[a,m]=u.useState(null),g=u.useCallback(b=>{b&&m(s??null),c(b)},[s]),N=u.useCallback(()=>{o.getConfig().onFilterChange(e,a),c(!1)},[o,e,a]),L=u.useCallback(()=>{o.getConfig().onFilterChange(e,null),c(!1)},[o,e]),K=u.useMemo(()=>({getConfig(){return{...o.getConfig(),filters:{...o.getConfig().filters,[e]:a??void 0},onFilterChange:(b,B)=>{m(B)}}}}),[o,e,a,m]);return l.jsx(ne,{isOpen:d,onOpenChange:g,label:`Filter ${n}`,placement:"below",alignment:"start",content:l.jsx(W,{value:K,children:l.jsxs("div",{className:"xdsafpxmx",children:[l.jsx(J,{columnKey:e,header:n,operatorValue:t,size:"md"}),l.jsxs("div",{className:"xds78zum5 xds1txdalj xdstbrsbv",children:[l.jsx(_,{label:"Reset",variant:"ghost",size:"sm",onClick:L}),l.jsx("div",{className:"xds98rzlu"}),l.jsx(_,{label:"Apply",variant:"primary",size:"sm",onClick:N})]})]})}),children:l.jsx("button",{type:"button","aria-label":`Filter ${n}`,"aria-haspopup":"dialog",...{0:{className:"xds11g6tue xds1gs6z28 xds1ypdohk xds3nfvp2 xds6s0dn4 xdsl56j7k xds1717udv xdsh6dtrn xds2lah0s xds1xrq5m xds17aqpur xds3onkmb xdsof6bs xds25t5g8"},1:{className:"xds11g6tue xds1gs6z28 xds1ypdohk xds3nfvp2 xds6s0dn4 xdsl56j7k xds1717udv xdsh6dtrn xds2lah0s xds1xrq5m xds17aqpur xds1hc1fzr"}}[!!i<<0],children:l.jsx(te,{icon:"funnel",size:"xsm",color:i?"accent":"secondary"})})})}function ve(e){return typeof e.header=="string"?e.header:e.key}function Fe({columnKey:e,header:n,operatorValue:t}){return l.jsx("div",{className:"xds78zum5 xds6s0dn4 xds2lah0s",children:l.jsx(Ce,{columnKey:e,header:n,operatorValue:t})})}function be({columnKey:e,header:n,operatorValue:t}){const o=u.use(A),r="sm",s=o==="inline-compact"?H.placeholderCompact:H.placeholder;return l.jsx("div",{className:"xds78zum5 xdsdt5ytf xdszye2dw xdscsaf9d xdseuugli",children:t!=null?l.jsx(J,{columnKey:e,header:n,operatorValue:t,size:r,hasClear:!0}):l.jsx("div",{"aria-hidden":"true",...ee(s)})})}function S(e){const n=u.useRef(e);n.current=e;const t=u.useRef(null);t.current==null&&(t.current={getConfig(){return n.current}});const o=t.current,r=e.variant??"popover";return u.useMemo(()=>({transformColumns:r==="inline"||r==="inline-compact"?s=>s.map(i=>i.filter!=null&&i.width==null?{...i,width:re(1)}:i):void 0,transformTableContext(s){return l.jsx(W,{value:o,children:l.jsx(A,{value:r,children:s})})},transformHeaderCell(s,i){const d=i.filter,c=ve(i),a=d?me(d,o.getConfig().searchConfig):void 0;return r==="popover"?a?{...s,after:l.jsxs(l.Fragment,{children:[s.after,l.jsx(Fe,{columnKey:i.key,header:c,operatorValue:a})]})}:s:{...s,below:l.jsxs(l.Fragment,{children:[s.below,l.jsx(be,{columnKey:i.key,header:c,operatorValue:a})]})}}}),[o,r])}function C(e){const[n,t]=u.useState({}),o=u.useCallback((s,i)=>{t(d=>{if(i==null){const{[s]:c,...a}=d;return a}return{...d,[s]:i}})},[]),r=u.useCallback(()=>{t({})},[]);return{filters:n,onFilterChange:o,clearAll:r}}const f=[{name:"Alice",email:"alice@example.com",role:"Engineer",department:["Platform"],level:5},{name:"Bob",email:"bob@example.com",role:"Designer",department:["Product"],level:4},{name:"Charlie",email:"charlie@example.com",role:"Manager",department:["Platform"],level:6},{name:"Diana",email:"diana@example.com",role:"Engineer",department:["Infrastructure"],level:5},{name:"Eve",email:"eve@example.com",role:"Admin",department:["Operations"],level:3}],v=[{key:"name",type:"string",label:"Name"},{key:"email",type:"string",label:"Email"},{key:"role",type:"enum",label:"Role",enumValues:[{value:"Engineer",label:"Engineer"},{value:"Designer",label:"Designer"},{value:"Manager",label:"Manager"},{value:"Admin",label:"Admin"}]},{key:"department",type:"enum_list",label:"Department",enumValues:[{value:"Platform",label:"Platform"},{value:"Product",label:"Product"},{value:"Infrastructure",label:"Infrastructure"},{value:"Operations",label:"Operations"}]},{key:"level",type:"number",label:"Level"}],mt={title:"Core/TableFiltering",tags:["autodocs"]},x={render:()=>{const{config:e,applyFilters:n}=h(v),{filters:t,onFilterChange:o}=C(),r=[{key:"name",header:"Name",filter:"name"},{key:"email",header:"Email",filter:"email"},{key:"role",header:"Role"},{key:"department",header:"Department"}],s=S({filters:t,onFilterChange:o,searchConfig:e}),i=n(y(t,r,e),f);return l.jsxs("div",{style:{maxWidth:800},children:[l.jsxs("p",{style:{marginBottom:8,fontSize:14,color:"#666"},children:["Showing ",i.length,"/",f.length," rows."]}),l.jsx(p,{data:i,columns:r,idKey:"name",plugins:{filter:s}})]})}},k={render:()=>{const{config:e,applyFilters:n}=h(v),{filters:t,onFilterChange:o}=C(),r=[{key:"name",header:"Name"},{key:"role",header:"Role",filter:"role"},{key:"department",header:"Department"},{key:"level",header:"Level"}],s=S({filters:t,onFilterChange:o,searchConfig:e}),i=n(y(t,r,e),f);return l.jsxs("div",{style:{maxWidth:800},children:[l.jsxs("p",{style:{marginBottom:8,fontSize:14,color:"#666"},children:["Enum → selector. Showing ",i.length,"/",f.length," rows."]}),l.jsx(p,{data:i,columns:r,idKey:"name",plugins:{filter:s}})]})}},D={render:()=>{const{config:e,applyFilters:n}=h(v),{filters:t,onFilterChange:o}=C(),r=[{key:"name",header:"Name"},{key:"role",header:"Role"},{key:"department",header:"Department",filter:"department"},{key:"level",header:"Level"}],s=S({filters:t,onFilterChange:o,searchConfig:e}),i=n(y(t,r,e),f);return l.jsxs("div",{style:{maxWidth:800},children:[l.jsxs("p",{style:{marginBottom:8,fontSize:14,color:"#666"},children:["Enum list → multi-selector. Showing ",i.length,"/",f.length," ","rows."]}),l.jsx(p,{data:i,columns:r,idKey:"name",plugins:{filter:s}})]})}},P={render:()=>{const{config:e,applyFilters:n}=h(v),{filters:t,onFilterChange:o}=C(),r=[{key:"name",header:"Name"},{key:"role",header:"Role"},{key:"level",header:"Level",filter:"level"},{key:"department",header:"Department"}],s=S({filters:t,onFilterChange:o,searchConfig:e}),i=n(y(t,r,e),f);return l.jsxs("div",{style:{maxWidth:800},children:[l.jsxs("p",{style:{marginBottom:8,fontSize:14,color:"#666"},children:["Number field → numeric input. Showing ",i.length,"/",f.length," ","rows."]}),l.jsx(p,{data:i,columns:r,idKey:"name",plugins:{filter:s}})]})}},X={render:()=>{const{config:e,applyFilters:n}=h(v),{filters:t,onFilterChange:o}=C(),r=[{key:"name",header:"Name",filter:"name"},{key:"role",header:"Role",filter:"role"},{key:"level",header:"Level",filter:"level"},{key:"department",header:"Department"}],s=S({filters:t,onFilterChange:o,variant:"inline",searchConfig:e}),i=n(y(t,r,e),f);return l.jsxs("div",{style:{maxWidth:800},children:[l.jsxs("p",{style:{marginBottom:8,fontSize:14,color:"#666"},children:["Inline variant. Showing ",i.length,"/",f.length," rows."]}),l.jsx(p,{data:i,columns:r,idKey:"name",plugins:{filter:s}})]})}},w={render:()=>{const{config:e,applyFilters:n}=h(v),{filters:t,onFilterChange:o}=C(),[r,s]=u.useState(new Set),i=[{key:"name",header:"Name",filter:"name"},{key:"role",header:"Role",filter:"role"},{key:"department",header:"Department",filter:"department"},{key:"level",header:"Level"}],d=S({filters:t,onFilterChange:o,searchConfig:e}),c=n(y(t,i,e),f),{selectionConfig:a}=q({data:c,idKey:"name",selectedKeys:r,setSelectedKeys:s}),m=Z(a);return l.jsxs("div",{style:{maxWidth:800},children:[l.jsxs("p",{style:{marginBottom:8,fontSize:14,color:"#666"},children:["Filtering + Selection. Selected: ",r.size," | Showing"," ",c.length,"/",f.length," rows."]}),l.jsx(p,{data:c,columns:i,idKey:"name",plugins:{selection:m,filter:d}})]})}},T={render:()=>{const{config:e,applyFilters:n}=h(v),{filters:t,onFilterChange:o}=C(),{sortConfig:r,applySort:s}=M({data:f}),i=[{key:"name",header:"Name",sortable:!0,filter:"name"},{key:"role",header:"Role",sortable:!0,filter:"role"},{key:"level",header:"Level",sortable:!0,filter:"level"},{key:"department",header:"Department"}],d=S({filters:t,onFilterChange:o,searchConfig:e}),c=O(r),a=n(y(t,i,e),f),m=s(a);return l.jsxs("div",{style:{maxWidth:800},children:[l.jsxs("p",{style:{marginBottom:8,fontSize:14,color:"#666"},children:["Filtering + Sorting. Showing ",m.length,"/",f.length," rows."]}),l.jsx(p,{data:m,columns:i,idKey:"name",plugins:{sort:c,filter:d}})]})}},j={render:()=>{const{config:e,applyFilters:n}=h(v),{filters:t,onFilterChange:o}=C(),[r,s]=u.useState({}),i=[{key:"name",header:"Name",filter:"name"},{key:"role",header:"Role",filter:"role"},{key:"level",header:"Level",filter:"level"},{key:"department",header:"Department"}],d=S({filters:t,onFilterChange:o,variant:"inline",searchConfig:e}),c=V({columnWidths:r,onColumnResizeEnd:m=>s(g=>({...g,...m})),columns:i}),a=n(y(t,i,e),f);return l.jsxs("div",{style:{maxWidth:800},children:[l.jsxs("p",{style:{marginBottom:8,fontSize:14,color:"#666"},children:["Inline filtering + Resize. Showing ",a.length,"/",f.length," ","rows."]}),l.jsx(p,{data:a,columns:i,idKey:"name",plugins:{filter:d,resize:c}})]})}},z={render:()=>{const{config:e,applyFilters:n}=h(v),{filters:t,onFilterChange:o}=C(),{sortConfig:r,applySort:s}=M({data:f}),[i,d]=u.useState({}),[c,a]=u.useState(new Set),m=[{key:"name",header:"Name",sortable:!0,filter:"name"},{key:"role",header:"Role",sortable:!0,filter:"role"},{key:"level",header:"Level",sortable:!0,filter:"level"},{key:"department",header:"Department",sortable:!0}],g=S({filters:t,onFilterChange:o,searchConfig:e}),N=O(r),L=V({columnWidths:i,onColumnResizeEnd:U=>d(Y=>({...Y,...U})),columns:m}),K=n(y(t,m,e),f),b=s(K),{selectionConfig:B}=q({data:b,idKey:"name",selectedKeys:c,setSelectedKeys:a}),Q=Z(B);return l.jsxs("div",{style:{maxWidth:900},children:[l.jsxs("p",{style:{marginBottom:8,fontSize:14,color:"#666"},children:["All plugins. Selected: ",c.size," | Showing ",b.length,"/",f.length," rows."]}),l.jsx(p,{data:b,columns:m,idKey:"name",plugins:{selection:Q,sort:N,filter:g,resize:L}})]})}},E={render:()=>{const{config:e,applyFilters:n}=h(v),{filters:t,onFilterChange:o}=C(),r=[{key:"name",header:"Name",filter:"name"},{key:"role",header:"Role",filter:"role"},{key:"level",header:"Level",filter:"level"},{key:"department",header:"Department"}],s=S({filters:t,onFilterChange:o,variant:"inline",searchConfig:e}),i=n(y(t,r,e),f);return l.jsxs("div",{style:{maxWidth:800},children:[l.jsxs("p",{style:{marginBottom:8,fontSize:14,color:"#666"},children:["Inline variant with clear buttons. Type to filter, then click ✕ to clear. Showing ",i.length,"/",f.length," rows."]}),l.jsx(p,{data:i,columns:r,idKey:"name",plugins:{filter:s}})]})}},R={render:()=>{const{config:e,applyFilters:n}=h(v),{filters:t,onFilterChange:o}=C(),r=[{key:"name",header:"Name",filter:"name"},{key:"role",header:"Role",filter:"role"},{key:"level",header:"Level",filter:"level"},{key:"department",header:"Department"}],s=S({filters:t,onFilterChange:o,variant:"inline",searchConfig:e}),i=n(y(t,r,e),f);return l.jsxs("div",{style:{maxWidth:800},children:[l.jsx("p",{style:{marginBottom:8,fontSize:14,color:"#666"},children:"Try filtering to get zero results; empty state appears."}),l.jsx(p,{data:i,columns:r,idKey:"name",plugins:{filter:s},emptyState:l.jsx(le,{title:"No results",description:"Try adjusting your filters to find what you're looking for.",isCompact:!0})})]})}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      config,
      applyFilters
    } = usePowerSearchConfig(fieldDefs);
    const {
      filters,
      onFilterChange
    } = useXDSTableFilterState();
    const columns: XDSTableColumn<Employee>[] = [{
      key: 'name',
      header: 'Name',
      filter: 'name'
    }, {
      key: 'email',
      header: 'Email',
      filter: 'email'
    }, {
      key: 'role',
      header: 'Role'
    }, {
      key: 'department',
      header: 'Department'
    }];
    const filterPlugin = useXDSTableFiltering<Employee>({
      filters,
      onFilterChange,
      searchConfig: config
    });
    const data = applyFilters(toSearchFilters(filters, columns, config) as PowerSearchFilter[], employees);
    return <div style={{
      maxWidth: 800
    }}>
        <p style={{
        marginBottom: 8,
        fontSize: 14,
        color: '#666'
      }}>
          Showing {data.length}/{employees.length} rows.
        </p>
        <XDSTable data={data} columns={columns} idKey="name" plugins={{
        filter: filterPlugin
      }} />
      </div>;
  }
}`,...x.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      config,
      applyFilters
    } = usePowerSearchConfig(fieldDefs);
    const {
      filters,
      onFilterChange
    } = useXDSTableFilterState();
    const columns: XDSTableColumn<Employee>[] = [{
      key: 'name',
      header: 'Name'
    }, {
      key: 'role',
      header: 'Role',
      filter: 'role'
    }, {
      key: 'department',
      header: 'Department'
    }, {
      key: 'level',
      header: 'Level'
    }];
    const filterPlugin = useXDSTableFiltering<Employee>({
      filters,
      onFilterChange,
      searchConfig: config
    });
    const data = applyFilters(toSearchFilters(filters, columns, config) as PowerSearchFilter[], employees);
    return <div style={{
      maxWidth: 800
    }}>
        <p style={{
        marginBottom: 8,
        fontSize: 14,
        color: '#666'
      }}>
          Enum → selector. Showing {data.length}/{employees.length} rows.
        </p>
        <XDSTable data={data} columns={columns} idKey="name" plugins={{
        filter: filterPlugin
      }} />
      </div>;
  }
}`,...k.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      config,
      applyFilters
    } = usePowerSearchConfig(fieldDefs);
    const {
      filters,
      onFilterChange
    } = useXDSTableFilterState();
    const columns: XDSTableColumn<Employee>[] = [{
      key: 'name',
      header: 'Name'
    }, {
      key: 'role',
      header: 'Role'
    }, {
      key: 'department',
      header: 'Department',
      filter: 'department'
    }, {
      key: 'level',
      header: 'Level'
    }];
    const filterPlugin = useXDSTableFiltering<Employee>({
      filters,
      onFilterChange,
      searchConfig: config
    });
    const data = applyFilters(toSearchFilters(filters, columns, config) as PowerSearchFilter[], employees);
    return <div style={{
      maxWidth: 800
    }}>
        <p style={{
        marginBottom: 8,
        fontSize: 14,
        color: '#666'
      }}>
          Enum list → multi-selector. Showing {data.length}/{employees.length}{' '}
          rows.
        </p>
        <XDSTable data={data} columns={columns} idKey="name" plugins={{
        filter: filterPlugin
      }} />
      </div>;
  }
}`,...D.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      config,
      applyFilters
    } = usePowerSearchConfig(fieldDefs);
    const {
      filters,
      onFilterChange
    } = useXDSTableFilterState();
    const columns: XDSTableColumn<Employee>[] = [{
      key: 'name',
      header: 'Name'
    }, {
      key: 'role',
      header: 'Role'
    }, {
      key: 'level',
      header: 'Level',
      filter: 'level'
    }, {
      key: 'department',
      header: 'Department'
    }];
    const filterPlugin = useXDSTableFiltering<Employee>({
      filters,
      onFilterChange,
      searchConfig: config
    });
    const data = applyFilters(toSearchFilters(filters, columns, config) as PowerSearchFilter[], employees);
    return <div style={{
      maxWidth: 800
    }}>
        <p style={{
        marginBottom: 8,
        fontSize: 14,
        color: '#666'
      }}>
          Number field → numeric input. Showing {data.length}/{employees.length}{' '}
          rows.
        </p>
        <XDSTable data={data} columns={columns} idKey="name" plugins={{
        filter: filterPlugin
      }} />
      </div>;
  }
}`,...P.parameters?.docs?.source}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      config,
      applyFilters
    } = usePowerSearchConfig(fieldDefs);
    const {
      filters,
      onFilterChange
    } = useXDSTableFilterState();
    const columns: XDSTableColumn<Employee>[] = [{
      key: 'name',
      header: 'Name',
      filter: 'name'
    }, {
      key: 'role',
      header: 'Role',
      filter: 'role'
    }, {
      key: 'level',
      header: 'Level',
      filter: 'level'
    }, {
      key: 'department',
      header: 'Department'
    }];
    const filterPlugin = useXDSTableFiltering<Employee>({
      filters,
      onFilterChange,
      variant: 'inline',
      searchConfig: config
    });
    const data = applyFilters(toSearchFilters(filters, columns, config) as PowerSearchFilter[], employees);
    return <div style={{
      maxWidth: 800
    }}>
        <p style={{
        marginBottom: 8,
        fontSize: 14,
        color: '#666'
      }}>
          Inline variant. Showing {data.length}/{employees.length} rows.
        </p>
        <XDSTable data={data} columns={columns} idKey="name" plugins={{
        filter: filterPlugin
      }} />
      </div>;
  }
}`,...X.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      config,
      applyFilters
    } = usePowerSearchConfig(fieldDefs);
    const {
      filters,
      onFilterChange
    } = useXDSTableFilterState();
    const [selectedKeys, setSelectedKeys] = useState(new Set<string>());
    const columns: XDSTableColumn<Employee>[] = [{
      key: 'name',
      header: 'Name',
      filter: 'name'
    }, {
      key: 'role',
      header: 'Role',
      filter: 'role'
    }, {
      key: 'department',
      header: 'Department',
      filter: 'department'
    }, {
      key: 'level',
      header: 'Level'
    }];
    const filterPlugin = useXDSTableFiltering<Employee>({
      filters,
      onFilterChange,
      searchConfig: config
    });
    const data = applyFilters(toSearchFilters(filters, columns, config) as PowerSearchFilter[], employees);
    const {
      selectionConfig
    } = useXDSTableSelectionState({
      data,
      idKey: 'name',
      selectedKeys,
      setSelectedKeys
    });
    const selectionPlugin = useXDSTableSelection<Employee>(selectionConfig);
    return <div style={{
      maxWidth: 800
    }}>
        <p style={{
        marginBottom: 8,
        fontSize: 14,
        color: '#666'
      }}>
          Filtering + Selection. Selected: {selectedKeys.size} | Showing{' '}
          {data.length}/{employees.length} rows.
        </p>
        <XDSTable data={data} columns={columns} idKey="name" plugins={{
        selection: selectionPlugin,
        filter: filterPlugin
      }} />
      </div>;
  }
}`,...w.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      config,
      applyFilters
    } = usePowerSearchConfig(fieldDefs);
    const {
      filters,
      onFilterChange
    } = useXDSTableFilterState();
    const {
      sortedData: _unused,
      sort: _sort,
      sortConfig,
      applySort
    } = useXDSTableSortableState<Employee>({
      data: employees
    });
    const columns: XDSTableColumn<Employee>[] = [{
      key: 'name',
      header: 'Name',
      sortable: true,
      filter: 'name'
    }, {
      key: 'role',
      header: 'Role',
      sortable: true,
      filter: 'role'
    }, {
      key: 'level',
      header: 'Level',
      sortable: true,
      filter: 'level'
    }, {
      key: 'department',
      header: 'Department'
    }];
    const filterPlugin = useXDSTableFiltering<Employee>({
      filters,
      onFilterChange,
      searchConfig: config
    });
    const sortPlugin = useXDSTableSortable<Employee>(sortConfig);
    const filtered = applyFilters(toSearchFilters(filters, columns, config) as PowerSearchFilter[], employees);
    const data = applySort(filtered);
    return <div style={{
      maxWidth: 800
    }}>
        <p style={{
        marginBottom: 8,
        fontSize: 14,
        color: '#666'
      }}>
          Filtering + Sorting. Showing {data.length}/{employees.length} rows.
        </p>
        <XDSTable data={data} columns={columns} idKey="name" plugins={{
        sort: sortPlugin,
        filter: filterPlugin
      }} />
      </div>;
  }
}`,...T.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      config,
      applyFilters
    } = usePowerSearchConfig(fieldDefs);
    const {
      filters,
      onFilterChange
    } = useXDSTableFilterState();
    const [columnWidths, setColumnWidths] = useState<Record<string, number>>({});
    const columns: XDSTableColumn<Employee>[] = [{
      key: 'name',
      header: 'Name',
      filter: 'name'
    }, {
      key: 'role',
      header: 'Role',
      filter: 'role'
    }, {
      key: 'level',
      header: 'Level',
      filter: 'level'
    }, {
      key: 'department',
      header: 'Department'
    }];
    const filterPlugin = useXDSTableFiltering<Employee>({
      filters,
      onFilterChange,
      variant: 'inline',
      searchConfig: config
    });
    const resizePlugin = useXDSTableColumnResize<Employee>({
      columnWidths,
      onColumnResizeEnd: updates => setColumnWidths(prev => ({
        ...prev,
        ...updates
      })),
      columns: columns as XDSTableColumn<Record<string, unknown>>[]
    });
    const data = applyFilters(toSearchFilters(filters, columns, config) as PowerSearchFilter[], employees);
    return <div style={{
      maxWidth: 800
    }}>
        <p style={{
        marginBottom: 8,
        fontSize: 14,
        color: '#666'
      }}>
          Inline filtering + Resize. Showing {data.length}/{employees.length}{' '}
          rows.
        </p>
        <XDSTable data={data} columns={columns} idKey="name" plugins={{
        filter: filterPlugin,
        resize: resizePlugin
      }} />
      </div>;
  }
}`,...j.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      config,
      applyFilters
    } = usePowerSearchConfig(fieldDefs);
    const {
      filters,
      onFilterChange
    } = useXDSTableFilterState();
    const {
      sortConfig,
      applySort
    } = useXDSTableSortableState<Employee>({
      data: employees
    });
    const [columnWidths, setColumnWidths] = useState<Record<string, number>>({});
    const [selectedKeys, setSelectedKeys] = useState(new Set<string>());
    const columns: XDSTableColumn<Employee>[] = [{
      key: 'name',
      header: 'Name',
      sortable: true,
      filter: 'name'
    }, {
      key: 'role',
      header: 'Role',
      sortable: true,
      filter: 'role'
    }, {
      key: 'level',
      header: 'Level',
      sortable: true,
      filter: 'level'
    }, {
      key: 'department',
      header: 'Department',
      sortable: true
    }];
    const filterPlugin = useXDSTableFiltering<Employee>({
      filters,
      onFilterChange,
      searchConfig: config
    });
    const sortPlugin = useXDSTableSortable<Employee>(sortConfig);
    const resizePlugin = useXDSTableColumnResize<Employee>({
      columnWidths,
      onColumnResizeEnd: updates => setColumnWidths(prev => ({
        ...prev,
        ...updates
      })),
      columns: columns as XDSTableColumn<Record<string, unknown>>[]
    });
    const filtered = applyFilters(toSearchFilters(filters, columns, config) as PowerSearchFilter[], employees);
    const data = applySort(filtered);
    const {
      selectionConfig
    } = useXDSTableSelectionState({
      data,
      idKey: 'name',
      selectedKeys,
      setSelectedKeys
    });
    const selectionPlugin = useXDSTableSelection<Employee>(selectionConfig);
    return <div style={{
      maxWidth: 900
    }}>
        <p style={{
        marginBottom: 8,
        fontSize: 14,
        color: '#666'
      }}>
          All plugins. Selected: {selectedKeys.size} | Showing {data.length}/
          {employees.length} rows.
        </p>
        <XDSTable data={data} columns={columns} idKey="name" plugins={{
        selection: selectionPlugin,
        sort: sortPlugin,
        filter: filterPlugin,
        resize: resizePlugin
      }} />
      </div>;
  }
}`,...z.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      config,
      applyFilters
    } = usePowerSearchConfig(fieldDefs);
    const {
      filters,
      onFilterChange
    } = useXDSTableFilterState();
    const columns: XDSTableColumn<Employee>[] = [{
      key: 'name',
      header: 'Name',
      filter: 'name'
    }, {
      key: 'role',
      header: 'Role',
      filter: 'role'
    }, {
      key: 'level',
      header: 'Level',
      filter: 'level'
    }, {
      key: 'department',
      header: 'Department'
    }];
    const filterPlugin = useXDSTableFiltering<Employee>({
      filters,
      onFilterChange,
      variant: 'inline',
      searchConfig: config
    });
    const data = applyFilters(toSearchFilters(filters, columns, config) as PowerSearchFilter[], employees);
    return <div style={{
      maxWidth: 800
    }}>
        <p style={{
        marginBottom: 8,
        fontSize: 14,
        color: '#666'
      }}>
          Inline variant with clear buttons. Type to filter, then click ✕ to
          clear. Showing {data.length}/{employees.length} rows.
        </p>
        <XDSTable data={data} columns={columns} idKey="name" plugins={{
        filter: filterPlugin
      }} />
      </div>;
  }
}`,...E.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      config,
      applyFilters
    } = usePowerSearchConfig(fieldDefs);
    const {
      filters,
      onFilterChange
    } = useXDSTableFilterState();
    const columns: XDSTableColumn<Employee>[] = [{
      key: 'name',
      header: 'Name',
      filter: 'name'
    }, {
      key: 'role',
      header: 'Role',
      filter: 'role'
    }, {
      key: 'level',
      header: 'Level',
      filter: 'level'
    }, {
      key: 'department',
      header: 'Department'
    }];
    const filterPlugin = useXDSTableFiltering<Employee>({
      filters,
      onFilterChange,
      variant: 'inline',
      searchConfig: config
    });
    const data = applyFilters(toSearchFilters(filters, columns, config) as PowerSearchFilter[], employees);
    return <div style={{
      maxWidth: 800
    }}>
        <p style={{
        marginBottom: 8,
        fontSize: 14,
        color: '#666'
      }}>
          Try filtering to get zero results; empty state appears.
        </p>
        <XDSTable data={data} columns={columns} idKey="name" plugins={{
        filter: filterPlugin
      }} emptyState={<XDSEmptyState title="No results" description="Try adjusting your filters to find what you're looking for." isCompact />} />
      </div>;
  }
}`,...R.parameters?.docs?.source}}};const dt=["TextFilter","SelectorFilter","MultiSelectorFilter","NumberFilter","InlineVariant","WithSelection","WithSorting","WithResize","WithAllPlugins","InlineWithClear","EmptyState"];export{R as EmptyState,X as InlineVariant,E as InlineWithClear,D as MultiSelectorFilter,P as NumberFilter,k as SelectorFilter,x as TextFilter,z as WithAllPlugins,j as WithResize,w as WithSelection,T as WithSorting,dt as __namedExportsOrder,mt as default};
