---
title: TimePicker
description: Select a point in time with wheels.
---

## When To Use

Use it when the user needs to enter a time (alarm, business hours, appointment slot). To select a date at the same time, use `showTime` of [DatePicker](../date-picker/docs.md).

The API is aligned with `TimePicker` of antdv-next: `value` sends and receives dayjs objects by default, and strings once `valueFormat` is set; `format` determines both the display format and the wheel columns.

## Examples

| Demo | Path |
| --- | --- |
| Basic usage | demo/basic.md |
| Format and step | demo/format.md |
| 12-hour clock | demo/12hours.md |
| Value format | demo/value-format.md |
| Disabled time | demo/disabled-time.md |
| Custom trigger | demo/custom-trigger.md |

## API

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| value (v-model) | The committed time | `Dayjs \| string \| null` | - |
| defaultValue | Default time (uncontrolled) | `Dayjs \| string \| null` | - |
| valueFormat | Format of the bound value, strings in this format are sent and received once set, e.g. `HH:mm` | `string` | - |
| format | Display format, also determines the wheel columns: `HH:mm:ss`, `HH:mm`, `h:mm a`, etc. | `string` | `'HH:mm:ss'` |
| use12Hours | Use the 12-hour clock, the default format becomes `h:mm:ss a` | `boolean` | `false` |
| hourStep | Interval between hour options | `number` | `1` |
| minuteStep | Interval between minute options | `number` | `1` |
| secondStep | Interval between second options | `number` | `1` |
| showHour | Whether to show the hour column | `boolean` | `true` |
| showMinute | Whether to show the minute column | `boolean` | `true` |
| showSecond | Whether to show the second column | `boolean` | `true` |
| disabledTime | Times that cannot be selected, the corresponding options are grayed out and skipped | `(date: Dayjs) => { disabledHours?: () => number[], disabledMinutes?: (hour) => number[], disabledSeconds?: (hour, minute) => number[] }` | - |
| defaultOpenValue | The time the wheels rest on by default when there is no value | `Dayjs \| string` | Current time |
| filter | Filter or reorder the options of a column | `(type: 'hour' \| 'minute' \| 'second' \| 'meridiem', options: PickerOption[]) => PickerOption[]` | - |
| renderLabel | Customize the option text | `(type, value: number) => string \| number` | - |
| open (v-model) | Whether the popup is open | `boolean` | - |
| defaultOpen | Whether the popup is open by default | `boolean` | `false` |
| placeholder | Placeholder text | `string` | `'Select time'` |
| title | Popup title, the same-named slot takes precedence | `VueNode` | - |
| okText | Text of the confirm button | `string` | `'OK'` |
| cancelText | Text of the cancel button | `string` | `'Cancel'` |
| disabled | Whether the component is disabled | `boolean` | `false` |
| allowClear | Show a clear icon when there is a value | `boolean` | `false` |
| status | Validation status | `'error' \| 'warning'` | - |
| variant | Variant, defaults to `borderless` inside a form | `'outlined' \| 'filled' \| 'borderless' \| 'underlined'` | `'outlined'` |
| size | Size of the trigger | `'small' \| 'middle' \| 'large'` | `'middle'` |
| trigger | Whether to render the built-in trigger | `boolean` | `true` |
| suffixIcon | Suffix icon of the trigger, the same-named slot takes precedence, `null` hides it | `VueNode` | Arrow icon |
| itemHeight | Option height (px) | `number` | `40` |
| visibleItemCount | Number of visible options | `number` | `5` |
| virtual | Virtual scrolling: each column only renders options near the visible area, so only a few dozen nodes are mounted even with tens of thousands of options; renders all options when `false` | `boolean` | `true` |
| getContainer | Mount node of the popup, `false` renders in place | `string \| HTMLElement \| (() => HTMLElement) \| false` | `document.body` |
| zIndex | z-index of the popup | `number` | - |
| maskClosable | Whether clicking the mask closes the popup (treated as cancel) | `boolean` | `true` |
| destroyOnHidden | Destroy the popup content when closed | `boolean` | `false` |
| id | The id of the trigger, defaults to the field id inside a form | `string` | - |
| rootClass | Class name of the root elements of the trigger and the popup | `string` | - |
| classes | Semantic class names | `Record<'root' \| 'content' \| 'suffix' \| 'popup', string>` | - |
| styles | Semantic styles | `Record<'root' \| 'content' \| 'suffix' \| 'popup', CSSProperties>` | - |

### Events

| Event | Description | Type |
| --- | --- | --- |
| change | Triggered when the committed value changes (confirm or clear) | `(time: Dayjs \| string \| null, timeString: string) => void` |
| confirm | Triggered when the confirm button is clicked | `(time: Dayjs \| string, timeString: string) => void` |
| cancel | Triggered when the cancel button or the mask is clicked | `() => void` |
| select | Triggered when a wheel settles on a new option, the value is not yet committed at this point | `(time: Dayjs \| string, timeString: string) => void` |
| openChange | Triggered when the popup opens / closes | `(open: boolean) => void` |
| clear | Triggered when the clear icon is clicked | `() => void` |

### Slots

| Slot | Description | Params |
| --- | --- | --- |
| default | Custom trigger, replaces the built-in input box | `{ open, value, label, disabled, toggle }` |
| title | Popup title | - |
| suffixIcon | Suffix icon of the trigger | - |
| header | Content between the title bar and the wheels | - |
| footer | Content below the wheels | - |

### Methods

| Method | Description | Type |
| --- | --- | --- |
| toggle | Toggle the popup, the target state can be passed in | `(open?: boolean) => void` |

## Design Token

TimePicker has no component tokens of its own: for the trigger and popup variables, see [Picker](../picker/docs.md); for the wheel variables, see [PickerView](../picker-view/docs.md).

## Differences from PC

- Bottom wheels replace the dropdown panel, and the value is committed after tapping "OK" (equivalent to `needConfirm` always being `true`); the `confirm`, `cancel` and `select` events are added.
- There are no APIs such as `TimePicker.RangePicker`, `showNow`, `hideDisabledOptions`, `renderExtraFooter`, `cellRender`, `placement`, `prefix`, `inputReadOnly` and `changeOnScroll`; the trigger does not accept manual input. Use `filter` when you need to hide disabled options.
- `allowClear` defaults to `false` and only supports boolean values.
- The popup container uses `getContainer` (consistent with Popup), `getPopupContainer` is not supported.
- Mobile-only props are added: `title`, `okText`, `cancelText`, `trigger`, `filter`, `renderLabel`, `itemHeight`, `visibleItemCount`, `virtual`.
- The semantic parts of `classes` / `styles` are `root`, `content`, `suffix` and `popup`.
