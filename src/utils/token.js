class Token {
  setToken(token) {
    localStorage.setItem('token', token)
  }
  getToken(name) {
    localStorage.getItem(name)
  }
  removeToken(name) {
    localStorage.removeItem(name)
  }
}
export default new Token()
