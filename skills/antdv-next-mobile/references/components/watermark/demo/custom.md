# Custom configuration

Adjust the rotation angle, gap, font size and color through props. The watermark is redrawn automatically after a change.

## Source

```vue
<script setup lang="ts">
import { reactive } from 'vue'

const state = reactive({
  rotate: -22,
  gap: 60,
  fontSize: 16,
  colored: false,
})
</script>

<template>
  <am-flex vertical gap="middle">
    <am-watermark
      content="Antdv Next"
      :rotate="state.rotate"
      :gap="[state.gap, state.gap]"
      :font="{ fontSize: state.fontSize, color: state.colored ? 'rgba(22, 119, 255, 0.3)' : undefined }"
    >
      <am-typography-paragraph>
        The watermark covers the content with a non-interactive layer, so clicking and scrolling the content below still work.
      </am-typography-paragraph>
      <am-typography-paragraph>
        Change the settings below to see the watermark update in real time.
      </am-typography-paragraph>
      <div style="height: 120px" />
    </am-watermark>
    <am-flex gap="small" wrap>
      <am-button size="small" @click="state.rotate = state.rotate === -22 ? 30 : -22">
        Rotate {{ state.rotate }}°
      </am-button>
      <am-button size="small" @click="state.gap = state.gap === 60 ? 20 : 60">
        Gap {{ state.gap }}
      </am-button>
      <am-button size="small" @click="state.fontSize = state.fontSize === 16 ? 22 : 16">
        Font {{ state.fontSize }}
      </am-button>
      <am-button size="small" @click="state.colored = !state.colored">
        {{ state.colored ? 'Default color' : 'Primary color' }}
      </am-button>
    </am-flex>
  </am-flex>
</template>
```
