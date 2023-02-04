<template>
  <div class="reply-input-box">
    <input type="text" class="reply-input" placeholder="댓글을 남겨주세요.">
    <div class="insert-btn" @click="insertReply">등록</div>
   </div>
</template>

<script>
export default {
    methods:{
        insertReply(){
            console.log("dd")
        },
    }
}
</script>

<style lang="scss" scoped>
.reply-input-box{
    display: flex;
    padding-top: 10px;
    .reply-input{
        width: 85%;
        height: 35px;
    }
    .insert-btn{
        width: 15%;
        font-size: 18px;
        color: plum;
        background: rgb(249, 243, 255);
        display: flex;
        justify-content: center;
        align-items: center;
        
    }

}
</style>