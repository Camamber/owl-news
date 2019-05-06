<template>
    <div>   
        <news v-if="$store.state.current_news.id == this.$route.params.id" :news="$store.state.current_news"></news>
    </div>
</template>

<script>
import axios from 'axios'
import News from '@/components/News.vue'

export default {
    name: 'News',
    components: {
        'news': News
    },
    data () {
        return { 
            
        }
    },
    created() {
        this.$store.dispatch('retrieveNews', this.$route.params.id)
    }
}
</script>