<script setup lang="ts">
const loginData = reactive({
  username: "",
  password: "",
  loading: false,
});
async function handleLogin() {
  loginData.loading = true;
  const { loginApi } = useLogin();

  try {
    await loginApi({
      username: loginData.username,
      password: loginData.password,
    });
  } catch (error) {
    console.log(error);
  } finally {
    // eslint-disable-next-line require-atomic-updates
    loginData.loading = false;
  }
}
</script>

<template>
  <div w-full>
    <div flex justify-center>
      <Twitter w-15 h-15 />
    </div>
    <div pt-5>
      <span block my-3>Username</span>
      <n-input
        v-model:value="loginData.username"
        type="text"
        round
        size="large"
        placeholder="@username"
      />
      <span block my-3>Password</span>
      <n-input
        v-model:value="loginData.password"
        type="password"
        round
        size="large"
        placeholder="*******"
      />
      <n-button round my-10 block size="large" @click="handleLogin"
        >登录</n-button
      >
    </div>
  </div>
</template>

<style scoped>
.button {
  letter-spacing: 2px;
}
</style>
