<template>
  <div class="xfn-login">
    <el-card class="sfn-login-card">
      <div slot="header">管理员登录</div>
      <div>
        <el-form :model="formData" label-width="90px" :rules="rules"  ref="ruleForm">
          <el-form-item label="管理员名：" prop="name">
            <el-input v-model="formData.aname"></el-input>
          </el-form-item>
          <el-form-item label="登录密码：" prop="upwd">
            <el-input type="password" placeholder="请输入管理员密码" v-model="formData.apwd"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="doLogin('ruleForm')">登录</el-button>
            <el-button @click="doCancel">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  data(){
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    return {
      formData:{
        aname:"admin",
        apwd:"123456"
      }
    }
  },
  rules:{
    name:[
        { required: true, message: '请输入管理员名', trigger: 'blur' },
        { min: 3, max: 16, message: '长度在 3 到 5 个字符', trigger: 'blur'}
    ],
    upwd:[]
  },
  methods:{
    doLogin(formName){
      this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      this.$axios.get(this.$store.state.globalSettings.apiUrl+"/admin/login/"+this.formData.aname+"/"+this.formData.apwd).then((res)=>{
        if(res.data.code == 200){
          //把用户名存入vuex
          this.$store.commit('setAdminName',this.formData.aname);
          this.$router.push('/main');
        }else{
          this.$alert('用户名或者密码有误','登录失败',{
             type: 'error'
          })
        }
      })
    },
    doCancel(){
      this.formData.aname = "";
      this.formData.apwd = "";
    }
  }
}
</script>
<style lang="scss">
.sfn-login-card {
  width: 400px;
  margin: 100px auto;
  .el-card__header {
    text-align: center;
  }
}
</style>