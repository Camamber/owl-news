<template>
    <div class="slide" :style="{ background: 'url('+require(`../img/${ src }`)+')'}">
        <div class="blur">
            <div class="info">
                <h2>Всё, что нужно знать перед началом ESL One Katowice 2019</h2>
                <p>Уже 19-го февраля в Польше стартует очередной турнир серии ESL One, участники которого разыграют между собой призовой фонд в $300,000. Единственной командой — представительницей СНГ-региона на турнире станет отобравшаяся от Европы Gambit Esports.</p>
                <div class="btn-more">Подробнее</div>
            </div>  
        </div>
    </div>
</template>
<script>

export default {
	props: ['src'],
    data() {
        return { msh:"hg" }
    }  
}
</script>