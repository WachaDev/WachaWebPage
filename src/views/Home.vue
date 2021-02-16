<template>
  <div class="main-content">
    <!-- Posible showcase in home route? -->
    <div id="dashboard-container">
      <section id="dashboard">
        <div id="dashboard-left-side">
          <div class="logo">
            <img src="" alt="" />
            <pre></pre>
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
              v-on:click="redirect('/developer')"
            >
              Developer
              <i
                id="developer-btn-icon"
                class="fas fa-arrow-circle-right hvr-icon"
              ></i>
            </button>
            <button
              class="podcaster-btn  hvr-fade hvr-icon-wobble-horizontal"
              v-on:click="redirect('/podcaster')"
            >
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
      </section>
    </div>

    <div class="placeholder">
      <section id="who-am-i">
        <div id="who-am-i-left-side">
          <div class="title-container">
            <h1 class="title">Who Am I?</h1>
          </div>
          <div class="paragraph-container">
            <p class="paragraph">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis, quas quo deserunt aut voluptatem enim hic.
              Accusantium, culpa! Laboriosam modi odio saepe nulla impedit ut
              sed sit hic culpa a nesciunt accusamus aspernatur delectus, quo
              nihil tempore, id, laborum qui?
            </p>
          </div>
        </div>
      </section>

      <section id="most-loved-works">
        <div class="title-container">
          <h1 class="title hvr-icon-pop">
            Most Loved Works <i class="fas fa-heart hvr-icon"></i>
          </h1>
        </div>
        <div class="gallery-container">
          <div class="gallery1">
            <div id="image-section1">
              <img
                class="image1"
                src="https://picsum.photos/seed/picsum/200/300"
                alt=""
              />

              <img
                class="image3"
                src="https://picsum.photos/200/300/?blur=2"
                alt=""
              />
              <img
                class="image5"
                src="https://picsum.photos/id/237/200/300"
                alt=""
              />
              <img
                class="image6"
                src="https://picsum.photos/200/300.jpg"
                alt=""
              />
            </div>
            <img
              class="image2"
              src="https://picsum.photos/200/300?grayscale"
              alt=""
            />
          </div>
          <router-link class="hvr-icon-forward" to="/gallery">
            <i class="fas fa-long-arrow-alt-right hvr-icon"></i> See all
          </router-link>
        </div>
      </section>
      <!-- <button v-on:click="topPage()">Top</button> -->
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    redirect: function(path) {
      this.$router.push({ path });
    },
    topPage: function() {
      scroll({
        top: window.top,
        behavior: "smooth"
      });
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#dashboard-container {
  background: #ea2027;
  border-bottom: 9px dotted #ffff;
  margin-bottom: 3%;
}

#dashboard {
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

.placeholder {
  margin-left: 20%;
  margin-right: 20%;
  margin-bottom: auto;
}

#who-am-i {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: #ffff;
  box-shadow: -2.7rem 2.4rem #d63031;
  border: 5px double #d63031;
  padding: 6rem;
  margin-bottom: 6rem;
}

.title {
  font-family: "Fugaz One";
  color: #ea2027;
  font-size: 3rem;
  text-align: center;
  margin: 1rem;
}

.paragraph {
  font-size: 1.1rem;
  text-align: center;
}

#most-loved-works {
  background: #ffff;
  box-shadow: 2.7rem 2.4rem #d63031;
  border: solid;
  margin-bottom: 6rem;
  text-align: center;
  border: 5px double #ea2027;
}

.gallery1 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;
  padding-left: 2rem;
  padding-right: 2rem;
}

.gallery1 .image1 {
  /* grid-column: 1/3; */
  height: 20rem;
  width: 40rem;
}

.gallery1 .image2 {
  height: 40rem;
  width: 17rem;
}

.gallery1 * {
  border: 1px solid black;
}
</style>
