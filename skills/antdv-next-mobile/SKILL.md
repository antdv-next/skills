---
name: antdv-next-mobile
description: Antdv Next Mobile (@antdv-next/mobile) Vue 3 mobile UI component library with am-* components. Use when building mobile / H5 pages with it, or when locating component props/events/slots, demos, CSS variable theme tokens, or differences from the PC antdv-next API.
metadata:
  author: Antdv Next team
  version: "0.1.2"
  source: Generated from https://github.com/antdv-next/antdv-next-mobile, script located in this repo at scripts/generate-antdv-next-mobile-skill.ts
---

# Antdv Next Mobile

> The skill is based on the docs and demos of `@antdv-next/mobile@0.1.2` (https://m.antdv-next.com).

Language: en-US

Docs and demos are copied into `references/` for offline use.

## Essentials

- Package: `@antdv-next/mobile` (Vue >= 3.5). This is **not** the PC library `antdv-next`; never mix their imports or tags.
- Full import: `app.use(AntdvMobile)` registers every component with the `am-` prefix (`<am-button>`). On demand: `import { Button, message } from '@antdv-next/mobile'`.
- Styles are loaded together with each component; there is no CSS file to import (see `references/docs/getting-started.md` for the SSR exception).
- The API mirrors antdv-next: `v-model:open`, `v-model:value`, `items`, `options`, `fieldNames`, `size: 'small' | 'middle' | 'large'`, `Modal.confirm`, `message.success` ... Every component doc ends with a "Differences from PC" section: read it before assuming PC behaviour.
- Theming uses CSS variables only (`--am-*`), through `ConfigProvider` `theme` or plain CSS. Component tokens are listed under "Design Token" in each component doc.
- Icons come from `@antdv-next/icons`.
- Only use props, events and slots that appear in the component doc of this skill. Features that exist in this skill may be missing from an older installed version.

## Guides

| Guide | Path |
| --- | --- |
| Introduction | references/docs/introduce.md |
| Getting Started | references/docs/getting-started.md |
| Customize Theme | references/docs/customize-theme.md |
| Internationalization | references/docs/i18n.md |
| PC Parity | references/docs/pc-parity.md |
| Composables | references/docs/composables.md |

## Components

Each component has `docs.md` (when to use, API, design tokens, differences from PC) and a `demo/` folder with one markdown file per example.

### General

| Component | Description | Doc | Demos |
| --- | --- | --- | --- |
| Button | To trigger an operation. | references/components/button/docs.md | references/components/button/demo/ (10) |
| ConfigProvider | Provide a uniform global configuration for components - theme, locale, size and disabled state. | references/components/config-provider/docs.md | references/components/config-provider/demo/ (6) |
| FloatButton | A button that floats above the page. | references/components/float-button/docs.md | references/components/float-button/demo/ (7) |
| Typography | Basic text formatting, with multi-line ellipsis, expand / collapse and one-tap copy. | references/components/typography/docs.md | references/components/typography/demo/ (7) |

### Layout

| Component | Description | Doc | Demos |
| --- | --- | --- | --- |
| Divider | A divider line that separates content. | references/components/divider/docs.md | references/components/divider/demo/ (6) |
| Flex | A flex layout container for alignment. | references/components/flex/docs.md | references/components/flex/demo/ (5) |
| Grid | 24 Grids System, plus the entry grid for mobile. | references/components/grid/docs.md | references/components/grid/demo/ (9) |
| Masonry | A masonry layout component for displaying content with different heights. | references/components/masonry/docs.md | references/components/masonry/demo/ (4) |
| SafeArea | Reserves space for the notch and the bottom home indicator on full-screen devices. | references/components/safe-area/docs.md | references/components/safe-area/demo/ (4) |
| Space | Set the spacing between components. | references/components/space/docs.md | references/components/space/demo/ (13) |

### Navigation

| Component | Description | Doc | Demos |
| --- | --- | --- | --- |
| ActionBar | Placed at the bottom of the page, with icon actions on the left and one or more prominent buttons on the right. | references/components/action-bar/docs.md | references/components/action-bar/demo/ (5) |
| Dropdown | A filter menu bar that expands downwards, commonly used for sorting and filtering at the top of a list page. | references/components/dropdown/docs.md | references/components/dropdown/demo/ (5) |
| IndexBar | Indexed grouping and quick positioning for lists. | references/components/index-bar/docs.md | references/components/index-bar/demo/ (5) |
| NavBar | Sits at the top of the page and provides the title, back navigation and page-level actions. | references/components/nav-bar/docs.md | references/components/nav-bar/demo/ (6) |
| Pagination | A pagination control that splits a long list into pages and loads only one page at a time. | references/components/pagination/docs.md | references/components/pagination/demo/ (6) |
| Segmented | Display multiple options and allow users to select a single one. | references/components/segmented/docs.md | references/components/segmented/demo/ (7) |
| SideBar | A vertical navigation bar for switching between different content areas. | references/components/side-bar/docs.md | references/components/side-bar/demo/ (4) |
| Steps | A navigation bar that guides users through the steps of a task. | references/components/steps/docs.md | references/components/steps/demo/ (7) |
| TabBar | Placed at the bottom of the page to switch between the top-level pages of an app. | references/components/tab-bar/docs.md | references/components/tab-bar/demo/ (6) |
| Tabs | A tab switching component, used to switch between content groups at the same level. | references/components/tabs/docs.md | references/components/tabs/demo/ (8) |

### Data Entry

| Component | Description | Doc | Demos |
| --- | --- | --- | --- |
| Calendar | Select a date, a date range or multiple dates in a vertically scrolling month calendar. | references/components/calendar/docs.md | references/components/calendar/demo/ (8) |
| Cascader | Select hierarchical data level by level in a bottom popup. | references/components/cascader/docs.md | references/components/cascader/demo/ (7) |
| Checkbox | Select multiple items from a set of options. | references/components/checkbox/docs.md | references/components/checkbox/demo/ (8) |
| ColorPicker | Pick a color by dragging in a bottom panel, with alpha, preset colors and several formats. | references/components/color-picker/docs.md | references/components/color-picker/demo/ (8) |
| DatePicker | Select a year, month, day, time and other date information with wheels. | references/components/date-picker/docs.md | references/components/date-picker/demo/ (12) |
| Form | A form with data collection, validation and submission, presented as mobile cells. | references/components/form/docs.md | references/components/form/demo/ (8) |
| Input | Through keyboard input content, it is the most basic form field wrapper. | references/components/input/docs.md | references/components/input/demo/ (9) |
| InputNumber | Enter a number within a certain range by tapping buttons or with the keyboard. Rendered as a stepper by default on mobile. | references/components/input-number/docs.md | references/components/input-number/demo/ (7) |
| NumberKeyboard | A virtual numeric keyboard for entering amounts, passwords, verification codes, ID numbers, etc. | references/components/number-keyboard/docs.md | references/components/number-keyboard/demo/ (6) |
| Picker | Select one item, or several related items, from a wheel that pops up from the bottom. | references/components/picker/docs.md | references/components/picker/demo/ (7) |
| PickerView | A wheel selection view, the content area of Picker, which can be embedded in a page. | references/components/picker-view/docs.md | references/components/picker-view/demo/ (6) |
| Radio | Used to select a single option from a set of options. | references/components/radio/docs.md | references/components/radio/demo/ (8) |
| Rate | Used for rating operation on something. | references/components/rate/docs.md | references/components/rate/demo/ (8) |
| Select | Select one or more items from an option list in a bottom popup. | references/components/select/docs.md | references/components/select/demo/ (8) |
| Selector | Single or multiple selection among a flat set of options. | references/components/selector/docs.md | references/components/selector/demo/ (8) |
| Signature | Write a signature on a canvas with a finger and export it as an image. | references/components/signature/docs.md | references/components/signature/demo/ (4) |
| Slider | A Slider component for displaying current value and intervals in range. | references/components/slider/docs.md | references/components/slider/demo/ (9) |
| Switch | Used to toggle between two states. | references/components/switch/docs.md | references/components/switch/demo/ (8) |
| TimePicker | Select a point in time with wheels. | references/components/time-picker/docs.md | references/components/time-picker/demo/ (6) |
| Upload | A file select and upload control, displayed as an image grid by default. | references/components/upload/docs.md | references/components/upload/demo/ (8) |

### Data Display

| Component | Description | Doc | Demos |
| --- | --- | --- | --- |
| Avatar | Used to represent users or things, supporting the display of images, icons, or characters. | references/components/avatar/docs.md | references/components/avatar/demo/ (8) |
| Badge | Small numerical value or status descriptor at the top-right corner of an icon. | references/components/badge/docs.md | references/components/badge/demo/ (8) |
| Barrage | Comments flying across a video, live stream, image or any other content. | references/components/barrage/docs.md | references/components/barrage/demo/ (3) |
| Card | A general purpose card container. | references/components/card/docs.md | references/components/card/demo/ (8) |
| Carousel | A set of carousel areas, with swipe gestures, seamless looping and autoplay. | references/components/carousel/docs.md | references/components/carousel/demo/ (7) |
| Collapse | A content area which can be collapsed and expanded. | references/components/collapse/docs.md | references/components/collapse/demo/ (7) |
| Descriptions | Display multiple read-only fields in a group. | references/components/descriptions/docs.md | references/components/descriptions/demo/ (8) |
| Empty | Empty state placeholder. | references/components/empty/docs.md | references/components/empty/demo/ (6) |
| Highlight | Highlights the parts of a text that match the keywords. | references/components/highlight/docs.md | references/components/highlight/demo/ (4) |
| Image | An image with configurable fit mode, lazy loading, placeholder and preview. | references/components/image/docs.md | references/components/image/demo/ (7) |
| ImagePreview | A full-screen image viewer with swipe to switch, pinch to zoom, double-tap to zoom in and swipe down to close. | references/components/image-preview/docs.md | references/components/image-preview/demo/ (5) |
| List | A general-purpose list that neatly holds text, icons, actions and other content in cells. | references/components/list/docs.md | references/components/list/demo/ (9) |
| Listy | A high-performance data list with grouping, sticky headers, virtual scrolling and imperative scroll control. | references/components/listy/docs.md | references/components/listy/demo/ (8) |
| QRCode | Component that can convert text into a QR code, with support for custom colors and a logo. | references/components/qrcode/docs.md | references/components/qrcode/demo/ (8) |
| Result | Used to feed back the results of a series of operational tasks. | references/components/result/docs.md | references/components/result/demo/ (6) |
| RollingText | Digits or texts roll vertically to the target value, like an odometer. | references/components/rolling-text/docs.md | references/components/rolling-text/demo/ (5) |
| ShimmerText | Text with a highlight sweeping across it, to say that something is being generated, loaded or processed. | references/components/shimmer-text/docs.md | references/components/shimmer-text/demo/ (3) |
| Statistic | Display statistic numbers, as well as countdown / count-up timers. | references/components/statistic/docs.md | references/components/statistic/demo/ (8) |
| Tag | Small tags for marking and categorizing. | references/components/tag/docs.md | references/components/tag/demo/ (8) |
| Timeline | Vertical display timeline. | references/components/timeline/docs.md | references/components/timeline/demo/ (8) |
| Tour | A popup component for guiding users through a product. | references/components/tour/docs.md | references/components/tour/demo/ (5) |
| Tree | A multi-level structure list with expand, select, check and async loading. | references/components/tree/docs.md | references/components/tree/demo/ (7) |
| VirtualList | Renders only the list items near the visible area, so even tens of thousands of rows scroll smoothly. | references/components/virtual-list/docs.md | references/components/virtual-list/demo/ (5) |
| Watermark | Add a watermark to a specific area of the page. | references/components/watermark/docs.md | references/components/watermark/demo/ (5) |

### Feedback

| Component | Description | Doc | Demos |
| --- | --- | --- | --- |
| ActionSheet | A panel of actions that slides up from the bottom. | references/components/action-sheet/docs.md | references/components/action-sheet/demo/ (5) |
| Alert | Display warning messages that require attention. | references/components/alert/docs.md | references/components/alert/demo/ (7) |
| Drawer | A floating panel that slides in from the edge of the screen, with a title, a close button and a footer. | references/components/drawer/docs.md | references/components/drawer/demo/ (8) |
| LoadingBar | A thin progress bar at the top of the page, for global loading feedback such as route changes and requests. | references/components/loading-bar/docs.md | references/components/loading-bar/demo/ (2) |
| Mask | A translucent mask covering the page, used to emphasize specific content and block other operations. | references/components/mask/docs.md | references/components/mask/demo/ (4) |
| Message | Display global messages as feedback in response to user operations. | references/components/message/docs.md | references/components/message/demo/ (7) |
| Modal | Display a modal dialog box, providing a title, content area, and action buttons. | references/components/modal/docs.md | references/components/modal/demo/ (8) |
| NoticeBar | Display a set of notices; the text scrolls automatically when it overflows. | references/components/notice-bar/docs.md | references/components/notice-bar/demo/ (8) |
| Notification | Prompt notification message globally. | references/components/notification/docs.md | references/components/notification/demo/ (8) |
| Popover | The floating card or menu popped up by tapping an element. | references/components/popover/docs.md | references/components/popover/demo/ (6) |
| Popup | An overlay container that pops up from the edge or the center of the screen, the foundation of all popup components. | references/components/popup/docs.md | references/components/popup/demo/ (6) |
| Progress | Display the current progress of an operation. | references/components/progress/docs.md | references/components/progress/demo/ (9) |
| ShareSheet | A share panel that slides up from the bottom and shows each channel as an icon with a name. | references/components/share-sheet/docs.md | references/components/share-sheet/demo/ (4) |
| Skeleton | Provide a placeholder while you wait for content to load. | references/components/skeleton/docs.md | references/components/skeleton/demo/ (7) |
| Spin | Used for the loading status of a page or a block. | references/components/spin/docs.md | references/components/spin/demo/ (8) |
| Toast | A translucent black tip shown in the center of the screen, for lightweight feedback such as operation results and loading states. | references/components/toast/docs.md | references/components/toast/demo/ (6) |

### Gestures & Others

| Component | Description | Doc | Demos |
| --- | --- | --- | --- |
| Affix | Stick an element to the viewport. | references/components/affix/docs.md | references/components/affix/demo/ (4) |
| App | Application wrapper providing base text styles and a default environment for consuming context. | references/components/app/docs.md | references/components/app/demo/ (3) |
| BorderBeam | Decorative effect that renders a moving beam along the border of a container. | references/components/border-beam/docs.md | references/components/border-beam/demo/ (9) |
| CollapseTransition | Adds an animated expand / collapse of the height to any content. | references/components/collapse-transition/docs.md | references/components/collapse-transition/demo/ (2) |
| Draggable | Lets any content be dragged freely inside the viewport or a container, with axis restriction and edge snapping. | references/components/draggable/docs.md | references/components/draggable/demo/ (3) |
| FloatingPanel | A panel that floats at the bottom of the page, can be dragged up and down, and snaps to anchor heights. | references/components/floating-panel/docs.md | references/components/floating-panel/demo/ (4) |
| InfiniteScroll | Load more data automatically when the list is scrolled to the bottom (or the top). | references/components/infinite-scroll/docs.md | references/components/infinite-scroll/demo/ (5) |
| PullToRefresh | Pull down at the top of a list to refresh its content. | references/components/pull-to-refresh/docs.md | references/components/pull-to-refresh/demo/ (5) |
| SwipeAction | Swipe a list item left or right to reveal hidden action buttons. | references/components/swipe-action/docs.md | references/components/swipe-action/demo/ (5) |
