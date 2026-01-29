# 使用 hooks 获得上下文

## Description (zh-CN)

通过 `Modal.useModal` 创建支持读取 context 的 `contextHolder`。其中仅有 hooks 方法支持 Promise `await` 操作。

## Source

```vue
<script setup lang="ts">
import type { InjectionKey, Ref } from 'vue'
import { Modal } from 'antdv-next'
import { computed, defineComponent, h, inject, provide, ref } from 'vue'

const [modal, ContextModal] = Modal.useModal()

const ReachableContextKey: InjectionKey<Ref<string>> = Symbol('ReachableContextKey')
const UnreachableContextKey: InjectionKey<Ref<string | null>> = Symbol('UnreachableContextKey')

const ReachableConsumer = defineComponent(() => {
  const value = inject(ReachableContextKey, ref())
  return () => {
    return `Reachable: ${value.value}!`
  }
})

const UnreachableConsumer = defineComponent(() => {
  const value = inject(UnreachableContextKey, ref(null))
  return () => {
    return `Unreachable: ${value.value}!`
  }
})

const config = {
  title: 'Use Hook!',
  content: () => [
    h(ReachableConsumer),
    h('br'),
    h(UnreachableConsumer),
  ],
}
const ReachableProvider = defineComponent(
  (props, { slots }) => {
    provide(ReachableContextKey, computed(() => props.value))
    return () => {
      return slots?.default?.()
    }
  },
  {
    props: ['value'],
  },
)

const UnreachableProvider = defineComponent((props, { slots }) => {
  provide(UnreachableContextKey, computed(() => props.value))
  return () => {
    return slots?.default?.()
  }
}, {
  props: ['value'],
})

async function handleClick() {
  const confirmed = await modal.confirm(config)
  console.log('Confirmed: ', confirmed)
}
</script>

<template>
  <ReachableProvider value="Light">
    <a-space>
      <a-button @click="handleClick">
        Confirm
      </a-button>
      <a-button
        @click="() => {
          modal.warning(config)
        }"
      >
        Warning
      </a-button>
      <a-button
        @click="() => {
          modal.info(config)
        }"
      >
        Info
      </a-button>
      <a-button
        @click="() => {
          modal.error(config)
        }"
      >
        Error
      </a-button>
    </a-space>
    <ContextModal />
    <UnreachableProvider value="Bamboo" />
  </ReachableProvider>
</template>
```
