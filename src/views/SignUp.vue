<template>
	<div class="login">
		<div class="login_header"></div>
		<v-container>
			<v-row>
				<v-col cols="12">
					<router-link to="/" v-if="$vuetify.breakpoint.smAndUp">
						<img src="../assets/logo1.png" alt="GetBill" class="img-fluid d-block mx-auto" />
					</router-link>
					<h3>שמחים שבחרת Getbill!</h3>
					<h4>כמה פרטים קטנים כדי שנוכל להתחיל:</h4>
					<form action class="form">
						<label for="name">שם מלא</label>
						<v-text-field placeholder="כפי שמופיע בתעודת הזהות" id="name" type="text" name="name" solo></v-text-field>

						<label for="email">מייל</label>
						<v-text-field
							placeholder="כדי לעדכן אותך בקשר לחשבון שלך"
							id="miles"
							type="email"
							name="email"
							solo
						></v-text-field>

						<label for="password">סיסמא</label>
						<v-text-field
							placeholder="לפחות שמונה תווים; מספרים ואותיות לועזיות"
							id="password"
							type="password"
							name="password"
							solo
						></v-text-field>

						<button type="submit" @click="()=>$router.push('/login')" class="btn_filled">קליק לחשבון שלך</button>
					</form>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
	// @ is an alias to /src

	export default {
		name: "Login",
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
	.login h3 {
		font-size: 35px;
		color: #6f6f6f;
		font-weight: 600;
		text-align: center;
		margin: 20px 0 10px;
	}
	.login h4 {
		font-size: 22px;
		color: #6f6f6f;
		font-weight: 400;
		text-align: center;
		margin-bottom: 30px;
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
		.login {
			padding-top: 0;
			height: auto;
			position: relative;
		}
		.login .container {
			box-shadow: 0 5px 18px rgba(0, 0, 0, 0.34);
			padding: 20px 15px;
			border-radius: 40px 40px 0 0;
			margin-top: -85px;
			z-index: 99;
			position: relative;
			background: #fff;
			border: 0;
			height: auto;
			min-height: calc(100vh - 65px);
		}
		.login_header {
			height: 150px;
			padding-top: 20px;
			background: linear-gradient(134deg, #00ffc0 0%, #01cbfd 100%);
			border-radius: 0 0 70px 70px;
		}
		.login h3 {
			color: #313131;
			font-weight: 700;
			margin: 0 0 8px;
			font-size: 24px;
		}
		.login h4 {
			font-weight: 400;
			font-size: 16px;
		}
		.router_link {
			font-size: 16px;
		}
	}
</style>
