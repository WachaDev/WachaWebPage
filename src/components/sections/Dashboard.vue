<template>
  <section id="dashboard">
    <div id="top-dashboard">
      <div id="top-dashboard-container">
        <div id="dashboard-left-side">
          <div class="entire-logo">
            <div class="logo">
              <img
                id="logo-image"
                alt=""
              />
            </div>
            <h1 class="brand-name"></h1>
          </div>
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
    </div>

    <div id="bottom-dashboard">
      <div id="aptitudes">
        <div id="aptitudes-container">
          <div id="skilled">
            <div class="aptitude-container">
              <div class="icon-container">
                <i class="fas fa-lightbulb"></i>
              </div>
              <div class="subtitle-container">
                <h3 class="subtitle">Skilled</h3>
              </div>
              <div class="paragraph-container">
                <p class="paragraph">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Cumque optio sapiente earum aperiam voluptas sed quo sit? Ex,
                  expedita cupiditate.
                </p>
              </div>
            </div>
          </div>

          <div id="responsable">
            <div class="aptitude-container">
              <div class="icon-container">
                <i class="fas fa-calendar-check"></i>
              </div>
              <div class="subtitle-container">
                <h3 class="subtitle">Responsable</h3>
              </div>
              <div class="paragraph-container">
                <p class="paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
                  earum laborum consequatur perspiciatis officiis tempore atque
                  a, eius.
                </p>
              </div>
            </div>
          </div>

          <div id="dedicated">
            <div class="aptitude-container">
              <div class="icon-container">
                <i class="fas fa-fire"></i>
              </div>
              <div class="subtitle-container">
                <h3 class="subtitle">Dedicated</h3>
              </div>
              <div class="paragraph-container">
                <p class="paragraph">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Fugiat dolores nam ullam officiis maiores perferendis ab
                  repellat asperiores, incidunt a.
                </p>
              </div>
            </div>
          </div>
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

#top-dashboard-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-top: 2rem;
  margin-right: 23rem;
  margin-left: 23rem;
}

#dashboard-left-side {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.logo {
  background: #ffff;
  /* margin-right: 16.5rem; */
  /* margin-left: 13rem; */
}

.logo, #logo-image {
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
  font-size: 2rem;
  text-shadow: -6px 6px rgb(0, 0, 0, 0.2);
  text-align: left;
  color: #ffff;
  margin-top: 1rem;
}

.contact-for {
  display: flex;
  flex-direction: column;
  margin-top: 1.2rem;
}

.contact-for button {
  cursor: pointer;
  background: #c71919;
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
  /* border-style: double; */
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

#aptitudes {
  margin-left: 10rem;
  margin-right: 10rem;
}

#aptitudes-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  text-align: center;
  padding: 5%;
  /* margin-bottom: 12px; */
  color: #fff;
  font-weight: bold;
  /* background: #c71919; */
}

.aptitude-container {
  background: #c71919;
  padding: 1rem;
}

.subtitle-container {
  margin-bottom: 10px;
}

.subtitle {
  font-size: 1.5rem;
  font-family: "Fugaz One";
}

.paragraph-container {
  margin-left: 4rem;
  margin-right: 4rem;
}

.icon-container {
  margin-bottom: 0.5rem;
}

#aptitudes i {
  font-size: 1.5rem;
}
</style>
