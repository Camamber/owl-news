<template>
    <div>
        <news-slider></news-slider>
        <section id="content">
            <div class="wrapper">
                <news-feed :title="'Новости'"></news-feed>
                <div id="sidebar">
                    <div class="bread">
                        <p>Фид</p>
                        <hr/>
                    </div>

                    <twitter-timeline :id="'tsnweek'" :sourceType="'profile'" :options="{ tweetLimit: '3' }"/>
                    <!-- <a id="twitter-widget" class="twitter-timeline" data-lang="ru" data-tweet-limit="1" href="https://twitter.com/tsnweek">National Park Tweets - Curated tweets by TwitterDev</a>  -->
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import News from '@/components/NewsFeed.vue'
import { Tweet, Moment, Timeline } from 'vue-tweet-embed'

export default {
    name: 'Category',
    title: 'Owl News',
    components: {
        'news-feed': News,
        'twitter-timeline': Timeline,
    },
    data () {
        return { }
    }
}
</script>