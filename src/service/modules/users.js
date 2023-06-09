import MyRequest from '../request'

export function getRegister({ username, password, rePassword: repassword }) {
  return MyRequest.post({
    url: '/api/reg',
    data: {
      username,
      password,
      repassword,
    },
  })
}
export function getLogin({ username, password }) {
  return MyRequest.post({
    url: '/api/login',
    data: { username, password },
  })
}
