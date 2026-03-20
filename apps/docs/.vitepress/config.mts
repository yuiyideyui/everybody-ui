import { defineConfig } from "vitepress";
import vueJsx from "@vitejs/plugin-vue-jsx";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { EverybodyUIResolver } from "everybody-ui/resolver";
import { vitepressDemoPlugin } from "../vitepress-demo-plugin/dist";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
const __dirname = dirname(fileURLToPath(import.meta.url));
// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Everybody-UI_DOCS",
  base: "/everybody-ui/",
  description: "Everybody-UI",
  head: [
    ["link", { rel: "icon", href: "/everybody-ui/favicon.ico" }],
    ["link", { rel: "stylesheet", href: "/everybody-ui/style.css" }]
  ],
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.png",
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
    socialLinks: [
      { icon: "github", link: "https://github.com/yuiyideyui/everybody-ui" },
    ],
    search: {
      provider: 'local'
    }
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
        resolvers: [ElementPlusResolver(),EverybodyUIResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver(),EverybodyUIResolver()],
      }),
    ],
    // --- 以下是修复报错的关键配置 ---
    resolve: {
      // 1. 强制使用单例，防止 tableId 查找失败
      dedupe: ["vue", "element-plus"],
      alias: {
        // 注意：子路径必须排在主包名之前，否则会被主包名截获
        "everybody-ui/resolver": resolve(__dirname, "../../../packages/everybody-ui/dist/resolver.js"),
        // 2. 处理主包引用 (如 import ... from 'everybody-ui')
        "everybody-ui": resolve(__dirname, "../../../packages/everybody-ui/dist"),
        "vitepress-demo-plugin": resolve(__dirname,"../vitepress-demo-plugin")
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
