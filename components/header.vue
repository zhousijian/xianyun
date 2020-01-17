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
      <nuxt-link to="/user/login" v-if="!$store.state.user.userInfo.token">登录/注册</nuxt-link>
      <el-dropdown v-if="$store.state.user.userInfo.token">
        <span class="el-dropdown-link">
          <img class="img" :src="$axios.defaults.baseURL+$store.state.user.userInfo.user.defaultAvatar" alt="" width="30px" height="30px" vitical-align:middle>
          {{$store.state.user.userInfo.user.nickname}}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </el-row>
</template>

<script>
export default {
  methods: {
    aaa() {
      console.log(this.$store.state.user.userInfo.user.nickname);
    }
  }
};
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
.img {
  vertical-align: middle;
}
</style>