# In a card

An asset / data overview card that is common on mobile.

## Source

```vue
<template>
  <div class="overview">
    <am-statistic
      title="Total Assets (CNY)"
      :value="268547.36"
      :precision="2"
      class="overview-total"
    />
    <div class="overview-grid">
      <am-statistic title="Yesterday" :value="128.5" :precision="2" prefix="+" />
      <am-statistic title="Total Profit" :value="12893.4" :precision="2" />
      <am-statistic title="Holdings" :value="6" suffix="funds" />
    </div>
  </div>
</template>

<style scoped>
.overview {
  padding: 20px 16px;
  background: linear-gradient(135deg, #1677ff, #69b1ff);
  border-radius: 12px;
}

.overview .am-statistic {
  --am-statistic-title-color: rgb(255 255 255 / 75%);
  --am-statistic-content-color: #fff;
}

.overview-total {
  --am-statistic-content-font-size: 32px;
  --am-statistic-content-font-weight: 600;
}

.overview-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-top: 16px;
}

.overview-grid .am-statistic {
  --am-statistic-content-font-size: 18px;
  --am-statistic-title-font-size: 12px;
}
</style>
```
