<template>
  <div class="categoryBox">
    <!-- 搜索框 -->
    <SearchLink />
    <!-- 内容区域 -->
    <div class="content">
      <!-- 左侧一级菜单 -->
      <ul class="left">
        <li :class="{active:activeIndex===index}" @click="activeIndex=index" v-for="(item,index) in 20" :key="index">大家电</li>
      </ul>
      <!-- 右侧内容 -->
      <div class="right">
        <img src="/static/images/titleImage.png" alt="">
        <!-- 二级菜单 -->
        <ul>
          <li class="cate2" v-for="(cate2,index2) in 4" :key="index2">
            <p class="title">/<span>电视</span>/</p>
              <!-- 三级菜单 -->
              <ul>
                <li class="cate3" v-for="(cate3,index3) in 9" :key="index3">
                  <img src="https://api.zbztb.cn/full/2fb113b32f7a2b161f5ee4096c319afedc3fd5a1.jpg" alt="">
                  <p>曲面电视</p>
                </li>
              </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// 导入搜索组件
import SearchLink from '../../components/SearchLink'
export default {
  components:{
    SearchLink
  },
  data() {
    return {
      activeIndex:0
    }
  },
}
</script>

<style lang="less">
// 内容区域
.content {
  display: flex;
  position: absolute;
  top: 100rpx;
  bottom: 0;
  // left: 0;
  // right: 0;
  width: 100%;
  // 左侧菜单
  .left {
    width: 198rpx;
    overflow: scroll;
    li {
      height: 100rpx;
      background-color: #f4f4f4;
      border-bottom: 1rpx solid #eeeeee;
      box-sizing: border-box;
      line-height: 100rpx;
      text-align: center;
      &.active {
        color: #eb4450;
        background-color: #fff;
        font-weight: 700;
        position: relative;
        &::before {
          position: absolute;
          content: '';
          width: 8rpx;
          height: 60rpx;
          background-color: #eb4450;
          top:20rpx;
          left: 0;
        }
      }
    }
  }
  // 右侧内容
  .right {
    flex: 1;
    padding: 20rpx 16rpx 0;
    overflow: scroll;
    img {
      width: 520rpx;
      height: 180rpx;
    }
      .cate2 {
       .title {
        color: #e0e0e0;
        height: 110rpx;
        line-height: 110rpx;
        text-align: center;
        span {
          color: #333;
          margin: 0 30rpx;
        }
      }
     ul {
      display: flex;
      flex-wrap: wrap;
     }
    }
    // 三级菜单
   .cate3 {
      width: 33.33%;
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
      width: 120rpx;
      height: 120rpx;
     }
    }
  }
}

</style>