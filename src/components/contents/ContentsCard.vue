<template>
  <div class="content-card">
    <div class="content-image" @click="detail">
      <AppImage :img="require(`@/assets/image/${item.image}`)" height="210"/>
    </div>
    <div class="content-title">
      {{ item.title }}
    </div>
    <div>
      <ClickBox :likeNum="item.like" :scrapNum="item.scrap" />
    </div>
  </div>
</template>

<script>
import ClickBox from '@/components/common/ClickBox.vue';
import AppImage from '@/components/common/AppImage.vue';
export default {
  components:{
    AppImage,
    ClickBox
  },
  props:{
    item:{
      type: Object,
      default: () => ({})
    },
    url:{
      type: String,
      default: () => ('')
    },
    title:{
      type: String,
      default: () => ('')
    },
    likeNum:{
      type: Number,
      default: () => (0)
    },
    scrapNum:{
      type: Number,
      default: () => (0)
    }
  },
  methods:{
    detail(){
      this.$router.push(`/contents/${this.item.contentsId}`)
    }
  }
}
</script>

<style lang="scss" scoped>
.content-card{
  padding: 5px;
  .content-image{
    width: 210px;
    height: 210px;
  }
  .content-title{
    width: 210px;
    padding: 10px 0 5px 0;
    font-size: 18px;
  }
}

.black{
  color: black;
}
</style>