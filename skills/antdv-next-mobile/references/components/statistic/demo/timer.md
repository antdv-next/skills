# Timer

`Statistic.Timer` supports countdown and count-up. `format` can include units such as days and milliseconds, and `finish` is triggered when the countdown ends.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const start = Date.now()
const deadline = start + 1000 * 60 * 60 * 24 * 2 + 1000 * 30
const short = ref(Date.now() + 10 * 1000)
const finished = ref(false)

function restart() {
  finished.value = false
  short.value = Date.now() + 10 * 1000
}
</script>

<template>
  <am-flex vertical gap="middle">
    <am-flex gap="large" wrap>
      <am-statistic-timer title="Countdown" :value="deadline" />
      <am-statistic-timer title="Milliseconds" :value="deadline" format="HH:mm:ss:SSS" />
    </am-flex>
    <am-statistic-timer title="Until the sale ends" :value="deadline" format="D [d] H [h] m [m] s [s]" />
    <am-flex gap="large" wrap>
      <am-statistic-timer type="countup" title="Count-up" :value="start" format="mm:ss" />
      <am-statistic-timer
        title="10s countdown"
        :value="short"
        format="s.SS [s]"
        :value-style="finished ? { color: 'var(--am-color-error)' } : undefined"
        @finish="finished = true"
      />
    </am-flex>
    <am-button block :disabled="!finished" @click="restart">
      {{ finished ? 'Restart' : 'Counting down...' }}
    </am-button>
  </am-flex>
</template>
```
