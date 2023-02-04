<template>
  <hooper :settings="hooperSettings" class="content-slide">
    <slide v-for="(product, idx) in products" :key="idx">
        <ProductCard :product="product" />
    </slide>
    <hooper-navigation slot="hooper-addons"></hooper-navigation>
    <hooper-pagination slot="hooper-addons"></hooper-pagination>
  </hooper>
</template>

<script>
import ProductCard from '@/components/product/ProductCard.vue';
import {
  Hooper,
  Slide,
  Pagination as HooperPagination,
  Navigation as HooperNavigation
} from 'hooper';

import 'hooper/dist/hooper.css';
export default {
  props:{
    products:{
      type: Array,
      default: () => ([1,2,3])
    }
  },
  components: {
    Hooper,
    Slide,
    HooperPagination,
    HooperNavigation,
    ProductCard
  },
  data(){
    return{
      hooperSettings: {
        itemsToShow: 3,
        centerMode: false
      },
      items:[
        {
            productId: "1",
            url: "",
            title: "테스트 상품 1",
            price: "53171",
        },
        {
            productId: "2",
            url: "",
            title: "테스트 상품 2",
            price: "33631",
        },
        {
            productId: "3",
            url: "",
            title: "테스트 상품 3",
            price: "71264",
        },
        {
            productId: "4",
            url: "",
            title: "테스트 상품 4",
            price: "51262",
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.content-slide{
    margin: 20px 0 20px 0;
    height: 230px;
    
}
</style>