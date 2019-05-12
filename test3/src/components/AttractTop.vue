<template>
  <div class="bbox">
    <div class="items">
          <a >凉拌装</a>
          <a >企业采购</a>
          <a >bbbto</a>
          <a  @mouseover="isactive" @mouseleave="outactive">购物车</a>
        
    </div>  
    <div v-show="navactive" class="item2">
        <p><span>商品</span><span>数量</span><span>价格</span><span>删除</span></p>
        <p>天猫超市</p>
        <p><img src="" alt=""><button>-</button><button>+</button></p>
        <hr>
        <p><span>合计</span></p>
        <p><button></button></p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navactive: false
    };
  },
  methods:{
      isactive(){
          this.navactive = true;
      },
      outactive(){
          this.navactive  = false;
      }
  }
};
</script>
<style lang="scss" scoped>
  .bbox{
    width: 800px;
    background-color:black;
    color: white;
    height: 50px;
    text-align: center;
    .items{
      a{
        display: inline-block;
        border-right: 1px solid rgb(206, 206, 206);
        padding: 1px 2px;
        font-size: 18px;
        text-decoration: none;
        color: white;
        background-color: black;
      }
    }
  }
</style>

