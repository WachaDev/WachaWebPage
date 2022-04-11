<template>
  <section class="section">
    <Title text="Do I Need a Web Page?" />
    <div class="top-container">
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, sapiente.
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda fuga
        amet corporis aperiam et nihil rerum accusamus officia excepturi quia?
      </p>
    </div>
    <div class="cite-container">
      <cite class="cite">
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
        doloremque Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Ratione. magni adipisci ut aut iste illo, commodi cum rerum atque"
      </cite>
      <p class="author"> -Ernst Pennyworth</p>

    
    </div>
  </section>
</template>

<script>
import Title from "../components/Title";

export default {
  components: {
    Title
  }
};
</script>

<style scoped>
.top-container {
  margin-top: 2.5rem;
}
.cite-container {
  margin-top: 15px;
  text-align: right;
}

.cite-container {
  margin-left: 30rem;
}

.author {
  margin-top: 1rem;
}
</style>
