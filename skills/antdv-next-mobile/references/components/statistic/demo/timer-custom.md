# Custom countdown style

The `formatter` slot provides the split time data, which can be used to build the digit block countdown common in flash sales.

## Source

```vue
<script setup lang="ts">
const deadline = Date.now() + 1000 * 60 * 60 * 5 + 1000 * 60 * 30

function pad(value: number) {
  return String(value).padStart(2, '0')
}
</script>

<template>
  <div class="seckill">
    <span class="seckill-title">Flash Sale</span>
    <am-statistic-timer :value="deadline">
      <template #formatter="{ time }">
        <span class="seckill-timer">
          <span class="seckill-block">{{ pad(time.days * 24 + time.hours) }}</span>
          <span class="seckill-colon">:</span>
          <span class="seckill-block">{{ pad(time.minutes) }}</span>
          <span class="seckill-colon">:</span>
          <span class="seckill-block">{{ pad(time.seconds) }}</span>
        </span>
      </template>
    </am-statistic-timer>
  </div>
</template>

<style scoped>
.seckill {
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 12px 16px;
  background: var(--am-color-error-bg);
  border-radius: 12px;
}

.seckill-title {
  color: var(--am-color-error);
  font-weight: 600;
  font-size: 16px;
}

.seckill-timer {
  display: inline-flex;
  gap: 4px;
  align-items: center;
  font-size: 14px;
}

.seckill-block {
  min-width: 24px;
  padding: 2px 4px;
  color: #fff;
  line-height: 20px;
  text-align: center;
  background: var(--am-color-error);
  border-radius: 4px;
}

.seckill-colon {
  color: var(--am-color-error);
}
</style>
```
