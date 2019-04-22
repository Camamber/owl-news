<template>
    <div class="news-preview">
		<img :src="require(`../img/${ news.img }`)">
		<p class="title">{{news.title}}</p>
		<hr>
		<p class="date">{{news.date}}</p>
		<p class="description">{{news.description}}</p>
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
    }  
}
</script>