<template>
    <div class = "swiper">
        <div class = "wapper" :style = "'width:'+widths+'px;-webkit-transform:translate3d('+translateX+'px,0px,0px)'">
            <template v-for = "item in swiperData">
                <div @touchstart="_onTouchStart" class = "sliders" :style = "'width:'+width+'px'">
                    {{item.item}}
                </div>
            </template>
        </div>
    </div>
</template>
<style scoped >
.swiper{
    height:200px;
    width:100%;
    overflow: hidden;
}
.wapper{
    height: 100%;
    transition-timing-function: ease;
    -webkit-transition-duration: 0.5s;
 }
.sliders{
    width: 100%;
    height: 100%;
    float: left;

}
.sliders:nth-of-type(1){
    background-color: antiquewhite;
}
.sliders:nth-of-type(2){
    background-color: aqua;
}
.sliders:nth-of-type(3){
    background-color: firebrick;
}
.sliders:nth-of-type(4){
    background-color: darkblue;
}
.sliders:nth-of-type(5){
    background-color: saddlebrown;
}
</style>
<script>
    const getTouchPositionStart = function (e) {
        if (e.type === 'touchstart') {
            return e.touches[0].pageX
        }
        // TODO
        // 进行更高精度的判断
        return e.pageX
    }
    const getTouchPositionMove = function (e) {
        if (e.type === 'touchmove') {
            return e.touches[0].pageX
        }
        // TODO
        // 进行更高精度的判断
        return e.pageX
    }
    const getTouchPositionEnd = function (e) {
        if (e.type === 'touchend') {
            return e.changedTouches[0].pageX
        }
        // TODO
        // 进行更高精度的判断
        return e.pageX
    }

    const _ = {
        on (type, handler) {
            document.body.addEventListener(type, handler, false)
        },
        off (type, handler) {
            document.body.removeEventListener(type, handler)
        }
    }
    export default{
        props: ['swiperData'],
        data(){
            return{
                widths:0,
                width:0,
                length:0,
                timer:"",
                translateX:0,
                TOUCH:{
                    startX:0,
                    endX:0,
                    distance:0,
                    translateEndX:0
                }
            }
        },
        components:{
        },
        methods: {
            init () {
                this.length=this.swiperData.length
                this.width=document.body.clientWidth
                this.widths=document.body.clientWidth*this.length;
                document.addEventListener('touchmove', this._onTouchMove, false);
                document.addEventListener('touchend', this._onTouchEnd, false);
                this._onTouchMove = this._onTouchMove.bind(this);
                this._onTouchEnd = this._onTouchEnd.bind(this);

            },
            swiperTouchMove:function (e) {

            },
            _onTouchStart(e) {
//                this.TOUCH.start = getTouchPositionStart(e)
//                this.stopSwiper()
//                console.log(e)
//                console.log("start="+this.TOUCH.start)
            },
            _onTouchMove:function (e) {
//                this.TOUCH.distance = this.TOUCH.start-getTouchPositionMove(e)
//                this.translateX =this.TOUCH.translateEndX- this.TOUCH.distance
//                console.log("move="+this.TOUCH.distance)
            },
            _onTouchEnd:function (e) {
//                this.TOUCH.end = getTouchPositionEnd(e)
//                this.TOUCH.translateEndX=this.translateX
//                this.startSwiper()
//                console.log(e)
//                console.log("end="+this.TOUCH.end)
            },
            startSwiper:function () {
                this.timer = setInterval(()=>{
                    if(this.translateX -this.width<=-this.widths){
                        this.translateX = 0;
                        return;
                    }
                    this.translateX =this.translateX -this.width
                    this.TOUCH.translateEndX = this.translateX
                },2500)
            },
            stopSwiper:function () {
//                clearInterval(this.timer)
            },
        },
        created(){
            this.startSwiper();
            this.init()
        }
    }
</script>
