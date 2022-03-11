<template>
  <nav id="navbar">
    <ul id="logo-container">
      <li class="logo">
        LOGO
      </li>
    </ul>

    <ul id="routes-container">
      <div class="route-container">
        <li>
          <router-link class="route" to="/">HOME</router-link>
        </li>
      </div>
      <li>
        <div
          @mouseover="toggleServiceMenu(true)"
          @mouseleave="toggleServiceMenu(false)"
          class="route-container"
        >
          <a class="route" to="#"
            >SERVICES
            <font-awesome-icon icon="fa-solid fa-angle-down" />
          </a>
          <div id="service-menu" ref="servicesMenu">
            <div class="services-container">
              <li class="view">Developer<i class="fas fa-code"></i></li>
              <li class="view">Podcaster<i class="fas fa-microphone"></i></li>
              <li class="view">Illustrator<i class="fas fa-palette"></i></li>
            </div>
          </div>
        </div>
      </li>
      <li>
        <div class="route-container">
          <router-link class="route " to="/contact">CONTACT</router-link>
        </div>
      </li>
      <li>
        <router-link class="route" to="/support">SUPPORT</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  methods: {
    toggleServiceMenu: function(open) {
      let menu = this.$refs.servicesMenu;
      let menuHeight = menu.style.height;

      if (open && menuHeight <= "0px") {
        menu.style.height = "5.5rem";
        menu.style.border = "2px solid #ffff";
        return;
      }

      if (!open && menuHeight > "0px") {
        menu.style.height = "0px";
        menu.style.border = "none";
        return;
      }
    }
  }
};
</script>

<style scoped>
#navbar {
  position: sticky;
  top: 0;
  display: flex;
  justify-content: flex-end;
  padding-left: 1rem;
  padding-top: 3px;
  padding-bottom: 3px;
  padding-right: 1rem;
  font-weight: 700;
  background: #f90716;
  z-index: 99;
}

.logo {
  color: #ffff;
}

#logo-container {
  margin-right: auto;
  padding: 1rem;
}

#routes-container {
  display: flex;
  justify-content: right;
  padding: 1rem;
}

.route-container {
  border-right: 2px solid white;
}

.route {
  color: #ffff;
  padding: 0.5rem;
  margin: 8px;
}

.route:hover:not(.router-link-exact-active),
.route:focus:not(.router-link-exact-active),
.route:active:not(.router-link-exact-active) {
  color: rgb(221, 219, 219);
}

.router-link-exact-active {
  color: black;
  background: rgb(255, 241, 42);
  border-radius: 25px;
  box-shadow: -4px 4px black;
}

#service-menu {
  position: absolute;
  overflow: hidden;
  background: #f90716;
  height: 0;
  top: 3.1rem;
  right: 14.9rem;
  transition: all 0.5s;
  border-radius: 10px;
}

.services-container .view {
  color: #fff;
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 1rem;
  padding-right: 1rem;
}

.view:hover {
  color: rgb(255, 241, 42);
  text-shadow: -2px 2px rgb(0, 0, 0, 0.7);
}

i {
  margin-left: 5px; 
}
</style>
