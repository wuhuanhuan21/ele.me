import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		nav:{
			title: '',
      subtitle: '',
      navLevel1: '',
      navLevel2: '',
      url: ''
		}
	},
	mutations:{
		setNav(state, payload){
			state.nav = { ...payload }
		}
	}
})

export default store