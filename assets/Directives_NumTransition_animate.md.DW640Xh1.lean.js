const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/DemoTransitionFormat.DRWFJw3f.js","assets/chunks/theme.tycCvqk8.js","assets/chunks/framework.nBEwQNqc.js","assets/chunks/DemoTransition.CMqP1QPg.js"])))=>i.map(i=>d[i]);
import{p as o,b3 as h,I as b,o as f,c as g,b4 as u,am as p,an as k,J as a,k as t,w as n,au as c,j as m,a as W,E as y,y as A}from"./chunks/framework.nBEwQNqc.js";import{I as v,$ as _}from"./chunks/index.LJUssTxS.js";const D=`<template>
  <transitionText></transitionText>
  <el-button @click="addNum" type="primary" round>+1000</el-button>
</template>
<script setup lang="tsx">
import { ref } from "vue";
const num = ref(0);
const addNum = () => {
  num.value += 1000;
};

const transitionText = () => {
  return <div v-eb-transition-text={{ value: num.value, format: true}}></div>;
};
<\/script>
<style scoped lang="less"></style>`,E=`<template>
  <transitionText></transitionText>
  <el-button @click="addNum" type="primary" round>+1000</el-button>
</template>
<script setup lang="tsx">
import { ref } from "vue";
const num = ref(0);
const addNum = () => {
  num.value += 1000;
};

const transitionText = () => {
  return <div v-eb-transition-text={{ value: num.value}}></div>;
};
<\/script>
<style scoped lang="less"></style>`,Z=JSON.parse('{"title":"文本过渡：v-eb-transition-text","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"Directives/NumTransition/animate.md","filePath":"Directives/NumTransition/animate.md"}'),T={name:"Directives/NumTransition/animate.md"},B=Object.assign(T,{setup(F){const l=y();o(async()=>{l.value=(await h(async()=>{const{default:i}=await import("./chunks/DemoTransitionFormat.DRWFJw3f.js");return{default:i}},__vite__mapDeps([0,1,2]))).default});const s=A(!0),r=y();return o(async()=>{r.value=(await h(async()=>{const{default:i}=await import("./chunks/DemoTransition.CMqP1QPg.js");return{default:i}},__vite__mapDeps([3,1,2]))).default}),(i,e)=>{const d=b("ClientOnly");return f(),g("div",null,[e[2]||(e[2]=u("",5)),p(a(t(v),null,null,512),[[k,s.value]]),a(d,null,{default:n(()=>[a(t(_),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[0]||(e[0]=()=>{s.value=!1}),vueCode:t(E)},c({_:2},[r.value?{name:"vue",fn:n(()=>[a(t(r))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[3]||(e[3]=m("h2",{id:"数字变化动画-带千分位",tabindex:"-1"},[W("数字变化动画(带千分位) "),m("a",{class:"header-anchor",href:"#数字变化动画-带千分位","aria-label":"Permalink to “数字变化动画(带千分位)”"},"​")],-1)),p(a(t(v),null,null,512),[[k,s.value]]),a(d,null,{default:n(()=>[a(t(_),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,onMount:e[1]||(e[1]=()=>{s.value=!1}),vueCode:t(D)},c({_:2},[l.value?{name:"vue",fn:n(()=>[a(t(l))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),e[4]||(e[4]=u("",2))])}}});export{Z as __pageData,B as default};
