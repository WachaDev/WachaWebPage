<template>
  <router-link :style="cssProps" :to="route" class="hvr-icon-forward">
    <div id="card">
      <div class="card-container">
        <div class="content">
          <h1 class="title">{{ title }}</h1>
          <p>{{ description }}</p>
          <div class="see-more ">
            See more
            <font-awesome-icon icon="fa-solid fa-circle-arrow-right" class="hvr-icon" />
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  data: function () {
    return {
      imageURL: `url(${this.image})`,
      fontFamily: this.font
    }
  },
  props: {
    route: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    font: String
  },
  computed: {
    cssProps: function() {
      return {
        '--background-image': this.imageURL,
        '--font-family': this.fontFamily
      }
    }
  }
};
</script>

<style scoped>
#card {
  background-image: var(--background-image) ;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding-top: 14rem;
  margin-top: 2rem;
  border-radius: 10px;
  /* box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 15px; */
}

.card-container {
  background: #c9050cd5;
  text-align: left;
  color: #ffff;
  font-size: 1.1rem;
  padding: 1.5rem;
  border-radius: 0px 0px 10px 10px;
}

.title {
  font-family: var(--font-family);
  font-size: 26.4px;
  margin-bottom: 4px;
  border-bottom: 2px solid white;
  letter-spacing: 1px;
}

.see-more {
  text-align: right;
}
</style>
