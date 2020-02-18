<template>
    <div>news</div>
</template>

<script>
import {fetchNewsList} from '../api/index'
export default {
    created() {
        fetchNewsList()
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        });
    }
}
</script>