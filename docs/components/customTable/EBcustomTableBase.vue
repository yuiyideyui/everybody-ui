<template>
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

const rowClick = () => {
  console.log("????");
};
const header: everybodyTableHeader = [
  {
    prop: "name",
    label: "姓名",
    align: "center",
    customList: [
      {
        cellRenderer: ({ val }: { val: string }) => {
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
        cellRenderer: ({val,row,prop}: { val: string; row: any; prop: string }) => {
          const addAge = (val: number, row: any, prop: string) => {
            row[prop] += val;
          };
          return <div onClick={() => addAge(1, row, prop)}>{val}</div>;
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
