<template>
  <div class="contents-card-mini" @click="detail(content.idx)">
    <div class="contents-image">
        <img :src="content.url" alt="메인 컨텐츠" width="100%">
    </div>
    <div class="contents-title">
      {{ title }}
    </div>
  </div>
</template>

<script>
export default {
    props:{
        content:{
            type: Object,
            default: () => ({}),
        }
    },
    methods:{
        detail(idx){
            this.$router.push(`/contents/${idx}`)
        }
    },
    computed:{
        title(){
            return this.content.title.substr(0,8) + '...'
        }
    }
}
</script>

<style lang="scss" scoped>
.contents-card-mini{
    width: 150px;
    height: 200px;
    .contents-image{
        width: 150px;
        height: 150px;
        background: lightgray;
    }
    .contents-title{
        font-size:18px;
        padding: 8px 0 5px 0 ;
    }
}
</style>