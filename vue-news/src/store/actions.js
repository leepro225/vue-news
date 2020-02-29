import { 
    fetchNewsList, 
    fetchJobsList, 
    fetchAskList,
    fetchUserInfo,
    fetchCommentItem } from '../api/index'

export default {
    FETCH_NEWS(context) {
        fetchNewsList()
            .then(res => {
                context.commit('SET_NEWS', res.data);
            })
            .catch(err => {
                console.log(err);
            });
    },
    FETCH_JOBS({ commit }) {
        fetchJobsList()
            .then(({ data }) => {
                commit('SET_JOBS', data);
            })
            .catch(err => {
                console.log(err);
            })
    },
    FETCH_ASK({ commit }) {
        fetchAskList()
            .then(({ data }) => {
                commit('SET_ASK', data);
            })
            .catch(err => {
                console.log(err);
            });
    },
    FETCH_USER({ commit }, name) {
        fetchUserInfo(name)
        .then( ({data}) => {
            commit('SET_USER', data);
        })
        .catch(err => {
            console.log(err);
        });
    },
    FETCH_ITEM({ commit }, id) {
        fetchCommentItem(id)
            .then(({ data }) => {
                console.log(data)
                commit('SET_ITEM', data);
            })
            .catch(err => {
                console.log(err);
            });
    }
}