---
title: TimePicker
description: To select/input a time.
---

## When To Use

By clicking the input box, you can select a time from a popup panel.

## Examples

## Demos

| Demo | Path |
| --- | --- |
| Basic | demo/basic.md |
| Under Control | demo/value.md |
| Value Format | demo/value-format.md |
| Three Sizes | demo/size.md |
| Need Confirm | demo/need-confirm.md |
| disabled | demo/disabled.md |
| Hour and minute | demo/hide-column.md |
| interval option | demo/interval-options.md |
| Addon | demo/addon.md |
| 12 hours | demo/12hours.md |
| Change on scroll | demo/change-on-scroll.md |
| Time Range Picker | demo/range-picker.md |
| Variants | demo/variant.md |
| Status | demo/status.md |
| Prefix and Suffix | demo/suffix.md |
| Custom semantic dom styling | demo/style-class.md |

## API

Common props ref：[Common props](../../docs/vue/common-props.md)

### TimePicker

| Property | Description | Type | Default | Version | [Global Config](../config-provider/docs.md#component-config) |
| --- | --- | --- | --- | --- | --- |
| allowClear | Whether to show a clear button | boolean \| [AllowClearConfig](#allowclearconfig) | true | - | ✓ |
| ~~addon~~ | Called from time picker panel to render an addon to its bottom, please use `renderExtraFooter` instead | () => VueNode | - | - | × |
| cellRender | Custom rendering function for picker cells | (current: number, info: \{ originNode: VueNode, today: dayjs, range?: 'start' \| 'end', subType: 'hour' \| 'minute' \| 'second' \| 'meridiem' \}) => VueNode | - | - | × |
| changeOnScroll | Trigger selection when scroll the column | boolean | false | - | × |
| components | Custom panels, input, and footer buttons. See [DatePicker Components](../date-picker/docs.md#components) | [Components](../date-picker/docs.md#components) | - | `nowButton` and `okButton`: 1.8.1 | × |
| defaultValue | To set default time | [dayjs](http://day.js.org/) | - |  | × |
| disabled | Determine whether the TimePicker is disabled | boolean | false |  | × |
| disabledTime | To specify the time that cannot be selected | [DisabledTime](#disabledtime) | - | - | × |
| format | To set the time format | string | `HH:mm:ss` |  | × |
| valueFormat | Set the binding value format. After setting, `value`, `defaultValue`, and `v-model:value` can use formatted strings, and `change` returns strings in the same format. Demo: [Value Format](#time-picker-demo-value-format) | string | - |  | × |
| getPopupContainer | To set the container of the floating layer, while the default is to create a div element in body | function(trigger) | - |  | × |
| hideDisabledOptions | Whether hide the options that can not be selected | boolean | false |  | × |
| hourStep | Interval between hours in picker | number | 1 |  | × |
| inputReadOnly | Set the `readonly` attribute of the input tag (avoids virtual keyboard on touch devices) | boolean | false |  | × |
| minuteStep | Interval between minutes in picker | number | 1 |  | × |
| needConfirm | Need click confirm button to trigger value change | boolean | - | - | × |
| open | Whether to popup panel | boolean | false |  | × |
| placeholder | Display when there's no value | string \| \[string, string] | `Select a time` |  | × |
| placement | The position where the selection box pops up | `bottomLeft` `bottomRight` `topLeft` `topRight` | bottomLeft |  | × |
| ~~popupClassName~~ | The className of panel, please use `classes.popup` instead | string | - |  | × |
| ~~popupStyle~~ | The style of panel, please use `styles.popup` instead | CSSProperties | - |  | × |
| prefix | The custom prefix | VueNode | - | - | × |
| previewValue | When the user selects the time hover option, the value of the input field undergoes a temporary change | false \| hover | hover | - | × |
| renderExtraFooter | Called from time picker panel to render some addon to its bottom | () => VueNode | - |  | × |
| secondStep | Interval between seconds in picker | number | 1 |  | × |
| showNow | Whether to show `Now` button on panel | boolean | - | - | × |
| size | To determine the size of the input box, the height of `large` and `small`, are 40px and 24px respectively, while default size is 32px | `large` \| `medium` \| `small` | - |  | × |
| status | Set validation status | 'error' \| 'warning' \| 'success' \| 'validating' | - | - | × |
| suffix | The custom suffix | VueNode | - | 1.8.0 | 1.8.0 |
| ~~suffixIcon~~ | The custom suffix icon, please use `suffix` instead | VueNode | - |  | ✓ |
| use12Hours | Display as 12 hours format, with default format `h:mm:ss a` | boolean | false |  | × |
| value | To set time, support `v-model:value` | [dayjs](http://day.js.org/) | - |  | × |
| variant | Variants of picker | `outlined` \| `borderless` \| `filled` \| `underlined` | `outlined` | - | ✓ |

### AllowClearConfig 
Fields that support global configuration use component values first, then global values, then defaults. `allowClear: true` inherits the global configuration; `disabled: false` and `tabIndex: 0` override the global values.

| Property | Description | Type | Default | Version | [Global Config](../config-provider/docs.md#component-config) |
| --- | --- | --- | --- | --- | --- |
| clearIcon | Custom clear icon | VueNode | - | - | ✓ |
| disabled | When `true`, equivalent to `allowClear: false` | boolean | false | 1.8.0 | 1.8.0 |
| label | Accessible name of the clear button | string | Component locale text | 1.8.0 | 1.8.0 |
| tabIndex | Tab order of the clear button. `-1` excludes it from Tab navigation | number | 0 | 1.8.0 | 1.8.0 |

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

#### Methods

| Name    | Description  | Version |
| ------- | ------------ | ------- |
| blur()  | Remove focus |         |
| focus() | Get focus    |         |

#### Slots

| Slot | Description | Type | Version |
| --- | --- | --- | --- |
| ~~addon~~ | Deprecated. Use `renderExtraFooter` instead | () => any | - |
| renderExtraFooter | Called from time picker panel to render some addon to its bottom | (mode: PickerMode) => any | - |
| suffix | The custom suffix | () => any | 1.8.0 |
| ~~suffixIcon~~ | The custom suffix icon, please use `suffix` instead | () => any | - |
| prefix | The custom prefix | () => any | - |

### RangePicker

Same props from [RangePicker](../date-picker/docs.md/#rangepicker) of DatePicker. And includes additional props:

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| disabledTime | To specify the time that cannot be selected | [RangeDisabledTime](#rangedisabledtime) | - | - |
| order | Order start and end time | boolean | true | - |

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

### Events 
| Event | Description | Type | Version |
| --- | --- | --- | --- |
| calendarChange | A callback function, can be executed when the pending selected time is changing. The `info` argument is available. | (date: Dayjs \| Dayjs[], dateString: string \| string[], info: { range: 'start' \| 'end' }) => void | - |
| change | A callback function, can be executed when the selected time is changing | (date: Dayjs \| Dayjs[] \| null, dateString: string \| string[] \| null) => void | - |
| clear | Callback when click the clear button | () => void | 1.4.0 |
| openChange | A callback function which will be called while panel opening/closing | (open: boolean) => void | - |

## Semantic DOM

| _semantic | demo/_semantic.md |

## FAQ

- [How to use TimePicker with customize date library like dayjs](../../docs/vue/use-custom-date-library.md#timepicker)
