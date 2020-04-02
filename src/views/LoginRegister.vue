<template>
	<div class="login login_register">
		<v-container>
			<v-row>
				<v-col cols="12">
					<router-link to="/" v-if="$vuetify.breakpoint.smAndUp">
						<img src="../assets/logo1.png" alt="GetBill" class="img-fluid d-block mx-auto" />
					</router-link>
					<h3>
						<span>שמחים שבחרתם</span> Getbill!
					</h3>
					<div class="form">
						<router-link to="/signup" class="btn_filled">הרשמה</router-link>
						<router-link to="/login" class="btn_outline">התחברות</router-link>
					</div>
					<router-link to="/" class="tell_more">ספרו לי עוד</router-link>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
	// @ is an alias to /src

	export default {
		name: "LoginRegister",
		components: {},
		data() {
			return {};
		}
	};
</script>

<style scoped>
	.login {
		padding-top: 10vh;
		height: calc(100vh - 55px);
	}
	.login_register h3 {
		font-size: 35px;
		color: #6f6f6f;
		font-weight: 600;
		text-align: center;
		margin: 20px 0 30px;
	}
	.form {
		margin: 0 auto;
		max-width: 330px;
	}
	.router_link {
		font-size: 18px;
		border-bottom: 2px solid #00e3d5;
		color: #00e3d5;
		text-decoration: none;
		margin-right: 15px;
	}
	@media (max-width: 599px) {
		.login_register {
			background: url(../assets/guys.png) no-repeat;
			background-size: contain;
			padding-top: 70%;
			height: auto;
		}
		.login_register h3 {
			color: #fff;
			font-size: 30px;
		}
		.login_register h3 span {
			display: block;
			font-weight: 300;
		}
		.btn_filled {
			font-size: 22px;
			font-weight: 400;
			width: 80%;
			margin-left: auto;
			margin-right: auto;
			margin-top: 80px;
		}
		.btn_outline {
			color: #00ebd7;
			border: 2px solid #00ebd7;
			font-weight: 400;
			width: 80%;
			margin-left: auto;
			margin-right: auto;
		}
		.tell_more {
			color: #40ac91;
			text-decoration: none;
			padding-bottom: 3px;
			border-bottom: 2px solid #40ac91;
			display: block;
			width: max-content;
			margin: 30px auto 0;
		}
	}

	@media (max-width: 360px) {
		.btn_filled {
			margin-top: 50px;
		}
		.login_register {
			padding-top: 67%;
		}
	}
</style>
