import { defineConfig } from "vitepress";
import vueJsx from "@vitejs/plugin-vue-jsx";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { vitepressDemoPlugin } from "vitepress-demo-plugin";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
const __dirname = dirname(fileURLToPath(import.meta.url));
export default defineConfig({
  title: "Everybody-UI_DOCS",
  base: "/everybody-ui/",
  themeConfig: {
    sidebar: [
      {
        text: "基础指令",
        items: [
          { text: "数字动画指令", link: "/Directives/NumTransition/animate" },
        ],
      },
      {
        text: "组件",
        items: [
          { text: "自定义表格", link: "/components/customTable/customTable" },
        ],
      },
    ],
  },
  markdown: {
    config(md) {
      md.use(vitepressDemoPlugin);
    },
  },
  vite: {
    plugins: [
      vueJsx(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    // --- 以下是修复报错的关键配置 ---
    resolve: {
      // 1. 强制使用单例，防止 tableId 查找失败
      dedupe: ["vue", "element-plus"],
      alias: {
        // 核心修正：当文档里 import { ... } from 'everybody-ui' 时
        // 直接让它指向你本地刚 build 出来的 index.js
        "everybody-ui": resolve(__dirname, "../../packages/dist/index.js"),
        // 方便你引用样式文件
        "@dist": resolve(__dirname, "../../packages/dist"),
      },
    },
    ssr: {
      // 2. 解决服务端渲染时 element-plus 内部样式或指令报错问题
      noExternal: ["element-plus", "everybody-ui"],
    },
    optimizeDeps: {
      // 3. 排除你的库，防止 Vite 对其进行二次加工导致上下文丢失
      exclude: ["everybody-ui"],
      // 包含 element-plus 的相关依赖，确保预构建正确
      include: [
        "element-plus/es",
        "element-plus/es/components/table/style/css",
      ],
    },
  },
});
