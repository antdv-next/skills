---
title: Upload
description: A file select and upload control, displayed as an image grid by default.
---

## When To Use

Uploading is the process of publishing information (images, videos or files) to a remote server through a web page.

- When one or more images have to be uploaded (avatar, receipt, review photos).
- When the upload progress has to be shown, with retry after failure.
- When the camera should be opened directly to take a photo and upload it (`capture`).

The API is aligned with `Upload` in antdv-next: `fileList` (`v-model:fileList`), `action`, `customRequest`, `beforeUpload`, `maxCount`, `listType`, `showUploadList`, `Upload.LIST_IGNORE`, etc. have the same semantics. On mobile the image grid (`picture-card`) is used by default: square thumbnails, a remove badge at the corner, a mask while uploading, tap to retry after failure, and tap an image to preview it full screen.

## Examples

| Demo | Path |
| --- | --- |
| Basic usage | demo/basic.md |
| Upload progress and retry on failure | demo/request.md |
| File status | demo/status.md |
| Limit count and size | demo/limit.md |
| Validate before upload | demo/before-upload.md |
| Confirm before remove | demo/before-remove.md |
| Custom trigger area and columns | demo/custom.md |
| File list | demo/text.md |

## API

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| fileList | File list (controlled), supports `v-model:fileList` | [UploadFile](#uploadfile)`[]` | - |
| defaultFileList | Default file list (uncontrolled) | [UploadFile](#uploadfile)`[]` | - |
| accept | File types that can be accepted, same as the native `accept` | `string` | - |
| multiple | Whether multiple files can be selected | `boolean` | `false` |
| maxCount | Limit the number of uploaded files; the upload button is hidden once reached. When it is `1`, a new file replaces the current one | `number` | - |
| maxSize | Size limit of a single file (bytes); files exceeding it are not added to the list and trigger `exceed` | `number` | - |
| disabled | Whether it is disabled | `boolean` | `false` |
| action | Uploading URL. When neither `action` nor `customRequest` is set, files are only collected (with status `done`) and no request is sent | `string \| ((file: UploadRawFile) => string \| Promise<string>)` | - |
| method | The http method of the upload request | `string` | `'post'` |
| headers | Request headers of the upload | `Record<string, string>` | - |
| data | Extra params for uploading, or a function returning them | `object \| ((file: UploadFile) => object \| Promise<object>)` | - |
| name | The name of the file param sent to the server | `string` | `'file'` |
| withCredentials | Whether cookies are sent with the upload request | `boolean` | `false` |
| customRequest | Override the default upload behavior with your own upload implementation | `(options: `[RequestOptions](#request-options)`, info: { defaultRequest }) => void \| { abort: () => void }` | - |
| beforeUpload | Hook before uploading. When it returns `false` (or a rejected Promise) the file is added to the list but not uploaded; when it returns `Upload.LIST_IGNORE` the file is not added to the list; when it resolves a `File` / `Blob`, that object is uploaded | `(file: UploadRawFile, fileList: UploadRawFile[]) => boolean \| string \| Blob \| void \| Promise<...>` | - |
| beforeRemove | Hook before removing a file; the file is not removed when it returns `false` (or a Promise that resolves `false` / rejects) | `(file: UploadFile) => boolean \| void \| Promise<boolean \| void>` | - |
| listType | Display style of the list | `'picture-card' \| 'text'` | `'picture-card'` |
| showUploadList | Whether to show the file list; an object controls `showPreviewIcon` (tap to preview) and `showRemoveIcon` (remove badge) individually | `boolean \| { showPreviewIcon?: boolean, showRemoveIcon?: boolean }` | `true` |
| capture | Open the camera directly, same as the native `capture` | `boolean \| 'user' \| 'environment'` | - |
| previewFile | Customize how the thumbnail is generated | `(file: File \| Blob) => Promise<string>` | - |
| isImageUrl | Customize whether a file is shown as an image thumbnail | `(file: UploadFile) => boolean` | - |
| iconRender | Custom icon for non-image files; the same-named slot takes precedence | `(file: UploadFile, listType?: UploadListType) => VueNode` | - |
| columns | Number of columns of the `picture-card` grid | `number` | `4` |
| preview | Whether tapping an uploaded image opens the built-in image preview | `boolean` | `true` |
| rootClass | Class name of the root element | `string` | - |
| classes | Semantic structure class names | `Record<'root' \| 'list' \| 'item' \| 'trigger', string>` | - |
| styles | Semantic structure styles | `Record<'root' \| 'list' \| 'item' \| 'trigger', CSSProperties>` | - |

### Events

| Event | Description | Type |
| --- | --- | --- |
| change | Triggered when the file state changes: added to the list, upload progress, success, failure, removal | `(info: { file: UploadFile, fileList: UploadFile[], event?: { percent: number } }) => void` |
| preview | Triggered when a file is tapped | `(file: UploadFile) => void` |
| remove | Triggered after a file has been removed | `(file: UploadFile) => void` |
| exceed | Triggered when selected files are ignored because of `maxCount` / `maxSize` | `(files: File[], reason: 'maxCount' \| 'maxSize') => void` |

### Slots

| Slot | Description | Params |
| --- | --- | --- |
| default | Custom content of the upload button | - |
| itemRender | Custom list item | `{ file: UploadFile, index: number, fileList: UploadFile[], actions: { preview, remove, retry } }` |
| iconRender | Custom icon for non-image files | `{ file: UploadFile, listType: UploadListType }` |

### Methods

| Method | Description | Type |
| --- | --- | --- |
| chooseFile | Open the file chooser | `() => void` |
| upload | Upload a file in the list again | `(file: UploadFile) => void` |
| abort | Abort the upload request of a file (or of all files) | `(file?: UploadFile) => void` |

### UploadFile

| Parameter | Description | Type |
| --- | --- | --- |
| uid | Unique identifier | `string` |
| name | File name | `string` |
| status | Upload status; files intercepted by `beforeUpload` have no `status` | `'uploading' \| 'done' \| 'error' \| 'removed'` |
| percent | Upload progress | `number` |
| url | File URL, used for the thumbnail and the preview | `string` |
| thumbUrl | Thumbnail URL | `string` |
| originFileObj | The original `File` object | `UploadRawFile` |
| response | Server response | `any` |
| error | Error information of a failed upload | `any` |
| size / type / lastModified | Same as the corresponding properties of `File` | - |

### RequestOptions

| Parameter | Description | Type |
| --- | --- | --- |
| action | Uploading URL | `string` |
| filename | Name of the file param | `string` |
| file | The file to upload | `UploadRawFile \| Blob` |
| data | Extra params | `Record<string, unknown>` |
| headers | Request headers | `Record<string, string>` |
| withCredentials | Whether cookies are sent | `boolean` |
| method | http method | `string` |
| onProgress | Upload progress callback | `(event: { percent: number }) => void` |
| onSuccess | Upload success callback | `(body: any, xhr?: XMLHttpRequest) => void` |
| onError | Upload failure callback | `(error: Error, body?: any) => void` |

## Design Token

Customize through `theme.components.Upload` of `ConfigProvider`, or by overriding the CSS variables directly.

| Token | Description | Default |
| --- | --- | --- |
| `--am-upload-columns` | Number of grid columns (set by the `columns` prop) | `4` |
| `--am-upload-gap` | Grid gap | `var(--am-margin-xs)` |
| `--am-upload-item-bg` | Background color of the list items and the upload button | `var(--am-color-fill-tertiary)` |
| `--am-upload-item-border-radius` | Border radius of the list items | `var(--am-border-radius)` |
| `--am-upload-trigger-color` | Icon color of the upload button | `var(--am-color-text-quaternary)` |
| `--am-upload-trigger-icon-size` | Icon size of the upload button | `28px` |
| `--am-upload-mask-bg` | Background color of the uploading / failed mask | `var(--am-color-bg-mask)` |
| `--am-upload-mask-color` | Text color of the mask | `var(--am-color-white)` |
| `--am-upload-remove-size` | Size of the remove badge | `18px` |
| `--am-upload-remove-bg` | Background color of the remove badge | `var(--am-color-bg-mask)` |
| `--am-upload-remove-color` | Icon color of the remove badge | `var(--am-color-white)` |

## Differences from PC

- `listType` defaults to `picture-card` (`text` on PC) and only supports `picture-card` and `text`; the number of grid columns is set with `columns`.
- Removal is intercepted with the `beforeRemove` prop (the return value of `onRemove` on PC), and the `remove` event only notifies after the removal; `preview` is an event.
- When neither `action` nor `customRequest` is set, no request is sent and files are added to the list directly with status `done`, which makes it easy to submit them together with a form.
- The upload button is hidden once `maxCount` is reached; adds the `maxSize` prop and the `exceed` event.
- Tap a failed file to retry; tapping an uploaded image opens the built-in [ImagePreview](../image-preview/docs.md) (can be turned off with the `preview` prop).
- `itemRender` is only available as a slot, with params `{ file, index, fileList, actions }` (no `originNode`).
- Adds `capture` (same name as on PC) and the `chooseFile` / `upload` / `abort` methods.
- Drag-and-drop upload (`Upload.Dragger`), `directory`, `pastable`, `openFileDialogOnClick`, `progress`, the `picture` / `picture-circle` lists, download related configs and the object form of `accept` are not supported.
