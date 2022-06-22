<template>
	<div>
		<section>
			<form @submit.prevent="submitForm">
				<div class="form-control">
					<label for="email">E-Mail</label>
					<input type="email" id="email" v-model.trim="email" />
				</div>
				<div class="form-control">
					<label for="password">Password</label>
					<input type="password" id="password" v-model.trim="password" />
				</div>
				<button>Login</button>
			</form>
		</section>
	</div>
</template>

<script>
	import axios from 'axios';
	export default {
		data() {
			return {
				email: '',
				password: '',
				error: null,
			};
		},
		methods: {
			async submitForm() {
				const response = await axios.post(
					'http://localhost:3000/api/user/login',
					{
						email: this.email,
						password: this.password,
					}
				);

				const responseData = await response.data;

				const expiresIn = +responseData.expiresIn * 5000;
				const expirationDate = new Date().getTime() + expiresIn;

				localStorage.setItem('token', responseData.token);
				localStorage.setItem('userId', responseData.userId);
				localStorage.setItem('email', responseData.email);
				localStorage.setItem('tokenExpiration', expirationDate);
				this.$cookies.set('token', responseData.token);
				this.$cookies.set('userId', responseData.userId);
				this.$cookies.set('email', responseData.email);
				this.$cookies.set('tokenExpiration', expirationDate);

				this.$store.commit('setUser', {
					token: responseData.token,
					userId: responseData.userId,
				});
			},
		},
	};
</script>

<style scoped>
	form {
		margin: 1rem;
		padding: 1rem;
	}
	.form-control {
		margin: 0.5rem 0;
	}
	label {
		font-weight: bold;
		margin-bottom: 0.5rem;
		display: block;
	}
	input,
	textarea {
		display: block;
		width: 100%;
		font: inherit;
		border: 1px solid #ccc;
		padding: 10px;
		border-radius: 20px;
	}
	input:focus,
	textarea:focus {
		background-color: #eee;
		outline: none;
	}
	button {
		padding: 10px;
		border: 0px;
		background-color: #eee;
		color: #000;
		cursor: pointer;
	}
</style>
