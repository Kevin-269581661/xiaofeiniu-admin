import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login'
import Main from './views/Main'
import NotFound from './views/NotFound'


Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:'/login'},
    {path:'/login',component:Login},
    {path:'/main',component:Main},
    {path:'*',component:NotFound}
  ]
})
