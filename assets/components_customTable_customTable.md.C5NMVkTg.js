const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/EBcustomTableTooltip.DbuUtjiE.js","assets/chunks/theme.hsSYec7Z.js","assets/chunks/framework.a6CegqQY.js","assets/chunks/EBcustomTableBase.2L028R_1.js"])))=>i.map(i=>d[i]);
import{p as u,b3 as p,I as y,o as T,c as _,j as a,a as d,am as m,an as v,J as n,k as t,w as s,au as b,b4 as k,E as h,y as w}from"./chunks/framework.a6CegqQY.js";import{I as f,$ as g}from"./chunks/index.De0KyrYU.js";const Z=`<template>
  <eb-customTable
    width="100%"
    :stripe="false"
    :tableHeader="header"
    :data="data"
  ></eb-customTable>
  <el-tooltip
    ref="tooltipRef"
    :visible="showTooltip"
    :content="tooltipContent"
    :virtual-ref="tooltipTrigger"
    virtual-triggering
    placement="top"
  />
</template>
<script setup lang="tsx">
import { ref } from "vue";
import { ElTooltip } from "element-plus";
const tooltipTrigger = ref();
const tooltipContent = ref("");
const showTooltip = ref(false);
const header = [
  {
    prop: "address",
    label: "Tooltip",
    align: "center",
    showOverflowTooltip: true,
    customList: [
      {
        cellRenderer: (
          el: Element,
          binding: any,
          Vnode: any,
          val: string,
          row: any,
          prop: string,
        ) => {
          return <>{val}</>;
        },
        click: (row: any) => {},
      },
    ],
  },
  {
    prop: "address2",
    label: "多行Tooltip2",
    align: "center",
    customList: [
      {
        cellRenderer: (
          el: Element,
          binding: any,
          Vnode: any,
          val: string,
          row: any,
          prop: string,
        ) => {
          return (
            <div
              class="ellipsis2"
              onMouseenter={(e) => checkOverflow(e,val)}
              onMouseleave={() => {
                showTooltip.value = false;
              }}
            >
              {val}
            </div>
          );
        },
        click: (row: any) => {},
      },
    ],
  },
];
// 动态检测是否真的溢出了，如果没有溢出则不显示 Tooltip
const checkOverflow = (e,val) => {
  const target = e.currentTarget as HTMLElement;
  // 只有溢出才处理
  if (target.scrollHeight > target.offsetHeight) {
    tooltipContent.value = val;
    tooltipTrigger.value = target;
    showTooltip.value = true;
  }else{
    showTooltip.value = false;
  }
};
const data = [
  {
    address:
      "北京市海淀区北京市海淀区北京市海淀区北京市海淀区北京市海淀区北京市海淀区北京市海淀区北京市海淀区北京市海淀区北京市海淀区",
    address2:
      "北京市海淀区北京市海淀区北京市海淀区北京市海淀区北京市海淀区北京市海淀区北京市海淀区北京市海淀区北京市海淀区北京市海淀区",
  },
  {
    address: "北京市海淀区",
    address2: "北京市海淀区",
  },
  {
    address: "北京市海淀区",
    address2: "北京市海淀区",
  },
];
<\/script>
<style lang="less">
.ellipsis2 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
}
</style>
`,V=`<template>
  <eb-customTable
    width="100%"
    :stripe="false"
    :tableHeader="header"
    :data="data"
  ></eb-customTable>
</template>
<script setup lang="tsx">
import { ref } from "vue";
const header = [
  {
    prop: "name",
    label: "姓名",
    align: "center",
    customList: [
      {
        cellRenderer: (
          el: Element,
          binding: any,
          Vnode: any,
          val: string,
          row: any,
          prop: string,
        ) => {
          return <div>{val}</div>;
        },
        click: (row: any) => {},
      },
    ],
  },
  {
    prop: "age",
    label: "点我年龄+1",
    align: "center",
    customList: [
      {
        cellRenderer: (
          el: Element,
          binding: any,
          Vnode: any,
          val: string,
          row: any,
          prop: string,
        ) => {
          const addAge = (val: number, row: any, prop: string) => {
            row[prop] += val;
          };
          return <div onClick={() => addAge(1, row, prop)}>{val}</div>;
        },
        click: (row: any) => {},
      },
    ],
  },
];
const data = [
  {
    name: "张三",
    age: 18,
  },
  {
    name: "张三",
    age: 18,
  },
  {
    name: "张三",
    age: 18,
  },
];
<\/script>
`,E=JSON.parse('{"title":"table,表单","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"components/customTable/customTable.md","filePath":"components/customTable/customTable.md"}'),W={name:"components/customTable/customTable.md"},x=Object.assign(W,{setup(R){const r=h();u(async()=>{r.value=(await p(async()=>{const{default:o}=await import("./chunks/EBcustomTableTooltip.DbuUtjiE.js");return{default:o}},__vite__mapDeps([0,1,2]))).default});const l=w(!0),i=h();return u(async()=>{i.value=(await p(async()=>{const{default:o}=await import("./chunks/EBcustomTableBase.2L028R_1.js");return{default:o}},__vite__mapDeps([3,2]))).default}),(o,e)=>{const c=y("ClientOnly");return T(),_("div",null,[e[2]||(e[2]=a("h1",{id:"table-表单",tabindex:"-1"},[d("table,表单 "),a("a",{class:"header-anchor",href:"#table-表单","aria-label":"Permalink to “table,表单”"},"​")],-1)),e[3]||(e[3]=a("h2",{id:"基础用法",tabindex:"-1"},[d("基础用法 "),a("a",{class:"header-anchor",href:"#基础用法","aria-label":"Permalink to “基础用法”"},"​")],-1)),m(n(t(f),null,null,512),[[v,l.value]]),n(c,null,{default:s(()=>[n(t(g),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[0]||(e[0]=()=>{l.value=!1}),vueCode:t(V)},b({_:2},[i.value?{name:"vue",fn:s(()=>[n(t(i))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[4]||(e[4]=a("h2",{id:"单行-多行-tooltip",tabindex:"-1"},[d("单行/多行 Tooltip "),a("a",{class:"header-anchor",href:"#单行-多行-tooltip","aria-label":"Permalink to “单行/多行 Tooltip”"},"​")],-1)),m(n(t(f),null,null,512),[[v,l.value]]),n(c,null,{default:s(()=>[n(t(g),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[1]||(e[1]=()=>{l.value=!1}),vueCode:t(Z)},b({_:2},[r.value?{name:"vue",fn:s(()=>[n(t(r))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[5]||(e[5]=k('<h2 id="指令参数" tabindex="-1">指令参数 <a class="header-anchor" href="#指令参数" aria-label="Permalink to “指令参数”">​</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"></span></code></pre></div>',2))])}}});export{E as __pageData,x as default};
