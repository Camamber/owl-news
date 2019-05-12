<template>
    <div>   
        <single-news v-if="$store.state.current_news.news_id == this.$route.params.id"></single-news>
    </div>
</template>

<script>
import SingleNews from '@/components/SingleNews.vue'

export default {
    name: 'News',
    components: {
        'single-news': SingleNews
    },
    data () {
        return { }
    },
    created() {
        this.$store.dispatch('retrieveNews', this.$route.params.id)
    }
}
</script>