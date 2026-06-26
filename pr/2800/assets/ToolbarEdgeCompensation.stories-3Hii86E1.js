import{ad as e,X as t,b as E,c as R,d as M,e as V,f as J,r as _,at as K}from"./iframe-yRFQ_7VC.js";import{X as o}from"./XDSToolbar-DqTezkuX.js";import{X as r}from"./XDSCard-CyDoBnn3.js";import{X as c}from"./XDSSection-C0P8UZDV.js";import{a as Q,X as N}from"./XDSTab-CU6s1iLz.js";import{X as i,b as d}from"./XDSLayoutContent-DBrMIkuH.js";import{X as l}from"./XDSLayoutHeader-ByHa8jrV.js";import{X as u}from"./XDSVStack-uMCoSZ_B.js";import{F as S}from"./Cog6ToothIcon-FIJug-Ow.js";import{F as g}from"./ArrowLeftIcon-CMSCn2ws.js";import{X as s}from"./XDSHeading---Kr4LhL.js";import{F as m}from"./PlusIcon-BOlsoorq.js";import{F as q}from"./ShareIcon-bWFHrdZW.js";import{F as U}from"./BellIcon-BTy9GmgZ.js";import{F as Y}from"./Squares2X2Icon-CYQinxmb.js";import"./preload-helper-Ct5FWWRu.js";import"./useListFocus-C2Hg4nex.js";import"./container.stylex-BI6SFdSl.js";import"./padding.stylex-BDg7w1Mn.js";import"./stack.stylex-5XIQDawT.js";import"./stackItem.stylex-CYo-hkeX.js";import"./XDSStack-CFJ7xIVk.js";const je={title:"Core/ToolbarEdgeCompensation",component:o,parameters:{layout:"padded"}};function h({children:n,label:$}){return e.jsxs("div",{children:[e.jsx("div",{style:{marginBottom:8,fontSize:12,color:"#666"},children:$}),n]})}function a({lines:n=3}){return e.jsx(u,{gap:2,children:Array.from({length:n},($,b)=>e.jsx(_,{type:"body",children:b===0?"Body content should align with the toolbar text or button labels above.":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore."},b))})}const x={name:"Ghost buttons: start + end",render:()=>e.jsx(u,{gap:4,children:["sm","md","lg"].map(n=>e.jsx(h,{label:`size="${n}"`,children:e.jsxs(r,{width:600,children:[e.jsx(o,{label:`Ghost buttons ${n}`,size:n,dividers:["bottom"],startContent:e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Back",variant:"ghost",icon:e.jsx(g,{}),isIconOnly:!0}),e.jsx(t,{label:"Edit",variant:"ghost"}),e.jsx(t,{label:"Share",variant:"ghost"})]}),endContent:e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Filter",variant:"ghost",icon:e.jsx(R,{}),isIconOnly:!0}),e.jsx(t,{label:"Settings",variant:"ghost",icon:e.jsx(S,{}),isIconOnly:!0})]})}),e.jsx(c,{children:e.jsx(a,{})})]})},n))})},D={name:"Solid buttons: start + end",render:()=>e.jsx(u,{gap:4,children:["sm","md","lg"].map(n=>e.jsx(h,{label:`size="${n}"`,children:e.jsxs(r,{width:600,children:[e.jsx(o,{label:`Solid buttons ${n}`,size:n,dividers:["bottom"],startContent:e.jsx(t,{label:"New item",icon:e.jsx(m,{})}),endContent:e.jsx(t,{label:"Save"})}),e.jsx(c,{children:e.jsx(a,{})})]})},n))})},y={name:"Mixed: ghost start, solid end",render:()=>e.jsx(u,{gap:4,children:["sm","md","lg"].map(n=>e.jsx(h,{label:`size="${n}"`,children:e.jsxs(r,{width:600,children:[e.jsx(o,{label:`Mixed ${n}`,size:n,dividers:["bottom"],startContent:e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Back",variant:"ghost",icon:e.jsx(g,{}),isIconOnly:!0}),e.jsx(t,{label:"Edit",variant:"ghost"})]}),endContent:e.jsx(t,{label:"Save"})}),e.jsx(c,{children:e.jsx(a,{})})]})},n))})},p={name:"Mixed: solid start, ghost end",render:()=>e.jsx(u,{gap:4,children:["sm","md","lg"].map(n=>e.jsx(h,{label:`size="${n}"`,children:e.jsxs(r,{width:600,children:[e.jsx(o,{label:`Mixed ${n}`,size:n,dividers:["bottom"],startContent:e.jsx(t,{label:"New item",icon:e.jsx(m,{})}),endContent:e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Filter",variant:"ghost",icon:e.jsx(R,{}),isIconOnly:!0}),e.jsx(t,{label:"More",variant:"ghost",icon:e.jsx(V,{}),isIconOnly:!0})]})}),e.jsx(c,{children:e.jsx(a,{})})]})},n))})},j={name:"Heading start + ghost end",render:()=>e.jsx(u,{gap:4,children:["sm","md","lg"].map(n=>e.jsx(h,{label:`size="${n}"`,children:e.jsxs(r,{width:600,children:[e.jsx(o,{label:`Heading ${n}`,size:n,dividers:["bottom"],startContent:e.jsx(s,{level:4,children:"Section Title"}),endContent:e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Filter",variant:"ghost",icon:e.jsx(R,{}),isIconOnly:!0}),e.jsx(t,{label:"Add",variant:"ghost",icon:e.jsx(m,{}),isIconOnly:!0})]})}),e.jsx(c,{children:e.jsx(a,{})})]})},n))})},X={name:"Text start + ghost end",render:()=>e.jsxs(r,{width:600,children:[e.jsx(o,{label:"Text start",dividers:["bottom"],startContent:e.jsx(_,{type:"body",weight:"bold",children:"3 items selected"}),endContent:e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Delete",variant:"ghost"}),e.jsx(t,{label:"Archive",variant:"ghost"})]})}),e.jsx(c,{children:e.jsx(a,{})})]})},v={name:"Heading start + solid end",render:()=>e.jsxs(r,{width:600,children:[e.jsx(o,{label:"Heading solid",dividers:["bottom"],startContent:e.jsx(s,{level:4,children:"Project Settings"}),endContent:e.jsx(t,{label:"Save changes"})}),e.jsx(c,{children:e.jsx(a,{})})]})},C={name:"Layout: no contentWidth, ghost buttons",render:()=>e.jsx("div",{style:{height:400,border:"1px solid #e0e0e0",borderRadius:8},children:e.jsx(i,{header:e.jsx(l,{hasDivider:!0,padding:0,children:e.jsx(o,{label:"App header",startContent:e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Menu",variant:"ghost",icon:e.jsx(Y,{}),isIconOnly:!0}),e.jsx(s,{level:4,children:"Dashboard"})]}),endContent:e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Search",variant:"ghost",icon:e.jsx(E,{}),isIconOnly:!0}),e.jsx(t,{label:"Notifications",variant:"ghost",icon:e.jsx(U,{}),isIconOnly:!0}),e.jsx(t,{label:"Settings",variant:"ghost",icon:e.jsx(S,{}),isIconOnly:!0})]})})}),content:e.jsx(d,{children:e.jsx(a,{lines:6})})})})},L={name:"Layout: no contentWidth, solid buttons",render:()=>e.jsx("div",{style:{height:400,border:"1px solid #e0e0e0",borderRadius:8},children:e.jsx(i,{header:e.jsx(l,{hasDivider:!0,padding:0,children:e.jsx(o,{label:"App header",startContent:e.jsx(s,{level:4,children:"Dashboard"}),endContent:e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Cancel",variant:"secondary"}),e.jsx(t,{label:"Save"})]})})}),content:e.jsx(d,{children:e.jsx(a,{lines:6})})})})},B={name:"Layout: contentWidth=640, ghost buttons",render:()=>e.jsx("div",{style:{height:400,border:"1px solid #e0e0e0",borderRadius:8},children:e.jsx(i,{contentWidth:640,header:e.jsx(l,{hasDivider:!0,padding:0,children:e.jsx(o,{label:"Page header",startContent:e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Back",variant:"ghost",icon:e.jsx(g,{}),isIconOnly:!0}),e.jsx(s,{level:4,children:"Settings"})]}),endContent:e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Search",variant:"ghost",icon:e.jsx(E,{}),isIconOnly:!0}),e.jsx(t,{label:"More",variant:"ghost",icon:e.jsx(V,{}),isIconOnly:!0})]})})}),content:e.jsx(d,{children:e.jsx(a,{lines:6})})})})},I={name:"Layout: contentWidth=640, solid buttons",render:()=>e.jsx("div",{style:{height:400,border:"1px solid #e0e0e0",borderRadius:8},children:e.jsx(i,{contentWidth:640,header:e.jsx(l,{hasDivider:!0,padding:0,children:e.jsx(o,{label:"Page header",startContent:e.jsx(s,{level:4,children:"Settings"}),endContent:e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Cancel",variant:"secondary"}),e.jsx(t,{label:"Save"})]})})}),content:e.jsx(d,{children:e.jsx(a,{lines:6})})})})},T={name:"Layout: contentWidth=640, mixed",render:()=>e.jsx("div",{style:{height:400,border:"1px solid #e0e0e0",borderRadius:8},children:e.jsx(i,{contentWidth:640,header:e.jsx(l,{hasDivider:!0,padding:0,children:e.jsx(o,{label:"Page header",startContent:e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Back",variant:"ghost",icon:e.jsx(g,{}),isIconOnly:!0}),e.jsx(s,{level:4,children:"Edit Project"})]}),endContent:e.jsx(t,{label:"Save changes"})})}),content:e.jsx(d,{children:e.jsx(a,{lines:6})})})})},O={name:"Layout: contentWidth=960, ghost buttons",render:()=>e.jsx("div",{style:{height:400,border:"1px solid #e0e0e0",borderRadius:8},children:e.jsx(i,{contentWidth:960,header:e.jsx(l,{hasDivider:!0,padding:0,children:e.jsx(o,{label:"Dashboard header",startContent:e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Back",variant:"ghost",icon:e.jsx(M,{}),isIconOnly:!0}),e.jsx(s,{level:4,children:"Analytics Dashboard"})]}),endContent:e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Share",variant:"ghost",icon:e.jsx(q,{}),isIconOnly:!0}),e.jsx(t,{label:"Settings",variant:"ghost",icon:e.jsx(S,{}),isIconOnly:!0})]})})}),content:e.jsx(d,{children:e.jsx(a,{lines:6})})})})},w={name:"Layout: padding=4, ghost buttons",render:()=>e.jsx("div",{style:{height:400,border:"1px solid #e0e0e0",borderRadius:8},children:e.jsx(i,{padding:4,header:e.jsx(l,{hasDivider:!0,padding:0,children:e.jsx(o,{label:"Padded layout header",startContent:e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Back",variant:"ghost",icon:e.jsx(g,{}),isIconOnly:!0}),e.jsx(s,{level:4,children:"Padded Layout"})]}),endContent:e.jsx(t,{label:"Settings",variant:"ghost",icon:e.jsx(S,{}),isIconOnly:!0})})}),content:e.jsx(d,{children:e.jsx(a,{lines:6})})})})},H={name:"Layout: padding=4 + contentWidth=640",render:()=>e.jsx("div",{style:{height:400,border:"1px solid #e0e0e0",borderRadius:8},children:e.jsx(i,{padding:4,contentWidth:640,header:e.jsx(l,{hasDivider:!0,padding:0,children:e.jsx(o,{label:"Padded constrained header",startContent:e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Back",variant:"ghost",icon:e.jsx(g,{}),isIconOnly:!0}),e.jsx(s,{level:4,children:"Constrained + Padded"})]}),endContent:e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Share",variant:"ghost",icon:e.jsx(q,{}),isIconOnly:!0}),e.jsx(t,{label:"Settings",variant:"ghost",icon:e.jsx(S,{}),isIconOnly:!0})]})})}),content:e.jsx(d,{children:e.jsx(a,{lines:6})})})})},f={name:"Layout: header default padding + toolbar",render:()=>e.jsx("div",{style:{height:400,border:"1px solid #e0e0e0",borderRadius:8},children:e.jsx(i,{header:e.jsx(l,{hasDivider:!0,children:e.jsx(o,{label:"Double padded?",startContent:e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Back",variant:"ghost",icon:e.jsx(g,{}),isIconOnly:!0}),e.jsx(s,{level:4,children:"Double Padding Check"})]}),endContent:e.jsx(t,{label:"Settings",variant:"ghost",icon:e.jsx(S,{}),isIconOnly:!0})})}),content:e.jsx(d,{children:e.jsx(a,{lines:4})})})})},W={name:"Comparison: ghost vs solid alignment",render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:24},children:[e.jsx(h,{label:"Ghost buttons (should align flush)",children:e.jsxs(r,{children:[e.jsx(o,{label:"Ghost",dividers:["bottom"],startContent:e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Back",variant:"ghost",icon:e.jsx(g,{}),isIconOnly:!0}),e.jsx(t,{label:"Edit",variant:"ghost"})]}),endContent:e.jsx(t,{label:"More",variant:"ghost",icon:e.jsx(V,{}),isIconOnly:!0})}),e.jsx(c,{children:e.jsx(a,{})})]})}),e.jsx(h,{label:"Solid buttons (natural padding)",children:e.jsxs(r,{children:[e.jsx(o,{label:"Solid",dividers:["bottom"],startContent:e.jsx(t,{label:"New",icon:e.jsx(m,{})}),endContent:e.jsx(t,{label:"Save"})}),e.jsx(c,{children:e.jsx(a,{})})]})})]})},k={name:"Three-slot: ghost edges + center heading",render:()=>e.jsx(u,{gap:4,children:["sm","md","lg"].map(n=>e.jsx(h,{label:`size="${n}"`,children:e.jsxs(r,{width:700,children:[e.jsx(o,{label:`Three slot ${n}`,size:n,dividers:["bottom"],startContent:e.jsx(t,{label:"Back",variant:"ghost",icon:e.jsx(M,{}),isIconOnly:!0}),centerContent:e.jsx(s,{level:4,children:"Document Title"}),endContent:e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Share",variant:"ghost",icon:e.jsx(q,{}),isIconOnly:!0}),e.jsx(t,{label:"More",variant:"ghost",icon:e.jsx(V,{}),isIconOnly:!0})]})}),e.jsx(c,{children:e.jsx(a,{})})]})},n))})},z={name:"Three-slot: ghost start, solid end",render:()=>e.jsxs(r,{width:700,children:[e.jsx(o,{label:"Mixed three slot",dividers:["bottom"],startContent:e.jsx(t,{label:"Back",variant:"ghost",icon:e.jsx(M,{}),isIconOnly:!0}),centerContent:e.jsx(s,{level:4,children:"Page Title"}),endContent:e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Cancel",variant:"secondary"}),e.jsx(t,{label:"Publish"})]})}),e.jsx(c,{children:e.jsx(a,{})})]})},F={name:"Stress: stacked toolbar variants",render:()=>e.jsxs(r,{width:700,children:[e.jsx(o,{label:"Ghost both",size:"sm",dividers:["bottom"],startContent:e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Back",variant:"ghost",icon:e.jsx(g,{}),isIconOnly:!0}),e.jsx(s,{level:4,children:"Ghost + Heading"})]}),endContent:e.jsx(t,{label:"Settings",variant:"ghost",icon:e.jsx(S,{}),isIconOnly:!0})}),e.jsx(o,{label:"Solid both",size:"sm",dividers:["bottom"],startContent:e.jsx(t,{label:"Add",size:"sm",icon:e.jsx(m,{})}),endContent:e.jsx(t,{label:"Save",size:"sm"})}),e.jsx(o,{label:"Ghost start solid end",size:"sm",dividers:["bottom"],startContent:e.jsx(t,{label:"Back",variant:"ghost",icon:e.jsx(M,{}),isIconOnly:!0}),endContent:e.jsx(t,{label:"Next",size:"sm",icon:e.jsx(J,{})})}),e.jsx(o,{label:"Text start ghost end",size:"sm",dividers:["bottom"],startContent:e.jsx(_,{type:"body",weight:"bold",children:"Selection mode"}),endContent:e.jsx(t,{label:"Done",variant:"ghost"})}),e.jsx(c,{children:e.jsx(a,{lines:2})})]})},G={name:"Card > Layout(contentWidth) > Toolbar header",render:()=>e.jsxs(u,{gap:4,children:[e.jsx(h,{label:"contentWidth=640, ghost buttons",children:e.jsx(r,{width:900,children:e.jsx(i,{contentWidth:640,header:e.jsx(l,{hasDivider:!0,padding:0,children:e.jsx(o,{label:"Card layout header",startContent:e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Back",variant:"ghost",icon:e.jsx(g,{}),isIconOnly:!0}),e.jsx(s,{level:4,children:"Project Settings"})]}),endContent:e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Search",variant:"ghost",icon:e.jsx(E,{}),isIconOnly:!0}),e.jsx(t,{label:"Settings",variant:"ghost",icon:e.jsx(S,{}),isIconOnly:!0})]})})}),content:e.jsx(d,{children:e.jsx(a,{lines:4})})})})}),e.jsx(h,{label:"contentWidth=640, mixed (ghost start, solid end)",children:e.jsx(r,{width:900,children:e.jsx(i,{contentWidth:640,header:e.jsx(l,{hasDivider:!0,padding:0,children:e.jsx(o,{label:"Card layout header",startContent:e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Back",variant:"ghost",icon:e.jsx(g,{}),isIconOnly:!0}),e.jsx(s,{level:4,children:"Edit Document"})]}),endContent:e.jsx(t,{label:"Save changes"})})}),content:e.jsx(d,{children:e.jsx(a,{lines:4})})})})}),e.jsx(h,{label:"contentWidth=640, heading start, no end",children:e.jsx(r,{width:900,children:e.jsx(i,{contentWidth:640,header:e.jsx(l,{hasDivider:!0,padding:0,children:e.jsx(o,{label:"Card layout header",startContent:e.jsx(s,{level:4,children:"Notifications"})})}),content:e.jsx(d,{children:e.jsx(a,{lines:4})})})})})]})},A={name:"Card(12px) > Layout > Toolbar + body",render:()=>e.jsx(r,{width:700,padding:3,children:e.jsx(i,{header:e.jsx(l,{hasDivider:!0,padding:0,children:e.jsx(o,{label:"Card header",startContent:e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Back",variant:"ghost",icon:e.jsx(g,{}),isIconOnly:!0}),e.jsx(s,{level:4,children:"Project Settings"})]}),endContent:e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Search",variant:"ghost",icon:e.jsx(E,{}),isIconOnly:!0}),e.jsx(t,{label:"Settings",variant:"ghost",icon:e.jsx(S,{}),isIconOnly:!0})]})})}),content:e.jsx(d,{children:e.jsx(a,{lines:4})})})})},P={name:"Tabs in toolbar (all sizes)",render:()=>{const[n,$]=K.useState("overview");return e.jsx(u,{gap:4,children:["sm","md","lg"].map(b=>e.jsx(h,{label:`size="${b}"`,children:e.jsxs(r,{width:700,children:[e.jsx(o,{label:`Tab toolbar ${b}`,size:b,dividers:["bottom"],startContent:e.jsxs(Q,{value:n,onChange:$,children:[e.jsx(N,{value:"overview",label:"Overview"}),e.jsx(N,{value:"analytics",label:"Analytics"}),e.jsx(N,{value:"settings",label:"Settings"})]}),endContent:e.jsxs(e.Fragment,{children:[e.jsx(t,{label:"Filter",variant:"ghost",icon:e.jsx(R,{}),isIconOnly:!0}),e.jsx(t,{label:"Add",variant:"ghost",icon:e.jsx(m,{}),isIconOnly:!0})]})}),e.jsx(c,{children:e.jsx(a,{})})]})},b))})}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'Ghost buttons: start + end',
  render: () => <XDSVStack gap={4}>
      {(['sm', 'md', 'lg'] as const).map(size => <AlignmentGuide key={size} label={\`size="\${size}"\`}>
          <XDSCard width={600}>
            <XDSToolbar label={\`Ghost buttons \${size}\`} size={size} dividers={['bottom']} startContent={<>
                  <XDSButton label="Back" variant="ghost" icon={<ArrowLeftIcon />} isIconOnly />
                  <XDSButton label="Edit" variant="ghost" />
                  <XDSButton label="Share" variant="ghost" />
                </>} endContent={<>
                  <XDSButton label="Filter" variant="ghost" icon={<FunnelIcon />} isIconOnly />
                  <XDSButton label="Settings" variant="ghost" icon={<Cog6ToothIcon />} isIconOnly />
                </>} />
            <XDSSection>
              <BodyContent />
            </XDSSection>
          </XDSCard>
        </AlignmentGuide>)}
    </XDSVStack>
}`,...x.parameters?.docs?.source},description:{story:"Ghost buttons in start and end slots across all three sizes. The button text/icon should align flush with the container edge.",...x.parameters?.docs?.description}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Solid buttons: start + end',
  render: () => <XDSVStack gap={4}>
      {(['sm', 'md', 'lg'] as const).map(size => <AlignmentGuide key={size} label={\`size="\${size}"\`}>
          <XDSCard width={600}>
            <XDSToolbar label={\`Solid buttons \${size}\`} size={size} dividers={['bottom']} startContent={<XDSButton label="New item" icon={<PlusIcon />} />} endContent={<XDSButton label="Save" />} />
            <XDSSection>
              <BodyContent />
            </XDSSection>
          </XDSCard>
        </AlignmentGuide>)}
    </XDSVStack>
}`,...D.parameters?.docs?.source},description:{story:"Solid (default) buttons at edges. These should NOT compensate — their padding is visually filled.",...D.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Mixed: ghost start, solid end',
  render: () => <XDSVStack gap={4}>
      {(['sm', 'md', 'lg'] as const).map(size => <AlignmentGuide key={size} label={\`size="\${size}"\`}>
          <XDSCard width={600}>
            <XDSToolbar label={\`Mixed \${size}\`} size={size} dividers={['bottom']} startContent={<>
                  <XDSButton label="Back" variant="ghost" icon={<ArrowLeftIcon />} isIconOnly />
                  <XDSButton label="Edit" variant="ghost" />
                </>} endContent={<XDSButton label="Save" />} />
            <XDSSection>
              <BodyContent />
            </XDSSection>
          </XDSCard>
        </AlignmentGuide>)}
    </XDSVStack>
}`,...y.parameters?.docs?.source},description:{story:"Ghost on start edge, solid on end. Only the start should compensate.",...y.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Mixed: solid start, ghost end',
  render: () => <XDSVStack gap={4}>
      {(['sm', 'md', 'lg'] as const).map(size => <AlignmentGuide key={size} label={\`size="\${size}"\`}>
          <XDSCard width={600}>
            <XDSToolbar label={\`Mixed \${size}\`} size={size} dividers={['bottom']} startContent={<XDSButton label="New item" icon={<PlusIcon />} />} endContent={<>
                  <XDSButton label="Filter" variant="ghost" icon={<FunnelIcon />} isIconOnly />
                  <XDSButton label="More" variant="ghost" icon={<EllipsisHorizontalIcon />} isIconOnly />
                </>} />
            <XDSSection>
              <BodyContent />
            </XDSSection>
          </XDSCard>
        </AlignmentGuide>)}
    </XDSVStack>
}`,...p.parameters?.docs?.source},description:{story:"Solid on start edge, ghost on end. Only the end should compensate.",...p.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'Heading start + ghost end',
  render: () => <XDSVStack gap={4}>
      {(['sm', 'md', 'lg'] as const).map(size => <AlignmentGuide key={size} label={\`size="\${size}"\`}>
          <XDSCard width={600}>
            <XDSToolbar label={\`Heading \${size}\`} size={size} dividers={['bottom']} startContent={<XDSHeading level={4}>Section Title</XDSHeading>} endContent={<>
                  <XDSButton label="Filter" variant="ghost" icon={<FunnelIcon />} isIconOnly />
                  <XDSButton label="Add" variant="ghost" icon={<PlusIcon />} isIconOnly />
                </>} />
            <XDSSection>
              <BodyContent />
            </XDSSection>
          </XDSCard>
        </AlignmentGuide>)}
    </XDSVStack>
}`,...j.parameters?.docs?.source},description:{story:"Heading in start slot with ghost buttons at end. Check heading alignment with body text below.",...j.parameters?.docs?.description}}};X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: 'Text start + ghost end',
  render: () => <XDSCard width={600}>
      <XDSToolbar label="Text start" dividers={['bottom']} startContent={<XDSText type="body" weight="bold">
            3 items selected
          </XDSText>} endContent={<>
            <XDSButton label="Delete" variant="ghost" />
            <XDSButton label="Archive" variant="ghost" />
          </>} />
      <XDSSection>
        <BodyContent />
      </XDSSection>
    </XDSCard>
}`,...X.parameters?.docs?.source},description:{story:"Text (not heading) in start slot with ghost buttons.",...X.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Heading start + solid end',
  render: () => <XDSCard width={600}>
      <XDSToolbar label="Heading solid" dividers={['bottom']} startContent={<XDSHeading level={4}>Project Settings</XDSHeading>} endContent={<XDSButton label="Save changes" />} />
      <XDSSection>
        <BodyContent />
      </XDSSection>
    </XDSCard>
}`,...v.parameters?.docs?.source},description:{story:"Heading on start, solid on end. No edge compensation on buttons — check heading vs body alignment.",...v.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Layout: no contentWidth, ghost buttons',
  render: () => <div style={{
    height: 400,
    border: '1px solid #e0e0e0',
    borderRadius: 8
  }}>
      <XDSLayout header={<XDSLayoutHeader hasDivider padding={0}>
            <XDSToolbar label="App header" startContent={<>
                  <XDSButton label="Menu" variant="ghost" icon={<Squares2X2Icon />} isIconOnly />
                  <XDSHeading level={4}>Dashboard</XDSHeading>
                </>} endContent={<>
                  <XDSButton label="Search" variant="ghost" icon={<MagnifyingGlassIcon />} isIconOnly />
                  <XDSButton label="Notifications" variant="ghost" icon={<BellIcon />} isIconOnly />
                  <XDSButton label="Settings" variant="ghost" icon={<Cog6ToothIcon />} isIconOnly />
                </>} />
          </XDSLayoutHeader>} content={<XDSLayoutContent>
            <BodyContent lines={6} />
          </XDSLayoutContent>} />
    </div>
}`,...C.parameters?.docs?.source},description:{story:"Toolbar in XDSLayout header, no contentWidth. Full-width toolbar, edge compensation normal.",...C.parameters?.docs?.description}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'Layout: no contentWidth, solid buttons',
  render: () => <div style={{
    height: 400,
    border: '1px solid #e0e0e0',
    borderRadius: 8
  }}>
      <XDSLayout header={<XDSLayoutHeader hasDivider padding={0}>
            <XDSToolbar label="App header" startContent={<XDSHeading level={4}>Dashboard</XDSHeading>} endContent={<>
                  <XDSButton label="Cancel" variant="secondary" />
                  <XDSButton label="Save" />
                </>} />
          </XDSLayoutHeader>} content={<XDSLayoutContent>
            <BodyContent lines={6} />
          </XDSLayoutContent>} />
    </div>
}`,...L.parameters?.docs?.source},description:{story:"Same without contentWidth but solid buttons for baseline comparison.",...L.parameters?.docs?.description}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'Layout: contentWidth=640, ghost buttons',
  render: () => <div style={{
    height: 400,
    border: '1px solid #e0e0e0',
    borderRadius: 8
  }}>
      <XDSLayout contentWidth={640} header={<XDSLayoutHeader hasDivider padding={0}>
            <XDSToolbar label="Page header" startContent={<>
                  <XDSButton label="Back" variant="ghost" icon={<ArrowLeftIcon />} isIconOnly />
                  <XDSHeading level={4}>Settings</XDSHeading>
                </>} endContent={<>
                  <XDSButton label="Search" variant="ghost" icon={<MagnifyingGlassIcon />} isIconOnly />
                  <XDSButton label="More" variant="ghost" icon={<EllipsisHorizontalIcon />} isIconOnly />
                </>} />
          </XDSLayoutHeader>} content={<XDSLayoutContent>
            <BodyContent lines={6} />
          </XDSLayoutContent>} />
    </div>
}`,...B.parameters?.docs?.source},description:{story:"Toolbar in XDSLayout with contentWidth=640. Header is full bleed, body is constrained. Ghost buttons should still align flush.",...B.parameters?.docs?.description}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'Layout: contentWidth=640, solid buttons',
  render: () => <div style={{
    height: 400,
    border: '1px solid #e0e0e0',
    borderRadius: 8
  }}>
      <XDSLayout contentWidth={640} header={<XDSLayoutHeader hasDivider padding={0}>
            <XDSToolbar label="Page header" startContent={<XDSHeading level={4}>Settings</XDSHeading>} endContent={<>
                  <XDSButton label="Cancel" variant="secondary" />
                  <XDSButton label="Save" />
                </>} />
          </XDSLayoutHeader>} content={<XDSLayoutContent>
            <BodyContent lines={6} />
          </XDSLayoutContent>} />
    </div>
}`,...I.parameters?.docs?.source},description:{story:"Same with contentWidth but solid buttons for comparison.",...I.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Layout: contentWidth=640, mixed',
  render: () => <div style={{
    height: 400,
    border: '1px solid #e0e0e0',
    borderRadius: 8
  }}>
      <XDSLayout contentWidth={640} header={<XDSLayoutHeader hasDivider padding={0}>
            <XDSToolbar label="Page header" startContent={<>
                  <XDSButton label="Back" variant="ghost" icon={<ArrowLeftIcon />} isIconOnly />
                  <XDSHeading level={4}>Edit Project</XDSHeading>
                </>} endContent={<XDSButton label="Save changes" />} />
          </XDSLayoutHeader>} content={<XDSLayoutContent>
            <BodyContent lines={6} />
          </XDSLayoutContent>} />
    </div>
}`,...T.parameters?.docs?.source},description:{story:"Mixed ghost/solid with contentWidth — ghost start, solid end.",...T.parameters?.docs?.description}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Layout: contentWidth=960, ghost buttons',
  render: () => <div style={{
    height: 400,
    border: '1px solid #e0e0e0',
    borderRadius: 8
  }}>
      <XDSLayout contentWidth={960} header={<XDSLayoutHeader hasDivider padding={0}>
            <XDSToolbar label="Dashboard header" startContent={<>
                  <XDSButton label="Back" variant="ghost" icon={<ChevronLeftIcon />} isIconOnly />
                  <XDSHeading level={4}>Analytics Dashboard</XDSHeading>
                </>} endContent={<>
                  <XDSButton label="Share" variant="ghost" icon={<ShareIcon />} isIconOnly />
                  <XDSButton label="Settings" variant="ghost" icon={<Cog6ToothIcon />} isIconOnly />
                </>} />
          </XDSLayoutHeader>} content={<XDSLayoutContent>
            <BodyContent lines={6} />
          </XDSLayoutContent>} />
    </div>
}`,...O.parameters?.docs?.source},description:{story:"contentWidth=960, ghost buttons. Common for dashboards.",...O.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Layout: padding=4, ghost buttons',
  render: () => <div style={{
    height: 400,
    border: '1px solid #e0e0e0',
    borderRadius: 8
  }}>
      <XDSLayout padding={4} header={<XDSLayoutHeader hasDivider padding={0}>
            <XDSToolbar label="Padded layout header" startContent={<>
                  <XDSButton label="Back" variant="ghost" icon={<ArrowLeftIcon />} isIconOnly />
                  <XDSHeading level={4}>Padded Layout</XDSHeading>
                </>} endContent={<XDSButton label="Settings" variant="ghost" icon={<Cog6ToothIcon />} isIconOnly />} />
          </XDSLayoutHeader>} content={<XDSLayoutContent>
            <BodyContent lines={6} />
          </XDSLayoutContent>} />
    </div>
}`,...w.parameters?.docs?.source},description:{story:"Layout with padding=4 and ghost toolbar. Layout outer padding interacts with toolbar edge compensation.",...w.parameters?.docs?.description}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: 'Layout: padding=4 + contentWidth=640',
  render: () => <div style={{
    height: 400,
    border: '1px solid #e0e0e0',
    borderRadius: 8
  }}>
      <XDSLayout padding={4} contentWidth={640} header={<XDSLayoutHeader hasDivider padding={0}>
            <XDSToolbar label="Padded constrained header" startContent={<>
                  <XDSButton label="Back" variant="ghost" icon={<ArrowLeftIcon />} isIconOnly />
                  <XDSHeading level={4}>Constrained + Padded</XDSHeading>
                </>} endContent={<>
                  <XDSButton label="Share" variant="ghost" icon={<ShareIcon />} isIconOnly />
                  <XDSButton label="Settings" variant="ghost" icon={<Cog6ToothIcon />} isIconOnly />
                </>} />
          </XDSLayoutHeader>} content={<XDSLayoutContent>
            <BodyContent lines={6} />
          </XDSLayoutContent>} />
    </div>
}`,...H.parameters?.docs?.source},description:{story:"Layout with padding + contentWidth together. Both constraints active.",...H.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Layout: header default padding + toolbar',
  render: () => <div style={{
    height: 400,
    border: '1px solid #e0e0e0',
    borderRadius: 8
  }}>
      <XDSLayout header={<XDSLayoutHeader hasDivider>
            <XDSToolbar label="Double padded?" startContent={<>
                  <XDSButton label="Back" variant="ghost" icon={<ArrowLeftIcon />} isIconOnly />
                  <XDSHeading level={4}>Double Padding Check</XDSHeading>
                </>} endContent={<XDSButton label="Settings" variant="ghost" icon={<Cog6ToothIcon />} isIconOnly />} />
          </XDSLayoutHeader>} content={<XDSLayoutContent>
            <BodyContent lines={4} />
          </XDSLayoutContent>} />
    </div>
}`,...f.parameters?.docs?.source},description:{story:"Toolbar inside LayoutHeader using the header's default padding (not padding={0}). Potential double-padding issue.",...f.parameters?.docs?.description}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: 'Comparison: ghost vs solid alignment',
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 24
  }}>
      <AlignmentGuide label="Ghost buttons (should align flush)">
        <XDSCard>
          <XDSToolbar label="Ghost" dividers={['bottom']} startContent={<>
                <XDSButton label="Back" variant="ghost" icon={<ArrowLeftIcon />} isIconOnly />
                <XDSButton label="Edit" variant="ghost" />
              </>} endContent={<XDSButton label="More" variant="ghost" icon={<EllipsisHorizontalIcon />} isIconOnly />} />
          <XDSSection>
            <BodyContent />
          </XDSSection>
        </XDSCard>
      </AlignmentGuide>
      <AlignmentGuide label="Solid buttons (natural padding)">
        <XDSCard>
          <XDSToolbar label="Solid" dividers={['bottom']} startContent={<XDSButton label="New" icon={<PlusIcon />} />} endContent={<XDSButton label="Save" />} />
          <XDSSection>
            <BodyContent />
          </XDSSection>
        </XDSCard>
      </AlignmentGuide>
    </div>
}`,...W.parameters?.docs?.source},description:{story:"Direct visual comparison: ghost vs solid, with body content for alignment reference.",...W.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Three-slot: ghost edges + center heading',
  render: () => <XDSVStack gap={4}>
      {(['sm', 'md', 'lg'] as const).map(size => <AlignmentGuide key={size} label={\`size="\${size}"\`}>
          <XDSCard width={700}>
            <XDSToolbar label={\`Three slot \${size}\`} size={size} dividers={['bottom']} startContent={<XDSButton label="Back" variant="ghost" icon={<ChevronLeftIcon />} isIconOnly />} centerContent={<XDSHeading level={4}>Document Title</XDSHeading>} endContent={<>
                  <XDSButton label="Share" variant="ghost" icon={<ShareIcon />} isIconOnly />
                  <XDSButton label="More" variant="ghost" icon={<EllipsisHorizontalIcon />} isIconOnly />
                </>} />
            <XDSSection>
              <BodyContent />
            </XDSSection>
          </XDSCard>
        </AlignmentGuide>)}
    </XDSVStack>
}`,...k.parameters?.docs?.source},description:{story:"Three-slot (center content) with ghost buttons at both edges. Center stays centered.",...k.parameters?.docs?.description}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: 'Three-slot: ghost start, solid end',
  render: () => <XDSCard width={700}>
      <XDSToolbar label="Mixed three slot" dividers={['bottom']} startContent={<XDSButton label="Back" variant="ghost" icon={<ChevronLeftIcon />} isIconOnly />} centerContent={<XDSHeading level={4}>Page Title</XDSHeading>} endContent={<>
            <XDSButton label="Cancel" variant="secondary" />
            <XDSButton label="Publish" />
          </>} />
      <XDSSection>
        <BodyContent />
      </XDSSection>
    </XDSCard>
}`,...z.parameters?.docs?.source},description:{story:"Three-slot: ghost start, center heading, solid end.",...z.parameters?.docs?.description}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: 'Stress: stacked toolbar variants',
  render: () => <XDSCard width={700}>
      <XDSToolbar label="Ghost both" size="sm" dividers={['bottom']} startContent={<>
            <XDSButton label="Back" variant="ghost" icon={<ArrowLeftIcon />} isIconOnly />
            <XDSHeading level={4}>Ghost + Heading</XDSHeading>
          </>} endContent={<XDSButton label="Settings" variant="ghost" icon={<Cog6ToothIcon />} isIconOnly />} />
      <XDSToolbar label="Solid both" size="sm" dividers={['bottom']} startContent={<XDSButton label="Add" size="sm" icon={<PlusIcon />} />} endContent={<XDSButton label="Save" size="sm" />} />
      <XDSToolbar label="Ghost start solid end" size="sm" dividers={['bottom']} startContent={<XDSButton label="Back" variant="ghost" icon={<ChevronLeftIcon />} isIconOnly />} endContent={<XDSButton label="Next" size="sm" icon={<ChevronRightIcon />} />} />
      <XDSToolbar label="Text start ghost end" size="sm" dividers={['bottom']} startContent={<XDSText type="body" weight="bold">
            Selection mode
          </XDSText>} endContent={<XDSButton label="Done" variant="ghost" />} />
      <XDSSection>
        <BodyContent lines={2} />
      </XDSSection>
    </XDSCard>
}`,...F.parameters?.docs?.source},description:{story:"Multiple toolbars stacked — checks edge compensation consistency across adjacent toolbars with different content types.",...F.parameters?.docs?.description}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: 'Card > Layout(contentWidth) > Toolbar header',
  render: () => <XDSVStack gap={4}>
      <AlignmentGuide label="contentWidth=640, ghost buttons">
        <XDSCard width={900}>
          <XDSLayout contentWidth={640} header={<XDSLayoutHeader hasDivider padding={0}>
                <XDSToolbar label="Card layout header" startContent={<>
                      <XDSButton label="Back" variant="ghost" icon={<ArrowLeftIcon />} isIconOnly />
                      <XDSHeading level={4}>Project Settings</XDSHeading>
                    </>} endContent={<>
                      <XDSButton label="Search" variant="ghost" icon={<MagnifyingGlassIcon />} isIconOnly />
                      <XDSButton label="Settings" variant="ghost" icon={<Cog6ToothIcon />} isIconOnly />
                    </>} />
              </XDSLayoutHeader>} content={<XDSLayoutContent>
                <BodyContent lines={4} />
              </XDSLayoutContent>} />
        </XDSCard>
      </AlignmentGuide>
      <AlignmentGuide label="contentWidth=640, mixed (ghost start, solid end)">
        <XDSCard width={900}>
          <XDSLayout contentWidth={640} header={<XDSLayoutHeader hasDivider padding={0}>
                <XDSToolbar label="Card layout header" startContent={<>
                      <XDSButton label="Back" variant="ghost" icon={<ArrowLeftIcon />} isIconOnly />
                      <XDSHeading level={4}>Edit Document</XDSHeading>
                    </>} endContent={<XDSButton label="Save changes" />} />
              </XDSLayoutHeader>} content={<XDSLayoutContent>
                <BodyContent lines={4} />
              </XDSLayoutContent>} />
        </XDSCard>
      </AlignmentGuide>
      <AlignmentGuide label="contentWidth=640, heading start, no end">
        <XDSCard width={900}>
          <XDSLayout contentWidth={640} header={<XDSLayoutHeader hasDivider padding={0}>
                <XDSToolbar label="Card layout header" startContent={<XDSHeading level={4}>Notifications</XDSHeading>} />
              </XDSLayoutHeader>} content={<XDSLayoutContent>
                <BodyContent lines={4} />
              </XDSLayoutContent>} />
        </XDSCard>
      </AlignmentGuide>
    </XDSVStack>
}`,...G.parameters?.docs?.source},description:{story:"Card wrapping a Layout with contentWidth. Toolbar lives in the LayoutHeader. Tests the full nesting chain: Card padding → Layout bleed → contentWidth constraint → toolbar edge compensation.",...G.parameters?.docs?.description}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'Card(12px) > Layout > Toolbar + body',
  render: () => <XDSCard width={700} padding={3}>
      <XDSLayout header={<XDSLayoutHeader hasDivider padding={0}>
            <XDSToolbar label="Card header" startContent={<>
                  <XDSButton label="Back" variant="ghost" icon={<ArrowLeftIcon />} isIconOnly />
                  <XDSHeading level={4}>Project Settings</XDSHeading>
                </>} endContent={<>
                  <XDSButton label="Search" variant="ghost" icon={<MagnifyingGlassIcon />} isIconOnly />
                  <XDSButton label="Settings" variant="ghost" icon={<Cog6ToothIcon />} isIconOnly />
                </>} />
          </XDSLayoutHeader>} content={<XDSLayoutContent>
            <BodyContent lines={4} />
          </XDSLayoutContent>} />
    </XDSCard>
}`,...A.parameters?.docs?.source},description:{story:"Card with 12px padding wrapping a Layout. Toolbar in header, body text in content. Tests that toolbar edge compensation aligns with body text when the card has non-default (smaller) padding.",...A.parameters?.docs?.description}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: 'Tabs in toolbar (all sizes)',
  render: () => {
    const [tab, setTab] = useState('overview');
    return <XDSVStack gap={4}>
        {(['sm', 'md', 'lg'] as const).map(size => <AlignmentGuide key={size} label={\`size="\${size}"\`}>
            <XDSCard width={700}>
              <XDSToolbar label={\`Tab toolbar \${size}\`} size={size} dividers={['bottom']} startContent={<XDSTabList value={tab} onChange={setTab}>
                    <XDSTab value="overview" label="Overview" />
                    <XDSTab value="analytics" label="Analytics" />
                    <XDSTab value="settings" label="Settings" />
                  </XDSTabList>} endContent={<>
                    <XDSButton label="Filter" variant="ghost" icon={<FunnelIcon />} isIconOnly />
                    <XDSButton label="Add" variant="ghost" icon={<PlusIcon />} isIconOnly />
                  </>} />
              <XDSSection>
                <BodyContent />
              </XDSSection>
            </XDSCard>
          </AlignmentGuide>)}
      </XDSVStack>;
  }
}`,...P.parameters?.docs?.source},description:{story:"Toolbar with tab navigation. Size prop on toolbar cascades to tabs and buttons via XDSSizeContext.",...P.parameters?.docs?.description}}};const Xe=["GhostButtonsBothEdges","SolidButtonsBothEdges","GhostStartSolidEnd","SolidStartGhostEnd","HeadingStartGhostEnd","TextStartGhostEnd","HeadingStartSolidEnd","LayoutNoContentWidth","LayoutNoContentWidthSolid","LayoutWithContentWidth","LayoutWithContentWidthSolid","LayoutWithContentWidthMixed","LayoutContentWidth960","LayoutWithPadding","LayoutWithPaddingAndContentWidth","LayoutHeaderDefaultPadding","SideBySideComparison","ThreeSlotGhostEdges","ThreeSlotMixed","StackedVariants","CardLayoutContentWidthToolbar","CardSmallPaddingLayoutToolbar","WithTabs"];export{G as CardLayoutContentWidthToolbar,A as CardSmallPaddingLayoutToolbar,x as GhostButtonsBothEdges,y as GhostStartSolidEnd,j as HeadingStartGhostEnd,v as HeadingStartSolidEnd,O as LayoutContentWidth960,f as LayoutHeaderDefaultPadding,C as LayoutNoContentWidth,L as LayoutNoContentWidthSolid,B as LayoutWithContentWidth,T as LayoutWithContentWidthMixed,I as LayoutWithContentWidthSolid,w as LayoutWithPadding,H as LayoutWithPaddingAndContentWidth,W as SideBySideComparison,D as SolidButtonsBothEdges,p as SolidStartGhostEnd,F as StackedVariants,X as TextStartGhostEnd,k as ThreeSlotGhostEdges,z as ThreeSlotMixed,P as WithTabs,Xe as __namedExportsOrder,je as default};
