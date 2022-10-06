import { request } from '@/services'

export function getReleaseDynamic(data: any) {
  return request.post({
    url: '/dynamic/release',
    data
  })
}
