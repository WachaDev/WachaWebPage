<template>
  <section class="section">
    <div class="section-container">
      <div class="section-left-side">
        <Title :text="title" />
        <div class="subtitle-container">
          <h1 class="subtitle">
            {{ subtitle }}
          </h1>
        </div>
        <div class="title-container"></div>
        <div class="paragraph-container">
          <p class="paragraph">{{ paragraph }}</p>
        </div>
      </div>
      <div class="section-right-side">
        <img class="image" :src="picture" alt="" />
      </div>
    </div>
  </section>
</template>

<script>
import Title from "../components/Title";
export default {
  components: {
    Title
  },
  props: {
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    paragraph: {
      type: String,
      required: true
    },
    picture: {
      type: String,
      required: true
    }
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
}

.subtitle {
  font-family: "Fira Sans";
  margin-bottom: 0.5rem;
}

.section-right-side {
  display: flex;
  flex-direction: column;
  align-content: center;
}

.image {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}

.paragraph {
  font-size: 1.1rem;
  text-align: left;
}
</style>
