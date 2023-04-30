<template>
    <div class="result-container">
      <div class="test1">
        {{ keyword }}로 검색한 결과들이에요!
      </div>
      <div class="search-result">
        <div class="card-container">
          <template v-if="contents === null || contents.length === 0">
            <NoData />
          </template>
          <template v-else>
            <ContentCard v-for="(content, idx) in contents" :key="idx"  :item="content"/>
          </template>
        </div>
      </div>
      <!-- <ContentSlideBox :title="slides[4].title" :description="slides[4].description" :category="slides[4].category" :products="products" />
      <ContentSlideBox :title="slides[0].title" :description="slides[0].description" :category="slides[0].category" :contents="recipeContents" />
      <ContentSlideBox :title="slides[1].title" :description="slides[1].description" :category="slides[1].category" />
      <ContentSlideBox :title="slides[2].title" :description="slides[2].description" :category="slides[2].category" :contents="lifehackContents" />
      <ContentSlideBox :title="slides[3].title" :description="slides[3].description" :category="slides[3].category" :contents="restaurantContents" /> -->
    </div>
</template>

<script>
// import ContentSlideBox from '@/components/contents/ContentSlideBox.vue';
import ContentCard from '@/components/contents/ContentsCard.vue';
import NoData from '@/components/common/NoData.vue';
import { mapState } from "vuex";
export default {
  methods:{
    getMain(){
      this.$store.dispatch('contents/fetchMainContents', {
        accountIdx: 12
      })
    },
  },
  created(){
    this.getMain()
  },
  computed:{  
    ...mapState('contents', ['recipeContents', 'lifehackContents', "restaurantContents", "keyword", "contents"])
  },
  components:{
    // ContentSlideBox
    NoData,
    ContentCard
  },
  data(){
    return{
      events:["첫 글쓰기 1,000포인트 증정!","매 주 인기 멤버 3,000포인트 증정!"],
      list:[1,2,3,4,5],
      products: [
        {
          img: "",
          title: "테스트 제목 1",
          price: 19165
        },
        {
          img: "",
          title: "테스트 제목 2",
          price: 36571
        },
        {
          img: "",
          title: "테스트 제목 3",
          price: 15312
        },
        {
          img: "",
          title: "테스트 제목 4",
          price: 95723
        },
        {
          img: "",
          title: "테스트 제목 5",
          price: 77123
        },
      ],
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
.result-container{
    width: 480px;
    margin-top: 102px;
    .event-slide{
      width: 100%;
      height: 280px;
      background: lightgray;
    }

    .head{
      .title-box{

      }
    }

    .search-result{
      margin: 0 auto;
    }

    .card-container{
      display: flex;
      flex-wrap: wrap;
    }
    
}

.test1{
  font-size: 24px;
  padding: 20px 10px;
}

@media screen and (max-width: 575px) {
  .result-container{
    width: 100%;
  }
}
</style>