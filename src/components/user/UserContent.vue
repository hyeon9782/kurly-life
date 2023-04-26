<template>
  <div class="user-content">
    <div class="user-content-tab">
      <div class="tab" v-for="(tab, idx) in tabs" :key="idx" :class="{select:idx==active}" @click="fetchContents(idx,tab.category)">
        {{ tab.text }}
      </div>    
    </div>
    <div class="content-container">
      <template v-if="true">
        <div class="content-card" v-for="content in contents" :key="content.contentsId" @click="detail(content.contentsId)">
          <img :src="require(`@/assets/image/${content.image}`)" alt="img" width="100%" height="100%">
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    type: {
      type: String,
      default: () => (""),
    },
    userId: {
      type: Number,
      default: () => (0)
    }
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
          category: "lifehack"
        },
        {
          text: "맛집",
          category: "restaurant"
        },
      ],
      active: 0,
      categoryType: ""
    }
  },
  computed:{
    contents(){
      return this.$store.state.contents.contents
    }
  },
  methods:{
    detail(id){
      this.$router.push(`/contents/${id}`)
    },
    change(idx){
      this.active = idx
    },
    fetchContents(idx,category){
      this.change(idx ? idx : 0)
      let url = ""
      if (this.type === "scrap") url = "fetchScrapContents"
      else if (this.type === "user") url = "fetchUserContents"
      this.$store.dispatch(`contents/${url}`,{
        pageNum: 0,
        category: category ? category : "",
        userId: this.userId ? this.userId : 1,
      })
      this.categoryType = category
      
      console.log(category)
    },
  },
  created(){
    this.fetchContents()
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
      border: 1px solid white;
      
    }
  }
}
.select{
  border-bottom: 6px solid rgb(97, 2, 129) !important;
  color: rgb(142, 68, 173) !important;
}
</style>