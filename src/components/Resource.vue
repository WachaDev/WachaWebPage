<template>
  <div class="resource">
    <div class="resource-container">
      <img
        class="resource-img"
        :src="image"
        :style="{ 'height': height, 'width': width }"
        alt=""
      />
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
    height: {
      type: String,
    },
    width: {
      type: String,
    }
  }
};
</script>

<style scoped>
.resource {
  display: flex;
  padding: 1.5rem;
  background: #f3f3f3;
  border-radius: 10px;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
  width: auto;
  min-height: 10rem;
  max-height: 10rem;
}


.resource-img {
  width: 100%;
  height: 100%;
}

.name {
  color: black;
}
</style>
