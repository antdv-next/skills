---
title: Carousel
description: A set of carousel areas, with swipe gestures, seamless looping and autoplay.
---

## When To Use

- When there is a group of content on the same level that needs to be shown in turn within a limited space, such as home page banners, product galleries or onboarding pages.
- When there is insufficient content space, it can be used to save space in the form of a revolving door, playing in a loop.

The API is aligned with `Carousel` of antdv-next (`autoplay`, `dots`, `dotPlacement`, `infinite`, `effect`, `beforeChange`, `afterChange`, `goTo` / `next` / `prev`), and the gestures are re-implemented for mobile: finger-following swipe, velocity detection, direction lock (a horizontal carousel never blocks the vertical page scroll) and seamless looping. Each direct child of the default slot is one slide; `v-for` and `<template>` fragments are flattened automatically.

## Examples

| Demo | Path |
| --- | --- |
| Basic usage | demo/basic.md |
| Autoplay | demo/autoplay.md |
| Vertical scrolling | demo/vertical.md |
| Fade effect | demo/fade.md |
| Peek adjacent cards | demo/peek.md |
| Custom indicator | demo/indicator.md |
| Manual control | demo/methods.md |

## API

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| autoplay | Whether to switch automatically, the current dot shows the progress when `{ dotDuration: true }` is passed | `boolean \| { dotDuration?: boolean }` | `false` |
| autoplaySpeed | Interval of automatic switching (ms) | `number` | `3000` |
| dots | Whether to show the dots, pass an object to set the class name of the dots container | `boolean \| { class?: string }` | `true` |
| dotPlacement | Position of the dots | `'top' \| 'bottom' \| 'start' \| 'end'` | `'bottom'` |
| dotPosition | Position of the dots, please use `dotPlacement` instead | `'top' \| 'bottom' \| 'start' \| 'end' \| 'left' \| 'right'` | - |
| infinite | Whether to loop seamlessly | `boolean` | `true` |
| speed | Duration of the switching animation (ms) | `number` | `300` |
| initialSlide | Index of the slide shown initially | `number` | `0` |
| vertical | Whether to scroll vertically. When not set it behaves like PC: vertical when `dotPlacement` is `start` / `end` | `boolean` | - |
| draggable | Whether slides can be switched by swipe gestures | `boolean` | `true` |
| allowTouchMove | Temporarily enable / disable gestures (e.g. while an inner element is handling a gesture) | `boolean` | `true` |
| effect | Transition effect | `'scrollx' \| 'fade'` | `'scrollx'` |
| slideSize | Size of each slide as a percentage of the carousel width (height when vertical), adjacent slides peek out when it is less than 100 | `number` | `100` |
| trackOffset | Starting offset of the track, as a percentage of the carousel width | `number` | `0` |
| stuckAtBoundary | In non-infinite mode, whether the first and last slides stick to the edge (ignoring `trackOffset`) | `boolean` | `true` |
| indicator | Custom indicator which replaces the dots, the same-named slot takes precedence | `VueNode \| ((info: { current: number, total: number }) => VueNode)` | - |
| stopPropagation | Whether to stop handled touch events from bubbling (used for nested carousels) | `boolean` | `false` |
| rootClass | Class name of the root node | `string` | - |
| classes | Semantic structure class names | `Record<'root' \| 'track' \| 'slide' \| 'dots' \| 'dot', string>` | - |
| styles | Semantic structure styles | `Record<'root' \| 'track' \| 'slide' \| 'dots' \| 'dot', CSSProperties>` | - |

### Events

| Event | Description | Type |
| --- | --- | --- |
| beforeChange | Triggered before switching | `(current: number, next: number) => void` |
| afterChange | Triggered when the switching animation ends | `(current: number) => void` |

### Slots

| Slot | Description | Params |
| --- | --- | --- |
| default | Carousel content, each direct child is one slide | - |
| indicator | Custom indicator, takes precedence over the `indicator` prop | `{ current: number, total: number }` |

### Methods

| Method | Description | Type |
| --- | --- | --- |
| goTo | Go to the given slide, no animation when `dontAnimate` is `true` | `(slide: number, dontAnimate?: boolean) => void` |
| next | Go to the next slide | `() => void` |
| prev | Go to the previous slide | `() => void` |
| resize | Re-measure the size (called automatically when the container size changes) | `() => void` |

## Design Token

Customize through `theme.components.Carousel` of `ConfigProvider`, or override the CSS variables directly.

| Token | Description | Default |
| --- | --- | --- |
| `--am-carousel-dot-width` | Dot width | `16px` |
| `--am-carousel-dot-height` | Dot height | `3px` |
| `--am-carousel-dot-active-width` | Width of the active dot | `24px` |
| `--am-carousel-dot-gap` | Gap between dots | `4px` |
| `--am-carousel-dot-offset` | Distance between the dots and the edge | `12px` |
| `--am-carousel-dot-color` | Dot color | `var(--am-color-white)` |
| `--am-carousel-dot-opacity` | Opacity of inactive dots | `0.3` |
| `--am-carousel-dot-border-radius` | Dot border radius | `3px` |

## Differences from PC

- It does not depend on `slick`; gestures and animations are re-implemented for mobile. `arrows`, `prevArrow` / `nextArrow`, `waitForAnimate`, `fade` (use `effect="fade"`), `innerSlider`, the `autoPlay()` method and slick events such as `init` / `swipe` / `lazyLoad` are not supported.
- `draggable` defaults to `true` (`false` on PC), `speed` defaults to `300` (`500` on PC).
- Added the `autoplaySpeed`, `slideSize`, `trackOffset`, `stuckAtBoundary`, `allowTouchMove` and `stopPropagation` props, the `indicator` prop / slot and the `resize` method.
- Autoplay pauses while a finger is holding the carousel and while the page is hidden; in non-infinite mode it returns to the first slide after the last one.
- A vertical carousel needs an explicit height.
