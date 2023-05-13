<template>
  <hooper :settings="hooperSettings" class="content-slide">
    <slide v-for="(t, idx) in theme" :key="idx">
        <div class="theme" @click="movePage(t)">
            {{t}}
        </div>
    </slide>
  </hooper>
</template>

<script>
import {
  Hooper,
  Slide,
} from 'hooper';

import 'hooper/dist/hooper.css';
export default {
  props:{
    contents:{
      type: Array,
      default: () => ([])
    }
  },
  methods:{
    movePage(theme){
      this.$router.push({
        name: 'recipe',
        params: {theme}
      })
    }
  },
  components: {
    Hooper,
    Slide,
  },
  data(){
    return{
      hooperSettings: {
        itemsToShow: 4,
        centerMode: false
      },
      theme: ["저녁", "간식", "생일", "야식", "베이커리", "초간단", "요리", "음료", "아이들 간식"]
    }
  }
}
</script>

<style lang="scss" scoped>
.content-slide{
    margin: 20px 0 -60px 0;
    .theme{
        border-radius: 50%;
        background: lightgray;
        color: gray;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
        width: 80px;
        height: 80px;
    }
}
</style>