import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../views/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/searchpro',
    name: 'searchpro',
    component: () => import('../views/Searchpro.vue'),
    meta:{
      title:'IKEN搜索结果'
    }
  },
  {
    path: '/products',
    name: 'products',
    component: () => import('../views/Products.vue'),
    meta:{
      title:'IKEN商品'
    }
  },
  {
    path: '/car',
    name: 'car',
    component: () => import('../views/Car.vue'),
    meta:{
      title:'IKEN购物车'
    }
  },
  {
    path: '/collect',
    name: 'collect',
    component: () => import('../views/Collect.vue'),
    meta:{
      title:'IKEN收藏夹'
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue'),
    meta:{
      hideHeader:true,
      hideFooter:true,
      title:'注册'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
    meta:{
      hideHeader:true,
      hideFooter:true,
      title:'登录'
    }
  },
  {
    path: '/',
    name: 'index',
    component: Index,
    meta:{
      title:'IKEN首页'
    }
  },
  {
    path: '/show',
    name: 'show',
    component: () => import('../views/Show.vue'),
    meta:{
      title:'IKEN系列商品展'
    }
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 路由守卫：凡是路由发生变化都会触发这个方法
// beforeEach:路由前置守卫，路由发生变化前触发
router.beforeEach((to,from,next)=>{
  // console.log('到哪去to：',to);
  // console.log('当前from：',from);
  // 修改标题
  document.title=to.meta.title
  next()  //放行：允许路由跳转，类似express的拦截器中间件
})

export default router
