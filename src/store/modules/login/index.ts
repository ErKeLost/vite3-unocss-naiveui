import { signin, signup, logout, refreshToken } from '@/services/modules'

interface loginFormType {
  username: string
  password: string
}
export const useAuthStore = defineStore(
  'auth-store',
  () => {
    // 登录动画
    const isLoginType = ref<boolean>(true)
    // 登录
    const loginForm: loginFormType | null = reactive({
      username: '',
      password: ''
    })

    async function useLogin() {
      const loginRes = await signin(loginForm)
      console.log(loginRes)
    }
    return {
      loginForm,
      useLogin,
      isLoginType
    }
  },
  {
    persist: {
      // enabled: true
    }
  }
)
