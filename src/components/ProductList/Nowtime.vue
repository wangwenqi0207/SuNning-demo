<template>
    <div class="now-time" ref="time">
      <div class="timebox" ref="touch">
      <a href="#" v-for="(item,index) in nowTime" v-on:click="addClass(index)"
         v-bind:class="{ bgColors:index==current}">
        <p>{{item.time}}</p>
        <p>{{item.start}}</p>
      </a>
      </div>
    </div>


</template>

<script>
    export default {
        name: "Nowtime",
      methods: {
        addClass:function(index){
          this.current=index;
        }
      },
      mounted() {

      },
      data(){
        return{
          current:0,
          nowTime:[
            {
              time:"9:00",
              start:"已开抢"
            },
            {
              time:"10:00",
              start:"已开抢"
            },
            {
              time:"11:00",
              start:"已开抢"
            },
            {
              time:"12:00",
              start:"已开抢"
            },
            {
              time:"13:00",
              start:"未开抢"
            },
            {
              time:"14:00",
              start:"未开抢"
            },
            {
              time:"15:00",
              start:"未开抢"
            },
          ],
        }
      }
    }
</script>

<style scoped>
.now-time{
  width: 100%;
  height: .8rem;
  background: #282832;
  display: flex;
  overflow-x:scroll;
}
.timebox{
  width: 100%;
  height: .8rem;
  display: flex;
  background: #282832;
}
  .now-time a{
    display: flex;
    flex-direction: column;
    width: 1.35rem;
    height: .79rem;
    align-items: center;
    flex-shrink: 0;
  }
.now-time a p:first-child{
  font-size: .23rem;
  color: white;
  font-weight: bold;
}
.now-time a p:last-child{
  font-size: .16rem;
  color: white;
}
.timebox .bgColors{
  background: #ff5700;
}
</style>
