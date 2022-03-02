<template>
  <footer id="footer">
    <div id="top-footer">
      <div id="goto-btn-container">
        <i id="goto-btn" @click="gotoTop()" class="fas fa-sort-up"></i>
      </div>
      <footer id="footer-container">
        <!-- SOCIAL MEDIA: Github, Twitter, Instagram, etc... -->
        <h2 id="follow">Follow Me!</h2>
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
  </footer>
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
  background: rgb(255, 241, 42);
  /* #c9050b */
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

.contactme {
  color: #ffff;
  font-weight: bold;
}

#bottom-footer {
  background: #a51212;
  padding: 1.5rem;
}
</style>
