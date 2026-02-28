<template>
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
const tooltipTrigger = ref();
const tooltipContent = ref("");
const showTooltip = ref(false);
const header = [
  {
    prop: "address",
    label: "Tooltip",
    align: "center",
    showOverflowTooltip: true,
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
        cellRenderer: (
          el: Element,
          binding: any,
          Vnode: any,
          val: string,
          row: any,
          prop: string,
        ) => {
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
const checkOverflow = (e,val) => {
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
</script>
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
