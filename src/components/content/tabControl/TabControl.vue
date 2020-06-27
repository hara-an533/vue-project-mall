<template>
  <div class="tab-control">
    <div
      class="tab-control-item"
      v-for="(item,i) in titles"
      :key="i"
      :class="{active:i==currentIndex}"
      @click="itemClick(i)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["titles"],
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit('changeType',index)
    }
  }
};
</script>

<style scoped>
.tab-control {
  display: flex;
  justify-content: space-around;
  font-size: 15px;
  line-height: 40px;
  background-color: #fff;
}
.tab-control-item {
  flex: 1;
  text-align: center;
}
.tab-control-item span {
  padding: 10px;
}
.active {
  color: deeppink;
}
.active span {
  border-bottom: 2px solid deeppink;
}
</style>