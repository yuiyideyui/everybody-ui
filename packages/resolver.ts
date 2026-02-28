import type { ComponentResolver } from 'unplugin-vue-components/types'

export function EverybodyUIResolver(): ComponentResolver {
  return {
    type: 'component',
    resolve: (name: string) => {
      // 匹配所有以 Eb 开头的组件，例如 EbCustomTable
      if (name.startsWith('Eb')) {
        // 将第一个字母转为小写，例如 CustomTable -> customTable
        const partialName = name.slice(2)
        const exportName = partialName.charAt(0).toLowerCase() + partialName.slice(1)

        return {
          name: name,
          from: 'everybody-ui',
          // 如果你的 CSS 也是按组件名分的，可以开启自动加载样式
          // sideEffects: `everybody-ui/dist/theme/${exportName}.css`
        }
      }
    },
  }
}