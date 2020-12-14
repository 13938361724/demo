<template>
  <div>
    <el-container>
      <el-header>
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <el-menu-item>UNI-ADMIN</el-menu-item>
          <el-menu-item index="/homepage">首页</el-menu-item>
          <el-menu-item index="/shop">商品</el-menu-item>
          <el-menu-item index="/order">订单</el-menu-item>
          <el-menu-item index="/vip">会员</el-menu-item>
          <el-menu-item index="/setup">设置</el-menu-item>
          <el-submenu index="2">
            <template slot="title">admin</template>
            <el-button type="primary" @click="tui">退出登录</el-button>
          </el-submenu>
          
        </el-menu>
      </el-header>

      <router-view></router-view>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex2: "",
    };
  },
  methods: {
    tui() {
      localStorage.removeItem("token");
      this.$router.push({ path: "/login" });
      this.$axios
        .post("http://ceshi5.dishait.cn/admin/logout", {
          token: localStorage.getItem("token") || "",
        })
        .then((res) => {
          console.log(res);
        });
    },
  },
};
</script>

<style scoped>
.el-header,
.el-footer {
  background-color: #545c64;
  color: #333;
  text-align: center;
  width: 100vw;
  height: 10vh;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  height: 90vh;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  height: 90vh;
}
</style>