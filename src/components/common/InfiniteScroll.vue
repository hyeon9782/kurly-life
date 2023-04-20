<template>
    <div class="infinite-scroll">
      <div>
        <ContentsCard v-for="(content, idx) in contents" :key="idx"  :item="content" />
      </div>
      <div v-if="loading" class="loading">Loading...</div>
    </div>
</template>

<script>
import contents from '@/store/contents';
import ContentsCard from '../contents/ContentsCard.vue';
export default {
  components: { ContentsCard },
  data(){
    return {
        items: [],
        page: 1,
        loading: false
    }
  },
  computed:{
    contents(){
      return this.$store.state.contents.contents
    }
  },
  props: {
    category:{
      type: String,
      default: () => ("")
    },
    theme:{
      type: String,
      default: () => ("")
    },
    keyword:{
      type: String,
      default: () => ("")
    },
    userId:{
      type: String,
      default: () => ("")
    }
  },
  created() {
    this.getMoreItems()
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    async getMoreItems() {
      this.loading = true
      await this.$store.dispatch('contents/searchContents',{
        pageNum: this.page,
        keyword: this.keyword,
        category: this.category,
        theme: this.theme,
        userId: this.userId,
      })
      this.items = this.items.concat(contents)
      this.page++
      this.loading = false
    },
    handleScroll() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop
      let scrollHeight = document.documentElement.scrollHeight
      let clientHeight = document.documentElement.clientHeight
      let bottomLimit = scrollHeight - clientHeight - 100

      if (scrollTop > bottomLimit && !this.loading) {
        this.getMoreItems()
      }
    }
  }
};
</script>

<style>

</style>