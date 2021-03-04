<template>
  <section id="dashboard">
    <div id="dashboard-container">
      <div id="dashboard-left-side">
        <div class="logo">
          <img src="" alt="" />
        </div>
        <h1 class="brand-name"></h1>
      </div>

      <div id="dashboard-right-side">
        <div id="dashboard-title-container">
          <h1 id="dashboard-title">
            What Are You Looking For?
          </h1>
        </div>
        <div class="contact-for">
          <button
            class="developer-btn hvr-fade  hvr-icon-wobble-horizontal"
            v-on:click="openSideBar()"
          >
            <!-- Change openSideBar to redirect("/developer") -->
            Developer
            <i
              id="developer-btn-icon"
              class="fas fa-arrow-circle-right hvr-icon"
            ></i>
          </button>
          <button
            class="podcaster-btn  hvr-fade hvr-icon-wobble-horizontal"
            v-on:click="closeSideBar()"
          >
            <!-- Change openSideBar to redirect("/podcaster") -->
            Podcaster
            <i
              id="podcaster-btn-icon"
              class="fas fa-arrow-circle-right hvr-icon"
            ></i>
          </button>
          <button
            class="illustrator-btn hvr-fade hvr-icon-wobble-horizontal"
            v-on:click="redirect('/illustrator')"
          >
            Illustrator
            <i
              id="illustrator-btn-icon"
              class="fas fa-arrow-circle-right hvr-icon"
            ></i>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    openSideBar: function() {
      const sideBar = document.getElementById("side-bar");
      sideBar.style.width = "300px";
    },
    closeSideBar: function() {
      const sideBar = document.getElementById("side-bar");
      sideBar.style.width = "0px";
    },
    redirect: function(path) {
      this.$router.push({ path });
    }
  }
};
</script>

<style scoped>

#dashboard {
  background: #ea2027;
  border-bottom: 9px dotted #ffff;
  margin-bottom: 3%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

#dashboard-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 2rem;
  margin-right: 17rem;
  margin-left: 17rem;
}

#dashboard-left-side {
  display: flex;
  justify-content: center;
}

.logo {
  background: #ffff;
  padding-right: 16.5rem;
  padding-left: 13rem;
  border-radius: 150px;
}

#dashboard-right-side {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#dashboard-title {
  font-family: "Fugaz One", cursive;
  text-shadow: 6px 6px rgba(0, 0, 0, 0.2);
  font-size: 2rem;
  text-align: left;
  color: #ffff;
  margin-bottom: 1rem;
}

.contact-for {
  display: flex;
  flex-direction: column;
}

.contact-for button {
  cursor: pointer;
  background: #c71919;
  /* #c0392b */
  /* #ED4C67 */
  /* #ff3838 */
  /* #d63031 */
  color: white;
  padding: 0.5rem;
  width: 16rem;
  margin-bottom: 1rem;
  border-color: white;
  border-width: 7px;
  border-radius: 100px;
  border-style: solid;
}

.contact-for button:hover,
.contact-for button:focus,
.contact-for button:active {
  background: #ffff;
  border-color: #c71919;
  color: #ea2027;
}

.developer-btn {
  font-family: "Anton", sans-serif;
  font-size: 1.5rem;
  width: 1rem;
}

.podcaster-btn {
  font-family: "Righteous", cursive;
  font-size: 1.6rem;
}

.illustrator-btn {
  font-family: "Lobster", cursive;
  font-size: 1.6rem;
}

#podcaster-btn-icon {
  font-size: 1.5rem;
}

#illustrator-btn-icon {
  font-size: 1.5rem;
}
</style>
