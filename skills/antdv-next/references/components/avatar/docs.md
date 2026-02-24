---
title: Avatar
subtitle: 头像
description: 用来代表用户或事物，支持图片、图标或字符展示。
---

## 何时使用 
## Demos

| Demo | Path |
| --- | --- |
| 基础用法 | demo/basic.md |
| 类型 | demo/type.md |
| 自动调整字符大小 | demo/dynamic.md |
| 带徽标的头像 | demo/badge.md |
| Avatar.Group | demo/group.md |
| 响应式尺寸 | demo/responsive.md |

## API

### Avatar

#### 属性 
通用属性参考：[通用属性](../../docs/vue/common-props.md)

| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- |  |
| shape | 指定头像的形状 | `circle` \| `square` | `circle` |  |
| size | 设置头像的大小 | number \| `large` \| `medium` \| `small` \| `{ xs: number, sm: number, ... }` | `medium` | - |
| gap | 字符类型距离左右两侧边界单位像素 | number | 4 | - |
| src | 图片类头像的资源地址或者图片元素 | VueNode | - | - |
| srcSet | 设置图片类头像响应式资源地址 | string | - | - |
| draggable | 图片是否允许拖动 | boolean \| `'true'` \| `'false'` | true |  |
| icon | 设置头像的自定义图标 | VueNode | - | - |
| alt | 图像无法显示时的替代文本 | string | - | - |
| crossOrigin | CORS 属性设置 | '' \| 'anonymous' \| 'use-credentials' | - | - |
| onError | 图片加载失败的事件，返回 false 会关闭组件默认的 fallback 行为 | () =&gt; boolean | - | - |

#### 事件 
| 事件 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| click | - | (e: MouseEvent) =&gt; void | - |

### 插槽 
| 插槽 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| icon | 设置头像的自定义图标 | () =&gt; any | - |
| src | 图片类头像的资源地址或者图片元素 | () =&gt; any | - |

### AvatarGroup

#### 属性 
| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| prefixCls | - | string | - | - |
| max | - | &#123;     count?: number     style?: CSSProperties     popover?: PopoverProps   &#125; | - | - |
| size | 设置头像的大小 | AvatarSize | `default` | - |
| shape | 指定头像的形状 | 'circle' \| 'square' | `circle` | - |
