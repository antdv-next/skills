# 区块间隔

## Description (zh-CN)

栅格常常需要和间隔进行配合，你可以使用 `Row` 的 `gutter` 属性，我们推荐使用 `(16 + 8n)px` 作为栅格间隔（n 是自然数）。

如果要支持响应式，可以写成 `{ xs: 8, sm: 16, md: 24, lg: 32 }`。

如果需要垂直间距，可以写成数组形式 `[水平间距, 垂直间距]`。

## Source

```vue
<template>
  <a-divider title-placement="left">
    Horizontal
  </a-divider>
  <a-row :gutter="16">
    <a-col :span="6" class="gutter-row">
      <div class="gutter-box">
        col-6
      </div>
    </a-col>
    <a-col :span="6" class="gutter-row">
      <div class="gutter-box">
        col-6
      </div>
    </a-col>
    <a-col :span="6" class="gutter-row">
      <div class="gutter-box">
        col-6
      </div>
    </a-col>
    <a-col :span="6" class="gutter-row">
      <div class="gutter-box">
        col-6
      </div>
    </a-col>
  </a-row>

  <a-divider title-placement="left">
    Responsive
  </a-divider>
  <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }">
    <a-col :span="6" class="gutter-row">
      <div class="gutter-box">
        col-6
      </div>
    </a-col>
    <a-col :span="6" class="gutter-row">
      <div class="gutter-box">
        col-6
      </div>
    </a-col>
    <a-col :span="6" class="gutter-row">
      <div class="gutter-box">
        col-6
      </div>
    </a-col>
    <a-col :span="6" class="gutter-row">
      <div class="gutter-box">
        col-6
      </div>
    </a-col>
  </a-row>

  <a-divider title-placement="left">
    Vertical
  </a-divider>
  <a-row :gutter="[16, 24]">
    <a-col :span="6" class="gutter-row">
      <div class="gutter-box">
        col-6
      </div>
    </a-col>
    <a-col :span="6" class="gutter-row">
      <div class="gutter-box">
        col-6
      </div>
    </a-col>
    <a-col :span="6" class="gutter-row">
      <div class="gutter-box">
        col-6
      </div>
    </a-col>
    <a-col :span="6" class="gutter-row">
      <div class="gutter-box">
        col-6
      </div>
    </a-col>
    <a-col :span="6" class="gutter-row">
      <div class="gutter-box">
        col-6
      </div>
    </a-col>
    <a-col :span="6" class="gutter-row">
      <div class="gutter-box">
        col-6
      </div>
    </a-col>
    <a-col :span="6" class="gutter-row">
      <div class="gutter-box">
        col-6
      </div>
    </a-col>
    <a-col :span="6" class="gutter-row">
      <div class="gutter-box">
        col-6
      </div>
    </a-col>
  </a-row>
</template>

<style scoped>
.gutter-box {
  padding: 8px 0;
  color: #fff;
  text-align: center;
  background: #0092ff;
}
</style>
```
