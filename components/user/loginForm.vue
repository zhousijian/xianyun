<template>
  <div class="loginForm">
    <el-form :model="user" :rules="rules" ref="ruleForm" class="form">
      <el-form-item prop="username">
        <el-input v-model="user.username" placeholder="用户名/手机"></el-input>
      </el-form-item>

      <el-form-item prop="password">
        <el-input type="password" v-model="user.password" placeholder="密码"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" class="submit" @click="userLogin">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
      let validatePass = (rule ,value , callback)=>{
          let guize = /^1[3-9]\d{9}$/
          if(guize.test(value)){
              callback()
          }else {
              callback(new Error('账号/手机输入不规范'))
          }
      }
    return {
      user: {
        username: "13800138000",
        password: "123456"
      },
      rules: {
        username: [{ validator: validatePass, trigger: "blur" }],
        password: [
          { required: true, message: "密码输入不规范", trigger: "blur" },
          { min: 3, max: 16, message: "长度在3到16个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
      userLogin(){
        //   console.log(111);
        this.$refs.ruleForm.validate(valid=>{
            if(valid){
                this.$axios({
                    method : 'post',
                    url : '/accounts/login',
                    data : this.user
                }).then(res=>{
                    // console.log(res);
                    this.$store.commit('user/setUserInfo', res.data)
                    
                })
            }else {
                this.$message.error('信息输入不规范')
            }
        })
          
      }
  }
};
</script>

<style scoped lang="less">
.form {
  padding: 25px;
}

.form-item {
  margin-bottom: 20px;
}

.form-text {
  font-size: 12px;
  color: #409eff;
  text-align: right;
  line-height: 1;
}

.submit {
  width: 100%;
  margin-top: 10px;
}
</style>