import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[
      {
        path: 'homepage',//首页
        name: 'Homepage',
        component: function () {
          return import('../views/homepage/index.vue')
        },
        children:[
          {
            path: 'album',//相册
            name: 'Album',
            component: function () {
              return import('../views/homepage/Album.vue')
            }
          },
          {
            path: 'backstage',//后台首页
            name: 'Backstage',
            component: function () {
              return import('../views/homepage/Backstage.vue')
            }
          }
        ]
      },
      {
        path: 'order',//订单
        name: 'Order',
        component: function () {
          return import('../views/order/index.vue')
        },
        children:[
          {
            path: 'administration',//订单管理
            name: 'Administration',
            component: function () {
              return import('../views/order/Administration.vue')
            }
          },
          {
            path: 'invoice',//发票管理
            name: 'Invoice',
            component: function () {
              return import('../views/order/Invoice.vue')
            }
          }
        ]
      },
      {
        path: 'setup',//设置
        name: 'Setup',
        component: function () {
          return import('../views/setup/index.vue')
        },
        children:[
          {
            path: 'basics',//基础设置
            name: 'Basics',
            component: function () {
              return import('../views/setup/Basics.vue')
            }
          },
          {
            path: 'logistics',//发票管理
            name: 'Logistics',
            component: function () {
              return import('../views/setup/Logistics.vue')
            }
          }
        ]
      },
      {
        path: 'shop',//商品
        name: 'Shop',
        component: function () {
          return import('../views/shop/index.vue')
        },
        children:[
          {
            path: 'classification',//分类列表
            name: 'Classification',
            component: function () {
              return import('../views/shop/Classification.vue')
            }
          },
          {
            path: 'shoplist',//商品列表
            name: 'Shoplist',
            component: function () {
              return import('../views/shop/Shoplist.vue')
            }
          }
        ]
      },
      {
        path: 'vip',//会员
        name: 'Vip',
        component: function () {
          return import('../views/vip/index.vue')
        },
        children:[
          {
            path: 'grade',//会员等级
            name: 'Grade',
            component: function () {
              return import('../views/vip/Grade.vue')
            }
          },
          {
            path: 'viplist',//会员列表
            name: 'Viplist',
            component: function () {
              return import('../views/vip/Viplist.vue')
            }
          }
        ]
      }
    ]
  },
  {
    path: '/login',//登录
    name: 'Login',
    component: function () {
      return import('../views/Login.vue')
    }
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (localStorage.getItem("token")) {
    next();
  } else {
    if (to.path == "/login") {
      next();
    } else {
      next("/login");
    }
  }
});

export default router
