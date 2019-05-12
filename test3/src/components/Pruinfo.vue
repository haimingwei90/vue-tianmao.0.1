<template>
  <div class="box">
    <p @click="goback">goback！！</p>
    <div class="dianpu-nav">
      <span>店铺首页</span>
      <span>全部宝贝</span>
      <span>热卖口味</span>
      <span>新品上市</span>
      <span>品牌故事</span>
    </div>
    <div class="pruduct-box">
      <div class="pruduct">
        <div style="width:350px;height:350px;margin-top:5px;" class="pruduct-img">
          <imgbig :previewImg="cpruduct.imgurl" :zoomImg="cpruduct.imgurl"></imgbig>
        </div>
        <div style="height:100px;width:350px;border:1px solid black" class="pruduct-list">
          <img :src="cpruduct.imgurl" style="windth:70px;height:90px">
        </div>
      </div>
      <div class="pruduct-right">
        <p>{{cpruduct.name}}</p>
        <p style="color:red">不添加防腐剂、人工色素及人工香精</p>
        <div class="pruduct-price">
          <span>价格</span>
          <span>￥{{cpruduct.disprice}}</span>
        </div>
        <div class="pruduct-pingjia">
          <a>
            累计评价
            <span style="color:red">735</span>
          </a>
          <span>
            送天猫积分
            <span style="color:red">99</span>
          </span>
        </div>
        <div class="pruduct-num">
          <span>数量</span>
          <input type="text" v-model="num">
          <button @click="numplus">+</button>
          <button @click="numdis">-</button>
        </div>
        <div class="pruduct-buy">
          <button>立即购买</button>
          <button>加入购物车</button>
        </div>
        <div class="pruduct-fuwu">
          <p>
            <a>服务承诺</a>
            <a href="#">7天无理由退货</a>
            <a href="#">正品保证</a>
            <a href="#">支付方式</a>
          </p>
        </div>
      </div>
    </div>
    <div class="dianpu">
      <div class="dianpu-left">
        <div class="dianpu-desc">
          <div class="dianpu-name">
            <h4>tiptop冰雪专卖店</h4>
          </div>
          <div class="dianpu-jibie">
            <h4>天猫3年店</h4>
            <p>
              <span>描述</span>
              <span>服务</span>
              <span>物流</span>
            </p>
            <p>
              <span>4.8↑</span>
              <span>4.8↑</span>
              <span>4.8↑</span>
            </p>
          </div>
          <div class="dianpu-bt">
            <a href="#">进店逛逛</a>
            <button>收藏店铺</button>
          </div>
        </div>
      </div>
      <div class="dianpu-right">
        <div>
            <span ref='tabdesc' @click="tabdesc">商铺详情</span ><span ref='tabpingjia' @click="tabpingjia">累计评价</span>
        </div> 
        <keep-alive>
            <component v-bind:is="currentTabComponent"></component>
        </keep-alive>
      </div>
    </div>
  </div>
</template>
<script>
import Imgbig from "./Imgbig.vue";
import Tabdesc from './pruduct/Tabdesc';
import Tabpingjia from './pruduct/Tabpingjia'
export default {
  props: ["cpruduct"],
  components: {
    Imgbig,
    Tabdesc,
    Tabpingjia
  },
  data() {
    return {
      num: 1,
      currentTabComponent:'Tabdesc'
    };
  },
  methods: {
    goback() {
      this.$emit("goback");
    },
    numplus() {
      this.num++;
    },
    numdis() {
      this.num--;
      if (this.num < 1) {
        this.num = 1;
      }
    },
    tabdesc(){
       console.log( this.$refs.tabdesc);
       let descdom = this.$refs.tabdesc;
       descdom.css({
         'color':'red'
       })
       this.currentTabComponent ='Tabdesc'
    },
    tabpingjia(){
        this.currentTabComponent ='Tabpingjia'
    }
  }
};
</script>
<style lang='scss' scoped>
.dianpu-nav {
  line-height: 50px;
  color: white;
  text-align: center;
  background-color: rgb(5, 110, 201);
}
.dianpu-nav span {
  margin-right: 50px;
}
.pruduct {
  flex-basis: 400px;
  height: 470px;
  width: 360px;
}

.pruduct-list {
  margin-top: 2px;
  img {
    margin: 2px;
  }
  img:hover {
    border: 2px solid black;
  }
}
.pruduct-box {
  display: flex;
  justify-content: center;
  .pruduct-right {
    padding: 20px auto;

    min-width: 500px;
    height: 470px;
    .pruduct-buy {
      margin-top: 3px;
      button:nth-child(1) {
        color: red;

        background-color: rgb(241, 168, 168);
      }
      button {
        border: 1px solid red;
        display: inline-block;
        line-height: 35px;
        width: 200px;
        margin: 2px 3px;
        font-size: 20px;
      }
      button:nth-child(2) {
        background-color: red;
      }
    }
    .pruduct-price {
      text-align: justify;
      margin: 30px 0;
      background-color: rgb(198, 202, 202);
      font-size: 20px;

      text-align: center;
      span:nth-child(2) {
        color: red;
      }
    }
    .pruduct-pingjia {
      margin: 30px 0;
      margin-top: 10px;
      border-top: 1px dotted black;
      border-bottom: 1px dotted black;
      color: #c5c2c2;
      a {
        margin-right: 20px;
        text-decoration: none;
      }
    }
    .pruduct-num {
      margin: 30px 0;

      font-size: 18px;
      color: #c5c2c2;
      button {
        margin: 2px;
      }
    }
    .pruduct-fuwu {
      margin-top: 50px;
      a {
        text-decoration: none;
        margin: 2px 5px;
      }
    }
  }
}
.dianpu {
  display: flex;
  margin-top: 5px;
  border-top: 1px solid rgb(187, 185, 185);
  .dianpu-left {
    margin-top: 40px;
    width: 300px;
    .dianpu-desc {
      border: 1px solid rgb(187, 185, 185);
      .dianpu-name {
        height: 40px;
        border-bottom: 1px solid rgb(187, 185, 185);
        background-color: rgb(187, 185, 185);
      }
      .dianpu-jibie {
        p:nth-child(3) {
          color: red;
        }
        p {
          span {
            margin: 2px;
          }
        }
      }
      .dianpu-bt {
        a {
          text-decoration: none;
          color: black;
          background-color: rgb(133, 134, 134);
        }
        button {
          border: 1px solid rgb(187, 185, 185);

          background-color: rgb(212, 209, 209);
        }
      }
    }
  }
  .dianpu-right {
    margin-top: 40px;
    margin-left: 3px;
    width: 100%;
    border-top: 1px solid rgb(187, 185, 185);
  }
}
</style>

