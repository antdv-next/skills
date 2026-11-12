---
title: ShareSheet
description: A share panel that slides up from the bottom and shows each channel as an icon with a name.
---

## When To Use

- Share the current content to several channels (friends, copy link, poster, QR code ...).
- Offer a set of icon based quick actions at the bottom that scroll horizontally.

ShareSheet is a mobile-only component. The library ships no social logos or brand colors: icons are passed through the `icon` (node) or `image` (image url) of an option.

## Examples

| Demo | Path |
| --- | --- |
| Basic usage | demo/basic.md |
| Multiple rows | demo/multiple.md |
| Title and description | demo/title.md |
| Custom icon and image | demo/custom.md |

## API

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| open | Whether the panel is visible, supports `v-model:open` | `boolean` | - |
| defaultOpen | Initial visibility when uncontrolled | `boolean` | `false` |
| options | Share options: a flat array for one row, a nested array for several rows | [ShareSheetOption](#sharesheetoption)[] \| [ShareSheetOption](#sharesheetoption)[][] | `[]` |
| title | Title, the same-named slot wins | `VueNode` | - |
| description | Description below the title, the same-named slot wins | `VueNode` | - |
| cancelText | Text of the cancel button, defaults to the locale; `null` hides the button | `VueNode` | `Cancel` |
| showCancel | Whether to show the cancel button | `boolean` | `true` |
| closeOnSelect | Whether to close after an option is selected | `boolean` | `true` |
| maskClosable | Whether to close when the mask is clicked | `boolean` | `true` |
| keyboard | Whether to close on ESC | `boolean` | `true` |
| round | Whether the top corners are rounded | `boolean` | `true` |
| safeArea | Whether to reserve the bottom safe area | `boolean` | `true` |
| destroyOnHidden | Destroy the content after closing | `boolean` | `false` |
| forceRender | Render the content before the first open | `boolean` | `false` |
| getContainer | Mount node, `false` renders in place | `string \| HTMLElement \| (() => HTMLElement) \| false` | `document.body` |
| zIndex | Stacking order | `number` | auto increment |
| rootClass | Class name of the root node | `string` | - |
| classes | Semantic class names | `Record<SemanticDOM, string>` | - |
| styles | Semantic styles | `Record<SemanticDOM, CSSProperties>` | - |

`SemanticDOM`: `root`, `mask`, `body` (the panel), `header`, `title`, `description`, `row`, `option`, `icon`, `label`, `cancel`.

### Events

| Event | Description | Type |
| --- | --- | --- |
| update:open | Visibility changed | `(open: boolean) => void` |
| openChange | Visibility changed | `(open: boolean) => void` |
| select | An option was clicked, disabled options do not fire it; `index` is the position inside the row | `(option: ShareSheetOption, index: number, rowIndex: number) => void` |
| cancel | The cancel button was clicked | `(event: MouseEvent) => void` |
| close | The panel requests to close (option, cancel button, mask or ESC) | `() => void` |
| afterOpenChange | After the open / close animation finished | `(open: boolean) => void` |

### Slots

| Slot | Description | Params |
| --- | --- | --- |
| default | Custom content between the header and the options | - |
| title | Title, wins over the `title` prop | - |
| description | Description, wins over the `description` prop | - |
| cancelText | Content of the cancel button, wins over the `cancelText` prop | - |
| icon | Content of the round icon holder of an option; falls back to the `icon` / `image` of the option when it renders nothing | `{ option, index, rowIndex }` |
| label | Name of an option | `{ option, index, rowIndex }` |

### ShareSheetOption

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| key | Unique id, falls back to the index inside the row | `string \| number` | - |
| label | Name | `VueNode` | - |
| icon | Icon node rendered inside the round holder, wins over `image` | `VueNode` | - |
| image | Image url that fills the round holder | `string` | - |
| description | Description below the name | `VueNode` | - |
| disabled | Whether the option is disabled | `boolean` | `false` |
| class | Class name of the option | `string` | - |
| style | Style of the option, handy to override CSS variables for one option | `CSSProperties` | - |

`icon` is always a node (such as `h(WechatOutlined)`); use `image` for an image url. The two are never mixed.

## Design Token

Customize through `theme.components.ShareSheet` of `ConfigProvider`, or override the CSS variables directly (on the root node that carries `rootClass`). The icon variables can also be set for a single option through its `class` / `style`.

| Token | Description | Default |
| --- | --- | --- |
| `--am-share-sheet-header-color` | Color of the header description | `var(--am-color-text-description)` |
| `--am-share-sheet-title-color` | Color of the title | `var(--am-color-text)` |
| `--am-share-sheet-option-width` | Width of an option | `76px` |
| `--am-share-sheet-option-gap` | Gap between the icon and the name | `var(--am-margin-xs)` |
| `--am-share-sheet-row-padding` | Padding of each row | `var(--am-padding) var(--am-padding-xs)` |
| `--am-share-sheet-icon-size` | Size of the round icon holder | `48px` |
| `--am-share-sheet-icon-font-size` | Font size of the icon | `24px` |
| `--am-share-sheet-icon-color` | Color of the icon | `var(--am-color-text)` |
| `--am-share-sheet-icon-bg` | Background color of the round icon holder | `var(--am-color-fill-tertiary)` |
| `--am-share-sheet-label-color` | Color of the name | `var(--am-color-text-secondary)` |
| `--am-share-sheet-label-font-size` | Font size of the name | `var(--am-font-size-sm)` |
| `--am-share-sheet-description-color` | Color of the option description | `var(--am-color-text-description)` |
| `--am-share-sheet-active-opacity` | Opacity of a pressed option | `0.6` |
| `--am-share-sheet-cancel-height` | Minimum height of the cancel button | `48px` |
| `--am-share-sheet-cancel-color` | Text color of the cancel button | `var(--am-color-text-secondary)` |
| `--am-share-sheet-cancel-active-bg` | Background color of the pressed cancel button | `var(--am-color-fill-tertiary)` |
| `--am-share-sheet-gap-size` | Height of the gap above the cancel button | `8px` |
| `--am-share-sheet-gap-color` | Color of the gap above the cancel button | `var(--am-color-bg-layout)` |
| `--am-share-sheet-max-height` | Maximum height of the panel, the options scroll vertically when exceeded | `80%` |

## Differences from PC

- antdv-next (PC) has no such component: ShareSheet is mobile-only.
- Prop names follow the PC conventions: `open` / `v-model:open`, `defaultOpen`, `options`, `maskClosable`, `keyboard`, `destroyOnHidden`, `forceRender`, `getContainer`, `zIndex`, `rootClass`, `classes`, `styles`, `openChange`, `afterOpenChange`.
- The layer is built on [Popup](../popup/docs.md) and slides up from the bottom. The header, cancel button and closing behaviour match [ActionSheet](../action-sheet/docs.md), and the cancel text reuses the `ActionSheet.cancelText` locale.
- No social logos or brand colors are built in: use `@antdv-next/icons` or your own images.
