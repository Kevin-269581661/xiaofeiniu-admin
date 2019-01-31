import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'

Vue.use(ElementUI);//注册elementUI
Vue.prototype.$axios = axios;  //Vue实例对象继承原型的axios方法

Vue.config.productionTip = false

//创建全局过滤器
//把毫秒转化为年-月-日
Vue.filter('date',(val)=>{
  var date = new Date(val);
  var yy = date.getFullYear();
  var mm = date.getMonth()+1;
  mm = mm > 9 ? mm :'0'+ mm;
  var dd = date.getDate();
  dd = dd > 9 ? dd : '0' + dd;
  return yy + '-' +mm+'-'+dd
})
//把毫秒转化为年-月-日 时-分-秒
Vue.filter('datetime',(val)=>{
  var date = new Date(val);
  var yy = date.getFullYear();
  var mm = date.getMonth()+1;
  mm = mm > 9 ? mm :'0'+ mm;
  var dd = date.getDate();
  dd = dd > 9 ? dd : '0' + dd;

  var hh = date.getHours();
  hh = hh > 9 ? hh : '0' + hh;
  var mi = date.getMinutes();
  mi = mi > 9 ? mi : '0' + mi;
  var ss = date.getSeconds();
  ss = ss > 9 ? ss : '0' + ss;
  return yy + '-' +mm+'-'+dd+' '+hh+':'+mi+':'+ss
})
//把money转为¥xx.xx
Vue.filter('currency',(val)=>{
  return '¥'+val.toFixed(2)
})
Vue.filter('tableStatus',(val)=>{

})

new Vue({
  router,
  store,  //指定当前项目的唯一的Vuex存储仓库对象
  render: h => h(App) //render:(createElement)=>{return createElement(App) }根据App组件创建<app></app>元素，挂载到#app内部
}).$mount('#app')
