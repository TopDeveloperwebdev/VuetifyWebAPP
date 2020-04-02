<template>
	<div class="carddetail" data-app>
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
				<h1 class="mobile_title">פרטי כרטיס אשראי</h1>
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
					<div class="form_title mt-50">
						<img src="../assets/card.png" alt="card" class="img-fluid" />
						<h2 class="main_title">פרטי כרטיס אשראי</h2>
					</div>
				</v-col>
			</v-row>
			<form action>
				<v-row class="mt-20">
					<v-col md="4" sm="6" class="pb-0">
						<label for="name">שם בעל הכרטיס</label>
						<v-text-field
							placeholder="שם מלא כפי שמופיע על הכרטיס"
							id="name"
							type="text"
							name="name"
							solo
						></v-text-field>
					</v-col>
				</v-row>
				<v-row>
					<v-col md="4" sm="6" class="pb-0">
						<label for="number">מספר הכרטיס</label>
						<v-text-field placeholder="מספר כרטיס האשראי" id="number" type="text" name="number" solo></v-text-field>
					</v-col>
				</v-row>
				<v-row>
					<v-col md="2" sm="5" class="pb-0">
						<label for="vdate">תוקף הכרטיס</label>
						<v-menu
							v-model="menu1"
							:close-on-content-click="false"
							transition="scale-transition"
							offset-y
							min-width="290px"
						>
							<template v-slot:activator="{ on }">
								<v-text-field placeholder="mm/yy" id="vdate" readonly v-model="month" v-on="on" solo></v-text-field>
							</template>
							<v-date-picker v-model="month" type="month" @input="menu1 = false" no-title scrollable></v-date-picker>
						</v-menu>
					</v-col>
				</v-row>
				<v-row>
					<v-col md="2" sm="5" class="pb-0">
						<label for="cvv">3 ספרות בגב הכרטיס</label>
						<v-text-field placeholder="***" id="cvv" type="text" name="cvv" solo maxlength="3"></v-text-field>
					</v-col>
				</v-row>

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
		name: "CardDetail",
		components: {},
		data() {
			return {
				menu1: "",
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
						href: "/הגדרות"
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
</style>
