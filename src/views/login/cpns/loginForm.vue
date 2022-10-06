<script setup lang="ts">
import { useAuthStore } from '@/store'

const shakeChecked = ref<boolean>(false)
const judgeShakeClass = ref<boolean>(false)
const authStore = useAuthStore()
const router = useRouter()

async function handleLogin() {
  // router.push({
  //   path: '/home/status'
  // })
  if (!shakeChecked.value) {
    judgeShakeClass.value = true
  }
  setTimeout(() => {
    judgeShakeClass.value = false
  }, 800)
  await authStore.useLogin()
}
</script>

<template>
  <div w-full relative>
    <div flex justify-center>
      <div class="box">
        <div class="paopao"></div>
        <div class="shadow"></div>
      </div>
    </div>
    <div flex justify-center>
      <!-- <Twitter w-15 h-15 /> -->
    </div>
    <div pt-5>
      <span block my-3>Username</span>
      <n-input
        v-model:value="authStore.loginForm.username"
        type="text"
        round
        size="large"
        placeholder="@username"
      />
      <span block my-3>Password</span>
      <n-input
        v-model:value="authStore.loginForm.password"
        type="password"
        round
        size="large"
        placeholder="*******"
      />
      <n-button round my-10 block size="large" @click="handleLogin"
        >登录</n-button
      >
      <div :class="{ shake: judgeShakeClass }">
        <n-checkbox
          v-model:checked="shakeChecked"
          size="medium"
          label="同意 《个人信息保护政策》《服务协议》"
        />
      </div>
      <div flex justify-between my-8>
        <a border-b border-dark border-b-dashed href="#">没有账号 ？ 去注册</a>
        <a border-b border-dark border-b-dashed href="#">忘记密码 </a>
      </div>
      <div>
        <n-divider title-placement="center"> Or </n-divider>
      </div>
      <div mt-20 flex justify-center gap-10 text-2xl>
        <Twitter />
        <Github />
        <Vercel />
      </div>
    </div>
  </div>
</template>

<style scoped>
.button {
  letter-spacing: 2px;
}

.box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  position: relative;
}
.paopao {
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle at 70% 30%,
    #c4cb78 10%,
    #adbf94 60%,
    #ca815a 100%
  );
  border-radius: 50%;
  box-shadow: inset 0 0 20px #fff, inset 10px 0 50px #eaf5fc,
    inset 80px 0 60px #efcde6, inset -20px -60px 100px #f9f6de,
    inset 0 50px 150px #f9f6de, 0 0 90px #fff;
  animation: move 3s ease-in-out infinite;
}
.shadow {
  position: absolute;
  left: 70px;
  bottom: -80px;
  width: 150px;
  height: 50px;
  border-radius: 50%;
  background-color: #7e7e7e;
  filter: blur(5px);
  animation: move1 3s ease-in-out infinite;
}
@keyframes move {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-90px);
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes move1 {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
