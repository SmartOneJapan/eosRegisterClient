import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import CreateAccountName from '@/page/CreateAccountName'
import CreatePublicKey from '@/page/CreatePublicKey'
import Payment from '@/page/Payment'
import Finish from '@/page/Finish'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'CreateAccountName',
      component: CreateAccountName
    },
    {
      path: '/CreatePublicKey',
      name: 'CreatePublicKey',
      component: CreatePublicKey
    },
    {
      path: '/Payment',
      name: 'Payment',
      component: Payment
    },
    {
      path: '/Finish',
      name: 'Finish',
      component: Finish
    }
  ]
})
