<template>
  <section class="section">
    <!-- <Title text="Resources" /> -->
    <div class="section-container">
      <div class="card-left">
        <div>
          <h1>Front-end</h1>
          <p class="description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
            minima debitis maiores magni, velit odit? Hic ratione eum porro
            totam voluptate.
          </p>
        </div>
        <div class="resources-container">
          <Resource
            image="/static/Resources_logo/Vue.png"
            name="Vue.js"
            tagline="The Progressive JavaScript Framework"
          />
          <Resource
            image="/static/Resources_logo/Bootstrap.png"
            name="Bootstrap"
            tagline="Build fast, responsive sites"
          />
        </div>
      </div>

      <div class="card-right">
        <div>
          <h1>Front-end</h1>
          <p class="description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
            minima debitis maiores magni, velit odit? Hic ratione eum porro
            totam voluptate.
          </p>
        </div>
        <div class="resources-container">
          <Resource
            image="/static/Resources_logo/Vue.png"
            name="Vue.js"
            tagline="The Progressive JavaScript Framework"
          />
          <Resource
            image="/static/Resources_logo/Bootstrap.png"
            name="Bootstrap"
            tagline="Build fast, responsive sites"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Title from "../components/Title";
import Resource from "../components/Resource";

export default {
  components: {
    Title,
    Resource
  }
};
</script>

<style scoped>
.section-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.card-left {
  border-radius: 10px;
}

.resources-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 2;
}
</style>
