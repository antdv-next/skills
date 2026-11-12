---
title: NavBar
description: Sits at the top of the page and provides the title, back navigation and page-level actions.
---

## When To Use

- When you need to show the title of the current page and provide an entry to go back to the previous level.
- When you need to place page-level actions such as search and more at the top of the page.

`NavBar` is a mobile-only component that covers the use cases of `PageHeader` on PC.

## Examples

| Demo | Path |
| --- | --- |
| Basic usage | demo/basic.md |
| Back area | demo/back.md |
| Subtitle | demo/sub-title.md |
| Left and right content | demo/extra.md |
| Fixed at the top | demo/fixed.md |
| Custom style | demo/style-class.md |

## API

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| title | Title, same as the default slot | `VueNode` | - |
| subTitle | Subtitle | `VueNode` | - |
| back | Text next to the back arrow, hides the whole back area when set to `null` or `false` | `VueNode` | - |
| backIcon | Custom back arrow, hides only the arrow when set to `null` or `false` | `VueNode` | `<LeftOutlined />` |
| left | Left content, rendered after the back area | `VueNode` | - |
| right | Right content | `VueNode` | - |
| fixed | Whether to fix the nav bar at the top of the viewport | `boolean` | `false` |
| placeholder | Whether to keep a placeholder of the same height in the document flow when fixed | `boolean` | `false` |
| safeArea | Whether to adapt to the top safe area (status bar, notch) | `boolean` | `false` |
| bordered | Whether to show the bottom hairline | `boolean` | `true` |
| zIndex | z-index when fixed | `number` | `100` |
| rootClass | Class name of the root element | `string` | - |
| classes | Semantic class names | `Record<'root' \| 'content' \| 'left' \| 'back' \| 'title' \| 'subTitle' \| 'right', string>` | - |
| styles | Semantic styles | `Record<'root' \| 'content' \| 'left' \| 'back' \| 'title' \| 'subTitle' \| 'right', CSSProperties>` | - |

### Events

| Event | Description | Type |
| --- | --- | --- |
| back | Triggered when the back area is clicked | `(event: MouseEvent) => void` |

### Slots

| Slot | Description |
| --- | --- |
| default | Title, takes precedence over the `title` slot and prop |
| title | Title |
| subTitle | Subtitle |
| back | Text next to the back arrow |
| backIcon | Custom back arrow |
| left | Left content |
| right | Right content |

## Design Token

Customize through `theme.components.NavBar` of `ConfigProvider`, or by overriding the CSS variables directly.

| Token | Description | Default |
| --- | --- | --- |
| `--am-nav-bar-height` | Height of the nav bar (excluding the safe area) | `46px` |
| `--am-nav-bar-background` | Background color | `var(--am-color-bg-container)` |
| `--am-nav-bar-color` | Text and icon color | `var(--am-color-text)` |
| `--am-nav-bar-title-font-size` | Title font size | `var(--am-font-size-lg)` |
| `--am-nav-bar-title-font-weight` | Title font weight | `var(--am-font-weight-strong)` |
| `--am-nav-bar-sub-title-font-size` | Subtitle font size | `var(--am-font-size-sm)` |
| `--am-nav-bar-sub-title-color` | Subtitle color | `var(--am-color-text-tertiary)` |
| `--am-nav-bar-icon-size` | Back arrow size | `20px` |
| `--am-nav-bar-padding-inline` | Horizontal padding | `var(--am-padding-sm)` |
| `--am-nav-bar-z-index` | z-index when fixed | `100` |
