# Show while pressed

The beam layer is a plain element inside the container (`.am-border-beam`), so CSS decides when it shows. Here it is hidden and paused by default and revealed while the card is pressed.

## Source

```vue
<template>
  <am-border-beam>
    <am-card class="press-card" title="Press and hold" clickable>
      The border beam appears while this card is pressed.
    </am-card>
  </am-border-beam>
</template>

<style scoped>
.press-card :deep(.am-border-beam) {
  opacity: 0;
  transition: opacity var(--am-motion-duration-mid);
}

.press-card :deep(.am-border-beam)::before {
  animation-play-state: paused;
}

.press-card:active :deep(.am-border-beam) {
  opacity: 1;
}

.press-card:active :deep(.am-border-beam)::before {
  animation-play-state: running;
}
</style>
```
