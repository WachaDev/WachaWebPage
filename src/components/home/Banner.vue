<template>
  <section id="banner">
    <div id="banner-container">
      <div class="banner-top-container">
        <div id="banner-left-side">
          <div id="banner-title-container">
            <h1 id="banner-title">
              WachaOut!
            </h1>
            <h4 id="banner-subtext">
              What are you looking for? web pages, game development, nice
              drawings, a good interview...
            </h4>
          </div>
          <div class="contact-for">
            <router-link
              class="btn developer-btn hvr-fade  hvr-icon-up"
              to="/developer"
            >
              Developer
              <i id="developer-btn-icon" class="fas fa-code hvr-icon"></i>
            </router-link>
            <router-link
              class="btn podcaster-btn  hvr-fade hvr-icon-up"
              to="/podcaster"
            >
              Podcaster
              <i id="podcaster-btn-icon" class="fas fa-microphone hvr-icon"></i>
            </router-link>
            <router-link
              class="btn illustrator-btn hvr-fade hvr-icon-up"
              to="/illustrator"
            >
              Illustrator
              <i id="illustrator-btn-icon" class="fas fa-palette hvr-icon"></i>
            </router-link>
          </div>
        </div>

        <div id="banner-right-side">
          <div class="entire-logo">
            <div class="logo">
              <img id="logo-image" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
#banner {
  position: relative;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 15px;
}

#banner-container {
  background: #f90716;
  border-width: 10px;
  padding-bottom: 2rem;
  padding-top: 2rem;
}

.banner-top-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-left: 10rem;
  margin-right: 10rem;
  margin-right: 15rem;
  margin-left: 15rem;
}

#banner-left-side {
  text-align: left;
}

.logo {
  background: #ffff;
}

.logo,
#logo-image {
  border-radius: 50%;
  width: 20rem;
  height: 20rem;
  width: 20rem;
  height: 20rem;
}

#banner-right-side {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#banner-title {
  font-family: "Fugaz One", cursive;
  font-size: 4rem;
  text-shadow: -6px 6px rgb(0, 0, 0, 0.7);
  color: #ffff;
  letter-spacing: 1px;
}

#banner-title-container {
  margin-bottom: 1rem;
  margin-top: 1rem;
  border-bottom: 9px double #ffff;
}

#banner-subtext {
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

.btn {
  cursor: pointer;
  background: white;
  color: #c9050b;
  padding: 0.5rem;
  border: none;
  border-radius: 100px;
  width: 30%;
  font-size: 1.2rem;
  box-shadow: -6px 6px rgba(0, 0, 0, 10);
  text-align: center;
}

.btn:hover,
.btn:focus,
.btn:active {
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
  font-family: "Lobster Two", cursive;
  font-weight: bold;
}

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
