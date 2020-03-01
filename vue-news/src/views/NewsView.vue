<template>
    <div>
        <ul class="new-list">
            <li v-for="item in this.$store.state.news" class="post" v-bind:key="item.id">
                <div class="points">
                    {{ item.points }}
                </div>
                <div>
                    <p class="news-title">
                        <a v-bind:href="item.url">
                            {{ item.title }}
                        </a>
                    </p>
                    <small>
                        by
                        <router-link v-bind:to="`/user/${item.user}`">{{item.user}}</router-link>
                    </small>
                </div>
            </li>
        </ul>
       </div>
</template>

<script>

export default {
    created() {
        this.$store.dispatch('FETCH_NEWS');
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