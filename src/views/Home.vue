<template>
  <div class="main-content">
    <!-- Posible showcase in home route? -->
    <section id="dashboard">
      <div id="dashboard-left-side">
        <div class="logo">
          <img src="" alt="" />
        </div>
        <h1 class="brand-name"></h1>
      </div>

      <div id="dashboard-right-side">
        <div id="dashboard-title-contaier">
          <h1 id="dashboard-title">What Are You Looking For?</h1>
        </div>
        <div class="contact-for">
          <button class="developer-btn" v-on:click="redirect('/developer')">
            Developer
          </button>
          <button class="podcaster-btn" v-on:click="redirect('/podcaster')">
            Podcaster
          </button>
          <button class="illustrator-btn" v-on:click="redirect('/illustrator')">
            Illustrator
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    redirect: function(path) {
      this.$router.push({ path });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Anton&family=Lobster&family=Righteous&display=swap");

#dashboard {
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: #ea2027;
  padding: 2rem;
}

#dashboard-left-side {
  display: flex;
  justify-content: center;
}

#dashboard-right-side {
  display: grid;
  /* background: #ffff; */
}

#dashboard-title {
  font-size: 2rem;
  text-align: left;
  color: #ffff;
  margin-bottom: 2rem;
}

.contact-for {
  display: flex;
  flex-direction: column;
}

.contact-for button {
  display: block;
  font-size: 2rem;
  background: #ea2027;
  color: white;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border-color: white;
  border-width: 7px;
  border-radius: 100px;
  border-style: solid;
}

/* .contact-for button:hover,
.contact-for button:focus,
.contact-for button:active {

} */

.developer-btn {
  font-family: "Anton", sans-serif;
  width: 16rem;
  font-size: 5px;
}

.podcaster-btn {
  font-family: "Righteous", cursive;
  width: 16rem;
}

.illustrator-btn {
  font-family: "Lobster", cursive;
  width: 16rem;
}
</style>
