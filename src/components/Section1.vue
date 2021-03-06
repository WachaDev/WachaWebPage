<template>
  <section class="section" :class="{ 'boxShadowRight': styles.boxShadowReverse }">
    <div class="section-left-side" :class="{ 'toRight': styles.sideReverse }">
      <div class="title-container">
        <h1 class="title">{{ content.title }}</h1>
      </div>
      <div class="paragraph-container">
        <p class="paragraph ">{{ content.paragraph }}</p>
      </div>
    </div>
    <div class="section-right-side" :class="{ 'toLeft': styles.sideReverse }">
      <img class="image" :src="content.picture" alt="" />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    styles: {
      boxShadowReverse: Boolean,
      sideReverse: Boolean
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
    },
  }
};
</script>

<style scoped>
.section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: #ffff;
  border: 5px double #ea2027;
  border-radius: 25px;
  padding: 6rem;
  margin-bottom: 6rem;
  box-shadow: -2.7rem 2.7rem #c71919;
}

.boxShadowRight {
  box-shadow: 2.7rem 2.7rem #c71919;
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
  padding: 1rem;
}

.image {
  width: 400px;
  height: 300px;
  border-radius: 15rem;
}

.paragraph {
  font-size: 1.1rem;
  text-align: center;
}
</style>
