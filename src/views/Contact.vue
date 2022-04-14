<template>
  <section class="section">
    <Title class="title" text="Contact me!" />
    <div class="contacts-container">
      <div class="form-container">
        <form action="#">
          <div class="top-controls">
            <div>
              <label class="control-label" for="">Name</label>
              <input type="text" placeholder="Your name" required autofocus />
            </div>
            <div>
              <label class="control-label" for="">Email</label>
            <input type="text" placeholder="name@example.com" required />
            </div>
          </div>
          <textarea
            name="textarea"
            id="textarea"
            cols="30"
            rows="10"
            placeholder="A quick message"
            required
          ></textarea>
          <button class="submit-btn" type="submit">SUBMIT</button>
        </form>
      </div>

      <div class="emails">
        <h1 class="subtitle">Find me</h1>
        <p>
          You can do it through my social networks or by writing an email to the
          corresponding address
        </p>
        <!-- TODO: This could be a component -->
        <ul class="social-icons">
          <li><i id="youtube-icon" class="fab fa-youtube social-icon"></i></li>
          <li><i id="github-icon" class="fab fa-github social-icon"></i></li>
          <li><i id="twitter-icon" class="fab fa-twitter social-icon"></i></li>
          <li>
            <i id="instagram-icon" class="fab fa-instagram social-icon"></i>
          </li>
        </ul>
        <h4 class="subtitle">For your awesome project</h4>
        <p class="address">hello@wachaout.com</p>
        <h4 class="subtitle">Join Us</h4>
        <p class="address">hiring@wachaout.com</p>
        <h4 class="subtitle">Fizz-Buzz</h4>
        <p class="address">fizzbuzz@wachaout.com</p>
      </div>
    </div>
  </section>
</template>

<script>
import Title from "../components/Title";

export default {
  components: {
    Title
  }
};
</script>

<style scoped>
.title {
  margin-bottom: 1rem;
}

.contacts-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.form-container {
  display: flex;
  flex-direction: column;
  border-right: 3px solid black;
  padding-right: 1rem;
}

.form-container input,
.form-container textarea,
.form-container button {
  font-size: 1.1rem;
  width: 100%;
}

.top-controls {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  margin-bottom: 8px;
}

.top-controls input {
  font-size: 1.1rem;
  width: 100%;
  padding-left: 8px;
  padding-bottom: 1rem;
  padding-top: 1rem;
}

#textarea {
  margin-bottom: 8px;
  padding-bottom: 1rem;
  padding-top: 1rem;
  padding-left: 8px;
  font-family: "Fira Sans";
}

.submit-btn {
  cursor: pointer;
  line-height: normal;
  background-color: black;
  color: white;
  padding: 1rem;
}

.control-label {
  color: black;
}

.emails {
  padding: 1rem;
  align-self: center;
}

.subtitle {
  color: black;
}

.social-icons {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

.social-icons * {
  display: inline;
  font-size: 2rem;
  color: black;
  margin-right: 0.5rem;
}

.address {
  margin-bottom: 0.5rem;
}
</style>
