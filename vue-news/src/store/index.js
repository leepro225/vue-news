import Vue from 'vue';
import Vuex from 'vuex';
import { fetchNewsList } from '../api/index'

Vue.use(Vuex); // vuex는 플러그인 형태로 제공되기 때문에 이렇게 사용해 준다..?

export const store = new Vuex.Store({
    state: {
        news: []
    },
    mutations: {
        SET_NEWS(state, news) {
            state.news = news;
        }
    },
    actions: {
        FETCH_NEWS(context) {
            fetchNewsList()
                .then(res => {
                    context.commit('SET_NEWS', res.data);
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }
});