<template>
  <div class="user-content">
    <div class="user-content-tab">
      <div class="tab" v-for="(tab, idx) in tabs" :key="idx" :class="{select:idx==active}" @click="searchScrapContents(idx,tab.category)">
        {{ tab.text }}
      </div>    
    </div>
    <div class="content-container">
      <template v-if="true">
        <div class="content-card" v-for="scrapContent in scrapContents" :key="scrapContent.id" @click="detail(scrapContent.id)">
          <img :src="scrapContent.url" alt="img" width="100%">
        </div>
      </template>
      <div v-for="(item, $index) in items" :key="$index" class="content-card" >
        {{ item.idx }}
      </div>
      
      <infinite-loading @infinite="infiniteHandler"></infinite-loading>
      
    </div>
  </div>
</template>

<script>
import InfiniteLoading from "vue-infinite-loading";
import axios from 'axios'
// import { fetchScrapContents } from "@/api/contents";
export default {
  components:{
    InfiniteLoading
  },
  data(){
    return{
      items: [],
      page: 0,
      tabs: [
        {
          text: "모두",
          category: ""
        },
        {
          text: "레시피",
          category: "recipe"
        },
        {
          text: "생활팁",
          category: "tip"
        },
        {
          text: "맛집",
          category: "popular-restaurant"
        },
      ],
      active: 0,
      categoryType: ""
    }
  },
  computed:{
    scrapContents(){
      return this.$store.state.contents.scrapContents
    }
  },
  created(){
    this.searchScrapContents()
  },
  methods:{
    detail(id){
      this.$router.push(`/contents/${id}`)
    },
    change(idx){
      this.active = idx
    },
    searchScrapContents(idx,category){
      this.change(idx ? idx : 0)
      this.$store.dispatch('contents/searchScrapContents',{
        pageNum: 0,
        category: category ? category : "",
        userId: 12
      })
      this.categoryType = category
      
      console.log(category)
    },
    async infiniteHandler($state) {
      const userId = 12
      const api = `http://localhost:8080/api/scrap/${userId}`
      await axios.get(api, {
        params: {
          page: this.page,
          categoryType: this.categoryType
        },
      }).then(({ data }) => {

        if (data.data.scrapItemList.length) {
          this.page += 1;
          // this.list.push(...data.data.scrapItemList)
          for (const item of data.data.scrapItemList){
            const data = {
              title: item.title
            }
            this.items.push(data)
          }
          $state.loaded(); 
        } else {
          $state.complete();
        }
      });
    },
  }
}
</script>

<style lang="scss" scoped>
.loading{
  display: flex;
  justify-content: center;
}
.user-content{
  width: 480px;
  .user-content-tab{
    display: flex;
    justify-content: space-around;
    border-bottom: 2px solid rgb(190, 190, 190);
    .tab{
      font-size: 18px;
      padding: 10px;
    }
  }
  .content-container{
    display: flex;
    flex-wrap: wrap;
    .content-card{
      box-sizing: border-box;
      width: 240px;
      height: 240px;
      background: yellowgreen;
      border: 1px solid black;
      
    }
  }
}
.select{
  border-bottom: 6px solid rgb(97, 2, 129) !important;
  color: rgb(142, 68, 173) !important;
}
</style>