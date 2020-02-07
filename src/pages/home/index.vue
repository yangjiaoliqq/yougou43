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
    <swiper indicator-dots circular>
        <block v-for="(item,index) in 3" :key="index">
            <swiper-item>
                <image src="https://api.zbztb.cn/pyg/banner1.png"></image>
            </swiper-item>
        </block>
    </swiper>
    <!-- 导航 -->
    <div class="nav">
      <img src="https://api.zbztb.cn/pyg/icon_index_nav_4@2x.png" alt="">
      <img src="https://api.zbztb.cn/pyg/icon_index_nav_3@2x.png" alt="">
      <img src="https://api.zbztb.cn/pyg/icon_index_nav_2@2x.png" alt="">
      <img src="https://api.zbztb.cn/pyg/icon_index_nav_1@2x.png" alt="">
    </div>
    <!-- 楼层 -->

  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.homeBox {
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
  font-size: 16px;
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
}

</style>