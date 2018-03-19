<template lang="html">
	<li class="dropdown user user-menu">
		<!-- Menu Toggle Button -->
		<a class="dropdown-toggle" data-toggle="dropdown" >
		  <!-- The user image in the navbar-->
		  
		  <!-- hidden-xs hides the username on small devices so only the image appears. -->
		  <span class="hidden-xs" v-if="issigin">
		      <span class="cur">{{name}}</span>
		  </span>
		  <span class="hidden-xs" v-else>
		  	<span @click="sign"  class="cur">注册</span> <span @click="login"  class="cur">登录</span>
		  </span>
		</a>
		<ul  class="dropdown-menu" v-if="issigin" >
			<li class="user-footer">
		    <div class="pull-left">
		      <a class="btn btn-default btn-flat cur" @click="doSignout">注销</a>
		    </div>
		  </li>
		</ul>
		<ul class="dropdown-menu" v-else>
		  <!-- The user image in the menu -->
		  <li class="user-header" id="user-unsignup">
		    <div class="box-body">
		      <div class="form-group">
		        <label for="exampleInputEmail1">用户名</label>
		        <input type="text" class="form-control" id="username" name="username" placeholder="请输入用户名" v-model="username">
		      </div>
		      <div class="form-group">
		        <label for="exampleInputPassword1">密码</label>
		        <input type="password" class="form-control" id="password" name="password" placeholder="请输入密码" v-model="password">
		      </div>
		    </div>
		  </li>
		  <!-- Menu Footer-->
		  <li class="user-footer">
		    <div class="pull-left">
		      <a  class="btn btn-default btn-flat cur">关闭</a>
		    </div>
		    <div class="pull-right">
		      <a class="btn btn-primary btn-flat cur" @click="setBtnInfo">{{flat}}</a>
		    </div>
		  </li>
		</ul>

	</li>
</template>

<script>

	import axios from 'axios'

	export default {
		props:[],
		data(){
			return {
				flat:"注册",
				username:"",
				password:"",
				issigin:false,
				name:null
			}
		},
		mounted(){
			//console.log(localStorage.getItem('token'));
				axios({
					url:'api/users/issignin',
					headers:{
						'X-Access-Token': localStorage.getItem('token')
					}
				})
				.then((result) => {
					if(result.data.data.issignin){
						this.issigin=true
						this.name=result.data.data.username
					}
				})
		},
		methods: {
			sign(){

				this.flat="注册"
			},
			login(){
				this.flat="登录"
			},
			doSignout(){
				localStorage.removeItem('username')
			  localStorage.removeItem('token')
			  location.reload()
			},
			setBtnInfo(){
				if(this.flat=="注册"){
						axios({
						url:'/api/users/signup',
						method:'POST',
						data:{
							username,
							password
						}
					}).then((res) => {
							//console.log(res.data);
					})
				}else{
					axios({
						url:'/api/users/signin',
						method:'POST',
						data: {
							username,
							password
						}
					})
						.then((res) => {
							const d = res.data.data
							console.log(d)
				      if (d.success) {
				        //将username, token 保存在localstorage里
				        localStorage.setItem('username', d.username, {exp : 3600 * 24})
				        localStorage.setItem('token', d.token, {exp : 3600 * 24})

				        // 刷新页面，重新认证
				        location.reload()
				      } else {
				        console.log('登录失败~')
				      }
						})
				}
			}

		}
	}

</script>

<style>
	.cur{
		cursor:pointer;
	}
</style>