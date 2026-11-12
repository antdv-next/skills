# Custom image

`image` can be an image URL, or any node can be placed through the same-named slot; adjust the height of the image area with `styles.image` or `--am-empty-image-height`.

## Source

```vue
<script setup lang="ts">
import { WifiOutlined } from '@antdv-next/icons'
</script>

<template>
  <am-empty
    image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
    description="Custom image URL"
    :styles="{ image: { height: '60px' } }"
  />
  <am-divider />
  <am-empty description="Network error, please try again later" class="offline">
    <template #image>
      <WifiOutlined />
    </template>
    <am-button size="small">
      Reload
    </am-button>
  </am-empty>
</template>

<style scoped>
.offline {
  --am-empty-image-height: 64px;
}

.offline :deep(.am-empty-image) {
  color: var(--am-color-text-quaternary);
  font-size: 56px;
}
</style>
```
