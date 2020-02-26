<template>
    <div>
        <p v-for="item in this.$store.state.news" v-bind:key="item.id">
            <a :href="item.url">{{ item.title }}</a>   
            <small style="color:#aaa5a5;">{{item.time_ago}} by 
                <router-link v-bind:to="`/user/${item.user}`">{{item.user}}</router-link></small></p>
   </div>
</template>

<script>

export default {
    created() {
        this.$store.dispatch('FETCH_NEWS');
    }
}
</script>