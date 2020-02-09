<template>
  <div class="categoryBox">
    <!-- 搜索框 -->
    <SearchLink />
    <!-- 内容区域 -->
    <div class="content" v-if="categories.length">
      <!-- 左侧一级菜单 -->
      <ul class="left">
        <li :class="{active:activeIndex===index}" @click="activeIndex=index" v-for="cate1 in categories" :key="cate1.cat_id">{{ cate1.cat_name }}</li>
      </ul>
      <!-- 右侧内容 -->
      <div class="right">
        <img src="/static/images/titleImage.png" alt="">
        <!-- 二级菜单 -->
        <ul>
          <li class="cate2" v-for="cate2 in categories[activeIndex].children" :key="cate2.cat_id">
            <p class="title">/<span>{{ cate2.cat_name }}</span>/</p>
              <!-- 三级菜单 -->
              <ul>
                <li class="cate3" v-for="(cate3,index3) in cate2.children" :key="index3">
                  <img :src="cate3.cat_icon" alt="">
                  <p>{{ cate3.cat_name }}</p>
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
      activeIndex:0,//左侧菜单下标
      categories:[],//左侧一级菜单列表
    }
  },
  onLoad(){
    this.getCategories()
  },
  methods: {
    async getCategories(){
      this.categories = await this.$request({
        url:'/api/public/v1/categories'
      })
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
      margin-bottom: 40rpx;
      font-size: 28rpx;
      img {
      width: 120rpx;
      height: 120rpx;
     }
    }
  }
</style>