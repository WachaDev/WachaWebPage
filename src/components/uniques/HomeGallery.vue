<template>
  <div class="section">
    <Title text="Check my works!" />
    <div class="galleries-container">
      <GalleryCard
        route="/developer"
        image="../../../static/codePlaceholder.jpg"
        title="CodeMadness"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, voluptas?"
        font="Anton"
      />
      <GalleryCard
        route="/podcaster"
        image="../../../static/podcastPlaceholder.jpg"
        title="Talking Sh*t"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, voluptas?"
        font="Righteous"
      />
      <GalleryCard
        route="/illustrator"
        image="../../../static/drawPlaceholder.jpg"
        title="Magnum Opus"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur, voluptas?"
        font="Lobster"
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
