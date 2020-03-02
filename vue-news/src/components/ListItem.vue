<template>
    <div>
        <ul class="news-list">
        <li v-for="item in listItems" v-bind:key="item.id" class="post">
            <div class="points">
                {{item.points || 0}}
            </div>
            <div>
                <p class="news-title">
                    <a v-bind:href="item.url">
                        {{ item.title }}
                    </a>
                </p>
                <small>
                    {{item.time_ago}}
                    by
                    <a :href="item.url">{{item.domain}}</a>
                </small>
            </div>
        </li>
    </ul>
    </div>    
</template>
<script>
export default {
    created() {
        const name = this.$route.name;
        let actionsName = '';
        if (name === 'news') {
           actionsName = 'FETCH_NEWS';
        } else if (name === 'ask') {
           actionsName = 'FETCH_ASK';
        } else if (name === 'jobs') {
           actionsName = 'FETCH_JOBS';
        }
        this.$store.dispatch(actionsName);
    },
    computed: {
        listItems() {
            const name = this.$route.name;
            if (name === 'news') {
                return this.$store.state.news;
            } else if (name === 'ask') {
                return this.$store.state.ask;
            } else if (name === 'jobs') {
                return this.$store.state.jobs;
            }    
            return 0     
        }
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