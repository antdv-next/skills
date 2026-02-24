---
title: Dropdown
subtitle: 下拉菜单
description: 向下弹出的列表。
---

## 何时使用 
当页面上的操作命令过多时，用此组件可以收纳操作元素。点击或移入触点，会出现一个下拉菜单。可在列表中进行选择，并执行相应的命令。

- 用于收罗一组命令操作。
- Select 用于选择，而 Dropdown 是命令集合。

## Demos

| Demo | Path |
| --- | --- |
| 基本 | demo/basic.md |
| 额外节点 | demo/extra.md |
| 弹出位置 | demo/placement.md |
| 箭头 | demo/arrow.md |
| 其他元素 | demo/item.md |
| 箭头指向 | demo/arrow-center.md |
| 触发方式 | demo/trigger.md |
| 触发事件 | demo/event.md |
| 带下拉框的按钮 | demo/dropdown-button.md |
| 扩展菜单 | demo/custom-dropdown.md |
| 多级菜单 | demo/sub-menu.md |
| 菜单隐藏方式 | demo/overlay-open.md |
| 右键菜单 | demo/context-menu.md |
| 加载中状态 | demo/loading.md |
| 菜单可选选择 | demo/selectable.md |
| 自定义语义结构的样式和类 | demo/style-class.md |

## API

通用属性参考：[通用属性](../../docs/vue/common-props.md)

### 属性 
| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| classes | 用于自定义 Dropdown 组件内部各语义化结构的 class，支持对象或函数 | DropdownClassNamesType | - | - |
| styles | 用于自定义 Dropdown 组件内部各语义化结构的行内 style，支持对象或函数 | DropdownStylesType | - | - |
| menu | 菜单配置项 | MenuProps & &#123; activeKey?: VcMenuProps['activeKey'], onClick?: MenuEmits['click'] &#125; | - | - |
| autoFocus | 打开后自动聚焦首个菜单项 | boolean | - | - |
| arrow | 下拉框箭头是否显示，可配置 `pointAtCenter` | boolean \| DropdownArrowOptions | false | - |
| trigger | 触发下拉的行为，移动端不支持 hover | ('click' \| 'hover' \| 'contextmenu')[] | ['hover'] | - |
| popupRender | 自定义弹出框内容 | (menu: VueNode) =&gt; VueNode | - | - |
| open | 菜单是否显示 | boolean | - | - |
| disabled | 菜单是否禁用 | boolean | - | - |
| destroyOnHidden | 关闭后是否销毁 Dropdown | boolean | false | - |
| align | 对齐配置 | AlignType | - | - |
| getPopupContainer | 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。[示例](https://codepen.io/afc163/pen/zEjNOy?editors=0010) | (triggerNode: HTMLElement) =&gt; HTMLElement | () =&gt; document.body | - |
| prefixCls | 自定义前缀类名 | string | - | - |
| transitionName | 动画名称 | string | - | - |
| placement | 菜单弹出位置：`bottom` `bottomLeft` `bottomRight` `top` `topLeft` `topRight` | Placement | `bottomLeft` | - |
| forceRender | 强制渲染下拉菜单 | boolean | - | - |
| mouseEnterDelay | 鼠标移入后显示延时，单位秒 | number | 0.15 | - |
| mouseLeaveDelay | 鼠标移出后隐藏延时，单位秒 | number | 0.1 | - |
| openClassName | 菜单显示时附加在触发元素上的 class | string | - | - |
| autoAdjustOverflow | 下拉框被遮挡时自动调整位置 | boolean \| AdjustOverflow | true | - |

### 事件 
| 事件 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| openChange | 菜单显示状态改变时调用，点击菜单按钮导致的消失不会触发 | (open: boolean, info: &#123; source: 'trigger' \| 'menu' &#125;) =&gt; void | - |
| menuClick | 点击菜单项的回调 | MenuEmits['click'] | - |

### 插槽 
| 插槽          | 说明         | 类型 | 版本 |
|-------------|------------| --- | --- |
| popupRender | 自定义弹出框内容   | (menu: VueNode) =&gt; any | - |
| labelRender | 自定义label内容 | (item: Item) =&gt; any | - |

Dropdown 会透传 Menu 的插槽（例如 `labelRender`）。

## 注意 
请确保 `Dropdown` 的子元素能接受 `mouseenter`、`mouseleave`、`focus`、`click` 事件。

## 语义化 DOM 
| _semantic | demo/_semantic.md |

## FAQ

### Dropdown 在水平方向超出屏幕时会被挤压该怎么办？ 
你可以通过 `width: max-content` 来解决这个问题，参考 [#43025](https://github.com/ant-design/ant-design/issues/43025#issuecomment-1594394135)。
