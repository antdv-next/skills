---
title: Introduction
---

`@antdv-next/mobile` is the mobile component library of the [Antdv Next](https://www.antdv-next.com) family, built on Vue 3.

Its goal is clear: **write mobile the way you write PC**. Whenever a concept exists in Antdv Next, the exact same prop names, event names and semantics are used here; at the same time every component is redesigned for touch instead of being a shrunken desktop component.

## Features

- **API aligned with PC**: `v-model:open`, `v-model:value`, `items`, `options`, `fieldNames`, `rootClass`, `classes`, `styles`, `Modal.confirm`, `message.success`... The migration cost is close to zero, see [PC Parity](pc-parity.md).
- **Designed for mobile**: bottom popups, wheel pickers, swipe gestures, pull to refresh, safe area support, `:active` press feedback.
- **Pure CSS variable theming**: no CSS-in-JS runtime; override a single `--am-*` variable to re-skin, and the dark and compact algorithms can be combined and nested.
- **`<script setup>` + TypeScript**: every component is written with the Composition API and ships complete type definitions.
- **Import on demand**: the ESM output keeps the module structure and styles are imported together with the components, so Tree Shaking works out of the box.
- **Internationalization**: built-in `zh_CN` and `en_US` locales.

## Browser support

The theme system relies on CSS `color-mix()`, so the following environments are required:

| Platform | Minimum version |
| --- | --- |
| iOS Safari | 16.2 |
| Android Chrome / WebView | 111 |
| WeChat built-in browser | Versions based on Chromium 111+ |

## Components overview

Components fall into seven categories by usage: General, Layout, Navigation, Data Entry, Data Display, Feedback, Gestures & Others. You can try every component in the phone simulator on the right, or visit [m.antdv-next.com/mobile.html](https://m.antdv-next.com/mobile.html) directly on your phone.

## Maintainers

This project is open-sourced by the Antdv Next team under the MIT license. Contributions are welcome on [GitHub](https://github.com/antdv-next/antdv-next-mobile).
