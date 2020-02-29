<template>
    <div class="Good-product">
      <div class="product-one">
        <h3>好货必buy</h3>
        <div class="buy-product">
          <a href="#" class="product-list-one">
            <img src="../../assets/img/list-eat1.jpg" alt="">
          </a>
          <div class="Product-info">
            <h4>良品铺子纯坚果礼盒</h4>
            <p>领卷立减20元</p>
            <p>高端年货</p>
            <div class="Product-info-price">
              <div class="price">
                <p>￥148</p>
                <p>￥158</p>
              </div>
              <i class="iconfont icon-goumaiyemiande-xiaogouwuche" @click="btn"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import store from '../../store/index'
  import {mapMutations} from 'vuex'
    export default {
        name: "Goodproduct",
      data(){
          return{

          }
      },
      methods:{
        ...mapMutations(['btn']),
      },
      store
    }
</script>

<style scoped>
.Good-product{
  width: 100%;
  height:3.17rem;
  background: url("../../assets/img/bg.jpeg");
  background-size: cover;
  filter:Alpha(opacity=70);
  display: flex;
  justify-content: center;
  align-items: center;
}
  .product-one{
    width: 95%;
    height: 2.78rem;
    background: white;
    border-radius:7px;
  }
  .product-one h3{
    font-size: .16rem;
    margin-top: .15rem;
    margin-left: .15rem;
  }
  .buy-product{
    display: flex;
  }
  .product-list-one img{
      width: 2.26rem;
      height: 2.26rem;
  }
  .Product-info h4{
    font-size: .14rem;
  }
.Product-info p{
  font-size: .12rem;
  color: #656565;
}
.Product-info-price{
  width: 4.03rem;
  display: flex;
  justify-content: space-between;
  margin-top: .1rem;
}
.Product-info-price .price{
  display: flex;
}
.Product-info-price .price p:first-child{
  font-size: .12rem;
  color: #ff5d02;
}
.Product-info-price .price p:last-child{
  font-size: .09rem;
  text-decoration: line-through;
}
.Product-info-price i{
    color: #ff5d02;
    font-weight: bold;
}

</style>
