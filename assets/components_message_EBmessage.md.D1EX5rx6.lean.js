const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/EBmessageClose.5Bl-Bxom.js","assets/chunks/theme.CS7CAeiW.js","assets/chunks/framework.3oOvuWDt.js","assets/chunks/EBmessageBase.DEwDH1T_.js"])))=>i.map(i=>d[i]);
import{p as o,Z as r,I as E,o as A,c as v,j as e,a as p,as as g,at as u,J as i,k as a,w as n,aB as c,b5 as F,E as y,y as I}from"./chunks/framework.3oOvuWDt.js";import{q as b,K as m}from"./chunks/index.BOniDWRv.js";const C=`<template>
    <div>
        <button @click="showMessage">点击显示消息提示</button>
    </div>
</template>

<script setup lang="tsx">
import { EbMessage } from "everybody-ui";
const showMessage = () => {
    const {close} = EbMessage({
        jsx: () => <div>这是一个消息提示！<button onClick={()=>close()}>关闭</button></div>,
        position: "top",
    })
}
<\/script>
`,Z=`<template>
    <div>
        <button @click="showMessage">点击显示消息提示</button>
    </div>
</template>

<script setup lang="tsx">
import { EbMessage } from "everybody-ui";
const showMessage = () => {
    EbMessage({
        jsx: () => <div>这是一个消息提示！</div>,
        position: "top",
        timeClose: 3000
    })
}
<\/script>
`,X=JSON.parse('{"title":"消息： EbMessage","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"components/message/EBmessage.md","filePath":"components/message/EBmessage.md"}'),f={name:"components/message/EBmessage.md"},_=Object.assign(f,{setup(B){const h=y();o(async()=>{h.value=(await r(async()=>{const{default:l}=await import("./chunks/EBmessageClose.5Bl-Bxom.js");return{default:l}},__vite__mapDeps([0,1,2]))).default});const t=I(!0),d=y();return o(async()=>{d.value=(await r(async()=>{const{default:l}=await import("./chunks/EBmessageBase.DEwDH1T_.js");return{default:l}},__vite__mapDeps([3,1,2]))).default}),(l,s)=>{const k=E("ClientOnly");return A(),v("div",null,[s[2]||(s[2]=e("h1",{id:"消息-ebmessage",tabindex:"-1"},[p("消息： EbMessage "),e("a",{class:"header-anchor",href:"#消息-ebmessage","aria-label":"Permalink to “消息： EbMessage”"},"​")],-1)),s[3]||(s[3]=e("h2",{id:"基础用法",tabindex:"-1"},[p("基础用法 "),e("a",{class:"header-anchor",href:"#基础用法","aria-label":"Permalink to “基础用法”"},"​")],-1)),g(i(a(b),null,null,512),[[u,t.value]]),i(k,null,{default:n(()=>[i(a(m),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,playgroundUrl:"https://yuiyideyui.github.io/Everybody-ui-playground/#eyJBcHAudnVlIjoiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxidXR0b24gQGNsaWNrPVwic2hvd01lc3NhZ2VcIj7ngrnlh7vmmL7npLrmtojmga/mj5DnpLo8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzeFwiPlxuaW1wb3J0IHsgRWJNZXNzYWdlIH0gZnJvbSBcImV2ZXJ5Ym9keS11aVwiO1xuY29uc3Qgc2hvd01lc3NhZ2UgPSAoKSA9PiB7XG4gICAgRWJNZXNzYWdlKHtcbiAgICAgICAganN4OiAoKSA9PiA8ZGl2Pui/meaYr+S4gOS4qua2iOaBr+aPkOekuu+8gTwvZGl2PixcbiAgICAgICAgcG9zaXRpb246IFwidG9wXCIsXG4gICAgICAgIHRpbWVDbG9zZTogMzAwMFxuICAgIH0pXG59XG48L3NjcmlwdD5cbiJ9",onMount:s[0]||(s[0]=()=>{t.value=!1}),vueCode:a(Z)},c({_:2},[d.value?{name:"vue",fn:n(()=>[i(a(d))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),s[4]||(s[4]=e("h2",{id:"自定义关闭",tabindex:"-1"},[p("自定义关闭 "),e("a",{class:"header-anchor",href:"#自定义关闭","aria-label":"Permalink to “自定义关闭”"},"​")],-1)),g(i(a(b),null,null,512),[[u,t.value]]),i(k,null,{default:n(()=>[i(a(m),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,playgroundUrl:"https://yuiyideyui.github.io/Everybody-ui-playground/#eyJBcHAudnVlIjoiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxidXR0b24gQGNsaWNrPVwic2hvd01lc3NhZ2VcIj7ngrnlh7vmmL7npLrmtojmga/mj5DnpLo8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzeFwiPlxuaW1wb3J0IHsgRWJNZXNzYWdlIH0gZnJvbSBcImV2ZXJ5Ym9keS11aVwiO1xuY29uc3Qgc2hvd01lc3NhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3Qge2Nsb3NlfSA9IEViTWVzc2FnZSh7XG4gICAgICAgIGpzeDogKCkgPT4gPGRpdj7ov5nmmK/kuIDkuKrmtojmga/mj5DnpLrvvIE8YnV0dG9uIG9uQ2xpY2s9eygpPT5jbG9zZSgpfT7lhbPpl608L2J1dHRvbj48L2Rpdj4sXG4gICAgICAgIHBvc2l0aW9uOiBcInRvcFwiLFxuICAgIH0pXG59XG48L3NjcmlwdD5cbiJ9",onMount:s[1]||(s[1]=()=>{t.value=!1}),vueCode:a(C)},c({_:2},[h.value?{name:"vue",fn:n(()=>[i(a(h))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),s[5]||(s[5]=F("",2))])}}});export{X as __pageData,_ as default};
