<template>
  <div class="Product-details" >
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(item,index) in arrs2" :key="index">
        <img :src="item"/>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        name: "Swiperdetails",
      data() {
        return {
          swiperOption: {
            autoplay: {
              autoplay: 1500,
              disableOnInteraction: false,//放置触摸后自动轮播停止
            },
            pagination: {
              el: '.swiper-pagination',
              type: 'fraction'
            },
            loop:true,
          },
          arrs2:[],
        }
      },
      mounted(){
        let id = this.$route.params.id;
        this.$http({
          method:"get",
          url:'/productdetails',
        }).then(res=>{
          this.arrs2 = res.data[id]
        })
      }
    }
</script>

<style scoped>
  .Product-details{
    width:100%;
    height: 5.66rem;
  }
  .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets{
    font-size: .12rem;
    left:80%;
    bottom: 10%;
    width: .65rem;
    height: .31rem;
    background: #7f7f7f;
    filter:Alpha(opacity=70);
    color: white;
    line-height: .31rem;
    border-radius: 25px;
  }
  .swiper-slide img{
    width: 100%;
    height: 5.66rem;
  }
</style>
