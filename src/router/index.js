import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '概况', icon: 'dashboard' }
    }]
  },

  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'example',
    meta: { title: '店铺', icon: 'store' },
    children: [
      {
        path: 'table',
        name: '表格',
        component: () => import('@/views/table/index'),
        meta: { title: '表格' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: '树菜单', roles: ['editor'] }
      }
    ]
  },
  {
    path: '/shopping',
    component: Layout,
    redirect: '/shopping/shopping-list',
    name: 'Shopping',
    meta: { title: '商品', icon: 'shopping-bag' },
    children: [
      {
        path: 'shopping-list',
        name: 'shopping-list',
        component: () => import('@/views/shopping/shopping-list/index'),
        meta: { title: '商品列表' }
      },
      {
        path: '/shopping-list/add',
        name: 'add',
        component: () => import('@/views/shopping/shopping-list/add/index'),
        meta: { title: '添加' },
        hidden: true
      },
      {
        path: 'group',
        name: 'group',
        component: () => import('@/views/shopping/group/index'),
        meta: { title: '商品分组' }
      },
      {
        path: 'tags',
        name: 'tags',
        component: () => import('@/views/shopping/tags/index'),
        meta: { title: '商品标签' }
      },
      {
        path: 'comment',
        name: 'comment',
        component: () => import('@/views/shopping/comment/index'),
        meta: { title: '商品评论' }
      },
      {
        path: '/comment/detail/:id(\\d+)',
        name: 'detail',
        component: () => import('@/views/shopping/comment/detail/index'),
        meta: { title: '详情' },
        hidden: true
      },
      {
        path: '/comment/creat-comment/:id(\\d+)',
        name: 'creat-comment',
        component: () => import('@/views/shopping/comment/creat-comment/index'),
        meta: { title: '创建评论' },
        hidden: true
      }
    ]
  },

  {
    path: '/order',
    component: Layout,
    meta: { title: '订单', icon: 'form' },
    children: [
      {
        path: 'all-order',
        name: 'all-order',
        component: () => import('@/views/order/all-order/index'),
        meta: { title: '全部订单' }
      },
      {
        path: '/all-order/detail/:id(\\d+)',
        name: 'detail',
        component: () => import('@/views/order/all-order/detail/index'),
        meta: { title: '订单详情' },
        hidden: true
      },
      {
        path: '/all-order/demolition-order',
        name: 'detail',
        component: () => import('@/views/order/all-order/demolition-order/index'),
        meta: { title: '拆单' },
        hidden: true
      },
      {
        path: 'delivery-management',
        name: 'delivery-management',
        component: () => import('@/views/order/delivery-management/index'),
        meta: { title: '发货管理' }
      },
      {
        path: 'after-sales-order',
        name: 'after-sales-order',
        component: () => import('@/views/order/after-sales-order/index'),
        meta: { title: '售后订单' }
      },
      {
        path: '/after-sales-order/details/:id(\\d+)',
        name: 'details',
        component: () => import('@/views/order/after-sales-order/details/index'),
        meta: { title: '订单详情' },
        hidden: true
      }
    ]
  },

  {
    path: '/member',
    component: Layout,
    redirect: '/member/memberList',
    name: 'member',
    meta: { title: '会员', icon: 'vip' },
    children: [
      {
        path: 'memberList',
        name: 'memberList',
        component: () => import('@/views/member/memberList/index'),
        meta: { title: '会员列表' }
      },
      {
        path: '/memberList/detail',
        name: 'detail',
        component: () => import('@/views/member/memberList/detail/index'),
        meta: { title: '会员详情' },
        hidden: true
      },
      {
        path: 'memberGrade',
        name: 'MemberGrade',
        component: () => import('@/views/member/memberGrade/index'),
        meta: { title: '等级配置' }
      },
      {
        path: '/memberGrade/add',
        name: 'add',
        component: () => import('@/views/member/memberGrade/add/index'),
        meta: { title: '会员等级' },
        hidden: true
      },
      {
        path: 'memberIntegral',
        name: 'memberIntegral',
        component: () => import('@/views/member/memberIntegral/index'),
        meta: { title: '积分配置' }
      }
    ]
  },
  {
    path: '/assets',
    component: Layout,
    redirect: '/assets/storeInfo',
    name: 'Assets',
    meta: { title: '资产', icon: 'dollar' },
    children: [
      {
        path: 'assets',
        name: 'Assets',
        component: () => import('@/views/assets/index'),
        meta: { title: '资产' }
      }
    ]
  },
  {
    path: '/setUp',
    component: Layout,
    redirect: '/setUp/storeInfo',
    name: 'SetUp',
    meta: { title: '设置', icon: 'set_up' },
    children: [
      {
        path: 'storeInfo',
        name: 'StoreInfo',
        component: () => import('@/views/setUp/storeInfo/index'),
        meta: { title: '店铺信息' }
      },
      {
        path: 'express-management',
        name: 'express-management',
        component: () => import('@/views/setUp/express-management/index'),
        meta: { title: '快递管理' }
      },
      {
        path: '/express-management/add',
        name: 'add',
        component: () => import('@/views/setUp/express-management/add/index'),
        meta: { title: '添加快递公司' },
        hidden: true
      },
      {
        path: 'generalSettings',
        name: 'GeneralSettings',
        component: () => import('@/views/setUp/generalSettings/index'),
        meta: { title: '通用设置' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
