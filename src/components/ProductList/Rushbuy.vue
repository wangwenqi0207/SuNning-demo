<template>
    <div>
      <router-link class="Rush-buy" v-for="(items,index) in arr" :key="index" tag="div"
          :to="{path:'/productdetails/'+items.tag}">
      <a href="#" class="Rush-buy-img">
        <img :src="items.img" alt="">
      </a>
      <div class="list-info">
          <p>{{items.title}}</p>
          <p class="sale">{{items.sale}}</p>
        <div class="list-info-price">
          <div class="price">
            <p>￥10</p>
            <p>￥7.7</p>
          </div>
          <i class="iconfont icon-goumaiyemiande-xiaogouwuche" @click="btn"></i>
        </div>
      </div>
      </router-link>
    </div>
</template>

<script>
  import store from '../../store/index'
  import {mapMutations} from 'vuex'
    export default {
        name: "Rushbuy",
      data(){
        return {
          arr:[]
        }
      },
      mounted(){
        // let id = this.$route.params.id;
        this.$http({
          method:"get",
          url:'/productlist',
        }).then(res=>{
          this.arr = res.data.listinfo;
        })
      },
      methods:{
        ...mapMutations(['btn']),
      },
      //挂载store
      store
    }
</script>

<style scoped>
.Rush-buy{
  width: 100%;
  height:2.11rem;
  background: white;
  display: flex;
  margin-bottom: .7rem;
}
.Rush-buy-img{
  width:2rem;
  height: 2rem;
  background: #f7f7f7;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: .1rem;
  border-radius: 5px;
}
.Rush-buy-img img{
    width:1.8rem;
    height: 1.8rem;
}
.list-info{
  margin-top: .1rem;
  margin-left: .14rem;
}
.list-info p:first-child{
  font-size: .16rem;
}
.list-info .sale{
  font-size: .12rem;
  margin-top: .15rem;
  color: #9a9a9a;
}
  .list-info-price{
    width: 4.2rem;
    display: flex;
    justify-content: space-between;
    margin-top: .15rem;
  }
.list-info-price .price{
  display: flex;
}
.list-info-price .price p:first-child{
  font-size: .12rem;
  color: #ff5d02;
}
.list-info-price .price p:last-child{
  font-size: .09rem;
  text-decoration: line-through;
  margin-left: .09rem;
}
.list-info-price i{
  color: #ff5d02;
  font-weight: bold;
}
</style>
