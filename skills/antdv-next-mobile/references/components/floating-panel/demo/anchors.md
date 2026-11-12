# Custom anchors and controlled height

`anchors` customizes the heights to snap to, and `v-model:height` gets or controls the current height.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const anchors = [72, 200, 380]
const height = ref(anchors[1])
</script>

<template>
  <div class="stage">
    <p class="stage-tip">
      Height: {{ Math.round(height) }}px
    </p>
    <am-floating-panel v-model:height="height" :anchors="anchors" :fixed="false">
      <ul class="list">
        <li v-for="i in 20" :key="i">
          Item {{ i }}
        </li>
      </ul>
    </am-floating-panel>
  </div>
</template>

<style scoped>
.stage {
  position: relative;
  height: 420px;
  overflow: hidden;
  background: linear-gradient(160deg, #bae0ff, #d9f7be);
  border-radius: 8px;
}

.stage-tip {
  margin: 0;
  padding: 16px;
  color: rgb(0 0 0 / 65%);
  font-size: 14px;
}

.list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.list li {
  padding: 12px 16px;
  border-bottom: 1px solid var(--am-color-split);
}
</style>
```
