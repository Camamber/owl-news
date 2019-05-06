import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
axios.defaults.baseURL = 'http://192.168.1.3:1441/api'

export const store = new Vuex.Store({
	state: {
		news: [],
		categories: [],
		filters: [],
		view : 'grid-feed',
		current_news: {}

	},
	getters: {
		isGrid(state) {
			return state.view === 'grid-feed'
		},
		isFlow(state) {
			return state.view === 'flow-feed'
		},
		getFilters(state) {
			return state.filters.join(',')
		}
	},
	mutations: {
		retrieveNewsList(state, news_list) {
			state.news = news_list
		},
		retrieveNews(state, news) {
			state.current_news = news
		},
		addNews(state, news) {

		},
		removeNews(state, news) {

		},
		setFilter(state, filter) {
			if(filter.checked)
				state.filters.push(filter.id)
			else
				state.filters = state.filters.filter(f => f != filter.id)
		},
		retrieveCatList(state, cat_list) {
			state.categories = cat_list
		},
		setNewsView(state, view) {
			if(state.view !== view)
				state.view = view
		}
	},
	actions: {
		retrieveNewsList(context) {
	    	axios.get(`/news?filters=${this.getters.filters}`)
		        .then(response => {
		          context.commit('retrieveNewsList', response.data)
		        })
		        .catch(error => {
		          console.log(error)
		        })
    	},
    	retrieveNews(context, news_id) {
    		axios.get(`/news/${news_id}`)
		        .then(response => {
		          context.commit('retrieveNews', response.data)
		        })
		        .catch(error => {
		          console.log(error)
		        })
		},
		retrieveCatList(context) {
	    	axios.get('/category')
		        .then(response => {
		          context.commit('retrieveCatList', response.data)
		        })
		        .catch(error => {
		          console.log(error)
		        })
    	},
    	setFilter(context, filter) {
			context.commit('setFilter', filter)


		},
		setNewsView(context, view) {
			context.commit('setNewsView', view)
		}
	}
	
})