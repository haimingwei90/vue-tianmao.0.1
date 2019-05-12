<template>
  <div class="login">
    <form id="LoginForm" @submit.prevent="submitForm()">
      <label for="loginname">账号</label>
      <input v-model.trim="name" id="loginname">
      <br>
      <br>
      <label for="password">密码</label>
      <input v-model.trim="password" id="password">
      <br>
      <br>
      <p>
        <label for="captcha">
          <img height="30" @click="refresh" ref="captcha" src="/captcha">
        </label>
        <input v-model="captcha" id="captcha">
      </p>
      <br>
      <p>{{message}}</p>
      <br>
      <button type="submit">登录</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message:'',
      name: "",
      password: "",
      captcha: ""
    };
  },
  methods: {
    refresh() {
      this.$nextTick(() => {
        this.$store.dispatch('init',{name:this.name})
        this.$refs.captcha.setAttribute("src", "/captcha?" + Date.now());
      });
    },
    submitForm(){
      if(this.name&&this.password){
          let jsondata = {loginname:this.name,password:this.password,captcha:this.captcha}
          this.$axios.post('/users/login',jsondata).then((result) => {
            if(result.data.state == 1){
              
              this.$store.dispatch('init',{name:this.name})
              this.$router.push({path:'/'})
            }else{
             this.message =  result.data.message
              
            }
            
          }).catch((err) => {
            console.log(err);
            
          });
      }else{
        alert('用户名或密码不能为空')
      }
    }
  }
};
</script>
<style scoped>
.login {
  padding: 20px;
  min-width: 260px;
  min-height: 300px;
}
#LoginForm label {
  text-align: right;
  float: left;
}
#LoginForm input {
  float: right;
}
.login button {
  background: none;
}
</style>


