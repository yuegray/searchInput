import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import SearchFilter from '@/components/SearchFilter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SearchFilter',
      component: SearchFilter
    }
  ]
})
