const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/EBcustomTableTooltip.BKlvnRYT.js","assets/chunks/theme.lYIQlzis.js","assets/chunks/framework.nBEwQNqc.js","assets/chunks/EBcustomTableBase.CLXHBDCA.js"])))=>i.map(i=>d[i]);
import{p as u,b3 as p,I as y,o as T,c as k,j as a,a as d,am as m,an as b,J as n,k as t,w as s,au as v,b4 as w,E as h,y as _}from"./chunks/framework.nBEwQNqc.js";import{I as f,$ as g}from"./chunks/index.LJUssTxS.js";const Z=`<template>
  <EbcustomTable
    width="100%"
    :stripe="false"
    :tableHeader="header"
    :data="data"
  ></EbcustomTable>
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
`,E=`<template>
  <EbcustomTable
    width="100%"
    :stripe="false"
    :tableHeader="header"
    :data="data"
    @rowClick="rowClick"
  ></EbcustomTable>
</template>
<script setup lang="tsx">
const rowClick = ()=>{
  console.log('????')
}
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
        // click: (row: any) => {},
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
`,A=JSON.parse('{"title":"表单：EbcustomTable","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"components/customTable/customTable.md","filePath":"components/customTable/customTable.md"}'),V={name:"components/customTable/customTable.md"},x=Object.assign(V,{setup(W){const r=h();u(async()=>{r.value=(await p(async()=>{const{default:o}=await import("./chunks/EBcustomTableTooltip.BKlvnRYT.js");return{default:o}},__vite__mapDeps([0,1,2]))).default});const l=_(!0),i=h();return u(async()=>{i.value=(await p(async()=>{const{default:o}=await import("./chunks/EBcustomTableBase.CLXHBDCA.js");return{default:o}},__vite__mapDeps([3,1,2]))).default}),(o,e)=>{const c=y("ClientOnly");return T(),k("div",null,[e[2]||(e[2]=a("h1",{id:"表单-ebcustomtable",tabindex:"-1"},[d("表单：EbcustomTable "),a("a",{class:"header-anchor",href:"#表单-ebcustomtable","aria-label":"Permalink to “表单：EbcustomTable”"},"​")],-1)),e[3]||(e[3]=a("h2",{id:"基础用法",tabindex:"-1"},[d("基础用法 "),a("a",{class:"header-anchor",href:"#基础用法","aria-label":"Permalink to “基础用法”"},"​")],-1)),m(n(t(f),null,null,512),[[b,l.value]]),n(c,null,{default:s(()=>[n(t(g),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[0]||(e[0]=()=>{l.value=!1}),vueCode:t(E)},v({_:2},[i.value?{name:"vue",fn:s(()=>[n(t(i))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[4]||(e[4]=a("h2",{id:"单行-多行-tooltip",tabindex:"-1"},[d("单行/多行 Tooltip "),a("a",{class:"header-anchor",href:"#单行-多行-tooltip","aria-label":"Permalink to “单行/多行 Tooltip”"},"​")],-1)),m(n(t(f),null,null,512),[[b,l.value]]),n(c,null,{default:s(()=>[n(t(g),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[1]||(e[1]=()=>{l.value=!1}),vueCode:t(Z)},v({_:2},[r.value?{name:"vue",fn:s(()=>[n(t(r))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[5]||(e[5]=w("",2))])}}});export{A as __pageData,x as default};
