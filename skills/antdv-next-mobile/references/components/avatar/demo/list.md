# In a list

Used as the prefix in a conversation / contact list.

## Source

```vue
<script setup lang="ts">
const src = 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'

const users = [
  { name: 'Tom Chen', desc: 'OK, see you tomorrow', src },
  { name: 'Design Team', desc: '[Photo]', text: 'D' },
  { name: 'Lily', desc: 'I have emailed you the file', text: 'L' },
]
</script>

<template>
  <div class="list">
    <div v-for="user in users" :key="user.name" class="item">
      <am-avatar :src="user.src" :size="44">
        {{ user.text }}
      </am-avatar>
      <div class="main">
        <div class="name">
          {{ user.name }}
        </div>
        <div class="desc">
          {{ user.desc }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.list {
  background: var(--am-color-bg-container);
}

.item {
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 12px 16px;
}

.item + .item {
  border-top: 1px solid var(--am-color-split);
}

.main {
  flex: 1;
  min-width: 0;
}

.name {
  color: var(--am-color-text);
  font-size: var(--am-font-size-lg);
}

.desc {
  overflow: hidden;
  color: var(--am-color-text-tertiary);
  font-size: var(--am-font-size);
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
```
