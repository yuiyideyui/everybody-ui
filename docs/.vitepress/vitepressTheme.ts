export default {
  title: "Everybody-UI_DOCS",
  base: "/everybody-ui/",
  themeConfig: {
    nav: [
      { text: "指令", link: "/Directives/NumTransition/animate" },
      { text: "组件", link: "/components/customTable/customTable" },
    ],
    sidebar: {
      "/Directives/": [
        {
          text: "基础指令",
          items: [
            { text: "数字动画指令", link: "/Directives/NumTransition/animate" },
          ],
        },
      ],
      "/components/": [
        {
          text: "组件",
          items: [
            { text: "自定义表格", link: "/components/customTable/customTable" },
          ],
        },
      ],
    },
  },
};
