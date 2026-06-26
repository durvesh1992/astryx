import{at as c,ad as n,ai as m,ar as u,aZ as x}from"./iframe-yRFQ_7VC.js";const f={wrapper:{k1xSpc:"xds3nfvp2",kGNEyG:"xds6s0dn4",kOIVth:"xdszye2dw",kmuXW:"xds2lah0s",$$css:!0}},y={ctrl:"⌃",alt:"⌥",shift:"⇧",enter:"↵",backspace:"⌫",escape:"Esc",tab:"⇥",up:"↑",down:"↓",left:"←",right:"→",plus:"+"};function h(e,s){return e==="mod"?s?"⌘":"Ctrl":y[e]??e.toUpperCase()}function g(){return()=>{}}function S(){return!1}function k(){if(typeof navigator>"u")return!1;const e="userAgentData"in navigator?navigator.userAgentData:null;return e&&typeof e=="object"&&"platform"in e?/mac/i.test(e.platform??""):/Mac|iPhone|iPad|iPod/.test(navigator.platform??"")}function a({keys:e,ref:s,xstyle:r,className:o,style:d,...i}){const p=c.useSyncExternalStore(g,k,S),l=e.split("+").map(t=>t.trim().toLowerCase());return n.jsx("span",{ref:s,...i,...m(x("kbd"),u(f.wrapper,r),o,d),"aria-hidden":"true",children:l.map(t=>n.jsx("kbd",{className:"xds3nfvp2 xds6s0dn4 xdsl56j7k xds16asifk xds1grt7ep xds7a5moj xdsx3sua9 xds17x4s8c xdslxy82 xds1q0q8m5 xdsw8gpjh xdsv1l7n4 xds9ynric xds141an7d xds1e4wzip xds1ltkj2j xds87ps6o",children:h(t,p)},t))})}a.displayName="XDSKbd";a.__docgenInfo={description:`Displays a keyboard shortcut as styled <kbd> elements.

A general-purpose component for rendering keyboard shortcuts
anywhere in the system — tooltips, menus, documentation, etc.

Platform-aware: \`mod\` renders as ⌘ on macOS and Ctrl elsewhere.
SSR-safe — defers platform detection through useSyncExternalStore to avoid
hydration mismatches.

@example
\`\`\`
<XDSKbd keys="mod+k" />
\`\`\``,methods:[],displayName:"XDSKbd",props:{xstyle:{required:!1,tsType:{name:"StyleXStyles"},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLSpanElement>",elements:[{name:"HTMLSpanElement"}]},description:""},keys:{required:!0,tsType:{name:"string"},description:`Keyboard shortcut string. Use "+" to separate keys.
Special keys: mod (Cmd on Mac), ctrl, alt, shift, enter, backspace, escape.
Use "plus" to render a literal "+" key (e.g. "shift+plus").

@example
\`\`\`
"mod+k"
"mod+shift+p"
"shift+plus"
"enter"
\`\`\``}},composes:["Omit"]};export{a as X};
