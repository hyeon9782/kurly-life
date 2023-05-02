<template>
  <div class="restaurant-contaner">
    <ContentTheme category="restaurant" />
    <ContentsList />
  </div>
</template>

<script>
import ContentTheme from '@/components/contents/ContentsTheme.vue';
import ContentsList from '@/components/contents/ContentsList.vue';
export default {
  components:{
    ContentTheme,
    ContentsList,
  },
  methods:{
    searchContents(){
      this.$store.dispatch('contents/searchContents',{
        pageNum: 1,
        keyword: "",
        category: "restaurant",
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
.restaurant-contaner{
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