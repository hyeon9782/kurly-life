import { fetchFollowingContents } from '@/api/following'

export default {

    namespaced: true,

    state: () => ({
        followingContents:[]
    }),

    getters: {},

    mutations: {
        updateState(state, payload){
            Object.keys(payload).forEach(key => {
                state[key] = payload[key]
            })
        },
    },

    actions: {
        // 팔로잉한 유저의 컨텐츠를 조회
        async fetchFollowingContents({commit}, payload){
            
            try{

                const res = await fetchFollowingContents(payload)

                const followingContents = res.data.data.postItemList

                commit('updateState',{
                    followingContents,
                })

                console.log(followingContents)

            }catch (err){
                console.log(err)
            }
            
        }
    }
}