import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('@/views/home')
    //   children: [
    //     {
    //       path: '/sign',
    //       name: 'sign',
    //       components: {
    //         default: () => import('@/views/sign')
    //       }
    //     },
    //     {
    //       path: '/flex',
    //       name: 'flex',
    //       components: {
    //         default: () =>('@/views/flex')
    //       }
    //     }
    //   ]
    },

    {
      path: '/sign',
      component: () => import('@/views/sign')
      // children: [
      //   {
      //     path: '/sign',
      //     name: 'sign',
      //     components: {
      //       default: () => import('@/views/sign')
      //     }
      //   }
      // ]
    },
    {
      path: '/flex',
      name: 'flex',
      components: {
        default: () => import('@/views/flex')
      }
    },
    {
      path: '/elementui',
      name: 'elementui',
      components: {
        default: () => import('@/views/elementui')
      }
    },
    {
      path: '/szqc',
      name: 'szqc',
      components: {
        default: () => import('@/views/szqc')
      }
    }
  ]
})
