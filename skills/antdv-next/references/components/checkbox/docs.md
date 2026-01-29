---
title: Checkbox
subtitle: 多选框
description: 收集用户的多项选择。
---

## 何时使用 
## Demos

| Demo | Path |
| --- | --- |
| 基本用法 | demo/basic.md |
| 失效 | demo/disabled.md |
| 受控的 Checkbox | demo/controller.md |
| Checkbox 组 | demo/group.md |
| 全选 | demo/check-all.md |
| 布局 | demo/layout.md |
| 自定义语义结构的样式和类 | demo/style-class.md |

## API

通用属性参考：[通用属性](../../docs/vue/common-props.md)

### Checkbox

#### 属性 
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| checked | 指定当前是否选中 | boolean | false | - |
| disabled | 失效状态 | boolean | false | - |
| indeterminate | 设置 indeterminate 状态，只负责样式控制 | boolean | false | - |

#### 事件 
| 事件 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| change | 变化时的回调函数 | (e: CheckboxChangeEvent) =&gt; void | - |
| focus | 获得焦点时的回调 | function() | - |
| blur | 失去焦点时的回调 | function() | - |

### CheckboxGroup

#### 属性 
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| options | 指定可选项 | string\[] \| number\[] \| Option\[] | \[] | - |
| disabled | 整组失效 | boolean | false | - |
| name | CheckboxGroup 下所有 `input[type="checkbox"]` 的 `name` 属性 | string | - | - |
| value | 指定选中的选项 | (string \| number \| boolean)\[] | \[] | - |
| labelRender | - | (params: &#123; item: CheckboxOptionType, index: number &#125;) =&gt; any | - | - |

#### 事件 
| 事件 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| change | 变化时的回调函数 | (checkedValue: T[]) =&gt; void | - |

#### 插槽 
| 插槽 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| labelRender | - | (params: &#123; item: CheckboxOptionType, index: number &#125;) =&gt; any | - |
