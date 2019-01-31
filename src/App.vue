<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  mounted() {
    //获取全局设置保存vuex中
    var url = this.$store.state.globalSettings.apiUrl+'/admin/settings';
    this.$axios.get(url).then((res)=>{
      this.$store.commit('setGlobalSetings',res.data);
    }).catch((err)=>{
      console.log(err)
    })
  }
}
</script>
<style lang="scss">
#app{
  color:#303133;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
</style>
