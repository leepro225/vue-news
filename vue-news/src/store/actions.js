import { 
    fetchNewsList, 
    fetchJobsList, 
    fetchAskList,
    fetchUserInfo,
    fetchCommentItem, 
    fetchList} from '../api/index'

export default {
    async FETCH_NEWS(context) {
        try {
            const response = await fetchNewsList();
            context.commit('SET_NEWS', response.data);
            return response;
        } catch (error) {
            console.log(error);
        }
        
    },
    async FETCH_JOBS({ commit }) {
        const response = await fetchJobsList()
        commit('SET_JOBS', response.data);
        return response;
    },
    FETCH_ASK({ commit }) {
        return fetchAskList()
            .then(({ data }) => {
                commit('SET_ASK', data);
            })
            .catch(err => {
                console.log(err);
            });
    },
    FETCH_USER({ commit }, name) {
        return fetchUserInfo(name)
        .then( ({data}) => {
            commit('SET_USER', data);
        })
        .catch(err => {
            console.log(err);
        });
    },
    FETCH_ITEM({ commit }, id) {
        return fetchCommentItem(id)
            .then(({ data }) => {
                commit('SET_ITEM', data);
            })
            .catch(err => {
                console.log(err);
            });
    }
    ,FETCH_LIST({commit}, pageName) {
            return fetchList(pageName)
                .then(({ data }) => {
                    commit('SET_LIST', data);
                })
                .catch(e => console.log(e));
    }
}