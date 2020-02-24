<template>
    <div>
        <p v-for="item in fetchedAsk" v-bind:key="item.id">
            <a :href="item.url">{{ item.title }}</a>   <small style="color:#aaa5a5;">{{item.time_ago}} by {{item.user}}</small></p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        // #1방법 배열로
        ...mapGetters([
            'fetchedAsk'
        ]),
        // #1방법 객체로
        // ...mapGetters({
        //     ask : 'fetchedAsk'
        // })
        // #2방법
        // ...mapState({
        //     fetchedAsk: state => state.ask
        // }),
        // #3방법
        // ask() {
        //     return this.$store.state.ask;
        // }
    },
    created() {
        this.$store.dispatch('FETCH_ASK');
    }
}
</script>