const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/EBmessageClose.D9CMncHr.js","assets/chunks/theme.Cvza_y5s.js","assets/chunks/framework.3oOvuWDt.js","assets/chunks/EBmessageBase.Bf88Iurg.js"])))=>i.map(i=>d[i]);
import{p as k,Z as g,I as A,o as C,c as m,j as e,a as p,as as r,at as u,J as i,k as a,w as n,aB as c,b5 as v,E as b,y as E}from"./chunks/framework.3oOvuWDt.js";import{q as y,K as I}from"./chunks/index.BOniDWRv.js";const F=`<template>
    <div>
        <button @click="showMessage">点击显示消息提示</button>
    </div>
</template>

<script setup lang="tsx">
import { EbMessage } from "@yuiyideyui/everybody-ui";
const showMessage = () => {
    const {close} = EbMessage({
        jsx: () => <div>这是一个消息提示！<button onClick={()=>close()}>关闭</button></div>,
        position: "top",
    })
}
<\/script>
`,B=`<template>
    <div>
        <button @click="showMessage">点击显示消息提示</button>
    </div>
    <div>
        <button @click="showMessageWithoutBaseStyle">点击显示消息提示无基本样式</button>
    </div>
</template>

<script setup lang="tsx">
import { EbMessage } from "@yuiyideyui/everybody-ui";
const showMessage = () => {
    EbMessage({
        jsx: () => <div>这是一个消息提示！</div>,
        position: "top",
        timeClose: 3000
    })
}
const showMessageWithoutBaseStyle = () => {
    EbMessage({
        jsx: () => <div>这是一个消息提示！</div>,
        position: "top",
        timeClose: 3000,
        baseStyle: false
    })
}
<\/script>
`,w=JSON.parse('{"title":"消息： EbMessage","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"components/message/EBmessage.md","filePath":"components/message/EBmessage.md"}'),Z={name:"components/message/EBmessage.md"},N=Object.assign(Z,{setup(X){const h=b();k(async()=>{h.value=(await g(async()=>{const{default:l}=await import("./chunks/EBmessageClose.D9CMncHr.js");return{default:l}},__vite__mapDeps([0,1,2]))).default});const t=E(!0),d=b();return k(async()=>{d.value=(await g(async()=>{const{default:l}=await import("./chunks/EBmessageBase.Bf88Iurg.js");return{default:l}},__vite__mapDeps([3,1,2]))).default}),(l,s)=>{const o=A("ClientOnly");return C(),m("div",null,[s[2]||(s[2]=e("h1",{id:"消息-ebmessage",tabindex:"-1"},[p("消息： EbMessage "),e("a",{class:"header-anchor",href:"#消息-ebmessage","aria-label":"Permalink to “消息： EbMessage”"},"​")],-1)),s[3]||(s[3]=e("h2",{id:"基础用法",tabindex:"-1"},[p("基础用法 "),e("a",{class:"header-anchor",href:"#基础用法","aria-label":"Permalink to “基础用法”"},"​")],-1)),r(i(a(y),null,null,512),[[u,t.value]]),i(o,null,{default:n(()=>[i(a(I),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,playgroundUrl:"https://yuiyideyui.github.io/Everybody-ui-playground/#eyJBcHAudnVlIjoiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxidXR0b24gQGNsaWNrPVwic2hvd01lc3NhZ2VcIj7ngrnlh7vmmL7npLrmtojmga/mj5DnpLo8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2PlxuICAgICAgICA8YnV0dG9uIEBjbGljaz1cInNob3dNZXNzYWdlV2l0aG91dEJhc2VTdHlsZVwiPueCueWHu+aYvuekuua2iOaBr+aPkOekuuaXoOWfuuacrOagt+W8jzwvYnV0dG9uPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHN4XCI+XG5pbXBvcnQgeyBFYk1lc3NhZ2UgfSBmcm9tIFwiQHl1aXlpZGV5dWkvZXZlcnlib2R5LXVpXCI7XG5jb25zdCBzaG93TWVzc2FnZSA9ICgpID0+IHtcbiAgICBFYk1lc3NhZ2Uoe1xuICAgICAgICBqc3g6ICgpID0+IDxkaXY+6L+Z5piv5LiA5Liq5raI5oGv5o+Q56S677yBPC9kaXY+LFxuICAgICAgICBwb3NpdGlvbjogXCJ0b3BcIixcbiAgICAgICAgdGltZUNsb3NlOiAzMDAwXG4gICAgfSlcbn1cbmNvbnN0IHNob3dNZXNzYWdlV2l0aG91dEJhc2VTdHlsZSA9ICgpID0+IHtcbiAgICBFYk1lc3NhZ2Uoe1xuICAgICAgICBqc3g6ICgpID0+IDxkaXY+6L+Z5piv5LiA5Liq5raI5oGv5o+Q56S677yBPC9kaXY+LFxuICAgICAgICBwb3NpdGlvbjogXCJ0b3BcIixcbiAgICAgICAgdGltZUNsb3NlOiAzMDAwLFxuICAgICAgICBiYXNlU3R5bGU6IGZhbHNlXG4gICAgfSlcbn1cbjwvc2NyaXB0PlxuIn0=",onMount:s[0]||(s[0]=()=>{t.value=!1}),vueCode:a(B)},c({_:2},[d.value?{name:"vue",fn:n(()=>[i(a(d))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),s[4]||(s[4]=e("h2",{id:"自定义关闭",tabindex:"-1"},[p("自定义关闭 "),e("a",{class:"header-anchor",href:"#自定义关闭","aria-label":"Permalink to “自定义关闭”"},"​")],-1)),r(i(a(y),null,null,512),[[u,t.value]]),i(o,null,{default:n(()=>[i(a(I),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,playgroundUrl:"https://yuiyideyui.github.io/Everybody-ui-playground/#eyJBcHAudnVlIjoiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxidXR0b24gQGNsaWNrPVwic2hvd01lc3NhZ2VcIj7ngrnlh7vmmL7npLrmtojmga/mj5DnpLo8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzeFwiPlxuaW1wb3J0IHsgRWJNZXNzYWdlIH0gZnJvbSBcIkB5dWl5aWRleXVpL2V2ZXJ5Ym9keS11aVwiO1xuY29uc3Qgc2hvd01lc3NhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3Qge2Nsb3NlfSA9IEViTWVzc2FnZSh7XG4gICAgICAgIGpzeDogKCkgPT4gPGRpdj7ov5nmmK/kuIDkuKrmtojmga/mj5DnpLrvvIE8YnV0dG9uIG9uQ2xpY2s9eygpPT5jbG9zZSgpfT7lhbPpl608L2J1dHRvbj48L2Rpdj4sXG4gICAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxuICAgIH0pXG59XG48L3NjcmlwdD5cbiJ9",onMount:s[1]||(s[1]=()=>{t.value=!1}),vueCode:a(F)},c({_:2},[h.value?{name:"vue",fn:n(()=>[i(a(h))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),s[5]||(s[5]=v(`<h2 id="组件参数" tabindex="-1">组件参数 <a class="header-anchor" href="#组件参数" aria-label="Permalink to “组件参数”">​</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0" dir="ltr"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> EbMessage</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">options</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  jsx</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> VNode</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> VNode</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  position</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;top&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;bottom&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;left&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;right&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;center&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  timeClose</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  close</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> void</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,2))])}}});export{w as __pageData,N as default};
