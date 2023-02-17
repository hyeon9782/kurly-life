<template>
  <div class="contents-container">
    <ContentsTheme :category="this.$route.params.category" select=""/>
    <div class="card-container">
      <template v-if="itemList == null || itemList.length == 0">
        <NoData />
      </template>
      <template v-else>
        <ContentsCard v-for="(item, idx) in itemList" :key="idx"  :item="item"/>
      </template>
    </div>
  </div>
</template>

<script>
import ContentsTheme from '@/components/contents/ContentsTheme.vue';
import ContentsCard from '@/components/contents/ContentsCard.vue';
export default {
  components:{
    ContentsTheme,
    ContentsCard
  },
  watch:{
    '$route': 'test'
  },
  created(){
    this.test()
  },
  methods:{
    searchRecipe(){
      this.$store.dispatch('contents/searchContents',{
        pageNum: "",
        searchText: "",
        category: "",
        theme: "",
        userId: "",
      })
    },
    test(){
      this.$route.params.category
    }
  },
  computed:{
    recipeList(){
      return this.$store.state.contents.recipeList
    }
  },
  data(){
    return{
      selectTheme: "",
      itemList: [
        {
          url: "",
          title: "테스트 제목입니다.",
          likeNum: 3,
          scrapNum: 6,
        },
        {
          url: "",
          title: "테스트 제목입니다.",
          likeNum: 3,
          scrapNum: 6,
        },
        {
          url: "",
          title: "테스트 제목입니다.",
          likeNum: 3,
          scrapNum: 6,
        },
        {
          url: "",
          title: "테스트 제목입니다.",
          likeNum: 3,
          scrapNum: 6,
        },
        {
          url: "",
          title: "테스트 제목입니다.",
          likeNum: 3,
          scrapNum: 6,
        },
        {
          url: "",
          title: "테스트 제목입니다.",
          likeNum: 3,
          scrapNum: 6,
        },
      ]
      
    }
  }
}
</script>

<style lang="scss" scoped>
.contents-container{
  margin-top:102px;
  width: 480px;
  .card-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
}
</style>