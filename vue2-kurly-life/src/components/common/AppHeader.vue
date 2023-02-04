<template>
  <div class="header-container" v-if="headerType != 'sub'">
    <div class="header">
      <div class="logo" @click="home">
        <img src="../../assets/kurly-logo.jpg" alt="logo" width="50px">
      </div>
      <div class="header-select">
        <div v-for="(i, idx) in select" :key="idx" class="select-item" :class="{select:idx==active}" @click="change(idx)">
          {{ i }}
        </div>
      </div>
      <div class="header-icon">
        <div class="location">
          <span class="material-symbols-outlined">
            location_on
          </span>
        </div>
        <div class="cart">
          <span class="material-symbols-outlined">
            shopping_cart
          </span>
        </div>
      </div>
    </div>
    <AppHeaderNav />
  </div>
</template>

<script>
import AppHeaderNav from '@/components/common/AppHeaderNav.vue';
export default {
  components:{
    AppHeaderNav
  },
  data(){
    return{
      select: [ "마켓컬리", "뷰티컬리", "컬리의 일상"],
      active: 2
    }
  },
  methods:{
    home(){
      this.$router.push("/")
    },
    change(idx){
      this.active = idx;
    }
  },
  computed:{
    headerType(){
      return "type"
    }
  }
}
</script>

<style lang="scss" scoped>
.header-container{
    position: fixed;
    z-index: 9;
    .header{
      background: rgb(97, 2, 129);
      width: 480px;
      height: 52px;
      color: black;
      font-size: 14px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      .header-select{
        display: flex;
        background: rgb(155, 89, 182);
        color: white;
        margin-left: 5px;
        
        border-radius: 15px;
        .select-item{
          padding: 10px;
          border-radius: 15px;
        }
      }
      .header-icon{
        display: flex;
        justify-content: space-around;
        width: 100;
        .location{
          color: white;
        }
        .cart{
          margin-left: 15px;
          color: white;
        }
      }
    }
}

.select{
  background: white !important;
  color: rgb(97, 2, 129) !important;
}
</style>