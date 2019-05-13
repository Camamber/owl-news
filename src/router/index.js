import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Favorite from '@/pages/Favorite'
import News from '@/pages/News'
import Category from '@/pages/Category'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        }, 
        {
            path: '/favorite',
            name: 'Favorite',
            component: Favorite
        },
        {
            path: '/news/:id',
            name: 'News',
            component: News
        },
        {
            path: '/category/:slug',
            name: 'Category',
            component: Category
        }
    ]
})
