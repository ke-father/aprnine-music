// 请求测试文件
import request from '../request'

const test = async () => {
  const data = await request.get('/playlist/catlist')
  return data
}

export default {test}
