<template>
    <div class="Details-header">
      <router-link to="/" tag="a" class="Details-header-icon-left">
      <i class="iconfont icon-fanhui"></i>
      </router-link>
    <div class="Details-header-icon-right">
      <i class="iconfont icon-iconfontzhizuobiaozhun20"></i>
      <i class="iconfont icon-diandiandianshu"></i>
    </div>
    </div>
</template>

<script>
    export default {
        name: "Detailsheader"
    }
</script>

<style scoped>
.Details-header{
  width: 100%;
  height: .66rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top:0;
  left:0;
  z-index: 99;
}
.Details-header-icon-left{
  display: flex;
  margin-left: .15rem;
}
.iconfont{
  width: .45rem;
  height: .45rem;
  border-radius: 50%;
  background: #7f7f7f;
  filter:Alpha(opacity=70);
  color: white;
  text-align: center;
  line-height: .45rem;
}
  .Details-header-icon-right{
    display: flex;
    margin-right: .15rem;
  }
.Details-header-icon-right i:first-child{
  margin-right: .15rem;
}
</style>
