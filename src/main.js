import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/font/iconfont.css'
import './rem'
import axios from 'axios'
Vue.prototype.$http=axios
import './api/mock.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
