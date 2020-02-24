<template>
    <div>
        <p v-for="user in this.$store.state.news" v-bind:key="user.id">
            <a :href="user.url">{{ user.title }}</a>   <small style="color:#aaa5a5;">{{user.time_ago}} by {{user.user}}</small></p>
   </div>
</template>

<script>

export default {
    created() {
        this.$store.dispatch('FETCH_NEWS');
    }
}
</script>