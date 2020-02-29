<template>
  <div class="header">
    <a href="#" class="right">
      <i class="iconfont icon-fanhui"></i>
    </a>
    <div class="today">
      <img src="../../assets/img/list1.png" alt="">
      <i class="iconfont icon-dingwei"></i>
      <span>北京</span>
    </div>
    <div class="header-shopcar">
      <i class="iconfont icon-gouwuche"></i>
      <span>{{shopcar}}</span>
      <i class="iconfont icon-diandiandianshu"></i>
    </div>
  </div>
</template>

<script>
  import store from '../../store/index'
  import {mapState} from 'vuex'
  export default {
    name: "Headerlist",
    computed:{
      ...mapState(['shopcar'])
    },
    //挂载store
    store
  }
</script>

<style scoped>
  .header {
    width: 100%;
    height: .6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header .right{
    display: flex;
    margin-left: .25rem;
  }
  .header .right i{
    font-size: .5rem;
  }
  .header .today{
    display: flex;
    align-items: center;
  }
  .header .today img{
    width: 1.08rem;
    height: .29rem;
    margin-right: .17rem;
  }
  .header .today i{
    font-size: .16rem;
  }
  .header .today span{
    font-size: .12rem;
  }
  .header-shopcar{
    display: flex;
    margin-right: .25rem;
  }
  .header-shopcar i{
    font-size: .45rem;
  }
  .header-shopcar span{
    font-size: .07rem;
    display: inline-block;
    width:.3rem;
    height:.25rem;
    background: #ff8500;
    color: white;
    border-radius: 25px;
    text-align: center;
    line-height: .25rem;
  }
</style>
