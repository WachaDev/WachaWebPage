<template>
  <aside id="side-bar">
    <div id="inner-side-bar">
      <div id="views">
        <div class="delimeter">
          <h4>Views</h4>
        </div>
        <div class="views-container">
          <div class="view-action-container">
            <i class="icon fas fa-home"></i>
            <button
              id="home-view"
              class="side-bar-action"
              v-bind:class="{ 'current-view': isCurrentView }"
              v-on:click="redirect('/')"
            >
              Home
            </button>
          </div>
          <div class="view-action-container">
            <i class="icon fas fa-code"></i>
            <button
              id="developer-view"
              class="side-bar-action"
              v-bind:class="{ 'current-view': isCurrentView }"
              v-on:click="redirect('/developer')"
            >
              Developer
            </button>
          </div>
          <div class="view-action-container">
            <i class="icon fas fa-microphone-alt"></i>
            <button
              id="podcaster-view"
              class="side-bar-action"
              v-bind:class="{ 'current-view': isCurrentView }"
              v-on:click="redirect('/podcaster')"
            >
              Podcaster
            </button>
          </div>
          <div class="view-action-container">
            <i class="icon fas fa-palette"></i>
            <button
              id="illustrator-view"
              class="side-bar-action"
              v-bind:class="{ 'current-view': isCurrentView }"
              v-on:click="redirect('/illustrator')"
            >
              Illustrator
            </button>
          </div>
        </div>
      </div>

      <div id="sections">
        <div class="delimeter">
          <h4>Sections</h4>
        </div>
        <div class="section-container">
          <div class="section-action-container">
            <i class="icon fas fa-award"></i>
            <button
              class="side-bar-action"
              v-on:click="goto('most-loved-works')"
            >
              Experiencie
            </button>
          </div>
          <div class="section-action-container">
            <i class="icon fas fa-tasks"></i>
            <button
              class="side-bar-action"
              v-on:click="goto('finished-projects')"
            >
              Finished projects
            </button>
          </div>
          <div class="section-action-container">
            <i class="icon fas fa-hourglass-half"></i>
            <button
              class="side-bar-action"
              v-on:click="goto('current-projects')"
            >
              Current projects
            </button>
          </div>
          <div class="section-action-container">
            <i class="icon fas fa-images"></i>
            <button class="side-bar-action" v-on:click="goto('gallery')">
              Gallery
            </button>
          </div>
          <div id="bottom-shadow-container">
            <div id="bottom-shadow"></div>
          </div>
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

#side-bar .views-container {
  display: flex;
  flex-direction: column;
  justify-content: start;
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

/* .view-action-container {
  font-size: 1.1rem;
}

.section-action-container {
  font-size: 1.1rem;
} */

#home-view {
  display: inline;
  font-family: "Fugaz One";
}

#developer-view {
  font-family: "Anton", sans-serif;
}

#podcaster-view {
  font-family: "Righteous", cursive;
}

#illustrator-view {
  font-family: "Lobster", cursive;
}

#side-bar .section-container {
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
