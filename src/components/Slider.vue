<template>
    <slick  id="slider" ref="slick" :options="slickOptions">
        <slider-item  v-for="image in images" :key="image.id" :src="image.src"/>
    </slick>
</template>

<script>
import SliderItem from './SliderItem.vue'
import Slick from 'vue-slick';

let slideId = 1
export default {
    components: {
        'slider-item': SliderItem,
        Slick 
    },
    data () {
        return {
            slickOptions: {
                'arrows': false,
                'autoplay': true
            },
            images: [
                {
                    id: slideId++,
                    src: 'slide-1.jpg'
                },                
                {
                    id: slideId++,
                    src: 'slide-1.jpg'
                }
            ]
        }
    }
}
</script>

<style lang="scss">
    @import '../../node_modules/slick-carousel/slick/slick.scss';
</style>