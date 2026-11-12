# Upload progress and retry on failure

With `action` set, the built-in XHR request is used to upload and the progress is shown. Here `customRequest` simulates the upload process: every third file fails to upload, and tapping a failed file retries it.

## Source

```vue
<script setup lang="ts">
import type { UploadFile, UploadRequestOption } from '@antdv-next/mobile'
import { ref } from 'vue'

const fileList = ref<UploadFile[]>([])
let count = 0

function customRequest(options: UploadRequestOption) {
  count += 1
  const shouldFail = count % 3 === 0
  let percent = 0
  const timer = setInterval(() => {
    percent += 20
    if (shouldFail && percent >= 60) {
      clearInterval(timer)
      options.onError(new Error('network error'))
      return
    }
    options.onProgress({ percent })
    if (percent >= 100) {
      clearInterval(timer)
      options.onSuccess({ url: 'https://example.com/file' })
    }
  }, 400)
  return {
    abort: () => clearInterval(timer),
  }
}
</script>

<template>
  <am-upload v-model:file-list="fileList" accept="image/*" multiple :custom-request="customRequest" />
</template>
```
