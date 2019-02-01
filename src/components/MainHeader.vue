<template>
  <div class="xfn-main-header">
    <h3 class="xfn-title">{{$store.state.globalSettings.appName}}管理后台</h3>
    <div class="xfn-right">
      <span class="xfn-name">当前用户：{{$store.state.adminName}}</span>
      <el-button @click="quit" type="warning" plain>退出</el-button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    quit() {
      //清除当前用户登录信息
      this.$store.commit("setAdminName", "");
      //跳转到首页
      this.$router.push("/login");
    }
  }
};
</script>
<style lang="scss">
$headerHeight: 60px;
.xfn-main-header {
  background: #dcdfe6;
  border-radius: 4px;
  line-height: $headerHeight;
  height: $headerHeight;
  padding: 0 20px;
  .xfn-title {
    color: #303133;
    float: left;
    margin: 0;
  }
  .xfn-right {
    float: right;
    .xfn-name {
      margin-right: 10px;
    }
  }
}
</style>