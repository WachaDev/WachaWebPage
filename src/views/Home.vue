<template>
  <div class="main-content">
    <Dashboard />
    <Aptitudes />
    <Section
      :content="{
        paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Culpa nam quam, dolorem pariatur placeat corrupti inventore
          maiores. Voluptate alias hic mollitia incidunt adipisci,
          consectet quasi. Aut assumenda consectetur vero dicta fugit
          placeat exercitationem ea necessitatibus, odio`,
        picture:
          'https://i.picsum.photos/id/1025/4951/3301.jpg?hmac=_aGh5AtoOChip_iaMo8ZvvytfEojcgqbCH7dzaz-H8Y'
      }"
    />
    <HomeGallery/>
    <!-- <Gallery2/>

    <Section
      :styles="{
        boxShadowReverse: true,
        sideReverse: true,
      }"
      :content="{
        title: 'Experience',
        paragraph: `Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Culpa ea doloremque veniam quibusdam eaque cum aliquid est.
          Molestiae sapiente expedita molestias harum, ab voluptate
          placeat eum temporibus, velit quod laborum!`,
        picture:
          'https://i.picsum.photos/id/1025/4951/3301.jpg?hmac=_aGh5AtoOChip_iaMo8ZvvytfEojcgqbCH7dzaz-H8Y'
      }"
    />

    <Gallery
      :styles="{
        boxShadowReverse: false
      }"
      :content="{
        title: 'Most Loved Works',
        images: [
          'https://picsum.photos/seed/picsum/200/300',
          'https://picsum.photos/200/300?grayscale',
          'https://picsum.photos/200/300/?blur=2',
          'https://picsum.photos/id/237/200/300',
          'https://picsum.photos/200/300.jpg',
          'https://www.fillmurray.com/640/360',
          'https://picsum.photos/id/870/200/300?grayscale&blur=2',
          'https://picsum.photos/id/870/200/300?grayscale&blur=2',
          'https://picsum.photos/id/870/200/300?grayscale&blur=2',
          'https://picsum.photos/id/870/200/300?grayscale&blur=2'
        ]
      }"
    /> -->
  </div>
</template>

<script>
import Dashboard from "../components/uniques/Dashboard";
import Aptitudes from "../components/uniques/Aptitudes";
import Section from "../components/Section1";
import HomeGallery from "../components/uniques/HomeGallery";


export default {
  components: {
    Dashboard,
    Aptitudes,
    HomeGallery,
    Section,
  }
};
</script>
