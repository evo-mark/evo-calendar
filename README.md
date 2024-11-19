<p align="center">
    <a href="https://evomark.co.uk" target="_blank" alt="Link to evoMark's website">
        <picture>
          <source media="(prefers-color-scheme: dark)" srcset="https://evomark.co.uk/wp-content/uploads/static/evomark-logo--dark.svg">
          <source media="(prefers-color-scheme: light)" srcset="https://evomark.co.uk/wp-content/uploads/static/evomark-logo--light.svg">
          <img alt="evoMark company logo" src="https://evomark.co.uk/wp-content/uploads/static/evomark-logo--light.svg" width="500">
        </picture>
    </a>
</p>

<p align="center">
  <img src="https://img.shields.io/npm/dm/@evomark/evo-calendar.svg" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/@evomark/evo-calendar"><img src="https://img.shields.io/npm/v/@evomark/evo-calendar.svg" alt="Version"></a>
  <a href="https://github.com/evo-mark/evo-calendar/blob/main/LICENCE"><img src="https://img.shields.io/github/license/evo-mark/evo-calendar?style=flat" alt="Licence"></a>
</p>

# Evo Calendar for Vue 3

A calendar and date picker plugin for [Vue.js](https://vuejs.org).

[Vue.js](https://vuejs.org) 3.2+, [Popper.js](https://popper.js.org/docs/v2/) 2.0+ are required.

## Install Plugin

### NPM

```shell
npm install @evomark/evo-calendar @popperjs/core
```

### Yarn

```shell
yarn add @evomark/evo-calendar @popperjs/core
```

## Use Plugin

:warning: **All installation methods require manual import of component styles. This is due to Vite build restrictions in libary mode.**

```js
import '@evomark/evo-calendar/style.css';
```

### Method 1: Use Globally

```js
import { InstallEvoCalendar } from '@evomark/evo-calendar';
import '@evomark/evo-calendar/style.css';

// Use plugin with optional defaults
app.use(InstallEvoCalendar, {})
```

```html
<!-- MyComponent.vue -->
<template>
  <VCalendar />
  <VDatePicker v-model="date" />
</template>
```

### Method 2: Use Components Globally

```js
// main.js
import { setupCalendar, Calendar, DatePicker } from '@evomark/evo-calendar';
import '@evomark/evo-calendar/style.css';

// Use plugin defaults (optional)
app.use(setupCalendar, {})

// Use the components
app.component('VCalendar', Calendar)
app.component('VDatePicker', DatePicker)
```

```html
<!-- MyComponent.vue -->
<template>
  <VCalendar />
  <VDatePicker v-model="date" />
</template>
```

### Method 3: Use Components As Needed

```js
// main.js
import { setupCalendar } from '@evomark/evo-calendar';

// Use calendar defaults (optional)
app.use(setupCalendar, {})
```

```vue
<!-- MyComponent.vue -->
<template>
  <EvoCalendar />
  <EvoDatePicker v-model="date">
</template>

<script>
import { EvoCalendar, EvoDatePicker } from '@evomark/evo-calendar';
import '@evomark/evo-calendar/style.css';

export default {
  components: {
    EvoCalendar,
    EvoDatePicker,
  },
  data() {
    return {
      date: new Date(),
    };
  },
}
</script>
```

## Source setup

Please follow below mentioned steps to clone and build this project:

### Clone the repo

```sh
git clone https://github.com/evo-mark/evo-calendar

# Move to directory
cd evo-calendar
```

### Install dependencies

```sh
yarn
```

### Build library

```sh
# Types, ES, ESM, CommonJS, IIFE
yarn build
```

### Lint and fix files

```sh
yarn lint
```

### Test library

```sh
# Types, ES, ESM, CommonJS, IIFE
yarn test
```
