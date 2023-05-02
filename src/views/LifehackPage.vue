<template>
  <div class="lifehack-container">
    <ContentTheme category="lifehack"/>
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
  methods:{
    searchContents(){
      this.$store.dispatch('contents/searchContents',{
        pageNum: 1,
        keyword: "",
        category: "lifehack",
        theme: "",
        userId: "",
      })
    }
  },
  created(){
    this.searchContents()
  },
}
</script>

<style lang="scss" scoped>
.lifehack-container{
  margin-top:102px;
  margin-bottom: 70px;
  width: 480px;
  .card-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  @media screen and (max-width: 575px) {
    width: 100%;
    
  }
}
</style>