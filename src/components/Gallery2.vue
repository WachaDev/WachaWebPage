<template>
  <section id="gallery2" class="section">
    <div>
      <h1 class="title">Current Works</h1>
    </div>
    <div class="gallery-container">
      <div>
        <div class="picture-container">
          <img
            class="project-picture"
            src="https://i.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68"
            alt=""
          />
        </div>
        <div class="date">01/01/21</div>
        <p class="description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione,
          quis! Earum, praesentium corporis voluptatibus minus quae natus? Quia,
          ipsam et!
        </p>
        <button class="read-more-btn">
          Read more <i class="fas fa-chevron-right"></i>
        </button>
      </div>

      <div>
        <div class="picture-container">
          <img
            class="project-picture"
            src="https://i.picsum.photos/id/1000/5626/3635.jpg?hmac=qWh065Fr_M8Oa3sNsdDL8ngWXv2Jb-EE49ZIn6c0P-g"
            alt=""
          />
        </div>
        <div class="date">19/01/21</div>
        <p class="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam et
          illum quae animi. Explicabo pariatur provident, dolorem necessitatibus
          dolorum molestiae!
        </p>
        <button class="read-more-btn">
          Read more <i class="fas fa-chevron-right"></i>
        </button>
      </div>

      <div>
        <div class="picture-container">
          <img
            class="project-picture"
            src="https://i.picsum.photos/id/1003/1181/1772.jpg?hmac=oN9fHMXiqe9Zq2RM6XT-RVZkojgPnECWwyEF1RvvTZk"
            alt=""
          />
        </div>
        <div class="date">12/11/20</div>
        <p class="description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos odit
          accusamus dolorem, veritatis odio atque officiis perferendis
          dignissimos? Unde, repellat.
        </p>
        <button class="read-more-btn">
          Read more <i class="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
.title {
  padding: none;
  margin: none;
}

.gallery-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}

.picture-container {
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 8px solid #c9050b;
}

.description {
  margin-top: 20px;
  margin-bottom: 20px;
}

.project-picture {
  border-radius: 25px;
  width: 100%;
  height: 200px;
}

.read-more-btn {
  font-size: 1rem;
  font-weight: bold;
  border-style: none;
  color: #c9050b;
  background: #ffff;
}

i {
  color: #c9050b;
}
</style>
