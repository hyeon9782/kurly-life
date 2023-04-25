<template>
  <div class="lifehack-container">
    <ContentTheme category="lifehack"/>
    <div class="card-container">
      <template v-if="contents == null || contents.length == 0">
        <NoData />
      </template>
      <template v-else>
        <!-- <InfiniteScroll category="lifehack"></InfiniteScroll> -->
        <ContentCard v-for="(content, idx) in contents" :key="idx"  :item="content"/>
        
      </template>
    </div>
  </div>
</template>

<script>
import ContentTheme from '@/components/contents/ContentsTheme.vue';
import ContentCard from '@/components/contents/ContentsCard.vue';
import NoData from '@/components/common/NoData.vue';
// import InfiniteScroll from '@/components/common/InfiniteScroll.vue';
export default {
  components:{
    ContentTheme,
    ContentCard,
    NoData,
    // InfiniteScroll
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
  computed:{
    contents(){
      return this.$store.state.contents.contents
    }
  }
}
</script>

<style lang="scss" scoped>
.lifehack-container{
  margin-top:102px;
  width: 480px;
  .card-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
}
</style>