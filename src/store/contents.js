import { fetchContents, fetchBestContents, fetchContentsWithContentsId, fetchContentsWithUserId  } from '@/api/contents'
import { fetchScrapContents } from '@/api/scrap';
import { fetchProducts } from '@/api/products';
import { fetchComments } from '@/api/comments';

export default {

    namespaced: true,

    state: () => ({
        contents: [],
        detail: {},
        comments: [],
        scrapContents: [],
        recipeContents: [],
        lifehackContents: [],
        restaurantContents: [],
        products: [],
        keyword: "",
        pageNum: 0,
        loading: false,
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

                const res1 = await fetchBestContents(payload.category[0]);

                const res2 = await fetchBestContents(payload.category[1]);

                const res3 = await fetchBestContents(payload.category[2]);

                const res4 = await fetchProducts();


                const recipeContents = res1.data.data;
                const lifehackContents = res2.data.data;
                const restaurantContents = res3.data.data;
                const products = res4.data.data;

                commit('updateState', {
                    recipeContents,
                    lifehackContents,
                    restaurantContents,
                    products
                })

            }catch (err){
                console.log(err)
            }
        },


        // 컨텐츠 리스트
        async searchContents({ commit }, payload){

            try{
               
                const res = await fetchContents(payload)

                const contents = res.data.data

                console.log(contents);

                commit('updateState', {
                    contents,
                    keyword: payload.keyword
                })

            }catch (err) {
                console.log(err)
            }

        },

        // 컨텐츠 상세페이지 조회
        async fetchDetailContents({commit}, contentsId){
            try {
                const res = await fetchContentsWithContentsId(contentsId);
                const res1 = await fetchProducts();
                const res2 = await fetchComments(contentsId);
                const detail = res.data;
                const products = res1.data.data;
                let comments = [];
                comments = res2.data.data;

                commit("updateState", {
                  detail,
                  products,
                  comments,
                });
            } catch (err) {
                console.log(err);
            }
        },

        // 사용자가 스크랩한 컨텐츠를 조회
        async fetchScrapContents({commit}, payload){

            try{
                const res = await fetchScrapContents(payload)

                console.log(res)

                const contents = res.data.data

                commit("updateState", {
                  contents,
                });

                console.log(contents);

            }catch (err){
                console.log(err)
            }
        },

        // 사용자가 작성한 컨텐츠를 조회 
        async fetchUserContents({state,commit}, payload){
            try{
                const res = await fetchContentsWithUserId(payload)

                console.log(res)

                const contents = res.data.data

                commit("updateState", {
                  contents,
                });

                console.log(contents);

                state.pageNum = payload.pageNum
                


            }catch (err){
                console.log()
            }
        },

        async fetchComments({commit}, payload){
            try{
                const res = await fetchComments(payload);

                console.log(res);

                const comments = res.data.data;

                commit("updateState", {
                  comments,
                });
            }catch (err) {
                console.log(err);
            }
        }

    }
}