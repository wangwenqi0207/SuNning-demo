<template>
    <div class="Router-view">
      <router-link :to="{path:i.tag}" active-class="active" v-for="(i,index) in routerview" :key="index"
      tag="a">
        <i :class="i.icon"></i>
        <span>{{i.routers}}</span>
      </router-link>
    </div>
</template>

<script>
    export default {
        name: "Routerview",
        data(){
          return{
            routerview:[
              {
                icon:"iconfont icon-shouye",
                routers:"首页",
                tag:"/Indexhome"
              },
              {
                icon:"iconfont icon-xingxing",
                routers:"星星有礼",
                tag:"Stars"
              },
              {
                icon:"iconfont icon-xianshiqianggou",
                routers:"今日必抢",
                tag:"/"
              },
              {
                icon:"iconfont icon-leimupinleifenleileibie",
                routers:"分类搜索",
                tag:"/search"
              },
              {
                icon:"iconfont icon-icon",
                routers:"拔草",
                tag:"/grass"
              },
            ]
          }
      },
      methods: {

      },
    }
</script>

<style scoped>
.Router-view{
  width: 100%;
  height: .7rem;
  background: white;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: space-around;
}
.Router-view a{
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #686868;
}
.Router-view a i{
  font-size: .3rem;
}
.Router-view a span{
  font-size: .09rem;
}
.Router-view .active{
    color: red;
  }

</style>
