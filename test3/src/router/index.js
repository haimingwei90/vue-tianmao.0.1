import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import Index from '../components/Index.vue'
import Topic from '../components/Topic.vue'
import Login from '../components/Login.vue'
import Album from '../components/Album.vue'
import Backstage from '../components/Backstage.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      component:Index
     
    },
    {
      path:'/topic',
      component:Topic
    },
    {
      path:'/album',
      component:Album
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/backstage',
      component:Backstage
    }

  ]
})
