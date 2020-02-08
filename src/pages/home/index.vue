<template>
  <div class="homeBox">
    <!-- 头部 -->
    <div class="header">
      <div class="inner">
        <icon
          type="search"
          size="14">
        </icon>
        <span>搜索</span>
      </div>
    </div>
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
      <img v-for="(item,index) in catitems" :key="index" :src="item.image_src">
    </div>
    <!-- 楼层 -->
  <ul>
    <li  class="floor" v-for="(floor,i) in floordata" :key="i">
      <div class="floor_img"><img :src="floor.floor_title.image_src" alt=""></div>
       <div class="product_list">
        <img :src="floor.product_list[0].image_src" alt="">
        <div class="right">
         <block
           v-for="(item,index) in floor.product_list"
             :key="index">
            <img v-if="index > 0" 
            :src="item.image_src"
            alt="">
         </block>
        </div>
       </div>
    </li>
  </ul>
  </div>
</template>

<script>
export default {
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
  // 头部
  .header {
background-color: #ee4450;
height: 100rpx;
padding: 20rpx 16rpx;
box-sizing: border-box;
.inner {
  height: 60rpx;
  background-color: #fff;
  border-radius: 5rpx;
  color: #bbbbbb;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  display: flex;
  icon {
    margin:5rpx 16rpx 0 0;
  }
}
}
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
