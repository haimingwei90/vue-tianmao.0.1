<template>
    <div class="carousel-box" id='carousel'>
        <transition-group tag="ul" name="list" class="slider-ul">
            <li v-for="(item,index) in sliders" :key="item.id" v-show="index===currentIndex" @mouseenter="stop" @mouseleave="go"> 
                <a  :alt='item.desc' >
                    <img :src="item.imgurl" >
                </a>
            </li>
        </transition-group>
        <div class="carouse-active">
            <span v-for="(item,index) in sliders" :key="index" :class="{'active':index===currentIndex}" @mouseover="change(index)"></span>
        </div>
    </div>
</template>
<script>
import img from '../assets/5.jpg';
import img2 from '../assets/6.jpg';
import img3 from '../assets/7.jpg';
import img4 from '../assets/8.jpg';
export default {

    data(){
        return{
            timer :'',
            currentIndex : 0,
            sliders :[
               {imgurl:img,desc:'香蕉',id :1},
               {imgurl:img2,desc:'香蕉',id : 2},
               {imgurl:img3,desc:'香蕉',id : 3},
               {imgurl:img4,desc:'香蕉',id : 3},
               
            ] 
        }
    },
    created:function(){
        this.$nextTick(()=>{
            
            this.timer = setInterval(() => {
                this.autoPaly();
            }, 3000);
        })
    },
    methods:{
        go(){
             this.timer = setInterval(() => {
                this.autoPaly();
            }, 3000);
        },
        stop(){
            clearInterval(this.timer);
            this.timer = ''
        },
        change(index){
            this.currentIndex = index;
        },
        autoPaly(){
            this.currentIndex++
            if(this.currentIndex > this.sliders.length-1){
                this.currentIndex = 0;
            }
        }

    }
}

</script>
<style scoped>
    .carousel-box{
        position:relative;
        overflow: hidden;
        height: 500px;
        width: 100%;
    }
    .carousel-box li{
        position:absolute;
        height: 100%;
        width: 100%;

    }
    .carousel-box img {
        height: 100%;
        width: 100%;
        margin: 0px;
    }
    .carousel-box .carouse-active{
        position:absolute;
        margin: 0 auto;
        top:440px;
        width: 100%;
        text-align: center;
        font-size: 0;
        z-index: 998;
    }
    .carouse-active span{
        display: inline-block;
        margin: 0 3px;
        background-color: #b2b2b2;
        height: 6px;
        width:30px;
        cursor: pointer;
    }
    .active{
        background-color:#201f1f;
    }
    .list-enter{
        transform: translateX(100%)
    }
    
    .list-enter-to{
        transition: all 1s ease;
        transform: translateX(0)
    }
    .list-leave{
        transform: translateX(0)
    }
    .list-leave-active{
        transition:all 1s ease;
        transform: translateX(-100%)
    }
</style>



