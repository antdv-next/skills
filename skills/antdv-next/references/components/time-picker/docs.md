---
title: TimePicker
subtitle: 时间选择框
description: 输入或选择时间的控件。
---

## 何时使用 
当用户需要输入一个时间，可以点击标准输入框，弹出时间面板进行选择。

## Demos

| Demo | Path |
| --- | --- |
| 基本 | demo/basic.md |
| 受控组件 | demo/value.md |
| 值格式化 | demo/value-format.md |
| 三种大小 | demo/size.md |
| 选择确认 | demo/need-confirm.md |
| 禁用 | demo/disabled.md |
| 选择时分 | demo/hide-column.md |
| 步长选项 | demo/interval-options.md |
| 附加内容 | demo/addon.md |
| 12 小时制 | demo/12hours.md |
| 滚动即改变 | demo/change-on-scroll.md |
| 范围选择器 | demo/range-picker.md |
| 形态变体 | demo/variant.md |
| 自定义状态 | demo/status.md |
| 前后缀 | demo/suffix.md |
| 自定义语义结构的样式和类 | demo/style-class.md |

## API

通用属性参考：[通用属性](../../docs/vue/common-props.md)

### TimePicker

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| allowClear | 自定义清除按钮 | boolean \| { clearIcon?: VueNode } | true | 5.8.0: 支持对象类型 |
| cellRender | 自定义单元格的内容 | (current: number, info: { originNode: VueNode, today: dayjs, range?: 'start' \| 'end', subType: 'hour' \| 'minute' \| 'second' \| 'meridiem' }) => VueNode | - | 5.4.0 |
| changeOnScroll | 在滚动时改变选择值 | boolean | false | 5.14.0 |
| defaultValue | 默认时间 | [dayjs](http://day.js.org/) | - |  |
| disabled | 禁用全部操作 | boolean | false |  |
| disabledTime | 不可选择的时间 | [DisabledTime](#disabledtime) | - | 4.19.0 |
| format | 展示的时间格式 | string | `HH:mm:ss` |  |
| valueFormat | 设置绑定值的格式。设置后 `value`、`defaultValue`、`v-model:value` 可使用格式化字符串，`change` 返回同格式字符串。示例：[值格式化](#time-picker-demo-value-format) | string | - |  |
| getPopupContainer | 定义浮层的容器，默认为 body 上新建 div | function(trigger) | - |  |
| hideDisabledOptions | 隐藏禁止选择的选项 | boolean | false |  |
| hourStep | 小时选项间隔 | number | 1 |  |
| inputReadOnly | 设置输入框为只读（避免在移动设备上打开虚拟键盘） | boolean | false |  |
| minuteStep | 分钟选项间隔 | number | 1 |  |
| needConfirm | 是否需要确认按钮，为 `false` 时失去焦点即代表选择 | boolean | - | 5.14.0 |
| open | 面板是否打开 | boolean | false |  |
| placeholder | 没有值的时候显示的内容 | string \| \[string, string] | `请选择时间` |  |
| placement | 选择框弹出的位置 | `bottomLeft` `bottomRight` `topLeft` `topRight` | bottomLeft |  |
| ~~popupClassName~~ | 弹出层类名，请使用 `classes.popup` 替换 | string | - |  |
| ~~popupStyle~~ | 弹出层样式对象, 请使用 `styles.popup` 替换 | object | - |  |
| prefix | 自定义前缀 | VueNode | - | 5.22.0 |
| previewValue | 当用户选择时间悬停选项时，输入字段的值会发生临时更改 | false \| hover | hover | 6.0.0 |
| renderExtraFooter | 选择框底部显示自定义的内容 | () => VueNode | - |  |
| secondStep | 秒选项间隔 | number | 1 |  |
| showNow | 面板是否显示“此刻”按钮 | boolean | - | 4.4.0 |
| size | 输入框大小，`large` 高度为 40px，`small` 为 24px，默认是 32px | `large` \| `middle` \| `small` | - |  |
| status | 设置校验状态 | 'error' \| 'warning' | - | 4.19.0 |
| suffixIcon | 自定义的选择框后缀图标 | VueNode | - |  |
| use12Hours | 使用 12 小时制，为 true 时 `format` 默认为 `h:mm:ss a` | boolean | false |  |
| value | 当前时间，支持 `v-model:value` | [dayjs](http://day.js.org/) | - |  |
| variant | 形态变体 | `outlined` \| `borderless` \| `filled` \| `underlined` | `outlined` | 5.13.0 \| `underlined`: 5.24.0 |
| onChange | 时间发生变化的回调 | function(time: dayjs, timeString: string): void | - |  |
| onOpenChange | 面板打开/关闭时的回调 | (open: boolean) => void | - |  |

#### DisabledTime

```typescript
type DisabledTime = (now: Dayjs) => {
  disabledHours?: () => number[]
  disabledMinutes?: (selectedHour: number) => number[]
  disabledSeconds?: (selectedHour: number, selectedMinute: number) => number[]
  disabledMilliseconds?: (
    selectedHour: number,
    selectedMinute: number,
    selectedSecond: number,
  ) => number[]
}
```

注意：`disabledMilliseconds` 为 `5.14.0` 新增。

## 方法

| 名称    | 描述     | 版本 |
| ------- | -------- | ---- |
| blur()  | 移除焦点 |      |
| focus() | 获取焦点 |      |

## RangePicker

属性与 DatePicker 的 [RangePicker](../date-picker/docs.md#rangepicker) 相同。还包含以下属性：

| 参数         | 说明                 | 类型                                    | 默认值 | 版本   |
| ------------ | -------------------- | --------------------------------------- | ------ | ------ |
| disabledTime | 不可选择的时间       | [RangeDisabledTime](#rangedisabledtime) | -      | 4.19.0 |
| order        | 始末时间是否自动排序 | boolean                                 | true   | 4.1.0  |

### RangeDisabledTime

```typescript
type RangeDisabledTime = (
  now: Dayjs,
  type = 'start' | 'end',
) => {
  disabledHours?: () => number[]
  disabledMinutes?: (selectedHour: number) => number[]
  disabledSeconds?: (selectedHour: number, selectedMinute: number) => number[]
}
```

## 语义化 DOM 
| _semantic | demo/_semantic.md |

## FAQ

- [如何在 TimePicker 中使用自定义日期库（如 Moment.js ）](../../docs/vue/use-custom-date-library.md#timepicker)
