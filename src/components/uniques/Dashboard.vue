<template>
  <section id="dashboard">
    <div id="dashboard-container">
      <div class="dashboard-top-container">
        <div id="dashboard-left-side">
          <div id="dashboard-title-container">
            <h1 id="dashboard-title">
              WachaOut!
            </h1>
            <h4 id="dashboard-subtext">
              What are you looking for? web pages, game development, nice draws,
              a good interview...
            </h4>
          </div>
          <div class="contact-for">
            <button
              class="developer-btn hvr-fade  hvr-icon-wobble-horizontal"
              @click="redirect('/developer')"
            >
              Developer
              <i
                id="developer-btn-icon"
                class="fas fa-arrow-circle-right hvr-icon"
              ></i>
            </button>
            <button
              class="podcaster-btn  hvr-fade hvr-icon-wobble-horizontal"
              @click="redirect('/podcaster')"
            >
              Podcaster
              <i
                id="podcaster-btn-icon"
                class="fas fa-arrow-circle-right hvr-icon"
              ></i>
            </button>
            <button
              class="illustrator-btn hvr-fade hvr-icon-wobble-horizontal"
              @click="redirect('/illustrator')"
            >
              Illustrator
              <i
                id="illustrator-btn-icon"
                class="fas fa-arrow-circle-right hvr-icon"
              ></i>
            </button>
          </div>
        </div>

        <div id="dashboard-right-side">
          <div class="entire-logo">
            <div class="logo">
              <img id="logo-image" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="arrow-btn-container" class="">
      <i
        @click="goto('section')"
        class="arrow-btn fas fa-chevron-down"
      ></i>
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
    },
    goto: function(element) {
      const sections = document.getElementsByClassName(element);
      sections[0].scrollIntoView({
        behavior: "smooth"
      });
    }
  }
};
</script>

<style scoped>
#dashboard-container {
  background: #c9050b;
  border-width: 10px;
  padding-bottom: 3%;
  /* margin-bottom: 3%; */
  box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 15px;
}

.dashboard-top-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 2rem;
  margin-left: 10rem;
  margin-right: 10rem;
  margin-right: 15rem;
  margin-left: 15rem;
}

#dashboard-left-side {
  text-align: left;
}

.logo {
  background: #ffff;
  /* margin-right: 16.5rem; */
  /* margin-left: 13rem; */
}

.logo,
#logo-image {
  border-radius: 50%;
  width: 20rem;
  height: 20rem;
  width: 20rem;
  height: 20rem;
}

#dashboard-right-side {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#dashboard-title {
  font-family: "Fugaz One", cursive;
  font-size: 4rem;
  text-shadow: -6px 6px rgb(0, 0, 0, 0.7);
  color: #ffff;
  letter-spacing: 1px;
}

#dashboard-title-container {
  margin: 1rem;
  border-bottom: 9px double #ffff;
}

#dashboard-subtext {
  color: #ffff;
  padding-top: 1rem;
  padding-bottom: 2rem;
}

.contact-for {
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
}

.contact-for button {
  cursor: pointer;
  background: #a51212;
  color: white;
  padding: 0.5rem;
  /* width: 16rem; */
  /* margin-bottom: 1rem; */
  border-color: white;
  border-width: 7px;
  border-radius: 100px;
  border-style: solid;
  width: 30%;
  font-size: 17px;
}

.contact-for button:hover,
.contact-for button:focus,
.contact-for button:active {
  background: #ffff;
  border-color: #a51212;
  /* border-style: double; */
  color: #ea2027;
}

.developer-btn {
  font-family: "Anton", sans-serif;
}

.podcaster-btn {
  font-family: "Righteous", cursive;
}

.illustrator-btn {
  font-family: "Lobster", cursive;
}
/*
#podcaster-btn-icon {
  font-size: 1.5rem;
}

#illustrator-btn-icon {
  font-size: 1.5rem;
} */

#arrow-btn-container {
  text-align: center;
  padding: 2rem;
}

.arrow-btn {
  cursor: pointer;
  font-size: 3rem;
  color: #c9050b;
}
</style>
