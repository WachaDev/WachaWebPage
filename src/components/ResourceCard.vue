<template>
  <div class="card">
    <div>
      <h1 class="title">{{ title }}</h1>
        <font-awesome-icon icon="fa-solid fa-server" />
      <p class="description">{{ description }}</p>
    </div>
    <div class="resources-container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Resource from "../components/Resource";

export default {
  components: { Resource },
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.title {
  color: black;
}

.description {
  margin-top: 15px;
  margin-bottom: 15px;
}
</style>