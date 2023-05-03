<template>
  <div class="contents-card-mini" @click="detail">
    <div class="contents-image">
        <img :src="require(`@/assets/image/${content.image}`)" alt="메인 컨텐츠" width="100%" height="100%">
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
        detail(){
            this.$router.push(`/contents/${this.content.contentsId}`)
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

@media screen and (max-width: 575px) {
.contents-card-mini{
    .contents-image{
        width: 130px;
        height: 130px;
    }
}
}
</style>