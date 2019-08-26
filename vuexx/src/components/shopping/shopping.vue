<template>

  <div class="hello">

    <ul class="shop_container">

      <li v-for="item in $store.state.goods" :key="item.id" class="shop_container_li">

        <div class="shop_img">

          <img :src="item.img" alt="" width="100px" height="100px" />

        </div>

        <div class="shop_detail">

          <p>{{item.name}}</p>

          <p>{{item.hint}}</p>

          <p>￥{{item.price}}</p>

          <p>

            <span class="shop_reduce" @click="reduce_num(item.id)">-</span>

            <span class="shop_num">{{item.num}}</span>

            <span class="shop_add" @click="add_num(item.id)">+</span>

          </p>

        </div>

      </li>

    </ul>

    <div class="foot">

      <div class="total_price">

        <span>合计：￥{{totalPrice}}</span>

      </div>

      <div class="total_num" :class="{payment: totalNum}">

        <span>去结账：({{totalNum}})</span>

      </div>

    </div>

  </div>

</template>

<script>

import {mapState, mapMutations, mapGetters} from 'vuex'

export default {

  name: 'hello',

  data () {

    return {

    }

  },

  created () {

    // console.log(this.goods)

    // console.log(this.goods_obj)

    // console.log(this.goods_length)

    // console.log(this.$store.state.shop)  // 模块化 Vuex允许我们将 store 分割成模块（module）每个模块拥有自己的 state、mutation、action、getter、

  },

  computed: {

    ...mapState([

    // 获取state中的数据可以通过mapState辅助函数获取，也可以直接获取 例：this.$store.state.goods

      'goods', 'totalPrice', 'totalNum'

    ]),

    ...mapGetters([

      'goods_obj', 'goods_length'

    ])

  },

  methods: {

    ...mapMutations([

    // 获取mutation中的方法可以通过mapMutations 辅助函数获取，也可以直接获取。

      'ADD_CART'

      // 'REDUCE_CART'

    ]),

    reduce_num (id) {

      // this.REDUCE_CART(id)

      this.$store.commit('REDUCE_CART', id) //也可以直接获取

    },

    add_num (id) {

      this.ADD_CART(id) //通过mapMutations 辅助函数获取

    }

  }

}

</script>
<style>
  .shop_container_li{
    height: 120px;
    display: flex;
    border: 1px solid #eaeaea;
    margin: 20px 0px;
    /* width: 500px; */
    padding: 10px 5px;

  }
  .shop_detail{
    margin-left: 20px;
    width: 220px;
  }
  .shop_detail p:first-child{
    color: #666;
    font-size: 16px;
  }
  .shop_detail p:nth-child(2){
    color: #999;
    font-size: 12px;
  }
  .shop_detail p:nth-child(3){
    margin-top: 10px;
    color: #FE4070;
    font-size: 20px;
  }
  .shop_detail p:nth-child(4){
    float: right;
    margin-bottom: 12px;
  }
  .shop_reduce,.shop_add{
    display: inline-block;
    width: 16px;
    text-align: center;
    background: #f5f5f5;
    border: 1px solid #999;
  }
  .shop_num{
    display: inline-block;
    width: 32px;
    text-align: center;
    border-top: 1px solid #999;
    border-bottom: 1px solid #999;

  }
  .foot{
    display: flex;
    justify-content: space-around;
    height: 49px;
    line-height: 49px;
    /* border: 1px solid #999; */
    text-align: center;
    position: fixed;
    left: 0px;
    right: 0px;
    bottom: 49px;
  }
  .total_price{
    flex: 1;
  }
  .total_num{
    flex: 1;
    background: #FE4070;
    color: #fff;
  }
</style>