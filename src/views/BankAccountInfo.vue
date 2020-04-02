<template>
	<div class="bankaccinfo" data-app>
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
				<h1 class="mobile_title">פרטי חשבון</h1>
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
						<img src="../assets/bank.png" alt="bank" class="img-fluid" />
						<h2 class="main_title">פרטי חשבון בנק</h2>
					</div>
				</v-col>
			</v-row>
			<form action>
				<v-row class="mt-20">
					<v-col md="5" sm="6" cols="12" class="pb-0">
						<label for="bankname">שם הבנק</label>
						<v-select :items="selection" placeholder="בחרו בנק" id="bankname" solo></v-select>
					</v-col>
					<v-col md="4" sm="6" cols="12" class="pb-0">
						<label for="branch">סניף</label>
						<v-select :items="selection" placeholder="שם הסניף" id="branch" solo></v-select>
					</v-col>
				</v-row>
				<v-row></v-row>
				<v-row>
					<v-col md="5" sm="6" cols="12" class="pb-0">
						<label for="accnum">מספר חשבון</label>
						<v-text-field placeholder="בחרו בנק" id="accnum" type="text" name="accnum" solo></v-text-field>
					</v-col>
					<v-col md="5" sm="6" cols="12" class="pb-0" v-if="$vuetify.breakpoint.smAndUp">
						<label for="beneficiaryname">שם המוטב-בעל החשבון (במידה ושונה משמך)</label>
						<v-text-field
							placeholder="שם מלא"
							id="beneficiaryname"
							type="text"
							name="beneficiaryname"
							solo
						></v-text-field>
					</v-col>
					<v-col md="5" sm="6" cols="12" class="pb-0" v-if="$vuetify.breakpoint.xsOnly">
						<label for="payee">שם המוטב- בעל החשבון</label>
						<v-select :items="payee" placeholder="שם מלא" id="payee" solo></v-select>
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
		name: "BankAccountInfo",
		components: {},
		data() {
			return {
				payee: [],
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
				],
				selection: [],
				menu1: ""
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
