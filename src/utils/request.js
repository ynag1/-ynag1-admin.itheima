// 实现对axios
import axios from 'axios'
// 通过axios 创建axios 实例
const service = axios.create({
  baseURL: 'http://likede2-admin.itheima.net/likede/', // 基准地址
  timeout: 5000
})
export default service
