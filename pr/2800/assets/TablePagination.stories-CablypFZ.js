import{at as r,ad as t,ar as E}from"./iframe-yRFQ_7VC.js";import{X as l}from"./XDSTable-tIgxviJL.js";import{X as N}from"./XDSPagination-IufuX-zy.js";import{a as F,u as _}from"./useXDSTableSelectionState-CU3jUBFV.js";import"./preload-helper-Ct5FWWRu.js";import"./XDSEmptyState-CWiMy9oI.js";import"./XDSSelector-KHbCdKmR.js";import"./useXDSPopover-ChRJmaAz.js";import"./XDSField-COi97ivg.js";import"./XDSFieldStatus-BgnciRVy.js";import"./inputStyles.stylex-BIqXE6lP.js";import"./XDSDivider-CD2fc5JP.js";import"./utils-_uNaBhDK.js";import"./hooks-CNj4otaP.js";import"./XDSItem-CTSSy95c.js";import"./computeTargetAndRel-BlG0ENK0.js";import"./XDSCheckboxInput-C50y4c1Q.js";const S={wrapper:{k1xSpc:"xds78zum5",$$css:!0},marginTop:{keoZOQ:"xdstbrsbv",$$css:!0},marginBottom:{k1K539:"xds1p37lm5",$$css:!0},alignStart:{kjj79g:"xds1nhvcw1",$$css:!0},alignCenter:{kjj79g:"xdsl56j7k",$$css:!0},alignEnd:{kjj79g:"xds13a6bvl",$$css:!0}};function g(e){const{page:n,onPageChange:a,totalItems:s,totalPages:i,hasMore:m,pageSize:c=10,onPageSizeChange:T,pageSizeOptions:C,variant:A="pages",size:O="md",position:K="below",align:w="center",label:U="Table pagination"}=e,R=i??(s!=null?Math.ceil(s/c):void 0),X={page:n,onChange:a,totalItems:s,totalPages:R,hasMore:m,pageSize:c,onPageSizeChange:T,pageSizeOptions:C,variant:A,size:O,label:U},$=r.useRef({paginationProps:X,position:K,align:w});return $.current={paginationProps:X,position:K,align:w},r.useMemo(()=>({transformTableContext(W){const{position:h,paginationProps:d,align:I}=$.current;if(h==="none"||(d.totalPages??(d.totalItems!=null&&d.pageSize!=null?Math.ceil(d.totalItems/d.pageSize):void 0))===1&&d.hasMore!==!0)return W;const B=M=>t.jsx("div",{...E(S.wrapper,M==="below"&&S.marginTop,M==="above"&&S.marginBottom,I==="center"&&S.alignCenter,I==="end"&&S.alignEnd,I==="start"&&S.alignStart),children:t.jsx(N,{...d})});return t.jsxs(t.Fragment,{children:[(h==="above"||h==="both")&&B("above"),W,(h==="below"||h==="both")&&B("below")]})}}),[])}function u(e,n,a){const s=(n-1)*a;return e.slice(s,s+a)}const o=Array.from({length:50},(e,n)=>({id:String(n+1),name:`User ${n+1}`,email:`user${n+1}@example.com`,role:["Engineer","Designer","Manager","Admin","Analyst"][n%5]})),p=[{key:"name",header:"Name"},{key:"email",header:"Email"},{key:"role",header:"Role"}];function k({variant:e="pages",position:n="below",align:a="start"}){const[s,i]=r.useState(1),m=10,c=g({page:s,onPageChange:i,totalItems:o.length,pageSize:m,variant:e,position:n,align:a});return t.jsx(l,{data:u(o,s,m),columns:p,idKey:"id",plugins:{pagination:c}})}const ue={title:"Core/TablePagination",tags:["autodocs"]},b={render:()=>{const[e,n]=r.useState(1),a=10,s=g({page:e,onPageChange:n,totalItems:o.length,pageSize:a});return t.jsx("div",{style:{maxWidth:600},children:t.jsx(l,{data:u(o,e,a),columns:p,idKey:"id",plugins:{pagination:s}})})}},y={render:()=>{const[e,n]=r.useState(1),a=10,s=o.slice((e-1)*a,e*a),i=g({page:e,onPageChange:n,totalItems:o.length,pageSize:a});return t.jsxs("div",{style:{maxWidth:600},children:[t.jsx("p",{style:{marginBottom:8,fontSize:14,color:"#666"},children:"Server-side: data is pre-sliced, no paginatedData() needed."}),t.jsx(l,{data:s,columns:p,idKey:"id",plugins:{pagination:i}})]})}},x={render:()=>{const[e,n]=r.useState(1),[a,s]=r.useState(10),i=g({page:e,onPageChange:n,totalItems:o.length,pageSize:a,onPageSizeChange:s,pageSizeOptions:[5,10,25,50]});return t.jsx("div",{style:{maxWidth:600},children:t.jsx(l,{data:u(o,e,a),columns:p,idKey:"id",plugins:{pagination:i}})})}},z={render:()=>{const[e,n]=r.useState(1),a=10,s=e*a<o.length,i=g({page:e,onPageChange:n,hasMore:s,pageSize:a});return t.jsxs("div",{style:{maxWidth:600},children:[t.jsxs("p",{style:{marginBottom:8,fontSize:14,color:"#666"},children:["Cursor-based: total unknown, only hasMore=",String(s),"."]}),t.jsx(l,{data:u(o,e,a),columns:p,idKey:"id",plugins:{pagination:i}})]})}},f={render:()=>{const[e,n]=r.useState(1),a=10,s=g({page:e,onPageChange:n,totalItems:o.length,pageSize:a,position:"above"});return t.jsx("div",{style:{maxWidth:600},children:t.jsx(l,{data:u(o,e,a),columns:p,idKey:"id",plugins:{pagination:s}})})}},D={render:()=>{const[e,n]=r.useState(1),a=10,s=g({page:e,onPageChange:n,totalItems:o.length,pageSize:a,position:"both"});return t.jsx("div",{style:{maxWidth:600},children:t.jsx(l,{data:u(o,e,a),columns:p,idKey:"id",plugins:{pagination:s}})})}},j={render:()=>{const[e,n]=r.useState(1),[a,s]=r.useState(new Set),i=10,m=g({page:e,onPageChange:n,totalItems:o.length,pageSize:i}),c=u(o,e,i),{selectionConfig:T}=F({data:c,idKey:"id",selectedKeys:a,setSelectedKeys:s}),C=_(T);return t.jsxs("div",{style:{maxWidth:600},children:[t.jsxs("p",{style:{marginBottom:8,fontSize:14,color:"#666"},children:["Pagination + Selection composed. Selected: ",a.size]}),t.jsx(l,{data:c,columns:p,idKey:"id",plugins:{selection:C,pagination:m}})]})}},v={argTypes:{variant:{control:"select",options:["pages","count","compact","dots","none"],description:"What appears between prev/next buttons"},position:{control:"select",options:["below","above","both","none"],description:"Where pagination renders relative to the table"},align:{control:"select",options:["start","center","end"],description:"Horizontal alignment of the pagination controls"}},args:{variant:"pages",position:"below",align:"center"},render:e=>t.jsx("div",{style:{maxWidth:700},children:t.jsx(k,{variant:e.variant,position:e.position,align:e.align})})},q=["pages","count","compact","dots"],G=["below","above","both"],H=["start","center","end"],P={render:()=>t.jsx("div",{style:{fontFamily:"sans-serif",maxWidth:700},children:q.flatMap(e=>G.flatMap(n=>H.map(a=>t.jsxs("div",{style:{marginBottom:48,paddingBottom:48,borderBottom:"1px solid #e5e5e5"},children:[t.jsx("div",{style:{display:"inline-flex",gap:8,marginBottom:12,flexWrap:"wrap"},children:[{label:"variant",value:e},{label:"position",value:n},{label:"align",value:a}].map(({label:s,value:i})=>t.jsxs("span",{style:{fontSize:11,fontFamily:"monospace",background:"#f0f0f0",borderRadius:4,padding:"2px 6px",color:"#555"},children:[s,'="',i,'"']},s))}),t.jsx(k,{variant:e,position:n,align:a})]},`${e}-${n}-${a}`))))})};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(1);
    const pageSize = 10;
    const plugin = useXDSTablePagination<User>({
      page,
      onPageChange: setPage,
      totalItems: users.length,
      pageSize
    });
    return <div style={{
      maxWidth: 600
    }}>
        <XDSTable data={paginateData(users, page, pageSize)} columns={columns} idKey="id" plugins={{
        pagination: plugin
      }} />
      </div>;
  }
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(1);
    const pageSize = 10;
    const serverData = users.slice((page - 1) * pageSize, page * pageSize);
    const plugin = useXDSTablePagination<User>({
      page,
      onPageChange: setPage,
      totalItems: users.length,
      pageSize
    });
    return <div style={{
      maxWidth: 600
    }}>
        <p style={{
        marginBottom: 8,
        fontSize: 14,
        color: '#666'
      }}>
          Server-side: data is pre-sliced, no paginatedData() needed.
        </p>
        <XDSTable data={serverData} columns={columns} idKey="id" plugins={{
        pagination: plugin
      }} />
      </div>;
  }
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    const plugin = useXDSTablePagination<User>({
      page,
      onPageChange: setPage,
      totalItems: users.length,
      pageSize,
      onPageSizeChange: setPageSize,
      pageSizeOptions: [5, 10, 25, 50]
    });
    return <div style={{
      maxWidth: 600
    }}>
        <XDSTable data={paginateData(users, page, pageSize)} columns={columns} idKey="id" plugins={{
        pagination: plugin
      }} />
      </div>;
  }
}`,...x.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(1);
    const pageSize = 10;
    const hasMore = page * pageSize < users.length;
    const plugin = useXDSTablePagination<User>({
      page,
      onPageChange: setPage,
      hasMore,
      pageSize
    });
    return <div style={{
      maxWidth: 600
    }}>
        <p style={{
        marginBottom: 8,
        fontSize: 14,
        color: '#666'
      }}>
          Cursor-based: total unknown, only hasMore={String(hasMore)}.
        </p>
        <XDSTable data={paginateData(users, page, pageSize)} columns={columns} idKey="id" plugins={{
        pagination: plugin
      }} />
      </div>;
  }
}`,...z.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(1);
    const pageSize = 10;
    const plugin = useXDSTablePagination<User>({
      page,
      onPageChange: setPage,
      totalItems: users.length,
      pageSize,
      position: 'above'
    });
    return <div style={{
      maxWidth: 600
    }}>
        <XDSTable data={paginateData(users, page, pageSize)} columns={columns} idKey="id" plugins={{
        pagination: plugin
      }} />
      </div>;
  }
}`,...f.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(1);
    const pageSize = 10;
    const plugin = useXDSTablePagination<User>({
      page,
      onPageChange: setPage,
      totalItems: users.length,
      pageSize,
      position: 'both'
    });
    return <div style={{
      maxWidth: 600
    }}>
        <XDSTable data={paginateData(users, page, pageSize)} columns={columns} idKey="id" plugins={{
        pagination: plugin
      }} />
      </div>;
  }
}`,...D.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = useState(1);
    const [selectedKeys, setSelectedKeys] = useState<Set<string>>(new Set());
    const pageSize = 10;
    const plugin = useXDSTablePagination<User>({
      page,
      onPageChange: setPage,
      totalItems: users.length,
      pageSize
    });
    const pageData = paginateData(users, page, pageSize);
    const {
      selectionConfig
    } = useXDSTableSelectionState<User>({
      data: pageData,
      idKey: 'id',
      selectedKeys,
      setSelectedKeys
    });
    const selectionPlugin = useXDSTableSelection<User>(selectionConfig);
    return <div style={{
      maxWidth: 600
    }}>
        <p style={{
        marginBottom: 8,
        fontSize: 14,
        color: '#666'
      }}>
          Pagination + Selection composed. Selected: {selectedKeys.size}
        </p>
        <XDSTable data={pageData} columns={columns} idKey="id" plugins={{
        selection: selectionPlugin,
        pagination: plugin
      }} />
      </div>;
  }
}`,...j.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  argTypes: {
    variant: {
      control: 'select',
      options: ['pages', 'count', 'compact', 'dots', 'none'],
      description: 'What appears between prev/next buttons'
    },
    position: {
      control: 'select',
      options: ['below', 'above', 'both', 'none'],
      description: 'Where pagination renders relative to the table'
    },
    align: {
      control: 'select',
      options: ['start', 'center', 'end'],
      description: 'Horizontal alignment of the pagination controls'
    }
  },
  args: {
    variant: 'pages',
    position: 'below',
    align: 'center'
  },
  render: args => <div style={{
    maxWidth: 700
  }}>
      <PaginatedDemo variant={args.variant} position={args.position} align={args.align} />
    </div>
}`,...v.parameters?.docs?.source},description:{story:`Interactive playground — use the controls panel to explore every combination
of variant, position, and align.`,...v.parameters?.docs?.description}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    fontFamily: 'sans-serif',
    maxWidth: 700
  }}>
      {VARIANTS.flatMap(variant => POSITIONS.flatMap(position => ALIGNS.map(align => <div key={\`\${variant}-\${position}-\${align}\`} style={{
      marginBottom: 48,
      paddingBottom: 48,
      borderBottom: '1px solid #e5e5e5'
    }}>
              <div style={{
        display: 'inline-flex',
        gap: 8,
        marginBottom: 12,
        flexWrap: 'wrap'
      }}>
                {[{
          label: 'variant',
          value: variant
        }, {
          label: 'position',
          value: position
        }, {
          label: 'align',
          value: align
        }].map(({
          label,
          value
        }) => <span key={label} style={{
          fontSize: 11,
          fontFamily: 'monospace',
          background: '#f0f0f0',
          borderRadius: 4,
          padding: '2px 6px',
          color: '#555'
        }}>
                    {label}=&quot;{value}&quot;
                  </span>)}
              </div>
              <PaginatedDemo variant={variant} position={position} align={align} />
            </div>)))}
    </div>
}`,...P.parameters?.docs?.source},description:{story:"All variant × position × align combinations in one scrollable view.\nOne row per combination, labelled clearly. The `none` values are omitted.",...P.parameters?.docs?.description}}};const me=["Default","ServerSide","PageSizeSelector","CursorBased","PositionAbove","PositionBoth","WithSelection","Playground","OptionsMatrix"];export{z as CursorBased,b as Default,P as OptionsMatrix,x as PageSizeSelector,v as Playground,f as PositionAbove,D as PositionBoth,y as ServerSide,j as WithSelection,me as __namedExportsOrder,ue as default};
