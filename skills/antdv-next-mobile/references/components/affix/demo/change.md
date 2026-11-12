# Callback on affix state change

The `change` event is triggered when the affix state changes and can be used to switch the style once the element is sticky.

## Source

```vue
<script setup lang="ts">
import { ref } from 'vue'

const scroller = ref<HTMLElement>()
const getTarget = () => scroller.value ?? null
const affixed = ref(false)
</script>

<template>
  <div ref="scroller" class="scroller">
    <div class="block">
      Scroll down
    </div>
    <am-affix :offset-top="8" :target="getTarget" @change="affixed = $event">
      <div class="bar pill" :class="{ 'pill-affixed': affixed }">
        <span>{{ affixed ? 'Affixed' : 'Not affixed' }}</span>
        <span>offsetTop = 8</span>
      </div>
    </am-affix>
    <div v-for="i in 5" :key="i" class="block">
      Content {{ i }}
    </div>
  </div>
</template>

<style scoped>
.scroller {
  position: relative;
  height: 280px;
  overflow-y: auto;
  background: var(--am-color-bg-layout);
  border: 1px solid var(--am-color-border-secondary);
  border-radius: 8px;
}

.block {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  margin: 12px;
  color: var(--am-color-text-description);
  background: var(--am-color-bg-container);
  border-radius: 8px;
}

.bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  height: 44px;
  padding: 0 16px;
  color: var(--am-color-text);
  font-size: 15px;
  background: var(--am-color-bg-container);
  border-bottom: 1px solid var(--am-color-split);
}

.pill {
  margin: 0 12px;
  border: 0;
  border-radius: 22px;
  transition:
    color 0.2s,
    background-color 0.2s,
    box-shadow 0.2s;
}

.pill-affixed {
  color: var(--am-color-text-light-solid);
  background: var(--am-color-primary);
  box-shadow: var(--am-box-shadow-secondary);
}
</style>
```
