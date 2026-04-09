const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chunks/DemoTransitionFormat.Bf575Q1I.js","assets/chunks/theme.cmDWrzs_.js","assets/chunks/framework.3oOvuWDt.js","assets/chunks/DemoTransition.CjbLz4wL.js"])))=>i.map(i=>d[i]);
import{p as o,Z as p,I as g,o as X,c as A,b5 as u,as as h,at as c,J as e,k as i,w as n,aB as b,j as k,a as B,E as y,y as f}from"./chunks/framework.3oOvuWDt.js";import{q as m,K as v}from"./chunks/index.BOniDWRv.js";const _=`<template>
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
<style scoped lang="less"></style>`,C=`<template>
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
<style scoped lang="less"></style>`,P=JSON.parse('{"title":"文本过渡：v-eb-transition-text","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"Directives/NumTransition/animate.md","filePath":"Directives/NumTransition/animate.md"}'),W={name:"Directives/NumTransition/animate.md"},Z=Object.assign(W,{setup(R){const l=y();o(async()=>{l.value=(await p(async()=>{const{default:s}=await import("./chunks/DemoTransitionFormat.Bf575Q1I.js");return{default:s}},__vite__mapDeps([0,1,2]))).default});const a=f(!0),d=y();return o(async()=>{d.value=(await p(async()=>{const{default:s}=await import("./chunks/DemoTransition.CjbLz4wL.js");return{default:s}},__vite__mapDeps([3,1,2]))).default}),(s,t)=>{const r=g("ClientOnly");return X(),A("div",null,[t[2]||(t[2]=u("",5)),h(e(i(m),null,null,512),[[c,a.value]]),e(r,null,{default:n(()=>[e(i(v),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,playgroundUrl:"https://yuiyideyui.github.io/Everybody-ui-playground/#eyJBcHAudnVlIjoiPHRlbXBsYXRlPlxuICA8dHJhbnNpdGlvblRleHQ+PC90cmFuc2l0aW9uVGV4dD5cbiAgPGVsLWJ1dHRvbiBAY2xpY2s9XCJhZGROdW1cIiB0eXBlPVwicHJpbWFyeVwiIHJvdW5kPisxMDAwPC9lbC1idXR0b24+XG48L3RlbXBsYXRlPlxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHN4XCI+XG5pbXBvcnQgeyByZWYgfSBmcm9tIFwidnVlXCI7XG5jb25zdCBudW0gPSByZWYoMCk7XG5jb25zdCBhZGROdW0gPSAoKSA9PiB7XG4gIG51bS52YWx1ZSArPSAxMDAwO1xufTtcblxuY29uc3QgdHJhbnNpdGlvblRleHQgPSAoKSA9PiB7XG4gIHJldHVybiA8ZGl2IHYtZWItdHJhbnNpdGlvbi10ZXh0PXt7IHZhbHVlOiBudW0udmFsdWV9fT48L2Rpdj47XG59O1xuPC9zY3JpcHQ+XG48c3R5bGUgc2NvcGVkIGxhbmc9XCJsZXNzXCI+PC9zdHlsZT4ifQ==",onMount:t[0]||(t[0]=()=>{a.value=!1}),vueCode:i(C)},b({_:2},[d.value?{name:"vue",fn:n(()=>[e(i(d))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[3]||(t[3]=k("h2",{id:"数字变化动画-带千分位",tabindex:"-1"},[B("数字变化动画(带千分位) "),k("a",{class:"header-anchor",href:"#数字变化动画-带千分位","aria-label":"Permalink to “数字变化动画(带千分位)”"},"​")],-1)),h(e(i(m),null,null,512),[[c,a.value]]),e(r,null,{default:n(()=>[e(i(v),{title:"",description:"",locale:"",select:"vue",order:"vue,react,html",github:"",gitlab:"",theme:"",lightTheme:"",darkTheme:"",stackblitz:"%7B%22show%22%3Afalse%7D",codesandbox:"%7B%22show%22%3Afalse%7D",codeplayer:"%7B%22show%22%3Afalse%7D",files:"%7B%22vue%22%3A%7B%7D%2C%22react%22%3A%7B%7D%2C%22html%22%3A%7B%7D%7D",scope:"",htmlWriteWay:"write",background:"undefined",visible:!0,playgroundUrl:"https://yuiyideyui.github.io/Everybody-ui-playground/#eyJBcHAudnVlIjoiPHRlbXBsYXRlPlxuICA8dHJhbnNpdGlvblRleHQ+PC90cmFuc2l0aW9uVGV4dD5cbiAgPGVsLWJ1dHRvbiBAY2xpY2s9XCJhZGROdW1cIiB0eXBlPVwicHJpbWFyeVwiIHJvdW5kPisxMDAwPC9lbC1idXR0b24+XG48L3RlbXBsYXRlPlxuPHNjcmlwdCBzZXR1cCBsYW5nPVwidHN4XCI+XG5pbXBvcnQgeyByZWYgfSBmcm9tIFwidnVlXCI7XG5jb25zdCBudW0gPSByZWYoMCk7XG5jb25zdCBhZGROdW0gPSAoKSA9PiB7XG4gIG51bS52YWx1ZSArPSAxMDAwO1xufTtcblxuY29uc3QgdHJhbnNpdGlvblRleHQgPSAoKSA9PiB7XG4gIHJldHVybiA8ZGl2IHYtZWItdHJhbnNpdGlvbi10ZXh0PXt7IHZhbHVlOiBudW0udmFsdWUsIGZvcm1hdDogdHJ1ZX19PjwvZGl2Pjtcbn07XG48L3NjcmlwdD5cbjxzdHlsZSBzY29wZWQgbGFuZz1cImxlc3NcIj48L3N0eWxlPiJ9",onMount:t[1]||(t[1]=()=>{a.value=!1}),vueCode:i(_)},b({_:2},[l.value?{name:"vue",fn:n(()=>[e(i(l))]),key:"0"}:void 0]),1032,["vueCode"])]),_:1}),t[4]||(t[4]=u("",2))])}}});export{P as __pageData,Z as default};
