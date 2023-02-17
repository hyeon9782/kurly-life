<template>
  <div class="following-card">
    <UserBox :uploadDate="item.createdAt"/>
    <div class="thumbnail-box" @click="detail(item.idx)">
      <AppImage :img="item.thumbnail"/>
    </div>
    <div class="click-box">
      <div class="like-box">
        <div class="like-icon">
          <span class="material-symbols-outlined">
            thumb_up
          </span>
        </div>
        <div class="like-no">
          {{ item.likeCount }}
        </div>
      </div>
      <div class="scrap-box">
        <div class="scrap-icon">
          <span class="material-symbols-outlined">
            bookmarks
          </span>
        </div>
        <div class="scrap-no">
          2
        </div>
      </div>
    </div>
    <div class="title">
      {{ item.title }}
    </div>
    <div class="content-box">
      테스트 중인 글입니다@@@@@@@@@@@@@@@@@@@@@@@
    </div>
  </div>
</template>

<script>
import AppImage from '@/components/common/AppImage.vue';
import UserBox from '@/components/user/UserBox.vue';
export default {
  components:{
    UserBox,
    AppImage
  },
  created(){
    console.log(this.item.createdAt)
    console.log(this.item)
  },
  computed:{
    // cuttingContent(){
    //   return this.item.content.substr(0,100) + '...'
    // } 
  },
  props:{
    item:{
      type: Object,
      default: () => ({})
    }
  },
  methods:{
    detail(idx){
      this.$router.push(`/contents/${idx}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.following-card{
  padding: 10px;
  .thumbnail-box{
    height: 460px;
  }
  .click-box{
    display: flex;
    padding: 5px;
    .like-box{
      display: flex;
      width: 50%;
      .like-no{
        margin-left: 10px;
        margin-top: 3px;
      }
    }
    .scrap-box{
      display: flex;
      width: 50%;
      .scrap-no{
        margin-left: 10px;
        margin-top: 3px;
      }
    }
  }
  .title{
    font-size:24px;
    padding: 5px;
  }
  .content-box{
    padding: 5px;
  }
}
</style>