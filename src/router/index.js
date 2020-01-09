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
    redirect: '/index',
    children: [
      {
        path: 'index',
        name: 'index',
        component: () => import('@/views/index/index'),
        meta: { title: '首页', icon: 'dashboard' }
      }
    ]
  },
  {
    path: '/mission/index',
    component: Layout,
    meta: { title: '任务管理', icon: 'store' }
  },
  {
    path: '/client/index',
    component: Layout,
    // redirect: '/client/index',
    name: 'client',
    meta: { title: '客户管理', icon: 'store' },
    children: [
      {
        path: 'commercialOpportunity',
        name: 'commercialOpportunity',
        component: () => import('@/views/client/commercialOpportunity/index'),
        meta: { title: '意向客户管理' }
      },
      {
        path: 'potentialClients',
        name: 'potentialClients',
        component: () => import('@/views/client/potentialClients/index'),
        meta: { title: '商机管理' }
      }
    ]
  },

  {
    path: '/project/index',
    component: Layout,
    meta: { title: '项目管理', icon: 'form' },
    children: [
      {
        path: 'building',
        name: 'building',
        component: () => import('@/views/project/building/index'),
        meta: { title: '楼栋管理' }
      },
      {
        path: 'prePa',
        name: 'prePa',
        component: () => import('@/views/project/prePa/index'),
        meta: { title: '项目立项' }
      }
    ]
  },
  {
    path: '/economics/index',
    component: Layout,
    // redirect: '/client/index',
    name: 'economics',
    meta: { title: '经济管理', icon: 'store' },
    children: [
      {
        path: 'company',
        name: 'company',
        component: () => import('@/views/economics/company/index'),
        meta: { title: '经济公司管理' }
      },
      {
        path: 'store',
        name: 'store',
        component: () => import('@/views/economics/store/index'),
        meta: { title: '经济门店管理' }
      },
      {
        path: 'middleman',
        name: 'middleman',
        component: () => import('@/views/economics/middleman/index'),
        meta: { title: '经纪人管理' }
      }
    ]
  },

  {
    path: '/accounting/index',
    component: Layout,
    // redirect: '/client/index',
    name: 'accounting',
    meta: { title: '账单管理', icon: 'store' },
    children: [
      {
        path: 'returnedMoney',
        name: 'returnedMoney',
        component: () => import('@/views/accounting/returnedMoney/index'),
        meta: { title: '回款管理' }
      },
      {
        path: 'invoice',
        name: 'invoice',
        component: () => import('@/views/accounting/invoice/index'),
        meta: { title: '开票回款管理' }
      },
      {
        path: 'settlement',
        name: 'settlement',
        component: () => import('@/views/accounting/settlement/index'),
        meta: { title: '结算管理' }
      },
      {
        path: 'settlements',
        name: 'settlements',
        component: () => import('@/views/accounting/settlements/index'),
        meta: { title: '结算单管理' }
      }
    ]
  },
  {
    path: '/setUp',
    component: Layout,
    // redirect: '/setUp/storeInfo',
    name: 'SetUp',
    meta: { title: '系统设置', icon: 'set_up' },
    children: [
      {
        path: 'department',
        name: 'department',
        component: () => import('@/views/setUp/department/index'),
        meta: { title: '部门设置' }
      },
      {
        path: 'users',
        name: 'users',
        component: () => import('@/views/setUp/users/index'),
        meta: { title: '用户设置' }
      },
      {
        path: 'jurisdiction',
        name: 'jurisdiction',
        component: () => import('@/views/setUp/jurisdiction/index'),
        meta: { title: '权限设置' }
      }
    ]
  },
  {
    path: '/statistics/index',
    component: Layout,
    meta: { title: '统计', icon: 'store' }
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () =>
  new Router({
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
