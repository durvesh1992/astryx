import{ad as e,X as O,M as X,aG as F,as as U,aA as _,r as M}from"./iframe-yRFQ_7VC.js";import{X as a,c as G,e as p,d as I,a as J,b as i,f as o,p as d}from"./XDSTable-tIgxviJL.js";import{X as l}from"./XDSCard-CyDoBnn3.js";import{X as Q}from"./XDSSection-C0P8UZDV.js";import{X as Y,b as Z}from"./XDSLayoutContent-DBrMIkuH.js";import{X as ee}from"./XDSLayoutHeader-ByHa8jrV.js";import{X as re}from"./XDSLayoutFooter-BJLeHzEf.js";import{X as q}from"./XDSVStack-uMCoSZ_B.js";import{X as P}from"./XDSHeading---Kr4LhL.js";import{X as ae}from"./XDSHStack-BmU4dpCo.js";import"./preload-helper-Ct5FWWRu.js";import"./XDSEmptyState-CWiMy9oI.js";import"./container.stylex-BI6SFdSl.js";import"./padding.stylex-BDg7w1Mn.js";import"./stack.stylex-5XIQDawT.js";import"./stackItem.stylex-CYo-hkeX.js";import"./XDSStack-CFJ7xIVk.js";const n=[{id:"1",name:"Alice Johnson",email:"alice@example.com",role:"Engineer",age:30},{id:"2",name:"Bob Smith",email:"bob@example.com",role:"Designer",age:25},{id:"3",name:"Charlie Brown",email:"charlie@example.com",role:"PM",age:35},{id:"4",name:"Diana Prince",email:"diana@example.com",role:"Engineer",age:28},{id:"5",name:"Eve Davis",email:"eve@example.com",role:"Designer",age:32}],s=[{key:"name",header:"Name",width:o(1)},{key:"email",header:"Email",width:o(2)},{key:"role",header:"Role",width:o(1)},{key:"age",header:"Age",width:d(80)}],Xe={title:"Core/Table",component:a,tags:["autodocs"],argTypes:{density:{control:"select",options:["compact","balanced","spacious"],description:"Row density controlling padding and font size"},dividers:{control:"select",options:["rows","columns","grid","none"],description:"Divider style between cells"},isStriped:{control:"boolean",description:"Alternate row background color"},hasHover:{control:"boolean",description:"Highlight rows on hover"},verticalAlign:{control:"select",options:["middle","top","bottom"],description:"Vertical alignment for body row cells"}}},j={args:{data:n,columns:s,idKey:"id"}},C={args:{data:n,columns:s,idKey:"id",density:"compact"}},T={args:{data:n,columns:s,idKey:"id",density:"spacious"}},k={args:{data:n,columns:s,idKey:"id",isStriped:!0,hasHover:!0}},H={args:{data:n,columns:s,idKey:"id",dividers:"grid"}},A={args:{data:n,columns:s,idKey:"id",dividers:"columns"}},R={args:{data:n,columns:s,idKey:"id",dividers:"none"}},W={render:()=>e.jsx(a,{data:[{name:"Alice",role:"Engineer",status:"Active"},{name:"Bob",role:"Designer",status:"Away"}],hasHover:!0})},E={render:()=>{const r=[{key:"name",header:"Name"},{key:"email",header:"Email",width:o(2),renderCell:t=>e.jsx("a",{href:`mailto:${t.email}`,style:{color:"inherit"},children:t.email})},{key:"role",header:"Role",renderCell:t=>e.jsx("span",{style:{padding:`${_["--spacing-0-5"]} ${_["--spacing-2"]}`,borderRadius:U["--radius-inner"],fontSize:F["--font-size-xs"],backgroundColor:t.role==="Engineer"?X["--color-background-blue"]:X["--color-background-purple"],color:t.role==="Engineer"?X["--color-text-blue"]:X["--color-text-purple"]},children:t.role})},{key:"age",header:"Age",width:d(80)}];return e.jsx(a,{data:n,columns:r,idKey:"id",hasHover:!0})}},K={render:()=>e.jsxs(a,{density:"balanced",dividers:"rows",isStriped:!0,hasHover:!0,children:[e.jsx(G,{children:e.jsxs(p,{children:[e.jsx(I,{children:"Name"}),e.jsx(I,{children:"Email"}),e.jsx(I,{children:"Role"})]})}),e.jsxs(J,{children:[e.jsxs(p,{children:[e.jsx(i,{children:"Alice"}),e.jsx(i,{children:"alice@example.com"}),e.jsx(i,{children:"Engineer"})]}),e.jsxs(p,{children:[e.jsx(i,{children:"Bob"}),e.jsx(i,{children:"bob@example.com"}),e.jsx(i,{children:"Designer"})]}),e.jsxs(p,{children:[e.jsx(i,{children:"Charlie"}),e.jsx(i,{children:"charlie@example.com"}),e.jsx(i,{children:"PM"})]}),e.jsxs(p,{children:[e.jsx(i,{children:"Diana"}),e.jsx(i,{children:"diana@example.com"}),e.jsx(i,{children:"Engineer"})]})]})]})},N={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{margin:"0 0 8px",fontWeight:600},children:"Compact"}),e.jsx(a,{data:n.slice(0,3),columns:s,idKey:"id",density:"compact"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{margin:"0 0 8px",fontWeight:600},children:"Balanced (default)"}),e.jsx(a,{data:n.slice(0,3),columns:s,idKey:"id",density:"balanced"})]}),e.jsxs("div",{children:[e.jsx("p",{style:{margin:"0 0 8px",fontWeight:600},children:"Spacious"}),e.jsx(a,{data:n.slice(0,3),columns:s,idKey:"id",density:"spacious"})]})]})},z={args:{data:n,columns:s,idKey:"id",density:"compact",dividers:"grid",isStriped:!0,hasHover:!0}},V=[{scenario:"Long unbroken string",content:"a_very_long_string_like_this_that_overflows_the_column_without_any_spaces_or_hyphens"},{scenario:"Normal prose",content:"This is a longer sentence that might wrap or truncate depending on the textOverflow setting of the table."},{scenario:"Short text",content:"Fits fine."}],m={render:()=>{const r=[{key:"scenario",header:"Scenario",width:d(160)},{key:"content",header:"Content",width:o(1)}];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",width:"480px"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{margin:"0 0 8px"},children:"Wrap (default)"}),e.jsx(a,{data:V,columns:r,dividers:"grid",density:"balanced"})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{margin:"0 0 8px"},children:"Truncate (with tooltip on hover)"}),e.jsx(a,{data:V,columns:r,dividers:"grid",density:"balanced",textOverflow:"truncate"})]})]})}},c=[{key:"name",header:"Name",width:o(1)},{key:"role",header:"Role",width:o(1)},{key:"email",header:"Email",width:o(2)}],h={decorators:[r=>e.jsx("div",{className:"x1eiddq6 x1gt495",children:e.jsx(r,{})})],render:()=>e.jsxs("div",{className:"x78zum5 x1qh66ti x1a02dak x7a106z",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"xrcdmg7 x9ynric xif65rj xv1l7n4",children:"Table in Card (auto bleed)"}),e.jsx(l,{width:480,children:e.jsx(a,{data:n.slice(0,4),columns:c})})]}),e.jsxs("div",{children:[e.jsxs("h4",{className:"xrcdmg7 x9ynric xif65rj xv1l7n4",children:["Before: Card padding=",0," (old pattern)"]}),e.jsx(l,{width:480,padding:0,children:e.jsx(a,{data:n.slice(0,4),columns:c})})]})]})},u={decorators:[r=>e.jsx("div",{className:"x1eiddq6 x1gt495",children:e.jsx(r,{})})],render:()=>e.jsx(l,{width:520,children:e.jsxs(q,{gap:3,children:[e.jsx(P,{level:3,children:"Team Members"}),e.jsx(a,{data:n.slice(0,4),columns:c,hasHover:!0})]})})},x={decorators:[r=>e.jsx("div",{className:"x1eiddq6 x1gt495",children:e.jsx(r,{})})],render:()=>e.jsx(l,{width:560,children:e.jsx(Y,{header:e.jsx(ee,{hasDivider:!0,children:e.jsx(P,{level:3,children:"User Directory"})}),content:e.jsx(Z,{children:e.jsx(a,{data:n,columns:c,hasHover:!0,isStriped:!0})}),footer:e.jsx(re,{hasDivider:!0,children:e.jsxs(ae,{gap:2,hAlign:"end",children:[e.jsx(O,{label:"Export",variant:"secondary",children:"Export"}),e.jsx(O,{label:"Add User",variant:"primary",children:"Add User"})]})})})})},y={decorators:[r=>e.jsx("div",{className:"x1eiddq6 x1gt495",children:e.jsx(r,{})})],render:()=>e.jsxs(l,{width:520,children:[e.jsxs(q,{gap:3,children:[e.jsx(P,{level:3,children:"Dashboard"}),e.jsx("p",{className:"x9ynric xv1l7n4 xif65rj x1ghz6dp",children:"The table below is in a wash section for visual separation."})]}),e.jsx(Q,{variant:"muted",children:e.jsx(a,{data:n.slice(0,3),columns:c,density:"compact"})})]})},g={decorators:[r=>e.jsx("div",{className:"x1eiddq6 x1gt495",children:e.jsx(r,{})})],render:()=>e.jsx("div",{className:"x78zum5 x1qh66ti x1a02dak x7a106z",children:["compact","balanced","spacious"].map(r=>e.jsxs("div",{children:[e.jsx("h4",{className:"xrcdmg7 x9ynric xif65rj xv1l7n4",children:r}),e.jsx(l,{width:400,children:e.jsxs(q,{gap:2,children:[e.jsx(P,{level:4,children:"Team"}),e.jsx(a,{data:n.slice(0,3),columns:c,density:r})]})})]},r))})},S={decorators:[r=>e.jsx("div",{className:"x1eiddq6 x1gt495",children:e.jsx(r,{})})],render:()=>e.jsxs("div",{className:"x78zum5 x1qh66ti x1a02dak x7a106z",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"xrcdmg7 x9ynric xif65rj xv1l7n4",children:"Standalone (no container)"}),e.jsx("div",{style:{width:400},children:e.jsx(a,{data:n.slice(0,3),columns:c})})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"xrcdmg7 x9ynric xif65rj xv1l7n4",children:"Inside Card"}),e.jsx(l,{width:400,children:e.jsx(a,{data:n.slice(0,3),columns:c})})]})]})},ne=[{id:"1",description:"Cloud hosting (monthly)",category:"Infrastructure",quantity:1,amount:"$2,400.00"},{id:"2",description:"Design software licenses",category:"Tools",quantity:12,amount:"$1,188.00"},{id:"3",description:"Team offsite catering",category:"Events",quantity:45,amount:"$3,150.00"},{id:"4",description:"Ergonomic keyboards",category:"Hardware",quantity:8,amount:"$1,592.00"},{id:"5",description:"Annual conference tickets",category:"Travel",quantity:3,amount:"$4,500.00"}],ie=[{key:"description",header:"Description",width:o(2)},{key:"category",header:"Category"},{key:"quantity",header:"Qty",align:"center",width:d(80)},{key:"amount",header:"Amount",align:"end",width:d(120)}],v={render:()=>e.jsx(a,{data:ne,columns:ie,idKey:"id",hasHover:!0,dividers:"rows"})},se=[{id:"1",name:"Alice Johnson",bio:"Full-stack engineer with 8 years of experience. Specializes in distributed systems and performance optimization. Previously at Stripe and Google.",role:"Staff Engineer"},{id:"2",name:"Bob Smith",bio:"Product designer focused on design systems and accessibility.",role:"Senior Designer"},{id:"3",name:"Charlie Brown",bio:"Engineering manager leading the platform team. Passionate about developer experience, tooling, and building inclusive teams that ship with confidence.",role:"EM"}],te=[{key:"name",header:"Name",width:d(140)},{key:"bio",header:"Bio",width:o(3),renderCell:r=>e.jsx("span",{style:{whiteSpace:"normal",overflow:"visible",display:"block"},children:r.bio})},{key:"role",header:"Role",align:"end",width:d(140)}],b={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:["middle","top","bottom"].map(r=>e.jsxs("div",{children:[e.jsxs("p",{style:{margin:"0 0 8px",fontWeight:600},children:['verticalAlign="',r,'"']}),e.jsx(a,{data:se,columns:te,idKey:"id",verticalAlign:r,dividers:"rows"})]},r))})},B=[{id:"1",name:"Alice Johnson",department:"Engineering",title:"Senior Software Engineer",location:"San Francisco",email:"alice.johnson@example.com",status:"Active"},{id:"2",name:"Bob Martinez",department:"Product Design",title:"Lead Product Designer",location:"New York",email:"bob.martinez@example.com",status:"Active"},{id:"3",name:"Carol Williams",department:"Data Science",title:"Staff Data Scientist",location:"Seattle",email:"carol.williams@example.com",status:"On Leave"}],L=[{key:"name",header:"Name"},{key:"department",header:"Department"},{key:"title",header:"Title"},{key:"location",header:"Location"},{key:"email",header:"Email"},{key:"status",header:"Status"}],D={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{margin:"0 0 8px",fontWeight:600},children:"320px container — 6 columns, horizontal scroll"}),e.jsx("div",{style:{width:"320px",border:"1px dashed #ccc",borderRadius:"8px"},children:e.jsx(a,{data:B,columns:L,idKey:"id",dividers:"rows",density:"compact",textOverflow:"truncate"})})]}),e.jsxs("div",{children:[e.jsx("p",{style:{margin:"0 0 8px",fontWeight:600},children:"480px container — same table, more visible before scroll"}),e.jsx("div",{style:{width:"480px",border:"1px dashed #ccc",borderRadius:"8px"},children:e.jsx(a,{data:B,columns:L,idKey:"id",dividers:"rows",density:"compact",textOverflow:"truncate"})})]}),e.jsxs("div",{children:[e.jsx("p",{style:{margin:"0 0 8px",fontWeight:600},children:"Full width — no scroll needed"}),e.jsx(a,{data:B,columns:L,idKey:"id",dividers:"rows",density:"compact",textOverflow:"truncate"})]})]})},w={render:()=>e.jsx("div",{style:{width:"360px",border:"1px dashed #ccc",borderRadius:"8px"},children:e.jsx(l,{children:e.jsx(a,{data:B,columns:L,idKey:"id",dividers:"rows",density:"compact",textOverflow:"truncate"})})})},$=[{name:"label",type:"string",description:"The visible text label for the button."},{name:"variant",type:"'primary' | 'secondary' | 'ghost' | 'danger'",description:"Visual style variant. Primary for main actions, secondary for supporting actions, ghost for minimal emphasis, danger for destructive operations."},{name:"size",type:"'sm' | 'md' | 'lg'",description:"Controls button height, padding, and font size."},{name:"isDisabled",type:"boolean",description:"Disables the button, preventing interactions and applying disabled styling."},{name:"onClick",type:"(event: MouseEvent) => void",description:"Callback fired when the button is clicked."},{name:"startIcon",type:"ReactNode",description:"Icon rendered before the label text."}],f={render:()=>{const r=[{key:"name",header:"Prop",width:d(140),renderCell:t=>e.jsx(M,{type:"code",weight:"bold",children:t.name})},{key:"type",header:"Type",width:d(240),renderCell:t=>e.jsx(M,{type:"code",color:"secondary",children:t.type})},{key:"description",header:"Description"}];return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[e.jsxs("div",{children:[e.jsx("p",{style:{margin:"0 0 8px",fontWeight:600},children:"360px — docsite props table on mobile"}),e.jsx("div",{style:{width:"360px",border:"1px dashed #ccc",borderRadius:"8px"},children:e.jsx(a,{data:$,columns:r,density:"spacious",dividers:"rows"})})]}),e.jsxs("div",{children:[e.jsx("p",{style:{margin:"0 0 8px",fontWeight:600},children:"Full width — normal desktop experience"}),e.jsx(a,{data:$,columns:r,density:"spacious",dividers:"rows"})]})]})}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    data: users,
    columns,
    idKey: 'id'
  }
}`,...j.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    data: users,
    columns,
    idKey: 'id',
    density: 'compact'
  }
}`,...C.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    data: users,
    columns,
    idKey: 'id',
    density: 'spacious'
  }
}`,...T.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    data: users,
    columns,
    idKey: 'id',
    isStriped: true,
    hasHover: true
  }
}`,...k.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    data: users,
    columns,
    idKey: 'id',
    dividers: 'grid'
  }
}`,...H.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    data: users,
    columns,
    idKey: 'id',
    dividers: 'columns'
  }
}`,...A.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    data: users,
    columns,
    idKey: 'id',
    dividers: 'none'
  }
}`,...R.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => <XDSTable data={[{
    name: 'Alice',
    role: 'Engineer',
    status: 'Active'
  }, {
    name: 'Bob',
    role: 'Designer',
    status: 'Away'
  }]} hasHover />
}`,...W.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => {
    const cols: XDSTableColumn<User>[] = [{
      key: 'name',
      header: 'Name'
    }, {
      key: 'email',
      header: 'Email',
      width: proportional(2),
      renderCell: item => <a href={\`mailto:\${item.email}\`} style={{
        color: 'inherit'
      }}>
            {item.email}
          </a>
    }, {
      key: 'role',
      header: 'Role',
      renderCell: item => <span style={{
        padding: \`\${spacingDefaults['--spacing-0-5']} \${spacingDefaults['--spacing-2']}\`,
        borderRadius: radiusDefaults['--radius-inner'],
        fontSize: textSizeDefaults['--font-size-xs'],
        backgroundColor: item.role === 'Engineer' ? colorDefaults['--color-background-blue'] : colorDefaults['--color-background-purple'],
        color: item.role === 'Engineer' ? colorDefaults['--color-text-blue'] : colorDefaults['--color-text-purple']
      }}>
            {item.role}
          </span>
    }, {
      key: 'age',
      header: 'Age',
      width: pixel(80)
    }];
    return <XDSTable data={users} columns={cols} idKey="id" hasHover />;
  }
}`,...E.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => <XDSTable density="balanced" dividers="rows" isStriped hasHover>
      <XDSTableHeader>
        <XDSTableRow>
          <XDSTableHeaderCell>Name</XDSTableHeaderCell>
          <XDSTableHeaderCell>Email</XDSTableHeaderCell>
          <XDSTableHeaderCell>Role</XDSTableHeaderCell>
        </XDSTableRow>
      </XDSTableHeader>
      <XDSTableBody>
        <XDSTableRow>
          <XDSTableCell>Alice</XDSTableCell>
          <XDSTableCell>alice@example.com</XDSTableCell>
          <XDSTableCell>Engineer</XDSTableCell>
        </XDSTableRow>
        <XDSTableRow>
          <XDSTableCell>Bob</XDSTableCell>
          <XDSTableCell>bob@example.com</XDSTableCell>
          <XDSTableCell>Designer</XDSTableCell>
        </XDSTableRow>
        <XDSTableRow>
          <XDSTableCell>Charlie</XDSTableCell>
          <XDSTableCell>charlie@example.com</XDSTableCell>
          <XDSTableCell>PM</XDSTableCell>
        </XDSTableRow>
        <XDSTableRow>
          <XDSTableCell>Diana</XDSTableCell>
          <XDSTableCell>diana@example.com</XDSTableCell>
          <XDSTableCell>Engineer</XDSTableCell>
        </XDSTableRow>
      </XDSTableBody>
    </XDSTable>
}`,...K.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px'
  }}>
      <div>
        <p style={{
        margin: '0 0 8px',
        fontWeight: 600
      }}>Compact</p>
        <XDSTable data={users.slice(0, 3)} columns={columns} idKey="id" density="compact" />
      </div>
      <div>
        <p style={{
        margin: '0 0 8px',
        fontWeight: 600
      }}>Balanced (default)</p>
        <XDSTable data={users.slice(0, 3)} columns={columns} idKey="id" density="balanced" />
      </div>
      <div>
        <p style={{
        margin: '0 0 8px',
        fontWeight: 600
      }}>Spacious</p>
        <XDSTable data={users.slice(0, 3)} columns={columns} idKey="id" density="spacious" />
      </div>
    </div>
}`,...N.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    data: users,
    columns,
    idKey: 'id',
    density: 'compact',
    dividers: 'grid',
    isStriped: true,
    hasHover: true
  }
}`,...z.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const cols: XDSTableColumn<OverflowRow>[] = [{
      key: 'scenario',
      header: 'Scenario',
      width: pixel(160)
    }, {
      key: 'content',
      header: 'Content',
      width: proportional(1)
    }];
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '32px',
      width: '480px'
    }}>
        <div>
          <h4 style={{
          margin: '0 0 8px'
        }}>Wrap (default)</h4>
          <XDSTable data={overflowData} columns={cols} dividers="grid" density="balanced" />
        </div>
        <div>
          <h4 style={{
          margin: '0 0 8px'
        }}>Truncate (with tooltip on hover)</h4>
          <XDSTable data={overflowData} columns={cols} dividers="grid" density="balanced" textOverflow="truncate" />
        </div>
      </div>;
  }
}`,...m.parameters?.docs?.source},description:{story:`Text wraps by default — rows grow taller and no content is hidden.
Set \`textOverflow="truncate"\` for dense data tables where fixed row
height matters. In truncate mode, default-rendered cells show a
tooltip on hover when text is actually overflowing.`,...m.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div {...stylex.props(containerStoryStyles.pageWrapper)}>
        <Story />
      </div>],
  render: () => <div {...stylex.props(containerStoryStyles.storyWrapper)}>
      <div>
        <h4 {...stylex.props(containerStoryStyles.heading)}>
          Table in Card (auto bleed)
        </h4>
        <XDSCard width={480}>
          <XDSTable data={users.slice(0, 4)} columns={simpleColumns} />
        </XDSCard>
      </div>
      <div>
        <h4 {...stylex.props(containerStoryStyles.heading)}>
          Before: Card padding={0} (old pattern)
        </h4>
        <XDSCard width={480} padding={0}>
          <XDSTable data={users.slice(0, 4)} columns={simpleColumns} />
        </XDSCard>
      </div>
    </div>
}`,...h.parameters?.docs?.source},description:{story:`Table inside a Card automatically bleeds to the card edges.
The first column's start padding and last column's end padding
align with the card's content padding, so text lines up with
other content in the card.`,...h.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div {...stylex.props(containerStoryStyles.pageWrapper)}>
        <Story />
      </div>],
  render: () => <XDSCard width={520}>
      <XDSVStack gap={3}>
        <XDSHeading level={3}>Team Members</XDSHeading>
        <XDSTable data={users.slice(0, 4)} columns={simpleColumns} hasHover />
      </XDSVStack>
    </XDSCard>
}`,...u.parameters?.docs?.source},description:{story:`Card with a heading above the table. The table bleeds edge-to-edge
while the heading respects the card's content padding — text in the
first column aligns with the heading.`,...u.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div {...stylex.props(containerStoryStyles.pageWrapper)}>
        <Story />
      </div>],
  render: () => <XDSCard width={560}>
      <XDSLayout header={<XDSLayoutHeader hasDivider>
            <XDSHeading level={3}>User Directory</XDSHeading>
          </XDSLayoutHeader>} content={<XDSLayoutContent>
            <XDSTable data={users} columns={simpleColumns} hasHover isStriped />
          </XDSLayoutContent>} footer={<XDSLayoutFooter hasDivider>
            <XDSHStack gap={2} hAlign="end">
              <XDSButton label="Export" variant="secondary">
                Export
              </XDSButton>
              <XDSButton label="Add User" variant="primary">
                Add User
              </XDSButton>
            </XDSHStack>
          </XDSLayoutFooter>} />
    </XDSCard>
}`,...x.parameters?.docs?.source},description:{story:`Table inside a Card with XDSLayout — header, content with table, footer.
The table bleeds within the layout content area while header/footer
retain their own padding.`,...x.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div {...stylex.props(containerStoryStyles.pageWrapper)}>
        <Story />
      </div>],
  render: () => <XDSCard width={520}>
      <XDSVStack gap={3}>
        <XDSHeading level={3}>Dashboard</XDSHeading>
        <p {...stylex.props(containerStoryStyles.text)}>
          The table below is in a wash section for visual separation.
        </p>
      </XDSVStack>
      <XDSSection variant="muted">
        <XDSTable data={users.slice(0, 3)} columns={simpleColumns} density="compact" />
      </XDSSection>
    </XDSCard>
}`,...y.parameters?.docs?.source},description:{story:`Table inside a Section with wash background. The section escapes
the card padding, and the table bleeds within the section.`,...y.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div {...stylex.props(containerStoryStyles.pageWrapper)}>
        <Story />
      </div>],
  render: () => <div {...stylex.props(containerStoryStyles.storyWrapper)}>
      {(['compact', 'balanced', 'spacious'] as const).map(density => <div key={density}>
          <h4 {...stylex.props(containerStoryStyles.heading)}>{density}</h4>
          <XDSCard width={400}>
            <XDSVStack gap={2}>
              <XDSHeading level={4}>Team</XDSHeading>
              <XDSTable data={users.slice(0, 3)} columns={simpleColumns} density={density} />
            </XDSVStack>
          </XDSCard>
        </div>)}
    </div>
}`,...g.parameters?.docs?.source},description:{story:`Compares all three density levels inside cards to show how
the edge padding adapts — it always matches the container padding,
with a minimum of 8px even for compact tables.`,...g.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div {...stylex.props(containerStoryStyles.pageWrapper)}>
        <Story />
      </div>],
  render: () => <div {...stylex.props(containerStoryStyles.storyWrapper)}>
      <div>
        <h4 {...stylex.props(containerStoryStyles.heading)}>
          Standalone (no container)
        </h4>
        <div style={{
        width: 400
      }}>
          <XDSTable data={users.slice(0, 3)} columns={simpleColumns} />
        </div>
      </div>
      <div>
        <h4 {...stylex.props(containerStoryStyles.heading)}>Inside Card</h4>
        <XDSCard width={400}>
          <XDSTable data={users.slice(0, 3)} columns={simpleColumns} />
        </XDSCard>
      </div>
    </div>
}`,...S.parameters?.docs?.source},description:{story:`Standalone table (no container) — behaves normally with
density-based cell padding. No bleed, no edge compensation.`,...S.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <XDSTable data={transactions} columns={alignedColumns} idKey="id" hasHover dividers="rows" />
}`,...v.parameters?.docs?.source},description:{story:"Per-column horizontal alignment via the `align` prop.\n\n- `'start'` (default) — left in LTR, right in RTL\n- `'center'` — centered text\n- `'end'` — right in LTR, left in RTL\n\nAlignment applies to both the header `<th>` and body `<td>` cells.\nNumeric columns typically use `align: 'end'`, while status or icon\ncolumns work well with `align: 'center'`.",...v.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px'
  }}>
      {(['middle', 'top', 'bottom'] as const).map(vAlign => <div key={vAlign}>
          <p style={{
        margin: '0 0 8px',
        fontWeight: 600
      }}>
            verticalAlign=&quot;{vAlign}&quot;
          </p>
          <XDSTable data={teamMembers} columns={verticalAlignColumns} idKey="id" verticalAlign={vAlign} dividers="rows" />
        </div>)}
    </div>
}`,...b.parameters?.docs?.source},description:{story:`Compares all three \`verticalAlign\` options side by side.

- \`'middle'\` (default) — vertically centers cell content
- \`'top'\` — aligns to the top, useful for multi-line cells
- \`'bottom'\` — aligns to the bottom

Uses a multi-line "Bio" column with wrapping text to make
the vertical alignment difference visible.`,...b.parameters?.docs?.description}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '32px'
  }}>
      <div>
        <p style={{
        margin: '0 0 8px',
        fontWeight: 600
      }}>
          320px container — 6 columns, horizontal scroll
        </p>
        <div style={{
        width: '320px',
        border: '1px dashed #ccc',
        borderRadius: '8px'
      }}>
          <XDSTable data={mobileData} columns={mobileColumns} idKey="id" dividers="rows" density="compact" textOverflow="truncate" />
        </div>
      </div>
      <div>
        <p style={{
        margin: '0 0 8px',
        fontWeight: 600
      }}>
          480px container — same table, more visible before scroll
        </p>
        <div style={{
        width: '480px',
        border: '1px dashed #ccc',
        borderRadius: '8px'
      }}>
          <XDSTable data={mobileData} columns={mobileColumns} idKey="id" dividers="rows" density="compact" textOverflow="truncate" />
        </div>
      </div>
      <div>
        <p style={{
        margin: '0 0 8px',
        fontWeight: 600
      }}>
          Full width — no scroll needed
        </p>
        <XDSTable data={mobileData} columns={mobileColumns} idKey="id" dividers="rows" density="compact" textOverflow="truncate" />
      </div>
    </div>
}`,...D.parameters?.docs?.source},description:{story:`Demonstrates table behavior in narrow containers (mobile viewports).

With many columns, the table's minimum width (driven by per-column
minimums) exceeds the container width. Instead of squishing columns
to illegible widths, the table scrolls horizontally.

Each column — even those without an explicit \`width\` — gets a default
minimum of 120px, so six columns require at least 720px. In a 320px
container, the table becomes horizontally scrollable.`,...D.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '360px',
    border: '1px dashed #ccc',
    borderRadius: '8px'
  }}>
      <XDSCard>
        <XDSTable data={mobileData} columns={mobileColumns} idKey="id" dividers="rows" density="compact" textOverflow="truncate" />
      </XDSCard>
    </div>
}`,...w.parameters?.docs?.source},description:{story:`Shows horizontal scroll behavior when a table with many columns
is placed inside a Card in a narrow container, verifying that
container bleed and scroll compose correctly.`,...w.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const cols: XDSTableColumn<PropEntry>[] = [{
      key: 'name',
      header: 'Prop',
      width: pixel(140),
      renderCell: (item: PropEntry) => <XDSText type="code" weight="bold">
            {item.name}
          </XDSText>
    }, {
      key: 'type',
      header: 'Type',
      width: pixel(240),
      renderCell: (item: PropEntry) => <XDSText type="code" color="secondary">
            {item.type}
          </XDSText>
    }, {
      key: 'description',
      header: 'Description'
    }];
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '32px'
    }}>
        <div>
          <p style={{
          margin: '0 0 8px',
          fontWeight: 600
        }}>
            360px — docsite props table on mobile
          </p>
          <div style={{
          width: '360px',
          border: '1px dashed #ccc',
          borderRadius: '8px'
        }}>
            <XDSTable data={propData} columns={cols} density="spacious" dividers="rows" />
          </div>
        </div>
        <div>
          <p style={{
          margin: '0 0 8px',
          fontWeight: 600
        }}>
            Full width — normal desktop experience
          </p>
          <XDSTable data={propData} columns={cols} density="spacious" dividers="rows" />
        </div>
      </div>;
  }
}`,...f.parameters?.docs?.source},description:{story:`Mirrors the docsite PropsTable pattern: two fixed pixel columns
(Prop name + Type) and a flexible Description column.

On mobile (320px), the fixed columns consume most of the space,
leaving description unreadable. With horizontal scroll, all three
columns maintain usable widths.`,...f.parameters?.docs?.description}}};const je=["Default","Compact","Spacious","StripedWithHover","GridDividers","ColumnDividers","NoDividers","AutoColumns","CustomCellRenderer","ChildrenMode","AllDensities","KitchenSink","OverflowBehavior","InCard","InCardWithHeading","InCardWithLayout","InCardWithSection","InCardDensities","StandaloneVsContainer","ColumnAlignment","VerticalAlignment","ResponsiveScroll","ResponsiveScrollInCard","PropsTablePattern"];export{N as AllDensities,W as AutoColumns,K as ChildrenMode,v as ColumnAlignment,A as ColumnDividers,C as Compact,E as CustomCellRenderer,j as Default,H as GridDividers,h as InCard,g as InCardDensities,u as InCardWithHeading,x as InCardWithLayout,y as InCardWithSection,z as KitchenSink,R as NoDividers,m as OverflowBehavior,f as PropsTablePattern,D as ResponsiveScroll,w as ResponsiveScrollInCard,T as Spacious,S as StandaloneVsContainer,k as StripedWithHover,b as VerticalAlignment,je as __namedExportsOrder,Xe as default};
