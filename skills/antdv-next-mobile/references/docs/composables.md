---
title: Composables
---

Every composable used inside the library (the equivalent of Hooks in React) is exported and can be used directly in your application code. They can all be imported on demand, are safe to call during server-side rendering, and clean up automatically when the owning component is unmounted or the `effectScope` is stopped.

```ts
import { useCountDown, useLoadMore, useRequest } from '@antdv-next/mobile'
```

## Overview

| Category | Function |
| --- | --- |
| State | `useBoolean`, `useToggle`, `useControlled` |
| Functions | `useDebounceFn`, `useThrottleFn` |
| Timers | `useCountDown`, `useCountTo`, `useTimeoutFn`, `useIntervalFn`, `useRafFn` |
| Requests | `useRequest`, `useLoadMore` |
| Elements & viewport | `useRect`, `useElementSize`, `useWindowSize`, `useScrollParent`, `useInViewport`, `useVirtualRange` |
| Gestures & events | `useTouch`, `useSwipe`, `useLongPress`, `useDraggable`, `useClickAway`, `useEventListener`, `useLockScroll` |
| Device & environment | `useSafeArea`, `useKeyboard`, `usePageVisibility`, `useOnline`, `useMediaQuery`, `usePreferredDark` |
| Browser capabilities | `useClipboard`, `useStorage` |
| Library context | `useConfig`, `useLocale`, `useToken`, `useSize`, `useDisabled`, `useFormItemInputContext` |

## State

### useBoolean

Manages a boolean value. Handy for popup visibility and loading flags.

```ts
const { state: open, setTrue: show, setFalse: hide, toggle } = useBoolean()
```

### useToggle

Toggles between two values, `false` / `true` by default.

```ts
const [open, toggle] = useToggle()
const [mode, toggleMode] = useToggle('light', 'dark')

toggle() // invert
toggle(false) // set a specific value
```

### useControlled

Merges controlled and uncontrolled state. Use it when a custom component supports `v-model`; every component in the library is built on it.

```ts
const props = withDefaults(defineProps<{ open?: boolean }>(), { open: undefined })
const emit = defineEmits<{ 'update:open': [open: boolean] }>()

const [open, setOpen] = useControlled(props, 'open', {
  defaultValue: false,
  onChange: value => emit('update:open', value),
})
```

> Boolean props must declare `undefined` as their default. Otherwise Vue casts an absent boolean prop to `false` and the component is always controlled.

## Functions

### useDebounceFn / useThrottleFn

Debounce and throttle. The returned function has `cancel()` and `flush()`, and is cancelled automatically when the component is unmounted.

```ts
const search = useDebounceFn((keyword: string) => fetchList(keyword), 300)
const onScroll = useThrottleFn(() => report(), 200)
```

| Parameter | Description | Default |
| --- | --- | --- |
| fn | The function to run | - |
| wait | Wait time (ms) | debounce `300`, throttle `200` |
| options.leading | Whether to invoke on the leading edge | debounce `false`, throttle `true` |
| options.trailing | Whether to invoke on the trailing edge | `true` |

## Timers

### useCountDown

A countdown computed from real time, so it does not fall behind when the page goes to the background and comes back. Commonly used for SMS verification codes and flash sales.

```vue
<script setup lang="ts">
import { useCountDown } from '@antdv-next/mobile'

const { current, isActive, start, reset } = useCountDown({
  time: 60 * 1000,
  onFinish: () => reset(),
})
</script>

<template>
  <am-button :disabled="isActive" @click="start">
    {{ isActive ? `Resend in ${current.seconds}s` : 'Get code' }}
  </am-button>
</template>
```

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| time | Countdown duration (ms) | `number` | - |
| millisecond | Whether to update every frame (millisecond precision) | `boolean` | `false` |
| autoStart | Whether to start immediately | `boolean` | `false` |
| onChange | Triggered when the time changes | `(current: CountDownTime) => void` | - |
| onFinish | Triggered when the countdown ends | `() => void` | - |

Returns `current` (with `total`, `days`, `hours`, `minutes`, `seconds`, `milliseconds`), `isActive`, `start()`, `pause()`, `reset(time?)`.

### useCountTo

Rolling number animation: goes from `from` to the target on mount, and from the current number to the new one whenever the target changes. `animation` of [Statistic](../components/statistic/docs.md) is built on it.

```vue
<script setup lang="ts">
import { useCountTo } from '@antdv-next/mobile'
import { ref } from 'vue'

const score = ref(98)
const { current } = useCountTo(score, { duration: 800 })
</script>

<template>
  <span>{{ Math.round(current) }}</span>
</template>
```

| Option | Description | Type | Default |
| --- | --- | --- | --- |
| duration | Animation time in ms | `MaybeRefOrGetter<number>` | `1000` |
| from | Start value of the first animation | `number` | `0` |
| easing | Easing function, receives the progress from 0 to 1 | `(progress: number) => number` | ease-out |
| immediate | Whether to play on mount | `boolean` | `true` |
| disabled | Turn the animation off and follow the target | `MaybeRefOrGetter<boolean>` | `false` |
| onFinish | Triggered when the target was reached | `() => void` | - |

Returns `current`, `isActive`, `start(from?)` (replay) and `stop()` (jump to the target). With "reduce motion" enabled in the system the animation does not play.

### useTimeoutFn / useIntervalFn / useRafFn

`setTimeout`, `setInterval` and `requestAnimationFrame` with start / stop controls, cleared automatically on unmount.

```ts
const { isActive, start, stop } = useIntervalFn(() => poll(), 5000)
const timeout = useTimeoutFn(() => close(), 3000, { immediate: false })
```

## Requests

### useRequest

Manages the `data`, `loading` and `error` of an async request, and only lets the latest call update the state to avoid race conditions.

```ts
const { data, loading, error, run, refresh } = useRequest(
  (id: number) => fetchUser(id),
  { defaultParams: [1] },
)
```

| Parameter | Description | Type | Default |
| --- | --- | --- | --- |
| manual | Do not run automatically; call `run` manually | `boolean` | `false` |
| defaultParams | Parameters used for the automatic run | `P` | `[]` |
| initialData | Initial data | `T` | - |
| loadingDelay | Delay in ms before showing loading, to avoid flicker | `number` | - |
| onSuccess / onError / onFinally | Callbacks | `Function` | - |

Returns `data`, `error`, `loading`, `params`, `run(...params)`, `runAsync(...params)`, `refresh()`, `mutate(data)`, `cancel()`.

### useLoadMore

Paginated list state, designed to work with `InfiniteScroll` and `PullToRefresh`.

```vue
<script setup lang="ts">
import { useLoadMore } from '@antdv-next/mobile'

const { list, loading, refreshing, error, finished, loadMore, refresh } = useLoadMore(
  ({ page, pageSize }) => fetchOrders({ page, pageSize }), // returns { list, total }
  { pageSize: 20 },
)
</script>

<template>
  <am-pull-to-refresh v-model:refreshing="refreshing" @refresh="refresh">
    <am-infinite-scroll v-model:loading="loading" v-model:error="error" :finished="finished" @load="loadMore">
      <am-list>
        <am-list-item v-for="item in list" :key="item.id" :title="item.name" />
      </am-list>
    </am-infinite-scroll>
  </am-pull-to-refresh>
</template>
```

The service function returns `{ list, total?, hasMore? }`. Whether everything has been loaded is decided by `hasMore`, then `total`, then "this page is shorter than a full page", in that order.

Returns `list`, `page`, `total`, `loading`, `refreshing`, `error`, `finished`, `empty`, `loadMore()`, `refresh()`, `reset()`.

## Elements & viewport

### useRect / useElementSize / useWindowSize

```ts
const el = ref<HTMLElement>()

const { width, height, top, update } = useRect(el) // measured on mount, update() measures again
const size = useElementSize(el) // tracked continuously with ResizeObserver
const viewport = useWindowSize() // follows resize and orientation changes
```

### useScrollParent

Gets the nearest scrollable ancestor of an element, or `window` when there is none.

### useInViewport

Whether an element has entered the viewport. Useful for lazy loading and impression tracking.

```ts
const { inViewport } = useInViewport(el, { threshold: 0.5, once: true })
```

### useVirtualRange

The window calculation behind virtual scrolling; `VirtualList`, `PickerView` and `Calendar` are all built on it. Use it when you own the scrolling yourself; for ordinary lists just use the [VirtualList](../components/virtual-list/docs.md) component.

```ts
const range = useVirtualRange({
  count: () => list.value.length,
  size: () => 44, // or () => (index) => heights[index]
  scrollOffset: () => scrollTop.value,
  viewportSize: () => 600,
})
// range.start / range.end / range.totalSize / range.offsetBefore
```

## Gestures & events

### useTouch

Records the displacement and direction of a single-finger gesture and whether it is a tap. It is the foundation of every gesture component.

```ts
const touch = useTouch()

function onTouchStart(event: TouchEvent) {
  touch.start(event)
}
function onTouchMove(event: TouchEvent) {
  touch.move(event)
  if (touch.isHorizontal())
    translate.value = touch.deltaX.value
}
```

### useSwipe

```ts
const { direction, deltaX, isSwiping } = useSwipe(el, {
  threshold: 50,
  onSwipeEnd: (event, direction) => direction === 'left' && next(),
})
```

### useLongPress

```ts
useLongPress(el, () => showMenu(), { delay: 500 })
```

### useDraggable

Lets an element be dragged inside the viewport (`position: fixed`) or its offset parent (`position: absolute`). The drag of [Draggable](../components/draggable/docs.md) and [FloatButton](../components/float-button/docs.md) is built on it.

```vue
<script setup lang="ts">
import { useDraggable } from '@antdv-next/mobile'
import { ref } from 'vue'

const el = ref<HTMLElement>()
const { style, dragging, onTouchStart, onTouchMove, onTouchEnd, onMouseDown } = useDraggable(el, {
  magnetic: 'x',
  gap: 12,
  onEnd: offset => console.log(offset),
})
</script>

<template>
  <div
    ref="el"
    class="widget"
    :style="style"
    @touchstart="onTouchStart"
    @touchmove="onTouchMove"
    @touchend="onTouchEnd"
    @touchcancel="onTouchEnd"
    @mousedown="onMouseDown"
  />
</template>
```

The options `disabled`, `axis`, `magnetic`, `gap` and `offset` accept a ref or a getter, next to the `onStart` and `onEnd` callbacks. Returns `position`, `dragging`, `style`, the four event handlers, `consumeClick()` (`true` for the click that follows a drag, to ignore it), `reset()` and `resize()`.

### useClickAway

Triggered when the area outside the target is clicked (or touched). Supports multiple targets and multiple event names.

```ts
useClickAway([triggerRef, panelRef], () => (open.value = false), {
  eventName: ['touchstart', 'mousedown'],
})
```

### useEventListener

Binds on mount and unbinds automatically on unmount. The default target is `window`; an element ref can be passed as well.

```ts
useEventListener('scroll', onScroll, { target: scrollerRef, passive: true })
```

### useLockScroll

Locks page scrolling while keeping scrolling inside the given container. Use it for custom overlays.

```ts
useLockScroll(rootRef, () => open.value)
```

## Device & environment

### useSafeArea

Reads the safe area insets of the notch and the home indicator (in pixels).

```ts
const { top, bottom } = useSafeArea()
```

### useKeyboard

The height of the soft keyboard, based on VisualViewport. It can be used to push a bottom button above the keyboard.

```vue
<script setup lang="ts">
const { height, open } = useKeyboard()
</script>

<template>
  <div class="footer" :style="{ transform: `translateY(-${height}px)` }" />
</template>
```

### usePageVisibility / useOnline

```ts
const visibility = usePageVisibility() // 'visible' | 'hidden'
const online = useOnline()
```

### useMediaQuery / usePreferredDark

Switch the theme to follow the system dark mode:

```vue
<script setup lang="ts">
import { theme, usePreferredDark } from '@antdv-next/mobile'
import { computed } from 'vue'

const isDark = usePreferredDark()
const themeConfig = computed(() => ({
  algorithm: isDark.value ? theme.darkAlgorithm : theme.defaultAlgorithm,
}))
</script>

<template>
  <am-config-provider :theme="themeConfig">
    <App />
  </am-config-provider>
</template>
```

## Browser capabilities

### useClipboard

Copies text, with an automatic fallback in WebViews that do not support the async clipboard.

```ts
const { copy, copied } = useClipboard()
await copy('Invite code 8K2F')
```

### useStorage

A ref persisted to `localStorage` and synced when another tab changes it. Setting it to `null` removes the key.

```ts
const settings = useStorage('app-settings', { dark: false, fontSize: 14 })
settings.value.dark = true
```

## Library context

| Function | Description |
| --- | --- |
| `useConfig()` | Reads the `ConfigProvider` context: `locale`, `direction`, `componentSize`, `componentDisabled`, `theme` |
| `useLocale(name)` | Reads the texts of a component |
| `useToken()` | Reads the current theme: `token`, `isDark`, `cssVar()` |
| `useSize(getter)` | Merges the component's own `size` with the global `componentSize` |
| `useDisabled(getter)` | Merges the component's own `disabled`, the form `disabled` and the global `componentDisabled` |
| `useFormItemInputContext()` | Connects a custom form control to `FormItem` validation: call `onFieldChange()` after the value changes and `onFieldBlur()` on blur |

A custom control that can be placed inside a `FormItem`:

```vue
<script setup lang="ts">
import { useControlled, useDisabled, useFormItemInputContext } from '@antdv-next/mobile'

const props = withDefaults(defineProps<{ value?: number, disabled?: boolean }>(), { disabled: undefined })
const emit = defineEmits<{ 'update:value': [value: number] }>()

const formItem = useFormItemInputContext()
const disabled = useDisabled(() => props.disabled)
const [value, setValue] = useControlled(props, 'value', {
  defaultValue: 0,
  onChange: (next) => {
    emit('update:value', next)
    formItem.onFieldChange()
  },
})
</script>
```
