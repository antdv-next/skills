---
title: Drawer
subtitle: 抽屉
description: 屏幕边缘滑出的浮层面板。
---

## 何时使用 
抽屉从屏幕边缘滑出，覆盖当前页面的内容和操作，用于承载较复杂的任务流程。

- 需要表单编辑或创建信息时使用。
- 处理子任务时使用，避免跳转页面。
- 同一表单需要在多个位置复用时使用。

> 说明
>
> `loading` 属性会在抽屉中渲染 Skeleton。

## Demos

| Demo | Path |
| --- | --- |
| 基本 | demo/basic-right.md |
| 自定义位置 | demo/placement.md |
| 可调整大小 | demo/resizable.md |
| 加载中 | demo/loading.md |
| 额外操作 | demo/extra.md |
| 渲染在当前容器 | demo/render-in-current.md |
| 抽屉内表单 | demo/form-in-drawer.md |
| 抽屉预览 | demo/user-profile.md |
| 多层抽屉 | demo/multi-level-drawer.md |
| 预设尺寸 | demo/size.md |
| 遮罩 | demo/mask.md |
| 关闭按钮位置 | demo/closable-placement.md |
| 自定义语义结构样式 | demo/style-class.md |

## API

### 属性 
通用属性参考：[通用属性](../../docs/vue/common-props.md)

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| afterOpenChange | 切换抽屉时动画结束后的回调 | (open: boolean) => void | - | - |
| classes | 用于自定义 Drawer 组件内部各语义化结构的 class，支持对象或函数 | DrawerClassNamesType | - | - |
| closable | 是否展示关闭按钮，可通过 `placement` 设置位置 | boolean \| { closeIcon?: VueNode; disabled?: boolean; placement?: 'start' \| 'end' } | true | - |
| closeIcon | 自定义关闭图标 | VueNode | - | - |
| ~~destroyOnClose~~ | 关闭时销毁 Drawer 里的子元素 | boolean | false | - |
| destroyOnHidden | 关闭时销毁 Drawer 里的子元素 | boolean | false | - |
| extra | 右上角额外操作区域 | VueNode | - | - |
| footer | 抽屉底部 | VueNode | - | - |
| forceRender | 强制预渲染 Drawer | boolean | false | - |
| getContainer | 指定 Drawer 挂载的节点，`false` 为挂载在当前位置 | string \| HTMLElement \| (() => HTMLElement) \| false | document.body | - |
| keyboard | 是否支持键盘 esc 关闭 | boolean | true | - |
| loading | 显示 Skeleton | boolean | false | - |
| mask | 遮罩效果 | MaskType | true | - |
| maskClosable | 点击遮罩是否允许关闭 | boolean | true | - |
| placement | 抽屉的方向 | `top` \| `right` \| `bottom` \| `left` | `right` | - |
| push | 多层抽屉的推开行为 | boolean \| { distance: string \| number } | { distance: 180 } | - |
| resizable | 是否允许拖拽调整尺寸 | boolean \| [ResizableConfig](#resizableconfig) | - | - |
| rootClass | 根容器 class | string | - | - |
| rootStyle | 根容器样式（包含遮罩） | CSSProperties | - | - |
| size | 预设尺寸，默认 `378px` 和大号 `736px`，也支持自定义数字 | 'default' \| 'large' \| number | 'default' | - |
| styles | 用于自定义 Drawer 组件内部各语义化结构的行内 style，支持对象或函数 | DrawerStylesType | - | - |
| title | 标题 | VueNode | - | - |
| open | 抽屉是否可见 | boolean | false | - |
| zIndex | 设置 Drawer 的 `z-index` | number | 1000 | - |

### 事件 
| 事件 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| afterOpenChange | 切换抽屉时动画结束后的回调 | (open: boolean) => void | - |
| close | 抽屉关闭回调 | (e: MouseEvent \| KeyboardEvent) => void | - |
| keydown | 键盘按下回调 | (e: KeyboardEvent) => void | - |
| keyup | 键盘抬起回调 | (e: KeyboardEvent) => void | - |
| mouseenter | 鼠标移入回调 | (e: MouseEvent) => void | - |
| mouseleave | 鼠标移出回调 | (e: MouseEvent) => void | - |
| mouseover | 鼠标移入回调 | (e: MouseEvent) => void | - |
| click | 点击回调 | (e: MouseEvent) => void | - |

### 插槽 
| 插槽 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| title | 标题 | () => any | - |
| footer | 底部 | () => any | - |
| extra | 右上角额外操作 | () => any | - |
| closeIcon | 自定义关闭图标 | () => any | - |
| default | 抽屉内容 | () => any | - |

## 类型 
### ResizableConfig 
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| onResizeStart | 开始拖拽回调 | () => void | - | - |
| onResize | 拖拽中回调 | (size: number) => void | - | - |
| onResizeEnd | 结束拖拽回调 | () => void | - | - |

## 语义化结构 
| 名称 | 说明 |
| --- | --- |
| root | 根节点 |
| mask | 遮罩层 |
| wrapper | 外层容器 |
| section | 抽屉内容容器 |
| header | 头部 |
| title | 标题 |
| extra | 额外操作区域 |
| body | 内容区 |
| footer | 底部 |
| dragger | 拖拽条 |
| close | 关闭按钮 |
