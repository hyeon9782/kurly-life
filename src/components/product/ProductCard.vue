<template>
  <div class="product-card">
    <div class="product-image" :style="{backgroundImage: 'url(require(' + '@/assets/image/'+product.image + '))'}">
      <div class="cart-box" @click="shoppingCart">
        <span class="material-symbols-outlined">
          shopping_cart
        </span>
      </div>
    </div>
    <div class="product-title">
      {{ product.productName }}
    </div>
    <div class="product-price">
      <template v-if="product.discount === 0">
        <div class="discount-box">
          <div class="product-discount">
            {{ product.discount }}
          </div>
          <div class="discount-price">
            {{ discountPrice  }}
          </div>
        </div>
      </template>
      <template v-if="product.discount !== 0">
        <div class="original-pirce">
          {{ originalPrice }}
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    product:{
      type: Object,
      default: () => ({}),
      img:{
        type: String,
        default: () => ("")
      },
      title:{
        type: String,
        default: () => ("")
      },
      price:{
        type: Number,
        default: () => (0)
      },
      discount:{
        type: Number,
        default: () => (0)
      },

    }
  },
  methods:{
    shoppingCart(){
      alert("장바구니에 추가했어요!")
    }
  },
  computed:{
    originalPrice(){
      return this.product.productPrice.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원" 
    },
    discountPrice(){
      let discountPrice = this.product.productPrice / this.product.discount
      
      return Math.ceil(discountPrice).toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + "원"
    }

  }
}
</script>

<style lang="scss" scoped>
.product-card{
  width: 130px;
  height: auto;
  .product-image{
    position: relative;
    width: 130px;
    height: 160px;
    background: lightgray !important;
    .cart-box{
      position: absolute;
      right: 10px;
      bottom: 10px;
      background: rgba(119, 90, 126, 0.74);
      color: white;
      border-radius: 50%;
      padding: 5px;
    }
  }
  .product-title{
    font-size: 16px;
    padding: 10px 0 10px 0;
  }
  .product-price{
    font-size: 16px;
    font-weight: bold;
    .discount-box{
      display: flex;
    }
  }
}
.shopping-cart{
  color: purple !important;
  background: white !important;
}
</style>