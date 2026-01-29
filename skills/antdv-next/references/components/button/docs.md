---
title: Button
subtitle: 按钮
description: 按钮用于开始一个即时操作。
---

## 何时使用 
标记了一个（或封装一组）操作命令，响应用户点击行为，触发相应的业务逻辑。

在 Antdv Next 中我们提供了五种按钮。

- 🔵 主按钮：用于主行动点，一个操作区域只能有一个主按钮。
- ⚪️ 默认按钮：用于没有主次之分的一组行动点。
- 😶 虚线按钮：常用于添加操作。
- 🔤 文本按钮：用于最次级的行动点。
- 🔗 链接按钮：一般用于链接，即导航至某位置。

以及四种状态属性与上面配合使用。

- ⚠️ 危险：删除/移动/修改权限等危险操作，一般需要二次确认。
- 👻 幽灵：用于背景色比较复杂的地方，常用在首页/产品页等展示场景。
- 🚫 禁用：行动点不可用的时候，一般需要文案解释。
- 🔃 加载中：用于异步操作等待反馈的时候，也可以避免多次提交。

## Demos

| Demo | Path |
| --- | --- |
| 语法糖 | demo/basic.md |
| 颜色与变体 | demo/color-variant.md |
| 按钮图标 | demo/icon.md |
| 按钮图标位置 | demo/icon-placement.md |
| 不可用状态 | demo/disabled.md |
| 加载中状态 | demo/loading.md |
| 幽灵按钮 | demo/ghost.md |
| 按钮尺寸 | demo/size.md |
| 危险按钮 | demo/danger.md |
| 多个按钮组合 | demo/multiple.md |
| Block 按钮 | demo/block.md |
| 渐变按钮 | demo/linear-gradient.md |
| 移除两个汉字之间的空格 | demo/chinese-space.md |
| 自定义语义结构的样式和类 | demo/style-class.md |

## API

### 属性 
通用属性参考：[通用属性](../../docs/vue/common-props.md)

通过设置 Button 的属性来产生不同的按钮样式，推荐顺序为：`type` -> `shape` -> `size` -> `loading` -> `disabled`。

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| autoInsertSpace | 我们默认提供两个汉字之间的空格，可以设置 `autoInsertSpace` 为 `false` 关闭 | boolean | `true` | - |
| block | 将按钮宽度调整为其父宽度的选项 | boolean | false | - |
| color | 设置按钮的颜色 | `default` \| `primary` \| `danger` \| [PresetColors](#presetcolors) | - | - |
| danger | 语法糖，设置危险按钮。当设置 `color` 时会以后者为准 | boolean | false | - |
| disabled | 设置按钮失效状态 | boolean | false | - |
| ghost | 幽灵属性，使按钮背景透明 | boolean | false | - |
| href | 点击跳转的地址，指定此属性 button 的行为和 a 链接一致 | string | - | - |
| htmlType | 设置 `button` 原生的 `type` 值，可选值请参考 [HTML 标准](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/button#type) | `submit` \| `reset` \| `button` | `button` | - |
| iconPlacement | 设置按钮图标组件的位置 | `start` \| `end` | `start` | - |
| loading | 设置按钮载入状态 | boolean \| &#123; delay: number, icon: VueNode &#125; | false | - |
| shape | 设置按钮形状 | `default` \| `circle` \| `round` | `default` | - |
| size | 设置按钮大小 | `large` \| `middle` \| `small` | `middle` | - |
| target | 相当于 a 链接的 target 属性，href 存在时生效 | string | - | - |
| type | 语法糖，设置按钮类型。当设置 `variant` 与 `color` 时以后者为准 | `primary` \| `dashed` \| `link` \| `text` \| `default` | `default` | - |
| variant | 设置按钮的变体 | `outlined` \| `dashed` \| `solid` \| `filled` \| `text` \| `link` | - | - |

### 事件 
| 事件 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| `click` | 点击按钮时的回调 | (event: React.MouseEvent&lt;HTMLElement, MouseEvent&gt;) =&gt; void | - |

### 插槽 
| 插槽 | 说明 | 类型 | 版本 |
| --- | --- | ---- | --- |
| `icon` | 设置按钮的图标组件 | - | - |
| `loadingIcon` | 设置按钮载入的图标组件 | - | - |

## 类型

### PresetColors

> type PresetColors = 'blue' | 'purple' | 'cyan' | 'green' | 'magenta' | 'pink' | 'red' | 'orange' | 'yellow' | 'volcano' | 'geekblue' | 'lime' | 'gold';

## Semantic DOM

## FAQ

### 类型和颜色与变体如何选择？ 
类型本质上是颜色与变体的语法糖，内部为其提供了一组颜色与变体的映射关系。如果两者同时存在，优先使用颜色与变体。

```vue
<template>
  <a-button type="primary">
    click
  </a-button>
</template>
```

等同于

```vue
<template>
  <a-button color="primary" variant="solid">
    click
  </a-button>
</template>
```

### 如何关闭点击波纹效果？ 
如果你不需要这个特性，可以设置 [ConfigProvider](../config-provider/docs.md#api) 的 `wave` 的 `disabled` 为 `true`。

```vue
<template>
  <a-config-provider :wave="{ disabled: true }">
    <a-button>click</a-button>
  </a-config-provider>
</template>
```
