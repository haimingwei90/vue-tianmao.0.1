<template>
  <div class="section">
    <div class="imgtab">
      <p>全国进口大牌任你选</p>
      <div class="imgtab-list">
        <img v-for="(item,index) in dapailist" :key="index" :src="item.img" alt>
      </div>
    </div>
    <div class="dapai"></div>
    <div class="pruducts">
      <div class="pruduct" v-for="pruduct in pruducts" :key="pruduct.id">
        <div class="img">
          <img :src="pruduct.imgurl">
          <p>{{pruduct.name}}</p>
          <div class="info">
            <div class="price">
              <p style="text-decoration: line-through">专柜价：￥{{pruduct.price}}</p>

              <p style="color:rgba(204, 187, 34, 0.74);font-width:bold;">狂欢价：￥{{pruduct.disprice}}</p>
            </div>
            <button @click="buy(pruduct)">立即购买</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import imgp1 from "../assets/img/p1.png";
import imgp2 from "../assets/img/p2.png";
import imgp3 from "../assets/img/p3.png";
import imgp4 from "../assets/img/p4.png";
import imgp5 from "../assets/img/p5.png";
import imgp6 from "../assets/img/p6.png";
import imgp7 from "../assets/img/派.png";
export default {
  data() {
    return {
      pruducts: "",
      dapailist: [
        { img: imgp1 },
        { img: imgp2 },
        { img: imgp3 },
        { img: imgp4 },
        { img: imgp5 },
        { img: imgp6 },
        { img: imgp7 }
      ]
    };
  },
  created: function() {
    this.$axios.get("/pruduct/getpruduct").then(e => {
      this.pruducts = e.data;
    });
  },
  methods: {
    buy(pruduct) {
      this.$emit("buy", pruduct);
    }
  }
};
</script>
<style scoped>
.section {
  padding: 0px 20px;
}
.imgtab-list {
  border-top: 1px dotted black;
  border-bottom: 1px dotted black;
  min-height: 100px;
  display: flex;
  padding: 3px 0;
}
.imgtab > p {
  font-weight: bold;
  font-size: 25px;
}
.pruducts {
  display: flex;
  flex-wrap: wrap;
}
.pruduct {
  width: 310px;
  height: 400px;
  margin: 1px 3px;
}
.img > img {
  width: 310px;
  height: 250px;
}
.img {
  align-content: center;
  border-bottom: 1px solid rgba(204, 187, 34, 0.74);
}
.info button {
  display: inline-block;
  width: 100%;
  background-color: rgba(204, 187, 34, 0.74);
  border: none;
}
</style>

