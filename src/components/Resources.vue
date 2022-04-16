<template>
  <section class="section">
    <Title text="Resources"/>
    <div class="section-container">
      <ResourceCard
        title="Front-end"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
        minima debitis maiores magni, velit odit? Hic ratione eum porro totam
        voluptate."
        icon="fa-solid fa-server"
      >
        <Resource
          name="Vue.js"
          tagline="The Progressive JavaScript Framework"
          image="/static/Resources_logo/vuejs.png"
          height="100px"
        />
        <Resource
          name="Bootstrap"
          tagline="Build fast, responsive sites"
          image="/static/Resources_logo/bootstrap.png"
          height="180px"
        />
        <Resource
          name="Font Awesome"
          tagline="Take the hassle out of icons in your projects"
          image="/static/Resources_logo/fontawesome.png"
          height="50px"
        />
      </ResourceCard>

      <ResourceCard
        title="Back-end"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
        minima debitis maiores magni, velit odit? Hic ratione eum porro totam
        voluptate."
        icon="fa-solid fa-server"
      >
        <Resource
          name="Django"
          tagline="The web framework for perfectionists with deadlines"
          image="/static/Resources_logo/django.png"
          height="300px"
        />
        <Resource
          name="Flask"
          tagline="Web development, one drop at a time"
          image="/static/Resources_logo/flask.png"
          height="140px"
        />
        <Resource
          name="Next.js"
          tagline="The React Framework for Production"
          image="/static/Resources_logo/nextjs.png"
        />
      </ResourceCard>
    </div>
  </section>
</template>

<script>
import Title from "../components/Title";
import ResourceCard from "../components/ResourceCard";
import Resource from "../components/Resource";

export default {
  components: {
    Title,
    ResourceCard,
    Resource
  }
};
</script>

<style scoped>
.section-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}

.card {
  border-radius: 10px;
  padding: 1rem;
  background: white;
}
</style>
