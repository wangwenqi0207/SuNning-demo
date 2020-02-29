import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

//定义仓库数据
const state = {
  shopcar:0,
}

//判断
const getters = {
  run(state){

  },
}
//定义仓库方法
const mutations = {
  btn(){
    state.shopcar+=1;
  }
}

//固定格式，需要导出的公共数据
export default new Vuex.Store({
  state,getters,mutations
})
