<template>
    <div class="app appH">
        <v-header msg='首页'>

        </v-header>
        <div class='swiper'>
            <!--<swipe class="my-swipe">-->
            <!--<swipe-item class="slide1">Slide1</swipe-item>-->
            <!--<swipe-item class="slide2">Slide2</swipe-item>-->
            <!--<swipe-item class="slide3">Slide3</swipe-item>-->
            <!--</swipe>-->
        </div>
        <z-swiper :swiper-data = "data" ></z-swiper>
        <div class="content">
            <img width="50" :src="logo" alt=""> <br>
            vue2-demo
        </div>
        <div  class="content">this is template project</div>
        <z-footer></z-footer>
    </div>
</template>
<style scoped >
    .appH {
        height: 100%;
        transition: transform 1s;

    }
    .my-swipe {
        height: 200px;
        color: #fff;
        font-size: 30px;
        text-align: center;
    }
    .slide1 {
        background-color: #0089dc;
        color: #fff;
    }
    .slide2 {
        background-color: #ffd705;
        color: #000;
    }
    .slide3 {
        background-color: #ff2d4b;
        color: #fff;
    }
    .content {
        text-align: center;
    }
</style>
<script>
    //  import { Swipe, SwipeItem } from 'mint-ui'
    //  import 'mint-ui/lib/swipe/style.css'
    //  import 'mint-ui/lib/Swipe-item/style.css'
    import Swiper from "../../src/components/swiper"
    import Footer from '../components/Footer'
    import login from '../assets/logo.png'
    export default{
        data() {
            return {
                logo: login,
                data:[
                    {item:'slider1'},
                    {item:'slider2'},
                    {item:'slider3'},
                    {item:'slider4'},
                    {item:'slider5'},
                ]
            }
        },
        components: {
            'z-footer': Footer,
            "z-swiper":Swiper,
////      'zh-header': Header,
////      'swipe': Swipe,
////      'swipe-item': SwipeItem
        },
        beforeRouteLeave (to, from, next) {
            // 导航离开该组件的对应路由时调用
            // 可以访问组件实例 `this`
//      next()?
//      console.log(to)
//      console.log(from)
            next()

        },
        methods: {
            submit() {
                this.btn = true
                if (!this.form.id || !this.form.name) return;
                this.$store.dispatch(USER_SIGNIN, this.form)
//        this.$store.commit(USER_SIGNIN,data)
                this.$store.commit('addToCount', this.form)
                this.$router.replace({path: '/home'})
            },
        }
    }
</script>
