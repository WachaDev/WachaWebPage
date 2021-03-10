<template>
  <div id="footer-container">
    <div id="top-footer">
      <div id="goto-btn-container">
        <i id="goto-btn" v-on:click="gotoTop()" class="fas fa-sort-up"></i>
      </div>
      <footer id="footer">
        <!-- SOCIAL MEDIA: Github, Twitter, Instagram, etc... -->
        <h2 id="follow">Follow Me!</h2>
        <div class="social-icons-container">
          <div class="social-icons">
            <a href="#">
              <i id="youtube-icon" class="fab fa-youtube social-icon"></i>
            </a>
            <a href="https://github.com/">
              <i id="github-icon" class="fab fa-github social-icon"></i>
            </a>
            <a href="#">
              <i id="twitter-icon" class="fab fa-twitter social-icon"></i>
            </a>
            <a href="#">
              <i id="instagram-icon" class="fab fa-instagram social-icon"></i>
            </a>
          </div>
        </div>
        <div class="email-container">
          <pre class="email">
Personal e-mail: josemrr27@gmail.com    Business e-mail: wachamuli@businessman.com</pre
          >
        </div>
      </footer>
    </div>
    <div id="bottom-footer">
      <i class="far fa-copyright"></i> copyright privacy
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    gotoTop: function() {
      scroll({
        top: window.top,
        behavior: "smooth"
      });
    }
  }
};
</script>

<style scoped>
#footer-container {
  background: #ea2027;
}

#goto-btn-container {
  padding-top: 0.3rem;
  margin-bottom: 0.3rem;
}

#goto-btn {
  color: #ffff;
  cursor: pointer;
}

#footer {
  padding-bottom: 3rem;
  text-align: center;
  /* display: flex; */
}

#top-footer {
  text-align: center;
  padding: 1rem;
}

#follow {
  font-family: "Fugaz One";
  font-size: 1.4rem;
  color: #ffff;
}

.social-icons-container {
  margin-left: 46rem;
  margin-right: 46rem;
}

.social-icons {
  display: flex;
  justify-content: space-between;
  font-size: 2rem;
  color: #ffff;
}

.social-icon {
  color: #ffff;
}

#bottom-footer {
  background: #c71919;
  font-size: 1rem;
  padding: 2rem;
  /* #c71919 */
}

.email-container {
  text-align: center;
}

.email {
  color: #ffff;
  font-size: 1rem;
  font-weight: bold;
  position: relative;
  right: 10px;
  top: 40px;
  bottom: 10px;
}
</style>
