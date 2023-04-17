<template>
  <div class="mypage-container">
    <div class="my-box">
      <div class="user-info">
        <div class="my-rating">

        </div>
        <div class="name">
          김보빈님
        </div>
      </div>
      <div class="first-purchase">
        <div class="save">
          첫구매 우대 - 적립 5%
        </div>
        <div class="free">
          첫구매 우대 - 20,000원 이상 무료 배송
        </div>
      </div>
      <div class="rating-box">
        <div class="all-rating">
          전체등급 보기
        </div>
        <div class="next-month-rating">
          다음 달 예상등급 보기
        </div>
      </div>
    </div>
    <div class="my-life" @click="myLife">
      내 일상
      <span class="material-symbols-outlined">
        navigate_next
      </span>
    </div>
    <div class="my-scrap" @click="myScrap">
      스크랩
      <span class="material-symbols-outlined">
        navigate_next
      </span>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    myLife(){
      this.$router.push(`/mypost/1`)
    },
    myScrap(){
      this.$router.push(`/scrap/1`)
    }
  },
}
</script>

<style lang="scss" scoped>
.mypage-container{
  margin-top:102px;
  width: 480px;
  .my-box{
    padding: 10px;
    .user-info{
      display: flex;
      padding: 10px;
      .my-rating{
        border-radius: 5px;
        border: 3px solid purple;
        width: 50px;
        height: 50px;
      }
      .name{
        font-size: 24px;
        display: flex;
        align-items: center;
        margin-left: 10px;
      }
    }
    .first-purchase{
      .save{
        padding: 10px;
      }
      .free{
        padding: 10px;
      }
    }
    .rating-box{
      display: flex;
      justify-content: space-around;
      padding: 10px 0 10px 0;
      .all-rating{
        border-radius: 15px;
        background: rgba(224, 224, 224, 0.59);
        width: 200px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .next-month-rating{
        border-radius: 15px;
        background: rgba(224, 224, 224, 0.59);
        width: 200px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
  .my-life{
    padding: 15px 10px 15px 10px;
    color: rgb(127, 127, 127);
    font-size: 20px;
    border-bottom: 2px solid rgb(127, 127, 127);
    margin: 10px;
    display: flex;
    justify-content: space-between;
  }
  .my-scrap{
    padding: 10px 10px 10px 10px;
    color: rgb(127, 127, 127);
    font-size: 20px;
    margin: 10px;
    display: flex;
    justify-content: space-between;
  }
}
</style>