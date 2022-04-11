<template>
  <router-link :to="route" class="hvr-icon-forward">
    <div
      id="card"
      ref="card"
      :style="{ 'background-image': `url(${image})` }"
      @mouseover="toggleFocusStyle(true)"
      @mouseleave="toggleFocusStyle(false)"
    >
      <div class="card-container" ref="cardContainer">
        <div class="content">
          <h1 class="title" :style="{ 'font-family': font }">{{ title }}</h1>
          <p>{{ description }}</p>
          <div class="see-more ">
            See more
            <font-awesome-icon
              icon="fa-solid fa-circle-arrow-right"
              class="hvr-icon"
            />
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    route: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    font: String
  },
  methods: {
    toggleFocusStyle: function(focus) {
      const cardContainer = this.$refs.cardContainer.style;

      if (focus) {
        cardContainer.background = "#c9050c";
        cardContainer.padding = "2rem";
      } else {
        cardContainer.background = "#c9050cd5";
        cardContainer.padding = "24px";
      }
    }
  }
};
</script>

<style scoped>
/* FIXME: the top margin triggers the icon animation */
#card {
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding-top: 14rem;
  margin-top: 2rem;
  border-radius: 10px;
  transition: all 0.5s;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 15px;
}

.card-container {
  background: #c9050cd5;
  text-align: left;
  color: #ffff;
  font-size: 1.1rem;
  padding: 1.5rem;
  border-radius: 0px 0px 10px 10px;
  transition: all 0.5s;
}

.title {
  font-size: 26.4px;
  margin-bottom: 4px;
  border-bottom: 2px solid white;
  letter-spacing: 1px;
}

.see-more {
  text-align: right;
}
</style>
