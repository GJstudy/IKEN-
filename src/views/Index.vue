<template>
  <div class="index">
    <!-- 轮播图 -->
    <swiper
      class="swiper"
      ref="swiper"
      :options="swiperOption"
      @mouseover.native="stopSwiper"
      @mouseout.native="startSwiper"
    >
      <swiper-slide>
        <img src="../assets/img/lunbo1.jpg" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/img/lunbo2.jpg" alt="" />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/img/lunbo3.jpg" alt="" />
      </swiper-slide>
      <!-- 上一页，下一页 -->
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>

    <!-- 近期推荐 -->
    <div class="tuijian">
      <h2>近期推荐</h2>
      <div class="tuijian_content">
        <recent-recommend v-for="x in data.data" :key="x.rid" :item="x" />
      </div>
    </div>

    <!-- 家装示例 -->
    <div class="shili">
      <h2 id="home">家装示例</h2>
      <div class="shili_content">
        <home-example v-for="x in data2.data" :key="x.rid" :item="x" />
      </div>
    </div>
  </div>
</template>

<script>
import RecentRecommend from "@/components/RecentRecommend.vue";
import HomeExample from '@/components/HomeExample.vue';
export default {
  components: { RecentRecommend, HomeExample },
  data() {
    return {
      data: {},
      data2:{},
      swiperOption: {
        spaceBetween: 30,
        effect: "fade",
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        // 上一页下一页箭头
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
    };
  },
  mounted() {
    this.getData();
    this.getExample();
  },
  methods: {
    stopSwiper() {
      this.$refs.swiper.$swiper.autoplay.stop();
    },
    startSwiper() {
      this.$refs.swiper.$swiper.autoplay.start();
    },
    getData() {
      var url = `/v1/product/recommend`;
      this.axios.get(url).then((res) => {
        console.log('近期推荐',res);
        this.data = res.data;
      });
    },
    getExample() {
      var url = `/v1/product/home`;
      this.axios.get(url).then((res) => {
        console.log('example',res);
        this.data2 = res.data;
      });
    },
  },
};
</script>

<style scoped src="../assets/css/index.css"></style>
