<template>
	<div class="home">
		<v-container>
			<v-row class="m-0" v-if="$vuetify.breakpoint.smAndUp">
				<v-col cols="4">
					<v-breadcrumbs :items="items" divider=">"></v-breadcrumbs>
				</v-col>
				<v-col cols="8" class="text-left">
					<span class="form_alert">
						לא סיימת למלא את פרטיך. אנא לחצ/י כאן כדי לסיים את מילוי הפרטים
						<span>!</span>
					</span>
					<router-link to="/newapplication" class="goto_form">+ בקשה חדשה</router-link>
				</v-col>
			</v-row>
			<div v-if="$vuetify.breakpoint.xsOnly">
				<h1 class="mobile_title">בוקר טוב דני</h1>
			</div>
		</v-container>
		<v-container class="main_box">
			<v-row>
				<v-col sm="6" cols="12" class="order-first">
					<h2 class="main_title">עדכונים</h2>
					<ul class="list-unstyled updates">
						<li v-for="update in updates" :key="update.index">
							<span>{{ update.date }}</span>
							{{ update.data }}
						</li>
					</ul>
				</v-col>
				<v-col sm="6" cols="12" class="order-last">
					<div class="mobile_bg">
						<div class="upcoming_payslip">
							<img src="../assets/pocket.png" alt="pocket" class="pocket" />
							<p>
								בתלוש השכר הקרוב
								<br />הנך אמורה לקבל:
								<span>5,638 ₪</span>
							</p>
						</div>
						<ul class="list-inline home_mobile_navigation text-center" v-if="$vuetify.breakpoint.xsOnly">
							<li v-for="link in links" :key="link.index">
								<router-link :to="link.link">
									<img :src="link.img" alt="files" />
									<span>{{link.text}}</span>
								</router-link>
							</li>
						</ul>
					</div>
				</v-col>
			</v-row>
			<div v-if="$vuetify.breakpoint.smAndUp">
				<div class="border_bottom mt-30"></div>
				<v-row class="mt-30">
					<v-col cols="12">
						<h2 class="main_title d-inline-block req_title">בקשות לתשלום</h2>
						<ul class="list-inline d-inline-block requests">
							<li
								v-for="request in requests"
								:key="request.index"
								:class="[{ active: request.isActive }, request.color]"
								:id="request.filter"
								@click="filterTable(request, $event)"
							>
								<span>{{ request.count }}</span>
								{{ request.type }}
							</li>
						</ul>
						<v-simple-table class="mt-40">
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
									<tr
										v-for="item in table_data"
										:key="item.name"
										v-show="item.experience == filtertabledata || filtertabledata == 'all'"
									>
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
						<v-pagination v-model="page" :length="2"></v-pagination>
					</v-col>
				</v-row>
			</div>
		</v-container>
	</div>
</template>

<script>
	import img1 from "../assets/files.png";
	import img2 from "../assets/plus.png";
	import img3 from "../assets/hand.png";
	// @ is an alias to /src

	export default {
		name: "ApplicationsList",
		components: {},
		data() {
			return {
				page: 1,
				pageCount: 0,
				itemsPerPage: 2,
				items: [
					{
						text: "בית",
						disabled: false,
						href: "/"
					}
				],
				updates: [
					{
						date: "12.2.19",
						data: "בקשתך “2 שעות שיוק אינטרנטי,” עבור הלקוח ש.ד. מדפסות, אושרה"
					},
					{
						date: "12.2.19",
						data: "בקשתך “2 שעות שיוק אינטרנטי,” עבור הלקוח ש.ד. מדפסות, אושרה"
					},
					{
						date: "12.2.19",
						data: "בקשתך “2 שעות שיוק אינטרנטי,” עבור הלקוח ש.ד. מדפסות, אושרה"
					},
					{
						date: "12.2.19",
						data: "בקשתך “2 שעות שיוק אינטרנטי,” עבור הלקוח ש.ד. מדפסות, אושרה"
					}
				],
				links: [
					{ text: "בקשות", img: img3, link: "/request" },
					{ text: "בקשה חדשה", img: img2, link: "/newapplication" },
					{ text: "תלושי שכר", img: img1, link: "/paychecklist" }
				],
				filtertabledata: "all",
				requests: [
					{
						count: "27",
						type: "כל הבקשות",
						color: "",
						filter: "all",
						isActive: true
					},
					{
						count: "16",
						type: "מאושרות",
						color: "aqua",
						filter: "happy",
						isActive: false
					},
					{
						count: "7",
						type: "בטיפול",
						color: "gray",
						filter: "treatment",
						isActive: false
					},
					{
						count: "4",
						type: "נדחו",
						color: "pink",
						filter: "rejected",
						isActive: false
					}
				],
				headers: [
					{ text: "הלקוח", value: "customer" },
					{ text: "תאריך", value: "date" },
					{ text: "תיאור העבודה", value: "description" },
					{ text: "סכום", value: "amount" },
					{ text: "סטטוס", value: "status" },
					{
						text: "link",
						value: ""
					}
				],
				table_data: [
					{
						customer: "א.א. מדפסות בע”מ",
						date: "4.5.2019",
						description: "ייעוץ 25 שעות בתחום השיווק הגידיטלי",
						amount: "9,600 ₪",
						status: "נשלחה",
						link: "/individualapplication",
						experience: "happy",
						color: "aqua"
					},
					{
						customer: "א.א. מדפסות בע”מ",
						date: "4.5.2019",
						description: "ייעוץ 25 שעות בתחום השיווק הגידיטלי",
						amount: "9,600 ₪",
						status: "נשלחה",
						link: "/individualapplication",
						experience: "treatment",
						color: "gray"
					},
					{
						customer: "א.א. מדפסות בע”מ",
						date: "4.5.2019",
						description: "ייעוץ 25 שעות בתחום השיווק הגידיטלי",
						amount: "9,600 ₪",
						status: "נשלחה",
						link: "/individualapplication",
						experience: "rejected",
						color: "pink"
					},
					{
						customer: "א.א. מדפסות בע”מ",
						date: "4.5.2019",
						description: "ייעוץ 25 שעות בתחום השיווק הגידיטלי",
						amount: "9,600 ₪",
						status: "נשלחה",
						link: "/individualapplication",
						experience: "treatment",
						color: "gray"
					},
					{
						customer: "א.א. מדפסות בע”מ",
						date: "4.5.2019",
						description: "ייעוץ 25 שעות בתחום השיווק הגידיטלי",
						amount: "9,600 ₪",
						status: "נשלחה",
						link: "/individualapplication",
						experience: "happy",
						color: "aqua"
					},
					{
						customer: "א.א. מדפסות בע”מ",
						date: "4.5.2019",
						description: "ייעוץ 25 שעות בתחום השיווק הגידיטלי",
						amount: "9,600 ₪",
						status: "נשלחה",
						link: "/individualapplication",
						experience: "treatment",
						color: "gray"
					}
				]
			};
		},
		methods: {
			filterTable(request) {
				this.filtertabledata = request.filter;
				this.requests.forEach(function(entry) {
					entry.isActive = false;
				});
				request.isActive = true;
			}
		}
	};
</script>

<style scoped>
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
		cursor: pointer;
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
	.requests li.active span {
		font-weight: bold;
	}
	.req_title {
		top: 5px;
		margin-left: 70px;
		position: relative;
	}

	@media (max-width: 1279px) {
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
	}
	@media (max-width: 959px) {
		.updates li {
			font-size: 14px;
			position: relative;
			padding-right: 70px;
			line-height: 20px;
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
		.theme--light.v-data-table thead tr th,
		.theme--light.v-data-table__wrapper td,
		.v-data-table td,
		.v-data-table th {
			font-size: 14px;
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
	}
	@media (max-width: 599px) {
		.homepage .mobile_title {
			left: auto;
			right: 30px;
		}
		.homepage .order-first {
			order: 13 !important;
		}
		.homepage .order-last {
			order: -1 !important;
			padding-bottom: 0;
		}
		.updates {
			margin-top: 10px;
			padding-right: 30px;
			background: url(../assets/dotted.png);
			background-position: right;
			background-repeat: no-repeat repeat;
			background-size: contain;
		}
		.mobile_bg:after {
			content: "";
			position: absolute;
			background: rgba(0, 0, 0, 0.24);
			height: 100%;
			left: -30px;
			right: -30px;
			top: -12px;
			z-index: -1;
		}
		.mobile_bg {
			position: relative;
			padding-bottom: 15px;
		}
		.home_mobile_navigation li a img {
			width: auto;
			display: block;
			margin: 0 auto 5px;
			height: 25px;
		}
		.home_mobile_navigation li:nth-child(2) {
			background: rgba(0, 0, 0, 0.32);
		}
		.home_mobile_navigation li {
			width: 85px;
			height: 85px;
			background: rgba(0, 0, 0, 0.15);
			margin: 0 10px;
			text-align: center;
			border-radius: 50%;
			position: relative;
			vertical-align: middle;
		}
		.home_mobile_navigation {
			padding: 15px 0;
		}
		.list-inline li a {
			display: block;
			color: #fff;
			font-weight: bold;
			text-decoration: none;
			position: absolute;
			top: 50%;
			-webkit-transform: translate(0, -50%);
			transform: translate(0, -50%);
			left: 0;
			right: 0;
			font-size: 12px;
		}
		.upcoming_payslip .pocket + p {
			margin-top: 0;
		}
		.pocket {
			top: auto;
			position: relative;
			right: auto;
			left: 20px;
			width: 50px;
		}
		.upcoming_payslip {
			height: auto;
			padding: 10px;
			background: transparent;
			border-radius: 0;
			display: flex;
			align-items: center;
			left: 0;
			margin-bottom: 0;
			position: relative;
		}
		.upcoming_payslip:after {
			content: "";
			position: absolute;
			background: rgba(0, 0, 0, 0.12);
			left: -30px;
			right: -30px;
			display: block;
			height: 100%;
		}
		.upcoming_payslip p span {
			position: absolute;
			font-size: 24px;
			color: #fff;
			line-height: 0;
			right: 70%;
			width: max-content;
			top: auto;
		}
	}
	@media (max-width: 360px) {
		.upcoming_payslip .pocket + p {
			margin-right: -15px;
			font-size: 13px;
		}
		.upcoming_payslip p span {
			font-size: 21px;
		}
		.home_mobile_navigation li {
			width: 80px;
			height: 80px;
			margin: 0 3px;
		}
	}
</style>
