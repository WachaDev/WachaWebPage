<template>
  <router-link :to="route" class="hvr-icon-forward">
    <div id="card" ref="card" :style="{ 'background-image': `url(${image})` }">
      <div ref="cardContainer" class="card-container">
        <div class="content">
          <h1
            class="title"
            :style="{ 'font-family': fontFamily, 'font-size': fontSize }"
          >
            {{ title }}
          </h1>
          <p>{{ description }}</p>
          <div class="btn-container">
            <button class="see-more ">
              See more
              <font-awesome-icon
                icon="fa-solid fa-circle-arrow-right"
                class="hvr-icon"
              />
            </button>
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
    fontFamily: String,
    fontSize: String
  }
};
</script>

<style scoped>
#card {
  background-repeat: no-repeat;
  background-size: 100% 100%;
  padding-top: 14rem;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 5px 15px;
  transition: all 0.2s;
}

#card:hover {
  transform: scale(1.05);
  background: "#c9050c";
  box-shadow: rgba(0, 0, 0, 0.8) 0px 15px 25px;
}

.card-container {
  background: #c9050c;
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

.btn-container {
  text-align: center;
}

.see-more {
  font-family: "Fira Sans";
  margin-top: 10px;
  text-align: right;
  background: white;
  color: #c9050c;
  padding: 0.8rem;
  font-size: 1rem;
  border-radius: 10px;
  border: none;
}
</style>
