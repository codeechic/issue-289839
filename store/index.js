import Vuex from 'vuex';
import Vue from 'vue';
import adminModule from './modules/admin/index.js';

Vue.use(Vuex);

export default () =>
	new Vuex.Store({
		state: () => ({}),
		mutations: {},
		actions: {},
		modules: {
			auth: adminModule,
		},
	});
