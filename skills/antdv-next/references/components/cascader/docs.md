---
title: Cascader
description: Cascade selection box.
---

## When To Use 
- When you need to select from a set of associated data set. Such as province/city/district, company level, things classification.
- When selecting from a large data set, with multi-stage classifications separated for easy selection.
- Chooses cascade items in one float layer for better user experience.

## Demos

| Demo | Path |
| --- | --- |
| Basic | demo/basic.md |
| Default value | demo/default-value.md |
| Custom trigger | demo/custom-trigger.md |
| Hover | demo/hover.md |
| Disabled option | demo/disabled-option.md |
| Change on select | demo/change-on-select.md |
| Multiple | demo/multiple.md |
| ShowCheckedStrategy | demo/showCheckedStrategy.md |
| Size | demo/size.md |
| Custom render | demo/custom-render.md |
| Search | demo/search.md |
| Load Options Lazily | demo/lazy.md |
| Custom Field Names | demo/fields-name.md |
| Prefix and Suffix | demo/suffix.md |
| Custom dropdown | demo/custom-dropdown.md |
| Placement | demo/placement.md |
| Variants | demo/variant.md |
| Status | demo/status.md |
| Custom semantic dom styling | demo/style-class.md |
| Panel | demo/panel.md |

## API

Common props ref：[Common props](../../docs/vue/common-props.md)

### Props

| Property | Description | Type | Default | Version | [Global Config](../config-provider/docs.md#component-config) |
| --- | --- | --- | --- | --- | --- |
| allowClear | Whether to show a clear button | boolean \| [AllowClearConfig](#allowclearconfig) | true | - | 1.8.0 |
| changeOnSelect | Change value on each selection if set to true (always works when `multiple` is `true`) | boolean | false | - | × |
| disabled | Whether disabled select | boolean | false | - | × |
| expandTrigger | expand current item when click or hover, one of `click` `hover` | string | `click` | - | × |
| fieldNames | Custom field name for label and value and children | object | \{ label: `label`, value: `value`, children: `children` \} | - | × |
| getPopupContainer | Parent Node which the selector should be rendered to. Default to `body`. When position issues happen, try to modify it into scrollable content and position it relative. [example](https://codepen.io/afc163/pen/zEjNOy?editors=0010) | function(triggerNode) | () =&gt; document.body | - | × |
| loadData | To load option lazily, and it cannot work with `showSearch` | (selectedOptions) =&gt; void | - | - | × |
| loadingIcon | Customize the loading icon while options are loading lazily | VueNode | - | - | ✓ |
| maxTagCount | Max tag count to show. `responsive` will cost render performance | number \| `responsive` | - | - | × |
| maxTagPlaceholder | Placeholder for not showing tags | VueNode \| function(omittedValues) | - | - | × |
| maxTagTextLength | Max tag text length to show | number | - | - | × |
| multiple | Support multiple or not | boolean | - | - | × |
| open | Set visible of cascader popup | boolean | - | - | × |
| options | The data options of cascade | [Option](#option)\[] | - | - | × |
| placeholder | The input placeholder | string | - | - | × |
| placement | Use preset popup align config from builtinPlacements | `bottomLeft` `bottomRight` `topLeft` `topRight` | `bottomLeft` | - | × |
| showCheckedStrategy | The way to show selected items in the box (only effective when `multiple` is `true`). `Cascader.SHOW_CHILD`: just show child treeNode. `Cascader.SHOW_PARENT`: just show parent treeNode (when all child treeNode under the parent treeNode are checked) | `Cascader.SHOW_PARENT` \| `Cascader.SHOW_CHILD` | `Cascader.SHOW_PARENT` | - | × |
| showSearch | Whether show search input | boolean \| [Object](#showsearch) | false | - | × |
| size | The input size | `large` \| `medium` \| `small` | `medium` | - | × |
| status | Set validation status | 'error' \| 'warning' | - | - | × |
| suffix | The custom suffix. Custom suffixes will not respond to clicks to open, because the replaced suffix may be designed for other interactions. You can use `pointer-events: none` style to bypass | VueNode \| (info: &#123; open: boolean, searchValue: string, focused: boolean, showSearch?: boolean, loading?: boolean &#125;) =&gt; VueNode | `&lt;DownOutlined /&gt;` | 1.8.0 | 1.8.0 |
| suffixIcon | The custom suffix icon. Deprecated. Use `suffix` instead | VueNode | - | - | ✓ |
| value | The selected value, support `v-model:value` | string\[] \| number\[] | - | - | × |
| variant | Variants of selector | `outlined` \| `borderless` \| `filled` \| `underlined` | `outlined` | - | ✓ |

### Events

| Event | Description | Type | Version |
| --- | --- | --- | --- |
| change | Callback when finishing cascader select | (value, selectedOptions) =&gt; void | - |
| openChange | Callback when popup shown or hidden | (open: boolean) =&gt; void | - |

### Slots

| Slot | Description | Type | Version |
| --- | --- | --- | --- |
| displayRender | The render function of displaying selected options | (label, selectedOptions) => VueNode | - |
| expandIcon | Customize the current item expand icon | VueNode | - |
| loadingIcon | Customize the loading icon while options are loading lazily | VueNode | - |
| notFoundContent | Specify content to show when no result matches | VueNode | - |
| optionRender | Customize the rendering dropdown options | (option: Option) => VueNode | - |
| popupRender | Customize dropdown content | (menus: VNode) => VueNode | - |
| prefix | The custom prefix | VueNode | - |
| removeIcon | The custom remove icon | VueNode | - |
| suffix | The custom suffix | (info: &#123; open: boolean, searchValue: string, focused: boolean, showSearch?: boolean, loading?: boolean &#125;) =&gt; VueNode | 1.8.0 |
| suffixIcon | The custom suffix icon. Deprecated. Use `suffix` slot instead | VueNode | - |
| tagRender | Custom render function for tags in `multiple` mode | (\{ label: string, onClose: function, value: string \}) =&gt; VueNode | - |

### Methods

| Method | Description | Version |
| --- | --- | --- |
| blur() | Remove focus | - |
| focus() | Get focus | - |

## Types

### AllowClearConfig 
Supports global configuration through `ConfigProvider.cascader.allowClear` (1.8.0). Fields use component values first, then global values, then defaults. `allowClear: true` inherits the global configuration; `disabled: false` and `tabIndex: 0` override global values.

| Property | Description | Type | Default | Version | [Global Config](../config-provider/docs.md#component-config) |
| --- | --- | --- | --- | --- | --- |
| clearIcon | Custom clear icon | VueNode | - | - | 1.8.0 (`cascader.allowClear.clearIcon`), ✓ (`cascader.clearIcon`) |
| disabled | When `true`, equivalent to `allowClear: false` | boolean | false | 1.8.0 | 1.8.0 |
| label | Accessible name of the clear button | string | Component locale text | - | 1.8.0 |
| tabIndex | Tab order of the clear button. `-1` excludes it from Tab navigation | number | 0 | 1.8.0 | 1.8.0 |

### showSearch

Fields for showSearch when it's an object:

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| autoClearSearchValue | Whether the current search will be cleared on selecting an item. Only applies when `multiple` is `true` | boolean | true | - |
| filter | The function will receive two arguments, inputValue and option, if the function returns true, the option will be included in the filtered set; Otherwise, it will be excluded | function(inputValue, path): boolean | - | - |
| limit | Set the count of filtered items | number \| false | 50 | - |
| matchInputWidth | Whether the width of list matches input, ([how it looks](https://github.com/ant-design/ant-design/issues/25779)) | boolean | true | - |
| render | Used to render filtered options | function(inputValue, path): VueNode | - | - |
| sort | Used to sort filtered options | function(a, b, inputValue) | - | - |
| searchValue | Set search value, Need work with `showSearch` | string | - | - |
| onSearch | The callback function triggered when input changed | (search: string) =&gt; void | - | - |

### Option

```typescript
interface Option {
  value: string | number
  label?: VueNode
  disabled?: boolean
  children?: Option[]
  // Determines if this is a leaf node(effective when `loadData` is specified).
  // `false` will force trade TreeNode as a parent node.
  // Show expand icon even if the current node has no children.
  isLeaf?: boolean
}
```

## Semantic DOM

| _semantic | demo/_semantic.md |
