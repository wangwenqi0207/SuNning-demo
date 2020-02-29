import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/ProductList/Index'
import Indexhome from '@/components/Home/Indexhome'
import Stars from '@/components/Star/Stars'
import productdetails from '@/components/Productdetails/productdetails'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Indexhome',
      name: 'Indexhome',
      component: Indexhome
    },
    {
      path: '/Stars',
      name: 'Stars',
      component: Stars
    },
    {
      path: '/productdetails/:id',
      name: 'productdetails',
      component: productdetails
    },
  ]
})
