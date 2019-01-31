import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login'
import Main from './views/Main'
import NotFound from './views/NotFound'
import GlobalSettings from './views/GlobalSettings'
import TableList from './views/TableList'
import TableAdd from './views/TableAdd'
import TableDelete from './views/TableDelete'
import CategoryList from './views/CategoryList'
import CategoryAdd from './views/CategoryAdd'
import CategoryDelete from './views/CategoryDelete'
import CategoryUpdate from './views/CategoryUpdate'
import DishList from './views/DishList'
import DishAdd from './views/DishAdd'
import DishDelete from './views/DishDelete'
import DishUpdate from './views/DishUpdate'
import OrderList from './views/OrderList'
import Security from './views/Security'


Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',redirect:'/login'},
    {path:'/login',component:Login},
    {
      path:'/main',component:Main,
      children:[
        {path:'',redirect:'/table/list'},
        {path:'/settings',component:GlobalSettings},
        {path:'/table/list',component:TableList},
        {path:'/table/add',component:TableAdd},
        {path:'/table/delete',component:TableDelete},
        {path:'/category/list',component:CategoryList},
        {path:'/category/add',component:CategoryAdd},
        {path:'/category/delete',component:CategoryDelete},
        {path:'/category/update',component:CategoryUpdate},
        {path:'/dish/list',component:DishList},
        {path:'/dish/add',component:DishAdd},
        {path:'/dish/delete',component:DishDelete},
        {path:'/dish/update',component:DishUpdate},
        {path:'/order/list',component:OrderList},
        {path:'/security',component:Security}
      ]
    },
    {path:'*',component:NotFound}
  ]
})
