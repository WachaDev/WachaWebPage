<template>
  <div class="card">
    <div>
      <div class="header">
        <h1 class="title">{{ title }}</h1>
        <font-awesome-icon class="icon" :icon="icon" />
      </div>
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
    },
    icon: String
  }
};
</script>

<style scoped>
.card {
  border: 3px solid #f3f3f3;
  padding: 2rem;
}

.header {
  display: flex;
}

.icon {
  margin-left: auto;
  align-self: center;
  font-size: 1.5rem;
}

.title {
  color: black;
}

.description {
  margin-top: 15px;
  margin-bottom: 15px;
}
</style>
