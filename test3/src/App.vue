<template>
  <div id="app">
    <div class="nav">
      <div class="logo">
        <img src="./assets/img/tianmaologo.png">
        <span>Vue Project</span>
      </div>
      <div class="navs">
        <router-link to="/">首页</router-link>
        <router-link to="/topic">文章</router-link>
        <router-link to="/index">产品</router-link>
        <router-link to="/backstage">后台</router-link>
      </div>

      <div class="userbox">
        <router-link to="/user" @mouseover.native="userid()">{{this.$store.state.user.name}}</router-link>
        <router-link to="/login" :class="{loginlink:loginactive}">登录</router-link>
        <div :class="{usermenu:isactive,usermenu2:isactive2}">
          <a href="/users/outlogin" @click="outlogin()">退出</a>
          <router-link to="/userset" @mouseout.native="useridout()">设置</router-link>
        </div>
      </div>
    </div>
    <router-view/>
    <div class="right-nav" ref="test" :style="teststyle">
      <top-right-nav></top-right-nav>
    </div>
    <foot></foot>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Foot from "./components/Foot.vue";
import TopRightNav from "./components/TopRightNav";
export default {
  mounted() {
    window.addEventListener("scroll", this.handlescroll);
  },
  data() {
    return { isactive: false, isactive2: true, loginactive: true,
      teststyle:''
    };
  },
  name: "App",
  components: {
    Foot,
    TopRightNav
  },
  methods: {
    userid() {
      this.isactive = true;
      this.isactive2 = false;
    },
    useridout() {
      this.isactive = false;
      this.isactive2 = true;
    },
    outlogin() {
      this.$store.dispatch("init", { name: "" });
    },
    handlescroll() {
      let woffset = window.pageYOffset;
      let dset = document.documentElement.scrollTop
      let top = Number(dset)+100;
      this.teststyle = {
        top:top+'px'

      } 
    }
  }
};
</script>

<style scoped>
.logo > img {
  max-height: 20px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  position: relative;
  padding: 0 35px;
}
.userbox {
  position: relative;
}
.usermenu {
  position: absolute;
  left: -30px;
  top: 30px;
  width: 100px;
  display: block;
}
.usermenu a {
  text-decoration: none;
  display: block;
}
.usermenu2 {
  display: none;
}

.nav {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  padding: 2px;
  border-bottom: 1px solid red;
}
.navs a {
  margin: 0px 10px;
  cursor: default;
  color: black;
  text-decoration: none;
  font-size: 20px;
}
.navs a:hover {
  color: red;
}
.userbox a {
  margin: 0px 10px;
  color: black;
  text-decoration: none;
}
.right-nav {
  position: absolute;
  right: 0px;
  
}
</style>
