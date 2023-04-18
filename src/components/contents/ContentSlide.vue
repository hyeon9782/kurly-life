<template>
  <hooper :settings="hooperSettings" class="content-slide">
    <slide v-for="(content, idx) in contents" :key="idx">
        <ContentCardMini :content="content" />
    </slide>
    <hooper-navigation slot="hooper-addons"></hooper-navigation>
    <hooper-pagination slot="hooper-addons"></hooper-pagination>
  </hooper>
</template>

<script>
import ContentCardMini from '@/components/contents/ContentsCardMini.vue';
import {
  Hooper,
  Slide,
  Pagination as HooperPagination,
  Navigation as HooperNavigation
} from 'hooper';

import 'hooper/dist/hooper.css';
export default {
  props:{
    contents:{
      type: Array,
      default: () => ([])
    }
  },
  components: {
    Hooper,
    Slide,
    HooperPagination,
    HooperNavigation,
    ContentCardMini
  },
  data(){
    return{
      hooperSettings: {
        itemsToShow: 3,
        centerMode: false
      },
    }
  }
}
</script>

<style lang="scss" scoped>
.content-slide{
    margin: 20px 0 20px 0;
    
}
</style>