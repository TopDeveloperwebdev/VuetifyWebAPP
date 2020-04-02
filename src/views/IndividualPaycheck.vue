<template>
	<div class="individualpaycheck">
		<v-container>
			<v-row class="m-0" v-if="$vuetify.breakpoint.smAndUp">
				<v-col cols="9">
					<v-breadcrumbs :items="items" divider=">"></v-breadcrumbs>
				</v-col>
				<v-col cols="3" class="text-left">
					<router-link to="/newapplication" class="goto_form">+ בקשה חדשה</router-link>
				</v-col>
			</v-row>
			<div v-if="$vuetify.breakpoint.xsOnly">
				<h1 class="mobile_title">
					תלוש שכר
					<span>- ינואר 2019</span>
				</h1>
				<router-link to="/">
					<img src="../assets/back.png" class="back_arrow" alt />
				</router-link>
			</div>
		</v-container>
		<v-container class="main_box">
			<v-row class="mt-40">
				<v-col cols="12 salary_slip">
					<div class="d-inline-block" v-if="$vuetify.breakpoint.smAndUp">
						<h2 class="main_title">תלוש שכר - ינואר 2019</h2>
						<p class="account_paid">שולם לחשבונך בתאריך 23.4.2020</p>
					</div>
					<div v-if="$vuetify.breakpoint.xsOnly">
						<h2 class="main_title">
							4,672 ₪
							<span>(ברוטו)</span>
						</h2>
						<p>
							הועבר לחשבונך מס’ 11787, בבנק הבינלאומי
							<br />בתאריך 23.4.2020
						</p>
					</div>
					<button class="goto_form">
						<span>הורדת התלוש</span>
						<img src="../assets/download2.png" alt />
					</button>
					<div class="price_tag">
						<p>3,950 ₪</p>
					</div>
				</v-col>
			</v-row>

			<v-row class="mt-30 payslip_data">
				<v-col cols="12">
					<h3>
						בקשות שהגשת,
						<br />הכלולות בתלוש השכר:
					</h3>
					<v-simple-table v-if="$vuetify.breakpoint.smAndUp" class="mt-20">
						<template v-slot:default>
							<thead>
								<tr>
									<th>הלקוח</th>
									<th>תאריך</th>
									<th>תיאור העבודה</th>
									<th>סכום</th>
									<th>סטטוס</th>
									<th></th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="item in table_data" :key="item.name">
									<td>{{ item.customer }}</td>
									<td>{{ item.date }}</td>
									<td>{{ item.description }}</td>
									<td>{{ item.amount }}</td>
									<td>{{ item.status }}</td>
									<td>
										<router-link :to="item.link">
											<img src="../assets/arrow.png" alt />
										</router-link>
									</td>
								</tr>
							</tbody>
						</template>
					</v-simple-table>
					<div class="payslip_info" v-if="$vuetify.breakpoint.xsOnly">
						<v-row v-for="paycheck in table_data" :key="paycheck.index" class="align-center">
							<v-col cols="7">
								<router-link to="/individualapplication">
									<span class="company_name">{{ paycheck.date }}</span>
									<p class="mini_title">{{ paycheck.description }}</p>
								</router-link>
							</v-col>
							<v-col cols="5" class="text-left">
								<router-link to="/individualapplication">
									<span class="price">{{ paycheck.amount }}</span>
									<p class="company_name">{{ paycheck.customer }}</p>
								</router-link>
							</v-col>
						</v-row>
					</div>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
	// @ is an alias to /src

	export default {
		name: "IndividualPaycheck",
		components: {},
		data() {
			return {
				items: [
					{
						text: "בית",
						disabled: false,
						href: "/"
					},
					{
						text: "תלושי שכר",
						disabled: false,
						href: "/paychecklist"
					},
					{
						text: "ינואר 2019",
						disabled: true,
						href: "/"
					}
				],
				table_data: [
					{
						customer: "א.א. מדפסות בע”מ",
						date: "4.5.2019",
						description: "ייעוץ 25 שעות בתחום השיווק הגידיטלי",
						amount: "9,600 ₪",
						status: "נשלחה",
						link: "/individualapplication"
					},
					{
						customer: "א.א. מדפסות בע”מ",
						date: "4.5.2019",
						description: "ייעוץ 25 שעות בתחום השיווק הגידיטלי",
						amount: "9,600 ₪",
						status: "נשלחה",
						link: "/individualapplication"
					},
					{
						customer: "א.א. מדפסות בע”מ",
						date: "4.5.2019",
						description: "ייעוץ 25 שעות בתחום השיווק הגידיטלי",
						amount: "9,600 ₪",
						status: "נשלחה",
						link: "/individualapplication"
					},
					{
						customer: "א.א. מדפסות בע”מ",
						date: "4.5.2019",
						description: "ייעוץ 25 שעות בתחום השיווק הגידיטלי",
						amount: "9,600 ₪",
						status: "נשלחה",
						link: "/individualapplication"
					}
				]
			};
		}
	};
</script>

<style scoped>
	.salary_slip .d-inline-block {
		padding-left: 30px;
		border-left: 1px solid #00f8c8;
	}
	.salary_slip .goto_form {
		vertical-align: bottom;
		margin-right: 30px;
		width: 175px;
	}
	.salary_slip .goto_form img {
		vertical-align: middle;
		margin-right: 10px;
	}
	.salary_slip .main_title {
		line-height: 30px;
		margin-bottom: 5px;
	}
	.price_tag {
		background-color: #e2e2e2;
		position: absolute;
		height: 100px;
		border-radius: 0 50px 50px 0;
		left: 0;
		padding: 32px 60px 5px;
		font-size: 18px;
		font-weight: 700;
		top: 60px;
	}
	.price_tag p {
		font-size: 48px;
		color: #636363;
		line-height: 30px;
	}
	.payslip_data h3 {
		font-size: 24px;
		color: #01d5f1;
	}
	.account_paid {
		font-weight: 600;
		position: relative;
		padding-right: 20px;
	}
	.account_paid:after {
		content: "";
		position: absolute;
		right: 0;
		top: 6px;
		width: 11px;
		height: 11px;
		background: #01d5f1;
		border-radius: 50%;
	}
	@media (max-width: 1279px) {
		.price_tag {
			height: 80px;
			padding: 15px 30px 5px;
		}
		.price_tag p {
			font-size: 32px;
		}
	}
	@media (max-width: 959px) {
	}
	@media (max-width: 767px) {
		.price_tag p {
			font-size: 24px;
			line-height: 22px;
		}
		.price_tag {
			height: 60px;
			padding: 10px 20px 5px;
			top: 35px;
		}
		.salary_slip .d-inline-block {
			padding-left: 10px;
		}
		.salary_slip .goto_form {
			margin-right: 10px;
			width: 150px;
		}
		.salary_slip .goto_form img {
			margin-right: 5px;
			width: 20px;
		}
		.individualpaycheck .mt-40 {
			margin-top: 5px;
		}
		.mt-30.payslip_data {
			margin: 0;
		}
		.payslip_data h3 {
			font-size: 16px;
		}
	}
	@media (max-width: 599px) {
		.mobile_title span {
			font-weight: 300;
		}
		.price_tag {
			display: none;
		}
		.goto_form span {
			display: none;
		}
		.salary_slip .goto_form img {
			margin-right: 0;
			width: 26px;
		}
		.salary_slip .goto_form {
			margin-right: 0;
			width: 50px;
			height: 50px;
			position: absolute;
			left: 15px;
			top: 20px;
		}
		.main_title span {
			font-weight: 300;
		}
		.salary_slip {
			padding-top: 0;
		}
		.salary_slip p {
			font-size: 14px;
		}
		.mt-30.payslip_data {
			margin: 0 -12px;
		}
		.individualpaycheck .mt-40 {
			margin-top: 0;
		}
	}
	@media (max-width: 360px) {
		.salary_slip p {
			font-size: 11px;
		}
	}
</style>
