<template>
    <div
        v-loading="customListLoading"
        element-loading-background="transparent"
        class="virtual-table-container"
    >
        <el-table
            @scroll="handleScroll"
            ref="customTableRef"
            class="sub_table"
            style="width: 100%"
            :data="tableDataComputed"
            v-bind="$attrs"
            :row-style="{ maxHeight: rowHeight + 'px' }"
        >
            <TableColumnsRender :columns="tableHeader" />
            <template #append>
                <div :style="{ height: bottomPlaceholderHeight + 'px' }"></div>
            </template>
        </el-table>
    </div>
</template>

<script setup lang="tsx">
import { ElTableColumn } from 'element-plus'
import type { everybodyTableHeader } from './customTable.type'
import {
    ref,
    computed,
    resolveDirective,
    withDirectives,
    defineComponent,
    type PropType
} from 'vue'
type propsType = {
    tableHeader: everybodyTableHeader
    customListLoading?: boolean
    data: Record<string, any>[]
    isDataSlice?: {
        isSlice: false
    }
    rowHeight?: number
}
type propsType1 = {
    tableHeader: everybodyTableHeader
    customListLoading?: boolean
    data: Record<string, any>[]
    isDataSlice: {
        isSlice: true
        num: number
    }
    rowHeight: number
}
const props = withDefaults(defineProps<propsType | propsType1>(), {
    customListLoading: false,
    isDataSlice: () => ({
        isSlice: false as const
    })
})
const jsxTableDirective = resolveDirective('eb-jsx-table')
const TableColumnsRender = defineComponent({
    name: 'TableColumnsRender',
    props: {
        columns: {
            type: Array as PropType<everybodyTableHeader>,
            required: true
        }
    },
    setup(props) {
        const renderColumns = (columns: everybodyTableHeader) => {
            return columns.map((item, index) => {
                if (item.children && item.children.length > 0) {
                    return (
                        <ElTableColumn
                            key={item.label + index}
                            label={item.label}
                            align={item.align}
                        >
                            {{
                                default: () => renderColumns(item.children!)
                            }}
                        </ElTableColumn>
                    )
                } else if (item.prop) {
                    return (
                        <ElTableColumn
                            key={item.prop + index}
                            prop={item.prop}
                            label={item.label}
                            width={item.width}
                            align={item.align}
                            show-overflow-tooltip={item.showOverflowTooltip}
                        >
                            {{
                                default: (scope: any) =>
                                    item.customList?.map((custom, i: number) => {
                                        const val = scope.row[item.prop!]
                                        const row = scope.row
                                        
                                        if (custom.cellRenderer && jsxTableDirective) {
                                            // 优化点 2：使用更稳健的 withDirectives
                                            return withDirectives(
                                                <span
                                                    key={i + 'b'}
                                                    class={item.boxClass || ''}
                                                    style={item.boxStyle}
                                                    onClick={(e: MouseEvent) => {
                                                        e.stopPropagation()
                                                        custom.click?.(row)
                                                    }}
                                                />,
                                                [
                                                    [
                                                        jsxTableDirective,
                                                        [custom.cellRenderer, val, row, item.prop]
                                                    ]
                                                ]
                                            )
                                        }
                                        return null
                                    })
                            }}
                        </ElTableColumn>
                    )
                }
                return null
            })
        }

        return () => <>{renderColumns(props.columns)}</>
    }
})
const customTableRef = ref()
const scrollTop = ref(0)

// 1. 计算当前起始索引
const startIndex = ref(0)

// 2. 动态计算渲染的数据切片
const tableDataComputed = computed(() => {
    if (!props.isDataSlice.isSlice) return props.data

    // 只截取当前滚动位置及其前后的数据
    const start = Math.max(0, startIndex.value - 5) // 向上预留5行缓冲
    const end = Math.min(props.data.length, start + (props.isDataSlice.num || 20) + 10)
    return props.data.slice(start, end)
})

// 3. 计算底部占位高度，撑开滚动条
const bottomPlaceholderHeight = computed(() => {
    if (!props.isDataSlice.isSlice) {
        return 0
    }
    const currentEndIndex = Math.min(
        props.data.length,
        startIndex.value + (props.isDataSlice.num || 20) + 5
    )
    return (props.data.length - currentEndIndex) * (props.rowHeight as propsType1['rowHeight'])
})

// 4. 合并你的 handleScroll 逻辑
const handleScroll = ({ scrollTop: st }: { scrollTop: number }) => {
    scrollTop.value = st

    if (props.isDataSlice.isSlice) {
        // 计算当前索引
        startIndex.value = Math.floor(st / (props.rowHeight as propsType1['rowHeight']))

        // 关键：通过 transform 偏移，让切片数据始终出现在可视区
        const tableBody = customTableRef.value?.$el.querySelector('.el-scrollbar__view')
        if (tableBody) {
            const offset =
                Math.max(0, startIndex.value - 5) * (props.rowHeight as propsType1['rowHeight'])
            tableBody.style.transform = `translateY(${offset}px)`
        }
    }
}
</script>

<style scoped lang="less">
/* 这里的样式确保 transform 不会影响表头 */
:deep(.el-table__inner-wrapper) {
    display: flex;
    flex-direction: column;
}

:deep(.el-scrollbar__view) {
    will-change: transform; // 性能优化
}
</style>
