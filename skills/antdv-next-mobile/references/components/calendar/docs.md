---
title: Calendar
description: Select a date, a date range or multiple dates in a vertically scrolling month calendar.
---

## When To Use

- To select a date range (hotel check-in / check-out, start and end of a leave) or multiple non-consecutive dates.
- When extra information such as prices or holidays has to be shown on the dates, or when users should see the weekdays at a glance.
- When selecting a single date within a very large span (such as a birthday), [DatePicker](../date-picker/docs.md) is more efficient.

It is displayed in a bottom popup by default and controlled with `v-model:open`; set `:poppable="false"` to embed it in the page directly. The month list is rendered on demand, so a very large date range is safe to use.

## Examples

| Demo | Path |
| --- | --- |
| Select a single date | demo/basic.md |
| Select a date range | demo/range.md |
| Select multiple dates | demo/multiple.md |
| Custom date content | demo/formatter.md |
| Range, disabling and quick selection | demo/config.md |
| Large data / virtual scrolling | demo/virtual.md |
| Inline display | demo/inline.md |
| As a form field | demo/field.md |

## API

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| value (v-model) | The committed value: a date in single mode, `[start, end]` in range mode, an array of dates in multiple mode | `Dayjs \| string \| (Dayjs \| string)[] \| null` | - |
| defaultValue | Default value (uncontrolled) | Same as `value` | - |
| valueFormat | Format of the bound value; when set, strings in this format are received and emitted | `string` | - |
| selectionMode | Selection mode | `'single' \| 'range' \| 'multiple'` | `'single'` |
| minDate | The minimum selectable date | `Dayjs \| string` | Today |
| maxDate | The maximum selectable date | `Dayjs \| string` | Six months later |
| disabledDate | Dates that cannot be selected | `(date: Dayjs) => boolean` | - |
| virtual | Virtual scrolling: only the months near the visible area are rendered, staying smooth even when the selectable range spans many years; renders all months when `false` | `boolean` | `true` |
| maxRange | The maximum number of selectable days in range mode; the maximum number of selectable dates in multiple mode | `number` | - |
| showRangePrompt | Whether to show a prompt when `maxRange` is exceeded | `boolean` | `true` |
| rangePrompt | The prompt text shown when `maxRange` is exceeded | `string` | `'Choose no more than N days'` |
| allowSameDay | Whether the start and the end can be the same day in range mode | `boolean` | `false` |
| weekStartsOn | The first day of the week, `0` for Sunday, `1` for Monday | `0 \| 1` | `0` |
| title | Title. The same-named slot takes precedence | `VueNode` | `'Calendar'` |
| showTitle | Whether to show the title | `boolean` | `true` |
| showMark | Whether to show the month background watermark | `boolean` | `true` |
| showConfirm | Whether to show the confirm button. When `false`, the value is committed as soon as the selection is complete | `boolean` | `true` |
| okText | Text of the confirm button | `string` | `'Confirm'` |
| rowHeight | Height of a date row (px) | `number` | `64` |
| formatter | Processes each date before rendering: change its text, top / bottom info, class name or type | `(day: CalendarDay) => CalendarDay` | - |
| cellRender | Custom content of a date cell. The same-named slot takes precedence | `(info: { date: Dayjs, day: CalendarDay }) => VueNode` | - |
| poppable | Whether to display in a bottom popup; `false` for the inline view | `boolean` | `true` |
| open (v-model) | Whether the popup is open | `boolean` | - |
| defaultOpen | Whether the popup is open by default | `boolean` | `false` |
| trigger | Whether to render an input-like trigger showing the formatted value (popup mode only) | `boolean` | `false` |
| format | Display format of the trigger | `string \| ((value: Dayjs) => string)` | `'YYYY-MM-DD'` |
| placeholder | Placeholder of the trigger | `string` | `'Calendar'` |
| disabled | Whether it is disabled | `boolean` | `false` |
| allowClear | Show a clear icon when the trigger has a value | `boolean` | `false` |
| status | Validation status of the trigger | `'error' \| 'warning'` | - |
| variant | Variant of the trigger, `borderless` by default inside a form | `'outlined' \| 'filled' \| 'borderless' \| 'underlined'` | `'outlined'` |
| size | Size of the trigger | `'small' \| 'middle' \| 'large'` | `'middle'` |
| suffixIcon | Suffix icon of the trigger. The same-named slot takes precedence | `VueNode` | Arrow icon |
| closable | Whether the popup shows a close icon | `boolean` | `true` |
| maskClosable | Whether clicking the mask closes the popup (treated as cancel) | `boolean` | `true` |
| getContainer | The mount node of the popup; `false` renders in place | `string \| HTMLElement \| (() => HTMLElement) \| false` | `document.body` |
| zIndex | The `z-index` of the popup | `number` | - |
| destroyOnHidden | Destroy the popup content when closed | `boolean` | `false` |
| id | The id of the trigger, defaults to the field id inside a form | `string` | - |
| rootClass | Class name of the root element (applied to the popup root and the trigger in popup mode) | `string` | - |
| classes | Semantic structure class names | `Record<'root' \| 'trigger' \| 'popup' \| 'header' \| 'body' \| 'month' \| 'day' \| 'footer', string>` | - |
| styles | Semantic structure styles | `Record<'root' \| 'trigger' \| 'popup' \| 'header' \| 'body' \| 'month' \| 'day' \| 'footer', CSSProperties>` | - |

### CalendarDay

The date object that `formatter` receives and returns.

| Property | Description | Type |
| --- | --- | --- |
| date | The date | `Dayjs` |
| type | The type of the date | `'' \| 'selected' \| 'start' \| 'end' \| 'start-end' \| 'middle' \| 'disabled'` |
| text | The text shown in the middle, the day of the month by default | `string \| number` |
| topInfo | The info above the text; today shows "Today" by default | `string` |
| bottomInfo | The info below the text; range mode shows "Start" and "End" by default | `string` |
| className | Extra class name | `string` |
| isToday | Whether it is today | `boolean` |

### Events

| Event | Description | Type |
| --- | --- | --- |
| change | Triggered when the committed value changes | `(value, dateString: string \| string[]) => void` |
| confirm | Triggered when the confirm button is clicked (or when the selection is complete with `showConfirm=false`) | `(value) => void` |
| select | Triggered when any selectable date is clicked; the value is not committed yet and a range may only have its start date | `(value) => void` |
| cancel | Triggered when the popup is closed without confirming | `() => void` |
| openChange | Triggered when the popup opens / closes | `(open: boolean) => void` |
| monthShow | Triggered when a month enters the visible area | `(info: { date: Dayjs, title: string }) => void` |
| overRange | Triggered when the selection exceeds `maxRange` | `() => void` |
| clear | Triggered when the clear icon of the trigger is clicked | `() => void` |

### Slots

| Slot | Description | Params |
| --- | --- | --- |
| default | Custom trigger (popup mode) | `{ open, value, label, disabled, toggle }` |
| title | Custom title | - |
| cellRender | Custom content of a date cell, takes precedence over the `cellRender` prop | `{ date: Dayjs, day: CalendarDay }` |
| footer | Custom footer area, replaces the confirm button | `{ confirm: () => void, disabled: boolean }` |
| suffixIcon | Suffix icon of the trigger | - |

### Methods

| Method | Description | Type |
| --- | --- | --- |
| scrollToDate | Scroll to the month of the given date | `(date: Dayjs \| string) => void` |
| reset | Reset the uncommitted selection to the given value (the committed value by default) and scroll to it | `(date?: CalendarValue \| null) => void` |
| toggle | Toggle the popup; the target state can be passed | `(open?: boolean) => void` |

## Design Token

Customize through `theme.components.Calendar` of `ConfigProvider`, or override the CSS variables directly. Use the `rowHeight` prop for the height of a date row (the scroll position of the months is calculated from it).

| Token | Description | Default |
| --- | --- | --- |
| `--am-calendar-height` | Height of the inline view | `520px` |
| `--am-calendar-popup-height` | Height of the popup | `80%` |
| `--am-calendar-bg` | Background color of the inline view | `var(--am-color-bg-container)` |
| `--am-calendar-title-font-size` | Title font size | `var(--am-font-size-lg)` |
| `--am-calendar-title-height` | Title height | `48px` |
| `--am-calendar-weekday-font-size` | Weekday font size | `var(--am-font-size-sm)` |
| `--am-calendar-weekday-color` | Weekday text color | `var(--am-color-text-secondary)` |
| `--am-calendar-month-title-font-size` | Month title font size | `var(--am-font-size)` |
| `--am-calendar-month-mark-color` | Month watermark color | `var(--am-color-fill-secondary)` |
| `--am-calendar-month-mark-font-size` | Month watermark font size | `160px` |
| `--am-calendar-day-font-size` | Date font size | `var(--am-font-size-lg)` |
| `--am-calendar-day-radius` | Border radius of a selected date | `var(--am-border-radius)` |
| `--am-calendar-info-font-size` | Font size of the top / bottom info | `10px` |
| `--am-calendar-info-color` | Color of the top / bottom info | `var(--am-color-text-tertiary)` |
| `--am-calendar-selected-color` | Text color of a selected date | `var(--am-color-text-light-solid)` |
| `--am-calendar-selected-bg` | Background color of a selected date | `var(--am-color-primary)` |
| `--am-calendar-range-color` | Text color of the dates in the middle of a range | `var(--am-color-primary)` |
| `--am-calendar-range-bg` | Background color of the dates in the middle of a range | `var(--am-color-primary-bg)` |
| `--am-calendar-disabled-color` | Text color of a disabled date | `var(--am-color-text-disabled)` |

## Differences from PC

`Calendar` on PC is a **data display** component (a calendar panel that shows schedules by month / year); `Calendar` on mobile is a **date selection** component that covers the use cases of the `DatePicker` panel and `RangePicker` on PC. Their APIs are not interchangeable:

- The PC props `mode`, `fullscreen`, `headerRender`, `fullCellRender`, `validRange`, `showWeek` and the `panelChange` event are not supported.
- `value` supports a single date, a range and multiple dates (`selectionMode`), and like DatePicker it supports `valueFormat`, `minDate`, `maxDate` and `disabledDate`.
- `cellRender` keeps the PC name and its parameter is `{ date, day }`; `formatter` is recommended for extra information.
- Added popup APIs (`poppable`, `open`, `showConfirm`, the `confirm` / `cancel` events), trigger APIs (`trigger`, `format`, `placeholder`, etc., used the same way as other selection form fields) and the `scrollToDate` and `reset` methods; the month list uses virtual scrolling by default (`virtual`).
- To show a schedule month calendar on mobile, use the inline mode and render the schedule information with `formatter` / `cellRender`.
