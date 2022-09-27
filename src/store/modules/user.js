/* eslint-disable */
import {login} from '@/api/login'
export default {
	namespaced: true,
	state: {
		token: null,
	},
	mutations: {
		setToken(state, token) {
			state.token = token; // 设置token  只是修改state的数据
		}
	},
	actions: {// 执行异步
    // 定义 loginAction  也需要参数调用action时 传递过来的参数
		async loginAction({ commit }, loginForm) {
			// 发送请求获取用户token

			const {data:{token}} = await login(loginForm)
			console.log(token)
			// 接口
			commit('setToken', token)
			
	 }
	}
}
