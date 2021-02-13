<template>
  <div id="app">
    <header>Wach(ART)(DEV)</header>

    <!-- NAVBAR -->
    <nav id="navbar">
      <ul>
        <li class="route">
          <router-link to="/">Home</router-link>
        </li>
        <li class="route">
          <router-link to="/developer">Developer</router-link>
        </li>
        <li class="route">
          <router-link to="/illustrator">Illustrator</router-link>
        </li>
      </ul>
    </nav>

    <router-view />
  </div>
</template>

<script>
export default {}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#navbar {
  background: none;
}

#navbar .route {
  color: #fff;
  text-decoration: none;
  font-style: none;
  list-style: none;
}

#navbar .route:visited {
  color: blue;
}

#navbar .route:hover {
  font-style: oblique;
  font-weight: bold;
}
</style>
