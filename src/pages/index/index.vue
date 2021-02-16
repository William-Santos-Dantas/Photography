<template>
  <v-app>
    <AppBar-component />
    <v-content> </v-content>
  </v-app>
</template>

<script>
import AppBarComponent from "./components/AppBar";
export default {
  data(){
    return {
    }
  },
  components: {
    AppBarComponent,
  },
};
</script>