---
title: DatePicker
description: Select a year, month, day, time and other date information with wheels.
---

## When To Use

- When the user needs to enter a date (birthday, ID expiry date, appointment time, etc.).
- When a date range has to be selected, use `DatePicker.RangePicker`.
- When you want to see a whole month calendar at a glance, use [Calendar](../calendar/docs.md).

The API is aligned with `DatePicker` in Antdv Next: `value` takes and emits [dayjs](https://day.js.org/) objects by default, and formatted strings once `valueFormat` is set; `picker` switches the granularity and `showTime` adds time columns. On mobile, bottom wheels replace the calendar panel, and the value is only committed after tapping "OK".

## Examples

| Demo | Path |
| --- | --- |
| Basic usage | demo/basic.md |
| Picker granularity | demo/picker.md |
| Date and time | demo/show-time.md |
| Selectable range and disabled dates | demo/range.md |
| Value format | demo/value-format.md |
| Filter options and custom labels | demo/filter.md |
| Custom trigger | demo/custom-trigger.md |
| Inline view DatePickerView | demo/view.md |
| Date range with RangePicker | demo/range-basic.md |
| Range precision and format | demo/range-picker.md |
| Range limits, empty and disabled sides | demo/range-limit.md |
| Range: form and custom trigger | demo/range-form.md |

## API

### DatePicker Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| value (v-model) | The committed date | `Dayjs \| string \| null` | - |
| defaultValue | Default date (uncontrolled) | `Dayjs \| string \| null` | - |
| valueFormat | Format of the bound value. Once set, `value`, `defaultValue`, `minDate` and `maxDate` accept strings in this format and `change` returns a string in the same format | `string` | - |
| picker | Picker granularity | `'date' \| 'month' \| 'year' \| 'quarter' \| 'week' \| 'time'` | `'date'` |
| showTime | Add time selection (only with `picker="date"`); an object configures the time columns | `boolean \| DatePickerShowTime` | `false` |
| format | Display format of the trigger, see [dayjs format](https://day.js.org/docs/en/display/format); a function is also accepted | `string \| ((value: Dayjs) => string)` | See below |
| minDate | The minimum selectable date | `Dayjs \| string` | Ten years ago |
| maxDate | The maximum selectable date | `Dayjs \| string` | Ten years later |
| disabledDate | Dates that cannot be selected; the matching options are grayed out and skipped | `(current: Dayjs, info: { type: string }) => boolean` | - |
| disabledTime | Times that cannot be selected | `(date: Dayjs) => { disabledHours?, disabledMinutes?, disabledSeconds? }` | - |
| defaultPickerValue | The date the wheels rest on by default when there is no value | `Dayjs \| string` | Current time |
| use12Hours | Use the 12-hour clock | `boolean` | `false` |
| hourStep | Interval between hour options | `number` | `1` |
| minuteStep | Interval between minute options | `number` | `1` |
| secondStep | Interval between second options | `number` | `1` |
| filter | Filter or reorder the options of a column | `(type: DatePickerColumnType, options: PickerOption[]) => PickerOption[]` | - |
| renderLabel | Custom option text; by default the unit from the locale is appended (e.g. `2024年` in zh-CN) | `(type: DatePickerColumnType, value: number) => string \| number` | - |
| open (v-model) | Whether the popup is open | `boolean` | - |
| defaultOpen | Whether the popup is open by default | `boolean` | `false` |
| placeholder | Placeholder text | `string` | `'Select date'` |
| title | Title of the popup; the same-named slot takes precedence | `VueNode` | - |
| okText | Text of the confirm button | `string` | `'OK'` |
| cancelText | Text of the cancel button | `string` | `'Cancel'` |
| disabled | Whether it is disabled | `boolean` | `false` |
| allowClear | Show a clear icon when there is a value | `boolean` | `false` |
| status | Validation status | `'error' \| 'warning'` | - |
| variant | Variant; defaults to `borderless` inside a form | `'outlined' \| 'filled' \| 'borderless' \| 'underlined'` | `'outlined'` |
| size | Size of the trigger | `'small' \| 'middle' \| 'large'` | `'middle'` |
| trigger | Whether to render the built-in trigger | `boolean` | `true` |
| suffixIcon | Suffix icon of the trigger; the same-named slot takes precedence, `null` hides it | `VueNode` | Arrow icon |
| itemHeight | Option height (px) | `number` | `40` |
| visibleItemCount | Number of visible options | `number` | `5` |
| virtual | Virtual scrolling: each column only renders the options near the visible area, so even tens of thousands of options mount just a few dozen nodes; `false` renders all options | `boolean` | `true` |
| getContainer | The node the popup is mounted to; `false` renders in place | `string \| HTMLElement \| (() => HTMLElement) \| false` | `document.body` |
| zIndex | The z-index of the popup | `number` | - |
| maskClosable | Whether tapping the mask closes the popup (treated as cancel) | `boolean` | `true` |
| destroyOnHidden | Destroy the popup content when closed | `boolean` | `false` |
| id | The id of the trigger; defaults to the field id inside a form | `string` | - |
| rootClass | Class name of the root elements of the trigger and the popup | `string` | - |
| classes | Semantic structure class names | `Record<'root' \| 'content' \| 'suffix' \| 'popup', string>` | - |
| styles | Semantic structure styles | `Record<'root' \| 'content' \| 'suffix' \| 'popup', CSSProperties>` | - |

The default value of `format` depends on `picker`:

| picker | Default format | Columns |
| --- | --- | --- |
| `date` | `YYYY-MM-DD` | Year, month, day |
| `date` + `showTime` | `YYYY-MM-DD HH:mm:ss` | Year, month, day, hour, minute, second |
| `month` | `YYYY-MM` | Year, month |
| `quarter` | `YYYY-[Q]Q` | Year, quarter |
| `week` | `GGGG-[W]WW` (ISO week) | Year, week |
| `year` | `YYYY` | Year |
| `time` | `HH:mm:ss` | Hour, minute, second, i.e. [TimePicker](../time-picker/docs.md) |

### DatePickerShowTime

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| format | Time format, decides which time columns are shown, e.g. `HH:mm` only shows hour and minute | `string` | `'HH:mm:ss'` |
| showHour / showMinute / showSecond | Control whether a single column is shown | `boolean` | `true` |
| use12Hours | Use the 12-hour clock | `boolean` | `false` |
| hourStep / minuteStep / secondStep | Option intervals, take precedence over the same-named outer props | `number` | `1` |

### Events

| Event | Description | Type |
| --- | --- | --- |
| change | Triggered when the committed value changes (confirm or clear) | `(date: Dayjs \| string \| null, dateString: string) => void` |
| confirm | Triggered when the confirm button is tapped | `(date: Dayjs \| string, dateString: string) => void` |
| cancel | Triggered when the cancel button or the mask is tapped | `() => void` |
| select | Triggered when a wheel settles on a new option; the value is not committed yet | `(date: Dayjs \| string, dateString: string) => void` |
| openChange | Triggered when the popup opens / closes | `(open: boolean) => void` |
| clear | Triggered when the clear icon is tapped | `() => void` |

### Slots

| Slot | Description | Params |
| --- | --- | --- |
| default | Custom trigger, replaces the built-in input | `{ open, value, label, disabled, toggle }` |
| title | Title of the popup | - |
| suffixIcon | Suffix icon of the trigger | - |
| header | Content between the title bar and the wheels | - |
| footer | Content below the wheels | - |

### Methods

| Method | Description | Type |
| --- | --- | --- |
| toggle | Toggle the popup; a target state can be passed | `(open?: boolean) => void` |

### DatePickerView

The inline wheel view, also available as `DatePicker.View`. It supports all the date-related props in the table above (`value`, `defaultValue`, `valueFormat`, `picker`, `showTime`, `format`, `minDate`, `maxDate`, `disabledDate`, `disabledTime`, `defaultPickerValue`, `use12Hours`, `hourStep`, `minuteStep`, `secondStep`, `filter`, `renderLabel`, `itemHeight`, `visibleItemCount`, `virtual`), plus `rootClass`, `classes` and `styles` of [PickerView](../picker-view/docs.md).

| Event | Description | Type |
| --- | --- | --- |
| change | Triggered when the wheels settle on a new date | `(date: Dayjs \| string, dateString: string) => void` |
| update:value | `v-model:value` update | `(date: Dayjs \| string) => void` |

### RangePicker

`DatePicker.RangePicker` (`<am-range-picker>`, named export `DateRangePicker`) selects a date range in a single bottom popup with two tabs, "Start / End", each showing a set of wheels. Tapping the start or the end part of the trigger opens the matching tab; the minimum of the end wheels follows the chosen start, and "OK" commits both sides together. To pick a range visually on a calendar you can also use `selection-mode="range"` of [Calendar](../calendar/docs.md).

It supports every date prop of DatePicker (`valueFormat`, `picker`, `showTime`, `format`, `minDate`, `maxDate`, `disabledDate`, `disabledTime`, `defaultPickerValue`, `use12Hours`, `hourStep`, `minuteStep`, `secondStep`, `filter`, `renderLabel`, `itemHeight`, `visibleItemCount`, `virtual`) and the popup / trigger props (`open`, `defaultOpen`, `title`, `okText`, `cancelText`, `allowClear`, `status`, `variant`, `size`, `trigger`, `suffixIcon`, `getContainer`, `zIndex`, `maskClosable`, `destroyOnHidden`, `id`, `rootClass`, `classes`, `styles`). The following props differ:

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| value (v-model) | The committed range, `null` means that side is empty | `[Dayjs \| string \| null, Dayjs \| string \| null] \| null` | - |
| defaultValue | Default range (uncontrolled) | `[Dayjs \| string \| null, Dayjs \| string \| null] \| null` | - |
| placeholder | Placeholders of the start and the end | `[string, string]` | `['Start date', 'End date']` |
| separator | Separator between the two sides of the trigger, the same-named slot wins | `VueNode` | `<SwapRightOutlined />` |
| allowEmpty | Allow a side to stay empty: a side without a value whose tab was never opened is committed as `null` | `boolean \| [boolean, boolean]` | `false` |
| disabled | Whether disabled; pass a tuple to disable one side only, a disabled side keeps its value and its tab cannot be selected | `boolean \| [boolean, boolean]` | `false` |

| Event | Description | Type |
| --- | --- | --- |
| change | Fired when the committed range changes (confirm or clear, `null` on clear) | `(dates: [Dayjs \| string \| null, Dayjs \| string \| null] \| null, dateStrings: [string, string]) => void` |
| calendarChange | Fired when a wheel settles on a new date, the value is not committed yet | `(dates, dateStrings: [string, string], info: { range: 'start' \| 'end' }) => void` |
| confirm | Fired when the confirm button is tapped | `(dates, dateStrings: [string, string]) => void` |
| cancel | Fired when the cancel button or the mask is tapped | `() => void` |
| openChange | Fired when the popup opens / closes | `(open: boolean) => void` |
| clear | Fired when the clear icon is tapped | `() => void` |

| Slot | Description | Params |
| --- | --- | --- |
| default | Custom trigger, replaces the built-in input | `{ open, value, label, labels, disabled, toggle }` |
| separator | Separator of the trigger | - |
| title | Popup title | - |
| suffixIcon | Suffix icon of the trigger | - |
| header | Content between the tabs and the wheels | - |
| footer | Content below the wheels | - |

| Method | Description | Type |
| --- | --- | --- |
| toggle | Toggle the popup; accepts the target state and the tab to open on | `(open?: boolean, range?: 'start' \| 'end') => void` |

## Design Token

See [Picker](../picker/docs.md) for the trigger and popup tokens, and [PickerView](../picker-view/docs.md) for the wheel tokens.

| Token | Description | Default |
| --- | --- | --- |
| `--am-date-picker-view-font-size` | Font size of the wheel options | `var(--am-font-size-lg)` |
| `--am-range-picker-separator-color` | Color of the RangePicker separator | `var(--am-color-text-quaternary)` |
| `--am-range-picker-gap` | Gap between the two sides and the separator of RangePicker | `var(--am-padding-xs)` |
| `--am-range-picker-tabs-padding` | Padding of the RangePicker tab bar (declared on `.am-range-picker-tabs`) | `var(--am-padding-xs) var(--am-padding)` |
| `--am-range-picker-tab-padding-block` | Block padding of a tab | `6px` |
| `--am-range-picker-tab-title-font-size` | Font size of the tab title | `var(--am-font-size-sm)` |
| `--am-range-picker-tab-value-font-size` | Font size of the tab date | `var(--am-font-size)` |
| `--am-range-picker-tab-active-color` | Color of the date of the active tab | `var(--am-color-primary)` |

## Differences from PC

- Bottom wheels replace the dropdown calendar panel, and the value is committed after tapping "OK" (equivalent to `needConfirm` always being `true` on PC); adds the `confirm`, `cancel` and `select` events.
- `RangePicker` uses "Start / End" tabs with wheels inside one bottom popup instead of the two calendar panels of PC: the end is kept from going before the start (there is no `order` auto sorting); `allowEmpty` means "a side without a value whose tab was never opened stays empty"; `calendarChange` fires when a wheel settles; `presets`, `id: { start, end }` and the `focus` / `blur` events are not supported, and it adds the `confirm`, `cancel`, `clear` events and `toggle(open, range)`.
- `disabledDate` of `RangePicker` does not provide `info.from`; there are no shortcut sub components such as `DatePicker.MonthPicker`, use the `picker` prop.
- No panel / input related APIs such as `multiple`, `presets`, `showNow`, `showWeek`, `mode`, `panelRender`, `cellRender`, `renderExtraFooter`, `components`, `placement`, `prefix`, `inputReadOnly`; the trigger cannot be typed into.
- `picker` adds `'time'` (i.e. TimePicker); `picker="week"` uses ISO weeks (the week starts on Monday) and its default format is `GGGG-[W]WW`.
- `minDate` / `maxDate` default to ten years before and after (wheels need a finite range); `disabledDate` only applies to the last column of the current granularity, and the matching options are grayed out and skipped automatically.
- `allowClear` defaults to `false` and only supports a boolean.
- The popup container uses `getContainer` (same as Popup); `getPopupContainer` is not supported.
- Adds mobile props: `title`, `okText`, `cancelText`, `trigger`, `filter`, `renderLabel`, `itemHeight`, `visibleItemCount`, `virtual`, as well as the inline view `DatePickerView`.
- The semantic structure of `classes` / `styles` is `root`, `content`, `suffix`, `popup`.
