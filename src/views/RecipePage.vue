<template>
  <div class="recipe-container">
    <ContentTheme category="recipe" theme=""/>
    <ContentsList />
  </div>
</template>

<script>
import ContentTheme from '@/components/contents/ContentsTheme.vue';
import ContentsList from '@/components/contents/ContentsList.vue';
export default {
  components:{
    ContentTheme,
    ContentsList
  },
  data(){
    return{
      selectTheme: "",
      page: "",
      items: [],
      categoryType: "",
      keyword: "",
      pageNum: 1
    }
  },
  created(){
    this.searchRecipe()
  },
  methods:{
      searchRecipe(){
        console.log(this.theme);
        this.$store.dispatch('contents/searchContents',{
          pageNum: this.pageNum,
          keyword: "",
          category: "recipe",
          theme: this.theme || this.selectTheme,
        }
      )
      this.pageNum++;
    },
  },
  computed:{
    recipeList(){
      return this.$store.state.contents.contents
    },
    theme(){
      return this.$route.params.theme
    }
  },
}
</script>

<style lang="scss" scoped>
.recipe-container{
  margin-top:102px;
  margin-bottom: 70px;
  width: 480px;

  @media screen and (max-width: 575px) {
    width: 100%;
  }
}
</style>