<template>
  <div class="xfn-main">
    <el-container>
      <!-- 左侧的菜单栏 -->
      <el-aside width="200px">
        <el-menu 
          :unique-opened="true"
          router 
          :default-openeds="defaultOpends"
          :default-active="defaultActive"
        >
          <!-- 菜单项一 -->
          <el-menu-item index="/settings">
            <i class="el-icon-setting"></i>
            <span slot="title">全局设置</span>
          </el-menu-item>
          <!-- 菜单项二 -->
          <el-submenu index="table">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>桌台管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/table/list">桌台列表</el-menu-item>
              <el-menu-item index="/table/add">添加桌台</el-menu-item>
              <el-menu-item index="/table/delete">删除桌台</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
         <!-- 菜单项三 -->
          <el-menu-item index="/category/list">
            <i class="el-icon-setting"></i>
            <span slot="title">菜品类别</span>
          </el-menu-item>
          <!-- 菜单项四 -->
          <el-submenu index="dish">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>菜品管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/dish/list">菜品列表</el-menu-item>
              <el-menu-item index="/dish/add">添加菜品</el-menu-item>
              <el-menu-item index="/dish/delete">删除菜品</el-menu-item>
              <el-menu-item index="/dish/update">修改菜品</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <!-- 菜单项五 -->
          <el-menu-item index="/order/list">
            <i class="el-icon-setting"></i>
            <span slot="title">订单列表</span>
          </el-menu-item>
          <!-- 菜单项六 -->
          <el-menu-item index="/security">
            <i class="el-icon-setting"></i>
            <span slot="title">安全管理</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <!-- 顶部信息栏 -->
        <el-header height="60px">
          <!-- MainHeader -->
          <main-header></main-header>
        </el-header>
        <!-- 主体部分 -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import MainHeader from '../components/MainHeader'
export default {
  data(){
    return {
      
    }
  },
  computed:{  //计算属性 = 数据属性 + 操作方法
    defaultOpends(){
      if(this.$route.path.indexOf('/table') == 0){
        //用户当前在浏览/table/xxx菜单项(路径以'/table'开头)
        return ['table']
      }else if(this.$route.path.indexOf('/dish') == 0){
        return ['dish']
      }else{
        return []
      }
    },
    defaultActive(){
      return this.$route.path
    }
  },
  beforeCreate() {
    //组件创建之前，先要检查是否登录为管理员
    if(!this.$store.state.adminName){
      this.$router.push('/login');//未登录则跳转到登录
    }
  },
  mounted(){
    //当前组件挂载完成后
  },
  components:{
    MainHeader
  }
}
</script>
