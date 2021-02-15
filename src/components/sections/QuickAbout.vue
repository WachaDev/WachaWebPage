<template>
  <div>
    <section class="quick-about">
      <article class="article">
        <!-- Similar to "Who Am I" but oriented to the specific job. -->
        <h1 class="title">Quick About</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, quae
          eligendi perferendis praesentium itaque iure sit voluptates velit,
          voluptatem asperiores aliquam non! Molestiae explicabo ullam
          perspiciatis culpa laborum qui expedita voluptatibus laboriosam
          architecto, accusantium omnis perferendis suscipit libero. Nobis
          temporibus sapiente itaque cumque eaque similique ipsam magni animi
          harum, optio reiciendis iure quis, ab reiciendis? Ex, quibusdam
          exercitationem veniam ratione eaque veritatis autem magni ducimus
          eius, ad natus explicabo voluptas? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Nisi hic quas et, earum enim accusamus,
          architecto numquam odit dolorem sapiente esse sit itaque quia ducimus
          vel, obcaecati alias porro aliquam nemo dolore asperiores in tenetur?
          Reprehenderit odit suscipit similique, consequuntur quos repellat
          sapiente. Dicta vitae debitis accusantium modi asperiores! Fugiat ut
          nihil
        </p>
      </article>
      <img src="https://picsum.photos/id/237/200/300" alt="" />
    </section>
  </div>
</template>

<style scoped>
.quick-about {
  display: grid;
  margin-top: 1rem;
  margin-left: 5%;
  margin-right: 5%;
  grid-template-columns: 1fr 1fr;
  background: #ffff;
  /* border: 1px solid black; TODO: Temporal, remove this */
  padding: 4%;
}

.quick-about img {
  display: block;
  border-radius: 8%;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}

.title {
  text-align: center;
  font-size: 5rem;
}
</style>
