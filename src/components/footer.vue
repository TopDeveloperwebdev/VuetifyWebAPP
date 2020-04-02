<template>
  <div class="footer">
    <v-container>
      <v-row>
        <v-col cols="12">
          <ul class="list-inline">
            <li v-for="link in links" :key="link.index">
              <router-link :to="link.link">{{ link.name }}</router-link>
            </li>
          </ul>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "footerp",
  components: {},
  data() {
    return {
      sideNav: false,
      links: [
        { name: "Getbill 2019", link: "" },
        { name: "צור קשר ", link: "" },
        { name: "עזרה  ", link: "" },
        { name: "תנאי שימוש ", link: "" },
        { name: "  מדיניות פרטיות ", link: "" }
      ]
    };
  }
};
</script>

<style scoped>
.footer {
  background: url(../assets/footerbg1.png) no-repeat;
  background-size: contain;
  -webkit-box-shadow: none;
  box-shadow: none;
  height: 135px !important;
  margin-top: -80px;
  z-index: 99;
  position: relative;
  background-position: bottom;
  padding: 60px 0 0;
}
.footer a {
  color: #fff;
  font-size: 18px;
  text-decoration: none;
  padding: 0 20px;
}
.footer li:first-child a {
  color: #fff;
  font-size: 22px;
  font-weight: 600;
}
@media (min-width: 1921px) {
  .footer {
    background-size: cover;
    height: 180px !important;
    margin-top: -80px;
    background-position: 98%;
    padding: 85px 0 0;
  }
}
@media (max-width: 1800px) {
  .footer {
    margin-top: -100px;
  }
}
@media (max-width: 1440px) {
  .footer {
    height: 115px !important;
    margin-top: -80px;
    padding: 50px 0 0;
  }
}
@media (max-width: 1279px) {
  .footer {
    height: 100px !important;
    margin-top: -80px;
    padding: 45px 0 0;
  }
  .footer a {
    font-size: 16px;
  }
  .footer li:first-child a {
    font-size: 20px;
  }
}
@media (max-width: 959px) {
  .footer {
    height: 80px !important;
    margin-top: -50px;
    padding: 27px 0 0;
    background-size: cover;
    background-position: 92%;
  }
  .footer .container {
    width: 100%;
  }
}
@media (max-width: 767px) {
}
@media (max-width: 599px) {
}
</style>
