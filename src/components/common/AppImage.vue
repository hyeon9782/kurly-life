<template>
  <div>
    <template v-if="img == null || img == ''">
      <div class="temporary-image">
        임시 이미지
      </div>
    </template>
    <template v-if="img != null && img != ''">
      <div :class="{height210 : height === '210', height460 : height === '460'}">
        <img :src="img" alt="잘못된 URL입니다." width="100%" height="100%">
      </div>
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

.height210{
  width: 100%;
  height: 210px;
}

.height460{
  width: 100%;
  height: 350px;
}
/* .height460{
    height: 460px;
}
.height210{
    height: 210px !important;
} */
</style>