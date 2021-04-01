<template>
  <aside id="side-bar">
    <div id="side-bar-icon">
      <div class="side-bar-icon-container hvr-icon-grow">
        <i @click="closeSideBar()" class="fas fa-times hvr-icon"></i>
      </div>
    </div>

    <div id="inner-side-bar">
      <div id="views">
        <div id="views-delimiter" class="delimeter">
          <h4>Views</h4>
        </div>
        <div class="views-container">
          <div class="view-action-container side-bar-action">
            <i class="icon fas fa-home"></i>
            <button
              id="home-view"
              v-bind:class="{ 'current-view': isCurrentView }"
              @click="redirect('/')"
            >
              Home
            </button>
          </div>
          <div class="view-action-container side-bar-action">
            <i class="icon fas fa-code"></i>
            <button
              id="developer-view"
              v-bind:class="{ 'current-view': isCurrentView }"
              @click="redirect('/developer')"
            >
              Developer
            </button>
          </div>
          <div class="view-action-container side-bar-action">
            <i class="icon fas fa-microphone-alt"></i>
            <button
              id="podcaster-view"
              v-bind:class="{ 'current-view': isCurrentView }"
              @click="redirect('/podcaster')"
            >
              Podcaster
            </button>
          </div>
          <div class="view-action-container side-bar-action">
            <i class="icon fas fa-palette"></i>
            <button
              id="illustrator-view"
              v-bind:class="{ 'current-view': isCurrentView }"
              @click="redirect('/illustrator')"
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
          <div class="section-action-container side-bar-action">
            <i class="icon fas fa-award"></i>
            <button @click="goto('most-loved-works')">
              Experiencie
            </button>
          </div>
          <div class="section-action-container side-bar-action">
            <i class="icon fas fa-tasks"></i>
            <button @click="goto('finished-projects')">
              Finished projects
            </button>
          </div>
          <div class="section-action-container side-bar-action">
            <i class="icon fas fa-hourglass-half"></i>
            <button @click="goto('current-projects')">
              Current projects
            </button>
          </div>
          <div class="section-action-container side-bar-action">
            <i class="icon fas fa-images"></i>
            <button @click="goto('gallery')">
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
      isCurrentView: this.highlightCurrentView
    };
  },

  methods: {
    redirect: function(path) {
      // TODO: Convert this to a global function.
      this.$router.push({ path });
    },

    openSideBar: function() {
      const sideBar = document.getElementById("side-bar");
      const app = document.getElementById("app");

      sideBar.style.width = "300px";
      content.style.filter = "brightness(80%)";
    },

    closeSideBar: function() {
      const sideBar = document.getElementById("side-bar");

      sideBar.style.width = "0px";
      content.style.filter = "brightness(100%)";
    },

    goto: function(elementId) {
      const element = document.getElementById(elementId);
      element.scrollIntoView({ behavior: "smooth" });
    },

    highlightCurrentView: function() {
      const sideBarActions = document.getElementsByClassName("side-bar-action");
      if (sideBarActions) {
        for (let i = 0; i < sideBarActions.length; i++) {
          // Get path contained in sideBarActions
          let path = sideBarActions[i].getAttribute("href");
          // Is that path the current one?
          console.log("maria");
          // if (path.includes(this.$route.fullPath)) {
          //   console.log("Matched");
          // }
        }
      }
    }
  },

  computed: {
    opened: function() {
      const sideBar = document.getElementById("side-bar");
      let width = Number(sideBar.style.width);

      if (width > 0) {
        return true;
      } else if (sideBar.style.width <= 0) {
        return false;
      }
    }
  },

  created: function() {
    this.highlightCurrentView();
  }
};
</script>

<style scoped>
#side-bar {
  /* font-size: 1.3rem; */
  color: rgb(116, 112, 112);
  position: fixed;
  /* top: 3.9rem; */
  /* left: 0px; */
  height: 100%;
  width: 0px;
  background: #ffff;
  z-index: 1;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.5s;
}

#side-bar-icon {
  text-align: right;
  margin: 10px;
  font-size: 1.5rem;
}

#inner-side-bar {
  padding: 1rem;
}

#side-bar .views-container {
  display: flex;
  flex-direction: column;
  justify-content: start;
}

.side-bar-action button {
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
  cursor: pointer;
  border-left: 6px solid #c71919;
  color: #c71919;
}

/* .view-action-container {
  font-size: 1.1rem;
}

.section-action-container {
  font-size: 1.1rem;
} */

.icon {
  font-size: 1.5rem;
}

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
