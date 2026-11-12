---
title: ActionSheet
description: A panel of actions that slides up from the bottom.
---

## When To Use

- Triggered by a user operation to offer two or more actions related to the current context.
- Give users a second chance to choose before a dangerous operation (such as "Delete" and "Cancel").

ActionSheet is a mobile-only component. On mobile it replaces the dropdown action menu of PC.

## Examples

| Demo | Path |
| --- | --- |
| Basic usage | demo/basic.md |
| Cancel button and title | demo/cancel.md |
| Action status | demo/status.md |
| Imperative call | demo/static.md |
| Custom content | demo/custom.md |

## API

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| open | Whether the panel is visible, supports `v-model:open` | `boolean` | `false` |
| actions | List of actions | [ActionSheetAction](#actionsheetaction)[] | `[]` |
| title | Title, the same-named slot takes precedence | `VueNode` | - |
| extra | Description below the title, the same-named slot takes precedence | `VueNode` | - |
| cancelText | Text of the cancel button, taken from the locale by default; set to `null` to hide the cancel button | `VueNode` | `Cancel` |
| showCancel | Whether to show the cancel button | `boolean` | `true` |
| closeOnAction | Whether to close after an action is clicked | `boolean` | `true` |
| maskClosable | Whether to close when the mask is clicked | `boolean` | `true` |
| keyboard | Whether pressing ESC closes the panel | `boolean` | `true` |
| round | Whether the top corners are rounded | `boolean` | `true` |
| safeArea | Whether to reserve the bottom safe area | `boolean` | `true` |
| destroyOnHidden | Destroy the content after closing | `boolean` | `false` |
| forceRender | Pre-render the content before the first open | `boolean` | `false` |
| getContainer | Mount node, `false` mounts in place | `string \| HTMLElement \| (() => HTMLElement) \| false` | `document.body` |
| zIndex | z-index | `number` | Auto increment |
| rootClass | Class name of the root node | `string` | - |
| classes | Semantic structure class names | `Record<SemanticDOM, string>` | - |
| styles | Semantic structure styles | `Record<SemanticDOM, CSSProperties>` | - |

`SemanticDOM`: `root`, `mask`, `body` (the panel), `header`, `title`, `extra`, `list`, `item`, `cancel`.

### Events

| Event | Description | Type |
| --- | --- | --- |
| update:open | Fired when the visible state changes | `(open: boolean) => void` |
| action | Fired when an action is clicked, disabled actions do not fire it | `(action: ActionSheetAction, index: number) => void` |
| cancel | Fired when the cancel button is clicked | `(event: MouseEvent) => void` |
| close | Fired when the panel requests to close (an action, the cancel button or the mask is clicked, or ESC is pressed) | `() => void` |
| afterOpenChange | Fired after the open / close animation ends | `(open: boolean) => void` |

### Slots

| Slot | Description | Params |
| --- | --- | --- |
| default | Custom content between the title and the action list | - |
| title | Title, takes precedence over the `title` prop | - |
| extra | Description, takes precedence over the `extra` prop | - |
| cancelText | Content of the cancel button, takes precedence over the `cancelText` prop | - |
| action | Customize the content of a single action | `{ action, index }` |

### ActionSheetAction

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| key | Unique identifier | `string \| number` | - |
| text | Text | `VueNode` | - |
| description | Description below the text | `VueNode` | - |
| icon | Icon before the text | `VueNode` | - |
| danger | Dangerous action, the text is red | `boolean` | `false` |
| bold | Bold text | `boolean` | `false` |
| disabled | Whether the action is disabled | `boolean` | `false` |
| onClick | Click callback | `(action: ActionSheetAction, index: number) => void` | - |

### Static Methods

```ts
import { ActionSheet } from '@antdv-next/mobile'

const handler = ActionSheet.show({
  actions: [{ key: 'copy', text: 'Copy' }],
  onAction: (action) => {},
})

handler.close()
```

The `config` of `ActionSheet.show(config)` supports all the props above except `open`, `destroyOnHidden` and `forceRender`, plus:

| Parameter | Description | Type |
| --- | --- | --- |
| class | Class name of the root node | `string` |
| style | Style of the root node | `CSSProperties` |
| onAction | Callback when an action is clicked | `(action: ActionSheetAction, index: number) => void` |
| onCancel | Callback when the cancel button is clicked | `() => void` |
| onClose | Callback when the panel requests to close | `() => void` |
| afterClose | Callback after the panel is completely closed | `() => void` |
| appContext | App context, so that globally registered components can be used in the content | `AppContext` |

Returns `{ close }`. The theme and locale of imperative calls follow the global configuration of `ConfigProvider.config()`.

## Design Token

Customize through `theme.components.ActionSheet` of `ConfigProvider`, or override the CSS variables directly (on the root node that carries `rootClass`).

| Token | Description | Default |
| --- | --- | --- |
| `--am-action-sheet-item-height` | Minimum height of an action item | `52px` |
| `--am-action-sheet-item-font-size` | Font size of an action item | `var(--am-font-size-lg)` |
| `--am-action-sheet-item-color` | Text color of an action item | `var(--am-color-text)` |
| `--am-action-sheet-item-active-bg` | Background color of a pressed action item | `var(--am-color-fill-tertiary)` |
| `--am-action-sheet-description-color` | Color of the action description | `var(--am-color-text-description)` |
| `--am-action-sheet-header-color` | Text color of the header | `var(--am-color-text-description)` |
| `--am-action-sheet-gap-size` | Height of the gap above the cancel button | `8px` |
| `--am-action-sheet-gap-color` | Color of the gap above the cancel button | `var(--am-color-bg-layout)` |
| `--am-action-sheet-max-height` | Maximum height of the panel, the action list scrolls when exceeded | `80%` |
