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
  
          <el-menu-item index="/shop/classification">
            <i class="el-icon-menu"></i>
            <span slot="title">分类列表</span>
          </el-menu-item>
          <el-menu-item index="/shop/shoplist" >
            <i class="el-icon-document"></i>
            <span slot="title">商品列表</span>
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