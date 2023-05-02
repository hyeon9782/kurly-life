<template>
  <div class="my-scrap">
    <div>
      <UserContent type="scrap" />
    </div>
  </div>
</template>

<script>
import UserContent from '@/components/user/UserContent.vue';
export default {
  components:{
    UserContent,
  },
}
</script>

<style lang="scss" scoped>
.my-scrap{
    width: 480px;
    margin-bottom: 70px;
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

@media screen and (max-width: 575px) {
  .my-scrap{
    width: 100%;
  }
}
</style>