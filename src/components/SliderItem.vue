<template>
    <div class="slide" :style="{ background: 'url('+require(`../img/${ news.img }`)+')'}">
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
           alert(`Тут будет роут к news/${this.news.slug}`);
        }
    }
}
</script>