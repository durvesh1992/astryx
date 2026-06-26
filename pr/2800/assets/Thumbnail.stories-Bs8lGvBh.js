import{at as o,ad as e}from"./iframe-yRFQ_7VC.js";import{X as r}from"./XDSThumbnail-C-_6gfif.js";import"./preload-helper-Ct5FWWRu.js";import"./XDSSkeleton-Lffgyi3P.js";import"./useImageMode-Bx6nHChO.js";const D={title:"Core/Thumbnail",component:r,tags:["autodocs"],argTypes:{src:{control:"text",description:"Image source URL"},alt:{control:"text",description:"Alt text for the image"},label:{control:"text",description:"Label below the thumbnail"},isDisabled:{control:"boolean",description:"Whether the thumbnail is disabled"}}},x="https://picsum.photos/id/1042/200/200",i="https://picsum.photos/id/1043/200/200",c="https://picsum.photos/id/1044/200/200",R="https://picsum.photos/id/1047/200/200",d={args:{src:i,alt:"Sample image"}},m={args:{src:c,alt:"Vacation photo",label:"vacation.jpg"}},p={render:()=>{const[s,t]=o.useState(!0);return s?e.jsx(r,{src:i,alt:"Removable thumbnail",label:"photo.png",onRemove:()=>t(!1)}):e.jsxs("p",{style:{color:"#888",fontSize:12},children:["Removed. ",e.jsx("button",{onClick:()=>t(!0),children:"Undo"})]})}},u={render:()=>{const[s,t]=o.useState(!0);return s?e.jsx(r,{src:c,alt:"Photo with metadata",label:"screenshot.png",onRemove:()=>t(!1)}):e.jsxs("p",{style:{color:"#888",fontSize:12},children:["Removed. ",e.jsx("button",{onClick:()=>t(!0),children:"Undo"})]})}},b={args:{src:R,alt:"Clickable thumbnail",onClick:()=>alert("Clicked!"),label:"preview.jpg"}},g={name:"Loading (no preview)",args:{isLoading:!0,label:"uploading.jpg"}},h={name:"Uploading (with preview)",args:{src:c,alt:"Uploading preview",isLoading:!0,label:"vacation.jpg"}},v={name:"No Image (Placeholder)",render:()=>{const[s,t]=o.useState(!0);return s?e.jsx(r,{label:"report.pdf",onRemove:()=>t(!1)}):e.jsxs("p",{style:{color:"#888",fontSize:12},children:["Removed. ",e.jsx("button",{onClick:()=>t(!0),children:"Undo"})]})}},f={args:{src:i,alt:"Disabled thumbnail",label:"locked.jpg",onRemove:()=>{},isDisabled:!0}},S={name:"Media Mode (dark vs light images)",render:function(){const t=[{src:x,label:"dark.jpg",alt:"Dark image"},{src:i,label:"light.jpg",alt:"Light image"},{src:R,label:"mixed.jpg",alt:"Mixed tones"},{src:c,label:"warm.jpg",alt:"Warm tones"}],[n,l]=o.useState(t);return e.jsxs("div",{children:[e.jsx("p",{style:{fontSize:12,color:"#888",marginBottom:8},children:"Remove buttons should adapt: light icon on dark images, dark icon on light images."}),e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"flex-start"},children:[n.map(a=>e.jsx(r,{src:a.src,alt:a.alt,label:a.label,onRemove:()=>l(I=>I.filter(M=>M.label!==a.label))},a.label)),n.length===0&&e.jsxs("p",{style:{color:"#888",fontSize:12},children:["All removed."," ",e.jsx("button",{onClick:()=>l(t),children:"Reset"})]})]})]})}},j={render:function(){const t=[{id:1,src:x,label:"dark.jpg"},{id:2,src:i,label:"light.jpg"},{id:4,src:c,label:"warm.jpg"}],[n,l]=o.useState(t);return e.jsxs("div",{style:{display:"flex",gap:8,alignItems:"flex-start"},children:[n.map(a=>e.jsx(r,{src:a.src,alt:a.label,label:a.label,onRemove:()=>l(I=>I.filter(M=>M.id!==a.id))},a.id)),n.length===0&&e.jsxs("p",{style:{color:"#888",fontSize:12},children:["All removed."," ",e.jsx("button",{onClick:()=>l(t),children:"Reset"})]})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    src: LIGHT_IMAGE,
    alt: 'Sample image'
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    src: WARM_IMAGE,
    alt: 'Vacation photo',
    label: 'vacation.jpg'
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [visible, setVisible] = useState(true);
    if (!visible) {
      return <p style={{
        color: '#888',
        fontSize: 12
      }}>
          Removed. <button onClick={() => setVisible(true)}>Undo</button>
        </p>;
    }
    return <XDSThumbnail src={LIGHT_IMAGE} alt="Removable thumbnail" label="photo.png" onRemove={() => setVisible(false)} />;
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [visible, setVisible] = useState(true);
    if (!visible) {
      return <p style={{
        color: '#888',
        fontSize: 12
      }}>
          Removed. <button onClick={() => setVisible(true)}>Undo</button>
        </p>;
    }
    return <XDSThumbnail src={WARM_IMAGE} alt="Photo with metadata" label="screenshot.png" onRemove={() => setVisible(false)} />;
  }
}`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    src: MIXED_IMAGE,
    alt: 'Clickable thumbnail',
    onClick: () => alert('Clicked!'),
    label: 'preview.jpg'
  }
}`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Loading (no preview)',
  args: {
    isLoading: true,
    label: 'uploading.jpg'
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Uploading (with preview)',
  args: {
    src: WARM_IMAGE,
    alt: 'Uploading preview',
    isLoading: true,
    label: 'vacation.jpg'
  }
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'No Image (Placeholder)',
  render: () => {
    const [visible, setVisible] = useState(true);
    if (!visible) {
      return <p style={{
        color: '#888',
        fontSize: 12
      }}>
          Removed. <button onClick={() => setVisible(true)}>Undo</button>
        </p>;
    }
    return <XDSThumbnail label="report.pdf" onRemove={() => setVisible(false)} />;
  }
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    src: LIGHT_IMAGE,
    alt: 'Disabled thumbnail',
    label: 'locked.jpg',
    onRemove: () => {},
    isDisabled: true
  }
}`,...f.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Media Mode (dark vs light images)',
  render: function MediaModeStory() {
    const images = [{
      src: DARK_IMAGE,
      label: 'dark.jpg',
      alt: 'Dark image'
    }, {
      src: LIGHT_IMAGE,
      label: 'light.jpg',
      alt: 'Light image'
    }, {
      src: MIXED_IMAGE,
      label: 'mixed.jpg',
      alt: 'Mixed tones'
    }, {
      src: WARM_IMAGE,
      label: 'warm.jpg',
      alt: 'Warm tones'
    }];
    const [items, setItems] = useState(images);
    return <div>
        <p style={{
        fontSize: 12,
        color: '#888',
        marginBottom: 8
      }}>
          Remove buttons should adapt: light icon on dark images, dark icon on
          light images.
        </p>
        <div style={{
        display: 'flex',
        gap: 8,
        alignItems: 'flex-start'
      }}>
          {items.map(item => <XDSThumbnail key={item.label} src={item.src} alt={item.alt} label={item.label} onRemove={() => setItems(prev => prev.filter(i => i.label !== item.label))} />)}
          {items.length === 0 && <p style={{
          color: '#888',
          fontSize: 12
        }}>
              All removed.{' '}
              <button onClick={() => setItems(images)}>Reset</button>
            </p>}
        </div>
      </div>;
  }
}`,...S.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: function GalleryStory() {
    const initial = [{
      id: 1,
      src: DARK_IMAGE,
      label: 'dark.jpg'
    }, {
      id: 2,
      src: LIGHT_IMAGE,
      label: 'light.jpg'
    }, {
      id: 4,
      src: WARM_IMAGE,
      label: 'warm.jpg'
    }];
    const [items, setItems] = useState(initial);
    return <div style={{
      display: 'flex',
      gap: 8,
      alignItems: 'flex-start'
    }}>
        {items.map(item => <XDSThumbnail key={item.id} src={item.src} alt={item.label} label={item.label} onRemove={() => setItems(prev => prev.filter(i => i.id !== item.id))} />)}
        {items.length === 0 && <p style={{
        color: '#888',
        fontSize: 12
      }}>
            All removed.{' '}
            <button onClick={() => setItems(initial)}>Reset</button>
          </p>}
      </div>;
  }
}`,...j.parameters?.docs?.source}}};const C=["Default","WithLabel","WithRemove","WithCaption","Clickable","Loading","Uploading","Placeholder","Disabled","MediaModeTest","Gallery"];export{b as Clickable,d as Default,f as Disabled,j as Gallery,g as Loading,S as MediaModeTest,v as Placeholder,h as Uploading,u as WithCaption,m as WithLabel,p as WithRemove,C as __namedExportsOrder,D as default};
