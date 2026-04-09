const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/EBcustomTableTooltip.CJyPaotf.js","assets/chunks/theme.Cy504xbR.js","assets/chunks/framework.3oOvuWDt.js","assets/chunks/EBcustomTableBase.B6fpiXns.js"])))=>i.map(i=>d[i]);
import{p,Z as r,I as k,o as m,c as y,j as a,a as d,as as b,at as C,J as s,k as l,w as t,aB as h,b5 as G,E as A,y as F}from"./chunks/framework.3oOvuWDt.js";import{q as o,K as u}from"./chunks/index.BOniDWRv.js";const X=`<template>
  <eb-custom-table
    width="100%"
    :tableHeader="header"
    :data="data"
  ></eb-custom-table>
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
import type { everybodyTableHeader } from "@yuiyideyui/everybody-ui";

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
<style>
.ellipsis2 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
}
</style>
`,B=`<template>
  <div
    v-eb-transition-text="{
      value: num,
    }"
  ></div>
  <eb-custom-table
    width="100%"
    :tableHeader="header"
    :data="data"
    @rowClick="rowClick"
  ></eb-custom-table>
</template>
<script setup lang="tsx">
import type { everybodyTableHeader } from "@yuiyideyui/everybody-ui";
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
`,V=JSON.parse('{"title":"表单： EbcustomTable","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"components/customTable/EBcustomTable.md","filePath":"components/customTable/EBcustomTable.md"}'),W={name:"components/customTable/EBcustomTable.md"},H=Object.assign(W,{setup(v){const g=A();p(async()=>{g.value=(await r(async()=>{const{default:e}=await import("./chunks/EBcustomTableTooltip.CJyPaotf.js");return{default:e}},__vite__mapDeps([0,1,2]))).default});const n=F(!0),I=A();return p(async()=>{I.value=(await r(async()=>{const{default:e}=await import("./chunks/EBcustomTableBase.B6fpiXns.js");return{default:e}},__vite__mapDeps([3,1,2]))).default}),(e,i)=>{const c=k("ClientOnly");return m(),y("div",null,[i[2]||(i[2]=a("h1",{id:"表单-ebcustomtable",tabindex:"-1"},[d("表单： EbcustomTable "),a("a",{class:"header-anchor",href:"#表单-ebcustomtable","aria-label":"Permalink to “表单： EbcustomTable”"},"​")],-1)),i[3]||(i[3]=a("h2",{id:"基础用法",tabindex:"-1"},[d("基础用法 "),a("a",{class:"header-anchor",href:"#基础用法","aria-label":"Permalink to “基础用法”"},"​")],-1)),b(s(l(o),null,null,512),[[C,n.value]]),s(c,null,{default:t(()=>[s(l(u),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,playgroundUrl:"https://yuiyideyui.github.io/Everybody-ui-playground/#eyJBcHAudnVlIjoiPHRlbXBsYXRlPlxuICA8ZGl2XG4gICAgdi1lYi10cmFuc2l0aW9uLXRleHQ9XCJ7XG4gICAgICB2YWx1ZTogbnVtLFxuICAgIH1cIlxuICA+PC9kaXY+XG4gIDxlYi1jdXN0b20tdGFibGVcbiAgICB3aWR0aD1cIjEwMCVcIlxuICAgIDp0YWJsZUhlYWRlcj1cImhlYWRlclwiXG4gICAgOmRhdGE9XCJkYXRhXCJcbiAgICBAcm93Q2xpY2s9XCJyb3dDbGlja1wiXG4gID48L2ViLWN1c3RvbS10YWJsZT5cbjwvdGVtcGxhdGU+XG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c3hcIj5cbmltcG9ydCB0eXBlIHsgZXZlcnlib2R5VGFibGVIZWFkZXIgfSBmcm9tIFwiQHl1aXlpZGV5dWkvZXZlcnlib2R5LXVpXCI7XG5pbXBvcnQgeyByZWYgfSBmcm9tIFwidnVlXCI7XG5jb25zdCBudW0gPSByZWYoMCk7XG5jb25zdCByb3dDbGljayA9ICgpID0+IHtcbiAgbnVtLnZhbHVlICs9IDEwMDA7XG59O1xuY29uc3QgaGVhZGVyOiBldmVyeWJvZHlUYWJsZUhlYWRlciA9IFtcbiAge1xuICAgIGxhYmVsOiBcIueCueaIkeS4jeS8muinpuWPkeihjOeCueWHu1wiLFxuICAgIGFsaWduOiBcImNlbnRlclwiLFxuICAgIHByb3A6IFwibmFtZVwiLFxuICAgIGN1c3RvbUxpc3Q6IFtcbiAgICAgIHtcbiAgICAgICAgY2VsbFJlbmRlcmVyOiAoeyB2YWwgfTogeyB2YWw6IHN0cmluZyB9KSA9PiB7XG4gICAgICAgICAgcmV0dXJuIDxkaXY+e3ZhbH08L2Rpdj47XG4gICAgICAgIH0sXG4gICAgICAgIGNsaWNrOiAoKSA9PiB7fSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIHByb3A6IFwibmFtZVwiLFxuICAgIGxhYmVsOiBcIueCueWHu+aIkSsxMDAw5ZmiXCIsXG4gICAgYWxpZ246IFwiY2VudGVyXCIsXG4gICAgY3VzdG9tTGlzdDogW1xuICAgICAge1xuICAgICAgICBjZWxsUmVuZGVyZXI6ICh7IHZhbCB9OiB7IHZhbDogc3RyaW5nIH0pID0+IHtcbiAgICAgICAgICByZXR1cm4gPGRpdj57dmFsfTwvZGl2PjtcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIHByb3A6IFwiYWdlXCIsXG4gICAgbGFiZWw6IFwi54K55oiR5bm06b6EKzFcIixcbiAgICBhbGlnbjogXCJjZW50ZXJcIixcbiAgICBjdXN0b21MaXN0OiBbXG4gICAgICB7XG4gICAgICAgIGNlbGxSZW5kZXJlcjogKHtcbiAgICAgICAgICB2YWwsXG4gICAgICAgICAgcm93RGF0YSxcbiAgICAgICAgICBwcm9wLFxuICAgICAgICB9OiB7XG4gICAgICAgICAgdmFsOiBzdHJpbmc7XG4gICAgICAgICAgcm93RGF0YTogYW55O1xuICAgICAgICAgIHByb3A6IHN0cmluZztcbiAgICAgICAgfSkgPT4ge1xuICAgICAgICAgIGNvbnN0IGFkZEFnZSA9ICh2YWw6IG51bWJlciwgcm93RGF0YTogYW55LCBwcm9wOiBzdHJpbmcpID0+IHtcbiAgICAgICAgICAgIHJvd0RhdGFbcHJvcF0gKz0gdmFsO1xuICAgICAgICAgIH07XG4gICAgICAgICAgcmV0dXJuIDxkaXYgb25DbGljaz17KCkgPT4gYWRkQWdlKDEsIHJvd0RhdGEsIHByb3ApfT57dmFsfTwvZGl2PjtcbiAgICAgICAgfSxcbiAgICAgICAgY2xpY2s6ICgpID0+IHt9LFxuICAgICAgfSxcbiAgICBdLFxuICB9LFxuXTtcbmNvbnN0IGRhdGEgPSBbXG4gIHtcbiAgICBuYW1lOiBcIuW8oOS4iVwiLFxuICAgIGFnZTogMTgsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIuW8oOS4iVwiLFxuICAgIGFnZTogMTgsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIuW8oOS4iVwiLFxuICAgIGFnZTogMTgsXG4gIH0sXG5dO1xuPC9zY3JpcHQ+XG4ifQ==",onMount:i[0]||(i[0]=()=>{n.value=!1}),vueCode:l(B)},h({_:2},[I.value?{name:"vue",fn:t(()=>[s(l(I))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),i[4]||(i[4]=a("h2",{id:"单行-多行-tooltip",tabindex:"-1"},[d("单行/多行 Tooltip "),a("a",{class:"header-anchor",href:"#单行-多行-tooltip","aria-label":"Permalink to “单行/多行 Tooltip”"},"​")],-1)),b(s(l(o),null,null,512),[[C,n.value]]),s(c,null,{default:t(()=>[s(l(u),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,playgroundUrl:"https://yuiyideyui.github.io/Everybody-ui-playground/#eyJBcHAudnVlIjoiPHRlbXBsYXRlPlxuICA8ZWItY3VzdG9tLXRhYmxlXG4gICAgd2lkdGg9XCIxMDAlXCJcbiAgICA6dGFibGVIZWFkZXI9XCJoZWFkZXJcIlxuICAgIDpkYXRhPVwiZGF0YVwiXG4gID48L2ViLWN1c3RvbS10YWJsZT5cbiAgPGVsLXRvb2x0aXBcbiAgICByZWY9XCJ0b29sdGlwUmVmXCJcbiAgICA6dmlzaWJsZT1cInNob3dUb29sdGlwXCJcbiAgICA6Y29udGVudD1cInRvb2x0aXBDb250ZW50XCJcbiAgICA6dmlydHVhbC1yZWY9XCJ0b29sdGlwVHJpZ2dlclwiXG4gICAgdmlydHVhbC10cmlnZ2VyaW5nXG4gICAgcGxhY2VtZW50PVwidG9wXCJcbiAgLz5cbjwvdGVtcGxhdGU+XG48c2NyaXB0IHNldHVwIGxhbmc9XCJ0c3hcIj5cbmltcG9ydCB7IHJlZiB9IGZyb20gXCJ2dWVcIjtcbmltcG9ydCB7IEVsVG9vbHRpcCB9IGZyb20gXCJlbGVtZW50LXBsdXNcIjtcbmltcG9ydCB0eXBlIHsgZXZlcnlib2R5VGFibGVIZWFkZXIgfSBmcm9tIFwiQHl1aXlpZGV5dWkvZXZlcnlib2R5LXVpXCI7XG5cbmNvbnN0IHRvb2x0aXBUcmlnZ2VyID0gcmVmKCk7XG5jb25zdCB0b29sdGlwQ29udGVudCA9IHJlZihcIlwiKTtcbmNvbnN0IHNob3dUb29sdGlwID0gcmVmKGZhbHNlKTtcbmNvbnN0IGhlYWRlcjpldmVyeWJvZHlUYWJsZUhlYWRlciA9IFtcbiAge1xuICAgIHByb3A6IFwiYWRkcmVzc1wiLFxuICAgIGxhYmVsOiBcIlRvb2x0aXBcIixcbiAgICBhbGlnbjogXCJjZW50ZXJcIixcbiAgICBzaG93T3ZlcmZsb3dUb29sdGlwOiB0cnVlLFxuICAgIGN1c3RvbUxpc3Q6IFtcbiAgICAgIHtcbiAgICAgICAgY2VsbFJlbmRlcmVyOiAoe3ZhbH06IHsgdmFsOiBzdHJpbmcgfSkgPT4ge1xuICAgICAgICAgIHJldHVybiA8Pnt2YWx9PC8+O1xuICAgICAgICB9LFxuICAgICAgICBjbGljazogKHJvdzogYW55KSA9PiB7fSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIHByb3A6IFwiYWRkcmVzczJcIixcbiAgICBsYWJlbDogXCLlpJrooYxUb29sdGlwMlwiLFxuICAgIGFsaWduOiBcImNlbnRlclwiLFxuICAgIGN1c3RvbUxpc3Q6IFtcbiAgICAgIHtcbiAgICAgICAgY2VsbFJlbmRlcmVyOiAoe3ZhbH06IHsgdmFsOiBzdHJpbmcgfSkgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzPVwiZWxsaXBzaXMyXCJcbiAgICAgICAgICAgICAgb25Nb3VzZWVudGVyPXsoZSkgPT4gY2hlY2tPdmVyZmxvdyhlLHZhbCl9XG4gICAgICAgICAgICAgIG9uTW91c2VsZWF2ZT17KCkgPT4ge1xuICAgICAgICAgICAgICAgIHNob3dUb29sdGlwLnZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHt2YWx9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9LFxuICAgICAgICBjbGljazogKHJvdzogYW55KSA9PiB7fSxcbiAgICAgIH0sXG4gICAgXSxcbiAgfSxcbl07XG4vLyDliqjmgIHmo4DmtYvmmK/lkKbnnJ/nmoTmuqLlh7rkuobvvIzlpoLmnpzmsqHmnInmuqLlh7rliJnkuI3mmL7npLogVG9vbHRpcFxuY29uc3QgY2hlY2tPdmVyZmxvdyA9IChlOiBFdmVudCwgdmFsOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgdGFyZ2V0ID0gZS5jdXJyZW50VGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAvLyDlj6rmnInmuqLlh7rmiY3lpITnkIZcbiAgaWYgKHRhcmdldC5zY3JvbGxIZWlnaHQgPiB0YXJnZXQub2Zmc2V0SGVpZ2h0KSB7XG4gICAgdG9vbHRpcENvbnRlbnQudmFsdWUgPSB2YWw7XG4gICAgdG9vbHRpcFRyaWdnZXIudmFsdWUgPSB0YXJnZXQ7XG4gICAgc2hvd1Rvb2x0aXAudmFsdWUgPSB0cnVlO1xuICB9ZWxzZXtcbiAgICBzaG93VG9vbHRpcC52YWx1ZSA9IGZhbHNlO1xuICB9XG59O1xuY29uc3QgZGF0YSA9IFtcbiAge1xuICAgIGFkZHJlc3M6XG4gICAgICBcIuWMl+S6rOW4gua1t+a3gOWMuuWMl+S6rOW4gua1t+a3gOWMuuWMl+S6rOW4gua1t+a3gOWMuuWMl+S6rOW4gua1t+a3gOWMuuWMl+S6rOW4gua1t+a3gOWMuuWMl+S6rOW4gua1t+a3gOWMuuWMl+S6rOW4gua1t+a3gOWMuuWMl+S6rOW4gua1t+a3gOWMuuWMl+S6rOW4gua1t+a3gOWMuuWMl+S6rOW4gua1t+a3gOWMulwiLFxuICAgIGFkZHJlc3MyOlxuICAgICAgXCLljJfkuqzluILmtbfmt4DljLrljJfkuqzluILmtbfmt4DljLrljJfkuqzluILmtbfmt4DljLrljJfkuqzluILmtbfmt4DljLrljJfkuqzluILmtbfmt4DljLrljJfkuqzluILmtbfmt4DljLrljJfkuqzluILmtbfmt4DljLrljJfkuqzluILmtbfmt4DljLrljJfkuqzluILmtbfmt4DljLrljJfkuqzluILmtbfmt4DljLpcIixcbiAgfSxcbiAge1xuICAgIGFkZHJlc3M6IFwi5YyX5Lqs5biC5rW35reA5Yy6XCIsXG4gICAgYWRkcmVzczI6IFwi5YyX5Lqs5biC5rW35reA5Yy6XCIsXG4gIH0sXG4gIHtcbiAgICBhZGRyZXNzOiBcIuWMl+S6rOW4gua1t+a3gOWMulwiLFxuICAgIGFkZHJlc3MyOiBcIuWMl+S6rOW4gua1t+a3gOWMulwiLFxuICB9LFxuXTtcbjwvc2NyaXB0PlxuPHN0eWxlPlxuLmVsbGlwc2lzMiB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG59XG48L3N0eWxlPlxuIn0=",onMount:i[1]||(i[1]=()=>{n.value=!1}),vueCode:l(X)},h({_:2},[g.value?{name:"vue",fn:t(()=>[s(l(g))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),i[5]||(i[5]=G(`<h2 id="组件prop" tabindex="-1">组件prop <a class="header-anchor" href="#组件prop" aria-label="Permalink to “组件prop”">​</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> propsType</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
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
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,2))])}}});export{V as __pageData,H as default};
