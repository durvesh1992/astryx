import{ad as e,X as i}from"./iframe-yRFQ_7VC.js";function n({icon:t,...o}){return e.jsx(i,{...o,icon:t,isIconOnly:!0})}n.displayName="XDSIconButton";n.__docgenInfo={description:`An icon-only button — a thin wrapper around XDSButton with \`isIconOnly\`
always set to true.

Use this instead of \`<XDSButton isIconOnly>\` for explicit, greppable,
and codemod-safe icon-only button usage.

@example
\`\`\`
<XDSIconButton label="Settings" icon={<GearIcon />} variant="ghost" />
<XDSIconButton label="Delete" icon={<TrashIcon />} variant="destructive" />
<XDSIconButton label="Emoji" icon={<span>🚀</span>} variant="ghost" size="sm" />
\`\`\``,methods:[],displayName:"XDSIconButton",props:{icon:{required:!0,tsType:{name:"ReactNode"},description:"Icon element rendered inside the button (required)."}},composes:["Omit"]};export{n as X};
