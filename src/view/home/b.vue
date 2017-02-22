<template>
    <div>
        <div class = "b">this is template {{msg}}</div>
    </div>
</template>
<style>
    .b{
        width:200px;
        height:200px;
    }
</style>
<script>
    export default{
        data(){
            return{
                msg:'hello b'
            }
        },
        components:{
        }
    }
</script>
