<template>
  <div class="follow-btn" @click="toggleFollow">
    <template v-if="text === '팔로우'">
      <span class="material-symbols-outlined icon">
        add
      </span>
    </template>
    <template v-else>
      <span class="material-symbols-outlined icon">
        remove
      </span>
    </template>
    <div class="follow-text">
      {{ text }}
    </div>
  </div>
</template>

<script>
import { insertFollowing, deleteFollowing } from '@/api/following'
export default {
  data(){
    return{
      text: "팔로우"
    }
  },
  props:{
    targetAccountIdx:{
      type: Number,
      default: () => (0) 
    }
  },
  methods:{
    toggleFollow(){
      const payload = {
        accountIdx: 12,
        targetAccountIdx: this.targetAccountIdx
      }
      if(this.text === "팔로우"){
        this.text = "언팔로우"
        deleteFollowing(payload)
        
      }else{
        this.text = "팔로우"
        insertFollowing(payload)
      }
    }
  }
}
</script>

<style lang="scss" socped>
.follow-btn{
  display: flex;
  // justify-content: space-around;
  align-items: center;
  height: 43px;
  width: 115px;
  font-size: 18px;
  background: rgb(142, 68, 173);
  border-radius: 30px;
  color: white;
  .icon{
    font-size: 32px;
    font-weight: bold;
    width: 25%;
    padding-left: 5px;
  }
  .follow-text{
    width: 75%;
    font-weight: bold;
    text-align: center;
  }
}
</style>