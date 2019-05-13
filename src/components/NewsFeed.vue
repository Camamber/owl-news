<template>
	<div id="news">
        <div class="view-style">
        	<div class="bread">
                <p>{{title}}</p>
                <hr/>
            </div>
            <div>
				<svg id="grid-view" v-on:click="grid" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
					<rect id="grey" v-show="!$store.getters.isGrid" width="25" height="25" fill="url(#pattern0)"/>
					<rect id="red" v-show="$store.getters.isGrid" width="25" height="25" fill="url(#pattern1)"/>
					<defs>
						<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
							<use xlink:href="#image0" transform="scale(0.02)"/>
						</pattern>
						<pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
							<use xlink:href="#image1" transform="scale(0.02)"/>
						</pattern>
						<image id="image0" width="50" height="50" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAADFwAAAxcBwpsE1QAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAACeSURBVGiB7dexDYMwFEXRZ8+SlGQGlOwdhLIBLd7FKaJITiQKu/HDuqezwOjfguJLAHAmoTxcL9MihbnmA3vawufuLbcM0Ho/S8+Utsf3HH8f10X0FKR7eY5HL54NIW4IcUOIG0LcEOKGEDeEuBkmBG7+dvb6vbvXzl7elQb6RwhxQ4gbQtwQ4oYQN4S4IcTNoCFZr05ztFh7DwAA7d4gRx1OiKlvNAAAAABJRU5ErkJggg=="/>
						<image id="image1" width="50" height="50" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAADFwAAAxcBwpsE1QAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAB7SURBVGiB7dcxCoBADAXRrPe/koh4sNhYLHYbhR1lHlh+zZRGSNJnZcSWETnydNuh3Qv7tb+93UIyBrXrHZXt033r7l8qHycyhMYQGkNoDKExhMYQGkNofhMiGn91aQyhMYTGEBpDaAyhMYTGEJrfhhxTrqjZZx8gSXUnIb1c9+PSLkgAAAAASUVORK5CYII="/>
					</defs>
				</svg>
				<svg id="flow-view" v-on:click="flow" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
					<rect id="grey" v-show="!$store.getters.isFlow" width="25" height="25" fill="url(#pattern01)"/>
					<rect id="red" v-show="$store.getters.isFlow" width="25" height="25" fill="url(#pattern11)"/>
					<defs>
						<pattern id="pattern01" patternContentUnits="objectBoundingBox" width="1" height="1">
							<use xlink:href="#image01" transform="scale(0.02)"/>
						</pattern>
						<pattern id="pattern11" patternContentUnits="objectBoundingBox" width="1" height="1">
							<use xlink:href="#image11" transform="scale(0.02)"/>
						</pattern>
						<image id="image01" width="50" height="50" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAADFwAAAxcBwpsE1QAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAACgSURBVGiB7dZNCoMwFEXh+7oWHbZrKHbfFUpX4NTsxQ5EEJVAoDTXcr7hw5+cQeBJAHJiO2ibay/FveQjYxpifvc2felcWZP0TGl4rGeX/WNlETWE1G1nByHnRIgbQtwQ4oYQN4QAeQdrfPkq/us1fv3Pxd/cEULcEOKGEDeEuCEEyGP7dUOIG0LcEOKGEDeEuNmHhN4VzlHqVfsAwNl8AEvyHFUnKQtqAAAAAElFTkSuQmCC"/>
						<image id="image11" width="50" height="50" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAADFwAAAxcBwpsE1QAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAACASURBVGiB7dZBCoAgEEDRsftfKYLoXrZpESKFRvaD/8BNMDZ/Z4SkJjliyRG55Zxmm+YenLncO1VCcvntTjru6ZntlYrdp1E/fpshNIbQGEJjCI0h0jVfvzSG0BhCYwiNITSGSNd8/dIYQmMIjSE0htAYQlML2YZv0W79egHpb3alNFz8A667bAAAAABJRU5ErkJggg=="/>
					</defs>
				</svg>
			</div>
        </div>

        <div id="feed" :class="$store.state.view">
	        <news-item
	            v-for="n in $store.state.news"
	            :key="n.id"
	            :news="n"
	        />
    	</div>
       	<div class="more">
            <div v-on:click="more" class="btn-more">
                <p>Больше новостей</p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import NewsItem from './NewsItem.vue'

export default {
    components: {
        'news-item': NewsItem
    },
    props: ['title'],
    data () {
        return { 
        }
    },    
    methods: {
		grid(event) {
			this.$store.dispatch('setNewsView', 'grid-feed');
		},
		flow(event) {
			this.$store.dispatch('setNewsView', 'flow-feed');
		},
        more() {
        	this.$store.dispatch('retrieveNewsList', {'offset': this.$store.state.news.length, 'count':3});
        }
	},
    created() {
        this.$store.dispatch('retrieveNewsList')
        this.$store.dispatch('retrieveCatList')
    }
}
</script>