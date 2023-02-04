<template>
  <hooper :settings="hooperSettings">
    <slide v-for="(content, idx) in contents" :key="idx">
      {{ content }}
    </slide>
    <hooper-navigation slot="hooper-addons"></hooper-navigation>
    <hooper-pagination slot="hooper-addons"></hooper-pagination>
  </hooper>
</template>

<script>
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
    HooperNavigation
  },
  data(){
    return{
      hooperSettings: {
        itemsToShow: 3,
        centerMode: true
      },
    }
  }
}
</script>

<style>

</style>