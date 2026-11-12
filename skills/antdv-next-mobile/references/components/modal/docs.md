---
title: Modal
description: Display a modal dialog box, providing a title, content area, and action buttons.
---

## When To Use

- When users need to handle a task without jumping to another page and interrupting their workflow, use `Modal` to open a floating layer in the center of the current page to hold the related operations.
- When a concise confirmation dialog is needed to ask the user, use syntactic sugar methods such as `Modal.confirm()`.

The API is aligned with `Modal` of antdv-next, and it looks like the iOS-style dialog that is common on mobile: rounded corners, centered title and content, and full-width buttons at the bottom.

## Examples

| Demo | Path |
| --- | --- |
| Basic usage | demo/basic.md |
| Confirmation dialog | demo/confirm.md |
| Information dialog | demo/info.md |
| Asynchronous close | demo/async.md |
| Custom actions | demo/actions.md |
| Custom footer | demo/footer.md |
| Image and header | demo/image.md |
| Use hooks to get context | demo/hooks.md |

## API

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| open | Whether the modal is visible, supports `v-model:open` | `boolean` | `false` |
| title | Title, the same-named slot takes precedence | `VueNode` | - |
| content | Content, the default slot takes precedence | `VueNode` | - |
| footer | Footer content, set to `null` or `false` to hide the footer | `VueNode` | (OK and Cancel buttons) |
| okText | Text of the OK button | `VueNode` | `OK` |
| cancelText | Text of the Cancel button | `VueNode` | `Cancel` |
| okType | Type of the OK button | `'default' \| 'primary' \| 'danger' \| 'dashed' \| 'link' \| 'text'` | `'primary'` |
| okButtonProps | Props of the OK button | [ButtonProps](../button/docs.md) | - |
| cancelButtonProps | Props of the Cancel button | [ButtonProps](../button/docs.md) | - |
| confirmLoading | Loading state of the OK button | `boolean` | `false` |
| okCancel | Whether to show the Cancel button. When `false` there is only one button, whose default text is `OK` | `boolean` | `true` |
| closable | Whether to show the close button at the top right | `boolean` | `false` |
| closeIcon | Custom close icon, set to `null` or `false` to hide the close button | `VueNode` | `<CloseOutlined />` |
| mask | Whether to show the mask | `boolean` | `true` |
| maskClosable | Whether clicking the mask is allowed to close the modal | `boolean` | `true` |
| centered | Vertically centered. Always centered on mobile, kept only for consistency with PC | `boolean` | `true` |
| keyboard | Whether pressing ESC closes the modal | `boolean` | `true` |
| destroyOnHidden | Destroy the child elements of the modal on close | `boolean` | `false` |
| forceRender | Force render the modal | `boolean` | `false` |
| getContainer | The mount node, `false` mounts in place | `string \| HTMLElement \| (() => HTMLElement) \| false` | `document.body` |
| zIndex | z-index | `number` | Auto increment |
| width | Width, at most the screen width minus `48px` | `number \| string` | `300` |
| scrollLock | Whether to lock page scrolling while open | `boolean` | `true` |
| image | URL of the image at the top of the modal | `string` | - |
| actions | List of action buttons that replaces the default OK and Cancel buttons, stacked vertically when there are more than 2 | [ModalAction](#modalaction)[] | - |
| closeOnAction | Whether to close after an action button is clicked | `boolean` | `false` |
| rootClass | Class name of the root node | `string` | - |
| rootStyle | Style of the root node | `CSSProperties` | - |
| classes | Semantic structure class names | `Record<SemanticDOM, string>` | - |
| styles | Semantic structure styles | `Record<SemanticDOM, CSSProperties>` | - |

`SemanticDOM`: `root` (root node), `mask` (mask), `container` (modal container), `header` (image / header area), `title`, `body`, `footer`, `close`.

### Events

| Event | Description | Type |
| --- | --- | --- |
| update:open | Fired when the visible state changes | `(open: boolean) => void` |
| ok | Callback when the OK button is clicked | `(event: MouseEvent) => void` |
| cancel | Callback when the mask, the close button at the top right or the Cancel button is clicked, or ESC is pressed | `(event?: Event) => void` |
| action | Fired when an action button in `actions` is clicked (after the Promise returned by `onClick` settles) | `(action: ModalAction, index: number) => void` |
| afterClose | Callback after the modal is completely closed | `() => void` |
| afterOpenChange | Callback after the open and close animations end | `(open: boolean) => void` |

### Slots

| Slot | Description | Params |
| --- | --- | --- |
| default | Content, takes precedence over the `content` prop | - |
| title | Title, takes precedence over the `title` prop | - |
| header | Area above the title for an illustration or an icon, takes precedence over the `image` prop | - |
| footer | Footer content, takes precedence over the `footer` prop | `{ ok, cancel, confirmLoading }` |
| okText | Text of the OK button | - |
| cancelText | Text of the Cancel button | - |
| closeIcon | Custom close icon | - |

### ModalAction

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| key | Unique identifier | `string \| number` | - |
| text | Text of the button | `VueNode` | - |
| danger | Dangerous action, the text is red | `boolean` | `false` |
| bold | Emphasized action, uses the primary color and bold text | `boolean` | `false` |
| disabled | Whether the action is disabled | `boolean` | `false` |
| onClick | Click callback. When it returns a Promise the button enters the loading state, and the `action` event is fired only after it settles | `(action: ModalAction) => void \| Promise<void>` | - |

### Static Methods

- `Modal.confirm(config)`
- `Modal.info(config)`
- `Modal.success(config)`
- `Modal.error(config)`
- `Modal.warning(config)`
- `Modal.show(config)`: a modal without a preset type, usually used together with `actions`
- `Modal.alert(config): Promise<void>`: an alert with a single button, the Promise settles after it is closed
- `Modal.confirmAsync(config): Promise<boolean>`: the Promise form of the confirmation dialog, `true` for OK and `false` for Cancel
- `Modal.destroyAll()`: destroy all modals opened through static methods

`confirm` / `info` / `success` / `error` / `warning` / `show` return a reference through which the modal can be updated and closed:

```ts
const modal = Modal.info({ title: 'Notice' })

modal.update({ title: 'Updated title' })
// A function can be passed as well
modal.update(prev => ({ ...prev, title: `${prev.title} (new)` }))

modal.destroy()
```

The `config` parameters are as follows:

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| type | Type of the modal | `'info' \| 'success' \| 'error' \| 'warn' \| 'warning' \| 'confirm'` | - |
| title | Title | `VueNode` | - |
| content | Content | `VueNode` | - |
| icon | Icon above the title, `info / success / error / warning` have default icons, set to `null` to hide it | `VueNode` | - |
| image | URL of the image at the top | `string` | - |
| okText | Text of the OK button | `VueNode` | `OK` (`OK` for a single button) |
| cancelText | Text of the Cancel button | `VueNode` | `Cancel` |
| okType | Type of the OK button | `'default' \| 'primary' \| 'danger' \| ...` | `'primary'` |
| okButtonProps | Props of the OK button | `ButtonProps` | - |
| cancelButtonProps | Props of the Cancel button | `ButtonProps` | - |
| okCancel | Whether to show the Cancel button | `boolean` | `true` for `confirm`, `false` for the others |
| actions | List of action buttons that replaces the default buttons | `ModalAction[]` | - |
| closeOnAction | Whether to close after an action button is clicked | `boolean` | `true` |
| footer | Footer content, set to `null` to hide the footer | `VueNode` | - |
| closable | Whether to show the close button at the top right | `boolean` | `false` |
| closeIcon | Custom close icon | `VueNode` | - |
| mask | Whether to show the mask | `boolean` | `true` |
| maskClosable | Whether clicking the mask is allowed to close the modal | `boolean` | `false` |
| keyboard | Whether pressing ESC closes the modal | `boolean` | `true` |
| getContainer | The mount node | `string \| HTMLElement \| (() => HTMLElement) \| false` | `document.body` |
| zIndex | z-index | `number` | Auto increment |
| width | Width | `number \| string` | `300` |
| class | Class name of the root node | `string` | - |
| style | Style of the root node | `CSSProperties` | - |
| rootClass | Class name of the root node | `string` | - |
| classes | Semantic structure class names | `Record<SemanticDOM, string>` | - |
| styles | Semantic structure styles | `Record<SemanticDOM, CSSProperties>` | - |
| afterClose | Callback after the modal is completely closed | `() => void` | - |
| onOk | Callback when the OK button is clicked. When the `close` parameter is declared you have to call it to close the modal; otherwise, when a Promise is returned the button shows loading, the modal closes automatically on resolve and stays open on reject | `(close: () => void) => any` | - |
| onCancel | Callback when the Cancel button, the mask or the close button is clicked, or ESC is pressed; same rules as `onOk` | `(close: () => void) => any` | - |
| appContext | App context, so that globally registered components and provides can be used in the content | `AppContext` | - |

Modals created by static methods are rendered in a separate app. Their theme and locale follow the global configuration of `ConfigProvider.config()`, and they cannot read the `ConfigProvider` context of the call site. Use `Modal.useModal()` when the context is needed.

### Modal.useModal()

```vue
<script setup lang="ts">
import { Modal } from '@antdv-next/mobile'

const [modal, ContextHolder] = Modal.useModal()

async function onDelete() {
  const confirmed = await modal.confirmAsync({ title: 'Are you sure to delete it?' })
}
</script>

<template>
  <ContextHolder />
  <am-button @click="onDelete">
    Delete
  </am-button>
</template>
```

`modal` has the `info`, `success`, `error`, `warning`, `confirm`, `show`, `alert` and `confirmAsync` methods. The modal is rendered where `<ContextHolder />` is placed, so it gets the theme and locale of `ConfigProvider` as well as the context from `provide`.

## Design Token

Customize through `theme.components.Modal` of `ConfigProvider`, or override the CSS variables directly (on the root node that carries `rootClass`).

| Token | Description | Default |
| --- | --- | --- |
| `--am-modal-width` | Width of the modal | `300px` |
| `--am-modal-border-radius` | Border radius | `var(--am-border-radius-xl)` |
| `--am-modal-bg` | Background color | `var(--am-color-bg-elevated)` |
| `--am-modal-content-padding` | Padding of the title and content area | `var(--am-padding-lg) var(--am-padding-md) var(--am-padding-md)` |
| `--am-modal-title-font-size` | Font size of the title | `var(--am-font-size-xl)` |
| `--am-modal-title-color` | Color of the title | `var(--am-color-text-heading)` |
| `--am-modal-body-font-size` | Font size of the content | `var(--am-font-size)` |
| `--am-modal-body-color` | Color of the content | `var(--am-color-text-secondary)` |
| `--am-modal-body-max-height` | Maximum height of the content area, scrolls when exceeded | `60vh` |
| `--am-modal-action-height` | Height of the footer buttons | `50px` |
| `--am-modal-action-font-size` | Font size of the footer buttons | `var(--am-font-size-lg)` |

## Differences from PC

- It looks like an iOS-style centered dialog, `centered` is always in effect, the default width is `300px` (`520px` on PC), and responsive breakpoint widths are not supported.
- `closable` defaults to `false` (`true` on PC). `maskClosable` defaults to `true` as on PC, and to `false` for static methods; `mask` only supports a boolean, the `mask.blur` / `mask.closable` configuration is not supported.
- The footer buttons are full-width text buttons: `okButtonProps` / `cancelButtonProps` can still pass `ButtonProps` through (such as `disabled`, `loading`, `danger`), and `okType` is mapped to the button color.
- The params of the `footer` slot are `{ ok, cancel, confirmLoading }` instead of `{ originNode, extra }` on PC.
- Adds the `content`, `okCancel`, `image`, `actions` and `closeOnAction` props, the `header` slot and the `action` event.
- Static methods add `Modal.show`, `Modal.alert` and `Modal.confirmAsync`; the icon of `info` and similar methods is shown above the title, and `confirm` shows no icon by default. Static methods do not support `autoFocusButton`.
- The `ContextHolder` returned by `Modal.useModal()` is a component, used the same way as on PC.
- `modalRender`, `mousePosition`, `focusable`, `loading`, `wrapClassName`, `wrapProps`, `transitionName` and `maskTransitionName` are not supported.
- `classes` / `styles` only support the object form.
