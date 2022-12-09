import{_ as b,a as v}from"./DocumentEnd.12266733.js";import{m as g,y as _,o,a as s,k as h,q as f,t as N,u as m,F as d,r as x,e as u,b as c,p as y}from"./entry.67a24d28.js";import"./components.263fa039.js";import"./composables.4dfe9424.js";const P=["href"],k={__name:"OuterRef",props:{page:String,label:String},setup(p){const t=p,n=g("globalEnv"),r=_(()=>{if(t.page)return t.page;if(!n.value)return null;for(let e in n.value.idNames)if(n.value.idNames[e][t.label])return e}),i=_(()=>{if(!n.value)return;let e;if(t.page?e=n.value.idNames[t.page]:e=n.value.idNames[r.value],!e)return"Page"+t.page+"not found";if(!t.label)return n.value.pageInfo[t.page].title;let a=e[t.label];if(!!a)return a.title?a.tagName+": "+a.title:a.tagName+" "+a.index.join(".")+"(other page)"}),l=_(()=>{let e=t.page||r.value;return e=="index"&&(e="/"),t.label&&(e+="#"+t.label),e});return(e,a)=>(o(),s("a",{href:m(l)},[h(e.$slots,"default",{},()=>[f(N(m(i)||"Here"),1)])],8,P))}};const E={class:"block",style:{padding:"1rem"}},I=u("h3",null,"Pages",-1),S=u("br",null,null,-1),j={__name:"ProjectContentTable",setup(p){const t=g("pageEnv");return(n,r)=>(o(),s("div",E,[I,(o(!0),s(d,null,x(m(t).linearize,(i,l)=>(o(),s(d,null,[c(k,{page:i},null,8,["page"]),f(),S],64))),256))]))}},D=u("h1",{class:"title"},"NISQ Index",-1),T={__name:"index",setup(p){return y("pageEnv",{basePath:"nisq-index",outputPathPrefix:"/page_assets",projectTitle:"Noisy intermediate-scale quantum (NISQ) algorithms",bibPath:"NISQ_Review.bib",linearize:["many-body","machine-learning","combinatorial-optimization","numerical-solvers-and-finance","more-applications","software"],gitRepoUrl:"https://github.com/aspuru-guzik-group/nisq-index",license:{title:"Creative Commons Attribution-ShareAlike 4.0 International License",link:"https://creativecommons.org/licenses/by-sa/4.0/"},idNames:{},counter:{},citedKeys:[],footnotes:[],title:"NISQ Index",creditInfo:[],slidesMode:!1,outerLinks:[],bibDict:{},bibKeys:[]}),(n,r)=>{const i=b,l=j,e=v;return o(),s("div",null,[c(i),u("article",null,[D,c(l),c(e)])])}}};export{T as default};
