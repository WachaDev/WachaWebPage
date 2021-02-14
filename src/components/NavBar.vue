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
    <ul>
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
  font-size: 22px;
  /* margin-right: auto; */
}

#header {
  font-family: "Sniglet", sans-serif;
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
  padding: 1rem;

  display: flex;
  justify-content: center;
}

#navbar li {
  list-style: none;
}

.route {
  text-decoration: none;
  padding: 0.5%;
  color: #fff;
}

/* 
#sidebar-icon {
  margin-left: 10rem;
}

#sidebar-icon:hover {
  opacity: 0.7;
}

.route:hover {
  font-style: oblique;
  font-weight: bold;
}

#navbar ul {
  display: flex;
  margin: auto;
}

#routes-container li {
  padding-right: 1rem;
  flex: 3;
} */

/* #navbar ul li {
  justify-content: space-between;
} */


</style>
