<template>
<div>
    <list-item></list-item>
</div>
</template>
<script>
import ListItem from '../components/ListItem'
// import { bus } from '../utils/bus'

export default {
    components: {
        ListItem
    },
    created() {
        // bus.$emit('start:spinner');
        // this.$store.dispatch('FETCH_NEWS')
        //     .then(() => {
        //         bus.$emit('end:spinner');
        //     });
    }
}
</script>
<style scoped>
</style>