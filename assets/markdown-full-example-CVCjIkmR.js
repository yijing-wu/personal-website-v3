import{j as e}from"./index-eDYiklLS.js";const i={title:"Markdown and MDX Full Example",date:"2025-11-04",summary:"Example blog post demonstrating MDX features and styles.",tags:["mdx","demo"],visible:!1};function l(n){const s={a:"a",blockquote:"blockquote",code:"code",del:"del",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",hr:"hr",img:"img",input:"input",li:"li",ol:"ol",p:"p",pre:"pre",section:"section",span:"span",strong:"strong",sup:"sup",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(s.h1,{children:"Headers"}),`
`,e.jsx(s.h1,{children:"h1 Heading"}),`
`,e.jsx(s.h2,{children:"h2 Heading"}),`
`,e.jsx(s.h3,{children:"h3 Heading"}),`
`,e.jsx(s.h4,{children:"h4 Heading"}),`
`,e.jsx(s.h5,{children:"h5 Heading"}),`
`,e.jsx(s.h6,{children:"h6 Heading"}),`
`,e.jsx(s.p,{children:"Alternatively, for H1 and H2, an underline-ish style:"}),`
`,e.jsx(s.h1,{children:"Alt-H1"}),`
`,e.jsx(s.h2,{children:"Alt-H2"}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h1,{children:"Emphasis"}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"This is bold text"})}),`
`,e.jsx(s.p,{children:e.jsx(s.strong,{children:"This is bold text"})}),`
`,e.jsx(s.p,{children:e.jsx(s.em,{children:"This is italic text"})}),`
`,e.jsx(s.p,{children:e.jsx(s.em,{children:"This is italic text"})}),`
`,e.jsx(s.p,{children:e.jsx(s.del,{children:"Strikethrough"})}),`
`,e.jsxs(s.p,{children:["Or use the del tag: ",e.jsx("del",{children:"deleted"})," text."]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h1,{children:"Lists"}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsx(s.li,{children:"First ordered list item"}),`
`,e.jsxs(s.li,{children:["Another item",`
`,e.jsxs(s.ol,{children:[`
`,e.jsx(s.li,{children:"Sub-item"}),`
`,e.jsx(s.li,{children:"Sub-item"}),`
`]}),`
`]}),`
`,e.jsx(s.li,{children:"Third item"}),`
`]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Here is a list item 1"}),`
`,e.jsxs(s.li,{children:["Here is a list item 2",`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:["Nested list item level 2",`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"Nested list item level 3"}),`
`,e.jsxs(s.li,{children:[e.jsx(s.code,{children:"*"}),", ",e.jsx(s.code,{children:"+"}),", or ",e.jsx(s.code,{children:"-"})," can be used as bullet points"]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{children:["It can also be used in this way",`
`,e.jsxs(s.ol,{children:[`
`,e.jsx(s.li,{children:"ordered sub-list"}),`
`]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"unordered sub-list"}),`
`]}),`
`,e.jsxs(s.ol,{start:"2",children:[`
`,e.jsxs(s.li,{children:["ordered sub-list",`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"another unordered sub-list"}),`
`]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:"and another one"}),`
`]}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h1,{children:"Task lists"}),`
`,e.jsxs(s.ul,{className:"contains-task-list",children:[`
`,e.jsxs(s.li,{className:"task-list-item",children:[e.jsx(s.input,{type:"checkbox",checked:!0,disabled:!0})," ","Completed Task"]}),`
`,e.jsxs(s.li,{className:"task-list-item",children:[e.jsx(s.input,{type:"checkbox",disabled:!0})," ","Incomplete Task"]}),`
`]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h1,{children:"Ignoring Markdown formatting"}),`
`,e.jsx(s.p,{children:"You can tell GitHub to ignore (or escape) Markdown formatting by using \\ before the Markdown character."}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{children:`Here is an \\*\\*example\\*\\*.
Here is an **example**.
`})}),`
`,e.jsx(s.p,{children:"Here is an **example**."}),`
`,e.jsxs(s.p,{children:["Here is an ",e.jsx(s.strong,{children:"example"}),"."]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h1,{children:"Links"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://www.google.com",children:"An inline-style link"})}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"https://www.google.com",children:"A reference-style link"})}),`
`]}),`
`]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsx(s.li,{children:e.jsx(s.a,{href:"https://www.google.com",children:"Use numbers for reference-style link definitions"})}),`
`]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:e.jsx(s.a,{href:"../blob/master/LICENSE",children:"A relative reference to a repository file"})}),`
`]}),`
`,e.jsxs(s.li,{children:[`
`,e.jsx(s.p,{children:"Autolink literals"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.a,{href:"http://www.example.com",children:"www.example.com"}),", ",e.jsx(s.a,{href:"https://example.com",children:"https://example.com"}),", and ",e.jsx(s.a,{href:"mailto:contact@example.com",children:"contact@example.com"}),"."]}),`
`]}),`
`]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h1,{children:"Images"}),`
`,e.jsxs(s.p,{children:[`Inline-style:
`,e.jsx(s.img,{src:"/src/assets/ProfilePhoto.png",alt:"example image",title:"Profile"})]}),`
`,e.jsxs(s.p,{children:[`Reference-style:
`,e.jsx(s.img,{src:"/src/assets/ProfilePhoto.png",alt:"example image",title:"Profile"})]}),`
`,e.jsx(s.p,{children:"Div with class for styling:"}),`
`,e.jsx("div",{className:"mdx-image-container",children:e.jsx("img",{src:"/src/assets/ProfilePhoto.png",alt:"Profile",style:{maxWidth:"20%",height:"auto"}})}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h1,{children:e.jsx(s.a,{href:"https://github.com/markdown-it/markdown-it-footnote",children:"Footnotes"})}),`
`,e.jsxs(s.p,{children:["Footnote 1 link",e.jsx(s.sup,{children:e.jsx(s.a,{href:"#user-content-fn-first",id:"user-content-fnref-first","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"1"})}),"."]}),`
`,e.jsxs(s.p,{children:["Footnote 2 link",e.jsx(s.sup,{children:e.jsx(s.a,{href:"#user-content-fn-second",id:"user-content-fnref-second","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"2"})}),"."]}),`
`,e.jsxs(s.p,{children:["Duplicated footnote reference",e.jsx(s.sup,{children:e.jsx(s.a,{href:"#user-content-fn-second",id:"user-content-fnref-second-2","data-footnote-ref":!0,"aria-describedby":"footnote-label",children:"2"})}),"."]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h1,{children:"Code and Syntax Highlighting"}),`
`,e.jsxs(s.p,{children:["Inline ",e.jsx(s.code,{children:"code"})," has ",e.jsx(s.code,{children:"back-ticks around"})," it."]}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-c#",children:[e.jsx(s.span,{className:"hljs-keyword",children:"using"}),` System.IO.Compression;

`,e.jsxs(s.span,{className:"hljs-meta",children:["#",e.jsx(s.span,{className:"hljs-keyword",children:"pragma"})," ",e.jsx(s.span,{className:"hljs-keyword",children:"warning"})," disable 414, 3021"]}),`

`,e.jsx(s.span,{className:"hljs-keyword",children:"namespace"})," ",e.jsx(s.span,{className:"hljs-title",children:"MyApplication"}),`
{
    [`,e.jsxs(s.span,{className:"hljs-meta",children:["Obsolete(",e.jsx(s.span,{className:"hljs-string",children:'"..."'}),")"]}),`]
    `,e.jsx(s.span,{className:"hljs-keyword",children:"class"})," ",e.jsx(s.span,{className:"hljs-title",children:"Program"})," : ",e.jsx(s.span,{className:"hljs-title",children:"IInterface"}),`
    {
        `,e.jsxs(s.span,{className:"hljs-function",children:[e.jsx(s.span,{className:"hljs-keyword",children:"public"})," ",e.jsx(s.span,{className:"hljs-keyword",children:"static"})," ",e.jsx(s.span,{className:"hljs-title",children:"List"}),"<",e.jsx(s.span,{className:"hljs-title",children:"int"}),"> ",e.jsx(s.span,{className:"hljs-title",children:"JustDoIt"}),"(",e.jsxs(s.span,{className:"hljs-params",children:[e.jsx(s.span,{className:"hljs-built_in",children:"int"})," count"]}),")"]}),`
        {
            Console.WriteLine(`,e.jsxs(s.span,{className:"hljs-string",children:['$"Hello ',e.jsx(s.span,{className:"hljs-subst",children:"{Name}"}),'!"']}),`);
            `,e.jsx(s.span,{className:"hljs-keyword",children:"return"})," ",e.jsx(s.span,{className:"hljs-keyword",children:"new"})," List<",e.jsx(s.span,{className:"hljs-built_in",children:"int"}),">(",e.jsx(s.span,{className:"hljs-keyword",children:"new"})," ",e.jsx(s.span,{className:"hljs-built_in",children:"int"}),"[] { ",e.jsx(s.span,{className:"hljs-number",children:"1"}),", ",e.jsx(s.span,{className:"hljs-number",children:"2"}),", ",e.jsx(s.span,{className:"hljs-number",children:"3"}),` })
        }
    }
}
`]})}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-css",children:[e.jsx(s.span,{className:"hljs-keyword",children:"@font-face"}),` {
  `,e.jsx(s.span,{className:"hljs-attribute",children:"font-family"}),": Chunkfive; ",e.jsx(s.span,{className:"hljs-attribute",children:"src"}),": ",e.jsx(s.span,{className:"hljs-built_in",children:"url"}),"(",e.jsx(s.span,{className:"hljs-string",children:"'Chunkfive.otf'"}),`);
}

`,e.jsx(s.span,{className:"hljs-selector-tag",children:"body"}),", ",e.jsx(s.span,{className:"hljs-selector-class",children:".usertext"}),` {
  `,e.jsx(s.span,{className:"hljs-attribute",children:"color"}),": ",e.jsx(s.span,{className:"hljs-number",children:"#F0F0F0"}),"; ",e.jsx(s.span,{className:"hljs-attribute",children:"background"}),": ",e.jsx(s.span,{className:"hljs-number",children:"#600"}),`;
  `,e.jsx(s.span,{className:"hljs-attribute",children:"font-family"}),`: Chunkfive, sans;
}

`,e.jsx(s.span,{className:"hljs-keyword",children:"@import"}),` url(print.css);
`,e.jsx(s.span,{className:"hljs-keyword",children:"@media"}),` print {
  `,e.jsx(s.span,{className:"hljs-selector-tag",children:"a"}),e.jsx(s.span,{className:"hljs-selector-attr",children:"[href^=http]"}),e.jsx(s.span,{className:"hljs-selector-pseudo",children:"::after"}),` {
    `,e.jsx(s.span,{className:"hljs-attribute",children:"content"}),": ",e.jsx(s.span,{className:"hljs-built_in",children:"attr"}),`(href)
  }
}
`]})}),`
`,e.jsx(s.pre,{children:e.jsxs(s.code,{className:"hljs language-javascript",children:[e.jsx(s.span,{className:"hljs-keyword",children:"function"})," ",e.jsx(s.span,{className:"hljs-title function_",children:"$initHighlight"}),"(",e.jsx(s.span,{className:"hljs-params",children:"block, cls"}),`) {
  `,e.jsx(s.span,{className:"hljs-keyword",children:"try"}),` {
    `,e.jsx(s.span,{className:"hljs-keyword",children:"if"})," (cls.",e.jsx(s.span,{className:"hljs-title function_",children:"search"}),"(",e.jsx(s.span,{className:"hljs-regexp",children:"/\\bno\\-highlight\\b/"}),") != -",e.jsx(s.span,{className:"hljs-number",children:"1"}),`)
      `,e.jsx(s.span,{className:"hljs-keyword",children:"return"})," ",e.jsx(s.span,{className:"hljs-title function_",children:"process"}),"(block, ",e.jsx(s.span,{className:"hljs-literal",children:"true"}),", ",e.jsx(s.span,{className:"hljs-number",children:"0x0F"}),`) +
             `,e.jsxs(s.span,{className:"hljs-string",children:['` class="',e.jsx(s.span,{className:"hljs-subst",children:"${cls}"}),'"`']}),`;
  } `,e.jsx(s.span,{className:"hljs-keyword",children:"catch"}),` (e) {
    `,e.jsx(s.span,{className:"hljs-comment",children:"/* handle exception */"}),`
  }
  `,e.jsx(s.span,{className:"hljs-keyword",children:"for"})," (",e.jsx(s.span,{className:"hljs-keyword",children:"var"})," i = ",e.jsx(s.span,{className:"hljs-number",children:"0"})," / ",e.jsx(s.span,{className:"hljs-number",children:"2"}),"; i < classes.",e.jsx(s.span,{className:"hljs-property",children:"length"}),`; i++) {
    `,e.jsx(s.span,{className:"hljs-keyword",children:"if"})," (",e.jsx(s.span,{className:"hljs-title function_",children:"checkCondition"}),"(classes[i]) === ",e.jsx(s.span,{className:"hljs-literal",children:"undefined"}),`)
      `,e.jsx(s.span,{className:"hljs-variable language_",children:"console"}),".",e.jsx(s.span,{className:"hljs-title function_",children:"log"}),"(",e.jsx(s.span,{className:"hljs-string",children:"'undefined'"}),`);
  }
}

`,e.jsx(s.span,{className:"hljs-keyword",children:"export"}),`  $initHighlight;
`]})}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h1,{children:"Tables"}),`
`,e.jsx(s.p,{children:"Colons can be used to align columns."}),`
`,e.jsx(s.p,{children:`There must be at least 3 dashes separating each header cell.
The outer pipes (|) are optional, and you don't need to make the
raw Markdown line up prettily. You can also use inline Markdown.`}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"First Header"}),e.jsx(s.th,{children:"Second Header"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Content Cell"}),e.jsx(s.td,{children:"Content Cell"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"Content Cell"}),e.jsx(s.td,{children:"Content Cell"})]})]})]}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{children:"Markdown"}),e.jsx(s.th,{children:"Table"}),e.jsx(s.th,{children:"with"}),e.jsx(s.th,{children:"style"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{children:e.jsx(s.em,{children:"italic"})}),e.jsx(s.td,{children:e.jsx(s.code,{children:"incline code"})}),e.jsx(s.td,{children:e.jsx(s.strong,{children:"bold"})}),e.jsx(s.td,{children:"|"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{children:"1"}),e.jsx(s.td,{children:"2"}),e.jsx(s.td,{children:"3"}),e.jsx(s.td,{children:"4"})]})]})]}),`
`,e.jsxs(s.table,{children:[e.jsx(s.thead,{children:e.jsxs(s.tr,{children:[e.jsx(s.th,{style:{textAlign:"left"},children:"Left-aligned"}),e.jsx(s.th,{style:{textAlign:"center"},children:"Center-aligned"}),e.jsx(s.th,{style:{textAlign:"right"},children:"Right-aligned"})]})}),e.jsxs(s.tbody,{children:[e.jsxs(s.tr,{children:[e.jsx(s.td,{style:{textAlign:"left"},children:"git status"}),e.jsx(s.td,{style:{textAlign:"center"},children:"git status"}),e.jsx(s.td,{style:{textAlign:"right"},children:"git status"})]}),e.jsxs(s.tr,{children:[e.jsx(s.td,{style:{textAlign:"left"},children:"git diff"}),e.jsx(s.td,{style:{textAlign:"center"},children:"git diff"}),e.jsx(s.td,{style:{textAlign:"right"},children:"git diff"})]})]})]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h1,{children:"Blockquotes"}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:`Blockquotes are very handy in email to emulate reply text.
This line is part of the same quote.`}),`
`]}),`
`,e.jsx(s.p,{children:"Quote break."}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can ",e.jsx(s.em,{children:"put"})," ",e.jsx(s.strong,{children:"Markdown"})," into a blockquote."]}),`
`]}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"Blockquotes can also be nested..."}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"...by using additional greater-than signs right next to each other..."}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsx(s.p,{children:"...or with spaces between arrows."}),`
`]}),`
`]}),`
`]}),`
`,e.jsx(s.hr,{}),`
`,e.jsx(s.h1,{children:"Keyboard input"}),`
`,e.jsxs(s.p,{children:["Press ",e.jsx("kbd",{children:"Ctrl"})," + ",e.jsx("kbd",{children:"C"})," to copy."]}),`
`,e.jsxs(s.section,{"data-footnotes":!0,className:"footnotes",children:[e.jsx(s.h2,{className:"sr-only",id:"footnote-label",children:"Footnotes"}),`
`,e.jsxs(s.ol,{children:[`
`,e.jsxs(s.li,{id:"user-content-fn-first",children:[`
`,e.jsxs(s.p,{children:["Footnote ",e.jsx(s.strong,{children:"can have markup"})]}),`
`,e.jsxs(s.p,{children:["and multiple paragraphs. ",e.jsx(s.a,{href:"#user-content-fnref-first","data-footnote-backref":"","aria-label":"Back to reference 1",className:"data-footnote-backref",children:"↩"})]}),`
`]}),`
`,e.jsxs(s.li,{id:"user-content-fn-second",children:[`
`,e.jsxs(s.p,{children:["Footnote text. ",e.jsx(s.a,{href:"#user-content-fnref-second","data-footnote-backref":"","aria-label":"Back to reference 2",className:"data-footnote-backref",children:"↩"})," ",e.jsxs(s.a,{href:"#user-content-fnref-second-2","data-footnote-backref":"","aria-label":"Back to reference 2-2",className:"data-footnote-backref",children:["↩",e.jsx(s.sup,{children:"2"})]})]}),`
`]}),`
`]}),`
`]})]})}function r(n={}){const{wrapper:s}=n.components||{};return s?e.jsx(s,{...n,children:e.jsx(l,{...n})}):l(n)}const a=Object.freeze(Object.defineProperty({__proto__:null,default:r,meta:i},Symbol.toStringTag,{value:"Module"}));export{a as _};
