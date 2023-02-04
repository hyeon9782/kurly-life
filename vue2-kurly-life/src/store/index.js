import Vue from 'vue'
import Vuex from 'vuex'
import contents from '@/store/contents'
import bulletin from '@/store/bulletin'
import following from '@/store/following'
import user from '@/store/user'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    type: "",
    title: ""
  },
  getters: {
    headerType(state){
      return state.type === 'sub';
    },
    headerTitle(state){
      return state.title;
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    contents,
    following,
    bulletin,
    user
  }
})
