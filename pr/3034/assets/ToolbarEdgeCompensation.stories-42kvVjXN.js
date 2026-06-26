import{ad as e,B as t,c as R,d as M,e as V,f as N,g as J,T as q,at as K}from"./iframe-BsyQNsjg.js";import{T as o}from"./Toolbar-x5oI1XWE.js";import{C as r}from"./Card-BU0ik7sD.js";import{S as c}from"./Section-hnQAoHXC.js";import{a as Q,T as _}from"./Tab-BnONLRq5.js";import{L as i,b as d}from"./LayoutContent-0T4GdKL0.js";import{L as l}from"./LayoutHeader-BNqDatnL.js";import{V as u}from"./VStack-CbezWGwW.js";import{F as b}from"./Cog6ToothIcon-DNod7bVm.js";import{F as g}from"./ArrowLeftIcon-DnOAAn8i.js";import{H as s}from"./Heading-DrDMw6ge.js";import{F as x}from"./PlusIcon-BV0YRJsE.js";import{F as X}from"./ShareIcon-CPPGHNyj.js";import{F as U}from"./BellIcon-tPQgjvD9.js";import{F as Y}from"./Squares2X2Icon-Ajr7RlSl.js";import"./preload-helper-Ct5FWWRu.js";import"./useListFocus-CT4wLc1j.js";import"./container.stylex-uilBL6DE.js";import"./padding.stylex-ENVgbwco.js";import"./stack.stylex-BlarxY2N.js";import"./stackItem.stylex-CgqrJM4N.js";import"./Stack-BJArovWs.js";const Ce={title:"Core/ToolbarEdgeCompensation",component:o,parameters:{layout:"padded"}};function h({children:n,label:E}){return e.jsxs("div",{children:[e.jsx("div",{style:{marginBottom:8,fontSize:12,color:"#666"},children:E}),n]})}function a({lines:n=3}){return e.jsx(u,{gap:2,children:Array.from({length:n},(E,m)=>e.jsx(q,{type:"body",children:m===0?"Body content should align with the toolbar text or button labels above.":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."},m))})}const y={name:"Ghost buttons: start + end",render:()=>e.jsx(u,{gap:4,children:["sm","md","lg"].map(n=>e.jsx(h,{label:`size="${n}"`,children:e.jsxs(r,{width:600,children:[e.jsx(o,{label:`Ghost buttons ${n}`,size:n,dividers:["bottom"],startContent:e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Back",variant:"ghost",icon:e.jsx(g,{}),isIconOnly:!0}),e.jsx(t,{label:"Edit",variant:"ghost"}),e.jsx(t,{label:"Share",variant:"ghost"})]}),endContent:e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Filter",variant:"ghost",icon:e.jsx(M,{}),isIconOnly:!0}),e.jsx(t,{label:"Settings",variant:"ghost",icon:e.jsx(b,{}),isIconOnly:!0})]})}),e.jsx(c,{children:e.jsx(a,{})})]})},n))})},p={name:"Solid buttons: start + end",render:()=>e.jsx(u,{gap:4,children:["sm","md","lg"].map(n=>e.jsx(h,{label:`size="${n}"`,children:e.jsxs(r,{width:600,children:[e.jsx(o,{label:`Solid buttons ${n}`,size:n,dividers:["bottom"],startContent:e.jsx(t,{label:"New item",icon:e.jsx(x,{})}),endContent:e.jsx(t,{label:"Save"})}),e.jsx(c,{children:e.jsx(a,{})})]})},n))})},j={name:"Mixed: ghost start, solid end",render:()=>e.jsx(u,{gap:4,children:["sm","md","lg"].map(n=>e.jsx(h,{label:`size="${n}"`,children:e.jsxs(r,{width:600,children:[e.jsx(o,{label:`Mixed ${n}`,size:n,dividers:["bottom"],startContent:e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Back",variant:"ghost",icon:e.jsx(g,{}),isIconOnly:!0}),e.jsx(t,{label:"Edit",variant:"ghost"})]}),endContent:e.jsx(t,{label:"Save"})}),e.jsx(c,{children:e.jsx(a,{})})]})},n))})},v={name:"Mixed: solid start, ghost end",render:()=>e.jsx(u,{gap:4,children:["sm","md","lg"].map(n=>e.jsx(h,{label:`size="${n}"`,children:e.jsxs(r,{width:600,children:[e.jsx(o,{label:`Mixed ${n}`,size:n,dividers:["bottom"],startContent:e.jsx(t,{label:"New item",icon:e.jsx(x,{})}),endContent:e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Filter",variant:"ghost",icon:e.jsx(M,{}),isIconOnly:!0}),e.jsx(t,{label:"More",variant:"ghost",icon:e.jsx(N,{}),isIconOnly:!0})]})}),e.jsx(c,{children:e.jsx(a,{})})]})},n))})},C={name:"Heading start + ghost end",render:()=>e.jsx(u,{gap:4,children:["sm","md","lg"].map(n=>e.jsx(h,{label:`size="${n}"`,children:e.jsxs(r,{width:600,children:[e.jsx(o,{label:`Heading ${n}`,size:n,dividers:["bottom"],startContent:e.jsx(s,{level:4,children:"Section Title"}),endContent:e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Filter",variant:"ghost",icon:e.jsx(M,{}),isIconOnly:!0}),e.jsx(t,{label:"Add",variant:"ghost",icon:e.jsx(x,{}),isIconOnly:!0})]})}),e.jsx(c,{children:e.jsx(a,{})})]})},n))})},S={name:"Text start + ghost end",render:()=>e.jsxs(r,{width:600,children:[e.jsx(o,{label:"Text start",dividers:["bottom"],startContent:e.jsx(q,{type:"body",weight:"bold",children:"3 items selected"}),endContent:e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Delete",variant:"ghost"}),e.jsx(t,{label:"Archive",variant:"ghost"})]})}),e.jsx(c,{children:e.jsx(a,{})})]})},L={name:"Heading start + solid end",render:()=>e.jsxs(r,{width:600,children:[e.jsx(o,{label:"Heading solid",dividers:["bottom"],startContent:e.jsx(s,{level:4,children:"Project Settings"}),endContent:e.jsx(t,{label:"Save changes"})}),e.jsx(c,{children:e.jsx(a,{})})]})},B={name:"Layout: no contentWidth, ghost buttons",render:()=>e.jsx("div",{style:{height:400,border:"1px solid #e0e0e0",borderRadius:8},children:e.jsx(i,{header:e.jsx(l,{hasDivider:!0,padding:0,children:e.jsx(o,{label:"App header",startContent:e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Menu",variant:"ghost",icon:e.jsx(Y,{}),isIconOnly:!0}),e.jsx(s,{level:4,children:"Dashboard"})]}),endContent:e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Search",variant:"ghost",icon:e.jsx(R,{}),isIconOnly:!0}),e.jsx(t,{label:"Notifications",variant:"ghost",icon:e.jsx(U,{}),isIconOnly:!0}),e.jsx(t,{label:"Settings",variant:"ghost",icon:e.jsx(b,{}),isIconOnly:!0})]})})}),content:e.jsx(d,{children:e.jsx(a,{lines:6})})})})},I={name:"Layout: no contentWidth, solid buttons",render:()=>e.jsx("div",{style:{height:400,border:"1px solid #e0e0e0",borderRadius:8},children:e.jsx(i,{header:e.jsx(l,{hasDivider:!0,padding:0,children:e.jsx(o,{label:"App header",startContent:e.jsx(s,{level:4,children:"Dashboard"}),endContent:e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Cancel",variant:"secondary"}),e.jsx(t,{label:"Save"})]})})}),content:e.jsx(d,{children:e.jsx(a,{lines:6})})})})},T={name:"Layout: contentWidth=640, ghost buttons",render:()=>e.jsx("div",{style:{height:400,border:"1px solid #e0e0e0",borderRadius:8},children:e.jsx(i,{contentWidth:640,header:e.jsx(l,{hasDivider:!0,padding:0,children:e.jsx(o,{label:"Page header",startContent:e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Back",variant:"ghost",icon:e.jsx(g,{}),isIconOnly:!0}),e.jsx(s,{level:4,children:"Settings"})]}),endContent:e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Search",variant:"ghost",icon:e.jsx(R,{}),isIconOnly:!0}),e.jsx(t,{label:"More",variant:"ghost",icon:e.jsx(N,{}),isIconOnly:!0})]})})}),content:e.jsx(d,{children:e.jsx(a,{lines:6})})})})},O={name:"Layout: contentWidth=640, solid buttons",render:()=>e.jsx("div",{style:{height:400,border:"1px solid #e0e0e0",borderRadius:8},children:e.jsx(i,{contentWidth:640,header:e.jsx(l,{hasDivider:!0,padding:0,children:e.jsx(o,{label:"Page header",startContent:e.jsx(s,{level:4,children:"Settings"}),endContent:e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Cancel",variant:"secondary"}),e.jsx(t,{label:"Save"})]})})}),content:e.jsx(d,{children:e.jsx(a,{lines:6})})})})},w={name:"Layout: contentWidth=640, mixed",render:()=>e.jsx("div",{style:{height:400,border:"1px solid #e0e0e0",borderRadius:8},children:e.jsx(i,{contentWidth:640,header:e.jsx(l,{hasDivider:!0,padding:0,children:e.jsx(o,{label:"Page header",startContent:e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Back",variant:"ghost",icon:e.jsx(g,{}),isIconOnly:!0}),e.jsx(s,{level:4,children:"Edit Project"})]}),endContent:e.jsx(t,{label:"Save changes"})})}),content:e.jsx(d,{children:e.jsx(a,{lines:6})})})})},H={name:"Layout: contentWidth=960, ghost buttons",render:()=>e.jsx("div",{style:{height:400,border:"1px solid #e0e0e0",borderRadius:8},children:e.jsx(i,{contentWidth:960,header:e.jsx(l,{hasDivider:!0,padding:0,children:e.jsx(o,{label:"Dashboard header",startContent:e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Back",variant:"ghost",icon:e.jsx(V,{}),isIconOnly:!0}),e.jsx(s,{level:4,children:"Analytics Dashboard"})]}),endContent:e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Share",variant:"ghost",icon:e.jsx(X,{}),isIconOnly:!0}),e.jsx(t,{label:"Settings",variant:"ghost",icon:e.jsx(b,{}),isIconOnly:!0})]})})}),content:e.jsx(d,{children:e.jsx(a,{lines:6})})})})},f={name:"Layout: padding=4, ghost buttons",render:()=>e.jsx("div",{style:{height:400,border:"1px solid #e0e0e0",borderRadius:8},children:e.jsx(i,{padding:4,header:e.jsx(l,{hasDivider:!0,padding:0,children:e.jsx(o,{label:"Padded layout header",startContent:e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Back",variant:"ghost",icon:e.jsx(g,{}),isIconOnly:!0}),e.jsx(s,{level:4,children:"Padded Layout"})]}),endContent:e.jsx(t,{label:"Settings",variant:"ghost",icon:e.jsx(b,{}),isIconOnly:!0})})}),content:e.jsx(d,{children:e.jsx(a,{lines:6})})})})},W={name:"Layout: padding=4 + contentWidth=640",render:()=>e.jsx("div",{style:{height:400,border:"1px solid #e0e0e0",borderRadius:8},children:e.jsx(i,{padding:4,contentWidth:640,header:e.jsx(l,{hasDivider:!0,padding:0,children:e.jsx(o,{label:"Padded constrained header",startContent:e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Back",variant:"ghost",icon:e.jsx(g,{}),isIconOnly:!0}),e.jsx(s,{level:4,children:"Constrained + Padded"})]}),endContent:e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Share",variant:"ghost",icon:e.jsx(X,{}),isIconOnly:!0}),e.jsx(t,{label:"Settings",variant:"ghost",icon:e.jsx(b,{}),isIconOnly:!0})]})})}),content:e.jsx(d,{children:e.jsx(a,{lines:6})})})})},k={name:"Layout: header default padding + toolbar",render:()=>e.jsx("div",{style:{height:400,border:"1px solid #e0e0e0",borderRadius:8},children:e.jsx(i,{header:e.jsx(l,{hasDivider:!0,children:e.jsx(o,{label:"Double padded?",startContent:e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Back",variant:"ghost",icon:e.jsx(g,{}),isIconOnly:!0}),e.jsx(s,{level:4,children:"Double Padding Check"})]}),endContent:e.jsx(t,{label:"Settings",variant:"ghost",icon:e.jsx(b,{}),isIconOnly:!0})})}),content:e.jsx(d,{children:e.jsx(a,{lines:4})})})})},z={name:"Comparison: ghost vs solid alignment",render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:24},children:[e.jsx(h,{label:"Ghost buttons (should align flush)",children:e.jsxs(r,{children:[e.jsx(o,{label:"Ghost",dividers:["bottom"],startContent:e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Back",variant:"ghost",icon:e.jsx(g,{}),isIconOnly:!0}),e.jsx(t,{label:"Edit",variant:"ghost"})]}),endContent:e.jsx(t,{label:"More",variant:"ghost",icon:e.jsx(N,{}),isIconOnly:!0})}),e.jsx(c,{children:e.jsx(a,{})})]})}),e.jsx(h,{label:"Solid buttons (natural padding)",children:e.jsxs(r,{children:[e.jsx(o,{label:"Solid",dividers:["bottom"],startContent:e.jsx(t,{label:"New",icon:e.jsx(x,{})}),endContent:e.jsx(t,{label:"Save"})}),e.jsx(c,{children:e.jsx(a,{})})]})})]})},F={name:"Three-slot: ghost edges + center heading",render:()=>e.jsx(u,{gap:4,children:["sm","md","lg"].map(n=>e.jsx(h,{label:`size="${n}"`,children:e.jsxs(r,{width:700,children:[e.jsx(o,{label:`Three slot ${n}`,size:n,dividers:["bottom"],startContent:e.jsx(t,{label:"Back",variant:"ghost",icon:e.jsx(V,{}),isIconOnly:!0}),centerContent:e.jsx(s,{level:4,children:"Document Title"}),endContent:e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Share",variant:"ghost",icon:e.jsx(X,{}),isIconOnly:!0}),e.jsx(t,{label:"More",variant:"ghost",icon:e.jsx(N,{}),isIconOnly:!0})]})}),e.jsx(c,{children:e.jsx(a,{})})]})},n))})},G={name:"Three-slot: ghost start, solid end",render:()=>e.jsxs(r,{width:700,children:[e.jsx(o,{label:"Mixed three slot",dividers:["bottom"],startContent:e.jsx(t,{label:"Back",variant:"ghost",icon:e.jsx(V,{}),isIconOnly:!0}),centerContent:e.jsx(s,{level:4,children:"Page Title"}),endContent:e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Cancel",variant:"secondary"}),e.jsx(t,{label:"Publish"})]})}),e.jsx(c,{children:e.jsx(a,{})})]})},A={name:"Stress: stacked toolbar variants",render:()=>e.jsxs(r,{width:700,children:[e.jsx(o,{label:"Ghost both",size:"sm",dividers:["bottom"],startContent:e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Back",variant:"ghost",icon:e.jsx(g,{}),isIconOnly:!0}),e.jsx(s,{level:4,children:"Ghost + Heading"})]}),endContent:e.jsx(t,{label:"Settings",variant:"ghost",icon:e.jsx(b,{}),isIconOnly:!0})}),e.jsx(o,{label:"Solid both",size:"sm",dividers:["bottom"],startContent:e.jsx(t,{label:"Add",size:"sm",icon:e.jsx(x,{})}),endContent:e.jsx(t,{label:"Save",size:"sm"})}),e.jsx(o,{label:"Ghost start solid end",size:"sm",dividers:["bottom"],startContent:e.jsx(t,{label:"Back",variant:"ghost",icon:e.jsx(V,{}),isIconOnly:!0}),endContent:e.jsx(t,{label:"Next",size:"sm",icon:e.jsx(J,{})})}),e.jsx(o,{label:"Text start ghost end",size:"sm",dividers:["bottom"],startContent:e.jsx(q,{type:"body",weight:"bold",children:"Selection mode"}),endContent:e.jsx(t,{label:"Done",variant:"ghost"})}),e.jsx(c,{children:e.jsx(a,{lines:2})})]})},D={name:"Card > Layout(contentWidth) > Toolbar header",render:()=>e.jsxs(u,{gap:4,children:[e.jsx(h,{label:"contentWidth=640, ghost buttons",children:e.jsx(r,{width:900,children:e.jsx(i,{contentWidth:640,header:e.jsx(l,{hasDivider:!0,padding:0,children:e.jsx(o,{label:"Card layout header",startContent:e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Back",variant:"ghost",icon:e.jsx(g,{}),isIconOnly:!0}),e.jsx(s,{level:4,children:"Project Settings"})]}),endContent:e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Search",variant:"ghost",icon:e.jsx(R,{}),isIconOnly:!0}),e.jsx(t,{label:"Settings",variant:"ghost",icon:e.jsx(b,{}),isIconOnly:!0})]})})}),content:e.jsx(d,{children:e.jsx(a,{lines:4})})})})}),e.jsx(h,{label:"contentWidth=640, mixed (ghost start, solid end)",children:e.jsx(r,{width:900,children:e.jsx(i,{contentWidth:640,header:e.jsx(l,{hasDivider:!0,padding:0,children:e.jsx(o,{label:"Card layout header",startContent:e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Back",variant:"ghost",icon:e.jsx(g,{}),isIconOnly:!0}),e.jsx(s,{level:4,children:"Edit Document"})]}),endContent:e.jsx(t,{label:"Save changes"})})}),content:e.jsx(d,{children:e.jsx(a,{lines:4})})})})}),e.jsx(h,{label:"contentWidth=640, heading start, no end",children:e.jsx(r,{width:900,children:e.jsx(i,{contentWidth:640,header:e.jsx(l,{hasDivider:!0,padding:0,children:e.jsx(o,{label:"Card layout header",startContent:e.jsx(s,{level:4,children:"Notifications"})})}),content:e.jsx(d,{children:e.jsx(a,{lines:4})})})})})]})},P={name:"Card(12px) > Layout > Toolbar + body",render:()=>e.jsx(r,{width:700,padding:3,children:e.jsx(i,{header:e.jsx(l,{hasDivider:!0,padding:0,children:e.jsx(o,{label:"Card header",startContent:e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Back",variant:"ghost",icon:e.jsx(g,{}),isIconOnly:!0}),e.jsx(s,{level:4,children:"Project Settings"})]}),endContent:e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Search",variant:"ghost",icon:e.jsx(R,{}),isIconOnly:!0}),e.jsx(t,{label:"Settings",variant:"ghost",icon:e.jsx(b,{}),isIconOnly:!0})]})})}),content:e.jsx(d,{children:e.jsx(a,{lines:4})})})})},$={name:"Tabs in toolbar (all sizes)",render:()=>{const[n,E]=K.useState("overview");return e.jsx(u,{gap:4,children:["sm","md","lg"].map(m=>e.jsx(h,{label:`size="${m}"`,children:e.jsxs(r,{width:700,children:[e.jsx(o,{label:`Tab toolbar ${m}`,size:m,dividers:["bottom"],startContent:e.jsxs(Q,{value:n,onChange:E,children:[e.jsx(_,{value:"overview",label:"Overview"}),e.jsx(_,{value:"analytics",label:"Analytics"}),e.jsx(_,{value:"settings",label:"Settings"})]}),endContent:e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Filter",variant:"ghost",icon:e.jsx(M,{}),isIconOnly:!0}),e.jsx(t,{label:"Add",variant:"ghost",icon:e.jsx(x,{}),isIconOnly:!0})]})}),e.jsx(c,{children:e.jsx(a,{})})]})},m))})}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Ghost buttons: start + end',
  render: () => <VStack gap={4}>
      {(['sm', 'md', 'lg'] as const).map(size => <AlignmentGuide key={size} label={\`size="\${size}"\`}>
          <Card width={600}>
            <Toolbar label={\`Ghost buttons \${size}\`} size={size} dividers={['bottom']} startContent={<>
                  <Button label="Back" variant="ghost" icon={<ArrowLeftIcon />} isIconOnly />
                  <Button label="Edit" variant="ghost" />
                  <Button label="Share" variant="ghost" />
                </>} endContent={<>
                  <Button label="Filter" variant="ghost" icon={<FunnelIcon />} isIconOnly />
                  <Button label="Settings" variant="ghost" icon={<Cog6ToothIcon />} isIconOnly />
                </>} />
            <Section>
              <BodyContent />
            </Section>
          </Card>
        </AlignmentGuide>)}
    </VStack>
}`,...y.parameters?.docs?.source},description:{story:"Ghost buttons in start and end slots across all three sizes. The button text/icon should align flush with the container edge.",...y.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Solid buttons: start + end',
  render: () => <VStack gap={4}>
      {(['sm', 'md', 'lg'] as const).map(size => <AlignmentGuide key={size} label={\`size="\${size}"\`}>
          <Card width={600}>
            <Toolbar label={\`Solid buttons \${size}\`} size={size} dividers={['bottom']} startContent={<Button label="New item" icon={<PlusIcon />} />} endContent={<Button label="Save" />} />
            <Section>
              <BodyContent />
            </Section>
          </Card>
        </AlignmentGuide>)}
    </VStack>
}`,...p.parameters?.docs?.source},description:{story:"Solid (default) buttons at edges. These should NOT compensate — their padding is visually filled.",...p.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'Mixed: ghost start, solid end',
  render: () => <VStack gap={4}>
      {(['sm', 'md', 'lg'] as const).map(size => <AlignmentGuide key={size} label={\`size="\${size}"\`}>
          <Card width={600}>
            <Toolbar label={\`Mixed \${size}\`} size={size} dividers={['bottom']} startContent={<>
                  <Button label="Back" variant="ghost" icon={<ArrowLeftIcon />} isIconOnly />
                  <Button label="Edit" variant="ghost" />
                </>} endContent={<Button label="Save" />} />
            <Section>
              <BodyContent />
            </Section>
          </Card>
        </AlignmentGuide>)}
    </VStack>
}`,...j.parameters?.docs?.source},description:{story:"Ghost on start edge, solid on end. Only the start should compensate.",...j.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Mixed: solid start, ghost end',
  render: () => <VStack gap={4}>
      {(['sm', 'md', 'lg'] as const).map(size => <AlignmentGuide key={size} label={\`size="\${size}"\`}>
          <Card width={600}>
            <Toolbar label={\`Mixed \${size}\`} size={size} dividers={['bottom']} startContent={<Button label="New item" icon={<PlusIcon />} />} endContent={<>
                  <Button label="Filter" variant="ghost" icon={<FunnelIcon />} isIconOnly />
                  <Button label="More" variant="ghost" icon={<EllipsisHorizontalIcon />} isIconOnly />
                </>} />
            <Section>
              <BodyContent />
            </Section>
          </Card>
        </AlignmentGuide>)}
    </VStack>
}`,...v.parameters?.docs?.source},description:{story:"Solid on start edge, ghost on end. Only the end should compensate.",...v.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Heading start + ghost end',
  render: () => <VStack gap={4}>
      {(['sm', 'md', 'lg'] as const).map(size => <AlignmentGuide key={size} label={\`size="\${size}"\`}>
          <Card width={600}>
            <Toolbar label={\`Heading \${size}\`} size={size} dividers={['bottom']} startContent={<Heading level={4}>Section Title</Heading>} endContent={<>
                  <Button label="Filter" variant="ghost" icon={<FunnelIcon />} isIconOnly />
                  <Button label="Add" variant="ghost" icon={<PlusIcon />} isIconOnly />
                </>} />
            <Section>
              <BodyContent />
            </Section>
          </Card>
        </AlignmentGuide>)}
    </VStack>
}`,...C.parameters?.docs?.source},description:{story:"Heading in start slot with ghost buttons at end. Check heading alignment with body text below.",...C.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Text start + ghost end',
  render: () => <Card width={600}>
      <Toolbar label="Text start" dividers={['bottom']} startContent={<Text type="body" weight="bold">
            3 items selected
          </Text>} endContent={<>
            <Button label="Delete" variant="ghost" />
            <Button label="Archive" variant="ghost" />
          </>} />
      <Section>
        <BodyContent />
      </Section>
    </Card>
}`,...S.parameters?.docs?.source},description:{story:"Text (not heading) in start slot with ghost buttons.",...S.parameters?.docs?.description}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'Heading start + solid end',
  render: () => <Card width={600}>
      <Toolbar label="Heading solid" dividers={['bottom']} startContent={<Heading level={4}>Project Settings</Heading>} endContent={<Button label="Save changes" />} />
      <Section>
        <BodyContent />
      </Section>
    </Card>
}`,...L.parameters?.docs?.source},description:{story:"Heading on start, solid on end. No edge compensation on buttons — check heading vs body alignment.",...L.parameters?.docs?.description}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'Layout: no contentWidth, ghost buttons',
  render: () => <div style={{
    height: 400,
    border: '1px solid #e0e0e0',
    borderRadius: 8
  }}>
      <Layout header={<LayoutHeader hasDivider padding={0}>
            <Toolbar label="App header" startContent={<>
                  <Button label="Menu" variant="ghost" icon={<Squares2X2Icon />} isIconOnly />
                  <Heading level={4}>Dashboard</Heading>
                </>} endContent={<>
                  <Button label="Search" variant="ghost" icon={<MagnifyingGlassIcon />} isIconOnly />
                  <Button label="Notifications" variant="ghost" icon={<BellIcon />} isIconOnly />
                  <Button label="Settings" variant="ghost" icon={<Cog6ToothIcon />} isIconOnly />
                </>} />
          </LayoutHeader>} content={<LayoutContent>
            <BodyContent lines={6} />
          </LayoutContent>} />
    </div>
}`,...B.parameters?.docs?.source},description:{story:"Toolbar in Layout header, no contentWidth. Full-width toolbar, edge compensation normal.",...B.parameters?.docs?.description}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'Layout: no contentWidth, solid buttons',
  render: () => <div style={{
    height: 400,
    border: '1px solid #e0e0e0',
    borderRadius: 8
  }}>
      <Layout header={<LayoutHeader hasDivider padding={0}>
            <Toolbar label="App header" startContent={<Heading level={4}>Dashboard</Heading>} endContent={<>
                  <Button label="Cancel" variant="secondary" />
                  <Button label="Save" />
                </>} />
          </LayoutHeader>} content={<LayoutContent>
            <BodyContent lines={6} />
          </LayoutContent>} />
    </div>
}`,...I.parameters?.docs?.source},description:{story:"Same without contentWidth but solid buttons for baseline comparison.",...I.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Layout: contentWidth=640, ghost buttons',
  render: () => <div style={{
    height: 400,
    border: '1px solid #e0e0e0',
    borderRadius: 8
  }}>
      <Layout contentWidth={640} header={<LayoutHeader hasDivider padding={0}>
            <Toolbar label="Page header" startContent={<>
                  <Button label="Back" variant="ghost" icon={<ArrowLeftIcon />} isIconOnly />
                  <Heading level={4}>Settings</Heading>
                </>} endContent={<>
                  <Button label="Search" variant="ghost" icon={<MagnifyingGlassIcon />} isIconOnly />
                  <Button label="More" variant="ghost" icon={<EllipsisHorizontalIcon />} isIconOnly />
                </>} />
          </LayoutHeader>} content={<LayoutContent>
            <BodyContent lines={6} />
          </LayoutContent>} />
    </div>
}`,...T.parameters?.docs?.source},description:{story:"Toolbar in Layout with contentWidth=640. Header is full bleed, body is constrained. Ghost buttons should still align flush.",...T.parameters?.docs?.description}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Layout: contentWidth=640, solid buttons',
  render: () => <div style={{
    height: 400,
    border: '1px solid #e0e0e0',
    borderRadius: 8
  }}>
      <Layout contentWidth={640} header={<LayoutHeader hasDivider padding={0}>
            <Toolbar label="Page header" startContent={<Heading level={4}>Settings</Heading>} endContent={<>
                  <Button label="Cancel" variant="secondary" />
                  <Button label="Save" />
                </>} />
          </LayoutHeader>} content={<LayoutContent>
            <BodyContent lines={6} />
          </LayoutContent>} />
    </div>
}`,...O.parameters?.docs?.source},description:{story:"Same with contentWidth but solid buttons for comparison.",...O.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Layout: contentWidth=640, mixed',
  render: () => <div style={{
    height: 400,
    border: '1px solid #e0e0e0',
    borderRadius: 8
  }}>
      <Layout contentWidth={640} header={<LayoutHeader hasDivider padding={0}>
            <Toolbar label="Page header" startContent={<>
                  <Button label="Back" variant="ghost" icon={<ArrowLeftIcon />} isIconOnly />
                  <Heading level={4}>Edit Project</Heading>
                </>} endContent={<Button label="Save changes" />} />
          </LayoutHeader>} content={<LayoutContent>
            <BodyContent lines={6} />
          </LayoutContent>} />
    </div>
}`,...w.parameters?.docs?.source},description:{story:"Mixed ghost/solid with contentWidth — ghost start, solid end.",...w.parameters?.docs?.description}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: 'Layout: contentWidth=960, ghost buttons',
  render: () => <div style={{
    height: 400,
    border: '1px solid #e0e0e0',
    borderRadius: 8
  }}>
      <Layout contentWidth={960} header={<LayoutHeader hasDivider padding={0}>
            <Toolbar label="Dashboard header" startContent={<>
                  <Button label="Back" variant="ghost" icon={<ChevronLeftIcon />} isIconOnly />
                  <Heading level={4}>Analytics Dashboard</Heading>
                </>} endContent={<>
                  <Button label="Share" variant="ghost" icon={<ShareIcon />} isIconOnly />
                  <Button label="Settings" variant="ghost" icon={<Cog6ToothIcon />} isIconOnly />
                </>} />
          </LayoutHeader>} content={<LayoutContent>
            <BodyContent lines={6} />
          </LayoutContent>} />
    </div>
}`,...H.parameters?.docs?.source},description:{story:"contentWidth=960, ghost buttons. Common for dashboards.",...H.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Layout: padding=4, ghost buttons',
  render: () => <div style={{
    height: 400,
    border: '1px solid #e0e0e0',
    borderRadius: 8
  }}>
      <Layout padding={4} header={<LayoutHeader hasDivider padding={0}>
            <Toolbar label="Padded layout header" startContent={<>
                  <Button label="Back" variant="ghost" icon={<ArrowLeftIcon />} isIconOnly />
                  <Heading level={4}>Padded Layout</Heading>
                </>} endContent={<Button label="Settings" variant="ghost" icon={<Cog6ToothIcon />} isIconOnly />} />
          </LayoutHeader>} content={<LayoutContent>
            <BodyContent lines={6} />
          </LayoutContent>} />
    </div>
}`,...f.parameters?.docs?.source},description:{story:"Layout with padding=4 and ghost toolbar. Layout outer padding interacts with toolbar edge compensation.",...f.parameters?.docs?.description}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: 'Layout: padding=4 + contentWidth=640',
  render: () => <div style={{
    height: 400,
    border: '1px solid #e0e0e0',
    borderRadius: 8
  }}>
      <Layout padding={4} contentWidth={640} header={<LayoutHeader hasDivider padding={0}>
            <Toolbar label="Padded constrained header" startContent={<>
                  <Button label="Back" variant="ghost" icon={<ArrowLeftIcon />} isIconOnly />
                  <Heading level={4}>Constrained + Padded</Heading>
                </>} endContent={<>
                  <Button label="Share" variant="ghost" icon={<ShareIcon />} isIconOnly />
                  <Button label="Settings" variant="ghost" icon={<Cog6ToothIcon />} isIconOnly />
                </>} />
          </LayoutHeader>} content={<LayoutContent>
            <BodyContent lines={6} />
          </LayoutContent>} />
    </div>
}`,...W.parameters?.docs?.source},description:{story:"Layout with padding + contentWidth together. Both constraints active.",...W.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Layout: header default padding + toolbar',
  render: () => <div style={{
    height: 400,
    border: '1px solid #e0e0e0',
    borderRadius: 8
  }}>
      <Layout header={<LayoutHeader hasDivider>
            <Toolbar label="Double padded?" startContent={<>
                  <Button label="Back" variant="ghost" icon={<ArrowLeftIcon />} isIconOnly />
                  <Heading level={4}>Double Padding Check</Heading>
                </>} endContent={<Button label="Settings" variant="ghost" icon={<Cog6ToothIcon />} isIconOnly />} />
          </LayoutHeader>} content={<LayoutContent>
            <BodyContent lines={4} />
          </LayoutContent>} />
    </div>
}`,...k.parameters?.docs?.source},description:{story:"Toolbar inside LayoutHeader using the header's default padding (not padding={0}). Potential double-padding issue.",...k.parameters?.docs?.description}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: 'Comparison: ghost vs solid alignment',
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 24
  }}>
      <AlignmentGuide label="Ghost buttons (should align flush)">
        <Card>
          <Toolbar label="Ghost" dividers={['bottom']} startContent={<>
                <Button label="Back" variant="ghost" icon={<ArrowLeftIcon />} isIconOnly />
                <Button label="Edit" variant="ghost" />
              </>} endContent={<Button label="More" variant="ghost" icon={<EllipsisHorizontalIcon />} isIconOnly />} />
          <Section>
            <BodyContent />
          </Section>
        </Card>
      </AlignmentGuide>
      <AlignmentGuide label="Solid buttons (natural padding)">
        <Card>
          <Toolbar label="Solid" dividers={['bottom']} startContent={<Button label="New" icon={<PlusIcon />} />} endContent={<Button label="Save" />} />
          <Section>
            <BodyContent />
          </Section>
        </Card>
      </AlignmentGuide>
    </div>
}`,...z.parameters?.docs?.source},description:{story:"Direct visual comparison: ghost vs solid, with body content for alignment reference.",...z.parameters?.docs?.description}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: 'Three-slot: ghost edges + center heading',
  render: () => <VStack gap={4}>
      {(['sm', 'md', 'lg'] as const).map(size => <AlignmentGuide key={size} label={\`size="\${size}"\`}>
          <Card width={700}>
            <Toolbar label={\`Three slot \${size}\`} size={size} dividers={['bottom']} startContent={<Button label="Back" variant="ghost" icon={<ChevronLeftIcon />} isIconOnly />} centerContent={<Heading level={4}>Document Title</Heading>} endContent={<>
                  <Button label="Share" variant="ghost" icon={<ShareIcon />} isIconOnly />
                  <Button label="More" variant="ghost" icon={<EllipsisHorizontalIcon />} isIconOnly />
                </>} />
            <Section>
              <BodyContent />
            </Section>
          </Card>
        </AlignmentGuide>)}
    </VStack>
}`,...F.parameters?.docs?.source},description:{story:"Three-slot (center content) with ghost buttons at both edges. Center stays centered.",...F.parameters?.docs?.description}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: 'Three-slot: ghost start, solid end',
  render: () => <Card width={700}>
      <Toolbar label="Mixed three slot" dividers={['bottom']} startContent={<Button label="Back" variant="ghost" icon={<ChevronLeftIcon />} isIconOnly />} centerContent={<Heading level={4}>Page Title</Heading>} endContent={<>
            <Button label="Cancel" variant="secondary" />
            <Button label="Publish" />
          </>} />
      <Section>
        <BodyContent />
      </Section>
    </Card>
}`,...G.parameters?.docs?.source},description:{story:"Three-slot: ghost start, center heading, solid end.",...G.parameters?.docs?.description}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'Stress: stacked toolbar variants',
  render: () => <Card width={700}>
      <Toolbar label="Ghost both" size="sm" dividers={['bottom']} startContent={<>
            <Button label="Back" variant="ghost" icon={<ArrowLeftIcon />} isIconOnly />
            <Heading level={4}>Ghost + Heading</Heading>
          </>} endContent={<Button label="Settings" variant="ghost" icon={<Cog6ToothIcon />} isIconOnly />} />
      <Toolbar label="Solid both" size="sm" dividers={['bottom']} startContent={<Button label="Add" size="sm" icon={<PlusIcon />} />} endContent={<Button label="Save" size="sm" />} />
      <Toolbar label="Ghost start solid end" size="sm" dividers={['bottom']} startContent={<Button label="Back" variant="ghost" icon={<ChevronLeftIcon />} isIconOnly />} endContent={<Button label="Next" size="sm" icon={<ChevronRightIcon />} />} />
      <Toolbar label="Text start ghost end" size="sm" dividers={['bottom']} startContent={<Text type="body" weight="bold">
            Selection mode
          </Text>} endContent={<Button label="Done" variant="ghost" />} />
      <Section>
        <BodyContent lines={2} />
      </Section>
    </Card>
}`,...A.parameters?.docs?.source},description:{story:"Multiple toolbars stacked — checks edge compensation consistency across adjacent toolbars with different content types.",...A.parameters?.docs?.description}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Card > Layout(contentWidth) > Toolbar header',
  render: () => <VStack gap={4}>
      <AlignmentGuide label="contentWidth=640, ghost buttons">
        <Card width={900}>
          <Layout contentWidth={640} header={<LayoutHeader hasDivider padding={0}>
                <Toolbar label="Card layout header" startContent={<>
                      <Button label="Back" variant="ghost" icon={<ArrowLeftIcon />} isIconOnly />
                      <Heading level={4}>Project Settings</Heading>
                    </>} endContent={<>
                      <Button label="Search" variant="ghost" icon={<MagnifyingGlassIcon />} isIconOnly />
                      <Button label="Settings" variant="ghost" icon={<Cog6ToothIcon />} isIconOnly />
                    </>} />
              </LayoutHeader>} content={<LayoutContent>
                <BodyContent lines={4} />
              </LayoutContent>} />
        </Card>
      </AlignmentGuide>
      <AlignmentGuide label="contentWidth=640, mixed (ghost start, solid end)">
        <Card width={900}>
          <Layout contentWidth={640} header={<LayoutHeader hasDivider padding={0}>
                <Toolbar label="Card layout header" startContent={<>
                      <Button label="Back" variant="ghost" icon={<ArrowLeftIcon />} isIconOnly />
                      <Heading level={4}>Edit Document</Heading>
                    </>} endContent={<Button label="Save changes" />} />
              </LayoutHeader>} content={<LayoutContent>
                <BodyContent lines={4} />
              </LayoutContent>} />
        </Card>
      </AlignmentGuide>
      <AlignmentGuide label="contentWidth=640, heading start, no end">
        <Card width={900}>
          <Layout contentWidth={640} header={<LayoutHeader hasDivider padding={0}>
                <Toolbar label="Card layout header" startContent={<Heading level={4}>Notifications</Heading>} />
              </LayoutHeader>} content={<LayoutContent>
                <BodyContent lines={4} />
              </LayoutContent>} />
        </Card>
      </AlignmentGuide>
    </VStack>
}`,...D.parameters?.docs?.source},description:{story:"Card wrapping a Layout with contentWidth. Toolbar lives in the LayoutHeader. Tests the full nesting chain: Card padding → Layout bleed → contentWidth constraint → toolbar edge compensation.",...D.parameters?.docs?.description}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: 'Card(12px) > Layout > Toolbar + body',
  render: () => <Card width={700} padding={3}>
      <Layout header={<LayoutHeader hasDivider padding={0}>
            <Toolbar label="Card header" startContent={<>
                  <Button label="Back" variant="ghost" icon={<ArrowLeftIcon />} isIconOnly />
                  <Heading level={4}>Project Settings</Heading>
                </>} endContent={<>
                  <Button label="Search" variant="ghost" icon={<MagnifyingGlassIcon />} isIconOnly />
                  <Button label="Settings" variant="ghost" icon={<Cog6ToothIcon />} isIconOnly />
                </>} />
          </LayoutHeader>} content={<LayoutContent>
            <BodyContent lines={4} />
          </LayoutContent>} />
    </Card>
}`,...P.parameters?.docs?.source},description:{story:"Card with 12px padding wrapping a Layout. Toolbar in header, body text in content. Tests that toolbar edge compensation aligns with body text when the card has non-default (smaller) padding.",...P.parameters?.docs?.description}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  name: 'Tabs in toolbar (all sizes)',
  render: () => {
    const [tab, setTab] = useState('overview');
    return <VStack gap={4}>
        {(['sm', 'md', 'lg'] as const).map(size => <AlignmentGuide key={size} label={\`size="\${size}"\`}>
            <Card width={700}>
              <Toolbar label={\`Tab toolbar \${size}\`} size={size} dividers={['bottom']} startContent={<TabList value={tab} onChange={setTab}>
                    <Tab value="overview" label="Overview" />
                    <Tab value="analytics" label="Analytics" />
                    <Tab value="settings" label="Settings" />
                  </TabList>} endContent={<>
                    <Button label="Filter" variant="ghost" icon={<FunnelIcon />} isIconOnly />
                    <Button label="Add" variant="ghost" icon={<PlusIcon />} isIconOnly />
                  </>} />
              <Section>
                <BodyContent />
              </Section>
            </Card>
          </AlignmentGuide>)}
      </VStack>;
  }
}`,...$.parameters?.docs?.source},description:{story:"Toolbar with tab navigation. Size prop on toolbar cascades to tabs and buttons via SizeContext.",...$.parameters?.docs?.description}}};const Se=["GhostButtonsBothEdges","SolidButtonsBothEdges","GhostStartSolidEnd","SolidStartGhostEnd","HeadingStartGhostEnd","TextStartGhostEnd","HeadingStartSolidEnd","LayoutNoContentWidth","LayoutNoContentWidthSolid","LayoutWithContentWidth","LayoutWithContentWidthSolid","LayoutWithContentWidthMixed","LayoutContentWidth960","LayoutWithPadding","LayoutWithPaddingAndContentWidth","LayoutHeaderDefaultPadding","SideBySideComparison","ThreeSlotGhostEdges","ThreeSlotMixed","StackedVariants","CardLayoutContentWidthToolbar","CardSmallPaddingLayoutToolbar","WithTabs"];export{D as CardLayoutContentWidthToolbar,P as CardSmallPaddingLayoutToolbar,y as GhostButtonsBothEdges,j as GhostStartSolidEnd,C as HeadingStartGhostEnd,L as HeadingStartSolidEnd,H as LayoutContentWidth960,k as LayoutHeaderDefaultPadding,B as LayoutNoContentWidth,I as LayoutNoContentWidthSolid,T as LayoutWithContentWidth,w as LayoutWithContentWidthMixed,O as LayoutWithContentWidthSolid,f as LayoutWithPadding,W as LayoutWithPaddingAndContentWidth,z as SideBySideComparison,p as SolidButtonsBothEdges,v as SolidStartGhostEnd,A as StackedVariants,S as TextStartGhostEnd,F as ThreeSlotGhostEdges,G as ThreeSlotMixed,$ as WithTabs,Se as __namedExportsOrder,Ce as default};
