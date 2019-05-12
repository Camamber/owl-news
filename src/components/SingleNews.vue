<template>
    <div class="single-news">   
    	<h1>{{news.title}}</h1>
    	<p class="date">{{dateFormat()}}</p>
    	<hr/>
        <img :src="require(`../img/${ news.image }`)">
        <p>{{news.text}}</p>
    </div>
</template>

<script>
export default {
    data() {
        return { 
			news: this.$store.state.current_news
        }
	},
	methods : {
        dateFormat() {
			let date = new Date(this.news.date)
			return `${this.pad(date.getDate())}.${this.pad(date.getMonth()+1)}.${this.pad(date.getFullYear())} ${this.pad(date.getHours())}:${this.pad(date.getMinutes())}`
		},
		pad(n) {
			return n < 10 ? '0'+n : n
		}
    },
    created() {
    	document.title = `Owl News - ${this.news.title}`
    }
}
</script>

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