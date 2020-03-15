 import ListView from './ListView.vue'
 import { bus } from '../utils/bus.js'

export default function createListView(name) {
    return {
        // 재사용할 인스턴스(컴포넌트) 옵션들이 들어가 자리
        name: name,
        created() {
            bus.$emit('start:spinner');
            this.$store.dispatch('FETCH_LIST', this.$route.name)
                .then(() => {
                    bus.$emit('end:spinner');
                })
                .catch(e => console.log(e));
        },
        render(createElement) {
            return createElement(ListView);
        }
    }
}