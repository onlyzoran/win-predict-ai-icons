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
import { IconHockey, sportIcons } from '@onlyzoran/win-predict-ai-icons'
</script>

<template>
  <IconHockey />
  <IconHockey :size="32" :stroke="1.5" class="text-blue-500" />
  <component :is="sportIcons.football" :size="20" />
</template>
```

Цвет наследуется через `stroke="currentColor"` (как у Tabler).

### Sport-набор

Иконки и карта `sportIcons` (ключи как в `win-predict-ai`):

| Key | Component |
| --- | --- |
| `football` | `IconBallFootball` |
| `basketball` | `IconBallBasketball` |
| `americanFootball` | `IconBallAmericanFootball` |
| `hockey` | `IconHockey` |
| `baseball` | `IconBallBaseball` |
| `motorsport` | `IconSteeringWheel` |
| `golf` | `IconGolf` |
| `politics` | `IconFlag` |
| `tennis` | `IconBallTennis` |
| `rugby` | `IconBallRugby` |
| `boxing` | `IconBoxingGlove` |

Пути Tabler-иконок скопированы из [@tabler/icons](https://github.com/tabler/tabler-icons) (MIT); `IconHockey` и `IconBallRugby` — кастомные; `IconBoxingGlove` — из [Hugeicons](https://hugeicons.com/) `boxing-glove-01` (MIT).

В потребителе можно упростить `sportIcons.ts` до:

```ts
export { sportIcons } from '@onlyzoran/win-predict-ai-icons'
```

### UI-набор

Outline (`size` / `stroke`): `IconArrowLeft`, `IconArrowsSort`, `IconChartSankey`, `IconGripVertical`, `IconLogin`, `IconLogout`, `IconMoon`, `IconPalette`, `IconPencil`, `IconPin`, `IconPinnedOff`, `IconPlus`, `IconReplace`, `IconSearch`, `IconSun`, `IconTable`, `IconTrash`, `IconX`.

Filled (`size`, `fill="currentColor"`): `IconBrandGithub`, `IconCircleFilled`.

## Добавление новой иконки

1. Создайте `src/icons/IconName.vue` по образцу `IconHockey.vue` (viewBox `0 0 24 24`, props `size`/`stroke`, классы `tabler-icon tabler-icon-name`). Для filled — `fill="currentColor"`, только `size`.
2. Экспортируйте в `src/index.ts` (и при необходимости добавьте в `src/sportIcons.ts`).
3. Соберите и опубликуйте новую версию (`npm version` + `npm publish`).

## Превью иконок

Локально:

```bash
npm install
npm run dev
```

Откроется галерея на `http://localhost:5173` (поиск, size/stroke, тёмная тема, клик копирует имя).

Публичный каталог: [GitHub Pages](https://onlyzoran.github.io/win-predict-ai-icons/) (деплой из `main` на ветку `gh-pages`).

**Настройки репозитория (один раз):**

1. **Settings → Pages → Source:** Deploy from a branch → Branch `gh-pages` / `/ (root)`.
2. **Settings → Actions → General → Workflow permissions:** Read and write permissions.

Для pull request Actions собирает playground и деплоит превью; в PR появится комментарий со ссылкой вида  
`https://onlyzoran.github.io/win-predict-ai-icons/pr-preview/pr-<N>/`.  
После закрытия PR превью удаляется.

## Разработка

```bash
npm install
npm run build
npm run build:playground
npm run type-check
```

Сборка: Vite library mode → `dist/index.js` + декларации через `vue-tsc`. Playground → `playground-dist/` (для Pages).

## Публикация в GitHub Packages

После мержа в `main` workflow **Release package** публикует **уже зафиксированную** оркестратором версию в GitHub Packages и ставит тег `vX.Y.Z`.

Версию и CHANGELOG перед merge поднимает релизер оркестратора (колонка Ready to Release):

| Как задать bump | Результат |
| --- | --- |
| новые файлы в `src/icons/` | `minor` |
| без новых иконок | `patch` |
| `[major]` / `[minor]` / `[patch]` в заголовке PR | принудительно |

Вручную (без оркестратора): **Actions → Release package → Run workflow** (можно выбрать patch / minor / major или `none`, если версия уже в `package.json`).

Локально (если нужно):

```bash
export NODE_AUTH_TOKEN=ghp_xxxxxxxx   # write:packages
npm version patch|minor|major
npm publish
git push && git push --tags
```

`prepublishOnly` запускает `build` перед publish. Registry: `https://npm.pkg.github.com` (см. `.npmrc`).

## Структура

```
src/
  icons/           # Vue SFC иконок (sport + UI)
  sportIcons.ts    # карта Sport → компонент
  types.ts         # общие IconProps
  index.ts         # публичные named exports
playground/        # галерея для локального просмотра и GitHub Pages
dist/              # артефакты сборки (публикуются в пакет)
```
