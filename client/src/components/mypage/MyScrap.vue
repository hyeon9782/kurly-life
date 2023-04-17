<template>
  <div class="my-scrap">
    <div>
      <UserContent />
    </div>
  </div>
</template>

<script>
import UserContent from '@/components/user/UserContent.vue';
export default {
  components:{
    UserContent,
  },
  methods:{
    fetchData(){
      this.$store.dispatch('contents/fetchScrapContents', {
        contentsId: "",
        category: ""
      })
    }
  },
  computed:{
    contents(){
      return this.$store.state.contents.contents
    }
  },
  created(){

  }
}
</script>

<style lang="scss" scoped>
.my-scrap{
    width: 480px;
    .scrap-header{
      display: flex;
      padding: 10px;
      .back{
        font-size: 30px;
        color: rgb(190, 190, 190);
        width: 40px;
      }
      .title{
        font-size:24px;
        margin-left: 170px;
        width: 440px;
      }
    }
}
</style>