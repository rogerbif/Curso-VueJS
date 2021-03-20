<template>
  <div>
    <v-container fluid grid-list-lg>
      <v-layout row wrap>
        <template>
          <v-card class="pa-4 mx-auto" max-width="365" min-height="485">
            <v-form>
              <v-text-field
                label="Nome"
                placeholder="Nome do Produto"
                required
              ></v-text-field>

              <v-slide-group multiple show-arrows>
                <v-slide-item v-slot="{ active, toggle }">
                  <v-card
                    :color="active ? undefined : 'grey lighten-1'"
                    class="ma-4"
                    height="100"
                    width="100"
                    @click="toggle"
                  >
                    <v-row class="fill-height" align="center" justify="center">
                      <v-scale-transition>
                        <v-icon
                          v-if="active"
                          color="white"
                          size="48"
                          v-text="'mdi-close-circle-outline'"
                        ></v-icon>
                      </v-scale-transition>
                    </v-row>
                  </v-card>
                </v-slide-item>

                <v-slide-item v-slot="{ active, toggle }">
                  <v-card
                    :color="active ? undefined : 'grey lighten-1'"
                    class="ma-4"
                    height="100"
                    width="100"
                    @click="toggle"
                  >
                    <v-row class="fill-height" align="center" justify="center">
                      <v-scale-transition>
                        <v-icon
                          v-if="active"
                          color="white"
                          size="48"
                          v-text="'mdi-close-circle-outline'"
                        ></v-icon>
                      </v-scale-transition>
                    </v-row>
                  </v-card>
                </v-slide-item>

                <v-slide-item v-slot="{ active, toggle }">
                  <v-card
                    :color="active ? undefined : 'grey lighten-1'"
                    class="ma-4"
                    height="100"
                    width="100"
                    @click="toggle"
                  >
                    <v-row class="fill-height" align="center" justify="center">
                      <v-scale-transition>
                        <v-icon
                          v-if="active"
                          color="white"
                          size="48"
                          v-text="'mdi-close-circle-outline'"
                        ></v-icon>
                      </v-scale-transition>
                    </v-row>
                  </v-card>
                </v-slide-item>
              </v-slide-group>

              <v-file-input
                multiple
                small-chips
                truncate-length="15"
              ></v-file-input>

              <v-text-field
                label="Código"
                placeholder="Cód. ou automático"
                outlined
                append-icon="mdi-barcode"
                required
              ></v-text-field>

              <v-text-field
                label="Preço"
                placeholder="R$ 9,99"
                required
              ></v-text-field>

              <v-row class="fill-height" align="center" justify="center">
                <v-btn outlined tile>
                  Mais campos
                  <v-icon right dark> mdi-plus </v-icon></v-btn
                >

                <v-btn color="primary" tile>
                  Salvar <v-icon right dark> mdi-cloud-upload </v-icon></v-btn
                >
              </v-row>
            </v-form>
          </v-card>
        </template>
      </v-layout>
    </v-container>
  </div>

  <!-- <v-form>
    <v-row>
      <v-col cols="12" sm="10" md="8" lg="6">
        <v-text-field
          label="Nome"
          placeholder="Nome do Produto"
          required
        ></v-text-field>

        <v-text-field
          label="Código"
          placeholder="Cód. ou automático"
          outlined
          append-icon="mdi-barcode"
          required
        ></v-text-field>

        <v-text-field
          label="Preço"
          placeholder="R$ 9,99"
          required
        ></v-text-field>

        <v-btn color="success" class="mr-4"> Mais campos </v-btn>

        <v-btn color="success" class="mr-4"> Salvar </v-btn>
      </v-col>
    </v-row>
  </v-form> -->
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class NewProductsComp extends Vue {}
</script>
