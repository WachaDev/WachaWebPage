<template>
  <div id="footer">
    <div id="top-footer">
      <div id="goto-btn-container">
        <i id="goto-btn" @click="gotoTop()" class="fas fa-sort-up"></i>
      </div>
      <footer id="footer-container">
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
        <div class="contactme">
          <p>Personal e-mail: josemrr27@gmail.com</p>
          <p>Business e-mail: wachamuli@businessman.com</p>
          <p>Phone: 000-123-1234</p>
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
#footer {
  background: #c9050b;
}

#goto-btn-container {
  padding-top: 0.3rem;
  margin-bottom: 0.3rem;
}

#goto-btn {
  color: #ffff;
  cursor: pointer;
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

.contactme {
  color: #ffff;
  font-weight: bold;
}

#bottom-footer {
  background: #a51212;
  padding: 1.5rem;
}
</style>
