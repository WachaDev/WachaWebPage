<template>
  <section
    class="gallery-section"
    :class="{ boxShadowLeft: styles.boxShadowReverse }"
  >
    <div class="section-container">
      <div class="title-container">
        <h1 class="title hvr-icon-pop">
          {{ content.title }}
        </h1>
      </div>

      <div class="gallery-container">
        <div class="gallery1"> 
          <div class="img-container image1-container">
            <img class="image1" :src="content.images[0]" alt="" />
            <h4 class="counters">Inception: A Current Project</h4>
            <div>Current</div>
          </div>

          <div class="img-container image2-container">
            <img class="image2" :src="content.images[1]" alt="" />
            <h4 class="counters">A Lanscape or something else</h4>
            <div>01/01/21</div>
          </div>

          <div class="img-container image3-container">
            <img class="image3" :src="content.images[2]" alt="" />
            <h4 class="counters">Random Image</h4>
            <div>04/07/20</div>
          </div>

          <div class="img-container image4-container">
            <img class="image4" :src="content.images[3]" alt="" />
            <h4>Hello doggy!</h4>
            <div>05/07/20</div>
          </div>

          <div class="img-container image5-container">
            <img class="image5" :src="content.images[4]" alt="" />
            <h4>Another random image</h4>
            <div>05/07/20</div>
          </div>

          <div class="img-container image6-container">
            <img class="image6" :src="content.images[5]" alt="" />
            <h4>Oh my god! It's Fill Murray!</h4>
            <div>05/07/20</div>
          </div>

        </div>

        <div class="btn-container">
          <router-link class="hvr-icon-forward" to="/gallery">
            <button class="show-all-btn hvr-fade">Show all</button>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    styles: {
      boxShadowReverse: Boolean
    },
    content: {
      icon: String,
      title: {
        type: String,
        required: true
      },
      images: {
        type: Array,
        required: true
      }
    }
  }
};
</script>

<style scoped>
section {
  background: #ffff;
  /* #E1E7E4 */
  padding: 2rem;
}

.section-container {
  margin-left: 10%;
  margin-right: 10%;
}

.title-container {
  text-align: center;
}

.gallery1 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr 1fr;
  gap: 10px;
}

.gallery1 * {
  border-radius: 25px;
}

.image1-container {
  grid-column: 1/3;
}

.image1 {
  width: 100%;
  height: 300px;
}

.image2 {
  width: 100%;
  height: 300px;
}

.image4-container {
  background-size: cover;
  background-image: linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)), url('https://picsum.photos/id/237/200/300');
}

.image3 {
  width: 100%;
  height: 300px;
}

.image4 {
  width: 100%;
  height: 300px;
}

.image5 {
  width: 100%;
  height: 300px;
}

.image6-container {
  grid-row: 2;
  grid-column: 3/5; 
  background-size: cover;
  background-image: linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)), url('https://www.fillmurray.com/640/360');
}

.image6 {
  width: 100%;
  height: 300px;
}

.show-all-btn {
  font-family: 'Lobster';
  font-size: 5rem;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  color: #c71919;
  padding: 0.5rem;
  border-radius: 100px;
  border: 7px solid #c71919;
}

.image7-container {
  background-size: cover;
  background-image: linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)), url('https://picsum.photos/id/870/200/300?grayscale&blur=2');
}

.image8-container {
  background-size: cover;
  background-image: linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)), url('https://picsum.photos/id/870/200/300?grayscale&blur=2');
}

.image9-container {
  background-size: cover;
  background-image: linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)), url('https://picsum.photos/id/870/200/300?grayscale&blur=2');
}

.image10-container {
  background-size: cover;
  background-image: linear-gradient(to top, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0)), url('https://picsum.photos/id/870/200/300?grayscale&blur=2');
}

.show-all-btn:hover,
.show-all-btn:focus,
.show-all-btn:active {
  color: #ffff;
  background: #a51212;
  border-color: #ffff;
}

.btn-container {
  margin-top: 15px;
  text-align: center;
}

.counters {
  display: inline;
}
</style>
