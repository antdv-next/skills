# render-panel

## Source

```vue
<script setup lang="ts">
import { Popconfirm } from 'antdv-next'

const InternalPopconfirm = Popconfirm._InternalPanelDoNotUseOrYouWillBeFired
</script>

<template>
  <div>
    <InternalPopconfirm title="Are you OK?" description="Does this look good?" />
    <InternalPopconfirm
      title="Are you OK?"
      description="Does this look good?"
      placement="bottomRight"
      style="width: 250px"
    />
    <InternalPopconfirm :icon="null" title="Are you OK?" />
    <InternalPopconfirm :icon="null" title="Are you OK?" description="Does this look good?" />
  </div>
</template>
```
