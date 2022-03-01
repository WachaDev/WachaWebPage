<template>
  <div id="socialmedia" class="section">
    <div id="socialmedia-title-container">
      <h1 id="socialmedia-title">Follow me!</h1>
    </div>
      <div class="social-icons-container">
         <a href="#">
           <div>
           <i id="youtube-icon" class="fab fa-youtube social-icon"></i>
           Wachamuli
           </div>
         </a>
         <a href="https://github.com/">
           <i id="github-icon" class="fab fa-github social-icon"></i>
           WachaDev
         </a>
         <a href="#">
           <i id="twitter-icon" class="fab fa-twitter social-icon"></i>
           @WachaChito
         </a>
         <a href="#">
           <i id="instagram-icon" class="fab fa-instagram social-icon"></i>
           @WachaIG
         </a>
      </div>
  </div>
</template>

<style scoped>
#socialmedia-title {
  font-family: "Fugaz One";
  font-size: 1.4rem;
  color: red;
}

.social-icons-container {
  display: flex;
  justify-content: space-between;
  color: #ffff;
}

.social-icon {
  color: red;
  font-size: 8rem;
}
</style>