<template>
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
</script>
<style scoped lang="less"></style>