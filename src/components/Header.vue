<template>
    <header>  
        <div class="wrapper">
            <div class="logo"><a href="#"><img src="../img/logo.png" alt=""></a></div>
            <ul class="menu">
                <li class="active"><router-link to="/">Все новости</router-link></li>
                <li><router-link to="/favorite">Мои новости</router-link></li>
                <li class="search-box"><input placeholder="Введите текст..." type="text"></li>
                <li><a href="#">Войти</a></li>
            </ul>
        </div>
    </header>
</template>
<script>
    export default {
        data() {
            return { checked: false, title: 'Check me' }
        },
        methods: {
            check() { this.checked = !this.checked; }
        }
    }
</script>