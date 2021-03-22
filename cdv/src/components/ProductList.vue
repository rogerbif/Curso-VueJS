<template>
  <div>

    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12 v-for="product in products" :key="product.id">
          <v-card class="mx-auto" max-width="365">
            <v-container fluid grid-list-lg>
              <v-layout row>
                <v-flex xs9>
                  <div>
                    <div class="subheading font-weight-medium">
                      {{ product.name }}
                    </div>
                    <div>{{ product.description }}</div>
                  </div>
                </v-flex>
                <v-flex xs3>
                  <v-img
                    contain
                    :src="`/thumbnails/${product.baseImageName}.png`"
                    :srcset="`/thumbnails/${product.baseImageName}.png 1x,
                             /thumbnails/${product.baseImageName}@2x.png 2x`"
                    height="72px"
                    transition="false"
                  ></v-img>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>

      </v-layout>
    </v-container>

  </div>
</template>

<script>
export default {
  props: { products: Array, },
  data() {
    return {
      //
    }
  },
}
</script>
