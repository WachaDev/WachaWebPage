<template>
  <nav id="navbar">
    <ul id="logo-container">
      <li>
        <router-link class="route" to="/">
          <font-awesome-icon icon="fa fa-cannabis"/>
        </router-link>
      </li>
    </ul>

    <ul id="routes-container">
      <li id="alo">
        <router-link class="route" to="/">HOME</router-link>
      <li>
        <router-link class="route" to="/">JOB</router-link>
      </li>
      <li>
        <router-link class="route" to="/">CONTACT</router-link>
      </li>
      <li>
        <router-link class="route" to="/">SUPPORT</router-link>
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
  position: sticky;
  top: 0;
  display: flex;
  justify-content: flex-end;
  padding-left: 1rem;
  padding-right: 1rem;
  font-weight: 700;
  background:#F90716;
  z-index: 99;
}

li {
  list-style: none;
}

#logo-container {
  margin-right: auto;
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

.current-route {
  color: rgb(255, 241, 42);
}

</style>
