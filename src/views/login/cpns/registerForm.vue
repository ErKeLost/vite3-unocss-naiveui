<script setup lang="ts">
import { useAuthStore } from '~/store'

const { isLoginType } = storeToRefs(useAuthStore())
</script>

<template>
  <div @click="isLoginType = true">注册</div>
</template>

<style scoped></style>
