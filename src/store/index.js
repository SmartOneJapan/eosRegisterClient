import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters' 

Vue.use(Vuex)

const state = {
  accountName: '',
  email: '',
  ownerPublicKey:'',
  ownerPrivateKey:'',
  activePublicKey:'',
  activePrivateKey:'',
  paymentType:'0'
}
const store = new Vuex.Store({
  state,
  getters
})

export default store