<template>
  <div id="app">
    <a class="route" href="/">
      <header id="header">Wach(ART)(DEV)</header>
    </a>

    <nav id="navbar">
      <ul>
        <li>
          <router-link class="route" to="/">Home</router-link>
        </li>
        <li>
          <router-link class="route" to="/developer">Developer</router-link>
        </li>
        <li>
          <router-link class="route" to="/illustrator">Illustrator</router-link>
        </li>
      </ul>
    </nav>

    <main id="main">
      <router-view />
    </main>

    <aside id="aside-bar">
      <!-- Will work as an index of all content: About me, Experience, Finished Projects, Current Projects, Gallery -->
    </aside>

    <footer id="footer">
      <!-- SOCIAL MEDIA: Github, Twitter, Instagram, etc... -->
    </footer>
  </div>
</template>

<style>
/* Font: Sniglet, Comfortaa  */
@import url("https://fonts.googleapis.com/css2?family=Sniglet:wght@800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&display=swap");

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#header {
  font-family: "Sniglet";
  font-size: 3rem;
  color: white;
}

#header,
#navbar {
  background: red;
  padding: 0.5rem;
}

#navbar {
  font-family: "Comfortaa";
  font-weight: 700;
  text-align: left;
}

#navbar li {
  list-style: none;
  display: inline;
}

.route {
  text-decoration: none;
  color: #fff;
}

#navbar .route:hover {
  font-style: oblique;
  font-weight: bold;
}

/* #main {
  
} */
</style>
