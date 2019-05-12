
<template>
  <section class="container">
    
    <div class="shade">
     
      <div class="mianban">
        <span @click="qielogin()">登录</span><span @click="qieregister()">注册</span>
        <hr>
        <component v-bind:is="currentTabComponent"></component>
        
      </div>
    </div>
  </section>
</template>
<script>
import Tablogin from './Tablogin'
import Rigister from './Rigister'
export default {
  components:{
    Tablogin,
    Rigister,
  },

  data(){
    return {
      currentTabComponent:'Tablogin',
      
    }
  },
  methods:{
   
    qielogin(){
      this.currentTabComponent = 'Tablogin'
    },
    qieregister(){
      this.currentTabComponent = 'Rigister'
    }
  }
};
</script>

<style scoped>
.shade{
  background-color: bisque;
   min-height: 650px;
   display:flex;
   justify-content: center;
   align-items: center;
}
.mianban span{
      align-content: flex-start;
      margin:0px 20px;
      font-size: 20px;
      padding: 5px;
}


</style>
