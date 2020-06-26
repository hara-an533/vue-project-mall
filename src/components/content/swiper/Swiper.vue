<template>
  <mt-swipe :auto="4000">
    <mt-swipe-item v-for="(item,index) in lunbotu" :key="index">
      <a :href="item.link">
        <img :src="item.image" :title="item.title" />
      </a>
    </mt-swipe-item>
  </mt-swipe>
</template>

<script>
export default {
  name: "swiper",
  props: ["lunbotu"],
  data() {
    return {};
  }
};
</script>

<style scoped>
.mint-swipe {
  height: 180px;
  text-align: center;
}
img {
  height: 100%;
  width: 100%;
}
</style>