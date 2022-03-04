<template>
  <footer id="footer">
    <div id="top-footer">
      <div id="goto-btn-container">
        <i id="goto-btn" @click="gotoTop()" class="fas fa-sort-up"></i>
      </div>
      <div class="logo">
        <div>LOGO</div>
      </div>
        <div class="summary-container">
          <p class="summary">
            <!-- A quick description of what this site is, e.x: this a portafolio about... -->
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores
            quam eveniet voluptatem sunt, voluptatibus eos nihil iure obcaecati
            asperiores cupiditate sequi tempora adipisci, quasi distinctio
            incidunt! Recusandae blanditiis quasi sequi officiis ratione, optio
            ea! Sed accusantium tempora in officiis nam.
          </p>
        </div>
        <div class="social-container">
          <ul>
            <li><i id="youtube-icon" class="fab fa-youtube social-icon"></i></li>
            <li><i id="github-icon" class="fab fa-github social-icon"></i></li>
            <li><i id="twitter-icon" class="fab fa-twitter social-icon"></i></li>
            <li><i id="instagram-icon" class="fab fa-instagram social-icon"></i></li>
          </ul>
        </div>

      <div>
        <!-- Temporal -->
        <h5 class="host">Hosted on Heroku</h5>
        <h5>Legal · Privacy · Cookies</h5>
      </div>
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
  position: absolute;
  bottom: 0;
  background:#212121;
  height: auto;
  width: 100%;
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

.logo {
  color: rgb(236, 236, 236);
}

.summary-container {
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-right: 15rem;
  margin-left: 15rem;
}

.summary {
  text-align: center;
}

.social-container {
  margin: 1rem;
}

.social-container li i:hover {
  color: #ffff;
}

.social-container li {
  display: inline;
  list-style: none;
  margin: 0.5rem;
  cursor: pointer;
}

.social-container li i {
  font-size: 2rem;
  color: rgb(236, 236, 236);
}

.host {
  color: rgb(236, 236, 236);
}

#bottom-footer {
  background: #a51212;
  padding: 1.5rem;
}
</style>
