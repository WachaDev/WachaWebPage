<template>
  <section class="section">
    <div>
      <Title text="Let's start your idea" />
    </div>
    <div class="paragraph-container">
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam magni
        totam assumenda repellendus aperiam soluta nesciunt deserunt? Unde, quia
        repellendus!
      </p>
    </div>
    <div class="button-container">
      <button>Let's Go</button>
    </div>
  </section>
</template>

<script>
import Title from "../Title";

export default {
  components: {
    Title
  }
};
</script>

<style scoped>
.section {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.paragraph-container {
  text-align: center;
  margin-top: 2rem;
  margin-right: 12rem;
  margin-left: 12rem;
}

.button-container {
  margin-top: 2rem;
}

.button-container button {
  width: 12rem;
  cursor: pointer;
  background: #c9050b;
  color: white;
  padding: 0.5rem;
  border: none;
  border-radius: 100px;
  font-size: 1.2rem;
  font-family: "Fira Sans";
  box-shadow: -6px 6px rgba(0, 0, 0, 10);
}

</style>
