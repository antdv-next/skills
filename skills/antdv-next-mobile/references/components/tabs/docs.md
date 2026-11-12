---
title: Tabs
description: A tab switching component, used to switch between content groups at the same level.
---

## When To Use

- When content needs to be shown in groups, one group at a time, to keep the interface tidy.
- When there are many tabs, the tab bar can scroll horizontally and the active tab is centered automatically.
- When groups need to be switched by swiping the content area left and right.

The API is aligned with the `Tabs` of Antdv Next (`items`, `activeKey`, `type`, `size`, `centered`, `destroyOnHidden`, etc.), with mobile capabilities such as swipe switching and a sticky tab bar added.

## Examples

| Demo | Path |
| --- | --- |
| Basic usage | demo/basic.md |
| Scrollable tab bar | demo/scrollable.md |
| Tab types | demo/type.md |
| Size and centered | demo/size.md |
| Icon, disabled and extra content | demo/icon.md |
| Swipe to switch | demo/swipeable.md |
| Sticky | demo/sticky.md |
| Custom render | demo/slot.md |

## API

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| items | Tab configuration | [TabsItem](#tabsitem)[] | `[]` |
| activeKey(v-model) | The `key` of the currently active tab | `string \| number` | - |
| defaultActiveKey | The `key` of the tab active by default | `string \| number` | The `key` of the first tab that is not disabled |
| type | The tab type, `capsule` is a capsule style added for mobile | `'line' \| 'card' \| 'capsule'` | `'line'` |
| size | The size | `'small' \| 'middle' \| 'large'` | `'middle'` |
| centered | Center the tabs | `boolean` | `false` |
| stretch | Tabs share the tab bar width equally | `boolean` | `true` when there are no more than 4 tabs and `centered` is not set |
| tabPlacement | The position of the tab bar | `'top' \| 'bottom'` | `'top'` |
| animated | Whether to switch with animation, `true` enables it for both the ink bar and the content | `boolean \| { inkBar?: boolean, tabPane?: boolean }` | `{ inkBar: true, tabPane: false }` |
| swipeable | Whether tabs can be switched by swiping the content area left and right | `boolean` | `false` |
| sticky | Whether the tab bar is sticky | `boolean` | `false` |
| offsetTop | The distance from the top of the scroll container when sticky | `number \| string` | `0` |
| destroyOnHidden | Whether to destroy the tab content when it is hidden | `boolean` | `false` |
| rootClass | Class name of the root node | `string` | - |
| classes | Semantic structure class names | `Record<'root' \| 'header' \| 'item' \| 'indicator' \| 'body' \| 'content', string>` | - |
| styles | Semantic structure styles | `Record<'root' \| 'header' \| 'item' \| 'indicator' \| 'body' \| 'content', CSSProperties>` | - |
| ~~tabPosition~~ | Use `tabPlacement` instead | `'top' \| 'bottom'` | - |

### TabsItem

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| key | Unique identifier | `string \| number` | - |
| label | Tab title | `VueNode` | - |
| content | Tab content | `VueNode` | - |
| children | Alias of `content` | `VueNode` | - |
| icon | Tab icon | `VueNode` | - |
| disabled | Whether it is disabled | `boolean` | `false` |
| forceRender | Render the content even if it has never been active | `boolean` | `false` |
| destroyOnHidden | Whether to destroy the content when it is hidden, takes precedence over the same-named prop of `Tabs` | `boolean` | - |
| class | Tab class name | `string` | - |
| style | Tab style | `CSSProperties` | - |

Tab content is lazily rendered by default: it is rendered when first activated and stays mounted afterwards.

### Events

| Event | Description | Type |
| --- | --- | --- |
| change | Triggered when the tab is switched | `(activeKey: string \| number) => void` |
| tabClick | Triggered when a tab is clicked (including disabled and already active tabs) | `(key: string \| number, event: MouseEvent) => void` |
| update:activeKey | Triggered when the tab is switched, for `v-model:activeKey` | `(activeKey: string \| number) => void` |

### Slots

| Slot | Description | Params |
| --- | --- | --- |
| labelRender | Custom tab title, takes precedence over `item.label` | `{ item: TabsItem, index: number }` |
| contentRender | Custom tab content, takes precedence over `item.content` | `{ item: TabsItem, index: number }` |
| default | Fallback content for tabs without `content` | `{ item: TabsItem, index: number }` |
| leftExtra | Extra content on the left of the tab bar | - |
| rightExtra | Extra content on the right of the tab bar | - |

## Design Token

Customize through `theme.components.Tabs` of `ConfigProvider` or by overriding the CSS variables directly.

| Token | Description | Default |
| --- | --- | --- |
| `--am-tabs-height` | Tab bar height | `44px` |
| `--am-tabs-background` | Tab bar background color | `var(--am-color-bg-container)` |
| `--am-tabs-color` | Tab text color | `var(--am-color-text)` |
| `--am-tabs-active-color` | Active tab text color | `var(--am-color-primary)` |
| `--am-tabs-font-size` | Tab font size | `var(--am-font-size-lg)` |
| `--am-tabs-tab-padding-inline` | Horizontal padding of a tab | `var(--am-padding-sm)` |
| `--am-tabs-ink-bar-width` | Ink bar width | `24px` |
| `--am-tabs-ink-bar-height` | Ink bar height | `2px` |
| `--am-tabs-ink-bar-color` | Ink bar color | `var(--am-color-primary)` |
| `--am-tabs-ink-bar-radius` | Ink bar border radius | `2px` |
| `--am-tabs-card-background` | Tab bar background color of the card type | `var(--am-color-fill-tertiary)` |
| `--am-tabs-capsule-height` | Capsule tab height | `30px` |
| `--am-tabs-capsule-background` | Capsule tab background color | `var(--am-color-fill-tertiary)` |
| `--am-tabs-z-index` | The z-index when sticky | `99` |

## Differences from PC

- Adds `type="capsule"`, `swipeable`, `sticky` / `offsetTop` and `stretch`; when the tab bar overflows it scrolls horizontally and centers the active tab automatically, instead of using a "more" dropdown menu (`more`, `moreIcon`, `popupClassName` are not supported).
- `type="editable-card"` and the related `addIcon`, `removeIcon`, `hideAdd` and the `edit` event are not supported.
- `tabPlacement` only supports `top` and `bottom`, left / right layouts are not provided on mobile.
- `renderTabBar`, `indicator`, `tabBarGutter`, `tabBarStyle` and the `tabScroll` event are not supported; the ink bar width is adjusted through `--am-tabs-ink-bar-width`.
- The declarative `TabPane` child component is not supported, use `items` instead; the `default` slot becomes the fallback content for tabs without `content`.
- `key` supports `number`; when `animated` is `true` the content area also slides when switching.
