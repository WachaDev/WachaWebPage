<template>
  <div id="app">
    <!-- <Header /> -->
    <!-- <NavBar /> -->
    <!-- <SideBar /> -->
    <!-- Redundant this main? -->
    <main id="main">
      <router-view />
    </main>
    <!-- <Footer /> -->
  </div>
</template>

<script>
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";

export default {
  components: {
    Header,
    NavBar,
    SideBar,
    Footer
  }
};
</script>
<style>
/* Font: Sniglet, Comfortaa  */
@import url("https://fonts.googleapis.com/css2?family=Sniglet:wght@800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Comfortaa", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #ffff;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cg fill='%23d45656' fill-opacity='0.59'%3E%3Cpolygon fill-rule='evenodd' points='8 4 12 6 8 8 6 12 4 8 0 6 4 4 6 0 8 4'/%3E%3C/g%3E%3C/svg%3E");
}

a {
  text-decoration: none;
}
</style>
