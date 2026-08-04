<script setup lang="ts">
import { computed, ref } from 'vue'
import type { Component } from 'vue'
import * as pkg from '../src/index'
import { sportIcons, type SportIconKey } from '../src/sportIcons'

const size = ref(32)
const stroke = ref(2)
const query = ref('')
const dark = ref(false)

const iconComponents = Object.entries(pkg).filter(
  (entry): entry is [string, Component] =>
    entry[0].startsWith('Icon') && typeof entry[1] !== 'undefined',
)

const sportKeys = Object.keys(sportIcons) as SportIconKey[]

const filteredIcons = computed(() => {
  const q = query.value.trim().toLowerCase()
  if (!q) return iconComponents
  return iconComponents.filter(([name]) => name.toLowerCase().includes(q))
})

const filteredSports = computed(() => {
  const q = query.value.trim().toLowerCase()
  if (!q) return sportKeys
  return sportKeys.filter((key) => key.toLowerCase().includes(q))
})

async function copyName(name: string) {
  try {
    await navigator.clipboard.writeText(name)
  } catch {
    // ignore
  }
}
</script>

<template>
  <div class="page" :class="{ dark }">
    <header class="header">
      <div>
        <h1>Win Predict AI Icons</h1>
        <p class="subtitle">Vue 3 · Tabler-style · {{ iconComponents.length }} icons</p>
      </div>
      <div class="controls">
        <label class="field">
          <span>Search</span>
          <input v-model="query" type="search" placeholder="IconSearch…" />
        </label>
        <label class="field">
          <span>Size {{ size }}</span>
          <input v-model.number="size" type="range" min="16" max="64" step="2" />
        </label>
        <label class="field">
          <span>Stroke {{ stroke }}</span>
          <input v-model.number="stroke" type="range" min="1" max="3" step="0.5" />
        </label>
        <button type="button" class="theme-btn" @click="dark = !dark">
          {{ dark ? 'Light' : 'Dark' }}
        </button>
      </div>
    </header>

    <section v-if="filteredSports.length" class="section">
      <h2>sportIcons map</h2>
      <div class="grid">
        <button
          v-for="key in filteredSports"
          :key="key"
          type="button"
          class="cell"
          :title="`Copy sportIcons.${key}`"
          @click="copyName(`sportIcons.${key}`)"
        >
          <component :is="sportIcons[key]" :size="size" :stroke="stroke" />
          <span class="name">{{ key }}</span>
        </button>
      </div>
    </section>

    <section v-if="filteredIcons.length" class="section">
      <h2>Components</h2>
      <div class="grid">
        <button
          v-for="[name, Icon] in filteredIcons"
          :key="name"
          type="button"
          class="cell"
          :title="`Copy ${name}`"
          @click="copyName(name)"
        >
          <component :is="Icon" :size="size" :stroke="stroke" />
          <span class="name">{{ name }}</span>
        </button>
      </div>
    </section>

    <p v-if="!filteredIcons.length && !filteredSports.length" class="empty">No matches</p>
  </div>
</template>

<style>
:root {
  color-scheme: light;
  --bg: #f6f4f1;
  --surface: #fff;
  --text: #1a1a1a;
  --muted: #6b6b6b;
  --border: #e4e0da;
  --accent: #0f766e;
  --shadow: 0 1px 2px rgb(0 0 0 / 4%);
  font-family: 'Segoe UI', system-ui, sans-serif;
}

.page.dark {
  color-scheme: dark;
  --bg: #121416;
  --surface: #1c1f23;
  --text: #f2f2f2;
  --muted: #9a9a9a;
  --border: #2c3138;
  --accent: #2dd4bf;
  --shadow: none;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

.page {
  min-height: 100vh;
  background:
    radial-gradient(ellipse 80% 50% at 50% -20%, rgb(15 118 110 / 12%), transparent),
    var(--bg);
  color: var(--text);
  padding: 2rem 1.25rem 4rem;
}

.header {
  max-width: 1100px;
  margin: 0 auto 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: space-between;
  align-items: end;
}

h1 {
  margin: 0 0 0.25rem;
  font-size: 1.75rem;
  font-weight: 650;
  letter-spacing: -0.02em;
}

.subtitle {
  margin: 0;
  color: var(--muted);
  font-size: 0.95rem;
}

.controls {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1rem;
  align-items: end;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  font-size: 0.75rem;
  color: var(--muted);
  min-width: 140px;
}

.field input[type='search'] {
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--text);
  border-radius: 8px;
  padding: 0.45rem 0.65rem;
  font: inherit;
}

.field input[type='range'] {
  width: 100%;
  accent-color: var(--accent);
}

.theme-btn {
  border: 1px solid var(--border);
  background: var(--surface);
  color: var(--text);
  border-radius: 8px;
  padding: 0.45rem 0.85rem;
  cursor: pointer;
  font: inherit;
  font-size: 0.85rem;
}

.theme-btn:hover {
  border-color: var(--accent);
}

.section {
  max-width: 1100px;
  margin: 0 auto 2rem;
}

.section h2 {
  margin: 0 0 0.85rem;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--muted);
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 0.65rem;
}

.cell {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.65rem;
  padding: 1rem 0.5rem 0.85rem;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--surface);
  box-shadow: var(--shadow);
  color: inherit;
  cursor: pointer;
  font: inherit;
  transition: border-color 0.15s ease, transform 0.15s ease;
}

.cell:hover {
  border-color: var(--accent);
  transform: translateY(-1px);
}

.name {
  font-size: 0.7rem;
  color: var(--muted);
  text-align: center;
  word-break: break-word;
  line-height: 1.3;
}

.empty {
  max-width: 1100px;
  margin: 3rem auto;
  text-align: center;
  color: var(--muted);
}
</style>
