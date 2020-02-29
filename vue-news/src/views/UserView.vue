<template>
    <div>
        <p>name : {{userInfo.id}}</p>
        <p>karma : {{userInfo.karma}}</p>
        <p>created : {{userInfo.created}}</p>
    </div>
</template>
<script>
export default {
    computed: {
        userInfo() {
            return this.$store.state.user;
        }
    },
    created() {
        const userName = this.$route.params.id;

        // 전달 인자는 하나만 넘길 수 있으므로 여러개 일때는 객체로 만들어서 보낸다.
        this.$store.dispatch('FETCH_USER', userName);
    }
}
</script>