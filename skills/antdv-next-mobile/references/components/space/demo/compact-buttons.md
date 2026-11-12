# Button group

Combine multiple buttons into a button group. `size` controls the size of all members of the group, and a member can also specify its own.

## Source

```vue
<script setup lang="ts">
import { DownOutlined, LeftOutlined, RightOutlined } from '@antdv-next/icons'
</script>

<template>
  <am-flex vertical gap="middle" align="start">
    <am-space-compact>
      <am-button>Back</am-button>
      <am-button>Save</am-button>
      <am-button>Next</am-button>
    </am-space-compact>

    <am-space-compact>
      <am-button type="primary">
        Place order
      </am-button>
      <am-button type="primary">
        <template #icon>
          <DownOutlined />
        </template>
      </am-button>
    </am-space-compact>

    <am-space-compact size="small">
      <am-button>
        <template #icon>
          <LeftOutlined />
        </template>
      </am-button>
      <am-button>1</am-button>
      <am-button color="primary" variant="filled">
        2
      </am-button>
      <am-button>3</am-button>
      <am-button>
        <template #icon>
          <RightOutlined />
        </template>
      </am-button>
    </am-space-compact>

    <am-space-compact size="large" block>
      <am-button block>
        Cancel
      </am-button>
      <am-button type="primary" block>
        OK
      </am-button>
    </am-space-compact>
  </am-flex>
</template>
```
