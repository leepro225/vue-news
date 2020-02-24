<template>
    <div>
        <p v-for="job in this.$store.state.jobs" v-bind:key="job.id">
            <a :href="job.url">{{ job.title }}</a>  <small style="color:#aaa5a5;">{{job.time_ago}} by {{job.user}}</small></p>
    </div>
</template>
<script>
export default {
    created() {
        this.$store.dispatch('FETCH_JOBS');
    }
}
</script>