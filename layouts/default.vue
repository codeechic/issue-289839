<template>
	<div>
		<TheNav />
		<Nuxt />
		<TheFooter />
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
