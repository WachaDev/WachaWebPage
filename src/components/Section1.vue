<template>
  <section
    class="section"
    :class="{
      boxShadowRight: styles.boxShadowReverse,
      box: styles.altBackground
    }"
  >
  <Title text="Who am I?"/>
    <div class="section-container">
      <div class="section-left-side" :class="{ toRight: styles.sideReverse }">
        <div class="title-container">
        </div>
        <div class="paragraph-container">
          <p class="paragraph">{{ content.paragraph }}</p>
        </div>
      </div>
      <div class="section-right-side" :class="{ toLeft: styles.sideReverse }">
        <img class="image" :src="content.picture" alt="" />
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
    styles: {
      boxShadowReverse: Boolean,
      sideReverse: Boolean,
    },
    content: {
      title: {
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
  }
};
</script>

<style scoped>
.section {
  /* background: #f3f3f3; */
}
.section-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.toLeft {
  grid-column: 1/1;
  grid-row: 1;
}

.toRight {
  grid-column: 2/2;
}

.title {
  font-family: "Fugaz One";
  color: #ea2027;
  font-size: 3rem;
  text-align: center;
  margin: 1rem;
}

.section-left-side {
  padding: 1rem;
}

.section-right-side {
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 1rem;
}

.image {
  width: 400px;
  height: 300px;
  border-radius: 10px;
}

.paragraph {
  font-size: 1.1rem;
  text-align: center;
}
</style>
