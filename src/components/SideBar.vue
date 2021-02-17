<template>
  <aside id="side-bar">
    <div id="inner-side-bar">
      <i id="sidebar-icon" class="fas fa-align-justify"></i>
      <h4>Views</h4>
      <div class="views">
        <router-link
          class="side-bar-action"
          v-bind:class="{ 'current-view': isCurrentView }"
          to="/"
        >
          <i class="fas fa-home"></i> Home
        </router-link>
        <router-link
          class="side-bar-action"
          v-bind:class="{ 'current-view': isCurrentView }"
          to="/developer"
        >
          <i class="fas fa-code"></i> Developer</router-link
        >
        <router-link
          class="side-bar-action"
          v-bind:class="{ 'current-view': isCurrentView }"
          to="/podcaster"
        >
          <i class="fas fa-microphone-alt"></i> Podcaster</router-link
        >
        <router-link
          class="side-bar-action"
          v-bind:class="{ 'current-view': isCurrentView }"
          to="/illustrator"
        >
          <i class="fas fa-palette"></i> Illustrator</router-link
        >
      </div>
      <h4>Sections</h4>
      <div class="sections">
        <button
          class="side-bar-action"
          v-bind:class="{ 'current-view': isCurrentView }"
          v-on:click="goto('most-loved-works')"
        >
          <i class="fas fa-award"></i> Experiencie
        </button>
        <button
          class="side-bar-action"
          v-bind:class="{ 'current-view': isCurrentView }"
          v-on:click="goto('finished-projects')"
        >
          <i class="fas fa-tasks"></i> Finished projects
        </button>
        <button
          class="side-bar-action"
          v-bind:class="{ 'current-view': isCurrentView }"
          v-on:click="goto('current-projects')"
        >
          <i class="fas fa-hourglass-half"></i> Current projects
        </button>
        <button
          class="side-bar-action"
          v-bind:class="{ 'current-view': isCurrentView }"
          v-on:click="goto('gallery')"
        >
          <i class="fas fa-images"></i> Gallery
        </button>
        <div id="bottom-shadow-container">
          <div id="bottom-shadow">as</div>
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  data: function() {
    return {
      isCurrentView: this.highlightCurrentView,
      a: true
    };
  },

  methods: {
    openSideBar: function() {
      const sideBar = document.getElementById("side-bar");
      sideBar.style.width = "300px";
    },

    closeSideBar: function() {
      const sideBar = document.getElementById("side-bar");
      sideBar.style.width = "0px";
    },

    goto: function(elementId) {
      const element = document.getElementById(elementId);
      element.scrollIntoView({ behavior: "smooth" });
    }
  },

  computed: {
    currentRoute: function() {
      return this.$route.path;
    },

    highlightCurrentView: function() {
      const sideBarActions = document.getElementsByClassName("side-bar-action");
      for (let action of sideBarActions) {
        // Get path contained in sideBarActions
        let path = action.getAttribute("href");
        // Is that path the current one?
        if (path.includes(this.currentRoute)) {
          console.log(`current route: ${this.currentRoute}, path: ${path}`);
          return true;
        }
      }
    }
  }
};
</script>

<style scoped>
.ho {
  color: violet;
}
#side-bar {
  font-size: 1.3rem;
  color: rgb(116, 112, 112);
  position: fixed;
  top: 0px;
  left: 0px;
  height: 100%;
  width: 300px;
  background: #ffff;
  z-index: 1;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.5s;
}

#inner-side-bar {
  padding: 1rem;
}

#side-bar .views {
  display: flex;
  flex-direction: column;
  justify-content: start;
}

.side-bar-action {
  font-size: 1.3rem;
  background: #ffff;
  border-style: none;
}

.side-bar-action:hover {
  border-left: 3px;
  border-color: red;
}

button {
  border: 1px solid black;
  border-color: red;
  color: red;
}

#side-bar .sections {
  display: flex;
  flex-direction: column;
}

#side-bar .side-bar-action {
  text-align: left;
}

#botton-shadow-container {
  position: absolute;
  bottom: 0;
  top: 33px;
  padding-top: 2rem;
  background: #c71919;
}

.current-view {
  color: green;
}
/* #side-bar .sections button { 

} */
</style>
