import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "../node_modules/mint-ui/lib/style.min.css"
import { Swipe, SwipeItem } from 'mint-ui';
import { Navbar, TabItem } from 'mint-ui';  //导航栏
import { TabContainer, TabContainerItem } from 'mint-ui';//Item
import { Cell } from 'mint-ui';
import { Search } from 'mint-ui';

Vue.component(Search.name, Search);

Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Cell.name, Cell);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
