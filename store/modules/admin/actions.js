let timer;

import axios from 'axios';

export default {
	async auth(context, payload) {
		const url = 'http://localhost:3000/api/user/login';

		const response = await axios.post(url, {
			email: payload.email,
			password: payload.password,
		});

		const responseData = await response.data;

		if (!response.ok) {
			const error = new Error(
				responseData.message || 'Failed to authenticate. Check your login data.'
			);
			throw error;
		}

		const expiresIn = +responseData.expiresIn * 5000;
		const expirationDate = new Date().getTime() + expiresIn;

		localStorage.setItem('token', responseData.token);
		localStorage.setItem('userId', responseData.userId);
		localStorage.setItem('tokenExpiration', expirationDate);

		context.commit('setUser', {
			token: responseData.token,
			userId: responseData.userId,
		});
	},
	tryLogin(context) {
		context.commit('setUser', {
			token: responseData.token,
			userId: responseData.userId,
		});
		if (token && userId) {
			context.commit('setUser', {
				token: token,
				userId: userId,
			});
		}
	},
};
