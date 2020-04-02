<template>
	<div class="individual_app" data-app>
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
				<h1 class="mobile_title">בקשה לתשלום</h1>
				<router-link to="/request">
					<img src="../assets/back.png" class="back_arrow" alt />
				</router-link>
			</div>
		</v-container>
		<v-container class="main_box">
			<v-row class="upper_bg">
				<v-col cols="12">
					<h4 class="app_date">23.4.19</h4>
					<h2 class="main_title">
						ייעוץ 25 שעות
						<br v-if="$vuetify.breakpoint.xsOnly" />בתחום השיווק הדיגיטלי
					</h2>
					<ul class="list-inline status_bar">
						<li>
							נשלח
							<span class="sent_date">23.4.19</span>
						</li>
						<li>בטיפול</li>
						<li>
							חשבונית נשלחה
							<span class="download">
								<img src="../assets/download.png" alt="download" class="vmiddle" /> להורדה
							</span>
						</li>
						<li>שולם</li>
						<li>
							<router-link to="/individualpaycheck">הופק תלוש שכר</router-link>

							<span class="invoice_produced">10.6.19 (הערכה)</span>
						</li>
					</ul>

					<button v-if="$vuetify.breakpoint.xsOnly" class="btn_treatment">בטיפול</button>

					<div class="price_tag">
						<p>
							3,950 ₪
							<span>כולל מע”מ</span>
						</p>
					</div>
					<button class="btn_red btn_cancel" @click.stop="dialog = true">
						ביטול
						(04:39)
					</button>

					<v-dialog v-model="dialog" max-width="600">
						<v-card class="modal">
							<img src="../assets/close1.png" class="close_dialog" @click="dialog = false" alt="Close" />
							<h2 class="mini_title">
								האם הנכם בטוחים שאתם מעוניינים
								<br />למחוק את הפניה?
							</h2>
							<div class="mt-40">
								<button class="btn_gray" @click="dialog = false">ביטול</button>
								<button class="btn_delete" @click="dialog = false">מחיקה</button>
							</div>
						</v-card>
					</v-dialog>
				</v-col>
			</v-row>

			<v-row class="mt-30 user_info">
				<v-col sm="auto" cols="12">
					<div class="d-flex">
						<img src="../assets/user.png" alt="user" style="height: fit-content;" />
						<p class="pr-2 user_name">
							הלקוח:
							<span>
								<br />א.א. מדפסות
								<br />בע”מ
							</span>
						</p>
					</div>
				</v-col>
				<v-col sm="auto" cols="12">
					<p>
						<span>איש הקשר:</span>אלי אדרי
					</p>
					<p>
						<span>טלפון:</span>054-5367890
					</p>
					<p>
						<span>כתובת מייל:</span>mail@mail.com
					</p>
				</v-col>
				<v-col sm="auto" cols="12">
					<p>
						<span>סוג החברה:</span>חברה בע”מ
					</p>
					<p>
						<span>ח.פ:</span>45987834785
					</p>
					<p>
						<span>כתובת:</span>דרך בית לחם 33, ירושלים
					</p>
				</v-col>
			</v-row>
			<v-row class="mt-30">
				<v-col cols="auto">
					<img src="../assets/report.png" alt="report" />
				</v-col>
				<v-col lg="10" sm="11">
					<v-row>
						<v-col sm="auto" cols="12">
							<p class="f20">
								<b>
									תיאור
									<br />הפרויקט:
								</b>
							</p>
						</v-col>
						<v-col lg="10" sm="9" cols="12">
							<p class="f20">
								לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית גולר מונפרר סוברט לורם שבצק יהול,
								<br />לכנוץ בעריר גק ליץ, ושבעגט ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה -
								לתכי מורגם בורק? לתיג ישבעס.
							</p>
						</v-col>
					</v-row>
				</v-col>
				<!-- <v-col sm="auto">
					<p class="f20">
						<b>
							תיאור
							<br />הפרויקט:
						</b>
					</p>
				</v-col>
				<v-col lg="10" md="9" sm="8">
					<p class="f20">
						לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית גולר מונפרר סוברט לורם שבצק יהול,
						<br />לכנוץ בעריר גק ליץ, ושבעגט ליבם סולגק. בראיט ולחת צורק מונחף, בגורמי מגמש. תרבנך וסתעד לכנו סתשם השמה -
						<br />לתכי מורגם בורק? לתיג ישבעס.
					</p>
				</v-col>-->
			</v-row>
			<v-row class="m-0" v-if="$vuetify.breakpoint.xsOnly">
				<v-col cols="12">
					<button class="btn_filled btn_download">
						להורדת החשבונית שנשלחה ללקוח
						<img src="../assets/download2.png" alt="download" />
					</button>
					<button class="btn_red d-block mx-auto mt-40" @click.stop="dialog = true">מחיקת הפניה</button>
					<p class="text-center mt-10">באפשרותך למחוק את הפניה עד 30 דקות מרגע יצירתה</p>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>




<script>
	// @ is an alias to /src

	export default {
		name: "IndividualApplication",
		components: {},
		data() {
			return {
				dialog: false,
				items: [
					{
						text: "בית",
						disabled: false,
						href: "/"
					},
					{
						text: "בקשה לתשלום",
						disabled: true,
						href: "/"
					}
				]
			};
		}
	};
</script>

<style scoped>
	.close_dialog {
		position: absolute;
		cursor: pointer;
		top: 20px;
		right: 20px;
	}
	.modal {
		position: relative;
		min-height: 350px;
		text-align: center;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
	}
	.btn_gray,
	.btn_delete {
		display: inline-block;
		margin: 0 5px;
	}
	.btn_delete {
		width: 160px;
	}
	.btn_gray {
		width: 135px;
	}
	.f20 {
		font-size: 20px;
	}
	.user_info p {
		font-size: 18px;
		margin-bottom: 8px;
	}
	.user_info .col-sm-auto:first-child {
		padding: 0 0 0 40px;
	}
	.user_info .col-sm-auto:not(:first-child) {
		padding: 0 40px 0 80px;
		border-right: 1px solid #b7b7b7;
	}
	.user_info p:not(.user_name) span {
		width: 100px;
		display: inline-block;
	}
	.user_info .pr-2 {
		padding-right: 1.2em;
	}
	.user_info p span {
		font-weight: 700;
	}
	.upper_bg {
		background: #f6f6f6;
		margin: -30px -45px 0 -30px;
		border-radius: 15px 15px 0 0;
		padding: 30px 30px 60px 30px;
	}
	.app_date {
		color: #b6b6b6;
		font-size: 26px;
		font-family: "texgyreadventor-bold";
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
	.price_tag p span {
		font-size: 16px;
		font-weight: 300;
		color: #6b6b6b;
		display: block;
	}
	.status_bar {
		position: relative;
		background: #eaeaea;
		height: 35px;
		border-radius: 30px;
		margin-top: 40px;
		display: inline-block;
	}
	.status_bar:after {
		content: "";
		position: absolute;
		border: 2px solid #00ddb8;
		border-radius: 30px;
		top: -8px;
		bottom: -8px;
		left: -8px;
		right: -8px;
	}
	.status_bar li {
		width: 150px;
		text-align: center;
		line-height: 35px;
		border-radius: 30px 0 0 30px;
		color: #4b4b4b;
		position: relative;
		cursor: pointer;
		z-index: 99;
	}
	.status_bar li a {
		text-decoration: none;
		color: #4b4b4b;
	}
	.status_bar li:first-child {
		background: #00ddb8;
		z-index: 4;
		border-radius: 30px;
		color: #fff;
	}
	.status_bar li:not(:first-child) {
		margin-right: -12px;
	}
	.status_bar li:nth-child(2) {
		background: #cbcbcb;
		z-index: 3;
	}
	.status_bar li:nth-child(3) {
		background: #d6d6d6;
		z-index: 2;
	}
	.status_bar li:nth-child(4) {
		background: #dfdfdf;
		z-index: 1;
	}
	.sent_date {
		font-size: 18px;
		font-weight: 700;
		color: #00ddb8;
	}
	.download {
		color: #00ddb8;
	}
	.status_bar li span {
		position: absolute;
		bottom: -45px;
		text-align: center;
		left: 0;
		right: 0;
	}
	.invoice_produced {
		color: #9a9a9a;
	}
	.btn_cancel {
		position: absolute;
		top: 17%;
		left: 25px;
	}
	@media (max-width: 1279px) {
		.status_bar li {
			width: 120px;
			font-size: 14px;
		}
		.status_bar {
			margin-top: 25px;
		}
		.price_tag {
			height: 80px;
			padding: 15px 30px 5px;
		}
		.price_tag p {
			font-size: 32px;
		}
		.btn_cancel {
			top: 15%;
		}
		.user_info .col-sm-auto:not(:first-child) {
			padding: 0 40px 0 40px;
		}
		p.f20 br {
			display: none;
		}
		.f20 {
			font-size: 17px;
		}
	}
	@media (max-width: 959px) {
		.user_info .col-sm-auto:first-child {
			padding: 0 15px 0 13px;
		}
		.user_info .col-sm-auto:not(:first-child) {
			padding: 0 14px 0 14px;
		}
		.user_info p {
			font-size: 16px;
		}
		.status_bar li {
			width: 110px;
			font-size: 13px;
		}
		.upper_bg {
			margin: -20px -20px 0 -20px;
			padding: 15px 15px 50px 15px;
		}
	}
	@media (max-width: 767px) {
		.app_date {
			font-size: 18px;
		}
		.price_tag p {
			font-size: 24px;
			line-height: 22px;
		}
		.price_tag {
			height: 60px;
			padding: 10px 20px 5px;
			top: 35px;
		}
		.upper_bg {
			margin: -20px -20px 0 -20px;
			padding: 30px 15px 15px 15px;
		}
		.status_bar {
			display: block;
		}
		.btn_cancel {
			position: relative;
			left: auto;
			top: auto;
			margin-top: 50px;
			float: left;
		}
		.user_info p {
			font-size: 14px;
		}
		.user_info p:not(.user_name) span {
			width: 75px;
		}
		.user_info .col-sm-auto:first-child {
			padding: 0 0 0 9px;
		}
		.user_info .col-sm-auto:not(:first-child) {
			padding: 0 9px 0 9px;
		}
		.f20 {
			font-size: 13px;
		}
	}
	@media (max-width: 599px) {
		.v-card:not(.v-sheet--tile):not(.v-card--shaped) {
			border-radius: 45px;
		}
		.modal .mini_title {
			font-weight: 400;
			margin-top: 30px;
		}
		.modal {
			min-height: 230px;
			padding: 0 20px;
		}
		.modal .btn_delete {
			width: 140px;
			font-weight: 400;
			font-size: 16px;
		}
		.modal .btn_gray {
			width: 110px;
			font-weight: 400;
			font-size: 16px;
		}
		.modal .mt-40 {
			margin-top: 30px;
		}
		.close_dialog {
			border-radius: 0 !important;
		}
		.app_date {
			color: #313131;
			font-family: "texgyreadventor-regular";
			font-weight: 300;
		}
		.user_info .col-sm-auto:first-child {
			padding: 0 15px;
		}
		.user_info,
		.user_info + .row {
			margin-left: 0;
			margin-right: 0;
		}
		.user_info p.user_name {
			font-size: 18px;
		}
		.individual_app p.f20 b {
			font-size: 18px;
		}
		.individual_app p.f20 {
			font-size: 16px;
		}
		.individual_app .col-sm-9.col-lg-10.col-12 {
			padding-top: 0;
		}
		.user_info .col-sm-auto:not(:first-child) {
			border-right: 0;
			padding: 0 15px;
			margin-top: 15px;
		}
		.user_info p:not(.user_name) span {
			width: 100px;
		}
		.user_info p {
			font-size: 16px;
		}
		.upper_bg {
			margin: 0;
			padding: 0;
			background: transparent;
		}
		.price_tag,
		.status_bar,
		.btn_cancel {
			display: none;
		}
		.btn_download {
			margin-top: 0;
		}
		.btn_download img {
			vertical-align: middle;
			margin-right: 10px;
		}
		.btn_treatment {
			position: absolute;
			left: 30px;
			top: 30px;
			color: #979797;
			border: 1px solid #979797;
			width: 90px;
			height: 30px;
			border-radius: 30px;
		}
		.col-sm-11.col-lg-10.col .col-sm-auto.col-12 {
			padding-top: 0;
		}
	}
	@media (max-width: 360px) {
		.btn_download img {
			width: 20px;
		}
		.modal .btn_delete {
			width: 120px;
		}
		.modal .btn_gray {
			width: 90px;
		}
		.modal .mini_title {
			font-size: 16px;
		}
	}
</style>
