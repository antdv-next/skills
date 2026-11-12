---
title: Grid
description: 24 Grids System, plus the entry grid for mobile.
---

## When To Use

- When the areas within a row have to be divided by fixed proportions, e.g. grid entries, side-by-side form fields, an image wall.
- Create a row with `Row` and put the content inside `Col`; when the `span` sum of a row exceeds 24, it wraps automatically.

- When evenly divided icon entries are needed (home page shortcuts, feature panels), use `Grid` / `GridItem`: icon, title, badge, hairlines and press feedback are built in.

`Row` / `Col` are based on Flex and their API is aligned with antdv-next; `Grid` / `GridItem` are mobile-only entry grid components based on CSS Grid.

## Examples

| Demo | Path |
| --- | --- |
| Basic grid | demo/basic.md |
| Grid gutter | demo/gutter.md |
| Offset and order | demo/offset.md |
| Typesetting | demo/justify.md |
| Flex stretch | demo/flex.md |
| Grid entries | demo/entry.md |
| Hairlines and square items | demo/entry-bordered.md |
| Gap and horizontal items | demo/entry-gap.md |
| Span and custom content | demo/entry-custom.md |

## API

### Row Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| gutter | Spacing between grids. Numbers are in px, CSS lengths are also accepted; the array form is `[horizontal, vertical]` | `number \| string \| [number \| string, number \| string]` | `0` |
| align | Vertical alignment | `'top' \| 'middle' \| 'bottom' \| 'stretch'` | `'top'` |
| justify | Horizontal arrangement | `'start' \| 'end' \| 'center' \| 'space-around' \| 'space-between' \| 'space-evenly'` | `'start'` |
| wrap | Whether to wrap automatically | `boolean` | `true` |
| rootClass | Class name of the root element | `string` | - |

### Col Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| span | Number of cells to occupy; `0` corresponds to `display: none` | `number \| string` | - |
| offset | Number of cells to offset the Col from the left | `number \| string` | `0` |
| order | Order of the Col | `number \| string` | `0` |
| push | Number of cells the Col is moved to the right | `number \| string` | `0` |
| pull | Number of cells the Col is moved to the left | `number \| string` | `0` |
| flex | Flex layout property: a number is a ratio, `'100px'` is a fixed width, `'auto'` fills the remaining space | `number \| string` | - |
| rootClass | Class name of the root element | `string` | - |

### Grid Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| items | Item data, see [GridItemType](#grid-item-type); `GridItem`s of the default slot are rendered after them | `GridItemType[]` | `[]` |
| columns | Number of columns | `number \| string` | `4` |
| gap | Spacing between items. Numbers are in px, CSS lengths are also accepted; the array form is `[horizontal, vertical]` | `number \| string \| [number \| string, number \| string]` | `0` |
| bordered | Whether to show the hairlines; with a `gap` every item gets a full border | `boolean` | `false` |
| square | Whether to keep the items square | `boolean` | `false` |
| orientation | Direction of the icon and the title | `'vertical' \| 'horizontal'` | `'vertical'` |
| clickable | Whether to enable press feedback and button semantics; click events still fire when disabled | `boolean` | `true` |
| iconSize | Size of the icons. Numbers are in px | `number \| string` | `28` |
| rootClass | Class name of the root element | `string` | - |
| classes | Semantic class names: `root` / `item` / `icon` / `title` / `badge` | `GridSemanticClassNames` | - |
| styles | Semantic styles: `root` / `item` / `icon` / `title` / `badge` | `GridSemanticStyles` | - |

### GridItemType

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| key | Unique key, the index is used when omitted | `string \| number` | - |
| icon | Icon | `VueNode` | - |
| title | Title | `VueNode` | - |
| badge | Badge, a number or text; `true` renders a dot | `number \| string \| boolean` | - |
| span | Number of columns to span | `number \| string` | `1` |
| disabled | Whether the item is disabled | `boolean` | `false` |
| class | Class name of the item | `string` | - |
| style | Style of the item | `CSSProperties` | - |

### GridItem Props

`Grid.Item`. The props `icon` / `title` / `badge` / `span` / `disabled` are the same as [GridItemType](#grid-item-type), plus:

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| rootClass | Class name of the root element | `string` | - |
| classes | Semantic class names: `root` / `icon` / `title` / `badge` | `GridItemSemanticClassNames` | - |
| styles | Semantic styles: `root` / `icon` / `title` / `badge` | `GridItemSemanticStyles` | - |

### Events

| Component | Event | Description | Arguments |
| --- | --- | --- | --- |
| Grid | itemClick | Fired when an item of `items` is tapped, not for disabled items | `(item: GridItemType, index: number, event: MouseEvent)` |
| GridItem | click | Fired when the item is tapped, not when disabled | `(event: MouseEvent)` |

### Slots

| Component | Slot | Description |
| --- | --- | --- |
| Row | default | Row content, usually several `Col`s |
| Col | default | Column content |
| Grid | default | Several `GridItem`s |
| Grid | icon | Custom icon of the `items` entries, receives `{ item, index }` |
| Grid | title | Custom title of the `items` entries, receives `{ item, index }` |
| GridItem | default | Replaces the whole content of the item |
| GridItem | icon | Icon, wins over the `icon` prop |
| GridItem | title | Title, wins over the `title` prop |

## Design Token

| Token | Description | Default |
| --- | --- | --- |
| `--am-row-gutter-x` | Horizontal gutter, written by the `gutter` prop; `Col` computes its left and right padding from it | `0px` |
| `--am-grid-columns` | Number of columns, written by the `columns` prop | `4` |
| `--am-grid-background` | Background of the items | `var(--am-color-bg-container)` |
| `--am-grid-color` | Text color | `var(--am-color-text)` |
| `--am-grid-font-size` | Font size of the title | `var(--am-font-size-sm)` |
| `--am-grid-icon-size` | Icon size, written by the `iconSize` prop | `28px` |
| `--am-grid-icon-color` | Icon color | `currentcolor` |
| `--am-grid-item-padding` | Padding of the items | `var(--am-padding) var(--am-padding-xs)` |
| `--am-grid-item-gap` | Gap between the icon and the title | `var(--am-padding-xs)` |
| `--am-grid-item-radius` | Border radius of the items | `0px` |
| `--am-grid-border-color` | Hairline color | `var(--am-color-split)` |
| `--am-grid-badge-color` | Badge background | `var(--am-color-error)` |

## Differences from PC

- Responsive breakpoints are not supported: `Col` has no `xs` / `sm` / `md` / `lg` / `xl` / `xxl` props, and `gutter` / `align` / `justify` do not accept breakpoint objects. Mobile viewports have a single width range; use CSS media queries when you need to adapt to tablets.
- `Grid.useBreakpoint` is not provided.
- `gutter` additionally supports CSS lengths as strings (e.g. `'1rem'`).
- The vertical gutter is implemented with `row-gap`, so no negative margin is needed.
- Adds the mobile-only `Grid` / `GridItem` entry grid components, which have no PC counterpart.
