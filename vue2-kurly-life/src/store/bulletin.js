import { insertContents } from '@/api/bulletin'

export default {

    namespaced: true,

    state: () => ({

    }),

    getters: {},

    mutations: {},

    actions: {
        // 게시글 작성
        insertContents(){
            insertContents()
        }
    }
}