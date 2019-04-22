<template>
    <ul class="filter" v-if="categories.length">
        <filter-item
            v-for="category in categories"
            :key="category.id"
            :name="category.name"
        />
    </ul>
    <p v-else>
        No filters.
    </p>
</template>

<script>
import FilterItem from './FilterItem.vue'

let catId = 1
export default {
    components: {
        'filter-item': FilterItem
    },
    data () {
        return {
            categories: [
                {
                    id: catId++,
                    slug: '',
                    name: 'Знаменитости'
                },                
                {
                    id: catId++,
                    slug: 'style',
                    name: 'Стиль'
                },                
                {
                    id: catId++,
                    slug: 'eat',
                    name: 'Еда'
                },                
                {
                    id: catId++,
                    slug: '',
                    name: 'Wellness'
                },                
                {
                    id: catId++,
                    slug: '',
                    name: 'Психология'
                },                
                {
                    id: catId++,
                    slug: 'techno',
                    name: 'Техно'
                },                
                {
                    id: catId++,
                    slug: 'afisha',
                    name: 'Афиша'
                },                
                {
                    id: catId++,
                    slug: 'fun',
                    name: 'Fun'
                },                
                {
                    id: catId++,
                    slug: 'travel',
                    name: 'Путешествия'
                }
            ]
        }
    }
}
</script>