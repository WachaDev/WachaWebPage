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
        <div @click="toggleServiceMenu()">
          <router-link
            class="route"
            to="/developer"
            v-if="currentRoute === 'Developer'"
            >DEVELOPER
            <font-awesome-icon icon="fa-solid fa-angle-down" />
          </router-link>
          <router-link
            class="route"
            to="/illustrator"
            v-else-if="currentRoute === 'Illustrator'"
            >ILLUSTRATOR
            <font-awesome-icon icon="fa-solid fa-angle-down" />
          </router-link>
          <router-link
            class="route"
            to="/podcaster"
            v-else-if="currentRoute === 'Podcaster'"
            >PODCASTER
            <font-awesome-icon icon="fa-solid fa-angle-down" />
          </router-link>
          <label class="route" to="#" v-else>
            SERVICES
            <font-awesome-icon ref="icon" icon="fa-solid fa-angle-down" />
          </label>
        </div>
      </li>
      <li>
        <div class="route-container">
          <router-link class="route " to="/contact">CONTACTS</router-link>
        </div>
      </li>
      <li class="support">
        <router-link class="route support-btn" to="/support"
          >SUPPORT</router-link
        >
      </li>
    </ul>
    <div id="service-menu" ref="servicesMenu">
      <div class="services-container">
        <router-link
          @click.native="toggleServiceMenu()"
          to="/developer"
          class="view"
          >Developer<i class="fas fa-code"></i
        ></router-link>
        <router-link
          @click.native="toggleServiceMenu()"
          to="illustrator"
          class="view"
          >Illustrator<i class="fas fa-palette"></i
        ></router-link>
        <router-link
          @click.native="toggleServiceMenu()"
          to="/podcaster"
          class="view"
          >Podcaster<i class="fas fa-microphone"></i
        ></router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data: function() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggleServiceMenu: function() {
      const menu = this.$refs.servicesMenu;

      if (this.isOpen) {
        menu.style.height = "0px";
        menu.style.padding = "0rem";
      } else {
        menu.style.height = "fit-content";
        menu.style.padding = "1rem";
      }

      this.isOpen = !this.isOpen;
    }
  },
  computed: {
    currentRoute: function() {
      return this.$route.name;
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
  padding-top: 3px;
  padding-bottom: 3px;
  padding-right: 7rem;
  padding-left: 7rem;
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
  align-self: center;
}

#routes-container {
  display: flex;
}

#routes-container * {
  align-self: center;
}

.route-container {
  align-self: center;
}

.route {
  color: #ffff;
  padding: 0.5rem;
  margin: 10px;
  align-self: center;
}

.route:hover:not(.router-link-exact-active),
.route:focus:not(.router-link-exact-active),
.route:active:not(.router-link-exact-active) {
  color: rgb(221, 219, 219);
}

.router-link-exact-active {
  border-bottom: 4px solid white;
}

#service-menu {
  display: flex;
  position: absolute;
  overflow: hidden;
  top: 4rem;
  height: 0;
  transition: ease 0.2s;
  text-align: left;
  background: white;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 15px;
}

#service-menu li {
  color: #f90716;
  display: inline;
}

.services-container .view {
  color: #f90716;
  padding-top: 2px;
  padding-bottom: 2px;
  padding-left: 1rem;
  padding-right: 1rem;
}

.view:hover {
  /* color: #f3f3f3; */
}

i {
  margin-left: 5px;
}

.support {
  border-radius: 8px;
  background: white;
  padding: 0.5rem;
  background: rgb(255, 241, 42);
}

.support-btn {
  /* color: #f90716; */
  color: black;
}
</style>
