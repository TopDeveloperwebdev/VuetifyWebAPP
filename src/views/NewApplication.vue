<template>
	<div class="newapplication" data-app>
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
				<h1 class="mobile_title">בקשה חדשה לתשלום</h1>
				<router-link to="/">
					<img src="../assets/back.png" class="back_arrow" alt />
				</router-link>
			</div>
		</v-container>
		<v-container class="main_box">
			<v-row v-if="$vuetify.breakpoint.smAndUp">
				<v-col cols="12">
					<div class="form_title">
						<img src="../assets/edit.png" alt="edit" class="img-fluid" />
						<h2 class="main_title">יצירת בקשה חדשה לתשלום</h2>
					</div>
				</v-col>
			</v-row>
			<form action>
				<v-row class="mt-20">
					<v-col cols="7" class="order_first">
						<label for="pname">שם העבודה / הפרויקט</label>
						<v-text-field
							placeholder="למשל: שיווק עבור לקוח X, לחודש מאי 2019"
							id="pname"
							type="text"
							name="pname"
							solo
						></v-text-field>

						<v-row>
							<v-col sm="8" md="7" cols="12">
								<label for="appamount">סכום הבקשה (לא כולל מע”מ)</label>
								<v-text-field placeholder="0.0 ₪" id="appamount" type="text" name="appamount" solo></v-text-field>
							</v-col>
							<v-col sm="4" md="5" v-if="$vuetify.breakpoint.smAndUp">
								<img src="../assets/triangle.png" alt class="d-block img-fluid float-left mt-40" />
							</v-col>
						</v-row>
					</v-col>
					<v-col cols="5" class="order_last">
						<div class="yellow_box">
							<div>
								<h4>כמה זה יוצא לך?</h4>
								<h3>
									₪7,819
									<span>ברוטו</span>
								</h3>
								<h3>
									₪6,819
									<span>נטו</span>
								</h3>
							</div>
							<img src="../assets/calc.png" alt />
						</div>
					</v-col>
				</v-row>
				<v-row>
					<v-col lg="6" cols="12" class="pt-0">
						<label for class="d-inline-block">האם העבודה הסתיימה / נמסרה ללקוח?</label>
						<div class="d-inline-block">
							<v-radio-group v-model="radioGroup">
								<v-radio label="כן" value="כן"></v-radio>
								<v-radio label="לא" value="לא"></v-radio>
							</v-radio-group>
						</div>
					</v-col>
				</v-row>
				<v-row class="align-baseline">
					<v-col sm="auto" cols="12">
						<label for="job_detail">תיאור העבודה:</label>
					</v-col>
					<v-col class="col-xs-12" md="10" cols="12">
						<v-textarea
							id="job_detail"
							placeholder="למשל: שיווק עבור לקוח X, לחודש מאי 2019"
							:rows="isMobile ? 4 : 1"
							solo
						></v-textarea>
					</v-col>
				</v-row>
				<h3 class="mini_title pr-20 mt-10">פרטי הלקוח</h3>
				<div class="personal_info">
					<v-row class="m-4">
						<v-col md="7" sm="4" class="p-4" cols="12">
							<label for="cname">שם הלקוח (חברה / עוסק)</label>
							<v-text-field placeholder="שם החברה" id="cname" type="text" name="name" solo></v-text-field>
						</v-col>
						<v-col md="5" sm="8" cols="12" class="p-4 pt-0">
							<v-row class="m-4">
								<v-col md="7" sm="6" cols="12" class="p-4">
									<label for="ctype">סוג החברה</label>
									<v-select :items="selection" label="סוג החברה" solo></v-select>
								</v-col>
								<v-col md="5" sm="6" cols="12" class="p-4">
									<label for="number">מספר ח.פ / ע.מ</label>
									<v-text-field id="number" type="text" name="number" solo></v-text-field>
								</v-col>
							</v-row>
						</v-col>
					</v-row>
					<v-row class="align-center m-4">
						<v-col sm="auto" cols="12" class="p-4">
							<label for="pname">כתובת הלקוח:</label>
						</v-col>
						<v-col class="p-4" md="10" cols="12">
							<v-row class="m-4">
								<v-col sm="4" cols="12" class="p-4">
									<label for="city">עיר</label>
									<v-select :items="selection" id="city" name="city" label="סוג החברה" solo></v-select>
								</v-col>
								<v-col sm="4" cols="12" class="p-4">
									<label for="street">רחוב</label>
									<v-select :items="selection1" id="street" name="street" label="סוג החברה" solo></v-select>
								</v-col>
								<v-col sm="4" cols="6" md="2" class="p-4">
									<label for="num">מספר</label>
									<v-text-field id="num" type="text" name="num" solo></v-text-field>
								</v-col>
							</v-row>
						</v-col>
					</v-row>
					<v-row class="align-center m-4">
						<v-col sm="auto" cols="12" class="p-4">
							<label for="pname">פרטי איש הקשר:</label>
						</v-col>
						<v-col class="p-4" md="10" cols="12">
							<v-row class="m-4">
								<v-col sm="4" cols="12" class="p-4">
									<label for="name">שם איש הקשר</label>
									<v-select :items="selection2" id="name" label="סוג החברה" solo></v-select>
								</v-col>
								<v-col sm="3" cols="12" class="p-4">
									<label for="phone">טלפון</label>
									<v-text-field id="phone" type="text" placeholder="טלפון" name="phone" solo></v-text-field>
								</v-col>
								<v-col sm="5" cols="12" class="p-4">
									<label for="email">כתובת מייל</label>
									<v-text-field id="email" type="email" placeholder="mail@mail.com" name="email" solo></v-text-field>
								</v-col>
							</v-row>
						</v-col>
					</v-row>
				</div>
				<div class="form_btn">
					<button class="btn_gray">ביטול</button>
					<button type="submit" class="btn_filled">שליחה</button>
				</div>
			</form>
		</v-container>
	</div>
</template>

<script>
	// @ is an alias to /src

	export default {
		name: "NewApplication",
		components: {},
		data() {
			return {
				radioGroup: "",
				isMobile: false,
				items: [
					{
						text: "בית",
						disabled: false,
						href: "/"
					},
					{
						text: "יצירת בקשה חדשה לתשלום",
						disabled: true,
						href: "/"
					}
				],
				selection: ["סוג החברה 1", "סוג החברה 2", "סוג החברה 3"],
				selection1: ["עיר 1", "עיר 2", "עיר 3"],
				selection2: ["רחוב 1", "רחוב 2", "רחוב 3"]
			};
		},
		beforeDestroy() {
			if (typeof window !== "undefined") {
				window.removeEventListener("resize", this.onResize, { passive: true });
			}
		},

		mounted() {
			this.onResize();
			window.addEventListener("resize", this.onResize, { passive: true });
		},

		methods: {
			onResize() {
				this.isMobile = window.innerWidth < 600;
			}
		}
	};
</script>

<style scoped>
	.yellow_box {
		background: #f3ed83;
		padding: 25px;
		border-radius: 12px;
		margin-top: 25px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-right: 30px;
	}
	.yellow_box img {
		height: fit-content;
	}
	.yellow_box h4 {
		font-size: 26px;
		font-weight: 600;
	}
	.yellow_box h3 {
		font-size: 36px;
		font-weight: 700;
		margin-top: 10px;
	}
	.yellow_box h3 span {
		font-size: 24px;
		font-weight: 400;
	}
	.col-sm-auto label {
		width: 140px;
	}
	.mx-10 {
		margin: 0 10px;
	}
	.updates {
		margin-top: 10px;
	}
	.updates li {
		font-size: 18px;
		line-height: 28px;
	}
	.updates li span {
		font-weight: 700;
		margin-left: 15px;
	}
	.upcoming_payslip {
		background-color: #eaeded;
		position: relative;
		height: 83px;
		border-radius: 0 40px 40px 0;
		margin-bottom: 15px;
		left: -30px;
		padding: 18px 50px;
		font-size: 18px;
		font-weight: 700;
	}
	.pocket {
		position: absolute;
		left: 20px;
		top: -30px;
	}
	.upcoming_payslip p span {
		font-size: 30px;
		font-weight: 700;
		color: #01b6ab;
		position: absolute;
		left: 0;
		right: 7%;
		text-align: center;
		top: 22px;
	}
	.requests li {
		font-size: 18px;
		color: #000000;
		padding: 0 15px;
		text-align: center;
		width: 107px;
		position: relative;
		vertical-align: middle;
	}
	.requests li:not(:first-child):after {
		content: "";
		position: absolute;
		right: 0;
		background: #dbdbdb;
		width: 1px;
		height: 50px;
		top: 50%;
		transform: translate(0, -50%);
	}
	.requests li span {
		display: block;
		font-size: 40px;
		line-height: 40px;
	}
	.requests li:first-child span {
		font-weight: bold;
	}
	.req_title {
		top: 5px;
		margin-left: 70px;
		position: relative;
	}
	.form_btn .btn_gray {
		width: 120px;
	}
	.form_btn .btn_filled {
		width: 200px;
	}
	@media (max-width: 1279px) {
		.col-md-10 {
			-webkit-box-flex: 0;
			-ms-flex: 0 0 80%;
			flex: 0 0 80%;
			max-width: 80%;
		}
		.yellow_box {
			padding: 15px;
		}
		.yellow_box img {
			width: 50px;
			height: auto;
		}
		.updates li span {
			margin-left: 5px;
		}
		.updates li {
			font-size: 14px;
		}
		.upcoming_payslip {
			padding: 14px 25px;
			font-size: 15px;
			height: 65px;
		}
		.upcoming_payslip p span {
			font-size: 22px;
			top: 20px;
		}
		.pocket {
			top: -22px;
			width: 70px;
		}
		.theme--light.v-data-table thead tr th,
		.theme--light.v-data-table__wrapper td,
		.v-data-table td,
		.v-data-table th {
			font-size: 16px;
		}
		.yellow_box h4 {
			font-size: 20px;
		}
		.yellow_box h3 {
			font-size: 28px;
		}
		.yellow_box h3 span {
			font-size: 16px;
		}
	}
	@media (max-width: 959px) {
		.col-sm-auto label {
			width: 114px;
		}
		.newapplication .col {
			padding-top: 0 !important;
		}
		.updates li {
			font-size: 14px;
			position: relative;
			padding-right: 70px;
			line-height: 20px;
			margin-bottom: 10px;
		}
		.mini_title.mt-10 {
			margin-top: 0;
			margin-bottom: 10px;
		}
		.updates li span {
			margin-left: 25px;
			width: 70px;
			margin-right: -70px;
		}
		.upcoming_payslip p span {
			right: 12%;
		}
		.upcoming_payslip {
			margin-bottom: 40px;
		}
	}
	@media (max-width: 767px) {
		.yellow_box {
			margin: 0;
		}
		.col-7.order_first {
			-webkit-box-flex: 0;
			-ms-flex: 0 0 100%;
			flex: 0 0 100%;
			max-width: 100%;
		}
		.col-5.order_last {
			-webkit-box-flex: 0;
			-ms-flex: 0 0 100%;
			flex: 0 0 100%;
			max-width: 100%;
		}
		.yellow_box {
			margin-right: 0;
		}
		.col-sm-auto {
			width: 100%;
			max-width: 100%;
		}
		.personal_info .col-7 {
			-webkit-box-flex: 0;
			-ms-flex: 0 0 33.3333333333%;
			flex: 0 0 33.3333333333%;
			max-width: 33.3333333333%;
		}
		.personal_info .col-5 {
			-webkit-box-flex: 0;
			-ms-flex: 0 0 66.6666666667%;
			flex: 0 0 66.6666666667%;
			max-width: 66.6666666667%;
		}
		.personal_info .col-5 .col-7,
		.personal_info .col-5 .col-5 {
			-webkit-box-flex: 0;
			-ms-flex: 0 0 50%;
			flex: 0 0 50%;
			max-width: 50%;
		}
		.req_title {
			top: auto;
			margin-left: 0;
			margin-bottom: 20px;
		}
		.requests li:first-child {
			padding-right: 0;
		}
		.upcoming_payslip p span {
			right: 25px;
			position: relative;
			top: -5px;
			font-size: 18px;
		}
		.upcoming_payslip {
			height: auto;
		}
		.pocket {
			top: -35px;
			position: relative;
			right: 70%;
		}
		.upcoming_payslip .pocket + p {
			margin-top: -35px;
		}
		.updates li span {
			margin-left: 15px;
			width: 50px;
			margin-right: -60px;
		}
		.updates li {
			padding-right: 50px;
		}
		.col-md-10 {
			flex: 0 0 100%;
			max-width: 100%;
		}
		.col-sm-auto.col-12 {
			padding-top: 0;
			padding-bottom: 0;
		}
		.col-sm-auto.col-12 label {
			margin-bottom: 0;
		}
	}
	@media (max-width: 599px) {
		.col-sm-auto.col-12 label {
			margin-bottom: 5px;
		}
		.col-sm-auto label {
			font-size: 20px !important;
			padding-right: 0;
			font-weight: 700;
			width: auto;
		}
		.col-12,
		.p-4.col-sm-4.col-md-2.col-6 {
			padding: 0 12px;
		}
		.yellow_box {
			padding: 15px;
			border-radius: 12px;
			margin-top: 0;
		}
		.yellow_box h3[data-v-e8836f6c] {
			font-size: 20px;
		}
		.yellow_box h4[data-v-e8836f6c] {
			font-size: 16px;
		}
	}
</style>
