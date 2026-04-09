// 根目录的 shared-vite.config.ts (或者你原来的文件)
import { defineConfig } from "vite";
import { resolve } from "node:path";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    dts({
      rollupTypes: true,
      // 💡 使用相对路径，Vite 会基于执行命令的目录解析
      outDir: "dist",
      insertTypesEntry: true,
    }),
  ],
  build: {
    // 💡 这里的 outDir 设为 "dist" 即可，Vite 会自动在子包下创建
    outDir: "dist",
    lib: {
      entry: {
        // 💡 重点：如果每个子包入口名一样，直接写相对路径
        index: resolve(process.cwd(), "main.ts"),
        resolver: resolve(process.cwd(), "resolver.ts")
      },
      formats: ["es"],
    },
    rollupOptions: {
      external: ["vue", /^element-plus/, /@element-plus\/icons-vue/],
      output: {
        entryFileNames: `[name].js`,
        chunkFileNames: `chunks/[name].js`,
      },
    },
  },
});