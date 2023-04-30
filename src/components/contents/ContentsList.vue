<template>
  <div class="card-container">
      <template v-if="contents == null || contents.length == 0">
        <NoData />
      </template>
      <template v-else>
        <ContentCard v-for="(content, idx) in contents" :key="idx"  :item="content"/>
      </template>
  </div>
</template>

<script>
import ContentCard from '@/components/contents/ContentsCard.vue';
import NoData from '@/components/common/NoData.vue';
export default {
    components:{
        ContentCard,
        NoData
    },
    computed:{
        contents(){
            return this.$store.state.contents.contents
        }
    }
}
</script>

<style lang="scss" scoped>

</style>