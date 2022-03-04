<template>
  <div id="app">
    <NavBar />
    <main id="main">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import SideBarBtn from "./components/SideBarBtn";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
export default {
  components: {
    Header,
    NavBar,
    SideBarBtn,
    SideBar,
    Footer
  }
};
</script>
<style>
/* Font: Sniglet, Comfortaa  */
/*  TODO: Take a look to Fira sans font. */
@import url("https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Sniglet:wght@800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Anton&family=Lobster&family=Righteous&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Fugaz+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Fira Sans", Helvetica, Arial, sans-serif;
  font-weight: 500;
  color: #7e7c7c;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #ffff;
  position: relative;
  min-height: 100vh;
}

::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: rgba(255, 0, 0, 0);
}

::-webkit-scrollbar-thumb {
  background: #888;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

a {
  text-decoration: none;
}

.section {
  border-top: 2px solid #e1e7e4;
  margin-left: 12rem;
  margin-right: 12rem;
  padding: 2rem;
}

.image {
  width: 400px;
  height: 300px;
}

.title {
  font-family: "Fira Sans", "Fugaz One";
  font-size: 2.5rem;
  letter-spacing: 1px;
  font-weight: bold;
  color: black;
  text-align: left;
  margin: 1rem;
  /* border-bottom: 10px solid red; */
  /* text-shadow: -6px 6px rgba(0, 0, 0, 0.35); */
}

.paragraph {
  font-size: 1.1rem;
  text-align: center;
}

#main {
  padding-bottom: 15rem; 
}
</style>
