<template>
  <div class="theme-box">
    <template v-if="category == '레시피' || category == 'recipe'">
      <div v-for="(i, idx) in recipeTheme" :key="idx" class="theme-item" :class="{select:idx==active}" @click="searchContents(idx, i)">
          {{ i }}
      </div>
    </template>
    <template v-if="category === '생활팁' || category == 'lifehack'">
      <div v-for="(i, idx) in lifehackTheme" :key="idx" class="theme-item" :class="{select:idx==active}" @click="searchContents(idx, i)">
          {{ i }}
      </div>
    </template>
    <template v-if="category === '맛집' || category == 'restaurant'">
      <div v-for="(i, idx) in restaurantTheme" :key="idx" class="theme-item" :class="{select:idx==active}" @click="searchContents(idx, i)">
          {{ i }}
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data(){
    return{
      recipeTheme: ["전체", "저녁", "간식", "생일", "야식", "베이커리", "초간단 요리", "음료", "아이들 간식"],
      lifehackTheme: ["전체", "요리", "보관", "정리", "살림템", "청소", "기타"],
      restaurantTheme: ["전체", "한식", "중식", "일식", "퓨전", "이탈리안", "프렌치"],
      selectTheme: "",
      active: 0
    }
  },
  props:{
    category:{
      type: String,
      default: () => ('')
    },
  },
  methods:{
    change(idx){
      this.active = idx
    },
    searchContents(idx, theme){
      this.change(idx)
      if (theme == '전체') theme = ""
      console.log(theme)
      this.selectTheme = theme
      this.$store.dispatch('contents/searchContents',{
        pageNum: 1,
        keyword: this.keyword,
        category: this.category,
        theme: this.selectTheme,
      })
    }
  },
  created(){
    if (this.theme) {
      this.active = this.recipeTheme.indexOf(this.theme)
    }
  },
  computed:{
    keyword(){
      return this.$store.state.contents.keyword
    },
    theme(){
      return this.$route.params.theme
    }
  }
}
</script>

<style lang="scss" scoped>
.theme-box{
  display: flex;
  justify-content: center;
  padding: 20px;
  flex-wrap: wrap;
  .theme-item{
    background: lightgray;
    border-radius: 5px;
    padding: 7px 10px 7px 10px;
    margin: 5px;
    font-size:18px;
  }
}
.select{
  background: rgb(142, 68, 173) !important;
  color: white;
}
</style>