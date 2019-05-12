<template>
  <section class="container">
    <div class="shade">
      <div class="rigister">
        <form id="RigisterForm" @submit.prevent="submitForm()">
          <label for="loginname">账号</label>
          <input v-model.trim="name" id="loginname" @change="valname()">
          <br>
          <p>{{nameifo}}</p>
          <label for="password">密码</label>
          <input v-model.trim="password" id="password" @change="valPsw()">
          <br>
          <p>{{pswifo}}</p>
          <label for="confirm">确认密码</label>
          <input v-model.trim="confirm" id="confirm" @change="valConfirm()">
          <br>
          <p>{{conifo}}</p>
          <label for="phone">手机号</label>
          <input v-model.number="phone" id="phone" @change="valPhone()">
          <br>
          <p>{{phoneifo}}</p>
          <p>{{subifo}}</p>
          <button type="submit">注册</button>
        </form>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      nameifo: "",
      pswifo: "",
      conifo: "",
      phoneifo: "",
      subifo: "",
      name: "",
      confirm: "",
      password: "",
      phone: ""
    };
  },
  methods: {
    valname() {
      this.$axios
        .get("/users/unique?name=" + this.name)
        .then(result => {
          console.log(result.data.state);
          if (result.data.state == 1) {
            this.nameifo = "";
          } else {
            this.nameifo = "该用户已被占用";
            setTimeout(() => {
              this.nameifo = '';
            }, 100);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    valPsw() {
      const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[\w]{3,20}$/;
      if (re.test(this.password)) {
        this.pswifo = "";
      } else {
        this.pswifo = "密码必须包括字母数字大写字母，长度大于3个字符";
        setTimeout(() => {
          this.pswifo = ''
        }, 1000);
      }
    },

    valConfirm() {
      if (this.password == this.confirm) {
        this.conifo = "";
      } else {
        this.conifo = "密码不一致！";
        setTimeout(() => {
          this.conifo = ''
        }, 100);
      }
    },

    valPhone() {
      let re = /\d{11}/;
      if (re.test(this.phone)) {
        this.phoneifo = "";
      } else {
        this.phoneifo = "请输入11位手机号";
      }
    },
    submitForm() {
      if (this.name && this.password) {
        this.subifo = "";
        let jsondata = {
          name: this.name,
          password: this.password,
          phone: this.phone
        };

        this.$axios
          .post("/users/create", jsondata)
          .then(rezult => {
            console.log(rezult);
            
            if (rezult.status == 1) {
              this.$store.dispatch('init',{name:this.name})
              this.$router.push({path:'/'})
            }
          })
          .catch(err => {
            console.log(err);
          });
        // this.$store.commit("user/init", { id: data.id, name: this.name });

        this.name = "";
        this.password = "";
        this.confirm = "";
        this.phone = "";
      } else {
        this.subifo = "账号或密码不能为空";
        setTimeout(function() {
          this.subifo = "";
        }, 1000);
      }
    }
  }
};
</script>

<style scoped>
.rigister {
  padding: 20px;
  min-width: 260px;
  min-height: 300px;
}
#RigisterForm {
  text-align: center;
}
#RigisterForm label {
  text-align: right;
  float: left;
}
#RigisterForm input {
  float: right;
}
#RigisterForm p {
  color: red;
  margin: 3px;
  font-size: 13px;
}
#RigisterForm button {
  background: none;
  font-size: 15px;
}
</style>
