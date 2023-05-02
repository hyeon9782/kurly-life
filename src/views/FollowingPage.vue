<template>
  <div class="following-container">
    <div class="card-container">
      <template v-if="followingContents == null || followingContents.length == 0">
        <NoData />
      </template>
      <template v-if="true">
        <FollowingCard v-for="(followingContent, idx) in followingContents" :key="idx" :item="followingContent"/>
      </template>
    </div>
  </div>
</template>

<script>
import FollowingCard from '@/components/following/FollowingCard.vue';
import NoData from '@/components/common/NoData.vue'
export default {
  components:{
    FollowingCard,
    NoData
  },
  created(){
    this.fetchFollowingContents()
  },
  methods:{
    fetchFollowingContents(){
      this.$store.dispatch('following/fetchFollowingContents',{
        userId: 1
      })
    }
  },
  computed:{
    followingContents(){
      return this.$store.state.following.followingContents
    }
  },
}
</script>

<style lang="scss" scoped>
.following-container{
  margin-top:102px;
  margin-bottom: 70px;
  width: 480px;
  // .card-container{
  //   display: flex;
  //   flex-wrap: wrap;
  //   justify-content: space-around;
  // }

  @media screen and (max-width: 575px) {
    width: 100%;
  }
}
</style>