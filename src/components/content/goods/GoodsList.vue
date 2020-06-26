<template>
  <div class="goods-list">
      <goods-lists-item v-for="(item,i) in goods" :key="i" :goods="item"></goods-lists-item>
  </div>
</template>

<script>
import GoodsListsItem from "./GoodsListsItem"

export default {
    name:"GoodsList",
    data(){
        return {}
    },
    components:{
        GoodsListsItem
    },
    props:['goods']
}
</script>

<style scoped>
.goods-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
</style>