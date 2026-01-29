---
title: Cascader
subtitle: 级联选择
description: 级联选择框。
---

## 何时使用 
- 需要从一组相关联的数据集合进行选择，例如省市区，公司层级，事物分类等。
- 从一个较大的数据集合中进行选择时，用多级分类进行分隔，方便选择。
- 比起 Select 组件，可以在同一个浮层中完成选择，有较好的体验。

## Demos

| Demo | Path |
| --- | --- |
| 基本 | demo/basic.md |
| 默认值 | demo/default-value.md |
| 可以自定义显示 | demo/custom-trigger.md |
| 移入展开 | demo/hover.md |
| 禁用选项 | demo/disabled-option.md |
| 选择即改变 | demo/change-on-select.md |
| 多选 | demo/multiple.md |
| 自定义回填方式 | demo/showCheckedStrategy.md |
| 大小 | demo/size.md |
| 自定义已选项 | demo/custom-render.md |
| 搜索 | demo/search.md |
| 动态加载选项 | demo/lazy.md |
| 自定义字段名 | demo/fields-name.md |
| 前后缀 | demo/suffix.md |
| 扩展菜单 | demo/custom-dropdown.md |
| 弹出位置 | demo/placement.md |
| 形态变体 | demo/variant.md |
| 自定义状态 | demo/status.md |
| 自定义语义结构的样式和类 | demo/style-class.md |
| 面板使用 | demo/panel.md |

## API

通用属性参考：[通用属性](../../docs/vue/common-props.md)

### 属性 
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| allowClear | 支持清除 | boolean \| \{ clearIcon?: VueNode \} | true | - |
| changeOnSelect | 单选时生效（multiple 下始终都可以选择），点选每级菜单选项值都会发生变化。 | boolean | false | - |
| disabled | 禁用 | boolean | false | - |
| expandTrigger | 次级菜单的展开方式，可选 'click' 和 'hover' | string | `click` | - |
| fieldNames | 自定义 options 中 label value children 的字段 | object | \{ label: `label`, value: `value`, children: `children` \} | - |
| getPopupContainer | 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。[示例](https://codepen.io/afc163/pen/zEjNOy?editors=0010) | function(triggerNode) | () =&gt; document.body | - |
| loadData | 用于动态加载选项，无法与 `showSearch` 一起使用 | (selectedOptions) =&gt; void | - | - |
| maxTagCount | 最多显示多少个 tag，响应式模式会对性能产生损耗 | number \| `responsive` | - | - |
| maxTagPlaceholder | 隐藏 tag 时显示的内容 | VueNode \| function(omittedValues) | - | - |
| maxTagTextLength | 最大显示的 tag 文本长度 | number | - | - |
| multiple | 支持多选节点 | boolean | - | - |
| open | 控制浮层显隐 | boolean | - | - |
| options | 可选项数据源 | [Option](#option)\[] | - | - |
| placeholder | 输入框占位文本 | string | - | - |
| placement | 浮层预设位置 | `bottomLeft` `bottomRight` `topLeft` `topRight` | `bottomLeft` | - |
| popupMenuColumnStyle | 下拉菜单列的样式 | CSSProperties | - | - |
| showCheckedStrategy | 定义选中项回填的方式（仅在 `multiple` 为 `true` 时生效）。`Cascader.SHOW_CHILD`: 只显示选中的子节点。`Cascader.SHOW_PARENT`: 只显示父节点（当父节点下所有子节点都选中时）。 | `Cascader.SHOW_PARENT` \| `Cascader.SHOW_CHILD` | `Cascader.SHOW_PARENT` | - |
| showSearch | 在选择框中显示搜索框 | boolean \| [Object](#showsearch) | false | - |
| size | 输入框大小 | `large` \| `middle` \| `small` | - | - |
| status | 设置校验状态 | 'error' \| 'warning' | - | - |
| value | 指定选中项 | string\[] \| number\[] | - | - |
| variant | 形态变体 | `outlined` \| `borderless` \| `filled` \| `underlined` | `outlined` | - |

### 事件 
| 事件 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| change | 选择完成后的回调 | (value, selectedOptions) =&gt; void | - |
| openChange | 显示/隐藏浮层的回调 | (value) =&gt; void | - |

### 插槽 
| 插槽 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| displayRender | 选择后展示的渲染函数 | (label, selectedOptions) => VueNode | - |
| expandIcon | 自定义次级菜单展开图标 | VueNode | - |
| loadingIcon | 延迟加载的外观（现已无用） | VueNode | - |
| notFoundContent | 当下拉列表为空时显示的内容 | VueNode | - |
| optionRender | 自定义渲染下拉选项 | (option: Option) => VueNode | - |
| popupRender | 自定义下拉框内容 | (menus: VueNode) => VueNode | - |
| prefix | 自定义前缀 | VueNode | - |
| removeIcon | 自定义的多选框清除图标 | VueNode | - |
| suffixIcon | 自定义的选择框后缀图标 | VueNode | - |
| tagRender | 自定义 tag 内容 render，仅在多选时生效 | (\{ label: string, onClose: function, value: string \}) =&gt; VueNode | - |

### 方法 
| 名称 | 描述 | 版本 |
| --- | --- | --- |
| blur() | 移除焦点 | - |
| focus() | 获取焦点 | - |

## 类型 
### showSearch

`showSearch` 为对象时，其中的字段：

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| autoClearSearchValue | 是否在选中项后清空搜索框，只在 `multiple` 为 `true` 时有效 | boolean | true | - |
| filter | 接收 `inputValue` `path` 两个参数，当 `path` 符合筛选条件时，应返回 true，反之则返回 false | function(inputValue, path): boolean | - | - |
| limit | 搜索结果展示数量 | number \| false | 50 | - |
| matchInputWidth | 搜索结果列表是否与输入框同宽（[效果](https://github.com/ant-design/ant-design/issues/25779)） | boolean | true | - |
| render | 用于渲染 filter 后的选项 | function(inputValue, path): VueNode | - | - |
| sort | 用于排序 filter 后的选项 | function(a, b, inputValue) | - | - |
| searchValue | 设置搜索的值，需要与 `showSearch` 配合使用 | string | - | - |
| onSearch | 监听搜索，返回输入的值 | (search: string) =&gt; void | - | - |

### Option

```typescript
interface Option {
  value: string | number
  label?: VueNode
  disabled?: boolean
  children?: Option[]
  // 标记是否为叶子节点，设置了 `loadData` 时有效
  // 设为 `false` 时会强制标记为父节点，即使当前节点没有 children，也会显示展开图标
  isLeaf?: boolean
}
```

> 注意，如果需要获得中国省市区数据，可以参考 [china-division](https://gist.github.com/afc163/7582f35654fd03d5be7009444345ea17)。

## Semantic DOM
