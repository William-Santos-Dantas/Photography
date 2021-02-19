<template>
  <v-main>
    <Hero-Component :image="image" text="Contact Us" />
    <div class="block">
      <v-container>
        <Form-Component />
      </v-container>
    </div>
    <div class="googlemap">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16705.802661855836!2d-0.14290489950731525!3d51.50711704027593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon!5e0!3m2!1sen!2suk!4v1577041400110!5m2!1sen!2suk"
        width="100%"
        height="450"
      ></iframe>
    </div>
  </v-main>
</template>

<script>
import HeroComponent from "../Components/Hero";
import FormComponent from "./Components/Form";
export default {
  components: {
    HeroComponent,
    FormComponent
  },
  data: () => ({
    image: "img14.jpg",
  }),
};
</script>