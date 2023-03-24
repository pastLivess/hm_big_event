import MyRequest from '../request'

export function login() {
  return MyRequest.post({
    url: '/api/reg',
  })
}
