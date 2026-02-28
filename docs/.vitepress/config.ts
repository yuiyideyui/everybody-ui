import { defineConfig } from "vitepress";
import vueJsx from "@vitejs/plugin-vue-jsx";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { EverybodyUIResolver } from "everybody-ui/resolver";
import { vitepressDemoPlugin } from "vitepress-demo-plugin";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import vitepressTheme from './vitepressTheme'
const __dirname = dirname(fileURLToPath(import.meta.url));
export default defineConfig({
  ...vitepressTheme,
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
        "everybody-ui": resolve(__dirname, "../../packages/dist"),
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
