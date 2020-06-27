<template>
  <div class="goods-list-item">
      <img :src="goods.show.img" alt="" @load='imgLoad'>
      <div>
        <h5 class="title">{{goods.title}}</h5>
        <span class="price">{{goods.price}}</span>
        <span>☆</span>
        <span class="collect">{{goods.cfav}}</span>
      </div>
  </div>
</template>

<script>
export default { 
    name:"GoodsListsItem",
    data(){
        return {}
    },
    props:['goods'],
    methods:{
        imgLoad(){
            this.$bus.$emit("imgLoad")
        }
    }
}
</script>

<style scoped>
.goods-list-item {
    width: 48%;
}
img {
    width: 100%;
    border-radius: 8px;
}
.title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #333;
}
</style>