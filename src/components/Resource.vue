<template>
  <div class="resource">
    <div class="resource-card">
      <img
        class="resource-img"
        :src="image"
        :style="{ 'height': height, 'width': width }"
        alt=""
      />
    </div>
    <div class="resource-description">
      <h4 class="tagline">{{ tagline }}</h4>
      <h3 class="name">{{ name }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    tagline: {
      type: String,
      required: true
    },
    // height: {
    //   type: String,
    //   default: "80px"
    // },
    // width: {
    //   type: String,
    //   default: "80px"
    // }
  }
};
</script>

<style scoped>
.resource {
  display: flex;
  align-content: center;
  padding: 1.5rem;
  background: #f3f3f3;
  border-radius: 10px;
  margin-top: 10px;
  max-height: 12rem;
  height: 8rem;
  width: auto;
}

.resource-description {
  display: flex;
  flex-direction: column;
  align-self: center;
}

.resource-img {
  max-width: 100%;
  max-height: 100%;
}

.name {
  color: black;
}
</style>
