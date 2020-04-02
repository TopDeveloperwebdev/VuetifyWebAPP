<template>
	<div class="request">
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
				<h1 class="mobile_title">הבקשות שלי</h1>
				<router-link to="/">
					<img src="../assets/back.png" class="back_arrow" alt />
				</router-link>
			</div>
		</v-container>
		<v-container class="main_box">
			<v-row>
				<v-col cols="12">
					<ul class="list-inline requests">
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
					<div class="payslip_info mt-20">
						<v-row
							v-for="paycheck in table_data"
							:key="paycheck.index"
							v-show="
                paycheck.experience == filtertabledata ||
                  filtertabledata == 'all'
              "
							class="align-center"
						>
							<v-col cols="7">
								<router-link to="/individualapplication">
									<span class="company_name">{{ paycheck.date }}</span>
									<p class="mini_title">{{ paycheck.description }}</p>
								</router-link>
							</v-col>
							<v-col cols="5" class="text-left">
								<router-link to="/individualapplication">
									<span :class="paycheck.color + ' price'">
										{{
										paycheck.amount
										}}
									</span>
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
		name: "Request",
		components: {},
		data() {
			return {
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
	.requests li {
		font-size: 12px;
		color: #000000;
		padding: 0 5px 5px;
		text-align: center;
		width: 25%;
		position: relative;
		vertical-align: middle;
		cursor: pointer;
	}
	.requests li.active {
		border-bottom: 2px solid #000;
	}
	.requests li span {
		display: block;
		font-size: 24px;
		line-height: 30px;
	}
	.requests li.active span {
		font-weight: bold;
	}
	.req_title {
		top: 5px;
		margin-left: 70px;
		position: relative;
	}
</style>
