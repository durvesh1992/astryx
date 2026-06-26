import{ad as e,ai as i,aZ as l}from"./iframe-yRFQ_7VC.js";function t({ref:n,item:s,icon:r,description:a,isDisabled:d=!1}){return s.element?e.jsx(e.Fragment,{children:s.element}):e.jsxs("div",{ref:n,...i(l("typeahead-item"),{0:{className:"xds78zum5 xds6s0dn4 xds1txdalj xds2lwn1j"},1:{className:"xds78zum5 xds6s0dn4 xds1txdalj xds2lwn1j xdsbyyjgo"}}[!!d<<0]),children:[r,e.jsxs("div",{className:"xds78zum5 xdsdt5ytf xds98rzlu xdseuugli",children:[e.jsx("span",{className:"xdscr08ib xds1kq96og xds1sodnla xds1tgivj0 xdsb3r6kr xdslyipyv xdsuxw1ft",children:s.label}),a&&e.jsx("span",{className:"xds141an7d xds1ltkj2j xdsv1l7n4 xdsb3r6kr xdslyipyv xdsuxw1ft",children:a})]})]})}t.displayName="XDSTypeaheadItem";t.__docgenInfo={description:`Default item component for typeahead dropdown results.

Renders a label with optional icon and description.
Exported for use in custom \`renderItem\` implementations.

@example
\`\`\`
<XDSTypeahead searchSource={source} value={v} onChange={setV} label="Search" />
<XDSTypeahead
  searchSource={source}
  value={v}
  onChange={setV}
  label="Search"
  renderItem={(item) => (
    <XDSTypeaheadItem
      item={item}
      icon={<XDSAvatar src={item.auxiliaryData.avatar} size="sm" />}
      description={item.auxiliaryData.role}
    />
  )}
/>
\`\`\``,methods:[],displayName:"XDSTypeaheadItem",props:{xstyle:{required:!1,tsType:{name:"StyleXStyles"},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:""},item:{required:!0,tsType:{name:"T"},description:"The search result item."},icon:{required:!1,tsType:{name:"ReactNode"},description:"Icon or avatar to display before the label."},description:{required:!1,tsType:{name:"string"},description:"Description text displayed below the label."},isDisabled:{required:!1,tsType:{name:"boolean"},description:`Whether this item is disabled.
@default false`,defaultValue:{value:"false",computed:!1}},group:{required:!1,tsType:{name:"string"},description:"Group label for grouping items visually."}},composes:["Omit"]};export{t as X};
