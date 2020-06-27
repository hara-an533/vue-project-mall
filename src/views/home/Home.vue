<template>
  <div id="home">
    <nav-bar class="nav_bar">
      <template v-slot:center>蘑菇街</template>
    </nav-bar>
    <scroll
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
      @loadMore="loadMore"
      @scroll="contentScroll($event)"
    >
      <!-- 如果在组件中使用ref属性 则获取到的是一个组件对象  如果ref在元素上使用，则获取到的是元素 -->
      <!-- 轮播图区域 -->
      <swiper :lunbotu="banners"></swiper>
      <!-- 推荐区域 -->
      <recommend-comp :recommends="recommends"></recommend-comp>
      <!-- 特色区域 -->
      <feature></feature>
      <!-- 卡片试图区域 -->
      <tab-control :titles="['流行','新款','精选']" @changeType="handleType($event)"></tab-control>
      <goods-list :goods="goods[currentType].list"></goods-list>
    </scroll>
    <back-top @click.native="backTop" v-show="isShow"></back-top>
  </div>
</template>

<script>
import swiper from "components/content/swiper/Swiper";
import NavBar from "components/common/navbar/NavBar";
import RecommendComp from "./childComps/RecommendComp.vue";
import feature from "./childComps/FeatureView.vue";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll/";
import BackTop from "components/content/backTop/BackTop";

import { getHomeMultidata, getHomeGoods } from "network/home.js";

export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      isShow: false
    };
  },
  components: {
    NavBar,
    swiper,
    RecommendComp,
    feature,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  created() {
    //1.请求多个数据
    this.getHomeMultidata();
    //2.请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
    this.$bus.$on("imgLoad", () => {
      this.$refs.scroll.refresh();
    });
  },
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        let { banner, recommend } = res.data;
        this.banners = banner.list;
        this.recommends = recommend.list;
        console.log(this.banners, this.recommends);
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;

        this.$refs.scroll.finishPullUp();
      });
    },
    handleType(e) {
      switch (e) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
    backTop() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    contentScroll(value) {
      this.isShow = -value.y > 700;
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
    }
  }
};
</script>

<style scoped>
#home {
  height: 100vh;
  position: relative;
}
.nav_bar {
  background-color: pink;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 100;
}
.wrapper {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.mint-swipe {
  margin-top: 44px;
}
</style>>
