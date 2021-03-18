<template>
    <v-container fill-height fluid >
      <v-row justify="center"><NoProductsComp/></v-row>
      <v-row justify="center"><NoCustomersComp/></v-row>       
    </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NoCustomersComp from "../components/NoCustomersComp.vue";
import NoProductsComp from "../components/NoProductsComp.vue";

@Component({
  components: {
    NoCustomersComp,
    NoProductsComp,
  },
})
export default class extends Vue {}
</script>
