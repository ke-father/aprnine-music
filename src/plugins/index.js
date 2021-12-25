// 插件安装文件
// 关于请求
import test from '../utils/request/test'

export default {
  install(app) {
    // 挂载请求
    app.config.globalProperties.$http = { ...test }
  }
}
