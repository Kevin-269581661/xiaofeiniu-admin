<template>
  <div class="main">
    <el-container>
      <!-- 左侧的菜单栏 -->
      <el-aside width="200px">左侧边栏</el-aside>
      <el-container>
        <!-- 顶部信息栏 -->
        <el-header>顶部</el-header>
        <!-- 主体部分 -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  data(){
    return {}
  },
  beforeCreate() {
    //组件创建之前，先要检查是否登录为管理员
    if(!this.$store.state.adminName){
      this.$router.push('/login');//未登录则跳转到登录
    }
  },
  mounted(){
    //当前组件挂载完成后
  }
}
</script>
