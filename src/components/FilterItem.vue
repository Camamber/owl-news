<template>
    <li>
        <p>
            <router-link :to="{ name: 'Category', params: { slug: category.slug }}">{{category.name}}</router-link>
        </p>
        <label>
            <input v-model="checked" type='checkbox'>
            <span></span>
        </label>
    </li>
</template>
<script>
export default {
	props: {
        category: {
            type: Object,
            required: true
        }
    },
    data() {
        return { 
            checked: false
        }
    },
    watch: {
        checked() {
            this.$store.dispatch('setFilter', {'id': this.category.id, 'checked': this.checked})
        }
    }
}
</script>