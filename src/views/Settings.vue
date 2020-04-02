<template>
	<div class="settings">
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
				<h1 class="mobile_title">הפעלת החשבון</h1>
				<router-link to="/">
					<img src="../assets/back.png" class="back_arrow" alt />
				</router-link>
			</div>
		</v-container>
		<v-container class="main_box">
			<v-row v-if="$vuetify.breakpoint.smAndUp">
				<v-col cols="12">
					<div class="form_title">
						<img src="../assets/setting.png" alt="setting" class="img-fluid" />
						<h2 class="main_title">הגדרות</h2>
					</div>
					<ul class="list-inline settings_selections">
						<li v-for="setting in settings" :key="setting.index">
							<img :src="setting.img" class="img-fluid d-block mx-auto" alt />
							<h4>{{ setting.text }}</h4>
							<router-link :to="setting.link" class="btn_filled">עריכה</router-link>
						</li>
					</ul>
				</v-col>
			</v-row>
			<v-row v-if="$vuetify.breakpoint.xsOnly">
				<v-col cols="12">
					<h2 class="main_title">וולקאם עדי,</h2>
					<h4>
						כדי להתחיל לקבל תשלומים דרך המערכת,
						יש למלא את הטפסים הבאים:
					</h4>
					<ul class="list-inline settings_selections">
						<li v-for="setting in settingsmobile" :key="setting.index">
							<router-link :to="setting.link" class="btn_outline">{{setting.text}}</router-link>
							<p class="hint_text">{{setting.hint}}</p>
						</li>
					</ul>
					<p class="disclosure">*המידע שלך שמור איתנו, ואנחנו מחוייבים לפרטיות שלך</p>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
	// @ is an alias to /src
	import profile from "../assets/profile.png";
	import card from "../assets/card.png";
	import bank from "../assets/bank.png";
	import form101 from "../assets/form101.png";

	export default {
		name: "Settings",
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
						text: "הגדרות",
						disabled: true,
						href: "/settings"
					}
				],
				settings: [
					{
						img: form101,
						text: "טופס 101",
						link: "/form101"
					},
					{
						img: bank,
						text: "פרטי חשבון בנק",
						link: "/bankaccountinfo"
					},
					{
						img: card,
						text: "פרטי אשראי",
						link: "/carddetail"
					},
					{
						img: profile,
						text: "פרופיל ופרטי קשר",
						link: "/profile"
					}
				],
				settingsmobile: [
					{
						text: "טופס 101",
						link: "form101",
						hint: "בשביל להנפיק לך תלושי משכורת"
					},

					{
						text: "פרטי חשבון בנק",
						link: "bankaccountinfo",
						hint: " כדי שנוכל להעביר לך תשלומים"
					},

					{
						text: "פרטי אשראי",
						link: "carddetail",
						hint: " כי חשוב שהכל יהיה מסודר ביננו"
					}
				]
			};
		}
	};
</script>

<style scoped>
	.settings_selections {
		margin-top: 60px;
	}
	.settings_selections li {
		padding: 0 30px;
	}
	.settings_selections li h4 {
		font-size: 24px;
		font-weight: 700;
		color: #00e3d5;
		margin-top: 15px;
		text-align: center;
	}
	.btn_filled {
		height: 36px;
		font-size: 18px;
		font-weight: 600;
		line-height: 36px;
		width: 99px;
		margin: 20px auto 0;
	}
	@media (max-width: 959px) {
		.settings_selections li {
			padding: 0 20px;
		}
		.settings_selections li h4 {
			font-size: 22px;
		}
		.settings_selections .img-fluid {
			max-width: 100%;
			height: 50px;
			width: auto;
		}
	}
	@media (max-width: 767px) {
		.settings_selections li {
			padding: 0 10px;
		}
		.settings_selections li h4 {
			font-size: 18px;
		}
	}
	@media (max-width: 599px) {
		.settings {
			text-align: center;
		}
		.settings h4 {
			font-weight: 400;
			margin-top: 5px;
		}
		.list-inline li {
			display: block;
		}
		.btn_outline {
			border: 2px solid #06d7dd;
			color: #313131;
			font-size: 18px;
			font-weight: 600;
		}
		p.hint_text {
			font-weight: 700;
			margin-top: 5px;
			margin-bottom: 20px;
		}
		.disclosure {
			font-weight: 600;
			margin-top: 100px;
		}
		.settings_selections {
			margin-top: 20px;
		}
	}
</style>
