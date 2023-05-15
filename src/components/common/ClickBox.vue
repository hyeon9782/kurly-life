<template>
  <div class="click-box">
    <div class="like-box" @click="toggleLike">
        <span class="material-symbols-outlined like" v-if="!activeLike">
            favorite
        </span>
        <div v-else class="heart">❤</div>
        <div class="like-num">
            {{ likeCnt }}
        </div>
    </div>
    <div class="scrap-box" @click="toggleScrap">
        <span class="material-symbols-outlined scrap">
            bookmark
        </span>
        <div class="scrap-num">
            {{ scrapCnt }}
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        likeNum:{
            type: Number,
            default: () => (1)
        },
        scrapNum:{
            type: Number,
            default: () => (1)
        },
        contentsId:{
            type: String,
            default: () => ("")
        },
    },
    data(){
        return{
            activeLike: false,
            activeScrap: false,
            likeCnt: 0,
            scrapCnt: 0
        }
    },
    created(){
        this.setCnt()
    },
    methods:{
        toggleLike(){
            if (this.activeLike){
                this.activeLike = false
                this.likeCnt = this.likeCnt - 1
            }else{
                this.activeLike = true
                this.likeCnt = this.likeCnt + 1
            }
        },
        toggleScrap(){
            if (this.activeScrap){
                this.activeScrap = false
                this.scrapCnt = this.scrapCnt - 1
            }else{
                this.activeScrap = true
                this.scrapCnt = this.scrapCnt + 1
            }
        },
        setCnt(){
            this.likeCnt = this.likeNum
            this.scrapCnt = this.scrapNum
        }
    }
}
</script>

<style lang="scss" scoped>
.click-box{
    display: flex;
    .like-box{
        display: flex;

        .heart{
            font-size: 28px;
        }
        
        .like{
            font-size: 32px;
        }
        .like-num{
            padding-top: 3px;
            font-size: 28px;
        }
    }
    .scrap-box{
        display: flex;
        padding-left: 10px;
        .scrap{
            font-size: 32px
        }
        .scrap-num{
            font-size: 28px;
            padding-top: 3px;
        }
    }
}
</style>