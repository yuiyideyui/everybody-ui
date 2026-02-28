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
</script>
