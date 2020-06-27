<template>
  <div class="wrapper">
    <ul>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <button @click="btnClick">click</button>

      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
    </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  data(){
    return {
      scroll:null
    }
  },
  mounted(){
    this.scroll=new BScroll('.wrapper',{
      probeType:3,
      pullUpLoad:true
    }),
    this.scroll.on('scroll',(position)=>{
      // console.log(position)
    }),
    this.scroll.on('pullingUp',()=>{
      console.log("pullingUp");
      
    })
  },
  methods:{
    btnClick(){
      console.log('btnClick');
      
    }
  }
}
</script>

<style scoped>
.wrapper {
  height: 200px;
  background-color: tomato;
  overflow: hidden;
}

</style>