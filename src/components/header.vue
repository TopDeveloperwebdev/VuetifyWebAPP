<template>
	<div class="header" data-app>
		<v-navigation-drawer temporary fixed v-model="sideNav" v-if="$vuetify.breakpoint.xsOnly">
			<ul class="list-unstyled mobile_link_list">
				<li v-for="link in navLink" :key="link.index">
					<router-link :to="link.link">{{link.text}}</router-link>
				</li>
			</ul>
			<v-icon
				@click.native.stop="sideNav = !sideNav"
				:class="{ close_gone: !sideNav }"
				class="close_btn"
			></v-icon>
			<div class="social_media">
				<p>
					הזמינו חברים להנות
					<br />
					<span>מעצמאות בקלות</span> עם GetBill
				</p>
				<ul class="list-inline">
					<li v-for="socialIcon in socialMedia" :key="socialIcon.index">
						<router-link :to="socialIcon.link">
							<img :src="socialIcon.img" :alt="socialIcon.name" />
						</router-link>
					</li>
				</ul>
			</div>
		</v-navigation-drawer>

		<v-toolbar>
			<div class="container">
				<v-app-bar-nav-icon v-if="$vuetify.breakpoint.xsOnly" @click.native.stop="sideNav = !sideNav"></v-app-bar-nav-icon>
				<v-toolbar-title v-if="$vuetify.breakpoint.smAndUp">
					<router-link to="/">
						<img src="../assets/logo.png" alt="getbill" />
					</router-link>
				</v-toolbar-title>
				<v-toolbar-items v-if="$vuetify.breakpoint.smAndUp">
					<router-link to="/">בקשות לתשלום</router-link>
					<router-link to="/paychecklist">תלושי שכר</router-link>
					<router-link to="/settings">הגדרות</router-link>
					<a href="#">עזרה</a>
				</v-toolbar-items>
			</div>
		</v-toolbar>
	</div>
</template>

<script>
	import fb from "../assets/facebook.png";
	import whatsapp from "../assets/whatsapp.png";
	import mail from "../assets/mail.png";
	export default {
		name: "headerp",
		components: {},
		data() {
			return {
				sideNav: false,
				navLink: [
					{ text: "טופס 101", link: "/form101" },
					{ text: "פרטי חשבון בנק", link: "/bankaccountinfo" },
					{ text: "פרטי אשראי", link: "/carddetail" },
					{ text: "צור קשר", link: "/" }
				],
				socialMedia: [
					{ name: "facebook", img: fb, link: "/" },
					{ name: "whatsapp", img: whatsapp, link: "/" },
					{ name: "mail", img: mail, link: "/" }
				]
			};
		}
	};
</script>

<style scoped>
	.v-toolbar {
		background: url(../assets/navbg.png) no-repeat;
		background-size: contain;
		-webkit-box-shadow: none;
		box-shadow: none;
		height: 231px !important;
		margin-top: -115px;
		padding-top: 125px;
	}
	.theme--light.v-sheet {
		background-color: transparent;
	}
	.v-toolbar__title {
		position: absolute;
		right: -220px;
	}
	.v-toolbar__items a {
		color: #fff;
		font-size: 22px;
		margin: 5px 15px 0;
		padding-bottom: 2px;
		text-decoration: none;
		border-bottom: 3px solid transparent;
	}
	.v-toolbar__items a:first-child {
		margin-right: 0;
	}
	.v-toolbar__items a.router-link-exact-active {
		color: #feffb5;
		font-weight: 700;
		border-color: #feffb5;
	}
	.v-toolbar__content {
		max-width: 1180px;
		margin: 0 auto;
	}
	.v-app-bar__nav-icon {
		position: absolute;
	}
	@media (min-width: 1921px) {
		.v-toolbar {
			background-size: cover;
			height: 295px !important;
			margin-top: -115px;
			padding-top: 150px;
			background-position: 98%;
		}
	}
	@media (max-width: 1800px) {
		.v-toolbar {
			margin-top: -95px;
			padding-top: 115px;
		}
	}
	@media (max-width: 1750px) {
		.v-toolbar {
			margin-top: -85px;
			padding-top: 100px;
		}
		.v-toolbar__title {
			right: -180px;
		}
	}
	@media (max-width: 1650px) {
		.v-toolbar__title {
			right: -140px;
		}
	}
	@media (max-width: 1550px) {
		.v-toolbar {
			padding-top: 90px;
		}
		.v-toolbar__title {
			right: -100px;
		}
	}
	@media (max-width: 1440px) {
		.v-toolbar__title {
			right: auto;
			position: relative;
		}
		header .container {
			display: flex;
		}
		.v-toolbar {
			margin-top: -70px;
			height: 180px !important;
			padding-top: 90px;
		}
		.v-toolbar__items a {
			height: 30px;
		}
		.v-toolbar__items {
			margin-right: 50px;
		}
	}
	@media (max-width: 1366px) {
		.v-toolbar {
			padding-top: 85px;
		}
		.v-toolbar__items a {
			font-size: 18px;
			margin: 10px 15px 0;
			height: 28px;
		}
	}
	@media (max-width: 1280px) {
		.v-toolbar {
			margin-top: -60px;
			height: 160px !important;
			padding-top: 75px;
		}
	}
	@media (max-width: 1279px) {
		.v-toolbar {
			margin-top: -40px;
			height: 130px !important;
			padding-top: 50px;
		}
		.v-toolbar__items a {
			font-size: 16px;
			margin: 12px 15px 0;
			height: 25px;
		}
	}
	@media (max-width: 959px) {
		.v-toolbar {
			margin-top: -20px;
			height: 100px !important;
			padding-top: 30px;
			background-size: cover;
			background-position: 92%;
		}
		header .container {
			width: 100%;
		}
	}
	@media (max-width: 767px) {
		.v-toolbar {
			margin-top: 0;
			height: 100px !important;
			padding-top: 10px;
		}
	}
	@media (max-width: 599px) {
		.close_btn {
			position: absolute;
			width: 25px;
			height: 25px;
			left: 30px;
			top: 50px;
			background: url(../assets/menuclose.png) no-repeat;
			background-size: contain;
			background-position: center;
		}
		.v-toolbar {
			margin-top: 0;
			height: 150px !important;
			padding-top: 20px;
			background: linear-gradient(134deg, #00ffc0 0%, #01cbfd 100%);
			border-radius: 0 0 70px 70px;
		}
		.homepage .v-toolbar {
			height: auto !important;
			padding-top: 0;
			background: rgba(0, 0, 0, 0.24);
			border-radius: 0;
		}
		.v-app-bar__nav-icon .v-btn__content {
			display: none;
		}
		.v-app-bar__nav-icon:before {
			background: url(../assets/settings.png) no-repeat;
			background-size: contain;
			opacity: 1;
			width: 35px;
			height: 35px;
		}
		.v-toolbar__content .v-btn.v-btn--icon.v-size--default {
			left: 15px;
			top: 17px;
		}
		.v-toolbar__content {
			display: block;
		}
		.v-toolbar {
			padding-top: 0;
		}
		.mobile_link_list {
			width: 180px;
			margin-top: 40px;
		}
		.mobile_link_list a {
			color: #3b3b3b;
			text-decoration: none;
			display: block;
			padding: 20px 30px 20px 0;
			border-bottom: 1px solid #00ffc0;
			font-size: 20px;
		}
		aside.theme--light.v-navigation-drawer {
			width: calc(100% - 30px) !important;
			height: calc(100% - 30px) !important;
			border-radius: 0 0 25px 0;
			background: #fff url(../assets/menubg.png) no-repeat;
			background-size: 75%;
			background-position: -75px 100%;
		}
		.social_media {
			position: absolute;
			bottom: 15px;
			right: 30px;
			font-size: 12px;
		}
		.social_media ul {
			margin-top: 10px;
		}
		.social_media p span {
			font-weight: 700;
		}
		.social_media a {
			display: block;
			background: linear-gradient(180deg, #00f3ce 0%, #01dce9 100%);
			width: 45px;
			height: 45px;
			line-height: 45px;
			border-radius: 50%;
			text-align: center;
			margin: 0 2px;
		}
		.social_media img {
			height: 22px;
			width: auto;
			vertical-align: middle;
			margin-top: -3px;
		}
		.social_media li:last-child img {
			height: 16px;
		}
		.social_media li:first-child a {
			margin-right: 0;
		}
	}
	@media (max-width: 375px) {
		.mobile_link_list a {
			padding: 15px 30px 15px 0;
			font-size: 16px;
		}
	}
</style>
