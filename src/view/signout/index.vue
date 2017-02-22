<style scoped lang = "scss">
	.btn {
		padding: 50px;
		text-align: center;
		button {
            border:0px;
            border-radius: 6px;
            font-size: 18px;
			padding: 10px 16px;
		}
	}
</style>
<template>
	<div>
		<v-header msg="退出">
			<router-link slot="left" to="/">返回</router-link>
		</v-header>
		<div class="btn">
			<button v-on:click="submit">确认退出</button>
		</div>
	</div>
</template>
<script>
	import * as type from '../../store/mutation-types'
    export default {
        methods: {
            submit() {
				this.$store.dispatch(type.USER_SIGNOUT,this.form)
				this.$router.replace({ path: '/login' })
            }
        }
    }
</script>