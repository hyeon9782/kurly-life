<template>
  <div class="comments-page">
    <div class="comments-container">
      <CommentsItem v-for="(comment, index) in comments" :key="index" :comment="comment"/>
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
  },
  methods:{
    getComments(){
      this.$store.dispatch('contents/fetchComments', this.$route.params.contentsId)
    }
  },
  created(){
    this.getComments()
  },
  computed:{
    comments(){
      return this.$store.state.contents.comments
    }
  }
}
</script>

<style lang="scss">
.comments-page{
  width: 480px;
  margin-bottom: 70px;
  .comments-container{
    padding: 0px 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}

@media screen and (max-width: 575px) {
  .comments-page{
    width: 100vw;
    .comments-container{

    }
  }
}
</style>