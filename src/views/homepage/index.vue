<template>
  <div>
    <el-row>
      <el-col :span="6">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
         
          text-color="#333"
          active-text-color="#ffd04b"
          router
        >
  
          <el-menu-item index="/homepage/backstage">
            <i class="el-icon-menu"></i>
            <span slot="title">后台首页</span>
          </el-menu-item>
          <el-menu-item index="/homepage/album" >
            <i class="el-icon-document"></i>
            <span slot="title">相册管理</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="18"> 
        
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>