<template>
<div>
    <list-item></list-item>
</div>
</template>
<script>
import ListItem from '../components/ListItem'

export default {
    components: {
        ListItem
    },
    created() {
        this.$store.dispatch('FETCH_JOBS');
    }
}
</script>
<style scoped>
</style>