import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {  //当前数据的状态 读取：this.$store.state.xxx
    adminName:'',  //当前登录管理员的名字
    globalSettings:{  //项目全局设置信息
      apiUrl:'http://127.0.0.1:8090'  //初始默认值
    }
  },
  mutations: {//修改state中数据属性，保存着修改的方法 调用：this.$store.commit('方法名',val)
    //修改登录的管理员名
    setAdminName(state,val){
      state.adminName = val;
    },
    //修改全局设置信息
    setGlobalSetings(state,val){
      state.globalSettings = val;
    }
  },
  actions: {

  }
})
