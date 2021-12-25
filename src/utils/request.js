// 请求配置文件
import axios from 'axios'

// 创建axios实例
const request = axios.create({
  // 配置基础请求路径
  baseURL: process.env.VUE_APP_URL
})

// 请求拦截器
request.interceptors.request.use((config) => {
  // 推出请求
  return config
}, error => {
  console.log(error)
})

// 响应拦截器
request.interceptors.response.use((config) => {
  // 推出响应
  return config
}, error => {
  console.log(error)
})

export default request
