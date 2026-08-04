# @onlyzoran/win-predict-ai-icons

Vue 3 иконки в стиле [Tabler Icons](https://tabler.io/icons) для Win Predict AI.

SVG `24×24`, stroke, props `size` / `stroke`, классы `tabler-icon tabler-icon-*`.

## Установка

Пакет публикуется в **GitHub Packages**, не в публичный npm.

### 1. `.npmrc` в проекте-потребителе

```ini
@onlyzoran:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${NODE_AUTH_TOKEN}
```

Либо классический вариант с явным токеном (не коммитьте токен):

```ini
@onlyzoran:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_PAT
```

### 2. Токен

Нужен GitHub PAT с правом `read:packages` (для установки) или `write:packages` (для публикации).

```bash
export NODE_AUTH_TOKEN=ghp_xxxxxxxx
```

Для CI задайте `NODE_AUTH_TOKEN` как секрет.

### 3. Install

```bash
npm install @onlyzoran/win-predict-ai-icons
```

Peer dependency: `vue` ^3.3.

## Использование

```vue
<script setup lang="ts">
import { IconHockey } from '@onlyzoran/win-predict-ai-icons'
</script>

<template>
  <IconHockey />
  <IconHockey :size="32" :stroke="1.5" class="text-blue-500" />
</template>
```

Цвет наследуется через `stroke="currentColor"` (как у Tabler).

## Добавление новой иконки

1. Создайте `src/icons/IconName.vue` по образцу `IconHockey.vue` (viewBox `0 0 24 24`, props `size`/`stroke`, классы `tabler-icon tabler-icon-name`).
2. Экспортируйте в `src/index.ts`:

```ts
export { default as IconName } from './icons/IconName.vue'
```

3. Соберите и опубликуйте новую версию.

## Разработка

```bash
npm install
npm run build
npm run type-check
```

Сборка: Vite library mode → `dist/index.js` + декларации через `vue-tsc`.

## Публикация в GitHub Packages

1. Убедитесь, что в `package.json` указаны:

   - `"name": "@onlyzoran/win-predict-ai-icons"`
   - `"publishConfig.registry": "https://npm.pkg.github.com"`

2. В корне пакета уже есть `.npmrc` с scope `@onlyzoran` и `${NODE_AUTH_TOKEN}` (секреты в репозиторий не кладите).

3. PAT с `write:packages` (и доступом к org/user `onlyzoran`):

```bash
export NODE_AUTH_TOKEN=ghp_xxxxxxxx
npm run build
npm publish
```

`prepublishOnly` автоматически запускает `build` перед publish.

4. После публикации bump версии (`npm version patch|minor|major`) и снова `npm publish`.

## Структура

```
src/
  icons/          # Vue SFC иконок
    IconHockey.vue
  types.ts        # общие IconProps
  index.ts        # публичные named exports
dist/             # артефакты сборки (публикуются в пакет)
```
