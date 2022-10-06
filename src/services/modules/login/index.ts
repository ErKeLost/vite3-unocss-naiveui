import { request } from '@/services'

export function signin(data: any) {
  return request.post({
    url: '/auth/signin',
    data
  })
}

export function signup(data: any) {
  return request.post({
    url: '/auth/signup'
  })
}

export function logout(data: any) {
  return request.post({
    url: '/auth/logout'
  })
}

export function refreshToken() {}
