<template>
  <div class="main-content">
    <!-- Posible showcase in home route? -->
    <div id="dashboar-container">
      <section id="dashboard">
        <div id="dashboard-left-side">
          <div class="logo">
            <img src="" alt="" />
          </div>
          <h1 class="brand-name"></h1>
        </div>

        <div id="dashboard-right-side">
          <div id="dashboard-title-container">
            <h1 id="dashboard-title">
              What Are <strong>You</strong> Looking For?
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
        <div class="gallery1">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            repellendus! Quae a aperiam pariatur?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            repellendus! Quae a aperiam pariatur?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            repellendus! Quae a aperiam pariatur?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            repellendus! Quae a aperiam pariatur?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            repellendus! Quae a aperiam pariatur?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur, corporis modi. Accusamus exercitationem alias ullam
            error ratione est ipsum amet omnis, qui ipsam magnam quaerat
            repellendus! Quae a aperiam pariatur?
          </p>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    redirect: function(path) {
      this.$router.push({ path });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Anton&family=Lobster&family=Righteous&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Fugaz+One&display=swap");

#dashboard {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: #ea2027;
  padding: 2rem;
  margin-bottom: 3%;
}

#dashboard-left-side {
  display: flex;
  justify-content: center;
}

#dashboard-right-side {
}

#dashboard-title {
  font-family: "Fugaz One", cursive;
  font-size: 2rem;
  text-align: left;
  color: #ffff;
  margin-bottom: 2rem;
}

.contact-for {
  display: flex;
  flex-direction: column;
}

.contact-for button {
  background: #ea2027;
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
  color: red;
}

.developer-btn {
  font-family: "Anton", sans-serif;
  font-size: 1.5rem;
}

.podcaster-btn {
  font-family: "Righteous", cursive;
  font-size: 1.6rem;
}

.illustrator-btn {
  font-family: "Lobster", cursive;
  font-size: 1.6rem;
}

#developer-btn-icon {

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
  border: #d63031 solid;
  padding: 6rem;
  margin-bottom: 6rem;
}

.title {
  font-family: "Fugaz One";
  color: #ea2027;
  font-size: 3rem;
  text-align: center;
  padding: 1rem;
}

.paragraph {
  font-size: 1.1rem;
  text-align: center;
}

#most-loved-works {
  background: #ffff;
  box-shadow: 2.7rem 2.4rem #d63031;
  border: #d63031 solid;
  margin-bottom: 6rem;
}

.gallery1 {
  display: grid;
  grid-template-rows: 2fr 1fr;
  grid-template-columns: 4fr 2fr 2fr;
  gap: 10px;
  border: 1px solid black;
  padding: 2rem;
}
</style>
