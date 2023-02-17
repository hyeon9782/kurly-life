<template>
  <div class="comments-item">
    <div class="comments-img">
      <div class="user-img-box" @click="movePage">
        <img :src="userImg" alt="x" width="100%">
      </div>
    </div>
    <div class="comments-contents">
      <div class="user-name">
        {{ nickname }}
      </div>
      <div class="content">
        {{ content }}
      </div>
      <div class="sub-box">
        <div class="uploadDate">
          {{ uploadDate }}
        </div>
        <div class="like" v-if="false">
          좋아요
        </div>
        <div class="reply" @click="reply" v-if="!isReply">
          답글 달기
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    item:{
      type:Object,
      default: () => ({}),
    },
    isReply:{
      type: Boolean,
      default: () => (false)
    },
    userImg:{
      type: String,
      default: () => ('')
    },
    userId:{
      type: String,
      default: () => ('2154')
    },
    nickname:{
      type: String,
      default: () => ('노른자있는계란')
    },
    content:{
      type: String,
      default: () => ('이성은 투명하되 얼음과 같으며 지혜는 날카로우나 갑 속에 든 칼이다 청춘의 끓는 피가 아니더면 인간이 얼마나 쓸쓸하랴?')
    },
    uploadDate:{
      type: String,
      default: () => ('2022-08-20')
    },
    likeNum:{
      type: Number,
      default: () => (0)
    },
    commentsId:{
      type: String,
      default: () => ('3214521')
    }
  },
  methods:{
    movePage(){
      this.$router.push(`/user-page/${this.userId}`)
    },
    reply(){
      this.$router.push(`/reply/${this.commentsId}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.comments-item{
  display: flex;
  padding: 10px;
  .comments-img{
    .user-img-box{
      border-radius: 50%;
      background:lightgray;
      width: 50px;
      height: 50px;
    }
  }
  .comments-contents{
    padding-left: 10px;
    .user-name{
      font-size: 18px;
      font-weight: bold;
    }
    .content{
      line-height: 25px;
      padding: 10px 0;
    }
    .sub-box{
      display: flex;
      .uploadDate{
        font-size: 16px;
        color: gray;
        display: flex;
        align-items: center;
        padding-right: 10px;
      }
      .like{
        font-size: 14px;
        color: gray;
      }
      .reply{
        font-size: 14px;
        color: gray;
        background: lightgray;
        border-radius: 15px;
        padding: 5px 10px;
        
      }
    }
  }
}
</style>