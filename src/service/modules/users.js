import MyRequest from '../request'

export function getRegister({ username, password, rePassword }) {
  return MyRequest.post({
    url: '/api/reg',
    data: {
      username,
      password,
      repassword: rePassword,
    },
  })
}
