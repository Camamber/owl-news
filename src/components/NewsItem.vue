<template>
    <div class="news-preview">
		<img :src="require(`../img/${ news.image }`)">
		<router-link :to="`news/${news.news_id}`"><p class="title">{{news.title}}</p></router-link>
		<hr>
		<p class="date">{{dateFormat()}}</p>
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
	},
	methods: {
		dateFormat() {
			let date = new Date(this.news.date)
			return `${this.pad(date.getDate())}.${this.pad(date.getMonth()+1)}.${this.pad(date.getFullYear())} ${this.pad(date.getHours())}:${this.pad(date.getMinutes())}`
		},
		pad(n) {
			return n < 10 ? '0'+n : n
		}
	}
}
</script>