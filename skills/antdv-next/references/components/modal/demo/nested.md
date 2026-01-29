# nested

## Source

```vue
<script setup lang="ts">
import { message, Modal, notification, Select } from 'antdv-next'
import { h, ref } from 'vue'

const options = [
  {
    label: 'Option 1',
    value: '1',
  },
  {
    label: 'Option 2',
    value: '2',
  },
]

const [messageApi, messageContextHolder] = message.useMessage()
const [notificationApi, notificationContextHolder] = notification.useNotification()

const isModalOpen = ref<boolean>(false)

function onShowStatic() {
  Modal.confirm({
    content: () => h(Select, { open: true, value: '1', options }),
  })
}
</script>

<template>
  <a-space>
    <a-switch
      :style="{ position: 'relative', zIndex: isModalOpen ? 4000 : 0 }"
      checked-children="Open"
      un-checked-children="Close"
      :checked="isModalOpen"
      @change="(open: any) => isModalOpen = open"
    />
    <a-button @click="onShowStatic">
      Static
    </a-button>
    <a-modal
      title="Basic Modal"
      :open="isModalOpen"
      :footer="null"
      destroy-on-hidden
      :mask-closable="false"
      :closable="false"
      :styles="{
        container: {
          marginBlockStart: '100px',
        },
      }"
      @cancel="() => isModalOpen = false"
    >
      <a-select open value="1" :options="options" />
      <a-modal
        title="Nested Modal"
        :open="isModalOpen"
        :footer="null"
        destroy-on-hidden
        :mask="false"
        :mask-closable="false"
        :closable="false"
        :styles="{
          container: {
            marginBlockStart: '250px',
          },
          body: {
            display: 'flex',
            justifyContent: 'center',
          },
        }"
        @cancel="() => isModalOpen = false"
      >
        <a-select open value="1" :options="options" />

        <a-modal
          title="Nested Modal"
          :open="isModalOpen"
          :footer="null"
          destroy-on-hidden
          :mask="false"
          :mask-closable="false"
          :closable="false"
          :styles="{
            container: {
              marginBlockStart: '400px',
            },
            body: {
              display: 'flex',
              justifyContent: 'flex-end',
            },
          }"
          @cancel="() => isModalOpen = false"
        >
          <a-space wrap>
            <a-button
              @click="() => {
                Modal.confirm({
                  title: 'Are you OK?',
                  content: 'I am OK',
                });
              }"
            >
              Static Confirm
            </a-button>

            <a-button
              @click="() => {
                message.success('Hello World');
                notification.success({
                  title: 'Hello World',
                });
              }"
            >
              Static Message, Notification
            </a-button>

            <a-button
              @click="() => {
                messageApi.success('Hello World');
                notificationApi.success({
                  title: 'Hello World',
                });
              }"
            >
              Hook Message, Notification
            </a-button>
            <a-select open value="1" :options="options" />
          </a-space>
        </a-modal>
      </a-modal>
    </a-modal>
    <messageContextHolder />
    <notificationContextHolder />
  </a-space>
</template>
```
