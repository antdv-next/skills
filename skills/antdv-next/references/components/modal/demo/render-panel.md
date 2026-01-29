# render-panel

## Source

```vue
<script setup lang="ts">
import { Modal } from 'antdv-next'

/** Test usage. Do not use in your production. */
const InternalPanel = (Modal as any)._InternalPanelDoNotUseOrYouWillBeFired
</script>

<template>
  <div style="display: flex; flex-direction: column; row-gap: 16px">
    <InternalPanel title="Hello World!" style="width: 100%; height: 200px">
      Hello World?!
    </InternalPanel>

    <InternalPanel type="success" style="width: 200px; height: 150px">
      A good news!
    </InternalPanel>

    <InternalPanel title="Confirm This?" type="confirm" style="width: 300px; height: 200px">
      Some descriptions.
    </InternalPanel>

    <InternalPanel
      title="Custom Footer Render"
      style="width: 380px; height: 200px"
    >
      <a-typography-paragraph>
        <a-typography-link href="https://github.com/ant-design/ant-design/pull/44318">
          Feature #44318
        </a-typography-link>
      </a-typography-paragraph>
      <template #footer="{ originNode, extra: { OkBtn, CancelBtn } }">
        <a-space vertical>
          <a-space>
            <component :is="originNode" />
          </a-space>
          <a-space>
            <component :is="CancelBtn" />
            <a-button danger type="primary">
              Custom
            </a-button>
            <component :is="OkBtn" />
          </a-space>
        </a-space>
      </template>
    </InternalPanel>
  </div>
</template>
```
