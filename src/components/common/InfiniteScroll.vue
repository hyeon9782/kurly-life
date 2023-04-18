<template>
    <div></div>
</template>

<script>
export default {
  data(){
    return {
        items: [],
        page: 1,
        loading: false
    },
  },
  mounted() {
    this.getMoreItems()
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    getMoreItems() {
      this.loading = true
      // 새로운 아이템들을 가져와서 items 배열에 추가
      // 예를 들어, API 요청을 보내서 아이템을 가져올 수 있음
      // 가져온 아이템들은 this.items에 추가되어야 함
      this.loading = false
    },
    handleScroll() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop
      let scrollHeight = document.documentElement.scrollHeight
      let clientHeight = document.documentElement.clientHeight
      let bottomLimit = scrollHeight - clientHeight - 100

      if (scrollTop > bottomLimit && !this.loading) {
        this.page++
        this.getMoreItems()
      }
    }
  }
};
</script>

<style>

</style>