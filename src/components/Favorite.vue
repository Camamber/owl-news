<template>
    <div>   
        <h1>hi</h1>
    </div>
</template>

<script>
import Slider from './Slider.vue'

export default {
    name: 'Favorite',
    title: 'Owl News - Избранное',
    components: {
        'news-slider': Slider
    },
    data () {
        return {
          msg: 'My Feed'
        }
    }
}
</script>