---
title: Statistic
subtitle: 统计数值
description: 展示统计数值。
---

## 何时使用 
- 当需要突出某个或某组数字时。
- 当需要展示带描述的统计类数据时使用。

## Demos

| Demo | Path |
| --- | --- |
| 基本 | demo/basic.md |
| 单位 | demo/unit.md |
| 在卡片中使用 | demo/card.md |
| 计时器 | demo/timer.md |
| 自定义语义结构的样式和类 | demo/style-class.md |

## API

通用属性参考：[通用属性](../../docs/vue/common-props.md)

### Statistic

#### 属性 
| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| classes | 用于自定义 Statistic 组件内部各语义化结构的 class，支持对象或函数 | StatisticClassNamesType | - | - |
| decimalSeparator | 设置小数点 | string | `.` | - |
| formatter | 自定义数值展示 | (value: number \| string) =&gt; VueNode | - | - |
| groupSeparator | 设置千分位标识符 | string | `,` | - |
| loading | 数值是否加载中 | boolean | false | - |
| precision | 数值精度 | number | - | - |
| prefix | 设置数值的前缀 | VueNode | - | - |
| styles | 用于自定义 Statistic 组件内部各语义化结构的行内 style，支持对象或函数 | StatisticStylesType | - | - |
| suffix | 设置数值的后缀 | VueNode | - | - |
| title | 数值的标题 | VueNode | - | - |
| value | 数值内容 | string \| number | - | - |
| valueStyle | 设置数值区域的样式 | CSSProperties | - | - |

#### 插槽 
| 插槽 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| formatter | 自定义数值展示 | (value: number \| string) =&gt; VueNode | - |
| prefix | 设置数值的前缀 | () =&gt; VueNode | - |
| suffix | 设置数值的后缀 | () =&gt; VueNode | - |
| title | 数值的标题 | () =&gt; VueNode | - |

### Statistic.Timer

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| classes | 用于自定义组件内部各语义化结构的 class，支持对象或函数 | StatisticClassNamesType | - | - |
| format | 格式化倒计时展示，参考 [dayjs](https://day.js.org/) | string | `HH:mm:ss` | - |
| prefix | 设置数值的前缀 | VueNode | - | - |
| styles | 用于自定义组件内部各语义化结构的行内 style，支持对象或函数 | StatisticStylesType | - | - |
| suffix | 设置数值的后缀 | VueNode | - | - |
| title | 数值的标题 | VueNode | - | - |
| type | 计时类型，正计时或者倒计时 | `countdown` \| `countup` | - | - |
| value | 目标时间 | number | - | - |
| valueStyle | 设置数值区域的样式 | CSSProperties | - | - |

#### 事件 
| 事件 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| change | 倒计时时间变化时触发 | (value: number) =&gt; void | - |
| finish | 倒计时完成时触发，指定为 `countup` 此属性不生效 | () =&gt; void | - |

#### 插槽 
| 插槽 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| prefix | 设置数值的前缀 | () =&gt; VueNode | - |
| suffix | 设置数值的后缀 | () =&gt; VueNode | - |
| title | 数值的标题 | () =&gt; VueNode | - |

## 语义化 DOM 
| _semantic | demo/_semantic.md |
