# render-panel

## Source

```vue
<script setup lang="ts">
import { Mentions } from 'antdv-next'

const InternalMentions = Mentions._InternalPanelDoNotUseOrYouWillBeFired

const options = [
  {
    value: 'afc163',
    label: 'afc163',
  },
  {
    value: 'zombieJ',
    label: 'zombieJ',
  },
]
</script>

<template>
  <InternalMentions value="@" :options="options" style="width: 100%;" />
</template>
```
