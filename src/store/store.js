import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
axios.defaults.baseURL = 'http://localhost:1441/api'

export const store = new Vuex.Store({
	state: {
		news: [],
		slides: [],
		categories: [],
		filters: [],
		view: 'grid-feed',
		current_news: {}

	},
	getters: {
		getStoredView(state) {
			if (localStorage.view) {
				return localStorage.view
			} else {
				return null
			}
		},
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
		appendNewsList(state, news_list) {
			state.news.push(...news_list)
		},
		retrieveImportantList(state, news_list) {
			state.slides = news_list
		},
		retrieveNews(state, news) {
			state.current_news = news
		},
		addNews(state, news) {

		},
		removeNews(state, news) {

		},
		setFilter(state, filter) {
			if (filter.checked) {
				state.filters.push(filter.id)
			} else {
				state.filters = state.filters.filter(f => f != filter.id)
			}
		},
		retrieveCatList(state, cat_list) {
			state.categories = cat_list
		},
		setNewsView(state, view) {
			if (view && state.view !== view)
				state.view = view
		}
	},
	actions: {
		retrieveNewsList(context, params) {
			console.log(params)
			let query = [];
			if (this.state.filters.length > 0) {
				query.push(`filters=${this.getters.getFilters}`);
			}
			if (params) {
				if (params.offset) {
					query.push(`offset=${params.offset}`);
				}
				if (params.count) {
					query.push(`count=${params.count}`);
				}
			}

			axios.get(`/news?${query.join('&')}`)
				.then(response => {
					if (params) {
						context.commit('appendNewsList', response.data)
					} else {
						context.commit('retrieveNewsList', response.data)
					}
				})
				.catch(error => {
					console.log(error)
				})
		},
		retrieveImportantList(context) {
			axios.get(`/news/important`)
				.then(response => {
					context.commit('retrieveImportantList', response.data)
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
			localStorage.view = view
			context.commit('setNewsView', view)
		},
		restoreNewsView(context) {
			context.commit('setNewsView', this.getters.getStoredView);
		}
	}
})