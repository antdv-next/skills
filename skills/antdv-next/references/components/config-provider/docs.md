---
subtitle: 全局化配置
title: ConfigProvider
description: 为组件提供统一的全局化配置。
---

## 何时使用 
为应用内组件提供统一配置，例如国际化、方向、尺寸、主题或波纹效果。

## 使用 
ConfigProvider 使用 Vue 的 provide/inject 特性，只需在应用外围包裹一次即可全局生效。

```vue
<template>
  <a-config-provider direction="rtl">
    <App />
  </a-config-provider>
</template>
```

### 内容安全策略（CSP）
部分组件为了支持波纹效果，使用了动态样式。如果开启了 Content Security Policy (CSP)，你可以通过 `csp` 属性来进行配置：

```vue
<template>
  <a-config-provider :csp="{ nonce: 'YourNonceCode' }">
    <a-button>My Button</a-button>
  </a-config-provider>
</template>
```

## Demos

| Demo | Path |
| --- | --- |
| 国际化 | demo/locale.md |
| 方向 | demo/direction.md |
| 组件尺寸 | demo/size.md |
| 主题 | demo/theme.md |
| 自定义波纹 | demo/wave.md |
| 静态方法 | demo/holder-render.md |
| 获取配置 | demo/use-config.md |

## API

通用属性参考：[通用属性](../../docs/vue/common-props.md)

### 属性 
| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| componentDisabled | 设置 antd 组件禁用状态 | boolean | - | - |
| componentSize | 设置 antd 组件大小 | `small` \| `middle` \| `large` | - | - |
| csp | 设置 [Content Security Policy](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CSP) 配置 | CSPConfig | - | - |
| direction | 设置文本展示方向。 [示例](#config-provider-demo-direction) | `ltr` \| `rtl` | `ltr` | - |
| getPopupContainer | 弹出框（Select, Tooltip, Menu 等等）渲染父节点，默认渲染到 body 上。 | `(trigger?: HTMLElement) => HTMLElement \| ShadowRoot` | () => document.body | - |
| getTargetContainer | 配置 Affix、Anchor 滚动监听容器。 | `() => HTMLElement \| Window \| ShadowRoot` | () => window | - |
| iconPrefixCls | 设置图标统一样式前缀 | string | `anticon` | - |
| locale | 语言包配置，语言包可到 [antd/locale](http://unpkg.com/antd/locale/) 目录下寻找 | Locale | - | - |
| popupMatchSelectWidth | 下拉菜单和选择器同宽。默认将设置 `min-width`，当值小于选择框宽度时会被忽略。`false` 时会关闭虚拟滚动 | boolean \| number | - | - |
| popupOverflow | Select 类组件弹层展示逻辑，默认为可视区域滚动，可配置成滚动区域滚动 | `viewport` \| `scroll` | `viewport` | - |
| prefixCls | 设置统一样式前缀 | string | `ant` | - |
| renderEmpty | 自定义组件空状态。参考 [空状态](../empty/docs.md) | (componentName?: string) => VueNode | - | - |
| variant | 设置全局输入组件形态变体 | `outlined` \| `filled` \| `borderless` \| `underlined` | - | - |
| virtual | 设置 `false` 时关闭虚拟滚动 | boolean | - | - |
| warning | 设置警告等级，`strict` 为 `false` 时会将废弃相关信息聚合为单条信息 | WarningContextProps | - | - |

### 插槽 
| 插槽 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| renderEmpty | 自定义组件空状态。参考 [空状态](../empty/docs.md) | (componentName?: string) => any | - |

### ConfigProvider.config() 
设置 `Modal`、`Message`、`Notification` 静态方法配置，只会对非 hooks 的静态方法调用生效。

```ts
import { App, ConfigProvider } from 'antdv-next'
import { h } from 'vue'

ConfigProvider.config({
  holderRender: children => h(
    ConfigProvider,
    {
      prefixCls: 'ant',
      iconPrefixCls: 'anticon',
      theme: { token: { colorPrimary: 'red' } },
    },
    () => h(App, null, () => children),
  ),
})
```

### useConfig() 
获取父级 `Provider` 的值，如 `DisabledContextProvider`、`SizeContextProvider`。

```ts
import { useConfig } from 'antdv-next/config-provider/context'

const config = useConfig()
const { componentDisabled, componentSize } = config.value
```

| 返回值 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| componentDisabled | antd 组件禁用状态 | boolean | - | - |
| componentSize | antd 组件大小状态 | `small` \| `middle` \| `large` | - | - |

### 组件配置 
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| affix | 设置 Affix 组件的通用属性 | &#123; class?: string, style?: CSSProperties &#125; | - | - |
| alert | 设置 Alert 组件的通用属性 | &#123; class?: string, style?: CSSProperties, closeIcon?: VueNode, successIcon?: VueNode, infoIcon?: VueNode, warningIcon?: VueNode, errorIcon?: VueNode &#125; | - | - |
| avatar | 设置 Avatar 组件的通用属性 | &#123; class?: string, style?: CSSProperties &#125; | - | - |
| carousel | 设置 Carousel 组件的通用属性 | &#123; class?: string, style?: CSSProperties &#125; | - | - |
| cascader | 设置 Cascader 组件的通用属性 | &#123; class?: string, style?: CSSProperties &#125; | - | - |
| rangePicker | 设置 RangePicker 组件的通用属性 | &#123; class?: string, style?: CSSProperties &#125; | - | - |
| empty | 设置 Empty 组件的通用属性 | &#123; class?: string, style?: CSSProperties, classes?: [EmptyProps["classes"]](../empty/docs.md#api), styles?: [EmptyProps["styles"]](../empty/docs.md#api), image?: VueNode &#125; | - | - |
| flex | 设置 Flex 组件的通用属性 | &#123; class?: string, style?: CSSProperties, vertical?: boolean &#125; | - | - |
| input | 设置 Input 组件的通用属性 | &#123; autoComplete?: string, class?: string, style?: CSSProperties, classes?: [InputConfig["classes"]](../input/docs.md#semantic-input), styles?: [InputConfig["styles"]](../input/docs.md#semantic-input), allowClear?: boolean \| &#123; clearIcon?: VueNode &#125; &#125; | - | - |
| otp | 设置 OTP 组件的通用属性 | &#123; class?: string, style?: CSSProperties, classes?: [OTPConfig["classes"]](../input/docs.md#semantic-otp), styles?: [OTPConfig["styles"]](../input/docs.md#semantic-otp) &#125; | - | - |
| inputSearch | 设置 Search 组件的通用属性 | &#123; class?: string, style?: CSSProperties, classes?: [InputSearchConfig["classes"]](../input/docs.md#semantic-search), styles?: [InputSearchConfig["styles"]](../input/docs.md#semantic-search) &#125; | - | - |
| textArea | 设置 TextArea 组件的通用属性 | &#123; autoComplete?: string, class?: string, style?: CSSProperties, classes?: [TextAreaConfig["classes"]](../input/docs.md#semantic-textarea), styles?: [TextAreaConfig["styles"]](../input/docs.md#semantic-textarea), allowClear?: boolean \| &#123; clearIcon?: VueNode &#125; &#125; | - | - |
| layout | 设置 Layout 组件的通用属性 | &#123; class?: string, style?: CSSProperties &#125; | - | - |
| list | 设置 List 组件的通用属性 | &#123; class?: string, style?: CSSProperties, item?: &#123; classes: [ListItemProps["classes"]](../list/docs.md#listitem), styles: [ListItemProps["styles"]](../list/docs.md#listitem) &#125; &#125; | - | - |
| menu | 设置 Menu 组件的通用属性 | &#123; class?: string, style?: CSSProperties, expandIcon?: VueNode \| (props) => VueNode &#125; | - | - |
| rate | 设置 Rate 组件的通用属性 | &#123; class?: string, style?: CSSProperties &#125; | - | - |
| typography | 设置 Typography 组件的通用属性 | &#123; class?: string, style?: CSSProperties &#125; | - | - |
| wave | 设置水波纹特效 | &#123; disabled?: boolean, showEffect?: (node: HTMLElement, info: &#123; className, token, component &#125;) => void &#125; | - | - |

## FAQ

### 如何增加一个新的语言包？ 
参考[《增加语言包》](../../docs/vue/i18n.md)。

### 为什么时间类组件的国际化 locale 设置不生效？ 
参考 FAQ [Date-related-components-locale-is-not-working?](../../docs/vue/faq.md#date-related-components-locale-is-not-working)

### 配置 `getPopupContainer` 导致 Modal 报错？ 
相关 issue：<https://github.com/ant-design/ant-design/issues/19974>

当如下全局设置 `getPopupContainer` 为触发节点的 parentNode 时，由于 Modal 的用法不存在 `triggerNode`，这样会导致 `triggerNode is undefined` 的报错，需要增加一个判断条件。

```diff
 <ConfigProvider
-  getPopupContainer={triggerNode => triggerNode.parentNode}
+  getPopupContainer={node => {
+    if (node) {
+      return node.parentNode
+    }
+    return document.body
+  }}
 >
   <App />
 </ConfigProvider>
```

### 为什么 `message.info`、`notification.open`、`Modal.confirm` 里的 VueNode 不能继承 ConfigProvider 的配置？ 
静态方法会创建独立实例，无法消费 ConfigProvider 上下文。请优先使用 hooks 或 App 提供的实例。

### Vite 生产环境下 locale 不生效？ 
相关 issue: [#39045](https://github.com/ant-design/ant-design/issues/39045)

Vite 生产模式下 cjs 默认导出需要使用 `enUS.default`。你可以直接从 `es/` 目录引入，如 `import enUS from 'antdv-next/locale/en_US'`，保证开发和生产一致。

### `prefixCls` 的优先级（前者会被后者覆盖） 
1. ConfigProvider.config 设置 prefixCls 为 prefix-1
2. ConfigProvider.config 设置 holderRender（内部包裹 ConfigProvider 并设置 prefix-2）
3. message.config 设置 prefixCls 为 prefix-3
