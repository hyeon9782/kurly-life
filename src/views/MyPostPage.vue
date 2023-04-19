<template>
  <div class="user-container">
    <div class="user-box">
      <div class="user-content">  
        <div class="user-img">
          <img :src="url" alt="img" width="100%">
        </div>
        <div class="user-info">
          <div class="name-box">
            <div class="nickname">
              {{ nickname }}
            </div>
            <FollowBtn v-if="userId == myId" />
          </div>
          <div class="click-box">
            <div class="like">
              <span class="material-symbols-outlined like-icon">
                favorite
              </span>
              <div class="like-num">
                {{ likeNum }}
              </div>
            </div>
            <div class="scrap">
              <span class="material-symbols-outlined scrap-icon">
                bookmarks
              </span>
              <div class="scrap-num">
                {{ scrapNum }}
              </div>
            </div>
            <div class="follow">
              <span class="material-symbols-outlined follow-icon">
                groups
              </span>
              <div class="follow-num">
                {{ followNum }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="introduce">
        {{ introduce }}
      </div>
    </div>
    <UserContent type="user" :userId=1 />
  </div>
</template>

<script>
import UserContent from '@/components/user/UserContent.vue';
import FollowBtn from '@/components/following/FollowBtn.vue';
export default {
  components:{
    UserContent,
    FollowBtn,
  },
  data(){
    return{
      likeNum: 9,
      scrapNum: 5,
      followNum: 7,
      userId: "32",
      myId: "32",
      nickname: "노른자없는계란",
      introduce: "자기소개/평소 라이프 스타일에 대한 내용을 입력하세요. 자기소개/평소 라이프 스타일에 대한 내용을 입력하세요." ,
      url: "",
    }
  }
}
</script>

<style lang="scss" scoped>
.user-container{
  width: 480px;
  .user-box{
    padding: 0 15px 0 15px;
    .user-content{
      display: flex;
      padding: 10px;
      .user-img{
        width: 70px;
        height: 70px;
        border-radius: 50%;
        background: gray;
        width: 15%;
      }
      .user-info{
        width: 85%;
        padding-left: 15px;
        .name-box{
          display: flex;
          justify-content: space-between;
          .nickname{
            font-size:24px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }
      .click-box{
        display: flex;
        padding: 10px 10px 10px 0;
        
        .like{
          display: flex;

          .like-icon{
            font-size: 30px;
          }
          .like-num{
            margin-left: 12px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 24px;
          }
        }
        .scrap{
          display: flex;
          margin-left: 10px;
          .scrap-icon{
            font-size: 30px;
          }
          .scrap-num{
            margin-left: 12px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 24px;
          }
        } 
        .follow{
          display: flex;
          margin-left: 15px;
          .follow-icon{
            font-size: 34px;
          }
          .follow-num{
            margin-left: 12px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 24px;
          }
        }
      }
    }
    .introduce{
      padding: 0 10px  0  10px;
      color: rgb(51, 51, 51);
      line-height: 28px;
    }
  }
}
</style>