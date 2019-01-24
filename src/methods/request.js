import axios from 'axios'
import { Message } from 'element-ui'

const get = (url, params = {}, callback) => {
  if (!callback) {
    callback = params
    params = {}
  }
  axios.get(url, {params})
    .then((res) => {
      callback(res)
    })
    .catch((error) => {
      console.log(error)
      Message({
        message: '请求异常',
        type: 'error'
      })
    })
}

const post = (url, params, callback) => {
  axios.post(url, params)
    .then((res) => {
      callback(res)
    })
    .catch((error) => {
      console.log(error)
      Message({
        type: 'error',
        message: '请求异常'
      })
    })
}

export {
  get,
  post
}
