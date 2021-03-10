<template>
  <section class="gallery-section section" :class="{ 'boxShadowLeft': styles.boxShadowReverse }">
    <div class="title-container">
      <h1 class="title hvr-icon-pop">
        {{ content.title }} 
      </h1>
    </div>
    <div class="gallery-container">
      <div class="gallery1">
        <div class="image-section1">

          <div class="img-container image1-container">
            <img class="picture image1" :src="content.images[0]" alt="" />
          </div>

          <div class="img-container image2-container">
            <img class="picture image2" :src="content.images[1]" alt="" />
          </div>

          <div class="img-container group">
            <img class="picture image3" :src="content.images[2]" alt="" />
          </div>

          <div class="img-container group">
            <img class="picture image4" :src="content.images[3]" alt="" />
          </div>

          <div class="img-container group">
            <img class="picture image5" :src="content.images[4]" alt="" />
          </div>

        </div>
      </div>
      <router-link class="hvr-icon-forward" to="/gallery">
        <i class="fas fa-long-arrow-alt-right hvr-icon"></i> Show all
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    styles: {
      boxShadowReverse: Boolean,
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
.gallery-section {
  background: #ffff;
  border-radius: 25px;
  border: solid;
  margin-bottom: 6rem;
  text-align: center;
  border: 5px double #ea2027;
  box-shadow: 2.7rem 2.7rem #c71919;
}

.image-section1 {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr 1fr;
}

.boxShadowLeft {
  box-shadow: -2.7rem 2.7rem #c71919;
}

.picture {
  /* width: 100%; */
  /* height: 50%; */
  border-radius: 25px;
  object-fit: cover;
}

.gallery1 {
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr 1fr;
  gap: 5px;
  padding-left: 2rem;
  padding-right: 2rem;
}

.image1 {
  height: 100%;
  max-height: 100%;
  /* width: 50%; */
}

.image1-container {
  grid-column: 1/4;
}

.image2 {
  height: 100%;
  max-height: 100%;
  width: 100%;
}

.image2-container {
  grid-column: 4/5;
  grid-row: 1/3;
}
</style>
