import{ah as d,a1 as r}from"./iframe-CjDf2sq_.js";import{P as u}from"./PowerSearch-Ch5Ts8XE.js";import{u as m}from"./usePowerSearchConfig-DHzIHUE5.js";import{T as h,f as c,p}from"./Table-C3V6TF5w.js";import"./preload-helper-Ct5FWWRu.js";import"./Tokenizer-Dvt4-RD2.js";import"./BaseTypeahead-B_FTLofu.js";import"./usePopover-CKTMj4LV.js";import"./TypeaheadItem-Ck9mrzww.js";import"./getKey-DyRdrWhf.js";import"./Field-BlDy4V5H.js";import"./FieldStatus-DQp4Ef6g.js";import"./inputStyles.stylex-Bpqcd25J.js";import"./InputClearButton-YLkEf0j8.js";import"./Token-Cx7rW2xL.js";import"./useInteractiveRole-lP8QKURy.js";import"./OverflowList-Cqz-DC7d.js";import"./Avatar-KbnjOH4c.js";import"./Selector-CtvooJqV.js";import"./Divider-DTf0yRFC.js";import"./utils-_uNaBhDK.js";import"./hooks-B4y7GTur.js";import"./Item-DL8lqWaB.js";import"./computeTargetAndRel-BlG0ENK0.js";import"./TreeList-BsVGzTke.js";import"./TextInput-DbQBhk3m.js";import"./groupStyles-CpFzSCNP.js";import"./useInputContainer-BLl1DaFA.js";import"./useClickableContainer-Cn9eQN7k.js";import"./NumberInput-0YgNfnI8.js";import"./DateInput-qbxtMniy.js";import"./Calendar-rqlIwlEg.js";import"./plainDate-C-ANv9VG.js";import"./dateParser-XTIqkafj.js";import"./TimeInput-D9t6vzDs.js";import"./timeParser-CAi7zy_b.js";import"./Typeahead-CRO2mwfm.js";import"./VStack-CsI9XPrs.js";import"./Stack-Ck1tCdNF.js";import"./stack.stylex-BlarxY2N.js";import"./HStack-BbrB7MWl.js";import"./EmptyState-DAlhd40Q.js";const y=[{value:"fiction",label:"Fiction"},{value:"non-fiction",label:"Non-Fiction"},{value:"sci-fi",label:"Science Fiction"},{value:"fantasy",label:"Fantasy"},{value:"mystery",label:"Mystery"},{value:"romance",label:"Romance"},{value:"biography",label:"Biography"},{value:"history",label:"History"}],f=[{key:"title",type:"string",label:"Title"},{key:"author",type:"string",label:"Author"},{key:"year",type:"number",label:"Publication Year"},{key:"genre",type:"enum",label:"Genre",enumValues:y}],g=[{id:"1",title:"Dune",author:"Frank Herbert",year:1965,genre:"sci-fi"},{id:"2",title:"Pride and Prejudice",author:"Jane Austen",year:1813,genre:"romance"},{id:"3",title:"The Great Gatsby",author:"F. Scott Fitzgerald",year:1925,genre:"fiction"},{id:"4",title:"1984",author:"George Orwell",year:1949,genre:"sci-fi"},{id:"5",title:"To Kill a Mockingbird",author:"Harper Lee",year:1960,genre:"fiction"},{id:"6",title:"The Hobbit",author:"J.R.R. Tolkien",year:1937,genre:"fantasy"},{id:"7",title:"Sapiens",author:"Yuval Noah Harari",year:2011,genre:"non-fiction"},{id:"8",title:"The Name of the Wind",author:"Patrick Rothfuss",year:2007,genre:"fantasy"},{id:"9",title:"Gone Girl",author:"Gillian Flynn",year:2012,genre:"mystery"},{id:"10",title:"Steve Jobs",author:"Walter Isaacson",year:2011,genre:"biography"},{id:"11",title:"A Brief History of Time",author:"Stephen Hawking",year:1988,genre:"non-fiction"},{id:"12",title:"The Shining",author:"Stephen King",year:1977,genre:"mystery"},{id:"13",title:"The Handmaid's Tale",author:"Margaret Atwood",year:1985,genre:"sci-fi"},{id:"14",title:"Outlander",author:"Diana Gabaldon",year:1991,genre:"romance"},{id:"15",title:"The Guns of August",author:"Barbara Tuchman",year:1962,genre:"history"}],b=[{key:"title",header:"Title",width:c(2)},{key:"author",header:"Author",width:c(2)},{key:"year",header:"Year",width:p(100)},{key:"genre",header:"Genre",width:p(140),renderCell:e=>y.find(t=>t.value===e.genre)?.label??e.genre}],se={title:"Core/PowerSearchWithTable",tags:["autodocs"],decorators:[e=>r.jsx("div",{style:{width:800},children:r.jsx(e,{})})]},o={render:()=>{const[e,t]=d.useState([]),{config:l,applyFilters:s}=m(f,"Books"),i=s(e,g);return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[r.jsx(u,{config:l,filters:e,onChange:n=>t([...n]),placeholder:"Filter books by title, author, year, genre...",resultCount:i.length}),r.jsx(h,{data:i,columns:b,idKey:"id",hasHover:!0})]})}},a={render:()=>{const[e,t]=d.useState([{field:"genre",operator:"is",value:{type:"enum",value:"sci-fi"}}]),{config:l,applyFilters:s}=m(f,"Books"),i=s(e,g);return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[r.jsx(u,{config:l,filters:e,onChange:n=>t([...n]),placeholder:"Filter books...",resultCount:i.length}),r.jsx(h,{data:i,columns:b,idKey:"id",hasHover:!0,isStriped:!0})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [filters, setFilters] = useState<PowerSearchFilter[]>([]);
    const {
      config,
      applyFilters
    } = usePowerSearchConfig(fieldDefs, 'Books');
    const filteredBooks = applyFilters(filters, books);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }}>
        <PowerSearch config={config} filters={filters} onChange={newFilters => setFilters([...newFilters])} placeholder="Filter books by title, author, year, genre..." resultCount={filteredBooks.length} />
        <Table data={filteredBooks} columns={columns} idKey="id" hasHover />
      </div>;
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [filters, setFilters] = useState<PowerSearchFilter[]>([{
      field: 'genre',
      operator: 'is',
      value: {
        type: 'enum',
        value: 'sci-fi'
      }
    }]);
    const {
      config,
      applyFilters
    } = usePowerSearchConfig(fieldDefs, 'Books');
    const filteredBooks = applyFilters(filters, books);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }}>
        <PowerSearch config={config} filters={filters} onChange={newFilters => setFilters([...newFilters])} placeholder="Filter books..." resultCount={filteredBooks.length} />
        <Table data={filteredBooks} columns={columns} idKey="id" hasHover isStriped />
      </div>;
  }
}`,...a.parameters?.docs?.source}}};const ne=["Default","WithPresetFilters"];export{o as Default,a as WithPresetFilters,ne as __namedExportsOrder,se as default};
