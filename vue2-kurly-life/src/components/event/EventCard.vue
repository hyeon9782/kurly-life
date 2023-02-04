<template>
  <div class="event-card">
    {{ eventImage }}
    <!-- <img :src="eventImage" alt="이벤트 카드"> -->
  </div>
</template>

<script>
export default {
    props:{
        eventImage:{
            type: String,
            default: () => ('')
        }
    }
}
</script>

<style>
.event-card{
  width: 100%;
  height: 200px;
  background: lightgray;
  color: gray;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>