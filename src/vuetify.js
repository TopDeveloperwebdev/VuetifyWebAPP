import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

import "vuetify/src/styles/main.sass";

Vue.use(Vuetify);
export default new Vuetify({
  rtl: true,
  options: {
    customProperties: true
  },
  icons: {
    iconfont: "mdiSvg" // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4'
  }
});
