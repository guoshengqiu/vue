import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('@/views/home')
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
    }
  ]
})
