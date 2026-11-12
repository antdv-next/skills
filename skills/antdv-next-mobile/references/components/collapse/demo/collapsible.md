# Collapsible trigger area

`collapsible` controls the collapsible trigger area: with `header` only clicking the title text triggers, with `icon` only clicking the icon triggers, and `disabled` disables the panel.

## Source

```vue
<script setup lang="ts">
import type { CollapseItemType } from '@antdv-next/mobile'

const items: CollapseItemType[] = [
  { key: 'header', label: 'Only this text expands it', collapsible: 'header', content: 'The blank area on the right of the title does not expand it.' },
  { key: 'icon', label: 'Only the arrow expands it', collapsible: 'icon', content: 'Useful when the header contains other clickable content.' },
  { key: 'disabled', label: 'Disabled panel', collapsible: 'disabled', content: 'Never shown.' },
]
</script>

<template>
  <am-collapse :items="items" />
</template>
```
