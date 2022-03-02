// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faFire, faCannabis } from "@fortawesome/free-solid-svg-icons"
import { faLightbulb, faCalendarCheck } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

Vue.component("font-awesome-icon", FontAwesomeIcon);
library.add(faLightbulb, faCalendarCheck, faFire, faCannabis);

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router: router,
  components: { App },
  template: "<App/>"
});
