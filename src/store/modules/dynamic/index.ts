import { getReleaseDynamic } from '@/services/modules'
export const useDynamicStore = defineStore(
  'dynamic-store',
  () => {
    async function releaseDynamic(data) {
      const res = await getReleaseDynamic(data)
      console.log(res)
    }
    return {
      releaseDynamic
    }
  },
  {
    persist: {
      // enabled: true
    }
  }
)
