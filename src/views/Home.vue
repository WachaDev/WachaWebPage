<template>
  <div class="main-content">
    <Dashboard />
    <Section1
      :styles="{
        boxShadowReverse: false,
        sideReverse: false
      }"
      :content="{
        title: 'Who Am I?',
        paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Culpa nam quam, dolorem pariatur placeat corrupti inventore
          maiores. Voluptate alias hic mollitia incidunt adipisci,
          consectet quasi. Aut assumenda consectetur vero dicta fugit
          placeat exercitationem ea necessitatibus, odio`,
        picture:
          'https://i.picsum.photos/id/1025/4951/3301.jpg?hmac=_aGh5AtoOChip_iaMo8ZvvytfEojcgqbCH7dzaz-H8Y'
      }"
    />

    <section id="most-loved-works" class="section">
      <div class="title-container">
        <h1 class="title hvr-icon-pop">
          Most Loved Works <i class="fas fa-heart hvr-icon"></i>
        </h1>
      </div>
      <div class="gallery-container">
        <div class="gallery1">
          <div id="image-section1">
            <div class="img-container image1-container">
              <img
                class="image1"
                src="https://picsum.photos/seed/picsum/200/300"
                alt=""
              />
            </div>

            <div class="img-container image2-container">
              <img
                class="image2"
                src="https://picsum.photos/200/300?grayscale"
                alt=""
              />
            </div>

            <div class="img-container group">
              <img
                class="image3"
                src="https://picsum.photos/200/300/?blur=2"
                alt=""
              />
            </div>
            <div class="img-container group">
              <img
                class="image5"
                src="https://picsum.photos/id/237/200/300"
                alt=""
              />
            </div>
            <div class="img-container group">
              <img
                class="image6"
                src="https://picsum.photos/200/300.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <router-link class="hvr-icon-forward" to="/gallery">
          <i class="fas fa-long-arrow-alt-right hvr-icon"></i> Show all
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
import Dashboard from "../components/sections/Dashboard";
import Section1 from "../components/Section1";

export default {
  components: {
    Dashboard,
    Section1
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
  grid-template-columns: repeat(4, auto);
  grid-template-rows: 1fr 1fr;
  gap: 5px;
  padding-left: 2rem;
  padding-right: 2rem;
}

.gallery1 .image1 {
  height: 100%;
  max-height: 100%;
  width: 100%;
}

.image1-container {
  grid-column: 1/4;
}

.image2-container {
  /* grid-row-end: 3; */
}

.gallery1 .image2 {
  height: 100%;
  max-height: 100%;
  width: 100%;
}

#image-section1 {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr 1fr;
}

/* .group {
  grid-row: 2/3;
} */

/*
.gallery1 * {
  border: 1px solid black;
}  */
</style>
