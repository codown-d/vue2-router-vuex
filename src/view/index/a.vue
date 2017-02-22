<template>
    <div>
        <div class = "a">this is template {{msg}}</div>
    </div>
</template>
<style>
    .a{
        width:200px;
        height:200px;
    }
</style>
<script>
    export default{
        data(){
            return{
                msg:'hello a'
            }
        },
        components:{
        }
    }
</script>
