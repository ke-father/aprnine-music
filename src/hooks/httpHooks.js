// 网络请求hooks
// 导入vue方法
import { getCurrentInstance } from 'vue'

// 开放自定义hooks
export default function () {
  // 获取组件实例
  const instance = getCurrentInstance()
  // 获取自定义变量
  const $http = instance.appContext.config.globalProperties.$http

  return { $http }
}
