<template>
  <div class="comments-reply">
    <div class="commnets-box">
        <CommentsItem :isReply="true"/>
    </div>
    <div class="reply-containr">
        <div class="reply-box" v-for="(reply, idx) in replys" :key="idx">
            <CommentsItem :isReply="true" />
        </div>
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
        fetchReply(){
            this.$store.dispatch('contents/fetchReply',{
                commentsId: ""
            })
        }
    },
    data(){
        return{
            replys: [1,2,3,4]
        }
    }
}
</script>

<style lang="scss" scoped>
.comments-reply{
    width: 480px;
    .commnets-box{
        padding: 10px;
    }
    .reply-containr{
        padding-left: 20px;
        .reply-box{
            background: lightgray;
            border-bottom: 1px solid black;
            padding: 10px 0;
        }
    }
}
</style>