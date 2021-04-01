<template>
  <div class="main-content">
    <Section
      :styles="{
        boxShadowReverse: false,
        sideReverse: false
      }"
      :content="{
        title: 'Experiencie',
        paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Culpa nam quam, dolorem pariatur placeat corrupti inventore
          maiores. Voluptate alias hic mollitia incidunt adipisci,
          consectet quasi. Aut assumenda consectetur vero dicta fugit
          placeat exercitationem ea necessitatibus, odio`,
        picture:
          'https://i.picsum.photos/id/1025/4951/3301.jpg?hmac=_aGh5AtoOChip_iaMo8ZvvytfEojcgqbCH7dzaz-H8Y'
      }"
    />
  </div>
</template>

<script>
import Section from "../components/Section1";
import Dashboard from "../components/sections/Dashboard";

export default {
  components: {
    Section,
    Dashboard
  }
};
</script>
