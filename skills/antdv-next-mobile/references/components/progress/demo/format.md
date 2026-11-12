# Custom text format

Specify the content of the progress info with the `format` prop or the default slot.

## Source

```vue
<template>
  <am-flex vertical gap="middle">
    <am-progress :percent="60" :format="(percent?: number) => `${percent} / 100`" />
    <am-flex gap="middle" align="center">
      <am-progress type="circle" :percent="75" :size="96" :format="(percent?: number) => `${percent} Days`" />
      <am-progress type="circle" :percent="100" :size="96">
        Done
      </am-progress>
      <am-progress type="dashboard" :percent="86" :size="96">
        <template #default="{ percent }">
          <div class="score">
            <b>{{ percent }}</b>
            <span>Health</span>
          </div>
        </template>
      </am-progress>
    </am-flex>
  </am-flex>
</template>

<style scoped>
.score {
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
}

.score span {
  color: var(--am-color-text-secondary);
  font-size: 12px;
}
</style>
```
