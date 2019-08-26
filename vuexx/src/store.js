import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './store/mutations'

import actions from './store/actions'

import getters from './store/getters'

import shop from './store/modules/shop'


Vue.use(Vuex)

const state = {

  goods: [

    {

      id: '0',

      name: 'vivo-X20Plus屏幕指纹版',

      hint: '逆光也清晰，照亮你的美',

      price: 3596.00,

      num: 0,

      img: require('./assets/imgs/shop_1.jpg')

    },

    {

      id: '1',

      name: '华为mate10Plus',

      hint: '真正的人工智能芯片',

      price: 4999.00,

      num: 0,

      img: require('./assets/imgs/shop_1.jpg')

    },

    {

      id: '2',

      name: '华为mate10Plus',

      hint: '真正的人工智能芯片',

      price: 4999.00,

      num: 0,

      img: require('./assets/imgs/shop_1.jpg')

    }

  ],

  totalPrice: 0.00,

  totalNum: 0

}


export default new Vuex.Store({
  state ,
  mutations ,
  actions,
  getters,
  modules:{
    shop 

  }
})
