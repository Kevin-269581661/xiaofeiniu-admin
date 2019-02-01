<template>
  <div class="xfn-settings">
    <el-breadcrumb>
      <el-breadcrumb-item to="/main">首页</el-breadcrumb-item>
      <el-breadcrumb-item>全局设置</el-breadcrumb-item>
    </el-breadcrumb>
    <br>
    <el-card shadow="never">
      <el-form label-width="130px" :model="formData">
        <el-form-item label="应用名称：">
          <el-input v-model="formData.appName"></el-input>
        </el-form-item>
        <el-form-item label="应用API网址：">
          <el-input v-model="formData.apiUrl"></el-input>
        </el-form-item>
        <el-form-item label="后台管理端网址：">
          <el-input v-model="formData.adminUrl"></el-input>
        </el-form-item>
        <el-form-item label="客户端App网址：">
          <el-input v-model="formData.appUrl"></el-input>
        </el-form-item>
        <el-form-item label="ICP备案号：">
          <el-input v-model="formData.icp"></el-input>
        </el-form-item>
        <el-form-item label="版权声明：">
          <el-input v-model="formData.copyright"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="doSubmit">提交</el-button>
          <el-button @click="doCancel">取消</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
export default {
  data(){
    return{
      formData:{
        // appName:'',
        // apiUrl:'',
        // adminUrl:'',
        // appUrl:'',
        // icp:'',
        // copyright:''
      }
    }
  },
  created(){
    //this.formData = this.$store.state.globalSettings  //引用复制：两个变量指向同一个对象
    //采用深克隆方法，复制vuex中对象
    this.formData = JSON.parse(JSON.stringify(this.$store.state.globalSettings));
    
  },
  methods:{
    //点击“提交”
    doSubmit(){
      var url = this.$store.state.globalSettings.apiUrl+'/admin/settings';
      this.$axios.put(url,this.formData).then((res)=>{
        console.log(res.data)
        if(res.data.code == 200){
          this.$message.success('全局设置修改成功！');
          //修改vuex中数据
        }else{
          this.$message.error('全局设置修改失败！')
        }
      }).catch((err)=>{
        console.log(err)
      })
    },
    //点击“取消”
    doCancel(){
      this.formData = JSON.parse(JSON.stringify(this.$store.state.globalSettings));
    }
  }
}
</script>