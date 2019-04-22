<template>
    <li>
        <p>{{name}}</p>
        <label>
            <input type='checkbox'>
            <span></span>
        </label>
    </li>
</template>
<script>
export default {
	props: ['name'],
    data() {
        return { }
    }  
}
</script>