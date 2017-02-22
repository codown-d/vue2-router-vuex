<style scoped lang = "scss">
	.login {
		padding: 50px 0px 0px 10px;
		text-align: center;
	.line {
		padding: 10px;
		overflow: hidden;
	input {
		line-height: 24px;
		font-size: 20px;
		float: left;
		border: 0px;
		border-bottom:1px;
		width:250px
	}
	div{
		color: #f00;
		line-height: 22px;
		float: right;
	}
	}
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
		<v-header msg="登录">
			<router-link slot="left" to="/">返回</router-link>
		</v-header>
		<form class="login" v-on:submit.prevent="submit">
			<div class="line">	
				<div v-show="btn && !form.id">id不能为空</div>
				<input type="number" placeholder="输入你的id" v-model="form.id">
			</div>
			<div class="line">
				<div v-show="btn && !form.name">用户名不能为空</div>
				<input type="text" placeholder="输入你的用户名" v-model="form.name">
			</div>
			<button>登录</button>
		</form>
	</div>
</template>
<script>
    import * as type from '../../store/mutation-types'
    export default {
        data() {
			return {
				btn: false, //true 已经提交过， false没有提交过
				form: {
					id: '',
					name: ''
				}
			}
		},
		methods: {
			submit() {
				this.btn = true
				if(!this.form.id || !this.form.name) return
				this.$store.dispatch(type.USER_SIGNIN,this.form)
				this.$router.replace({ path: '/home' })
			}
		}
    }
</script>