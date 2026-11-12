---
title: Tour
description: A popup component for guiding users through a product.
---

## When To Use

- Use it to guide users through a product: when a feature is released or a page is opened for the first time, highlight elements of the page one by one and explain them.
- When a hint must not interrupt what the user is doing, use a non-modal tour (`mask` set to `false`).

The API is aligned with `Tour` of antdv-next and adapted to phones: the panel width follows the screen, the position flips automatically and always stays within the screen, buttons and the close icon keep a touch target of at least 40px, and page scroll is locked while the mask is shown.

## Examples

| Demo | Path |
| --- | --- |
| Basic usage | demo/basic.md |
| Non-modal and custom mask | demo/non-modal.md |
| Placement | demo/placement.md |
| Primary type and highlighted area | demo/primary.md |
| Custom indicators and actions | demo/custom.md |

## API

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| open | Whether the tour is open, supports `v-model:open` | `boolean` | - |
| defaultOpen | Whether the tour is open initially | `boolean` | `false` |
| current | The current step, supports `v-model:current`; nothing is shown when it is out of the range of `steps` | `number` | - |
| defaultCurrent | The initial step | `number` | `0` |
| steps | Configuration of the steps | [TourStepItem](#tourstepitem)[] | `[]` |
| type | Type, affects the background color and the text color | `'default' \| 'primary'` | `'default'` |
| mask | Whether to enable the mask, or a config that changes its style and fill color | `boolean \| { style?: CSSProperties; color?: string }` | `true` |
| arrow | Whether to show the arrow | `boolean \| { pointAtCenter: boolean }` | `true` |
| placement | Position of the panel relative to the target element | `'center' \| 'top' \| 'topLeft' \| 'topRight' \| 'bottom' \| 'bottomLeft' \| 'bottomRight' \| 'left' \| 'leftTop' \| 'leftBottom' \| 'right' \| 'rightTop' \| 'rightBottom'` | `'bottom'` |
| gap | Corner radius and spacing of the highlighted area | `{ offset?: number \| [number, number]; radius?: number }` | `{ offset: 6, radius: 2 }` |
| disabledInteraction | Disable interaction on the highlighted area (the target cannot be tapped) | `boolean` | `false` |
| scrollIntoViewOptions | Whether to scroll the current target into view, or the options passed to `scrollIntoView` | `boolean \| ScrollIntoViewOptions` | `true` (`{ block: 'center', inline: 'center' }`) |
| indicatorsRender | Custom indicators, the same-named slot wins | `(current: number, total: number) => VNodeChild` | - |
| actionsRender | Custom actions, `originNode` is the default previous / next buttons, the same-named slot wins | `(originNode: VNode, info: { current: number, total: number }) => VNodeChild` | - |
| closable | Whether to show the close button, or `{ closeIcon }` | `boolean \| { closeIcon?: VueNode }` | `true` |
| closeIcon | Custom close icon, `false` hides the close button, the same-named slot wins | `VueNode` | - |
| keyboard | Whether to enable keyboard behaviour (external keyboards: ESC closes, left / right arrow keys switch steps) | `boolean` | `true` |
| lockScroll | Whether to lock page scroll while the mask is shown | `boolean` | `true` |
| zIndex | The z-index of the tour | `number` | auto increment |
| getPopupContainer | The mount node of the tour layer, body by default; `false` renders in place | `((node: HTMLElement) => HTMLElement) \| false` | `() => document.body` |
| rootClass | Class name of the layer root | `string` | - |
| classes | Semantic class names | `Record<'root' \| 'mask' \| 'section' \| 'close' \| 'cover' \| 'header' \| 'title' \| 'description' \| 'footer' \| 'indicators' \| 'indicator' \| 'actions', string>` | - |
| styles | Semantic styles | `Record<'root' \| 'mask' \| 'section' \| 'close' \| 'cover' \| 'header' \| 'title' \| 'description' \| 'footer' \| 'indicators' \| 'indicator' \| 'actions', CSSProperties>` | - |

Fallthrough attributes such as `class` and `style` are applied to the layer root `.am-tour`.

### Events

| Event | Description | Type |
| --- | --- | --- |
| update:open | The visibility changed | `(open: boolean) => void` |
| update:current | The current step changed | `(current: number) => void` |
| change | Callback when the step changes, `current` is the new step | `(current: number) => void` |
| close | Callback when the tour is closed (close button, ESC, finish) | `(current: number) => void` |
| finish | Callback when the tour is finished | `() => void` |

### Slots

| Slot | Description | Params |
| --- | --- | --- |
| indicatorsRender | Custom indicators | `{ current: number, total: number }` |
| actionsRender | Custom actions, render the default buttons with `<component :is="originNode" />` | `{ originNode: VNode, current: number, total: number }` |
| nextButton | Custom content of the next button | `{ current: number, isFirst: boolean, isLast: boolean }` |
| prevButton | Custom content of the previous button | `{ current: number, isFirst: boolean, isLast: boolean }` |
| coverRender | Custom cover of a step | `{ step: TourStepItem, index: number }` |
| titleRender | Custom title of a step | `{ step: TourStepItem, index: number }` |
| descriptionRender | Custom description of a step | `{ step: TourStepItem, index: number }` |
| closeIcon | Custom close icon | `{ step: TourStepItem, index: number }` |

`coverRender` / `titleRender` / `descriptionRender` apply to every step; when the slot renders nothing for a step, `cover` / `title` / `description` of that step is used.

### Methods

| Name | Description | Type |
| --- | --- | --- |
| updatePosition | Re-measure the target and re-position the panel (call it after the page layout changed; scrolling, resizing the window and resizing the target update it automatically) | `() => void` |

### TourStepItem

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| target | The element the panel points at: an element, a component instance, a `ref` of them, or a function returning them; the panel is centered on the screen when empty | `HTMLElement \| Ref<HTMLElement> \| (() => HTMLElement) \| null` | - |
| title | Title | `VueNode` | - |
| description | Description | `VueNode` | - |
| cover | Displayed image or video | `VueNode` | - |
| placement | Position of the panel relative to the target element | Same as `placement` of Tour | `'bottom'` |
| arrow | Whether to show the arrow | `boolean \| { pointAtCenter: boolean }` | `true` |
| mask | Whether to enable the mask, follows `mask` of Tour by default | `boolean \| { style?: CSSProperties; color?: string }` | `true` |
| type | Type, affects the background color and the text color | `'default' \| 'primary'` | `'default'` |
| nextButtonProps | Props of the next button | `{ children?: VueNode; onClick?: (e: MouseEvent) => void; class?: string; style?: CSSProperties }` | - |
| prevButtonProps | Props of the previous button | `{ children?: VueNode; onClick?: (e: MouseEvent) => void; class?: string; style?: CSSProperties }` | - |
| scrollIntoViewOptions | Whether to scroll the target into view, follows `scrollIntoViewOptions` of Tour by default | `boolean \| ScrollIntoViewOptions` | `true` |
| closable | Whether to show the close button, follows Tour by default | `boolean \| { closeIcon?: VueNode }` | - |
| closeIcon | Custom close icon, `false` hides it | `VueNode` | - |
| class | Class name of the panel of this step | `string` | - |
| style | Style of the panel of this step | `CSSProperties` | - |
| classes | Semantic class names of this step, win over `classes` of Tour | Same as `classes` of Tour | - |
| styles | Semantic styles of this step, win over `styles` of Tour | Same as `styles` of Tour | - |

## Design Token

Customize through `theme.components.Tour` of `ConfigProvider`, or override the CSS variables directly (on the layer root that carries `rootClass`).

| Variable | Description | Default |
| --- | --- | --- |
| `--am-tour-z-index` | z-index (when not assigned automatically) | `calc(var(--am-z-index-popup-base) + 1)` |
| `--am-tour-width` | Panel width | `min(300px, calc(100vw - 32px))` |
| `--am-tour-bg` | Panel background color | `var(--am-color-bg-elevated)` |
| `--am-tour-color` | Text color | `var(--am-color-text)` |
| `--am-tour-title-color` | Title color | `var(--am-color-text-heading)` |
| `--am-tour-font-size` | Font size | `var(--am-font-size)` |
| `--am-tour-title-font-size` | Title font size | `var(--am-font-size-lg)` |
| `--am-tour-padding` | Panel padding | `var(--am-padding)` |
| `--am-tour-border-radius` | Panel border radius | `var(--am-border-radius-lg)` |
| `--am-tour-shadow` | Panel shadow | `var(--am-box-shadow)` |
| `--am-tour-mask-color` | Fill color of the mask | `var(--am-color-bg-mask)` |
| `--am-tour-arrow-size` | Arrow size | `10px` |
| `--am-tour-indicator-size` | Size of an indicator dot | `6px` |
| `--am-tour-indicator-color` | Indicator color | `var(--am-color-fill)` |
| `--am-tour-indicator-active-color` | Indicator color of the current step | `var(--am-color-primary)` |
| `--am-tour-close-size` | Size of the close button (its touch target is never smaller than 40px) | `24px` |
| `--am-tour-close-color` | Color of the close icon | `var(--am-color-icon)` |
| `--am-tour-close-active-bg` | Background of the close button while pressed | `var(--am-color-bg-text-active)` |
| `--am-tour-motion-duration` | Duration of the move of the highlighted area and the panel when the step changes | `var(--am-motion-duration-slow)` |

A panel with `type="primary"` (`.am-tour-primary`) switches the background, text, indicator and close icon variables to the primary color.

## Differences from PC

- No dependency on `@v-c/tour` / `@v-c/trigger`: the layer is rendered through Portal as one full-screen `position: fixed` layer `.am-tour` that holds the SVG mask, the highlight placeholder and the panel. `class` / `style` / `rootClass` are applied to this root (PC applies them to the mask and the target placeholder).
- The panel is `min(300px, 100vw - 32px)` wide (520px on PC); it flips, shifts along the edge and is clamped into the screen and the safe areas. The `left` / `right` placements fall back to above or below when the panel does not fit; the arrow is hidden when the panel has to cover the target.
- `{ pointAtCenter }` of `arrow` only exists for type compatibility: the arrow always points at the center of the target.
- Page scroll is locked while the mask is shown and a `lockScroll` prop was added; with `mask` set to `false` the page can be scrolled and used normally (PC still intercepts page clicks on steps without a `target`).
- `disabledInteraction` only blocks taps inside the highlighted area, and also works with `mask` set to `false`.
- Buttons are small `Button`s with the touch target extended to 40px; with `type="primary"` the next button is inverted (white background, primary text) and the previous button is a ghost button.
- Slot params are objects: `{ current, total }` for `indicatorsRender` and `{ originNode, current, total }` for `actionsRender` (positional arguments on PC); `originNode` is a single VNode.
- Slots win over props: when `titleRender` / `descriptionRender` / `coverRender` render something, they win over `title` / `description` / `cover` of the step (on PC the step props win). A `closeIcon` slot was added.
- The tour is closed when `open` is not passed, open it through `open` / `defaultOpen`; the `defaultOpen`, `defaultCurrent` and `closable` props and the `updatePosition` method were added.
- The layer is destroyed once it is closed; the highlighted area and the panel move with an animation when the step changes, and without one while the page scrolls so they stay in place.
- The `popupAlign` event, `builtinPlacements`, `animated` and `prefixCls` are not supported, `classes` / `styles` only support the object form; `closeIcon` cannot be configured globally through ConfigProvider yet.
- The locale keys are `Tour.next` / `Tour.prev` / `Tour.finish` (`Next` / `Previous` / `Finish` on PC).
