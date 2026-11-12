---
title: Tag
description: Small tags for marking and categorizing.
---

## When To Use

- To mark the attributes and dimensions of things.
- To categorize.
- When tappable filter tags are needed, use `CheckableTag`.

## Examples

| Demo | Path |
| --- | --- |
| Basic usage | demo/basic.md |
| Colorful tags | demo/colorful.md |
| Status tags | demo/status.md |
| Variants | demo/variant.md |
| Size and rounded corners | demo/size.md |
| Icon | demo/icon.md |
| Closable | demo/closable.md |
| Checkable tags | demo/checkable.md |

## API

### Tag Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| color | Color of the tag, supports preset color names, status color names and any CSS color | `string` | - |
| variant | Variant of the tag | `'filled' \| 'solid' \| 'outlined'` | `'filled'` |
| bordered | Whether it has a border; `false` removes the border of the `outlined` variant | `boolean` | `true` |
| closable | Whether to show the close button; an object can configure the close icon and the accessibility label | `boolean \| { closeIcon?: VueNode, ariaLabel?: string }` | `false` |
| closeIcon | Custom close icon; when `closable` is not set, setting it shows the close button. The same-named slot takes precedence | `VueNode` | - |
| icon | Set the icon; the same-named slot takes precedence | `VueNode` | - |
| href | Renders as `<a>` when set | `string` | - |
| target | Same as the `target` of `<a>`, takes effect when `href` is present | `string` | - |
| disabled | Whether it is disabled; a disabled tag does not respond to tap or close | `boolean` | `false` |
| size | Size of the tag (mobile only) | `'small' \| 'middle' \| 'large'` | `'middle'` |
| round | Whether it is fully rounded (mobile only) | `boolean` | `false` |
| rootClass | Class name of the root element | `string` | - |
| classes | Semantic structure class names | `Record<'root' \| 'icon' \| 'content' \| 'close', string>` | - |
| styles | Semantic structure styles | `Record<'root' \| 'icon' \| 'content' \| 'close', CSSProperties>` | - |

- Preset color names: `pink` `red` `yellow` `orange` `cyan` `green` `blue` `purple` `geekblue` `magenta` `volcano` `gold` `lime`.
- Status color names: `success` `processing` `error` `warning` `default`.

### Tag Events

| Event | Description | Type |
| --- | --- | --- |
| close | Triggered when the close button is tapped; call `event.preventDefault()` to stop the tag from hiding itself and let external data control it | `(event: MouseEvent) => void` |

The native `click` event is passed through to the root element, so `@click` can be used directly.

### Tag Slots

| Slot | Description |
| --- | --- |
| default | Tag content |
| icon | Custom icon, takes precedence over the `icon` prop |
| closeIcon | Custom close icon, takes precedence over the `closeIcon` prop |

### CheckableTag Props

Use `<am-checkable-tag>` in templates; also available as `Tag.CheckableTag`.

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| checked (v-model) | Whether it is checked | `boolean` | - |
| defaultChecked | Initial checked state in uncontrolled mode | `boolean` | `false` |
| icon | Set the icon; the same-named slot takes precedence | `VueNode` | - |
| disabled | Whether it is disabled | `boolean` | `false` |
| size | Size of the tag (mobile only) | `'small' \| 'middle' \| 'large'` | `'middle'` |
| round | Whether it is fully rounded (mobile only) | `boolean` | `false` |
| rootClass | Class name of the root element | `string` | - |

### CheckableTag Events

| Event | Description | Type |
| --- | --- | --- |
| update:checked | Triggered when the checked state changes | `(checked: boolean) => void` |
| change | Triggered when the checked state changes | `(checked: boolean) => void` |
| click | Triggered when the tag is tapped; not triggered when disabled | `(event: MouseEvent) => void` |

### CheckableTag Slots

| Slot | Description |
| --- | --- |
| default | Tag content |
| icon | Custom icon, takes precedence over the `icon` prop |

## Design Token

| Token | Description | Default |
| --- | --- | --- |
| `--am-tag-height` | Height of the tag | `22px` (`small` 18px / `large` 28px, checkable tag 28px) |
| `--am-tag-font-size` | Font size | `var(--am-font-size-sm)` |
| `--am-tag-padding-inline` | Horizontal padding | `var(--am-padding-xs)` |
| `--am-tag-border-radius` | Border radius | `var(--am-border-radius-sm)` |
| `--am-tag-icon-gap` | Gap between the icon and the text | `4px` |
| `--am-tag-c` | Main color of the tag; the text, background and border colors are all derived from it | `var(--am-color-text)` |
| `--am-tag-bg` | Background color of the `filled` variant | `var(--am-color-fill-secondary)` |
| `--am-tag-border-color` | Border color of the `outlined` variant | `var(--am-color-border)` |

## Differences from PC

- Adds `size` and `round`, for the large filter tags and pill tags common on mobile.
- Custom colors (e.g. `#f50`) follow `variant` as well: the light background and border are derived from the main color with `color-mix()` and adapt to dark mode automatically.
- `CheckableTag` supports uncontrolled usage (`defaultChecked`), whereas it is a fully controlled component on PC; its default height is 28px to guarantee the tap area.
- The accessibility label in the `closable` object uses the `ariaLabel` field and defaults to the locale text `common.close`.
- `CheckableTagGroup` is not provided; use `Selector` for multiple selection.
- No hover state; press feedback uses `:active`.
