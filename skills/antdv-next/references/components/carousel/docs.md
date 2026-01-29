---
title: Carousel
subtitle: 走马灯
description: 一组轮播的区域。
---

## 何时使用 
- 当有一组平级的内容。
- 当内容空间不足时，可以用走马灯的形式进行收纳，进行轮播展现。
- 常用于一组图片或卡片轮播。

## Demos

| Demo | Path |
| --- | --- |
| 基本 | demo/basic.md |
| 位置 | demo/placement.md |
| 自动切换 | demo/autoplay.md |
| 渐显 | demo/fade.md |
| 切换箭头 | demo/arrows.md |
| 进度条 | demo/dot-duration.md |

## API

通用属性参考：[通用属性](../../docs/vue/common-props.md)

### 属性 
| 属性 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| effect | 动画效果函数 | CarouselEffect | `scrollx` | - |
| id | - | string | - | - |
| slickGoTo | - | number | - | - |
| dotPosition | 面板指示点位置，可选 `top` `bottom` `left` `right` `start` `end`，请使用 `dotPlacement` 替换 | DotPlacement \| 'left' \| 'right' | `bottom` | - |
| dotPlacement | 面板指示点位置，可选 `top` `bottom` `start` `end` | DotPlacement | `bottom` | - |
| dots | 是否显示面板指示点，如果为 `object` 则可以指定 `dotsClass` | boolean \| &#123; class?: string &#125; | true | - |
| waitForAnimate | 是否等待切换动画 | boolean | false | - |
| autoplay | 是否自动切换，如果为 object 可以指定 `dotDuration` 来展示指示点进度条 | boolean \| &#123; dotDuration?: boolean &#125; | false | - |
| prevArrow | - | VueNode | - | - |
| nextArrow | - | VueNode | - | - |

### 事件 
| 事件 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| init | - | NonNullable&lt;Settings['onInit']&gt; | - |
| reInit | - | NonNullable&lt;Settings['onReInit']&gt; | - |
| edge | - | NonNullable&lt;Settings['onEdge']&gt; | - |
| swipe | - | NonNullable&lt;Settings['onSwipe']&gt; | - |
| lazyLoad | - | NonNullable&lt;Settings['onLazyLoad']&gt; | - |
| lazyLoadError | - | NonNullable&lt;Settings['onLazyLoadError']&gt; | - |

### 插槽 
| 插槽 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| prevArrow | - | () =&gt; any | - |
| nextArrow | - | () =&gt; any | - |

### 方法 
| 方法 | 说明 | 类型 | 版本 |
| --- | --- | --- | --- |
| goTo | - | (slide: number, dontAnimate?: boolean) =&gt; void | - |
| next | - | () =&gt; void | - |
| prev | - | () =&gt; void | - |
| autoPlay | - | (playType?: 'update' \| 'leave' \| 'blur') =&gt; void | - |
| innerSlider | - | any | - |
