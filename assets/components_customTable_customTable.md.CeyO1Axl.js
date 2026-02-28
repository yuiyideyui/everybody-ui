const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/EBcustomTableTooltip.B7lvA1Wq.js","assets/chunks/theme.tycCvqk8.js","assets/chunks/framework.nBEwQNqc.js","assets/chunks/EBcustomTableBase.BOsaNaQT.js"])))=>i.map(i=>d[i]);
import{p as k,b3 as d,I as v,o as E,c as F,j as i,a as h,am as c,an as u,J as a,k as n,w as l,au as g,b4 as f,E as y,y as A}from"./chunks/framework.nBEwQNqc.js";import{I as m,$ as b}from"./chunks/index.LJUssTxS.js";const T=`<template>
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
import { everybodyTableHeader } from "everybody-ui";

const tooltipTrigger = ref();
const tooltipContent = ref("");
const showTooltip = ref(false);
const header:everybodyTableHeader = [
  {
    prop: "address",
    label: "Tooltip",
    align: "center",
    showOverflowTooltip: true,
    customList: [
      {
        cellRenderer: ({val}: { val: string }) => {
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
        cellRenderer: ({val}: { val: string }) => {
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
const checkOverflow = (e: Event, val: string) => {
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
`,D=`<template>
  <div
    v-eb-transition-text="{
      value: num,
    }"
  ></div>
  <EbcustomTable
    width="100%"
    :stripe="false"
    :tableHeader="header"
    :data="data"
    @rowClick="rowClick"
  ></EbcustomTable>
</template>
<script setup lang="tsx">
import { everybodyTableHeader } from "everybody-ui";
import { ref } from "vue";
const num = ref(0);
const rowClick = () => {
  num.value += 1000;
};
const header: everybodyTableHeader = [
  {
    label: "点我不会触发行点击",
    align: "center",
    prop: "name",
    customList: [
      {
        cellRenderer: ({ val }: { val: string }) => {
          return <div>{val}</div>;
        },
        click: () => {},
      },
    ],
  },
  {
    prop: "name",
    label: "点击我+1000噢",
    align: "center",
    customList: [
      {
        cellRenderer: ({ val }: { val: string }) => {
          return <div>{val}</div>;
        },
      },
    ],
  },
  {
    prop: "age",
    label: "点我年龄+1",
    align: "center",
    customList: [
      {
        cellRenderer: ({
          val,
          rowData,
          prop,
        }: {
          val: string;
          rowData: any;
          prop: string;
        }) => {
          const addAge = (val: number, rowData: any, prop: string) => {
            rowData[prop] += val;
          };
          return <div onClick={() => addAge(1, rowData, prop)}>{val}</div>;
        },
        click: () => {},
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
`,R=JSON.parse('{"title":"表单：EbcustomTable","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"components/customTable/customTable.md","filePath":"components/customTable/customTable.md"}'),C={name:"components/customTable/customTable.md"},Z=Object.assign(C,{setup(B){const r=y();k(async()=>{r.value=(await d(async()=>{const{default:t}=await import("./chunks/EBcustomTableTooltip.B7lvA1Wq.js");return{default:t}},__vite__mapDeps([0,1,2]))).default});const e=A(!0),p=y();return k(async()=>{p.value=(await d(async()=>{const{default:t}=await import("./chunks/EBcustomTableBase.BOsaNaQT.js");return{default:t}},__vite__mapDeps([3,1,2]))).default}),(t,s)=>{const o=v("ClientOnly");return E(),F("div",null,[s[2]||(s[2]=i("h1",{id:"表单-ebcustomtable",tabindex:"-1"},[h("表单：EbcustomTable "),i("a",{class:"header-anchor",href:"#表单-ebcustomtable","aria-label":"Permalink to “表单：EbcustomTable”"},"​")],-1)),s[3]||(s[3]=i("h2",{id:"基础用法",tabindex:"-1"},[h("基础用法 "),i("a",{class:"header-anchor",href:"#基础用法","aria-label":"Permalink to “基础用法”"},"​")],-1)),c(a(n(m),null,null,512),[[u,e.value]]),a(o,null,{default:l(()=>[a(n(b),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:s[0]||(s[0]=()=>{e.value=!1}),vueCode:n(D)},g({_:2},[p.value?{name:"vue",fn:l(()=>[a(n(p))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),s[4]||(s[4]=i("h2",{id:"单行-多行-tooltip",tabindex:"-1"},[h("单行/多行 Tooltip "),i("a",{class:"header-anchor",href:"#单行-多行-tooltip","aria-label":"Permalink to “单行/多行 Tooltip”"},"​")],-1)),c(a(n(m),null,null,512),[[u,e.value]]),a(o,null,{default:l(()=>[a(n(b),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:s[1]||(s[1]=()=>{e.value=!1}),vueCode:n(T)},g({_:2},[r.value?{name:"vue",fn:l(()=>[a(n(r))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),s[5]||(s[5]=f(`<h2 id="组件prop" tabindex="-1">组件prop <a class="header-anchor" href="#组件prop" aria-label="Permalink to “组件prop”">​</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> propsType</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    tableHeader</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> everybodyTableHeader</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    customListLoading</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    data</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Record</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;[]</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    isDataSlice</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">        isSlice</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    rowHeight</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //其他参数等同于el-table</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> propsType1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    tableHeader</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> everybodyTableHeader</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    customListLoading</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    data</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Record</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;[]</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    isDataSlice</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//虚拟滚动</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">        isSlice</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//开启</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">        num</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//展示多少行</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">    rowHeight</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//虚拟滚动行高必须设置</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    //其他参数等同于el-table</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,2))])}}});export{R as __pageData,Z as default};
