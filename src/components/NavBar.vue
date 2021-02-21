<template>
  <nav id="navbar">
    <ul id="sidebar-icon-container">
      <li>
        <router-link class="route" to="/">
          <i id="sidebar-icon" class="fas fa-align-justify"></i>
        </router-link>
      </li>
    </ul>

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

  </nav>
</template>

<script>
export default {
  methods: {
    onScroll: function() {
      const navbar = document.getElementById("navbar"); 
      if (document.body.scrolTop > 130 || document.documentElement > 130) {
        navbar.style.padding = "30px 10px"; 
      } else {
        navbar.style.padding = "80px 10px";
      } 
    }
  },

  created: function() {
    window.onscroll = this.onScroll;
  }
}
</script>

<style scoped>
#wacha {
  color: red;
  font-size: 140%;
}

#navbar {
  /* position: fixed; */
  overflow: hidden;
  position: fixed;
  width: 100%;
  font-weight: 700;
  padding-top: 0.7%;
  padding-left: 0.7%;
  padding-right: 0.7%;

  background: white;
  /* #EA2027 */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  z-index: 99;
}

.route {
  color: red;
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
  text-align: left;
}

li {
  list-style: none;
}
</style>
