<template>
  <div>
    <div class="box">
      <nav>
        <a href="#" @mouseover="buy">购物车</a>

        <a href="#" @mouseover="collect">❤</a>

        <a href="#" @mouseover="purse">￥</a>
        <a href="#" @mouseover="history">😍</a>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      myelstyle: ""
    };
  },
  methods: {
    buy() {}
  }
};
</script>
<style lang='scss' scoped>
.box {
  width: 35px;
  padding: 0 2px;
  height: 400px;
  background-color: black;
  display: flex;
  align-items: center;
  position: relative;
  nav {
    position: relative;
    a {
      text-decoration: none;
      display: block;
      font-size: 20px;
      color: white;
      margin: 20px 0px;
    }
    a:nth-child(1) {
      padding: 5px 0;
      border-top: 1px solid rgb(158, 158, 158);
      border-bottom: 1px solid rgb(158, 158, 158);
    }
    a:hover {
      background-color: red;
    }
  }

}
</style>

