<template>
    <div id="app">
        <div id="top"></div>
        <owl-header></owl-header>
        <router-view/>
        <owl-footer></owl-footer>
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
    name: 'App',
    components: {
        'owl-header': Header,
        'owl-footer': Footer
    },
}
</script>

<style lang="scss">
@import './style/main.scss';
</style>