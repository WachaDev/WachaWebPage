<template>
  <div class="resource">
    <div class="resource-card">
      <img class="resource-img" :src="image" alt="" />
    </div>
    <div class="resource-description">
      <h3>{{ name }}</h3>
      <h4>{{ tagline }}</h4>
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
    }
  }
}
</script>

<style scoped>
.resource {
  display: flex;
  padding: 1.5rem;
  background: #f3f3f3;
  width: fit-content;
  border-radius: 10px;
}

.resource-card {
}

.resource-img {
  height: 80px;
  width: 80px;
}

.resource-description {
  display: flex;
  flex-direction: column;
}
</style>