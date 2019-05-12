<template>
  <div class="box">
    <div class="nav">
      <div class="nav-img">
        <img src="../assets/img/tianmaologo.png">
      </div>

      <div class="nav-input">
        <input type="text" id="sousuo" placeholder="搜索    商品/品牌/店铺">
        <button>搜索</button>
      </div>
    </div>
    <div>
      <slider></slider>
    </div>
    <div class="atttop" :class="{cactive:isactive}" :style="attopstyle">
      <attract-top></attract-top>
    </div>
    <component
      :is="currentComponent"
      v-on:buy="buy"
      v-on:goback="goback"
      :cpruduct="currentpruduct"
    ></component>
  </div>
</template>
<script>
import Pruinfo from "./Pruinfo";
import Pruducts from "./Pruducts";
import Slider from "./Slider";
import AttractTop from "./AttractTop";
export default {
  mounted: function() {
    window.addEventListener("scroll", this.handleatttop);
  },
  destroyed: function() {
    window.removeEventListener("scroll", this.handleatttop);
  },
  components: {
    Pruinfo,
    Pruducts,
    Slider,
    AttractTop
  },
  data() {
    return {
      currentpruduct: "",
      currentComponent: "Pruducts",
      attopstyle: "",
      isactive: false
    };
  },
  methods: {
    buy(pruduct) {
      this.currentpruduct = pruduct;
      this.currentComponent = "Pruinfo";
    },
    goback() {
      this.currentComponent = "Pruducts";
    },
    handleatttop() {
      let wtop = document.documentElement.scrollTop;
      if (wtop > 300) {
        this.isactive = true;
      } else {
        this.isactive = false;
      }
    }
  }
};
</script>
<style lang='scss' scoped>
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav-input {
  width: 100%;
}
.nav-input > input {
  line-height: 40px;
  font-size: 15px;
  width: 50%;
  outline: none;
  border: 3px solid red;
}
.nav-input > button {
  border: 3px solid red;
  line-height: 40px;
  outline: none;
  margin: 0px;
  background-color: red;
  font-size: 15px;
}
.nav-img > img {
  max-height: 200px;
}
.box {
  overflow: hidden;
  position: relative;

  .atttop {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .cactive {
    position: fixed;
    top: 0;
  }
}
</style>

