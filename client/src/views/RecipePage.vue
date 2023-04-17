<template>
  <div class="recipe-container">
    <ContentTheme category="recipe" theme=""/>
    <div class="card-container">
      <template v-if="recipeList == null || recipeList.length == 0">
        <NoData />
      </template>
      <template v-else>
        <ContentCard v-for="(recipe, idx) in recipeList" :key="idx"  :item="recipe"/>
      </template>
    </div>
  </div>
</template>

<script>
import NoData from '@/components/common/NoData.vue';
import ContentTheme from '@/components/contents/ContentsTheme.vue';
import ContentCard from '@/components/contents/ContentsCard.vue';
export default {
  components:{
    NoData,
    ContentTheme,
    ContentCard,
  },
  data(){
    return{
      selectTheme: "",
      page: "",
      items: [],
      categoryType: "",
      keyword: "",
    }
  },
  created(){
    this.searchRecipe()
  },
  methods:{
      searchRecipe(){
        this.$store.dispatch('contents/searchContents',{
          pageNum: 1,
          keyword: "",
          category: "recipe",
          theme: this.selectTheme,
        }
      )
    },
  },
  comments:{
    test(){
      return this.$route.params.theme
    }
  },
  computed:{
    recipeList(){
      return this.$store.state.contents.contents
    }
  },
}
</script>

<style lang="scss" scoped>
.recipe-container{
  margin-top:102px;
  margin-bottom: 70px;
  width: 480px;
  .card-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
}
</style>