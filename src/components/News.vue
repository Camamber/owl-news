<template>
    <div class="single-news">   
    	<h1>{{news.title}}</h1>
    	<p class="date">{{news.date}}</h3>
    	<hr/>
        <img :src="require(`../img/${ news.img }`)">
        <p>{{news.text}}</p>
    </div>
</template>

<style lang="scss">
	.single-news {
		width: 80%;
		margin: 30px auto;

		h1 {
			width: 100%;
			font-size: 28px;
			margin-bottom: 10px;
		}

		p{
			font-size: 18px;
		}

		.date {
			color: #787878;
			margin-bottom: 10px;
		}

		img {
			width: 100%;
			margin-bottom: 10px;
		}

		hr {
		    border: none;
		    color: red;
		    background-color: red; 
		    height: 2px; 
		    width: 200px;
		    margin-bottom: 15px;
		}
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
        return { 

        }
    },
    created() {
    	document.title = `Owl News - ${this.news.title}`
    }
}
</script>