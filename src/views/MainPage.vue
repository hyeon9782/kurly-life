<template>
    <div class="main-block">
      <EventSlide :events="events"/>
      <ContentSlideBox :title="slides[0].title" :description="slides[0].description" :category="slides[0].category" :contents="recipeContents" />
      <ContentSlideBox :title="slides[1].title" :description="slides[1].description" :category="slides[1].category" />
      <ContentSlideBox :title="slides[2].title" :description="slides[2].description" :category="slides[2].category" :contents="lifehackContents" />
      <ContentSlideBox :title="slides[3].title" :description="slides[3].description" :category="slides[3].category" :contents="restaurantContents" />
      <ContentSlideBox :title="slides[4].title" :description="slides[4].description" :category="slides[4].category" :products="products" />
    </div>
</template>

<script>
import EventSlide from '@/components/event/EventSlide.vue';
import ContentSlideBox from '@/components/contents/ContentSlideBox.vue';
import { mapState } from "vuex";
export default {
  methods:{
    getMain(){
      this.$store.dispatch('contents/fetchMainContents', {
        category : ["recipe", "lifehack", "restaurant"]
      })
    },
  },
  created(){
    this.getMain()
  },
  computed:{  
    ...mapState('contents', ['recipeContents', 'lifehackContents', "restaurantContents", "products"])
  },
  components:{
    EventSlide,
    ContentSlideBox
  },
  data(){
    return{
      events:["첫 글쓰기 1,000포인트 증정!","매 주 인기 멤버 3,000포인트 증정!"],
      slides:[
        {
          title:"컬리의 인기 레시피",
          description: "이번 주 인기 있는 컬리의 식탁을 따라해봐요!",
          category: "recipe"
        },
        {
          title:"상황별 요리 레시피",
          description: "뭐 해먹을지 고민마요, 상황에 맞는 레시피가 여기 있어요!",
          category: "recipeTheme"
        },
        {
          title:"나 빼고 다 아는 생활팁",
          description: "알면 편안한 생활 꿀팁 모음집",
          category: "lifehack"
        },
        {
          title:"나만 알고싶은 맛집",
          description: "전국의 맛집에 대한 이야기를 들어보세요",
          category: "restaurant"
        },
        {
          title:"놓치면 후회할 딜",
          description: "이번 주 할인 상품 구경하세요!",
          category: "product"
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.main-block{
    width: 480px;
    margin-top: 102px;
    margin-bottom: 70px;
    .event-slide{
      width: 100%;
      height: 280px;
      background: lightgray;
    }

    .head{
      .title-box{

      }
    }
  
}

@media screen and (max-width: 575px) {
  .main-block{
    width: 100%;
  }
}
</style>