<template>
  <div class="side-bar-icon">
    <div class="side-icon-container">
      <i @click="openSideBar()" class="fas fa-align-justify"></i>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    openSideBar: function() {
      const sideBar = document.getElementById("side-bar");
      sideBar.style.width = "300px";
    },
  }
}
</script>


<style scoped>
.side-bar-icon {
  position: fixed;
  width: 100px;
  height: 50px;
  background: #a51212;
  margin-top: 25px;
  /*  */
  box-shadow: rgba(0, 0, 0, 0.7) 0px 5px 15px;
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
}

.side-icon-container {
  margin-top: 0.5rem;
  margin-left: 3rem;
}

i {
  font-size: 2rem;
  color: #ffff;
  cursor: pointer;
}
</style>
