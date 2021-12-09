// 请求模块
import axios from 'axios'
const request = axios.create({
  baseUrl: 'http://ttapi.research.itcast.cn/'
})
export default request
