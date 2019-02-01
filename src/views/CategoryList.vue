<template>
  <div class="xfn-category-list">
    <el-breadcrumb>
      <el-breadcrumb-item to="/main">首页</el-breadcrumb-item>
      <el-breadcrumb-item>菜品类别管理</el-breadcrumb-item>
      <el-breadcrumb-item>菜品列表</el-breadcrumb-item>
    </el-breadcrumb>
    <br>
    <el-button type="primary" plain @click="addCategory">
      <i class="el-icon-plus"></i>
      添加新的菜品类别
    </el-button>
    <br>
    <br>
    <el-table :data="categoryList" :stripe="true" border>
      <el-table-column label="编号" prop="cid"></el-table-column>
      <el-table-column label="名称" prop="cname"></el-table-column>
      <el-table-column label="操作">
        <!-- vue.js插槽作用域的解构 -->
        <template slot-scope="{row,$index}">
          <el-button type="warning" plain @click="updateCategory(row,$index)">修改</el-button>
          <el-button type="danger" plain @click="deleteCategory(row,$index)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      categoryList: []
    };
  },
  created() {
    var url = this.$store.state.globalSettings.apiUrl + "/admin/category";
    this.$axios
      .get(url)
      .then(res => {
        this.categoryList = res.data;
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    updateCategory(data, index) {},
    deleteCategory(data, index) {
      this.$confirm("此操作不可恢复，您确定吗？", "提示", { type: "warning" })
        .then(() => {
          var url =
            this.$store.state.globalSettings.apiUrl +
            "/admin/category" +
            data.cid;
          this.$axios
            .delete(url)
            .then(res => {
              if (res.data.code == 200) {
                this.categoryList.splice(index, 1); //模型数据中删除
                this.$message.success("菜品类别删除成功！");
              } else {
                this.$message.success("菜品类别删除出差错，请稍后再试！");
              }
            })
            .catch(err => {
              console.log(err);
            });
        })
        .catch(() => {});
    },
    addCategory(){
      this.$prompt("请输入新的菜品类别名：","提示",{type:'info'}).then(()=>{
        //获得用户的输入，调用数据api添加到数据库
        var url = this.$store.state.globalSettings.apiUrl +"/admin/category";
        this.$axios.post(url,{cname:value}).then((res)=>{
          if(res.data.code == 200){
            this.$message.success('新的类别添加成功！')
          }
        })
      }).catch(()=>{})
    }
  }
};
</script>