<template>
  <div>
    <nav-bar class="nav_bar">
      <template v-slot:center>购物街</template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar"
export default {
  components:{
    NavBar
  }
}
</script>

<style scoped>
.nav_bar {
  background-color: pink;
}
</style>>
