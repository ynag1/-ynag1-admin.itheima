// 引入axios
/* eslint-disable  */
import request from '@/utils/request.js'

export function login(data) {
  return request({
    url: '/api/user-service/user/login',
    method: 'post',
		data
	 })
}
/**
 * 
 * @param {*} clientToken 验证码
 * @returns 
 */
 export function loginImg(clientToken) {
  return request({
    url: `/api/user-service/user/imageCode/${clientToken}`,
	 })
}