<template>
	<div id="app" :class="{homepage :  $route.path === '/'}">
		<!-- <sidebar-menu :menu="routes" v-show="$route.path==='/register' || $route.path==='/login' ? false : true" /> -->
		<headerp
			v-show="
        $route.path === '/register' || $route.path === '/login' || $route.path === '/loginregister' || $route.path === '/signup'  || $route.path === '/splash' ? false : true
      "
		/>

		<router-view />
		<img src="./assets/leftbg.png" class="img-fluid leftbg" />
		<img src="./assets/leftbg.png" class="img-fluid rightbg" />

		<footerp
			v-if="$vuetify.breakpoint.smAndUp"
			v-show="  $route.path === '/register' || $route.path === '/login' || $route.path === '/signup' || $route.path === '/loginregister' || $route.path === '/splash' ? false : true
      "
		/>
	</div>
</template>

<script>
	import headerp from "./components/header.vue";
	import footerp from "./components/footer.vue";
	// import leftimg from "./assets"

	export default {
		name: "app",
		components: {
			headerp,
			footerp
		},
		mounted() {
			this.$vuetify.rtl = true;
		}
	};
</script>

<style scoped>
	#app {
		position: relative;
	}
	.leftbg {
		position: absolute;
		left: -54%;
		top: 35%;
		width: 70%;
	}
	.rightbg {
		position: absolute;
		right: -35%;
		top: 65%;
		width: 70%;
	}
	.login + .leftbg {
		top: -5%;
	}
	.login + .leftbg + .rightbg {
		top: 50%;
	}
	.form101 + .leftbg,
	.form101 + .leftbg + .rightbg {
		display: none;
	}
	@media (max-width: 959px) {
		.leftbg,
		.rightbg {
			display: none;
		}
	}
	@media (max-width: 599px) {
		#app.homepage {
			position: relative;
			background: linear-gradient(222deg, #00a4cc 0%, #09c092 100%);
		}
	}
</style>
