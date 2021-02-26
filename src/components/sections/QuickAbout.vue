<template>
  <div>
    <section class="quick-about">
      <article class="article">
        <!-- Similar to "Who Am I" but oriented to the specific job. -->
        <h1 class="title">{{ title }}</h1>
        <p>{{ content }}</p>
      </article>
      <img :src="picture" alt="" />
    </section>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    content: String,
    picture: String
  }
};
</script>

<style scoped>
.quick-about {
  display: grid;
  margin-top: 1rem;
  margin-left: 5%;
  margin-right: 5%;
  grid-template-columns: 1fr 1fr;
  background: #ffff;
  padding: 4%;
}

.quick-about img {
  display: block;
  border-radius: 8%;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}

.title {
  text-align: center;
  font-size: 5rem;
}
</style>
