<template>
  <div id="app">
    <NavBar/>
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
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url("https://fonts.googleapis.com/css2?family=Sniglet:wght@800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Anton&family=Lobster&family=Righteous&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Fugaz+One&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Fira Sans", Helvetica, Arial, sans-serif;
  font-weight: 500;
  color: 	#7e7c7c;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #ffff;
  /* background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.24' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E"); */
}

a {
  text-decoration: none;
}

.section {
  border-top: 2px solid #E1E7E4;
  margin-left: 10rem;
  margin-right: 10rem;
  padding: 4rem;
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
</style>
