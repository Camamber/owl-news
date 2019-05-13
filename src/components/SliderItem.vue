<template>
    <div class="slide" :style="{ backgroundImage: 'url('+require(`../img/${ news.image }`)+')'}">
        <div class="blur">
            <div class="info">
                <h2>{{news.title}}</h2>
                <p>{{news.description}}</p>
                <div class="btn-more" v-on:click="route" >Подробнее</div>
            </div>  
        </div>
    </div>
</template>
<script>

export default {
	props: {
        news: {
            type: Object,
            required: true
        }
    },
    data() {
        return { }
    },
    methods: {
        route() { 
           this.$router.push({ name: 'News', params: { id: this.news.news_id } })
        }
    }
}
</script>