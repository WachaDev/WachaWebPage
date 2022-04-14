import Vue from "vue";
import App from "./App";
import router from "./router";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faLightbulb,
  faCalendarCheck
} from "@fortawesome/free-regular-svg-icons";
import {
  faFire,
  faAngleUp,
  faAngleDown,
  faCircleArrowRight,
  faServer
} from "@fortawesome/free-solid-svg-icons";

Vue.component("FontAwesomeIcon", FontAwesomeIcon);

library.add(
  faLightbulb,
  faCalendarCheck,
  faFire,
  faAngleDown,
  faCircleArrowRight,
  faServer,
  faAngleUp
);

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router: router,
  components: { App },
  template: "<App/>"
});
