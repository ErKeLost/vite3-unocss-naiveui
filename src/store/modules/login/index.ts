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
      localStorage.setItem('access_token', loginRes.access_token)
    }

    // 注册
    const registerFrom: any = reactive({
      username: '',
      password: '',
      email: ''
    })

    async function useRegister() {
      const registerRes = await signup(registerFrom)
      console.log(registerRes)
    }
    return {
      loginForm,
      useLogin,
      isLoginType,
      registerFrom,
      useRegister
    }
  },
  {
    persist: {
      // enabled: true
    }
  }
)
