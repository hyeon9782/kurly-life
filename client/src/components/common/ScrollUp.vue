<template>
  <div class="scroll-up" @click="scrollToTop">
    <span class="material-symbols-outlined up">
        arrow_circle_up
    </span>
  </div>
</template>

<script>
export default {
  methods: { 
    scrollToTop() {
      window.scrollTo(0,0);
    }
  }
}
</script>

<style lang="scss" scoped>
.scroll-up{
  width: 50px;
  height: 50px;
  position: fixed;
  right: 10px;
  bottom: 100px;
  .up{
    font-size: 48px;
  }
}
</style>