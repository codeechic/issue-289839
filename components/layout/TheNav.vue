<template>
	<div>
		<div>
			<ul>
				<li><nuxt-link to="/">Home</nuxt-link></li>
				<li v-if="!isAuthenticated">
					<nuxt-link to="/admin/auth">Login</nuxt-link>
				</li>
				<li v-if="isAuthenticated">
					<nuxt-link to="/admin">Admin</nuxt-link>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		computed: {
			isAuthenticated() {
				return this.$store.getters.isAuthenticated;
			},
		},
	};
</script>
