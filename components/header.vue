<template>
  <el-row type="flex" justify="space-between" align="middle" class="header">
    <div class="logo">
      <!-- <nuxt-link to="/"> -->
      <img src="logo.jpg" alt />
      <!-- </nuxt-link> -->
    </div>
    <el-row type="flex" class="navs">
      <nuxt-link to="/">首页</nuxt-link>
      <nuxt-link to="/post">旅游攻略</nuxt-link>
      <nuxt-link to="/hotel">酒店</nuxt-link>
      <nuxt-link to="/air">国内机票</nuxt-link>
    </el-row>
    <div class="user">
      <span>登录/注册</span>
    </div>
  </el-row>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.header {
  margin: 0 auto;
  width: 1000px;
  height: 60px;
  margin-bottom: 1px;
  .logo {
    height: 60px;
    margin-right: 20px;
    img {
      height: 60px;
    }
  }
  .navs {
    flex: 1;
    a {
      display: block;
      padding: 0 20px;
      height: 60px;
      line-height: 60px;
      &:hover {
        color: #409eff;
        border-bottom: 4px solid #409eff;
      }
    }
    .nuxt-link-exact-active {
      background-color: #409eff;
      color: #fff;
      &:hover {
        color: #fff;
      }
    }
  }
}
</style>