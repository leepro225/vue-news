<template>
    <div>
        <UserProfile></UserProfile>
    </div>
</template>
<script>
import UserProfile from '../components/UserProfile.vue'
export default {
    components: {
        UserProfile
    },
    created() {
        const userName = this.$route.params.id;

        // 전달 인자는 하나만 넘길 수 있으므로 여러개 일때는 객체로 만들어서 보낸다.
        this.$store.dispatch('FETCH_USER', userName);
    }
}
</script>