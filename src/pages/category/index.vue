<template>
  <div class="categoryBox">
    <!-- 搜索框 -->
    <SearchLink />
    <!-- 商品分类 -->
    <div class="content">
      <ul class="left">
        <li :class="{active:activeIndex===index}" @click="activeIndex=index" v-for="(item,index) in 20" :key="index">大家电</li>
      </ul>
      <ul class="right">
        <li>华为</li>
      </ul>
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
.content {
  display: flex;
  position: absolute;
  top: 100rpx;
  bottom: 0;
  // left: 0;
  // right: 0;
  width: 100%;
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
  .right {
    flex: 1;
  }
}

</style>