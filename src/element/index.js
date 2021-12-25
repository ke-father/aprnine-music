// element-plus配置文件
import { ElButton } from 'element-plus'

const elements = [ElButton]

// 开放方法
export default function(app, options = elements) {
  options.forEach(item => app.use(item))
}
