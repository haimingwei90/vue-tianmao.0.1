<template>
  <div class="section">
    <div>
      <button @click="addpruduct">添加商品</button>
    </div>
    <div :class="{addbox:isaddbox}" class="tanaddbox">
      <input type="text" placeholder="请输入商品名称" v-model="name">
      <input type="text" placeholder="价格" v-model="price">
      <input type="text" placeholder="折扣价" v-model="disprice">
      <input type="file" ref="up" name="file" accept="image/*">
      <button @click="upload()">加入仓库</button>
    </div>
    <div>
      <div v-for="pruduct in pruducts" :key="pruduct.id">
        <p>
          {{pruduct.name}}
          <button>上架</button>
          <button>下架</button>
        </p>
        <p><img :src="pruduct.imgurl"></p>
      </div>
    </div>
  </div>
</template>
<script>
import mapState from "vuex";

export default {
  data() {
    return {
      formData:new FormData(),
      pruducts:'',
      isaddbox: false,
      name: "",
      price: "",
      disprice: ""
    };
  },
  created:function (){

      this.$axios.get('/pruduct/getpruduct').then(
        e=>{
          this.pruducts = e.data      
        }
      )
  },
 
  methods: {
    update(){
        this.$axios.get('/pruduct/getpruduct').then(
        e=>{
          console.log('update');
          
          console.log(e.data);
          
          this.pruducts = e.data
        }
      )
    },
    addpruduct() {
      this.isaddbox = true;
    },
    async upload(){
      let inputupdom = this.$refs.up;
      let file = inputupdom.files[0];

      this.formData.append("file", file);
      let data = {
        name: this.name,
        price: this.price,
        disprice: this.disprice
      };
      this.formData.append("data", JSON.stringify(data));
      let config = {
        headers: { "Content-Type": "multipart/form-data" }
      };
      await this.$axios.post("/pruduct/addpruduct", this.formData, config).then(e => {
        console.log(e.data);
      });
      this.formData = ''
      this.name = ''
      this.price = ''
      this.disprice = '';
      console.log(inputupdom);
      
      this.update();
    },
  
  }
};
</script>
<style  scoped>
.addbox {
  display: block;
  position: absolute;
  z-index: 9998;
}
</style>


