# Use in a form

Use in a form or a list; a typical shopping cart quantity selector.

## Source

```vue
<script setup lang="ts">
import { reactive } from 'vue'

const model = reactive({ adult: 2, child: 0, room: 1 })
</script>

<template>
  <am-form :model="model" content-align="end">
    <am-form-item name="adult" label="Adults" :rules="[{ type: 'number', min: 1, message: 'At least 1 adult' }]">
      <am-input-number v-model:value="model.adult" :min="0" :max="9" />
    </am-form-item>
    <am-form-item name="child" label="Children" extra="Ages 2-12">
      <am-input-number v-model:value="model.child" :min="0" :max="6" />
    </am-form-item>
    <am-form-item name="room" label="Rooms">
      <am-input-number v-model:value="model.room" :min="1" :max="5" />
    </am-form-item>
  </am-form>
</template>
```
