<template>
    <slick  id="slider" ref="slick" :options="slickOptions">
        <slider-item  v-for="n in news" :key="n.id" :news="n"/>
    </slick>
</template>

<script>
import SliderItem from './SliderItem.vue'
import Slick from 'vue-slick';

let slideId = 1
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
            },
            news: [
                {
                    id: slideId++,
                    title: 'Всё, что нужно знать перед началом ESL One Katowice 2019',
                    date: '19.02.2019, 15:43',
                    img: 'slide-1.jpg',
                    slug: 'novost1',
                    description: 'Уже 19-го февраля в Польше стартует очередной турнир серии ESL One, участники которого разыграют между собой призовой фонд в $300,000. Единственной командой — представительницей СНГ-региона на турнире станет отобравшаяся от Европы Gambit Esports.'
                },
                {
                    id: slideId++,
                    title: 'Всё, что нужно знать перед началом ESL One Katowice 2019',
                    date: '19.02.2019, 15:43',
                    img: 'slide-1.jpg',
                    slug: 'novost2',
                    description: 'Уже 19-го февраля в Польше стартует очередной турнир серии ESL One, участники которого разыграют между собой призовой фонд в $300,000. Единственной командой — представительницей СНГ-региона на турнире станет отобравшаяся от Европы Gambit Esports.'
                },
            ]
        }
    }
}
</script>

<style lang="scss">
    @import '../../node_modules/slick-carousel/slick/slick.scss';
</style>