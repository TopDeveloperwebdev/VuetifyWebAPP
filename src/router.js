import Vue from "vue";
import Router from "vue-router";
import LoginRegister from "./views/LoginRegister.vue";
import SignUp from "./views/SignUp.vue";
import Login from "./views/Login.vue";
import ApplicationsList from "./views/ApplicationsList.vue";
import IndividualApplication from "./views/IndividualApplication.vue";
import NewApplication from "./views/NewApplication.vue";
import PaycheckList from "./views/PaycheckList.vue";
import IndividualPaycheck from "./views/IndividualPaycheck.vue";
import Settings from "./views/Settings.vue";
import Form101 from "./views/Form101.vue";
import CardDetail from "./views/CardDetail.vue";
import Profile from "./views/Profile.vue";
import BankAccountInfo from "./views/BankAccountInfo.vue";
import Request from "./views/Request.vue";
import Splash from "./views/Splash.vue";

Vue.use(Router);

export default new Router({
  //   mode: "history",
  routes: [
    {
      path: "/loginregister",
      name: "LoginRegister",
      component: LoginRegister
    },
    {
      path: "/signup",
      name: "SignUp",
      component: SignUp
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      path: "/",
      name: "ApplicationsList",
      component: ApplicationsList
    },
    {
      path: "/individualapplication",
      name: "IndividualApplication",
      component: IndividualApplication
    },
    {
      path: "/newapplication",
      name: "NewApplication",
      component: NewApplication
    },
    {
      path: "/paychecklist",
      name: "PaycheckList",
      component: PaycheckList
    },
    {
      path: "/individualpaycheck",
      name: "IndividualPaycheck",
      component: IndividualPaycheck
    },
    {
      path: "/settings",
      name: "Settings",
      component: Settings
    },
    {
      path: "/form101",
      name: "Form101",
      component: Form101
    },
    {
      path: "/carddetail",
      name: "CardDetail",
      component: CardDetail
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile
    },
    {
      path: "/bankaccountinfo",
      name: "BankAccountInfo",
      component: BankAccountInfo
    },
    {
      path: "/request",
      name: "Request",
      component: Request
    },
    {
      path: "/splash",
      name: "Splash",
      component: Splash
    }
  ]
});
