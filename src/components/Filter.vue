<template>
    <ul class="filter" v-if="$store.state.categories.length">
        <filter-item
            v-for="category in $store.state.categories"
            :key="category.id"
            :category="category"
        />
    </ul>
    <p v-else></p>
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
        }
    }
}
</script>