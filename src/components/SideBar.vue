<template>
  <aside id="side-bar">
    <h4>Views</h4>
    <div class="views">
      <router-link class="side-bar-action" to="/">Home</router-link>
      <router-link class="side-bar-action" to="/developer"
        >Developer</router-link
      >
      <router-link class="side-bar-action" to="/podcaster"
        >Podcaster</router-link
      >
      <router-link class="side-bar-action" to="/illustrator"
        >Illustrator</router-link
      >
    </div>
    <h4>Sections</h4>
    <div class="sections">
      <button class="side-bar-action" v-on:click="goto('most-loved-works')">
        Experiencie
      </button>
      <button class="side-bar-action" v-on:click="goto('finished-projects')">
        Finished projects
      </button>
      <button class="side-bar-action" v-on:click="goto('current-projects')">
        Current projects
      </button>
      <button class="side-bar-action" v-on:click="goto('gallery')">
        Gallery
      </button>
    </div>
    <!-- Will work as an index of all content: About me, Experience, Finished Projects, Current Projects, Gallery -->
  </aside>
</template>

<script>
export default {
  methods: {
    goto: function(elementId) {
      const element = document.getElementById(elementId);
      element.scrollIntoView({ behavior: "smooth" });
    }
  },
  computed: {
    currentRoute: function() {
      return this.$route.path;
    }
  }
};
</script>

<style scoped>
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
}

#side-bar .views {
  display: flex;
  flex-direction: column;
}

.side-bar-action {
  font-size: 1.3rem;
  background: #ffff;
  border-style: none;
  text-align: center;
}

.side-bar-action:hover {
  border-left: 3px;
  border-color: red;
}

#side-bar .sections {
  display: flex;
  flex-direction: column;
}

/* #side-bar .sections button { 

} */
</style>
