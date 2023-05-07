<template>
  <div class="user-box" @click="movePage(userId)">
    <div class="user-img-box">
      <img :src="img" alt="img">
    </div>
    <div class="user-info" :class="{nodate:uploadDate == ''}">
      <div class="nickname">
        {{ nickname }}
      </div>
      <div class="upload-date">
        {{ date }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    img:{
      type: String,
      default: () => ("")
    },
    nickname: {
      type: String,
      default: () => ("기본")
    },
    uploadDate: {
      type: String,
      default: () => ("")
    },
    userId:{
      type: Number,
      default: () => (3)
    }
  },
  created(){
    console.log(this.uploadDate)
  },
  methods:{
    movePage(userId){
      this.$router.push(`/mypost/${userId}`)
    }
  },
  computed:{
    date(){
      return this.uploadDate.substr(0,10)
    }
  }
}
</script>

<style lang="scss" scoped>
.user-box{
  display: flex;
  padding: 10px;
  .user-img-box{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: lightgray;
    // margin: 10px;
  }
  .user-info{
    color: gray;
    padding-left: 10px;
    font-size: 16px;
    .nickname{
      padding: 3px 0 8px 0;
      
    }
    .upload-date{
    }
  }
}

.nodate{
  display: flex;
  align-items: center;
  font-size: 20px !important;
}
</style>