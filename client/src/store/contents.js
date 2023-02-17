import { fetchContents, fetchScrapContents, fetchUserContents, fetchMainContents  } from '@/api/contents'

export default {

    namespaced: true,

    state: () => ({
        contents: [],
        scrapContents: [],
        recipeContents: [],
        lifehackContents: [],
        restaurantContents: [],
        products: [],
        keyword: "",
        pageNum: 0
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

        // 메인 컨텐츠 리스트
        async fetchMainContents({commit}, payload){
            try{

                const res = await fetchMainContents(payload)

                console.log(res)

                const recipeContents = res.data.data.postList.slice(0,5)
                const lifehackContents = res.data.data.postList.slice(5,10)
                const restaurantContents = res.data.data.postList.slice(10,15)

                commit('updateState', {
                    recipeContents,
                    lifehackContents,
                    restaurantContents,
                    // products
                })

                console.log(recipeContents)
                console.log(lifehackContents)
                console.log(restaurantContents)

            }catch (err){
                console.log(err)
            }
        },


        // 컨텐츠 리스트
        async searchContents({ commit }, payload){

            try{

                const res = await fetchContents(payload)

                console.log(res)

                const contents = res.data.data.postList

                commit('updateState', {
                    contents,
                    keyword: payload.keyword
                })

                // state.keyword == payload.keyword
                // alert(payload.keyword)

                // alert(state.keyword)

            }catch (err) {
                console.log(err)
            }

        },

        // 사용자가 스크랩한 컨텐츠를 조회
        async searchScrapContents({commit}, payload){

            try{
                const res = await fetchScrapContents(payload)

                console.log(res)

                const scrapContents = res.data.data.scrapItemList

                commit('updateState', {
                    scrapContents
                })

                console.log(scrapContents)

            }catch (err){
                console.log(err)
            }
        },

        // 사용자가 작성한 컨텐츠를 조회 
        async searchUserContents({state,commit}, payload){
            try{
                const res = await fetchUserContents(payload)

                console.log(res)

                const userContents = res.data.data.scrapItemList

                commit('updateState', {
                    userContents
                })

                console.log(userContents)

                state.pageNum = payload.pageNum

                // if (page)




                // const pageLength = 1

            // if (pageLength > 1) {
            //     for (let page = 2; page <= pageLength; page += 1) {
            //         if (page > (payload.number / 12)) break
            //         const res = await fetchContents(payload)
            //         const contents = res.data.postList
            //         commit('updateState', {
            //             contents: [...state.movies, ...contents]
            //         })
            //     }
            // }

            }catch (err){
                console.log()
            }
        },

    }
}