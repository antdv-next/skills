---
title: Input
description: Through keyboard input content, it is the most basic form field wrapper.
---

## When To Use

- A user input in a form field is needed.
- Provides the multi-line `TextArea`, the search bar `InputSearch`, the password field `InputPassword` and the verification code `InputOTP`.

The API is aligned with the `Input` of antdv-next. On mobile the font size is never smaller than 16px (to avoid the iOS focus zoom), the clear button is only shown while focused by default, and IME composition is handled.

## Examples

| Demo | Path |
| --- | --- |
| Basic usage | demo/basic.md |
| Variants | demo/variant.md |
| Three sizes | demo/size.md |
| Prefix, suffix and count | demo/affix.md |
| Status | demo/status.md |
| Multi-line text | demo/textarea.md |
| Search bar | demo/search.md |
| Password field | demo/password.md |
| Verification code | demo/otp.md |

## API

### Input Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| value | The input content, supports `v-model:value` | `string` | - |
| defaultValue | The initial input content | `string` | - |
| placeholder | Placeholder text | `string` | - |
| disabled | Whether it is disabled | `boolean` | `false` |
| readOnly | Whether it is read-only (can also be written as `readonly`) | `boolean` | `false` |
| maxlength | The max length | `number` | - |
| showCount | Whether to show the character count, the format can be customized | `boolean \| { formatter: (info: { value: string, count: number, maxLength?: number }) => VueNode }` | `false` |
| allowClear | Whether to show the clear button, the icon can be customized | `boolean \| { clearIcon?: VueNode }` | `false` |
| clearTrigger | When to show the clear button | `'focus' \| 'always'` | `'focus'` |
| prefix | The prefix, the same-named slot takes precedence | `VueNode` | - |
| suffix | The suffix, the same-named slot takes precedence | `VueNode` | - |
| size | The size of the control | `'small' \| 'middle' \| 'large'` | `'middle'` |
| status | The validation status | `'error' \| 'warning'` | - |
| variant | The variant | `'outlined' \| 'filled' \| 'borderless' \| 'underlined'` | `'outlined'` (`'borderless'` inside a form) |
| type | The `type` of the native `input` | `string` | `'text'` |
| inputmode | Virtual keyboard type: `text` / `numeric` / `decimal` / `tel` / `email` / `url` / `search` | `string` | - |
| enterkeyhint | Label of the enter key on the virtual keyboard: `done` / `go` / `next` / `search` / `send` | `string` | - |
| align | Text alignment | `'start' \| 'center' \| 'end'` | `'start'` |
| autofocus | Focus automatically | `boolean` | `false` |
| autocomplete | Native `autocomplete` | `string` | - |
| name | Native `name` | `string` | - |
| id | The `id` of the native input, defaults to the field id inside `FormItem` | `string` | - |
| rootClass | Class name of the root node | `string` | - |
| classes | Semantic structure class names | `Record<'root' \| 'input' \| 'prefix' \| 'suffix' \| 'clear' \| 'count', string>` | - |
| styles | Semantic structure styles | `Record<'root' \| 'input' \| 'prefix' \| 'suffix' \| 'clear' \| 'count', CSSProperties>` | - |

### Input Events

| Event | Description | Type |
| --- | --- | --- |
| update:value | Triggered when the value changes | `(value: string) => void` |
| change | Triggered when the input content changes (same as PC, fires on every input) | `(event: Event) => void` |
| input | Same as `change` | `(event: Event) => void` |
| pressEnter | Triggered when Enter is pressed | `(event: KeyboardEvent) => void` |
| focus | Triggered when it gets focus | `(event: FocusEvent) => void` |
| blur | Triggered when it loses focus | `(event: FocusEvent) => void` |
| clear | Triggered when the clear button is clicked | `() => void` |
| keydown / keyup | Keyboard events | `(event: KeyboardEvent) => void` |
| compositionstart / compositionend | IME composition starts / ends | `(event: CompositionEvent) => void` |

### Input Slots

| Slot | Description |
| --- | --- |
| prefix | The prefix, takes precedence over the `prefix` prop |
| suffix | The suffix, takes precedence over the `suffix` prop |
| clearIcon | Custom clear icon |

### Input Methods

| Method | Description | Type |
| --- | --- | --- |
| focus | Get focus | `(options?: { preventScroll?: boolean, cursor?: 'start' \| 'end' \| 'all' }) => void` |
| blur | Remove focus | `() => void` |
| select | Select all the content | `() => void` |
| input | The native `input` element | `HTMLInputElement` |
| nativeElement | The root element | `HTMLElement` |

### TextArea

The tag is `<am-textarea>`. It supports all the props, events and methods of Input except `prefix`, `suffix` and `type` (the native element is available through `textArea`), plus:

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| rows | The number of rows | `number` | `2` |
| autoSize | Adapt the height to the content, the min / max rows can be set | `boolean \| { minRows?: number, maxRows?: number }` | `false` |

| Event | Description | Type |
| --- | --- | --- |
| resize | Triggered when `autoSize` changes the height | `({ height: number }) => void` |

### InputSearch

The tag is `<am-input-search>`. It supports the Input props `value`, `placeholder`, `disabled`, `maxlength`, `allowClear`, `prefix`, `suffix`, `size`, `status`, `variant`, etc. and the `change`, `focus`, `blur`, `clear`, `pressEnter` events, plus:

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| placeholder | Placeholder text | `string` | Locale `InputSearch.placeholder` |
| allowClear | Whether to show the clear button | `boolean \| { clearIcon?: VueNode }` | `true` |
| variant | The variant | `Variant` | `'filled'` |
| round | Whether it is capsule-shaped | `boolean` | `true` |
| loading | Search loading state, `search` is not triggered meanwhile | `boolean` | `false` |
| searchIcon | Custom search icon, the same-named slot takes precedence | `VueNode` | - |
| enterButton | The search button after the input, `true` for an icon button, text or a node can also be passed | `boolean \| VueNode` | - |
| showCancel | Show the cancel button when focused or when there is content | `boolean` | `false` |
| cancelText | Text of the cancel button, the same-named slot takes precedence | `VueNode` | Locale `InputSearch.cancelText` |
| classes / styles | Semantic structure | `Record<'root' \| 'input' \| 'button' \| 'cancel', ...>` | - |

| Event | Description | Type |
| --- | --- | --- |
| search | Triggered when Enter is pressed, or the search button or the clear button is clicked | `(value: string, event?: Event, info?: { source: 'input' \| 'clear' }) => void` |
| cancel | Triggered when the cancel button is clicked (it also clears the content and blurs the input) | `() => void` |

| Slot | Description |
| --- | --- |
| searchIcon | Custom search icon |
| enterButton | Custom search button content |
| cancelText | Custom cancel button content |
| prefix / suffix / clearIcon | Same as Input |

### InputPassword

The tag is `<am-input-password>`. It supports all the props, events and methods of Input except `type`, plus:

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| visibilityToggle | Whether to show the toggle button | `boolean` | `true` |
| iconVisible | Whether the password is visible, supports `v-model:icon-visible` | `boolean` | `false` |
| iconRender | Custom toggle button icon, the same-named slot takes precedence | `({ visible }) => VueNode` | - |

### InputOTP

The tag is `<am-input-otp>`.

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| value | The input content, supports `v-model:value` | `string` | - |
| defaultValue | The default value | `string` | - |
| length | The number of input elements | `number` | `6` |
| formatter | Format the whole value, e.g. keep digits only | `(value: string) => string` | - |
| mask | Custom display, `true` shows dots, the original value is not modified | `boolean \| string` | `false` |
| separator | The separator, the same-named slot takes precedence | `VueNode \| ((index: number) => VueNode)` | - |
| disabled | Whether it is disabled | `boolean` | `false` |
| status | The validation status | `'error' \| 'warning'` | - |
| size | The size | `'small' \| 'middle' \| 'large'` | `'middle'` |
| variant | The variant | `'outlined' \| 'filled' \| 'borderless' \| 'underlined'` | `'outlined'` |
| inputMode | Virtual keyboard type | `string` | `'numeric'` |
| autoFocus | Focus automatically | `boolean` | `false` |
| classes / styles | Semantic structure | `Record<'root' \| 'cell' \| 'separator', ...>` | - |

| Event | Description | Type |
| --- | --- | --- |
| update:value | Fires on every input | `(value: string) => void` |
| change | Triggered when all cells are filled | `(value: string) => void` |
| input | Triggered when the input value changes | `(cells: string[]) => void` |
| focus / blur | Focus / blur | `(event: FocusEvent) => void` |

Methods: `focus()`, `blur()`, `nativeElement`.

## Design Token

Customize through `theme.components.Input` of `ConfigProvider` or by overriding the CSS variables directly.

| Token | Description | Default |
| --- | --- | --- |
| `--am-input-height` | Input height | `var(--am-control-height)` |
| `--am-input-font-size` | Font size | `var(--am-font-size-lg)` |
| `--am-input-padding-inline` | Horizontal padding | `var(--am-padding-sm)` |
| `--am-input-border-radius` | Border radius | `var(--am-border-radius)` |
| `--am-input-color` | Text color | `var(--am-color-text)` |
| `--am-input-placeholder-color` | Placeholder color | `var(--am-color-text-placeholder)` |
| `--am-input-background` | Background color | `var(--am-color-bg-container)` |
| `--am-input-border-color` | Border color | `var(--am-color-border)` |
| `--am-input-active-border-color` | Border and caret color when focused | `var(--am-color-primary)` |
| `--am-input-filled-background` | Background color of the `filled` variant | `var(--am-color-fill-tertiary)` |
| `--am-input-affix-color` | Prefix / suffix color | `var(--am-color-text-tertiary)` |
| `--am-input-affix-gap` | Gap between the prefix / suffix and the input area | `var(--am-margin-xs)` |
| `--am-input-clear-size` | Clear icon size | `16px` |
| `--am-input-search-height` | Search bar height | `36px` |
| `--am-input-search-border-radius` | Search bar border radius | `999px` (`round`) |
| `--am-input-search-gap` | Gap between the search bar and the button | `var(--am-margin-sm)` |
| `--am-input-search-action-color` | Search button color | `var(--am-color-primary)` |
| `--am-otp-cell-size` | OTP cell size | `var(--am-control-height-lg)` |
| `--am-otp-gap` | Gap between OTP cells | `var(--am-margin-xs)` |
| `--am-otp-font-size` | OTP font size | `var(--am-font-size-heading-3)` |
| `--am-otp-border-radius` | OTP cell border radius | `var(--am-border-radius)` |
| `--am-otp-active-border-color` | Border and caret color of the active OTP cell | `var(--am-color-primary)` |

## Differences from PC

- `addonBefore` / `addonAfter`, the `count` config, `Input.Group` and `bordered` are not supported.
- Adds `align`, `clearTrigger`, `enterkeyhint` and the `select()` method; the clear button is only shown when focused and non-empty by default.
- `update:value` / `change` are not triggered during IME composition, the value is committed once when the composition ends.
- `InputSearch` is a mobile search bar: `filled` capsule shape by default, `allowClear` enabled, with a search icon; adds `showCancel`, `cancelText`, `round` and the `cancel` event; it blurs automatically after searching with Enter to dismiss the keyboard.
- `visibilityToggle` of `InputPassword` only supports `boolean`, `action="hover"` is not supported.
- `InputOTP` is driven by a single native input (`autocomplete="one-time-code"`, supports SMS code autofill and paste), `inputMode` defaults to `'numeric'`; `update:value` fires on every input while `change` still only fires when all cells are filled; `type` is not supported.
- `classes` / `styles` only support the object form.
