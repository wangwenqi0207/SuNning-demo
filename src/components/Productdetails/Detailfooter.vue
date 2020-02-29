<template>
    <div class="Detailfooter">
      <a href="#">
        <i class="iconfont icon-kefu"></i>
        <span>客服</span>
      </a>
      <a href="#">
        <i class="iconfont icon-dianpu"></i>
        <span>店铺</span>
      </a>
      <a href="#">
        <i class="iconfont icon-goumaiyemiande-xiaogouwuche"></i>
        <span>购物车</span>
        <em class="number">{{shopcar}}</em>
      </a>
      <button @click="btn">加入购物车</button>
    </div>
</template>

<script>
  import store from '../../store/index'
  import {mapState,mapMutations} from 'vuex'
    export default {
        name: "Detailfooter",
      computed:{
        ...mapState(['shopcar'])
      },
      methods:{
        ...mapMutations(['btn']),
      },
      store
    }
</script>

<style scoped>
  .Detailfooter{
    width:100%;
    height:.75rem;
    background: white;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
  }
  .Detailfooter a{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #666;
    margin-left: .3rem;
    position: relative;
  }
  .Detailfooter a .number{
    font-size: .09rem;
    font-style: normal;
    color:#ff6100;
    border-radius: 50%;
    position: absolute;
    right: 0;
    top:0;
  }
  .Detailfooter a span{
    font-size: .09rem;
  }
  .Detailfooter button{
    width: 3.2rem;
    height: .48rem;
    text-align: center;
    font-size: .12rem;
    border: 0;
    background: #ff6100;
    color: white;
    margin-left: .3rem;
    border-radius: 7px;
  }
</style>
