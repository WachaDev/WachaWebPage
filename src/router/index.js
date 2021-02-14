import Vue from "vue";
import Router from "vue-router";

import Home from "@/views/Home";
import Developer from "@/views/Developer";
import Illustrator from "@/views/Illustrator";
import PageNotFound from "@/views/PageNotFound";

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
    },
    {
      path: "*",
      name: "PageNotFound",
      component: PageNotFound
    }
  ]
});
