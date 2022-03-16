<template>
  <section class="section">
    <Title text="Resources"/>
    <div class="section-container">
      <ResourceCard
        title="Front-end"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
        minima debitis maiores magni, velit odit? Hic ratione eum porro totam
        voluptate."
      >
        <Resource
          name="Vue.js"
          tagline="The Progressive JavaScript Framework"
          image="/static/Resources_logo/Vue.png"
        />
        <Resource
          name="Bootstrap"
          tagline="Build fast, responsive sites"
          image="/static/Resources_logo/Bootstrap.png"
        />
        <Resource
          name="Font Awesome"
          tagline="Take the hassle out of icons in your projects"
          image="/static/Resources_logo/Font_Awesome_5_logo_black.svg"
        />
      </ResourceCard>

      <ResourceCard
        title="Back-end"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur
        minima debitis maiores magni, velit odit? Hic ratione eum porro totam
        voluptate."
      >
        <Resource
          name="Django"
          tagline="The web framework for perfectionists with deadlines"
          image="/static/Resources_logo/kisspng-django-python-computer-icons-logo-portable-network-django-python-recruitment-task-1-5b6748f386f486.9191155715334955395528.png"
        />
        <Resource
          name="Flask"
          tagline="Web development, one drop at a time"
          image="/static/Resources_logo/Flask.svg"
        />
        <Resource
          name="Next.js"
          tagline="The React Framework for Production"
          image="/static/Resources_logo/Nextjs-logo.svg"
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
.section {
  background: #f3f3f3;
}

.section-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  margin-top: 5%;
}

.card {
  border-radius: 10px;
  padding: 1rem;
  background: white;
}
</style>
