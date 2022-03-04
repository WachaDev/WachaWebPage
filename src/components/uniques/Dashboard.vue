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
              class="developer-btn hvr-fade  hvr-icon-up"
              @click="redirect('/developer')"
            >
              Developer
              <i
                id="developer-btn-icon"
                class="fas fa-code hvr-icon"
              ></i>
            </button>
            <button
              class="podcaster-btn  hvr-fade hvr-icon-up"
              @click="redirect('/podcaster')"
            >
              Podcaster
              <i
                id="podcaster-btn-icon"
                class="fas fa-microphone hvr-icon"
              ></i>
            </button>
            <button
              class="illustrator-btn hvr-fade hvr-icon-up"
              @click="redirect('/illustrator')"
            >
              Illustrator
              <i
                id="illustrator-btn-icon"
                class="fas fa-palette hvr-icon"
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
        behavior: "smooth",
      });
    }
  }
};
</script>

<style scoped>
#dashboard-container {
  background: #F90716;
  /* background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.24' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E"); */
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
  margin-bottom: 1rem;
  margin-top: 1rem;
  border-bottom: 9px double #ffff;
}

#dashboard-subtext {
  color: #ffff;
  font-size: 1.2rem;
  padding-top: 0.5rem;
  padding-bottom: 1.5rem;
}

.contact-for {
  display: flex;
  justify-content: space-between;
  padding-top: 1rem;
}

.contact-for button {
  cursor: pointer;
  background: white;
  color: #c9050b;
  padding: 0.5rem;
  border: none;
  border-radius: 100px;
  width: 30%;
  font-size: 1.2rem;
  box-shadow: -6px 6px rgba(0, 0, 0, 10);
}

.contact-for button:hover,
.contact-for button:focus,
.contact-for button:active {
  color: rgb(0, 0, 0);
  background: rgb(255, 241, 42);
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
