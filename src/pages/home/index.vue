<template>
  <div class="homeBox">
    <!-- 头部 -->
    <SearchLink />
    <!-- 轮播图 -->
    <swiper indicator-dots autoplay=true indicator-active-color="#ffffff" indicatorColor="rgba(255,255,255,.3)" circular>
        <block v-for="(item,index) in swiperdata" :key="index">
            <swiper-item>
                <image :src="item.image_src"></image>
            </swiper-item>
        </block>
    </swiper>
    <!-- 导航 -->
    <div class="nav">
      <img v-for="(item,index) in catitems" :key="index" :src="item.image_src" :alt="item.name">
    </div>
    <!-- 楼层 -->
  <ul>
    <li  class="floor" v-for="(floor,i) in floordata" :key="i">
      <div class="floor_img"><img :src="floor.floor_title.image_src" :alt="floor.floor_title.name"></div>
       <div class="product_list">
        <img :src="floor.product_list[0].image_src" alt="">
        <div class="right">
         <block
           v-for="(item,index) in floor.product_list"
             :key="index">
            <img v-if="index" 
            :src="item.image_src"
            :alt="item.name">
         </block>
        </div>
       </div>
    </li>
  </ul>
  </div>
</template>

<script>
import SearchLink from '../../components/SearchLink'
export default {
  components: {
    SearchLink
  },
  data() {
    return {
      swiperdata:[],
      catitems:[],
      floordata:[],
    }
  },
  onLoad(){
    this.getSwiperdata()
    this.getCatitems()
    this.getFloordata()
  },
  methods: {
    async getSwiperdata(){
     this.swiperdata = await this.$request({
        url: '/api/public/v1/home/swiperdata',
      })
    },
    async getCatitems(){
      this.catitems = await this.$request({
        url: '/api/public/v1/home/catitems',
      })
    },
    async getFloordata(){
      this.floordata = await this.$request({
        url: '/api/public/v1/home/floordata',
      })
    }
  },
}
</script>

<style lang="less">

// 轮播图
swiper {
  height: 340rpx;
  image {
    width: 100%;
    height: 340rpx;
  }
}
// 导航
.nav {
  height: 194rpx;
  display: flex;
  justify-content: space-around;
  align-items: center;
  img {
    height: 140rpx;
    width: 128rpx;
  }
}
// 楼层
.floor {
  .floor_img{
    width: 100%;
    height: 88rpx;
    background-color: rgb(244, 244, 244);
    padding: 20rpx 8rpx 0rpx;
    box-sizing: border-box;
    overflow: hidden;
     >img {
       width: 100%;
       height: 68rpx;
  }
  }
 
}
.product_list {
   padding:20rpx 17rpx 10rpx;
  display:flex;
  >img {
    width: 232rpx;
    height: 386rpx;
  }
}
.right {
  flex:1;
  font-size: 0;
  >img {
    margin: 0 0 10rpx 10rpx;
    width: 232rpx;
    height: 188rpx;
  }
}
</style>
