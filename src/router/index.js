import Vue from "vue";
import Router from "vue-router";

import Home from "@/components/Home";
import Developer from "@/components/Developer";
import Illustrator from "@/components/Illustrator";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/developer",
      name: "Developer",
      component: Developer
    },
    {
      path: "/illustrator",
      name: "Illustrator",
      component: Illustrator
    }
  ]
});
