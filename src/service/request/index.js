import axios from 'axios'
import { BASE_URL, TIME_OUT } from '../config/config'
class MyRequest {
  constructor(BASE_URL, TIME_OUT) {
    this.instance = axios.create({
      baseURL: BASE_URL,
      timeout: TIME_OUT,
    })
  }
  request(config) {
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
  get(config) {
    return this.instance.request({ ...config, method: 'GET' })
  }
  post(config) {
    return this.instance.request({ ...config, method: 'POST' })
  }
}

export default new MyRequest(BASE_URL, TIME_OUT)
