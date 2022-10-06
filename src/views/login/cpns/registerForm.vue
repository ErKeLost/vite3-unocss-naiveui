<script setup lang="ts">
import { useAuthStore } from '~/store'

const { isLoginType, registerFrom } = storeToRefs(useAuthStore())
const { useRegister } = useAuthStore()
async function handleLogin() {
  console.log(registerFrom)

  await useRegister()
}
</script>

<template>
  <div w-full relative>
    <div pt-5>
      <span block my-3>Username</span>
      <n-input
        v-model:value="registerFrom.username"
        type="text"
        round
        size="large"
        placeholder="@username"
      />
      <span block my-3>Email</span>
      <n-input
        v-model:value="registerFrom.email"
        type="text"
        round
        size="large"
        placeholder="email"
      />
      <span block my-3>Password</span>
      <n-input
        v-model:value="registerFrom.password"
        type="password"
        round
        size="large"
        placeholder="*******"
      />
      <div flex justify-between my-8 items-center>
        <n-button w-35 @click="handleLogin">注册</n-button>
        <a
          border-b
          border-dark
          border-b-dashed
          href="#"
          @click="isLoginType = true"
          >已经注册， 去登录</a
        >
      </div>
    </div>
  </div>
</template>

<style scoped></style>
