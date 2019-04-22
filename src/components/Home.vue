<template>
    <div>
        <news-slider></news-slider>
        <section id="content">
            <div class="wrapper">
                <news :title="'Новости'"></news>
                <div id="sidebar">
                    <div class="bread">
                        <p>Фильтр</p>
                        <hr/>
                    </div>
                    <category-filter></category-filter>
                    <twitter-timeline :id="'tsnweek'" :sourceType="'profile'" :options="{ tweetLimit: '1' }"/>
                    <!-- <a id="twitter-widget" class="twitter-timeline" data-lang="ru" data-tweet-limit="1" href="https://twitter.com/tsnweek">National Park Tweets - Curated tweets by TwitterDev</a>  -->
                </div>
            </div>
        </section>
    </div>
</template>

<script>

import Slider from './Slider.vue'
import Filter from './Filter.vue'
import News from './News.vue'
import { Tweet, Moment, Timeline } from 'vue-tweet-embed'

export default {
    name: 'Home',
    title: 'Owl News - Главная',
    components: {
        'category-filter': Filter,
        'news-slider': Slider,
        'news': News,
        'twitter-timeline': Timeline,
    },
    data () {
        return {
            msg: 'Welcome'
        }
    }
}
</script>