import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import vueJsx from "@vitejs/plugin-vue-jsx";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(), // 必须放在 vue() 后面，处理你的 TSX 渲染函数
    dts({
      // 生成 .d.ts 类型文件，解决你说的“TS提示没了”的问题
      insertTypesEntry: true,
      cleanVueFileName: true,
      outDir: resolve(__dirname, "packages/dist/types"), // monorepo 下输出到 packages/dist/types
    }),
  ],
  resolve: {
    // 确保打包时也只有一份 Vue 实例
    dedupe: ["vue", "element-plus"],
  },
  build: {
    // 开启 sourcemap，这样报错时你能看到源码行号而非 mjs 的行号
    sourcemap: true, 
    outDir: resolve(__dirname, "packages/dist"),
    lib: {
      // 这里的路径确保指向你的入口 main.ts
      entry: {
        index:resolve(__dirname, "packages/main.ts"),
        resolver: resolve(__dirname, 'packages/resolver.ts')
      },
      // name: "index",
      // fileName: "index",
      formats: ["es"], // 同时输出 ESM 和 UMD 格式
    },
    rollupOptions: {
      // 【关键】防止 Element Plus 被打包进去导致 tableId 冲突
      external: [
        "vue", 
        "element-plus", 
        /@element-plus\/icons-vue/ // 排除图标库
      ],
      output: {
        // 在 UMD 构建中为外部化依赖提供全局变量
        globals: {
          vue: "Vue",
          "element-plus": "ElementPlus",
        },
        // 样式文件重命名（可选）
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'everybody.css';
          return assetInfo.name;
        },
      },
    },
  },
});