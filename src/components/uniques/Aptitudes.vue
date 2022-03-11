<template>
  <section id="aptitudes" class="section">
    <Title :text="'Why me?'"/>
    <div id="aptitudes-container">
      <div id="skilled">
        <div class="aptitude-container">
          <div class="icon-container fa-4x">
            <font-awesome-icon icon="fa-regular fa-lightbulb" />
          </div>
          <div class="subtitle-container">
            <h3 class="subtitle">Skilled</h3>
          </div>
          <div class="paragraph-container">
            <p class="paragraph">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              optio sapiente earum aperiam voluptas sed quo sit? Ex, expedita
              cupiditate.
            </p>
          </div>
        </div>
      </div>

      <div id="responsible">
        <div class="aptitude-container">
          <div class="icon-container fa-4x">
            <font-awesome-icon icon="fa-regular fa-calendar-check" />
          </div>
          <div class="subtitle-container">
            <h3 class="subtitle">Responsible</h3>
          </div>
          <div class="paragraph-container">
            <p class="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum earum
              laborum consequatur perspiciatis officiis tempore atque a, eius.
            </p>
          </div>
        </div>
      </div>

      <div id="passionate">
        <div class="aptitude-container">
          <div class="icon-container fa-4x">
            <font-awesome-icon icon="fa-solid fa-fire" />
          </div>
          <div class="subtitle-container">
            <h3 class="subtitle">Passionate</h3>
          </div>
          <div class="paragraph-container">
            <p class="paragraph">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
              dolores nam ullam officiis maiores perferendis ab repellat
              asperiores, incidunt a.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Title from "../Title"

export default {
  components: {
    Title
  }
}
</script>


<style scoped>
#aptitudes-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 29px;
  text-align: center;
  margin-top: 5%;
}

.aptitude-container {
  padding-top: 0.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.subtitle-container {
  margin-bottom: 10px;
}

.subtitle {
  font-family: "Fira Sans";
  font-size: 1.5rem;
  color: black;
}

.icon-container {
  margin-bottom: 0.5rem;
  color: #c9050b;
}
</style>
