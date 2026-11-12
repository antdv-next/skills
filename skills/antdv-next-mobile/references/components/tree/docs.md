---
title: Tree
description: A multi-level structure list with expand, select, check and async loading.
---

## When To Use

- Folders, organization charts, categories, regions and other hierarchical data that should show the whole hierarchy and be expanded / collapsed.
- When nodes have to be selected inside the hierarchy, or a batch of nodes checked with checkboxes (parents and children linked).
- To pick a single value level by level, use [Cascader](../cascader/docs.md) instead.

The API is aligned with `Tree` of Antdv Next: `treeData`, `fieldNames`, `expandedKeys` / `selectedKeys` / `checkedKeys` (all with `v-model`), `checkable`, `checkStrictly`, `loadData`, `showLine`, `titleRender`, `scrollTo` ... keep the same names, types and semantics. On mobile the whole row is the touch target, rows are at least 40px tall and large data is rendered through virtual scrolling.

## Examples

| Demo | Path |
| --- | --- |
| Basic | demo/basic.md |
| Checkable | demo/checkable.md |
| Controlled | demo/controlled.md |
| Load data asynchronously | demo/async.md |
| Lines and custom icons | demo/line.md |
| Searchable | demo/search.md |
| Big data / virtual scroll | demo/virtual.md |

## API

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| treeData | The nodes, see [TreeDataNode](#tree-data-node). `key` must be unique in the whole tree | `TreeDataNode[]` | - |
| fieldNames | Custom field names of `title`, `key` and `children` | `{ title?: string, key?: string, children?: string }` | `{ title: 'title', key: 'key', children: 'children' }` |
| expandedKeys (v-model) | (Controlled) expanded nodes | `(string \| number)[]` | - |
| defaultExpandedKeys | Nodes expanded by default | `(string \| number)[]` | `[]` |
| defaultExpandAll | Expand every node by default (on init only) | `boolean` | `false` |
| defaultExpandParent | Expand the parents of `expandedKeys` / `defaultExpandedKeys` on init | `boolean` | `true` |
| autoExpandParent | Expand the parents whenever the controlled `expandedKeys` change | `boolean` | `false` |
| selectedKeys (v-model) | (Controlled) selected nodes, more than one needs `multiple` | `(string \| number)[]` | - |
| defaultSelectedKeys | Nodes selected by default | `(string \| number)[]` | `[]` |
| checkedKeys (v-model) | (Controlled) checked nodes. With linked parents and children the key of a parent checks all its children and vice versa; with `checkStrictly` it also accepts `{ checked, halfChecked }` | `(string \| number)[] \| { checked: (string \| number)[], halfChecked: (string \| number)[] }` | - |
| defaultCheckedKeys | Nodes checked by default | `(string \| number)[]` | `[]` |
| checkable | Show a checkbox in front of every node | `boolean` | `false` |
| checkStrictly | Parents and children are checked independently | `boolean` | `false` |
| selectable | Whether nodes can be selected | `boolean` | `true` |
| multiple | Allow selecting several nodes | `boolean` | `false` |
| disabled | Disable the whole tree (it can still be expanded / collapsed) | `boolean` | `false` |
| blockNode | The node content fills the row, so the whole row is the touch target | `boolean` | `true` |
| showIcon | Whether to render the icon (`icon`) in front of the title | `boolean` | `false` |
| showLine | Show guide lines. `showLeafIcon: true` renders a file icon in front of leaves, a custom icon is accepted too | `boolean \| { showLeafIcon: boolean \| VueNode \| ((props: TreeNodeAttribute) => VueNode) }` | `false` |
| icon | Icon in front of the title, needs `showIcon`; the same-named slot wins and `icon` of the node data wins over both | `VueNode \| ((props: TreeNodeAttribute) => VueNode)` | - |
| switcherIcon | Custom expand / collapse icon (rotated when collapsed); the same-named slot wins | `VueNode \| ((props: TreeNodeAttribute) => VueNode)` | arrow icon |
| switcherLoadingIcon | Custom icon of a node that is loading; the same-named slot wins | `VueNode` | spinner |
| titleRender | Custom title; the `titleRender` / `title` slots win | `(node: TreeDataNode) => VueNode` | - |
| loadData | Load children asynchronously: called when a non-leaf node without children is expanded; return a Promise and write the children into `treeData` | `(node: TreeEventDataNode) => Promise<any> \| void` | - |
| loadedKeys | (Controlled) loaded nodes, works with `loadData` | `(string \| number)[]` | `[]` |
| filterTreeNode | Nodes for which it returns `true` are highlighted (`filterAntTreeNode` in the PC docs) | `(node: TreeEventDataNode) => boolean` | - |
| expandAction | Whether a tap on the node content also expands / collapses it (a `DirectoryTree` prop on PC, only `click` on mobile) | `false \| 'click'` | `false` |
| virtual | Virtual scrolling: only the rows near the visible area are mounted through [VirtualList](../virtual-list/docs.md), needs `height`; `false` renders every row | `boolean` | `true` |
| height | Height of the scroll container. Without it the tree grows with its content and does not scroll by itself | `number \| string` | - |
| itemHeight | Min height of a row (px), also the estimate used before a row is measured | `number` | `44` (`--am-tree-item-height`) |
| listHeight | Alias of `height`, the name used by Select / Cascader; `height` wins when both are set | `number \| string` | - |
| listItemHeight | Alias of `itemHeight`, the name used by Select / Cascader; `itemHeight` wins when both are set | `number` | - |
| rootClass | Class name of the root element | `string` | - |
| classes | Semantic class names | `Record<'root' \| 'item' \| 'itemIcon' \| 'itemTitle' \| 'itemSwitcher', string>` | - |
| styles | Semantic styles | `Record<'root' \| 'item' \| 'itemIcon' \| 'itemTitle' \| 'itemSwitcher', CSSProperties>` | - |

### TreeDataNode

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| key | Unique id of the node, used with (default)ExpandedKeys / (default)CheckedKeys / (default)SelectedKeys | `string \| number` | position of the node (e.g. `0-0-1`) |
| title | Title, a function receives the node data | `VueNode \| ((node: TreeDataNode) => VueNode)` | `'---'` |
| children | Child nodes | `TreeDataNode[]` | - |
| disabled | Disable the node (no select, no check, it can still be expanded) | `boolean` | `false` |
| disableCheckbox | Disable the checkbox | `boolean` | `false` |
| selectable | Whether the node can be selected, wins over `selectable` of the Tree | `boolean` | - |
| checkable | When the Tree is `checkable`, `false` hides the checkbox of this node | `boolean` | - |
| isLeaf | Whether it is a leaf (with `loadData`): `true` never loads, `false` forces a parent node | `boolean` | - |
| icon | Icon of this node, needs `showIcon` | `VueNode \| ((props: TreeNodeAttribute) => VueNode)` | - |
| switcherIcon | Expand icon of this node | `VueNode \| ((props: TreeNodeAttribute) => VueNode)` | - |
| class | Class name of the row (`className` of PC is accepted too) | `string` | - |
| style | Style of the row | `CSSProperties` | - |

`TreeNodeAttribute` (argument of `icon` / `switcherIcon`): `{ eventKey, expanded, selected, checked, halfChecked, loaded, loading, isLeaf, disabled, disableCheckbox, checkable, selectable, pos, level, data }`.

`TreeEventDataNode` (the `node` of every event): the node data plus `{ key, expanded, selected, checked, halfChecked, loaded, loading, pos }`.

### Events

| Event | Description | Type |
| --- | --- | --- |
| expand | A node was expanded / collapsed | `(expandedKeys, { expanded: boolean, node, nativeEvent }) => void` |
| select | A node was selected / deselected by a tap | `(selectedKeys, { event: 'select', selected: boolean, selectedNodes, node, nativeEvent }) => void` |
| check | A checkbox was toggled. With `checkStrictly` the first argument is `{ checked, halfChecked }` | `(checkedKeys, { event: 'check', checked: boolean, checkedNodes, node, halfCheckedKeys, checkedNodesPositions, nativeEvent }) => void` |
| load | A node finished loading | `(loadedKeys, { event: 'load', node }) => void` |
| click | The content of a node was tapped | `(event: MouseEvent, node: TreeEventDataNode) => void` |
| scroll | The tree scrolled (with `height`) | `(event: Event) => void` |
| update:expandedKeys | The expanded nodes changed | `(keys: (string \| number)[]) => void` |
| update:selectedKeys | The selected nodes changed | `(keys: (string \| number)[]) => void` |
| update:checkedKeys | The checked nodes changed, always the list of checked keys (also with `checkStrictly`, same as PC) | `(keys: (string \| number)[]) => void` |

### Slots

| Slot | Description | Props |
| --- | --- | --- |
| title | Custom title, receives the node data (mobile alias of the `titleRender` slot; `title` wins when both exist) | `TreeDataNode` |
| titleRender | Custom title, same name as on PC | `TreeDataNode` |
| icon | Icon in front of the title, needs `showIcon` | `TreeNodeAttribute` |
| switcherIcon | Expand / collapse icon | `TreeNodeAttribute` |
| switcherLoadingIcon | Icon of a node that is loading | - |

### Methods

| Method | Description | Type |
| --- | --- | --- |
| scrollTo | Scroll to a node or to a scroll offset, needs `height`. The node has to be visible (its parents expanded); `autoExpand` expands the target node first in uncontrolled mode | `(target: number \| { key, align?: 'top' \| 'bottom' \| 'center' \| 'auto', offset?: number, autoExpand?: boolean }) => void` |
| nativeElement | The scroll container (root element) | `HTMLElement` |

## Design Token

| Variable | Description | Default |
| --- | --- | --- |
| `--am-tree-item-height` | Min height of a row, written by the `itemHeight` prop | `44px` |
| `--am-tree-indent-size` | Indentation of one level | `24px` |
| `--am-tree-switcher-size` | Width of the touch area of the expand icon | `40px` |
| `--am-tree-switcher-icon-size` | Size of the expand icon | `12px` |
| `--am-tree-switcher-color` | Color of the expand icon | `var(--am-color-text-tertiary)` |
| `--am-tree-padding-inline` | Horizontal padding of the tree | `0px` |
| `--am-tree-font-size` | Font size | `var(--am-font-size-lg)` |
| `--am-tree-color` | Text color | `var(--am-color-text)` |
| `--am-tree-background` | Background color | `var(--am-color-bg-container)` |
| `--am-tree-icon-color` | Color of the icon in front of the title | `var(--am-color-text-secondary)` |
| `--am-tree-title-padding-inline` | Horizontal padding of the node content | `var(--am-padding-xs)` |
| `--am-tree-node-radius` | Border radius of the node content | `var(--am-border-radius)` |
| `--am-tree-node-active-background` | Background while pressed | `var(--am-color-fill-tertiary)` |
| `--am-tree-node-selected-background` | Background of a selected node | `var(--am-color-primary-bg)` |
| `--am-tree-node-selected-color` | Text color of a selected node | `var(--am-color-text)` |
| `--am-tree-line-color` | Color of the guide lines | `var(--am-color-border)` |
| `--am-tree-highlight-color` | Color of the nodes matched by `filterTreeNode` and of the loading spinner | `var(--am-color-primary)` |
| `--am-tree-disabled-color` | Text color of a disabled node | `var(--am-color-text-disabled)` |
| `--am-tree-level` | Level of the row (from 0), written on every row by the component and used for the indentation | - |

For the checkbox variables see [Checkbox](../checkbox/docs.md).

## Differences from PC

- **No `@v-c/tree` dependency**: re-implemented as SFCs, the check conduction algorithm (`conductCheck`) matches PC; only `treeData` is supported, nodes can not be declared with `<TreeNode>` children and there is no `Tree.TreeNode` / `Tree.useTree`.
- **No drag and drop**: no `draggable`, `allowDrop`, `draggableIcon` slot or `dragStart` / `dragEnter` / `dragOver` / `dragLeave` / `dragEnd` / `drop` events.
- **PC-only interactions are dropped**: no `rightClick` / `contextmenu`, `doubleClick`, `mouseenter` / `mouseleave`, `focus` / `blur`, `keydown`, `activeChange` events and no keyboard navigation (`activeKey`, `tabindex`); there is no hover state or `title` tooltip on the title, press feedback uses `:active`.
- **No `DirectoryTree`**: a directory tree can be composed from `expandAction="click"`, `multiple`, `showIcon` + the `icon` slot; `expandAction` does not support `doubleClick`.
- `blockNode` defaults to `true` (`false` on PC): the node content fills the row and the whole row is the touch target. Rows are at least 44px tall, the touch area of the expand icon is 40px wide and as tall as the row.
- The checkbox is the [Checkbox](../checkbox/docs.md) component itself, its touch area is as tall as the row.
- Expanding / collapsing has no height animation (PC uses the collapse motion): the rows are rendered through a virtual list and appear instantly; only the arrow rotation is animated and there is no `motion` prop.
- Controlled props are strictly controlled: once `expandedKeys` / `selectedKeys` / `checkedKeys` are passed, the UI only follows the props (PC updates its inner state first). Use `v-model` or write the value back in the events.
- The highlight filter prop is named `filterTreeNode` (the PC docs say `filterAntTreeNode`, the one that actually works there is `filterTreeNode` of `@v-c/tree`).
- Virtual scrolling keeps the PC names `virtual` / `height` / `itemHeight` and additionally accepts the aliases `listHeight` / `listItemHeight` used by Select / Cascader; `height` also accepts a string (e.g. `'50vh'`). Rows are measured: `itemHeight` is the min height and the estimate, so titles may wrap. Horizontal scrolling (`scrollWidth`) is not supported.
- `align` of `scrollTo` additionally supports `center`; without `height` the tree has no scroll container of its own and `scrollTo` does nothing.
- New `title` slot (alias of the `titleRender` slot); the argument of `icon` / `switcherIcon` is the trimmed `TreeNodeAttribute`, which also carries `level` and `data`.
- Node data accepts `class` (preferred) as well as `className` of PC.
- The function form of `classes` / `styles` and the deprecated `rootStyle` are not supported; ConfigProvider has no component-level config for `tree`, only `componentDisabled` is followed.
- The type `TreeDataNode` of `treeData` allows any custom field; when re-assigning a `ref<TreeDataNode[]>` makes TypeScript report an excessively deep type instantiation, use `shallowRef` instead (it is also faster with large data).
