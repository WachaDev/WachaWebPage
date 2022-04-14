<template>
  <div class="section">
    <Title text="Check my works!" />
    <div class="galleries-container">
      <GalleryCard
        route="/developer"
        image="/static/placeholders/code.jpg"
        title="CodeMadness"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, voluptas?"
        fontFamily="Anton"
      />
      <GalleryCard
        route="/podcaster"
        image="/static/placeholders/podcast.jpg"
        title="Talking Sh*t"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, voluptas?"
        fontFamily="Righteous"
      />
      <GalleryCard
        route="/illustrator"
        image="/static/placeholders/draw.jpg"
        title="Magnum Opus"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, voluptas?"
        fontFamily="Lobster Two"
      />
    </div>
  </div>
</template>

<script>
import GalleryCard from "../GalleryCard";
import Title from "../Title";

export default {
  components: {
    GalleryCard,
    Title
  }
};
</script>

<style scoped>
.galleries-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}
</style>
