<template>
  <div class="header">
      <div class="inner">
        <icon
          type="search"
          size="14">
        </icon>
        <span>搜索</span>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
  // 头部
  .header {
  background-color: #eb4450;
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
</style>