<template>
	<div id="news">
        <div class="view-style">
        	<div class="bread">
                <p>{{title}}</p>
                <hr/>
            </div>
            <div>
				<svg id="grid-view" v-on:click="grid" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
					<rect id="grey" v-show="!isActive" width="25" height="25" fill="url(#pattern0)"/>
					<rect id="red" v-show="isActive" width="25" height="25" fill="url(#pattern1)"/>
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
					<rect id="grey" v-show="isActive" width="25" height="25" fill="url(#pattern01)"/>
					<rect id="red" v-show="!isActive" width="25" height="25" fill="url(#pattern11)"/>
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

        <div id="feed" :class="view">
	        <news-item
	            v-for="n in news"
	            :key="n.id"
	            :news="n"
	        />
    	</div>
       	<div class="more">
            <div class="btn-more">
                <p>Больше новостей</p>
            </div>
        </div>
    </div>
</template>

<script>
import NewsItem from './NewsItem.vue'

let newsId = 1
export default {
    components: {
        'news-item': NewsItem
    },
    props: ['title'],
    methods: {
		grid(event) {
			if(this.view == 'flow-feed') {
				this.view = 'grid-feed'
				this.isActive = true;
			}
		},
		flow(event) {
			if(this.view == 'grid-feed') {
				this.view = 'flow-feed'
				this.isActive = false;
			}
		},
		filter (categories) {
			this.news = this.news.filter(n => {
				return n.id > 3
			})
		}
	},
    data () {
        return {
        	isActive: true,
        	view: 'grid-feed',
            news: [
                {
                    id: newsId++,
                    title: 'Юбилейный 25-ый фильм о Джеймсе Бонде снова перенесли',
                    date: '19.02.2019, 15:43',
                    img: 'preview-1.jpg',
                    slug: '',
                    description: 'Что-то не везет юбилейному фильму о Джеймсе Бонде. Недавно поклонников "бондианы" поразила новость о том, что Дэнни Бойл покинул режиссерское кресло юбилейного фильма о Джеймсе Бонде из-за творческих разногласий с продюсерами.'
                },
                {
                    id: newsId++,
                    title: '19 февраля: какой сегодня праздник, приметы и что нельзя делать',
                    date: '19.02.2019, 15:36',
                    img: 'preview-2.jpg',
                    slug: '',
                    description: 'Сегодня, 19 февраля, мир потрясла новость о смерти 85-летнего легендарного дизайнера, модельера и фотографа Карла Лагерфельда. Мужчина ушел из жизни в Париже, перед этим, как сообщает французская пресса, он долгое время неважно себя чувствовал.'
                },
                {
                    id: newsId++,
                    title: 'Десерт на 8 марта: тарталетки с заварным кремом и малиной',
                    date: '19.02.2019, 15:24',
                    img: 'preview-3.jpg',
                    slug: '',
                    description: 'Баловать и любить себя нужно каждый день. Но 8 марта можно позволить себе забыть о диетах и угоститься вкусными домашними тарталетками из песочного теста с заварным кремом и свежими ягодами.'
                },
                {
                    id: newsId++,
                    title: 'Креп Сюзетт: рецепт блинчиков с карамельно-апельсиновым соусом от Лизы Глинской',
                    date: '19.02.2019, 15:15',
                    img: 'preview-4.jpg',
                    slug: '',
                    description: 'звестный украинский кондитер и судья шоу "МастерШеф. Профессионалы" Лиза Глинская поделилась своим фирменными рецептом блинчиков "Сюзетт".'
                },
                {
                    id: newsId++,
                    title: 'Умер Карл Лагерфельд: известные цитаты великого модельера',
                    date: '19.02.2019, 15:03',
                    img: 'preview-5.jpg',
                    slug: '',
                    description: 'Сегодня, 19 февраля, мир потрясла новость о смерти 85-летнего легендарного дизайнера, модельера и фотографа Карла Лагерфельда. Мужчина ушел из жизни в Париже, перед этим, как сообщает французская пресса, он долгое время неважно себя чувствовал.'
                },
                {
                    id: newsId++,
                    title: '“Оскар 2019”: группа Queen и Адам Ламберт выступят на церемонии награждения',
                    date: '19.02.2019, 14:49',
                    img: 'preview-6.jpg',
                    slug: '',
                    description: 'В этом году 91-я церемония награждения "Оскар" полна сюрпризов и неожиданностей. Помимо помпезной сцены, которая будет украшена 40 тысячами роз, стало известно, что на церемонии выступят группа Queen и Адам Ламберт'
                },                
                {
                    id: newsId++,
                    title: 'Майли Сайрус поделилась с подписчиками милыми фото в Инстаграм',
                    date: '19.02.2019, 14:37',
                    img: 'preview-7.jpg',
                    slug: '',
                    description: 'Майли Рэй Сайрус — знаменитая актриса и певица из Америки. Мировую известность получила благодаря участию в сериале «Ханна Монтана» от канала Дисней.'
                },                
                {
                    id: newsId++,
                    title: 'Драконы, наркокурьер и вице-президент: что посмотреть в кино на этой неделе',
                    date: '19.02.2019, 14:07',
                    img: 'preview-8.jpg',
                    slug: '',
                    description: 'В украинских кинотеатрах с 21 февраля 2019 года выходят три новые кинопремьеры: фильм-номинант на "Оскар 2019", новая работа Клинта Иствуда, а также анимационный фильм.'
                },                
                {
                    id: newsId++,
                    title: 'Тайна раскрыта: как назовут ребенка Меган Маркл и принца Гарри',
                    date: '19.02.2019, 14:01',
                    img: 'preview-9.jpg',
                    slug: '',
                    description: 'До рождения ребенка Меган Маркл и принца Гарри остается совсем немного – герцогиня Сассекская ожидает появления первенца в апреле этого года.'
                }
            ]
        }
    }
}
</script>