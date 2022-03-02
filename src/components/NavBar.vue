<template>
  <nav id="navbar">
    <ul id="logo-container">
      <li>
        <router-link class="route" to="/">
          WoW
        </router-link>
      </li>
    </ul>

    <ul id="routes-container">
      <li>
        <router-link class="route" to="/#">HOME</router-link>
      </li>
      <li class="route">
        JOB
      </li>
      <li>
        <router-link class="route" to="/#">CONTACT</router-link>
      </li>
      <li>
        <router-link class="route" to="/#">SUPPORT</router-link>
      </li>
    </ul>

  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
#navbar {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-left: 1rem;
  padding-right: 1rem;
}


li {
  list-style: none;
}

#navbar {
  position: fixed;
  font-weight: 700;
  width: 100%;
  background: #F90716;
  z-index: 99;
}

#logo-container {
  display: flex;
  justify-content: left;
  padding: 1rem;
}

#routes-container {
  display: flex;
  justify-content: right;
  padding: 1rem;
}

.route {
  color: #ffff;
  margin-left: 1rem;
}

</style>
