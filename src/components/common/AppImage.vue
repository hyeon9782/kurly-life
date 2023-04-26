<template>
  <div>
    <template v-if="img == null || img == ''">
      <div class="temporary-image" :class="{height210: height == '210'}">
        임시 이미지
      </div>
    </template>
    <template v-if="img != null && img != ''">
      <img :src="img" alt="잘못된 URL입니다." width="100%" height="100%">
    </template>
  </div>
</template>

<script>
export default {
    props:{
        img:{
            type: String,
            default: () => ('')
        },
        height:{
            type: String,
            default: () => ("460")
        }
    }
}
</script>

<style>
.temporary-image{
    width: 100%;
    height: 460px;
    background: lightgray;
    color: gray;
    font-size: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.height460{
    height: 460px;
}
.height210{
    height: 210px !important;
}
</style>