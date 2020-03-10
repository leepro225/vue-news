<template>
    <div class="user-container">
        <div>
            <i class="fas fa-user"></i>
        </div>
        <div class="user-description">
            <div>{{ userInfo.id }}</div>
        </div>
        <div class="time" style="display:block;">
            {{ userInfo.created }}
        </div>
    </div>    
</template>
<script>
export default {
    computed: {
        userInfo() {
            return this.$store.state.user;
        }
    },
}
</script>
<style scoped>
    .user-container {
        display: flex;
        align-items: center;
        padding: 0.5rem;
    }
    .fa-user {
        font-size: 2.5rem;
    }
    .user-description {
        padding-left: 8px;
    }
    .time {
        text-align: left;
        font-size:0.7rem;
    }
</style>