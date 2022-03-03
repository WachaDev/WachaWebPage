<template>
  <nav id="navbar">
    <ul id="logo-container">
      <li class="logo">
        LOGO
      </li>
    </ul>

    <ul id="routes-container">
      <div class="route-container">
        <li>
          <router-link class="route" to="/">HOME</router-link>
        </li>
      </div>
      <li>
        <div class="route-container">
          <router-link class="route" to="/puto"
            >SERVICES
            <font-awesome-icon icon="fa-solid fa-angle-down" />
          </router-link>
        </div>
      </li>
      <li>
        <div class="route-container">
          <router-link class="route" to="/tito">CONTACT</router-link>
        </div>
      </li>
      <li>
        <router-link class="route" to="/ju">SUPPORT</router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
#navbar {
  position: sticky;
  top: 0;
  display: flex;
  justify-content: flex-end;
  padding-left: 1rem;
  padding-top: 3px;
  padding-bottom: 3px;
  padding-right: 1rem;
  font-weight: 700;
  background: #f90716;
  z-index: 99;
}

.logo {
  color: #ffff;
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

.route-container {
  border-right: 2px solid white;
}

.route {
  color: #ffff;
  padding: 0.5rem;
  margin: 8px;
}

.router-link-exact-active {
  color: black;
  background: rgb(255, 241, 42);
  border-radius: 25px;
  box-shadow: -4px 4px black;
}
</style>
