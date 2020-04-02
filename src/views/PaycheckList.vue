<template>
	<div class="paychecklist">
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
				<h1 class="mobile_title">תלושי שכר</h1>
				<router-link to="/">
					<img src="../assets/back.png" class="back_arrow" alt />
				</router-link>
			</div>
		</v-container>
		<v-container class="main_box">
			<v-row v-if="$vuetify.breakpoint.smAndUp">
				<v-col cols="12">
					<h2 class="main_title">תלושי שכר</h2>
					<v-simple-table class="mt-20">
						<template v-slot:default>
							<thead>
								<tr>
									<th>חודש</th>
									<th>תאריך הנפקה</th>
									<th>סכום</th>
									<th>סטטוס</th>
									<th></th>
								</tr>
							</thead>
							<tbody>
								<tr v-for="item in table_data" :key="item.name">
									<td>{{ item.month }}</td>
									<td>{{ item.date }}</td>
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
				</v-col>
			</v-row>
			<v-row v-if="$vuetify.breakpoint.xsOnly">
				<v-col cols="12">
					<ul class="list-unstyled">
						<li v-for="item in table_data" :key="item.index">
							<div class="bg"></div>
							<router-link to="/individualpaycheck">
								<span>{{item.amount}}</span>
								{{item.month}}
							</router-link>
						</li>
					</ul>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
	// @ is an alias to /src

	export default {
		name: "PaycheckList",
		components: {},
		data() {
			return {
				page: 1,
				items: [
					{
						text: "בית",
						disabled: false,
						href: "/"
					},
					{
						text: "תלושי שכר",
						disabled: true,
						href: "/"
					}
				],
				table_data: [
					{
						month: "ינואר 19’",
						date: "10.2.2019",
						amount: "9,600 ₪",
						status: "שולם",
						link: "/individualpaycheck"
					},
					{
						month: "ינואר 19’",
						date: "10.2.2019",
						amount: "9,600 ₪",
						status: "שולם",
						link: "/individualpaycheck"
					},
					{
						month: "ינואר 19’",
						date: "10.2.2019",
						amount: "9,600 ₪",
						status: "שולם",
						link: "/individualpaycheck"
					},
					{
						month: "ינואר 19’",
						date: "10.2.2019",
						amount: "9,600 ₪",
						status: "שולם",
						link: "/individualpaycheck"
					},
					{
						month: "ינואר 19’",
						date: "10.2.2019",
						amount: "9,600 ₪",
						status: "שולם",
						link: "/individualpaycheck"
					},
					{
						month: "ינואר 19’",
						date: "10.2.2019",
						amount: "9,600 ₪",
						status: "שולם",
						link: "/individualpaycheck"
					},
					{
						month: "ינואר 19’",
						date: "10.2.2019",
						amount: "9,600 ₪",
						status: "שולם",
						link: "/individualpaycheck"
					},
					{
						month: "ינואר 19’",
						date: "10.2.2019",
						amount: "9,600 ₪",
						status: "שולם",
						link: "/individualpaycheck"
					},
					{
						month: "ינואר 19’",
						date: "10.2.2019",
						amount: "9,600 ₪",
						status: "שולם",
						link: "/individualpaycheck"
					},
					{
						month: "ינואר 19’",
						date: "10.2.2019",
						amount: "9,600 ₪",
						status: "שולם",
						link: "/individualpaycheck"
					}
				]
			};
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
		font-weight: bold;
		line-height: 40px;
	}
	.req_title {
		top: 5px;
		margin-left: 70px;
		position: relative;
	}
	.theme--light.v-data-table thead tr th,
	.theme--light.v-data-table__wrapper td,
	.v-data-table td,
	.v-data-table th {
		text-align: right;
		font-size: 18px;
		color: #313131;
		padding: 0;
	}
	.theme--light.v-data-table thead tr:last-child th {
		border-bottom: 2px solid #00e3d5;
		font-weight: 600;
	}
	.theme--light.v-data-table
		tbody
		tr:not(:last-child)
		td:not(.v-data-table__mobile-row) {
		border-bottom: 0;
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
		.col-12 {
			padding-top: 0;
			padding-bottom: 0;
		}
		ul {
			border-radius: 25px 25px 0 0;
			overflow: hidden;
		}
		ul li {
			padding: 20px 15px;
			margin-bottom: 5px;
			border-radius: 3px;
			font-size: 18px;
			position: relative;
			z-index: 2;
		}
		ul li a {
			color: inherit;
			text-decoration: none;
		}
		ul li .bg {
			width: 100%;
			height: 100%;
			background: #4cdbc0;
			position: absolute;
			left: 0;
			top: 0;
			border-radius: 3px;
			z-index: -1;
		}
		ul li span {
			font-weight: 700;
			color: #40ac91;
			font-size: 21px;
			float: left;
			margin-top: -3px;
		}
		ul li:first-child .bg {
			opacity: 0.1;
		}
		ul li:nth-child(2) .bg {
			opacity: 0.15;
		}
		ul li:nth-child(3) .bg {
			opacity: 0.2;
		}
		ul li:nth-child(4) .bg {
			opacity: 0.25;
		}
		ul li:nth-child(5) .bg {
			opacity: 0.3;
		}
		ul li:nth-child(6) .bg {
			opacity: 0.35;
		}
		ul li:nth-child(7) .bg {
			opacity: 0.4;
		}
		ul li:nth-child(8) .bg {
			opacity: 0.45;
		}
		ul li:nth-child(9) .bg {
			opacity: 0.5;
		}
		ul li:nth-child(10) .bg {
			opacity: 0.55;
		}
		ul li:nth-child(11) .bg {
			opacity: 0.6;
		}
		ul li:nth-child(12) .bg {
			opacity: 0.65;
		}
		ul li:nth-child(13) .bg {
			opacity: 0.7;
		}
		ul li:nth-child(14) .bg {
			opacity: 0.75;
		}
		ul li:nth-child(15) .bg {
			opacity: 0.8;
		}
		ul li:nth-child(16) .bg {
			opacity: 0.85;
		}
		ul li:nth-child(17) .bg {
			opacity: 0.9;
		}
		ul li:nth-child(18) .bg {
			opacity: 0.95;
		}
		ul li:nth-child(19) .bg {
			opacity: 1;
		}
		.main_box {
			max-height: calc(100vh - 65px);
			overflow: scroll;
		}
	}
</style>
