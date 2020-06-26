<template>
  <div class="recommend">
      <div v-for="(item,i) in recommends" :key="i">
          <a :href="item.link">
              <img :src="item.image" alt="">
              <div>{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
    name:"RecommendComp",
    props:['recommends'],
    data(){
        return {}
    }
}
</script>

<style scoped>
.recommend {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    text-align: center;
    padding: 15px 0;
    border-bottom: 8px solid #eee;
}
.recommend a {
    color: #333;
}
.recommend  img {
    width: 80px;
    height: 80px;
    margin-bottom: 5px;
}
</style>