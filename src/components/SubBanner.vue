<template>
  <section class="subbanner section">
    <h1 class="title">{{ title }}</h1>
  </section>
</template>

<script>
export default {
  props: { title: String }
}
</script>


<style scoped>
.subbanner {
  font-size: 3rem;
  background: #F90716;
}

.title {
  font-family: "Anton";
  text-shadow: -6px 6px rgb(0, 0, 0, 0.7);
  color: #ffff;
  text-align: center;
  letter-spacing: 1px;

}

</style>
