<script setup lang="ts">
import { darkTheme, lightTheme } from 'naive-ui'
// const res = computed(() => (toggleDark() ? darkTheme : undefined))
const res = ref(lightTheme)
function useTheme() {
  const theme = toggleDark()
  console.log(theme)
  theme ? (res.value = darkTheme) : (res.value = lightTheme)
}
</script>

<template>
  <button
    class="icon-btn mx-2 absolute z-10 right-10 top-5 text-2xl !outline-none"
    title="toggle-dark-mode"
    @click="useTheme"
  >
    <div i="carbon-sun dark:carbon-moon" />
  </button>
  <n-config-provider :theme="res">
    <RouterView />
  </n-config-provider>
</template>
