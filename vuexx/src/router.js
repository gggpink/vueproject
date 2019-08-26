import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import("./views/Home/Home")
const me = () => import("./views/Me/me")
const shopping = () => import("./views/ShoppingCart/shopping")
const DetailsPage = () => import("./views/DetailsPage/DetailsPage")


Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: "/",
      redirect: "/Home",
    },
    {
      path: "/Home",
      component: Home,
      meta:{
        title:"xx首页"
      }
    },
    {
      path: "/me",
      component: me,
      meta:{
        title:"xx我的"
      }
    },
    {
      path: "/shopping",
      component: shopping,
      meta:{
        title:"xx购物车"
      }
    },
    {
      path: "/DetailsPage",
      component: DetailsPage,
      meta:{
        title:"xx详情页"
      }
    }

  ]
})
router.beforeEach(function (to, from, next){
  // to and from are both route objects. must call `next`.
  document.title = to.meta.title;
  next();
})
export default router


