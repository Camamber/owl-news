<template>
    <slick  id="slider" ref="slick" :options="slickOptions">
        <slider-item  v-for="news in $store.state.slides" :key="news.news_id" :news="news"/>
    </slick>
</template>

<script>
import Slick from 'vue-slick';
import SliderItem from './SliderItem.vue'

export default {
    components: {
        'slider-item': SliderItem,
        'slick': Slick 
    },
    data () {
        return {
            slickOptions: {
                'arrows': false,
                'autoplay': true
            }
        }
    },      
    methods: {
        reInit() {
            // Helpful if you have to deal with v-for to update dynamic lists
            this.$nextTick(() => {
                this.$refs.slick.reSlick();
            });
        }
    },
    created() {
        this.$store.dispatch('retrieveImportantList')
    }
}
</script>

<style lang="scss">
    @import '../../node_modules/slick-carousel/slick/slick.scss';
</style>