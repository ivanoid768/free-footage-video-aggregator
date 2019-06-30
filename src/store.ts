import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		search_input: ''
	},
	mutations: {
		setSearch(state, payload) {
			state.search_input = payload.search;
		}

	},
	actions: {

	},
});
