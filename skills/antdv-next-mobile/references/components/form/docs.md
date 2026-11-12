---
title: Form
description: A form with data collection, validation and submission, presented as mobile cells.
---

## When To Use

- When you need to create an instance or collect information.
- When you need to validate fields in certain rules.

The API is aligned with `Form` of antdv-next: validation is driven by `model` + `rules`, `FormItem` is bound to a field through `name`, and instance methods such as `validate` / `resetFields` / `setFieldsValue` keep the same names. On mobile a `FormItem` is rendered as a cell row (separated by hairlines, with the error message below the control), and input components inside a form use the `borderless` variant by default.

## Examples

| Demo | Path |
| --- | --- |
| Login form | demo/basic.md |
| Validation | demo/validate.md |
| Vertical layout | demo/layout.md |
| Card mode | demo/card.md |
| With pickers | demo/picker.md |
| More fields and disabled | demo/fields.md |
| Clickable cells | demo/clickable.md |
| Instance methods | demo/methods.md |

## API

### Form Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| model | Form data object (a reactive object), validation, reset and `finish` all rely on it | `Record<string, any>` | - |
| rules | Form-level validation rules, organized by field name, nested paths are supported; merged with the `rules` of `FormItem` | `FormRulesMap` | - |
| name | Form name, used as the prefix of the field `id` | `string` | - |
| layout | Form layout | `'horizontal' \| 'vertical'` | `'horizontal'` |
| labelAlign | Alignment of the label in horizontal layout | `'start' \| 'end'` | `'start'` |
| labelWidth | Width of the label in horizontal layout | `number \| string` | `5.6em` |
| labelWrap | Whether the label text wraps (truncated with an ellipsis by default) | `boolean` | `false` |
| colon | Whether to show a colon after the label in horizontal layout | `boolean` | `false` |
| contentAlign | Alignment of the control area | `'start' \| 'end'` | `'start'` |
| disabled | Disable all components inside the form | `boolean` | `false` |
| size | Size of the components inside the form | `'small' \| 'middle' \| 'large'` | - |
| variant | Variant of the components inside the form | `'outlined' \| 'filled' \| 'borderless' \| 'underlined'` | `'borderless'` |
| requiredMark | Required mark. `'optional'` marks non-required items with "optional" instead | `boolean \| 'optional'` | `true` |
| validateTrigger | When fields trigger validation, `false` means validating only on submit / manual calls | `'change' \| 'blur' \| ('change' \| 'blur')[] \| false` | `'change'` |
| validateMessages | Validation message templates which override the default templates of the locale, variables such as `${label}` and `${min}` are supported | `ValidateMessages` | - |
| scrollToFirstError | Scroll to the first error field after a failed submit | `boolean \| { behavior?, block?, focus? }` | `false` |
| mode | Display mode, `card` is an inset card with rounded corners | `'default' \| 'card'` | `'default'` |
| header | Title above the form items, the same-named slot takes precedence | `VueNode` | - |
| footer | Area below the form items (usually holds the submit button), the same-named slot takes precedence | `VueNode` | - |
| autocomplete | `autocomplete` of the native `form` | `string` | - |
| rootClass | Class name of the root node | `string` | - |
| classes | Semantic structure class names | `Record<'root' \| 'header' \| 'body' \| 'footer' \| 'item' \| 'label' \| 'content' \| 'help' \| 'extra', string>` | - |
| styles | Semantic structure styles | `Record<'root' \| 'header' \| 'body' \| 'footer' \| 'item' \| 'label' \| 'content' \| 'help' \| 'extra', CSSProperties>` | - |

### Form Events

| Event | Description | Type |
| --- | --- | --- |
| finish | Triggered after the form is submitted and validation passes | `(values: Record<string, any>) => void` |
| finishFailed | Triggered after the form is submitted and validation fails | `({ values, errorFields, message, outOfDate }) => void` |
| submit | Triggered when the form is submitted (before validation) | `(event: Event) => void` |
| reset | Triggered when the form is reset natively (`htmlType="reset"`), `resetFields` runs afterwards | `(event: Event) => void` |
| validate | Triggered after any field has been validated | `(name: (string \| number)[], status: boolean, errors: string[] \| null) => void` |
| valuesChange | Triggered when a field value changes because of user interaction | `(changedValues, values) => void` |

### Form Slots

| Slot | Description |
| --- | --- |
| default | Form items |
| header | Header area, takes precedence over the `header` prop |
| footer | Footer area, takes precedence over the `footer` prop |

### Form Methods

| Method | Description | Type |
| --- | --- | --- |
| validate / validateFields | Validate and get the field values, fields can be specified; rejects with `{ values, errorFields, message }` on failure | `(nameList?: NamePath[], options?: { validateOnly?: boolean, dirty?: boolean }) => Promise<Values>` |
| resetFields | Reset fields to their initial values and clear the validation status | `(nameList?: NamePath[]) => void` |
| clearValidate | Clear the validation status | `(nameList?: NamePath[]) => void` |
| scrollToField | Scroll to the position of the field | `(name: NamePath, options?: { behavior?, block?, focus? }) => void` |
| focusField | Focus the control of the field | `(name: NamePath) => void` |
| getFieldValue | Get the value of a field | `(name: NamePath) => any` |
| getFieldsValue | Get the values of a set of fields. Returns the values of registered fields when called without arguments, `true` returns the whole `model` | `(nameList?: NamePath[] \| true) => Values` |
| setFieldValue | Set the value of a field | `(name: NamePath, value: any) => void` |
| setFieldsValue | Set the values of a set of fields | `(values: Record<string, any>) => void` |
| setFields | Set the values and validation status of a set of fields | `(fields: { name, value?, errors?, warnings?, touched?, validating? }[]) => void` |
| getFieldError / getFieldWarning | Get the error / warning messages of a field | `(name: NamePath) => string[]` |
| getFieldsError | Get the error messages of a set of fields | `(nameList?: NamePath[]) => { name, errors, warnings }[]` |
| isFieldTouched / isFieldsTouched | Whether the field has been touched by the user | `(name: NamePath) => boolean` |
| isFieldValidating / isFieldsValidating | Whether the field is being validated | `(name: NamePath) => boolean` |
| submit | Submit the form, same as clicking the `submit` button | `() => void` |
| nativeElement | The native `form` element | `HTMLFormElement` |

> `NamePath` is `string | number | (string | number)[]`.

### FormItem Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| name | Path of the field in `model`, e.g. `'name'` or `['user', 'name']` | `NamePath` | - |
| label | Label text, the same-named slot takes precedence | `VueNode` | - |
| rules | Validation rules, see [Rule](#rule) | `FormRule[]` | - |
| required | Required style. Generated from the validation rules when not set | `boolean` | - |
| help | Prompt message, shown instead of the validation message once set, the same-named slot takes precedence | `VueNode` | - |
| extra | Extra prompt message, the same-named slot takes precedence | `VueNode` | - |
| validateStatus | Set the validation status manually | `'success' \| 'warning' \| 'error' \| 'validating'` | - |
| hasFeedback | Show the validation status icon at the end of the control | `boolean` | `false` |
| validateTrigger | When the field triggers validation | `'change' \| 'blur' \| ('change' \| 'blur')[] \| false` | Inherits from Form |
| validateFirst | Stop validating the remaining rules once a rule fails, `'parallel'` validates in parallel | `boolean \| 'parallel'` | `false` |
| validateDebounce | Debounce time (ms) of validation triggered by `change` / `blur` | `number` | - |
| messageVariables | Variables of the validation templates, `label` defaults to the `label` prop | `Record<string, string>` | - |
| noStyle | Render the control only, without the cell; validation messages are shown on the nearest parent `FormItem` | `boolean` | `false` |
| hidden | Hide the item (it still takes part in validation and submission) | `boolean` | `false` |
| layout | Override the `layout` of Form | `'horizontal' \| 'vertical'` | Inherits from Form |
| labelAlign | Override the `labelAlign` of Form | `'start' \| 'end'` | Inherits from Form |
| labelWidth | Override the `labelWidth` of Form | `number \| string` | Inherits from Form |
| colon | Override the `colon` of Form | `boolean` | Inherits from Form |
| contentAlign | Override the `contentAlign` of Form | `'start' \| 'end'` | Inherits from Form |
| id | `id` of the control, generated from `name` by default | `string` | - |
| clickable | Make the whole row clickable (with press feedback) | `boolean` | `false` |
| arrow | Arrow at the end of the row, a custom node is also accepted, the same-named slot takes precedence | `boolean \| VueNode` | Same as `clickable` |
| rootClass | Class name of the root node | `string` | - |
| classes | Semantic structure class names | `Record<'root' \| 'label' \| 'content' \| 'help' \| 'extra', string>` | - |
| styles | Semantic structure styles | `Record<'root' \| 'label' \| 'content' \| 'help' \| 'extra', CSSProperties>` | - |

### FormItem Events

| Event | Description | Type |
| --- | --- | --- |
| click | Triggered when the cell is clicked | `(event: MouseEvent) => void` |

### FormItem Slots

| Slot | Description |
| --- | --- |
| default | The control |
| label | Label, takes precedence over the `label` prop |
| help | Prompt message, takes precedence over the `help` prop |
| extra | Extra prompt, takes precedence over the `extra` prop |
| arrow | Custom arrow, takes precedence over the `arrow` prop |

### Rule

| Property | Description | Type |
| --- | --- | --- |
| type | Type of the value | `'string' \| 'number' \| 'boolean' \| 'integer' \| 'float' \| 'array' \| 'object' \| 'enum' \| 'date' \| 'url' \| 'hex' \| 'email' \| 'tel' \| 'regexp' \| 'method'` |
| required | Whether the field is required | `boolean` |
| message | Error message, the template of the locale is used when not set | `string` |
| len / min / max | Limit of the length (string, array) or the value (number) | `number` |
| pattern | Regular expression validation | `RegExp` |
| enum | Enum values, requires `type: 'enum'` | `any[]` |
| whitespace | Treat a value with only whitespace as an error, requires `type: 'string'` | `boolean` |
| transform | Transform the value before validation | `(value) => any` |
| validator | Custom validation which returns a Promise, the `Error.message` of the rejection is used as the error message | `(rule, value) => Promise<void>` |
| warningOnly | Warning only, does not block submission | `boolean` |
| trigger / validateTrigger | When this rule is triggered | `'change' \| 'blur' \| ('change' \| 'blur')[]` |
| defaultField | Rule of each element when `type: 'array'` | `Rule` |

### Custom form controls

A custom control only needs to support `v-model:value`; `FormItem` watches the corresponding field in `model` and triggers `change` validation. Use `useFormItemInputContext` when you need `blur` validation, the validation status or the `id`:

```ts
import { useFormItemInputContext, useMergedStatus } from '@antdv-next/mobile'

const formItem = useFormItemInputContext()
const status = useMergedStatus(() => props.status) // 'error' | 'warning' | ...

formItem.onFieldChange() // call after the value changed
formItem.onFieldBlur() // call on blur / after the popup closed
formItem.id.value // control id
```

## Design Token

Customize through `theme.components.Form` of `ConfigProvider`, or override the CSS variables directly.

| Token | Description | Default |
| --- | --- | --- |
| `--am-form-background` | Background color of form items | `var(--am-color-bg-container)` |
| `--am-form-font-size` | Font size | `var(--am-font-size-lg)` |
| `--am-form-label-width` | Label width in horizontal layout | `5.6em` |
| `--am-form-label-color` | Label color | `var(--am-color-text)` |
| `--am-form-label-gap` | Gap between the label and the control | `var(--am-padding-sm)` |
| `--am-form-item-padding-block` | Vertical padding of form items | `9px` |
| `--am-form-item-padding-inline` | Horizontal padding of form items | `var(--am-padding)` |
| `--am-form-item-content-min-height` | Minimum height of the control area | `30px` |
| `--am-form-item-active-background` | Pressed background color of clickable form items | `var(--am-color-fill-tertiary)` |
| `--am-form-explain-font-size` | Font size of validation / prompt messages | `var(--am-font-size-sm)` |
| `--am-form-header-color` | Header color | `var(--am-color-text-tertiary)` |
| `--am-form-card-radius` | Border radius in card mode | `var(--am-border-radius-lg)` |
| `--am-form-card-margin` | Side margin in card mode | `var(--am-margin-sm)` |

## Differences from PC

- `FormItem` is rendered as a mobile cell: separated by hairlines, label on the left (or on top), error message below the control. There is no `inline` layout and no grid (`labelCol` / `wrapperCol`); use `labelWidth` to control the label width.
- Added `mode="card"`, `header` / `footer` and `contentAlign`; `FormItem` gains `clickable`, `arrow` and the `click` event.
- `variant` defaults to `'borderless'` (`'outlined'` on PC), `colon` defaults to `false`, and `labelAlign` defaults to `'start'`.
- `scrollToFirstError` scrolls to the middle of the screen and does not focus by default (to avoid opening the keyboard); enable focusing with `{ focus: true }`.
- `validateTrigger` only supports `change` / `blur`; the `message` of a rule only supports strings.
- `tooltip`, `feedbackIcons`, `preserve`, `clearOnDestroy`, `validateOnRuleChange`, `Form.useForm` / `Form.useWatch`, `Form.List`, `Form.Provider`, the `fieldsChange` event and `getFieldInstance` are not supported; `requiredMark` does not support the function form.
