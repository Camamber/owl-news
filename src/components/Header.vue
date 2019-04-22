<template>
    <header>  
        <div class="wrapper">
            <div class="logo"><router-link to="/"><img src="../img/logo.png" alt=""></router-link></div>
            <ul class="menu">
                  <li v-for="item in items" :class="{ active: item.name == selected }">
                    <router-link :to="getPath(item.name)">{{ item.title }}</router-link>
                  </li>
                <!-- <li><router-link to="/">Все новости</router-link></li> -->
                <!-- <li><router-link to="/favorite">Мои новости</router-link></li> -->
                <li class="search-box"><input placeholder="Введите текст..." type="text"></li>
                <li><a href="#">Войти</a></li>
            </ul>
        </div>
    </header>
</template>
<script>
export default {
    data() {
        return { 
            items: [
                {
                    name: 'Home',
                    title: 'Все новости',
                    path:'/'
                },
                {
                    name: 'Favorite',
                    title: 'Мои новости', 
                    path:'/' 
                }
            ],
            selected: this.$router.currentRoute.name
        }
    },
    watch:{
        $route (to, from){
             this.selected = this.$router.currentRoute.name;
        }
    },
    methods: {
        getPath(name) {
            return this.$router.options.routes.find(r => r.name === name).path
        }
    }
}
</script>