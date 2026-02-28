<template>
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
</script>
