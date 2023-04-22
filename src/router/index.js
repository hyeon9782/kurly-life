import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/index'


Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "main",
    component: () => import("@/views/MainPage.vue"),
  },
  {
    path: "/contents",
    name: "contents",
    component: () => import("@/views/ContentsPage.vue"),
  },
  {
    path: "/contents/:contentsId",
    name: "detail",
    component: () => import("@/components/contents/ContentsDetail.vue"),
  },
  {
    path: "/write",
    name: "write",
    component: () => import("@/views/RegistPage.vue"),
  },
  {
    path: "/contents/modify",
    name: "modify",
    component: () => import("@/views/RegistPage.vue"),
  },
  {
    path: "/comments",
    name: "comments",
    component: () => import("@/components/comments/CommentsPage.vue"),
  },
  {
    path: "/reply/:id",
    name: "reply",
    component: () => import("@/components/comments/CommentsReply.vue"),
  },
  {
    path: "/search/main",
    name: "searchMain",
    component: () => import("@/views/SearchMainPage.vue"),
  },
  {
    path: "/following",
    name: "following",
    component: () => import("@/views/FollowingPage.vue"),
  },
  {
    path: "/mypage",
    name: "mypage",
    component: () => import("@/views/MyPage.vue"),
  },
  {
    path: "/mypost/:id",
    name: "mypost",
    component: () => import("@/views/MyPostPage.vue"),
  },
  {
    path: "*",
    name: "notFound",
    component: () => import("@/views/NotFoundPage.vue"),
  },

  {
    path: "/recipe",
    name: "recipe",
    component: () => import("@/views/RecipePage.vue"),
  },
  {
    path: "/lifehack",
    name: "lifehack",
    component: () => import("@/views/LifehackPage.vue"),
  },
  {
    path: "/restaurant",
    name: "restaurant",
    component: () => import("@/views/RestaurantPage.vue"),
  },
  {
    path: "/search",
    name: "search",
    component: () => import("@/views/SearchPage.vue"),
  },
  {
    path: "/scrap/:id",
    name: "scrap",
    params: "스크랩",
    component: () => import("@/views/ScrapPage.vue"),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {

  if (to.path === '/write' || to.path === `/contents/${to.params.contentsId}` || to.path === `/mypost/${to.params.id}` || to.path === `/scrap/${to.params.id}` || to.path === `/comments` || to.path === `/reply/${to.params.id}`){
    store.state['type'] = "sub" 
    store.state['title'] = to.title
  } else {
    store.state['type'] = "main"
  }
  next()
})

export default router
