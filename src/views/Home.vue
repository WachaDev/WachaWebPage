<template>
  <div class="main-content">
    <Dashboard />
    <section id="who-am-i" class="section">
      <div id="who-am-i-left-side">
        <div class="title-container">
          <h1 class="title">Who Am I?</h1>
        </div>
        <div class="paragraph-container">
          <p class="paragraph">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, quas quo deserunt aut voluptatem enim hic. Accusantium,
            culpa! Laboriosam modi odio saepe nulla impedit ut sed sit hic culpa
            a nesciunt accusamus aspernatur delectus, quo nihil tempore, id,
            laborum qui?
          </p>
        </div>
      </div>
      <div id="who-am-i-left-side">
        <img
          class="image"
          src="https://i.picsum.photos/id/1025/4951/3301.jpg?hmac=_aGh5AtoOChip_iaMo8ZvvytfEojcgqbCH7dzaz-H8Y"
          alt=""
        />
      </div>
    </section>

    <section id="most-loved-works" class="section">
      <div class="title-container">
        <h1 class="title hvr-icon-pop">
          Most Loved Works <i class="fas fa-heart hvr-icon"></i>
        </h1>
      </div>
      <div class="gallery-container">
        <div class="gallery1">
          <div id="image-section1">
            <!-- <div class="img-container"> -->
            <img
              class="image1"
              src="https://picsum.photos/seed/picsum/200/300"
              alt=""
            />
            <!-- </div> -->
            <!-- <div class="img-container"></div>
            <div class="img-container"></div>
            <div class="img-container"></div>
            <div class="img-container"></div> -->
            <img
              class="image2"
              src="https://picsum.photos/200/300?grayscale"
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
        </div>
        <router-link class="hvr-icon-forward" to="/gallery">
          <i class="fas fa-long-arrow-alt-right hvr-icon"></i> See all
        </router-link>
      </div>
    </section>
    <!-- <button v-on:click="topPage()">Top</button> -->
  </div>
</template>

<script>
import Dashboard from "../components/sections/Dashboard";
import WhoAmI from "../components/sections/WhoAmI";

export default {
  components: {
    Dashboard,
    WhoAmI
  },

  methods: {
    topPage: function() {
      scroll({
        top: window.top,
        behavior: "smooth"
      });
    }
  }
};
</script>

<style scoped>
#who-am-i {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: #ffff;
  box-shadow: -2.7rem 2.7rem #c71919;
  border: 5px double #ea2027;
  border-radius: 25px;
  padding: 6rem;
  margin-bottom: 6rem;
}

#who-am-i-right-side {
  padding: 1rem;
}

#who-am-i-left-side {
  padding: 1rem;
}

.image {
  width: 400px;
  height: 300px;
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
  box-shadow: 2.7rem 2.7rem #c71919;
  border-radius: 25px;
  border: solid;
  margin-bottom: 6rem;
  text-align: center;
  border: 5px double #ea2027;
}

.gallery1 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr 1fr;
  gap: 5px;
  padding-left: 2rem;
  padding-right: 2rem;
}

.gallery1 .image1 {
  /* grid-row: 1/4; */
  height: 20rem;
  width: 40rem;
}

.gallery1 .image2 {
  height: 40rem;
  width: 17rem;
}

/*
.gallery1 * {
  border: 1px solid black;
}  */
</style>
