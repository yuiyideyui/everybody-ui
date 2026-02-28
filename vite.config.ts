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
    vueJsx(),
    dts({
      // 1. 开启类型合并，极大减小类型文件体积并提升用户体验
      rollupTypes: true, 
      insertTypesEntry: true,
      cleanVueFileName: true,
      // 2. 这里的 outDir 建议直接指向 dist，不要再嵌套 types 文件夹，
      // 除非你 package.json 里的 types 路径非要在那。
      outDir: resolve(__dirname, "packages/dist"), 
    }),
  ],
  resolve: {
    dedupe: ["vue", "element-plus"],
  },
  build: {
    // 3. 生产环境建议关闭 sourcemap 或设为 hidden
    sourcemap: false, 
    outDir: resolve(__dirname, "packages/dist"),
    lib: {
      entry: {
        index: resolve(__dirname, "packages/main.ts"),
        resolver: resolve(__dirname, 'packages/resolver.ts')
      },
      formats: ["es"], 
    },
    rollupOptions: {
      // 4. 使用正则更彻底地排除外部库及其子路径
      external: [
        "vue", 
        /^element-plus/, // 匹配 element-plus 及其所有子路径
        /@element-plus\/icons-vue/ 
      ],
      output: {
        // 5. 确保按模块名生成，不带杂乱的 hash
        entryFileNames: `[name].js`,
        chunkFileNames: `chunks/[name].js`,
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'everybody.css';
          return assetInfo.name || '[name].[ext]';
        },
      },
    },
  },
});