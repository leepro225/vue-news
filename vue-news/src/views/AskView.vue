<template>
<div>
    <ul  class="new-list">
        <li class="post" v-for="item in fetchedAsk" v-bind:key="item.id">
            <div class="points">
                {{item.points}}
            </div>
            <div>
                <p class="news-title">
                    <router-link :to="`/item/${item.id}`">
                        {{item.title}}
                    </router-link>
                </p>
                <small>
                    {{item.time_ago}}
                    by
                    <router-link :to="`/item/${item.id}`">{{item.user}}</router-link>
                </small>
            </div>
        </li>
    </ul>
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
<style scoped>
    .news-list {
        margin: 0;
        padding : 0;
    }
    .post {
        list-style: none;
        display:flex;
        align-items: center;
        border-bottom: 1px solid #eee;
        text-align:left;
    }
    .points {
        width: 80px;
        height: 60px;
        display: flex;
        align-items:center;
        justify-content: center;
        color:#42b883;
    }
    .news-title {
        margin: 0;
    }
    .link-text {
        color:#828282;
    }
</style>