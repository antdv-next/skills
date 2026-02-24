---
title: Table
description: A table displays rows of data.
---

## When To Use

- To display a collection of structured data.
- To sort, search, paginate, filter data.

## How To Use

Specify `dataSource` of Table as an array of data.

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
| Basic | demo/basic.md |
| Bordered | demo/bordered.md |
| Ajax | demo/ajax.md |
| Pagination | demo/pagination.md |
| Size | demo/size.md |
| Sticky Header | demo/sticky.md |
| Fixed Header | demo/fixed-header.md |
| Fixed Columns | demo/fixed-columns.md |
| Fixed Columns & Header | demo/fixed-columns-header.md |
| Wide Fixed Columns | demo/fixed-gapped-columns.md |
| Narrow Table | demo/narrow.md |
| Responsive | demo/responsive.md |
| Grouped Columns | demo/grouping-columns.md |
| Rowspan & Colspan | demo/colspan-rowspan.md |
| Summary | demo/summary.md |
| Custom Empty | demo/custom-empty.md |
| Custom Filter Panel | demo/custom-filter-panel.md |
| Filter Search | demo/filter-search.md |
| Tree Filter | demo/filter-in-tree.md |
| Sorting & Filtering | demo/head.md |
| Multiple Sorter | demo/multiple-sorter.md |
| Order Columns | demo/order-column.md |
| Hidden Columns | demo/hidden-columns.md |
| Drag Row Sorting | demo/drag-sorting.md |
| Drag Handle Sorting | demo/drag-sorting-handler.md |
| Resizable Column | demo/resizable-column.md |
| Edit Row | demo/edit-row.md |
| Edit Cell | demo/edit-cell.md |
| Ellipsis | demo/ellipsis.md |
| Custom Ellipsis Tooltip | demo/ellipsis-custom-tooltip.md |
| Expand | demo/expand.md |
| Expand Sticky | demo/expand-sticky.md |
| Nested Table | demo/nested-table.md |
| Tree Data | demo/tree-data.md |
| Row Selection | demo/row-selection.md |
| Custom Selection | demo/row-selection-custom.md |
| Selection Operations | demo/row-selection-and-operation.md |
| Reset Filter | demo/reset-filter.md |
| Virtual List | demo/virtual-list.md |
| Style & Class | demo/style-class.md |
| Dynamic Settings | demo/dynamic-settings.md |
| Header & Body Cell Slots | demo/cell-slot.md |

## API

### Props

Common props ref：[Common props](../../docs/vue/common-props.md)

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| classes | Customize class for each semantic structure inside the component. Supports object or function. | TableClassNamesType&lt;RecordType&gt; | - | - |
| styles | Customize inline style for each semantic structure inside the component. Supports object or function. | TableStylesType&lt;RecordType&gt; | - | - |
| dropdownPrefixCls | - | string | - | - |
| dataSource | Data record array to be displayed | VcTableProps&lt;RecordType&gt;['data'] | - | - |
| columns | Columns of table | ColumnsType&lt;RecordType&gt; | - | - |
| pagination | Config of pagination. You can ref table pagination [config](#pagination) or full [`pagination`](../pagination/docs.md/) document, hide it by setting it to `false` | false \| TablePaginationConfig | - | - |
| loading | Loading status of table | boolean \| SpinProps | false | - |
| size | Size of table | SizeType | `large` | - |
| bordered | Whether to show all table borders | boolean | false | - |
| locale | The i18n text including filter, sort, empty text, etc | TableLocale | [Default Value](https://github.com/ant-design/ant-design/blob/6dae4a7e18ad1ba193aedd5ab6867e1d823e2aa4../locale/docs.md/en_US.tsx#L19-L37) | - |
| rowSelection | Row selection [config](#rowselection) | TableRowSelection&lt;RecordType&gt; | - | - |
| getPopupContainer | The render container of dropdowns in table | GetPopupContainer | () =&gt; TableHtmlElement | - |
| scroll | Whether the table can be scrollable, [config](#scroll) | VcTableProps&lt;RecordType&gt;['scroll'] & &#123; scrollToFirstRowOnChange?: boolean &#125; | - | - |
| sortDirections | Supported sort way, could be `ascend`, `descend` | SortOrder[] | \[`ascend`, `descend`] | - |
| showSorterTooltip | The header show next sorter direction tooltip. It will be set as the property of Tooltip if its type is object | boolean \| SorterTooltipProps | &#123; target: 'full-header' &#125; | 5.16.0 |
| virtual | Support virtual list | boolean | - | 5.9.0 |

### Events

| Event | Description | Type | Version |
| --- | --- | --- | --- |
| change | Callback executed when pagination, filters or sorter is changed | (     pagination: TablePaginationConfig,     filters: Record&lt;string, FilterValue \| null&gt;,     sorter: SorterResult&lt;RecordType&gt; \| SorterResult&lt;RecordType&gt;[],     extra: TableCurrentDataSource&lt;RecordType&gt;,   ) =&gt; void | - |
| update:expandedRowKeys | - | (keys: readonly Key[]) =&gt; void | - |
| scroll | Whether the table can be scrollable, [config](#scroll) | NonNullable&lt;VcTableProps['onScroll']&gt; | - |

### Slots

| Slot | Description | Type | Version |
| --- | --- | --- | --- |
| title | Table title renderer | (data: readonly RecordType[]) =&gt; any | - |
| footer | Table footer renderer | (data: readonly RecordType[]) =&gt; any | - |
| summary | Summary content | (data: readonly RecordType[]) =&gt; any | - |
| emptyText | - | () =&gt; any | - |
| expandIcon | - | (info: any) =&gt; any | - |
| expandedRowRender | - | (ctx: &#123; record: RecordType, index: number, indent: number, expanded: boolean &#125;) =&gt; any | - |
| headerCell | - | (ctx: &#123; column: ColumnType&lt;RecordType&gt;, index: number, text: any &#125;) =&gt; any | - |
| bodyCell | - | (ctx: &#123; column: ColumnType&lt;RecordType&gt;, index: number, text: any, record: RecordType &#125;) =&gt; any | - |
| filterDropdown | - | (ctx: FilterDropdownProps & &#123; column: ColumnType&lt;RecordType&gt; &#125;) =&gt; any | - |
| filterIcon | - | (ctx: &#123; column: ColumnType&lt;RecordType&gt;, filtered: boolean &#125;) =&gt; any | - |

## Semantic DOM 
| _semantic | demo/_semantic.md |
