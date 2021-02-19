<template>
  <div class="staticHero">
    <v-img :src="require(`@/assets/images/${image}`)">
      <v-row align="end" class="lightbox white--text pa-2 fill-height">
        <v-col>
          <v-container>
            <div class="headline">{{text}}</div>
          </v-container>
        </v-col>
      </v-row>
    </v-img>
  </div>
</template>


<script>
export default {
  props: {
    image: {},
    text: {}
  }
}
</script>