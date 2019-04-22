<template>
    <div class="news-preview">
		<img :src="require(`../img/${ news.img }`)">
		<router-link :to="`news/${news.slug}`"><p class="title"> {{news.title}}</p></router-link>
		<hr>
		<p class="date">{{news.date}}</p>
		<p class="description">{{news.description}}</p>
	</div>
</template>

<style>
	a {
		text-decoration: none;
		color: white;
	}
</style>

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
    }  
}
</script>