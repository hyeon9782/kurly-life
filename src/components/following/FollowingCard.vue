<template>
  <div class="following-card">
    <UserBox :uploadDate="item.createdAt" :userId="item.userId" :nickname="item.nickname"/>
    <div class="thumbnail-box" @click="detail(item.contentsId)">
      <AppImage :img="require(`@/assets/image/${item.image}`)" height="460" />
    </div>
    <div class="title-box">
      <div class="title">
        {{ item.title }}
      </div>
      <div class="click-box">
        <div class="like-box">
          <div class="like-icon">
            <span class="material-symbols-outlined">
              thumb_up
            </span>
          </div>
          <div class="like-no">
            {{ item.like }}
          </div>
        </div>
        <div class="scrap-box">
          <div class="scrap-icon">
            <span class="material-symbols-outlined">
              bookmarks
            </span>
          </div>
          <div class="scrap-no">
            {{ item.scrap }}
          </div>
        </div>
      </div>
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
    height: 350px;
  }
  .click-box{
    display: flex;
    align-items: center;
    width: 100px;
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
  .title-box{
    display: flex;
    justify-content: space-between;
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