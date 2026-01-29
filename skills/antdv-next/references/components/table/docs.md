---
title: Table
subtitle: 表格
description: 展示行列数据。
---

## 何时使用 
- 当有大量结构化的数据需要展现时；
- 当需要对数据进行排序、搜索、分页、自定义操作等复杂行为时。

## 如何使用 
指定表格的数据源 `dataSource` 为一个数组。

```vue
<script setup lang="ts">
const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
]

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
]
</script>

<template>
  <a-table :data-source="dataSource" :columns="columns" />
</template>
```

## Demos

| Demo | Path |
| --- | --- |
| 基础用法 | demo/basic.md |
| 带边框 | demo/bordered.md |
| 异步数据 | demo/ajax.md |
| 分页 | demo/pagination.md |
| 尺寸 | demo/size.md |
| 粘性表头 | demo/sticky.md |
| 固定表头 | demo/fixed-header.md |
| 固定列 | demo/fixed-columns.md |
| 固定列与表头 | demo/fixed-columns-header.md |
| 超宽固定列 | demo/fixed-gapped-columns.md |
| 窄屏表格 | demo/narrow.md |
| 响应式 | demo/responsive.md |
| 分组表头 | demo/grouping-columns.md |
| 合并单元格 | demo/colspan-rowspan.md |
| 汇总行 | demo/summary.md |
| 自定义空状态 | demo/custom-empty.md |
| 自定义筛选 | demo/custom-filter-panel.md |
| 筛选搜索 | demo/filter-search.md |
| 树形筛选 | demo/filter-in-tree.md |
| 排序与筛选 | demo/head.md |
| 多列排序 | demo/multiple-sorter.md |
| 列顺序 | demo/order-column.md |
| 隐藏列 | demo/hidden-columns.md |
| 拖动行排序 | demo/drag-sorting.md |
| 拖动手柄排序 | demo/drag-sorting-handler.md |
| 调整列宽 | demo/resizable-column.md |
| 整行编辑 | demo/edit-row.md |
| 单元格编辑 | demo/edit-cell.md |
| 超出省略 | demo/ellipsis.md |
| 自定义省略提示 | demo/ellipsis-custom-tooltip.md |
| 可展开行 | demo/expand.md |
| 展开与粘性表头 | demo/expand-sticky.md |
| 嵌套表格 | demo/nested-table.md |
| 树形数据 | demo/tree-data.md |
| 行选择 | demo/row-selection.md |
| 自定义选择 | demo/row-selection-custom.md |
| 选择与操作 | demo/row-selection-and-operation.md |
| 重置筛选 | demo/reset-filter.md |
| 虚拟列表 | demo/virtual-list.md |
| 自定义样式 | demo/style-class.md |
| 动态配置 | demo/dynamic-settings.md |
| 表头与单元格插槽 | demo/cell-slot.md |

## API

### 属性 
通用属性参考：[通用属性](../../docs/vue/common-props.md)

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| classes | 用于自定义组件内部各语义化结构的 class，支持对象或函数 | TableClassNamesType&lt;RecordType&gt; | - | - |
| styles | 用于自定义组件内部各语义化结构的行内 style，支持对象或函数 | TableStylesType&lt;RecordType&gt; | - | - |
| dropdownPrefixCls | - | string | - | - |
| dataSource | 数据数组 | VcTableProps&lt;RecordType&gt;['data'] | - | - |
| columns | 表格列的配置描述，具体项见下表 | ColumnsType&lt;RecordType&gt; | - | - |
| pagination | 分页器，参考[配置项](#pagination)或 [pagination](../pagination/docs.md) 文档，设为 false 时不展示和进行分页 | false \| TablePaginationConfig | - | - |
| loading | 页面是否加载中 | boolean \| SpinProps | false | - |
| size | 表格大小 | SizeType | `large` | - |
| bordered | 是否展示外边框和列边框 | boolean | false | - |
| locale | 默认文案设置，目前包括排序、过滤、空数据文案 | TableLocale | [默认值](https://github.com/ant-design/ant-design/blob/6dae4a7e18ad1ba193aedd5ab6867e1d823e2aa4../locale/docs.md/zh_CN.tsx#L20-L37) | - |
| rowSelection | 表格行是否可选择，[配置项](#rowselection) | TableRowSelection&lt;RecordType&gt; | - | - |
| getPopupContainer | 设置表格内各类浮层的渲染节点，如筛选菜单 | GetPopupContainer | () =&gt; TableHtmlElement | - |
| scroll | 表格是否可滚动，也可以指定滚动区域的宽、高，[配置项](#scroll) | VcTableProps&lt;RecordType&gt;['scroll'] & &#123; scrollToFirstRowOnChange?: boolean &#125; | - | - |
| sortDirections | 支持的排序方式，取值为 `ascend` `descend` | SortOrder[] | \[`ascend`, `descend`] | - |
| showSorterTooltip | 表头是否显示下一次排序的 tooltip 提示。当参数类型为对象时，将被设置为 Tooltip 的属性 | boolean \| SorterTooltipProps | &#123; target: 'full-header' &#125; | 5.16.0 |
| virtual | 支持虚拟列表 | boolean | - | 5.9.0 |

### 事件 
| 事件 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| change | 分页、排序、筛选变化时触发 | (     pagination: TablePaginationConfig,     filters: Record&lt;string, FilterValue \| null&gt;,     sorter: SorterResult&lt;RecordType&gt; \| SorterResult&lt;RecordType&gt;[],     extra: TableCurrentDataSource&lt;RecordType&gt;,   ) =&gt; void | - |
| update:expandedRowKeys | - | (keys: readonly Key[]) =&gt; void | - |
| scroll | 表格是否可滚动，也可以指定滚动区域的宽、高，[配置项](#scroll) | NonNullable&lt;VcTableProps['onScroll']&gt; | - |

### 插槽 
| 插槽 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| title | 表格标题 | (data: readonly RecordType[]) =&gt; any | - |
| footer | 表格尾部 | (data: readonly RecordType[]) =&gt; any | - |
| summary | 总结栏 | (data: readonly RecordType[]) =&gt; any | - |
| emptyText | - | () =&gt; any | - |
| expandIcon | - | (info: any) =&gt; any | - |
| expandedRowRender | - | (ctx: &#123; record: RecordType, index: number, indent: number, expanded: boolean &#125;) =&gt; any | - |
| headerCell | - | (ctx: &#123; column: ColumnType&lt;RecordType&gt;, index: number, text: any &#125;) =&gt; any | - |
| bodyCell | - | (ctx: &#123; column: ColumnType&lt;RecordType&gt;, index: number, text: any, record: RecordType &#125;) =&gt; any | - |
| filterDropdown | - | (ctx: FilterDropdownProps & &#123; column: ColumnType&lt;RecordType&gt; &#125;) =&gt; any | - |
| filterIcon | - | (ctx: &#123; column: ColumnType&lt;RecordType&gt;, filtered: boolean &#125;) =&gt; any | - |
