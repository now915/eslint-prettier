import axios from 'axios'

const config = {
  // baseURL: 'http://192.168.5.14:8080/',
  timeout: 60000,
  headers: {
    'X-Header': 'THISISAHEADER',
  },
}
const instance = axios.create(config)

instance.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

instance.interceptors.response.use(
  (response) => {
    if (response.data.code === 0) {
      return response.data.data
    }
    return response
  },
  (error) => {
    return Promise.reject(error)
  },
)

export default instance
