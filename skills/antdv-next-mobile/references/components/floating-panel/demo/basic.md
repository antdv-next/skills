# Basic usage

There are two anchors by default: `100px` and 60% of the available height. Drag the panel up and down, and it snaps to the nearest anchor after release; the content area becomes scrollable once fully expanded.

## Source

```vue
<template>
  <div class="stage">
    <p class="stage-tip">
      The content behind is still interactive
    </p>
    <am-floating-panel :fixed="false">
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
