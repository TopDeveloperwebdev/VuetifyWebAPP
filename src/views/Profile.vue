<template>
	<div class="profile" data-app>
		<v-container>
			<v-row class="m-0" v-if="$vuetify.breakpoint.smAndUp">
				<v-col cols="4">
					<v-breadcrumbs :items="items" divider=">"></v-breadcrumbs>
				</v-col>
				<v-col cols="8" class="text-left">
					<router-link to="/newapplication" class="goto_form">+ בקשה חדשה</router-link>
				</v-col>
			</v-row>
			<div v-if="$vuetify.breakpoint.xsOnly">
				<h1 class="mobile_title">פרופיל</h1>
				<router-link to="/settings">
					<img src="../assets/back.png" class="back_arrow" alt />
				</router-link>
			</div>
		</v-container>
		<v-container class="main_box">
			<v-row>
				<v-col cols="12">
					<ul class="list-inline form_progress">
						<li>
							<router-link to="/form101">טופס 101</router-link>
						</li>
						<li>
							<router-link to="/bankaccountinfo">פרטי חשבון</router-link>
						</li>
						<li>
							<router-link to="/carddetail">אשראי</router-link>
						</li>
					</ul>
				</v-col>
			</v-row>
			<v-row v-if="$vuetify.breakpoint.smAndUp">
				<v-col cols="12">
					<div class="form_title">
						<img src="../assets/profile.png" alt="profile" class="img-fluid" />
						<h2 class="main_title">פרופיל ופרטים אישיים</h2>
					</div>
				</v-col>
			</v-row>
			<form action>
				<h3 class="mini_title">פרטים אישיים</h3>
				<v-row>
					<v-col md="4" sm="6" cols="12" class="pb-0">
						<label for="email">כתובת מייל</label>
						<v-text-field placeholder="mail@mail.com" id="email" type="email" name="email" solo></v-text-field>
					</v-col>
				</v-row>
				<v-row>
					<v-col md="4" sm="6" cols="12" class="pb-0">
						<label for="number">טלפון</label>
						<v-text-field placeholder="מספר טלפון" id="number" type="text" name="number" solo></v-text-field>
					</v-col>
				</v-row>

				<h3 class="mini_title mt-20">שינוי סיסמא קיימת</h3>
				<v-row>
					<v-col md="4" sm="6" cols="12" class="pb-0">
						<label for="pwd">סיסמא חדשה</label>
						<v-text-field placeholder="******" id="pwd" type="password" name="password" solo></v-text-field>
					</v-col>
				</v-row>
				<v-row>
					<v-col md="4" sm="6" cols="12" class="pb-0">
						<label for="confirmpwd">סיסמא חדשה (שוב)</label>
						<v-text-field placeholder="***" id="confirmpwd" type="text" name="confirmpassword" solo></v-text-field>
					</v-col>
				</v-row>

				<a href="#" class="red_link">מחיקת חשבון במערכת</a>

				<div class="form_btn" v-if="$vuetify.breakpoint.smAndUp">
					<button class="btn_gray">ביטול</button>
					<button type="submit" class="btn_filled">שליחה</button>
				</div>
				<button
					type="submit"
					class="btn_filled"
					v-if="$vuetify.breakpoint.xsOnly"
				>שלח והמשך לפרטי חשבון בנק</button>
			</form>
			<div class="navigation">
				<router-link to="/form101"></router-link>
				<router-link to="/bankaccountinfo"></router-link>
				<router-link to="/carddetail"></router-link>
				<router-link to="/profile"></router-link>
			</div>
		</v-container>
	</div>
</template>

<script>
	// @ is an alias to /src

	export default {
		name: "Profile",
		components: {},
		data() {
			return {
				month: null,
				items: [
					{
						text: "בית",
						disabled: false,
						href: "/"
					},
					{
						text: "הגדרות",
						disabled: false,
						href: "/settings"
					},
					{
						text: "פרטי כרטיס האשראי",
						disabled: true,
						href: "/"
					}
				]
			};
		}
	};
</script>

<style scoped>
	.form_btn {
		margin-top: 50px;
	}
	.form_btn .btn_gray {
		width: 120px;
	}
	.form_btn .btn_filled {
		width: 200px;
	}
	@media (max-width: 599px) {
		.mini_title {
			margin-top: 20px;
			font-size: 18px;
		}
		.red_link {
			font-size: 14px;
			margin-top: 5px;
		}
	}
</style>
