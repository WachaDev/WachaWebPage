<template>
  <nav id="navbar">
    <router-link id="wacha" to="/">
      <h1>Wachamuli</h1>
    </router-link>

    <ul id="routes-container">
      <li>
        <router-link class="route" to="/developer">Developer</router-link>
      </li>
      <li>
        <router-link class="route" to="/illustrator">Illustrator</router-link>
      </li>
      <li>
        <router-link class="route" to="#">Podcaster</router-link>
      </li>
    </ul>

    <ul id="sidebar-icon-container">
      <li>
        <router-link class="route" to="/">
          <i id="sidebar-icon" class="fas fa-indent fa-2x"></i>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
#wacha {
  text-decoration: none;
  color: #fff;
  font-size: 140%;
}

#navbar {
  font-weight: 700;
  padding: 0.7%;
  background: #EA2027;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.route {
  text-decoration: none;
  color: #fff;
}

#routes-container {
  display: flex;
  justify-content: center;
}

#routes-container li {
  margin: auto;
}

.route {
  font-size: 150%;
}

.route:hover {
  font-style: oblique;
  font-weight: bold;
}

#sidebar-icon-container {
  text-align: right;
}

li {
  list-style: none;
}

</style>
