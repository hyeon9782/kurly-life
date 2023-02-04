<template>
  <div class="comments-page">
    <div class="comments-container">
      <CommentsItem v-for="i in 5" :key="i"/>
    </div>
    <CommentsInput />
  </div>
</template>

<script>
import CommentsInput from '@/components/comments/CommentsInput.vue';
import CommentsItem from '@/components/comments/CommentsItem.vue';
export default {
  components:{
    CommentsItem,
    CommentsInput
  }
}
</script>

<style lang="scss">
.comments-page{
  width: 480px;
  .reply-input-box{
    display: flex;
    padding-top: 10px;
    .reply-input{
        width: 85%;
        height: 35px;
    }
  }
}
</style>