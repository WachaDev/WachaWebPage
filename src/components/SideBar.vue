<template>
  <aside id="side-bar">
    <div id="inner-side-bar">
      <!-- <i id="sidebar-icon" class="fas fa-align-justify"></i> -->
      <h4>Views</h4>
      <div class="views">
        <button
          id="home-view"
          class="side-bar-action"
          v-bind:class="{ 'current-view': isCurrentView }"
          v-on:click="redirect('/')"
        >
          <i class="icon fas fa-home"></i> Home
        </button>
        <button
          id="developer-view"
          class="side-bar-action"
          v-bind:class="{ 'current-view': isCurrentView }"
          v-on:click="redirect('/developer')"
        >
          <i class="icon fas fa-code"></i> Developer
        </button>
        <button
          id="podcaster-view"
          class="side-bar-action"
          v-bind:class="{ 'current-view': isCurrentView }"
          v-on:click="redirect('/podcaster')"
        >
          <i class="icon fas fa-microphone-alt"></i> Podcaster
        </button>
        <button
          id="illustrator-view"
          class="side-bar-action"
          v-bind:class="{ 'current-view': isCurrentView }"
          v-on:click="redirect('/illustrator')"
        >
          <i class="icon fas fa-palette"></i> Illustrator
        </button>
      </div>
      <h4>Sections</h4>
      <div class="sections">
        <button class="side-bar-action" v-on:click="goto('most-loved-works')">
          <i class="icon fas fa-award"></i> Experiencie
        </button>
        <button class="side-bar-action" v-on:click="goto('finished-projects')">
          <i class="icon fas fa-tasks"></i> Finished projects
        </button>
        <button class="side-bar-action" v-on:click="goto('current-projects')">
          <i class="icon fas fa-hourglass-half"></i> Current projects
        </button>
        <button class="side-bar-action" v-on:click="goto('gallery')">
          <i class="icon fas fa-images"></i> Gallery
        </button>
        <div id="bottom-shadow-container">
          <div id="bottom-shadow"></div>
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
    redirect: function(path) {
      // TODO: Convert this to a global function.
      this.$router.push({ path });
    },

    openSideBar: function() {
      const sideBar = document.getElementById("side-bar");
      const content = document.getElementById("main");

      sideBar.style.width = "300px";
      // Obscure the main content.
      content.style.webkitFilter = "blur(5px)";
      content.style.filter = "blur(5px)";
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
    highlightCurrentView: function() {
      const sideBarActions = document.getElementsByClassName("side-bar-action");
      for (let action of sideBarActions) {
        // Get path contained in sideBarActions
        let path = action.getAttribute("href");
        // Is that path the current one?
        if (path.includes(this.$route.fullPath)) {
          console.log(`current route: ${this.currentRoute}, path: ${path}`); // TODO: Remove this.
          return true;
        }
      }
    }
  }
};
</script>

<style scoped>
#side-bar {
  /* font-size: 1.3rem; */
  color: rgb(116, 112, 112);
  position: fixed;
  top: 3.9rem;
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

.icon {
  /* color: #c71919; */
}

.side-bar-action {
  padding: 0.5rem;
  font-size: 1.2em;
  background: #ffff;
  border-style: none;
  /* border: 1px solid #c71919; */
  /* border-left: none; */
  /* border-right: none; */
  color: grey;
}

.side-bar-action:hover {
  border-left: 6px solid #c71919;
  color: #c71919;
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

#bottom-shadow-container {
  position: absolute;
  bottom: 0;
  top: 56rem;
  margin-top: 2rem;
  background: #c71919;
}

.current-view {
  color: green;
}
</style>
