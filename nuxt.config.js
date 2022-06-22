export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'nuxt-project',
		htmlAttrs: {
			lang: 'en',
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{
				hid: 'description',
				name: 'description',
				content: 'nuxt project',
			},
			{ name: 'format-detection', content: 'telephone=no' },
		],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
	},
	ssr: true,
	target: 'server',

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ['~static/style/main.css'],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: {
		dirs: ['~/components', '~/components/layout'],
	},

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/axios
		['@nuxtjs/axios'],
		['@nuxtjs/auth-next'],
		['cookie-universal-nuxt', { alias: 'cookies', parseJSON: false }],
	],

	// Axios module configuration: https://go.nuxtjs.dev/config-axios
	axios: {
		baseURL: 'http://localhost:3000/api',
	},

	auth: {
		strategies: {
			local: {
				token: {
					required: false,
					type: false,
				},
				endpoints: {
					login: {
						url: 'http://localhost:3000/api/user/login',
						method: 'post',
					},
				},
			},
		},
	},

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {},

	serverMiddleware: [{ path: 'api/', handler: '~/api/index.js' }],
};
