<template>
  <div class="login">
    <div class="login_box">
      <div class="login_title">UNI-ADMIN</div>
      <el-input class="login_input" v-model="name" placeholder="请输入用户名"></el-input>
      <el-input class="login_input" placeholder="请输入密码" v-model="password" show-password></el-input>
       <el-button class="login_input" type="primary" @click="onSubmit">立即创建</el-button>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            name:"",
            password:""
        }
    },
    methods: {
        onSubmit(){
            this.$axios.post("http://ceshi5.dishait.cn/admin/login",{
                username:this.name,
                password:this.password
            }).then((res)=>{
                localStorage.token = res.data.data.token
                  this.$message('登陆成功');
                this.$router.push("/homepage/backstage")
            }).catch((err)=>{
                 this.$message.error('账号密码错误');
            })
        }
    },
}
</script>

<style>
.login{
  width: 100vw;
  height: 100vh;
}
.login_box{
  width: 400px;
  height: 300px;
  border: 1px solid rgb(163, 157, 157);
  margin: 100px auto;
}
.login_input{
  width: 320px;
  margin-top: 20px ;
  margin-left: 30px;
}
.login_title{
  width: 100%;
  height: 60px;
  line-height: 60px;
  text-align: center;
  font-size: 25px;
  border-bottom:1px solid  rgb(163, 157, 157) ;
}
</style>